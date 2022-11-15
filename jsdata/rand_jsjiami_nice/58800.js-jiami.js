'use strict';
var vip = "vip.v6";
var _0x4f64 = [vip, "LcKLFyNbXhclw7TCrmLCnQohw5N+S8KY", "Q1MoJcOOKsK0KMODwoLDgHDDo8KewrtbfjvCow==", "w7Eiw7fDr8ONwrrDlmPCnAo1KGoz", "D8OZw7QlS8KDGQE1wr3CrUMmw4TCvcOgC8KqVQ==", "elIEwoDCiURaNMOeGCrCt8KQbg==", "YE/CsE1Fw4zCnA3DlFNrw5sHw50AWcOJJjA=", "w4B4wqnDksKwMwnCtMKDw5PCtD3DucK1wofCvBJn", "wrjDnFUrwrLCmUHDk8OmJSzCv8Kqwo/CljZqN8OS", "YTbvuZYoipK.vUn6rlmcwQAl=="];
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
          if (value && str["replace"](/[YTbuZYoKUnrlmcwQAl=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662085;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4f64, 162, 41472);
var _0x4a4d = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4f64[a];
  if (_0x4a4d["KELlEA"] === undefined) {
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
    _0x4a4d["TuLQwL"] = testcase;
    _0x4a4d["VQxEni"] = {};
    _0x4a4d["KELlEA"] = !![];
  }
  var A = _0x4a4d["VQxEni"][a];
  if (A === undefined) {
    if (_0x4a4d["zSoyAC"] === undefined) {
      _0x4a4d["zSoyAC"] = !![];
    }
    value = _0x4a4d["TuLQwL"](value, opt_max);
    _0x4a4d["VQxEni"][a] = value;
  } else {
    value = A;
  }
  return value;
};
let options = {};
new (Intl[_0x4a4d("0", "aSdc")])(undefined, options);
assertEquals([], Object[_0x4a4d("1", "X]oZ")](options));
let date = new Date;
date[_0x4a4d("2", "zovV")](undefined, options);
assertEquals([], Object[_0x4a4d("3", "IUG&")](options));
date[_0x4a4d("4", "YOvR")](undefined, options);
assertEquals([], Object[_0x4a4d("5", "$%Sr")](options));
date[_0x4a4d("6", "zuRa")](undefined, options);
assertEquals([], Object[_0x4a4d("7", "A7%k")](options));

