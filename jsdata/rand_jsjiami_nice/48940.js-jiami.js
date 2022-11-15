'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wpvCusOYCsKs", "UsOcfQ==", "w4omdcOzRjTDvzU=", "E8KiwqLDvXQ=", "w5JSw5F+w758ZMK7w69Iw50dw7JjwrMPwovDqQpvworCqMKgw4LCvE5gLsKKJmRTY0w=", "KWPCjMOTwrDDi1jCvcO9Wg==", "wppSw64=", "J8K/wqTDll4aBMOLFcKZUmDCkcK3wqhPVcK0W0NBwqk=", "dMOVwqcew6g=", "viMDtpcPZh.v6EfPEAUnkfnt=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[MDtcPZhEfPEAUnkfnt=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662018;
  };
  return fn(++count, size) >> count ^ size;
})(match, 391, 100096);
var fn = function(name, args) {
  name = ~~"0x"["concat"](name);
  var value = match[name];
  if (fn["QUJnNA"] === undefined) {
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
    fn["znAFHs"] = testcase;
    fn["TZOInx"] = {};
    fn["QUJnNA"] = !![];
  }
  var functionEntry = fn["TZOInx"][name];
  if (functionEntry === undefined) {
    if (fn["eUjOaF"] === undefined) {
      fn["eUjOaF"] = !![];
    }
    value = fn["znAFHs"](value, args);
    fn["TZOInx"][name] = value;
  } else {
    value = functionEntry;
  }
  return value;
};
import{
  withIronSession as withIronSession
}from "next-iron-session";
export default function scan(searchPaths) {
  var _require_search2 = {
    "nTGFA" : function(require, load, callback) {
      return require(load, callback);
    },
    "MQibz" : fn("0", "zVEQ"),
    "DmZOM" : function(name, initialValue) {
      return name === initialValue;
    },
    "gXEyo" : fn("1", "O6M6")
  };
  return _require_search2["nTGFA"](withIronSession, searchPaths, {
    "password" : process[fn("2", "JqvJ")][fn("3", "p[sn")],
    "cookieName" : _require_search2[fn("4", "jU5%")],
    "cookieOptions" : {
      "secure" : _require_search2[fn("5", "[Nm7")](process[fn("6", "Hfu4")][fn("7", "C[eS")], _require_search2[fn("8", "p[sn")]) ? !![] : ![]
    }
  });
}
;
