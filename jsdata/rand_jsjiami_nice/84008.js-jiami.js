'use strict';
var vip = "vip.v6";
var _0x21fe = [vip, "w4wKw4XCgcOT", "XMKIw5B9RQ==", "GsKrw4U1FQ==", "QsKrw60gwrg=", "FhfDqkR1eXHDu8OqElDDosO0w5Y=", "J8KxZXMc", "w4zDjcK0LGU=", "wociwoldw7s=", "dsKCO8Knwr0=", "w7LDrcKmwrRn", "DMKVw43CsEfCuhI5QgIgNDM7", "wqPDrTnDpcKD", "wqPCrsKvw4cmw7d2", "wqXCl8KGeSc=", "IcKFw4YLLUvCtsK5JDjDp8KWw7sK", "wo8yw51XWg==", "wr3CvMO3wrHDgW4Z", "w4/DnMKxOVE=", "wrFwwqh0Yy3DuA==", "SB8aTC0=", "woc/wopdw6g=", "w4HDjDvDoMKHw6HDlcKGwqwJKUvCh8Ox", "VMKNw583wp0=", "PcKLw7A1L0TCig==", "w6sHw7/DqcK0", "I8KLw6tFMMKhEgEYSA9FB3I=", 
"wrRFFxYb", "YyAKfMKiwrfDuw==", "UcKPDsK6wpw=", "S8KOBwjDtsOwJ8ONAyXCh8OSPMOC", "wozDkCHDjMKY", "KcKxQlAB", "DMKpw5QCDA==", "wp3CscK3w7VyTcOhw4BEGmwlDMKK", "A8O2w5TDtsOZ", "ChnDnHp3dk0=", "N8OZw6zDksON", "wpLDkA3Cpn8=", "CADCtsOR", "ZcOaw5MDacK1w7o=", "wr9qwqNnUw==", "W8KfHcK9wqM=", "bcK5IRHDoA==", "C8K1w4wxHQ==", "woJaCgkc", "bcKHL8KrwqM=", "wqXDqMK3fcKq", "E8Kfw75vJg==", "A3bDszHCpQ==", "DhfCtMOdwo7Co8OZwoc=", "esK/w5R0VQgBw4/ClkdBwoDChMO6", "Ji8Wew/Dj8K8", "ETY/cC4=", "w6gSAmIxGg==", "w47DgcKvJA==", 
"wrbDljzDvA==", "YcKnw4pXSwg6", "YC47bsK/", "OsKWw5Y=", "wr0xw7XDgQ==", "P8KYw71v", "fcKFw64lwqXCgMOQ", "w5vDkcKkPXtMFgo=", "NhfDshPCuw==", "wrnCkkNkw48PO2wTXy9sw7sS", "Q8KFw6kawrk=", "W8KBBcKbYMOpwoc=", "WMKVw5V+Yw==", "wrXDqAHChkM=", "woHClMKCw55V", "w58LBkwc", "woLDgMK5cMKA", "wrHCtMKMUsO+", "L0fDkzDClA==", "C8Ogw7PDkMOS", "vNXidp.v6ZUHGBaHWIItcJq=="];
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
          if (value && str["replace"](/[NXdZUHGBaHWIItcJq=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662300;
  };
  return fn(++count, long) >> count ^ long;
})(_0x21fe, 128, 32768);
var _0xd3ac = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x21fe[c];
  if (_0xd3ac["XOlZMc"] === undefined) {
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
    _0xd3ac["NPujfJ"] = testcase;
    _0xd3ac["levcnE"] = {};
    _0xd3ac["XOlZMc"] = !![];
  }
  var e = _0xd3ac["levcnE"][c];
  if (e === undefined) {
    if (_0xd3ac["aSbgYQ"] === undefined) {
      _0xd3ac["aSbgYQ"] = !![];
    }
    x = _0xd3ac["NPujfJ"](x, alpha);
    _0xd3ac["levcnE"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
var expect = require(_0xd3ac("0", "V]VX"));
var gulp = require("../");
describe(_0xd3ac("1", "r7fw"), function() {
  var c = {
    "JKrEA" : function(value, joiner) {
      return value !== joiner;
    },
    "knSkY" : "AyJXq",
    "eywxm" : _0xd3ac("2", "9hpE"),
    "fhrmY" : _0xd3ac("3", "uX#B"),
    "CfpEy" : function(saveNotifs) {
      return saveNotifs();
    },
    "JVqER" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EiBfj" : _0xd3ac("4", "Ett]"),
    "Lcfvx" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gmyaq" : "series",
    "xHfbY" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "QDNnG" : "parallel",
    "ekvJS" : function(saveNotifs) {
      return saveNotifs();
    },
    "RatKN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bumfj" : "kNCPN",
    "AVNFd" : _0xd3ac("5", "cZM3"),
    "tDFdP" : function(saveNotifs) {
      return saveNotifs();
    },
    "RRWCq" : _0xd3ac("6", "Qh7%"),
    "YRiHL" : function(require, load, callback) {
      return require(load, callback);
    },
    "wTbkd" : function(require, load, callback) {
      return require(load, callback);
    },
    "pZKcq" : function(require, load, callback) {
      return require(load, callback);
    },
    "EMaFV" : function(require, load, callback) {
      return require(load, callback);
    },
    "WJHyu" : _0xd3ac("7", "Ib!C"),
    "CiIFp" : function(require, load, callback) {
      return require(load, callback);
    },
    "FsuqG" : _0xd3ac("8", "$Z)P"),
    "uHtFl" : _0xd3ac("9", "r7fw")
  };
  c[_0xd3ac("a", "**9j")](describe, _0xd3ac("b", "n6zv"), function() {
    var zlib = {
      "rYzIW" : function(row, val) {
        return c[_0xd3ac("c", "$Z)P")](row, val);
      },
      "qPKSb" : _0xd3ac("d", "mJZ^"),
      "mlTwS" : function(saveNotifs) {
        return saveNotifs();
      },
      "NVwFg" : function(row, val) {
        return c[_0xd3ac("e", "uX#B")](row, val);
      },
      "SOpqO" : c[_0xd3ac("f", "WmTH")],
      "tjzKW" : c["AVNFd"],
      "MfWfd" : function(aBody) {
        return c[_0xd3ac("10", "Y$Op")](aBody);
      },
      "lCNcf" : function(row, val) {
        return c[_0xd3ac("11", "V]VX")](row, val);
      },
      "HPaHj" : c[_0xd3ac("12", "jZoa")],
      "uvTYw" : c[_0xd3ac("13", "0Qpe")],
      "NVUVa" : function(row, val) {
        return c["RatKN"](row, val);
      },
      "zuNbE" : function(aBody) {
        return c[_0xd3ac("14", "qhLQ")](aBody);
      },
      "BQyuG" : function(saveNotifs) {
        return saveNotifs();
      },
      "pkGgG" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "cvShD" : function(row, val) {
        return c["RatKN"](row, val);
      }
    };
    c[_0xd3ac("15", "mS!b")](it, c[_0xd3ac("16", "Wbot")], function(result) {
      if (zlib[_0xd3ac("17", "uX#B")](zlib[_0xd3ac("18", "cZM3")], zlib[_0xd3ac("19", "$Z)P")])) {
        zlib["rYzIW"](expect, gulp["hasOwnProperty"](zlib["qPKSb"]))["toEqual"](!![]);
        zlib["mlTwS"](result);
      } else {
        expect(gulp[_0xd3ac("1a", "IsvT")](zlib["tjzKW"]))["toEqual"](!![]);
        zlib[_0xd3ac("1b", "7c^o")](result);
      }
    });
    it(c[_0xd3ac("1c", "r7fw")], function(body) {
      if (c[_0xd3ac("1d", "VtNx")](c[_0xd3ac("1e", "G*uO")], c["knSkY"])) {
        zlib[_0xd3ac("1f", "l9ar")](expect, gulp[_0xd3ac("20", "Seud")](zlib[_0xd3ac("21", "SlWF")]))[_0xd3ac("22", "u4RV")](!![]);
        zlib[_0xd3ac("23", "j[c4")](body);
      } else {
        expect(gulp[_0xd3ac("24", "cZM3")](c[_0xd3ac("25", "1h99")]))[_0xd3ac("26", "foLP")](!![]);
        body();
      }
    });
    c["wTbkd"](it, c[_0xd3ac("27", "r7fw")], function(aBody) {
      expect(gulp["hasOwnProperty"](c["fhrmY"]))[_0xd3ac("28", "5q)o")](!![]);
      c[_0xd3ac("29", "Z*G@")](aBody);
    });
    it(c["EiBfj"], function(aBody) {
      c[_0xd3ac("2a", "VtNx")](expect, gulp[_0xd3ac("2b", "K@s^")](c[_0xd3ac("2c", "$Z)P")]))[_0xd3ac("2d", "cZM3")](!![]);
      c["CfpEy"](aBody);
    });
    c["wTbkd"](it, c[_0xd3ac("2e", "M4zn")], function(result) {
      expect(gulp[_0xd3ac("2f", "Ib!C")](zlib[_0xd3ac("30", "G(NG")]))[_0xd3ac("31", "Ett]")](!![]);
      zlib["MfWfd"](result);
    });
    c["pZKcq"](it, c["gmyaq"], function(aBody) {
      c[_0xd3ac("32", "G*uO")](expect, gulp[_0xd3ac("33", "l3z4")](c[_0xd3ac("34", "SlWF")]))[_0xd3ac("22", "u4RV")](!![]);
      c[_0xd3ac("35", "7c^o")](aBody);
    });
    c[_0xd3ac("36", "cZM3")](it, c["QDNnG"], function(aBody) {
      c["xHfbY"](expect, gulp[_0xd3ac("37", "Y$Op")](c[_0xd3ac("38", "mS!b")]))[_0xd3ac("39", "IsvT")](!![]);
      c[_0xd3ac("3a", "mS!b")](aBody);
    });
    c[_0xd3ac("3b", "WmTH")](it, c["WJHyu"], function(result) {
      zlib["NVUVa"](expect, gulp["hasOwnProperty"](_0xd3ac("3c", "eKyN")))[_0xd3ac("3d", "UJt(")](!![]);
      zlib[_0xd3ac("3e", "5q)o")](result);
    });
    c["CiIFp"](it, c[_0xd3ac("3f", "G*uO")], function(result) {
      zlib[_0xd3ac("40", "l3z4")](expect, gulp["hasOwnProperty"](zlib["qPKSb"]))["toEqual"](!![]);
      zlib[_0xd3ac("41", "cZM3")](result);
    });
    c[_0xd3ac("42", "G(NG")](it, c["uHtFl"], function(body) {
      var zlib = {
        "favmY" : function(body, done) {
          return zlib[_0xd3ac("43", "G*uO")](body, done);
        },
        "CvlzT" : function(result) {
          return zlib[_0xd3ac("44", "jZoa")](result);
        }
      };
      if (_0xd3ac("45", "Ib!C") === _0xd3ac("46", "qhLQ")) {
        zlib["cvShD"](expect, gulp["hasOwnProperty"](_0xd3ac("47", "eKyN")))["toEqual"](!![]);
        body();
      } else {
        zlib["favmY"](expect, gulp[_0xd3ac("48", "uX#B")]("registry"))[_0xd3ac("49", "Gv^l")](!![]);
        zlib[_0xd3ac("4a", "Gv^l")](body);
      }
    });
  });
});

