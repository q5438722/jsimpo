/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x17bb = [vip, "wpTCtcKFJFk=", "w7Bgw6MzTQ==", "w507ZMOW", "w77CmsK0w6pg", "U8OZwqFrw7k=", "MBnDolI=", "w7/CmcKQFBHDrcKoUMO9U8OU", "w4w6wrdmCzDCnw==", "wp1Vw5sSJQ==", "WMK2WV3DiMOQ", "wovDrE3DrcKOw559IktfdcOcSmsuCsOMaEk=", "FW4CwqnDt8KIwrrClTrCpg==", "w55vw5ZbXg==", "w4rCisKXw4FW", "wpnDsz4EWw==", "LX0qfg==", "wokjw7dJVzbDihzCg1bCk8OTJg==", "KsO9w5bClVk=", "w7zCicKXLA==", "KcOsw47ClGTDkjrDh8Oywqdp", "MHUoY8OF", "w73CqcO3wrMJEUDCsw==", "ehDDl3/DrsOH", "w5FHw6o3aEA=", "EWZJRg==", "Wkk+dcOsNMKVwqTCgTM=", 
"IcO4w78ze8O4w61Yw5FGwqbCvhY=", "w7tgw4coSw==", "ICVVMMKX", "w7liX8K7wqw=", "wpIvIm8=", "Jn4nPhvCkg==", "Qn01RcKxD3ZA", "w44ve8OS", "w5jCuj0ScsK/wrlow4TCvsK9w7TCr8OVwrQ=", "w54QDcOQwpjDtB5LRsKiwqjDqMO7LkBAA8Orw5zCkw==", "eVLCohHCosKIwoHChcOxwoHCtsKcCkV2w47DiVnCpcK5MMOUwpXDhcOCdsKYTw==", "wpB0J8KUK8KfdFU4wo0Iw4LDm3fDiMOHahzCg8OMwqjDgUrClBjDlWrDngk=", "wpoFFhrCl8OOwqsFY8OoVUzCqcOpw67CvsOkwqPDgHjDvMOHOALDusKUwpNsJg==", "QMOud8KuIhDCgn0=", "eVLCohHCosKIwoHChcOxwoHCtsKcCkV2w47DiVnCpcK5MMOUwoPDicOfesKZUw==", 
"wonCmHBew4nDoVs=", "TalSvLqiEps.fFtYvyb6Cuy=="];
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
          if (value && str["replace"](/[TalSLqEsfFtYybCuy=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662915;
  };
  return fn(++count, long) >> count ^ long;
})(_0x17bb, 412, 105472);
var _0x3eed = function(c, mat) {
  c = ~~"0x"["concat"](c);
  var p = _0x17bb[c];
  if (_0x3eed["WHdhxG"] === undefined) {
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
    _0x3eed["wjIRDm"] = testcase;
    _0x3eed["wwkZDQ"] = {};
    _0x3eed["WHdhxG"] = !![];
  }
  var s = _0x3eed["wwkZDQ"][c];
  if (s === undefined) {
    if (_0x3eed["fOOtBs"] === undefined) {
      _0x3eed["fOOtBs"] = !![];
    }
    p = _0x3eed["wjIRDm"](p, mat);
    _0x3eed["wwkZDQ"][c] = p;
  } else {
    p = s;
  }
  return p;
};
var PolygonRender = require(_0x3eed("0", "1*m]"));
var Class = require(_0x3eed("1", "B#wv"));
var Earcut = require(_0x3eed("2", "fmhT"));
var GetAABB = require(_0x3eed("3", "[hs8"));
var GeomPolygon = require(_0x3eed("4", "pfkn"));
var Shape = require(_0x3eed("5", "oW$N"));
var Smooth = require(_0x3eed("6", "fmhT"));
var Polygon = new Class({
  "Extends" : Shape,
  "Mixins" : [PolygonRender],
  "initialize" : function MakeLineChart(range, data, el, drawInfo, name, staticMethodName) {
    var types = {
      "MBgcQ" : function(name, initialValue) {
        return name === initialValue;
      },
      "grRHT" : _0x3eed("7", "HmrK"),
      "Vwich" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "wmCDk" : function(value, joiner) {
        return value !== joiner;
      }
    };
    if (types[_0x3eed("8", "^%!W")](data, undefined)) {
      data = 0;
    }
    if (types[_0x3eed("9", "Qr@4")](el, undefined)) {
      el = 0;
    }
    Shape[_0x3eed("a", "[hs8")](this, range, types[_0x3eed("b", "buLQ")], new GeomPolygon(drawInfo));
    var _0x35038f = types[_0x3eed("c", "$kx9")](GetAABB, this[_0x3eed("d", "fmhT")]);
    this[_0x3eed("e", "POWP")](data, el);
    this[_0x3eed("f", "c#vp")](_0x35038f[_0x3eed("10", "e#5^")], _0x35038f[_0x3eed("11", "EUN1")]);
    if (types["wmCDk"](name, undefined)) {
      this["setFillStyle"](name, staticMethodName);
    }
    this[_0x3eed("12", "bXUt")]();
    this[_0x3eed("13", "9]v2")]();
  },
  "smooth" : function(value) {
    var window = {
      "zmmpL" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "zdkul" : function(name, initialValue) {
        return name === initialValue;
      },
      "gKZEf" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "NUDGF" : function(value, joiner) {
        return value !== joiner;
      },
      "Sbqcb" : "EPTIf"
    };
    if (window[_0x3eed("14", "L0K!")](value, undefined)) {
      value = 1;
    }
    var processEvaluatorsCallback = 0;
    for (; window["gKZEf"](processEvaluatorsCallback, value); processEvaluatorsCallback++) {
      if (window["NUDGF"](window[_0x3eed("15", "buLQ")], _0x3eed("16", "1*m]"))) {
        Smooth(this[_0x3eed("17", "vg]q")]);
      } else {
        var callbackVals = _0x3eed("18", "c#vp")[_0x3eed("19", "]Yi4")]("|");
        var callbackCount = 0;
        for (; !![];) {
          switch(callbackVals[callbackCount++]) {
            case "0":
              target[_0x3eed("1a", "POWP")](params[0]["x"], params[0]["y"]);
              continue;
            case "1":
              return this;
            case "2":
              this[_0x3eed("1b", "]Yi4")] = window[_0x3eed("1c", "vg]q")](Earcut, target);
              continue;
            case "3":
              this[_0x3eed("1d", "Mne8")] = target;
              continue;
            case "4":
              var params = this["geom"][_0x3eed("1e", "2ARD")];
              continue;
            case "5":
              var i = 0;
              for (; i < params[_0x3eed("1f", "Qr@4")]; i++) {
                target[_0x3eed("20", "K1q]")](params[i]["x"], params[i]["y"]);
              }
              continue;
            case "6":
              var target = [];
              continue;
          }
          break;
        }
      }
    }
    return this[_0x3eed("21", "FLCp")]();
  },
  "updateData" : function() {
    var calcResult = {
      "FBCxW" : _0x3eed("22", "1eet"),
      "axScb" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      }
    };
    var callbackVals = calcResult[_0x3eed("23", "Qr@4")][_0x3eed("24", "Afvd")]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          var j = 0;
          for (; calcResult[_0x3eed("25", "CV&V")](j, result["length"]); j++) {
            AP["push"](result[j]["x"], result[j]["y"]);
          }
          continue;
        case "1":
          return this;
        case "2":
          var result = this[_0x3eed("26", "zP8F")][_0x3eed("27", "LXgk")];
          continue;
        case "3":
          this[_0x3eed("28", "M)^G")] = AP;
          continue;
        case "4":
          AP[_0x3eed("29", "[hs8")](result[0]["x"], result[0]["y"]);
          continue;
        case "5":
          var AP = [];
          continue;
        case "6":
          this["pathIndexes"] = Earcut(AP);
          continue;
      }
      break;
    }
  }
});
module["exports"] = Polygon;

