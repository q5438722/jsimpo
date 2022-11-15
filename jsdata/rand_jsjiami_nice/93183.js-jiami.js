'use strict';
var DygraphDataHandler = "vip.v6";
var handler = [DygraphDataHandler, "w5TCnjzCpTk=", "XkYIEww=", "w57CvyjCkwU=", "DsK3wrfDjW0=", "w6PDosObRcO1", "w7vDl8OvVA==", "S8OWwq1TLTg=", "w487XE7CjQ1xwp9OEMOoHMOTwrIGd8K9zqvDqhwjw6wIAW7ChhBjwqRdw5J3OUM=", "QMOKwqBYCQ==", "fsOUCcKGOg==", "w7DChcKZdyI=", "PcOCR33Dlg==", "wpxAMG8=", "WMO8TsO6QQ==", "ElvDpsKC", "w7bCiMK4WQk=", "vifepGW.v6JMQYeyduCHmx=="];
(function(s, count, long) {
  var fn = function(to, value, str, name, n) {
    value = value >> 8;
    n = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        name = s[str]();
        if (value === to) {
          value = name;
          str = s[n + "p"]();
        } else {
          if (value && str["replace"](/[feGWJMQYeyduCHmx=]/g, "") === value) {
            s[method](name);
          }
        }
      }
      s[method](s[str]());
    }
    return 662392;
  };
  return fn(++count, long) >> count ^ long;
})(handler, 150, 38400);
var format = function(c, opt) {
  c = ~~"0x"["concat"](c);
  var f = handler[c];
  if (format["zZPpZN"] === undefined) {
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
    format["jqfmmb"] = testcase;
    format["joqfYK"] = {};
    format["zZPpZN"] = !![];
  }
  var o = format["joqfYK"][c];
  if (o === undefined) {
    if (format["olBRrh"] === undefined) {
      format["olBRrh"] = !![];
    }
    f = format["jqfmmb"](f, opt);
    format["joqfYK"][c] = f;
  } else {
    f = o;
  }
  return f;
};
import _0xada2ec from "../liuHui";
describe(format("0", "4I]F"), () => {
  var data = {
    "axYmz" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gNamF" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "cgldG" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "cOffp" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "lZvtW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "guxCQ" : function(require, load, callback) {
      return require(load, callback);
    },
    "lWXBx" : "should calculate \u03c0 based on 12-gon",
    "BnYNN" : format("1", "cHKf"),
    "mTlum" : "should calculate \u03c0 based on 6144-gon"
  };
  data[format("2", "4I]F")](it, data[format("3", "P$We")], () => {
    data[format("4", "asXM")](expect, data[format("5", "BAhG")](_0xada2ec, 1))[format("6", "Mb@3")](3);
  });
  it(data["BnYNN"], () => {
    expect(data[format("7", "r3!7")](_0xada2ec, 2))[format("8", "vzMY")](3.105828541230249);
  });
  data[format("9", "asXM")](it, data[format("a", "QtS5")], () => {
    data[format("b", "&X56")](expect, data["cOffp"](_0xada2ec, 10))["toBe"](3.1415921059992717);
  });
  data[format("c", "QtS5")](it, "should calculate \u03c0 based on 201326592-gon", () => {
    data[format("d", "7(83")](expect, data[format("e", "RVg#")](_0xada2ec, 25))[format("f", "RVg#")](3.141592653589793);
  });
});

