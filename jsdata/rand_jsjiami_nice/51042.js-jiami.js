'use strict';
var vip = "vip.v6";
var _0x10b4 = [vip, "w6DDgsKuIE0=", "w7M6w6x8EQ==", "JcO3EMKKcA==", "ESvCvwEi", "w6fDhMK2B3LDq8ONwpTDrMKXwp9EwoDCoMOAw7/CjMK6e8OMeFw=", "wqDCjEbDk24=", "w6HDnsK8G2k=", "IgnChBsx", "EsK/I3jDh8Oz", "wrLDuBzDgVta", "ADtpdcO1", "HDBDf8K9", "ZzzClcKVRQ==", "XR16wqgP", "U8OzdcOHfw==", "w7F5w4AePA==", "esK0w65Jwo8=", "w4jDsHvCuyzChw==", "PcK8VcKHQw==", "w6QTwqVbw7nDsw==", "w4zDicKkw4HDkA==", "w7nDhWlT", "eyNmwrMWfg==", "w4nDt3g=", "w4ARw5U0w5sZV2BAw4Q=", "BTfCtw81OQ==", "Lk8MbsOB", "wpI0f8KywpPCiA==", "wrYPXcKAwrs=", 
"woAoAsKVw7A=", "w6HDn1TCnD4=", "wrfDhi3Dgl0=", "w4FmwoPCiDNXEcK5w4vDrA==", "EcOEDcKZSg==", "w6cnw5g=", "ZcOBZsOZ", "TMOWw5o=", "OksQSsOYcw==", "w4/Dq3nCvyvCljTCukrDmMKIwoTDrVfCtQ==", "w4V6w4tmfx8=", "OMKvDA==", "w73DnVk=", "IMK/Xw==", "wp7Cu2w=", "wrHCsG/DsU9R", "wqbCjMOEw48MRQ==", "aj56wrcFag==", "WcOOHj84w6RjS2UnNEgxwpY3wr3DnyvCm2XCkATDvEXDnzXClDoYIAYGc8O8wqXCrjDCugPCsQ==", "wokEL8K8w4fCmQ==", "w4NnwoU=", "eDlrwrsN", "w6A8w5o=", "w4Afw7vDu8Kf", "woMUXsKXwqU=", "w6Rie8Oz", "w6nDknRNw7jCpxk=", "AwbCkRkC", 
"N8OYAcKMUVXDnjjCs8Ow", "TABWRcKx", "w4BhwoDCjyJA", "w6vDnFPCvkc=", "w7VpbA==", "woXDpDfCvA==", "vSip.vI6hFBYXahmDfDXZIc=="];
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
          if (value && str["replace"](/[SIhFBYXahmDfDXZIc=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662037;
  };
  return fn(++count, long) >> count ^ long;
})(_0x10b4, 289, 73984);
var _0x36b4 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x10b4[c];
  if (_0x36b4["rnMfDF"] === undefined) {
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
    _0x36b4["sCWbjh"] = testcase;
    _0x36b4["eSwpjm"] = {};
    _0x36b4["rnMfDF"] = !![];
  }
  var e = _0x36b4["eSwpjm"][c];
  if (e === undefined) {
    if (_0x36b4["FXKGIl"] === undefined) {
      _0x36b4["FXKGIl"] = !![];
    }
    x = _0x36b4["sCWbjh"](x, alpha);
    _0x36b4["eSwpjm"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require("../common.js");
const crypto = require(_0x36b4("0", "MNHc"));
const bench = common[_0x36b4("1", "R$9m")](main, {
  "writes" : [500],
  "algo" : [_0x36b4("2", "o^j2"), _0x36b4("3", "$&^4")],
  "type" : [_0x36b4("4", "B[vK"), _0x36b4("5", "$&^4"), "buf"],
  "out" : [_0x36b4("6", "ArMY"), "binary", _0x36b4("7", "!Ly!")],
  "len" : [2, 1024, 102400, 1024 * 1024],
  "api" : [_0x36b4("8", "SpGj"), _0x36b4("9", "rmFc")]
});
function main({
  api : text,
  type : status,
  len : event,
  out : cesiumViewerCss,
  writes : fn,
  algo : algo
}) {
  var args = {
    "QSIok" : function(value, joiner) {
      return value !== joiner;
    },
    "BVGjr" : function(name, initialValue) {
      return name === initialValue;
    },
    "sIODD" : "stream",
    "jyTww" : function(value, joiner) {
      return value !== joiner;
    },
    "rhsIP" : _0x36b4("a", "RWEO"),
    "TeqNs" : _0x36b4("b", ")[[4"),
    "nriEU" : _0x36b4("c", "8u7Z"),
    "fOajO" : _0x36b4("d", "rmFc"),
    "csxJK" : "utf8",
    "keXQd" : _0x36b4("e", "zC#x"),
    "RNWup" : function(require, load, callback, numberOfLogs, expectedCounterValue, buttonId, beforeId) {
      return require(load, callback, numberOfLogs, expectedCounterValue, buttonId, beforeId);
    }
  };
  if (args[_0x36b4("f", "zC#x")](text, args[_0x36b4("10", "@@Z5")]) && /^v0\.[0-8]\./[_0x36b4("11", "3NBT")](process[_0x36b4("12", "mIl6")])) {
    if (args[_0x36b4("13", "[(B5")]("EHbGT", "EHbGT")) {
      const response = crypto[_0x36b4("14", "ywov")](algo);
      if (args[_0x36b4("15", "3d$c")](outEnc, _0x36b4("16", "8u7Z"))) {
        response["setEncoding"](outEnc);
      }
      response[_0x36b4("17", "B[vK")](data, predef);
      response[_0x36b4("18", "3NBT")]();
      response[_0x36b4("19", "fDdy")]();
    } else {
      console["error"](args[_0x36b4("1a", "KgSb")]);
      text = args[_0x36b4("1b", "qf%&")];
    }
  }
  let data;
  let predef;
  switch(status) {
    case args["nriEU"]:
      data = "a"["repeat"](event);
      predef = args["fOajO"];
      break;
    case "utf":
      data = "\u00fc"["repeat"](event / 2);
      predef = args["csxJK"];
      break;
    case args[_0x36b4("1c", "iHQM")]:
      data = Buffer[_0x36b4("1d", "mPaV")](event, "b");
      break;
    default:
      throw new Error(_0x36b4("1e", "KgSb") + status);
  }
  const tokens = args["BVGjr"](text, args[_0x36b4("1f", "!Ly!")]) ? streamWrite : legacyWrite;
  bench[_0x36b4("20", "KgSb")]();
  args[_0x36b4("21", "mPaV")](tokens, algo, data, predef, fn, event, cesiumViewerCss);
}
function legacyWrite(algo, data, selector, message, len, e) {
  var options = {
    "DWrzk" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "GkjJv" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "BrRuQ" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "KIPGX" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "hwlSP" : function(name, initialValue) {
      return name === initialValue;
    },
    "Xuhcw" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "gdcDf" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "QLsBq" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "FMgIY" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "BrYfz" : function(value, joiner) {
      return value !== joiner;
    },
    "XekHw" : "pTTlB",
    "wveTm" : function(name, initialValue) {
      return name === initialValue;
    },
    "PHyMh" : _0x36b4("22", "drCB"),
    "VTwEe" : _0x36b4("23", "UAk6")
  };
  const datum = options[_0x36b4("24", "hHdV")](message, len);
  const toast = options[_0x36b4("25", "dXTD")](datum, 8);
  const __to = options["gdcDf"](toast, options["QLsBq"](1024, 1024) * 1024);
  for (; options["FMgIY"](message--, 0);) {
    if (options[_0x36b4("26", "cxOw")](options["XekHw"], options["XekHw"])) {
      const datum = options[_0x36b4("27", "rmFc")](message, len);
      const toast = options[_0x36b4("28", "Etx$")](datum, 8);
      const artistTrack = options[_0x36b4("29", "o^j2")](toast, options["BrRuQ"](1024, 1024) * 1024);
      for (; options[_0x36b4("2a", "&!(d")](message--, 0);) {
        const self = crypto["createHash"](algo);
        self["update"](data, selector);
        let artistTrack = self[_0x36b4("2b", "R$9m")](e);
        if (options[_0x36b4("2c", "$&^4")](e, _0x36b4("2d", "&LkR")) && options[_0x36b4("2e", "PXJY")](typeof artistTrack, "string")) {
          artistTrack = Buffer[_0x36b4("2f", "mIl6")](artistTrack, _0x36b4("30", "rmFc"));
        }
      }
      bench[_0x36b4("31", "R$9m")](artistTrack);
    } else {
      const window = crypto[_0x36b4("32", "$R%&")](algo);
      window[_0x36b4("33", "mPaV")](data, selector);
      let body = window["digest"](e);
      if (options["wveTm"](e, options["PHyMh"]) && options[_0x36b4("34", "MNHc")](typeof body, options["VTwEe"])) {
        body = Buffer["from"](body, _0x36b4("35", "@@Z5"));
      }
    }
  }
  bench["end"](__to);
}
function streamWrite(algo, value, len, id, data, message) {
  var window = {
    "FRLSZ" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "WMnlJ" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "eIJHT" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "MFHBa" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "vJCjh" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "TSqwp" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "Enito" : function(value, joiner) {
      return value !== joiner;
    },
    "MLKZb" : "buffer"
  };
  const processEvaluatorsCallback = window[_0x36b4("36", "@@Z5")](id, data);
  const universalSendCommand = window["WMnlJ"](processEvaluatorsCallback, 8);
  const GET_AUTH_URL_TIMEOUT = window[_0x36b4("37", ")[[4")](universalSendCommand, window[_0x36b4("38", "R$9m")](window[_0x36b4("39", "UAk6")](1024, 1024), 1024));
  for (; window["TSqwp"](id--, 0);) {
    const options = crypto[_0x36b4("3a", "8u7Z")](algo);
    if (window[_0x36b4("3b", "ywov")](message, window["MLKZb"])) {
      options["setEncoding"](message);
    }
    options["write"](value, len);
    options[_0x36b4("3c", "zC#x")]();
    options[_0x36b4("3d", "Etx$")]();
  }
  bench[_0x36b4("3e", "3FIq")](GET_AUTH_URL_TIMEOUT);
}
;
