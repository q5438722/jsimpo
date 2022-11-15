'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "O151w7Y7", "LzoYDsOvwo4qUgApdhbDtzFVC8KPew==", "Z3TCry8ZRcKhwrM5wqzCg8OxVz8=", "wqPCuMO7w5PCqUfCtQ==", "wprDlcKAaMKAwpjDmsOqRMKww5glwoN4McKRw7zDog==", "wpHDjFzDiMKb", "w5l5w7PCrXA=", "wqAIB8K4Cw==", "wrfCrsOfw47CsA==", "ZyleN18=", "w6sYFX3Drw==", "w7PDscOLwpXDqnc+amXCmMODwoo=", "CMOtw7UOLMOT", "fvefcip.GQqv6kThcUbjT=="];
(function(obj, count, version) {
  var update = function(target, value, str, val, k) {
    value = value >> 8;
    k = "po";
    var str = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        val = obj[str]();
        if (value === target) {
          value = val;
          str = obj[k + "p"]();
        } else {
          if (value && str["replace"](/[fefcGQqkThcUbjT=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662518;
  };
  return update(++count, version) >> count ^ version;
})(match, 222, 56832);
var e = function(c, n) {
  c = ~~"0x"["concat"](c);
  var key = match[c];
  if (e["vlpELK"] === undefined) {
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
    e["gajXXh"] = testcase;
    e["lzfLgG"] = {};
    e["vlpELK"] = !![];
  }
  var C = e["lzfLgG"][c];
  if (C === undefined) {
    if (e["GkpZwl"] === undefined) {
      e["GkpZwl"] = !![];
    }
    key = e["gajXXh"](key, n);
    e["lzfLgG"][c] = key;
  } else {
    key = C;
  }
  return key;
};
import{
  useReducer as useReducer,
  useEffect as useEffect
}from "react";
import{
  request as request
}from "strapi-helper-plugin";
import{
  getRequestUrl as getRequestUrl
}from "../../../../admin/src/utils";
import _0x8659e8, {
  initialState as initialState
}from "./reducer";
const init = ({
  ssoEnabled : ssoEnabled
}) => {
  var d = {
    "rkzci" : function(saveNotifs) {
      return saveNotifs();
    },
    "EHBGl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fLbwi" : e("0", "TNwk"),
    "cwVsp" : "providers",
    "llfPq" : function(require, load, callback) {
      return require(load, callback);
    },
    "JrLaD" : e("1", "ronB"),
    "hidlR" : e("2", "75FQ"),
    "dXcIQ" : e("3", "oPdq")
  };
  const [cellSizeAndPositionManager, search] = d["llfPq"](useReducer, _0x8659e8, initialState);
  d["llfPq"](useEffect, () => {
    d[e("4", "*5Xi")](init);
  }, []);
  const init = async() => {
    try {
      if (!ssoEnabled) {
        d[e("5", "BG&%")](search, {
          "type" : d[e("6", "i3fC")],
          "data" : []
        });
        return;
      }
      const days = getRequestUrl(d[e("7", "75FQ")]);
      const data = await d["llfPq"](request, days, {
        "method" : "GET"
      });
      search({
        "type" : "GET_DATA_SUCCEEDED",
        "data" : data
      });
    } catch (previousState) {
      console[e("8", "aMLD")](previousState);
      d[e("9", "2ITm")](search, {
        "type" : d["JrLaD"]
      });
      strapi[e("a", "0KYP")][e("b", "CSl2")]({
        "type" : d["hidlR"],
        "message" : {
          "id" : d[e("c", "ktbD")]
        },
        "centered" : !![]
      });
    }
  };
  return cellSizeAndPositionManager;
};
export default init;

