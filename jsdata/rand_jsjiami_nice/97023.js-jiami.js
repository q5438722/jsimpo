'use strict';
var vip = "vip.v6";
var _0x1b22 = [vip, "QEdaa8Oz", "wo3CjMK8w44=", "c2AAw71Ww5HDiic/w50Aw6xTdsK5wq0/AsONAVjCq8ONw7gKR8OlwrDCrzgzw5bCvX4VCsKyw440TB9eERI+wpoHUcKtIMKd", "wq9FCsOu", "BsOOw4vCt2A=", "TcK+bcK9w43CrcOkNVpeNcKyw6dVHsK7", "w7LCk8O5w41ydxNww4zDqRFiwqnDnsOdwrbCow==", "GkgIw7TChQVOwo/DmA==", "w6vClcOzw4wwZlh3w5vDrg==", "ksvip.mv6lVYtrHOOgLIbQj=="];
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
          if (value && str["replace"](/[ksmlVYtrHOOgLIbQj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662423;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1b22, 359, 91904);
var _0x4dd6 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1b22[a];
  if (_0x4dd6["LWGzvg"] === undefined) {
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
    _0x4dd6["MpvcNE"] = testcase;
    _0x4dd6["AZRcWf"] = {};
    _0x4dd6["LWGzvg"] = !![];
  }
  var A = _0x4dd6["AZRcWf"][a];
  if (A === undefined) {
    if (_0x4dd6["IBlMnO"] === undefined) {
      _0x4dd6["IBlMnO"] = !![];
    }
    value = _0x4dd6["MpvcNE"](value, opt_max);
    _0x4dd6["AZRcWf"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const fetch = require(_0x4dd6("0", "zLjF"));
const {
  writeFileSync : writeFileSync
} = require("fs");
const stories = 50;
async function getStory(callback) {
  const _0x12b9df = await fetch("https://hacker-news.firebaseio.com/v0/item/" + callback + _0x4dd6("1", "%&LB"));
  return await _0x12b9df[_0x4dd6("2", "KKVX")]();
}
async function getTopStories() {
  var keys = {
    "QrAUY" : _0x4dd6("3", "W*K%"),
    "KULmh" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "xAuZq" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const _0x5d57e0 = await fetch(keys["QrAUY"]);
  const closedFrames = await _0x5d57e0[_0x4dd6("4", "1viy")]();
  const data = [];
  for (let key = 0; keys[_0x4dd6("5", "&640")](key, stories); key++) {
    const context = closedFrames[key];
    data["push"](await keys["xAuZq"](getStory, context));
  }
  writeFileSync(_0x4dd6("6", "bEz#"), _0x4dd6("7", "zLjF") + JSON[_0x4dd6("8", "0ODB")](data));
}
getTopStories();

