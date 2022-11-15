'use strict';
var resources = "vip.v6";
var fixtures = [resources, "Y0pUK38UHB0=", "w700w7jCjsOkDMOXwq8=", "J3zCkMObw4Ikw7w=", "wrrDm8OAa8KrJ8K4w6I=", "w7Y2wqDDimU=", "w5rDoEQuKg==", "ZcOQLMKvNQ==", "ZQPCj8OG", "wr7Dk8OIasKFIsKKw6pFwpHClg==", "w4hVw43Du8OA", "DMOUwppdGks=", "w7/CqMK6wpjDpsKnLsO5", "w4hfw77Dp8KQL8OZwpbDmC3Csw==", "YSPDmw==", "QcK9NhnChMOTw63Cnw==", "w4pAw5osGcOfKis=", "w55Jw40sEMOfNDU=", "a8KQDwXCuw==", "D8OVwopbGk8Z", "IAAh", "w7ZsLBpIKi0=", "ThTCmcO9XA==", "wr7CgMKRD8KU", "w5PDi0MbEw==", "QcOCwqXDnTs=", "QwnDssO1w4E=", 
"w4rCsMKSwovDuQ==", "w7vDjmA+JMOjRDk=", "w4zDlknChBU=", "OS3CisORXw==", "w4fDqRsLw5DCnzzCjgBDw6jDrm7DiA==", "OyAIwo5H", "w4bDimcDMw==", "w5gxIg==", "w6fDh2c+", "w6hrJhtfEhw0L8OFOA==", "awnCncOGW8Kl", "KWDCig==", "Yvip.v6mLNgMnHXIYgJueoy=="];
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
          if (type && str["replace"](/[YmLNgMnHXIYgJueoy=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662264;
  };
  return fn(++count, size) >> count ^ size;
})(fixtures, 144, 36864);
var callback = function(code, response) {
  code = ~~"0x"["concat"](code);
  var data = fixtures[code];
  if (callback["KlBRjV"] === undefined) {
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
    callback["hlesmB"] = testcase;
    callback["vuFUgu"] = {};
    callback["KlBRjV"] = !![];
  }
  var message = callback["vuFUgu"][code];
  if (message === undefined) {
    if (callback["jvhZBk"] === undefined) {
      callback["jvhZBk"] = !![];
    }
    data = callback["hlesmB"](data, response);
    callback["vuFUgu"][code] = data;
  } else {
    data = message;
  }
  return data;
};
import{
  getStorageSync as getStorageSync
}from "./storage";
const pathName = callback("0", "drPf");
let result;
function handler(context) {
  var newObj = {
    "VgyQd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "MhfIq" : function(value, joiner) {
      return value !== joiner;
    },
    "pycEq" : callback("1", "iKNJ")
  };
  result = result || newObj["VgyQd"](getStorageSync, pathName);
  if (!result) {
    if (newObj[callback("2", "Gp#(")]("rOZmp", newObj["pycEq"])) {
      const position = context["safeArea"];
      context["safeAreaInsets"] = {
        "top" : position[callback("3", "d[Qa")],
        "left" : position[callback("4", "Gp#(")],
        "right" : context[callback("5", "blEL")] - position["right"],
        "bottom" : context["windowHeight"] - position[callback("6", "t9Ug")]
      };
    } else {
      result = Date[callback("7", "&#%o")]() + "" + Math["floor"](Math["random"]() * 1E7);
      __GLOBAL__["setStorage"]({
        "key" : pathName,
        "data" : result
      });
    }
  }
  context[callback("8", "4YUk")] = result;
}
function next(d) {
  var symAttrs = {
    "qdXdb" : callback("9", "QmbY"),
    "tfEts" : callback("a", "1*X2"),
    "sMPwj" : function(name, initialValue) {
      return name === initialValue;
    },
    "rnYBV" : "QBEdh",
    "BDaHv" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    }
  };
  if (d[callback("b", "D0ph")]) {
    if (symAttrs[callback("c", "Lk7)")](callback("d", "Gp#("), symAttrs[callback("e", "TRFU")])) {
      const data = d["safeArea"];
      d["safeAreaInsets"] = {
        "top" : data["top"],
        "left" : data[callback("f", "t9Ug")],
        "right" : d[callback("10", "D0ph")] - data["right"],
        "bottom" : symAttrs[callback("11", "ypt[")](d["windowHeight"], data[callback("12", "DYq&")])
      };
    } else {
      let s = d[callback("13", "nzI]")] ? d["platform"][callback("14", "#bEh")]() : symAttrs["qdXdb"];
      if (!~[symAttrs["tfEts"], callback("15", "pijq")]["indexOf"](s)) {
        s = "devtools";
      }
      d[callback("16", "d3%z")] = s;
    }
  }
}
function cb(data) {
  var window = {
    "bPABK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EtIgy" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZAXhY" : callback("17", "D8vr"),
    "GrpOh" : function(name, initialValue) {
      return name === initialValue;
    },
    "XiBQQ" : "xSeLO"
  };
  let value = data[callback("18", "D8vr")] ? data["platform"]["toLowerCase"]() : window[callback("19", "d3%z")];
  if (!~[callback("1a", "DYq&"), callback("1b", "iKNJ")][callback("1c", "blEL")](value)) {
    if (window[callback("1d", "t9Ug")](callback("1e", "!sm^"), window[callback("1f", "Gp#(")])) {
      value = window[callback("20", "7](x")];
    } else {
      window[callback("21", "nWs1")](handler, data);
      next(data);
      window[callback("22", "nzI]")](cb, data);
    }
  }
  data[callback("23", "Gp#(")] = value;
}
export default{
  "returnValue" : function(value) {
    var self = {
      "kbqwc" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    handler(value);
    self[callback("24", "T9OX")](next, value);
    self[callback("25", "t7z1")](cb, value);
  }
};

