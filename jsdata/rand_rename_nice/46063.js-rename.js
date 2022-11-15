'use strict';
import{
  join as join
}from "path";
import{
  findPort as findPort,
  killApp as killApp,
  launchApp as launchApp,
  nextBuild as nextBuild,
  nextStart as nextStart
}from "next-test-utils";
import webdriver from "next-webdriver";
jest.setTimeout(1e3 * 60 * 2);
const PROTOCOL_RE = join(__dirname, "../");
let query;
let NAUMANNI_VERSION;
const runTests = () => {
  it("should contain all values passed in param as array", async() => {
    const browser = await webdriver(query, "/some-page");
    expect(await browser.elementByCss("#items").text()).toBe("1,2");
  });
};
describe("rewrites destination query", () => {
  describe("dev mode", () => {
    beforeAll(async() => {
      query = await findPort();
      NAUMANNI_VERSION = await launchApp(PROTOCOL_RE, query);
    });
    afterAll(() => {
      return killApp(NAUMANNI_VERSION);
    });
    runTests();
  });
  describe("production mode", () => {
    beforeAll(async() => {
      await nextBuild(PROTOCOL_RE);
      query = await findPort();
      NAUMANNI_VERSION = await nextStart(PROTOCOL_RE, query);
    });
    afterAll(() => {
      return killApp(NAUMANNI_VERSION);
    });
    runTests();
  });
});

