'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "McKiIAMcOMOEwptJw4jDucOxwoPCsAHDn8OIOWg=", "woTDmsK7CinDtcOGwolMw6nCvHB+CQ==", "IsKpJgccNMOBwoREw5PDoMOjwpTCsgjDn8KTcCMYK1xpwqQww4plwoxnVw==", "w4fDo8K/w78zbiDDvULDon7CmT/DrA==", "C0rDvy8AZsK4woc=", "ovip.VvHIl6NHSBABkoINLq=="];
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
          if (type && str["replace"](/[oVHIlNHSBABkoINLq=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662935;
  };
  return fn(++count, size) >> count ^ size;
})(match, 233, 59648);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["ABilLm"] === undefined) {
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
    fn["HcUnbg"] = testcase;
    fn["bxTGfy"] = {};
    fn["ABilLm"] = !![];
  }
  var tmp3 = fn["bxTGfy"][i];
  if (tmp3 === undefined) {
    if (fn["zYHJcC"] === undefined) {
      fn["zYHJcC"] = !![];
    }
    x = fn["HcUnbg"](x, n);
    fn["bxTGfy"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
export default{
  "official-website" : fn("0", "v$1Z"),
  "manual" : fn("1", "PMDT"),
  "release-notes" : fn("2", "C4cp"),
  "report-problem" : fn("3", "[)eT"),
  "toggle-dev-tools" : fn("4", "C4cp")
};

