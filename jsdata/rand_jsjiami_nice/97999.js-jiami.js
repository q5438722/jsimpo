'use strict';
var vip = "vip.v6";
var _0x5949 = [vip, "Bk4sw7Aq", "esOjw69vwpA=", "w4tqw7NjPw==", "OwbCkcOGwq4HLcKFEAZN", "jvigp.xvfj6xDnkEtzBlQQC=="];
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
          if (value && str["replace"](/[jgxfjxDnkEtzBlQQC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662981;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5949, 498, 127488);
var _0x470c = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5949[a];
  if (_0x470c["mIYXBq"] === undefined) {
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
    _0x470c["FnSQEa"] = testcase;
    _0x470c["GwJNGp"] = {};
    _0x470c["mIYXBq"] = !![];
  }
  var A = _0x470c["GwJNGp"][a];
  if (A === undefined) {
    if (_0x470c["FkaDWb"] === undefined) {
      _0x470c["FkaDWb"] = !![];
    }
    value = _0x470c["FnSQEa"](value, opt_max);
    _0x470c["GwJNGp"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const {
  useState : useState
} = require(_0x470c("0", "Bb9)"));
const {
  useCustom : useCustom
} = require(_0x470c("1", "*AN&"));
function Component(ngContentIndexMatcher) {
  var _0x45046d = {
    "NYvNK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bwubD" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const [api] = _0x45046d[_0x470c("2", "pjhj")](useState, 0);
  _0x45046d[_0x470c("3", "*v6]")](useCustom);
  return api;
}
module["exports"] = {
  "Component" : Component
};
