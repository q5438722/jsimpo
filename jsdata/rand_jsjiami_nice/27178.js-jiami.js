'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "RX/Dt1nDrA==", "w65PB8OmwofDrUzDl2XDjcO2wqE=", "wp/DicO5w4rDtw4=", "w6VGworDl1xwEw==", "vCedTOFixExp.Zvk6WuUEmKk=="];
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
          if (type && str["replace"](/[CedTOFxExZkWuUEmKk=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661843;
  };
  return fn(++count, size) >> count ^ size;
})(match, 281, 71936);
var fn = function(name, args) {
  name = ~~"0x"["concat"](name);
  var value = match[name];
  if (fn["FDFVrW"] === undefined) {
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
    fn["TeXfOR"] = testcase;
    fn["OBRAkB"] = {};
    fn["FDFVrW"] = !![];
  }
  var functionEntry = fn["OBRAkB"][name];
  if (functionEntry === undefined) {
    if (fn["qbsUlX"] === undefined) {
      fn["qbsUlX"] = !![];
    }
    value = fn["TeXfOR"](value, args);
    fn["OBRAkB"][name] = value;
  } else {
    value = functionEntry;
  }
  return value;
};
export default function init(views) {
  var result = {
    "GEigG" : fn("0", "E(kt")
  };
  return views[fn("1", "XVq%")][fn("2", "[iqx")](/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, result[fn("3", ")^py")]);
}
;
