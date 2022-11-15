'use strict';
var vip = "vip.v6";
var _0x1ddb = [vip, "w61AU8K2Hg==", "asOvWcKPwq/DrVw=", "w77ClXtn", "wr7DvU02w6Q=", "w593wqlPNA==", "w5HCvgXDiw==", "w6wPw4R+BsO5wqA=", "w4pMw6N0w4XDjcKrZFZBwpLCnirDjzUcCMKcw5RGIQVOLcOEwp8bwopmwobCi8K8QCfDhMKNIRJGw4HCm8OjDT5AUMOYwqXDvwRpAMO+CsKOwpwfTETDhgNdT2UnKm/DrsOPwqFpwoEQGEIiwpDCrmXDkg==", "wpXDisKNwro=", "woxJAMKjwozCqMKsw63DmsK9", "GBfDuinDsX01", "QGAKwqrCrg==", "w4oGa3hF", "w4dKwpdzEVnDrMKucHDDjC3DtnnDg01Qw7/CjcK+wpzCmMO2wrZkwqZowp0KwoTDn8Kewr3CmnslB8KfMsKQwrHCsEvCocKVfhHCl8KOwrbDjsOdw5xSw6LDtMKoSj5u", 
"wrfCm8OcUA==", "aArDtcOjw45BMA==", "w7QMM8KCwoo=", "woLDuDJZUg==", "vipL.vcz6cdTCsmWwlgmWrta=="];
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
          if (value && str["replace"](/[LczcdTCsmWwlgmWrta=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662161;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1ddb, 247, 63232);
var _0x2966 = function(c, data) {
  c = ~~"0x"["concat"](c);
  var rv = _0x1ddb[c];
  if (_0x2966["yYJhVQ"] === undefined) {
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
    _0x2966["EyfAHj"] = testcase;
    _0x2966["KSDtNy"] = {};
    _0x2966["yYJhVQ"] = !![];
  }
  var i = _0x2966["KSDtNy"][c];
  if (i === undefined) {
    if (_0x2966["yDdjPt"] === undefined) {
      _0x2966["yDdjPt"] = !![];
    }
    rv = _0x2966["EyfAHj"](rv, data);
    _0x2966["KSDtNy"][c] = rv;
  } else {
    rv = i;
  }
  return rv;
};
it(_0x2966("0", "$xvu"), function() {
  var zlib = {
    "ryGad" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ebqpf" : _0x2966("1", "LzDi"),
    "XWmvf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var result = require[_0x2966("2", "iEXb")](".", ![], /two/, zlib["ebqpf"]);
  zlib[_0x2966("3", "8sP]")](expect, function() {
    zlib[_0x2966("4", "j))h")](result, _0x2966("5", "jDhQ"));
  })["toThrowError"](/not available/);
});
it("should find module with asyncMode === 'weak' when required elsewhere", function() {
  var B1498 = {
    "kUQII" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Zzgxm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var renamings__1570 = require[_0x2966("6", "Vv[f")](".", ![], /.+/, _0x2966("7", "n%Zw"));
  B1498[_0x2966("8", "^D5d")](expect, B1498[_0x2966("9", "$xvu")](renamings__1570, "./three"))[_0x2966("a", "Ic7o")](3);
  B1498["Zzgxm"](require, _0x2966("b", "jGzl"));
});
it(_0x2966("c", "@Nv!"), function() {
  var ast = {
    "ISpYX" : _0x2966("d", "0m0h"),
    "WbkeQ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TzzbY" : _0x2966("e", "$OV3"),
    "HASWu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var token_dash__gt_exp = require[_0x2966("f", "!6#X")](".", !![], /.+/, ast["ISpYX"]);
  ast["WbkeQ"](expect, token_dash__gt_exp(ast["TzzbY"]))["toBe"](4);
  ast[_0x2966("10", "zo#b")](require, ast[_0x2966("11", "N6gt")]);
});

