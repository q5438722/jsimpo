'use strict';
var vip = "vip.v6";
var _0x370b = [vip, "w57DmsO7w67Du2zDiB4AAMKnYsKmQsKLTA==", "w7/CizPCig==", "MXN2w6I=", "wrbCjcOkSTLDgcKK", "wprCpGLCkA7CvcKP", "ScONwrvDjw==", "wo19F8KCMA==", "AMKvc8OFAcOG", "w443LAnDvnQ=", "w7HCscOkd8Kuw7/Dr8KewofDrcKE", "QVA9S8OdbcKkwoLCrg==", "AGtfwp7Cs0hcw5nCkA==", "woDCtw3CljXDvMKuFRLCuD0xc1bDhMKjw4JhV2Ep", "Z8Ozw6caFg==", "w67CjjMqfQ==", "d8Onw5kLOUcxw6E1PhrChMK/w64Xw5A=", "w4nCrCUWbg==", "w77CgXIobg==", "wozDvxVsw58=", "wovCvR7CnA==", "w5fCm8OYw7A=", "w43CgsONJcOV", "N8KicMOADcOaw4FKFivDg10Zwq1OFA==", 
"bE3CgF0=", "fUYTVMOEwrnCo8KOwr/CjMKIMMOzQlApHsKPOGjDjw==", "CcOIQMOmw4k=", "wpzCvCQgOTbDn0TCkw==", "LCojw7x4", "wrJsFsKJKw==", "wq0LJgc=", "sviEpcm.v6xRsPjETkEsEhj=="];
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
          if (value && str["replace"](/[sEcmxRsPjETkEsEhj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662791;
  };
  return fn(++count, long) >> count ^ long;
})(_0x370b, 279, 71424);
var _0x2feb = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x370b[c];
  if (_0x2feb["CrejJf"] === undefined) {
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
    _0x2feb["vtjlNj"] = testcase;
    _0x2feb["avFyHK"] = {};
    _0x2feb["CrejJf"] = !![];
  }
  var e = _0x2feb["avFyHK"][c];
  if (e === undefined) {
    if (_0x2feb["XZvZpr"] === undefined) {
      _0x2feb["XZvZpr"] = !![];
    }
    x = _0x2feb["vtjlNj"](x, alpha);
    _0x2feb["avFyHK"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var extend = function(extendObj1, extendObj2) {
  function Class() {
    this[_0x2feb("0", "S!mA")] = extendObj1;
  }
  Class["prototype"] = extendObj2[_0x2feb("1", "w^GN")];
  extendObj1[_0x2feb("2", "C6mA")] = new Class;
};
var Car = function(type) {
  var MajorityMethods = {
    "kJYzI" : "eNZAQ",
    "msCpY" : _0x2feb("3", "u2mF"),
    "zjLZR" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var base = function() {
    var data = {
      "JQULJ" : function(name, initialValue) {
        return name === initialValue;
      },
      "PAgtd" : "HssXv",
      "XbeSS" : MajorityMethods["kJYzI"],
      "cwArp" : _0x2feb("4", "%yTO"),
      "JSWxL" : MajorityMethods[_0x2feb("5", "xiSk")]
    };
    var target = this;
    type["call"](target);
    Object[_0x2feb("6", "%yTO")](target, {
      "make" : {
        "enumerable" : !![],
        "configurable" : !![],
        "get" : function() {
          if (data[_0x2feb("7", "xiSk")](data[_0x2feb("8", "xD0F")], data[_0x2feb("9", "tWl*")])) {
            return make;
          } else {
            return _0x2feb("a", "u2mF");
          }
        }
      }
    });
    target[_0x2feb("b", "h8eV")] = function() {
      if (data["cwArp"] !== _0x2feb("c", "eEY)")) {
        throw new Error(data["JSWxL"]);
      } else {
        var target = this;
        type["call"](target);
        Object[_0x2feb("d", "FAyt")](target, {
          "make" : {
            "enumerable" : !![],
            "configurable" : !![],
            "get" : function() {
              return "Ford";
            }
          }
        });
        target[_0x2feb("e", "GfHh")] = function() {
          throw new Error(_0x2feb("f", "WWZp"));
        };
        return target;
      }
    };
    return target;
  };
  MajorityMethods[_0x2feb("10", "fIRn")](extend, base, type);
  return base;
}(Object);
var SuperCar = function(name) {
  var test = {
    "HTUqI" : _0x2feb("11", "xD0F"),
    "mHgBw" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var get = function(lastSetVal) {
    var callbackVals = test[_0x2feb("12", "U!^S")][_0x2feb("13", "w0AF")]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          return target;
        case "1":
          name[_0x2feb("14", "TxYw")](target);
          continue;
        case "2":
          var target = this;
          continue;
        case "3":
          Object[_0x2feb("15", "Gyze")](target, {
            "make" : {
              "enumerable" : !![],
              "configurable" : !![],
              "get" : function() {
                return lastSetVal;
              }
            }
          });
          continue;
        case "4":
          target[_0x2feb("16", "Q]L$")] = function() {
          };
          continue;
      }
      break;
    }
  };
  test["mHgBw"](extend, get, name);
  return get;
}(Car);
assertEquals("Ford", (new Car)[_0x2feb("17", "89fx")]);
assertEquals(_0x2feb("18", "IZ!Q"), (new SuperCar(_0x2feb("19", "@Jic")))[_0x2feb("1a", "Dh6v")]);
assertEquals("Lambo", (new SuperCar(_0x2feb("1b", "w0AF")))["make"]);
assertEquals(_0x2feb("1c", "FAyt"), (new SuperCar(_0x2feb("1d", "5Z*K")))["make"]);

