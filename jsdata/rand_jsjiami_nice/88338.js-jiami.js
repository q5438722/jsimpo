'use strict';
var vip = "vip.v6";
var _0x515e = [vip, "AsKvJMOYw6s=", "CsKVbQnDtcKcwqbClw==", "w5Qtw4zDoMKw", "JlXDg8KrRw==", "FzPDgSnDjsKsShw=", "UBjCjlTChw==", "NcKPw53CjcK5agJE", "XcK8wpc1ChAfwrJzDyFBEUIOw5dxw67CnD8=", "eVnDvgZU", "w5I0w6bCusObEsKhcA==", "cGnDr8OxNg==", "PFXDlFLDig==", "EUFHI8Kx", "IsOYYkMJT8KUCTvDng==", "w4oTw5vDp8KLJh8cw6tj", "w5rCssO9cwnCv8OHwpHDgcK7BBxsw78MZ1xTw5fDn8KM", "ccKIb3gswow=", "wqoSw54=", "wpXDgMKWwr7CsA==", "OcKzDQ==", "vijCpq.ve6UBnaQzEDQExcym=="];
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
          if (value && str["replace"](/[jCqeUBnaQzEDQExcym=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662338;
  };
  return fn(++count, long) >> count ^ long;
})(_0x515e, 329, 84224);
var _0x345d = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x515e[a];
  if (_0x345d["rekSRn"] === undefined) {
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
    _0x345d["XfoFNx"] = testcase;
    _0x345d["efVgLq"] = {};
    _0x345d["rekSRn"] = !![];
  }
  var A = _0x345d["efVgLq"][a];
  if (A === undefined) {
    if (_0x345d["aaGfnQ"] === undefined) {
      _0x345d["aaGfnQ"] = !![];
    }
    value = _0x345d["XfoFNx"](value, opt_max);
    _0x345d["efVgLq"][a] = value;
  } else {
    value = A;
  }
  return value;
};
Package[_0x345d("0", "h)BK")]({
  "summary" : "Tests for the boilerplate-generator package",
  "version" : _0x345d("1", "J]D4"),
  "documentation" : null
});
Npm["depends"]({
  "parse5" : _0x345d("2", "kLNx"),
  "stream-to-string" : _0x345d("3", "&B]#")
});
Package["onTest"](function(movieElement) {
  var argumentArray = {
    "sDwPb" : _0x345d("4", "Odfu"),
    "NoLzR" : _0x345d("5", "$4hf"),
    "kPsbI" : _0x345d("6", "Xot["),
    "WqfzI" : _0x345d("7", "5bcU")
  };
  movieElement[_0x345d("8", "TpuG")](argumentArray[_0x345d("9", "hIcM")]);
  movieElement[_0x345d("a", "*h2l")]([argumentArray[_0x345d("b", "*h2l")], _0x345d("c", "NESp"), argumentArray[_0x345d("d", "$4hf")]], argumentArray[_0x345d("e", "y2%U")]);
  movieElement[_0x345d("f", "V%XG")]("web.browser-tests.js", argumentArray[_0x345d("10", "r9vK")]);
  movieElement[_0x345d("11", "dI$1")](_0x345d("12", "v]U$"), argumentArray[_0x345d("13", "dsHi")]);
});

