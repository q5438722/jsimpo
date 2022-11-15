'use strict';
var path = "vip.v6";
var a = [path, "wpJYwpAiHA==", "wpDDj8K4w4ZR", "wrkFwp0Tfg==", "acKQwpMzwo/DrMKBwp0wwoTCpMKUMH0KwqbClS3Cr8KbJjwcfyDCq8KoFMONwrrCi8Kuw5QYCAnDi8OO", "w7LDqsObwrzDikdQWxkHwpF4LRtXwoHChsKPUGzDry3CocOnTWbCisO/w7/Cp8OYwqhLw4AlUk8vL8OYccOtwqt6wq/CtGxFe1YlPikoF8K0Gw==", "w4TCv8KeHcOY", "QMOtw5nCtcKpGFJywr7DjwjCoCHCtcO1fsKVLcOwwqnCncKBw4Qewr5jw6lPw4k7wofCncOmLsOSwqMabcOTw7JsW8K4FsKTwqxZw7rDjMKnf3fDisKJQsOtw711KA==", "wqoaNcObwqzCscKUXy9GLcKYwpBkUw==", "w4ELw7fDqcKX", "wq/CvljCtQk=", "OwPDvSJe", "wrEGRWPDiA==", 
"wrB+wrA4AFZa", "wo8LwpRuwrzChnI=", "woUiZkrDgiY=", "NWHCvMOoacO4w5/Cg8OTEHAOJ8OhwqQ=", "wp82wpvCh3M=", "wqDDisKYw7dM", "w48yw7jCgcKhK0rDsBxzbQ==", "w4UWAWc=", "asO8D1LDjg==", "wrhmw41XEQ==", "wrUMwrR/wqU=", "RizCj8OrSw==", "w5k5asKLOcOp", "wpUAwqk3Tw==", "YsOwD2PDr3DDjXvCmMKUwphKwrJ8wpQ=", "w4fDoVIgwrY=", "w6cyNmvDuw==", "aEtRfgE=", "w4/CvGrCijo=", "WGFxWyvDiw==", "w6LCmFw2eg==", "w7fCoMKXP8OdUcKSwrZZM8K5HV7CncOt", "wroZwrDCgEnDlV7Du8OmLcK2wpd/eFc=", "d8Kdwo4hwobDn8OIwpkq", "xuvXip.vo6unnrXoWYJXJoC=="];
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
          if (value && str["replace"](/[xuXounnrXoWYJXJoC=]/g, "") === value) {
            obj[method](ctx);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662221;
  };
  return update(++count, version) >> count ^ version;
})(a, 215, 55040);
var format = function(c, opt) {
  c = ~~"0x"["concat"](c);
  var f = a[c];
  if (format["qxMOvz"] === undefined) {
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
    format["FCvjwJ"] = testcase;
    format["WfdkKu"] = {};
    format["qxMOvz"] = !![];
  }
  var o = format["WfdkKu"][c];
  if (o === undefined) {
    if (format["fVzlbS"] === undefined) {
      format["fVzlbS"] = !![];
    }
    f = format["FCvjwJ"](f, opt);
    format["WfdkKu"][c] = f;
  } else {
    f = o;
  }
  return f;
};
import _0x35e706 from "assert";
import _0x541449 from "lodash";
import{
  noop as noop,
  identity as identity,
  isNpm as isNpm,
  mapCaches as mapCaches
}from "./utils.js";
import _0x12dc98 from "../mergeWith.js";
import _0x506a0e from "../last.js";
describe(format("0", "#8O3"), function() {
  var c = {
    "IJjpY" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "ayNcy" : function(state, undefinedAttr) {
      return state !== undefinedAttr;
    },
    "WKMJk" : format("1", "GW5)"),
    "JsiwA" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "cJYpF" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "cqARv" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "rmlnN" : function(i, len) {
      return i == len;
    },
    "lieAr" : format("2", "M%@w"),
    "KMzwd" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "SSzQG" : "amiea",
    "MqaqZ" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "fxbVh" : format("3", "Nkq&"),
    "LEZij" : "UCllh",
    "SENFK" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "WzlRV" : function(require, load, callback) {
      return require(load, callback);
    },
    "kutNj" : "should clone sources when `customizer` returns `undefined`",
    "HkpeA" : "should defer to `customizer` for non `undefined` results",
    "AJNwi" : format("4", "#8O3"),
    "Hvlha" : function(require, load, callback) {
      return require(load, callback);
    },
    "dLppP" : format("5", "Xu9v")
  };
  c[format("6", "4C1u")](it, format("7", "N^$8"), function() {
    var spec = c["IJjpY"](_0x12dc98, {
      "a" : {
        "b" : [1, 1]
      }
    }, {
      "a" : {
        "b" : [0]
      }
    }, noop);
    _0x35e706["deepStrictEqual"](spec, {
      "a" : {
        "b" : [0, 1]
      }
    });
    spec = _0x12dc98([], [undefined], identity);
    _0x35e706[format("8", "9SBH")](spec, [undefined]);
  });
  c[format("9", "(*7b")](it, c["kutNj"], function() {
    var data = {
      "a" : {
        "b" : {
          "c" : 1
        }
      }
    };
    var hsh1 = {
      "a" : {
        "b" : {
          "d" : 2
        }
      }
    };
    _0x12dc98({}, data, hsh1, noop);
    _0x35e706["deepStrictEqual"](data["a"]["b"], {
      "c" : 1
    });
  });
  c[format("a", "q%NY")](it, c["HkpeA"], function() {
    if (c[format("b", "WHCS")](c[format("c", "QY!d")], "KUahn")) {
      return _0x541449[format("d", "GW5)")](a) ? a["concat"](b) : undefined;
    } else {
      var artistTrack = c["JsiwA"](_0x12dc98, {
        "a" : {
          "b" : [0, 1]
        }
      }, {
        "a" : {
          "b" : [2]
        }
      }, function(obj, val) {
        return _0x541449[format("e", "l$!m")](obj) ? obj[format("f", "QY!d")](val) : undefined;
      });
      _0x35e706[format("10", "1Pd5")](artistTrack, {
        "a" : {
          "b" : [0, 1, 2]
        }
      });
    }
  });
  it(c[format("11", "s@1s")], function() {
    var result;
    c[format("12", "M%@w")](_0x12dc98, {}, {
      "a" : {
        "b" : 2
      }
    }, function() {
      result = c["cJYpF"](_0x506a0e, arguments);
    });
    _0x35e706["ok"](isNpm ? c["rmlnN"](result[format("13", "j^Mz")][format("14", "jwu!")], c[format("15", "RHT8")]) : c[format("16", "I5nV")](result, mapCaches[format("17", "l$!m")]));
  });
  c["Hvlha"](it, "should overwrite primitives with source object clones", function() {
    var deferred = {
      "bkDak" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    var ret = _0x12dc98({
      "a" : 0
    }, {
      "a" : {
        "b" : ["c"]
      }
    }, function(obj, val) {
      if (c["SSzQG"] === c[format("18", "Ds#T")]) {
        return _0x541449["isArray"](obj) ? obj[format("19", "]Q8k")](val) : undefined;
      } else {
        ret = deferred[format("1a", "Nkq&")](_0x506a0e, arguments);
      }
    });
    _0x35e706[format("1b", "RHT8")](ret, {
      "a" : {
        "b" : ["c"]
      }
    });
  });
  it(c["dLppP"], function() {
    var r = {
      "ZezLK" : function(className, code, next, prop) {
        return c[format("1c", "r2A9")](className, code, next, prop);
      },
      "qfKrT" : c["fxbVh"],
      "dEKbb" : c[format("1d", "jwu!")]
    };
    var a = ["b", "c"];
    var i = {
      "a" : ["a"]
    };
    var source = {
      "a" : a,
      "b" : a
    };
    var remaining = c[format("1e", "MVGr")](_0x12dc98, i, source, function(obj, val) {
      var _upServersSorted = {
        "VvKzL" : function(require, load, callback, id) {
          return require(load, callback, id);
        },
        "pruLJ" : function(url, trimDomain, mmCoreSplitViewBlock, $state) {
          return r[format("1f", "yV%$")](url, trimDomain, mmCoreSplitViewBlock, $state);
        }
      };
      if (r["qfKrT"] !== r["dEKbb"]) {
        return _0x541449["isArray"](obj) ? obj[format("20", "MVGr")](val) : undefined;
      } else {
        var spec = _upServersSorted[format("21", "*jGI")](_0x12dc98, {
          "a" : {
            "b" : [1, 1]
          }
        }, {
          "a" : {
            "b" : [0]
          }
        }, noop);
        _0x35e706["deepStrictEqual"](spec, {
          "a" : {
            "b" : [0, 1]
          }
        });
        spec = _upServersSorted["pruLJ"](_0x12dc98, [], [undefined], identity);
        _0x35e706[format("22", "4C1u")](spec, [undefined]);
      }
    });
    _0x35e706[format("23", "s@1s")](remaining, {
      "a" : ["a", "b", "c"],
      "b" : ["b", "c"]
    });
  });
});

