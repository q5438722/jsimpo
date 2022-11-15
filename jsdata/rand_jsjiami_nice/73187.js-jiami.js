'use strict';
var vip = "vip.v6";
var _0x3d83 = [vip, "wq46wqhtdA==", "dcKLNhLDhsOMaT7Dl8O6w6s1wovCtFw=", "w5svw57DoGU=", "WsOoSC0xBUk=", "wpVrX8Kva3VQwp85w5DCusOswrPCk8KcZzfCmw3CtWo+w5Zo", "I8Kjw7LDhCvCg8O0ZCHDlgzCucKqbSE=", "NgjDhDUx", "fkVAw5jDqg==", "wprDkRLDs0YzwoE=", "w4nDgmfCisOXScKGJMKgwpPCpMOHw4nCtcKEDCPCtMK4w6XDgnHClnXDqQ==", "w5PDkEjCoMOh", "w7FSw5XCqsKSw5snwobDs8ODwpPCpcKgw7se", "wr3CpnTCoXc=", "wqLDpsOpwo8NQEE=", "w6bCq1vCn8OOKsO1fsO9w53DncKEQsKJag==", "woBbEWjCjQ==", "w6Jew5zCiMKe", "FjjDncKQw60fw547w5TDlSzDkilTwr8=", 
"IcK8JTQ=", "BjTDiBcNw7PDgMKcwoXDv8Ouwqxkw4dGTg==", "ZjLCo3LDrWMvUBPCmmDChjFiFm8Fw4Acwq3DuMOdwqBSwow=", "OgPDjxIZw6LDm8KJwoXCrMOBwpI5w4NKSDhrJ8KNw6/CnsKZcHjDjgYn", "UXVqw6LDkcOdwrXDsMOeecK/wpUaw5LDpS3CqCPDlcKlwqMRYVddw5DDrWbDnMKfY2c=", "F0cLwrEaThVjfg09LsKOw6vCrR/DrR/DgcO7fcOnwqwXVBDDtivCkQ==", "H8Knwp4JAyZ7OsOQUCEIEsKMHynDosKBP8KlwoLDi0TDrMK0w5BVwqjDhMKRJsKlR2dqCMKD", "wrMRwpNObMK9RMOSwrYTw7jDj3loPMOZUy4sRsOKBlUh", "O8OMNlZMJsKqw63CncO+ZCLDscOqw4TDsSdOwo0sRUzCowY4w5nCsMO0w77Ct8OrGMKiH8OpBcKgwqwmYsK3w7wlHxDDsg==", 
"JcOFNT/DiMKRO8KmwpNowppfZsK4ccOsYiJzSsOnXsKWw5NSHcOcR1QCZy1Dw7DCqMOTYWBxwrPClsK8wp7CrMKnDg==", "w7NZw7fCvcKV", "HsKqwoITAzQ+", "w5jCvMK4w5Fm", "IsOCFyvDkMKWc8KbwpJ9w4pBZ8KvJQ==", "wpPDnAvDlcOt", "w7/Dh8KMwrHCmQ==", "wqhIDmjCqQ==", "JcKpw4zDijPClsO5", "MRvDv8KoQA==", "w4RkewHDog==", "wrpwS8KvYw==", "TMK6w6/CqMOa", "PcORw6DDnMO6", "w7HDrR9sw6TCjMOXUzElwoBdWMKuKA==", "wq/CsTrDmAg=", "MzPDgToV", "fiDCpyjDpA==", "tLMviopG.YvP6saJlKuoyJS=="];
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
          if (value && str["replace"](/[tLMoGYPsaJlKuoyJS=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662213;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3d83, 423, 108288);
var _0x2743 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x3d83[c];
  if (_0x2743["CjRUnd"] === undefined) {
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
    _0x2743["znvKbl"] = testcase;
    _0x2743["WoufvE"] = {};
    _0x2743["CjRUnd"] = !![];
  }
  var e = _0x2743["WoufvE"][c];
  if (e === undefined) {
    if (_0x2743["CxvGSr"] === undefined) {
      _0x2743["CxvGSr"] = !![];
    }
    x = _0x2743["znvKbl"](x, alpha);
    _0x2743["WoufvE"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const path = require(_0x2743("0", "kgNE"));
const {
  parseMD : parseMD
} = require(".");
describe(_0x2743("1", "KYd!"), () => {
  var c = {
    "zDIVR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wfwmK" : _0x2743("2", "7da*"),
    "jzULv" : _0x2743("3", "KYd!"),
    "WNmDD" : _0x2743("4", "YApO"),
    "nCTVt" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "poLSC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EMICN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RWVVv" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gcDCx" : "__fixtures__/with-directives.md",
    "QHiCY" : function(require, load, callback) {
      return require(load, callback);
    },
    "vdovs" : _0x2743("5", "Mkf5"),
    "qDxPA" : _0x2743("6", "9JXw"),
    "pDrip" : "should import md from other files",
    "VohAt" : _0x2743("7", "^6LP"),
    "mtGdZ" : _0x2743("8", "gzc$"),
    "STmNP" : _0x2743("9", "UIV5"),
    "EdQVJ" : function(require, load, callback) {
      return require(load, callback);
    },
    "xPujv" : "it should parse video questions"
  };
  c["QHiCY"](it, c[_0x2743("a", "eyVE")], async() => {
    const bBody = await parseMD(path[_0x2743("b", "9JXw")](__dirname, "__fixtures__/simple.md"));
    c[_0x2743("c", "VX!h")](expect, bBody)[_0x2743("d", "UIV5")]();
  });
  c[_0x2743("e", "g@9p")](it, c[_0x2743("f", "jjk1")], async() => {
    const bBody = await c[_0x2743("10", "kPDO")](parseMD, path[_0x2743("11", "QJn!")](__dirname, c[_0x2743("12", "4Me4")]));
    c[_0x2743("13", "npIC")](expect, bBody)["toMatchSnapshot"]();
  });
  it(c[_0x2743("14", "Ouq*")], async() => {
    const button2Component = await c[_0x2743("15", "5kdM")](parseMD, path["resolve"](__dirname, c[_0x2743("16", "[bQv")]));
    expect(button2Component)[_0x2743("17", "v$#v")]();
  });
  c[_0x2743("18", "7xm9")](it, c[_0x2743("19", "KYd!")], async() => {
    const bBody = await parseMD(path["resolve"](__dirname, c[_0x2743("1a", "Tf&l")]));
    c[_0x2743("1b", "^6LP")](expect, bBody)[_0x2743("1c", "pfkI")]();
  });
  c["QHiCY"](it, c[_0x2743("1d", "u8L%")], async() => {
    const button2Component = await c["nCTVt"](parseMD, path[_0x2743("1e", "UkPL")](__dirname, _0x2743("1f", "Ouq*")));
    expect(button2Component)[_0x2743("20", "QJn!")]();
  });
  it(c[_0x2743("21", "KYd!")], async() => {
    const bBody = await c[_0x2743("22", "YApO")](parseMD, path[_0x2743("23", "XC$6")](__dirname, _0x2743("24", "RR1u")));
    c[_0x2743("25", "RR1u")](expect, bBody)[_0x2743("26", "eyVE")]();
  });
  c[_0x2743("27", "xXqS")](it, c["xPujv"], async() => {
    const bBody = await parseMD(path[_0x2743("28", "nHh]")](__dirname, "__fixtures__/with-video-question.md"));
    c["RWVVv"](expect, bBody)[_0x2743("29", "wZEb")]();
  });
  it("it should not parse directives we do not use", async() => {
    const bBody = await c[_0x2743("2a", "kPDO")](parseMD, path["resolve"](__dirname, c[_0x2743("2b", "eyVE")]));
    c[_0x2743("2a", "kPDO")](expect, bBody)[_0x2743("2c", "a9M)")]();
  });
});

