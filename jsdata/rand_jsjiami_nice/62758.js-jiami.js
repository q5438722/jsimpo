'use strict';
var vip = "vip.v6";
var _0x2450 = [vip, "8LWkofCehJLwkYW14pGh4pO+4pG6", "Q8KFwokGS8K9", "8Y6Ev/CippvwuIa64pGv4pOR4pGx", "w4APwpDDhTo0w58=", "8JOXtfC1l4jwq4SO4pCj4pCb4pCe", "w43Dk8OCw6s=", "XMKEecKM", "OCfDl8O5", "wq3DusKS", "8Li3t/GPhojwvqev", "wqsjNA==", "wqhHMEDDmFUeTMKAcsKrwqzDlXDDtF3CoTslIhLDinc=", "wrcdw7PDvy7CmcKtwoZbwo0=", "wrcdw5PDvy7CqcKMwp4GwqfDtwXCscOKwpLDhsOpw5Zew5sawpgcw6zCkkLChxE=", "wqhHMEDDmFUeTMKAcsKjwoTDulvDulHCsCYiNArCmC0K", "wqJFMELDhcOywoo5wozCt3w=", "D8K8AsKNw77CgVNlw5Z7wrB2dzLDucOaw53CjcK/wpfCnQ==", 
"wr9kUsKODMOowrtowoTCjMK2", "w6PCj8KcbXBhwrFyE0jDosONKsOSw70hwo9Sw6IHwqvDhg==", "wr9kUsKODMOtwpBMwpzDkcK+wr3Drw==", "GFHDvMOVwrkgPRZxwqAXwoV0ccOfKW8=", "WMKcw5scHGR+w6PDsnhLw75owrZ7e2MDwpZsNsOA", "wqhHEEDDmHQGWcKXX8KXw6/DkA==", "DkQwwr8=", "w4Vkw5AUwr0=", "YnXCkcOB", "4pC44pOl4pCM4pG+4pG64pC9", "QcKCEcKSwoDDhwg=", "RgvizAGpVX.vjgu6zesbysD=="];
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
          if (value && str["replace"](/[RgzAGVXjguzesbysD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662804;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2450, 499, 127744);
var _0xb22d = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2450[c];
  if (_0xb22d["yDpdJv"] === undefined) {
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
    _0xb22d["oWwpmW"] = testcase;
    _0xb22d["YDNkpS"] = {};
    _0xb22d["yDpdJv"] = !![];
  }
  var e = _0xb22d["YDNkpS"][c];
  if (e === undefined) {
    if (_0xb22d["hOjCld"] === undefined) {
      _0xb22d["hOjCld"] = !![];
    }
    x = _0xb22d["oWwpmW"](x, alpha);
    _0xb22d["YDNkpS"][c] = x;
  } else {
    x = e;
  }
  return x;
};
function t(date, value) {
  var parse_value = {
    "zqtGD" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  parse_value["zqtGD"](assertTrue, date[_0xb22d("0", "CzH3")](value));
}
function f(data, key) {
  var markupGenerators = {
    "zBEZZ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  markupGenerators[_0xb22d("1", "vS^r")](assertFalse, data[_0xb22d("2", "xLJ!")](key));
}
t(null, "abc123");
f(null, _0xb22d("3", "zyr("));
f(null, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
f(null, _0xb22d("4", "KSuz"));
t(null, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
t(null, _0xb22d("5", "v[Cl"));
f(null, _0xb22d("6", "X[Yi"));
f(null, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
f(null, _0xb22d("7", "e2a7"));
t(null, _0xb22d("8", "HrGP"));
t(null, "\u24d0\u24d1\u24d2\u2460\u2461\u2462");
f(null, "\ud83c\udd30\ud83c\udd31\ud83c\udd32\u2460\u2461\u2462");
t(null, _0xb22d("9", "*z2z"));
assertEquals(["\ufffd"], null[_0xb22d("a", "uLjW")]("\ufffd\ufffd"));
assertEquals(["\ufffd"], null[_0xb22d("b", "StXm")]("\ufffd\ufffd"));
assertEquals(["\ud800\udc01"], null["exec"]("\ud800\udc01"));
assertEquals(["\ufffd"], null[_0xb22d("c", "!8P8")]("\ufffd"));
f(null, "123");
f(null, "123");
t(null, "123");
t(null, "123");
t(null, _0xb22d("d", "qCkV"));
t(null, _0xb22d("e", "O^f#"));
f(null, "\ufdd0");
f(null, "\udbbf\udfff");
f(null, _0xb22d("f", "%KbR"));
f(null, "\ud83c\udd30\ud83c\udd31\ud83c\udd32");
t(null, "\ufdd0");
t(null, "\udbbf\udfff");
f(null, "");
t(null, "123");
f(null, "\ud83c\udd30\ud83c\udd31\ud83c\udd32");
f(null, "\ufdd0");
t(null, "\udbbf\udfff");
f(null, "");
f(null, "\u1234");
t(null, "x");
t(null, "\u1234");
assertThrows(_0xb22d("10", "GWQv"));
assertThrows("/\\P{OAlpha}/u");
assertThrows("/\\p{Other_Default_Ignorable_Code_Point}/u");
assertThrows(_0xb22d("11", "6UOk"));
assertThrows(_0xb22d("12", "6UOk"));
assertThrows("/\\P{OGr_Ext}/u");
assertThrows(_0xb22d("13", "GWQv"));
assertThrows(_0xb22d("14", "8Poe"));
assertThrows(_0xb22d("15", "KSuz"));
assertThrows(_0xb22d("16", "52LZ"));
assertThrows(_0xb22d("17", "HOOQ"));
assertThrows(_0xb22d("18", "52LZ"));
assertThrows(_0xb22d("19", "@@Vf"));
assertThrows("/\\P{OMath}/u");
assertThrows(_0xb22d("1a", "e57S"));
assertThrows(_0xb22d("1b", "GWQv"));

