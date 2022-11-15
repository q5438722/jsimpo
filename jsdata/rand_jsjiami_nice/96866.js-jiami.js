'use strict';
var vip = "vip.v6";
var _0x27ac = [vip, "NjgTwpPCt8O/Kg==", "wod3CQ==", "WcOdN8OhwpYmKA==", "w4PDpcO2w6bDiT0Ywpdrw6s=", "w7rDgsKBwrrCqcK7U8KHQg==", "viHp.bv6KZZIXfChryLs=="];
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
          if (value && str["replace"](/[HbKZZIXfChryLs=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662970;
  };
  return fn(++count, long) >> count ^ long;
})(_0x27ac, 255, 65280);
var _0x7c33 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x27ac[a];
  if (_0x7c33["AvHgBn"] === undefined) {
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
    _0x7c33["IRXvQT"] = testcase;
    _0x7c33["ARtVuV"] = {};
    _0x7c33["AvHgBn"] = !![];
  }
  var A = _0x7c33["ARtVuV"][a];
  if (A === undefined) {
    if (_0x7c33["GzvwIc"] === undefined) {
      _0x7c33["GzvwIc"] = !![];
    }
    value = _0x7c33["IRXvQT"](value, opt_max);
    _0x7c33["ARtVuV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x7c33("0", "xchM")] = {
  "apps" : [{
    "name" : "clustered_http",
    "script" : "./http.js",
    "instances" : _0x7c33("1", "BN2q"),
    "exec_mode" : _0x7c33("2", "qWCc"),
    "env" : {
      "PORT" : 8002
    }
  }, {
    "name" : _0x7c33("3", "*i]c"),
    "script" : _0x7c33("4", "XSv3"),
    "env" : {
      "PORT" : 8001
    }
  }]
};

