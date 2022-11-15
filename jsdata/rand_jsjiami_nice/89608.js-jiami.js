'use strict';
var vip = "vip.v6";
var _0x7c9f = [vip, "REZRJ8KIw5t3w67ClQ==", "ZcKia8O3", "H0dUw7Ajw5Uo", "UcO1wpHClQ==", "E0dPw5s=", "AMOlGsOww4fDoMKMfcOBwrIOwrfCsn8Hw4/Cs8Obw6xgPBI=", "wr/CqDh3aS/DvA==", "wojCoWnCpFo=", "w5RWw5nCump4KQ==", "wqrDtsKIw5kUWMOGwqc=", "w581woYzwrNVC1LDsMO0wrjCmg==", "XCHCigLChQ==", "w4/DksKUw7sZKR3DulrCpWlHwoLCu8KzcsKCOWHDumDCi8Kww5scMgsMFwbCjA==", "w4Raw4/DuCA=", "wpfDhMKbwoAa", "w7vDsDzCgMOJ", "MhofGUDDhQpswpbDpcKaUWY=", "vinYp.vF6uzUsRallMrHfnjV=="];
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
          if (value && str["replace"](/[nYFuzUsRallMrHfnjV=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662351;
  };
  return fn(++count, long) >> count ^ long;
})(_0x7c9f, 485, 124160);
var _0x22a4 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x7c9f[a];
  if (_0x22a4["jKhTbj"] === undefined) {
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
    _0x22a4["SOWxvR"] = testcase;
    _0x22a4["MyqTWE"] = {};
    _0x22a4["jKhTbj"] = !![];
  }
  var A = _0x22a4["MyqTWE"][a];
  if (A === undefined) {
    if (_0x22a4["zmNJXR"] === undefined) {
      _0x22a4["zmNJXR"] = !![];
    }
    value = _0x22a4["SOWxvR"](value, opt_max);
    _0x22a4["MyqTWE"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const fs = require(_0x22a4("0", "@wxC"));
const path = require("path");
const glob = require("glob");
const replaceHtmlCompilationHash = (path, singleContents) => {
  const B537 = fs[_0x22a4("1", "kYRx")](path, _0x22a4("2", "crbD"));
  const B538 = /window\.webpackCompilationHash="\w*"/;
  const B539 = _0x22a4("3", "UMFm") + singleContents + '"';
  fs["writeFileSync"](path, B537["replace"](B538, B539), _0x22a4("4", "l7mW"));
};
const replacePageDataCompilationHash = (filename, parentid) => {
  const data = JSON[_0x22a4("5", "]oxK")](fs["readFileSync"](filename, _0x22a4("6", "jrlA")));
  data["webpackCompilationHash"] = parentid;
  fs[_0x22a4("7", "N**J")](filename, JSON[_0x22a4("8", "HLEO")](data), "utf-8");
};
const overwriteWebpackCompilationHash = (mmCoreSplitViewBlock) => {
  glob["sync"](path[_0x22a4("9", "q&(^")](__dirname, "../../public/page-data/**/page-data.json"))[_0x22a4("a", "JhTb")]((mmaPushNotificationsComponent) => {
    return replacePageDataCompilationHash(mmaPushNotificationsComponent, mmCoreSplitViewBlock);
  });
  glob[_0x22a4("b", "i9yV")](path[_0x22a4("c", "JhTb")](__dirname, _0x22a4("d", "My^Y")))[_0x22a4("e", "dxnd")]((om) => {
    if (!om[_0x22a4("f", "ZXCt")](/\/page-data\/[^\/.]+\.html/)) {
      replaceHtmlCompilationHash(om, mmCoreSplitViewBlock);
    }
  });
  return null;
};
module[_0x22a4("10", "l7mW")] = {
  "overwriteWebpackCompilationHash" : overwriteWebpackCompilationHash
};

