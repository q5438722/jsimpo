'use strict';
require("../common");
const stream = require("stream");
const REPL = require("internal/repl");
const assert = require("assert");
const inspect = require("util").inspect;
const {
  REPL_MODE_SLOPPY : REPL_MODE_SLOPPY,
  REPL_MODE_STRICT : REPL_MODE_STRICT
} = require("repl");
const tests = [{
  env : {},
  expected : {
    terminal : true,
    useColors : true
  }
}, {
  env : {
    NODE_DISABLE_COLORS : "1"
  },
  expected : {
    terminal : true,
    useColors : false
  }
}, {
  env : {
    NODE_NO_READLINE : "1"
  },
  expected : {
    terminal : false,
    useColors : false
  }
}, {
  env : {
    TERM : "dumb"
  },
  expected : {
    terminal : true,
    useColors : false
  }
}, {
  env : {
    NODE_NO_READLINE : "1",
    NODE_DISABLE_COLORS : "1"
  },
  expected : {
    terminal : false,
    useColors : false
  }
}, {
  env : {
    NODE_NO_READLINE : "0"
  },
  expected : {
    terminal : true,
    useColors : true
  }
}, {
  env : {
    NODE_REPL_MODE : "sloppy"
  },
  expected : {
    terminal : true,
    useColors : true,
    replMode : REPL_MODE_SLOPPY
  }
}, {
  env : {
    NODE_REPL_MODE : "strict"
  },
  expected : {
    terminal : true,
    useColors : true,
    replMode : REPL_MODE_STRICT
  }
}];
function run(e) {
  const s = e.env;
  const options = e.expected;
  const opts = {
    terminal : true,
    input : new stream.Readable({
      read() {
      }
    }),
    output : new stream.Writable({
      write() {
      }
    })
  };
  Object.assign(process.env, s);
  REPL.createInternalRepl(process.env, opts, function(err, opts) {
    assert.ifError(err);
    assert.strictEqual(opts.terminal, options.terminal, `Expected ${inspect(options)} with ${inspect(s)}`);
    assert.strictEqual(opts.useColors, options.useColors, `Expected ${inspect(options)} with ${inspect(s)}`);
    assert.strictEqual(opts.replMode, options.replMode || REPL_MODE_SLOPPY, `Expected ${inspect(options)} with ${inspect(s)}`);
    for (const debugEnvVar of Object.keys(s)) {
      delete process.env[debugEnvVar];
    }
    opts.close();
  });
}
tests.forEach(run);

