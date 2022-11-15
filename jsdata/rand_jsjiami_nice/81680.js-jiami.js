'use strict';
var vip = "vip.v6";
var _0x5698 = [vip, "woJsdE/DoHfDpMKAw7E4Sg==", "X8KoRsOgS8KmwrPCpMKCMw==", "w7YdAiNHBMO/RMOUwqo=", "w4koHiZm", "QybCgcOLQm/CmA==", "wqYrdV5uw5TCpg==", "d8KBdMKDdsOIUA==", "w73CrsO9wr4bCgbDggvCucKswpHCvFzCnA==", "csK4wpYHw5HCscOuwqXDgngQw6cnbsOFdwDCvcOnw7bDmsO4MMOGXh3DvRt8wpB5OEETY8KhwqV/fcK9PH4=", "wqoFYE7CqA==", "LsKkwpE=", "Tk1Ie8Kc", "zJvAizp.v6FSScqUqVuMqwn=="];
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
          if (value && str["replace"](/[zJAzFSScqUqVuMqwn=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662894;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5698, 307, 78592);
var _0x5d89 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5698[a];
  if (_0x5d89["lFKhKs"] === undefined) {
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
    _0x5d89["vAiQYi"] = testcase;
    _0x5d89["CROQCX"] = {};
    _0x5d89["lFKhKs"] = !![];
  }
  var A = _0x5d89["CROQCX"][a];
  if (A === undefined) {
    if (_0x5d89["MUCUSu"] === undefined) {
      _0x5d89["MUCUSu"] = !![];
    }
    value = _0x5d89["vAiQYi"](value, opt_max);
    _0x5d89["CROQCX"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const moment = require(_0x5d89("0", "MM7Z"));
const settingsCache = require(_0x5d89("1", "xuZG"));
const format = (duration) => {
  var backEl = {
    "xRJUi" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BMatp" : "timezone"
  };
  return backEl[_0x5d89("2", "G@^U")](moment, duration)["tz"](settingsCache[_0x5d89("3", "sTHQ")](backEl[_0x5d89("4", "1q(B")]))[_0x5d89("5", "uY5v")](!![]);
};
const forPost = (x) => {
  var _0x2662c2 = {
    "LczAH" : _0x5d89("6", "$7[o"),
    "xllAP" : _0x5d89("7", "f&9F"),
    "NkdgZ" : "published_at"
  };
  [_0x2662c2["LczAH"], _0x2662c2["xllAP"], _0x2662c2[_0x5d89("8", "CGjn")]]["forEach"]((key) => {
    if (x[key]) {
      x[key] = format(x[key]);
    }
  });
  return x;
};
module[_0x5d89("9", "ku^r")]["format"] = format;
module[_0x5d89("a", "V*Ae")][_0x5d89("b", "UwsL")] = forPost;

