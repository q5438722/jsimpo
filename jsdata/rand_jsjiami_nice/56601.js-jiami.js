'use strict';
var vip = "vip.v6";
var _0x318d = [vip, "wpgXwqTCksKc", "w7vDisKMPsOG", "w53DsMKcL8OY", "wpvCkMKqBk0=", "XcK7CmXDmw==", "wqduTgJy", "w7jCjG7Dh8KgwqzCgcO+", "TsKIwpscwpQ=", "wqpmMXw6Hw==", "FyEBwr3DgsKGGA==", "wqzCrsKIGVc=", "CMKvGMOqasOjw7xxPDI=", "w5UcQsO0w4rDm8Kgw6x9w47Ciw==", "w7vCnGXDh8K3wqTCjsO5", "GcOfAsOhw5nCsMKDw6I=", "w5QxU8OCw68=", "wogXw7s4wpDDgQ==", "w7QOZsOyw7Q=", "w64hwrXDpsKw", "wrzCugHCh0fCicOvbA==", "woEcw7Q9wojDjA==", "wqMuwobCs8Ky", "GMOPH8Oyw67CuQ==", "wqTDgFU1EQ==", "wokHw6YrwqfDiMKFwqc=", "D2ZLJsKs", 
"w5FIXMOwZg==", "wpHCrhrCqHM=", "R8Ofw6XDnMKg", "wrnCkMOuwoBF", "w5TDjMKND8O/", "w6DCvldbRi4u", "wooXw60rwrDDgMKKwqA=", "OXJEIMKC", "wqrCjsOSwoRuJsOa", "EMK3wpLDjMOdw6Ubw6DCh8O3w5E=", "E8KMSwjChFY=", "NjJevRRRip.v6rCkuUITzPV=="];
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
          if (value && str["replace"](/[NjJeRRRrCkuUITzPV=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662767;
  };
  return fn(++count, long) >> count ^ long;
})(_0x318d, 358, 91648);
var _0x9e81 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x318d[c];
  if (_0x9e81["GxllLO"] === undefined) {
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
    _0x9e81["HSQwUO"] = testcase;
    _0x9e81["YFhjdW"] = {};
    _0x9e81["GxllLO"] = !![];
  }
  var e = _0x9e81["YFhjdW"][c];
  if (e === undefined) {
    if (_0x9e81["BIYuxT"] === undefined) {
      _0x9e81["BIYuxT"] = !![];
    }
    x = _0x9e81["HSQwUO"](x, alpha);
    _0x9e81["YFhjdW"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require("../common");
const assert = require("assert");
const async_hooks = require("async_hooks");
const fnsToTest = [setTimeout, (gen) => {
  var loader_calback = {
    "KxCia" : function(saveNotifs) {
      return saveNotifs();
    },
    "lyolb" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wwOeI" : function(value, joiner) {
      return value !== joiner;
    },
    "FdYtS" : _0x9e81("0", "$SJ#"),
    "bZXaB" : "zamIo",
    "ozCuK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xANYB" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  loader_calback[_0x9e81("1", "Vi[W")](setImmediate, () => {
    var genDirRoots = {
      "puEpb" : function(data) {
        return loader_calback[_0x9e81("2", "O*7i")](data);
      },
      "ZAwWO" : function(data, jQueryTemplateOptions) {
        return loader_calback[_0x9e81("3", "E62M")](data, jQueryTemplateOptions);
      }
    };
    if (loader_calback[_0x9e81("4", "bdtO")](loader_calback[_0x9e81("5", "DO^e")], loader_calback["bZXaB"])) {
      gen();
      loader_calback["ozCuK"](setImmediate, () => {
        hook[_0x9e81("6", "#6Xv")]();
      });
    } else {
      process[_0x9e81("7", "YD54")](() => {
        genDirRoots[_0x9e81("8", "$SJ#")](gen);
        genDirRoots["ZAwWO"](setImmediate, () => {
          hook[_0x9e81("9", "bdtO")]();
          assert[_0x9e81("a", "fkBo")](fnsToTest[_0x9e81("b", "D^!A")], 0);
        });
      });
    }
  });
}, (data) => {
  var container = {
    "OXHTt" : function(saveNotifs) {
      return saveNotifs();
    },
    "xfjKn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "YpnsP" : function(value, joiner) {
      return value !== joiner;
    },
    "mZNEU" : _0x9e81("c", "Sux)"),
    "wDOri" : _0x9e81("d", "DO^e"),
    "cOWKX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  container["cOWKX"](setImmediate, () => {
    var command_codes = {
      "rLMyY" : function(data) {
        return container[_0x9e81("e", "DO^e")](data);
      },
      "BOcxi" : function(data, modelsInfo) {
        return container[_0x9e81("f", "uJ@U")](data, modelsInfo);
      }
    };
    if (container[_0x9e81("10", "CdIN")](container["mZNEU"], container[_0x9e81("11", "h4VH")])) {
      process[_0x9e81("12", "^3]y")](() => {
        command_codes["rLMyY"](data);
        command_codes[_0x9e81("13", "In#]")](setImmediate, () => {
          hook["disable"]();
          assert["strictEqual"](fnsToTest[_0x9e81("14", "tHOS")], 0);
        });
      });
    } else {
      hook[_0x9e81("15", "jqRx")]();
      container[_0x9e81("16", "uJ@U")](nextTest);
    }
  });
}];
const hook = async_hooks[_0x9e81("17", "[88]")]({
  "before" : common[_0x9e81("18", "eld1")](),
  "after" : common[_0x9e81("19", "^3]y")](() => {
  }, 3),
  "destroy" : common[_0x9e81("1a", "eNGU")](() => {
    hook["disable"]();
    nextTest();
  }, 3)
});
nextTest();
function nextTest() {
  var _0xd6a304 = {
    "PvKfe" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "LgWrp" : function(name, initialValue) {
      return name === initialValue;
    },
    "HtRsF" : _0x9e81("1b", "eld1")
  };
  if (fnsToTest[_0x9e81("1c", "YD54")] > 0) {
    if (_0xd6a304[_0x9e81("1d", "eld1")](_0x9e81("1e", "*O@Z"), _0xd6a304["HtRsF"])) {
      fnsToTest["shift"]()(common[_0x9e81("1f", "i6MX")](() => {
        hook[_0x9e81("20", "YD54")]();
      }));
    } else {
      if (_0xd6a304[_0x9e81("21", "Sux)")](fnsToTest[_0x9e81("22", "eNGU")], 0)) {
        fnsToTest[_0x9e81("23", "qTch")]()(common[_0x9e81("24", "YD54")](() => {
          hook["enable"]();
        }));
      }
    }
  }
}
;
