'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w5soZX4=", "w4/Ch8OLdTZqEcOfwqXCmVLCvTksLUJTeMKsUTYLLzXDmXkFw6M/wpvCv8OEwoATFMKEw7wew6EHZ2vDoMKCb8OXwqvCp8OgZg80wogyERQfwqTDjS8sw7DCuEMuw5www4RWejDCvmvCkcOnesOsBgxBwqzDkcKTw5jDncODw5szwrADYsKgO8KYwonDhMOQHjXCrAw2wohAPMKJZMOUwp7DkMOKwrgbwowpCcKEw4PDsCfCocKwLznCjcOAw7XCmAciw6LDj20rJG3Dq8OTw7VXHD58CifDtUNQwqsVwpVYPMKcw6JvUMOxwpMlwq3DkcOITQ==", "w5jCmsK+V03DnkYePMKPc0BbK8KQ", "vAip.FvI6cOuYQhzqNwyrrk=="];
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
          if (type && str["replace"](/[AFIcOuYQhzqNwyrrk=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662655;
  };
  return fn(++count, size) >> count ^ size;
})(match, 330, 84480);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["rRAjRO"] === undefined) {
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
    fn["BZawBx"] = testcase;
    fn["aYaYAk"] = {};
    fn["rRAjRO"] = !![];
  }
  var tmp3 = fn["aYaYAk"][i];
  if (tmp3 === undefined) {
    if (fn["BEFaXD"] === undefined) {
      fn["BEFaXD"] = !![];
    }
    x = fn["BZawBx"](x, n);
    fn["aYaYAk"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x5b021c from "./utils/createSvgIcon";
import{
  jsx as _0xcd27c6
}from "react/jsx-runtime";
export default _0x5b021c(_0xcd27c6(fn("0", "o4NK"), {
  "d" : fn("1", "^P71")
}), fn("2", "!%LG"));

