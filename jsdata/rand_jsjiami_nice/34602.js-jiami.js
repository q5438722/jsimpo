'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wpDDrC7Dv8KGOMKKw5ZdEcKKSj/DrsKswr0ewrYiPnxpw7YzRcONVcOcw7TCrsOqw6XCn3QdISRUWjjDscK8MmvCmMOGB1h3w6PCn1LDpsKzBMOeVMOSwoLDtTfChApPFMOYChxMG8KwwpDCo11vLAPCsMKBWgg2CsOMRRPDtsOhwrrDs8K9VX3Duz7DvgEmWBUawprDmsO6bsKCw4zCmCMGw7pPw63CkEZpw5LCs8OIw58MS8ONwq7CmmLCjEvCrcK1dRFdIG7CmmV8w6gBw5Ufw5nCs8Opbw17IsKNw5F/w7dZTmNpUsOmU8OSwrXCr8KwwohdMsK+aG7Dt052wqfCtz8Qw7DDjMKbwotxL3XDgsOwwpLCv3FPwr5AalXCocKYfUw5ZjZkw7XDvikSUz9AVVnDt0M1emfDscOewpl5VCQXwo3DgH5xScK+wq59wofCqcKuw5oJw5J2wqZ8fVnDuzjDhcKHw47DinEow59rw719w6hebHlDHMOPw5UiRMKWK2DCkSnCiytIwoFzcnvCnDp+wqouwpZrLcORwrzCoDpowovDgi4oHz02w77DvMOzWx3CvjrDl1nDrDIuw67CosOMw4TClsOZXiQrFcKUSTEBd1wLw4pNX8KgwpnDscO3UB8Cw74qwrLChBxsw6nDvQM=", 
"w53ChcK8wpo=", "oAsKviJbpmx.egkv6HPstnb=="];
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
          if (type && str["replace"](/[oAsKJbmxegkHPstnb=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662650;
  };
  return fn(++count, size) >> count ^ size;
})(match, 293, 75008);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["kuCtnV"] === undefined) {
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
    fn["IjDYZe"] = testcase;
    fn["VyGrlP"] = {};
    fn["kuCtnV"] = !![];
  }
  var tmp3 = fn["VyGrlP"][i];
  if (tmp3 === undefined) {
    if (fn["gVxiBg"] === undefined) {
      fn["gVxiBg"] = !![];
    }
    x = fn["IjDYZe"](x, n);
    fn["VyGrlP"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x2c2438 from "./utils/createSvgIcon";
import{
  jsx as _0x3faa2a
}from "react/jsx-runtime";
export default _0x2c2438(_0x3faa2a(fn("0", "Jy4]"), {
  "d" : fn("1", "N8pa")
}), "ScreenshotRounded");

