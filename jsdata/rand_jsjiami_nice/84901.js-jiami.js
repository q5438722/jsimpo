'use strict';
var vip = "vip.v6";
var _0x5985 = [vip, "w5rDtcKhwovCqsOnw5zDh8KXXBEyI8Kww4vDhsOXwqM1FmA=", "GMKFw6bCu8Kcw759", "OnzDgMOIw48=", "AETDlcO8w50=", "JSfCjsOh", "D1sOKGEuCw==", "wpknwpVBwr0=", "BDDDkxLCqw==", "w61lZMON", "w6rDmsKxJmxAw4nDhi3DpMKrwpPCocOwYDZFZlp5w7NtEMOf", "W2PCsMOWwrlXw79IDEEfwpV6w64T", "vitjWpJ.v6sfdOewnXogyAjx=="];
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
          if (value && str["replace"](/[tjWJsfdOewnXogyAjx=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662311;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5985, 427, 109312);
var _0x559b = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5985[a];
  if (_0x559b["xgpXDE"] === undefined) {
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
    _0x559b["AdDBJj"] = testcase;
    _0x559b["AidOuh"] = {};
    _0x559b["xgpXDE"] = !![];
  }
  var A = _0x559b["AidOuh"][a];
  if (A === undefined) {
    if (_0x559b["cHGesv"] === undefined) {
      _0x559b["cHGesv"] = !![];
    }
    value = _0x559b["AdDBJj"](value, opt_max);
    _0x559b["AidOuh"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const testSetup = require(_0x559b("0", "L1JI"));
if (testSetup["isLocal"]) {
  test(_0x559b("1", "Y*RU"), () => {
  });
} else {
  test(_0x559b("2", "Byf)"), async() => {
    var _related2 = {
      "ILtFf" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const {
      fulfilled : relationName
    } = await testSetup[_0x559b("3", "LTx5")][_0x559b("4", "O5G6")]({
      "smoke" : !![]
    });
    _related2[_0x559b("5", "O5G6")](expect, relationName)[_0x559b("6", "VC6)")](!![]);
  });
  test("builds in production", async() => {
    var _related2 = {
      "NBawX" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const {
      fulfilled : relationName
    } = await testSetup[_0x559b("7", "wHZ%")][_0x559b("8", "QwX5")]();
    _related2[_0x559b("9", "jUZp")](expect, relationName)[_0x559b("a", "AY4A")](!![]);
  });
}
;
