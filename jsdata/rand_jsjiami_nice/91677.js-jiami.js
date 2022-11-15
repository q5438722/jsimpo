'use strict';
var vip = "vip.v6";
var _0x84d9 = [vip, "w6Vmw4loCTbDgQ==", "w5UjZy9v", "X1ZEw6A+w4Y4UA==", "agXDmGbCuQ==", "f8KAw43Cnxo=", "CMO9Ohg3", "w41NwqzDiMOYw4XCmQ==", "AV/Du2Nx", "w5VzIcKmcA==", "dx7DmnzCvA==", "w7hHwrXDlMOHwpHCjnVhwq7Cn8OewoDDmMKyNgd1wpNID8KBw6PDuwRWQ8Kfbxolw6w=", "XUvDisO5c8ONGcKEwp4=", "wroTAMKsw7A=", "ScK5w7XCpQfCkFnCkWvCgsKdw43DnG1DUsKCGcK2w7d8wp8cw59OWsKKCsKPPsORHQ==", "BQ7DomY/GcOD", "E0FyUkPDl3Y=", "w4MTTmZB", "woU7w6RWwqE=", "w74DSMKSIi9LQg==", "NcOyw74cXw==", "Vkkjw6wAZcOc", "w6F6w6JUKQ==", "KEHDgUdMKHHCsWXCrzMiwqFewoDDjcOhVcOFwp8vAxsNJg==", 
"wofCsMOh", "b3Zuw4fDgcKQwoTCoMODR0xUw6jDmMKKwqR+A10=", "w4PCl8KIw47ChUoZ", "wpomw77DksKA", "w6nCjsKEw6TCkg==", "wpfDkHLDkCk=", "wpRxw63CqsKBB8KBwpF1", "w4JWcDfCtg17w67Dog==", "w6p8w6Z+", "wpICZsOXw4s=", "wokkw51wwoc=", "f14+YsKo", "NMO8w7o1eCcFw5vCig==", "vifxp.Mqv6WUTSkmkGkZHGj=="];
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
          if (value && str["replace"](/[fxMqWUTSkmkGkZHGj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662376;
  };
  return fn(++count, long) >> count ^ long;
})(_0x84d9, 133, 34048);
var _0x4e94 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x84d9[c];
  if (_0x4e94["FpZyTw"] === undefined) {
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
    _0x4e94["iHUBBJ"] = testcase;
    _0x4e94["uFEOFt"] = {};
    _0x4e94["FpZyTw"] = !![];
  }
  var e = _0x4e94["uFEOFt"][c];
  if (e === undefined) {
    if (_0x4e94["abufre"] === undefined) {
      _0x4e94["abufre"] = !![];
    }
    x = _0x4e94["iHUBBJ"](x, alpha);
    _0x4e94["uFEOFt"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const Prism = require(_0x4e94("0", "g2[d"));
const prismComponents = require("prismjs/components");
const getBaseLanguageName = (a, c = prismComponents) => {
  var keyNames = {
    "wfETK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fafPZ" : function(name, initialValue) {
      return name === initialValue;
    },
    "zcemJ" : _0x4e94("1", "k$kG"),
    "ddVSZ" : _0x4e94("2", "g2[d"),
    "rMAIV" : _0x4e94("3", "gDu1")
  };
  if (c[_0x4e94("4", "sQ$V")][a]) {
    return a;
  }
  return Object["keys"](c[_0x4e94("5", "sz)Y")])[_0x4e94("6", "WlR$")]((predicate) => {
    if (keyNames[_0x4e94("7", "Df8V")](_0x4e94("8", "rx&m"), keyNames[_0x4e94("9", "MaIt")])) {
      const {
        alias : data
      } = c[_0x4e94("a", "37Cs")][predicate];
      if (!data) {
        return ![];
      }
      if (Array[_0x4e94("b", "WlR$")](data)) {
        if (keyNames[_0x4e94("c", "BYoZ")]("qCPcU", keyNames["ddVSZ"])) {
          return;
        } else {
          return data[_0x4e94("d", "lENj")](a);
        }
      } else {
        if (keyNames[_0x4e94("e", "Xd1#")] === _0x4e94("f", "@W2%")) {
          return data === a;
        } else {
          keyNames[_0x4e94("10", "6&iN")](loadPrismLanguage, languageData["require"]);
        }
      }
    } else {
      return alias === a;
    }
  });
};
module[_0x4e94("11", "bEEA")] = function build(excludeQuery) {
  var extendedRegExp = {
    "oVCSS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TFJIz" : function(name, initialValue) {
      return name === initialValue;
    },
    "yxYlh" : _0x4e94("12", "T%V3"),
    "bZMMT" : _0x4e94("13", "87RN"),
    "mojNR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const i = extendedRegExp[_0x4e94("14", "Xd1#")](getBaseLanguageName, excludeQuery);
  if (!i) {
    throw new Error(_0x4e94("15", "bEEA") + excludeQuery + "'.");
  }
  if (Prism[_0x4e94("16", "Du7J")][i]) {
    return;
  }
  const data = prismComponents["languages"][i];
  if (extendedRegExp[_0x4e94("17", "SShd")](data["option"], "default")) {
    if (extendedRegExp["yxYlh"] === "RQqdB") {
      throw new Error(_0x4e94("18", "@W2%") + excludeQuery + "'.");
    } else {
      return;
    }
  }
  if (data["require"]) {
    if (Array["isArray"](data[_0x4e94("19", "#n*(")])) {
      data["require"][_0x4e94("1a", "uC48")](build);
    } else {
      if (extendedRegExp[_0x4e94("1b", "bO!k")] !== extendedRegExp[_0x4e94("1c", "rx&m")]) {
        return alias[_0x4e94("1d", "gqJW")](nameOrAlias);
      } else {
        extendedRegExp[_0x4e94("1e", "37Cs")](build, data[_0x4e94("1f", "v*Qb")]);
      }
    }
  }
  extendedRegExp[_0x4e94("20", "WlR$")](require, _0x4e94("21", "T%V3") + i + _0x4e94("22", "dnd5"));
};
module["exports"][_0x4e94("23", "xHqR")] = getBaseLanguageName;

