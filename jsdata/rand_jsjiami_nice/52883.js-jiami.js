'use strict';
var vip = "vip.v6";
var _0x3f69 = [vip, "FMK5IcOgwps=", "woVxw5XDsFMrYg==", "wobDlQs=", "Glk4w53Du1FMwoPDug==", "HMKbHcOp", "ZDow", "wrFpeCbDnMK9GA==", "w4VYwqNbw47CpcKVwqFFwqV9wp7DhV4=", "KFknw7TDvw==", "S0c4wpJVM23Cu3kcD8O/", "OkhwLcOewojCoyQJwps=", "bDoiw6gEw69Ew5cGU3vDjsOOGQ==", "dMKWwpTCuwQgwrDCjFfCvw==", "WV86wppcO3rCjFIb", "wpTDj0UxwqnChg7DqsKHw7EDwrvDkMOTHSVew4LDjh3CpA==", "MFE5UsOVRkoFBcKBwrA=", "w5Bpw54VAcKN", "wqsBHsKEw5DDoA==", "wqphNRxb", "w5YMwpo1w5M=", "w5oZwr8Kw7I=", "w61aw6oJGw==", "wq3Dj8OVNAE=", "QDwRw5fCpQ==", 
"HlQ5w5fDtA==", "woEsYmwkw4tO", "KcKfIsOZw6A=", "w7AGwqo=", "w6wmHAjDuQ==", "wrLClsK8HA==", "CsKNHMO8w6A5QBhSKnfDq0zCkQ==", "a2LCmQ==", "w7gGwrgGw4QUwog=", "Y37CgysFwrPCrcK3VzvCg8K4w7RD", "aR4jw7LCo8KywoPDt8K7PsOX", "w5PCmx5Qw58=", "wrbChMOhw6FLTBE7EztIw5o=", "w7NnHXZq", "ZcKrw67DoMOx", "a2zCgA==", "wp7Dm8KkJcKi", "di80w7rCng==", "W1nCsR7Ckw==", "w5jCjQV8w6w=", "fxYmw7jCvA==", "wpxbw6jDl1g=", "w60tHigx", "vip.jv6DxaXagPwyrWWxEM=="];
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
          if (value && str["replace"](/[jDxaXagPwyrWWxEM=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662051;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3f69, 434, 111104);
var _0x2420 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x3f69[c];
  if (_0x2420["hljwtG"] === undefined) {
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
    _0x2420["gTGpAA"] = testcase;
    _0x2420["OAxfgR"] = {};
    _0x2420["hljwtG"] = !![];
  }
  var e = _0x2420["OAxfgR"][c];
  if (e === undefined) {
    if (_0x2420["bzgOft"] === undefined) {
      _0x2420["bzgOft"] = !![];
    }
    x = _0x2420["gTGpAA"](x, alpha);
    _0x2420["OAxfgR"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
Object[_0x2420("0", "xMnF")](exports, _0x2420("1", "akjX"), {
  "value" : !![]
});
exports[_0x2420("2", "WXuK")] = void 0;
const codegen_1 = require(_0x2420("3", "r0*$"));
const names_1 = require("../../compile/names");
const ref_1 = require(_0x2420("4", "9K&z"));
const def = {
  "keyword" : "$dynamicRef",
  "schemaType" : _0x2420("5", "b*$#"),
  "code" : (body) => {
    return dynamicRef(body, body[_0x2420("6", "Hu)J")]);
  }
};
function dynamicRef(success, b) {
  function setValue(params) {
    if (it["schemaEnv"][_0x2420("12", "lvGd")][_0x2420("13", "#k0$")][criterion_index]) {
      const value = self[_0x2420("14", "DM(r")]("_v", codegen_1["_"]`${names_1[_0x2420("15", "hcCG")][_0x2420("16", "DM(r")]}${codegen_1[_0x2420("17", "F$!l")](criterion_index)}`);
      self["if"](value, setValues(value, params), c[_0x2420("18", "r0*$")](setValues, it[_0x2420("19", "SkCg")], params));
    } else {
      if (c["RLmxI"](c[_0x2420("1a", "zyLW")], c["PHyqK"])) {
        c[_0x2420("1b", "VUj*")](setValues, it["validateName"], params)();
      } else {
        const val = self[_0x2420("1c", "IGaR")](c[_0x2420("1d", "9Fr8")], ![]);
        c["BSgPb"](setValue, val);
        success["ok"](val);
      }
    }
  }
  function setValues(height, params) {
    var KUTE = {
      "qmqZm" : function(require, load, callback) {
        return require(load, callback);
      },
      "zKQKY" : function(row, val) {
        return c["FNNGj"](row, val);
      },
      "UrYBT" : c[_0x2420("1e", "F$!l")]
    };
    if ("aZbwh" !== c[_0x2420("1f", "!*zS")]) {
      return params ? () => {
        return self[_0x2420("20", "r0*$")](() => {
          var c = {
            "AcwLi" : function(el, to, ops) {
              return KUTE[_0x2420("21", "F$!l")](el, to, ops);
            }
          };
          if (KUTE[_0x2420("22", "DKl!")](KUTE[_0x2420("23", "PJ6f")], KUTE[_0x2420("24", "P*8l")])) {
            ref_1[_0x2420("25", "DKl!")](success, height);
            self[_0x2420("26", "5^!5")](params, !![]);
          } else {
            if (it[_0x2420("27", "E696")][_0x2420("28", "#k0$")]["dynamicAnchors"][criterion_index]) {
              const i = self[_0x2420("29", "xMnF")]("_v", codegen_1["_"]`${names_1[_0x2420("2a", "iVrV")][_0x2420("2b", "Qz@N")]}${codegen_1["getProperty"](criterion_index)}`);
              self["if"](i, c[_0x2420("2c", "E696")](setValues, i, params), setValues(it["validateName"], params));
            } else {
              setValues(it[_0x2420("2d", "WXuK")], params)();
            }
          }
        });
      } : () => {
        return ref_1["callRef"](success, height);
      };
    } else {
      setValue();
    }
  }
  var c = {
    "QXYey" : _0x2420("7", "0$%C"),
    "BSgPb" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "iztOX" : function(require, load, callback) {
      return require(load, callback);
    },
    "RLmxI" : function(name, initialValue) {
      return name === initialValue;
    },
    "PHyqK" : _0x2420("8", "hcCG"),
    "xwhHO" : function(require, load, callback) {
      return require(load, callback);
    },
    "FNNGj" : function(name, initialValue) {
      return name === initialValue;
    },
    "xTcXO" : "oWnPo",
    "Uatyr" : "KTWVD",
    "NGFut" : function(value, joiner) {
      return value !== joiner;
    },
    "wniob" : _0x2420("9", "hcCG"),
    "GkPDm" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const {
    gen : self,
    keyword : keyword,
    it : it
  } = success;
  if (c[_0x2420("a", "b*$#")](b[0], "#")) {
    throw new Error('"' + keyword + '" only supports hash fragment reference');
  }
  const criterion_index = b[_0x2420("b", "P(bv")](1);
  if (it["allErrors"]) {
    if (c[_0x2420("c", "F$!l")](c[_0x2420("d", "E696")], c["wniob"])) {
      ref_1[_0x2420("e", "teFe")](success, validate);
      self["let"](valid, !![]);
    } else {
      c[_0x2420("f", "#k0$")](setValue);
    }
  } else {
    const status = self[_0x2420("10", "hcCG")](_0x2420("11", "LB24"), ![]);
    setValue(status);
    success["ok"](status);
  }
}
exports[_0x2420("2e", "c#9S")] = dynamicRef;
exports["default"] = def;

