'use strict';
var vip = "vip.v6";
var _0xff6e = [vip, "RktmIiTDjEPCt8Omw681wqDCt8OJwqN5EWE=", "Z3BfADA=", "wqbDpBZgOw==", "bsKjwojCm8K0DXrCmMOGwqzDjsOuB8O8w53Cn0jCqg==", "wqDCmMOKwppSw5dLEsOqeloYw67DkysH", "woTDs8KwN8Kw", "OMObScOCw57CsG/DjS0Ib8Oqw73DsA==", "wofDosK3IA==", "RShXfsOtwqF/wrlKw5LCuhDDvsK5wo/ChXzCny7DtsK+", "QMKmwp5xDVY=", "wotswq/Dv8KKw5fCoHDCoAfCmMOs", "w6rCilDCl8KA", "XwrCicKDcg==", "OsO7wpDCvwI=", "w6nCp8KowrVq", "w4N4wpPCvsK5ERM=", "wrTCpcOFR8KxX8KYw6vDsCASTMOCHcObBcKbw4g=", "w7bCucKYwohJ", "wrHCocOCV8KSQsKZwpnDvnUSW8OgFsOfD8Ocw57CvcKF", 
"w40tfmvDjQ==", "w5XCrkQBEQ==", "w6/CgsKewq5k", "a8Kuw7/Dkx7Ch389QsKVwrXClcOaVg==", "w6MIOnhzCsOKf8OpL1zCqcKUCg89wqPCtUHDg8KHFG9Pw4ZeGg==", "Qkx7PDvCiA==", "WcOOw4w=", "wpLDuEI=", "CMOXwqHCs1TDl1wqwrxow5TClsOOwo8twowhw7U=", "wprDoA5PN2dP", "EnVjw63CgQvCnsOoIUFyw7jCrTo=", "woRowqDDvA==", "w6Y7w7g8ccKEwpbDtcKcKMKuw77Dsj/CrzbDshFWwq4J", "Pg1zw5/Ciw==", "GsO2eMOUw5A=", "vizp.vz6tBQBGCqesdznUn=="];
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
          if (value && str["replace"](/[zztBQBGCqesdznUn=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662355;
  };
  return fn(++count, long) >> count ^ long;
})(_0xff6e, 384, 98304);
var _0x5b3a = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xff6e[c];
  if (_0x5b3a["RANKUO"] === undefined) {
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
    _0x5b3a["rSqwZS"] = testcase;
    _0x5b3a["hMUxwB"] = {};
    _0x5b3a["RANKUO"] = !![];
  }
  var e = _0x5b3a["hMUxwB"][c];
  if (e === undefined) {
    if (_0x5b3a["EyuiXF"] === undefined) {
      _0x5b3a["EyuiXF"] = !![];
    }
    x = _0x5b3a["rSqwZS"](x, alpha);
    _0x5b3a["hMUxwB"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const tracedTestId = _0x5b3a("0", "Qhr%");
describe(_0x5b3a("1", "[x*p"), () => {
  var sortFunctions = {
    "lZTSQ" : function(value, joiner) {
      return value !== joiner;
    },
    "Zkjjm" : _0x5b3a("2", "im3W"),
    "VMEml" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "iwCTW" : function(require, load, callback) {
      return require(load, callback);
    },
    "EHEBk" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  sortFunctions[_0x5b3a("3", "sPs%")](beforeEach, () => {
    cy[_0x5b3a("4", "X*sz")](_0x5b3a("5", "!(xl"))[_0x5b3a("6", "htAz")]();
  });
  sortFunctions[_0x5b3a("7", "X*sz")](it, _0x5b3a("8", "htAz"), () => {
    if (sortFunctions[_0x5b3a("9", "DIly")](_0x5b3a("a", "l@e6"), _0x5b3a("b", "X*sz"))) {
      cy[_0x5b3a("c", "RF&k")](tracedTestId)["find"](_0x5b3a("d", "4hqX"))[_0x5b3a("e", "!BMU")]("have.attr", _0x5b3a("f", "EUC#"))[_0x5b3a("10", "FN5C")]((input) => {
        [_0x5b3a("11", "sPs%")][_0x5b3a("12", "n(d2")]((mmCoreSplitViewBlock) => {
          return expect(input)["to"]["include"](mmCoreSplitViewBlock);
        });
      });
    } else {
      cy[_0x5b3a("13", "$B!u")]("image-traced-relative")[_0x5b3a("14", "Qhr%")](_0x5b3a("15", "zm]f"))["should"](_0x5b3a("16", "8@Pk"));
    }
  });
  sortFunctions[_0x5b3a("17", "R(6m")](it, _0x5b3a("18", "!BMU"), () => {
    if (_0x5b3a("19", "!BMU") === sortFunctions[_0x5b3a("1a", "n(d2")]) {
      cy["visit"]("/traced")[_0x5b3a("1b", "D7Ax")]();
    } else {
      cy["getTestElement"](_0x5b3a("1c", "(T@g"))["find"](".gatsby-image-wrapper")["should"](_0x5b3a("1d", "FDYI"));
    }
  });
  sortFunctions["EHEBk"](it, "works on relative paths outside of src", () => {
    cy[_0x5b3a("1e", "R(6m")]("image-traced-relative")[_0x5b3a("1f", "FDYI")](_0x5b3a("20", "Zga3"))[_0x5b3a("21", "T]sV")](_0x5b3a("1d", "FDYI"));
  });
});

