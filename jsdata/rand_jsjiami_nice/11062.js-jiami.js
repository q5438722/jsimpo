'use strict';
var vip = "vip.v6";
var _0x1de0 = [vip, "D3xRcsKg", "MlTDkATCpA==", "wqgiwpwiwpc=", "wpwww4PCjEbDhMKbwoLCjzU=", "CwhRwqo+", "w7ACXMKVwplmw5ViwrzDkcKT", "woPCtcKkBGfDsjjCusO4w6HCtA==", "w4Mcw4jDpMOwHMKVZ8OUw79l", "dQIow4nDmg==", "BMKGwo04woU=", "w4wbY8KvwoQ=", "wpDCqMKlEGvDtCXCvMOzw6E=", "NiLDv8Kxw6ARwoAaR8Ks", "MyTDvcKhw6wX", "QsKuwp8gw4/CtXo=", "w58Bw4PDtcOmBsOOaMOB", "woR1DDzDg2k=", "X8KTGA3ClnNN", "woAjwp4/woHCjyLCjHY7", "wpRZwo0Sw5V+w6rCtsKtwpo=", "FhEVw5Y=", "EMOOIjfCpD4=", "XDQjw5TDnMOraQ==", "wqnCrAJjLV06w5dUw5Q=", 
"LEcOwr3Cs8KCwq0JUMKI", "bcOew5/ClsOFw41YSRLDlA==", "PVfDlxPCgT/CqQ==", "w5Ubw6DDqEhX", "viEpDP.vRmro6TryjEszWKW=="];
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
          if (value && str["replace"](/[EDPRmroTryjEszWKW=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662524;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1de0, 463, 118528);
var _0x1600 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1de0[c];
  if (_0x1600["zFMTeJ"] === undefined) {
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
    _0x1600["wbetVn"] = testcase;
    _0x1600["JzGlqQ"] = {};
    _0x1600["zFMTeJ"] = !![];
  }
  var e = _0x1600["JzGlqQ"][c];
  if (e === undefined) {
    if (_0x1600["CmdbfJ"] === undefined) {
      _0x1600["CmdbfJ"] = !![];
    }
    x = _0x1600["wbetVn"](x, alpha);
    _0x1600["JzGlqQ"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const {
  pipe : pipe,
  set : set,
  pick : pick,
  eq : eq,
  omit : omit,
  remove : remove,
  get : get,
  uniq : uniq,
  isArray : isArray,
  map : map,
  curry : curry,
  merge : merge
} = require(_0x1600("0", "xK#R"));
const permissionFields = ["id", _0x1600("1", "erO4"), _0x1600("2", "AM17"), _0x1600("3", "$8nj"), _0x1600("4", "NSm7"), _0x1600("5", "PS@m")];
const sanitizedPermissionFields = ["id", _0x1600("6", "P]g6"), _0x1600("7", "*bTl"), _0x1600("8", "CfDA"), _0x1600("9", "QBP6")];
const sanitizePermissionFields = pick(sanitizedPermissionFields);
const getDefaultPermission = () => {
  return {
    "conditions" : [],
    "properties" : {},
    "subject" : null
  };
};
const addCondition = curry((url, discount) => {
  var data = {
    "grXnj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RErYW" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "fpFeW" : _0x1600("a", "nm0&")
  };
  const {
    conditions : req
  } = discount;
  const a3 = Array[_0x1600("b", "uJBl")](req) ? data["grXnj"](uniq, req[_0x1600("c", "kwTE")](url)) : [url];
  return data[_0x1600("d", "Avm9")](set, data[_0x1600("e", "uJBl")], a3, discount);
});
const removeCondition = curry((SLOW_REGEXP_ITEXT, options) => {
  var $ = {
    "Xsmms" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "DRgvg" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  return $[_0x1600("f", "$8nj")](set, _0x1600("10", "aR7e"), $[_0x1600("11", "[QqR")](remove, eq(SLOW_REGEXP_ITEXT), options[_0x1600("9", "QBP6")]), options);
});
const getProperty = curry((url, falseKey) => {
  return get(_0x1600("12", "DjvG") + url, falseKey);
});
const setProperty = (key, callback, priority) => {
  return set(_0x1600("13", "4a7Q") + key, callback, priority);
};
const deleteProperty = (rule, name) => {
  return omit(_0x1600("14", "xK#R") + rule, name);
};
const create = (context) => {
  var _0x2fe9f0 = {
    "ZCiwc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "sGIGH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "LkPJx" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  return pipe(_0x2fe9f0[_0x1600("15", "*bTl")](pick, permissionFields), _0x2fe9f0[_0x1600("16", "8C0H")](merge, _0x2fe9f0[_0x1600("17", "DjvG")](getDefaultPermission)))(context);
};
const sanitizeConditions = curry((clr, form__2279) => {
  if (!isArray(form__2279[_0x1600("18", "4a7Q")])) {
    return form__2279;
  }
  return form__2279[_0x1600("19", "6nW9")][_0x1600("1a", "6nW9")]((opacity) => {
    return !clr["has"](opacity);
  })["reduce"]((mmCoreSplitViewBlock, mmaPushNotificationsComponent) => {
    return removeCondition(mmaPushNotificationsComponent, mmCoreSplitViewBlock);
  }, form__2279);
});
const toPermission = (args) => {
  return isArray(args) ? map(create, args) : create(args);
};
module[_0x1600("1b", "BlcX")] = {
  "addCondition" : addCondition,
  "removeCondition" : removeCondition,
  "create" : create,
  "deleteProperty" : deleteProperty,
  "permissionFields" : permissionFields,
  "getProperty" : getProperty,
  "sanitizedPermissionFields" : sanitizedPermissionFields,
  "sanitizeConditions" : sanitizeConditions,
  "sanitizePermissionFields" : sanitizePermissionFields,
  "setProperty" : setProperty,
  "toPermission" : toPermission
};

