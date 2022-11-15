import path from "path";import { expect } from "chai";import jscodeshift from "jscodeshift";import transform from "./collapse-rename-collapsedheight";import readFile from "../util/readFile";function read(e) {
  return readFile(path.join(__dirname, e));
}describe("@material-ui/codemod", () => {
  describe("v5.0.0", () => {
    describe("collapse-rename-collapsedheight", () => {
      it("transforms props as needed", () => {
        const e = transform({ source: read("./collapse-rename-collapsedheight.test/actual.js"), path: require.resolve("./collapse-rename-collapsedheight.test/actual.js") }, { jscodeshift: jscodeshift }, {});
        const t = read("./collapse-rename-collapsedheight.test/expected.js");
        expect(e).to.equal(t, "The transformed version should be correct");
      });it("should be idempotent", () => {
        const e = transform({ source: read("./collapse-rename-collapsedheight.test/expected.js"), path: require.resolve("./collapse-rename-collapsedheight.test/expected.js") }, { jscodeshift: jscodeshift }, {});
        const t = read("./collapse-rename-collapsedheight.test/expected.js");
        expect(e).to.equal(t, "The transformed version should be correct");
      });
    });
  });
});
