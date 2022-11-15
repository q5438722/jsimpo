'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wrfCmsKow48=", "NXxdwoXCuCcQwpYOwq7CtMO8Dy/CgcO5woTDrcKDw4LCtD4pNcKbw4rDunrCtkNFGsKAScOXw53CjWbCsGMBw4Rbw7lxCjBpw7jCjATCv2/DlFA8FMOXRhTCil0iw7FwwpfCugXCvsOEw5xBAMKkNVbCiMOIQGzDpjPDkUTCqMKWUB7DtMKtN1zDosOrbsKRw4PDqsK0wrlbWMOHwpIiGcOrw4vDusKPbMOAw7rCvhPDhFHCusKlVsKnwrI2PsOBKsOSw5AyTcKKwoTDqDXCjDBowpvCoRXDpnzDksOcXCIXXcOJw4nDiBXCpsOZw6dDw5Rgwo8rbHVifsO7w4BDw5HDiX55UAdXwqTClMKzwrbCjsOMw4snw7gew77CoMKWQMOjZwrCgFrDpBbChsKqbjTDgsKfw7zDiMOmEcKxw43CkH/CtF3Cj8KqNUHDtcOePMOvwqUnVGrDocOHw6vDqMKALj3Drn9Rwo4FMsOoXm3Dj282B8KmeUrCoSPDnsKnwqzDlMKuw7B5S8KnFcKxw6I=", 
"lwAvGBPiWpfKxND.vC6zthOd=="];
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
          if (type && str["replace"](/[lwAGBPWfKxNDCzthOd=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661908;
  };
  return fn(++count, size) >> count ^ size;
})(match, 338, 86528);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["dQnGre"] === undefined) {
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
    fn["kqkIps"] = testcase;
    fn["bONDDQ"] = {};
    fn["dQnGre"] = !![];
  }
  var tmp3 = fn["bONDDQ"][i];
  if (tmp3 === undefined) {
    if (fn["ehZKNi"] === undefined) {
      fn["ehZKNi"] = !![];
    }
    x = fn["kqkIps"](x, n);
    fn["bONDDQ"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x470166 from "./utils/createSvgIcon";
import{
  jsx as _0x2cbab9
}from "react/jsx-runtime";
export default _0x470166(_0x2cbab9(fn("0", "q]Qf"), {
  "d" : fn("1", "Q2D5")
}), "DoDisturbOff");

