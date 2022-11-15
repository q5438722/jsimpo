'use strict';
var vip = "vip.v6";
var _0x13bd = [vip, "H3vDkRBCaMKO", "MlDDiQMWwpPCknM=", "w4NhVsO5Jw==", "w6LCu3HDlG7DkA==", "FWHDixpTaA==", "EiV4w7bDpcKU", "wpfDpcO7", "RMOGSsK3wpRyw4B+G8OUwqDDpwY=", "wpNJwp0yw5/Dk8KqPXY=", "CXfDkx5AdcOQw57Du8KFPUc=", "w5TCo8O2wobDunMmw5A=", "PviVooOpV.vDO6CaXFeGrjyZ=="];
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
          if (value && str["replace"](/[PVooOVDOCaXFeGrjyZ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661685;
  };
  return fn(++count, long) >> count ^ long;
})(_0x13bd, 108, 27648);
var _0x36d9 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x13bd[a];
  if (_0x36d9["oFNUUn"] === undefined) {
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
    _0x36d9["LLWKlj"] = testcase;
    _0x36d9["blLEOc"] = {};
    _0x36d9["oFNUUn"] = !![];
  }
  var A = _0x36d9["blLEOc"][a];
  if (A === undefined) {
    if (_0x36d9["lomnKn"] === undefined) {
      _0x36d9["lomnKn"] = !![];
    }
    value = _0x36d9["LLWKlj"](value, opt_max);
    _0x36d9["blLEOc"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const yup = require("yup");
const {
  formatYupErrors : formatYupErrors
} = require(_0x36d9("0", "DdZM"));
const {
  isValidCategoryName : isValidCategoryName
} = require(_0x36d9("1", "B0Iw"));
module[_0x36d9("2", "DdZM")] = (mmCoreSplitViewBlock) => {
  return componentCategorySchema[_0x36d9("3", "8^Tc")](mmCoreSplitViewBlock, {
    "strict" : !![],
    "abortEarly" : ![]
  })[_0x36d9("4", "1()c")]((mmCoreSplitViewBlock) => {
    return Promise[_0x36d9("5", "z8]8")](formatYupErrors(mmCoreSplitViewBlock));
  });
};
const componentCategorySchema = yup[_0x36d9("6", "DdZM")]({
  "name" : yup[_0x36d9("7", "6bEi")]()[_0x36d9("8", "B0Iw")](3)["test"](isValidCategoryName)["required"](_0x36d9("9", "]IHa"))
})[_0x36d9("a", "LCZy")]();

