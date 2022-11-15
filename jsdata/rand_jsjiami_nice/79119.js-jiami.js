'use strict';
var vip = "vip.v6";
var _0x201b = [vip, "N8KkwrQGMcOD", "wrPDqxtzwpQ=", "w7grEXbCp8KI", "w7NWMcOtw7cww7ANwqU=", "wroww5hew4jCrsKV", "MnLDu8KxCGrDgCUXw4JmOX/CjQ==", "G8OwYcOLenXDuk7Ci8K5", "w7YvGg==", "BcOlwr/CnsKPRMKcSQJB", "SAAow7E=", "w5t/FcKUS8OIw6NMwpdlacOqY1XDhho0w4YsVGVkN2vCq8KJwpzCn8KGCsKew5HDlMOYKy5fEhbDp2MOw7zDk8OPwpvDpU5qKsOxZ8K9NcKPLcOtw7cIw4TChcKfMsOxAR/DusK3w77DgcKAwpckwqNRw7tEwqhMXcO7w5nCo8KqwodDHBdHIl80IiEad8K7w7/CnhLDiwPDtiozwr8swocVwpJhA8OiMwILw7PCp8KvbsKowoDCscK5wrPDhBbClsO3w6oBwp3DscKqNcKew71Sw6Mqw6/CuAdZHsKpAMOAUsOqAGPDv1cPwpDCmsKfw7dPfsKteggcwqPCi8OicHAYVMOOT1cEfSoRwqhnw7zCjwjCgsKLw60=", 
"w6nDkH9wWRx1RcOmOW3Dgg==", "I8KzwrcJNsOSw7YXN8Ou", "UvZihp.Dv6wSMEKebszTzmz=="];
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
          if (value && str["replace"](/[UZhDwSMEKebszTzmz=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662256;
  };
  return fn(++count, long) >> count ^ long;
})(_0x201b, 395, 101120);
var _0xe3d7 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x201b[a];
  if (_0xe3d7["MRbQza"] === undefined) {
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
    _0xe3d7["WYeUah"] = testcase;
    _0xe3d7["hUQpfL"] = {};
    _0xe3d7["MRbQza"] = !![];
  }
  var A = _0xe3d7["hUQpfL"][a];
  if (A === undefined) {
    if (_0xe3d7["dzyLJm"] === undefined) {
      _0xe3d7["dzyLJm"] = !![];
    }
    value = _0xe3d7["WYeUah"](value, opt_max);
    _0xe3d7["hUQpfL"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
Object[_0xe3d7("0", "l9dn")](exports, _0xe3d7("1", "mXPw"), {
  "value" : !![]
});
var prefix = _0xe3d7("2", "OU][");
var iconName = _0xe3d7("3", "kz0P");
var width = 384;
var height = 512;
var ligatures = [];
var unicode = _0xe3d7("4", "JM6U");
var svgPathData = _0xe3d7("5", "hNdc");
exports["definition"] = {
  "prefix" : prefix,
  "iconName" : iconName,
  "icon" : [width, height, ligatures, unicode, svgPathData]
};
exports[_0xe3d7("6", "yzYI")] = exports[_0xe3d7("7", "Vg[*")];
exports[_0xe3d7("8", "Vg[*")] = prefix;
exports["iconName"] = iconName;
exports[_0xe3d7("9", "nPnQ")] = width;
exports[_0xe3d7("a", "OU][")] = height;
exports[_0xe3d7("b", "S4cD")] = ligatures;
exports[_0xe3d7("c", "L@BI")] = unicode;
exports["svgPathData"] = svgPathData;

