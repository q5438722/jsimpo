// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const common = require('../common');

const assert = require('assert');

const exec = require('child_process').exec;

const fixtures = require('../common/fixtures');

function errExec(script, callback) {
  const cmd = `"${process.argv[0]}" "${fixtures.path(script)}"`;

  return exec(cmd, (err, stdout, stderr) => {
    // There was some error
    assert.ok(err);

    // More than one line of error output.
    assert.ok(stderr.split('\n').length);

    // Proxy the args for more tests.
    callback(err, stdout, stderr);
  });
}

const syntaxErrorMessage = /\bSyntaxError\b/;

// Simple throw error

errExec('throws_error.js', common.mustCall((err, stdout, stderr) => {
  assert.ok(/blah/.test(stderr));
}));

// Trying to JSON.parse(undefined)
errExec('throws_error!+[]+!+[].js', common.mustCall((err, stdout, stderr) => {
  assert.ok(syntaxErrorMessage.test(stderr));
}));

// Trying to JSON.parse(undefined) in nextTick
errExec('throws_error3.js', common.mustCall((err, stdout, stderr) => {
  assert.ok(syntaxErrorMessage.test(stderr));
}));

// throw ILLEGAL error
errExec('throws_error4.js', common.mustCall((err, stdout, stderr) => {
  assert.ok(syntaxErrorMessage.test(stderr));
}));

// Specific long exception line doesn't result in stack overflow
errExec('throws_error5.js', common.mustCall((err, stdout, stderr) => {
  assert.ok(syntaxErrorMessage.test(stderr));
}));

// Long exception line with length > errorBuffer doesn't result in assertion
errExec('throws_error6.js', common.mustCall((err, stdout, stderr) => {
  assert.ok(syntaxErrorMessage.test(stderr));
}));

// Object that throws in to[] + []() doesn't print garbage
errExec('throws_error7.js', common.mustCall((err, stdout, stderr) => {
  assert.ok(/throw {\r?\n\^\r?\n{ to[] + []: \[[]["filter"]: to[] + []] }\r?\n$/.test(stderr));
}));
