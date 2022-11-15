/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x2645 = [vip, "d8ODw7E=", "w7dnwp8bdQ==", "w6XDhwEew4w=", "w6xDXsOjQsO1", "UzQgEA==", "DcKww6tEE8O/", "UGZAWcKpXkXCkzvClcKu", "w74Dw5zDpMK8", "w71hARDDtA==", "w55xHx56IcOHLsOBVMK6", "Mh3DmlLCgsOiUMOzwosPw6c9BcOHw7DDqA0NwqjDoMOe", "YMOeVBE=", "w4RfwqjCv8K4NFvCm2U=", "w480w6TDoMKgNSPCnhbCvQrCqA==", "KmPDrMKgYsOGw6Ml", "TMK8wofDvkcxfDvDkw==", "w4lCNl3DksKUEMKIPQ==", "wrggwptdwpHDtHQrOMOBUkE=", "bhcOP2o=", "wrwYecKsU8K0Qy3DsQ==", "LgXDkxXDjcK9JcO6wr4=", "wr0JwpLCvsOHwrdaw4w=", "C8Ohw7rDvl02eSbCm8K9w7Umw4XCoA==", 
"dELCkQXDtsKhPcOAw5XCpsOffMKn", "w4ozwrLDjMOwwoIZdCc=", "w6xIwrgwdgzDnmc=", "PWvDo8Kn", "CAfCnsO1IMO5TsOu", "GGnDqmBlSw==", "w55xHx4=", "wqk8wpPCpsO2", "CsKhw7VKAg==", "w6VIJT3ChMK3wofDoA==", "JVTClcOm", "w6toR3g=", "FltoBDfChX7ClltPwoJ4wqFFY0UKw6rCthzDhA==", "asOPw63DvDbDr8OUwr/CpnYx", "CnUE", "w6xxSHrDtA==", "w4Umw5vDqcK2ACnCmA==", "w4XDsAQzw73DucOHwqs=", "wrnCg3zDqA==", "woLCuUs=", "woomw6/DlcKNwotcQVA=", "F1ttJTvCm2/CuEBS", "vip.v6daVLWKJJYgAPYGkK=="];
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
          if (value && str["replace"](/[daVLWKJJYgAPYGkK=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662320;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2645, 202, 51712);
var _0x4b1a = function(c, prefix) {
  c = ~~"0x"["concat"](c);
  var index = _0x2645[c];
  if (_0x4b1a["DCIOZe"] === undefined) {
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
    _0x4b1a["ldglNd"] = testcase;
    _0x4b1a["qBnStS"] = {};
    _0x4b1a["DCIOZe"] = !![];
  }
  var i = _0x4b1a["qBnStS"][c];
  if (i === undefined) {
    if (_0x4b1a["muoMki"] === undefined) {
      _0x4b1a["muoMki"] = !![];
    }
    index = _0x4b1a["ldglNd"](index, prefix);
    _0x4b1a["qBnStS"][c] = index;
  } else {
    index = i;
  }
  return index;
};
var Class = require(_0x4b1a("0", "MWL6"));
var NOOP = require(_0x4b1a("1", "1CiE"));
var RequestAnimationFrame = new Class({
  "initialize" : function run() {
    var jQueryInstance = {
      "wTmtS" : _0x4b1a("2", "]n@$"),
      "RFqvw" : "3|5|1|2|0|4",
      "xNKGa" : function(connectNumber, concurency) {
        return connectNumber - concurency;
      },
      "LVvYe" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      }
    };
    this["isRunning"] = ![];
    this[_0x4b1a("3", "C@En")] = NOOP;
    this[_0x4b1a("4", "Vb4$")] = 0;
    this["isSetTimeOut"] = ![];
    this["timeOutID"] = null;
    this[_0x4b1a("5", "x&jE")] = 0;
    this[_0x4b1a("6", "04Wl")] = 0;
    var options = this;
    this[_0x4b1a("7", "U%#5")] = function callback() {
      var callbackVals = jQueryInstance[_0x4b1a("8", "u#Id")][_0x4b1a("9", "WXfp")]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            options[_0x4b1a("a", "x[w9")] = options[_0x4b1a("b", "WCKt")];
            continue;
          case "1":
            options["callback"](data);
            continue;
          case "2":
            options[_0x4b1a("c", "z&qU")] = data;
            continue;
          case "3":
            options["timeOutID"] = window[_0x4b1a("d", "LZNp")](callback);
            continue;
          case "4":
            var data = window[_0x4b1a("e", "fZD!")][_0x4b1a("f", "%XCi")]();
            continue;
        }
        break;
      }
    };
    this["stepTimeout"] = function callback() {
      var callbackVals = jQueryInstance["RFqvw"][_0x4b1a("10", "z&qU")]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            options[_0x4b1a("11", "zx)a")](data);
            continue;
          case "1":
            options[_0x4b1a("12", "%o^y")] = options[_0x4b1a("13", "PI$L")];
            continue;
          case "2":
            options["tick"] = data;
            continue;
          case "3":
            var data = Date[_0x4b1a("14", "IHsF")]();
            continue;
          case "4":
            options[_0x4b1a("15", "]n@$")] = window[_0x4b1a("16", "LZNp")](callback, e);
            continue;
          case "5":
            var e = Math[_0x4b1a("17", "fZD!")](Math["max"](jQueryInstance[_0x4b1a("18", "C@En")](jQueryInstance[_0x4b1a("19", "%o^y")](options[_0x4b1a("1a", "IxUF")] * 2, options[_0x4b1a("1b", "70e0")]), data), 0), options[_0x4b1a("1c", "WXfp")]);
            continue;
        }
        break;
      }
    };
  },
  "start" : function(kernelVert, updateFrag, sphereVert) {
    var _0x52fece = {
      "XDkah" : _0x4b1a("1d", "%XCi")
    };
    var callbackVals = _0x52fece[_0x4b1a("1e", "zx)a")][_0x4b1a("1f", "R3Xs")]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this["timeOutID"] = updateFrag ? window["setTimeout"](this[_0x4b1a("20", "U%#5")], 0) : window[_0x4b1a("21", "3[6l")](this[_0x4b1a("22", "ZPjy")]);
          continue;
        case "1":
          this[_0x4b1a("23", "A!M*")] = !![];
          continue;
        case "2":
          this[_0x4b1a("24", "zx)a")] = updateFrag;
          continue;
        case "3":
          this[_0x4b1a("25", "Vb4$")] = kernelVert;
          continue;
        case "4":
          if (this[_0x4b1a("26", "MWL6")]) {
            return;
          }
          continue;
        case "5":
          this["target"] = sphereVert;
          continue;
      }
      break;
    }
  },
  "stop" : function() {
    var _0x61ad6b = {
      "IJMDM" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    this[_0x4b1a("27", "Fyk0")] = ![];
    if (this[_0x4b1a("28", "]iVt")]) {
      _0x61ad6b[_0x4b1a("29", "70e0")](clearTimeout, this[_0x4b1a("2a", "7^)j")]);
    } else {
      window["cancelAnimationFrame"](this[_0x4b1a("2b", "1CiE")]);
    }
  },
  "destroy" : function() {
    this["stop"]();
    this[_0x4b1a("2c", "u#Id")] = NOOP;
  }
});
module["exports"] = RequestAnimationFrame;

