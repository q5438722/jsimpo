'use strict';
var vip = "vip.v6";
var _0x1454 = [vip, "OMKnAMKZEigewp5gCBI=", "w4t8w73DuHp2BMO4wpkFw4k=", "woxYw5DChQ==", "wr3DsE3CocK0wrVLTH5Hw6Y=", "w7Znw4nDtmElBA==", "HsK4P8OmSw==", "wo50KMOPWcKb", "w7/CogTCgC0=", "FHwHYsOy", "vAiKp.vHT6jMszFwgzQsDr=="];
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
          if (value && str["replace"](/[AKHTjMszFwgzQsDr=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662080;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1454, 229, 58624);
var _0x7a36 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1454[a];
  if (_0x7a36["GDubzv"] === undefined) {
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
    _0x7a36["QjNRBV"] = testcase;
    _0x7a36["LnqktY"] = {};
    _0x7a36["GDubzv"] = !![];
  }
  var A = _0x7a36["LnqktY"][a];
  if (A === undefined) {
    if (_0x7a36["nvmcZO"] === undefined) {
      _0x7a36["nvmcZO"] = !![];
    }
    value = _0x7a36["QjNRBV"](value, opt_max);
    _0x7a36["LnqktY"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var ATrue;
(function(img_envs) {
  var env_data = {
    "CllWR" : "IsTrue",
    "fdCFu" : _0x7a36("0", "t!%u")
  };
  img_envs[img_envs[env_data[_0x7a36("1", "iCE8")]] = 1] = _0x7a36("2", "d*YZ");
  img_envs[img_envs[env_data[_0x7a36("3", "Gvh5")]] = 0] = env_data[_0x7a36("4", "K&11")];
})(ATrue || (ATrue = {}));
if (![]) {
  console["info"](_0x7a36("5", "1BYh"));
} else {
  if (!![]) {
    throw Error(_0x7a36("6", "t!%u"));
  } else {
    console[_0x7a36("7", "xnVI")](_0x7a36("8", "&Dvp"));
  }
}
;
