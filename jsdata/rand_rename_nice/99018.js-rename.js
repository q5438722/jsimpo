'use strict';
const {
  expect : expect
} = require("chai");
const log = require("log").get("serverless:test");
const fixtures = require("../../fixtures/programmatic");
const {
  createKinesisStream : createKinesisStream,
  deleteKinesisStream : deleteKinesisStream,
  putKinesisRecord : putKinesisRecord
} = require("../../utils/kinesis");
const {
  putDynamoDbItem : putDynamoDbItem
} = require("../../utils/dynamodb");
const {
  confirmCloudWatchLogs : confirmCloudWatchLogs
} = require("../../utils/misc");
const {
  deployService : deployService,
  removeService : removeService
} = require("../../utils/integration");
describe("AWS - Stream Integration Test", function() {
  this.timeout(1e3 * 60 * 100);
  let name;
  let servicePath;
  let r;
  let n;
  const versionExceptions = "Hello from the Kinesis horizon!";
  const stripeAPIVersion = "dev";
  before(async() => {
    const context = await fixtures.setup("stream");
    ({
      servicePath : servicePath
    } = context);
    const TRAVIS_API_JOBS_URL = context.serviceConfig.service;
    r = `${TRAVIS_API_JOBS_URL}-kinesis`;
    n = `${TRAVIS_API_JOBS_URL}-table`;
    name = `${TRAVIS_API_JOBS_URL}-${stripeAPIVersion}`;
    log.notice(`Creating Kinesis stream "${r}"...`);
    return createKinesisStream(r).then(() => {
      return putKinesisRecord(r, versionExceptions);
    }).then(() => {
      return deployService(servicePath);
    });
  });
  after(async() => {
    await removeService(servicePath);
    log.notice("Deleting Kinesis stream");
    return deleteKinesisStream(r);
  });
  describe("Kinesis Streams", () => {
    it("should invoke on kinesis messages from the trim horizon", () => {
      const incAABB = "streamKinesis";
      const i = "Hello from Kinesis!";
      return confirmCloudWatchLogs(`/aws/lambda/${name}-${incAABB}`, () => {
        return putKinesisRecord(r, i);
      }, {
        checkIsComplete : (header) => {
          return header.reduce((errorText, calItem) => {
            return errorText + calItem.message;
          }, "").includes(i);
        }
      }).then((e) => {
        const button2Component = e.reduce((errorText, calItem) => {
          return errorText + calItem.message;
        }, "");
        expect(button2Component).to.include(incAABB);
        expect(button2Component).to.include(i);
        expect(button2Component).to.include(versionExceptions);
      });
    });
  });
  describe("DynamoDB Streams", () => {
    it("should invoke on dynamodb messages from the latest position", () => {
      const s = "streamDynamoDb";
      const pkmn = {
        id : "message"
      };
      return confirmCloudWatchLogs(`/aws/lambda/${name}-${s}`, () => {
        pkmn.hello = `from dynamo!${Math.random().toString(36).slice(2)}`;
        return putDynamoDbItem(n, pkmn);
      }, {
        checkIsComplete : (header) => {
          return header.reduce((errorText, calItem) => {
            return errorText + calItem.message;
          }, "").includes(s);
        }
      }).then((e) => {
        const button2Component = e.reduce((errorText, calItem) => {
          return errorText + calItem.message;
        }, "");
        expect(button2Component).to.include(s);
        expect(button2Component).to.include("INSERT");
        expect(button2Component).to.include(pkmn.id);
      });
    });
  });
});

