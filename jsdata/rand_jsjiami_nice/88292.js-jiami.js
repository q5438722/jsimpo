'use strict';
var element = "vip.v6";
var args = [element, "w7/CoMKzw7jCmh1dw4wGw4RM", "wqHDvcKfeTFSwrY=", "UmvDv8Kt", "w7XDuQNAXg==", "w5MNPcK2wp3DpMKZ", "RcKgPhw=", "w4wAbMKVCnVE", "T8Kfwo8y", "Lw7Cj1rDig==", "wr5/S3l0wonDi8O3", "w6PCvnDCqMK2EA==", "w5fDoihVw6w=", "WMKZwrEYc2HDkwPCgn/CuQ==", "w7rDi8Khw44=", "w5kLQsKSPEt3e8KYNsOx", "CE5O", "w6YGE8KXwrfDmcK8aV81wpg=", "wqlRwrTCiivCj1s=", "w7MNPcKQwoHDp8KP", "wq0sQMOUAMKHVcKhL3LDosO3Fw==", "ZcKXwpDCgsKFwqrCn8OfEMKOwpEQw5I=", "wqtiX25fwpvDlQ==", "SkrDgMK9w6MI", "uJvipPs.v6NYwSLfSAywCxjo=="];
(function(data, count, size) {
  var fn = function(script, type, href, node, css) {
    type = type >> 8;
    css = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        node = data[str]();
        if (type === script) {
          type = node;
          href = data[css + "p"]();
        } else {
          if (type && href["replace"](/[uJPsNYwSLfSAywCxjo=]/g, "") === type) {
            data[method](node);
          }
        }
      }
      data[method](data[str]());
    }
    return 662337;
  };
  return fn(++count, size) >> count ^ size;
})(args, 393, 100608);
var fn = function(a, f) {
  a = ~~"0x"["concat"](a);
  var x = args[a];
  if (fn["PLFfxl"] === undefined) {
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
    fn["KTmanc"] = testcase;
    fn["rFuDQL"] = {};
    fn["PLFfxl"] = !![];
  }
  var size = fn["rFuDQL"][a];
  if (size === undefined) {
    if (fn["yWGdXg"] === undefined) {
      fn["yWGdXg"] = !![];
    }
    x = fn["KTmanc"](x, f);
    fn["rFuDQL"][a] = x;
  } else {
    x = size;
  }
  return x;
};
import{
  EJSON as EJSON
}from "./ejson";
class Address {
  constructor(versionByteNum, hashBuf) {
    this[fn("0", "6$N)")] = versionByteNum;
    this[fn("1", "[b3V")] = hashBuf;
  }
  ["typeName"]() {
    return fn("2", "Z)G6");
  }
  ["toJSONValue"]() {
    return {
      "city" : this[fn("3", "u]Br")],
      "state" : this["state"]
    };
  }
}
EJSON[fn("4", "E)jk")]("Address", (to) => {
  return new Address(to[fn("5", "7tIm")], to[fn("6", "4)@y")]);
});
class Person {
  constructor(name, age, value) {
    this["name"] = name;
    this["dob"] = age;
    this["address"] = value;
  }
  [fn("7", "SweF")]() {
    var result = {
      "xKoNg" : fn("8", "9O!z")
    };
    return result[fn("9", "KpUO")];
  }
  [fn("a", "7tIm")]() {
    return {
      "name" : this[fn("b", "M5ca")],
      "dob" : EJSON[fn("c", "E)jk")](this[fn("d", "qqGs")]),
      "address" : EJSON[fn("e", "Z)G6")](this[fn("f", "&h2H")])
    };
  }
}
EJSON[fn("10", "Z)G6")]("Person", (result) => {
  return new Person(result["name"], EJSON[fn("11", "#8$2")](result["dob"]), EJSON[fn("12", "JGYV")](result[fn("13", "SweF")]));
});
class SmartBuffer {
  constructor(buff) {
    this["content"] = buff;
  }
  ["typeName"]() {
    return fn("14", "JTIZ");
  }
  [fn("15", "NL*C")]() {
    return this[fn("16", "*3vR")];
  }
}
EJSON["addType"]("Holder", (size) => {
  return new SmartBuffer(size);
});
const api = {
  "Address" : Address,
  "Person" : Person,
  "Holder" : SmartBuffer
};
export default api;

