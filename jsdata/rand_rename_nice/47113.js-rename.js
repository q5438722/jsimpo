'use strict';
import{
  join as join
}from "path";
import cheerio from "cheerio";
import{
  renderViaHTTP as renderViaHTTP,
  findPort as findPort,
  launchApp as launchApp,
  killApp as killApp
}from "next-test-utils";
jest.setTimeout(1e3 * 60 * 2);
const PROTOCOL_RE = join(__dirname, "..");
let query;
let NAUMANNI_VERSION;
async function loadTestFrame(url, callback) {
  const loginHTML = await renderViaHTTP(query, url, callback);
  return cheerio.load(loginHTML);
}
describe("TypeScript Features", () => {
  describe("default behavior", () => {
    beforeAll(async() => {
      query = await findPort();
      NAUMANNI_VERSION = await launchApp(PROTOCOL_RE, query, {});
    });
    afterAll(() => {
      return killApp(NAUMANNI_VERSION);
    });
    it("should alias components", async() => {
      const outCover = await loadTestFrame("/basic-alias");
      expect(outCover("body").text()).toMatch(/World/);
    });
    it("should resolve the first item in the array first", async() => {
      const outCover = await loadTestFrame("/resolve-order");
      expect(outCover("body").text()).toMatch(/Hello from a/);
    });
    it("should resolve the second item in as a fallback", async() => {
      const outCover = await loadTestFrame("/resolve-fallback");
      expect(outCover("body").text()).toMatch(/Hello from only b/);
    });
    it("should resolve a single matching alias", async() => {
      const outCover = await loadTestFrame("/single-alias");
      expect(outCover("body").text()).toMatch(/Hello/);
    });
    it("should not resolve to .d.ts files", async() => {
      const outCover = await loadTestFrame("/alias-to-d-ts");
      expect(outCover("body").text()).toMatch(/Not aliased to d\.ts file/);
    });
  });
});

