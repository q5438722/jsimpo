'use strict';
var vip = "vip.v6";
var _0x722c = [vip, "U8Olw5HCgsOXwpU=", "wpwmJn8=", "b8KvCzMy", "wp4Kw53DhsKaYcO3woQ=", "w4bCr8K1wqRn", "dcKEw7jDvsKuw7rCmsKIwqjDhGHDr8Oo", "T8Oow4XClcODwo9GLlgkTcKdJ8KXf0QEwoF7wovCqsKjwpUtw77CvcKCfg==", "ScK5w7I8w7w=", "woEwwoHCsA==", "w67ChsKuJnbDvcOsTsKOw4/DkE9kwo9I", "acKYHDx+PkTDhEA=", "vCditp.gtuov6WeHyzcnyEsI=="];
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
          if (value && str["replace"](/[CdtgtuoWeHyzcnyEsI=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662299;
  };
  return fn(++count, long) >> count ^ long;
})(_0x722c, 129, 33024);
var _0x5b59 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x722c[a];
  if (_0x5b59["IOiEFz"] === undefined) {
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
    _0x5b59["KsGArh"] = testcase;
    _0x5b59["viDspG"] = {};
    _0x5b59["IOiEFz"] = !![];
  }
  var A = _0x5b59["viDspG"][a];
  if (A === undefined) {
    if (_0x5b59["HwQMSC"] === undefined) {
      _0x5b59["HwQMSC"] = !![];
    }
    value = _0x5b59["KsGArh"](value, opt_max);
    _0x5b59["viDspG"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const playwright = require("playwright");
const path = require(_0x5b59("0", "H7z["));
(async() => {
  var command_codes = {
    "kLsPg" : _0x5b59("1", "d#Vm"),
    "ntzYX" : function(value, joiner) {
      return value !== joiner;
    }
  };
  const input = await playwright[_0x5b59("2", "zKzF")][_0x5b59("3", "LWZa")]({
    "args" : [path[_0x5b59("4", "ge)u")](__dirname, command_codes[_0x5b59("5", "]E5m")])]
  });
  const data = await input[_0x5b59("6", "LOl[")](async({
    app : appTree
  }) => {
    return appTree["getAppPath"]();
  });
  await input["close"]();
  if (command_codes[_0x5b59("7", "*HP1")](data, __dirname)) {
    throw new Error('Malformed app path: got "' + data + _0x5b59("8", "AWgc") + __dirname + '"');
  }
  console["log"](_0x5b59("9", "LWZa"));
})()[_0x5b59("a", "JyY]")]((record) => {
  console["error"](record);
  process["exit"](1);
});

