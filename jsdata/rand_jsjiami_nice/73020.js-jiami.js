'use strict';
var alt = "vip.v6";
var attrs = [alt, "FcOea2E=", "YcKoS8K9dGEkRDjCtA==", "w77DhsK3wos=", "wp1kwodZwot/", "eMKAAFPClUs=", "vRiOUIp.v6HLxACjCXYgkjn=="];
(function(key, count, long) {
  var fn = function(target, value, str, i, y) {
    value = value >> 8;
    y = "po";
    var SHIFT = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        i = key[SHIFT]();
        if (value === target) {
          value = i;
          str = key[y + "p"]();
        } else {
          if (value && str["replace"](/[ROUIHLxACjCXYgkjn=]/g, "") === value) {
            key[method](i);
          }
        }
      }
      key[method](key[SHIFT]());
    }
    return 662210;
  };
  return fn(++count, long) >> count ^ long;
})(attrs, 422, 108032);
var fn = function(i, args) {
  i = ~~"0x"["concat"](i);
  var value = attrs[i];
  if (fn["lFZbEg"] === undefined) {
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
    fn["rIcewp"] = testcase;
    fn["vIafRc"] = {};
    fn["lFZbEg"] = !![];
  }
  var v = fn["vIafRc"][i];
  if (v === undefined) {
    if (fn["aNtIsy"] === undefined) {
      fn["aNtIsy"] = !![];
    }
    value = fn["rIcewp"](value, args);
    fn["vIafRc"][i] = value;
  } else {
    value = v;
  }
  return value;
};
import{
  flatten as flatten
}from "lodash";
import _0x350f38 from "../../../../config/curriculum.json";
function init() {
  return Object[fn("0", "Afcb")](_0x350f38)["map"]((rightOperandType) => {
    return _0x350f38[rightOperandType][fn("1", "k9e8")];
  })[fn("2", "RXCH")]((canCreateDiscussions, descriptor) => {
    const nextSchemas = Object[fn("3", "y&#1")](descriptor)["map"]((settingName) => {
      return descriptor[settingName][fn("4", "!m]f")];
    });
    return [...canCreateDiscussions, ...flatten(nextSchemas)];
  }, []);
}
export{
  init as getChallenges
};

