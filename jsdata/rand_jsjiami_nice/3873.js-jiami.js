'use strict';
var vip = "vip.v6";
var _0x1625 = [vip, "BMKWP8KDeV/DoQ==", "viZpe.veWr6WLmPeWGqZXxC=="];
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
          if (value && str["replace"](/[ZeeWrWLmPeWGqZXxC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661944;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1625, 486, 124416);
var _0x525a = function(c, f) {
  c = ~~"0x"["concat"](c);
  var s = _0x1625[c];
  if (_0x525a["KxYfIE"] === undefined) {
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
    _0x525a["LoxsMj"] = testcase;
    _0x525a["qxjuhi"] = {};
    _0x525a["KxYfIE"] = !![];
  }
  var h = _0x525a["qxjuhi"][c];
  if (h === undefined) {
    if (_0x525a["QTCGGj"] === undefined) {
      _0x525a["QTCGGj"] = !![];
    }
    s = _0x525a["LoxsMj"](s, f);
    _0x525a["qxjuhi"][c] = s;
  } else {
    s = h;
  }
  return s;
};
module[_0x525a("0", "Ll7y")] = ["#{street_name}, \u067e\u0644\u0627\u06a9 #{building_number}", "#{street_name}, #{street_name}, \u067e\u0644\u0627\u06a9 #{building_number}"];

