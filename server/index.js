const send = require("koa-send");
const Koa = require("koa");
const Router = require("koa-router");
const userAgent = require("koa-useragent");
const path = require("path");
const swig = require("swig");
const compression = require("koa-compress");
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/templates");

app.use(userAgent);
app.use(compression());
app.use((ctx, next) => {
  if (ctx.userAgent.isMobile) {
    ctx.redirect("http://m.muxi-tech.xyz");
  } else {
    next();
  }
});

router.get("/", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "first.html"));
  ctx.body = template({});
});

router.get("/product", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "home.html"));
  ctx.body = template({});
});

router.get("/intro", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "second.html"));
  ctx.body = template({});
});

router.get("/member", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "intro.html"));
  ctx.body = template({});
});

router.get("/join", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "join.html"));
  ctx.body = template({});
});

router.get(/^\/static(?:\/|$)/, async ctx => {
  let filepath = ctx.path.replace(/static\//, "");
  await send(ctx, filepath, {
    root: path.join(__dirname, "../dist")
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("listening on port 3000");
