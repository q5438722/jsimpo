'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w5TCmsKBLhA=", "w6nDrSbDvQ==", "d8O7wq5bw6ptw7JdKcO3KsOL", "wprCv8KPXg==", "UAloworDmV8O", "VMOzwpVs", "w44lw6DDgcORU8Of", "PsONwo3CgijCmcKpY3XCsDfDgA==", "woF7wpYmwp4=", "VivDugRv", "VArDpx1I", "dCLDlDR+", "HFY8wr1yOSd7w78tw6/DicO3wrXCuhHClWs=", "A0slwr4IwrvDi2I=", "Knk3wollw68JwoHDp8KqLMO5w6IowoLChzvDoAcXwoNxwrVQIiXCtxHCnVg=", "wp/DkWI+acKvwrzCs0rCtG9RL8OAw4slw7c=", "V2dYwqrCr8KocsOF", "YgfDoMKQWMO+woJSw5xTJ8K7WStkw74cKR9LdSRtw71qGi5YZA==", "wpYlS8OqQXHCpDQgwpIDwpMqbMOfwq5VLsKBV8Kfw7TDocOd", 
"w6MdMMOhQwXDpMOWwrzCkgLCqhLCmcKiTw==", "w7TDjsKpbzA=", "wp8+T8OgUDnCtiURwqQuwq45LcOHwqJbJMO+d8Kfwr/DlsO3wpgkOXhZZ8Ojw4BpfcKc", "w6ktw4A=", "Yw/DuzRr", "AMKKccOzwpcmD19Ww7zCpAoawpfCsUBNwoPCk3bDsMK6QnI=", "w4FPwqViaQ==", "w4zChxjCmTPCqnA=", "EgMJNzg=", "wrNWX8KPDcOFBg==", "I30gwoVq", "w7U8wpVAwqTDncK5", "w7E1wpBbwq0=", "wo1me8K0Og==", "IMKkwp8=", "WMOnwqtKw6Zow5VAE8OJCsOrw7pNw4E2TcO7wpknPzdsPA==", "NxVJw4BOwqUdwoYYAQYDA8OXQDJDV8OO", "w6/DvsO5", "w4BDwrBq", "woXDkWcyfsKowq8=", "wohJw7IvVm/DvcOM", "BlY5wrFlPjQ=", 
"wqpSwqQUwoY=", "w6zCqhLClgY=", "w6Rdwq9FQg==", "w7ctwoJGwq7Dg8KMwrXDgEzDm8Kk", "wpzCnMKZJU4JwpNa", "w45ywq1BTg==", "PcOfw642", "w5rDqMKjdg==", "f8OrwqRc", "wrxXXMKeFw==", "w5rCocOaw75y", "mzvmiRpo.v6USFLTPjHSYZN=="];
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
          if (type && str["replace"](/[mzmRoUSFLTPjHSYZN=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662232;
  };
  return fn(++count, size) >> count ^ size;
})(match, 382, 97792);
var update = function(key, tree) {
  key = ~~"0x"["concat"](key);
  var data = match[key];
  if (update["HjPgQO"] === undefined) {
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
    update["yONGwe"] = testcase;
    update["oVWDlw"] = {};
    update["HjPgQO"] = !![];
  }
  var type = update["oVWDlw"][key];
  if (type === undefined) {
    if (update["gsaczD"] === undefined) {
      update["gsaczD"] = !![];
    }
    data = update["yONGwe"](data, tree);
    update["oVWDlw"][key] = data;
  } else {
    data = type;
  }
  return data;
};
import{
  HTTP as HTTP
}from "meteor/http";
import{
  settings as settings
}from "../../../settings";
import{
  callbacks as callbacks
}from "../../../callbacks";
import{
  Livechat as Livechat
}from "../lib/Livechat";
function init(proxy) {
  var stack = {
    "yhpxn" : function(state, undefinedAttr) {
      return state !== undefinedAttr;
    },
    "RwnFQ" : update("0", "8$lw"),
    "HYWRC" : update("1", "6Z6W"),
    "VDyfA" : update("2", "H8h*"),
    "RABJv" : "POST",
    "gSovU" : "https://www.rdstation.com.br/api/1.3/conversions",
    "EZAFD" : update("3", "8$lw")
  };
  if (!settings[update("4", "tCEZ")](stack[update("5", "Xf4T")])) {
    return proxy;
  }
  const data = Livechat[update("6", "@4NR")](proxy);
  if (!data["visitor"][update("7", "^Q7w")]) {
    return proxy;
  }
  const email = Array["isArray"](data[update("8", "8LxU")][update("9", "2VkR")]) ? data[update("a", "YoiV")][update("b", "Lt*j")][0][update("c", "Mu0E")] : data["visitor"][update("d", "Mu0E")];
  const v = {
    "headers" : {
      "Content-Type" : stack[update("e", "YoiV")]
    },
    "data" : {
      "token_rdstation" : settings[update("f", "0gQB")](update("10", "l*2O")),
      "identificador" : update("11", "fy$3"),
      "client_id" : data["visitor"][update("12", "O#S3")],
      "email" : email
    }
  };
  v[update("13", "^Q7w")]["nome"] = data["visitor"]["name"] || data[update("14", "f)BI")][update("15", "a2H1")];
  if (data[update("16", "q$ox")]["phone"]) {
    if (stack[update("17", "jkTy")](stack[update("18", "8LxU")], update("19", "!Qmt"))) {
      v["data"][field] = data[update("1a", "Mu0E")][field];
    } else {
      v["data"][update("1b", "DTAU")] = data["visitor"][update("1c", "!Qmt")];
    }
  }
  if (data["tags"]) {
    v["data"][update("1d", "$OGL")] = data[update("1e", "H8h*")];
  }
  Object[update("1f", "l*2O")](data["customFields"] || {})["forEach"]((k) => {
    if (stack[update("20", "YoiV")](update("21", "Vu41"), update("22", "Oe0h"))) {
      return proxy;
    } else {
      v[update("23", "^Bw2")][k] = data[update("24", "l*2O")][k];
    }
  });
  Object[update("25", "qxF^")](data[update("26", "]fS%")]["customFields"] || {})["forEach"]((n) => {
    v[update("27", "OAZH")][n] = data[update("28", "d$7M")][update("29", "z[n[")][n];
  });
  try {
    HTTP["call"](stack[update("2a", "jkTy")], stack[update("2b", "Xf4T")], v);
  } catch (ext) {
    console[update("2c", "Xf4T")](stack[update("2d", "Xf4T")], ext);
  }
  return proxy;
}
callbacks["add"](update("2e", "q$ox"), init, callbacks[update("2f", "]kRt")]["MEDIUM"], update("30", "Lt*j"));
callbacks["add"](update("31", "f)BI"), init, callbacks[update("32", "A^*A")]["MEDIUM"], update("33", "alml"));

