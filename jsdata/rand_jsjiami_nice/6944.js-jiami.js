'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "Q13Di1TCoA==", "wrPDvcKEc3A=", "KcK1w6F6", "w6XDtcKXwpvDng==", "YDJtLjs5dXbCvA==", "U1EZwpvCv8K6", "w7XDoDXCkH/Csg==", "wpDDuMKBY3PDmcOc", "wog8QsKAV3hjwrZvwrc=", "wrp1wovCmgE=", "Q3sPwrPClA==", "fmXCtTfCuA==", "Kg8gwphiw719", "NQAowoh/", "B8OMwo7DlgIG", "w70iBMOXE8KSwrY=", "QsO4wo5WLg==", "eEDCjCTCpA==", "wo/Ci8OvwoRT", "w7XDpcOgO2nDpD1jwonCs8OUUsO2XsK+LB8JwpbCoSQewrXCsDvDm0PCmcOuFy0cw4jCsxxfHMKaYDHCvQ8=", "wqXCpMOeNQ==", "Nh/CicKiw6rCtwDCucKMwpg=", "Z8KJw4BvwqY=", "wpQyVw==", 
"AgJXwovCusKrIm3ClcOa", "w4HCkcKmwprDmg==", "O3VEbA==", "bHnDgWbCqQ==", "eMKpQMK0w50=", "KjcSwrlc", "fDJgPw==", "w6PDvQ/Cl0g=", "FynClEU=", "Fk/DhnnCrg==", "wonDocKEwr8y", "wq7CgsOWKFA=", "Gj87eUU=", "asO0wovDjg8=", "Tm0jwrfCvw==", "woJKwqTCiw==", "LcOxw4rDjA==", "w4/DqyXCjGjCvsOWwpnDjmU=", "wqLDhcK9VF4=", "woLDssKmwq8=", "FcOKwrHDjRIGcxg=", "w57CqwoBwpE=", "U8OFwrJ9CmIAMy45GMO0", "Q03DgMK5w6bCkBzCscKWw53ChBJ1SQ==", "fFPCoAPCtw==", "BJVviXpBMD.Xav6TaBDNWhsQ=="];
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
          if (type && str["replace"](/[BJVXBMDXaTaBDNWhsQ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662834;
  };
  return fn(++count, size) >> count ^ size;
})(match, 144, 36864);
var p = function(c, t) {
  c = ~~"0x"["concat"](c);
  var s = match[c];
  if (p["bTcnZk"] === undefined) {
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
    p["pxZGBg"] = testcase;
    p["LeZAeP"] = {};
    p["bTcnZk"] = !![];
  }
  var h = p["LeZAeP"][c];
  if (h === undefined) {
    if (p["JjzkpI"] === undefined) {
      p["JjzkpI"] = !![];
    }
    s = p["pxZGBg"](s, t);
    p["LeZAeP"][c] = s;
  } else {
    s = h;
  }
  return s;
};
const el = [p("0", "ydKO"), p("1", "UDAV")];
export default(msg, api) => {
  function init(document) {
    var e = {
      "WRNxP" : function(previous, obj) {
        return match["CAsjz"](previous, obj);
      },
      "gDJPy" : match["CCFuu"],
      "BGsYh" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    let msg = document;
    let prop = !![];
    for (; msg = msg[p("b", "fbnx")];) {
      if (match[p("c", "w&1j")](match[p("d", "8fhf")], match[p("e", "8aEI")])) {
        return !![];
      } else {
        if (~el[p("f", "WjL9")](msg["value"]["type"])) {
          prop = ![];
          break;
        }
      }
    }
    document[p("10", "WjL9")]["declarations"][p("11", "m%j#")](PL$30)[p("12", "N[p2")]((e) => {
      if (e[p("13", "ydKO")]("wfXsp", e[p("14", "8aEI")])) {
        if (e[p("15", "(MeA")](prop, ![])) {
          console["log"](p("16", "KXe@") + e["id"][p("17", "KXe@")] + p("18", "UDAV") + msg[p("19", "kVVr")]["type"]);
        } else {
          planner_event_handler(e);
        }
      } else {
        console[p("1a", "fbnx")]('> Skipping removal of undefined init for "' + e["id"]["name"] + p("1b", "8fhf") + msg[p("1c", "w7OW")][p("1d", "^ydB")]);
      }
    });
  }
  function planner_event_handler(e) {
    if (match[p("1e", "*ADu")](p("1f", "f6H("), match[p("20", "WjL9")])) {
      return !![];
    } else {
      e[p("21", "dqEy")] = null;
      _0x53763b++;
    }
  }
  function PL$30(e) {
    let {
      init : ast
    } = e;
    if (ast) {
      if (match[p("22", "[]Yt")](ast[p("23", "lcbZ")], match[p("24", "3!V3")]) && match[p("25", "pzKU")](ast["operator"], match[p("26", "KXe@")]) && match[p("27", "&3VS")](ast["argument"][p("28", "4vCA")], 0)) {
        if (match[p("29", "8fhf")] !== "FJtRf") {
          return !![];
        } else {
          e[p("2a", "w&1j")] = null;
          _0x53763b++;
        }
      }
      if (match["FWpCi"](ast[p("2b", "9[a6")], p("2c", "[]Yt")) && match[p("2d", "m*3$")](ast[p("2e", "pzKU")], match["kougR"])) {
        return !![];
      }
    }
    return ![];
  }
  var match = {
    "CAsjz" : function(value, joiner) {
      return value !== joiner;
    },
    "CCFuu" : p("2", "8aEI"),
    "QQFeW" : function(name, initialValue) {
      return name === initialValue;
    },
    "cCxOG" : "dcarQ",
    "aasCe" : p("3", "*ADu"),
    "iVVDF" : p("4", "m*3$"),
    "erOuT" : function(name, initialValue) {
      return name === initialValue;
    },
    "cGTGV" : "UnaryExpression",
    "eGexP" : p("5", "L&Y0"),
    "ZzBmE" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "nUTKl" : p("6", "&^Em"),
    "FWpCi" : function(name, initialValue) {
      return name === initialValue;
    },
    "TRNrL" : function(name, initialValue) {
      return name === initialValue;
    },
    "kougR" : p("7", "dqEy"),
    "humme" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RInrg" : p("8", "8fhf")
  };
  let {
    jscodeshift : previous
  } = api;
  let _0x53763b = 0;
  let document = match["humme"](previous, msg[p("9", "[]Yt")])["find"](previous["VariableDeclaration"])[p("a", "m*3$")](init);
  return _0x53763b ? document[p("2f", "m%j#")]({
    "quote" : match[p("30", "Y*12")]
  }) : null;
}
;
