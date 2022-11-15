'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w5ghwrzDmgE=", "XljDpHfCkg==", "w5g6wpXCkMK2Sg==", "QviVmcLnp.mvE6nAuKZNcZOC=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[QVmcLnmEnAuKZNcZOC=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662269;
  };
  return fn(++count, size) >> count ^ size;
})(match, 327, 83712);
var data = function(name, options) {
  name = ~~"0x"["concat"](name);
  var val = match[name];
  if (data["AHqymo"] === undefined) {
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
    data["Goltnj"] = testcase;
    data["uzooaX"] = {};
    data["AHqymo"] = !![];
  }
  var ob = data["uzooaX"][name];
  if (ob === undefined) {
    if (data["XMnYMm"] === undefined) {
      data["XMnYMm"] = !![];
    }
    val = data["Goltnj"](val, options);
    data["uzooaX"][name] = val;
  } else {
    val = ob;
  }
  return val;
};
import{
  looseEqual as looseEqual
}from "uni-shared";
function element(settings, style, value) {
  settings[style] = value;
}
function displayLatest(songsByAlbum, songsByAlbumMeta) {
  var KUTE = {
    "aVWdS" : function(require, load, callback) {
      return require(load, callback);
    },
    "nNldU" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  let value;
  let i;
  let ops;
  let from;
  for (i in songsByAlbum) {
    ops = songsByAlbum[i];
    from = songsByAlbumMeta[i];
    if (!KUTE[data("0", "*OoC")](looseEqual, from, ops)) {
      KUTE[data("1", "WL5U")](element, value || (value = Object[data("2", "h7&]")](null)), i, ops);
    }
  }
  return value;
}
function diff(snapshots, options, key) {
  var compiledMatchers = {
    "KJOmG" : function(require, load, callback) {
      return require(load, callback);
    },
    "nOJqT" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  let i;
  let snap;
  let xhr;
  for (i in snapshots) {
    snap = snapshots[i];
    xhr = options[i];
    if (!xhr) {
      element(key, i, snap);
      continue;
    }
    const base = compiledMatchers["KJOmG"](displayLatest, snap, xhr);
    if (base) {
      compiledMatchers["nOJqT"](element, key, i, base);
    }
  }
  return key;
}
export{
  diff as diff
};

