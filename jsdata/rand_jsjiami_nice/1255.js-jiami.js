'use strict';
var vip = "vip.v6";
var _0x27f0 = [vip, "XsKpwonCisKR", "wqLCrUHDoMKnQMOlwp7DlMKE", "PsKURMO8MA==", "dcKULDnDmg==", "fSMH", "wrbDicKiLRA=", "woQ6wpVPwrc=", "bWA9Dlc=", "wqFNMXLDlQ==", "Lg1qwqXCtw==", "w5TCo8OacBEaOX7DncKZ", "SHR9w5nDoQ==", "aCfDnD7Cjg==", "S8KDwpBMSCrDpsONERl1IU1Ow4Avwq7CqcKEbsKffyk=", "w5fCosO4wpLCgxPCuQ==", "I8KBw67Dow==", "wrXDrmTDtR0=", "U8Ocw7/Dswo=", "w47Ds8KZw4lqZncdwqDCvyc1wpdRw6V/", "Q3pmw6bDs8OSPMO8MQgYw5PCrsOowo7ClcKJCWw=", "wovCpg95woMsOhxZw4kDw4RoAA==", "Ki9TwpjChsOTGsOWw79VFMO7w6doScKew6VWZQ==", 
"woHDr8KnAATDhCjDjT3DicOoWyQ3FRwew6ISwp8U", "cx1wwpLCtw==", "PzLDr8KLBnoew40pbsKvc8Ko", "wo/CncK0NsKX", "V8KcHijDqw==", "w4nCqcOZ", "wp5kNGrDgw==", "wpzCgApUwpw=", "YMKpDSvDpQ==", "Qnthw4jDow==", "eOZqvip.LqTvr6GCzZBLNwwy=="];
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
          if (value && str["replace"](/[eOZqLqTrGCzZBLNwwy=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661693;
  };
  return fn(++count, long) >> count ^ long;
})(_0x27f0, 213, 54528);
var _0xbf66 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x27f0[c];
  if (_0xbf66["ecJHex"] === undefined) {
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
    _0xbf66["dPCNsN"] = testcase;
    _0xbf66["eRpEyp"] = {};
    _0xbf66["ecJHex"] = !![];
  }
  var e = _0xbf66["eRpEyp"][c];
  if (e === undefined) {
    if (_0xbf66["vccHIi"] === undefined) {
      _0xbf66["vccHIi"] = !![];
    }
    x = _0xbf66["dPCNsN"](x, alpha);
    _0xbf66["eRpEyp"][c] = x;
  } else {
    x = e;
  }
  return x;
};
async function conditionPromise(value, amount = _0xbf66("0", "Ndn^")) {
  var c = {
    "cOhHp" : _0xbf66("1", "(QTP"),
    "sGmRN" : function(name, initialValue) {
      return name === initialValue;
    },
    "JRJQy" : "LMlDh",
    "FEcVc" : _0xbf66("2", "#t58"),
    "UKuyS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "CReBM" : _0xbf66("3", "BPeH"),
    "WLZia" : function(saveNotifs) {
      return saveNotifs();
    },
    "FKwgY" : function(value, joiner) {
      return value !== joiner;
    },
    "dlnZd" : _0xbf66("4", "tr7W"),
    "puMTI" : _0xbf66("5", "^Zka"),
    "kwsaq" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "VoDPr" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    }
  };
  const bBody = Date[_0xbf66("6", "xZ27")]();
  for (; !![];) {
    if (c[_0xbf66("7", "LVQp")](c["JRJQy"], c["FEcVc"])) {
      throw new Error(c[_0xbf66("8", "@vQ^")] + amount);
    } else {
      await c["UKuyS"](timeoutPromise, 100);
      if (value["constructor"]["name"] !== c[_0xbf66("9", "^Zka")] && value()) {
        return;
      } else {
        if (await c["WLZia"](value)) {
          if (c["FKwgY"](c[_0xbf66("a", "MWaD")], c[_0xbf66("b", "@7Zg")])) {
            return;
          } else {
            global[_0xbf66("c", "8Ka]")](resolve, timeout);
          }
        }
      }
      if (c[_0xbf66("d", "fH&&")](c[_0xbf66("e", "^Zka")](Date[_0xbf66("f", "]g4S")](), bBody), 5E3)) {
        throw new Error(c[_0xbf66("10", "(QTP")] + amount);
      }
    }
  }
}
function timeoutPromise(fn) {
  var _0x242d94 = {
    "LnhJX" : function(value, joiner) {
      return value !== joiner;
    },
    "orsNC" : _0xbf66("11", "b8mo"),
    "eLVSH" : _0xbf66("12", "$&vG")
  };
  return new Promise((val) => {
    if (_0x242d94[_0xbf66("13", "LVQp")](_0x242d94["orsNC"], _0x242d94[_0xbf66("14", "Ndn^")])) {
      global[_0xbf66("15", "xZ27")](val, fn);
    } else {
      return;
    }
  });
}
function emitterEventPromise(mmCoreLogEnabledDefault, mmCoreLogEnabledConfigName, valuesWritten = 15E3) {
  var techniqueParameterBuffer = {
    "Cfmtp" : function(saveNotifs) {
      return saveNotifs();
    },
    "ncrKf" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  return new Promise((result, model) => {
    var _related2 = {
      "IMjOC" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "pWVAy" : function(data) {
        return techniqueParameterBuffer["Cfmtp"](data);
      }
    };
    const relationName = techniqueParameterBuffer[_0xbf66("16", "MWaD")](setTimeout, () => {
      _related2[_0xbf66("17", "!ai$")](model, new Error(_0xbf66("18", "T$4U") + mmCoreLogEnabledConfigName + _0xbf66("19", "w%sf")));
    }, valuesWritten);
    mmCoreLogEnabledDefault[_0xbf66("1a", "*2*K")](mmCoreLogEnabledConfigName, () => {
      _related2[_0xbf66("1b", "HN3W")](clearTimeout, relationName);
      _related2[_0xbf66("1c", "!ego")](result);
    });
  });
}
exports[_0xbf66("1d", "rn&A")] = conditionPromise;
exports[_0xbf66("1e", "MWaD")] = emitterEventPromise;
exports[_0xbf66("1f", "@vQ^")] = timeoutPromise;

