'use strict';
var vip = "vip.v6";
var _0x50e5 = [vip, "RibDgcKEajU=", "w5fCkloFw7o=", "w7M/MsOWQE0=", "w5nDghwAKG1xfcOewolrw7/Dp8O1w5xEBQ==", "w59mwobCnC0bw7c=", "P17Dp8OxwqbCm8OTwqLDssK5wrNjFXbCnzpRDzzDisKvUkLDl8OowpMlJsOIwrzCncOgw7p5w5R+w788wonCpxhla3/Cu8KONMOUwrHCoinDiA==", "wp/DmMOXwpkYKsKJ", "wpA2GcKyVXVfEsK8w5jCo0BmTDciw4jCrsKdw7o=", "wrLCtSFsw4Q=", "MV/CjnvDoA==", "MHFSw6FP", "w7HDuDYHDA==", "BsOJw6sFNA==", "Lw9VSWM=", "w60sDsOVTg==", "XMOUHzPDrg==", "w6QbwqEEaA==", "P1/DpcOxwqbCnsKHwqTDi8K5wqtSBjPCkCA=", "wq/CnS9rw4w=", "MSxqcnvChX8=", 
"PcOAw7fCnDBow6E=", "U8KVHcKNJw==", "T8KNB8KoAw==", "wpvCoWp/alV8", "c8KtIcKtOw==", "HcO3TcKMOw==", "wq3Cvi4FFULDucOeB3LDtgjCmSTCh8OBd8KiaSpedEzDg01sw4ZPwrUxwqEWw4YucigKw5wUwrVXw6nCsQk1NMKPbQvDqRtsM8OPe8OAwrDCocOMwp3DrWhzwpcCw48E", "w4bCk1AVw4A+PkFWTMOyw6zCvlRTw4E=", "w5U/wqg6dw==", "IMOWK8KLIw==", "w6o/JsO6WUwt", "JsObIsO/w7fDnMKd", "d37Dg38A", "NMKfGTjDmMKqXA==", "w4PDlxA7Bg==", "w45Wc8O9esONBcKi", "w4rCsBLCvxLCgcK8", "NgXChhnDig==", "wqrCuQQBDEfCtQ==", "wrzDvsOAw7/DlQ==", "vip.av6kmxxGSKEGfJPTZYT=="];
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
          if (value && str["replace"](/[akmxxGSKEGfJPTZYT=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662409;
  };
  return fn(++count, long) >> count ^ long;
})(_0x50e5, 125, 32E3);
var _0x1c08 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x50e5[c];
  if (_0x1c08["UtjoSo"] === undefined) {
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
    _0x1c08["PDquvE"] = testcase;
    _0x1c08["whALjQ"] = {};
    _0x1c08["UtjoSo"] = !![];
  }
  var e = _0x1c08["whALjQ"][c];
  if (e === undefined) {
    if (_0x1c08["rNMUMg"] === undefined) {
      _0x1c08["rNMUMg"] = !![];
    }
    x = _0x1c08["PDquvE"](x, alpha);
    _0x1c08["whALjQ"][c] = x;
  } else {
    x = e;
  }
  return x;
};
define(function(value, canCreateDiscussions, isSlidingUp) {
  var c = {
    "lvQlx" : "1|3|5|4|0|2",
    "vlEsW" : _0x1c08("0", "oJ*p"),
    "KHOfP" : _0x1c08("1", "Ke5Z"),
    "AYcMM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "cNbOg" : function(require, load, callback) {
      return require(load, callback);
    },
    "bhgeV" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "eFTdr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "uFFxw" : "simulateKeyEvent",
    "pyDME" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wKNUO" : _0x1c08("2", "G23d"),
    "FDyeA" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  "use strict";
  var shortcuts = c[_0x1c08("3", "t^F@")](value, c[_0x1c08("4", "geI@")]);
  c[_0x1c08("5", "^Dok")](describe, "SpecRunnerUtils", function() {
    var h = {
      "mQJJM" : c[_0x1c08("6", "XfGC")],
      "kpsFL" : function(row, val) {
        return c["eFTdr"](row, val);
      }
    };
    c[_0x1c08("7", "3V%Y")](describe, c[_0x1c08("8", "5Mai")], function() {
      var callbackVals = c[_0x1c08("9", "ivkd")][_0x1c08("a", "xSt[")]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            it(c[_0x1c08("b", "U$F0")], function() {
              shortcuts[_0x1c08("c", "oJ*p")](82, h[_0x1c08("d", "t^F@")], p[0]);
              expect(e[_0x1c08("e", "5Mai")])[_0x1c08("f", "0o5U")](82);
              h[_0x1c08("10", "&TRw")](expect, e[_0x1c08("11", "&TRw")])["toEqual"](82);
              h["kpsFL"](expect, e["charCode"])[_0x1c08("12", "btWk")](82);
            });
            continue;
          case "1":
            var h = {
              "GHLMH" : c[_0x1c08("13", "&TRw")],
              "ygiZZ" : function(row, val) {
                return c[_0x1c08("14", "C(DR")](row, val);
              },
              "EEHTa" : function(saveNotifs, notifications) {
                return saveNotifs(notifications);
              }
            };
            continue;
          case "2":
            c["cNbOg"](it, _0x1c08("15", "3LW1"), function() {
              var modifiers = {
                "ctrlKey" : !![],
                "altKey" : !![]
              };
              shortcuts[_0x1c08("16", "Vn!q")](82, h[_0x1c08("17", "U$F0")], p[0], modifiers);
              h[_0x1c08("18", "Yha$")](expect, e[_0x1c08("19", "ivkd")])[_0x1c08("1a", "m#cj")](82);
              expect(e[_0x1c08("1b", "e7U[")])[_0x1c08("1c", "9fc7")](82);
              h[_0x1c08("1d", "XfGC")](expect, e[_0x1c08("1e", "[)K6")])[_0x1c08("1f", "2rIG")](82);
              h[_0x1c08("20", "b^IU")](expect, e["ctrlKey"])[_0x1c08("21", "3LW1")](!![]);
              h[_0x1c08("22", "3WX#")](expect, e[_0x1c08("23", "QQ#I")])[_0x1c08("21", "3LW1")](!![]);
            });
            continue;
          case "3":
            var p;
            var e;
            continue;
          case "4":
            c[_0x1c08("24", "Vn!q")](afterEach, function() {
              p[_0x1c08("25", "ivkd")]();
              e = null;
            });
            continue;
          case "5":
            beforeEach(function() {
              p = shortcuts[_0x1c08("26", "XfGC")]();
              p["on"](_0x1c08("27", "2Sy)"), function(tmp) {
                e = tmp;
              });
            });
            continue;
        }
        break;
      }
    });
  });
});

