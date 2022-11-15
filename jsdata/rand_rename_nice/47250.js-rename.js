'use strict';
import{
  join as join
}from "path";
import{
  killApp as killApp,
  findPort as findPort,
  launchApp as launchApp,
  fetchViaHTTP as fetchViaHTTP,
  initNextServerScript as initNextServerScript
}from "next-test-utils";
import clone from "clone";
import getPort from "get-port";
jest.setTimeout(1e3 * 60 * 2);
const app = join(__dirname, "../");
let query;
let port;
let headless;
jest.setTimeout(1e3 * 60 * 2);
const config = {};
function invokeGuardedCallbackTests() {
  it("should parse JSON body", async() => {
    query = await findPort();
    port = await launchApp(app, query, {});
    const xvals0 = await fn();
    expect(xvals0).toEqual([{
      title : "Nextjs"
    }]);
    killApp(port);
  });
  it("should not throw if request body is already parsed in custom middleware", async() => {
    await run();
    const xvals0 = await fn();
    expect(xvals0).toEqual([{
      title : "Nextjs"
    }]);
    killApp(headless);
  });
  it("should not throw if request's content-type is invalid", async() => {
    await run();
    const child_rendered_first = await post();
    expect(child_rendered_first).toBe(200);
    killApp(headless);
  });
}
async function fn() {
  const cb = await fetchViaHTTP(query, "/api", null, {
    method : "POST",
    headers : {
      "Content-Type" : "application/json; charset=utf-8"
    },
    body : JSON.stringify([{
      title : "Nextjs"
    }])
  }).then((batchResponse) => {
    return batchResponse.ok && batchResponse.json();
  });
  return cb;
}
async function post() {
  const req = await fetchViaHTTP(query, "/api", null, {
    method : "POST",
    headers : {
      "Content-Type" : "application/json;"
    },
    body : JSON.stringify([{
      title : "Nextjs"
    }])
  }).then((testsStatus) => {
    return testsStatus.status;
  });
  return req;
}
const run = async(modsHandlers = {}, implOpts) => {
  const artistTrack = join(app, "server.js");
  config.appPort = query = await getPort();
  const GET_AUTH_URL_TIMEOUT = Object.assign({}, clone(process.env), {
    PORT : `${query}`
  }, modsHandlers);
  headless = await initNextServerScript(artistTrack, /ready on/i, GET_AUTH_URL_TIMEOUT, /ReferenceError: options is not defined/, implOpts);
};
invokeGuardedCallbackTests();

