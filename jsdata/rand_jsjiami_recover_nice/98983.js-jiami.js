'use strict';
const chai = require("chai");
const path = require("path");
const overrideEnv = require("process-utils/override-env");
const fs = require("fs");
const conditionallyLoadDotenv = require("../../../../lib/cli/conditionally-load-dotenv");
chai["use"](require("chai-as-promised"));
const expect = require("chai")["expect"];
describe("test/unit/lib/cli/conditionally-load-dotenv.test.js", () => {
  let gotoNewOfflinePage;
  before(async() => {
    const PL$26 = _0xfb7434["GeRbH"];
    await fs["promises"]["writeFile"](path["resolve"](_0xfb7434["ccChj"]), PL$26);
    const _0x1032b7 = _0xfb7434["CYZUk"];
    const artistTrack = _0xfb7434["Aeaty"];
    await fs["promises"]["writeFile"](path["resolve"](".env." + _0x1032b7), artistTrack);
  });
  beforeEach(() => {
    conditionallyLoadDotenv["clear"]();
    ({
      restoreEnv : restoreEnv
    } = overrideEnv());
  });
  afterEach(() => {
    if (gotoNewOfflinePage) {
      gotoNewOfflinePage();
    }
  });
  it(_0xfb7434["dTSMQ"], async() => {
    await conditionallyLoadDotenv({}, {
      "useDotenv" : !![]
    });
    expect(process["env"]["DEFAULT_ENV_VARIABLE"])["to"]["equal"](_0xfb7434["eCuWr"]);
    expect(process["env"]["STAGE_ENV_VARIABLE"])["to"]["be"]["undefined"];
  });
  it("should load environment variables from stage .env file if matching stage", async() => {
    await conditionallyLoadDotenv({
      "stage" : _0xfb7434["CYZUk"]
    }, {
      "useDotenv" : !![]
    });
    expect(process["env"]["DEFAULT_ENV_VARIABLE"])["to"]["be"]["undefined"];
    expect(process["env"]["STAGE_ENV_VARIABLE"])["to"]["equal"](_0xfb7434["jcGFU"]);
  });
});

