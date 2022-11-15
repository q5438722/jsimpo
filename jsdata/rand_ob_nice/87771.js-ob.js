'use strict';
const RVRE = ["1360576VbaxzE", "9300knqDau", "119sRvIxJ", "1JbyvAr", "224144TfZydZ", "define", "parse-stack - parse stack traces without fibers", "selftest.js", "outsideFiber", "convertToStandardPath", "file", "expectEqual", "split", "parse-stack-test.js", "last", "CjxwK", "length", "parse-stack - parse stack traces with fibers", "template-compiler.js", "pJwQm", "insideFiber", "TypeError: object is not a function\n    at Object.Future.wait (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/fibers/future.js:395:16)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:312:12)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12\n    - - - - -\n    at TemplateCompiler.compileOneFile (template-compiler.js:43:23)\n    at caching-compiler.js:292:32\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:182:20\n    at replenish (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:317:21)\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:328:15\n    at Object.async.forEachLimit.async.eachLimit (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:221:35)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:277:11)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12", 
"994306yYrJnR", "952380vDJbOT", "201361eCHZdD", "1LAOUhr", "1rINrrN", "55222mZMYhv"];
const PERFECTIVEGROUND_1 = m;
(function(data, val) {
  const toMonths = m;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(236)) + parseInt(toMonths(237)) + -parseInt(toMonths(238)) * -parseInt(toMonths(239)) + parseInt(toMonths(240)) * parseInt(toMonths(241)) + parseInt(toMonths(242)) + -parseInt(toMonths(243)) * parseInt(toMonths(244)) + parseInt(toMonths(245)) * parseInt(toMonths(246));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x45bcaa) {
      data["push"](data["shift"]());
    }
  }
})(RVRE, 544864 + -1141736 + 67 * 19247);
import _0x4f916e from "../tool-testing/selftest.js";
import{
  parse as parse,
  markBottom as markBottom
}from "../utils/parse-stack";
import _0x12cd31 from "underscore";
import _0x2d088a from "fibers";
import _0x50adc4 from "fibers/future";
function m(b, i) {
  return m = function(value, i) {
    value = value - (13 * 653 + 9726 + -17979);
    let d = RVRE[value];
    return d;
  }, m(b, i);
}
import _0x5a0938 from "../fs/files";
_0x4f916e[PERFECTIVEGROUND_1(247)](PERFECTIVEGROUND_1(248), () => {
  const parseInt = PERFECTIVEGROUND_1;
  const _related2 = {
    "GUezj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "CjxwK" : parseInt(249)
  };
  const received_data = new Error;
  const stack__1911 = parse(received_data)[parseInt(250)];
  const value = _0x5a0938[parseInt(251)](stack__1911[-5923 * 1 + -14 * -509 + -1203 * 1][parseInt(252)]);
  _0x4f916e[parseInt(253)](_0x12cd31["last"](value[parseInt(254)]("/")), parseInt(255));
  const frontpageItems = _0x5a0938[parseInt(251)](_0x12cd31["last"](stack__1911)["file"]);
  _0x4f916e[parseInt(253)](_0x12cd31[parseInt(256)](frontpageItems[parseInt(254)]("/")), _related2[parseInt(257)]);
  markBottom(() => {
    const rel2Mstr = parseInt;
    const relationName = new Error;
    const {
      outsideFiber : same,
      insideFiber : baseScreenshotsPath
    } = _related2["GUezj"](parse, relationName);
    _0x4f916e[rel2Mstr(253)](baseScreenshotsPath, undefined);
    _0x4f916e["expectEqual"](same[rel2Mstr(258)], -4864 + -164 + 5029);
    const d = _0x5a0938[rel2Mstr(251)](same[-877 * -10 + -5 * 337 + 13 * -545][rel2Mstr(252)]);
    _0x4f916e["expectEqual"](_0x12cd31[rel2Mstr(256)](d["split"]("/")), rel2Mstr(255));
  })();
}), _0x4f916e[PERFECTIVEGROUND_1(247)](PERFECTIVEGROUND_1(259), () => {
  const findMiddlePosition = PERFECTIVEGROUND_1;
  const leftBranch = {
    "pJwQm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "NNVec" : findMiddlePosition(260)
  };
  const rightBranch = leftBranch[findMiddlePosition(261)](parse, {
    "stack" : DER
  });
  _0x4f916e[findMiddlePosition(253)](rightBranch[findMiddlePosition(262)][2662 * -1 + 9163 + -6501][findMiddlePosition(252)], leftBranch["NNVec"]);
  _0x4f916e[findMiddlePosition(253)](_0x12cd31[findMiddlePosition(256)](rightBranch[findMiddlePosition(250)])["file"], leftBranch["NNVec"]);
});
const DER = PERFECTIVEGROUND_1(263);

