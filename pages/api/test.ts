import { router } from "@utils/app";

export default router().post(async (ctx) => {
  ctx.res.json({
    message: "ok",
  });
});
