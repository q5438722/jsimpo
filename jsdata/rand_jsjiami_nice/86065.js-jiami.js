/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x231a = [vip, "w710ZMKj", "O0Uowq98aA==", "JcOlMMK1LSc=", "w5UXwobDgcORwqUBw6TDig==", "wo7CvQ48cWXDsA==", "w4rDvHzDn04=", "w58IwrrDhsOGwpoLw7XDhg==", "w5HClsKpwpg9wqvCiwg=", "wrvCkjcqUg==", "w7hrwrXDi8KE", "TcKqw4sTCsKrwrU=", "w4VawpccQcKewo7ClAHDqQ/CrmjCgivCmFbDuA==", "worCp8KrfsKaKMOMwpBaw5/Di8OIw63CrsOWBSgp", "w7ljeAYYw6NZYsKWacO2w6MNwoxkwqzCr8OZw4wLwpvDpMO6MMKIS8Kebz4Ww7pYJFbChTwUDAUSUHNv", "woQwMcKOw7bDnS8AXQF9woJhQMKywozDrGILw4oXwpcPwobDgcOlbFXCgmbCtynDi8KZw5LClcOT", "ScK2w58oF8KNwqPDh8Odw73Clx/DjMOrw5k=", 
"NV8swrhNaWwBP8OKIn0Lw5I=", "ccKuw6DDoEk=", "THfCqMKEVw==", "wqAdJy5p", "w6kfwoDDgcOEwpkBw6nDrXnCkjjCkxPCig==", "LcOtbcOd", "GcK8wrle", "DMOPRsO0w7Y=", "wq7CnGnDmwFS", "vYip.vVnE6rsTrfTsQZ=="];
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
          if (value && str["replace"](/[YVnErsTrfTsQZ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662916;
  };
  return fn(++count, long) >> count ^ long;
})(_0x231a, 236, 60416);
var _0x4098 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x231a[c];
  if (_0x4098["rnmKpZ"] === undefined) {
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
    _0x4098["mVnXui"] = testcase;
    _0x4098["HodHeE"] = {};
    _0x4098["rnmKpZ"] = !![];
  }
  var e = _0x4098["HodHeE"][c];
  if (e === undefined) {
    if (_0x4098["eVdWEN"] === undefined) {
      _0x4098["eVdWEN"] = !![];
    }
    x = _0x4098["mVnXui"](x, alpha);
    _0x4098["HodHeE"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var FillStyleCanvas = require(_0x4098("0", "m^(m"));
var LineStyleCanvas = require(_0x4098("1", "opO8"));
var SetTransform = require(_0x4098("2", "#@Vt"));
var TriangleCanvasRenderer = function(args, retval, object, packetDataX) {
  var shortcuts = {
    "pmxrl" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "LvlSG" : _0x4098("3", "YwXv"),
    "FGDDs" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "xWaJZ" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "GJJbL" : function(require, load, callback) {
      return require(load, callback);
    },
    "CtdtF" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    }
  };
  object[_0x4098("4", "7fp^")](retval);
  var shapes = args[_0x4098("5", "11yj")];
  if (shortcuts[_0x4098("6", "P$!@")](SetTransform, args, shapes, retval, object, packetDataX)) {
    var callbackVals = shortcuts[_0x4098("7", "ZXcj")][_0x4098("8", "L)yJ")]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          var value = retval[_0x4098("9", "3IQX")];
          continue;
        case "1":
          var prev = retval[_0x4098("a", "XYg[")]["x1"] - selection;
          continue;
        case "2":
          var layer = retval[_0x4098("b", "u50S")]["y2"] - value;
          continue;
        case "3":
          var $schemes = shortcuts[_0x4098("c", "XYg[")](retval["geom"]["x2"], selection);
          continue;
        case "4":
          shapes[_0x4098("d", "!z25")](scheme, preCloseCallbackResult);
          continue;
        case "5":
          var mentionValues = shortcuts["xWaJZ"](retval[_0x4098("e", "4y[q")]["y1"], value);
          continue;
        case "6":
          shapes[_0x4098("f", "11yj")](prev, mentionValues);
          continue;
        case "7":
          shapes["beginPath"]();
          continue;
        case "8":
          shapes[_0x4098("10", "d44d")]($schemes, layer);
          continue;
        case "9":
          shapes[_0x4098("11", "3IQX")]();
          continue;
        case "10":
          var selection = retval["_displayOriginX"];
          continue;
        case "11":
          shapes[_0x4098("12", "E]iX")]();
          continue;
        case "12":
          var scheme = shortcuts[_0x4098("13", "lP0!")](retval["geom"]["x3"], selection);
          continue;
        case "13":
          if (retval[_0x4098("14", "3IQX")]) {
            shortcuts["GJJbL"](LineStyleCanvas, shapes, retval);
            shapes["stroke"]();
          }
          continue;
        case "14":
          if (retval[_0x4098("15", "R7FY")]) {
            shortcuts[_0x4098("16", "E]iX")](FillStyleCanvas, shapes, retval);
            shapes["fill"]();
          }
          continue;
        case "15":
          var preCloseCallbackResult = shortcuts[_0x4098("17", "SXwU")](retval[_0x4098("e", "4y[q")]["y3"], value);
          continue;
      }
      break;
    }
  }
};
module[_0x4098("18", "7fp^")] = TriangleCanvasRenderer;

