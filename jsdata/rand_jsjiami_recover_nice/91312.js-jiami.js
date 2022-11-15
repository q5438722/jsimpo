'use strict';
const path = require("path");
const pkgJson = require("./package-json");
const resourceTestHelper = require("../resource-test-helper");
const root = path["join"](__dirname, "fixtures", "package-json");
const name = "husky";
const initialValue = JSON["stringify"]({
  "hooks" : {}
}, null, 2);
const updateValue = JSON["stringify"]({
  "hooks" : {
    "pre-commit" : "lint-staged"
  }
}, null, 2);
describe("packageJson resource", () => {
  test("e2e package resource test", async() => {
    await resourceTestHelper({
      "resourceModule" : pkgJson,
      "resourceName" : "PackageJson",
      "context" : {
        "root" : root
      },
      "initialObject" : {
        "name" : name,
        "value" : initialValue
      },
      "partialUpdate" : {
        "value" : updateValue
      }
    });
  });
  test("handles multiple parallel create calls", async() => {
    const _0x284dde = pkgJson["create"]({
      "root" : root
    }, {
      "name" : "husky",
      "value" : JSON["parse"](initialValue)
    });
    const _0x2b33ba = pkgJson["create"]({
      "root" : root
    }, {
      "name" : "husky2",
      "value" : JSON["parse"](initialValue)
    });
    const button2Component = await _0x284dde;
    const generationController = await _0x2b33ba;
    expect(button2Component)["toMatchSnapshot"]();
    expect(generationController)["toMatchSnapshot"]();
    await pkgJson["destroy"]({
      "root" : root
    }, button2Component);
    await pkgJson["destroy"]({
      "root" : root
    }, generationController);
  });
  test("handles object values", async() => {
    const button2Component = await pkgJson["create"]({
      "root" : root
    }, {
      "name" : name,
      "value" : JSON["parse"](initialValue)
    });
    expect(button2Component)["toMatchSnapshot"]();
    await pkgJson["destroy"]({
      "root" : root
    }, button2Component);
  });
});

