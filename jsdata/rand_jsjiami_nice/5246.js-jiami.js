'use strict';
var vip = "vip.v6";
var _0x5728 = [vip, "wrvCg2DCtg==", "wrjDkFpPAWjCo8ODwoAVEx3Csg==", "B8O6dxw=", "woPDrVDCj8Kzw5xWwqvDoQfDh8OyHw==", "wqcSw7TCnzjCmiLCs8K8wow3", "HMOTEA==", "SERw", "wpoXwrk=", "wqscw7I=", "wpsXwqjCgCnClX07w5xmQMKOews6wo7Ck8Kaw57ChcOww4RPH0pbwoBJBMOmwrnDpw==", "QXIyECwewoTDlcOewpTDrBtYBcKy", "wrPCjXvDqg==", "w6TDgsKz", "SCxEwrU=", "PsKnSg==", "BsOEDFHDpQ==", "w7HDncKwQsKV", "w5/CsTg7w7A=", "wopLw7kQ", "w4nDpV0=", "ewhWWMKi", "wr8cw4Vf", "w5V/e8O3Qg==", "Bm9oCQ==", "woQwNgw=", "P8K/aMO2w6Y=", "KMOzwpLChMKU", 
"wpxRw6U=", "wpcbfQ==", "w4jDs0Uv", "w7XDl0E=", "c8KED8Oy", "AcOKO0U=", "McO8wojCoMKt", "w5ZYw6Q=", "wqXCjXk=", "VMO+w4JT", "w5zDqk3Ciw==", "vAip.vkkI6hlQjbLNMQjXBC=="];
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
          if (value && str["replace"](/[AkkIhlQjbLNMQjXBC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662748;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5728, 490, 125440);
var _0x4727 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x5728[c];
  if (_0x4727["qVlBTs"] === undefined) {
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
    _0x4727["nRgfyS"] = testcase;
    _0x4727["kJXPDS"] = {};
    _0x4727["qVlBTs"] = !![];
  }
  var e = _0x4727["kJXPDS"][c];
  if (e === undefined) {
    if (_0x4727["ztuhIx"] === undefined) {
      _0x4727["ztuhIx"] = !![];
    }
    x = _0x4727["nRgfyS"](x, alpha);
    _0x4727["kJXPDS"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var parser = require(_0x4727("0", "o&!F"));
var test = require(_0x4727("1", "Ht7W"))[_0x4727("2", "nc6e")];
var path = require(_0x4727("3", "7q@m"));
var files = {
  "foo" : path[_0x4727("4", "Ht7W")](__dirname, _0x4727("5", "[ok6")),
  "bar" : path[_0x4727("6", "cyIV")](__dirname, _0x4727("7", "7q@m"))
};
var sources = {
  "foo" : _0x4727("8", "SHts"),
  "bar" : "notreal bar"
};
var cache = {};
cache[files[_0x4727("9", "EUda")]] = {
  "source" : sources["foo"],
  "deps" : {
    "./bar" : files[_0x4727("a", "J$qV")]
  }
};
cache[files[_0x4727("b", "o&!F")]] = {
  "source" : sources[_0x4727("c", "SHts")],
  "deps" : {}
};
test(_0x4727("d", "o&!F"), function(canCreateDiscussions) {
  var info = {
    "wbVzx" : _0x4727("e", "Jk(N"),
    "cLUng" : _0x4727("f", "Ht7W"),
    "BRUYL" : "data",
    "GHMPR" : _0x4727("10", "uhS*"),
    "wlQsD" : _0x4727("11", "yVK9"),
    "SjIHn" : _0x4727("12", "Ld[z")
  };
  var callbackVals = info[_0x4727("13", "mMxv")][_0x4727("14", "uhS*")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        p[_0x4727("15", "^B0j")]({
          "id" : files["bar"],
          "expose" : info["cLUng"],
          "entry" : ![]
        });
        continue;
      case "1":
        var p = parser({
          "cache" : cache
        });
        continue;
      case "2":
        p["on"](info["BRUYL"], function(paras) {
          me[_0x4727("16", "5QXt")](paras);
        });
        continue;
      case "3":
        p[_0x4727("17", "7q@m")]({
          "id" : info[_0x4727("18", "o)Xu")],
          "file" : files["foo"],
          "entry" : !![],
          "expose" : info["wlQsD"]
        });
        continue;
      case "4":
        var aliases = {
          "dvFJS" : info["GHMPR"],
          "VLxgp" : _0x4727("19", "X1(o")
        };
        continue;
      case "5":
        p["on"](info[_0x4727("1a", "JXNS")], function() {
          canCreateDiscussions[_0x4727("1b", "Jk(N")](me[_0x4727("1c", "M!A9")](cmp), [{
            "id" : aliases[_0x4727("1d", "Ld[z")],
            "expose" : aliases[_0x4727("1e", "xGY(")],
            "entry" : !![],
            "file" : files["foo"],
            "source" : sources[_0x4727("1f", "5QXt")],
            "deps" : {
              "./bar" : files["bar"]
            }
          }, {
            "id" : files[_0x4727("20", "dL#Y")],
            "expose" : _0x4727("21", "LJT#"),
            "file" : files[_0x4727("22", "[ok6")],
            "source" : sources[_0x4727("a", "J$qV")],
            "deps" : {}
          }][_0x4727("23", "H@X9")](cmp));
        });
        continue;
      case "6":
        var me = [];
        continue;
      case "7":
        canCreateDiscussions[_0x4727("24", "mMxv")](1);
        continue;
    }
    break;
  }
});
function cmp(status, result) {
  var doc = {
    "OCbCI" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  return doc[_0x4727("25", "xGY(")](status["id"], result["id"]) ? -1 : 1;
}
;
