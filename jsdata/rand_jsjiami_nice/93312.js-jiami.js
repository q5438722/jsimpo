'use strict';
var action = "vip.v6";
var m = [action, "w6nCmsKpwqVz", "VMOMc1zDmcKSaMKqw4Fnw7RXcy4oe8KzwpHDnE/ClT/Cowlowr3DgMKmw7PCgiY5KcOBwo/CuTfDh8Onw7rCqg==", "w40qRkw=", "w7zDuMKlYVcaw5vDvg==", "JMO0wolJ", "G8OdwoVHcA==", "AWfCgg/CnMOjWcOqHsKdVsOhLw==", "wofDslLDjQ==", "w41wWUI7", "M0YbfsKQwohrwoI4w53DhsO4", "K8KIU0w=", "FEXDsMOmA8KDVRs=", "wrLDtH8h", "w67DnzJlw5Q=", "w4HCsSE=", "cvixp.aKdLMav6WkEtDTlFsN=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[cxaKdLMaWkEtDTlFsN=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662952;
  };
  return fn(++count, size) >> count ^ size;
})(m, 329, 84224);
var fn = function(a, f) {
  a = ~~"0x"["concat"](a);
  var x = m[a];
  if (fn["PxIlSX"] === undefined) {
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
    fn["suMfkI"] = testcase;
    fn["TiCftd"] = {};
    fn["PxIlSX"] = !![];
  }
  var size = fn["TiCftd"][a];
  if (size === undefined) {
    if (fn["jBhOvk"] === undefined) {
      fn["jBhOvk"] = !![];
    }
    x = fn["suMfkI"](x, f);
    fn["TiCftd"][a] = x;
  } else {
    x = size;
  }
  return x;
};
import _0x1a5c6d from "../QueenPosition";
describe("QueenPosition", () => {
  var symAttrs = {
    "KFNki" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "DHBXb" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "StzZY" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "MXXyU" : fn("0", "hhsF"),
    "dsfOh" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  symAttrs[fn("1", "CR6L")](it, fn("2", "gH(r"), () => {
    const result = new _0x1a5c6d(0, 0);
    const data = new _0x1a5c6d(2, 1);
    symAttrs["KFNki"](expect, data["columnIndex"])[fn("3", "6M6!")](1);
    expect(data[fn("4", "12I#")])["toBe"](2);
    expect(result["leftDiagonal"])[fn("5", "fK(G")](0);
    symAttrs[fn("6", "fK(G")](expect, result[fn("7", "4A$^")])[fn("8", "hhsF")](0);
    symAttrs[fn("9", "Lxwq")](expect, data[fn("a", "JLoD")])["toBe"](1);
    symAttrs["StzZY"](expect, data["rightDiagonal"])[fn("b", "UK0]")](3);
    expect(data[fn("c", "G$LJ")]())[fn("d", "^bhE")](symAttrs[fn("e", "34[@")]);
  });
});

