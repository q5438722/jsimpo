'use strict';
var ControlTypeGroup = "vip.v6";
var fixtures = [ControlTypeGroup, "wqoOeMOLwoQxHTbCgMKHwrzCsDh+wo/Dklw=", "w63CgMOYGxbCkl4=", "w5k8w4UnwpI=", "fsO/w4UCw7Q=", "c3RawoDCog==", "w4tmwoXCscOi", "wrBhw6DCucKUdcKhw6DDil/Dj8Okw7sGTQ==", "viTp.KvEqJ6MEElFJDILmy=="];
(function(data, count, query) {
  var update = function(event, type, str, key, css) {
    type = type >> 8;
    css = "po";
    var str = "shift";
    var method = "push";
    if (type < event) {
      for (; --event;) {
        key = data[str]();
        if (type === event) {
          type = key;
          str = data[css + "p"]();
        } else {
          if (type && str["replace"](/[TKEqJMEElFJDILmy=]/g, "") === type) {
            data[method](key);
          }
        }
      }
      data[method](data[str]());
    }
    return 662267;
  };
  return update(++count, query) >> count ^ query;
})(fixtures, 398, 101888);
var callback = function(index, response) {
  index = ~~"0x"["concat"](index);
  var data = fixtures[index];
  if (callback["iVUZEe"] === undefined) {
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
    callback["SRLboJ"] = testcase;
    callback["AfBDRu"] = {};
    callback["iVUZEe"] = !![];
  }
  var file = callback["AfBDRu"][index];
  if (file === undefined) {
    if (callback["sPxGay"] === undefined) {
      callback["sPxGay"] = !![];
    }
    data = callback["SRLboJ"](data, response);
    callback["AfBDRu"][index] = data;
  } else {
    data = file;
  }
  return data;
};
function previewImage({
  urls : urls,
  current : images
}, boxImage) {
  var value = {
    "OmwMk" : function(require, load, callback) {
      return require(load, callback);
    },
    "QKDWi" : callback("0", "rqS*"),
    "Dwerp" : callback("1", "4F*n"),
    "TDMZg" : "/preview-image"
  };
  const {
    invokeCallbackHandler : data
  } = UniServiceJSBridge;
  getApp()[callback("2", "$B#6")]["push"]({
    "type" : "navigateTo",
    "path" : value[callback("3", "Wqp7")],
    "params" : {
      "urls" : urls,
      "current" : images
    }
  }, function() {
    value["OmwMk"](data, boxImage, {
      "errMsg" : value[callback("4", "F@91")]
    });
  }, function() {
    value[callback("5", "nJwq")](data, boxImage, {
      "errMsg" : value[callback("6", "mjxI")]
    });
  });
}
export{
  previewImage as previewImage
};

