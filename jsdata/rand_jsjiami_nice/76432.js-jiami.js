'use strict';
var recordButtonColor = "vip.v6";
var result = [recordButtonColor, "WsOBwq4xNQ==", "vTipY.v6tkZtTJoHyhcHduGm=="];
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
          if (type && href["replace"](/[TYtkZtTJoHyhcHduGm=]/g, "") === type) {
            data[method](node);
          }
        }
      }
      data[method](data[str]());
    }
    return 662873;
  };
  return fn(++count, size) >> count ^ size;
})(result, 399, 102144);
var data = function(name, options) {
  name = ~~"0x"["concat"](name);
  var params = result[name];
  if (data["QmtOOs"] === undefined) {
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
    data["ybqdmK"] = testcase;
    data["DOuNdB"] = {};
    data["QmtOOs"] = !![];
  }
  var arr = data["DOuNdB"][name];
  if (arr === undefined) {
    if (data["nwEcjk"] === undefined) {
      data["nwEcjk"] = !![];
    }
    params = data["ybqdmK"](params, options);
    data["DOuNdB"][name] = params;
  } else {
    params = arr;
  }
  return params;
};
import{
  BaseRaw as BaseRaw
}from "../../../../../app/models/server/raw/BaseRaw";
import _0xea93c9 from "../models/CannedResponse";
class RecordButtonBehavior extends BaseRaw {
}
export{
  RecordButtonBehavior as CannedResponseRaw
};
export default new RecordButtonBehavior(_0xea93c9[data("0", "BycM")]["rawCollection"]());

