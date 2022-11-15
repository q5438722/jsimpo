'use strict';
var vip = "vip.v6";
var _0x14a8 = [vip, "OcOWEsK3w59jwrt1dQLDoGc=", "wqTDv2wwAsKFw6trdTzCnwfCoSdFwqx3w5rChSTCiCnDmE7CucOOw786UgHCg3xOKA==", "CHdCKArCpgTCiisOw595YsO3dTzCmhtxwr8PNWRbesOCL18=", "w4HCgMKnwpEjw4nCmTUUwrR7w5jDpcOIT8K0AsO2PA4=", "woDDikwJQ8KF", "BmV4wrNM", "woPDl8Knw4pJ", "CEpkAj8=", "UDwrHTs=", "AMKNw7A2aEzDuMOfwoJ3DAAUZ8Kqw67Dmnd6wojDkg==", "b8ONIsOvwr0=", "AX3DsW5S", "w7cYwrpjIg==", "ai/Du8ORw4k=", "ZcKBW8ONIww=", "w6cfwqlcFMKlwr4=", "wqvDj8KLCS4eJxhd", "YjMr", "w6NQwrrCiA==", "aDvCqgo=", "wowFwpJvwqE=", 
"ZX80D8KA", "w4kjw53CjsOS", "Z0HDvnRVwo88GMOWw7s0", "HXJ/wqBdAg==", "dUbDv3hEwo8=", "YjlzwpY=", "vliwBcp.ssvy6nsLDFYkcsA=="];
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
          if (value && str["replace"](/[lwBcssynsLDFYkcsA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662765;
  };
  return fn(++count, long) >> count ^ long;
})(_0x14a8, 349, 89344);
var _0x5825 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x14a8[c];
  if (_0x5825["SNnEis"] === undefined) {
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
    _0x5825["FJGuIa"] = testcase;
    _0x5825["AdXQRf"] = {};
    _0x5825["SNnEis"] = !![];
  }
  var e = _0x5825["AdXQRf"][c];
  if (e === undefined) {
    if (_0x5825["JbFFdH"] === undefined) {
      _0x5825["JbFFdH"] = !![];
    }
    x = _0x5825["FJGuIa"](x, alpha);
    _0x5825["AdXQRf"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const {
  mustCall : mustCall
} = require("../common");
const assert = require(_0x5825("0", "CV&p"));
const http = require(_0x5825("1", "n(T@"));
const net = require("net");
net[_0x5825("2", "gk3H")](mustCall(function(elem) {
  var data = {
    "HCcKB" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "TOGDF" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "UjtPF" : _0x5825("3", "pc20"),
    "lpUbV" : _0x5825("4", "PvX1"),
    "PaeNP" : _0x5825("5", "zwni"),
    "ewtMW" : _0x5825("6", "pc20")
  };
  elem[_0x5825("7", "WhvJ")](data[_0x5825("8", "C#bj")](data["TOGDF"](data[_0x5825("9", "PvX1")](data[_0x5825("a", "Q0Qx")], _0x5825("b", "xP$Q")) + data[_0x5825("c", "ALOk")], data[_0x5825("d", "BP][")]), "\r\n") + "\u0080", data[_0x5825("e", "sY0i")]);
  this[_0x5825("f", "KPWz")]();
}))[_0x5825("10", "KzH]")](0, mustCall(function() {
  var _0x22ba6c = {
    "FPJvJ" : _0x5825("11", "sY0i"),
    "dCUsK" : _0x5825("12", "#aVk"),
    "GvqKA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  http[_0x5825("13", "Q0Qx")]({
    "host" : this["address"]()[_0x5825("14", "lf1z")],
    "port" : this["address"]()[_0x5825("15", "mais")],
    "headers" : {
      "Connection" : _0x22ba6c[_0x5825("16", "kQuT")],
      "Upgrade" : _0x22ba6c[_0x5825("17", "ufnu")]
    }
  })["on"](_0x22ba6c[_0x5825("18", "UfU@")], _0x22ba6c["GvqKA"](mustCall, (isSlidingUp, PL$22, canCreateDiscussions) => {
    assert[_0x5825("19", "CV&p")](canCreateDiscussions[_0x5825("1a", "WhvJ")], 1);
    assert["strictEqual"](canCreateDiscussions[0], 128);
    PL$22["destroy"]();
  }));
}));

