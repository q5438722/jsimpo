'use strict';
var vip = "vip.v6";
var _0x4f5b = [vip, "OcKScC1zwq4=", "w7XDkQDCjR/CjxzCjsOeQnfDi8Odwps=", "LsOhTMOfGsOoUw==", "JinDqMOiKnkHwo53w7MdMw==", "RH9/SsOCw74=", "PcKQVRtm", "ScOvw5rChTzCiw==", "w6vDk1zCnMKiw4UGFXIOGcO5Iw==", "vXip.FoYBNPVvB6nTXttXuI=="];
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
          if (value && str["replace"](/[XFoYBNPVBnTXttXuI=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662039;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4f5b, 417, 106752);
var _0x5751 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4f5b[a];
  if (_0x5751["GseuKd"] === undefined) {
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
    _0x5751["njclLv"] = testcase;
    _0x5751["vmlpFL"] = {};
    _0x5751["GseuKd"] = !![];
  }
  var A = _0x5751["vmlpFL"][a];
  if (A === undefined) {
    if (_0x5751["Vgfhaw"] === undefined) {
      _0x5751["Vgfhaw"] = !![];
    }
    value = _0x5751["njclLv"](value, opt_max);
    _0x5751["vmlpFL"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
Object[_0x5751("0", "S@GA")](exports, "__esModule", {
  "value" : !![]
});
exports[_0x5751("1", "gIJR")] = _default;
var t = require(_0x5751("2", "f7*j"));
function _default(fx) {
  var ALIGN = {
    "hgKQa" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  const widths = fx[_0x5751("3", "vgTS")];
  for (let c = 0; ALIGN[_0x5751("4", "&IkP")](c, widths[_0x5751("5", "aNcd")]); c++) {
    const param = widths[c];
    if (t["isAssignmentPattern"](param) || t[_0x5751("6", "0GoZ")](param)) {
      return c;
    }
  }
  return widths[_0x5751("7", "&IkP")];
}
;
