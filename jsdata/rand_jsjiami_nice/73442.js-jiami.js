'use strict';
var vip = "vip.v6";
var _0x1e20 = [vip, "wovDoHzDoQ==", "Iz82BcOl", "w4l5w4/CuQBdwq8fGMOAMFxGwrlSwp7ChcKQw4DDg1BsHsOYI8O5YFXChxlbwpo=", "w6cwYsOaw4rCmH7CscKGwptRw67DjQ==", "BTvCoCZ8LUbCp8OlwozCmEw4w4nDo3x4aTbCsA==", "ZSLDoi4mPxHDu8K7", "QcKNw53ClUpbwppLw71XVMKkF8O8BsOOw4caw7Yzwpl4YcOPw4E4G2A8w4rDoVQ=", "FFXDr8K5w5wHwqLCtnY=", "GWDDrSdH", "WlzDrMKww6MSwqDCpXrCg1bCu8OB", "T8K/w5IWwrg=", "w6PCsiI6", "BcKew7TDtVY=", "KmrCosKB", "P8OLKsK1PQ==", "OkfCisKnwqY=", "w6kHwrLCvw==", "YFbCusKww4gHwqbCsmfDjEvCi8OSwp1Kw6tmw5JLacOEw4TCtsOeGcOPNCpZwrfDlcKG", 
"IXIfw7/Ciw==", "wr4jwq00ZQ==", "w5l9MCvDow==", "eHXCgcOZwrY=", "FDXChic=", "w6DCqjk/wqg=", "dMKIw6NwAw==", "TbAviREDRp.Wv6xxclGurVtX=="];
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
          if (value && str["replace"](/[TbAREDRWxxclGurVtX=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662858;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1e20, 254, 65024);
var _0x5a92 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1e20[c];
  if (_0x5a92["LvtLLb"] === undefined) {
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
    _0x5a92["cWPXWR"] = testcase;
    _0x5a92["PnEpdN"] = {};
    _0x5a92["LvtLLb"] = !![];
  }
  var e = _0x5a92["PnEpdN"][c];
  if (e === undefined) {
    if (_0x5a92["fLowoG"] === undefined) {
      _0x5a92["fLowoG"] = !![];
    }
    x = _0x5a92["cWPXWR"](x, alpha);
    _0x5a92["PnEpdN"][c] = x;
  } else {
    x = e;
  }
  return x;
};
QUnit["test"](_0x5a92("0", "eqC2"), function(context) {
  var types = {
    "gspMd" : _0x5a92("1", "eqC2"),
    "WfIQc" : function(require, load, callback) {
      return require(load, callback);
    },
    "lrYUB" : _0x5a92("2", "5&[A"),
    "vDFBz" : _0x5a92("3", "hOLN")
  };
  var callbackVals = types[_0x5a92("4", "RnYO")]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        amlNodeData[_0x5a92("5", "hOLN")]();
        continue;
      case "1":
        var amlNodeData = types["WfIQc"](initFullpageNew, htmlElement, {
          "loopTop" : !![]
        });
        continue;
      case "2":
        context[_0x5a92("6", "#9Ui")]($(htmlElement)[_0x5a92("7", "5L7)")](SECTION_ACTIVE_SEL)[_0x5a92("8", "o7oi")](), 3, "We expect section 4 to be active");
        continue;
      case "3":
        context["equal"]($(htmlElement)[_0x5a92("9", "Y&eJ")](SECTION_ACTIVE_SEL)[_0x5a92("a", "Q#Jp")](), 0, types["lrYUB"]);
        continue;
      case "4":
        var htmlElement = types[_0x5a92("b", "Y&eJ")];
        continue;
    }
    break;
  }
});
QUnit[_0x5a92("c", "*&WK")]("Testing loopTop:false", function(movieElement) {
  var argumentArray = {
    "IeuXT" : "4|1|0|3|2",
    "onAyd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "okxPp" : _0x5a92("d", "hOLN")
  };
  var callbackVals = argumentArray[_0x5a92("e", "]hsp")][_0x5a92("f", "nj(*")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        movieElement[_0x5a92("10", "Ay$k")](argumentArray[_0x5a92("11", "2Oh!")]($, magnifier)[_0x5a92("12", "5rdR")](SECTION_ACTIVE_SEL)["index"](), 0, argumentArray["okxPp"]);
        continue;
      case "1":
        var $magnifier = initFullpageNew(magnifier, {
          "loopTop" : ![]
        });
        continue;
      case "2":
        movieElement[_0x5a92("13", "5L7)")](argumentArray[_0x5a92("14", "LiT!")]($, magnifier)[_0x5a92("15", "BBqO")](SECTION_ACTIVE_SEL)[_0x5a92("16", "8jew")](), 0, _0x5a92("17", "E&(Q"));
        continue;
      case "3":
        $magnifier[_0x5a92("18", "L73m")]();
        continue;
      case "4":
        var magnifier = "#fullpage";
        continue;
    }
    break;
  }
});

