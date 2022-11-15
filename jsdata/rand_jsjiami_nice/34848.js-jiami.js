'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "OsKlG8OFwpzCgsKVKsOZfsKjcMKwb28fwrF6aMOALiNPwrh3wr3DmSXDsE7Dm8K6bsOiBglrIznDkVtmw5dRw5FPw6YEw43CksKdw7fCjHYeFsKkw7XCp2wCIsOWfjDCrwHDu8K7JMKdw47CusK2MsOrwoLDhGrDtMKMwp/CpmzCkcKON8ODwrN6w6oSw5XDm1tpDSbDvlPDk8Oqe3oRw6DCpW7CoRPDnsOowq3CnRozZMK9dF9qQx5oYsOrw7PCksKTYMOKFcKFQzjDoElBGRzCmcK4w5B8eW1lB8OywrpIQTF1wr3DtcORw7NnIR1IKMKawqAUw7ZWOMKZwqnCtBzDi8KcM8Ohw77Clm7CrsOpNlTDpEjDvsKEwojCtcOSw6bCt8KuesKqI8OtKsKlVgpUJHUxI8OvP3HCvMKOw5HDusK2Ow5HCRYhwr7DicOqSV7DjEbCrsOtw4wQw5rDgsKpRiAOEiBfw5rDlUglWiTCs3HDmkEDWGJ8RkHDqxY1dTfCm2DDgsKHA8KXIF8ewpswMC/DlmvDh8Odw68AGMOtwrUnwo/CnCtbwqBqXz0cPkMkTWbCswPDj8KVacKZw7c=", 
"VsOqwonDtEcLw4olw6zCvg==", "NviCPp.uvEN6USaBnFJQqn=="];
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
          if (type && str["replace"](/[NCPuENUSaBnFJQqn=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661911;
  };
  return fn(++count, size) >> count ^ size;
})(match, 210, 53760);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["knJLIT"] === undefined) {
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
    fn["FtlDgw"] = testcase;
    fn["FenqxD"] = {};
    fn["knJLIT"] = !![];
  }
  var tmp3 = fn["FenqxD"][i];
  if (tmp3 === undefined) {
    if (fn["kYjMQU"] === undefined) {
      fn["kYjMQU"] = !![];
    }
    x = fn["FtlDgw"](x, n);
    fn["FenqxD"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x4e36f5 from "./utils/createSvgIcon";
import{
  jsx as _0x184b13
}from "react/jsx-runtime";
export default _0x4e36f5(_0x184b13("path", {
  "d" : fn("0", "A04F")
}), fn("1", "9YD&"));

