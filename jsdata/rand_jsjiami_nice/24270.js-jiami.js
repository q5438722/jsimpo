'use strict';
var vip = "vip.v6";
var _0x2fdf = [vip, "QwDCqmfDmsOuw65cHUfDuQt+Rw==", "dBwAUD4sAybDsEQ=", "PviPEpxPQ.v6qfRhHaaexBy=="];
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
          if (value && str["replace"](/[PPExPQqfRhHaaexBy=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661816;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2fdf, 212, 54272);
var _0x2600 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2fdf[a];
  if (_0x2600["cakqfP"] === undefined) {
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
    _0x2600["OJwgjv"] = testcase;
    _0x2600["NkzkXV"] = {};
    _0x2600["cakqfP"] = !![];
  }
  var A = _0x2600["NkzkXV"][a];
  if (A === undefined) {
    if (_0x2600["qUjkeU"] === undefined) {
      _0x2600["qUjkeU"] = !![];
    }
    value = _0x2600["OJwgjv"](value, opt_max);
    _0x2600["NkzkXV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
Object[_0x2600("0", "Oz%1")](exports, _0x2600("1", "6lb5"), {
  "value" : !![]
});
exports["f1"] = f1;
exports["f2"] = f2;
exports["f3"] = f3;
exports["f4"] = f4;
exports["y"] = exports["x"] = void 0;
let x = 0;
exports["x"] = x;
let y = 0;
exports["y"] = y;
function f1() {
  ({
    x : x
  } = {
    "x" : 1
  });
  exports["x"] = x;
}
function f2() {
  ({
    x : x,
    y : y
  } = {
    "x" : 2,
    "y" : 3
  });
  exports["x"] = x;
  exports["y"] = y;
}
function f3() {
  [x, y, z] = [3, 4, 5];
  exports["x"] = x;
  exports["y"] = y;
}
function f4() {
  [x, , y] = [3, 4, 5];
  exports["x"] = x;
  exports["y"] = y;
}
;
