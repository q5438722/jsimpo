import { join } from "path";import cheerio from "cheerio";import webdriver from "next-webdriver";import { nextBuild, nextExport, startCleanStaticServer, stopApp, renderViaHTTP } from "next-test-utils";jest.setTimeout(60000);const appDir = join(__dirname, "../");
const outdir = join(appDir, "out");
describe("Export Dyanmic Pages", () => {
  var t;
  var r;
  beforeAll(async () => {
    await nextBuild(appDir);await nextExport(appDir, { outdir: outdir });t = await startCleanStaticServer(outdir);r = t.address().port;
  });afterAll(async () => {
    await stopApp(t);
  });it("should of exported with correct asPath", async () => {
    const t = await renderViaHTTP(r, "/regression/jeff-is-cool");
    const e = cheerio.load(t);
    expect(e("#asPath").text()).toBe("/regression/jeff-is-cool");
  });it("should hydrate with correct asPath", async () => {
    expect.assertions(1);const t = await webdriver(r, "/regression/jeff-is-cool");
    try {
      expect((await t.eval(`window.__AS_PATHS`))).toEqual(["/regression/jeff-is-cool"]);
    } finally {
      await t.close();
    }
  });
});
