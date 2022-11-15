'use strict';
var vip = "vip.v6";
var _0x1734 = [vip, "WxJAw6PDvVY=", "wqYXw41jwo8=", "w7wfRE97", "EwhMw54d", "SsKsGQ==", "w5QxDSs=", "w7kxdisG", "wqZpw40yw54=", "wqfDgQ7CgQ==", "DcO2DQ==", "H8OzCUDDpg==", "wr/Cs1U=", "YcKTV0M=", "w5QuZXFQ", "FmPCnMKOAQ==", "wrthwqfDncO2", "woPDjMOXwpED", "w75AG30U", "wqDDosK2w6rCpQ==", "WwpVw4HDrA==", "w4Bkw7LDhXA=", "FcO2MFrDtQ==", "w7VUw7kdMQ==", "c8KuCsKGSA==", "B8OAw5hhXg==", "w5sEwoUFwr9+", "U8KeYWjDiQ==", "TcKSC8KRwrU=", "wp7Dril1TMOqw6oiQQ==", "woZIUMOnw6U=", "LsOQB2Vj", "MMORFWIZw7Q=", "wpfDjMO0wq4B", 
"O8OzBFxzwqU=", "w5vDqMKVw7LDrsOL", "Rz/DvsKdZMKg", "JsOCBmoSw7M=", "wqhfw44Gw7/CvA==", "wqJIw4EMw67Cpw==", "wpbDqicOLmPCuMOcw5tdVcKhwoM=", "wp3DnQHClsKa", "ZyxXEMOfRsKQwrvCsw==", "w4wdwqvCkcOF", "w75yw7R+", "w5/DlxdXd1M7wrNockY=", "w4sCwoM=", "I07Ctg==", "w5EgRQ==", "NcOREW4Iw6IGw4PClg0BZ8Ow", "dBlCw7/DlQ==", "wrjCqETDpwM=", "wpXDu8Kpw4vCpQ==", "w7smV0M=", "Vi7DvMKdZMKww7EvwrjDn0E=", "AMOxEl4Y", "w6x8w6JidB7CksOBwq0=", "woYaNQ==", "azJHw5/DvA==", "w4tqZyXChQ==", "w7FPw6LDqlQ=", "wpjDtXTDrQo=", "wpDDoDbChcKg", 
"PTt5UcOM", "wqQxDgPDlQ==", "w589U8O4cw==", "fsK3IsKAWQ==", "XBrDrsKabg==", "wrjDiwHChsKjPHId", "WzHDr8KZfsK9w50p", "Hh5yw4se", "worDpMKmw4PCpWBkwqQ=", "wpPDpgTCrsKc", "vGCzgilp.qozv6ZYuPLQjb=="];
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
          if (value && str["replace"](/[GCzglqozZYuPLQjb=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662400;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1734, 261, 66816);
var _0x582b = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1734[c];
  if (_0x582b["ZJZNyM"] === undefined) {
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
    _0x582b["HiDhvj"] = testcase;
    _0x582b["Gxvgsv"] = {};
    _0x582b["ZJZNyM"] = !![];
  }
  var e = _0x582b["Gxvgsv"][c];
  if (e === undefined) {
    if (_0x582b["EMzFdT"] === undefined) {
      _0x582b["EMzFdT"] = !![];
    }
    x = _0x582b["HiDhvj"](x, alpha);
    _0x582b["Gxvgsv"][c] = x;
  } else {
    x = e;
  }
  return x;
};
(function() {
  function insertLink() {
    const spanEl = document[_0x582b("3", "kIEA")](a[_0x582b("4", "8U(Z")]);
    spanEl["innerText"] = "security triggered " + (new Error)[_0x582b("5", "Hz(E")][_0x582b("6", "iR78")]("\n", 3)[2];
    document[_0x582b("7", "Vbot")][_0x582b("8", "z)Et")](spanEl);
  }
  var a = {
    "IycqM" : _0x582b("0", "7NaF"),
    "VRfQd" : _0x582b("1", "lSnq"),
    "DDTbw" : function(value, joiner) {
      return value !== joiner;
    },
    "rluUG" : function(saveNotifs) {
      return saveNotifs();
    },
    "LZaGB" : function(saveNotifs) {
      return saveNotifs();
    },
    "EOvOy" : function(saveNotifs) {
      return saveNotifs();
    },
    "zrfKv" : function(name, data) {
      return name != data;
    },
    "LqrKY" : function(saveNotifs) {
      return saveNotifs();
    },
    "kDbbd" : function(name, data) {
      return name != data;
    },
    "IRjwt" : function(saveNotifs) {
      return saveNotifs();
    },
    "AHkqw" : function(saveNotifs) {
      return saveNotifs();
    },
    "GBfIK" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "JIavb" : function(name, data) {
      return name != data;
    },
    "eVwuM" : function(saveNotifs) {
      return saveNotifs();
    },
    "hDbYD" : function(saveNotifs) {
      return saveNotifs();
    },
    "vsnZa" : function(saveNotifs) {
      return saveNotifs();
    },
    "fjtOt" : function(name, data) {
      return name != data;
    },
    "MgVKf" : function(saveNotifs) {
      return saveNotifs();
    },
    "SBEvI" : _0x582b("2", "@]Dm"),
    "uoDMS" : "parent",
    "FisHt" : function(saveNotifs) {
      return saveNotifs();
    },
    "loMUg" : function(saveNotifs) {
      return saveNotifs();
    },
    "AhZMH" : function(saveNotifs) {
      return saveNotifs();
    },
    "GswEu" : function(name, data) {
      return name != data;
    },
    "zxjAj" : function(name, data) {
      return name != data;
    },
    "sQbTu" : function(name, data) {
      return name != data;
    },
    "PvOnA" : function(saveNotifs) {
      return saveNotifs();
    },
    "KsFXs" : function(name, initialValue) {
      return name === initialValue;
    },
    "aONEr" : function(saveNotifs) {
      return saveNotifs();
    },
    "PZsIW" : "js ran"
  };
  window["topFoo"] = a[_0x582b("9", "kIEA")];
  window[_0x582b("a", "Y)fX")] = _0x582b("b", "kBxB");
  (function() {
    const xhr = "foo";
    const aborted = a[_0x582b("c", "8U(Z")];
    const event = a[_0x582b("d", "FUIy")];
    if (a[_0x582b("e", "t2t^")](xhr, event)) {
      a[_0x582b("f", "eIxS")](insertLink);
    }
    if (a[_0x582b("10", "OS8m")](aborted, event)) {
      a[_0x582b("11", "t^ik")](insertLink);
    }
    if (a[_0x582b("12", "kBxB")](event, xhr)) {
      a["EOvOy"](insertLink);
    }
    if (event !== aborted) {
      insertLink();
    }
  })();
  if (a[_0x582b("13", "@]Dm")](top, self)) {
    insertLink();
  }
  if (top != self) {
    a[_0x582b("14", "#bWZ")](insertLink);
  }
  if (a[_0x582b("15", "z)Et")](top[_0x582b("16", "OS8m")], self[_0x582b("17", "z)Et")])) {
    a[_0x582b("18", "GV]w")](insertLink);
  }
  if (top[_0x582b("19", "iR78")] != location) {
    a["AHkqw"](insertLink);
  }
  if (a[_0x582b("1a", "OS8m")](parent[_0x582b("1b", "8U(Z")]["length"], 0)) {
    a["AHkqw"](insertLink);
  }
  if (a[_0x582b("1c", "IohH")](window, top)) {
    a[_0x582b("1d", "Vbot")](insertLink);
  }
  if (a[_0x582b("1e", "GV]w")](window[_0x582b("1f", "T@8N")], window[_0x582b("20", "RoEi")])) {
    insertLink();
  }
  if (a[_0x582b("21", "*s^Q")](window["top"], window["self"])) {
    a[_0x582b("22", "fA1z")](insertLink);
  }
  if (window[_0x582b("23", "OS8m")] != window[_0x582b("24", "Msue")]) {
    a["vsnZa"](insertLink);
  }
  if (a[_0x582b("25", "Msue")](window[_0x582b("26", "Hz(E")], window[_0x582b("27", "p$w$")])) {
    a[_0x582b("28", "Vbot")](insertLink);
  }
  if (window[a[_0x582b("29", "lSnq")]] != window[a[_0x582b("2a", "27FE")]]) {
    a["MgVKf"](insertLink);
  }
  if (window[a[_0x582b("2b", "Rmr6")]] != window[a[_0x582b("2c", "LAZg")]]) {
    a[_0x582b("2d", "iR78")](insertLink);
  }
  if (a[_0x582b("2e", "8U(Z")](window[a["SBEvI"]], self[a[_0x582b("2f", "t2t^")]])) {
    a[_0x582b("30", "Msue")](insertLink);
  }
  if (parent && a["fjtOt"](parent, window)) {
    a[_0x582b("31", "m2GV")](insertLink);
  }
  if (parent && a["GswEu"](parent, self)) {
    a[_0x582b("32", "#bWZ")](insertLink);
  }
  if (parent && a[_0x582b("33", "b1VT")](window[_0x582b("34", "7NaF")], topFoo)) {
    a[_0x582b("35", "p$w$")](insertLink);
  }
  if (parent && a[_0x582b("36", "T@8N")](window[_0x582b("37", "vvVo")], parentFoo)) {
    a[_0x582b("38", "ywP(")](insertLink);
  }
  if (parent && window != parent) {
    insertLink();
  }
  if (parent && a[_0x582b("39", "(LoJ")](self, parent)) {
    a["AhZMH"](insertLink);
  }
  if (parent && parent[_0x582b("3a", "kIEA")] && a[_0x582b("3b", "Rmr6")](parent[_0x582b("3c", "(LoJ")][_0x582b("3d", "B3BF")], 0)) {
    a["PvOnA"](insertLink);
  }
  if (self[_0x582b("3e", "z)Et")] && !a["KsFXs"](self[_0x582b("3f", "kIEA")], self) && self["parent"][_0x582b("40", "fA1z")][_0x582b("41", "fA1z")] != 0) {
    a["aONEr"](insertLink);
  }
  const valueAxis = document[_0x582b("42", "EAZG")](a[_0x582b("43", "OS8m")]);
  valueAxis[_0x582b("44", "]s$B")] = a[_0x582b("45", "TLVH")];
  document[_0x582b("46", "Y)fX")][_0x582b("47", "%n8J")](valueAxis);
})();

