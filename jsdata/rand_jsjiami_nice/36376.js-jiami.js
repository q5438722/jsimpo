'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "EhfDj37DrWXCkzbCnyrCisOLIGfCgnjCtMKQNxnCvDHCkQbDvUPCqFvDqMKpZMK5GRwiC8K7wq/DusKJb1xhGV7CscKlw6o+bMOmbjpqfsOVwqBCOHPDskvCrxDDmB7DomLCrkPDlcOyMcONwr7Dvk4BwphTw49cw4HCh8Orw7J2wpvCrcO1TcO9e8OnRGVJw57Dq2zDmA/ClRpbHUFuw4bCjsKzw5jDuRpmwoHCh8KfeRXDrcKWKQTCjX7Cr8KVdCN5w4BpASkqwobCmcONDsObesKgwp1nw53CnnFew7wzw4/DiFvDjsK9w6Y+wp5QNMKkwpDDmMKgAMOxRcOcw68fwpLDsMKzwpHCnho4BcK3TizCt8KKwoEYRlvDrSfDr3AWCcKkw603w43CrsOPw4HChD4rw57Cu8KZwqfDhcKxw6zDhMKGXMKKecK8ZcO+wprDsV3DgzrCu8Kww7/CksO+ZygTVgfDjMOVNS0swpXDpV9+HRLCrCxPKlvDjSXCnFvCq8Orw6zCosKCYg9Iw7TCjsKrw6XCuETCpA0Tw5xHZ3TDrUfCpgRAf07CrcKOwoF5X1PCi8KjN0tWQx0=", 
"w6h/wofClnLDkWUKw75aWcKkwqPCrExwwppt", "wqzDmXl8", "vijJpIAVFs.v6VyXEWGH=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[jJIAVFsVyXEWGH=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661922;
  };
  return fn(++count, size) >> count ^ size;
})(match, 152, 38912);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["fxXIIw"] === undefined) {
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
    fn["ivZSvW"] = testcase;
    fn["pzYoZY"] = {};
    fn["fxXIIw"] = !![];
  }
  var tmp3 = fn["pzYoZY"][i];
  if (tmp3 === undefined) {
    if (fn["QhruYt"] === undefined) {
      fn["QhruYt"] = !![];
    }
    x = fn["ivZSvW"](x, n);
    fn["pzYoZY"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x3de784 from "./utils/createSvgIcon";
import{
  jsx as _0x183324
}from "react/jsx-runtime";
export default _0x3de784(_0x183324(fn("0", "tr*g"), {
  "d" : fn("1", "ewja")
}), fn("2", "pp3M"));
