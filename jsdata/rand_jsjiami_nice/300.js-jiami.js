'use strict';
var ControlTypeGroup = "vip.v6";
var fixtures = [ControlTypeGroup, "dMOcXMOKwq4=", "w6Zrw60kAg==", "NsOBwq7Ci2vCvgPCs8OOVQ==", "w7s1BMK/MjZ5ahzDqX9xwpjChcKIUAsXwpHDvjfDvk3CvsOTwqLCjMK0w7QoYEEzwpMaw5/ClGvCrcOJXSoFHxZ8P8Oiw6Izw6rCkSpZw4PDgQnDgMKaw5gAw41nwovDtgJOf8OtFsKNw5fDh8KvwpbDh8ORw4caI1chAMK3YcORCV3CnVI3N1jDqw7CuQ9JDzLDg3jDrz/DgmzDkGZmw7DDlH3ChcO/Hkpnw6vChXEYDHPDonRrBSQmw5DDmsOPAMOAwrHDgDbDlMKAwpw/w7gxw4zDvw==", "w7rDuXfDssKm", "wpTDv8Khw59G", "LyzDocKuw4k=", "w7YGw4bCv1nCpEM=", "aBwaw6lK", "DxPDlsK4", "w63CpXs=", "XsKbwpw8RsKmwpJEYnM=", 
"wr/CkMKGe8OTeFDChE3CjxfDpcKSw7JUwq3CmmIVw5xuLMOYwoHDgE00Z8KVw7Q1NlFbwpoDwqMRFcKRQUPDqsKywpAJw4twwrxNeCrCtsOdwqoVD8KIwrU0HG/Cr8OFMDkjW0rClcO5wrXChgbChMOlBMKjdgLCtMOOwq8AGFdVw7HDkUBUT2DDnD4kw4zCpMOQR8OGwrvDlMKzwrAFw4XDisKfFHLDmcOVRjDDv0PCp8OQwpgsBEVzwonDi8OJC2PCmA16w5oIasKhYsOBKhFiwp07EjLDszRRCQfDuiZlHxvDmickwr1gRl/Dm8KJVMOFwobDl8OZZcOPw77CmX/ChCtwHGPCssK5cMO7wqdXwr/DlG4zwqHDnMOjL8KIaQ==", "BlJRw6TDmMKlwol0ZAZ7wo/CkQ0zUnlQRh/CllRiwpHDiHbDjMOwUMOxwpTCljvCisKSTTFWPWVWw4lcw79rwoQZw6kFcUgAw6jCisOlGQ==", 
"PzzDrGvCq8OfwqA=", "wofCgMOWIw==", "w7zCpMOAwpYdwqcf", "wrnDqsOkw6dU", "G8OtEsOnw7k=", "GnxGw7PCtw==", "RcOZwqPDnyU=", "WVTCgcKwDw==", "HsOmBsOnw41yw7LDsDM1", "dGPCrC/Ct8OJwqQIw5p3ScKkKC0tPDHDksOhw6XCusOiXsKTwqMYwpfDpyXCg8KSw7/DlF9hwozDoMOWd8OXwrVKw4svw7l1W8Onw5lAw5nCswzDj8O/AGzDhX4hexjCizVew4VSUSfCksOkaA==", "wpLCigjDjA==", "wpvClUjDjQ==", "w4rCjsKJZ8OEwpPCiEs=", "c8KcwpPCkg==", "w6TDrkLDhsKO", "SD0Fw6xK", "B8OEw79tAMKgwpc=", "wo/DkE46wpU=", "ch8Vw5xj", "w6zDoEFzw4vClEDClsOYw7zChMOEw6t7w5p3wqDDo8Kp", 
"wq0ww4NO", "wqfDkMKbw7Ja", "wpzDi1M=", "DxTDvsK3w49xwpQDwr/Dqw==", "w4/DtQ/DkQ3DgGTDosOJOi4kdMO6JgU7w5XCgUpbSFRHDnZRHll0wpDCpkotw5vDn8KDa8KtecKbw693woTCisO7PcKrLcOJFhjDvcOQGMOxwr4RFMOjwp91c2jCpcO6wozCoMOvMEIpL2DDt08iOUssw6XDklU+Vn54EcK4w7gKQ1Jyw6IeMSgOwqLCujrChcO5TiYFVDd2bDDClwzDgSkQcMO0wpVeO8KSw5HChcKSSiVWwqcgd1o5Vn/Dgw1iGsKRbUhDwoTCo2jDmmbDr8OLOMO+L1cAwoo=", "w6ExwoDDkMOg", "w73CgMOF", "YMKpa8KmwpkxwrTDhyU+wq3ClCp6woB2wpHCo8KDw5TDgsKoPSzDp3jDn8Kaw5vDq31ddDcqLMOpwpZKw7HDiMKbw7nDgV/DlkN4w5TDmRFhw6PDlzwowr3DksKzRMKlGsOOHsOREG/CkcKhw71fRcOUU8KXA8O2Dz5Nw4U+w6UvGcOhwqV8wo/CvisOw7XCgAjDqHnCoTHDhcKVH8KjCsKTw5vChcOPwqAqw6nDqCbCm0/DqBrDicO+Dnlow7J+wqQOw6fDucKxK8KQw4QKMicRBsOvwoHCusOHaAx8w49yw5zDqFXCpcKQVl3CoHUwwqfDrsKyworClsKKB8OFCMO0wonDjsKgw7ESw7HDrXnCgcKDN8O9ZHkNwqzCnE7DlCw+dsKaw6IOTsK3wq7Dvw==", 
"wpnDh8KMw7V/", "w67CgcOZwrXCqsKzaA==", "wpQewp1Ww5JmXA==", "ZsO/wp7Dp2dKX8O6w4IuPcOcN8OTEDzCvsKnMTVDw4TCqsKUAnJPfVMYwoPDoMKJFsKZRQ3CjjTDn8KdwpFTfRw7wofDnF5FGMK8Lw==", "wrE8w6cF", "wq0+wrlNX8K6wrg=", "PcKCMmw=", "dV3CncKnNWxuw7g=", "Ow/DksK/w5dlwpUuwqjCuA3ChFLCs27DnsKuOnw=", "w45tw7srKw==", "w7LCusK8wqs=", "McKmwoDDqw==", "wqvDr3IVwqU=", "Pi7DiQLCnw==", "JsO4wozCrFE=", "w7Rmw7IT", "wopsw5bCkUk=", "w6rDg3TDucKC", "lvmgip.v6YxTXgESekHZhZff=="];
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
          if (type && str["replace"](/[lmgYxTXgESekHZhZff=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662619;
  };
  return fn(++count, size) >> count ^ size;
})(fixtures, 462, 118272);
var fn = function(i, len) {
  i = ~~"0x"["concat"](i);
  var data = fixtures[i];
  if (fn["TSicJF"] === undefined) {
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
    fn["DtXoUc"] = testcase;
    fn["MXHcYl"] = {};
    fn["TSicJF"] = !![];
  }
  var file = fn["MXHcYl"][i];
  if (file === undefined) {
    if (fn["COGzTQ"] === undefined) {
      fn["COGzTQ"] = !![];
    }
    data = fn["DtXoUc"](data, len);
    fn["MXHcYl"][i] = data;
  } else {
    data = file;
  }
  return data;
};
import _0x4537a1 from "postcss";
import _0x34b904 from "path";
import _0x32c249 from "../../src/index.js";
function result(obj, container = {}) {
  var webfs = {
    "HSbSP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return webfs[fn("0", "l3JC")](_0x4537a1, _0x32c249(container))[fn("1", "Z$zG")](obj, {
    "from" : _0x34b904[fn("2", "41@&")](__filename)
  });
}
test(fn("3", "4lOJ"), () => {
  var zlib = {
    "LVwbu" : fn("4", "5IRl"),
    "STOGC" : "16px",
    "hAFwq" : fn("5", "5IRl"),
    "EkOyi" : fn("6", "!@#v"),
    "TWRxr" : "28px",
    "Ujgbk" : fn("7", "am&)"),
    "dsDEk" : function(require, load, callback) {
      return require(load, callback);
    },
    "dVoFN" : fn("8", "5Mwl"),
    "XDwHw" : function(type, name) {
      return type === name;
    },
    "CnLLg" : fn("9", "5IRl"),
    "fezYl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "UwHux" : "24px",
    "ZWFQi" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const callback = {
    "theme" : {
      "fontSize" : {
        "sm" : fn("a", "hTX&"),
        "md" : [fn("b", "4lOJ"), zlib["UwHux"]],
        "lg" : ["20px", zlib[fn("c", "4#nx")]]
      }
    },
    "corePlugins" : [zlib["Ujgbk"]],
    "variants" : {
      "fontSize" : []
    }
  };
  return zlib[fn("d", "@4^S")](result, zlib[fn("e", "0&%G")], callback)[fn("f", "5IRl")]((dict) => {
    if (zlib[fn("10", ")[XQ")](zlib[fn("11", "vNl3")], zlib[fn("12", "R78F")])) {
      zlib[fn("13", "5IRl")](expect, dict["css"])[fn("14", "0&%G")](fn("15", "B4z5"));
    } else {
      const callback = {
        "theme" : {
          "fontSize" : {
            "sm" : zlib["LVwbu"],
            "md" : [zlib[fn("16", "vNl3")], {
              "lineHeight" : "24px",
              "letterSpacing" : zlib["hAFwq"]
            }],
            "lg" : [zlib[fn("17", "l3JC")], {
              "lineHeight" : zlib[fn("18", "5Mwl")],
              "letterSpacing" : fn("19", "o%f]")
            }]
          }
        },
        "corePlugins" : [zlib[fn("1a", "b(jD")]],
        "variants" : {
          "fontSize" : []
        }
      };
      return zlib["dsDEk"](result, zlib["dVoFN"], callback)[fn("1b", "5Mwl")]((result) => {
        expect(result[fn("1c", "6Ccw")])[fn("1d", "x3ds")](fn("1e", "GLgV"));
      });
    }
  });
});
test(fn("1f", "w)]c"), () => {
  var callbacks = {
    "STsJU" : "12px",
    "gAaYg" : "16px",
    "vQtAX" : fn("20", "BTXq"),
    "zAycB" : fn("21", "GLgV"),
    "EISLo" : fn("22", "l3JC"),
    "FnaGW" : function(require, load, callback) {
      return require(load, callback);
    },
    "Jfrci" : "@tailwind utilities"
  };
  const container = {
    "theme" : {
      "fontSize" : {
        "sm" : callbacks[fn("23", "iCDi")],
        "md" : [callbacks[fn("24", "CQZX")], {
          "letterSpacing" : callbacks["vQtAX"]
        }],
        "lg" : [callbacks[fn("25", "w)]c")], {
          "letterSpacing" : callbacks[fn("26", "4lOJ")]
        }]
      }
    },
    "corePlugins" : ["fontSize"],
    "variants" : {
      "fontSize" : []
    }
  };
  return callbacks["FnaGW"](result, callbacks[fn("27", "am&)")], container)[fn("1b", "5Mwl")]((manifest) => {
    expect(manifest["css"])[fn("28", "V#jR")]("\n     .text-sm { font-size: 12px }\n     .text-md { font-size: 16px; letter-spacing: -0.01em }\n     .text-lg { font-size: 20px; letter-spacing: -0.02em }\n    ");
  });
});
test(fn("29", "BTXq"), () => {
  var calcResult = {
    "vDuTu" : function(type, name) {
      return type === name;
    },
    "Dbrcm" : "McYGi",
    "iWTWA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "eDvQZ" : "16px",
    "MCzsk" : "-0.01em",
    "cOnwW" : fn("2a", "cU*8"),
    "uKxgk" : fn("2b", "vNl3"),
    "phnWB" : fn("2c", "TpBs"),
    "OihWB" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const toFixed = {
    "theme" : {
      "fontSize" : {
        "sm" : fn("2d", "0&%G"),
        "md" : [calcResult["eDvQZ"], {
          "lineHeight" : "24px",
          "letterSpacing" : calcResult[fn("2e", "vNl3")]
        }],
        "lg" : [calcResult["cOnwW"], {
          "lineHeight" : calcResult[fn("2f", "b(jD")],
          "letterSpacing" : fn("30", "x3ds")
        }]
      }
    },
    "corePlugins" : [calcResult[fn("31", "4#nx")]],
    "variants" : {
      "fontSize" : []
    }
  };
  return calcResult[fn("32", "b(jD")](result, fn("33", "vopl"), toFixed)[fn("34", "2rGN")]((result) => {
    if (calcResult[fn("35", "l3JC")]("hazXA", calcResult["Dbrcm"])) {
      expect(result[fn("36", "4#nx")])[fn("37", "5Mwl")](fn("38", "N^@3"));
    } else {
      calcResult[fn("39", "*Fe*")](expect, result[fn("3a", "Z$zG")])["toMatchCss"](fn("3b", "V#jR"));
    }
  });
});

