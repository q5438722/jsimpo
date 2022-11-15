'use strict';
const common = require("../common");
const assert = require("assert");
const events = require("events");
const {
  inspect : inspect
} = require("util");
const e = new events.EventEmitter;
e.on("maxListeners", common.mustCall());
e.setMaxListeners(42);
const throwsObjs = [NaN, -1, "and even this"];
for (const n of throwsObjs) {
  assert.throws(() => {
    return e.setMaxListeners(n);
  }, {
    code : "ERR_OUT_OF_RANGE",
    name : "RangeError",
    message : 'The value of "n" is out of range. ' + `It must be a non-negative number. Received ${inspect(n)}`
  });
  assert.throws(() => {
    return events.defaultMaxListeners = n;
  }, {
    code : "ERR_OUT_OF_RANGE",
    name : "RangeError",
    message : 'The value of "defaultMaxListeners" is out of range. ' + `It must be a non-negative number. Received ${inspect(n)}`
  });
}
e.emit("maxListeners");
{
  const {
    EventEmitter : EventEmitter,
    defaultMaxListeners : n
  } = events;
  for (const n of throwsObjs) {
    assert.throws(() => {
      return EventEmitter.setMaxListeners(n);
    }, {
      code : "ERR_OUT_OF_RANGE"
    });
  }
  assert.throws(() => {
    return EventEmitter.setMaxListeners(n, "INVALID_EMITTER");
  }, {
    code : "ERR_INVALID_ARG_TYPE"
  });
}
;
