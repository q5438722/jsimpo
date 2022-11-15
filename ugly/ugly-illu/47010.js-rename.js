import cheerio from "cheerio";import fs from "fs-extra";import { findPort, killApp, launchApp, nextBuild, nextStart, renderViaHTTP } from "next-test-utils";import { join } from "path";jest.setTimeout(120000);const appDir = join(__dirname, "..");
const appPage = join(appDir, "pages/_app.js");
const indexPage = join(appDir, "pages/index.js");
var app;
var appPort;
var indexPageContent;

const runTests = i => {
  const e = async () => {
    if (i) {
      appPort = await findPort();app = await launchApp(appDir, appPort);
    } else {
      var { code: p } = await nextBuild(appDir);
      if (p !== 0) throw new Error(`build faild, exit code: ${p}`);appPort = await findPort();app = await nextStart(appDir, appPort);
    }const t = await renderViaHTTP(appPort, "/");
    await killApp(app);const e = cheerio.load(t);
    return JSON.parse(e("#__NEXT_DATA__").text());
  };

  it("should not have gip or appGip in NEXT_DATA for page without getInitialProps", async () => {
    const t = await e();
    expect(t.gip).toBe(undefined);expect(t.appGip).toBe(undefined);
  });it("should have gip in NEXT_DATA for page with getInitialProps", async () => {
    indexPageContent = await fs.readFile(indexPage, "utf8");await fs.writeFile(indexPage, `
      const Page = () => 'hi'
      Page.getInitialProps = () => ({ hello: 'world' })
      export default Page
    `);const t = await e();
    expect(t.gip).toBe(true);
  });it("should have gip and appGip in NEXT_DATA for page with getInitialProps and _app with getInitialProps", async () => {
    await fs.writeFile(appPage, `
      const App = ({ Component, pageProps }) => <Component {...pageProps} />
      App.getInitialProps = async (ctx) => {
        let pageProps = {}
        if (ctx.Component.getInitialProps) {
          pageProps = await ctx.Component.getInitialProps(ctx.ctx)
        }
        return { pageProps }
      }
      export default App
    `);const t = await e();
    expect(t.gip).toBe(true);expect(t.appGip).toBe(true);
  });it("should only have appGip in NEXT_DATA for page without getInitialProps and _app with getInitialProps", async () => {
    await fs.writeFile(indexPage, indexPageContent);const t = await e();
    await fs.remove(appPage);expect(t.gip).toBe(undefined);expect(t.appGip).toBe(true);
  });
};

describe("gip identifiers", () => {
  describe("dev mode", () => {
    runTests(true);
  });describe("production mode", () => {
    runTests();
  });
});
