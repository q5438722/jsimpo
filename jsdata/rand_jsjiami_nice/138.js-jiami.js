'use strict';
var vip = "vip.v6";
var _0x58e3 = [vip, "WTonWMK9MkEhQw==", "Bl1e", "c8KecsO4wo4=", "RMO6w74bQzJKYho=", "Onl6wq9Y", "w5JuUcKZw7N2wonDlsKSImHCkw==", "w5x4dw==", "w5bCkMKkXWsWwrbCmkbCk8K+wr1ScyzCmg==", "EHlr", "OMKGenVxNsKqABE=", "DnTCiw==", "JcOuwrEbRHM=", "w6Ybw5bCvwdAUMOw", "Yw9lwq7Dvw==", "U1bCs8OYwpc=", "w59+w5PDvxI=", "G15ZO8Oi", "w5nCrsKOw47CpQ==", "w4l7SMKxw7A=", "JWBMwq3Cug==", "L3QvcsKO", "LFhhbBA=", "wo7Cu2HCl3jDtw==", "woQpb8KSw5PDmsKGJ8OB", "OcOvwqoZVFRHwrHCuw==", "wrRZwrXDjBnCng==", "W8Orw78OUgk=", "EkxFwqbCiA==", 
"cMKBMAPCmg==", "wpERH0cx", "RS1fwqjDgGDDvA==", "wrhDwqzDjAXChi4=", "DGnCj8KDOkDClg==", "w5PCocODJ8Kgf8Odw68=", "wpIqYsK8w7A=", "w6fDpsOYw7TDgzQ=", "w5dUw6QVw5nDpFw9woMM", "w4LCocOfIcKn", "w6cKw57CpBE=", "UcKDwodpworDncOwTMK6", "JEvsiMp.FFvyG6lQxUDYXT=="];
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
          if (value && str["replace"](/[JEsMFFyGlQxUDYXT=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661705;
  };
  return fn(++count, long) >> count ^ long;
})(_0x58e3, 113, 28928);
var _0x4a9f = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x58e3[c];
  if (_0x4a9f["snpUTl"] === undefined) {
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
    _0x4a9f["pmKLZd"] = testcase;
    _0x4a9f["LkiGoW"] = {};
    _0x4a9f["snpUTl"] = !![];
  }
  var e = _0x4a9f["LkiGoW"][c];
  if (e === undefined) {
    if (_0x4a9f["BoRgNG"] === undefined) {
      _0x4a9f["BoRgNG"] = !![];
    }
    x = _0x4a9f["pmKLZd"](x, alpha);
    _0x4a9f["LkiGoW"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const {
  extname : extname
} = require("path");
const Promise = require(_0x4a9f("0", "0JSx"));
const getExtname = (str) => {
  var _0x332589 = {
    "fqbCJ" : function(value, joiner) {
      return value !== joiner;
    }
  };
  if (_0x332589[_0x4a9f("1", "JFNY")](typeof str, _0x4a9f("2", "NJ!P"))) {
    return "";
  }
  const _0x441bb2 = extname(str) || str;
  return _0x441bb2[_0x4a9f("3", "nETb")](".") ? _0x441bb2[_0x4a9f("4", "0JSx")](1) : _0x441bb2;
};
class Renderer {
  constructor() {
    this[_0x4a9f("5", "wiRA")] = {};
    this[_0x4a9f("6", "bWYw")] = {};
  }
  ["list"](canCreateDiscussions) {
    return canCreateDiscussions ? this[_0x4a9f("7", "*N48")] : this["store"];
  }
  [_0x4a9f("8", "fa*E")](DEFAULT, permissionsHooks) {
    var hookFnArgs = {
      "zSKGa" : _0x4a9f("9", "]i#)"),
      "roGdP" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const helperCollection = this[permissionsHooks ? _0x4a9f("a", "76cP") : hookFnArgs["zSKGa"]];
    return helperCollection[hookFnArgs[_0x4a9f("b", "1wM9")](getExtname, DEFAULT)] || helperCollection[DEFAULT];
  }
  [_0x4a9f("c", "PWgE")](PL$63) {
    var PL$22 = {
      "mryrb" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    return PL$22["mryrb"](Boolean, this[_0x4a9f("d", "PWgE")](PL$63));
  }
  [_0x4a9f("e", "jS)m")](i) {
    return Boolean(this[_0x4a9f("f", "ONzE")](i, !![]));
  }
  [_0x4a9f("10", "znnl")](mmCoreSplitViewBlock) {
    const enable_keys = this[_0x4a9f("11", "7#tU")](mmCoreSplitViewBlock);
    return enable_keys ? enable_keys[_0x4a9f("12", "Q]Ky")] : "";
  }
  [_0x4a9f("13", "wiRA")](key, result, response, canCreateDiscussions) {
    var gl = {
      "KrOsC" : "name is required",
      "hNclG" : "function",
      "YAwCH" : "fn must be a function",
      "rfKMm" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "DXfyW" : function(value, joiner) {
        return value !== joiner;
      },
      "dzcSt" : _0x4a9f("14", "np8#"),
      "Pjirc" : function(_num1, _num2) {
        return _num1 > _num2;
      }
    };
    if (!key) {
      throw new TypeError(gl[_0x4a9f("15", "#&tj")]);
    }
    if (!result) {
      throw new TypeError("output is required");
    }
    if (typeof response !== gl[_0x4a9f("16", "Ln5k")]) {
      throw new TypeError(gl[_0x4a9f("17", "IWfJ")]);
    }
    key = gl[_0x4a9f("18", "XZt5")](getExtname, key);
    result = gl[_0x4a9f("19", "PWgE")](getExtname, result);
    if (canCreateDiscussions) {
      if (gl[_0x4a9f("1a", "fa*E")](gl[_0x4a9f("1b", "zy@[")], gl[_0x4a9f("1c", "pU5U")])) {
        if (response[_0x4a9f("1d", "bZhE")] > 2) {
          response = Promise[_0x4a9f("1e", "JFNY")](response);
        }
        this["store"][key] = response;
      } else {
        this[_0x4a9f("1f", "Q]Ky")][key] = response;
        this["storeSync"][key][_0x4a9f("20", "wpYX")] = result;
        this["store"][key] = Promise["method"](response);
      }
    } else {
      if (gl["Pjirc"](response[_0x4a9f("21", "76cP")], 2)) {
        response = Promise["promisify"](response);
      }
      this[_0x4a9f("22", "fa*E")][key] = response;
    }
    this[_0x4a9f("23", "iEzk")][key]["output"] = result;
    this[_0x4a9f("24", "qwaX")][key][_0x4a9f("25", "np8#")] = response[_0x4a9f("26", "wpYX")];
  }
}
module[_0x4a9f("27", "7#tU")] = Renderer;

