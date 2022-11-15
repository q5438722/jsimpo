/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x231c = [vip, "w4tKw6bDkcOIRsOF", "wroqBAZX", "XsOSw5TDtSY=", "b2PDpTF9", "akwkwotk", "KWDDkjUD", "D8O8alrCtA==", "IWXCisOww4I=", "YWnDgB17", "PlTDtDgq", "acO6Xw3DgQ==", "VofvipA.bjv6CVnmkrYESwZ=="];
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
          if (value && str["replace"](/[VofAbjCVnmkrYESwZ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662319;
  };
  return fn(++count, long) >> count ^ long;
})(_0x231c, 408, 104448);
var _0x4d03 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x231c[a];
  if (_0x4d03["oIROlB"] === undefined) {
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
    _0x4d03["TcFAAm"] = testcase;
    _0x4d03["jCcYFy"] = {};
    _0x4d03["oIROlB"] = !![];
  }
  var A = _0x4d03["jCcYFy"][a];
  if (A === undefined) {
    if (_0x4d03["mLlcGW"] === undefined) {
      _0x4d03["mLlcGW"] = !![];
    }
    value = _0x4d03["TcFAAm"](value, opt_max);
    _0x4d03["jCcYFy"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var PropertyValueSet = function(data, index, value, message, params, callback) {
  var window = {
    "hosfo" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "qpvfm" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "JrBMO" : function(name, initialValue) {
      return name === initialValue;
    },
    "PoThY" : function(name, initialValue) {
      return name === initialValue;
    },
    "feVJi" : "zhtVQ",
    "fDPkD" : function(name, initialValue) {
      return name === initialValue;
    },
    "fOYAf" : function(value, joiner) {
      return value !== joiner;
    },
    "TkkRJ" : _0x4d03("0", "%xg5"),
    "DtIdu" : function(name, initialValue) {
      return name === initialValue;
    },
    "tcZJi" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "ihsmE" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    },
    "qybYO" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    }
  };
  if (window["JrBMO"](message, undefined)) {
    message = 0;
  }
  if (window[_0x4d03("1", ")d2K")](params, undefined)) {
    if (window[_0x4d03("2", "7F)C")] === _0x4d03("3", "BoVG")) {
      params = 0;
    } else {
      state = params;
      for (; window["hosfo"](state, cluster); state++) {
        data[state][index] = window["qpvfm"](value, _renderTimer * message);
        _renderTimer++;
      }
    }
  }
  if (window[_0x4d03("4", "br!]")](callback, undefined)) {
    if (window[_0x4d03("5", "i9uP")](_0x4d03("6", "*[t1"), window["TkkRJ"])) {
      callback = 1;
    } else {
      params = 0;
    }
  }
  var state;
  var _renderTimer = 0;
  var cluster = data["length"];
  if (window["DtIdu"](callback, 1)) {
    state = params;
    for (; window[_0x4d03("7", "7F)C")](state, cluster); state++) {
      data[state][index] = window["qpvfm"](value, window["tcZJi"](_renderTimer, message));
      _renderTimer++;
    }
  } else {
    state = params;
    for (; window["ihsmE"](state, 0); state--) {
      data[state][index] = window[_0x4d03("8", "br!]")](value, window[_0x4d03("9", "2*m$")](_renderTimer, message));
      _renderTimer++;
    }
  }
  return data;
};
module[_0x4d03("a", "2eZl")] = PropertyValueSet;

