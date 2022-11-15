'use strict';
var vip = "vip.v6";
var _0x2b3b = [vip, "bDvDsioO", "ZMKSFMKAC27CgA==", "w5PCkcKHGw==", "Z2bDjl4=", "RsO1BcKQw40=", "TMKnwrIPwqVww4M=", "w6ZoMyLCtsOzwrQIw6dRwpHDviNSwrdzwrbDjRjCvFHDhVzDssKCwrXDmcKHw5nCucKjWMOibWdcXcO7cyY=", "OMKHw5LDsw==", "Ozk6w5I5MMOnw6oLOSk=", "KqSvwip.OzvVWwd6KPRGrDuJ=="];
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
          if (value && str["replace"](/[KqSwOzVWwdKPRGrDuJ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662099;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2b3b, 474, 121344);
var _0x3809 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2b3b[a];
  if (_0x3809["SSyNml"] === undefined) {
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
    _0x3809["SfzOzy"] = testcase;
    _0x3809["Jdicgj"] = {};
    _0x3809["SSyNml"] = !![];
  }
  var A = _0x3809["Jdicgj"][a];
  if (A === undefined) {
    if (_0x3809["kntwgp"] === undefined) {
      _0x3809["kntwgp"] = !![];
    }
    value = _0x3809["SfzOzy"](value, opt_max);
    _0x3809["Jdicgj"][a] = value;
  } else {
    value = A;
  }
  return value;
};
load(_0x3809("0", "b2m)"));
(function instantiate() {
  var coord = {
    "ZyuWT" : _0x3809("1", "Aa2V"),
    "wvEIY" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  let coordtransform = new WasmModuleBuilder;
  coordtransform[_0x3809("2", "yT&Q")](coord[_0x3809("3", "er4B")], kSig_i_v)["addBody"]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Add, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0])["exportFunc"]();
  let _0x2fabe6 = coordtransform["instantiate"]();
  coord["wvEIY"](assertEquals, 0, _0x2fabe6[_0x3809("4", "B$a*")][_0x3809("5", "5[kj")]());
})();
(function InstancesAreIsolatedFromEachother() {
  var args = {
    "dYHdR" : _0x3809("6", "FC7a")
  };
  let obj = new WasmModuleBuilder;
  obj["addFunction"](args[_0x3809("7", "gEJQ")], kSig_i_v)["addBody"]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Sub, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0])["exportFunc"]();
  let rec = obj["instantiate"]();
  assertEquals(0, rec[_0x3809("8", "4I*A")]["main"]());
})();

