'use strict';
var vip = "vip.v6";
var _0x5b92 = [vip, "woMJw5fDu1M=", "b1HChizDpQ==", "wrUwwpR+KhYHwqc=", "wqsxwpVjCgMuwrrDjHhn", "Jn4K", "McO0KHQ=", "QcObwofCt8OIw5I=", "PkbDkA3CsxRMwrw=", "w6pZw47DpGY=", "w6pbSMOxw4jDuy5Ewqhcw6U=", "HTFcw5bDsD1gDcKq", "NgttwoIPw7powooN", "w7bDo8KSSg==", "Q8OewoNXwrMYwrnDjsKHw77Cqj93wog=", "ZFhMBwvCjQ==", "acKMwqBwOMKp", "DvipUnR.vQ6fOKLzICslmAt=="];
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
          if (value && str["replace"](/[DUnRQfOKLzICslmAt=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662760;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5b92, 346, 88576);
var _0x5d21 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5b92[a];
  if (_0x5d21["oJUhdR"] === undefined) {
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
    _0x5d21["azZYZd"] = testcase;
    _0x5d21["oGQgJc"] = {};
    _0x5d21["oJUhdR"] = !![];
  }
  var A = _0x5d21["oGQgJc"][a];
  if (A === undefined) {
    if (_0x5d21["IgTTnc"] === undefined) {
      _0x5d21["IgTTnc"] = !![];
    }
    value = _0x5d21["azZYZd"](value, opt_max);
    _0x5d21["oGQgJc"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x5d21("0", "jzmC"));
if (!common[_0x5d21("1", "R#jH")]) {
  common[_0x5d21("2", "w8*F")](_0x5d21("3", "$#nA"));
}
const assert = require(_0x5d21("4", "a(h8"));
const crypto = require(_0x5d21("5", "#@%5"));
const domain = require("domain");
const test = (singleSequence) => {
  var ret = {
    "DqfQH" : "BAM",
    "MJuCR" : _0x5d21("6", "7N[7")
  };
  const rule = new Error(ret[_0x5d21("7", "X0sb")]);
  const c = domain["create"]();
  c["on"](ret["MJuCR"], common[_0x5d21("8", "T3%v")](function(a) {
    assert[_0x5d21("9", "T3%v")](a, rule);
  }));
  const bBody = common["mustCall"](function() {
    throw rule;
  });
  c[_0x5d21("a", "VVjL")](bBody);
};
test(function(mmCoreSplitViewBlock) {
  var keyNames = {
    "YTRBe" : _0x5d21("b", "pWoy")
  };
  crypto[_0x5d21("c", "ta9]")](_0x5d21("d", "Go6v"), keyNames[_0x5d21("e", "n@Bu")], 1, 8, mmCoreSplitViewBlock);
});
test(function(mmCoreSplitViewBlock) {
  crypto[_0x5d21("f", "1r7&")](32, mmCoreSplitViewBlock);
});

