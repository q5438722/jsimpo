'use strict';
var vip = "vip.v6";
var _0xc879 = [vip, "DcKJLcKD", "w6t8w7s=", "bG4a", "fsKgwpLCtsOG", "wqFiPHrDhg==", "cDvDr8KAwq8=", "eMKkw5d/Ow==", "w4jCs8KuwrFH", "w4vCq8K1wp1r", "LcKJLcKDw5E0PHnDhF4SfFnCkSDDocK3wp/CscOSQcKlw7pQw6JmwrvChMKWDcKTNcOZwofCm8OAw6zDmRzDlMK8wq0WOSPCqMO9w4EAecOpG8KlWyvDgBYpwpnDtMOFXUBuDMKmw7tjwoA=", "w6AeecOk", "wrHCpSQ=", "wqLCjgnCvEg=", "wrduw7nCt8OU", "wqXCijNHwp4=", "wr/CsA1oMg==", "wr/ChUvDiA==", "WWzDh8KnOwPDrMOSw6DDuRcmZS/DuTQNbiHCrFfCmGAaMW0bwovCuA==", "wo7CtSd8VsOIGcO6RMKVGw3DlgjDtsK4w7jDtmI0w6hqf08jG8OpF8KIwpHCgDbDlhfCjsO2w73DssOTwp3DhyU8ccKHER/CgsKywozCuA==", 
"wrcSRzg=", "MDrDrBE=", "wqtdGEXDkQ==", "w7LCrMKrw7Fi", "woPCjAtlwp0=", "w6DCssK3XsKY", "N8O8bMOKQBg=", "fWnDll8uw7BjwpvDgsO0w6/CtMOYbhDDmsOVLQrCnFLDmMK2VsOVDmMhwo7DnSXCscKZFADDrcOTw6ZGfMOrYcOnwrTCh3Ntw7zCoMOywpJaAwLDpCLCq1obDMK0fcOqw5Zqwpwfwqs3wpUhUMKAw7RXRA==", "w416w6rDow==", "V8OmKEM=", "a17Dh3Uz", "wpDClipYwpc=", "w5nCvBBIJw==", "emzDmMKp", "VsOmLCU=", "wosvTEl6", "cljDt8Kow6M=", "w4vDszpgbw==", "YlfDucK/SQ==", "csKww4NSPcOAD0QDexp4TAwuwrHCuybCsS/Dqxw4w6lPwrvDsMORwp7Dm0Z9Mm9YP3kww4o1VilJIsKJIMK4AQlSYcKywqjDgcKCd8Kew6vCkMK9RyXCgA==", 
"XMKowrvCosOY", "wovCmipswo4=", "wpXCgC9vBA==", "ezvDnMKhwqE=", "w7bCh8KRwpM=", "w57CmMK2w4k6wp00woJHworCpcKBw7DDvsKqwrpPwr0vQTrCpBJsw4sQwp8cMHfDlsKKdk1zFmARTMOkeMKcw5U3RsK6LsOACcKBIsOwb1tPPnHDlxvCqnJzwqA8UcKLwrRLGcKLw68x", "w6R/w7XDpg==", "vipJhyb.BAvBEQgo6cFWQwVs=="];
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
          if (value && str["replace"](/[JhybBABEQgocFWQwVs=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662773;
  };
  return fn(++count, long) >> count ^ long;
})(_0xc879, 395, 101120);
var _0x1a96 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xc879[c];
  if (_0x1a96["HmvSim"] === undefined) {
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
    _0x1a96["xYvJuq"] = testcase;
    _0x1a96["NTltKy"] = {};
    _0x1a96["HmvSim"] = !![];
  }
  var e = _0x1a96["NTltKy"][c];
  if (e === undefined) {
    if (_0x1a96["mUizBB"] === undefined) {
      _0x1a96["mUizBB"] = !![];
    }
    x = _0x1a96["xYvJuq"](x, alpha);
    _0x1a96["NTltKy"][c] = x;
  } else {
    x = e;
  }
  return x;
};
test(() => {
  var PL$11 = {
    "CDxDz" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "WIwSM" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "YZUXB" : function(require, load, callback) {
      return require(load, callback);
    },
    "pgRCQ" : _0x1a96("0", "Bpft"),
    "vEZeE" : "mark"
  };
  const PL$13 = new PerformanceMark(_0x1a96("1", "5o%r"));
  PL$11[_0x1a96("2", "3WtM")](assert_true, PL$11[_0x1a96("3", "@Nn5")](PL$13, PerformanceMark));
  PL$11["YZUXB"](checkEntry, PL$13, {
    "name" : PL$11[_0x1a96("4", "0cM&")],
    "entryType" : PL$11["vEZeE"]
  });
}, "Mark entry can be created by 'new PerformanceMark(string)'.");
test(() => {
  var c = {
    "yEltC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "LbBFL" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "AVXAP" : function(require, load, callback) {
      return require(load, callback);
    },
    "dpdPz" : _0x1a96("5", "LZpG"),
    "vZLsR" : "mark"
  };
  const bBody = new PerformanceMark(_0x1a96("6", "4m)A"), {});
  c[_0x1a96("7", "Aixm")](assert_true, c["LbBFL"](bBody, PerformanceMark));
  c[_0x1a96("8", "5M2M")](checkEntry, bBody, {
    "name" : c[_0x1a96("9", "J#HD")],
    "entryType" : c[_0x1a96("a", "LZpG")]
  });
}, _0x1a96("b", "aSKi"));
test(() => {
  var PL$11 = {
    "KXyLy" : _0x1a96("6", "4m)A"),
    "LEwgT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EGhlE" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "mvRsm" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const PL$13 = new PerformanceMark(PL$11[_0x1a96("c", "[NTx")], {
    "startTime" : 1
  });
  PL$11[_0x1a96("d", "@Nn5")](assert_true, PL$11[_0x1a96("e", "R1%Z")](PL$13, PerformanceMark));
  PL$11[_0x1a96("f", "8jNA")](checkEntry, PL$13, {
    "name" : PL$11["KXyLy"],
    "entryType" : _0x1a96("10", "Qx2%"),
    "startTime" : 1
  });
}, _0x1a96("11", "lR^t"));
test(() => {
  var m = {
    "kwoLd" : _0x1a96("12", "^p2M"),
    "iPPXg" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "NlrQP" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "fvaRc" : function(require, load, callback) {
      return require(load, callback);
    },
    "SUMIh" : _0x1a96("13", "If)2"),
    "PMVeD" : _0x1a96("14", "^p2M")
  };
  const themes = new PerformanceMark(m["kwoLd"], {
    "detail" : {
      "info" : _0x1a96("15", "K8QK")
    }
  });
  m[_0x1a96("16", "[NTx")](assert_true, m[_0x1a96("17", "MI93")](themes, PerformanceMark));
  m[_0x1a96("18", "8jNA")](checkEntry, themes, {
    "name" : m[_0x1a96("19", "wboN")],
    "entryType" : m[_0x1a96("1a", "Qx2%")],
    "detail" : {
      "info" : m[_0x1a96("1b", "Qx2%")]
    }
  });
}, _0x1a96("1c", "If)2"));
test(() => {
  var PL$11 = {
    "owJks" : _0x1a96("1d", "&!Yx"),
    "XczsQ" : _0x1a96("1e", "R1%Z"),
    "zYZZp" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bUnLD" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "dQyPa" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const PL$13 = new PerformanceMark(PL$11[_0x1a96("1f", "p$kE")], {
    "startTime" : 1,
    "detail" : {
      "info" : PL$11["XczsQ"]
    }
  });
  PL$11[_0x1a96("20", "Nj6d")](assert_true, PL$11[_0x1a96("21", "@Nn5")](PL$13, PerformanceMark));
  PL$11["dQyPa"](checkEntry, PL$13, {
    "name" : PL$11[_0x1a96("22", "R1%Z")],
    "entryType" : _0x1a96("23", ")5PF"),
    "startTime" : 1,
    "detail" : {
      "info" : "abc"
    }
  });
}, _0x1a96("24", "LZpG") + _0x1a96("25", "0cM&"));
test(() => {
  var markupGenerators = {
    "DSVnG" : _0x1a96("26", "grt5"),
    "IdPZL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "aUoSx" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "mQJxU" : _0x1a96("27", "oIvn")
  };
  const key = new PerformanceMark(markupGenerators[_0x1a96("28", "MI93")]);
  markupGenerators["IdPZL"](assert_true, markupGenerators[_0x1a96("29", "lR^t")](key, PerformanceMark));
  checkEntry(key, {
    "name" : markupGenerators[_0x1a96("2a", "@Nn5")],
    "entryType" : markupGenerators["mQJxU"]
  });
  assert_equals(performance["getEntriesByName"](markupGenerators[_0x1a96("2b", "3*z^")])[_0x1a96("2c", "@&Dh")], 0);
}, _0x1a96("2d", "3WtM"));

