'use strict';
import selftest from "../tool-testing/selftest.js";
import{
  parse as parse,
  markBottom as markBottom
}from "../utils/parse-stack";
import _ from "underscore";
import Fiber from "fibers";
import Future from "fibers/future";
import files from "../fs/files";
selftest.define("parse-stack - parse stack traces without fibers", () => {
  const e = new Error;
  const i = parse(e).outsideFiber;
  const t = files.convertToStandardPath(i[0].file);
  selftest.expectEqual(_.last(t.split("/")), "parse-stack-test.js");
  const o = files.convertToStandardPath(_.last(i).file);
  selftest.expectEqual(_.last(o.split("/")), "selftest.js");
  markBottom(() => {
    const e = new Error;
    const {
      outsideFiber : modulesInProgress,
      insideFiber : artistTrack
    } = parse(e);
    selftest.expectEqual(artistTrack, undefined);
    selftest.expectEqual(modulesInProgress.length, 1);
    const o = files.convertToStandardPath(modulesInProgress[0].file);
    selftest.expectEqual(_.last(o.split("/")), "parse-stack-test.js");
  })();
});
selftest.define("parse-stack - parse stack traces with fibers", () => {
  const regressionTestData = parse({
    stack : stack_size_largeitem
  });
  selftest.expectEqual(regressionTestData.insideFiber[0].file, "template-compiler.js");
  selftest.expectEqual(_.last(regressionTestData.outsideFiber).file, "template-compiler.js");
});
const stack_size_largeitem = `TypeError: object is not a function\n    at Object.Future.wait (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/fibers/future.js:395:16)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:312:12)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12\n    - - - - -\n    at TemplateCompiler.compileOneFile (template-compiler.js:43:23)\n    at caching-compiler.js:292:32\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:182:20\n    at replenish (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:317:21)\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:328:15\n    at Object.async.forEachLimit.async.eachLimit (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:221:35)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:277:11)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12`;
