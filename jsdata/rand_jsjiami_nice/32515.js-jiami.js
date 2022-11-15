'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "V8Orw7/Ctg==", "w4zCtsOqag3Cp1XDhcOGJH0xw73ChS1sD3DCjcKuwr8iEG90dhjCsVTDuX82MWbCu8KfO8Kuwodnw7ZYwrnCp0XCgsKuwqkEwq5sOsOHLcOAGsOOaSVTw71Pw4zDicK2w71ADETDpMOXw7bCtihBwqcWwqxFw5duwrkrAgPCusKJw5ZtDQMQwrPDslkPw6zDnMOxeHTDjkLDqA7Di21NMEM2TsO5w4DCoF93ZjBwwq8dfQHCqMKTw7c5NMOYcxM=", "CsO4CMOvw4M6fMKnYcKidMO/dAg=", "N8OKIcOt", "BMviqpQV.v6tEydEAbwVoCm=="];
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
          if (type && str["replace"](/[BMqQVtEydEAbwVoCm=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662635;
  };
  return fn(++count, size) >> count ^ size;
})(match, 191, 48896);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["NSJLQw"] === undefined) {
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
    fn["iCWWRN"] = testcase;
    fn["rhHQcM"] = {};
    fn["NSJLQw"] = !![];
  }
  var tmp3 = fn["rhHQcM"][i];
  if (tmp3 === undefined) {
    if (fn["jlvtsM"] === undefined) {
      fn["jlvtsM"] = !![];
    }
    x = fn["iCWWRN"](x, n);
    fn["rhHQcM"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x1139fb from "./utils/createSvgIcon";
import{
  jsx as _0x394998
}from "react/jsx-runtime";
export default _0x1139fb([_0x394998(fn("0", "YDTR"), {
  "d" : "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
}, "0"), _0x394998(fn("1", "0cVc"), {
  "d" : fn("2", "gv[s")
}, "1")], fn("3", "Dzjy"));

