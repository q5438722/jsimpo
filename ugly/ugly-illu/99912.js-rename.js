import consola from "consola";import { loadFixture, getPort, Nuxt, rp } from "../utils";var port;

const url = e => "http://localhost:" + port + e;

var nuxt = null;
describe("basic ssr", () => {
  beforeAll(async () => {
    const e = await loadFixture("basic");
    nuxt = new Nuxt(e);await nuxt.ready();port = await getPort();await nuxt.server.listen(port, "0.0.0.0");
  });test("/stateless", async () => {
    var { html: e } = await nuxt.server.renderRoute("/stateless");
    expect(e).toContain("<h1>My component!</h1>");
  });test("/store-module", async () => {
    var { html: e } = await nuxt.server.renderRoute("/store-module");
    expect(e).toContain("<h1>mutated</h1>");
  });test("/css", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/css"));
    const t = e.document.head.innerHTML;
    expect(t).toContain("color:red");const r = e.document.querySelector(".red");
    expect(r).not.toBe(null);expect(r.textContent).toContain("This is red");expect(r.className).toBe("red");
  });test("/postcss", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/css"));
    const t = e.document.head.innerHTML;
    expect(t).toContain("color:red");const r = e.document.querySelector(".red");
    expect(r).not.toBe(null);expect(r.textContent).toContain("This is red");expect(r.className).toBe("red");
  });test("/postcss", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/css"));
    const t = e.document.head.innerHTML;
    expect(t).toContain("background-color:#00f");
  });test("/stateful", async () => {
    var { html: e } = await nuxt.server.renderRoute("/stateful");
    expect(e).toContain("<div><p>The answer is 42</p></div>");
  });test("/store", async () => {
    var { html: e } = await nuxt.server.renderRoute("/store");
    expect(e).toContain("<h1>foo/bar/baz: Vuex Nested Modules</h1>");expect(e).toContain("<h2>index/counter: 1</h2>");expect(e).toContain("<h3>foo/blarg/getVal: 4</h3>");expect(e).toContain("<h4>foo/bab/getBabVal: 10</h4>");
  });test("/head", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/head"));
    expect(e.document.title).toBe("My title - Nuxt");const t = e.document.querySelector("html").outerHTML;
    expect(t).toContain("<div><h1>I can haz meta tags</h1></div>");expect(t).toContain("<script data-n-head=\"ssr\" src=\"/body.js\" data-body=\"true\">");const r = e.document.getElementsByTagName("meta");
    expect(r[1].getAttribute("content")).toBe("my meta");expect(consola.log).toHaveBeenCalledWith("Body script!");expect(t).toContain("<html foo=\"baz\" data-n-head=\"%7B%22foo%22:%7B%22ssr%22:%22baz%22%7D%7D\">");expect(t).toContain("<head bar=\"foo\" data-n-head=\"%7B%22bar%22:%7B%22ssr%22:%22foo%22%7D%7D\">");expect(t).toContain("<body baz=\"bar\" data-n-head=\"%7B%22baz%22:%7B%22ssr%22:%22bar%22%7D%7D\">");
  });test("/async-data", async () => {
    var { html: e } = await nuxt.server.renderRoute("/async-data");
    expect(e).toContain("<p>Nuxt</p>");
  });test("/await-async-data", async () => {
    var { html: e } = await nuxt.server.renderRoute("/await-async-data");
    expect(e).toContain("<p>Await Nuxt</p>");
  });test("/callback-async-data", async () => {
    var { html: e } = await nuxt.server.renderRoute("/callback-async-data");
    expect(e).toContain("<p>Callback Nuxt</p>");
  });test("/users/1", async () => {
    var { html: e } = await nuxt.server.renderRoute("/users/1");
    expect(e).toContain("<h1>User: 1</h1>");
  });test("/validate should display a 404", async () => {
    var { html: e } = await nuxt.server.renderRoute("/validate");
    expect(e).toContain("This page could not be found");
  });test("/validate-async should display a 404", async () => {
    var { html: e } = await nuxt.server.renderRoute("/validate-async");
    expect(e).toContain("This page could not be found");
  });test("/validate?valid=true", async () => {
    var { html: e } = await nuxt.server.renderRoute("/validate?valid=true");
    expect(e).toContain("<h1>I am valid</h1>");
  });test("/validate-async?valid=true", async () => {
    var { html: e } = await nuxt.server.renderRoute("/validate-async?valid=true");
    expect(e).toContain("<h1>I am valid</h1>");
  });test("/validate?error=403", async () => {
    var { html: e, error: t } = await nuxt.server.renderRoute("/validate?error=403");
    expect(t).toMatchObject({ statusCode: 403, message: "Custom Error" });expect(e).toContain("Custom Error");
  });test("/validate-async?error=503", async () => {
    var { html: e, error: t } = await nuxt.server.renderRoute("/validate-async?error=503");
    expect(t).toMatchObject({ statusCode: 503, message: "Custom Error" });expect(e).toContain("Custom Error");
  });test("/before-enter", async () => {
    var { html: e } = await nuxt.server.renderRoute("/before-enter");
    expect(e).toContain("<h1>Index page</h1>");
  });describe("/redirect", () => {
    var r;
    var n;
    const t = { res: { writeHead(e, t) {
          n = e;r = t;
        }, end() {} } };
    test("/redirect", async () => {
      var { html: e, redirected: t } = await nuxt.server.renderRoute("/redirect");
      expect(e).toContain("<div id=\"__nuxt\"></div>");expect(e).not.toContain("window.__NUXT__");expect(t.path === "/").toBe(true);expect(t.status === 302).toBe(true);
    });test("/redirect -> check redirected source", async () => {
      const e = await nuxt.server.renderAndGetWindow(url("/redirect"));
      const t = e.document.body.innerHTML;
      expect(t).toContain("<h1>Index page</h1>");
    });test("/redirect -> external link", async () => {
      var { html: e } = await nuxt.server.renderRoute("/redirect-external", t);
      expect(n).toBe(302);expect(r.Location).toBe("https://nuxtjs.org/docs/2.x/features/data-fetching/");expect(e).toContain("<div data-server-rendered=\"true\" id=\"__nuxt\"></div>");
    });test("/redirect -> external link without trailing slash", async () => {
      var { html: e } = await nuxt.server.renderRoute("/redirect-external-no-slash", t);
      expect(n).toBe(302);expect(r.Location).toBe("https://nuxtjs.org/docs/2.x/features/data-fetching");expect(e).toContain("<div data-server-rendered=\"true\" id=\"__nuxt\"></div>");
    });test("/redirect -> external link with root domain url", async () => {
      var { html: e } = await nuxt.server.renderRoute("/redirect-external-root", t);
      expect(n).toBe(302);expect(r.Location).toBe("https://nuxtjs.org/");expect(e).toContain("<div data-server-rendered=\"true\" id=\"__nuxt\"></div>");
    });
  });test("/before-nuxt-render -> check window.__NUXT__.beforeNuxtRender = true", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/before-nuxt-render"));
    expect(e.document.title).toBe("Nuxt");expect(e.__NUXT__.beforeNuxtRender).toBe(true);
  });test("/before-serialize -> check window.__NUXT__.beforeSerialize = true", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/before-serialize"));
    expect(e.document.title).toBe("Nuxt");expect(e.__NUXT__.beforeSerialize).toBe(true);
  });test("/error", async () => {
    await expect(nuxt.server.renderRoute("/error", { req: {}, res: {} })).rejects.toThrow("Error mouahahah");
  });test("/error-string", async () => {
    var t;
    try {
      await nuxt.server.renderRoute("/error-string", { req: {}, res: {} });
    } catch (e) {
      t = e;
    }await expect(t).toEqual("fetch error!");
  });test("/error-object", async () => {
    var t;
    try {
      await nuxt.server.renderRoute("/error-object", { req: {}, res: {} });
    } catch (e) {
      t = e;
    }await expect(t).toEqual({ error: "fetch error!" });
  });test("/error status code", async () => {
    await expect(rp(url("/error"))).rejects.toMatchObject({ response: { statusCode: 500 } });
  });test("/error json format error", async () => {
    const e = { headers: { accept: "application/json" } };
    await expect(rp(url("/error"), e)).rejects.toMatchObject({ response: { statusCode: 500, headers: { "content-type": "text/json; charset=utf-8" } } });
  });test("/error2", async () => {
    var { html: e, error: t } = await nuxt.server.renderRoute("/error2");
    expect(e).toContain("Custom error");expect(t.message).toContain("Custom error");expect(t.statusCode).toBe(500);expect(t.customProp).toBe("ezpz");
  });test("/error2 status code", async () => {
    await expect(rp(url("/error2"))).rejects.toMatchObject({ response: { statusCode: 500, body: expect.stringContaining("Custom error") } });
  });test("/error-midd", async () => {
    await expect(rp(url("/error-midd"))).rejects.toMatchObject({ response: { statusCode: 505 } });
  });test("/redirect-middleware", async () => {
    await expect(rp(url("/redirect-middleware"))).resolves.toBeTruthy();
  });test("/redirect-name", async () => {
    var { html: e, redirected: t } = await nuxt.server.renderRoute("/redirect-name");
    expect(e).toContain("<div id=\"__nuxt\"></div>");expect(t.path === "/stateless").toBe(true);expect(t.status === 302).toBe(true);
  });test("/client-only", async () => {
    var { html: e } = await nuxt.server.renderRoute("/client-only");
    expect(e.includes("<p class=\"client-only-placeholder\">Loading...</p>")).toBe(true);
  });test("/client-only (client-side)", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/client-only"));
    const t = e.document.body.innerHTML;
    expect(t).toContain("Displayed only on client-side</h1>");
  });test("/no-ssr", async () => {
    var { html: e } = await nuxt.server.renderRoute("/no-ssr");
    expect(e.includes("<p class=\"no-ssr-placeholder\">Loading...</p>")).toBe(true);
  });test("/no-ssr (client-side)", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/no-ssr"));
    const t = e.document.body.innerHTML;
    expect(t).toContain("Displayed only on client-side</h1>");expect(consola.warn).toHaveBeenCalledTimes(1);expect(consola.warn).toHaveBeenCalledWith(expect.stringContaining("<no-ssr> has been deprecated"));
  });test("ETag Header", async () => {
    var { headers: { etag: e } } = await rp(url("/stateless"));
    const t = await rp(url("/stateless"), { headers: { "If-None-Match": e } });
    await expect(t).toMatchObject({ statusCode: 304 });
  });test("/_nuxt/ should return 404", async () => {
    await expect(rp(url("/_nuxt/"))).rejects.toMatchObject({ response: { statusCode: 404 } });
  });test("/meta", async () => {
    var { html: e } = await nuxt.server.renderRoute("/meta");
    expect(/<pre>.*&quot;works&quot;: true.*<\/pre>/s.test(e)).toBe(true);
  });test("/fn-midd", async () => {
    await expect(rp(url("/fn-midd"))).rejects.toMatchObject({ response: { statusCode: 403 } });
  });test("/fn-midd?please=true", async () => {
    var { html: e } = await nuxt.server.renderRoute("/fn-midd?please=true");
    expect(e).toContain("<h1>Date:");
  });test("/router-guard", async () => {
    var { html: e } = await nuxt.server.renderRoute("/router-guard");
    expect(e).toContain("<p>Nuxt</p>");expect(e.includes("Router Guard")).toBe(false);
  });test("/router-guard-error", async () => {
    var { html: e, error: t } = await nuxt.server.renderRoute("/router-guard-error");
    expect(t).toBe(null);expect(e.includes("Page content")).toBe(false);
  });test("/router-guard-error?error=zepe", async () => {
    var { html: e, error: t } = await nuxt.server.renderRoute("/router-guard-error?error=zepe");
    expect(e.includes("Page content")).toBe(false);expect(e).toContain("zepe");expect(t.message).toContain("zepe");expect(t.statusCode).toBe(500);
  });test("/router-guard-error?throw=ezae", async () => {
    await expect(nuxt.server.renderRoute("/router-guard-error?throw=ezae")).rejects.toMatchObject({ message: "ezae" });
  });test("/jsx", async () => {
    var { html: e } = await nuxt.server.renderRoute("/jsx");
    expect(e).toContain("<h1>JSX Page</h1>");
  });test("/jsx-link", async () => {
    var { html: e } = await nuxt.server.renderRoute("/jsx-link");
    expect(e).toContain("<h1>JSX Link Page</h1>");
  });test("/js-link", async () => {
    var { html: e } = await nuxt.server.renderRoute("/js-link");
    expect(e).toContain("<h1>vue file is first-class</h1>");
  });test("/\u0442\u0435\u0441\u0442\u96E8 (test non ascii route)", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/\u0442\u0435\u0441\u0442\u96E8"));
    const t = e.document.body.innerHTML;
    expect(t).toMatch("Hello unicode");
  });test("/custom (js layout)", async () => {
    const e = await nuxt.server.renderAndGetWindow(url("/custom"));
    const t = e.document.body.innerHTML;
    expect(t).toMatch("<h1>JS Layout</h1>");expect(t).toMatch("<h2>custom page</h2>");
  });test("/symlink/symlinked", async () => {
    var { html: e } = await nuxt.server.renderRoute("/symlink/symlinked");
    expect(e).toContain("<h1>Symlinked page</h1>");
  });test("/symlink/deep/nested-symlinked", async () => {
    var { html: e } = await nuxt.server.renderRoute("/symlink/deep/nested-symlinked");
    expect(e).toContain("<h1>Nested symlink page</h1>");
  });test("/components", async () => {
    var { html: e } = await nuxt.server.renderRoute("/components");
    expect(e).toContain("Auto discovered component!");
  });test("/ (normal <script>)", async () => {
    var { html: e } = await nuxt.server.renderRoute("/");
    expect(e).toContain("\" defer>");
  });afterAll(async () => {
    await nuxt.close();
  });
});
