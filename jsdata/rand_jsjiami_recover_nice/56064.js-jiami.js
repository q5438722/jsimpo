'use strict';
const common = require("../common");
const assert = require("assert");
const events = require("events");
const {
  inspect : inspect
} = require("util");
const e = new events["EventEmitter"];
e["on"]("maxListeners", common["mustCall"]());
e["setMaxListeners"](42);
const throwsObjs = [NaN, -1, "and even this"];
for (const prop of throwsObjs) {
  assert["throws"](() => {
    return e["setMaxListeners"](prop);
  }, {
    "code" : "ERR_OUT_OF_RANGE",
    "name" : "RangeError",
    "message" : 'The value of "n" is out of range. ' + ("It must be a non-negative number. Received " + inspect(prop))
  });
  assert["throws"](() => {
    return events["defaultMaxListeners"] = prop;
  }, {
    "code" : "ERR_OUT_OF_RANGE",
    "name" : "RangeError",
    "message" : 'The value of "defaultMaxListeners" is out of range. ' + ("It must be a non-negative number. Received " + inspect(prop))
  });
}
e["emit"]("maxListeners");
{
  const {
    EventEmitter : directiveProcessors,
    defaultMaxListeners : $node
  } = events;
  for (const $node of throwsObjs) {
    assert["throws"](() => {
      return directiveProcessors["setMaxListeners"]($node);
    }, {
      "code" : "ERR_OUT_OF_RANGE"
    });
  }
  assert["throws"](() => {
    return directiveProcessors["setMaxListeners"]($node, "INVALID_EMITTER");
  }, {
    "code" : "ERR_INVALID_ARG_TYPE"
  });
}
;
