'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wq42wrzCmcK7w4nDtwofw5t7BzXCg8KCCEQLw4hXcmwZKMK1FcKtDcKjTgvCq8KKwp0GNzdNU8OpEzRYw4ImdxPDqMKJZMKUK8KBFjwLccKDU8OICsOTS8OcIsKzwo1yw7/DnCVXdDvDm3JOY8Opwo5cbMOKwpYlwofDusKKw6DDvcKfE8KMwo8da8ObMkLCpUQ7w4pGIH0dwoPDsW3Dg8Okd8KnCsO2woLDhMOOwqMjw5HDgcO9wozDhEvDl3rDnSvDhHvCjxpFbsOiwp3DphHDr8KhXGXDh8OncsOxw55Jw7jCpsOZUDbDrlnDpHBgwoRowqQfw5nCjsObw686wrpWw4bDjcKHKG8Zw7zChgPDq2kdecONw5PCksK/wpDDuMOMKcOTUQnCucOiFGkUw6l+wqA8w7HClMOHJ8KFwqjCssOgw5XDi8KJw77DtSjCk0xIChIPBcK/YQVswqwXTcKJDsOgPy4fbcKVBXHCrgTDnMKDw7xxw4AXw4YGw7bDqsOLw4HDqhLCiXTCgEMDcgzClAN6w5ZGworCrGHDvcKnwqtiw6cUYTXCnijCt8KOw7VLwojDkksiSipew6ELPCHDvycww4XCvcKpNMKqwqgkw4FFHcKAw4Evw4XDryLDkcK/RCTDi8OMwrxXw4sBwq07PA7Dg8KNK8OACTBJQcKIcjRdMjTCosOjA8OCwr5Qw77CgcOlWMKew6UtwrPDgcKyw7fDnE3DpcK7wowcwrNnw7ETEMOmNMKfw7PDtxLDo1PDqCt6S3jCk8KBK8KZLyDDiMOoGG/Ch0zDjARANiBYw4JKwrVfXHgpZcOowobDsCTCh0xfcVvDocKywpIswojDv8OCwofDjsORW8KMw63DiyR8woE+L8KFwonDsGApw65fwr14w7XDrMOBw70JwrZsI0nCqgkHb8KVHMKifsKhwonCrcOhJcO8wpzDlSdtYDwRKMOdw7fCvRzDtcKYw6YDwppMDETDmyXCrCrCvMKgwpvCk1nDl8KaP8Knw6PCncKdwrRqW8OjYyAWGHfCiCjDky7Dr8KvVsKvfMOpw64QwozCt8OGwp/DugFZw4hawr/CmcObNsOEw5hGU8OUwqdaw5k=", 
"w6vDtcOBesKOMRDCrRwBw4DDqsODw4RD", "vZrip.jlv6OCwlNNgRkhhgR=="];
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
          if (type && str["replace"](/[ZrjlOCwlNNgRkhhgR=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662639;
  };
  return fn(++count, size) >> count ^ size;
})(match, 204, 52224);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["nmPiGP"] === undefined) {
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
    fn["HFwJzU"] = testcase;
    fn["RPMLOq"] = {};
    fn["nmPiGP"] = !![];
  }
  var tmp3 = fn["RPMLOq"][i];
  if (tmp3 === undefined) {
    if (fn["BYoorJ"] === undefined) {
      fn["BYoorJ"] = !![];
    }
    x = fn["HFwJzU"](x, n);
    fn["RPMLOq"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x53e585 from "./utils/createSvgIcon";
import{
  jsx as _0x3b3208
}from "react/jsx-runtime";
export default _0x53e585(_0x3b3208("path", {
  "d" : fn("0", "ONT#")
}), fn("1", "OL7z"));

