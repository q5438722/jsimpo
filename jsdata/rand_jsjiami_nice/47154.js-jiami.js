'use strict';
var vip = "vip.v6";
var _0x1eb8 = [vip, "McKDIsKN", "w5rCi3vCsg==", "w5HCjWrCo0w+w6jDpMOZwpYUIA==", "w7bCm8O7BMKBesKFw6YeJcKMVCnDnMKbw516wq3DghRTwokM", "RMKxBhNsdV1pJMK6wpYzwrJU", "BcOcw70SYw==", "J8Kqw6o1w5/Dn8Ku", "KMOVwrLDg8KG", "wqrDrgUqwqo=", "JyY0wrYTwpTCmSB+WA==", "JMKMMg==", "w4wSD8OnMMO9", "NcO9woDDtsKnw4lFw74=", "w7/Ds8OF", "Pvip.TCv6sJQlJwNJVVgUZj=="];
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
          if (value && str["replace"](/[PTCsJQlJwNJVVgUZj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662720;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1eb8, 336, 86016);
var _0x1f5a = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1eb8[a];
  if (_0x1f5a["XzZLIp"] === undefined) {
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
    _0x1f5a["TFsHSt"] = testcase;
    _0x1f5a["gqpNxW"] = {};
    _0x1f5a["XzZLIp"] = !![];
  }
  var A = _0x1f5a["gqpNxW"][a];
  if (A === undefined) {
    if (_0x1f5a["JxRmMG"] === undefined) {
      _0x1f5a["JxRmMG"] = !![];
    }
    value = _0x1f5a["TFsHSt"](value, opt_max);
    _0x1f5a["gqpNxW"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const path = require(_0x1f5a("0", "tPd$"));
const http = require(_0x1f5a("1", "6vQq"));
const server = http[_0x1f5a("2", "6vQq")](async(mmCoreSplitViewBlock, e) => {
  var list = {
    "TtRey" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qEJlB" : _0x1f5a("3", "tqXY"),
    "oMSQX" : _0x1f5a("4", "hd4E"),
    "rWgma" : "/[[...slug]].js",
    "zPjQz" : "Internal Error"
  };
  const next = async(query) => {
    const proto = list["TtRey"](require, "./" + path["join"](list[_0x1f5a("5", "Uy0c")], query));
    try {
      return await (proto["render"] || proto[_0x1f5a("6", "T1h(")] || proto)(mmCoreSplitViewBlock, e);
    } catch (_0x38c128) {
      e["statusCode"] = 500;
      return e["end"](list[_0x1f5a("7", "LD(i")]);
    }
  };
  try {
    await list["TtRey"](next, list["rWgma"]);
  } catch (ext) {
    console[_0x1f5a("8", "[rHx")]("failed to render", ext);
    e[_0x1f5a("9", "$uDm")] = 500;
    e[_0x1f5a("a", "tPd$")](list["zPjQz"]);
  }
});
const port = process["env"]["PORT"] || 3E3;
server[_0x1f5a("b", "sqn5")](port, () => {
  var trace = {
    "ckWGe" : _0x1f5a("c", "LD(i")
  };
  console[_0x1f5a("d", "stwV")](trace["ckWGe"], port);
});

