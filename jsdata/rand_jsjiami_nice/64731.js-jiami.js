'use strict';
var vip = "vip.v6";
var _0x2a7d = [vip, "McOwasKcwqfDmcKkBMOPX8Kz", "vipJVuL.v6zOMcXZnkNtJk=="];
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
          if (value && str["replace"](/[JVuLzOMcXZnkNtJk=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662130;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2a7d, 189, 48384);
var _0x1b92 = function(c, f) {
  c = ~~"0x"["concat"](c);
  var s = _0x2a7d[c];
  if (_0x1b92["VPYgiS"] === undefined) {
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
    _0x1b92["bnxeln"] = testcase;
    _0x1b92["qjWaCH"] = {};
    _0x1b92["VPYgiS"] = !![];
  }
  var h = _0x1b92["qjWaCH"][c];
  if (h === undefined) {
    if (_0x1b92["ldpXnP"] === undefined) {
      _0x1b92["ldpXnP"] = !![];
    }
    s = _0x1b92["bnxeln"](s, f);
    _0x1b92["qjWaCH"][c] = s;
  } else {
    s = h;
  }
  return s;
};
const v2 = Symbol[_0x1b92("0", "WGLU")];
function v6(_0x5d586d$jscomp$0, _0x1d9afa$jscomp$0, _0x371588$jscomp$0, _0x4b9c6d$jscomp$0) {
  var _0x4e495b$jscomp$0 = {
    "eWBSo" : function(geom0, geom1) {
      return geom0 && geom1;
    }
  };
  try {
    let _0x2b6f83$jscomp$0 = _0x4e495b$jscomp$0["eWBSo"](eval, v2);
    const _0x1ec449$jscomp$0 = _0x2b6f83$jscomp$0++;
  } catch (_0x567876) {
  }
}
for (let v17 = 1; v17 < 1E4; v17++) {
  const v18 = v6();
}
;