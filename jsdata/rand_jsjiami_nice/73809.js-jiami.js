'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w6QYQcOyKCtWwofDpjZVNsK6w7DDrsKTBwDDhVLDjzbCl8Ozw7YTbBlxw77DjF4ROTXDnxfDhMKcw41mMnnCmDLDusKG", "RhR3TsKTDmzCiMKeBmpKTcOIwpVAw47Dn3/CtsODw6bCqmXDnGVIbcOGdcODC8Ouw5PDocOCwr0xwqrCvQ==", "RhR3TsKTDmzCjcKUAHQYVMKBwoAIwpnDjUHDqMODw7HCoTXDj3ZQYcODdcOHC8Okw4/CtcOJwrQ+wqfCoFLCt1A=", "wrk3wrxXwp8=", "K2vDn8KIIg==", "GsOPw6jCk0I=", "Rm7Co8OOSg==", "a0fDhAZF", "fiFzw6PCng==", "dSLDvkfDqA==", "woR/M1E7JcOxwr/CqsKrw4k4QzFR", "HkwOw5Yu", "bW7Dih4=", "worDjMKFFsKKw4LClMK7w6FgLVLDlsONwow=", 
"MSgvIG0=", "w45EajXDjw==", "wqxfw7zDisON", "AQnDisOewpA=", "wrjCrlnDtHnDu3/DqVvCqMOKwrXDrkrDow==", "wqrCnVjDqGE=", "w4t+ZzrDoQ==", "G8KBwqoVwqk=", "X8Oyw758wq0=", "w4laMxt2", "w6rCpXkHwpI=", "MBXDv8OQwoI=", "w7slRsOzIg==", "w7MCQcO3FiYRwpjDvRNWf8Khw7w=", "w4zCk1k5wo3DkMOowpwwwoTCvcK+w6nCnCI=", "fwRgaMKm", "RhBxWMKa", "cxFpw7XCoQ==", "HVDCnMK0KEsNIMOhwoQdwrDDhEIJwrkvwoIjb8K3csKJSkE2wqB8wrnDuk8OwoV6wpbCnMKXNMOxwoYdV8OldnPDj3PCuiAvEMOpwoc=", "w4AQw73CrsONKsKDUxXCpkdHw53DrmUvC8OMw6HCpxd3w4MZwpJrEsKawpwYwrhqwrvCgcOtUW3Cv8OVDsK4b3Y0", 
"w6XCnsKqEUo0woHDmsOxwqp7wp4NI8KrNcKaw7xWwoVDGAEqw4Rmw6Mpw5VTGcKxwqDCm1HCjEY3wp4=", "LvNibHMp.vmN6aPqXmxAEXS=="];
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
          if (type && str["replace"](/[LNbHMmNaPqXmxAEXS=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662220;
  };
  return fn(++count, size) >> count ^ size;
})(match, 486, 124416);
var g = function(c, n) {
  c = ~~"0x"["concat"](c);
  var v = match[c];
  if (g["cqemmF"] === undefined) {
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
    g["bBaAwH"] = testcase;
    g["CnblEn"] = {};
    g["cqemmF"] = !![];
  }
  var prevValue = g["CnblEn"][c];
  if (prevValue === undefined) {
    if (g["gtazgZ"] === undefined) {
      g["gtazgZ"] = !![];
    }
    v = g["bBaAwH"](v, n);
    g["CnblEn"][c] = v;
  } else {
    v = prevValue;
  }
  return v;
};
import _0x5bfb33 from "assert";
import{
  slice as slice
}from "./utils.js";
import _0x1dc186 from "../dropRightWhile.js";
describe("dropRightWhile", function() {
  var c = {
    "OkXtI" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "vVdlK" : function(require, load, callback) {
      return require(load, callback);
    },
    "JxxSY" : function(require, load, callback) {
      return require(load, callback);
    },
    "CDbHY" : function(type, name) {
      return type === name;
    },
    "lUhtf" : g("0", "e3YJ"),
    "vLcTt" : g("1", "K)qY"),
    "aNsXL" : g("2", "6(q2"),
    "zcrkj" : g("3", "F7$n"),
    "rXWFK" : g("4", "DIP!"),
    "cEKmZ" : g("5", "(K*0"),
    "BSENL" : g("6", "(K*0")
  };
  var val = [1, 2, 3, 4];
  var bBody = [{
    "a" : 0,
    "b" : 0
  }, {
    "a" : 1,
    "b" : 1
  }, {
    "a" : 2,
    "b" : 2
  }];
  it(c[g("7", "F2BV")], function() {
    var c = {
      "iksgN" : function(row, val) {
        return c["OkXtI"](row, val);
      },
      "qDbwG" : function(type, name) {
        return type === name;
      },
      "HiZHE" : function(row, val) {
        return c[g("8", "k5[[")](row, val);
      }
    };
    var valBbox = _0x1dc186(val, function(setValue) {
      var field = {
        "hFlGu" : function(row, val) {
          return c[g("9", "geeG")](row, val);
        }
      };
      if (c[g("a", "Dppq")](g("b", "^E5A"), g("c", "e3YJ"))) {
        return field["hFlGu"](setValue, 2);
      } else {
        return c[g("d", "r&jy")](setValue, 2);
      }
    });
    _0x5bfb33[g("e", "JU0#")](valBbox, [1, 2]);
  });
  it(c["aNsXL"], function() {
    var templateElementIds;
    c[g("f", "pkmK")](_0x1dc186, val, function() {
      templateElementIds = slice[g("10", "^E5A")](arguments);
    });
    _0x5bfb33[g("11", "A1*c")](templateElementIds, [4, 3, val]);
  });
  it(c[g("12", "@3iX")], function() {
    _0x5bfb33["deepStrictEqual"](c[g("13", "[6#S")](_0x1dc186, bBody, {
      "b" : 2
    }), bBody[g("14", "q*Q2")](0, 2));
  });
  c["JxxSY"](it, c[g("15", "d)pv")], function() {
    _0x5bfb33[g("16", "YNS%")](c[g("17", "YNS%")](_0x1dc186, bBody, ["b", 2]), bBody[g("18", "[6#S")](0, 2));
  });
  c[g("19", "g3O2")](it, c[g("1a", "sxp(")], function() {
    _0x5bfb33[g("16", "YNS%")](c["JxxSY"](_0x1dc186, bBody, "b"), bBody[g("1b", "^tkb")](0, 1));
  });
  it(c[g("1c", "DgwE")], function() {
    if (c[g("1d", "d)pv")](c[g("1e", "DIP!")], c["lUhtf"])) {
      var obj = _(val)[g("1f", "DIP!")](function(n) {
        return n > 2;
      });
      _0x5bfb33["ok"](obj instanceof _);
      _0x5bfb33["deepEqual"](obj["value"](), [1, 2]);
    } else {
      _0x5bfb33[g("20", "DgwE")](c[g("21", "(K*0")](_0x1dc186, bBody, ["b", 2]), bBody[g("22", "(K*0")](0, 2));
    }
  });
});

