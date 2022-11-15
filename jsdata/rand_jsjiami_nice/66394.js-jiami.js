'use strict';
var vip = "vip.v6";
var _0x7576 = [vip, "LkBDwrk=", "w454w53Dhno=", "w58QwpDCk8Ovw4LClA==", "w7hjY8OQwoc=", "w6Jzw5fDrg==", "w40ywrrDmcOD", "wpLCqMOVwqERw7rDow==", "PcKewpfCgQ4Z", "NMKawr80w40=", "P3BKwq4E", "VQzClFsp", "Ilwrw5pbWG4=", "DcONCj8y", "PyPDnMKPCA==", "VsKFwrnDtA==", "XktRag==", "Q8OWwofDiw==", "w4nCjMK4w5jCpT3DjMOVwqdJ", "AkAHw5p8", "EC7DrMKnIy0=", "w6zDpMOwwozDoFg=", "LcOGw4jDoWjDjg==", "VMKlw4tAfT04Xg==", "w6bCpzvCgg==", "w59HwrPCjGY=", "wplhPcOz", "vufqnMMiWp.vQbBx6srDBzzh=="];
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
          if (value && str["replace"](/[ufqnMMWQbBxsrDBzzh=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662824;
  };
  return fn(++count, long) >> count ^ long;
})(_0x7576, 280, 71680);
var _0x54e5 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x7576[c];
  if (_0x54e5["fvbItz"] === undefined) {
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
    _0x54e5["wVneFG"] = testcase;
    _0x54e5["qYyhSN"] = {};
    _0x54e5["fvbItz"] = !![];
  }
  var e = _0x54e5["qYyhSN"][c];
  if (e === undefined) {
    if (_0x54e5["XtSwbH"] === undefined) {
      _0x54e5["XtSwbH"] = !![];
    }
    x = _0x54e5["wVneFG"](x, alpha);
    _0x54e5["qYyhSN"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
var crypto = require(_0x54e5("0", "SbD)"));
function sha1(data) {
  var b = {
    "yQpWx" : function(name, initialValue) {
      return name === initialValue;
    },
    "KdWMX" : _0x54e5("1", "mwi4"),
    "JyeEN" : _0x54e5("2", "uV]W"),
    "pTHUl" : _0x54e5("3", "H*sC"),
    "kPVro" : function(name, initialValue) {
      return name === initialValue;
    },
    "hKXmc" : function(name, initialValue) {
      return name === initialValue;
    },
    "GfPTs" : _0x54e5("4", "%5mb"),
    "IomrU" : _0x54e5("5", "jD@3")
  };
  if (b["yQpWx"](typeof Buffer[_0x54e5("6", "fVvF")], b[_0x54e5("7", "%RE%")])) {
    if (Array[_0x54e5("8", "WOgs")](data)) {
      data = Buffer["from"](data);
    } else {
      if (b["yQpWx"](typeof data, b[_0x54e5("9", "v*Fh")])) {
        data = Buffer[_0x54e5("a", "%RE%")](data, b[_0x54e5("b", "7)*7")]);
      }
    }
  } else {
    if (Array[_0x54e5("c", "pZfP")](data)) {
      data = new Buffer(data);
    } else {
      if (b["kPVro"](typeof data, _0x54e5("d", "v8Zc"))) {
        if (b[_0x54e5("e", "!%0T")](_0x54e5("f", "fVvF"), b[_0x54e5("10", "MNIW")])) {
          if (Array[_0x54e5("11", "rcYX")](data)) {
            data = Buffer["from"](data);
          } else {
            if (b[_0x54e5("12", "0szB")](typeof data, b[_0x54e5("13", "8xu(")])) {
              data = Buffer[_0x54e5("14", "pruE")](data, _0x54e5("15", "w2Oy"));
            }
          }
        } else {
          data = new Buffer(data, _0x54e5("16", "E2qe"));
        }
      }
    }
  }
  return crypto[_0x54e5("17", "RPO5")](b[_0x54e5("18", "rcYX")])["update"](data)[_0x54e5("19", "8xu(")]();
}
module["exports"] = sha1;

