import { join } from "path";import cheerio from "cheerio";import { renderViaHTTP, findPort, launchApp, killApp } from "next-test-utils";jest.setTimeout(120000);const appDir = join(__dirname, "..");
var appPort;
var app;
async function get$(t, e) {
  const a = await renderViaHTTP(appPort, t, e);
  return cheerio.load(a);
}describe("TypeScript Features", () => {
  describe("default behavior", () => {
    beforeAll(async () => {
      appPort = await findPort();app = await launchApp(appDir, appPort, {});
    });afterAll(() => killApp(app));it("should alias components", async () => {
      const t = await get$("/basic-alias");
      expect(t("body").text()).toMatch(/World/);
    });it("should resolve the first item in the array first", async () => {
      const t = await get$("/resolve-order");
      expect(t("body").text()).toMatch(/Hello from a/);
    });it("should resolve the second item in as a fallback", async () => {
      const t = await get$("/resolve-fallback");
      expect(t("body").text()).toMatch(/Hello from only b/);
    });it("should resolve a single matching alias", async () => {
      const t = await get$("/single-alias");
      expect(t("body").text()).toMatch(/Hello/);
    });it("should not resolve to .d.ts files", async () => {
      const t = await get$("/alias-to-d-ts");
      expect(t("body").text()).toMatch(/Not aliased to d\.ts file/);
    });
  });
});
