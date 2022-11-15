'use strict';
var path = "vip.v6";
var a = [path, "GTPClsOMw4lgccKTa8KMelDCq8OtwrMyckLDl8K1w6oqQcOxWcKzD8OrKMKrwqtkw5kHTDFGwp3CiTFrwq3DmQ==", "QMOJwp1tYA==", "wq7CpWs0ag==", "wpjCr1Up", "wqLCrMOjw5NV", "wrpUcsKUwqQ=", "FEZV", "wpPCtGzDlX0=", "wo/CisKmw57CgMKzw4I=", "ZMOVHlHDrw==", "RnjDkkZe", "wpfCjcOOw6lxw54HwqbCtsOtNMKlw6bDisOCwo5sBMOfcMKwHsKYwotYw706cinCtsKcw6zDpcO7eMKSNSHDmQUDwq58w6Qxw6bCiirChBxBC8OwLA==", "wq4cOMOeH8O4w58Lw7QYw5XCsgguY23DsUw4cj3CgMOKJcKnBcOFw7DDoRNkEsK6NMK4w60U", "JTFDwpEL", "UFZDTRc=", "w4zDnUfCgsOEKcOJaljDtMKgV8OUQHVwwr3DvMOjwpsUwoI=", 
"FlpnBsO4UhFyJ3LDjXbDsMKWVg==", "N8KNNwVtShzCthdlBcONwrrCtUA=", "eicvJsON", "IMKAPQBSWk7CrAFhMMOTwr3CoAx4Xk3CnsOXE8OBZ8KjSw==", "w7gPwo8=", "w4NVwoU5Xw==", "wqrCmMKNw7nCpw==", "JGA5NsO/w5FBw7c6F2DCvMKEw6cv", "wrsOw6Ufw6M=", "wpfCjcOOw6lxw54HwqTCusO6KsO3w6nDisOIwoU1QcOddsKhFcKYwoUaw6c+ZTU=", "Y8OOwpNc", "AMKbFSd8", "wpvCoEYNaQ==", "bUdPdD41w7I+R8OxJBbDhyLCgw==", "LsKTXWbDrg==", "U8OsH3VP", "c8O5G3tc", "wrwdw7gfw6Y=", "UnfCs8OtLsKhw60Iw67Do1TDvQEaRg==", "Y8ONNlFlwqRHwrNRDRDDjE/CqMKI", "EBFh", "w5bDvVLCoMO/", 
"w7bClsKOGMOn", "w5p+OA==", "wpnCq1MxwpQuwqLDmMO6J8O+w6TCoMKhZg==", "wpDDthTCksO/", "w75EwokAdsOqSApzamDDvAoLeg==", "aFDDsFxi", "w4rDssKiHsKS", "vkliIpD.YQoKv6XHWRgFFFIM=="];
(function(obj, count, version) {
  var update = function(target, value, str, ctx, a) {
    value = value >> 8;
    a = "po";
    var str = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        ctx = obj[str]();
        if (value === target) {
          value = ctx;
          str = obj[a + "p"]();
        } else {
          if (value && str["replace"](/[klIDYQoKXHWRgFFFIM=]/g, "") === value) {
            obj[method](ctx);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662219;
  };
  return update(++count, version) >> count ^ version;
})(a, 186, 47616);
var g = function(c, n) {
  c = ~~"0x"["concat"](c);
  var v = a[c];
  if (g["xWiqzp"] === undefined) {
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
    g["zPimFA"] = testcase;
    g["AMZNqd"] = {};
    g["xWiqzp"] = !![];
  }
  var prevValue = g["AMZNqd"][c];
  if (prevValue === undefined) {
    if (g["Ehaysb"] === undefined) {
      g["Ehaysb"] = !![];
    }
    v = g["zPimFA"](v, n);
    g["AMZNqd"][c] = v;
  } else {
    v = prevValue;
  }
  return v;
};
import _0x254b69 from "assert";
import _0x3a7f23 from "lodash";
import{
  args as args,
  toArgs as toArgs
}from "./utils.js";
import _0x4d01e0 from "../pick.js";
describe("pick", function() {
  var c = {
    "KovqM" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "YtiIz" : function(require, load, callback) {
      return require(load, callback);
    },
    "SsGRB" : g("0", "m#du"),
    "TDLTy" : function(type, name) {
      return type === name;
    },
    "tQHZj" : g("1", "aIF["),
    "iHzWW" : function(state, undefinedAttr) {
      return state !== undefinedAttr;
    },
    "EJYTM" : "mnITa",
    "FfmYa" : g("2", "4)nJ"),
    "LASnx" : g("3", "trT4"),
    "fvjkA" : "xDZYy",
    "LqTqM" : g("4", "KR%D"),
    "PYtev" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "sBUZo" : function(require, load, callback) {
      return require(load, callback);
    },
    "KGeot" : "should coerce `paths` to strings",
    "gfYvC" : g("5", "eHGA"),
    "HOQye" : function(require, load, callback) {
      return require(load, callback);
    },
    "ATwch" : g("6", "fZ@!")
  };
  var artistTrack = c[g("7", "m#du")](toArgs, ["a", "c"]);
  var target = {
    "a" : 1,
    "b" : 2,
    "c" : 3,
    "d" : 4
  };
  var object = {
    "a" : 1,
    "b" : {
      "c" : 2,
      "d" : 3
    }
  };
  c[g("8", "7fbX")](it, g("9", "DBZz"), function() {
    _0x254b69[g("a", "D!wa")](_0x4d01e0(target, "a", "c"), {
      "a" : 1,
      "c" : 3
    });
    _0x254b69[g("b", "pcOL")](c[g("c", "WueA")](_0x4d01e0, target, ["a", "d"], "c"), {
      "a" : 1,
      "c" : 3,
      "d" : 4
    });
  });
  c["sBUZo"](it, g("d", "pcOL"), function() {
    _0x254b69["deepStrictEqual"](_0x4d01e0(object, g("e", ")[9a")), {
      "b" : {
        "c" : 2
      }
    });
  });
  it("should support path arrays", function() {
    var extra = {
      "a.b" : 1,
      "a" : {
        "b" : 2
      }
    };
    var item = c[g("f", ")[9a")](_0x4d01e0, extra, [[c[g("10", "4)nJ")]]]);
    _0x254b69[g("11", "JDW$")](item, {
      "a.b" : 1
    });
  });
  c[g("12", "qWl[")](it, g("13", "eHGA"), function() {
    var toReg = {
      "a.b" : 1,
      "a" : {
        "b" : 2
      }
    };
    _0x3a7f23[g("14", "@&]k")]([c[g("15", "pcOL")], [c[g("16", "iUUN")]]], function(mmCoreSplitViewBlock) {
      _0x254b69[g("17", "7fbX")](_0x4d01e0(toReg, mmCoreSplitViewBlock), {
        "a.b" : 1
      });
    });
  });
  it(c[g("18", ")BTJ")], function() {
    var formatterScope = {
      "hpxWP" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    if (c[g("19", "w(#r")](c[g("1a", "w(#r")], c[g("1b", "qWl[")])) {
      _0x254b69[g("1c", "GfYz")](c["YtiIz"](_0x4d01e0, {
        0 : "a",
        1 : "b"
      }, 0), {
        0 : "a"
      });
    } else {
      _0x254b69[g("1d", "w(#r")](formatterScope["hpxWP"](_0x4d01e0, object, g("1e", "D!wa")), {
        "b" : {
          "c" : 2
        }
      });
    }
  });
  c["sBUZo"](it, c["gfYvC"], function() {
    _0x3a7f23["each"]([null, undefined], function(value) {
      var service_obj = {
        "TeFMy" : function(require, load, callback) {
          return require(load, callback);
        }
      };
      if (c[g("1f", "DBZz")](c["EJYTM"], "mnITa")) {
        var message = {
          "a.b" : 1,
          "a" : {
            "b" : 2
          }
        };
        var clearkeys = service_obj[g("20", "ik]T")](_0x4d01e0, message, [[g("21", "2zx7")]]);
        _0x254b69[g("a", "D!wa")](clearkeys, {
          "a.b" : 1
        });
      } else {
        _0x254b69[g("22", "4@ED")](_0x4d01e0(value, c["FfmYa"]), {});
      }
    });
  });
  c[g("23", "[lmA")](it, c["ATwch"], function() {
    _0x254b69[g("24", ")[9a")](_0x4d01e0("", c[g("25", "KR%D")]), {
      "slice" : ""[g("26", "[d4y")]
    });
  });
  it(g("27", "hcka"), function() {
    var h = {
      "FIBOH" : function(require, load, callback) {
        return require(load, callback);
      },
      "Octqe" : c[g("28", "@&]k")]
    };
    if (c[g("29", "iUUN")] === c["LqTqM"]) {
      _0x3a7f23[g("2a", "4@ED")]([null, undefined], function(t) {
        _0x254b69["deepStrictEqual"](h[g("2b", "eHGA")](_0x4d01e0, t, h[g("2c", "nJ$@")]), {});
      });
    } else {
      _0x254b69["deepStrictEqual"](_0x4d01e0(target, artistTrack), {
        "a" : 1,
        "c" : 3
      });
    }
  });
});

