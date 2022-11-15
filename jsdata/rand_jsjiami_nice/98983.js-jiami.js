'use strict';
var vip = "vip.v6";
var _0x50e7 = [vip, "OXUUwrnCqcOsLw==", "wqLCscO7LcOU", "w50pbGwM", "ecKCeWwsOi0Zw60=", "wp/DhcKxw5bCoA==", "ZjbCpyRs", "asK2wqMLwrg=", "w6ZYX1jDpg==", "wq1ceMOtw7E=", "VAAPJ8Ku", "w7BUwp8=", "M8OIwrc2UMOHw49cwp4TworDmB8Tw498Gg/CvcOQ", "wqDDi3YQwog=", "wr/DikUpwq4=", "w5whw6Y=", "U8KiF2HCszXDsi8l", "wrbCpMOEw7PCvw==", "eHvCgy7CqcO0w6zDqhVxwpxpw7hMWsOiT1DDgmbCnSfDssOBwp7CvwgZwpDCiybCm11AwpbDmkPCjEUEwo5FfBTDuTlGw7xcwqbDh8KQKlPDgSfCsEQOw5PDl0HDvjvCsRHClsK0wqXCvsKaw6c=", "NsKBYcO8wp8=", "XcKEw47DvMKo", 
"AsKfw6c=", "w5kmw6tRWsOnwp1xw4bDjcO3AzvDq8OaTkbCi8KEbg==", "wqLCgMOTw7vCtcK+EDES", "e8KPwr0=", "w45TKsKNwpFOw7/CiSHDmsOnwoHCu8KIw4PCmxTDlg==", "wpnDmMKhw5bCvg==", "H8K7fMOvwqE=", "wrDCrjzCksKwNT3Ck3FvJMOvKMKrw4HCrEUKBwclwpo9w6YlFw==", "wpDDl8Khc8K0w6PDnHVrwq7DisKcwqvDiMKnwr7DlMO1UjjDu8OHw5tSwrjCksKOJzbDu8OUw7ttw63Dv8KNGC/DuS/DoGfDgCTDnQ==", "w4LCrMKs", "cC7CtRQEwpZpwobCvMObwo4hw4VKw6zDjA==", "BMKZw7DDlw==", "T23DjcK8QlM=", "w4VgwqBjaHvChmdtUCbDriHCqMKPw49ueR3ChwNVwrcdwppOw5DCn1EUwpLCrCR5wojCmCECw79bwoXDosKmw7kYw4smEF9iwoM=", 
"wp9gwr1h", "LG7CmMK/cjcT", "w48YTF8wEnp5w5owZEEqwqZIw7PCiBd0G8OQdcKmwoHCusOFw7xkwrvDlELDi8Kv", "wqHCj8Obw6vCtsKxDDsbw4olw5JObCXCng==", "XMOCEn7Dkg==", "HsOAWwp2", "QwszAMKqwrBswo4=", "XWfDlMKtRGFFZ8O6", "tvAipwFNz.hzMvldO6nfTaPq=="];
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
          if (value && str["replace"](/[tAwFNzhzMldOnfTaPq=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662988;
  };
  return fn(++count, long) >> count ^ long;
})(_0x50e7, 447, 114432);
var _0x577d = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x50e7[c];
  if (_0x577d["VFjCJC"] === undefined) {
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
    _0x577d["UwUDoe"] = testcase;
    _0x577d["dVzimI"] = {};
    _0x577d["VFjCJC"] = !![];
  }
  var e = _0x577d["dVzimI"][c];
  if (e === undefined) {
    if (_0x577d["YKZCoA"] === undefined) {
      _0x577d["YKZCoA"] = !![];
    }
    x = _0x577d["UwUDoe"](x, alpha);
    _0x577d["dVzimI"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const chai = require("chai");
const path = require("path");
const overrideEnv = require(_0x577d("0", ")O08"));
const fs = require("fs");
const conditionallyLoadDotenv = require(_0x577d("1", "ReP3"));
chai[_0x577d("2", "InVl")](require(_0x577d("3", ")Moo")));
const expect = require(_0x577d("4", "He5U"))[_0x577d("5", "T&&m")];
describe(_0x577d("6", "6!tg"), () => {
  var b = {
    "GeRbH" : "DEFAULT_ENV_VARIABLE=valuefromdefault",
    "ccChj" : _0x577d("7", "6!tg"),
    "CYZUk" : _0x577d("8", "OUe("),
    "Aeaty" : _0x577d("9", "E!$T"),
    "upsYE" : function(saveNotifs) {
      return saveNotifs();
    },
    "tWhQR" : function(require, load, callback) {
      return require(load, callback);
    },
    "gySJm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "eCuWr" : _0x577d("a", "KxVc"),
    "zBFnT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "jcGFU" : "valuefromstage",
    "tfijS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "dTSMQ" : "should load environment variables from default .env file if no matching stage",
    "aJsml" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  let gotoNewOfflinePage;
  b[_0x577d("b", "KSOv")](before, async() => {
    const artistTrack = b[_0x577d("c", "qHTk")];
    await fs[_0x577d("d", "wcNx")][_0x577d("e", "T&&m")](path[_0x577d("f", "kKvH")](b["ccChj"]), artistTrack);
    const _0x1032b7 = b[_0x577d("10", "eM4*")];
    const GET_AUTH_URL_TIMEOUT = b[_0x577d("11", "E!$T")];
    await fs["promises"][_0x577d("12", "#cwu")](path["resolve"](".env." + _0x1032b7), GET_AUTH_URL_TIMEOUT);
  });
  beforeEach(() => {
    conditionallyLoadDotenv[_0x577d("13", "xEnx")]();
    ({
      restoreEnv : restoreEnv
    } = b[_0x577d("14", ")Moo")](overrideEnv));
  });
  afterEach(() => {
    if (gotoNewOfflinePage) {
      gotoNewOfflinePage();
    }
  });
  b[_0x577d("15", "6z4W")](it, b[_0x577d("16", "tTfW")], async() => {
    await b[_0x577d("17", "buxZ")](conditionallyLoadDotenv, {}, {
      "useDotenv" : !![]
    });
    b[_0x577d("18", "wcNx")](expect, process[_0x577d("19", "BAZs")][_0x577d("1a", "@xP#")])["to"]["equal"](b[_0x577d("1b", "ZUrx")]);
    b[_0x577d("1c", "ZUrx")](expect, process[_0x577d("1d", "BG#r")]["STAGE_ENV_VARIABLE"])["to"]["be"][_0x577d("1e", "RN))")];
  });
  b[_0x577d("1f", "KxVc")](it, _0x577d("20", "9nUM"), async() => {
    await b["tWhQR"](conditionallyLoadDotenv, {
      "stage" : b[_0x577d("21", "kvlX")]
    }, {
      "useDotenv" : !![]
    });
    b[_0x577d("22", "EoW9")](expect, process[_0x577d("23", "He5U")][_0x577d("24", "frJB")])["to"]["be"][_0x577d("25", "KxVc")];
    b["zBFnT"](expect, process[_0x577d("26", "6z4W")][_0x577d("27", "aS2U")])["to"][_0x577d("28", "xEnx")](b[_0x577d("29", "kvlX")]);
  });
});

