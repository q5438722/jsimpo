'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wrHDqMOvNw==", "w4xow67DrcOGDsO6w73DiMOwRWvDoXA8TlfDvnkrw5DCrjPDq8Ktwr1NPlEcJjwLw6bCnR1rMTbDhsO8w6rDj8K4dH3CmFfClMOaw41owozCncOvw7nCn8OzeCfDiQ8Gd2fDhS7ClFAkbMOiw69wLGxMwpQHVcOaEz7CjMOuwozClzQmOy/ChmDDjnN0LCQdHHDDjcKVw5okw4/Dt1jCmEXDqsOwLMKMB8Kiw40zw6DCtMKOw7vDncKRTV7Dn8O2wpLDhsOqRihkwr/DkD/Do353OcOiwrFPaFcgwrx3WB7DtsKMfHrDq8OZwqdhwpfDq8Oww4ZYw4jCh1FadMObTFbChAHDiMKBw5bCosKxw4zDpQfCiwnDuVjCuXPDg1lGXi5ow4/CnWnDpS84PlhRPMKmQsKbw5LDqQhMw6YZZjsyGQvDklJowp3CusKjGVDDtTovK8KjEsOzwpDDqg/CnQ7CkR3Dt8Oxw7EGaSDCkMKOwo93DsKPw4DDicKIw6rDhnpww5rDmzPCvEgJBsKDcH7Cpgl+L3kywrfDkX/CoXh0AcK2BSDDkcKHYSN9RsK4XsOFw5/DpMOxLmfDjhk9wo7Dvz7Dhw==", 
"ajJmXgvCqhXDikDClMKdN2wlHcOVwo3DtwrCmijDp8OzwowWwopcT8KOw4RPJyASwpd0wpVUR3bCrMOVZcO8HGLCvMKewqbCicKOwpUdwrnDkFnDkFnCghTDgsKpKDPCt8OPw5fCoEDCssO8w7Y6O8Orw4ZmwrJ1w7cmw5HCksOJwqfCrG5UdygcwrgQM8Ojwqt+acKxUi/DlcKlIgfDl0dLPyvCvVIeGy/CoDtjw4jClQ==", "LtOvTipn.bvV6HXzuKRUXTPy=="];
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
          if (type && str["replace"](/[LtOTnbVHXzuKRUXTPy=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661873;
  };
  return fn(++count, size) >> count ^ size;
})(match, 389, 99584);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["QraZQw"] === undefined) {
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
    fn["JevgML"] = testcase;
    fn["jilbTo"] = {};
    fn["QraZQw"] = !![];
  }
  var tmp3 = fn["jilbTo"][i];
  if (tmp3 === undefined) {
    if (fn["lkUUsb"] === undefined) {
      fn["lkUUsb"] = !![];
    }
    x = fn["JevgML"](x, n);
    fn["jilbTo"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x10beda from "./utils/createSvgIcon";
import{
  jsx as _0x48a970
}from "react/jsx-runtime";
export default _0x10beda([_0x48a970("path", {
  "d" : fn("0", "u*jE"),
  "opacity" : ".3"
}, "0"), _0x48a970(fn("1", "BVqs"), {
  "d" : fn("2", "sAQG")
}, "1")], "LocalSeeTwoTone");

