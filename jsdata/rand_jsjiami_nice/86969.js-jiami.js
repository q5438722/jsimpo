'use strict';
var vip = "vip.v6";
var _0x4e3f = [vip, "a8K1SsKFCQ==", "X8Onw4RlFA==", "dcKWbsK4", "C8OVVsO9w57CmnbDvsKEOsOLw7DCkl0tYA==", "ZW3Dgw/DiVoCwpA3cA==", "wpUaSCzDp8KUwpjCvg==", "SDttwqwGBy91w4/Dlw==", "w41ZwozCqVHCtsOOw7rDssOf", "F1HDiMO1wqsHw6TDjsOAO2NLwrxCdQ==", "w4AWw6TCh8Owwo0HWhVzacOfKRlG", "ZXIwQMKmFFEbw5fChUxnwrs=", "wq3CihfCtQ/CicKUBA==", "UXkIw4rCv8Of", "wr/Dm8KWckDDgg==", "e3nCmm12", "w5MYw7rCn8Oq", "c8KtS1d4wqw=", "NcOhU8O3w4U=", "HlhmFMKlJw==", "eHomRMK9", "acO1w5JEDx8=", "DUDChF9g", "IcOrw6nCkg0=", "w50mJMKTw7k5", 
"wrQ2GQ9I", "Lmg2wq3DvMOX", "wo/DmzLDscKy", "e2s4WcK6", "C8OgVQ/Dkw3DmQs=", "VmfCnExYw7fDksOJLw==", "LUMOwrIfYsOyw7M=", "w5fCqMKwF8Kfcg==", "wrPDlcKRbkvDhnQgw4fCscKHMMO4w6RSwoU=", "UHkRw4jCssOIfzE=", "asO6wopow7HCjsOrwrspwq/Cp2UWw6rDsMOH", "FlJbGcKp", "IsOEwrZpwqE=", "wrIYcRXDgQ==", "NMObbSbCog==", "O0UowrY3", "wpYtw6vCu1o=", "w4jCrMK2Dw==", "EVx8FsK2IDkT", "wrvDgsOIwp4=", "UHcJw4HCvMODaCw=", "w77CusKLwrLCmW5f", "IjHDgyLDuA==", "D2duwqEKEA==", "YAJNwrkTacO6w6XCjcOgK8Olw6DDj8O0EcOdUg==", "wp7DjMKvw7lI", 
"wpDCscO1GMOLakTDuXfDv8K6", "wrXDucOcwoVf", "EsOyfR7DlA==", "L8KdZQNT", "wqkyHwlSw6gf", "B8OxYxZ3w7Y=", "KPvuip.v6oqsAPktLjoMCyy=="];
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
          if (value && str["replace"](/[KPuoqsAPktLjoMCyy=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662322;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4e3f, 213, 54528);
var _0x215e = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x4e3f[c];
  if (_0x215e["UTKeuc"] === undefined) {
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
    _0x215e["bxEmfY"] = testcase;
    _0x215e["ORxAoS"] = {};
    _0x215e["UTKeuc"] = !![];
  }
  var e = _0x215e["ORxAoS"][c];
  if (e === undefined) {
    if (_0x215e["PXcAqh"] === undefined) {
      _0x215e["PXcAqh"] = !![];
    }
    x = _0x215e["bxEmfY"](x, alpha);
    _0x215e["ORxAoS"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var Detector = {};
module[_0x215e("0", "zJA[")] = Detector;
var SAT = require(_0x215e("1", "0!u4"));
var Pair = require(_0x215e("2", "5qe9"));
var Bounds = require(_0x215e("3", "SZbL"));
(function() {
  var c = {
    "nVWUR" : function(name, initialValue) {
      return name === initialValue;
    },
    "ZwxFo" : _0x215e("4", "G3c$"),
    "NqjMG" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "PUwxt" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "yZEze" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "MoZIZ" : _0x215e("5", "f4bS"),
    "ulAco" : function(name, initialValue) {
      return name === initialValue;
    },
    "hKiiN" : _0x215e("6", "$Nr^"),
    "VsreM" : function(name, initialValue) {
      return name === initialValue;
    },
    "nglNw" : function(value, joiner) {
      return value !== joiner;
    },
    "uiJhA" : function(value, joiner) {
      return value !== joiner;
    },
    "QSFce" : function(dest_operand, source_operand) {
      return dest_operand & source_operand;
    }
  };
  Detector["collisions"] = function(PL$53, componentStack) {
    var data = [];
    var _CACHE = componentStack[_0x215e("7", "6mDs")][_0x215e("8", "ZA6P")];
    var parentComponentDef = componentStack[_0x215e("9", "m2NF")];
    var PL$54 = 0;
    for (; PL$54 < PL$53[_0x215e("a", "c3@M")]; PL$54++) {
      if (c[_0x215e("b", "1Q&a")](c[_0x215e("c", "X)Ms")], "rkigx")) {
        data[_0x215e("d", "1Q&a")](value);
        parentComponentDef[_0x215e("e", "zY6W")] += 1;
      } else {
        var test = PL$53[PL$54][0];
        var node = PL$53[PL$54][1];
        if ((test["isStatic"] || test[_0x215e("f", "0!u4")]) && (node[_0x215e("10", "vLpD")] || node[_0x215e("11", "5qe9")])) {
          continue;
        }
        if (!Detector[_0x215e("12", "1Ea@")](test[_0x215e("13", "vLGb")], node[_0x215e("14", "bzu2")])) {
          continue;
        }
        parentComponentDef[_0x215e("15", "4kgB")] += 1;
        if (Bounds[_0x215e("16", "2*4#")](test[_0x215e("17", "%M)t")], node[_0x215e("18", "hGd1")])) {
          var i = c[_0x215e("19", "kB9J")](test[_0x215e("1a", "bzu2")][_0x215e("1b", ")Y9i")], 1) ? 1 : 0;
          for (; c[_0x215e("1c", "zY6W")](i, test["parts"][_0x215e("1d", "]PH)")]); i++) {
            var status = test["parts"][i];
            var req = c["NqjMG"](node[_0x215e("1e", "4kgB")][_0x215e("1f", "X)Ms")], 1) ? 1 : 0;
            for (; c[_0x215e("20", "@L56")](req, node[_0x215e("21", "Xm6r")][_0x215e("22", "]mCP")]); req++) {
              var res = node[_0x215e("23", "m2NF")][req];
              if (status === test && res === node || Bounds["overlaps"](status[_0x215e("24", "E[Fd")], res["bounds"])) {
                var callbackVals = c[_0x215e("25", "PxLe")][_0x215e("26", "4kgB")]("|");
                var callbackCount = 0;
                for (; !![];) {
                  switch(callbackVals[callbackCount++]) {
                    case "0":
                      if (cache && cache[_0x215e("27", "6mDs")]) {
                        entry = cache[_0x215e("28", "kB9J")];
                      } else {
                        entry = null;
                      }
                      continue;
                    case "1":
                      var value = SAT[_0x215e("29", "SZbL")](status, res, entry);
                      continue;
                    case "2":
                      if (value[_0x215e("2a", "f4bS")]) {
                        parentComponentDef[_0x215e("2b", "hGd1")] += 1;
                      }
                      continue;
                    case "3":
                      if (value[_0x215e("2c", "%M)t")]) {
                        data["push"](value);
                        parentComponentDef[_0x215e("2d", "v2KN")] += 1;
                      }
                      continue;
                    case "4":
                      parentComponentDef["narrowphaseTests"] += 1;
                      continue;
                    case "5":
                      var id = Pair["id"](status, res);
                      var cache = _CACHE[id];
                      var entry;
                      continue;
                  }
                  break;
                }
              }
            }
          }
        }
      }
    }
    return data;
  };
  Detector["canCollide"] = function(a, b) {
    if (c["ulAco"](_0x215e("2e", "]PH)"), c["hKiiN"])) {
      previousCollision = null;
    } else {
      if (c["VsreM"](a["group"], b[_0x215e("2f", "ygIS")]) && c["nglNw"](a["group"], 0)) {
        return c[_0x215e("30", "vLpD")](a[_0x215e("31", "n#]$")], 0);
      }
      return c[_0x215e("32", "SZbL")](c[_0x215e("33", "$yJ8")](a[_0x215e("34", "f4bS")], b[_0x215e("35", "]PH)")]), 0) && (b[_0x215e("36", "$Nr^")] & a[_0x215e("37", "%M)t")]) !== 0;
    }
  };
})();

