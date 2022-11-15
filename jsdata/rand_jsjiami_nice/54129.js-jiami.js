'use strict';
var vip = "vip.v6";
var _0x4ddd = [vip, "Fy/DuMOEVT0Bw74qOsOfKcKSe2PCiA==", "eSE4YA9s", "a8OiwqsN", "aELCnwDDi8KBwrLDiWU8w7seKQ==", "BkpxAA==", "wp5xBsKC", "RWnCq1nDjMOpw5jCu1YkbMKQcz9Xwow0w7rCucO6Ck4td3DDpcOl", "5Y6s6LWi5Zq05puQ5Ym7fMOWw5Hlu47oh4flirwAw5Ev5bmO5ayM5Z2f5LiR5bGG5YyR5Zyk5YyN55iR5Li15Lin5Zi75ayT77+45Zq26YCK5L6R5Luw55Wt56a3776c", "55Sq5Zyy5Yyw5om15LiX5aSo5LiJ5Zi155m25bqY5LqW44GD5bmf6KSJ5Lqw55+25Yya55qm5aep6YGa5Lmx5Z6t5Y2W77yh56ah5biX556d44GX5run5Y6244CE6LeV5beR44GR", "5Lu05Y6G55i55Li75bCv6YO65Lq35ZyO5Y6w5ZCB6LWG5Y6o55ux5Yy26YGm44Cw5Yy+6LWR5ZiE5piR56W95p2254Cd5Liy5ZO277ys", 
"5Y6d57mU5Luq5Luw5ZKt5Lqp44C05YyA6LS45Zqa5pqi5bKv5YyG5Z2m5Y6A55m256ya5Lmf5Luj5p6L6K+y6Lyn55m15paJ5p2W5ZqX5a677726", "6YWG55ex5bCw5bux5YiN5ZKZ6YO05Y+75Yug5bq75a+A55uZ5YqT5bmc776K", "5a2L55iM5bmC56q45L616K6F5Lqz56eW5p+45Lme5LuP5bOM5Yy15Z+l5Y++56WW5L6I56S/5buu55m956mh5a2Y77yM", "VMK0woDDtsKVwqPDtw==", "wpfChy4=", "w5bDqMO7bBwEehjCgwLCghVp", "XHnCssOE", "d8OjwqpFw502b8OY", "w73ChMKyXWBOaA==", "JcOGb8OWGUnCrsKmXcOVw6FWOg==", "SnXCpcOOWSQpw6AxdMOH", "XDTCqXNlw5LDm8K2wrE=", "vkdQNip.Yvs6ErrbAJYghs=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[kdQNYsErrbAJYghs=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662061;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4ddd, 285, 72960);
var _0x130c = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x4ddd[c];
  if (_0x130c["UgmDfe"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0x130c["JYMZPZ"] = testcase;
    _0x130c["MIyCPo"] = {};
    _0x130c["UgmDfe"] = !![];
  }
  var e = _0x130c["MIyCPo"][c];
  if (e === undefined) {
    if (_0x130c["mxJfVI"] === undefined) {
      _0x130c["mxJfVI"] = !![];
    }
    x = _0x130c["JYMZPZ"](x, alpha);
    _0x130c["MIyCPo"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x130c("0", "BCjF"));
const fixtures = require("../common/fixtures");
const tmpdir = require(_0x130c("1", "[zyd"));
const assert = require(_0x130c("2", "ou#h"));
const {
  join : join
} = require(_0x130c("3", "Y)SD"));
const childProcess = require(_0x130c("4", "6@L["));
const fs = require("fs");
const stdoutScript = fixtures[_0x130c("5", "YeE8")]("echo-close-check.js");
const tmpFile = join(tmpdir[_0x130c("6", "i*qX")], "stdin.txt");
const cmd = '"' + process["argv"][0] + '" "' + stdoutScript + '" < "' + tmpFile + '"';
const string = _0x130c("7", "gB6@") + _0x130c("8", "aS65") + _0x130c("9", "0QCK") + _0x130c("a", "ATW7") + "\u7531\u5357\u6d77\u90e1\u5c09\u8d75\u4f57\u4e8e\u524d203\u5e74\u8d77\u5175\u517c\u5e76\u6842\u6797\u90e1\u548c\u8c61\u90e1\u540e\u5efa\u7acb\u3002\u524d196\u5e74\u548c\u524d179\u5e74\uff0c" + "\u5357\u8d8a\u56fd\u66fe\u5148\u540e\u4e24\u6b21\u540d\u4e49\u4e0a\u81e3\u5c5e\u4e8e\u897f\u6c49\uff0c\u6210\u4e3a\u897f\u6c49\u7684\u201c\u5916\u81e3\u201d\u3002\u524d112\u5e74\uff0c" + "\u5357\u8d8a\u56fd\u672b\u4ee3\u541b\u4e3b\u8d75\u5efa\u5fb7\u4e0e\u897f\u6c49\u53d1\u751f\u6218\u4e89\uff0c\u88ab\u6c49\u6b66\u5e1d\u4e8e\u524d111\u5e74\u6240\u706d\u3002\u5357\u8d8a\u56fd\u5171\u5b58\u572893\u5e74\uff0c" + 
_0x130c("b", "8yTW") + _0x130c("c", "9NFZ") + _0x130c("d", "i[P*") + "\u6709\u6548\u7684\u6539\u5584\u4e86\u5cad\u5357\u5730\u533a\u843d\u540e\u7684\u653f\u6cbb\u3001##\u6d4e\u73b0\u72b6\u3002\n";
tmpdir[_0x130c("e", "#jn!")]();
console[_0x130c("f", "aS65")](cmd + "\n\n");
fs[_0x130c("10", "C)Y$")](tmpFile, string);
childProcess[_0x130c("11", "[zyd")](cmd, common[_0x130c("12", "&D2X")](function(expected, a, actual) {
  fs["unlinkSync"](tmpFile);
  assert[_0x130c("13", "%RVx")](expected);
  assert["strictEqual"](a, _0x130c("14", "@ZW&") + string);
  assert[_0x130c("15", "[zyd")](actual, "");
}));

