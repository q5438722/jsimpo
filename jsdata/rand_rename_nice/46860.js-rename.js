'use strict';
import{
  findPort as findPort,
  killApp as killApp,
  launchApp as launchApp,
  nextBuild as nextBuild,
  nextStart as nextStart
}from "next-test-utils";
import webdriver from "next-webdriver";
import{
  join as join
}from "path";
jest.setTimeout(1e3 * 60);
const dialer = join(__dirname, "../");
let query;
let artistTrack;
let _this;
function spec() {
  it("should load static unicode image", async() => {
    const cssIntegrity = await _this.elementById("static").getAttribute("src");
    expect(cssIntegrity).toMatch(/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);
    const e = await fetch(cssIntegrity);
    expect(e.status).toBe(200);
  });
  it("should load internal unicode image", async() => {
    const cssIntegrity = await _this.elementById("internal").getAttribute("src");
    expect(cssIntegrity).toMatch("/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png");
    const e = await fetch(cssIntegrity);
    expect(e.status).toBe(200);
  });
  it("should load external unicode image", async() => {
    const cssIntegrity = await _this.elementById("external").getAttribute("src");
    expect(cssIntegrity).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png");
    const e = await fetch(cssIntegrity);
    expect(e.status).toBe(200);
  });
  it("should load internal image with space", async() => {
    const cssIntegrity = await _this.elementById("internal-space").getAttribute("src");
    expect(cssIntegrity).toMatch("/_next/image?url=%2Fhello%2520world.jpg");
    const e = await fetch(cssIntegrity);
    expect(e.status).toBe(200);
  });
  it("should load external image with space", async() => {
    const cssIntegrity = await _this.elementById("external-space").getAttribute("src");
    expect(cssIntegrity).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg");
    const e = await fetch(cssIntegrity);
    expect(e.status).toBe(200);
  });
}
describe("Image Component Unicode Image URL", () => {
  describe("dev mode", () => {
    beforeAll(async() => {
      query = await findPort();
      artistTrack = await launchApp(dialer, query);
      _this = await webdriver(query, "/");
    });
    afterAll(() => {
      killApp(artistTrack);
      if (_this) {
        _this.close();
      }
    });
    spec();
  });
  describe("server mode", () => {
    beforeAll(async() => {
      await nextBuild(dialer);
      query = await findPort();
      artistTrack = await nextStart(dialer, query);
      _this = await webdriver(query, "/");
    });
    afterAll(() => {
      killApp(artistTrack);
      if (_this) {
        _this.close();
      }
    });
    spec();
  });
});

