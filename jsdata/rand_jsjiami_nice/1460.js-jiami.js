'use strict';
var vip = "vip.v6";
var _0x5f52 = [vip, "fklywp5LUC8=", "woTDjhs=", "eER4w6XDkcKkGw==", "wqkRTgHCrsKwwovDgEdfwqNhH1DDs1LDp21YwrNedjTDimkJwrrCocKS4oOr", "UBnCh8K7NMO7", "EHnCsXw=", "wrovVcOnwopkeg==", "GcK5RmJoJsO0", "EH/CsnVPN8K1", "w6w/w7QAeXZpC2Npwpc=", "wplPwqzCh8Ksw4HClcOHwqzCkSLDhQ==", "S8OGw7c0wr4dw6XCncKMCWIe", "wpZ/w58AJw==", "a8OvwrzDgsKRbsO/", "DMKyTQ==", "wrfCpk4iNQ==", "wqkOEm9X", "HsKQbsKFw7k=", "Mm7CosOOXU84", "wpgdw7nDtsOiFmlzw4HCgG4Gwqk8IcK3IH/CsTPDmMOCeSttNhcfcnN0wrPDisK8", "NsKkw648w7c=", "VUEPDMOj", 
"Vw7ClsK7I8O2V3wQCzrDscOm", "c8KiLnE=", "w6nDksK3P1rCoMKe", "RMOywqTDn1TDoAY=", "wojDrsKCNH4sw4rDgiViwrI=", "wprDrsKbP34tw7s=", "wpjCoF3Cgh4ew77DuMKs", "QMO6wqXDoFjDqRpmBMKAIhQ=", "abmORXevbip.Pwv6BDxosJ=="];
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
          if (value && str["replace"](/[abmORXebPwBDxosJ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662545;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5f52, 249, 63744);
var _0x44c0 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x5f52[c];
  if (_0x44c0["jRAxRW"] === undefined) {
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
    _0x44c0["HVshbJ"] = testcase;
    _0x44c0["QjfPaL"] = {};
    _0x44c0["jRAxRW"] = !![];
  }
  var e = _0x44c0["QjfPaL"][c];
  if (e === undefined) {
    if (_0x44c0["kxdlNX"] === undefined) {
      _0x44c0["kxdlNX"] = !![];
    }
    x = _0x44c0["HVshbJ"](x, alpha);
    _0x44c0["QjfPaL"][c] = x;
  } else {
    x = e;
  }
  return x;
};
module["exports"] = class QuickBase {
  constructor(options) {
    var textHash = {
      "jTZSr" : _0x44c0("0", "AQX#"),
      "OWTQO" : "loading",
      "OiVPV" : "loading-spinner-tiny",
      "xJZxk" : _0x44c0("1", "$f0d"),
      "cgOHJ" : _0x44c0("2", "uTL@")
    };
    var callbackVals = textHash["jTZSr"][_0x44c0("3", "TkSn")]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this[_0x44c0("4", "F)#e")]["classList"][_0x44c0("5", "xY]A")](textHash[_0x44c0("6", "CSiQ")], textHash[_0x44c0("7", "N%x%")], textHash[_0x44c0("8", "FG5i")]);
          continue;
        case "1":
          this[_0x44c0("9", "8h9$")]["classList"]["add"](_0x44c0("a", "B1jy"), textHash[_0x44c0("b", "lbvZ")], textHash[_0x44c0("c", "v@TA")]);
          continue;
        case "2":
          this["spinner"] = document[_0x44c0("d", "iFsv")](_0x44c0("e", "xlZ7"));
          continue;
        case "3":
          this[_0x44c0("f", "ft%o")] = document["createElement"]("update-package-dependencies-status");
          continue;
        case "4":
          this[_0x44c0("10", "XeW)")][_0x44c0("11", "bFda")](this[_0x44c0("12", "bFda")]);
          continue;
        case "5":
          this[_0x44c0("13", "7b2d")] = options;
          continue;
      }
      break;
    }
  }
  ["attach"]() {
    this["tile"] = this["statusBar"][_0x44c0("14", "XeW)")]({
      "item" : this[_0x44c0("15", "DwGu")]
    });
    this["tooltip"] = atom["tooltips"][_0x44c0("16", "S9zU")](this[_0x44c0("17", "7DSd")], {
      "title" : _0x44c0("18", "]xQE")
    });
  }
  [_0x44c0("19", "iFsv")]() {
    if (this[_0x44c0("1a", "nsUa")]) {
      this["tile"][_0x44c0("1b", "M3*2")]();
    }
    if (this[_0x44c0("1c", "xY]A")]) {
      this[_0x44c0("1d", "nsUa")]["dispose"]();
    }
  }
};

