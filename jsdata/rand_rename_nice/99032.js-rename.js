'use strict';
const WebSocket = require("ws");
const {
  expect : expect
} = require("chai");
const awsRequest = require("@serverless/test/aws-request");
const log = require("log").get("serverless:test");
const wait = require("timers-ext/promise/sleep");
const fixtures = require("../../fixtures/programmatic");
const {
  confirmCloudWatchLogs : confirmCloudWatchLogs
} = require("../../utils/misc");
const {
  deployService : deployService,
  removeService : removeService
} = require("../../utils/integration");
const {
  createApi : createApi,
  deleteApi : deleteApi,
  getRoutes : getRoutes,
  createStage : createStage,
  deleteStage : deleteStage
} = require("../../utils/websocket");
describe("AWS - API Gateway Websocket Integration Test", function() {
  async function _buildDocumentation() {
    const result = await awsRequest("CloudFormation", "describeStacks", {
      StackName : currentId
    });
    const t = result.Stacks[0].Outputs.find((output) => {
      return output.OutputKey === "ServiceEndpointWebsocket";
    }).OutputValue;
    return t;
  }
  this.timeout(1e3 * 60 * 10);
  let currentId;
  let service;
  let servicePath;
  let getAuthProvider;
  let c;
  const n = "dev";
  before(async() => {
    const context = await fixtures.setup("websocket");
    ({
      servicePath : servicePath,
      updateConfig : getAuthProvider
    } = context);
    service = context.serviceConfig.service;
    currentId = `${service}-${n}`;
    return deployService(servicePath);
  });
  after(() => {
    if (!c) {
      return null;
    }
    return removeService(servicePath);
  });
  describe("Two-Way Setup", () => {
    let _takingTooLongTimeout;
    after(() => {
      return clearTimeout(_takingTooLongTimeout);
    });
    it("should expose a websocket route that can reply to a message", async() => {
      const wssurl = await _buildDocumentation();
      return (new Promise((e, t) => {
        const s = new WebSocket(wssurl);
        t = ((t) => {
          return (e) => {
            t(e);
            try {
              s.close();
            } catch (e) {
            }
          };
        })(t);
        const scrollHeightObserver = () => {
          log.debug("Sending message to 'hello' route");
          s.send(JSON.stringify({
            action : "hello",
            name : "serverless"
          }));
          _takingTooLongTimeout = setTimeout(scrollHeightObserver, 1e3);
        };
        s.on("error", t);
        s.on("open", scrollHeightObserver);
        s.on("close", e);
        s.on("message", (e) => {
          c = true;
          clearTimeout(_takingTooLongTimeout);
          try {
            log.debug(`Received WebSocket message: ${e}`);
            expect(e).to.equal("Hello, serverless");
          } finally {
            s.close();
          }
        });
      })).finally(() => {
        return clearTimeout(_takingTooLongTimeout);
      });
    });
  });
  describe("Minimal Setup", () => {
    it("should expose an accessible websocket endpoint", async function() {
      if (!c) {
        this.skip();
      }
      const button2Component = await _buildDocumentation();
      log.debug(`WebSocket Server URL ${button2Component}`);
      expect(button2Component).to.match(/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/);
      return new Promise((e, t) => {
        const s = new WebSocket(button2Component);
        let o = false;
        t = ((t) => {
          return (e) => {
            o = true;
            t(e);
            try {
              s.close();
            } catch (e) {
            }
          };
        })(t);
        s.on("error", t);
        s.on("open", () => {
          confirmCloudWatchLogs(`/aws/websocket/${currentId}`, () => {
            if (o) {
              throw new Error("Stop propagation");
            }
            s.send("test message");
            return wait(500);
          }).then((e) => {
            expect(e.length > 0).to.equal(true);
            s.close();
          }, t);
        });
        s.on("close", e);
        s.on("message", (e) => {
          log.debug("Unexpected WebSocket message", e);
          t(new Error("Unexpected message"));
        });
      });
    });
    describe("when using an existing websocket API", () => {
      let ast;
      before(async function() {
        if (!c) {
          this.skip();
        }
        const callAPI = `${n}-${service}-ext-api`;
        const parseResult = await createApi(callAPI);
        ast = parseResult.ApiId;
        await createStage(ast, "dev");
        await getAuthProvider({
          provider : {
            apiGateway : {
              websocketApiId : ast
            }
          }
        });
        return deployService(servicePath);
      });
      after(async() => {
        if (!c) {
          return;
        }
        await getAuthProvider({
          provider : {
            apiGateway : {
              websocketApiId : null
            }
          }
        });
        await deleteStage(ast, "dev");
        await deployService(servicePath);
        log.debug("Deleting external websocket API...");
        await deleteApi(ast);
      });
      it("should add the routes to the referenced API", async() => {
        const e = await getRoutes(ast);
        expect(e.length).to.equal(4);
      });
    });
  });
});

