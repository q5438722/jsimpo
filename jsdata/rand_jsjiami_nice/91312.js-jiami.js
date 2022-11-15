'use strict';
var vip = "vip.v6";
var _0x3318 = [vip, "w7fCucO5K8KPwrfCksKTEw==", "wr3Dq0VBasOqalfCicKJw6E=", "JsO5LlnDvhHCgcKmK1fCuRnCs2JEIsK4ESc1", "wokdw57Csx/CkzjCvsOcw7bDgMKNwqLCimFMwpNbwr/Dt8Ohw6vDusKGAA==", "wo8AwrzCu8Kz", "QcOcw77DowXDqkQAw6nCj2I=", "wot5w7zDsjs=", "McK4w5/CuhM=", "w7TCrMO5McKE", "csOPw7jDqRDDqA==", "wrPChjBUw7/Cuw==", "w5PDuk7CuEQ=", "H2vDiEQN", "w63DrkbCh1I=", "wq/Coxlaw4/DpcOKwpoawrA2wo1iw4XDkw==", "w4bDqXrCiX5fw7o=", "FkE8KMO9", "wosowpbCpsKpYMKacsK6wpfDrgTDkQrDvsOywq7DkWt3BA==", "M8O6X2UPwrs=", "wpMoworCscKg", 
"McOswovDssKw", "wphAw7bDshvCkTPChsOTw7DDlcOewrjCgGY=", "SVRjwqx9aVU=", "fsKnSmUYwrVzZ8KAMGHDu8KzwpY=", "w7dyfT/CkBTCtS07w6DDvsK/OWwtwpF4wqpVwqXCs2UP", "GU3DpVM=", "w5zClsKGw5rCimB9NzvCrxXClQ==", "IMO0dCgf", "tfBNCvihp.vEy6tJKeYaFVQ=="];
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
          if (value && str["replace"](/[tfBNChEytJKeYaFVQ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662371;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3318, 135, 34560);
var _0x1c67 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x3318[c];
  if (_0x1c67["EWkKub"] === undefined) {
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
    _0x1c67["qjYLex"] = testcase;
    _0x1c67["vApJKC"] = {};
    _0x1c67["EWkKub"] = !![];
  }
  var e = _0x1c67["vApJKC"][c];
  if (e === undefined) {
    if (_0x1c67["nnJKay"] === undefined) {
      _0x1c67["nnJKay"] = !![];
    }
    x = _0x1c67["qjYLex"](x, alpha);
    _0x1c67["vApJKC"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const path = require("path");
const pkgJson = require(_0x1c67("0", "kwwY"));
const resourceTestHelper = require(_0x1c67("1", "!8Z*"));
const root = path[_0x1c67("2", "6sVs")](__dirname, "fixtures", _0x1c67("3", "]F1]"));
const name = _0x1c67("4", "T$nW");
const initialValue = JSON["stringify"]({
  "hooks" : {}
}, null, 2);
const updateValue = JSON[_0x1c67("5", "PVh@")]({
  "hooks" : {
    "pre-commit" : _0x1c67("6", "!Ahb")
  }
}, null, 2);
describe(_0x1c67("7", "kQ@W"), () => {
  var zlib = {
    "lIDyv" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "NuzLs" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fzDhr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gVGaT" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  test(_0x1c67("8", "m)2P"), async() => {
    await zlib[_0x1c67("9", "Vw[t")](resourceTestHelper, {
      "resourceModule" : pkgJson,
      "resourceName" : _0x1c67("a", "aVCT"),
      "context" : {
        "root" : root
      },
      "initialObject" : {
        "name" : name,
        "value" : initialValue
      },
      "partialUpdate" : {
        "value" : updateValue
      }
    });
  });
  zlib[_0x1c67("b", "m)2P")](test, "handles multiple parallel create calls", async() => {
    const _0x284dde = pkgJson["create"]({
      "root" : root
    }, {
      "name" : _0x1c67("c", "5CKg"),
      "value" : JSON[_0x1c67("d", "PVh@")](initialValue)
    });
    const _0x2b33ba = pkgJson[_0x1c67("e", "aVCT")]({
      "root" : root
    }, {
      "name" : _0x1c67("f", "Bh7j"),
      "value" : JSON[_0x1c67("10", "]a@h")](initialValue)
    });
    const done = await _0x284dde;
    const syncFlushOpt = await _0x2b33ba;
    zlib[_0x1c67("11", "6sVs")](expect, done)["toMatchSnapshot"]();
    zlib[_0x1c67("12", "]a@h")](expect, syncFlushOpt)[_0x1c67("13", "zbrN")]();
    await pkgJson[_0x1c67("14", "vzbd")]({
      "root" : root
    }, done);
    await pkgJson["destroy"]({
      "root" : root
    }, syncFlushOpt);
  });
  zlib[_0x1c67("15", "&TUG")](test, _0x1c67("16", "Vw[t"), async() => {
    const syncFlushOpt = await pkgJson[_0x1c67("17", "kwwY")]({
      "root" : root
    }, {
      "name" : name,
      "value" : JSON[_0x1c67("18", "Vw[t")](initialValue)
    });
    zlib[_0x1c67("19", "q7L2")](expect, syncFlushOpt)[_0x1c67("1a", "m)2P")]();
    await pkgJson[_0x1c67("1b", "0nEG")]({
      "root" : root
    }, syncFlushOpt);
  });
});

