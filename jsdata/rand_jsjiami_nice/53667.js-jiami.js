'use strict';
var vip = "vip.v6";
var _0x2919 = [vip, "VzDDjRE/wpA=", "wqtHw7MqXMKwwrN4w6DCtsK4RjE=", "JcOdwrvDqcKQ", "aSAzw6w/YcOgwqs=", "wqUvUgnCt8OD", "W8KMF2Q=", "KUZ4wpA1bcO2Lg==", "EjPDtMO/wpNnPxI=", "VMKNb8K9TA==", "w43DvEo0wpI=", "w5MMwoXCrF/DsMO4w4HDo8KawofDqGXDiVp+RUfChELCgn/ClkHDiMKzwrDCqmfDuMOJwpgxKw==", "wrAXwr/CnB55w6rDmcOLwqpebMOGQGnCscOwSmvDgBjCpcOAAsO4wr7ChMOPwpISLlfDuyLDoSTCocOFEcOta8KEw4g=", "w4JewqfCgi8=", "DMObw5LCmsOE", "wrhow6bDpj0=", "eyo/w7sK", "NEFkwocTf8OpbMOZw7w2OyJLw4E2QEvDpgLCnMOyI8OqwpoNwqbCs11ow7kgwq5WUcK9SQnDj03Dq8Ksw6RKfsKDw4N0LDbDsMKQw4ICwp5VbzZ+Dgw=", 
"wrU0WBXCrcObwq7DlMOee8KsWGh4E8KpLgLChMKQJQ==", "w4FqD8K7Mg==", "wp51w4jDhBs=", "MVXCjg==", "w5TDi8KKfcK7ZcK0w4dl", "ezjvipayHl.qvuN6gDBkkLIC=="];
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
          if (value && str["replace"](/[ezjayHlquNgDBkkLIC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662058;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2919, 329, 84224);
var _0x4c26 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2919[c];
  if (_0x4c26["VPDgpl"] === undefined) {
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
    _0x4c26["enCYPi"] = testcase;
    _0x4c26["VgGNfj"] = {};
    _0x4c26["VPDgpl"] = !![];
  }
  var e = _0x4c26["VgGNfj"][c];
  if (e === undefined) {
    if (_0x4c26["cnzflA"] === undefined) {
      _0x4c26["cnzflA"] = !![];
    }
    x = _0x4c26["enCYPi"](x, alpha);
    _0x4c26["VgGNfj"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x4c26("0", "n009"));
const assert = require(_0x4c26("1", "Rilc"));
const cp = require(_0x4c26("2", "0CEg"));
const child = cp[_0x4c26("3", "T)5(")](process[_0x4c26("4", "g9kp")], ["-i"]);
let output = "";
child["stdout"]["setEncoding"]("utf8");
child[_0x4c26("5", "hq[Z")]["on"]("data", (icons) => {
  output = output + icons;
});
child["on"](_0x4c26("6", "#yQf"), common[_0x4c26("7", "$4@v")](() => {
  var keyNames = {
    "LiMpR" : "> short",
    "aiylW" : "undefined",
    "QoGVC" : _0x4c26("8", ")eQP")
  };
  const a = output[_0x4c26("9", "*%tw")]("\n");
  a[_0x4c26("a", "fC@[")]();
  assert["deepStrictEqual"](a, [_0x4c26("b", "41RO"), _0x4c26("c", "uPyB"), keyNames[_0x4c26("d", "uPyB")], keyNames[_0x4c26("e", "ezy4")], keyNames[_0x4c26("f", "usz1")], "> "]);
}));
child["stdin"][_0x4c26("10", "g9kp")]("x\n");
child["stdin"]["write"](_0x4c26("11", "$4@v") + _0x4c26("12", "hq[Z"));
child[_0x4c26("13", "shNw")][_0x4c26("14", "usz1")]("x\n");
child["stdin"][_0x4c26("15", "&jGn")]();

