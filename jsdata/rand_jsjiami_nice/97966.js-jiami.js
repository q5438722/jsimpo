'use strict';
var vip = "vip.v6";
var _0x28ed = [vip, "wrIBOmvChU4A", "woAbJmDCvcOgwqbCkR5Yw7PDlMO3", "DWN0", "w7LDnsOYO8OZ", "w48jwpQrw4oZGw==", "ciwYXl4=", "w7HDiE0dFA==", "d8OPwpPDuUnDoAHCsQ/ClsOaAsK/", "NcKWIg==", "LyfCnsKxMsKZwrQ=", "eMKPwr/DpX0cIRbDgn9+w401", "w5Niw65Kw78=", "w4gmw7zCqMOiBsOYwqs9", "w7rDnMOs", "JsKkwrwxwrJCUS91wolfWcKA", "w73DuXNGIsKLwpZww6EyMsOPcCY=", "CVvCkcO1w7QLw7Qpw7g=", "wpdgIH1N", "BcOTLcOqw6rDvw==", "w4YAwoZ3e03CqC4=", "TVApwpV7", "OcKeJw==", "w5rDjMO/H8O1Az7Dp1E9TMKhwqTCpw==", "dz/Cs8Oxw5JkZMOIw7JAwq0bRVzCp8OMwoDClD7DugNkVsKf", 
"YcOLw7zCuDXDlsKLSMOq", "w4MnwoEFw4gbP8O8w57Dn0DDh8KBw5I=", "w4MUwoR4", "wpHDosOIOMKM", "aybCoVbDkA==", "wr/DvsOIOsKTwp/CgjPDnmzDmSvDoVE=", "LCfCjMKfMMKbwpAxw6DDthHDlmUSwpDCjRfDrA3CnsO9bQDDtg==", "w5BKEQ==", "OCfCjA==", "wonCozMOMkbDpA==", "w44ww60=", "w7jDmsO1", "YcO9ecKKecKy", "YcO3w5XCh2bDtUVW", "w53Cix7CiMKD", "wqMXOU/ClkQRwrQR", "w7jDlsOlYMKQw7LDrQ==", "MMKlwrwUwqNFYSRGwoVWQsKR", "wo7CrMKfw6whaCQ=", "dcKzOsKXw6nCisOSwro=", "qYvSVdipP.rIyv6sQgGSM=="];
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
          if (value && str["replace"](/[qYSVdPrIysQgGSM=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662429;
  };
  return fn(++count, long) >> count ^ long;
})(_0x28ed, 191, 48896);
var _0x3f9c = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x28ed[c];
  if (_0x3f9c["qifgGX"] === undefined) {
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
    _0x3f9c["vFinmL"] = testcase;
    _0x3f9c["Nkbrrd"] = {};
    _0x3f9c["qifgGX"] = !![];
  }
  var e = _0x3f9c["Nkbrrd"][c];
  if (e === undefined) {
    if (_0x3f9c["VZWFVX"] === undefined) {
      _0x3f9c["VZWFVX"] = !![];
    }
    x = _0x3f9c["vFinmL"](x, alpha);
    _0x3f9c["Nkbrrd"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
Object[_0x3f9c("0", "tDXh")](exports, "__esModule", {
  "value" : !![]
});
exports[_0x3f9c("1", "*fL7")] = Component;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache() {
  var _0x31f734 = {
    "UyfRV" : "function"
  };
  if (typeof WeakMap !== _0x31f734[_0x3f9c("2", "ENoX")]) {
    return null;
  }
  var attachmentsInProgress = new WeakMap;
  _getRequireWildcardCache = function() {
    return attachmentsInProgress;
  };
  return attachmentsInProgress;
}
function _interopRequireWildcard(obj) {
  var IE_DETECT = {
    "YfSzC" : function(name, initialValue) {
      return name === initialValue;
    },
    "DLMYj" : function(saveNotifs) {
      return saveNotifs();
    },
    "hjjXL" : "Jyfkq"
  };
  if (obj && obj["__esModule"]) {
    return obj;
  }
  if (IE_DETECT["YfSzC"](obj, null) || typeof obj !== _0x3f9c("3", "Rd$V") && typeof obj !== _0x3f9c("4", "6bqQ")) {
    return {
      "default" : obj
    };
  }
  var def = IE_DETECT[_0x3f9c("5", "TzjT")](_getRequireWildcardCache);
  if (def && def[_0x3f9c("6", "MI#[")](obj)) {
    return def["get"](obj);
  }
  var newObj = {};
  var event = Object[_0x3f9c("7", "DIm4")] && Object[_0x3f9c("8", "sCxm")];
  var prop;
  for (prop in obj) {
    if (Object[_0x3f9c("9", "3[N5")][_0x3f9c("a", "69UM")][_0x3f9c("b", "6bqQ")](obj, prop)) {
      if (_0x3f9c("c", "Kp]I") !== IE_DETECT[_0x3f9c("d", "N1L&")]) {
        Object[_0x3f9c("e", "Kp]I")](newObj, prop, desc);
      } else {
        var desc = event ? Object[_0x3f9c("f", "k[DM")](obj, prop) : null;
        if (desc && (desc[_0x3f9c("10", "CEms")] || desc[_0x3f9c("11", "k[DM")])) {
          Object["defineProperty"](newObj, prop, desc);
        } else {
          newObj[prop] = obj[prop];
        }
      }
    }
  }
  newObj[_0x3f9c("12", "e8(R")] = obj;
  if (def) {
    def[_0x3f9c("13", "e*He")](obj, newObj);
  }
  return newObj;
}
function Component() {
  var _0x31a477 = {
    "wkKEG" : function(saveNotifs) {
      return saveNotifs();
    },
    "LwAMB" : "Dark mode? ",
    "qQYEV" : _0x3f9c("14", "hzdV"),
    "ciuDq" : "Count: ",
    "YQKwN" : _0x3f9c("15", "f!E5"),
    "ipQfy" : "Update count"
  };
  const [data, callback] = (0, _react[_0x3f9c("16", "U9va")])(0);
  const GET_AUTH_URL_TIMEOUT = useIsDarkMode();
  const {
    foo : fooModule
  } = _0x31a477[_0x3f9c("17", "C11V")](useFoo);
  (0, _react[_0x3f9c("18", "7Jvd")])(() => {
  }, []);
  const resize = () => {
    return callback(data + 1);
  };
  return _react[_0x3f9c("19", "hzdV")][_0x3f9c("1a", "lpAb")](_react[_0x3f9c("1b", "b!uT")][_0x3f9c("1c", "aB!2")], null, _react[_0x3f9c("1d", "7Jvd")][_0x3f9c("1e", "KHxn")](_0x3f9c("1f", "^8h!"), null, _0x31a477[_0x3f9c("20", "DIm4")], GET_AUTH_URL_TIMEOUT), _react[_0x3f9c("21", "69UM")][_0x3f9c("1e", "KHxn")](_0x31a477[_0x3f9c("22", "!(Hl")], null, _0x31a477[_0x3f9c("23", "l7(l")], data), _react["default"][_0x3f9c("24", "ciPo")](_0x3f9c("25", "MI#["), null, "Foo: ", fooModule), _react[_0x3f9c("26", 
  "k[DM")][_0x3f9c("27", "^nT0")](_0x31a477["YQKwN"], {
    "onClick" : resize
  }, _0x31a477[_0x3f9c("28", "Kcw3")]));
}
function useIsDarkMode() {
  const [_0x24acad] = (0, _react["useState"])(![]);
  (0, _react[_0x3f9c("29", "e*He")])(function useEffectCreate() {
  }, []);
  return _0x24acad;
}
function useFoo() {
  var _0x3601b4 = {
    "EssrQ" : _0x3f9c("2a", "hzdV")
  };
  (0, _react[_0x3f9c("2b", "lpAb")])(_0x3601b4["EssrQ"]);
  return {
    "foo" : !![]
  };
}
;
