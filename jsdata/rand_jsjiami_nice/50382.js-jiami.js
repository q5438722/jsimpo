'use strict';
var vip = "vip.v6";
var _0x15d0 = [vip, "McK6EMO9w7tfwpnDqVRvw4g=", "w7LCu0kNA1HCucOTwok=", "wqXDrhoIwoLDpsK8HA==", "wqzDuR4OwpXDuw==", "OsKII8Osw5s=", "MTbCpi3Cow==", "CcK4wqnCrx4=", "w5vDnj/DjMOR", "YCkHw5Bv", "w4jCl8OsEmvDuCPCrcK5", "wpTDt8KmN2g=", "wpvDnMKv", "MjUrTF4=", "cMKJHMOQw4JBYMKNw5c=", "w4vDpwfDpkLCk38JI07ChMKTwrVOwq/Dn8ONw4cDw4HCnX0Wwoc1w6F8VnbCpMONNSoTw5U/VRwGwobCkDFFdMOJOgvDnMKKwqcQTsOww6fCnsOrcDvDv8KwNsObHzYUVsO+WyNcwoE3ciLDucKifWjCnW86WMO8", "KMK/wqhmXzTCpSI=", "JMKzwrxGfyDCjwjCvRI=", "woHCszlvW8OAdcOmw5PDsMKqwr3CscKy", 
"wpXCszFjO8KTBcOUNRfCiMOYwp89RUvDrsKcw5XDo3PDtRTCk8KDwoV4w7NrwqYX", "N8KAwo/CisK8wrHClMO8CSA=", "W8K1w5F+w6zChcKvwqfDqDg=", "wr/DssOdwqrDpcOlRWYAPMKq", "J2HCnS1XEy7Cix0=", "w7zCtcOsCsOLw7knw715w5M=", "M8OGQMOcw4wMIMKH", "w7LDrwLDpgPCjHk8BA==", "wrbDusOTwrnDp8KkQG8=", "wrPDlMOkw6XDuxHDgMKS", "w6vCscOrQ8OJw7UGw71ww5PDgsKk", "wrTCizB/WA==", "wqnCqDB1Rw==", "w5QiKMO9ZQ==", "FcKHw6xgdsKnPcKbwq3CjHnDh8Kxw5hvby0sw4YYwoMwRsKKJ8OzL8OvTsKIwqQ=", "w5DDtEsHw4M=", "wonCqSshw4XDkMKZRsKlHMKMEjBgwpnCkcKKa8OBSw==", 
"w55yFDjDpX3CrA==", "w4/DpWILw5o=", "wqrDq8O2w43Dig==", "DysQQGrCmcKKw6gXw5vCuQ==", "WMOnw6PCoVcJWiZmw4XCuSjCkwFNDHg=", "dsK9woJww4nCqDsRJiPCm8ObW3TDiDXCkWIZw4/CnMKQwrY=", "wqMsw4FCwqdvwrs0Cko3wrw=", "MQHCjCvCsA==", "w4AUGsOaTA==", "ZsKIw4nCuU4=", "wo7DnsKgKsOHTEwY", "MxPCkzrClQ==", "wojDgsOyAFg=", "IMKMFMKTTg==", "wpl3dyhi", "R2Isw4VE", "w7dfahTDng==", "UGpQwq/DgQ==", "w4MNNMOifcK1KhzChQA5", "vuRip.kbv6DFKLxNqJlCCsa=="];
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
          if (value && str["replace"](/[uRkbDFKLxNqJlCCsa=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662027;
  };
  return fn(++count, long) >> count ^ long;
})(_0x15d0, 163, 41728);
var _0x4f49 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x15d0[c];
  if (_0x4f49["IjwWyY"] === undefined) {
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
    _0x4f49["hiNLfz"] = testcase;
    _0x4f49["IQKbbN"] = {};
    _0x4f49["IjwWyY"] = !![];
  }
  var e = _0x4f49["IQKbbN"][c];
  if (e === undefined) {
    if (_0x4f49["SOtaGj"] === undefined) {
      _0x4f49["SOtaGj"] = !![];
    }
    x = _0x4f49["hiNLfz"](x, alpha);
    _0x4f49["IQKbbN"][c] = x;
  } else {
    x = e;
  }
  return x;
};
(function(global, forgeConfig) {
  var hooks = {
    "fERzA" : function(value, joiner) {
      return value !== joiner;
    },
    "EbAor" : _0x4f49("0", "CRY5"),
    "rNeHl" : function(name, initialValue) {
      return name === initialValue;
    },
    "AtWYs" : _0x4f49("1", "VeIp"),
    "NDKsK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "OgpEc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zYisG" : function(require, load, callback) {
      return require(load, callback);
    },
    "Mafsf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (typeof exports === _0x4f49("2", "VeIp") && hooks[_0x4f49("3", "va$E")](typeof module, hooks[_0x4f49("4", ")AKU")]) && hooks[_0x4f49("5", "Mq5P")](typeof require, hooks["AtWYs"])) {
    hooks[_0x4f49("6", "8K#z")](forgeConfig, hooks[_0x4f49("7", "SQw4")](require, _0x4f49("8", "uuP1")));
  } else {
    if (hooks[_0x4f49("9", "uuP1")](typeof define, hooks["AtWYs"]) && define[_0x4f49("a", "@#^7")]) {
      hooks[_0x4f49("b", "Qj1E")](define, [_0x4f49("c", "o6il")], forgeConfig);
    } else {
      hooks["Mafsf"](forgeConfig, global["moment"]);
    }
  }
})(this, function(canCreateDiscussions) {
  var match = {
    "nSlck" : _0x4f49("d", "^Z$t"),
    "zXyeq" : "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi",
    "laEem" : _0x4f49("e", "zw@T"),
    "tVsCP" : _0x4f49("f", "zw@T"),
    "EUkia" : _0x4f49("10", "CIra"),
    "nnKBX" : "[jana] LT",
    "zOgUT" : _0x4f49("11", "3(yj"),
    "GGtxD" : _0x4f49("12", "FBzM"),
    "mILWy" : _0x4f49("13", "Mdj3"),
    "Ssjwl" : _0x4f49("14", "wIYa"),
    "cnlao" : _0x4f49("15", "v(nD"),
    "TUXAy" : _0x4f49("16", "RF1b"),
    "AEDAV" : _0x4f49("17", "o6il"),
    "qeJZU" : _0x4f49("18", "^Z$t"),
    "vBRSw" : _0x4f49("19", "wIYa"),
    "YrfTS" : _0x4f49("1a", "0Hv]")
  };
  "use strict";
  var cd = canCreateDiscussions[_0x4f49("1b", "RF1b")]("sw", {
    "months" : match[_0x4f49("1c", "CIra")][_0x4f49("1d", "CIra")]("_"),
    "monthsShort" : "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des"["split"]("_"),
    "weekdays" : match[_0x4f49("1e", "f0zJ")]["split"]("_"),
    "weekdaysShort" : _0x4f49("1f", "pV1t")[_0x4f49("20", "EPPr")]("_"),
    "weekdaysMin" : _0x4f49("21", "VeIp")["split"]("_"),
    "weekdaysParseExact" : !![],
    "longDateFormat" : {
      "LT" : _0x4f49("22", "hCWU"),
      "LTS" : match[_0x4f49("23", "EPPr")],
      "L" : match[_0x4f49("24", "0Hv]")],
      "LL" : _0x4f49("25", "Q]Hr"),
      "LLL" : _0x4f49("26", "V&!W"),
      "LLLL" : _0x4f49("27", "Ck7R")
    },
    "calendar" : {
      "sameDay" : _0x4f49("28", "U8^M"),
      "nextDay" : match[_0x4f49("29", ")AKU")],
      "nextWeek" : "[wiki ijayo] dddd [saat] LT",
      "lastDay" : match[_0x4f49("2a", "f0zJ")],
      "lastWeek" : match[_0x4f49("2b", "V&!W")],
      "sameElse" : "L"
    },
    "relativeTime" : {
      "future" : "%s baadaye",
      "past" : _0x4f49("2c", "@#^7"),
      "s" : match[_0x4f49("2d", ")AKU")],
      "ss" : match[_0x4f49("2e", "6fzQ")],
      "m" : match[_0x4f49("2f", "INzq")],
      "mm" : match[_0x4f49("30", "Y8%u")],
      "h" : match[_0x4f49("31", "hLe*")],
      "hh" : match[_0x4f49("32", "hCWU")],
      "d" : match[_0x4f49("33", "8iQo")],
      "dd" : "siku %d",
      "M" : _0x4f49("34", "f0zJ"),
      "MM" : match["vBRSw"],
      "y" : _0x4f49("35", "va$E"),
      "yy" : match["YrfTS"]
    },
    "week" : {
      "dow" : 1,
      "doy" : 7
    }
  });
  return cd;
});

