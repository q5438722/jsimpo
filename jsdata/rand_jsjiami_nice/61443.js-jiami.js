'use strict';
var vip = "vip.v6";
var _0x550c = [vip, "w67DocKfw5PDsw==", "w7nDosOd", "LMO4wrhQwr8=", "vLipc.vT6tYaSlaNsXLMrBz=="];
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
          if (value && str["replace"](/[LcTtYaSlaNsXLMrBz=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662102;
  };
  return fn(++count, long) >> count ^ long;
})(_0x550c, 486, 124416);
var _0x56ae = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x550c[a];
  if (_0x56ae["zqTKYt"] === undefined) {
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
    _0x56ae["jCbSdM"] = testcase;
    _0x56ae["yxJBFU"] = {};
    _0x56ae["zqTKYt"] = !![];
  }
  var A = _0x56ae["yxJBFU"][a];
  if (A === undefined) {
    if (_0x56ae["ZylxIV"] === undefined) {
      _0x56ae["ZylxIV"] = !![];
    }
    value = _0x56ae["jCbSdM"](value, opt_max);
    _0x56ae["yxJBFU"][a] = value;
  } else {
    value = A;
  }
  return value;
};
function F() {
}
var a = new F;
function f(code) {
  return a[code]();
}
a[_0x56ae("0", "ZPP#")] = function() {
  return 11;
};
a[0] = function() {
  return 22;
};
var obj = {};
a[obj] = function() {
  return 33;
};
a[_0x56ae("1", "TG%Z")] = 0;
delete a["foo"];
var b = _0x56ae("2", "vJiY");
f(b);
f(b);
assertEquals(11, f(b));
assertEquals(22, f(0));
assertEquals(33, f(obj));

