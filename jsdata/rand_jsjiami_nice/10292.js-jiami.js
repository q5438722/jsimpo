'use strict';
var path = "vip.v6";
var args = [path, "w7nCkwLCp0PCrw==", "UMOdasK9", "TvNgioxpN.v6ySMzULaObBMf=="];
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
          if (type && str["replace"](/[TNgoxNySMzULaObBMf=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661670;
  };
  return fn(++count, size) >> count ^ size;
})(args, 465, 119040);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = args[i];
  if (fn["eSgQtB"] === undefined) {
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
    fn["eWeKbR"] = testcase;
    fn["lLZGNv"] = {};
    fn["eSgQtB"] = !![];
  }
  var tmp3 = fn["lLZGNv"][i];
  if (tmp3 === undefined) {
    if (fn["UsClGX"] === undefined) {
      fn["UsClGX"] = !![];
    }
    x = fn["eWeKbR"](x, n);
    fn["lLZGNv"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x49f77d from "./commonTrads.json";
const config = (prefix, obj) => {
  return Object[fn("0", "Zdpx")](obj)[fn("1", "@xc)")]((result, index) => {
    result[prefix + "." + index] = obj[index];
    return result;
  }, _0x49f77d);
};
export default config;

