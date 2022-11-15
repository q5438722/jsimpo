'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "OX3Co8Og", "W31YwrbClMKnSl3Dol8swp3DqT02w4XCqnjCrjjDtinCnsO5wp3Dh8Kuw51fA0XDgWjCnMO2HcO6wofDt05sFsO0wr09eBrDvwHDuTk7wpQ7P0F7w6zCl8KaC8KWw6HDnDRkwrxkacKpw4fCiAAnwoIzbGXCrDwRLsO5w5heBT7DqyXDhFvDh3TDkG0sfHsoccOCVyYxwolcw47DnCbCqcKbB8O9w5RgPyzDnnDCsMKEwqMPXDJFIWxrQ8K7T3F4wqEvwr/Dq8KVwq7CvUbDlkdZwqZJYMKmw7YDwrUfwogOwr7DmQzCpxzCucOQw47CqcKcw4V8AGdDMyfChDMQESM/aVEHwpgMaMONGMKDwpkow4vDnEpQw5vDrcKOWxTCv2NNwokpw4PCucOrw4RYY8KaOAtqVVYbwq7CkEgJw4PDucK1BsKuYCZgDsOCPGsdwr7CucO/UQ3CoFQgKTTDtMKKw5nDrSQVRmE1BsOQdgANw4LDicOUw59JF8OGwqIFG8OHwpQcw5nCqcOVFcOiKMKIwrIowoYjw4ANQU3DrD3DljDDkMKjw6pMw7VKFGzCr8KnHXDDuEPChAsQEwBJdUdWesOONcOowo4SRnjDlyZrwqDCrU8yX8KOwod8w58Hw7www6N8w65OwoMgw7kgZ2/CpB/DqsO7aW8FwothwoA3KX1cJU/DrcKDCmBlwpbCnVPDkcOJHcOIwqdRKcOhUW9JV8O/wpczcUpfScKnw5vCi8OFw70gW3rCvcONVmLDr8ODD8OswpPDkUbCvcKDKMOhFS3Do8OUajzDk17CnMOKwrQvw7xnwo/CocO0WU3CrXE8wqXCqMOQwrloe8O8UCAmSg==", 
"w7DDncKZQcOmwoYbZSR1w5HChBtvwooswpzDgT3Ctmg=", "amqvciup.v6ywXOqOQQkmuO=="];
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
          if (type && str["replace"](/[amqcuywXOqOQQkmuO=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662662;
  };
  return fn(++count, size) >> count ^ size;
})(match, 432, 110592);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["avxKjb"] === undefined) {
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
    fn["ooJkyW"] = testcase;
    fn["ppvoBD"] = {};
    fn["avxKjb"] = !![];
  }
  var tmp3 = fn["ppvoBD"][i];
  if (tmp3 === undefined) {
    if (fn["DnsZQy"] === undefined) {
      fn["DnsZQy"] = !![];
    }
    x = fn["ooJkyW"](x, n);
    fn["ppvoBD"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x8a9cb0 from "./utils/createSvgIcon";
import{
  jsx as _0x304b0b
}from "react/jsx-runtime";
export default _0x8a9cb0(_0x304b0b(fn("0", "OXUV"), {
  "d" : fn("1", "y7dJ")
}), fn("2", "P[S5"));

