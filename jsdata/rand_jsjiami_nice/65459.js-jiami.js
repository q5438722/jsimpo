'use strict';
var vip = "vip.v6";
var _0x567d = [vip, "wrppcBs=", "M2LCvAZqwqpDwrk=", "CT5twq5M", "J8K8UsKsbA==", "w6TCscOx", "eMOmL8K0", "cHkuFQ==", "w7t/wpw4W8KgY2xvw7/Ct8OIw6/Dk8OGOUfDoV8q", "wrA/w4U=", "wqd/ahAqw4QXw5ZWw6dEwrVXCVfCjX4uIh/Dt8OBwp5YKcKLwo7CqMOHw7kHwqXDrCVKwr9ECXhKwos6SkTCqsKjecK5FSM=", "w5zDnsKZB8KJwoLClR4=", "wqgVw4vDr0g=", "w4Y/HDXDtMOfw4HDrz0ZPsOIw4HCs8K7wrYQwpdrwqZ8d29YEBMrw6kQTgg=", "JDoUOMKQwqA=", "XMKSY8OFwqo=", "w7zCv8Ogwo8=", "F1vDtC8=", "cCfDt01gw6VFwqbDtGEVckgQBsOOAMO5", "RcOnEMORw7VHXjVu", "w6k0wozDuCvDqgA=", 
"w6HCiMK+f8KcL8OhCxvDlcK4QsKFWMKNwoU=", "vnitplr.TSOuv6cyBUCGult=="];
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
          if (value && str["replace"](/[ntlrTSOucyBUCGult=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662820;
  };
  return fn(++count, long) >> count ^ long;
})(_0x567d, 445, 113920);
var _0x2ecf = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x567d[a];
  if (_0x2ecf["WPAzXF"] === undefined) {
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
    _0x2ecf["lgezmi"] = testcase;
    _0x2ecf["eCnvgW"] = {};
    _0x2ecf["WPAzXF"] = !![];
  }
  var A = _0x2ecf["eCnvgW"][a];
  if (A === undefined) {
    if (_0x2ecf["lReAnU"] === undefined) {
      _0x2ecf["lReAnU"] = !![];
    }
    value = _0x2ecf["lgezmi"](value, opt_max);
    _0x2ecf["eCnvgW"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const t = require(_0x2ecf("0", "T!#R"));
const glob = require(_0x2ecf("1", "#9nc"));
const {
  resolve : resolve
} = require(_0x2ecf("2", "X8Bt"));
const {
  real : mockNpm
} = require(_0x2ecf("3", "F4uH"));
const full = process[_0x2ecf("4", "F4uH")]["npm_lifecycle_event"] === "check-coverage";
if (!full) {
  t["pass"](_0x2ecf("5", "rAPA"));
} else {
  const {
    npm : data
  } = mockNpm(t);
  t[_0x2ecf("6", "xKho")](() => {
    var c = {
      "UlRnX" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "RDDPL" : function(saveNotifs) {
        return saveNotifs();
      }
    };
    const options = c[_0x2ecf("7", "FKrc")](require, _0x2ecf("8", "JmlK"));
    options[_0x2ecf("9", "(8Bt")](data);
    c[_0x2ecf("a", "MrKf")](options);
  });
  t["test"]("load npm first", async(canCreateDiscussions) => {
    await data[_0x2ecf("b", "T!#R")]();
  });
  t[_0x2ecf("c", ")B&W")](_0x2ecf("d", "m^@N"), (params) => {
    var gl = {
      "JtqGV" : _0x2ecf("e", "3)BA"),
      "fSGxP" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      },
      "xJhfO" : _0x2ecf("f", "@jeg"),
      "QwjfX" : _0x2ecf("10", "&wHX")
    };
    const _0x2c11d5 = resolve(__dirname, gl["JtqGV"]);
    for (const value of glob[_0x2ecf("11", "rAPA")](_0x2c11d5 + _0x2ecf("12", "m^@N"))) {
      require(value);
      params["pass"](gl[_0x2ecf("13", "JMQz")](gl[_0x2ecf("14", "ogCf")], value));
    }
    params["pass"](gl["QwjfX"]);
    params["end"]();
  });
}
;
