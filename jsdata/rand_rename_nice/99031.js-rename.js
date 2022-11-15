'use strict';
const {
  expect : expect
} = require("chai");
const awsRequest = require("@serverless/test/aws-request");
const fixtures = require("../../fixtures/programmatic");
const {
  confirmCloudWatchLogs : confirmCloudWatchLogs
} = require("../../utils/misc");
const {
  deployService : deployService,
  removeService : removeService
} = require("../../utils/integration");
describe("Function destinations Integration Test", function() {
  this.timeout(1e3 * 60 * 20);
  let name;
  let servicePath;
  const stripeAPIVersion = "dev";
  before(async() => {
    const context = await fixtures.setup("functionDestinations");
    ({
      servicePath : servicePath
    } = context);
    const TRAVIS_API_JOBS_URL = context.serviceConfig.service;
    name = `${TRAVIS_API_JOBS_URL}-${stripeAPIVersion}`;
    await deployService(servicePath);
  });
  after(async() => {
    if (!servicePath) {
      return;
    }
    await removeService(servicePath);
  });
  it("on async invoke should invoke destination target", async() => {
    return confirmCloudWatchLogs(`/aws/lambda/${name}-target`, async() => {
      await awsRequest("Lambda", "invoke", {
        FunctionName : `${name}-trigger`,
        InvocationType : "Event"
      });
    }, {
      checkIsComplete : (uuids) => {
        return uuids.length;
      }
    }).then((e) => {
      expect(e.length > 0).to.equal(true);
    });
  });
});

