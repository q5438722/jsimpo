'use strict';
var vip = "vip.v6";
var _0x9e59 = [vip, "MHXCk8KJbQ==", "YzXDgMKmwpN/wq3DhCk=", "R8Ksw6XCux/DizI=", "S8OyCsOgMB4Hw6Y/E3wJ", "RX3DrMK0Th5Wc8Oh", "E2LDolU=", "e3FQwoskfWM=", "wp95w7PDjA==", "IviXJp.ohAJzvdB6OTXUGA=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[IXJohAJzdBOTXUGA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662989;
  };
  return fn(++count, long) >> count ^ long;
})(_0x9e59, 330, 84480);
var _0x444c = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x9e59[a];
  if (_0x444c["IlTuFO"] === undefined) {
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
    _0x444c["NvIBVP"] = testcase;
    _0x444c["ZyWnsP"] = {};
    _0x444c["IlTuFO"] = !![];
  }
  var A = _0x444c["ZyWnsP"][a];
  if (A === undefined) {
    if (_0x444c["vYzzFB"] === undefined) {
      _0x444c["vYzzFB"] = !![];
    }
    value = _0x444c["NvIBVP"](value, opt_max);
    _0x444c["ZyWnsP"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
module[_0x444c("0", "&dxY")]["handler"] = (res, canCreateDiscussions, cb) => {
  var load_layers_mapping = {
    "xCBUS" : _0x444c("1", "9Ue*"),
    "bSese" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const req = () => {
    return cb(null, {
      "statusCode" : 200,
      "body" : JSON[_0x444c("2", "yleZ")]({
        "path" : res[_0x444c("3", "&r#!")],
        "method" : res["httpMethod"],
        "headers" : res[_0x444c("4", "DeF3")]
      })
    });
  };
  if (res[_0x444c("5", ")R#p")] === load_layers_mapping[_0x444c("6", "aekM")]) {
    setTimeout(req, 2E3);
  } else {
    load_layers_mapping["bSese"](req);
  }
};
module["exports"]["minimal"] = async(event) => {
  return {
    "statusCode" : 200,
    "body" : JSON[_0x444c("7", "Lq$j")]({
      "message" : "Hello from API Gateway! - (minimal)",
      "event" : event
    })
  };
};

