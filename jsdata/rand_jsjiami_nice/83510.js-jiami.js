'use strict';
var vip = "vip.v6";
var _0x3485 = [vip, "wqfDmFoMw5o=", "csOcYw==", "bsOeQ8OLwoo=", "wr7DlQDDkFA=", "wqjCj2g=", "wqHDoSnCvsKl", "ScKvw59RwpQ=", "w68TUMK5w5g=", "wq3DhhnCucKS", "cA1GwpvCgg==", "woZUw5cpw4U=", "wr/DuTDDkn8=", "QsOhNkHDsA==", "AMOFw4/CkGE=", "wqZmw6MIw7E=", "LcOSw43CmWM=", "b8OOwovCocKV", "VcOVbMKNw61FK8KU", "wqnDqkMww6Y=", "Y8KUbDtW", "wq7DnGAOw5k=", "wovDtlc9w752", "wpfDlcKlw7/DnMOwF8OQ", "VnPClm4=", "Di9p", "wo5wcg==", "w6QRSsKy", "wrTCnnQIw5w=", "w63CssOfa3B8w7M=", "BTXDmUINw4DDvsO3bTfDvQ==", "wrogwpfDnRbDhksww7PDuELDvA==", 
"w7oVXMK/w5zCoD7CnzV/w4I=", "YMOyKknDvDrCtcK6ZxsVw5zCqVnDjMO3", "w43DpMKSwrU=", "FSTCgcOKwrE=", "K8OWDXzCvA==", "EjDCnUXCsQ==", "woHDjFLCg30=", "w5/Cr8Klw77ChMK+GEA=", "f8OAwokxwrU=", "DAnDqUHClw==", "ccKAUw==", "wrlXOA==", "wo1Tw6Q=", "csOoIg==", "ccOSfA==", "wrHCi3IIw4dJUQ==", "w6DDsQV6", "csOoIsKVw6INNw==", "WsO4T8O+w4hew4fCicONPcKrw5nDpgfClsO6DUxbUcOHaMOJeg==", "w61QA8Kvw5jCqnjCtxFAw64Ew53Cp8OZwrNtwqY=", "VC7DosKfwqfCmxYnecKhP8KxTMO8w7ME", "wrjCjX4dw5DDv1ByeTjDrynCuBQ=", "w6cUBcKOFg==", "wq9LwoJ2wqg=", 
"w5MhwqrDqTc=", "woLDnCHCssKR", "wrzCk2UVw5k=", "DcOFKEzCgA==", "wqM+asOiw6M=", "woJbwrjChTE=", "wqXDlcKoRjcGMg==", "wo/DmB7Cn3N/w7DCug==", "b8OTRsOewo4=", "w4csFsKnFMOJAsOaGyHChzbDoA==", "einCi8KDwpw=", "w4U8EMKgDsOMTsKRGC3CnCU=", "eMOkJ8KTw4c=", "w4IRZcKKw5g=", "fmHDucKrwpg=", "RxJFwoHCtw==", "VCzCmcKjwr4=", "wqE0wpDDlgvDlQk=", "wopCw40zw48=", "Z8OLJ8Kqw7Y=", "wqPDkkTCjFE=", "aMOZCU/DmQ==", "woDDkxxvVT8=", "wrZxAhBy", "wp8lWsOJw4EYbVo=", "w7oVQ8K+w5PDqTk=", "woTDl0ANw5c=", "wppmUUc3", "woDDmzDDtEs=", 
"wr7DlhE=", "mIGviDgpDxlB.vmWwdA6fIG=="];
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
          if (value && str["replace"](/[mIGDgDxlBmWwdAfIG=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662293;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3485, 191, 48896);
var _0x55c9 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x3485[c];
  if (_0x55c9["uBbTGm"] === undefined) {
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
    _0x55c9["CDXYKF"] = testcase;
    _0x55c9["fxnzHC"] = {};
    _0x55c9["uBbTGm"] = !![];
  }
  var e = _0x55c9["fxnzHC"][c];
  if (e === undefined) {
    if (_0x55c9["TdyDPo"] === undefined) {
      _0x55c9["TdyDPo"] = !![];
    }
    x = _0x55c9["CDXYKF"](x, alpha);
    _0x55c9["fxnzHC"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
angular[_0x55c9("0", "OdQM")](_0x55c9("1", "kh%B"), [], ["$provide", function(canCreateDiscussions) {
  var item = {
    "UapYV" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "QnVEr" : _0x55c9("2", "ZVMn"),
    "ULIAu" : _0x55c9("3", "&^iy"),
    "gyyxw" : "two",
    "GqWYP" : _0x55c9("4", "y7hX"),
    "rCTSy" : _0x55c9("5", "TgQX"),
    "RtFNO" : _0x55c9("6", "!0(9"),
    "pnLej" : _0x55c9("7", "(RJ*"),
    "JcFQv" : _0x55c9("8", "!ffo"),
    "wCDhe" : _0x55c9("9", "eu2k"),
    "TbLob" : _0x55c9("a", "TgQX"),
    "eyqsG" : "s\u00e1bado",
    "KaAAe" : "antes de Cristo",
    "cYluD" : _0x55c9("b", "tEsL"),
    "SEOsC" : _0x55c9("c", "qK*c"),
    "dfTqT" : "d.C.",
    "gYrbb" : "fevereiro",
    "fctre" : _0x55c9("d", "UvP*"),
    "zVqJv" : _0x55c9("e", "#tLH"),
    "HkzgC" : _0x55c9("f", "UvP*"),
    "lNSiL" : _0x55c9("10", "[pRT"),
    "eSTEq" : _0x55c9("11", "qK*c"),
    "bNsEE" : _0x55c9("12", "z*e5"),
    "rsTCD" : _0x55c9("13", "QSng"),
    "SlSOx" : "jan",
    "vcsdx" : "fev",
    "AAiDH" : _0x55c9("14", "M0gV"),
    "qcIpn" : _0x55c9("15", "Up6d"),
    "PLyUA" : "jul",
    "mbckc" : _0x55c9("16", "]bc7"),
    "dWDWG" : _0x55c9("17", "94#0"),
    "JaKKS" : _0x55c9("18", "(Z3*"),
    "vqAMA" : _0x55c9("19", "!0(9"),
    "dZLiv" : _0x55c9("1a", "@uk3"),
    "Fvlge" : "agosto",
    "eWMQM" : _0x55c9("1b", "94#0"),
    "gHDow" : "novembro",
    "JRhdH" : _0x55c9("1c", "(Z3*"),
    "HDVLs" : _0x55c9("1d", "TgQX"),
    "dkpwA" : _0x55c9("1e", "oH^X"),
    "Ospxt" : _0x55c9("1f", "94d("),
    "svMDn" : "dd/MM/yy",
    "OrILM" : _0x55c9("20", "zRpa"),
    "HESFK" : _0x55c9("21", "ob!I"),
    "cArQR" : "pt_ST"
  };
  var PLURAL_CATEGORY = {
    "ZERO" : item[_0x55c9("22", "]58S")],
    "ONE" : item[_0x55c9("23", ")w^2")],
    "TWO" : item[_0x55c9("24", "!0(9")],
    "FEW" : item[_0x55c9("25", "#tLH")],
    "MANY" : item["rCTSy"],
    "OTHER" : item[_0x55c9("26", "yu58")]
  };
  canCreateDiscussions[_0x55c9("27", "bU@x")](_0x55c9("28", "xZzx"), {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["da manh\u00e3", _0x55c9("29", "[pRT")],
      "DAY" : [item[_0x55c9("2a", "(Z3*")], _0x55c9("2b", "DJlx"), item[_0x55c9("2c", "oH^X")], _0x55c9("2d", "DJlx"), item["wCDhe"], item["TbLob"], item[_0x55c9("2e", "94#0")]],
      "ERANAMES" : [item[_0x55c9("2f", "TgQX")], item[_0x55c9("30", "%XC)")]],
      "ERAS" : [item[_0x55c9("31", "NwM&")], item[_0x55c9("32", "oH^X")]],
      "FIRSTDAYOFWEEK" : 0,
      "MONTH" : [_0x55c9("33", "eu2k"), item["gYrbb"], item[_0x55c9("34", "6Mf!")], item[_0x55c9("35", "94#0")], "maio", item[_0x55c9("36", "[pRT")], item[_0x55c9("37", "tEsL")], _0x55c9("38", "cg!2"), item[_0x55c9("39", "Up6d")], "outubro", _0x55c9("3a", "yu58"), "dezembro"],
      "SHORTDAY" : [_0x55c9("7", "(RJ*"), _0x55c9("3b", "TgQX"), item[_0x55c9("3c", "OdQM")], "quarta", "quinta", item[_0x55c9("3d", "y7hX")], item["eyqsG"]],
      "SHORTMONTH" : [item[_0x55c9("3e", "atp6")], item["vcsdx"], _0x55c9("3f", "atp6"), item[_0x55c9("40", "OdQM")], _0x55c9("41", "(Z3*"), item[_0x55c9("42", "(Z3*")], item["PLyUA"], item[_0x55c9("43", "atp6")], _0x55c9("44", "!0(9"), item["dWDWG"], item["JaKKS"], "dez"],
      "STANDALONEMONTH" : [item[_0x55c9("45", ")w^2")], item[_0x55c9("46", "5^Y3")], item[_0x55c9("47", "TgQX")], item[_0x55c9("48", ")w^2")], item[_0x55c9("49", "NwM&")], _0x55c9("4a", "6Mf!"), item[_0x55c9("4b", "atp6")], item[_0x55c9("4c", "tEsL")], item[_0x55c9("4d", "ZTM0")], item["eWMQM"], item["gHDow"], "dezembro"],
      "WEEKENDRANGE" : [5, 6],
      "fullDate" : item[_0x55c9("4e", "]bc7")],
      "longDate" : item[_0x55c9("4f", "ZTM0")],
      "medium" : item[_0x55c9("50", "z*e5")],
      "mediumDate" : "dd/MM/y",
      "mediumTime" : _0x55c9("51", "94#0"),
      "short" : item[_0x55c9("52", "OdQM")],
      "shortDate" : item[_0x55c9("53", "M0gV")],
      "shortTime" : item["OrILM"]
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : "Db",
      "DECIMAL_SEP" : ",",
      "GROUP_SEP" : "\u00a0",
      "PATTERNS" : [{
        "gSize" : 3,
        "lgSize" : 3,
        "maxFrac" : 3,
        "minFrac" : 0,
        "minInt" : 1,
        "negPre" : "-",
        "negSuf" : "",
        "posPre" : "",
        "posSuf" : ""
      }, {
        "gSize" : 3,
        "lgSize" : 3,
        "maxFrac" : 0,
        "minFrac" : 0,
        "minInt" : 1,
        "negPre" : "-",
        "negSuf" : "\u00a0\u00a4",
        "posPre" : "",
        "posSuf" : "\u00a0\u00a4"
      }]
    },
    "id" : item[_0x55c9("54", "OdQM")],
    "localeID" : item["cArQR"],
    "pluralCat" : function(state, n) {
      var value = state | 0;
      if (value >= 0 && item["UapYV"](value, 1)) {
        return PLURAL_CATEGORY["ONE"];
      }
      return PLURAL_CATEGORY["OTHER"];
    }
  });
}]);

