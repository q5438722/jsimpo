'use strict';
import cheerio from "cheerio";
import "flat-map-polyfill";
import{
  pathExists as pathExists,
  readdir as readdir,
  readFile as readFile,
  readJSON as readJSON,
  remove as remove
}from "fs-extra";
import{
  check as check,
  File as File,
  findPort as findPort,
  killApp as killApp,
  launchApp as launchApp,
  nextBuild as nextBuild,
  nextStart as nextStart,
  renderViaHTTP as renderViaHTTP,
  waitFor as waitFor
}from "next-test-utils";
import webdriver from "next-webdriver";
import{
  join as join
}from "path";
jest.setTimeout(1e3 * 60 * 2);
const cozyUrl = join(__dirname, "../..", "css-fixtures");
describe("CSS Support", () => {
  describe("Basic Global Support", () => {
    const root = join(cozyUrl, "single-global");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      expect(await readFile(join(dir, tasks[0]), "utf8")).toContain("color:red");
    });
  });
  describe("Basic Global Support with src/ dir", () => {
    const root = join(cozyUrl, "single-global-src");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      expect(await readFile(join(dir, tasks[0]), "utf8")).toContain("color:red");
    });
  });
  describe("Multi Global Support", () => {
    const root = join(cozyUrl, "multi-global");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatchInlineSnapshot(`".red-text{color:red}.blue-text{color:blue}"`);
    });
  });
  describe("Nested @import() Global Support", () => {
    const root = join(cozyUrl, "nested-global");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatchInlineSnapshot(`".red-text{color:purple;font-weight:bolder;color:red}.blue-text{color:orange;font-weight:bolder;color:blue}"`);
    });
  });
  describe("CSS Compilation and Prefixing", () => {
    const root = join(cozyUrl, "compilation-and-prefixing");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've compiled and prefixed`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const password = await readFile(join(dir, tasks[0]), "utf8");
      expect(password.replace(/\/\*.*?\*\//g, "").trim()).toMatchInlineSnapshot(`"@media (min-width:480px) and (max-width:767px){::-moz-placeholder{color:green}:-ms-input-placeholder{color:green}::placeholder{color:green}}.flex-parsing{flex:0 0 calc(50% - var(--vertical-gutter))}.transform-parsing{transform:translate3d(0,0)}.css-grid-shorthand{grid-column:span 2}.g-docs-sidenav .filter::-webkit-input-placeholder{opacity:80%}"`);
      expect(password).toMatch(/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
    });
    it(`should've emitted a source map`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css\.map$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const package_json = (await readFile(join(dir, tasks[0]), "utf8")).trim();
      const {
        version : Events,
        mappings : mappings,
        sourcesContent : modes
      } = JSON.parse(package_json);
      expect({
        version : Events,
        mappings : mappings,
        sourcesContent : modes
      }).toMatchInlineSnapshot(`\n        Object {\n          "mappings": "AAAA,+CACE,mBACE,WACF,CAFA,uBACE,WACF,CAFA,cACE,WACF,CACF,CAEA,cACE,2CACF,CAEA,mBACE,0BACF,CAEA,oBACE,kBACF,CAEA,mDACE,WACF",\n          "sourcesContent": Array [\n            "@media (480px <= width < 768px) {\n          ::placeholder {\n            color: green;\n          }\n        }\n\n        .flex-parsing {\n          flex: 0 0 calc(50% - var(--vertical-gutter));\n        }\n\n        .transform-parsing {\n          transform: translate3d(0px, 0px);\n        }\n\n        .css-grid-shorthand {\n          grid-column: span 2;\n        }\n\n        .g-docs-sidenav .filter::-webkit-input-placeholder {\n          opacity: 80%;\n        }\n        ",\n          ],\n          "version": 3,\n        }\n      `);
    });
  });
  describe("Multi Global Support (reversed)", () => {
    const root = join(cozyUrl, "multi-global-reversed");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatchInlineSnapshot(`".blue-text{color:blue}.red-text{color:red}"`);
    });
  });
  describe("React Lifecyce Order (dev)", () => {
    const root = join(cozyUrl, "transition-react");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    let query;
    let artistTrack;
    beforeAll(async() => {
      query = await findPort();
      artistTrack = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(artistTrack);
    });
    it("should have the correct color on mount after navigation", async() => {
      let _this;
      try {
        _this = await webdriver(query, "/");
        await _this.waitForElementByCss("#link-other").click();
        const button2Component = await _this.waitForElementByCss("#red-title").text();
        expect(button2Component).toMatchInlineSnapshot(`"rgb(255, 0, 0)"`);
      } finally {
        if (_this) {
          await _this.close();
        }
      }
    });
  });
  describe("React Lifecyce Order (production)", () => {
    const root = join(cozyUrl, "transition-react");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    let artistTrack;
    let GET_AUTH_URL_TIMEOUT;
    let code;
    let data;
    beforeAll(async() => {
      ({
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      }));
      artistTrack = await findPort();
      GET_AUTH_URL_TIMEOUT = await nextStart(root, artistTrack);
    });
    afterAll(async() => {
      await killApp(GET_AUTH_URL_TIMEOUT);
    });
    it("should have compiled successfully", () => {
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it("should have the correct color on mount after navigation", async() => {
      let _this;
      try {
        _this = await webdriver(artistTrack, "/");
        await _this.waitForElementByCss("#link-other").click();
        const button2Component = await _this.waitForElementByCss("#red-title").text();
        expect(button2Component).toMatchInlineSnapshot(`"rgb(255, 0, 0)"`);
      } finally {
        if (_this) {
          await _this.close();
        }
      }
    });
  });
  describe("Invalid CSS in _document", () => {
    const root = join(cozyUrl, "invalid-module-document");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should fail to build", async() => {
      const {
        code : err,
        stderr : data
      } = await nextBuild(root, [], {
        stderr : true
      });
      expect(err).not.toBe(0);
      expect(data).toContain("Failed to compile");
      expect(data).toContain("styles.module.css");
      expect(data).toMatch(/CSS.*cannot.*be imported within.*pages[\\/]_document\.js/);
      expect(data).toMatch(/Location:.*pages[\\/]_document\.js/);
    });
  });
  describe("Invalid Global CSS", () => {
    const root = join(cozyUrl, "invalid-global");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should fail to build", async() => {
      const {
        code : err,
        stderr : data
      } = await nextBuild(root, [], {
        stderr : true
      });
      expect(err).not.toBe(0);
      expect(data).toContain("Failed to compile");
      expect(data).toContain("styles/global.css");
      expect(data).toMatch(/Please move all first-party global CSS imports.*?pages(\/|\\)_app/);
      expect(data).toMatch(/Location:.*pages[\\/]index\.js/);
    });
  });
  describe("Valid Global CSS from npm", () => {
    const root = join(cozyUrl, "import-global-from-module");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatchInlineSnapshot(`".red-text{color:\\"red\\"}"`);
    });
  });
  describe("Invalid Global CSS with Custom App", () => {
    const root = join(cozyUrl, "invalid-global-with-app");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should fail to build", async() => {
      const {
        code : err,
        stderr : data
      } = await nextBuild(root, [], {
        stderr : true
      });
      expect(err).not.toBe(0);
      expect(data).toContain("Failed to compile");
      expect(data).toContain("styles/global.css");
      expect(data).toMatch(/Please move all first-party global CSS imports.*?pages(\/|\\)_app/);
      expect(data).toMatch(/Location:.*pages[\\/]index\.js/);
    });
  });
  describe("Valid and Invalid Global CSS with Custom App", () => {
    const root = join(cozyUrl, "valid-and-invalid-global");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should fail to build", async() => {
      const {
        code : err,
        stderr : data
      } = await nextBuild(root, [], {
        stderr : true
      });
      expect(err).not.toBe(0);
      expect(data).toContain("Failed to compile");
      expect(data).toContain("styles/global.css");
      expect(data).toContain("Please move all first-party global CSS imports");
      expect(data).toMatch(/Location:.*pages[\\/]index\.js/);
    });
  });
  describe("Can hot reload CSS without losing state", () => {
    const root = join(cozyUrl, "multi-page");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    let query;
    let e;
    beforeAll(async() => {
      query = await findPort();
      e = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(e);
    });
    it("should update CSS color without remounting <input>", async() => {
      let browser;
      try {
        browser = await webdriver(query, "/page1");
        const pref = "hello world";
        await browser.elementById("text-input").type(pref);
        expect(await browser.elementById("text-input").getValue()).toBe(pref);
        const button2Component = await browser.eval(`window.getComputedStyle(document.querySelector('.red-text')).color`);
        expect(button2Component).toMatchInlineSnapshot(`"rgb(255, 0, 0)"`);
        const filesOp = new File(join(root, "styles/global1.css"));
        try {
          filesOp.replace("color: red", "color: purple");
          await check(() => {
            return browser.eval(`window.getComputedStyle(document.querySelector('.red-text')).color`);
          }, "rgb(128, 0, 128)");
          expect(await browser.elementById("text-input").getValue()).toBe(pref);
        } finally {
          filesOp.restore();
        }
      } finally {
        if (browser) {
          await browser.close();
        }
      }
    });
  });
  describe("Has CSS in computed styles in Development", () => {
    const root = join(cozyUrl, "multi-page");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    let query;
    let artistTrack;
    beforeAll(async() => {
      query = await findPort();
      artistTrack = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(artistTrack);
    });
    it("should have CSS for page", async() => {
      let win;
      try {
        win = await webdriver(query, "/page2");
        const button2Component = await win.eval(`window.getComputedStyle(document.querySelector('.blue-text')).color`);
        expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 0, 255)"`);
      } finally {
        if (win) {
          await win.close();
        }
      }
    });
  });
  describe("Body is not hidden when unused in Development", () => {
    const root = join(cozyUrl, "unused");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    let query;
    let artistTrack;
    beforeAll(async() => {
      query = await findPort();
      artistTrack = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(artistTrack);
    });
    it("should have body visible", async() => {
      let win;
      try {
        win = await webdriver(query, "/");
        const child_rendered_first = await win.eval(`window.getComputedStyle(document.querySelector('body')).display`);
        expect(child_rendered_first).toBe("block");
      } finally {
        if (win) {
          await win.close();
        }
      }
    });
  });
  describe("Body is not hidden when broken in Development", () => {
    const root = join(cozyUrl, "unused");
    let query;
    let e;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      query = await findPort();
      e = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(e);
    });
    it("should have body visible", async() => {
      const filesOp = new File(join(root, "pages/index.js"));
      let win;
      try {
        filesOp.replace("<div />", "<div>");
        await waitFor(2E3);
        win = await webdriver(query, "/");
        const child_rendered_first = await win.eval(`window.getComputedStyle(document.querySelector('body')).display`);
        expect(child_rendered_first).toBe("block");
      } finally {
        filesOp.restore();
        if (win) {
          await win.close();
        }
      }
    });
  });
  describe("Has CSS in computed styles in Production", () => {
    const root = join(cozyUrl, "multi-page");
    let artistTrack;
    let GET_AUTH_URL_TIMEOUT;
    let data;
    let code;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      ({
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      }));
      artistTrack = await findPort();
      GET_AUTH_URL_TIMEOUT = await nextStart(root, artistTrack);
    });
    afterAll(async() => {
      await killApp(GET_AUTH_URL_TIMEOUT);
    });
    it("should have compiled successfully", () => {
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it("should have CSS for page", async() => {
      const mathClone = await webdriver(artistTrack, "/page2");
      const button2Component = await mathClone.eval(`window.getComputedStyle(document.querySelector('.blue-text')).color`);
      expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 0, 255)"`);
    });
    it(`should've preloaded the CSS file and injected it in <head>`, async() => {
      const loginHTML = await renderViaHTTP(artistTrack, "/page2");
      const new_sidebar_widgets_setting = cheerio.load(loginHTML);
      const askButton = new_sidebar_widgets_setting('link[rel="preload"][as="style"]');
      expect(askButton.length).toBe(1);
      expect(askButton.attr("href")).toMatch(/^\/_next\/static\/css\/.*\.css$/);
      const o = new_sidebar_widgets_setting('link[rel="stylesheet"]');
      expect(o.length).toBe(1);
      expect(o.attr("href")).toMatch(/^\/_next\/static\/css\/.*\.css$/);
      const unifications = [].slice.call(new_sidebar_widgets_setting('link[rel="preload"]'));
      const xvals0 = unifications.flatMap((tag, canCreateDiscussions) => {
        return tag.attribs.as === "style" ? canCreateDiscussions : [];
      });
      expect(xvals0).toEqual([0]);
    });
  });
  describe("CSS URL via `file-loader`", () => {
    const root = join(cozyUrl, "url-global");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted expected files`, async() => {
      const dir = join(root, ".next/static/css");
      const fqPath = join(root, ".next/static/media");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatch(/^\.red-text\{color:red;background-image:url\(\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
      const n = await readdir(fqPath);
      expect(n.length).toBe(3);
      expect(n.map((e) => {
        return /^(.+?)\..{32}\.(.+?)$/.exec(e).slice(1).join(".");
      }).sort()).toMatchInlineSnapshot(`\n        Array [\n          "dark.svg",\n          "dark2.svg",\n          "light.svg",\n        ]\n      `);
    });
  });
  describe("CSS URL via `file-loader` and asset prefix (1)", () => {
    const root = join(cozyUrl, "url-global-asset-prefix-1");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted expected files`, async() => {
      const dir = join(root, ".next/static/css");
      const fqPath = join(root, ".next/static/media");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatch(/^\.red-text\{color:red;background-image:url\(\/foo\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/foo\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/foo\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
      const n = await readdir(fqPath);
      expect(n.length).toBe(3);
      expect(n.map((e) => {
        return /^(.+?)\..{32}\.(.+?)$/.exec(e).slice(1).join(".");
      }).sort()).toMatchInlineSnapshot(`\n        Array [\n          "dark.svg",\n          "dark2.svg",\n          "light.svg",\n        ]\n      `);
    });
  });
  describe("CSS URL via `file-loader` and asset prefix (2)", () => {
    const root = join(cozyUrl, "url-global-asset-prefix-2");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted expected files`, async() => {
      const dir = join(root, ".next/static/css");
      const fqPath = join(root, ".next/static/media");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatch(/^\.red-text\{color:red;background-image:url\(\/foo\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/foo\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/foo\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
      const n = await readdir(fqPath);
      expect(n.length).toBe(3);
      expect(n.map((e) => {
        return /^(.+?)\..{32}\.(.+?)$/.exec(e).slice(1).join(".");
      }).sort()).toMatchInlineSnapshot(`\n        Array [\n          "dark.svg",\n          "dark2.svg",\n          "light.svg",\n        ]\n      `);
    });
  });
  describe("Good CSS Import from node_modules", () => {
    const root = join(cozyUrl, "npm-import");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatch(/nprogress/);
    });
  });
  describe("Good Nested CSS Import from node_modules", () => {
    const root = join(cozyUrl, "npm-import-nested");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've emitted a single CSS file`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const aDraggedText = await readFile(join(dir, tasks[0]), "utf8");
      expect(aDraggedText.replace(/\/\*.*?\*\//g, "").trim()).toMatchInlineSnapshot(`".other{color:blue}.test{color:red}"`);
    });
  });
  describe("CSS Import from node_modules", () => {
    const root = join(cozyUrl, "npm-import-bad");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should fail the build", async() => {
      const {
        code : code,
        stderr : data
      } = await nextBuild(root, [], {
        stderr : true
      });
      expect(code).toBe(0);
      expect(data).not.toMatch(/Can't resolve '[^']*?nprogress[^']*?'/);
      expect(data).not.toMatch(/Build error occurred/);
    });
  });
  describe("Ordering with styled-jsx (dev)", () => {
    const root = join(cozyUrl, "with-styled-jsx");
    let query;
    let artistTrack;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      query = await findPort();
      artistTrack = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(artistTrack);
    });
    it("should have the correct color (css ordering)", async() => {
      const mathClone = await webdriver(query, "/");
      const button2Component = await mathClone.eval(`window.getComputedStyle(document.querySelector('.my-text')).color`);
      expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 128, 0)"`);
    });
  });
  describe("Ordering with styled-jsx (prod)", () => {
    const root = join(cozyUrl, "with-styled-jsx");
    let artistTrack;
    let GET_AUTH_URL_TIMEOUT;
    let data;
    let code;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      ({
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      }));
      artistTrack = await findPort();
      GET_AUTH_URL_TIMEOUT = await nextStart(root, artistTrack);
    });
    afterAll(async() => {
      await killApp(GET_AUTH_URL_TIMEOUT);
    });
    it("should have compiled successfully", () => {
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it("should have the correct color (css ordering)", async() => {
      const mathClone = await webdriver(artistTrack, "/");
      const button2Component = await mathClone.eval(`window.getComputedStyle(document.querySelector('.my-text')).color`);
      expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 128, 0)"`);
    });
  });
  describe("Ordering with Global CSS and Modules (dev)", () => {
    const root = join(cozyUrl, "global-and-module-ordering");
    let query;
    let e;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      query = await findPort();
      e = await launchApp(root, query);
    });
    afterAll(async() => {
      await killApp(e);
    });
    it("should not execute scripts in any order", async() => {
      const loginHTML = await renderViaHTTP(query, "/");
      const require = cheerio.load(loginHTML);
      let child_rendered_first = 0;
      let item0Height = 0;
      for (const request of require("script").toArray()) {
        ++item0Height;
        if ("async" in request.attribs) {
          ++child_rendered_first;
        }
      }
      expect(child_rendered_first).toBe(0);
      expect(item0Height).not.toBe(0);
    });
    it("should have the correct color (css ordering)", async() => {
      const mathClone = await webdriver(query, "/");
      const button2Component = await mathClone.eval(`window.getComputedStyle(document.querySelector('#blueText')).color`);
      expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 0, 255)"`);
    });
    it("should have the correct color (css ordering) during hot reloads", async() => {
      let win;
      try {
        win = await webdriver(query, "/");
        const button2Component = await win.eval(`window.getComputedStyle(document.querySelector('#blueText')).color`);
        expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 0, 255)"`);
        const finallyWasCalled = await win.eval(`window.getComputedStyle(document.querySelector('#yellowText')).color`);
        expect(finallyWasCalled).toMatchInlineSnapshot(`"rgb(255, 255, 0)"`);
        const filesOp = new File(join(root, "pages/index.module.css"));
        try {
          filesOp.replace("color: yellow;", "color: rgb(1, 1, 1);");
          await check(() => {
            return win.eval(`window.getComputedStyle(document.querySelector('#yellowText')).color`);
          }, "rgb(1, 1, 1)");
          await check(() => {
            return win.eval(`window.getComputedStyle(document.querySelector('#blueText')).color`);
          }, "rgb(0, 0, 255)");
        } finally {
          filesOp.restore();
        }
      } finally {
        if (win) {
          await win.close();
        }
      }
    });
  });
  describe("Ordering with Global CSS and Modules (prod)", () => {
    const root = join(cozyUrl, "global-and-module-ordering");
    let artistTrack;
    let GET_AUTH_URL_TIMEOUT;
    let data;
    let code;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      ({
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      }));
      artistTrack = await findPort();
      GET_AUTH_URL_TIMEOUT = await nextStart(root, artistTrack);
    });
    afterAll(async() => {
      await killApp(GET_AUTH_URL_TIMEOUT);
    });
    it("should have compiled successfully", () => {
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it("should have the correct color (css ordering)", async() => {
      const mathClone = await webdriver(artistTrack, "/");
      const button2Component = await mathClone.eval(`window.getComputedStyle(document.querySelector('#blueText')).color`);
      expect(button2Component).toMatchInlineSnapshot(`"rgb(0, 0, 255)"`);
    });
  });
  describe("CSS Property Ordering", () => {
    const root = join(cozyUrl, "next-issue-15468");
    let artistTrack;
    let GET_AUTH_URL_TIMEOUT;
    let data;
    let code;
    beforeAll(async() => {
      await remove(join(root, ".next"));
      ({
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      }));
      artistTrack = await findPort();
      GET_AUTH_URL_TIMEOUT = await nextStart(root, artistTrack);
    });
    afterAll(async() => {
      await killApp(GET_AUTH_URL_TIMEOUT);
    });
    it("should have compiled successfully", () => {
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it("should have the border width (property ordering)", async() => {
      const mathClone = await webdriver(artistTrack, "/");
      const button2Component = await mathClone.eval(`window.getComputedStyle(document.querySelector('.test1')).borderWidth`);
      expect(button2Component).toMatchInlineSnapshot(`"0px"`);
      const finallyWasCalled = await mathClone.eval(`window.getComputedStyle(document.querySelector('.test2')).borderWidth`);
      expect(finallyWasCalled).toMatchInlineSnapshot(`"5px"`);
    });
  });
  describe("Basic Tailwind CSS", () => {
    const root = join(cozyUrl, "with-tailwindcss");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
      expect(data).toContain(".css");
    });
    it(`should've compiled and prefixed`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const requestsParam = await readFile(join(dir, tasks[0]), "utf8");
      expect(requestsParam).toMatch(/object-right-bottom/);
      expect(requestsParam).not.toMatch(/tailwind/);
      expect(requestsParam).toMatch(/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
    });
    it(`should've emitted a source map`, async() => {
      const fqPath = join(root, ".next/static/css");
      const eCfgEl = await readdir(fqPath);
      const uncheckedItems = eCfgEl.filter((httpToken) => {
        return /\.css\.map$/.test(httpToken);
      });
      expect(uncheckedItems.length).toBe(1);
    });
  });
  describe("Tailwind and Purge CSS", () => {
    const root = join(cozyUrl, "with-tailwindcss-and-purgecss");
    beforeAll(async() => {
      await remove(join(root, ".next"));
    });
    it("should compile successfully", async() => {
      const {
        code : code,
        stdout : data
      } = await nextBuild(root, [], {
        stdout : true
      });
      expect(code).toBe(0);
      expect(data).toMatch(/Compiled successfully/);
    });
    it(`should've compiled and prefixed`, async() => {
      const dir = join(root, ".next/static/css");
      const eCfgEl = await readdir(dir);
      const tasks = eCfgEl.filter((httpToken) => {
        return /\.css$/.test(httpToken);
      });
      expect(tasks.length).toBe(1);
      const requestsParam = await readFile(join(dir, tasks[0]), "utf8");
      expect(requestsParam).not.toMatch(/object-right-bottom/);
      expect(requestsParam).toMatch(/text-blue-500/);
      expect(requestsParam).not.toMatch(/tailwind/);
      expect(requestsParam).toMatch(/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
    });
    it(`should've emitted a source map`, async() => {
      const fqPath = join(root, ".next/static/css");
      const eCfgEl = await readdir(fqPath);
      const uncheckedItems = eCfgEl.filter((httpToken) => {
        return /\.css\.map$/.test(httpToken);
      });
      expect(uncheckedItems.length).toBe(1);
    });
  });
  describe("CSS page transition inject <style> with nonce so it works with CSP header", () => {
    function test() {
      async function isPhantomjs(browser) {
        await browser.waitForElementByCss("#green-title");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#green-title')).color`);
        expect(child_rendered_first).toBe("rgb(0, 128, 0)");
      }
      async function run(browser) {
        await browser.waitForElementByCss("#blue-title");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#blue-title')).color`);
        expect(child_rendered_first).toBe("rgb(0, 0, 255)");
      }
      it("should have correct color on index page (on load)", async() => {
        const browser = await webdriver(artistTrack, "/");
        try {
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      it("should have correct color on index page (on hover)", async() => {
        const browser = await webdriver(artistTrack, "/");
        try {
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").moveTo();
          await waitFor(2E3);
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      it("should not change color on hover", async() => {
        const browser = await webdriver(artistTrack, "/");
        try {
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").moveTo();
          await waitFor(2E3);
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      it("should have correct CSS injection order", async() => {
        const browser = await webdriver(artistTrack, "/");
        try {
          await isPhantomjs(browser);
          const noteWorkspaceID = await browser.eval(`document.querySelector('link[rel=stylesheet][data-n-p]').previousSibling.getAttribute('href')`);
          const originalTerrainProvider = await browser.eval(`document.querySelector('link[rel=stylesheet][data-n-p]').getAttribute('href')`);
          expect(noteWorkspaceID).toBeDefined();
          expect(noteWorkspaceID).toBe(originalTerrainProvider);
          await browser.waitForElementByCss("#link-other").click();
          await run(browser);
          const rerouteSuccCalled = await browser.eval(`document.querySelector('style[data-n-href]').previousSibling.getAttribute('data-n-css')`);
          const BufferFormModel = await browser.eval(`document.querySelector('style[data-n-href]').getAttribute('data-n-href')`);
          expect(rerouteSuccCalled).toBe("VmVyY2Vs");
          expect(BufferFormModel).toBeDefined();
          expect(BufferFormModel).not.toBe(originalTerrainProvider);
          await browser.waitForElementByCss("#link-index").click();
          await isPhantomjs(browser);
          const allItemsProcessedBeforeCallback = await browser.eval(`document.querySelector('style[data-n-href]').previousSibling.getAttribute('data-n-css')`);
          const rs3 = await browser.eval(`document.querySelector('style[data-n-href]').getAttribute('data-n-href')`);
          expect(allItemsProcessedBeforeCallback).toBeTruthy();
          expect(rs3).toBeDefined();
          expect(rs3).toBe(originalTerrainProvider);
        } finally {
          await browser.close();
        }
      });
      it("should have correct color on index page (on nav from index)", async() => {
        const browser = await webdriver(artistTrack, "/");
        try {
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").click();
          await browser.waitForElementByCss("#link-index");
          await run(browser);
          await browser.waitForElementByCss("#link-index").click();
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      it("should have correct color on index page (on nav from other)", async() => {
        const browser = await webdriver(artistTrack, "/other");
        try {
          await run(browser);
          await browser.waitForElementByCss("#link-index").click();
          await browser.waitForElementByCss("#link-other");
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").click();
          await run(browser);
        } finally {
          await browser.close();
        }
      });
    }
    const root = join(cozyUrl, "csp-style-src-nonce");
    let GET_AUTH_URL_TIMEOUT;
    let artistTrack;
    describe("Production Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        await nextBuild(root, [], {});
        artistTrack = await findPort();
        GET_AUTH_URL_TIMEOUT = await nextStart(root, artistTrack);
      });
      afterAll(async() => {
        await killApp(GET_AUTH_URL_TIMEOUT);
      });
      test();
    });
  });
  describe("CSS Modules Composes Ordering", () => {
    function test(e = false) {
      async function isPhantomjs(browser) {
        await browser.waitForElementByCss("#black-title");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#black-title')).color`);
        expect(child_rendered_first).toBe("rgb(17, 17, 17)");
      }
      async function run(browser) {
        await browser.waitForElementByCss("#red-title");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#red-title')).color`);
        expect(child_rendered_first).toBe("rgb(255, 0, 0)");
      }
      it("should have correct color on index page (on load)", async() => {
        const browser = await webdriver(query, "/");
        try {
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      it("should have correct color on index page (on hover)", async() => {
        const browser = await webdriver(query, "/");
        try {
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").moveTo();
          await waitFor(2E3);
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      if (!e) {
        it("should not change color on hover", async() => {
          const browser = await webdriver(query, "/");
          try {
            await isPhantomjs(browser);
            await browser.waitForElementByCss("#link-other").moveTo();
            await waitFor(2E3);
            await isPhantomjs(browser);
          } finally {
            await browser.close();
          }
        });
        it("should have correct CSS injection order", async() => {
          const browser = await webdriver(query, "/");
          try {
            await isPhantomjs(browser);
            const noteWorkspaceID = await browser.eval(`document.querySelector('link[rel=stylesheet][data-n-p]').previousSibling.getAttribute('href')`);
            const originalTerrainProvider = await browser.eval(`document.querySelector('link[rel=stylesheet][data-n-p]').getAttribute('href')`);
            expect(noteWorkspaceID).toBeDefined();
            expect(noteWorkspaceID).toBe(originalTerrainProvider);
            await browser.waitForElementByCss("#link-other").click();
            await run(browser);
            const rerouteSuccCalled = await browser.eval(`document.querySelector('style[data-n-href]').previousSibling.getAttribute('data-n-css')`);
            const BufferFormModel = await browser.eval(`document.querySelector('style[data-n-href]').getAttribute('data-n-href')`);
            expect(rerouteSuccCalled).toBe("");
            expect(BufferFormModel).toBeDefined();
            expect(BufferFormModel).not.toBe(originalTerrainProvider);
            await browser.waitForElementByCss("#link-index").click();
            await isPhantomjs(browser);
            const rerouteErrCalled = await browser.eval(`document.querySelector('style[data-n-href]').previousSibling.getAttribute('data-n-css')`);
            const rs3 = await browser.eval(`document.querySelector('style[data-n-href]').getAttribute('data-n-href')`);
            expect(rerouteErrCalled).toBe("");
            expect(rs3).toBeDefined();
            expect(rs3).toBe(originalTerrainProvider);
          } finally {
            await browser.close();
          }
        });
      }
      it("should have correct color on index page (on nav from index)", async() => {
        const browser = await webdriver(query, "/");
        try {
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").click();
          await browser.waitForElementByCss("#link-index");
          await run(browser);
          await browser.waitForElementByCss("#link-index").click();
          await isPhantomjs(browser);
        } finally {
          await browser.close();
        }
      });
      it("should have correct color on index page (on nav from other)", async() => {
        const browser = await webdriver(query, "/other");
        try {
          await run(browser);
          await browser.waitForElementByCss("#link-index").click();
          await browser.waitForElementByCss("#link-other");
          await isPhantomjs(browser);
          await browser.waitForElementByCss("#link-other").click();
          await run(browser);
        } finally {
          await browser.close();
        }
      });
    }
    const root = join(cozyUrl, "composes-ordering");
    let artistTrack;
    let query;
    describe("Development Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        query = await findPort();
        artistTrack = await launchApp(root, query);
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      test(true);
    });
    describe("Production Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        await nextBuild(root, [], {});
        query = await findPort();
        artistTrack = await nextStart(root, query);
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      test();
    });
  });
  describe("CSS Cleanup on Render Failure", () => {
    function test() {
      async function run(browser) {
        await browser.waitForElementByCss("#black-title");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#black-title')).color`);
        expect(child_rendered_first).toBe("rgb(17, 17, 17)");
      }
      it("not have intermediary page styles on error rendering", async() => {
        const browser = await webdriver(n, "/");
        try {
          await run(browser);
          const messagingList = await browser.eval(`document.querySelector('link[rel=stylesheet][data-n-p]')`);
          expect(messagingList).toBeDefined();
          await browser.waitForElementByCss("#link-other").click();
          await check(() => {
            return browser.eval(`document.body.innerText`);
          }, "Application error: a client-side exception has occurred (see the browser console for more information).", true);
          const bazCalled = await browser.eval(`document.querySelector('link[rel=stylesheet][data-n-p]')`);
          expect(bazCalled).toBeFalsy();
          const includeElement = await browser.eval(`document.querySelector('link[rel=stylesheet]')`);
          expect(includeElement).toBeFalsy();
        } finally {
          await browser.close();
        }
      });
    }
    const root = join(cozyUrl, "transition-cleanup");
    let artistTrack;
    let n;
    describe("Production Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        await nextBuild(root, [], {});
        n = await findPort();
        artistTrack = await nextStart(root, n);
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      test();
    });
  });
  describe("Page reload on CSS missing", () => {
    function load() {
      async function func(browser) {
        await browser.waitForElementByCss("#black-title");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#black-title')).color`);
        expect(child_rendered_first).toBe("rgb(17, 17, 17)");
      }
      it("should fall back to server-side transition on missing CSS", async() => {
        const browser = await webdriver(i, "/");
        try {
          await func(browser);
          await browser.eval(`window.__priorNavigatePageState = 'OOF';`);
          await browser.waitForElementByCss("#link-other").click();
          await browser.waitForElementByCss("#link-index");
          const bazCalled = await browser.eval(`window.__priorNavigatePageState`);
          expect(bazCalled).toBeFalsy();
        } finally {
          await browser.close();
        }
      });
    }
    const root = join(cozyUrl, "transition-reload");
    let artistTrack;
    let i;
    describe("Production Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        await nextBuild(root, [], {});
        i = await findPort();
        artistTrack = await nextStart(root, i);
        const commonObj = await readJSON(join(root, ".next", "build-manifest.json"));
        const resolvedSourceMapConfigs = commonObj["pages"]["/other"].filter((envDir) => {
          return envDir.endsWith(".css");
        });
        if (resolvedSourceMapConfigs.length < 1) {
          throw new Error;
        }
        await Promise.all(resolvedSourceMapConfigs.map((dir) => {
          return remove(join(root, ".next", dir));
        }));
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      load();
    });
  });
  describe("Page hydrates with CSS and not waiting on dependencies", () => {
    function load() {
      async function func(b) {
        await b.waitForElementByCss("#black-title");
        const child_rendered_first = await b.eval(`window.getComputedStyle(document.querySelector('#black-title')).color`);
        expect(child_rendered_first).toBe("rgb(17, 17, 17)");
      }
      async function cb(instance) {
        await instance.waitForElementByCss("#red-title");
        const child_rendered_first = await instance.eval(`window.getComputedStyle(document.querySelector('#red-title')).color`);
        expect(child_rendered_first).toBe("rgb(255, 0, 0)");
      }
      it("should hydrate black without dependencies manifest", async() => {
        const val = await webdriver(i, "/");
        try {
          await func(val);
          await check(() => {
            return val.eval(`document.querySelector('p').innerText`);
          }, "mounted");
        } finally {
          await val.close();
        }
      });
      it("should hydrate red without dependencies manifest", async() => {
        const instance = await webdriver(i, "/client");
        try {
          await cb(instance);
          await check(() => {
            return instance.eval(`document.querySelector('p').innerText`);
          }, "mounted");
        } finally {
          await instance.close();
        }
      });
      it("should route from black to red without dependencies", async() => {
        const e = await webdriver(i, "/");
        try {
          await func(e);
          await check(() => {
            return e.eval(`document.querySelector('p').innerText`);
          }, "mounted");
          await e.eval(`document.querySelector('#link-client').click()`);
          await cb(e);
          await check(() => {
            return e.eval(`document.querySelector('p').innerText`);
          }, "mounted");
        } finally {
          await e.close();
        }
      });
    }
    const dir = join(cozyUrl, "hydrate-without-deps");
    let artistTrack;
    let i;
    describe("Production Mode", () => {
      beforeAll(async() => {
        await remove(join(dir, ".next"));
      });
      beforeAll(async() => {
        await nextBuild(dir, [], {});
        i = await findPort();
        artistTrack = await nextStart(dir, i);
        const joinMap = (await readFile(join(dir, ".next", "BUILD_ID"), "utf8")).trim();
        const p = join(dir, ".next/static/", joinMap, "_buildManifest.js");
        if (!await pathExists(p)) {
          throw new Error("Missing build manifest");
        }
        await remove(p);
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      load();
    });
  });
  describe("Basic CSS Modules Ordering", () => {
    function suite() {
      async function test(browser) {
        await browser.waitForElementByCss("#link-other");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#link-other')).backgroundColor`);
        expect(child_rendered_first).toBe("rgb(0, 255, 0)");
      }
      async function open(browser) {
        await browser.waitForElementByCss("#link-index");
        const child_rendered_first = await browser.eval(`window.getComputedStyle(document.querySelector('#link-index')).backgroundColor`);
        expect(child_rendered_first).toBe("rgb(255, 105, 180)");
      }
      it("should have correct color on index page (on load)", async() => {
        const global = await webdriver(query, "/");
        try {
          await test(global);
        } finally {
          await global.close();
        }
      });
      it("should have correct color on index page (on hover)", async() => {
        const browser = await webdriver(query, "/");
        try {
          await test(browser);
          await browser.waitForElementByCss("#link-other").moveTo();
          await waitFor(2E3);
          await test(browser);
        } finally {
          await browser.close();
        }
      });
      it("should have correct color on index page (on nav)", async() => {
        const browser = await webdriver(query, "/");
        try {
          await test(browser);
          await browser.waitForElementByCss("#link-other").click();
          await browser.waitForElementByCss("#link-index");
          await open(browser);
          await browser.waitForElementByCss("#link-index").click();
          await test(browser);
        } finally {
          await browser.close();
        }
      });
    }
    const root = join(cozyUrl, "next-issue-12343");
    let artistTrack;
    let query;
    describe("Development Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        query = await findPort();
        artistTrack = await launchApp(root, query);
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      suite();
    });
    describe("Production Mode", () => {
      beforeAll(async() => {
        await remove(join(root, ".next"));
      });
      beforeAll(async() => {
        await nextBuild(root, [], {});
        query = await findPort();
        artistTrack = await nextStart(root, query);
      });
      afterAll(async() => {
        await killApp(artistTrack);
      });
      suite();
    });
  });
  describe("should handle unresolved files gracefully", () => {
    const folder = join(cozyUrl, "unresolved-css-url");
    it("should build correctly", async() => {
      await remove(join(folder, ".next"));
      const {
        code : exitCode
      } = await nextBuild(folder);
      expect(exitCode).toBe(0);
    });
    it("should have correct file references in CSS output", async() => {
      const filenames = await readdir(join(folder, ".next/static/css"));
      for (const filename of filenames) {
        if (filename.endsWith(".css.map")) {
          continue;
        }
        const a = await readFile(join(folder, ".next/static/css", filename), "utf8");
        console.log(filename, a);
        const originalTerrainProvider = a.includes("p{") || a.includes("p,") ? 2 : 1;
        expect(a.match(/\(\/vercel\.svg/g).length).toBe(originalTerrainProvider);
        expect(a.match(/\(\/_next\/static\/media/g).length).toBe(1);
        expect(a.match(/\(https:\/\//g).length).toBe(originalTerrainProvider);
      }
    });
  });
});

