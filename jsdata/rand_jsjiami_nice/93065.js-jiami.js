'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w6XCoW9xcw==", "eGcdwoHCtcO/w5BOw4XCusKKwqkFecO6wohmeMOVwrPCvl1DwobCh8OGw7nCu8KMNMOUw53CtsKVY8Omw6/DvMOiaHomNGTCrQUnMnnCgsOPN8KxwopwwogMaUsHJnHDkH4=", "wp3CtMO6w6XCo8KDZcKdHBjDrgXDuMKjBmPCsjvDtUY4woRKw7HCuAfDucO8wpZZU8OOdVrChwErMcO8woPDlsOIw7TCoBQjw7nDqTYgKMKgw75ow5LCssOZw5fChcK1w6nCmR0IKsOCwozCgw==", "w5YTw4sNwofDg8KvG8O/Y8K7wq4gT8Ojw7LCnwjDn8O7w43Dm8O6CHZ7LsObLcOcwrDDpA7CiHzCoA7Cp8KEwrdHG8Kuwox6DHnClFZFw6Z7wpHDl8ONIMOaw7l2wpvCssOAw60Aw6FEJF0=", "aMKkw4RsMMOXwq7Dp8K5IS/DkCJZwr7Drg7DqRx5wonCrkMSw6LDgsOswp0pGVDCk8ODwqLCiMKBU0BjPsOiw7dgW8OdwqVCE8KID8OXNcKNEVTDonJ9", 
"DSBlwrRfwowXQcOaUD1iPMOzwqhnfE05w7cbMEfDvAQ=", "c2/CmsKwUDfDkWYGwqfCs3bDucKWwo7CjMKLEFJjwrw0wplHw4Y=", "byAiPhM=", "wqFMJiAO", "HsKEUsKsHg==", "GsOYwpbCvAk=", "IVZSZBjCjXzDp8K+aRQ=", "XMKcVsOuHEMH", "wrvCvFA1woDCgQ==", "wo7Cq8O0w5HCsg==", "ZH/DtCDDt8Kc", "cmPCiA==", "a8K6czXCvw==", "c2LCksKoWT3ChVYbw6LCpQ==", "dGjCsMK0STLCnQ==", "YRDDgnYt", "fjQ8Hw/CjCE4Tm3DpA==", "wpkyJTU=", "w5Ivw4Iowq4=", "wq5UKCbDmw==", "fjk0BwbChnUOSWHDrcOAOkjDlMOJM3E/ODFeAUllHyHCtMOKSsKqw7kEwr3CucKywpPDvsKFw5ZWw7zCu8O3EsK9wq/CphNXd8OBV8KpME4qw4dUaMOva2EW", 
"w4zCn0Q=", "w54Zwp88Sw==", "aMKpw4x0OcOdw7rDl8KkZCc=", "ScKlYzPCrcOLw4o=", "eGoVwpnCvMO1woR4w4LCtsKD", "wqYEwpzCihjCgA==", "wqPCtnw3", "Sz4fATo=", "wpnCvFYKwoQ=", "F8OfwrzCjjw=", "w4JuWMKXw68=", "w6I1wrUTfw==", "X8OSY8KKw5fDtsKfNcKGHMKW", "wonCscOTw4l6dg==", "wpzCsynDuw==", "wrgGTg==", "AMO9wq1TLA==", "W8KWdMOyDEwfwpjCqsOcw5o=", "wqPCtnsjwoHCiMOQ", "D1zCh8Omw48=", "w5Zpwo1iCMKpwrNcw7NFw64=", "d8Kpw4V+KMOb", "aMOmWHY=", "JMK8wrnCnMOq", "wqvCpCjDn8K+", "eUbCvsKsZA==", "wqcIwpw=", "w7AWwogQwpjCm3E9OQk3", 
"wpXCocOUeMOQwpHDjQ==", "JsO3wppHHms7wrF5w4d9", "bGLCm8KiSDs=", "w7oyw7Vx", "TnXDnjTDkw==", "R8KLwqPDpWg=", "w4UcwqsOwq0=", "wofClsOgRMOG", "R33CrMOew4k=", "NMKawpTCqMOS", "wqcAwoo=", "c2/CiMOYw5fCjg==", "wohqACkH", "wrrCsFA=", "e3DDgCTDsg==", "TMO6wpLClUPCrsOsdz3DgkM=", "wp3CucOyw73CqsKJMcKrGxTDpw==", "VAkxGifDhg==", "Qw/DlWQ=", "bEkowpnCvQ==", "A3TCkcOqw7s=", "wo5ufjwCG1jCl8KCAgU=", "IcO9wrhbDmQj", "UsKOTTPCjQ==", "w4HDuMO3w5bDlcKJ", "eT4ZFw==", "wpg5AQDCiQ==", "b8KPL8O3CQ==", "wrkKTsOqZ8Kz", "wpjDscKHGcKv", 
"ZsKsKcOXI0jDnno1BzbDvEkXFAckw7VuwqLDoRhwPl3DtsODSTTClhHCpGPClsKawqNHMFQKw6zCnMO7w7/Dvl3DkcKxEUx+wqXDksKQ", "Nnwmw6LCmg==", "wpPCr8O/bsOAwqHDlMOzw6TCgQ==", "w4pIwoF+OA==", "w5caw4ofwo7DtsO6HMO4cw==", "wpReAhs=", "GF7CvcOUw5k=", "egE1NhI=", "w5suwrQRfgUHV8OWw4A=", "DT0LZcOtwqzCksOIPkI=", "w4XDhcOOw7nDjA==", "Y8OTAcOlw4o=", "w5bCtUVHQQ==", "YDg1", "PgnClGQ2", "wr3Dk8KuMcKrw6VuwrbDvTc=", "fHXDmCI=", "H8Ovwr3CkTxyw75Ewrct", "w77DjMOXw7XDhQ==", "wrzCq8Oyw4c=", "V8KlThjCvw==", "LVcPw7Y=", "envDtCDDpsKlaF/CqMOd", 
"NiHDl8KlZcOUMT1UHw==", "a8OJNsOlw7w=", "wprCvQXDucKsZRkBwpfDhg==", "wolkWzQ=", "wpJQLhnDjsOHf8KLX1g=", "ER4jT8Od", "wp88CTfCulrCkcKGWEM=", "woDChDzDlsKk", "ZMKqKcOQCw==", "UMKrXg==", "wqLCq8OYw7jChQ==", "wqXCuFA1wpHCuMOJwqHCsEc=", "wpHCu8O/w4s=", "w5Fjwqhq", "TcO+wpvCn0PCkcOtRj3Dng==", "wrzCr8OKw4bCpw==", "KsKUb8KDITIgwq3Dk3U=", "CidIwqQ=", "S8O0wo/CnGM=", "WMOYRsKC", "WQcrGjg=", "w48Fwqcbwp4=", "wpdeCy7Drg==", "AsOGEMKgwqEncMOxE8O7", "wpXCocOTbA==", "ZSvDuk8C", "OHsaw4DCig==", "w48WwpUbwps=", "Jlx3bA==", 
"GcOhwpHCkw==", "WsKSfcO4DHMewqnCqsOA", "wqbCvcORw6bCpQ==", "OyTCuX0P", "wrUqLTHCtQ==", "lviCpTNIh.v6ehHFgKW=="];
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
          if (type && str["replace"](/[lCTNIhehHFgKW=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662390;
  };
  return fn(++count, size) >> count ^ size;
})(match, 279, 71424);
var g = function(c, n) {
  c = ~~"0x"["concat"](c);
  var v = match[c];
  if (g["NaeasE"] === undefined) {
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
    g["sGLZXf"] = testcase;
    g["BJwWnq"] = {};
    g["NaeasE"] = !![];
  }
  var prevValue = g["BJwWnq"][c];
  if (prevValue === undefined) {
    if (g["LoWhqW"] === undefined) {
      g["LoWhqW"] = !![];
    }
    v = g["sGLZXf"](v, n);
    g["BJwWnq"][c] = v;
  } else {
    v = prevValue;
  }
  return v;
};
import _0x593d1d from "../SegmentTree";
describe("SegmentTree", () => {
  var c = {
    "JdKhs" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "FqSHZ" : function(value, joiner) {
      return value !== joiner;
    },
    "CBAOg" : g("0", "&9fO"),
    "wVEJP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "FoDsP" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "sUIua" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "qMKOn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "UoPyW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qsfTh" : function(name, initialValue) {
      return name === initialValue;
    },
    "ktOag" : g("1", "Ag7W"),
    "YdjYT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Kzoed" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BMmJh" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "mCLhP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zKiUF" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "fXqMc" : function(name, initialValue) {
      return name === initialValue;
    },
    "csdAY" : g("2", "4(BZ"),
    "cBmaz" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "YGFuc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "oDkqU" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "udfPV" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "BmjKA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "DGjrm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wCope" : g("3", "C^1X"),
    "SQNDd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "johZg" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tkzdE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TVphR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "woKPE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RKmNH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "aCWSE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Lezff" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "opAxp" : function(require, load, callback) {
      return require(load, callback);
    },
    "bqyLy" : g("4", "Q)CP"),
    "NehXp" : function(require, load, callback) {
      return require(load, callback);
    },
    "zQoxe" : g("5", "y#7V"),
    "CxCAw" : function(require, load, callback) {
      return require(load, callback);
    },
    "yAKiX" : g("6", "rrH8"),
    "hwtNK" : function(require, load, callback) {
      return require(load, callback);
    },
    "tqbdZ" : "should build max array",
    "stGNF" : function(require, load, callback) {
      return require(load, callback);
    },
    "WCGOa" : function(require, load, callback) {
      return require(load, callback);
    },
    "hXWHm" : function(require, load, callback) {
      return require(load, callback);
    },
    "femmk" : g("7", "wML4"),
    "qnorD" : g("8", "h*Um"),
    "LvHfc" : g("9", "@e%H")
  };
  c["opAxp"](it, c[g("a", "Cp46")], () => {
    var PL$133 = {
      "VpUwg" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "wTfPE" : function(row, val) {
        return c[g("b", "BlN1")](row, val);
      }
    };
    if (c[g("c", "rYzD")](c["CBAOg"], "xUTeJ")) {
      const h = [-1, 2];
      const keyNames = new _0x593d1d(h, Math["min"], Infinity);
      c[g("d", "uKDi")](expect, keyNames[g("e", "!IA0")])[g("f", "ChAB")]([-1, -1, 2]);
      expect(keyNames["segmentTree"][g("10", "ZQbd")])["toBe"](c[g("11", "&9fO")](c["sUIua"](2, h[g("12", "TTE#")]), 1));
    } else {
      const PL$185 = [-1, 2, 4, 0];
      const PL$89 = new _0x593d1d(PL$185, Math[g("13", "0L4!")], Infinity);
      PL$133[g("14", "e2#x")](expect, PL$89[g("15", "@e%H")])[g("16", "@e%H")]([-1, -1, 0, -1, 2, 4, 0]);
      PL$133[g("17", "Hj[d")](expect, PL$89[g("18", "Cp46")]["length"])[g("19", "4(BZ")](PL$133[g("1a", "rrH8")](2, PL$185["length"]) - 1);
    }
  });
  c[g("1b", "7x*^")](it, g("1c", "Cp46"), () => {
    const b = [-1, 2, 4, 0];
    const h = new _0x593d1d(b, Math[g("1d", "C^1X")], Infinity);
    c[g("1e", "sPwO")](expect, h[g("1f", "wML4")])[g("20", "e2#x")]([-1, -1, 0, -1, 2, 4, 0]);
    c["qMKOn"](expect, h[g("21", "Q)CP")][g("22", "g703")])[g("23", "ZQbd")](c[g("24", "Cp46")](c["sUIua"](2, b["length"]), 1));
  });
  c[g("25", "ZQbd")](it, c[g("26", "uKDi")], () => {
    if (c["qsfTh"](g("27", "legx"), c["ktOag"])) {
      const _0x2e9a08 = [0, 1, 2];
      const h = new _0x593d1d(_0x2e9a08, Math["min"], Infinity);
      c["YdjYT"](expect, h["segmentTree"])["toEqual"]([0, 0, 2, 0, 1, null, null]);
      c[g("28", "sPwO")](expect, h[g("29", "ELab")][g("2a", "9d)E")])[g("2b", "ENYK")](c["BMmJh"](2, 4) - 1);
    } else {
      const _0x234461 = [-1, 3, 4, 0, 2, 1];
      const h = new _0x593d1d(_0x234461, Math[g("2c", "FKU2")], Infinity);
      c[g("2d", "1$Ba")](expect, h[g("2e", "ChAB")])[g("2f", "ZQbd")]([-1, -1, 0, -1, 4, 0, 1, -1, 3, null, null, 0, 2, null, null]);
      c[g("30", "SYmE")](expect, h[g("31", "W*XH")][g("32", "wML4")])[g("33", "IOBL")](c[g("34", "8KkS")](2, 8) - 1);
    }
  });
  c[g("35", "ENYK")](it, c[g("36", "@e%H")], () => {
    const _0xa18a2b = [-1, 3, 4, 0, 2, 1];
    const h = new _0x593d1d(_0xa18a2b, Math[g("37", "g703")], Infinity);
    c["mCLhP"](expect, h[g("38", "T^gc")])[g("39", "L1zf")]([-1, -1, 0, -1, 4, 0, 1, -1, 3, null, null, 0, 2, null, null]);
    c["mCLhP"](expect, h[g("3a", "1$Ba")][g("3b", "@e%H")])[g("3c", "fT)S")](c[g("3d", "TTE#")](c["zKiUF"](2, 8), 1));
  });
  c["hwtNK"](it, c[g("3e", "nUSU")], () => {
    var zlib = {
      "sjZcq" : function(row, val) {
        return c["mCLhP"](row, val);
      },
      "ncYeo" : function(row, val) {
        return c[g("3f", "T^gc")](row, val);
      },
      "gFZmd" : function(row, val) {
        return c["zKiUF"](row, val);
      }
    };
    if (c[g("40", "L1zf")](g("41", "0L4!"), c[g("42", "8KkS")])) {
      const shapePathsCollection = [-1, 2, 4, 0];
      const parentStderr = new _0x593d1d(shapePathsCollection, Math[g("43", "g703")], -Infinity);
      expect(parentStderr["segmentTree"])[g("39", "L1zf")]([4, 2, 4, -1, 2, 4, 0]);
      expect(parentStderr["segmentTree"][g("44", "0L4!")])["toBe"](c[g("45", "BlN1")](2 * shapePathsCollection["length"], 1));
    } else {
      const _0x1f2034 = [0, 1, 2];
      const c = new _0x593d1d(_0x1f2034, Math[g("46", "ZQbd")], Infinity);
      zlib[g("47", "TTE#")](expect, c[g("48", "5I26")])["toEqual"]([0, 0, 2, 0, 1, null, null]);
      expect(c[g("49", "y#7V")][g("4a", "PO(f")])[g("4b", "Hj[d")](zlib["ncYeo"](zlib[g("4c", "Q)CP")](2, 4), 1));
    }
  });
  c["stGNF"](it, "should build sum array", () => {
    const h = [-1, 2, 4, 0];
    const b = new _0x593d1d(h, (buckets, name) => {
      return buckets + name;
    }, 0);
    c[g("4d", "SYmE")](expect, b[g("4e", "]ibM")])[g("4f", "1$Ba")]([5, 1, 4, -1, 2, 4, 0]);
    c[g("50", "e2#x")](expect, b[g("15", "@e%H")][g("51", "h[vZ")])[g("52", "Cp46")](c[g("53", "4(BZ")](c[g("54", "ImXm")](2, h[g("55", "FKU2")]), 1));
  });
  c[g("56", "GVKX")](it, g("57", "ImXm"), () => {
    const _0x479188 = [-1, 3, 4, 0, 2, 1];
    const h = new _0x593d1d(_0x479188, Math["min"], Infinity);
    c[g("58", "gBSa")](expect, h[g("59", "L1zf")](0, 5))["toBe"](-1);
    c[g("5a", "W*XH")](expect, h[g("5b", "rrH8")](0, 2))[g("5c", "7x*^")](-1);
    c[g("5d", "SYmE")](expect, h["rangeQuery"](1, 3))["toBe"](0);
    c[g("5e", "PO(f")](expect, h[g("5f", "sPwO")](2, 4))[g("52", "Cp46")](0);
    expect(h["rangeQuery"](4, 5))["toBe"](1);
    expect(h[g("60", "Yl7b")](2, 2))[g("23", "ZQbd")](4);
  });
  c[g("61", "h[vZ")](it, c["femmk"], () => {
    var zlib = {
      "nBFMU" : function(row, val) {
        return c["DGjrm"](row, val);
      }
    };
    if (c[g("62", "Q1pl")](c[g("63", "C^1X")], "DWEFW")) {
      const _0x2cfcc9 = [-1, 2, 4, 0];
      const h = new _0x593d1d(_0x2cfcc9, Math[g("64", "Cp46")], Infinity);
      c[g("65", "Ag7W")](expect, h[g("66", "GVKX")](0, 4))[g("67", "TTE#")](-1);
      expect(h[g("68", "uKDi")](0, 1))["toBe"](-1);
      c[g("69", "h[vZ")](expect, h[g("60", "Yl7b")](1, 3))[g("6a", "&9fO")](0);
      c[g("6b", "e2#x")](expect, h["rangeQuery"](1, 2))[g("6c", "gBSa")](2);
      expect(h[g("6d", "TTE#")](2, 3))[g("67", "TTE#")](0);
      expect(h[g("5f", "sPwO")](2, 2))["toBe"](4);
    } else {
      const _0x4fe369 = [-1, 3, 4, 0, 2, 1];
      const c = new _0x593d1d(_0x4fe369, Math[g("2c", "FKU2")], Infinity);
      expect(c[g("6e", "J7k[")](0, 5))[g("3c", "fT)S")](-1);
      zlib[g("6f", "Q1pl")](expect, c[g("66", "GVKX")](0, 2))["toBe"](-1);
      expect(c[g("5f", "sPwO")](1, 3))["toBe"](0);
      zlib["nBFMU"](expect, c[g("70", "ENYK")](2, 4))[g("71", "]ibM")](0);
      expect(c[g("72", "7x*^")](4, 5))["toBe"](1);
      zlib[g("73", "Yl7b")](expect, c[g("74", "4(BZ")](2, 2))[g("6a", "&9fO")](4);
    }
  });
  c[g("75", "ENYK")](it, c[g("76", "ImXm")], () => {
    const _0x46b3ad = [-1, 3, 4, 0, 2, 1];
    const h = new _0x593d1d(_0x46b3ad, Math[g("77", "e2#x")], -Infinity);
    c[g("78", "&9fO")](expect, h[g("79", "ZQbd")](0, 5))[g("7a", "9d)E")](4);
    expect(h["rangeQuery"](0, 1))[g("7b", "W*XH")](3);
    expect(h[g("7c", "5I26")](1, 3))["toBe"](4);
    c[g("7d", "&9fO")](expect, h[g("7e", "rYzD")](2, 4))[g("7f", "h*Um")](4);
    c[g("80", "5I26")](expect, h["rangeQuery"](4, 5))[g("81", "ELab")](2);
    c[g("82", "Cp46")](expect, h[g("7c", "5I26")](3, 3))[g("6a", "&9fO")](0);
  });
  it(c[g("83", "T^gc")], () => {
    const _0x22ccc1 = [-1, 3, 4, 0, 2, 1];
    const h = new _0x593d1d(_0x22ccc1, (buckets, name) => {
      return buckets + name;
    }, 0);
    c[g("84", "7x*^")](expect, h[g("85", "JJs(")](0, 5))[g("86", "L1zf")](9);
    c[g("87", "Hj[d")](expect, h["rangeQuery"](0, 1))["toBe"](2);
    c[g("88", "gBSa")](expect, h["rangeQuery"](1, 3))["toBe"](7);
    c[g("89", "T^gc")](expect, h["rangeQuery"](2, 4))[g("8a", "!IA0")](6);
    c["Lezff"](expect, h["rangeQuery"](4, 5))[g("8b", "uKDi")](3);
    expect(h[g("8c", "ChAB")](3, 3))[g("81", "ELab")](0);
  });
});

