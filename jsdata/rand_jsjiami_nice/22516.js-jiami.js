'use strict';
var vip = "vip.v6";
var _0x49e9 = [vip, "XmLCosOmw7zCv8KawrnDs8OiwodwRcO8ccOSwpkUw6hdwq/CsSVDfFc=", "wr3Cg8OHJsK2Y8OqcMOQw75tw4LDhkcrw69xd24zLn8nQMKl", "wpTDusOdSl8a", "woNbw5k=", "O8O7U0vCosONW8KnUcKQwoNhGcKb", "XsKOfsOFw7Njw5ElVHLChRbDonU=", "wr7CkgQIw4zDgcKuEcOjw4rDtsOrwp7DnmLDl2rCrzrCuEZNwp/DpsO1wpI=", "vip.vXwVyd6ruUMsYAqYyzzh=="];
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
          if (value && str["replace"](/[XwVydruUMsYAqYyzzh=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662580;
  };
  return fn(++count, long) >> count ^ long;
})(_0x49e9, 337, 86272);
var _0x12d2 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x49e9[a];
  if (_0x12d2["hBExxw"] === undefined) {
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
    _0x12d2["cZUViD"] = testcase;
    _0x12d2["KzPwUJ"] = {};
    _0x12d2["hBExxw"] = !![];
  }
  var A = _0x12d2["KzPwUJ"][a];
  if (A === undefined) {
    if (_0x12d2["wwnBJK"] === undefined) {
      _0x12d2["wwnBJK"] = !![];
    }
    value = _0x12d2["cZUViD"](value, opt_max);
    _0x12d2["KzPwUJ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var _client = babelHelpers[_0x12d2("0", "hKjO")](_0x12d2("1", "IyCi"));
var Foo = function FlyCam(coords) {
  var _0x2dd75b = {
    "lPhLB" : _0x12d2("2", "GKEt")
  };
  "use strict";
  babelHelpers[_0x12d2("3", "3aUC")](this, FlyCam);
  Object[_0x12d2("4", "u@gE")](this, _client, {
    "writable" : !![],
    "value" : void 0
  });
  babelHelpers[_0x12d2("5", "vkFw")](this, _client)[_client] = _0x2dd75b["lPhLB"];
  ({
    x : this["x"] = babelHelpers["classPrivateFieldLooseBase"](this, _client)[_client],
    y : babelHelpers[_0x12d2("6", "NWT%")](this, _client)[_client],
    z : this["z"] = babelHelpers["classPrivateFieldLooseBase"](this, _client)[_client]
  } = coords);
};

