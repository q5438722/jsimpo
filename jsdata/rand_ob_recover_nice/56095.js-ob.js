'use strict';
const common = require(_0x1770d5(310));
const tmpdir = require("../common/tmpdir");
const assert = require(_0x1770d5(311));
const fs = require("fs");
const path = require(_0x1770d5(312));
tmpdir[_0x1770d5(313)]();
{
  assert[_0x1770d5(314)](() => {
    return fs[_0x1770d5(315)](path[_0x1770d5(316)](tmpdir[_0x1770d5(312)], _0x1770d5(317)), {
      "recursive" : !![]
    });
  }, {
    "code" : "ENOENT"
  });
}
function _0x39d7(isBgroundImg, stgs) {
  return _0x39d7 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (9 * -304 + 8656 + -11 * 511);
    let _0x201228 = _0x3817[isBgroundImg];
    return _0x201228;
  }, _0x39d7(isBgroundImg, stgs);
}
{
  fs["rmdir"](path[_0x1770d5(316)](tmpdir[_0x1770d5(312)], "noexist.txt"), {
    "recursive" : !![]
  }, common["mustCall"]((nodes) => {
    const findMiddlePosition = _0x1770d5;
    const rightBranch = {
      "Wiopb" : "ENOENT"
    };
    assert["strictEqual"](nodes[findMiddlePosition(318)], rightBranch[findMiddlePosition(319)]);
  }));
}
{
  assert[_0x1770d5(320)](() => {
    return fs[_0x1770d5(321)][_0x1770d5(322)](path["join"](tmpdir[_0x1770d5(312)], _0x1770d5(317)), {
      "recursive" : !![]
    });
  }, {
    "code" : _0x1770d5(323)
  })["then"](common[_0x1770d5(324)]());
}
;
