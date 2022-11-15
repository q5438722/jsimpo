'use strict';
var vip = "vip.v6";
var _0x143a = [vip, "w584w67ClMKawpbCqAnDu3BW", "wonDiXjCnQ==", "wrYgTMKcRsOUfVLDsEDCkg==", "w47DkBQn", "KcOrw7XCoQ==", "w6pRw7rDrsOdw4DDmsObWcKTwqc=", "w49pchk=", "w5DCiTPDlsKiIcK9wqBNA8Kk", "WsOvbh4=", "JiMOfsO5wrYuwqIoLk0=", "VMKRwpk+", "wqwNOl4=", "bvipAG.kywEJv6ZxJOWlA=="];
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
          if (value && str["replace"](/[bAGkywEJZxJOWlA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662781;
  };
  return fn(++count, long) >> count ^ long;
})(_0x143a, 156, 39936);
var _0x5e22 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x143a[a];
  if (_0x5e22["ypKCEo"] === undefined) {
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
    _0x5e22["IHgaZO"] = testcase;
    _0x5e22["dUIvCS"] = {};
    _0x5e22["ypKCEo"] = !![];
  }
  var A = _0x5e22["dUIvCS"][a];
  if (A === undefined) {
    if (_0x5e22["JQkpFD"] === undefined) {
      _0x5e22["JQkpFD"] = !![];
    }
    value = _0x5e22["IHgaZO"](value, opt_max);
    _0x5e22["dUIvCS"][a] = value;
  } else {
    value = A;
  }
  return value;
};
assertFalse(/\u017f/i["test"]("\u017f"[_0x5e22("0", "9FJA")]()));
assertFalse(/\u017f/i[_0x5e22("1", "R@7&")]("\u017f"[_0x5e22("2", "Ni#N")]()[0]));
assertTrue(/\u017f/i[_0x5e22("3", "96*D")]("\u017f"));
assertTrue(/\u017f/i["test"]("\u017f"[0]));
assertFalse(/\u017f/i["test"]("s"["toUpperCase"]()));
assertFalse(/\u017f/i[_0x5e22("4", "*2mB")]("s"[_0x5e22("5", "xDiy")]()[0]));
assertFalse(/\u017f/i[_0x5e22("6", "hVdF")]("S"[_0x5e22("7", "$Vdz")]()));
assertFalse(/\u017f/i[_0x5e22("8", "AzXO")]("S"[_0x5e22("9", "nu)o")]()[0]));
assertFalse(/\u017f/i[_0x5e22("a", "PQ&c")]("S"));
assertFalse(/\u017f/i[_0x5e22("b", "t1ph")]("S"[0]));

