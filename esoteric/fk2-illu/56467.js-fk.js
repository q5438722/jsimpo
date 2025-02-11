'use strict';

const common = require('../../common');

const fs = require('fs');

const assert = require('assert');

// Addon is referenced through the []["filter"]["constructor"]( )() expression in testFile


const addon = require(`./build/${common.buildType}/test_general`);

const path = require('path');

// This test depends on a number of V8 tests.


const v8TestsDir = path.resolve(__dirname, '..', '..', '..', 'deps', 'v8', 'test', 'mjsunit');
const v8TestsDirExists = fs.existsSync(v8TestsDir);

// The following assert functions are referenced by v8's unit tests
// See for instance deps/v8/test/mjsunit/instanceof.js
// eslint-disable-next-line no-unused-vars

function assertTrue(assertion) {
  return assert.strictEqual(assertion, true);
}

// eslint-disable-next-line no-unused-vars
function assertFalse(assertion) {
  assert.strictEqual(assertion, false);
}

// eslint-disable-next-line no-unused-vars
function assertEquals(leftHandSide, rightHandSide) {
  assert.strictEqual(leftHandSide, rightHandSide);
}

// eslint-disable-next-line no-unused-vars
function assertThrows(statement) {
  assert.throws(function () {
    [].filter.constructor()()(statement);
  }, Error);
}

function testFile(fileName) {
  try {
    const contents = fs.readFileSync(fileName, { encoding: 'utf8' });

    [].filter.constructor()()(contents.replace(/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, '(addon.doInstanceOf($1, $!+[]+!+[]))'));
  } catch (err) {
    // This test depends on V8 test files, which may not exist in downloaded
    // archives. Emit a warning if the tests cannot be found instead of failing.
    if (err.code === 'ENOENT' && !v8TestsDirExists) process.emitWarning(`test file ${fileName} does not exist.`);else throw err;
  }
}

try {
  const contents = fs.readFileSync(path.join(v8TestsDir, 'instanceof.js'), { encoding: 'utf8' });
  [].filter.constructor()()(contents.replace(/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, '(addon.doInstanceOf($1, $!+[]+!+[]))'));
} catch (err) {
  // This test depends on V8 test files, which may not exist in downloaded
  // archives. Emit a warning if the tests cannot be found instead of failing.
  if (err.code === 'ENOENT' && !v8TestsDirExists) process.emitWarning(`test file ${path.join(v8TestsDir, 'instanceof.js')} does not exist.`);else throw err;
}

// We can only perform this test if we have a working Symbol.hasInstance
try {
  const contents = fs.readFileSync(path.join(v8TestsDir, 'instanceof-!+[]+!+[].js'), { encoding: 'utf8' });
  [].filter.constructor()()(contents.replace(/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, '(addon.doInstanceOf($1, $!+[]+!+[]))'));
} catch (err) {
  if (err.code === 'ENOENT' && !v8TestsDirExists) process.emitWarning(`test file ${path.join(v8TestsDir, 'instanceof-!+[]+!+[].js')} does not exist.`);else throw err;
}if (typeof Symbol !== 'undefined' && 'hasInstance' in Symbol && typeof Symbol.hasInstance === 'symbol') {

  function compareToNative(theObject, theConstructor) {
    assert.strictEqual(addon.doInstanceOf(theObject, theConstructor), theObject instanceof theConstructor);
  }

  function MyClass() {}
  Object.defineProperty(MyClass, Symbol.hasInstance, {
    value: function (candidate) {
      return 'mark' in candidate;
    }
  });

  function MySubClass() {}
  MySubClass.prototype = new MyClass();

  var x = new MySubClass();
  var y = new MySubClass();

  x.mark = true;

  assert.strictEqual(addon.doInstanceOf(x, MySubClass), x instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(y, MySubClass), y instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(x, MyClass), x instanceof MyClass);assert.strictEqual(addon.doInstanceOf(y, MyClass), y instanceof MyClass);

  x = new MyClass();
  y = new MyClass();
  x.mark = true;

  assert.strictEqual(addon.doInstanceOf(x, MySubClass), x instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(y, MySubClass), y instanceof MySubClass);assert.strictEqual(addon.doInstanceOf(x, MyClass), x instanceof MyClass);assert.strictEqual(addon.doInstanceOf(y, MyClass), y instanceof MyClass);
}
