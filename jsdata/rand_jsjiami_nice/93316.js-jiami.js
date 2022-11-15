'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "fTnCjhvDlw==", "wpV9w4nCuU4=", "wrESw4BtCw==", "GxvDpAAv", "w5nDs3liDg==", "YFZ4bmA=", "w67DrH9QBQ==", "wpRERMKWwrM=", "vipT.Kv6LHhhwfnlFbsstt=="];
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
          if (type && str["replace"](/[TKLHhhwfnlFbsstt=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662393;
  };
  return fn(++count, size) >> count ^ size;
})(match, 416, 106496);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["xRgUFT"] === undefined) {
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
    fn["lhUSXQ"] = testcase;
    fn["FnNMyu"] = {};
    fn["xRgUFT"] = !![];
  }
  var tmp3 = fn["FnNMyu"][i];
  if (tmp3 === undefined) {
    if (fn["JPtOXJ"] === undefined) {
      fn["JPtOXJ"] = !![];
    }
    x = fn["lhUSXQ"](x, n);
    fn["FnNMyu"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
function value(a, xhr = 0, x = 0, match = 0, reservedIndices = 0) {
  var callbacks = {
    "YtdlQ" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "vDrsW" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "hsSGh" : function(leftDiags, columns) {
      return leftDiags | columns;
    },
    "UOjMo" : function(leftDiags, columns) {
      return leftDiags | columns;
    },
    "mJqQf" : function(dest_operand, source_operand) {
      return dest_operand & source_operand;
    },
    "DkWwo" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "wCQGn" : function(leftDiags, columns) {
      return leftDiags | columns;
    },
    "stQEd" : function(wordA, numBitsToRotate) {
      return wordA << numBitsToRotate;
    },
    "Oiadx" : function(leftDiags, columns) {
      return leftDiags | columns;
    }
  };
  let result = reservedIndices;
  const singlePage = callbacks[fn("0", "%3Ro")](2 ** a, 1);
  if (x === singlePage) {
    return callbacks[fn("1", ")UPa")](result, 1);
  }
  let modPosW = ~callbacks[fn("2", "c#^m")](callbacks["UOjMo"](xhr, match), x);
  for (; modPosW & singlePage;) {
    const imgW = callbacks[fn("3", "]^X3")](modPosW, -modPosW);
    modPosW = modPosW - imgW;
    result = result + callbacks[fn("4", "vjT4")](value, a, (xhr | imgW) >> 1, callbacks[fn("5", "sp7%")](x, imgW), callbacks[fn("6", "vjT4")](callbacks["Oiadx"](match, imgW), 1), reservedIndices);
  }
  return result;
}
export default function extractPresetLocal(callback) {
  var obj = {
    "veLSR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return obj[fn("7", "m]O%")](value, callback);
}
;
