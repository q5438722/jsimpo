'use strict';
const common = require(_0x5b97e5(221));
const fixtures = require(_0x5b97e5(222));
const tmpdir = require(_0x5b97e5(223));
const assert = require(_0x5b97e5(224));
const {
  join : join
} = require(_0x5b97e5(225));
const childProcess = require(_0x5b97e5(226));
const fs = require("fs");
const stdoutScript = fixtures[_0x5b97e5(225)](_0x5b97e5(227));
const tmpFile = join(tmpdir[_0x5b97e5(225)], _0x5b97e5(228));
const cmd = '"' + process["argv"][4667 + 7 * 603 + -8888] + _0x5b97e5(229) + stdoutScript + '" < "' + tmpFile + '"';
const string = "abc\n\u00fcmlaut.\nsomething else\n" + _0x5b97e5(230) + _0x5b97e5(231) + "\u4e91\u5357\u7684\u4e00\u5c0f\u90e8\u4efd\u5730\u533a\u548c\u8d8a\u5357\u7684\u5317\u90e8\u3002\u5357\u8d8a\u56fd\u662f\u79e6\u671d\u706d\u4ea1\u540e\uff0c" + _0x5b97e5(232) + _0x5b97e5(233) + "\u5357\u8d8a\u56fd\u672b\u4ee3\u541b\u4e3b\u8d75\u5efa\u5fb7\u4e0e\u897f\u6c49\u53d1\u751f\u6218\u4e89\uff0c\u88ab\u6c49\u6b66\u5e1d\u4e8e\u524d111\u5e74\u6240\u706d\u3002\u5357\u8d8a\u56fd\u5171\u5b58\u572893\u5e74\uff0c" + 
_0x5b97e5(234) + _0x5b97e5(235) + "\u5b83\u7684\u5efa\u7acb\u4fdd\u8bc1\u4e86\u79e6\u672b\u4e71\u4e16\u5cad\u5357\u5730\u533a\u793e\u4f1a\u79e9\u5e8f\u7684\u7a33\u5b9a\uff0c" + _0x5b97e5(236);
tmpdir["refresh"](), console["log"](cmd + "\n\n"), fs[_0x5b97e5(237)](tmpFile, string), childProcess[_0x5b97e5(238)](cmd, common[_0x5b97e5(239)](function(a, index, expected) {
  const stringRepeat = _0x5b97e5;
  fs[stringRepeat(240)](tmpFile);
  assert["ifError"](a);
  assert[stringRepeat(241)](index, stringRepeat(242) + string);
  assert["strictEqual"](expected, "");
}));

