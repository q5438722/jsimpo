'use strict';
var vip = "vip.v6";
var _0x36a6 = [vip, "w53DhcKyw60=", "QcKlPMOCwoVowpZqw60=", "FMKKw65NKsKUw5s+wqY=", "wrLDnRvCssOswqFgcTY=", "OAxowrk/SGd6wok=", "JVwFw5jChMKb", "b0jDgjhKw4k=", "w5YXwo/DiQ==", "HGjCkxA=", "w4pHw77CvcKxBCzDkcOKPETDulnDnsOUKRPCm8K/I8OmG8OPwr0yw7YHTsOLw6Zq", "Uw5nJMKEwpMew7xz", "ZLvipND.v6xSNrzkamHkekcR=="];
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
          if (value && str["replace"](/[ZLNDxSNrzkamHkekcR=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662116;
  };
  return fn(++count, long) >> count ^ long;
})(_0x36a6, 116, 29696);
var _0x8a06 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x36a6[a];
  if (_0x8a06["DXisUu"] === undefined) {
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
    _0x8a06["mslrsW"] = testcase;
    _0x8a06["zccMrC"] = {};
    _0x8a06["DXisUu"] = !![];
  }
  var A = _0x8a06["zccMrC"][a];
  if (A === undefined) {
    if (_0x8a06["ciafuv"] === undefined) {
      _0x8a06["ciafuv"] = !![];
    }
    value = _0x8a06["mslrsW"](value, opt_max);
    _0x8a06["zccMrC"][a] = value;
  } else {
    value = A;
  }
  return value;
};
Realm[_0x8a06("0", "8dw&")]();
var object = Realm[_0x8a06("1", ")k&y")](1, "Object");
var f = Realm[_0x8a06("2", "6KIs")](1, _0x8a06("3", "(b%!"));
Number[_0x8a06("4", "@YUa")]["f"] = f;
var number = 1;
assertEquals(object["prototype"], f[_0x8a06("5", "Vn[c")](number)[_0x8a06("6", "CvrB")][_0x8a06("7", "8Dfq")]);
assertEquals(object["prototype"], number["f"]()[_0x8a06("8", "#Ogs")][_0x8a06("9", "qZwX")]);
assertEquals(Realm[_0x8a06("a", "66!e")](1), f());

