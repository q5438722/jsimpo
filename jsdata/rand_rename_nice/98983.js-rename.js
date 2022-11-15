'use strict';
const chai = require("chai");
const path = require("path");
const overrideEnv = require("process-utils/override-env");
const fs = require("fs");
const conditionallyLoadDotenv = require("../../../../lib/cli/conditionally-load-dotenv");
chai.use(require("chai-as-promised"));
const expect = require("chai").expect;
describe("test/unit/lib/cli/conditionally-load-dotenv.test.js", () => {
  let gotoNewOfflinePage;
  before(async() => {
    const currentThing = "DEFAULT_ENV_VARIABLE=valuefromdefault";
    await fs.promises.writeFile(path.resolve(".env"), currentThing);
    const t = "testing";
    const mochaOptsText = "STAGE_ENV_VARIABLE=valuefromstage";
    await fs.promises.writeFile(path.resolve(`.env.${t}`), mochaOptsText);
  });
  beforeEach(() => {
    conditionallyLoadDotenv.clear();
    ({
      restoreEnv : gotoNewOfflinePage
    } = overrideEnv());
  });
  afterEach(() => {
    if (gotoNewOfflinePage) {
      gotoNewOfflinePage();
    }
  });
  it("should load environment variables from default .env file if no matching stage", async() => {
    await conditionallyLoadDotenv({}, {
      useDotenv : true
    });
    expect(process.env.DEFAULT_ENV_VARIABLE).to.equal("valuefromdefault");
    expect(process.env.STAGE_ENV_VARIABLE).to.be.undefined;
  });
  it("should load environment variables from stage .env file if matching stage", async() => {
    await conditionallyLoadDotenv({
      stage : "testing"
    }, {
      useDotenv : true
    });
    expect(process.env.DEFAULT_ENV_VARIABLE).to.be.undefined;
    expect(process.env.STAGE_ENV_VARIABLE).to.equal("valuefromstage");
  });
});

