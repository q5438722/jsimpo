'use strict';
import cheerio from "cheerio";
import fs from "fs-extra";
import{
  findPort as findPort,
  killApp as killApp,
  launchApp as launchApp,
  nextBuild as nextBuild,
  nextStart as nextStart,
  renderViaHTTP as renderViaHTTP
}from "next-test-utils";
import{
  join as join
}from "path";
jest.setTimeout(1e3 * 60 * 2);
const template = join(__dirname, "..");
const oldHeros = join(template, "pages/_app.js");
const cozyUrl = join(template, "pages/index.js");
let artistTrack;
let query;
let currentThing;
const runTests = (i) => {
  const exports = async() => {
    if (i) {
      query = await findPort();
      artistTrack = await launchApp(template, query);
    } else {
      const {
        code : aerisCode
      } = await nextBuild(template);
      if (aerisCode !== 0) {
        throw new Error(`build faild, exit code: ${aerisCode}`);
      }
      query = await findPort();
      artistTrack = await nextStart(template, query);
    }
    const loginHTML = await renderViaHTTP(query, "/");
    await killApp(artistTrack);
    const checkedSubscribe = cheerio.load(loginHTML);
    return JSON.parse(checkedSubscribe("#__NEXT_DATA__").text());
  };
  it("should not have gip or appGip in NEXT_DATA for page without getInitialProps", async() => {
    const gradientEvent = await exports();
    expect(gradientEvent.gip).toBe(undefined);
    expect(gradientEvent.appGip).toBe(undefined);
  });
  it("should have gip in NEXT_DATA for page with getInitialProps", async() => {
    currentThing = await fs.readFile(cozyUrl, "utf8");
    await fs.writeFile(cozyUrl, `\n      const Page = () => 'hi'\n      Page.getInitialProps = () => ({ hello: 'world' })\n      export default Page\n    `);
    const gradientEvent = await exports();
    expect(gradientEvent.gip).toBe(true);
  });
  it("should have gip and appGip in NEXT_DATA for page with getInitialProps and _app with getInitialProps", async() => {
    await fs.writeFile(oldHeros, `\n      const App = ({ Component, pageProps }) => <Component {...pageProps} />\n      App.getInitialProps = async (ctx) => {\n        let pageProps = {}\n        if (ctx.Component.getInitialProps) {\n          pageProps = await ctx.Component.getInitialProps(ctx.ctx)\n        }\n        return { pageProps }\n      }\n      export default App\n    `);
    const gradientEvent = await exports();
    expect(gradientEvent.gip).toBe(true);
    expect(gradientEvent.appGip).toBe(true);
  });
  it("should only have appGip in NEXT_DATA for page without getInitialProps and _app with getInitialProps", async() => {
    await fs.writeFile(cozyUrl, currentThing);
    const gradientEvent = await exports();
    await fs.remove(oldHeros);
    expect(gradientEvent.gip).toBe(undefined);
    expect(gradientEvent.appGip).toBe(true);
  });
};
describe("gip identifiers", () => {
  describe("dev mode", () => {
    runTests(true);
  });
  describe("production mode", () => {
    runTests();
  });
});

