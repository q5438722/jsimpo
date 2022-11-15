import { join } from "path";import { killApp, findPort, launchApp, fetchViaHTTP, initNextServerScript } from "next-test-utils";import clone from "clone";import getPort from "get-port";jest.setTimeout(120000);const appDir = join(__dirname, "../");
var appPort;
var app;
var server;
jest.setTimeout(120000);const context = {};
function runTests() {
  it("should parse JSON body", async () => {
    appPort = await findPort();app = await launchApp(appDir, appPort, {});const t = await makeRequest();
    expect(t).toEqual([{ title: "Nextjs" }]);killApp(app);
  });it("should not throw if request body is already parsed in custom middleware", async () => {
    await startServer();const t = await makeRequest();
    expect(t).toEqual([{ title: "Nextjs" }]);killApp(server);
  });it("should not throw if request's content-type is invalid", async () => {
    await startServer();const t = await makeRequestWithInvalidContentType();
    expect(t).toBe(200);killApp(server);
  });
}async function makeRequest() {
  const t = await fetchViaHTTP(appPort, "/api", null, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify([{ title: "Nextjs" }]) }).then(t => t.ok && t.json());
  return t;
}async function makeRequestWithInvalidContentType() {
  const t = await fetchViaHTTP(appPort, "/api", null, { method: "POST", headers: { "Content-Type": "application/json;" }, body: JSON.stringify([{ title: "Nextjs" }]) }).then(t => t.status);
  return t;
}
const startServer = async (t = {}, e) => {
  const a = join(appDir, "server.js");
  context.appPort = appPort = await getPort();const o = Object.assign({}, clone(process.env), { PORT: `${appPort}` }, t);
  server = await initNextServerScript(a, /ready on/i, o, /ReferenceError: options is not defined/, e);
};

it("should parse JSON body", async () => {
  appPort = await findPort();app = await launchApp(appDir, appPort, {});const t = await makeRequest();
  expect(t).toEqual([{ title: "Nextjs" }]);killApp(app);
});it("should not throw if request body is already parsed in custom middleware", async () => {
  await startServer();const t = await makeRequest();
  expect(t).toEqual([{ title: "Nextjs" }]);killApp(server);
});it("should not throw if request's content-type is invalid", async () => {
  await startServer();const t = await makeRequestWithInvalidContentType();
  expect(t).toBe(200);killApp(server);
});
