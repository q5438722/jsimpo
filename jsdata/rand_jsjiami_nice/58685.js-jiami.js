'use strict';
var vip = "vip.v6";
var _0x4b9c = [vip, "wrLCn8Ovw7/CrAnCvMK7wqInwph6wqU=", "wqYEw4Yi", "AsKRVsOD", "C3JEA8O7wofDkkUj", "BcOEeVTDj8OywoQ=", "esKZPQ==", "w61iw4lh", "B8O+w50A", "B8O+w50ADcOHPANJw5wvw5gkw4IsWsOSbyHCngZ0wqA=", "f8OFcQrCj2PCsAPDosOYFMKmGcKTwofCkUUJP8OSJlJK", "wpErw4DCjg==", "woM2w7XDoMO8w6nDi8K7CsOAwqQbRMOqw4psa8KSwrLDin8KNQ==", "GEhLI8OBYUrDoiQ=", "Yz3DvhA=", "SEYJGxcvwrjDlhzDrsK6wq8=", "w5MqOSHDt8O/", "NsK7WFnCgEY9w7jDqQ==", "bvimpfW.rqZWvhkN6HcyGKx=="];
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
          if (value && str["replace"](/[bmfWrqZWhkNHcyGKx=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662778;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4b9c, 131, 33536);
var _0x1eaf = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4b9c[a];
  if (_0x1eaf["zGaCYR"] === undefined) {
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
    _0x1eaf["RRIrxJ"] = testcase;
    _0x1eaf["QwcLen"] = {};
    _0x1eaf["zGaCYR"] = !![];
  }
  var A = _0x1eaf["QwcLen"][a];
  if (A === undefined) {
    if (_0x1eaf["rIGnWC"] === undefined) {
      _0x1eaf["rIGnWC"] = !![];
    }
    value = _0x1eaf["RRIrxJ"](value, opt_max);
    _0x1eaf["QwcLen"][a] = value;
  } else {
    value = A;
  }
  return value;
};
description("Test to ensure correct behaviour of prototype caching with dictionary prototypes");
function protoTest(type) {
  return type[_0x1eaf("0", "Eb$$")];
}
var proto = {
  "protoProp" : _0x1eaf("1", "4kz*"),
  "propToRemove" : "foo"
};
var o = {
  "__proto__" : proto
};
delete proto["propToRemove"];
protoTest(o);
protoTest(o);
protoTest(o);
shouldBe(_0x1eaf("2", "v(RW"), _0x1eaf("3", "gM^6"));
delete proto[_0x1eaf("4", "iyu9")];
proto[_0x1eaf("5", "#xkX")] = _0x1eaf("6", "gM#Q");
shouldBeUndefined("protoTest(o)");
function protoTest2(v) {
  return v["b"];
}
proto = {
  "a" : 1,
  "b" : "meh",
  "c" : 2
};
o = {
  "__proto__" : proto
};
delete proto["b"];
proto["d"] = 3;
protoTest2(o);
protoTest2(o);
protoTest2(o);
var protoKeys = [];
var i;
for (i in proto) {
  protoKeys[_0x1eaf("7", "7jPM")](proto[i]);
}
shouldBe(_0x1eaf("8", "io(*"), _0x1eaf("9", "fqV9"));
function protoTest3(popularities) {
  return popularities["b"];
}
proto = {
  "a" : 1,
  "b" : _0x1eaf("a", "%5un"),
  "c" : 2
};
o = {
  "__proto__" : proto
};
delete proto["b"];
protoTest2(o);
protoTest2(o);
protoTest2(o);
proto["d"] = 3;
protoKeys = [];
for (i in proto) {
  protoKeys[_0x1eaf("b", "l5EU")](proto[i]);
}
shouldBe("protoKeys", "[1,2,3]");
function testFunction(match) {
  return match[_0x1eaf("c", "eh%m")];
}
proto = {
  "test" : !![]
};
var subclass1 = {
  "__proto__" : proto
};
var subclass2 = {
  "__proto__" : proto
};
i = 0;
for (; i < 500; i++) {
  subclass2["a" + i] = "a" + i;
}
testFunction(subclass1);
shouldBeTrue(_0x1eaf("d", "eh%m"));
shouldBeTrue(_0x1eaf("e", "X7&("));
proto["test"] = ![];
subclass2[_0x1eaf("f", "Uj)s")] = !![];
shouldBeTrue(_0x1eaf("10", "*(BC"));

