'use strict';
import path from "path";
import jsdom from "jsdom";
import consola from "consola";
import{
  Builder as Builder,
  BundleBuilder as BundleBuilder,
  getPort as getPort,
  loadFixture as loadFixture,
  Nuxt as Nuxt,
  rp as rp,
  waitFor as waitFor
}from "../utils";
let server;
const _ = (name) => {
  return "http://localhost:" + server + name;
};
let app = null;
let builder = null;
let headless = null;
let webpackConfig = null;
let value;
let assert;
let isQuitting;
describe("basic dev", () => {
  beforeAll(async() => {
    const markup = await loadFixture("basic", {
      dev : true,
      debug : true,
      buildDir : ".nuxt-dev",
      build : {
        filenames : {
          app : ({
            isDev : isDev
          }) => {
            return isDev ? "test-app.js" : "test-app.[contenthash].js";
          },
          chunk : "test-[name].[contenthash].js"
        },
        transpile : ["@scoped/packageA", "@scoped\\packageB", "vue.test.js", /vue-test/, ({
          isModern : e
        }) => {
          return e ? "modern-test" : "normal-test";
        }],
        loaders : {
          cssModules : {
            modules : {
              localIdentName : "[hash:base64:6]"
            }
          }
        },
        extend({
          module : {
            rules : r
          },
          output : configPath
        }, {
          isClient : name,
          loaders : loaders
        }) {
          if (name) {
            const control = r.find((regx) => {
              return regx.test.test(".jsx");
            });
            headless = (options) => {
              return !control.exclude(options);
            };
            webpackConfig = configPath;
            value = loaders;
            assert = r.find((regx) => {
              return regx.test.test(".vue");
            });
            const expRecords = r.find((regx) => {
              return regx.test.test(".css");
            }).oneOf[0].use;
            isQuitting = expRecords[expRecords.length - 1];
          }
        }
      },
      hooks : {
        "vue-renderer:ssr:context" : ({
          nuxt : AlloyLever
        }) => {
          AlloyLever.logs = [{
            type : "log",
            args : ["This is a test ssr log"]
          }];
        }
      },
      render : {
        ssrLog : "collapsed"
      }
    });
    app = new Nuxt(markup);
    await app.ready();
    builder = new Builder(app, BundleBuilder);
    await builder.build();
    await waitFor(2e3);
    server = await getPort();
    await app.server.listen(server, "localhost");
  });
  test("Check build:done hook called", () => {
    expect(builder.__hook_built_called__).toBe(true);
  });
  test("Config: build.transpile", () => {
    expect(headless("vue-test")).toBe(true);
    expect(headless(path.normalize("node_modules/test.js"))).toBe(false);
    expect(headless(path.normalize("node_modules/vue-test"))).toBe(true);
    expect(headless(path.normalize("node_modules/vue.test.js"))).toBe(true);
    expect(headless(path.normalize("node_modules/test.vue.js"))).toBe(true);
    expect(headless(path.normalize("node_modules/@scoped/packageA/src/index.js"))).toBe(true);
    expect(headless(path.normalize("node_modules/@scoped/packageB/src/index.js"))).toBe(true);
    expect(headless(path.normalize("node_modules/normal-test"))).toBe(true);
  });
  test("Config: build.filenames", () => {
    expect(webpackConfig.filename).toBe("test-app.js");
    expect(webpackConfig.chunkFilename).toBe("test-[name].[contenthash].js");
    expect(consola.warn).toBeCalledWith("Notice: Please do not use contenthash in dev mode to prevent memory leak");
  });
  test("Config: build.loaders", () => {
    expect(Object.keys(value)).toHaveLength(12);
    expect(value).toHaveProperty("file", "fontUrl", "imgUrl", "pugPlain", "vue", "css", "cssModules", "less", "sass", "scss", "stylus", "vueStyle");
    const {
      cssModules : appManagement,
      vue : auth
    } = value;
    expect(appManagement.modules.localIdentName).toBe("[hash:base64:6]");
    expect(assert.options).toBe(auth);
  });
  test("Config: preset-env and cssnano are at then end of postcss plugins", () => {
    const xvals0 = isQuitting.options.plugins.map((transformer) => {
      return transformer.postcssPlugin;
    });
    expect(xvals0).toEqual(["postcss-import", "postcss-url", "nuxt-test", "postcss-preset-env", "cssnano"]);
  });
  test("/stateless", async() => {
    const rootWindow = await app.server.renderAndGetWindow(_("/stateless"));
    const requestedUrls = rootWindow.document.body.innerHTML;
    expect(requestedUrls).toContain("<h1>My component!</h1>");
    expect(app.__hook_render_routeDone__).toBe("/stateless");
    rootWindow.close();
  });
  test("/__open-in-editor (open-in-editor)", async() => {
    const {
      body : e
    } = await rp(_("/__open-in-editor?file=pages/index.vue"));
    expect(e).toBe("");
  });
  test("/__open-in-editor should return error (open-in-editor)", async() => {
    await expect(rp(_("/__open-in-editor?file="))).rejects.toMatchObject({
      response : {
        statusCode : 500,
        body : 'launch-editor-middleware: required query param "file" is missing.'
      }
    });
  });
  test("/error should return error stack trace (Youch)", async() => {
    await expect(app.server.renderAndGetWindow(_("/error"))).rejects.toThrow("Resource was not loaded. Status: 500");
  });
  test("/error should return json format error (Youch)", async() => {
    const customStringifier = {
      headers : {
        accept : "application/json"
      }
    };
    await expect(rp(_("/error"), customStringifier)).rejects.toMatchObject({
      response : {
        statusCode : 500,
        headers : {
          "content-type" : "text/json; charset=utf-8"
        }
      }
    });
  });
  test("/ should display ssr log in collapsed group", async() => {
    const self = new jsdom.VirtualConsole;
    const threeSpy = jest.fn();
    const s = jest.fn();
    const oneSpy = jest.fn();
    self.on("groupCollapsed", threeSpy);
    self.on("groupEnd", s);
    self.on("log", oneSpy);
    await app.server.renderAndGetWindow(_("/"), {
      virtualConsole : self
    });
    expect(threeSpy).toHaveBeenCalledWith("%cNuxt SSR", "background: #2E495E;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;");
    expect(s).toHaveBeenCalled();
    expect(oneSpy).toHaveBeenCalledWith("This is a test ssr log");
  });
  afterAll(async() => {
    await builder.close();
  });
});

