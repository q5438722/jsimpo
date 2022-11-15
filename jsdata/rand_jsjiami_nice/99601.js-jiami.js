'use strict';
var vip = "vip.v6";
var _0x485d = [vip, "LsOFUSzCjQ==", "w5bDiE8lwqw=", "BVHDq8KaMA==", "BsOxWMKqfg==", "w75mPgzDhA==", "wpAnJnDCqA==", "XyfDoSoCIsKSJyzCtzg=", "f8KEb8OUaA==", "N0nDj8KZCg==", "Wml+wr3CrE8=", "e8OkwpDDgRY=", "woTDisKTTMKV", "w6vDqcKhVsKd", "A8KeK05l", "JGvDisKuGw==", "wo/CpyDDkCc=", "B2HDgcKcO8OG", "wqvClxLDg0cmwpLCrMOOTyJ0CWwCwojChsO6woXCmcOHwpXCqsO0wrs=", "wp1/XcKDwpTDqMOTMcKpIFo=", "J2sawpHDkw==", "w4gTwpJSdA==", "w4nDj8KwwoLCuQ==", "w4MIfQPChF3CqULDoMOb", "wqlSTMKAwpQ=", "EMOqYivCow==", "wqpawqUfNw==", 
"woLDv8KpT8KT", "wpfClsOsN8O4VUU=", "w7/DocOWR8OZ", "wpfCkcOjMcOuXkUdEcOTwo0k", "QsKyw7TDgXfDhMKBw4rDkFnDlQ==", "wox9wqc/AsKaQA==", "w7nDucOFcgrCgUh/PyzCq2U=", "wo/ChMKSw77Ct2IKw4QSwoA=", "wrk3wqteYQ==", "woNywq8mJQ==", "wpvCtgHDg8OQ", "clYBI8OxUm/Dv2NOKsKxNE4ew5I=", "V8KBSMOWRQ==", "W8Oaw5bCiWrCkA==", "KMKwKHtl", "w4PDo8OMRyU=", "w4kewrxOeA==", "wprDlsOowrnDvsKfTw==", "w4LDpsOKa8OLwo9A", "wrYZw4BCEMOz", "wpcqw41XwqZoGlFNZsOQ", "wrTCvR/DlTE=", "ZGg3CMO8wr/DtHJbw5J5MMKGw44pw5c=", "w7JZID3Dkjsww5dzUhVw", 
"BcK4F8KzEA==", "w63DgsOkfyg=", "wrzCqsOAH8O/", "wqrDnB1/EUlaBgUKTyTDhW9Uw4pWWnzCn8KnwqDCihZI", "XzvDvDYNMsO3JDzCoiFFw4odOVs5wpfDksO+wqnDlMOfw49nwrnCkAHCkGXCslPCqGjCrAnDnMO+woXCszM/wpY=", "OMK7JkQSw4VZw6/Ctg5fwq3CnFRDwr8sw6RnLg==", "GG3DlMKQfsOVVMK3OMKSeMO1wocq", "A8OUQMKZfQ==", "w7XDtcOuZyk=", "w4IjCcOywpI=", "fMOBwqPDpw4=", "VsKhXsOgXw==", "wq/ClcKGw4jDiw==", "wqzCtcOaJMOO", "TFc5IMOT", "wo1jTsKYwoTDucOi", "WcK0w6TDsWE=", "vsUzxip.v6BubKwbUYwkVu=="];
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
          if (value && str["replace"](/[sUzxBubKwbUYwkVu=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662993;
  };
  return fn(++count, long) >> count ^ long;
})(_0x485d, 312, 79872);
var _0x211b = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x485d[c];
  if (_0x211b["YfuOlv"] === undefined) {
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
    _0x211b["kyFOiT"] = testcase;
    _0x211b["kpPUqS"] = {};
    _0x211b["YfuOlv"] = !![];
  }
  var e = _0x211b["kpPUqS"][c];
  if (e === undefined) {
    if (_0x211b["PGqFfH"] === undefined) {
      _0x211b["PGqFfH"] = !![];
    }
    x = _0x211b["kyFOiT"](x, alpha);
    _0x211b["kpPUqS"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const request = require("../../test-helpers/context")[_0x211b("0", "[nBL")];
const assert = require(_0x211b("1", "%5#V"));
describe(_0x211b("2", "sVV%"), () => {
  var data = {
    "GZNLU" : function(saveNotifs) {
      return saveNotifs();
    },
    "qnfUr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "MiWvN" : function(saveNotifs) {
      return saveNotifs();
    },
    "ocOCT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "GYcjc" : function(name, initialValue) {
      return name === initialValue;
    },
    "mpxDv" : _0x211b("3", "nJwk"),
    "TtlBS" : function(require, load, callback) {
      return require(load, callback);
    },
    "XKWaE" : _0x211b("4", "rpo["),
    "XMoaT" : function(saveNotifs) {
      return saveNotifs();
    },
    "jUKbn" : _0x211b("5", "HrH0"),
    "GGnlE" : "text/plain",
    "mWzjv" : _0x211b("6", "jNUi"),
    "LRwmJ" : "vWyjf",
    "JZlGX" : "utf-8",
    "lgikT" : function(name, initialValue) {
      return name === initialValue;
    },
    "WlGDH" : _0x211b("7", "jZo$"),
    "GuyAu" : _0x211b("8", "C)O&"),
    "ObmYw" : function(saveNotifs) {
      return saveNotifs();
    },
    "ZVVqZ" : function(require, load, callback) {
      return require(load, callback);
    },
    "LLybW" : "YfxKN",
    "KojVE" : function(require, load, callback) {
      return require(load, callback);
    },
    "PUJgO" : _0x211b("9", "jfE6"),
    "pMpbm" : _0x211b("a", "l%5z"),
    "hrbYu" : function(require, load, callback) {
      return require(load, callback);
    },
    "ocEaF" : "with no content-type present",
    "RHZlz" : _0x211b("b", "67&#"),
    "ulmhh" : _0x211b("c", "OAA%")
  };
  data[_0x211b("d", "YQDn")](describe, data[_0x211b("e", "jZo$")], () => {
    if (data[_0x211b("f", "LvJ7")]("nOvNd", data[_0x211b("10", "lj0(")])) {
      const args = data["GZNLU"](request);
      data[_0x211b("11", "yxqc")](assert, args["charset"] === "");
    } else {
      data[_0x211b("12", "1spm")](it, data[_0x211b("13", "C)O&")], () => {
        const openTimes = data[_0x211b("14", "ihNR")](request);
        data["ocOCT"](assert, openTimes[_0x211b("15", "00AN")] === "");
      });
    }
  });
  data[_0x211b("16", "[nBy")](describe, data[_0x211b("17", "qCcQ")], () => {
    var xy = {
      "oPpEs" : function(_relatedTarget) {
        return data[_0x211b("18", "pb%P")](_relatedTarget);
      },
      "QWrWs" : data[_0x211b("19", "OAA%")]
    };
    if (data[_0x211b("1a", "YQDn")] === data["LRwmJ"]) {
      const options = xy[_0x211b("1b", "HrH0")](request);
      options["header"][xy[_0x211b("1c", "$MjI")]] = "application/json; application/text; charset=utf-8";
      assert[_0x211b("1d", "l%5z")](options["charset"], "");
    } else {
      it(data[_0x211b("1e", "yxqc")], () => {
        const args = data[_0x211b("1f", "OAA%")](request);
        args[_0x211b("20", "9Du(")][data[_0x211b("21", "lj0(")]] = data["GGnlE"];
        data["ocOCT"](assert, args["charset"] === "");
      });
    }
  });
  data["hrbYu"](describe, data["ulmhh"], () => {
    if (data[_0x211b("22", "Rcct")](data[_0x211b("23", ")jY7")], data[_0x211b("24", "67&#")])) {
      data[_0x211b("25", "OAA%")](it, data[_0x211b("26", "nJwk")], () => {
        const options = request();
        options[_0x211b("27", "OAA%")][data["jUKbn"]] = _0x211b("28", "nJwk");
        assert[_0x211b("29", "00AN")](options["charset"], data[_0x211b("2a", "G&f*")]);
      });
      data[_0x211b("2b", "XO(Z")](it, data[_0x211b("2c", "*KbF")], () => {
        var keys = {
          "EOcRF" : data["jUKbn"],
          "VHyRl" : _0x211b("2d", "Ubr0"),
          "jRShR" : function(_relatedTarget, position) {
            return data[_0x211b("2e", "00AN")](_relatedTarget, position);
          }
        };
        if (data[_0x211b("2f", "qCcQ")](data["WlGDH"], data["GuyAu"])) {
          const data = request();
          data["header"][keys[_0x211b("30", "9Ieb")]] = keys["VHyRl"];
          assert(keys[_0x211b("31", "Rcct")](data[_0x211b("32", "C)O&")], ""));
        } else {
          const someServerData = data[_0x211b("33", "[nBL")](request);
          someServerData["header"][_0x211b("34", "C)O&")] = "application/json; application/text; charset=utf-8";
          assert[_0x211b("35", "[nBy")](someServerData[_0x211b("36", "9Ieb")], "");
        }
      });
    } else {
      var obj = {
        "pNpch" : function(saveNotifs) {
          return saveNotifs();
        },
        "gbzWW" : _0x211b("37", "jZo$"),
        "HVvqV" : _0x211b("38", "1spm"),
        "YugAJ" : function(_relatedTarget, position) {
          return data[_0x211b("39", "$Hrd")](_relatedTarget, position);
        },
        "JbDJI" : function(_relatedTarget, position) {
          return data[_0x211b("3a", "9Ieb")](_relatedTarget, position);
        }
      };
      data[_0x211b("3b", "J^xE")](it, _0x211b("3c", "ihNR"), () => {
        const args = obj[_0x211b("3d", "yxqc")](request);
        args[_0x211b("3e", "SIl@")][obj[_0x211b("3f", "67&#")]] = obj["HVvqV"];
        obj[_0x211b("40", "jZo$")](assert, obj[_0x211b("41", "XO(Z")](args[_0x211b("42", "k#X]")], ""));
      });
    }
  });
});

