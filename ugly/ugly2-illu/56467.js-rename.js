"use strict";

const common = require("../../common");

const fs = require("fs");

const assert = require("assert");

const addon = require(`./build/${common.buildType}/test_general`);

const path = require("path");

const v8TestsDir = path.resolve(__dirname, "..", "..", "..", "deps", "v8", "test", "mjsunit");
const v8TestsDirExists = fs.existsSync(v8TestsDir);
function assertTrue(s) {
  return assert.strictEqual(s, true);
}function assertFalse(s) {
  assert.strictEqual(s, false);
}function assertEquals(s, e) {
  assert.strictEqual(s, e);
}function assertThrows(statement) {
  assert.throws(function () {
    eval(statement);
  }, Error);
}function testFile(fileName) {
  try {
    const contents = fs.readFileSync(fileName, { encoding: "utf8" });
    eval(contents.replace(/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, "(addon.doInstanceOf($1, $2))"));
  } catch (err) {
    if (err.code === "ENOENT" && !v8TestsDirExists) process.emitWarning(`test file ${fileName} does not exist.`);else throw err;
  }
}try {
  const contents = fs.readFileSync(path.join(v8TestsDir, "instanceof.js"), { encoding: "utf8" });
  eval(contents.replace(/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, "(addon.doInstanceOf($1, $2))"));
} catch (err) {
  if (err.code === "ENOENT" && !v8TestsDirExists) process.emitWarning(`test file ${path.join(v8TestsDir, "instanceof.js")} does not exist.`);else throw err;
}try {
  const contents = fs.readFileSync(path.join(v8TestsDir, "instanceof-2.js"), { encoding: "utf8" });
  eval(contents.replace(/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, "(addon.doInstanceOf($1, $2))"));
} catch (err) {
  if (err.code === "ENOENT" && !v8TestsDirExists) process.emitWarning(`test file ${path.join(v8TestsDir, "instanceof-2.js")} does not exist.`);else throw err;
}if (typeof Symbol !== "undefined" && "hasInstance" in Symbol && typeof Symbol.hasInstance === "symbol") {
  function compareToNative(s, e) {
    assert.strictEqual(addon.doInstanceOf(s, e), s instanceof e);
  }function MyClass() {}Object.defineProperty(MyClass, Symbol.hasInstance, { value: function (s) {
      return "mark" in s;
    } });function MySubClass() {}MySubClass.prototype = new MyClass();var x = new MySubClass();
  var y = new MySubClass();
  x.mark = true;assert.strictEqual(addon.doInstanceOf(x, MySubClass), x instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(y, MySubClass), y instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(x, MyClass), x instanceof MyClass);assert.strictEqual(addon.doInstanceOf(y, MyClass), y instanceof MyClass);x = new MyClass();y = new MyClass();x.mark = true;assert.strictEqual(addon.doInstanceOf(x, MySubClass), x instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(y, MySubClass), y instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(x, MyClass), x instanceof MyClass);assert.strictEqual(addon.doInstanceOf(y, MyClass), y instanceof MyClass);
}
