import type { default as AjvValidator, Options as AjvOptions } from "ajv";
import { AwilixContainer } from "awilix";
import convict from "convict";
import type { NextApiRequest, NextApiResponse } from "next";
import type { App } from "./app";

// config: convict.Schema<T> | string, opts?: convict.Options

export type Container = AwilixContainer;
export type ValidatorOptions = AjvOptions;
export type Validator = AjvValidator;
export type ConfigOptions<T = any> = {
  schema: convict.Schema<T>;
  options?: convict.Options;
};
export type Config<T = any> = convict.Config<T>;

export type AppErrorHandler = (error: Error, ctx: Context) => Promise<void>;

export interface AppOptions<CONF = any> {
  validator?: AjvOptions;
  config?: ConfigOptions<CONF>;
  setErrorHandler?: AppErrorHandler;
}

export interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
  app: App;
}

export type RequestHandler = (ctx: Context) => Promise<void>;
export type Middleware = (ctx: Context, next: () => void) => Promise<void>;

export interface RouteOptions {}

// Public methods for setting route handlers associated with the corresponding
// HTTP method
export interface RoutableMethodSetters {
  get: (h: RequestHandler, options?: RouteOptions) => this;
  post: (h: RequestHandler, options?: RouteOptions) => this;
  put: (h: RequestHandler, options?: RouteOptions) => this;
  patch: (h: RequestHandler, options?: RouteOptions) => this;
  delete: (h: RequestHandler, options?: RouteOptions) => this;
  head: (h: RequestHandler, options?: RouteOptions) => this;
  options: (h: RequestHandler, options?: RouteOptions) => this;
  trace: (h: RequestHandler, options?: RouteOptions) => this;
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
