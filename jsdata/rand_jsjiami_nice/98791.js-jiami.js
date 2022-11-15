'use strict';
var vip = "vip.v6";
var _0xa1b8 = [vip, "wo81wqXCjMO5", "wqDCt1LChMOZ", "ImjCvWrDvA==", "ScOqw4Qfw4w=", "w4xnw4YNVQ==", "wo7Dv2DCpXk=", "w61Nwrdrw7k=", "wr/DmSbCnQ==", "PjEEVcOw", "L8KjPcOqw6w=", "w7jDgsOVVXZfIMKQwoh6w7JrY8KM", "w6dGw6cSSg==", "wrvCt1vCnsOD", "w5hieAHCsQ==", "NG/DlVFY", "w4pBw4EzSQ==", "w6HDq8OWYw0=", "wrkOYBY=", "ccKdwo4SIQ==", "w51SYsOQ", "HMKgL8Ok", "w4nDscOKcgs=", "w7xuVsKm", "wrEoGMOhw44rFE9OFE7Ct8O8w6DCuVJ9wpLCoiLDkgjClcKVwoLDtMKOR13Dpy0bwqrDnQrChDfClSvDjMKNw5TDt8KAMwJZw6k6fMKTwrHDs8KQJA==", "XQgzw4vCrAppw6nCtStXKDNaOsK6f8KbwqvCpnPDvcKXwprDucOcwqzDmUHClMOWFRl6acOuWwPDiQTDiHkzAnNbw67ChsO1GMOrwovDhMKaXU/Dv8Ooe8KLRDzDsBU7QA==", 
"w6BZwos=", "woHCtRvCvyc=", "wq0Kd8O5Og==", "X8KDwpg=", "GsK9NcO1", "FwllPcO8w6/DrktEw5rDjmoePwsoMBw=", "RcOkDXjClg==", "ICYFVMOf", "wq/CsQvCgCvCt8OIw7zCug7CmhTDpwgELQ==", "wop/w40EwpbCkyzCocKJBsKKIcKMwqBXwofCt8KRwpLDqBUxP8OcMsK/e8O2w5XDrQ==", "OsOZd05Ew6zClcO+wroKRyA2QELDoRTDrW5mbR7ClFLDhcOaZcK4w4BLw588HsOBw49UazhKUFkv", "wr/CsQ3CmSPCg8KJw6DCsBTDjnnDqBMJIMOuTMOdw4ggwqZ3PsOpw6N6Yis=", "w6Abw5XCo04=", "Czx7EcOV", "w6x7OMO2w7A=", "wq3CinbCpcO2", "UjbCpHAK", "w7Amw6/CuUM=", "woAtwpvCrcOs", "w4jDvlAowqQ=", 
"wo/DuMKTwqNv", "LlLDqUFZ", "EAcWSMOA", "J8Oqw5hvGzlnJDofbcKzRlUBwrvDnQ==", "w7lnW8K8woU=", "RsKDw4XDkcOw", "WcO/w4gXw5I=", "w6JdFMOlw7s=", "w5N1LMOiw4Y=", "UMK2w5TDn8Oj", "wqLCs3HCn8OD", "wrIawoJPVQ==", "wo3Cll4LfcKywqYzTVrCocOqwqrDt23Di8OVK1rDnsKKw5nCj8KGUUTCrcKUw6g=", "viRp.vq6rQjOCmtPqDKJandt=="];
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
          if (value && str["replace"](/[RqrQjOCmtPqDKJandt=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662432;
  };
  return fn(++count, long) >> count ^ long;
})(_0xa1b8, 312, 79872);
var _0x29e5 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xa1b8[c];
  if (_0x29e5["VlrJfH"] === undefined) {
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
    _0x29e5["SBKGxy"] = testcase;
    _0x29e5["vAdAyO"] = {};
    _0x29e5["VlrJfH"] = !![];
  }
  var e = _0x29e5["vAdAyO"][c];
  if (e === undefined) {
    if (_0x29e5["djtNQM"] === undefined) {
      _0x29e5["djtNQM"] = !![];
    }
    x = _0x29e5["SBKGxy"](x, alpha);
    _0x29e5["vAdAyO"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const {
  expect : expect
} = require(_0x29e5("0", "v*XH"));
const resolveMeta = require(_0x29e5("1", "v*XH"));
const isPropertyResolved = require("../../../../../lib/configuration/variables/is-property-resolved");
describe(_0x29e5("2", "5OS0"), () => {
  var c = {
    "YoxgS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "yxdFS" : _0x29e5("3", "LoDL"),
    "FNAyv" : function(require, load, callback) {
      return require(load, callback);
    },
    "WSQwA" : function(value, joiner) {
      return value !== joiner;
    },
    "lTlIG" : _0x29e5("4", "ol^t"),
    "DAnRW" : _0x29e5("5", "wRSG"),
    "GnkmL" : _0x29e5("6", "2Pu&"),
    "XtEnv" : _0x29e5("7", "VraV"),
    "lRnuh" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Gqgku" : function(require, load, callback) {
      return require(load, callback);
    },
    "WITtX" : "childParent",
    "zBOMg" : _0x29e5("8", "nEH$"),
    "hxSdF" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KseXY" : function(value, joiner) {
      return value !== joiner;
    },
    "nwtGy" : "Wdkck",
    "aUloh" : _0x29e5("9", "@RU8"),
    "PslBC" : function(name, initialValue) {
      return name === initialValue;
    },
    "EWDEf" : _0x29e5("a", "t0nj"),
    "AtOIP" : function(require, load, callback) {
      return require(load, callback);
    },
    "OmfpX" : function(require, load, callback) {
      return require(load, callback);
    },
    "HqywW" : _0x29e5("b", "ol^t"),
    "KYPsB" : _0x29e5("c", "LAQ*"),
    "YPcgb" : "should match if children are behind variables",
    "Oeriq" : function(require, load, callback) {
      return require(load, callback);
    },
    "IwFCC" : _0x29e5("d", "*XvY"),
    "lsihS" : function(require, load, callback) {
      return require(load, callback);
    },
    "UOPgY" : _0x29e5("e", "ol^t")
  };
  let val;
  c["hxSdF"](before, () => {
    if (c[_0x29e5("f", "h]a&")](c[_0x29e5("10", "nEH$")], "MlySh")) {
      c[_0x29e5("11", "*4fv")](expect, isPropertyResolved(val, c["yxdFS"]))["to"]["be"]["true"];
      expect(c[_0x29e5("12", "Q@En")](isPropertyResolved, val, "childParent\x00none"))["to"]["be"]["true"];
    } else {
      val = c["YoxgS"](resolveMeta, {
        "root" : c[_0x29e5("13", "*NUR")],
        "childParent" : {
          "child" : c["DAnRW"],
          "ok" : !![]
        },
        "parent" : c["DAnRW"],
        "rooto" : c[_0x29e5("14", "h]a&")]
      });
    }
  });
  it(c[_0x29e5("15", "V*(r")], () => {
    c[_0x29e5("16", "h(LN")](expect, isPropertyResolved(val, c[_0x29e5("17", "g8QQ")]))["to"]["be"]["false"];
    c[_0x29e5("18", "!bp^")](expect, c[_0x29e5("19", "t0nj")](isPropertyResolved, val, _0x29e5("1a", "jaa*")))["to"]["be"][_0x29e5("1b", "v*XH")];
  });
  it(c[_0x29e5("1c", "5ghO")], () => {
    expect(c[_0x29e5("1d", "k$s[")](isPropertyResolved, val, c[_0x29e5("1e", "*4fv")]))["to"]["be"][_0x29e5("1f", "*4fv")];
  });
  c[_0x29e5("20", "5ghO")](it, c[_0x29e5("21", "Q@En")], () => {
    expect(c["Gqgku"](isPropertyResolved, val, c[_0x29e5("22", "4*8f")]))["to"]["be"]["false"];
  });
  c["lsihS"](it, _0x29e5("23", "m7mL"), () => {
    var res = {
      "PqpOs" : function(row, val) {
        return c["hxSdF"](row, val);
      },
      "GRHwL" : c[_0x29e5("24", "V*(r")],
      "YXzfs" : c["GnkmL"]
    };
    if (c[_0x29e5("25", "Q@En")](c[_0x29e5("26", "7%aX")], _0x29e5("27", "k$s["))) {
      val = res["PqpOs"](resolveMeta, {
        "root" : res[_0x29e5("28", "hA(7")],
        "childParent" : {
          "child" : res["GRHwL"],
          "ok" : !![]
        },
        "parent" : "${a:}",
        "rooto" : res[_0x29e5("29", "9cyQ")]
      });
    } else {
      c[_0x29e5("2a", "LoDL")](expect, isPropertyResolved(val, c["aUloh"]))["to"]["be"][_0x29e5("2b", "Z9jM")];
      c[_0x29e5("2c", "t0nj")](expect, c[_0x29e5("2d", "VraV")](isPropertyResolved, val, _0x29e5("2e", "ZD[M")))["to"]["be"]["true"];
    }
  });
  c[_0x29e5("2f", "hA(7")](it, c["UOPgY"], () => {
    var $el = {
      "QbxWU" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    if (c[_0x29e5("30", "Q@En")](c[_0x29e5("31", "Zb^L")], _0x29e5("32", "!bp^"))) {
      expect(c[_0x29e5("33", "hA(7")](isPropertyResolved, val, c[_0x29e5("34", "RO!L")]))["to"]["be"][_0x29e5("35", "oTvu")];
      expect(c["OmfpX"](isPropertyResolved, val, c[_0x29e5("36", "2Pu&")]))["to"]["be"][_0x29e5("37", "F^[q")];
    } else {
      expect($el["QbxWU"](isPropertyResolved, val, "rooto"))["to"]["be"][_0x29e5("38", "VraV")];
      expect($el[_0x29e5("39", "RO!L")](isPropertyResolved, val, "childParent\x00ok"))["to"]["be"]["true"];
    }
  });
});

