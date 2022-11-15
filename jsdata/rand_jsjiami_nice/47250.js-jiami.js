'use strict';
var __decorate = "vip.v6";
var ps = [__decorate, "GigEwq3DvA==", "QVNOA8K9", "BMK4w7gAw7Y=", "b1I5HGQ=", "YG1CLls=", "K8KNV3XCsA==", "w5fCkMOAw6VT", "P8O3w4/ChcKb", "aS/DsDvDig==", "IgZJKQ==", "w7jCpMOTw6FAwoHCkk4cwqXCqsKkw4PDlxt0X2DDlgrCiFQYw6J8XMKDw6k4wpIc", "w45LJx9d", "wpAYD3jDrg==", "WAzCqF40", "YcOKw4vCjCXDuhlvCg==", "CMKAL8OPw6U=", "WQDDnhA=", "wrRwwrfCnA==", "w61PPjg=", "aWR4JGbDosOOwr/DsMOcw4HCkcKaC8Orwq3DrQ==", "DQVrw5o2", "Ny4KIHA=", "w7MSMBAb", "NMOtw5oUw7QN", "HcOew5fCuyFoPsKKEw==", "w7sOA37CjA==", "XAYUwr7Cj8O6", 
"wpvCnR4qDQ==", "Hh9I", "bgfCqHEL", "wqXCgTkVLHp8w6M7w7w=", "SMK8wrA=", "dWoiP2Jcw6zCjATDsA==", "wr7DhGLCkgoA", "YcOWw5bCkCfDuVB5EmUqwo0ew73Cnjo4dcOjPcOSRw==", "wq7CnMKeLMKMw7JRT8OKw5/DlVkGwrDCrz7CmcOWY8Oow5PDsitYMEUod2/Dm1zCrD1sZUTCr8ODGg/DgQbCmMK/HMKiXBB8L8OwwpY6woUrfcOwF8KBLA1GwpXCv0LDrQXDoE3DvVE=", "w45oAhlyaAbCsksjwqBOw5/ClG3DhQYKwopHOsKkwqsewofCqsOVLMK2wo3Cn8K9w6xrSgnChSrDrsOaIEHCtDM8w4fCrmQGbEfDthE=", "lvIcqqdip.vOJ6AIgwryF=="];
(function(params, count, size) {
  var fn = function(component, type, href, text, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < component) {
      for (; --component;) {
        text = params[str]();
        if (type === component) {
          type = text;
          href = params[prefix + "p"]();
        } else {
          if (type && href["replace"](/[lIcqqdOJAIgwryF=]/g, "") === type) {
            params[method](text);
          }
        }
      }
      params[method](params[str]());
    }
    return 662011;
  };
  return fn(++count, size) >> count ^ size;
})(ps, 141, 36096);
var get = function(a, fn) {
  a = ~~"0x"["concat"](a);
  var args = ps[a];
  if (get["HiTNTI"] === undefined) {
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
    get["VVyEVW"] = testcase;
    get["KsfMax"] = {};
    get["HiTNTI"] = !![];
  }
  var fname = get["KsfMax"][a];
  if (fname === undefined) {
    if (get["tfEkXD"] === undefined) {
      get["tfEkXD"] = !![];
    }
    args = get["VVyEVW"](args, fn);
    get["KsfMax"][a] = args;
  } else {
    args = fname;
  }
  return args;
};
import{
  join as join
}from "path";
import{
  killApp as killApp,
  findPort as findPort,
  launchApp as launchApp,
  fetchViaHTTP as fetchViaHTTP,
  initNextServerScript as initNextServerScript
}from "next-test-utils";
import _0x36ad0f from "clone";
import _0x4757c8 from "get-port";
jest[get("0", "&P*y")](1E3 * 60 * 2);
const app = join(__dirname, get("1", "Pbhd"));
let port;
let NgSwitchWhen;
let NgForm;
jest[get("2", "8$Jn")](1E3 * 60 * 2);
const TEMPLATE_COMMENT_TEXT = {};
function check() {
  var c = {
    "DGKEt" : function(saveNotifs) {
      return saveNotifs();
    },
    "msYze" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "NDchz" : get("3", "%03u"),
    "rZnEq" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "YePtd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "hyJfT" : function(require, load, callback) {
      return require(load, callback);
    },
    "yzjak" : get("4", "QQb0"),
    "jkyUa" : get("5", "Ba]2"),
    "EnkcM" : function(require, load, callback) {
      return require(load, callback);
    },
    "YJWtq" : get("6", "ok]p")
  };
  c[get("7", "UP8Q")](it, c["yzjak"], async() => {
    port = await findPort();
    NgSwitchWhen = await launchApp(app, port, {});
    const bBody = await c[get("8", "H]Hc")](template);
    c["msYze"](expect, bBody)["toEqual"]([{
      "title" : c[get("9", "r#$k")]
    }]);
    c[get("a", "QGL5")](killApp, NgSwitchWhen);
  });
  c[get("b", "iBuB")](it, c["jkyUa"], async() => {
    await c[get("c", "aYVn")](setValue);
    const button2Component = await c["DGKEt"](template);
    expect(button2Component)["toEqual"]([{
      "title" : c[get("d", "z2dO")]
    }]);
    c[get("e", "Pbhd")](killApp, NgForm);
  });
  c["EnkcM"](it, c["YJWtq"], async() => {
    await setValue();
    const button2Component = await c[get("f", "XjIh")](setValues);
    expect(button2Component)["toBe"](200);
    killApp(NgForm);
  });
}
async function template() {
  var args = {
    "sKJsC" : function(cb, TextureClass, callback, gzipped, external_b) {
      return cb(TextureClass, callback, gzipped, external_b);
    },
    "jmfSZ" : get("10", "[QIT"),
    "RGOir" : get("11", "z2dO"),
    "gVrVT" : "Nextjs"
  };
  const stream = await args[get("12", "ok]p")](fetchViaHTTP, port, "/api", null, {
    "method" : args[get("13", "6ipV")],
    "headers" : {
      "Content-Type" : args[get("14", "AtjK")]
    },
    "body" : JSON[get("15", "QQb0")]([{
      "title" : args[get("16", "&w4f")]
    }])
  })[get("17", "XjIh")]((data) => {
    return data["ok"] && data[get("18", "uh8(")]();
  });
  return stream;
}
async function setValues() {
  var args = {
    "vtUTp" : function(cb, TextureClass, callback, gzipped, external_b) {
      return cb(TextureClass, callback, gzipped, external_b);
    },
    "YzVrm" : "/api",
    "fmZwN" : get("19", "ok]p"),
    "RDXOv" : get("1a", "iBuB")
  };
  const self = await args[get("1b", "2vYR")](fetchViaHTTP, port, args["YzVrm"], null, {
    "method" : args[get("1c", "djQ(")],
    "headers" : {
      "Content-Type" : args[get("1d", "RU)m")]
    },
    "body" : JSON["stringify"]([{
      "title" : "Nextjs"
    }])
  })["then"]((data) => {
    return data[get("1e", "qkqJ")];
  });
  return self;
}
const setValue = async(artistTrack = {}, text) => {
  var compiledSelectors = {
    "ISYJo" : get("1f", "J*4H"),
    "LiIFh" : function(saveNotifs) {
      return saveNotifs();
    },
    "MySkH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "dLOFM" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    }
  };
  const snap = join(app, compiledSelectors[get("20", "Lpqu")]);
  TEMPLATE_COMMENT_TEXT["appPort"] = port = await compiledSelectors["LiIFh"](_0x4757c8);
  const base = Object[get("21", "gz3o")]({}, compiledSelectors[get("22", "&P*y")](_0x36ad0f, process[get("23", "2vYR")]), {
    "PORT" : "" + port
  }, artistTrack);
  NgForm = await compiledSelectors[get("24", "AtjK")](initNextServerScript, snap, /ready on/i, base, /ReferenceError: options is not defined/, text);
};
check();

