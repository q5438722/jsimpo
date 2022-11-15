'use strict';
const common = require("../common");
const assert = require(_0x311a66(444));
const events = require(_0x311a66(445));
const {
  inspect : inspect
} = require(_0x311a66(446));
const e = new (events[_0x311a66(447)]);
e["on"]("maxListeners", common[_0x311a66(448)]()), e[_0x311a66(449)](-1549 + -21 * 279 + -1 * -7450);
const throwsObjs = [NaN, -(7 * 243 + 65 * 70 + -50 * 125), "and even this"];
for (const prop of throwsObjs) {
  assert["throws"](() => {
    return e[_0x311a66(449)](prop);
  }, {
    "code" : "ERR_OUT_OF_RANGE",
    "name" : "RangeError",
    "message" : _0x311a66(450) + (_0x311a66(451) + inspect(prop))
  });
  assert[_0x311a66(452)](() => {
    return events[_0x311a66(453)] = prop;
  }, {
    "code" : _0x311a66(454),
    "name" : "RangeError",
    "message" : _0x311a66(455) + (_0x311a66(451) + inspect(prop))
  });
}
e[_0x311a66(456)](_0x311a66(457));
{
  const {
    EventEmitter : directiveProcessors,
    defaultMaxListeners : $node
  } = events;
  for (const $node of throwsObjs) {
    assert[_0x311a66(452)](() => {
      return directiveProcessors[_0x311a66(449)]($node);
    }, {
      "code" : _0x311a66(454)
    });
  }
  assert[_0x311a66(452)](() => {
    return directiveProcessors[_0x311a66(449)]($node, _0x311a66(458));
  }, {
    "code" : "ERR_INVALID_ARG_TYPE"
  });
}
;
