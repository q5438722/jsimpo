'use strict';
var vip = "vip.v6";
var _0x48f7 = [vip, "wqobwo0IZ8KJw5/CncOwBEEN", "TsKAwp0Hw4PDokJww4J6aTnDq8Kww7Y=", "NkbChRhGJcKSw6vDkkIqw6vCky/CmC8=", "eUZwBcKmwrs=", "wpkYWcK0AxA1GhjDqh9SS8O8wp4=", "wq0vX8OPwqbCpFITwqNwb0XCgsKYdg==", "w71udsOOw5LCkXRtTA==", "IivChkrDvEU=", "w6LDoi7DgsKnBQ==", "CwpkwqLCrX9KwoAHb8OYw58=", "wodmG3Iuw6/DiwNMwr92w5k=", "Cn1MHCfCmAlwV8K/MMKIHcOiw5g=", "wopsJRt1w6s+woTCkcKWwoYrPw==", "MlBHwqJ7w4w=", "URHCv0ZtH8K9fsKTIsOewoNZdH7DlxR4wpHCnyzCjiPDp8KFccO5w6h0DcOkw6HCm8OYGMOyBh3Cr0fCkMOQLQ==", "wp5vEVEww68=", 
"woHCpsK0I8KHKcKKw5gNI8Oow6pxUgTDmmdaJMOtBcOFQEvDsH/DhSTDt03Djx9tT3bDtMOKwozDuMKSW8O9wpXDmcKIw57DscOgwpTCpA0g", "CizDlULDu0I7fWXCsHoRMMOVDRxLw6l0w6Ipe8OZwqfDlsKNY8OgBMKkRzt3w5vCtizCg8Kewo7CnMOHAD4=", "wrnChGI3", "vipG.LIv6SxbgcxaOewsffb=="];
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
          if (value && str["replace"](/[GLISxbgcxaOewsffb=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662071;
  };
  return fn(++count, long) >> count ^ long;
})(_0x48f7, 462, 118272);
var _0xf0aa = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x48f7[a];
  if (_0xf0aa["deVsuI"] === undefined) {
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
    _0xf0aa["arlifA"] = testcase;
    _0xf0aa["pFQPTs"] = {};
    _0xf0aa["deVsuI"] = !![];
  }
  var A = _0xf0aa["pFQPTs"][a];
  if (A === undefined) {
    if (_0xf0aa["ulYWmb"] === undefined) {
      _0xf0aa["ulYWmb"] = !![];
    }
    value = _0xf0aa["arlifA"](value, opt_max);
    _0xf0aa["pFQPTs"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0xf0aa("0", "j^k*"));
const assert = require(_0xf0aa("1", "oeTz"));
const events = require(_0xf0aa("2", "5Kko"));
const {
  inspect : inspect
} = require("util");
const e = new (events[_0xf0aa("3", "vm$2")]);
e["on"](_0xf0aa("4", "AxX("), common["mustCall"]());
e[_0xf0aa("5", "JsRM")](42);
const throwsObjs = [NaN, -1, _0xf0aa("6", "Ikv8")];
for (const a of throwsObjs) {
  assert[_0xf0aa("7", "(E%[")](() => {
    return e["setMaxListeners"](a);
  }, {
    "code" : "ERR_OUT_OF_RANGE",
    "name" : "RangeError",
    "message" : 'The value of "n" is out of range. ' + (_0xf0aa("8", "wVh[") + inspect(a))
  });
  assert[_0xf0aa("9", "AxX(")](() => {
    return events["defaultMaxListeners"] = a;
  }, {
    "code" : "ERR_OUT_OF_RANGE",
    "name" : "RangeError",
    "message" : _0xf0aa("a", "^7CT") + (_0xf0aa("b", "oeTz") + inspect(a))
  });
}
e[_0xf0aa("c", "*GkP")](_0xf0aa("d", "m%J)"));
{
  const {
    EventEmitter : directiveProcessors,
    defaultMaxListeners : $node
  } = events;
  for (const $node of throwsObjs) {
    assert["throws"](() => {
      return directiveProcessors[_0xf0aa("e", "8Nh*")]($node);
    }, {
      "code" : _0xf0aa("f", ")0%)")
    });
  }
  assert[_0xf0aa("10", ")!2M")](() => {
    return directiveProcessors[_0xf0aa("11", "3#4U")]($node, _0xf0aa("12", "@k%I"));
  }, {
    "code" : "ERR_INVALID_ARG_TYPE"
  });
}
;
