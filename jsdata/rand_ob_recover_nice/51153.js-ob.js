'use strict';
const common = require(_0x191ebe(208));
const assert = require(_0x191ebe(209));
const primValues = {
  "string" : "a",
  "number" : 1,
  "object" : {
    0 : "a"
  },
  "array" : [-1 * 7915 + -9333 + 17249, -5792 + 2404 + 3390, 8530 + 107 * -29 + 4 * -1356]
};
const bench = common[_0x191ebe(210)](main, {
  "primitive" : Object[_0x191ebe(211)](primValues),
  "n" : [-28749 + 5863 * 2 + 123 * 301],
  "strict" : [9996 + 1170 * -5 + -1382 * 3, -101 + -5 * 1489 + 7547],
  "method" : [_0x191ebe(212), _0x191ebe(213)]
});
function main({
  n : to,
  primitive : cc,
  method : method,
  strict : strictComparision
}) {
  const basename = _0x191ebe;
  const scope = {
    "lfbqH" : basename(214),
    "ahAro" : basename(215),
    "UjzoL" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "EYFjo" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const _0x27b2b4 = primValues[cc];
  const _0x5b6735 = _0x27b2b4;
  const _0x4f4dcc = _0x27b2b4;
  const _0x3c66fb = "b";
  if (strictComparision) {
    method = method[basename(216)](scope[basename(217)], scope[basename(218)]);
  }
  const repeatCollection = assert[method];
  const additional = method[basename(219)](basename(220)) ? _0x3c66fb : _0x4f4dcc;
  bench[basename(221)]();
  for (let e = 7863 + 5819 + -13682; scope[basename(222)](e, to); ++e) {
    scope[basename(223)](repeatCollection, [_0x5b6735], [additional]);
  }
  bench["end"](to);
}
;
