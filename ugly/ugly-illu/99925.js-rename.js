import path from "path";import jsdom from "jsdom";import consola from "consola";import { Builder, BundleBuilder, getPort, loadFixture, Nuxt, rp, waitFor } from "../utils";var port;

const url = e => "http://localhost:" + port + e;

var nuxt = null;
var builder = null;
var transpile = null;
var output = null;
var loadersOptions;
var vueLoader;
var postcssLoader;
describe("basic dev", () => {
  beforeAll(async () => {
    const e = await loadFixture("basic", { dev: true, debug: true, buildDir: ".nuxt-dev", build: { filenames: { app: ({ isDev: e }) => {
            return e ? "test-app.js" : "test-app.[contenthash].js";
          }, chunk: "test-[name].[contenthash].js" }, transpile: ["@scoped/packageA", "@scoped\\packageB", "vue.test.js", /vue-test/, ({ isModern: e }) => e ? "modern-test" : "normal-test"], loaders: { cssModules: { modules: { localIdentName: "[hash:base64:6]" } } }, extend({ module: { rules: e }, output: t }, { isClient: s, loaders: o }) {
          if (s) {
            const n = e.find(e => e.test.test(".jsx"));
            transpile = e => !n.exclude(e);output = t;loadersOptions = o;vueLoader = e.find(e => e.test.test(".vue"));const r = e.find(e => e.test.test(".css")).oneOf[0].use;
            postcssLoader = r[r.length - 1];
          }
        } }, hooks: { "vue-renderer:ssr:context": ({ nuxt: e }) => {
          e.logs = [{ type: "log", args: ["This is a test ssr log"] }];
        } }, render: { ssrLog: "collapsed" } });
    nuxt = new Nuxt(e);await nuxt.ready();builder = new Builder(nuxt, BundleBuilder);await builder.build();await waitFor(2e3);port = await getPort();await nuxt.server.listen(port, "localhost");
  });test("Check build:done hook called", () => {
    expect(builder.__hook_built_called__).toBe(true);
  });test("Config: build.transpile", () => {
    expect(transpile("vue-test")).toBe(true);expect(transpile(path.normalize("node_modules/test.js"))).toBe(false);expect(transpile(path.normalize("node_modules/vue-test"))).toBe(true);expect(transpile(path.normalize("node_modules/vue.test.js"))).toBe(true);expect(transpile(path.normalize("node_modules/test.vue.js"))).toBe(true);expect(transpile(path.normalize("node_modules/@scoped/packageA/src/index.js"))).toBe(true);expect(transpile(path.normalize("node_modules/@scoped/packageB/src/index.js"))).toBe(true);expect(transpile(path.normalize("node_modules/normal-test"))).toBe(true);
  });test("Config: build.filenames", () => {
    expect(output.filename).toBe("test-app.js");expect(output.chunkFilename).toBe("test-[name].[contenthash].js");expect(consola.warn).toBeCalledWith("Notice: Please do not use contenthash in dev mode to prevent memory leak");
  });test("Config: build.loaders", () => {
    expect(Object.keys(loadersOptions)).toHaveLength(12);expect(loadersOptions).toHaveProperty("file", "fontUrl", "imgUrl", "pugPlain", "vue", "css", "cssModules", "less", "sass", "scss", "stylus", "vueStyle");var { cssModules: e, vue: t } = loadersOptions;
    expect(e.modules.localIdentName).toBe("[hash:base64:6]");expect(vueLoader.options).toBe(t);
  });test("Config: preset-env and cssnano are at then end of postcss plugins", () => {
    const e = postcssLoader.options.plugins.map(e => {
      return e.postcssPlugin;
    });
    expect(e).toEqual(["postcss-import", "postcss-url", "nuxt-test", "postcss-preset-env", "cssnano"]);
  });test("/stateless", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/stateless"));
    const t = e.document.body.innerHTML;
    expect(t).toContain("<h1>My component!</h1>");expect(nuxt.__hook_render_routeDone__).toBe("/stateless");e.close();
  });test("/__open-in-editor (open-in-editor)", async () => {
    var { body: e } = await rp(url("/__open-in-editor?file=pages/index.vue"));
    expect(e).toBe("");
  });test("/__open-in-editor should return error (open-in-editor)", async () => {
    await expect(rp(url("/__open-in-editor?file="))).rejects.toMatchObject({ response: { statusCode: 500, body: "launch-editor-middleware: required query param \"file\" is missing." } });
  });test("/error should return error stack trace (Youch)", async () => {
    await expect(nuxt.server.renderAndGetWindow(url("/error"))).rejects.toThrow("Resource was not loaded. Status: 500");
  });test("/error should return json format error (Youch)", async () => {
    const e = { headers: { accept: "application/json" } };
    await expect(rp(url("/error"), e)).rejects.toMatchObject({ response: { statusCode: 500, headers: { "content-type": "text/json; charset=utf-8" } } });
  });test("/ should display ssr log in collapsed group", async () => {
    const e = new jsdom.VirtualConsole();
    const t = jest.fn();
    const s = jest.fn();
    const o = jest.fn();
    e.on("groupCollapsed", t);e.on("groupEnd", s);e.on("log", o);await nuxt.server.renderAndGetWindow(url("/"), { virtualConsole: e });expect(t).toHaveBeenCalledWith("%cNuxt SSR", "background: #2E495E;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;");expect(s).toHaveBeenCalled();expect(o).toHaveBeenCalledWith("This is a test ssr log");
  });afterAll(async () => {
    await builder.close();
  });
});