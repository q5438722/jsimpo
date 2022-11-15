'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "McK1RcKEW3DDqcKPMMKtw7wOQDUVeMK2wpIM", "asOUwpQwd0sHwqzCucKIAA==", "wrPCmEDCjcOV", "XMK7wp3CvWzCl1kyf8OUBlQ=", "AsK5WCpPw67DpcKVwpHDlsKpYsOOw4lmCwXCksKywp9d", "wpl7SMKC", "I3vDiMK6wpbCp8OSwpJzwpRg", "w4rDvMOuwqgu", "UWzCnMOow5k=", "SsOCQcOtX3xiC8O0M8OvRcKUwqrDnGHCpXl+wrdq", "esKRw5Ud", "w7fCpzVG", "w5XDrcOxwrU=", "YnBJwqt4", "I8K6Ah1Y", "CMKTGjNBARE9wowtHg==", "wrTCjmbCmMOewrNzwqk+EsKp", "DMORwrBIwoFT", "w61UB8Ka", "UH7CiMOBUcKYwqPDvsOQW1Y=", "wrXDlcOhSw==", "LsOHwr3CmsO4", 
"wrMUwr/CgCZx", "wqcQwqvCmi05HsOswpXDhsKBw61dwoAYw593wqlvwrpswr98ZcKuWwYMwqt1bnTDkj/CsxzDvcOpw6kZTMOLw51X", "RFY5EBfDhX7Dm1LDtcO/w7PCi8OMYQxgwoVUwoE=", "FMOcw7lfw6UkW8KTwq/DuFI=", "MMOIMUtdw7LCrDrDr0bDkw==", "bsKmw6Is", "wrVCw5nDj8K9", "fWFWwrY=", "Nhx0w63CoMOzw5pIFFjCjsOA", "BQMHw63DrcKo", "vip.v6WbOUDfqHuMIeaxEGHg=="];
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
          if (type && str["replace"](/[WbOUDfqHuMIeaxEGHg=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662925;
  };
  return fn(++count, size) >> count ^ size;
})(match, 191, 48896);
var m = function(i, value) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (m["ChtIqn"] === undefined) {
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
    m["aluAXm"] = testcase;
    m["GWhUUU"] = {};
    m["ChtIqn"] = !![];
  }
  var y0 = m["GWhUUU"][i];
  if (y0 === undefined) {
    if (m["MDDNVQ"] === undefined) {
      m["MDDNVQ"] = !![];
    }
    x = m["aluAXm"](x, value);
    m["GWhUUU"][i] = x;
  } else {
    x = y0;
  }
  return x;
};
import _0x192036 from "../tool-testing/selftest.js";
import{
  parse as parse,
  markBottom as markBottom
}from "../utils/parse-stack";
import _0x450354 from "underscore";
import _0x4cf68e from "fibers";
import _0x44662e from "fibers/future";
import _0x5e6e07 from "../fs/files";
_0x192036[m("0", "MTg]")]("parse-stack - parse stack traces without fibers", () => {
  var tileFuncs = {
    "bnVph" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RcWpI" : m("1", "U9&z"),
    "NQhKz" : m("2", "DO#l")
  };
  const tiles = new Error;
  const artistTrack = tileFuncs[m("3", "d[zp")](parse, tiles)[m("4", "s#DQ")];
  const $this = _0x5e6e07[m("5", "LK9H")](artistTrack[0][m("6", "4u2J")]);
  _0x192036[m("7", "39v1")](_0x450354["last"]($this[m("8", "]8UM")]("/")), tileFuncs[m("9", "6Nmg")]);
  const keyNames = _0x5e6e07[m("a", "k*lX")](_0x450354[m("b", "5bU&")](artistTrack)[m("c", "DmFT")]);
  _0x192036["expectEqual"](_0x450354[m("d", "]8UM")](keyNames[m("e", "rtoN")]("/")), tileFuncs[m("f", "U7xD")]);
  tileFuncs["bnVph"](markBottom, () => {
    const tiles = new Error;
    const {
      outsideFiber : compareScreenshotsPath,
      insideFiber : baseScreenshotsPath
    } = tileFuncs["bnVph"](parse, tiles);
    _0x192036[m("10", "U7xD")](baseScreenshotsPath, undefined);
    _0x192036[m("11", "d[zp")](compareScreenshotsPath[m("12", "vPY8")], 1);
    const $this = _0x5e6e07["convertToStandardPath"](compareScreenshotsPath[0][m("13", "8yOY")]);
    _0x192036[m("14", "eIRM")](_0x450354[m("15", "%sf8")]($this[m("16", "wrwJ")]("/")), "parse-stack-test.js");
  })();
});
_0x192036[m("17", "s3$Q")](m("18", "s3$Q"), () => {
  var row = {
    "HudJH" : m("19", "eI[v")
  };
  const r = parse({
    "stack" : stack_size_largeitem
  });
  _0x192036[m("1a", "2QPj")](r[m("1b", "l3s1")][0][m("1c", "[Im6")], row[m("1d", "t9k5")]);
  _0x192036["expectEqual"](_0x450354[m("1e", "rtoN")](r[m("1f", "NJtt")])["file"], row["HudJH"]);
});
const stack_size_largeitem = "TypeError: object is not a function\n    at Object.Future.wait (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/fibers/future.js:395:16)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:312:12)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12\n    - - - - -\n    at TemplateCompiler.compileOneFile (template-compiler.js:43:23)\n    at caching-compiler.js:292:32\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:182:20\n    at replenish (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:317:21)\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:328:15\n    at Object.async.forEachLimit.async.eachLimit (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:221:35)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:277:11)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12";

