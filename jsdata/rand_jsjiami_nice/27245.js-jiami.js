'use strict';
var apolloLogging = "vip.v6";
var props = [apolloLogging, "QWpFESPCrRs=", "XEvipBU.dnvk6nexlnMBTJrH=="];
(function(params, count, version) {
  var update = function(target, value, str, key, name) {
    value = value >> 8;
    name = "po";
    var str = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        key = params[str]();
        if (value === target) {
          value = key;
          str = params[name + "p"]();
        } else {
          if (value && str["replace"](/[XEBUdnknexlnMBTJrH=]/g, "") === value) {
            params[method](key);
          }
        }
      }
      params[method](params[str]());
    }
    return 661845;
  };
  return update(++count, version) >> count ^ version;
})(props, 189, 48384);
var update = function(i, data) {
  i = ~~"0x"["concat"](i);
  var p = props[i];
  if (update["MqMVrM"] === undefined) {
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
    update["rwAIJN"] = testcase;
    update["sCeHLo"] = {};
    update["MqMVrM"] = !![];
  }
  var href = update["sCeHLo"][i];
  if (href === undefined) {
    if (update["llxLpb"] === undefined) {
      update["llxLpb"] = !![];
    }
    p = update["rwAIJN"](p, data);
    update["sCeHLo"][i] = p;
  } else {
    p = href;
  }
  return p;
};
import{
  createMuiTheme as createMuiTheme,
  createTheme as createTheme,
  adaptV4Theme as adaptV4Theme
}from "@material-ui/core/styles";
const formatRequest = createMuiTheme();
const addNetworkInterfaceLogger = createTheme();
const addPubSubLogging = createMuiTheme(adaptV4Theme({
  "palette" : {
    "primary" : {
      "main" : "#ff5252"
    }
  }
}));
const addSubscriptionManagerLogger = createTheme(adaptV4Theme({
  "palette" : {
    "primary" : {
      "main" : update("0", "IV!W")
    }
  }
}));

