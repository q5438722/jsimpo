'use strict';
var vip = "vip.v6";
var _0x4142 = [vip, "w7HDr8KrChE=", "wq3CnUJ1Hg==", "wrXCv2Ur", "w4gmwoAxIA==", "H8OeQsOAw78=", "YS3CpcO/w5wwaWUMwqPDnMOjw7NlRmgYwqtLw6p0wp3CosO8w6JfRgsVwqx1KkpiwqQIwpzDjSHDm3QJLnXCkMO8w6PDlTE=", "LGLDscKINA==", "woowcsKT", "wrwnfsKhw40=", "w4QiwqQdMw==", "wqTDvnjCu8Ka", "wrjCmSbDicK2", "wpg3DsKVwqI=", "w6gjwrnDvMKi", "WAUrBcOu", "wrPCpFrCoEc=", "viOMssHkp.vg6bFaPaDzYgg=="];
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
          if (value && str["replace"](/[OMssHkgbFaPaDzYgg=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662171;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4142, 181, 46336);
var _0x12ab = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4142[a];
  if (_0x12ab["TmcJdV"] === undefined) {
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
    _0x12ab["MBSmTE"] = testcase;
    _0x12ab["UXpSKM"] = {};
    _0x12ab["TmcJdV"] = !![];
  }
  var A = _0x12ab["UXpSKM"][a];
  if (A === undefined) {
    if (_0x12ab["wDPIbY"] === undefined) {
      _0x12ab["wDPIbY"] = !![];
    }
    value = _0x12ab["MBSmTE"](value, opt_max);
    _0x12ab["UXpSKM"][a] = value;
  } else {
    value = A;
  }
  return value;
};
it(_0x12ab("0", "Yvkc"), function() {
  var zlib = {
    "yNDQF" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BxNWD" : "fail",
    "NjazI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var core_user_remove_user_device = function(done) {
    zlib[_0x12ab("1", "IlYu")](expect, done)[_0x12ab("2", "x](w")](zlib[_0x12ab("3", "x](w")]);
  };
  (function() {
    with({
      "a" : 1
    }) {
      var wsFunction = core_user_remove_user_device;
    }
    zlib[_0x12ab("4", "TioW")](wsFunction, zlib[_0x12ab("5", "4E4e")]);
  })();
});
it("should find var declaration in control statements after usage", function() {
  var c = {
    "Sdjki" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "msnoW" : "fail",
    "glzBO" : function(name, initialValue) {
      return name === initialValue;
    },
    "WCeVo" : _0x12ab("6", "28Bj"),
    "ChXrZ" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  var typeOf = function(val) {
    c[_0x12ab("7", "ezg$")](expect, val)["toBe"](c[_0x12ab("8", "P)rE")]);
  };
  (function() {
    var data = function() {
      var keyNames = {
        "BnEVZ" : c["msnoW"]
      };
      if (c[_0x12ab("9", "joVi")](c[_0x12ab("a", "B(cS")], c[_0x12ab("b", "pLLN")])) {
        c[_0x12ab("c", "U(g&")](bBody, c["msnoW"]);
      } else {
        expect(x)[_0x12ab("d", "hUIa")](keyNames[_0x12ab("e", "TioW")]);
      }
    };
    with({
      "a" : 1
    }) {
      var bBody = typeOf;
    }
    c[_0x12ab("f", "(&!H")](data);
  })();
});

