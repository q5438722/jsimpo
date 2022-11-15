/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x5576 = [vip, "w5LCoi4=", "wr/CuQYXUQ==", "KsKKw6XCncOw", "CmzDmMKaw4Y=", "YsORw6NhOg==", "wr/CpcOqw4jDuQ==", "w5LCjsKGcMOb", "GFvCtMK8wp0IwpfDsDDDrA==", "bsKyOg==", "cMKqwqtew5k=", "fMK1O8O2w64=", "LA4pOm5eacKMOzzDjkwUw6rDlkXClT1+w7l2w48OLDHCisOVBAjDhCFXwrXCv1A=", "wpfCg8KjwoJ1wrEs", "woXDmRLCnnrCulvDlg==", "wozCuysZRw==", "w5sEwoMQHksUcMKvwpovwotc", "yvFRQFiNp.jv6deLkwnREyPZ=="];
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
          if (value && str["replace"](/[yFRQFNjdeLkwnREyPZ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662914;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5576, 187, 47872);
var _0x2357 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5576[a];
  if (_0x2357["WhoRqX"] === undefined) {
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
    _0x2357["ttvwzN"] = testcase;
    _0x2357["iRsFvA"] = {};
    _0x2357["WhoRqX"] = !![];
  }
  var A = _0x2357["iRsFvA"][a];
  if (A === undefined) {
    if (_0x2357["RpOzGT"] === undefined) {
      _0x2357["RpOzGT"] = !![];
    }
    value = _0x2357["ttvwzN"](value, opt_max);
    _0x2357["iRsFvA"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var BuildGameObject = require("../BuildGameObject");
var GameObjectCreator = require("../GameObjectCreator");
var GetAdvancedValue = require(_0x2357("0", "wp2y"));
var Video = require(_0x2357("1", "wty*"));
GameObjectCreator[_0x2357("2", "WuvO")](_0x2357("3", "X9P5"), function(aBody, inParentIndex) {
  var c = {
    "EkIky" : _0x2357("4", "dtPX"),
    "HYtvu" : function(name, initialValue) {
      return name === initialValue;
    },
    "kPTbr" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "XiNDQ" : _0x2357("5", "J)kN")
  };
  var callbackVals = c[_0x2357("6", "X9P5")][_0x2357("7", "q$^6")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (c[_0x2357("8", "Z%Z7")](aBody, undefined)) {
          aBody = {};
        }
        continue;
      case "1":
        var existingFold = c[_0x2357("9", "lOIX")](GetAdvancedValue, aBody, c[_0x2357("a", "9#ha")], null);
        continue;
      case "2":
        var approxRes = new Video(this[_0x2357("b", "J8l1")], 0, 0, existingFold);
        continue;
      case "3":
        if (!aBody["add"]) {
          this[_0x2357("c", "7%Nq")]["add"](approxRes);
        }
        continue;
      case "4":
        if (inParentIndex !== undefined) {
          aBody[_0x2357("d", "F9!H")] = inParentIndex;
        }
        continue;
      case "5":
        return approxRes;
      case "6":
        c[_0x2357("e", "SO#N")](BuildGameObject, this[_0x2357("f", "F9!H")], approxRes, aBody);
        continue;
    }
    break;
  }
});

