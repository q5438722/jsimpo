'use strict';
import{
  join as join
}from "path";
import cheerio from "cheerio";
import webdriver from "next-webdriver";
import{
  nextBuild as nextBuild,
  nextExport as nextExport,
  startCleanStaticServer as startCleanStaticServer,
  stopApp as stopApp,
  renderViaHTTP as renderViaHTTP
}from "next-test-utils";
jest.setTimeout(1e3 * 60);
const DOT_NOWA_PATH = join(__dirname, "../");
const reporterPlugin = join(DOT_NOWA_PATH, "out");
describe("Export Dyanmic Pages", () => {
  let a;
  let unBoundedPort;
  beforeAll(async() => {
    await nextBuild(DOT_NOWA_PATH);
    await nextExport(DOT_NOWA_PATH, {
      outdir : reporterPlugin
    });
    a = await startCleanStaticServer(reporterPlugin);
    unBoundedPort = a.address().port;
  });
  afterAll(async() => {
    await stopApp(a);
  });
  it("should of exported with correct asPath", async() => {
    const loginHTML = await renderViaHTTP(unBoundedPort, "/regression/jeff-is-cool");
    const outCover = cheerio.load(loginHTML);
    expect(outCover("#asPath").text()).toBe("/regression/jeff-is-cool");
  });
  it("should hydrate with correct asPath", async() => {
    expect.assertions(1);
    const t = await webdriver(unBoundedPort, "/regression/jeff-is-cool");
    try {
      expect(await t.eval(`window.__AS_PATHS`)).toEqual(["/regression/jeff-is-cool"]);
    } finally {
      await t.close();
    }
  });
});

