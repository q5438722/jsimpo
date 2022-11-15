'use strict';
var vip = "vip.v6";
var _0x543c = [vip, "woMsw6wwVg==", "wrwVJ8KoGA==", "wqR1w7nDk3Y=", "w6PCslN9Wg==", "w6VOw5LDtsOF", "w7fDr8Ok", "wq0Kw5cz", "EHU3", "w7DCq1/DjQ==", "wpfDgcOi", "wp51w5Q=", "TD5swqTDgiXDpQ==", "dMOfw63CiMOMTMOzYxI/JMKbwpc=", "wo/DrMKoVkM=", "w43DojAU", "wrBLw7A=", "w5XDhsODNjM=", "wpMJwo9TJw==", "xvOthnip.LvzMq6LUADZjQot=="];
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
          if (value && str["replace"](/[xOthnLzMqLUADZjQot=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662718;
  };
  return fn(++count, long) >> count ^ long;
})(_0x543c, 383, 98048);
var _0x4d30 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x543c[a];
  if (_0x4d30["MNCgqv"] === undefined) {
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
    _0x4d30["RhFXGV"] = testcase;
    _0x4d30["VPueoC"] = {};
    _0x4d30["MNCgqv"] = !![];
  }
  var A = _0x4d30["VPueoC"][a];
  if (A === undefined) {
    if (_0x4d30["JiMuOl"] === undefined) {
      _0x4d30["JiMuOl"] = !![];
    }
    value = _0x4d30["RhFXGV"](value, opt_max);
    _0x4d30["VPueoC"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var test = require(_0x4d30("0", "s!kU"))[_0x4d30("1", "ZtFg")];
var pack = require(_0x4d30("2", "JLMW"));
test(_0x4d30("3", "j0d%"), function(module) {
  var d = {
    "QlxhZ" : _0x4d30("4", ")CJP"),
    "GjBuf" : 'T.equal(require("./xyz")(3), 333)',
    "ZCHwc" : _0x4d30("5", "OkMm"),
    "UwgMI" : "T.ok(true); module.exports=function(n){return n*111}",
    "akxyd" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "dBSiC" : _0x4d30("6", "JLMW")
  };
  var callbackVals = _0x4d30("7", "!(bv")[_0x4d30("8", "0Xd3")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        response["on"]("data", function(s) {
          ret = ret + s;
        });
        continue;
      case "1":
        module[_0x4d30("9", "@XGj")](4);
        continue;
      case "2":
        response[_0x4d30("a", "quP#")](JSON["stringify"]([{
          "id" : d[_0x4d30("b", "l8!E")],
          "source" : d[_0x4d30("c", "D(Ho")],
          "entry" : !![],
          "deps" : {
            "./xyz" : "xyz"
          }
        }, {
          "id" : d[_0x4d30("d", "ZtFg")],
          "source" : d["UwgMI"]
        }]));
        continue;
      case "3":
        var checks = {
          "ByWtS" : function(prefer, forceUTC) {
            return d["akxyd"](prefer, forceUTC);
          },
          "YZScI" : d[_0x4d30("e", "u8[D")],
          "gKUAU" : "xyz"
        };
        continue;
      case "4":
        var ret = "";
        continue;
      case "5":
        response["on"]("end", function() {
          var f = Function(["T"], checks[_0x4d30("f", "OkMm")](checks["YZScI"], ret))(module);
          module[_0x4d30("10", "a2cs")](f(checks[_0x4d30("11", "v#S$")])(5), 555);
          module["equal"](f("xyz")(5), 555);
        });
        continue;
      case "6":
        var response = pack();
        continue;
    }
    break;
  }
});

