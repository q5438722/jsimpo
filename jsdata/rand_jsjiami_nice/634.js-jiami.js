'use strict';
var vip = "vip.v6";
var _0x4768 = [vip, "O8KzPR7DsQ==", "w7ZFwqN4Vg==", "wrPCoxA/wqo=", "ZRcjZ8Oc", "w7V6alDCtQ==", "vipoeC.vUPO6wqycOhtzsf=="];
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
          if (value && str["replace"](/[oeCUPOwqycOhtzsf=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662121;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4768, 384, 98304);
var _0x5627 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4768[a];
  if (_0x5627["aFoXRE"] === undefined) {
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
    _0x5627["vQyeEG"] = testcase;
    _0x5627["ZPleEn"] = {};
    _0x5627["aFoXRE"] = !![];
  }
  var A = _0x5627["ZPleEn"][a];
  if (A === undefined) {
    if (_0x5627["xZLOjc"] === undefined) {
      _0x5627["xZLOjc"] = !![];
    }
    value = _0x5627["vQyeEG"](value, opt_max);
    _0x5627["ZPleEn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
function treeEqual(options, values) {
  var filters = {
    "HGckk" : function(geom0, geom1) {
      return geom0 && geom1;
    },
    "OcfYw" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "KgUix" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  if (filters[_0x5627("0", "s8@w")](!options, !values)) {
    return !![];
  }
  if (!options || !values) {
    return ![];
  }
  return filters[_0x5627("1", "F)zV")](options["val"], values["val"]) && filters[_0x5627("2", "Zowe")](treeEqual, options["left"], values["left"]) && treeEqual(options[_0x5627("3", "FF1V")], values[_0x5627("4", "2PPM")]);
}
;
