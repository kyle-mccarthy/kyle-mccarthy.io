import { factory } from "@utils/app";

export default factory().post(async (ctx) => {
  ctx.res.json({
    message: "ok",
  });
});
