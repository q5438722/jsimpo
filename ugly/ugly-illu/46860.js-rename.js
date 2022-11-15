import { findPort, killApp, launchApp, nextBuild, nextStart } from "next-test-utils";import webdriver from "next-webdriver";import { join } from "path";jest.setTimeout(60000);const appDir = join(__dirname, "../");
var appPort;
var app;
var browser;
function runTests() {
  it("should load static unicode image", async () => {
    const t = await browser.elementById("static").getAttribute("src");
    expect(t).toMatch(/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);const e = await fetch(t);
    expect(e.status).toBe(200);
  });it("should load internal unicode image", async () => {
    const t = await browser.elementById("internal").getAttribute("src");
    expect(t).toMatch("/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png");const e = await fetch(t);
    expect(e.status).toBe(200);
  });it("should load external unicode image", async () => {
    const t = await browser.elementById("external").getAttribute("src");
    expect(t).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png");const e = await fetch(t);
    expect(e.status).toBe(200);
  });it("should load internal image with space", async () => {
    const t = await browser.elementById("internal-space").getAttribute("src");
    expect(t).toMatch("/_next/image?url=%2Fhello%2520world.jpg");const e = await fetch(t);
    expect(e.status).toBe(200);
  });it("should load external image with space", async () => {
    const t = await browser.elementById("external-space").getAttribute("src");
    expect(t).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg");const e = await fetch(t);
    expect(e.status).toBe(200);
  });
}describe("Image Component Unicode Image URL", () => {
  describe("dev mode", () => {
    beforeAll(async () => {
      appPort = await findPort();app = await launchApp(appDir, appPort);browser = await webdriver(appPort, "/");
    });afterAll(() => {
      killApp(app);if (browser) {
        browser.close();
      }
    });it("should load static unicode image", async () => {
      const t = await browser.elementById("static").getAttribute("src");
      expect(t).toMatch(/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load internal unicode image", async () => {
      const t = await browser.elementById("internal").getAttribute("src");
      expect(t).toMatch("/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png");const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load external unicode image", async () => {
      const t = await browser.elementById("external").getAttribute("src");
      expect(t).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png");const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load internal image with space", async () => {
      const t = await browser.elementById("internal-space").getAttribute("src");
      expect(t).toMatch("/_next/image?url=%2Fhello%2520world.jpg");const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load external image with space", async () => {
      const t = await browser.elementById("external-space").getAttribute("src");
      expect(t).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg");const e = await fetch(t);
      expect(e.status).toBe(200);
    });
  });describe("server mode", () => {
    beforeAll(async () => {
      await nextBuild(appDir);appPort = await findPort();app = await nextStart(appDir, appPort);browser = await webdriver(appPort, "/");
    });afterAll(() => {
      killApp(app);if (browser) {
        browser.close();
      }
    });it("should load static unicode image", async () => {
      const t = await browser.elementById("static").getAttribute("src");
      expect(t).toMatch(/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load internal unicode image", async () => {
      const t = await browser.elementById("internal").getAttribute("src");
      expect(t).toMatch("/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png");const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load external unicode image", async () => {
      const t = await browser.elementById("external").getAttribute("src");
      expect(t).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png");const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load internal image with space", async () => {
      const t = await browser.elementById("internal-space").getAttribute("src");
      expect(t).toMatch("/_next/image?url=%2Fhello%2520world.jpg");const e = await fetch(t);
      expect(e.status).toBe(200);
    });it("should load external image with space", async () => {
      const t = await browser.elementById("external-space").getAttribute("src");
      expect(t).toMatch("/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg");const e = await fetch(t);
      expect(e.status).toBe(200);
    });
  });
});
