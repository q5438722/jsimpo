'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wqLCqcODwo1Iw7NIw4fDkkfDhw5vX17DrTB0Lw/DuknDmUfDqzV9fsOdwp/Dh2U5XcKIAV1dw7wqw45awrDCvyw9wq19YFbDgBnCtcKsccKgL8K9w7QBw7EmOsKKw4Y3wo0iwrF2FBlIScK4dVpDRMKGGcOKwqPDnMOXVyrDtHcgw7NDC8KME8Ovw7jDqW/ChUXDuMOJwpHDnhcbwrDDhVHChjvDnXPCglbCv8KTwqXDvsKWw4EDRiwdw4TDpmFoFsKpwpwBASDDksKjYsKiRcK0wqQPFCLCgRXDu8KXw5pewpDCqcOyIMOMSBXCqMKrOSJ1eCxxw4Vfw6BQSV3CkcOww5BrQMKSwpkSJibCpgLDvMOvbsKxZiVUdMKkwropXid0woHCn0TDoyzDkcO0w6V1FWbCnsO+wodBw7/Dl8OlwrdYw4PCsC1BcMOWEmbCgn7DgG1Cd8KPwrDDvMOvwqM/QGJ3wrRHwqFWwrpzRQcqSxJ3HcKzdcKTw7HCoS/Cjw5SwrpbcmvCuwJ3w50NJMO9woE5wr0QKSFWJ0haJxvDlcKVw5hfAiANw5gJeVhCw4pL", 
"f8Knw5zDpQ==", "vipPAH.fv6UKqPgBWsRaV=="];
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
          if (type && str["replace"](/[PAHfUKqPgBWsRaV=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661923;
  };
  return fn(++count, size) >> count ^ size;
})(match, 253, 64768);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["zQSvLt"] === undefined) {
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
    fn["hjNRWR"] = testcase;
    fn["QKNUVD"] = {};
    fn["zQSvLt"] = !![];
  }
  var tmp3 = fn["QKNUVD"][i];
  if (tmp3 === undefined) {
    if (fn["LPnlBU"] === undefined) {
      fn["LPnlBU"] = !![];
    }
    x = fn["hjNRWR"](x, n);
    fn["QKNUVD"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x22c903 from "./utils/createSvgIcon";
import{
  jsx as _0x54b14d
}from "react/jsx-runtime";
export default _0x22c903(_0x54b14d(fn("0", "lm(T"), {
  "d" : fn("1", "1i()")
}), "LocalShippingOutlined");

