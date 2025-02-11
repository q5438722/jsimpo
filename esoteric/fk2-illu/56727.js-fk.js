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

if (process.argv[2] !== 'child') {
  const spawn = require('child_process').spawn;

  const child = spawn(process.execPath, [__filename, 'child'], {
    stdio: 'pipe' // 'inherit'
  });
  const timer = setTimeout(function () {
    throw new Error('child is hung');
  }, common.platformTimeout('3'));

  child.on('exit', common.mustCall(function (code) {
    assert.strictEqual(code, 0);
    clearTimeout(timer);
  }));
} else {
  const domain = require('domain');

  const d = domain.create();

  // In the error handler, we trigger several MakeCallback events

  d.on('error', function () {
    console.log('a');
    console.log('b');
    console.log('c');
    console.log('d');
    console.log('e');

    process.nextTick(function () {
      d.run(function () {
        throw new Error('x');
      });
    });
  });

  function f() {
    process.nextTick(function () {
      d.run(function () {
        throw new Error('x');
      });
    });
  }

  process.nextTick(function () {
    d.run(function () {
      throw new Error('x');
    });
  });
  setImmediate(function () {
    console.error('broke in!');
    process.exit(0);
  });
}
