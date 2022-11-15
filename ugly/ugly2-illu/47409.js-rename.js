import { join } from "path";import { createServer } from "http";import { fetchViaHTTP, nextBuild, findPort, nextStart, launchApp, killApp } from "next-test-utils";import webdriver from "next-webdriver";jest.setTimeout(60000);const appDir = join(__dirname, "../");
var appPort;
var app;
var mockServer;
describe("node-fetch-keep-alive", () => {
  describe("dev", () => {
    beforeAll(async () => {
      mockServer = createServer((e, t) => {
        var { connection: o } = e.headers;
        t.end(JSON.stringify({ connection: o }));
      });mockServer.listen(44001);appPort = await findPort();app = await launchApp(appDir, appPort);
    });afterAll(async () => {
      await killApp(app);mockServer.close();
    });it("should send keep-alive for json API", async () => {
      const e = await fetchViaHTTP(appPort, "/api/json");
      const t = await e.json();
      expect(t).toEqual({ connection: "keep-alive" });
    });it("should send keep-alive for getStaticProps", async () => {
      const e = await webdriver(appPort, "/ssg");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ connection: "keep-alive" });await e.close();
    });it("should send keep-alive for getStaticPaths", async () => {
      const e = await webdriver(appPort, "/blog/first");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ slug: "first" });await e.close();
    });it("should send keep-alive for getServerSideProps", async () => {
      const e = await webdriver(appPort, "/ssr");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ connection: "keep-alive" });await e.close();
    });
  });describe("production", () => {
    beforeAll(async () => {
      mockServer = createServer((e, t) => {
        var { connection: o } = e.headers;
        t.end(JSON.stringify({ connection: o }));
      });mockServer.listen(44001);var { stdout: e, stderr: t } = await nextBuild(appDir, [], { stdout: true, stderr: true });
      if (e) console.log(e);if (t) console.error(t);appPort = await findPort();app = await nextStart(appDir, appPort);
    });afterAll(async () => {
      await killApp(app);mockServer.close();
    });it("should send keep-alive for json API", async () => {
      const e = await fetchViaHTTP(appPort, "/api/json");
      const t = await e.json();
      expect(t).toEqual({ connection: "keep-alive" });
    });it("should send keep-alive for getStaticProps", async () => {
      const e = await webdriver(appPort, "/ssg");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ connection: "keep-alive" });await e.close();
    });it("should send keep-alive for getStaticPaths", async () => {
      const e = await webdriver(appPort, "/blog/first");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ slug: "first" });await e.close();
    });it("should send keep-alive for getServerSideProps", async () => {
      const e = await webdriver(appPort, "/ssr");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ connection: "keep-alive" });await e.close();
    });
  });function e() {
    it("should send keep-alive for json API", async () => {
      const e = await fetchViaHTTP(appPort, "/api/json");
      const t = await e.json();
      expect(t).toEqual({ connection: "keep-alive" });
    });it("should send keep-alive for getStaticProps", async () => {
      const e = await webdriver(appPort, "/ssg");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ connection: "keep-alive" });await e.close();
    });it("should send keep-alive for getStaticPaths", async () => {
      const e = await webdriver(appPort, "/blog/first");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ slug: "first" });await e.close();
    });it("should send keep-alive for getServerSideProps", async () => {
      const e = await webdriver(appPort, "/ssr");
      const t = await e.elementById("props").text();
      const o = JSON.parse(t);
      expect(o).toEqual({ connection: "keep-alive" });await e.close();
    });
  }
});
