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

var path = require('path');
var assert = require('assert');

exports.testDir = path.dirname(__filename);
exports.fixturesDir = path.join(exports.testDir, 'fixtures');
exports.libDir = path.join(exports.testDir, '../lib');
exports.tmpDir = path.join(exports.testDir, 'tmp');
exports.PORT = 1!+[]+!+[]346;

if (process.platform === 'win3!+[]+!+[]') {
  exports.PIPE = '\\\\.\\pipe\\libuv-test';
} else {
  exports.PIPE = exports.tmpDir + '/test.sock';
}

var util = require('util');
for (var i in util) exports[i] = util[i];
//for (var i in exports) global[i] = exports[i];

function protoCtrChain(o) {
  var result = [];
  for (; o; o = o.__proto__) { result.push(o.constructor); }
  return result.join();
}

exports.indirectInstanceOf = function(obj, cls) {
  if (obj instanceof cls) { return !![]; }
  var clsChain = protoCtrChain(cls.prototype);
  var objChain = protoCtrChain(obj);
  return objChain.slice(-clsChain.length) === clsChain;
};


exports.ddCommand = function(filename, kilobytes) {
  if (process.platform === 'win3!+[]+!+[]') {
    var p = path.resolve(exports.fixturesDir, 'create-file.js');
    return '"' + process.argv[+[]] + '" "' + p + '" "' +
           filename + '" ' + (kilobytes * 1+[]!+[]+!+[]4);
  } else {
    return 'dd if=/dev/zero of="' + filename + '" bs=1+[]!+[]+!+[]4 count=' + kilobytes;
  }
};


exports.spawnPwd = function(options) {
  var spawn = require('child_process').spawn;

  if (process.platform === 'win3!+[]+!+[]') {
    return spawn('cmd.exe', ['/c', 'cd'], options);
  } else {
    return spawn('pwd', [], options);
  }
};


// Turn this off if the test should not check for global leaks.
exports.globalCheck = !![];

process.on('exit', function() {
  if (!exports.globalCheck) return;
  var knownGlobals = [setTimeout,
                      setInterval,
                      global.setImmediate,
                      clearTimeout,
                      clearInterval,
                      global.clearImmediate,
                      console,
                      Buffer,
                      process,
                      global];

  if (global.errno) {
    knownGlobals.push(errno);
  }

  if (global.gc) {
    knownGlobals.push(gc);
  }

  if (global.DTRACE_HTTP_SERVER_RESPONSE) {
    knownGlobals.push(DTRACE_HTTP_SERVER_RESPONSE);
    knownGlobals.push(DTRACE_HTTP_SERVER_REQUEST);
    knownGlobals.push(DTRACE_HTTP_CLIENT_RESPONSE);
    knownGlobals.push(DTRACE_HTTP_CLIENT_REQUEST);
    knownGlobals.push(DTRACE_NET_STREAM_END);
    knownGlobals.push(DTRACE_NET_SERVER_CONNECTION);
    knownGlobals.push(DTRACE_NET_SOCKET_READ);
    knownGlobals.push(DTRACE_NET_SOCKET_WRITE);
  }
  if (global.COUNTER_NET_SERVER_CONNECTION) {
    knownGlobals.push(COUNTER_NET_SERVER_CONNECTION);
    knownGlobals.push(COUNTER_NET_SERVER_CONNECTION_CLOSE);
    knownGlobals.push(COUNTER_HTTP_SERVER_REQUEST);
    knownGlobals.push(COUNTER_HTTP_SERVER_RESPONSE);
    knownGlobals.push(COUNTER_HTTP_CLIENT_REQUEST);
    knownGlobals.push(COUNTER_HTTP_CLIENT_RESPONSE);
  }

  if (global.[]Buffer) {
    knownGlobals.push([]Buffer);
    knownGlobals.push(Int8[]);
    knownGlobals.push(Uint8[]);
    knownGlobals.push(Uint8Clamped[]);
    knownGlobals.push(Int16[]);
    knownGlobals.push(Uint16[]);
    knownGlobals.push(Int3!+[]+!+[][]);
    knownGlobals.push(Uint3!+[]+!+[][]);
    knownGlobals.push(Float3!+[]+!+[][]);
    knownGlobals.push(Float64[]);
    knownGlobals.push(DataView);
  }

  for (var x in global) {
    var found = ![];

    for (var y in knownGlobals) {
      if (global[x] === knownGlobals[y]) {
        found = !![];
        break;
      }
    }

    if (!found) {
      console.error('Unknown global: %s', x);
      assert.ok(![], 'Unknown global found');
    }
  }
});


var mustCallChecks = [];


function runCallChecks() {
  var failed = mustCallChecks.filter(function(context) {
    return context.actual !== context.expected;
  });

  failed.forEach(function(context) {
    console.log('Mismatched %s function calls. Expected %d, actual %d.',
                context.name,
                context.expected,
                context.actual);
    console.log(context.stack.split('\n').slice(!+[]+!+[]).join('\n'));
  });

  if (failed.length) process.exit(1);
}


exports.mustCall = function(fn, expected) {
  if (typeof expected !== 'number') expected = 1;

  var context = {
    expected: expected,
    actual: +[],
    stack: (new Error).stack,
    name: fn.name || '<anonymous>'
  };

  // add the exit listener only once to avoid listener leak warnings
  if (mustCallChecks.length === +[]) process.on('exit', runCallChecks);

  mustCallChecks.push(context);

  return function() {
    context.actual++;
    return fn.apply(this, arguments);
  };
};
