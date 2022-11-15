'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w5vCsUJowrzCjwzDlQ==", "M8Otw4DCuhk=", "wrUOwpnDpsOV", "wobCkARiw7MOwro=", "w4PDn1PDmsO0wrrDj8OJw6PDhsOxwqbDpcKewog4DXnDhVXCkg==", "wqzCvMOHwqTDmg==", "w70jK0vCqFXCnQ==", "YURWYjol", "wr4eewnDvl8IXnTClDHDl3svPsOVw6rDi3E1w4PDh2JhwpTCtDESw7VQwqAWCQ==", "vGip.vt6sBjSAmyUZbuVqMln=="];
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
          if (type && str["replace"](/[GtsBjSAmyUZbuVqMln=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662871;
  };
  return fn(++count, size) >> count ^ size;
})(match, 465, 119040);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["wzyHrS"] === undefined) {
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
    fn["YUDFRD"] = testcase;
    fn["VtqNRd"] = {};
    fn["wzyHrS"] = !![];
  }
  var tmp3 = fn["VtqNRd"][i];
  if (tmp3 === undefined) {
    if (fn["VwlagT"] === undefined) {
      fn["VwlagT"] = !![];
    }
    x = fn["YUDFRD"](x, n);
    fn["VtqNRd"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import{
  Meteor as Meteor
}from "meteor/meteor";
import{
  settings as settings
}from "../../settings";
Meteor[fn("0", "Ts#b")](function() {
  var result = {
    "UjLGO" : "BotHelpers_userFields",
    "RngHS" : "_id, name, username, emails, language, utcOffset",
    "vqHCV" : fn("1", "CktL"),
    "DVtCo" : fn("2", "U2in")
  };
  settings[fn("3", "*c7T")]("Bots", function() {
    this["add"](result[fn("4", "biQ%")], result[fn("5", "KLHc")], {
      "type" : result["vqHCV"],
      "section" : fn("6", "foJe"),
      "i18nLabel" : fn("7", "^]Rk"),
      "i18nDescription" : result[fn("8", "qLb@")]
    });
  });
});

