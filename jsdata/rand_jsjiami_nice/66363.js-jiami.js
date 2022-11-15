'use strict';
var vip = "vip.v6";
var _0x4d06 = [vip, "wrDDngnDtQ==", "wp/CisKje8KFw67ChsOK", "fMKswokuw5k=", "wrrDghjDv8ON", "w5dRDcOmKxAaw5tJw7bClHdrwoY=", "w7tdwr4+SF4Gw7zCv8O0MUJAWA==", "wo1Qw6LCmyo=", "w7HCpcKwwokM", "wpprw5LCnBo=", "QsO8ZEbCiA==", "BUoBFcKF", "woDDgwYvw54=", "wq/CpMKHacKR", "BDwmIMK+", "w4xpwoYEfA==", "ClIlGMKB", "w6RewoUDaw==", "w7Ysw5Y6Ew==", "IMKDDMKpw50=", "P8OOw50dwqc=", "OcODI8OlOQ==", "aMKNQCY=", "wpM1N8OmQMO2", "e8KXXS1Mw78=", "wrzChcKCJcKwQcOj", "M8KtG8K8w4k=", "w49hw5LCpFRRb8Ot", "FsKHLsKaw5Y=", "w43ChzI8wqI=", 
"w4PDt1LCk8Kd", "Ajg6DMKG", "w5jCscKJwp4E", "w5zChMKDwrIm", "wrTDkQVoAg==", "UGfDqcOzwok=", "PkE5HsKde8K7wprDnWxKwqBtwpQc", "JcOcw4wawoDCi8KtwqbDkcOv", "fSDDjGzCkcK2woHCpCXCiCh4w6XCtg==", "R8KnVj1gw6RlwrrDllw=", "wqnDsTcqw7U=", "w4FRBsOoKBki", "wpvCrMKKC8Kb", "wpA+PMOzRsOxwpdULws=", "wrPDvVNf", "EsKaKQ==", "worDuRdBMhzDtyc=", "w6ZWwrA9UUgvwrXCpMOhMAxAWMKQWBQJwqzCjA==", "DnA1HcKJ", "BGwiHMKf", "d8KWc1kw", "REDClgnCqg==", "w4bCpcOEWcOV", "wrM/OmEK", "Z8OzdU/CqA==", "esKMTkoE", "wo7CocOGwrbDgQ==", "woTCsMOLwpvDoQ==", 
"wq/CiWdRwqw=", "F8OKM8OxGA==", "XVTCr33DtQ==", "GvOdjZigpf.v6qJcZcsrf=="];
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
          if (value && str["replace"](/[GOdjZgfqJcZcsrf=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662143;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4d06, 395, 101120);
var _0x1d04 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x4d06[c];
  if (_0x1d04["LdMCqB"] === undefined) {
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
    _0x1d04["tjBWVX"] = testcase;
    _0x1d04["LYytde"] = {};
    _0x1d04["LdMCqB"] = !![];
  }
  var e = _0x1d04["LYytde"][c];
  if (e === undefined) {
    if (_0x1d04["FzkxFm"] === undefined) {
      _0x1d04["FzkxFm"] = !![];
    }
    x = _0x1d04["tjBWVX"](x, alpha);
    _0x1d04["LYytde"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
var __importDefault = this && this[_0x1d04("0", "4W(J")] || function(obj) {
  return obj && obj[_0x1d04("1", "AQsu")] ? obj : {
    "default" : obj
  };
};
Object[_0x1d04("2", "WXvt")](exports, _0x1d04("3", "e7Jy"), {
  "value" : !![]
});
const debug_1 = __importDefault(require(_0x1d04("4", "4T89")));
const debug = debug_1[_0x1d04("5", "&4XT")]("https-proxy-agent:parse-proxy-response");
function parseProxyResponse(p) {
  var info = {
    "uDUli" : _0x1d04("6", "khx0"),
    "mfVRU" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EQUUB" : function(saveNotifs) {
      return saveNotifs();
    },
    "WwAZb" : function(require, load, callback) {
      return require(load, callback);
    },
    "kLukl" : _0x1d04("7", "EYTW"),
    "EMttj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wmVcu" : "pTcRp",
    "JJjjL" : _0x1d04("8", "n@Z$"),
    "DYVOv" : "have not received end of HTTP headers yet...",
    "DOYZM" : "got proxy server response: %o",
    "GtIvv" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "aLtab" : _0x1d04("9", "VyA2"),
    "CyHlt" : _0x1d04("a", "2Zne"),
    "UkGBV" : function(require, load, callback) {
      return require(load, callback);
    },
    "JnteB" : _0x1d04("b", "bQFa"),
    "zGFbA" : _0x1d04("c", "4W(J"),
    "pVKOa" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "hoAZF" : _0x1d04("d", "4W(J"),
    "mumJC" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  return new Promise((next, type) => {
    function cb() {
      if ("NGlKS" !== info[_0x1d04("16", "1Hh6")]) {
        action["MgcWw"](debug, "have not received end of HTTP headers yet...");
        action[_0x1d04("17", "V7Pi")](cb);
        return;
      } else {
        const result = p["read"]();
        if (result) {
          info[_0x1d04("18", "auXT")](range, result);
        } else {
          p[_0x1d04("19", "Any7")](_0x1d04("1a", "68wl"), cb);
        }
      }
    }
    function message() {
      p["removeListener"](action[_0x1d04("1b", "02jf")], type);
      p["removeListener"](_0x1d04("1c", "Any7"), value);
      p[_0x1d04("1d", "&4XT")]("close", PL$25);
      p[_0x1d04("1e", "bQFa")](action[_0x1d04("1f", "]U)U")], cb);
    }
    function PL$25(e) {
      action[_0x1d04("20", "O4dl")](debug, action[_0x1d04("21", "]U)U")], e);
    }
    function type() {
      if (_0x1d04("22", "A1H3") !== _0x1d04("23", "4W(J")) {
        action[_0x1d04("24", "4T89")](debug, action[_0x1d04("25", "68wl")]);
      } else {
        debug(action[_0x1d04("26", "]DPe")]);
      }
    }
    function value(result) {
      info[_0x1d04("27", "bQFa")](message);
      info["WwAZb"](debug, info[_0x1d04("28", "4W(J")], result);
      info[_0x1d04("29", "bQFa")](type, result);
    }
    function range(data) {
      var logger = {
        "SeAtn" : function(value) {
          return info[_0x1d04("2a", "9$%n")](value);
        },
        "WPKXL" : function(key, value, i18n) {
          return info[_0x1d04("2b", "VyA2")](key, value, i18n);
        },
        "NwFaM" : info["kLukl"],
        "LMsMQ" : function(rootNode, result) {
          return info[_0x1d04("2c", "AQsu")](rootNode, result);
        }
      };
      if (_0x1d04("2d", "V7Pi") !== info["wmVcu"]) {
        container[_0x1d04("2e", "e7Jy")](data);
        bufferString = bufferString + data[_0x1d04("2f", "EYTW")];
        const p = Buffer[_0x1d04("30", "e7Jy")](container, bufferString);
        const _0x2e935a = p[_0x1d04("31", "khx0")](info["JJjjL"]);
        if (_0x2e935a === -1) {
          debug(info[_0x1d04("32", "VyA2")]);
          cb();
          return;
        }
        const i18n = p[_0x1d04("33", "&H3$")](_0x1d04("34", "VyA2"), 0, p["indexOf"]("\r\n"));
        const statusCode = +i18n[_0x1d04("35", "n@Z$")](" ")[1];
        info[_0x1d04("36", "RXAU")](debug, info[_0x1d04("37", "]DPe")], i18n);
        next({
          "statusCode" : statusCode,
          "buffered" : p
        });
      } else {
        logger[_0x1d04("38", "O4dl")](message);
        logger[_0x1d04("39", "O4dl")](debug, logger["NwFaM"], err);
        logger[_0x1d04("3a", "2Zne")](type, err);
      }
    }
    var action = {
      "MgcWw" : function(rootNode, result) {
        return info[_0x1d04("e", "A(Xo")](rootNode, result);
      },
      "DeAbU" : function(value) {
        return info[_0x1d04("f", "P3@f")](value);
      },
      "rRBdU" : info[_0x1d04("10", "UHmA")],
      "EYHPY" : info[_0x1d04("11", "klea")],
      "zqxcf" : function(key, value, i18n) {
        return info[_0x1d04("12", "A1H3")](key, value, i18n);
      },
      "RbxWi" : info[_0x1d04("13", "A(Xo")],
      "BKEvu" : info[_0x1d04("14", "pncP")],
      "MWSpL" : function(rootNode, result) {
        return info[_0x1d04("15", "pncP")](rootNode, result);
      }
    };
    let bufferString = 0;
    const container = [];
    p["on"](info["hoAZF"], value);
    p["on"]("close", PL$25);
    p["on"]("end", type);
    info[_0x1d04("3b", "Jd(u")](cb);
  });
}
exports["default"] = parseProxyResponse;

