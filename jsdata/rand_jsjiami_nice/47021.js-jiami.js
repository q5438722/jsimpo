'use strict';
var webserver = "vip.v6";
var metrics = [webserver, "WmHDtxrDiw==", "DsOrQgk4", "wpllL3bCrw==", "w4DDssKewoDCtQ==", "wrd9w4tS", "OBAawrE=", "w7XCtH7CosOo", "MsO2w4vDoSjDuMOdGCLDhlMDD8OEe0LCkF/CgsOOXT4udDbCl8KAYcKMw5DCtcOowrbDng==", "CyfCli/Cs8O5ViNgw6YoP0/CssOmS8KGw4rCmnnDpcK8w6V8", "M8Kzwr9L", "H1fDvwfDiwg3wqHDgcOZwpJQwr7Cm2/CvVxWwo3DtMK8wpjCj8Kp", "J3dRX2k=", "PMOpwodsGcO/w7TCpHjCuw==", "EBXCgA==", "wrjCv1IQccOtw53Cs8KuVcKaw4zDpsO/wrQnwooFwqpA", "w7TDtzoVwo/CnhlaFsOAwqokwo9mwpTDlioEw5fCgTlpVMKs", "w6xPH8KHwqMdw5vChsKkVWfClgvDpwAbwok/w5B/a3PDnRRjwqfDiMKRAC/DnsK9woh4wpFvw5rCpA==", 
"f8O2w7JVwpM=", "vip.Oguhvzc6tcODNcPZkUw=="];
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
          if (value && str["replace"](/[OguhzctcODNcPZkUw=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662007;
  };
  return fn(++count, long) >> count ^ long;
})(metrics, 390, 99840);
var format = function(c, opt) {
  c = ~~"0x"["concat"](c);
  var f = metrics[c];
  if (format["DMuhOG"] === undefined) {
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
    format["mfDCCX"] = testcase;
    format["KvaKcu"] = {};
    format["DMuhOG"] = !![];
  }
  var o = format["KvaKcu"][c];
  if (o === undefined) {
    if (format["ciMEez"] === undefined) {
      format["ciMEez"] = !![];
    }
    f = format["mfDCCX"](f, opt);
    format["KvaKcu"][c] = f;
  } else {
    f = o;
  }
  return f;
};
import{
  join as join
}from "path";
import _0x342a09 from "cheerio";
import _0x1ddb22 from "next-webdriver";
import{
  nextBuild as nextBuild,
  nextExport as nextExport,
  startCleanStaticServer as startCleanStaticServer,
  stopApp as stopApp,
  renderViaHTTP as renderViaHTTP
}from "next-test-utils";
jest[format("0", "IGxN")](1E3 * 60);
const url = join(__dirname, format("1", "ysEk"));
const outputDir = join(url, "out");
describe(format("2", "O0!0"), () => {
  var r = {
    "qfmJs" : function(require, load, callback) {
      return require(load, callback);
    },
    "jDmzr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "vzqSQ" : format("3", "ksbE"),
    "WrDfg" : "#asPath",
    "wSwYm" : function(require, load, callback) {
      return require(load, callback);
    },
    "JXuml" : format("4", "0UjX"),
    "ukIdz" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  let a;
  let cname;
  r[format("5", "Lkob")](beforeAll, async() => {
    await nextBuild(url);
    await r["qfmJs"](nextExport, url, {
      "outdir" : outputDir
    });
    a = await r["jDmzr"](startCleanStaticServer, outputDir);
    cname = a["address"]()["port"];
  });
  r[format("6", "0Lzz")](afterAll, async() => {
    await stopApp(a);
  });
  r["wSwYm"](it, r[format("7", "3QZa")], async() => {
    const xhr = await r["qfmJs"](renderViaHTTP, cname, r[format("8", "7HGl")]);
    const container = _0x342a09["load"](xhr);
    expect(r["jDmzr"](container, r[format("9", "2)73")])[format("a", "Tg@$")]())[format("b", "y)jd")]("/regression/jeff-is-cool");
  });
  r[format("c", "c6C5")](it, format("d", "fEX2"), async() => {
    expect["assertions"](1);
    const fileMap = await _0x1ddb22(cname, format("e", "Q#]2"));
    try {
      expect(await fileMap[format("f", "$PWq")]("window.__AS_PATHS"))["toEqual"]([format("10", "0Lzz")]);
    } finally {
      await fileMap[format("11", "nxh0")]();
    }
  });
});

