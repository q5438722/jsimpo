'use strict';
var _dec = "vip.v6";
var visits = [_dec, "VcOYw7R4wrfChkI8wqhH", "Zlt6eU3DhHw1Aj3DqFJpwrrCnMOMw7XCt8KiwrsPwp1jAMKpBGTCnHLDmsK+w43CtgkUw6jDgsOtwrURw6MZw6jDhVYewp1aBMKW", "woZowo3DuMK4", "elTCnsOBRQ==", "wo7DuMOqasO/woUsw4BlwofDu8Og", "fcOnQw0Z", "VMKoe0A=", "RcKjHFU=", "QsOYw7YMwrPChEM2", "Q8O3wpXDusOt", "fD9lHT8=", "ZcObw5B7wpo=", "wq0KBy/Cug==", "w5/ChQfClwU=", "WcO9Xgw9", "wq8fw7nCv8OCHsO1GcKXw5R/w5I+BEc=", "dhchw6/Csg==", "wrZ+encr", "dMKoSmLCkQ==", "wqUCw59iRA==", "U39EwqzDsw==", "vEnipx.yv6ZcGCocPfwsrIz=="];
(function(data, count, size) {
  var fn = function(script, type, href, node, css) {
    type = type >> 8;
    css = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        node = data[str]();
        if (type === script) {
          type = node;
          href = data[css + "p"]();
        } else {
          if (type && href["replace"](/[EnxyZcGCocPfwsrIz=]/g, "") === type) {
            data[method](node);
          }
        }
      }
      data[method](data[str]());
    }
    return 662711;
  };
  return fn(++count, size) >> count ^ size;
})(visits, 315, 80640);
var g = function(key, n) {
  key = ~~"0x"["concat"](key);
  var v = visits[key];
  if (g["hGYtFw"] === undefined) {
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
    g["VyvDfq"] = testcase;
    g["jzggzN"] = {};
    g["hGYtFw"] = !![];
  }
  var newVal = g["jzggzN"][key];
  if (newVal === undefined) {
    if (g["zjJuPt"] === undefined) {
      g["zjJuPt"] = !![];
    }
    v = g["VyvDfq"](v, n);
    g["jzggzN"][key] = v;
  } else {
    v = newVal;
  }
  return v;
};
import{
  join as join
}from "path";
import{
  findPort as findPort,
  killApp as killApp,
  launchApp as launchApp,
  nextBuild as nextBuild,
  nextStart as nextStart
}from "next-test-utils";
import _0x12163b from "next-webdriver";
jest[g("0", "9*7g")](1E3 * 60 * 2);
const bBody = join(__dirname, "../");
let previousInputState;
let AuthService;
const init = () => {
  var c = {
    "EkIck" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rJJmA" : "#items",
    "yoqbs" : function(require, load, callback) {
      return require(load, callback);
    },
    "JuoYi" : g("1", "gPV0")
  };
  c[g("2", "K!qY")](it, c["JuoYi"], async() => {
    const h = await _0x12163b(previousInputState, "/some-page");
    c[g("3", "[L&o")](expect, await h[g("4", "CvCJ")](c[g("5", "9Gl#")])[g("6", "PlD4")]())[g("7", "iY8H")]("1,2");
  });
};
describe("rewrites destination query", () => {
  var c = {
    "CfPWD" : function(saveNotifs) {
      return saveNotifs();
    },
    "BMvgX" : function(require, load, callback) {
      return require(load, callback);
    },
    "aHQZz" : function(saveNotifs) {
      return saveNotifs();
    },
    "zNtbB" : function(saveNotifs) {
      return saveNotifs();
    },
    "VXMrd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tVhRI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ngPav" : function(saveNotifs) {
      return saveNotifs();
    },
    "vJfSH" : g("8", "9*7g"),
    "VPWle" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  c[g("9", "eQNx")](describe, c[g("a", "Lj0L")], () => {
    beforeAll(async() => {
      previousInputState = await c[g("b", "9*7g")](findPort);
      AuthService = await c[g("c", "%mMZ")](launchApp, bBody, previousInputState);
    });
    afterAll(() => {
      return killApp(AuthService);
    });
    c[g("d", "HSx%")](init);
  });
  c[g("e", "9Gl#")](describe, g("f", "#t11"), () => {
    var conditionMap = {
      "blyHn" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "TeIVE" : function(aBody) {
        return c[g("10", "t]IZ")](aBody);
      },
      "kSWSP" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    c[g("11", "qF[!")](beforeAll, async() => {
      await conditionMap["blyHn"](nextBuild, bBody);
      previousInputState = await conditionMap[g("12", "PlD4")](findPort);
      AuthService = await conditionMap[g("13", "rRTR")](nextStart, bBody, previousInputState);
    });
    c["tVhRI"](afterAll, () => {
      return killApp(AuthService);
    });
    c[g("14", "OjtY")](init);
  });
});

