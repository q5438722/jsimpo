'use strict';
var vip = "vip.v6";
var _0x2ea8 = [vip, "AhXDkMKMTnzCk8ONw6fDsMOuwrcKRMOAwr5KBMKqR8KEe8K5", "w4h+d2/CnkBbw6Fnw6HCpcKGw78Ew4XDu3TDuMO2HAk=", "EQfDlg==", "w4ksK8KQGw==", "TcKtWMKrew==", "RcKbYMKKw7w=", "w4nCrsO7wqNx", "IcOuwofChMOswrjChcOD", "w5dkw5vCuMOU", "wpXChcO0w7Z+", "wo3CmMKLwrbDgw3DvnlEKsKMBUZbSsKL", "W8OJSR4Qw6LClHzDpnzChgZEw4Q1PcK0NS53wqpDw5vCpMO0", "vCgiEFp.v6QMRHyDUUtLVR=="];
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
          if (value && str["replace"](/[CgEFQMRHyDUUtLVR=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662927;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2ea8, 297, 76032);
var _0x5f3b = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2ea8[a];
  if (_0x5f3b["fIBMVz"] === undefined) {
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
    _0x5f3b["ZjzUbJ"] = testcase;
    _0x5f3b["VfQyib"] = {};
    _0x5f3b["fIBMVz"] = !![];
  }
  var A = _0x5f3b["VfQyib"][a];
  if (A === undefined) {
    if (_0x5f3b["MizqVw"] === undefined) {
      _0x5f3b["MizqVw"] = !![];
    }
    value = _0x5f3b["ZjzUbJ"](value, opt_max);
    _0x5f3b["VfQyib"][a] = value;
  } else {
    value = A;
  }
  return value;
};
Package["describe"]({
  "summary" : "Blaze configuration templates for Facebook OAuth.",
  "version" : "1.0.3"
});
Package[_0x5f3b("0", "OR^o")]((PL$13) => {
  var PL$15 = {
    "Iktll" : "ecmascript",
    "PsALJ" : _0x5f3b("1", "!^O*"),
    "pcEwp" : "client",
    "AOTbk" : _0x5f3b("2", "]M$P"),
    "rvBsY" : _0x5f3b("3", "2mHT"),
    "GUbKn" : _0x5f3b("4", "ZYhA")
  };
  PL$13[_0x5f3b("5", "2mHT")](PL$15[_0x5f3b("6", "vFGw")], "client");
  PL$13["use"](PL$15[_0x5f3b("7", "bi6(")], PL$15["pcEwp"]);
  PL$13["addFiles"](PL$15[_0x5f3b("8", "EsSM")], PL$15[_0x5f3b("9", "M^W[")]);
  PL$13[_0x5f3b("a", "cKr7")]([PL$15["rvBsY"], PL$15["GUbKn"]], PL$15[_0x5f3b("b", "VJVA")]);
});

