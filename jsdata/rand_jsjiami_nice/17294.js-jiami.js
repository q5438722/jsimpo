'use strict';
var vip = "vip.v6";
var _0x481e = [vip, "woLCkDnDg8Ou", "Gh7Dug3ClQ==", "w73CjcKWLjcmw6AIZMOYw7I0wrw=", "mwvPipFekleyAy.vKfoZgeV6=="];
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
          if (value && str["replace"](/[mwPFekleyAyKfoZgeV=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661740;
  };
  return fn(++count, long) >> count ^ long;
})(_0x481e, 470, 120320);
var _0x67dd = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x481e[a];
  if (_0x67dd["xsIBxf"] === undefined) {
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
    _0x67dd["wMhjYm"] = testcase;
    _0x67dd["yRqYst"] = {};
    _0x67dd["xsIBxf"] = !![];
  }
  var A = _0x67dd["yRqYst"][a];
  if (A === undefined) {
    if (_0x67dd["YDCgKJ"] === undefined) {
      _0x67dd["YDCgKJ"] = !![];
    }
    value = _0x67dd["wMhjYm"](value, opt_max);
    _0x67dd["yRqYst"][a] = value;
  } else {
    value = A;
  }
  return value;
};
function* f() {
  var _0xa70ffb = {
    "RFPUr" : _0x67dd("0", "k!&D")
  };
  var callbackVals = _0xa70ffb[_0x67dd("1", "VYCq")][_0x67dd("2", "Ze62")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (!![]) {
          yield;
        } else {
          1;
        }
        continue;
      case "1":
        [yield];
        continue;
      case "2":
        yield;
        1;
        continue;
      case "3":
        continue;
      case "4":
        yield;
        continue;
      case "5":
        yield;
        continue;
      case "6":
        {
          yield;
        }
        continue;
    }
    break;
  }
}
;
