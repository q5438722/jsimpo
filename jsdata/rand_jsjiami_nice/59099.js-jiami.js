'use strict';
var vip = "vip.v6";
var _0x24a7 = [vip, "LjcIfitnbQ==", "w716w4x/QsKlw48=", "wqs9w4tFRw==", "wowsw5lDE3nCrMKLc8OHJCLDkcKrChU=", "XWbDmkN5w5DDth5iwrTCucOwCcKww4g6MG3DjigFw4Jxw63DoBjCqsKoGcKXNcKdBV3ClxhLwrHCgDXClMKGw43Cg8KEw7HDoik=", "w7HDqx/DmsKwaMKow5k=", "w5vCiU4/OCA=", "w67ClUA7PSlCGQ==", "wrHDiT4Aw7zCrMOuclTDqsKBf8KBdcKlRg==", "wp/CssKUWAbCn8OV", "wofCp3khNVs=", "e2rDhFIww43DoQ==", "WAxiw6ILLljDnBHCsE5gPg==", "KT8Xcyxu", "BVAKwqc=", "wqEawq7DtcKTwqZbesK4woUwPXnCq8O7woU=", "AsKWFsOuHX4bwrzDlcKAwowcwqkAbQ==", "wo3Dvkg/wr1nADMBWULDmgPCoA==", 
"wr/CosKJWQPChg==", "w5LDrR/DjMKNfcK9w47CjMKVw7NDwr0Rw7M=", "mLhYvKQuipgWukG.v6cxA=="];
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
          if (value && str["replace"](/[mLhYKQugWukGcxA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662784;
  };
  return fn(++count, long) >> count ^ long;
})(_0x24a7, 342, 87552);
var _0x36b5 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x24a7[a];
  if (_0x36b5["FENElH"] === undefined) {
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
    _0x36b5["uiCgLP"] = testcase;
    _0x36b5["DRZeda"] = {};
    _0x36b5["FENElH"] = !![];
  }
  var A = _0x36b5["DRZeda"][a];
  if (A === undefined) {
    if (_0x36b5["MyVOfq"] === undefined) {
      _0x36b5["MyVOfq"] = !![];
    }
    value = _0x36b5["uiCgLP"](value, opt_max);
    _0x36b5["DRZeda"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const source = "\nfunction g(a, b, c) {\n  return 'bye';\n};\nclass Tree {};\nclass Flower extends Tree{};\nvar f = new Flower();\n// We store the type when a variable is used. If a toStringTag is\n// changes the type, we want to collect that changed feedback.\n// This tests ensures that we collect that information rather than\n// for example infer the types from the internal map, which wouldn't\n// know about a toStringTag.\nf[Symbol.toStringTag] = 'Dog';\ng({}, [], f);\ng(3, 2.3, {a: 42});\n";
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x36b5("0", "C9(!")](_0x36b5("1", "C9(!") + _0x36b5("2", "Mq)B"));
(async function MakeLineChart() {
  await Protocol[_0x36b5("3", "RKpZ")][_0x36b5("4", "5of[")]();
  await Protocol[_0x36b5("5", "5of[")][_0x36b5("6", "w*2G")]();
  Protocol[_0x36b5("7", "rG[)")][_0x36b5("8", "ZA)W")]();
  let {
    result : {
      scriptId : scriptId
    }
  } = await Protocol[_0x36b5("9", "Mq)B")][_0x36b5("a", "lPTH")]({
    "expression" : source,
    "sourceURL" : arguments[_0x36b5("b", "@Ce5")][_0x36b5("c", "1mL$")],
    "persistScript" : !![]
  });
  Protocol[_0x36b5("9", "Mq)B")]["runScript"]({
    "scriptId" : scriptId
  });
  await Protocol["Profiler"][_0x36b5("d", "b*FK")]();
  let data = await Protocol["Profiler"][_0x36b5("e", "d*1n")]();
  await session[_0x36b5("f", "adlh")](data[_0x36b5("10", "rG[)")]["result"][0], source);
  Protocol["Profiler"][_0x36b5("11", "RKpZ")]();
  Protocol["Profiler"][_0x36b5("12", "@Ce5")]();
  await Protocol["Runtime"][_0x36b5("13", "H9Zn")]();
  InspectorTest["completeTest"]();
})();

