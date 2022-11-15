'use strict';
var decimalRegex = "vip.v6";
var sample = [decimalRegex, "ASnDgQZ6", "NsK2JsOcMQ==", "UsKrw5w5YcKt", "wr3DtsKlIMKO", "wpXCq1p3", "KsOUw6JLbMOowrPDt8OPdg==", "TFNfwo3CqA==", "QsKXw688w4c=", "EBBxwogwTA==", "cHhCw45d", "R8KVU1w=", "wqxOSsOHGg==", "GMOaw7RMfg==", "w7/ChWEiwq8=", "LcK9wqHCumXCqsOOH8On", "CsOGX8OUZRDCug==", "w5HCv2Etwpg=", "avipJ.v6uJzChYEmObUAEgs=="];
(function(data, count, size) {
  var fn = function(script, type, href, node, css) {
    type = type >> 8;
    css = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        node = data[str]();
        if (type === script) {
          type = node;
          href = data[css + "p"]();
        } else {
          if (type && href["replace"](/[aJuJzChYEmObUAEgs=]/g, "") === type) {
            data[method](node);
          }
        }
      }
      data[method](data[str]());
    }
    return 662977;
  };
  return fn(++count, size) >> count ^ size;
})(sample, 291, 74496);
var filter = function(key, type) {
  key = ~~"0x"["concat"](key);
  var context = sample[key];
  if (filter["PEcYwh"] === undefined) {
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
    filter["bWNsSI"] = testcase;
    filter["zWoQzq"] = {};
    filter["PEcYwh"] = !![];
  }
  var optionsValue = filter["zWoQzq"][key];
  if (optionsValue === undefined) {
    if (filter["aoGbjM"] === undefined) {
      filter["aoGbjM"] = !![];
    }
    context = filter["bWNsSI"](context, type);
    filter["zWoQzq"][key] = context;
  } else {
    context = optionsValue;
  }
  return context;
};
const IE_DETECT = /["'&<>]/;
function testcase(fn) {
  var types = {
    "aOVIN" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "uzNQc" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "RxcIK" : filter("0", "Z1M$"),
    "SKypd" : filter("1", "brqH"),
    "FKKtZ" : filter("2", "b*K#"),
    "VFSPz" : function(value, joiner) {
      return value !== joiner;
    },
    "LLqkx" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "QfwuQ" : function(value, joiner) {
      return value !== joiner;
    },
    "LBOnG" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    }
  };
  const obj = types["aOVIN"]("", fn);
  const sourceKeys = IE_DETECT["exec"](obj);
  if (!sourceKeys) {
    return obj;
  }
  let v;
  let result = "";
  let key;
  let value = 0;
  key = sourceKeys["index"];
  for (; types["uzNQc"](key, obj["length"]); key++) {
    switch(obj[filter("3", "veQ8")](key)) {
      case 34:
        v = types[filter("4", "xwe&")];
        break;
      case 38:
        v = types[filter("5", "YyAm")];
        break;
      case 39:
        v = filter("6", "1Au^");
        break;
      case 60:
        v = types[filter("7", "1Au^")];
        break;
      case 62:
        v = filter("8", "ONwW");
        break;
      default:
        continue;
    }
    if (types["VFSPz"](value, key)) {
      result = result + obj["substring"](value, key);
    }
    value = types[filter("9", "r&0r")](key, 1);
    result = result + v;
  }
  return types[filter("a", "veQ8")](value, key) ? types[filter("b", "b*K#")](result, obj[filter("c", "J)bF")](value, key)) : result;
}
function parser(value) {
  var gl = {
    "bxOap" : function(name, initialValue) {
      return name === initialValue;
    },
    "JlcFH" : filter("d", "QZcE"),
    "mSQRP" : "number",
    "snRox" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "JzAwn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (gl[filter("e", "b*K#")](typeof value, gl[filter("f", "G[y2")]) || typeof value === gl["mSQRP"]) {
    return gl["snRox"]("", value);
  }
  return gl[filter("10", "SO0K")](testcase, value);
}
export default parser;

