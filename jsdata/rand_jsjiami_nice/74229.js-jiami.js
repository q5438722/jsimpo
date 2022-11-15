'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "RxdBwqnCtcOqw4EVXcKic8KIZA==", "VRbDoXfDmsOow4/DtsK2w6ESV8O4", "OsOdS8KYFG56", "wqB4w64Hw4bCn8OHRjxu", "woTCpMKHwq8XacO7GsKIwp4ZwqI=", "U2YkwrvCrMO4w4dqSsKkeMKOCGPDlsOSw6s=", "w6JQw4LDiMKHSVzCmcOVEhZsR8K7T8KsDAHCmcO+w4DCqsO2", "wqh7XnjDvTRKwrl0cA==", "w7Y4wo1hYMOTwoTDgxbCh8O9", "Q8K2w5YdwqcwwpnCi8ObZGkeXsOFBcOTBMOr", "w5PDvhPDglnCh8ODw4nCsEY=", "w5DDrsOAAMOTw4TDtsKswrHCkCrDmVwKd1vCnA==", "w5ZcwppmeGp2w6pM", "wr9xw4vCicK5wpzDrAxO", "w5ZLwppmeH1hw7g=", "GsKhZw==", "JsK4wr3DqcKBwqZXwonDpBDDpcK6", 
"UjAnw44Aw7LCucKUwrwUw7w=", "wpTDnsOtdMOSwrpZ", "W8ORwrnCtUA5SMK0", "D0fDnzbDsXF5w6xMTQ==", "w6HCkzY8AMKOdTbCvA==", "wpbCmx9vc2vCog==", "LMKUw7bDvsOIZGERwr4=", "XMOBwrzCpA48RMKnag==", "YlDDk8KVwoDDjizCkw==", "w5h+UMKRRMOu", "woNDF8O2wrZeYcKyw4Y=", "wog/GMKmcMKkaMKR", "w4YFwpcsbMOcw4k=", "wqsnw43CmMK5w6rCtEk=", "YlDDk8KVwp/Djjc=", "VD8ew7M=", "w5hhUMKKTg==", "BGJAw59Lw6Y7FMOX", "wog/GMKmYSF+wpPDsA==", "OyzCssO+woHCplfCicOkEMOlwrrCgQ==", "w6o9woImUA==", "dStICsKy", "G8KqRMKVwrs=", "e8K4XgTClA==", "a8KvwrXDhcOc", 
"wq7Dk8O+e8OR", "Hg4bw7NW", "w4N4w5PDvcOJ", "IkjCsDPDpQ==", "w5HDtArDtks=", "wqdvwqJ6VA==", "wq3DnGUAw7U=", "worDl3TCjcKcwpA=", "BDMXw5XCig==", "w4DCtQROUQ==", "w7sweMKrOQ==", "VmA1w4tr", "w6N6w5HDmMOH", "w4EqwodoZA==", "BAfCtMOjw4Y=", "fMKlwrHDscOr", "KizCoMO4w4A=", "cTw/w7XCvcOE", "w7DCncOywq3DiHB7", "FsKCQMKcQHhFbsOxw5EmwqI=", "w7vDixbDh0g=", "w7VEw4rDhcOf", "w6rDvsKDwpzCqB/DqAl4w53Cg8K3Pn3CjF9ETMONw4NxwrYJwrIaPsKcYcKiQsOfwrRZw4nDpSHDpjthT8K2f0bDi39hED7CocKmw6xpcMKSwoFlw7IQwp1Vw6zChw==", "sCfvip.bvD6WGkroThtNfK=="];
(function(obj, count, long) {
  var fn = function(target, value, str, elem, prefix) {
    value = value >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        elem = obj[str]();
        if (value === target) {
          value = elem;
          str = obj[prefix + "p"]();
        } else {
          if (value && str["replace"](/[sCfbDWGkroThtNfK=]/g, "") === value) {
            obj[method](elem);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662223;
  };
  return fn(++count, long) >> count ^ long;
})(match, 341, 87296);
var get = function(c, t) {
  c = ~~"0x"["concat"](c);
  var s = match[c];
  if (get["hbgTwQ"] === undefined) {
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
    get["kXbsYK"] = testcase;
    get["bWfqxi"] = {};
    get["hbgTwQ"] = !![];
  }
  var h = get["bWfqxi"][c];
  if (h === undefined) {
    if (get["wVZYvO"] === undefined) {
      get["wVZYvO"] = !![];
    }
    s = get["kXbsYK"](s, t);
    get["bWfqxi"][c] = s;
  } else {
    s = h;
  }
  return s;
};
import _0x1b3e40 from "../moment";
function translate(key, isFuture, locale, fn) {
  var data = {
    "HUyXb" : get("0", "n4Ka"),
    "FEItG" : get("1", "TEG&"),
    "iIFsD" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "dFAHk" : get("2", "KJ23"),
    "cDlkT" : get("3", "EWrH"),
    "UzoZb" : get("4", "#4!I"),
    "Ihxzm" : get("5", "jZza"),
    "jZpuV" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ELuQb" : get("6", "1kYT"),
    "rYNAB" : " minutit",
    "YOpXw" : get("7", "D&P*"),
    "qhQMy" : get("8", "EWrH"),
    "qzOBg" : get("9", ")L(4"),
    "qRTna" : get("a", "KehH"),
    "UnISC" : get("b", "G^10"),
    "UNtIu" : get("c", "[tvH"),
    "vCrOW" : get("d", "l1Kw"),
    "bBilY" : get("e", "mOcE"),
    "UFEft" : get("f", ")L(4"),
    "eNwtl" : get("10", "[tvH"),
    "lZedi" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "OJgog" : get("11", "KehH"),
    "BpknU" : get("12", "KehH"),
    "EuUfG" : get("13", "[tvH")
  };
  var dateFormatters = {
    "s" : [data["HUyXb"], data["FEItG"], get("14", "n4Ka")],
    "ss" : [data[get("15", "*nbB")](key, data[get("16", "qDhb")]), data[get("17", "k^]m")](key, data[get("18", "^&vx")])],
    "m" : [data[get("19", "QWpc")], data[get("1a", "KJ23")]],
    "mm" : [data[get("1b", "[tvH")](key, data[get("1c", "t3SF")]), key + data[get("1d", "WV)l")]],
    "h" : [data[get("1e", "V]$u")], data[get("1f", "v]vq")], data[get("20", "Q!NU")]],
    "hh" : [key + data["qRTna"], key + get("21", "BCZ8")],
    "d" : [data[get("22", "CY^o")], data["UNtIu"]],
    "M" : [data[get("23", "1kYT")], data[get("24", "5Y3x")], data[get("25", "xwH3")]],
    "MM" : [data["jZpuV"](key, data[get("26", "t3SF")]), data[get("27", "l1Kw")](key, data[get("28", "n4Ka")])],
    "y" : [data[get("29", "QWpc")], get("2a", "n4Ka"), data["EuUfG"]],
    "yy" : [key + get("2b", "CY^o"), data["lZedi"](key, get("2c", "D&P*"))]
  };
  if (isFuture) {
    return dateFormatters[locale][2] ? dateFormatters[locale][2] : dateFormatters[locale][1];
  }
  return fn ? dateFormatters[locale][0] : dateFormatters[locale][1];
}
export default _0x1b3e40[get("2d", "$!tp")]("et", {
  "months" : "jaanuar_veebruar_m\u00e4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember"[get("2e", "V]$u")]("_"),
  "monthsShort" : "jaan_veebr_m\u00e4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets"[get("2f", "t3SF")]("_"),
  "weekdays" : get("30", "&B7V")["split"]("_"),
  "weekdaysShort" : get("31", "Ura1")["split"]("_"),
  "weekdaysMin" : get("32", "GC9X")["split"]("_"),
  "longDateFormat" : {
    "LT" : "H:mm",
    "LTS" : get("33", "$!tp"),
    "L" : get("34", "0)T3"),
    "LL" : get("35", "qRIZ"),
    "LLL" : get("36", "Ura1"),
    "LLLL" : get("37", "t3SF")
  },
  "calendar" : {
    "sameDay" : get("38", "#4!I"),
    "nextDay" : get("39", "l1Kw"),
    "nextWeek" : get("3a", "^&vx"),
    "lastDay" : get("3b", "V]$u"),
    "lastWeek" : get("3c", "Dg(&"),
    "sameElse" : "L"
  },
  "relativeTime" : {
    "future" : get("3d", "#4!I"),
    "past" : get("3e", "&B7V"),
    "s" : translate,
    "ss" : translate,
    "m" : translate,
    "mm" : translate,
    "h" : translate,
    "hh" : translate,
    "d" : translate,
    "dd" : get("3f", "#4!I"),
    "M" : translate,
    "MM" : translate,
    "y" : translate,
    "yy" : translate
  },
  "dayOfMonthOrdinalParse" : /\d{1,2}\./,
  "ordinal" : get("40", "TEG&"),
  "week" : {
    "dow" : 1,
    "doy" : 4
  }
});

