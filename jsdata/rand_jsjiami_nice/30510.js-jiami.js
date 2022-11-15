'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "G8KZJ1bClQUwZ8KWJh9eP3HDgErCpcOIP8O6wo/CrsO7UUpsw4bChsOhO8OhwrLCpEQbFW4UPMOgFcKibjoPU0onei7DrcKoWsOodcKkw6ECw7c7LcK+w55APsOgwp44UAxdwp3Ct8ONMsKzFw3Cu8OMdXzCjcKnwojCjsO2w6zDqMONwrdjwodcIMKrw5IWHcKkw7nDmH4awqfDusKQw5rDgcOtw6Faw7PDk8O9w7Iuwop5wrLCszRLC8OGJsKMJjfCkcKuwpTDtX7DrWdDwr5KfSrDkzICwo4sCFXDilY+KnlZAcOzwr1cIjjCpjQHEcKUNcOfYSXClcO0wqcAw6LDglNOw7PCtwfCmwwCZsOhScKSwqLCjWjCjMKsw5TClsOWLVoYw57CocKmw4FPwqMPwoADw4tswoFIHMO8w4jCmMKZZzF0BmfCt1PDqQNQwpJPw63Dv3ZrbSQdDsKsG2x0wp4zD8OHJMKYwpHCplTDgiUCJsK4wr1Bwr1AwrNDJj8Nw7VJw7NtwrXDi8KRD0zDi8OPKUtzA8K0w5sLGnPCjsO+OsKZw4PCrw==", 
"w7sQwrLCpA==", "vikp.vd6qRCYVydOnyfzzNyg=="];
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
          if (type && str["replace"](/[kdqRCYVydOnyfzzNyg=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662621;
  };
  return fn(++count, size) >> count ^ size;
})(match, 159, 40704);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["tepJIb"] === undefined) {
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
    fn["bCbQSv"] = testcase;
    fn["ahLmLo"] = {};
    fn["tepJIb"] = !![];
  }
  var tmp3 = fn["ahLmLo"][i];
  if (tmp3 === undefined) {
    if (fn["LzwQsh"] === undefined) {
      fn["LzwQsh"] = !![];
    }
    x = fn["bCbQSv"](x, n);
    fn["ahLmLo"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x321fe9 from "./utils/createSvgIcon";
import{
  jsx as _0x439205
}from "react/jsx-runtime";
export default _0x321fe9(_0x439205(fn("0", "k&Di"), {
  "d" : fn("1", "TN])")
}), "ContactPageRounded");

