/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x27d0 = [vip, "wqTCucKWLMO9wodZwp0ewoI=", "QMO1w5fClGfCoMK6axNDHw==", "w55Fw48=", "E8K+VcKqwol2LMKLBcOQ", "w4QYwo/CsMOw", "wofCtcKiNkbDpDN6LHE=", "NMONwq4Fw4c1ZDwoF8Kfw70=", "w6N7PQ==", "w5QGw7l3NsKhwozCvMO0w7lD", "w5pTw47CvMOO", "wq3DnXcSw60=", "w57DilU=", "wr/Cr33DgsKg", "PMKkwqYqIA==", "wrNzw4TCnMOh", "w7EbAm3Dq8Kdw4rDtMOGwqlPw6g0", "WjfCj8O7wrDDl1nClcOPw5fDkMKiwr5M", "ZVpfwrDCmsOhfsOgwqU8woDDuMKFPQ1Ww7Q=", "wpnCiy7Cu3VoMw==", "wrTCpHbCh2jCpMOnTMOBwrRDwpUFw6fDjnrCjCh5wqc=", "wrQdcDss", "A8O3woUqw68=", 
"PsKHRA==", "wqAxw5DDs2U=", "CcO3AV8ow6DCucKewrhQ", "wqEdw5IVwrEoDG8Cwrxa", "w4/CjcOrbQ3CmjogFxbCoMKG", "w4PDjiQsVQ==", "PcOwwp3CvcOHEV7DpsOTGw==", "wqbDi2XCqcOl", "EHHCvcO5wr/Dl0TCvMO1w5TDlg==", "wrTDjGQ=", "N8KkaGvDoQ==", "w4fDmCU=", "wqF0w4U=", "w7nDhFnCsMOL", "w7cuwrPCncOZJngcwpVsJcOC", "YcOcew==", "KlBDPkJ4C8Oaw5x1w68=", "BMOLPhMowqvCoBHCvVQ=", "w6o3EQ==", "vnips.vk6lGbsguIMyVBmd=="];
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
          if (value && str["replace"](/[nsklGbsguIMyVBmd=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662321;
  };
  return fn(++count, long) >> count ^ long;
})(_0x27d0, 343, 87808);
var _0x3658 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x27d0[c];
  if (_0x3658["NfrMSm"] === undefined) {
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
    _0x3658["rhwuUA"] = testcase;
    _0x3658["tcExdy"] = {};
    _0x3658["NfrMSm"] = !![];
  }
  var e = _0x3658["tcExdy"][c];
  if (e === undefined) {
    if (_0x3658["APZkou"] === undefined) {
      _0x3658["APZkou"] = !![];
    }
    x = _0x3658["rhwuUA"](x, alpha);
    _0x3658["tcExdy"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var ArcadeImage = require(_0x3658("0", "fJxg"));
var ArcadeSprite = require(_0x3658("1", "q)71"));
var Class = require(_0x3658("2", "2jpQ"));
var CONST = require(_0x3658("3", "ZsmN"));
var PhysicsGroup = require("./PhysicsGroup");
var StaticPhysicsGroup = require(_0x3658("4", "ReZG"));
var Factory = new Class({
  "initialize" : function World(params) {
    this[_0x3658("5", "b2Un")] = params;
    this["scene"] = params["scene"];
    this["sys"] = params[_0x3658("6", "Z1$p")][_0x3658("7", "nh^H")];
  },
  "collider" : function(body, velocity, color, min, max) {
    return this[_0x3658("8", ")Rz!")]["addCollider"](body, velocity, color, min, max);
  },
  "overlap" : function(nr1, nr2, box1, box2, returnOverlap) {
    return this["world"][_0x3658("9", "qH)J")](nr1, nr2, box1, box2, returnOverlap);
  },
  "existing" : function(exists, isFollower) {
    var isFollowerSince = isFollower ? CONST[_0x3658("a", "TQ7o")] : CONST[_0x3658("b", "f59*")];
    this[_0x3658("c", "Hvxk")][_0x3658("d", "kVAw")](exists, isFollowerSince);
    return exists;
  },
  "staticImage" : function(i_code, s_phrase, o_sip_message, e_invite_type) {
    var o_event = new ArcadeImage(this[_0x3658("e", "#CsZ")], i_code, s_phrase, o_sip_message, e_invite_type);
    this["sys"][_0x3658("f", "q)71")][_0x3658("10", "#CsZ")](o_event);
    this["world"]["enableBody"](o_event, CONST["STATIC_BODY"]);
    return o_event;
  },
  "image" : function(elem, properties, settings, deferred) {
    var modelDefinition = new ArcadeImage(this[_0x3658("11", "5bY^")], elem, properties, settings, deferred);
    this[_0x3658("12", "Hvxk")]["displayList"][_0x3658("13", "T(!F")](modelDefinition);
    this[_0x3658("14", "KjHc")]["enableBody"](modelDefinition, CONST[_0x3658("15", "J2(E")]);
    return modelDefinition;
  },
  "staticSprite" : function(entity, method, matchAny, actual) {
    var approxRes = new ArcadeSprite(this["scene"], entity, method, matchAny, actual);
    this[_0x3658("16", "7tLo")][_0x3658("17", "CjB]")]["add"](approxRes);
    this["sys"][_0x3658("18", "&$4n")][_0x3658("19", "ETQA")](approxRes);
    this["world"][_0x3658("1a", "yswt")](approxRes, CONST[_0x3658("1b", "NOJS")]);
    return approxRes;
  },
  "sprite" : function(id, options, flipV, flipR) {
    var PL$16 = {
      "ypbUH" : "4|2|0|1|3"
    };
    var callbackVals = PL$16["ypbUH"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this[_0x3658("1c", "1TVU")][_0x3658("1d", "rXkS")][_0x3658("19", "ETQA")](o);
          continue;
        case "1":
          this[_0x3658("1e", "J2(E")][_0x3658("1f", "*yb6")](o, CONST[_0x3658("20", "Z1$p")]);
          continue;
        case "2":
          this[_0x3658("21", "^eNR")][_0x3658("22", "x6Lp")]["add"](o);
          continue;
        case "3":
          return o;
        case "4":
          var o = new ArcadeSprite(this["scene"], id, options, flipV, flipR);
          continue;
      }
      break;
    }
  },
  "staticGroup" : function(formatters, customFormatters) {
    return this["sys"]["updateList"]["add"](new StaticPhysicsGroup(this[_0x3658("23", "1TVU")], this["world"][_0x3658("24", "i0#q")], formatters, customFormatters));
  },
  "group" : function(timeEnd, Enemys) {
    return this["sys"]["updateList"][_0x3658("25", "XwHU")](new PhysicsGroup(this[_0x3658("26", "9Xdm")], this[_0x3658("27", "PRJu")]["scene"], timeEnd, Enemys));
  },
  "destroy" : function() {
    this[_0x3658("5", "b2Un")] = null;
    this[_0x3658("28", "T(!F")] = null;
    this[_0x3658("16", "7tLo")] = null;
  }
});
module["exports"] = Factory;

