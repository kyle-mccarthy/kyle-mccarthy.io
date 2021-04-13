import type { NextApiRequest, NextApiResponse } from "next";
import Boom from "boom";
import assert from "assert";
import { createContainer, AwilixContainer } from "awilix";

let instance = null;

export type Container = AwilixContainer;
export interface AppOptions {}
export interface App {
  container: Container;
}

export interface Bootstrapped<T extends App> {
  getApp: () => Promise<T>;
  router: () => Routable;
}

export interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
  app: App;
}

export type RequestHandler = (ctx: Context) => Promise<void>;
export type Middleware = (ctx: Context, next: () => void) => Promise<void>;

// Public methods for setting route handlers associated with the corresponding
// HTTP method
export interface RoutableMethodSetters {
  get: (h: RequestHandler) => this;
  post: (h: RequestHandler) => this;
  put: (h: RequestHandler) => this;
  patch: (h: RequestHandler) => this;
  delete: (h: RequestHandler) => this;
  head: (h: RequestHandler) => this;
  options: (h: RequestHandler) => this;
  trace: (h: RequestHandler) => this;
}

export interface Routable extends RoutableMethodSetters {
  (req: NextApiRequest, res: NextApiResponse): Promise<void>;
  use: (middleware: Middleware) => this;
}

export type HTTPMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE";

// Properties mapping the HTTP method to the route handler, not intended for
// public usage
interface RouteHandlers {
  _GET: RequestHandler;
  _POST: RequestHandler;
  _PUT: RequestHandler;
  _PATCH: RequestHandler;
  _DELETE: RequestHandler;
  _HEAD: RequestHandler;
  _OPTIONS: RequestHandler;
  _TRACE: RequestHandler;
}

// Properties that are private/protected but available on the Routable object
interface RoutableInternals extends RouteHandlers {
  allowedMethods: HTTPMethod[];
  runLifeCycle: RequestHandler;
  middleware: Middleware[];
  _ALL?: RequestHandler;
  all: (h: RequestHandler) => this;
}

// async function methodNotAllowed(
//   this: Routable & RoutableInternals,
//   ctx: Context
// ) {
//   if (this._ALL) {
//     return this._ALL(ctx);
//   }
//   throw Boom.methodNotAllowed(
//     `${ctx.req.method} is not allowed`,
//     undefined,
//     this.allowedMethods
//   );
// }

async function defaultRouteHandler(
  this: Routable & RoutableInternals,
  ctx: Context
) {
  if (this._ALL) {
    return this._ALL(ctx);
  }
  throw Boom.notFound();
}

// TODO define what options are allowed when initializing the app instance

// creates the function that returns a bootstrapped app instance
export function bootstrap<T extends App>(
  options?: AppOptions
): Bootstrapped<T> {
  // get or create an instance of the app
  const getApp = async () => {
    if (instance === null) {
      instance = {
        container: createContainer(),
      };
    }
    return instance as T;
  };

  // factory function to create a route
  const router = (): Routable => {
    const self = async function (
      req: NextApiRequest,
      res: NextApiResponse
    ): Promise<void> {
      const app = await getApp();
      const ctx = { req, res, app };
      self.runLifeCycle(ctx);
    } as Routable & RoutableInternals;

    self.middleware = [];

    self.runLifeCycle = async (ctx: Context): Promise<void> => {
      const route = `_${ctx.req.method}` as keyof RouteHandlers;

      let err: Error;

      try {
        // run middleware
        await Promise.all(
          self.middleware.map(
            (m) =>
              new Promise<void>((resolve) => {
                return m(ctx, resolve);
              })
          )
        );

        // run route
        await self[route](ctx);
      } catch (e) {
        err = e;
      }

      // the route handler threw an exception, handle it and send response
      if (err) {
        if (!Boom.isBoom(err)) {
          err = Boom.boomify(err);
        }

        // required -- TS doesn't properly narrow the type without it
        assert(Boom.isBoom(err));

        Object.entries(err.output.headers).forEach(([key, value]) => {
          ctx.res.setHeader(key, value);
        });

        return ctx.res.status(err.output.statusCode).json(err.output.payload);
      }
    };

    // track the "allowed"/defined methods for the route, helps to set the Allow
    // header when a route isn't defined for a particular HTTP method
    self.allowedMethods = [];

    // create the default route handler and route setter for HTTP method
    const makeRoute = (httpMethod: HTTPMethod) => {
      const property: keyof RouteHandlers = `_${httpMethod}` as keyof RouteHandlers;
      const setter = httpMethod.toLowerCase() as keyof RoutableMethodSetters;

      self[setter] = function (handler: RequestHandler) {
        self.allowedMethods.push(httpMethod);
        self[property] = handler;
        return self;
      }.bind(self);
      self[property] = defaultRouteHandler;
    };

    makeRoute("GET");
    makeRoute("POST");
    makeRoute("PUT");
    makeRoute("PATCH");
    makeRoute("DELETE");
    makeRoute("HEAD");
    makeRoute("OPTIONS");
    makeRoute("TRACE");

    self.use = function (middleware: Middleware) {
      self.middleware.push(middleware);
    }.bind(self);

    self.all = function (handler: RequestHandler) {
      self._ALL = handler;
      return self;
    };

    return self;
  };

  return {
    getApp,
    router,
  };
}
