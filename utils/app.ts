import { factory, asFunction } from "lib/next-api";
import avvio from "avvio";

export const getApp = factory((app) => {
  // app.container.register()
}, {});
export const router = getApp.router;
