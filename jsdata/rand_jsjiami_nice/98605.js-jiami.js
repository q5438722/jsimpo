'use strict';
var vip = "vip.v6";
var _0x1070 = [vip, "TMKQw50UVcKJAcK1BQ==", "w6VpP8OZwoTCtcKpw41NI3k=", "wo/DoMOlwrl7TcOgw744", "fsO7wpkSwqFp", "wpnCgxPCj8KhaMO3w5Q=", "MMKxYC9nHMKqKC4=", "worCmRXCk8K2", "w7cEwrVvw5gGPUg=", "asOswpITwr5+", "SSfvSip.jSv6ESkqmfKgUNDw=="];
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
          if (value && str["replace"](/[SSfSjSESkqmfKgUNDw=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662430;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1070, 118, 30208);
var _0x6017 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1070[a];
  if (_0x6017["dKZzLt"] === undefined) {
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
    _0x6017["aaVNMW"] = testcase;
    _0x6017["hgnHPy"] = {};
    _0x6017["dKZzLt"] = !![];
  }
  var A = _0x6017["hgnHPy"][a];
  if (A === undefined) {
    if (_0x6017["uXObAN"] === undefined) {
      _0x6017["uXObAN"] = !![];
    }
    value = _0x6017["aaVNMW"](value, opt_max);
    _0x6017["hgnHPy"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const Throw = React["lazy"](() => {
  var ret = {
    "Nohyt" : "Example"
  };
  throw new Error(ret["Nohyt"]);
});
const Component = React["memo"](function getChildrenUids({
  children : children
}) {
  return children;
});
function DisplayName({
  children : children
}) {
  return children;
}
DisplayName["displayName"] = _0x6017("0", "]T)N");
class NativeClass extends React[_0x6017("1", "wfNh")] {
  [_0x6017("2", "wgiE")]() {
    return this["props"][_0x6017("3", ")au1")];
  }
}
class FrozenClass extends React[_0x6017("4", "TtcG")] {
  constructor() {
    super();
  }
  ["render"]() {
    return this[_0x6017("5", ")au1")][_0x6017("6", "T3@m")];
  }
}
Object[_0x6017("7", "wgiE")](FrozenClass[_0x6017("8", "J!Sl")]);

