'use strict';
var vip = "vip.v6";
var _0xbe9e = [vip, "w5rCqcKYwqcp", "w7HCrMK0wow5HlPDqsOtTcO0GVhf", "LlLDmsO+w4APTcOyUsODS8Oxw41DwpHCmnxSwopIwo5GTVnDryzDv8Odwr02TinDow3DvsKeW8KVSsOF", "aAXCncOKN2TCsw==", "U8O5w7IXwp11woNnwo7DlA==", "w7zDq3PCosKRc0rDkkbDkcO1", "wrvCowrCmADCgwA=", "H3jDtQ==", "YTviaQbp.Jv6fcVUTaFgTYqo=="];
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
          if (value && str["replace"](/[YTaQbJfcVUTaFgTYqo=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662089;
  };
  return fn(++count, long) >> count ^ long;
})(_0xbe9e, 210, 53760);
var _0x3309 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xbe9e[a];
  if (_0x3309["jsBxoo"] === undefined) {
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
    _0x3309["VDTEbX"] = testcase;
    _0x3309["nGrjWS"] = {};
    _0x3309["jsBxoo"] = !![];
  }
  var A = _0x3309["nGrjWS"][a];
  if (A === undefined) {
    if (_0x3309["ZdlzFE"] === undefined) {
      _0x3309["ZdlzFE"] = !![];
    }
    value = _0x3309["VDTEbX"](value, opt_max);
    _0x3309["nGrjWS"][a] = value;
  } else {
    value = A;
  }
  return value;
};
load(_0x3309("0", "45@1"));
var builder = new WasmModuleBuilder;
builder["addFunction"]("mul", kSig_f_ff)[_0x3309("1", "^*7e")]([kExprLocalGet, 0, kExprLocalGet, 1, kExprF32Mul])[_0x3309("2", "!mn0")]();
const instance = builder[_0x3309("3", "3Y4O")]();
const wasm_f = instance[_0x3309("4", "nd(T")][_0x3309("5", "8Rkg")];
function f() {
  var _0x56eb42 = {
    "MiCJd" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var resultToDisplay = _0x56eb42[_0x3309("6", "weXD")](wasm_f, 12, 3.5);
  return resultToDisplay;
}
try {
  let bytelen = f();
  print(_0x3309("7", "weXD") + bytelen);
} catch (bytelen) {
  print("*exception:* " + bytelen);
}
;
