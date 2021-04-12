import type { NextApiRequest, NextApiResponse } from "next";
import Boom from "boom";

let instance = null;

const bootstrap = async () => {};

export const app = () => {};

export const ctx = () => {
  /* noop */
};

export const rt = () => {};

export interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
}

export type RequestHandler = (ctx: Context) => Promise<void>;
export type Middleware = (ctx: Context, next: () => void) => Promise<void>;

// class Router {
//   middleware: Middleware[];

//   constructor() {
//     this.use = this.use.bind(this);
//   }

//   public use(middleware: Middleware) {
//     this.middleware.push(middleware);
//   }
// }

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

interface RoutableInternals extends RouteHandlers {
  allowedMethods: HTTPMethod[];
  runLifeCycle: RequestHandler;
}

async function methodNotAllowed(
  this: Routable & RoutableInternals,
  ctx: Context
) {
  console.log(this.allowedMethods);
  throw Boom.methodNotAllowed(
    `${ctx.req.method} is not allowed`,
    undefined,
    this.allowedMethods
  );
}

// function setRoute(
//   this: Routable & RoutableInternals,
//   route: keyof RouteHandlers,
//   setter: keyof RoutableMethodSetters,
//   method: HTTPMethod
// ) {
//   this.allowedMethods.push(method);
//   this[setter] = function (handler: RequestHandler) {
//     return this;
//   }.bind(this);
// }

export const factory = (): Routable => {
  const self = async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    const ctx = { req, res };
    self.runLifeCycle(ctx);
  } as Routable & RoutableInternals;

  self.runLifeCycle = async (ctx: Context): Promise<void> => {
    const route = `_${ctx.req.method}` as keyof RouteHandlers;

    let err: Error;

    try {
      await self[route](ctx);
    } catch (e) {
      err = e;
    }

    // the route handler threw an exception, handle it and send response
    if (err) {
      if (Boom.isBoom(err)) {
        // TODO set headers from error
        return ctx.res.status(err.output.statusCode).json(err.output.payload);
      }
      // TODO
      return;
    }

    // TODO make sure that the response was sent?
  };

  self.allowedMethods = [];

  const makeRoute = (httpMethod: HTTPMethod) => {
    const property: keyof RouteHandlers = `_${httpMethod}` as keyof RouteHandlers;
    const setter = httpMethod.toLowerCase() as keyof RoutableMethodSetters;

    self[setter] = function (handler: RequestHandler) {
      self.allowedMethods.push(httpMethod);
      self[property] = handler;
      return self;
    }.bind(self);
    self[property] = methodNotAllowed.bind(self);
  };

  makeRoute("GET");
  makeRoute("POST");
  makeRoute("PUT");
  makeRoute("PATCH");
  makeRoute("DELETE");
  makeRoute("HEAD");
  makeRoute("OPTIONS");
  makeRoute("TRACE");

  return self;
};
