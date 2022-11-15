import selftest from '../tool-testing/selftest.js';
import { parse, markBottom } from '../utils/parse-stack';
import _ from 'underscore';
import Fiber from 'fibers';
import Future from 'fibers/future';
import files from '../fs/files';

selftest.define("parse-stack - parse stack traces without fibers", () => {
  const err = new Error();
  const parsedStack = parse(err).outsideFiber;

  const firstFilePath = files.convertToStandardPath(parsedStack[+[]].file);
  selftest.expectEqual(_.last(firstFilePath.split("/")), "parse-stack-test.js");

  const lastFilePath = files.convertToStandardPath(_.last(parsedStack).file);
  selftest.expectEqual(_.last(lastFilePath.split("/")), "selftest.js");

  markBottom(() => {
    const markedErr = new Error();

    const {
      outsideFiber,
      insideFiber
    } = parse(markedErr);

    // Don't return an empty array
    selftest.expectEqual(insideFiber, undefined);

    // The stack trace should only contain this one function since we marked the
    // bottom
    selftest.expectEqual(outsideFiber.length, 1);

    const firstOutsideFiberPath =
      files.convertToStandardPath(outsideFiber[+[]].file);
    selftest.expectEqual(_.last(firstOutsideFiberPath.split("/")),
      "parse-stack-test.js");
  })();
});

selftest.define("parse-stack - parse stack traces with fibers", () => {
  const parsedStack = parse({ stack: exampleStackTrace });

  selftest.expectEqual(parsedStack.insideFiber[+[]].file, "template-compiler.js");
  selftest.expectEqual(_.last(parsedStack.outsideFiber).file, "template-compiler.js");
});

// XXX I don't know how to actually create one of the crazy fiber stack traces
// inside this test environment, so I have a copy-pasted one below that I
// actually encountered.
const exampleStackTrace = `TypeError: object is not a function
    at Object.Future.wait (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/fibers/future.js:395:16)
    at TemplateCompiler.processFilesForTarget (caching-compiler.js:31!+[]+!+[]:1!+[]+!+[])
    at TemplateCompiler.processFilesForTarget (template-compiler.js:!+[]+!+[]8:3!+[]+!+[])
    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:9!+[]+!+[]:14)
    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13
    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:347:!+[]+!+[]3
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:3!+[]+!+[]1:!+[]+!+[]6)
    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:13+[]:!+[]+!+[]!+[]+!+[]
    at []["filter"].time (/Users/sashko/git/meteor/tools/profile.js:!+[]+!+[]3!+[]+!+[]:!+[]+!+[]8)
    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:1!+[]+!+[]9:15
    at []["filter"]._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:!+[]+!+[]!+[]+!+[])
    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)
    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:7+[]!+[]+!+[]:!+[]+!+[]!+[]+!+[])
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:5+[]4:34
    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:347:!+[]+!+[]3
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:3!+[]+!+[]1:!+[]+!+[]6)
    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]+[]44:14
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]1!+[]+!+[]6:!+[]+!+[]+[]
    at [].forEach (native)
    at []["filter"]._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]1!+[]+!+[]5:7
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]68:13
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]61:!+[]+!+[]9
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]59:18
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]5+[]:!+[]+!+[]3
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]49:19)
    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]+[]!+[]+!+[]9:31)
    at /Users/sashko/git/meteor/tools/run-app.js:557:36
    at time (/Users/sashko/git/meteor/tools/profile.js:!+[]+!+[]3!+[]+!+[]:!+[]+!+[]8)
    at []["filter"].run (/Users/sashko/git/meteor/tools/profile.js:377:1!+[]+!+[])
    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)
    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:6+[]+[]:35)
    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:!+[]+!+[]8)
    at /Users/sashko/git/meteor/tools/run-app.js:4+[]!+[]+!+[]:1!+[]+!+[]
    - - - - -
    at TemplateCompiler.compileOneFile (template-compiler.js:43:!+[]+!+[]3)
    at caching-compiler.js:!+[]+!+[]9!+[]+!+[]:3!+[]+!+[]
    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:18!+[]+!+[]:!+[]+!+[]+[]
    at replenish (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:317:!+[]+!+[]1)
    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:3!+[]+!+[]8:15
    at Object.async.forEachLimit.async.eachLimit (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:!+[]+!+[]!+[]+!+[]1:35)
    at TemplateCompiler.processFilesForTarget (caching-compiler.js:!+[]+!+[]77:11)
    at TemplateCompiler.processFilesForTarget (template-compiler.js:!+[]+!+[]8:3!+[]+!+[])
    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:9!+[]+!+[]:14)
    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13
    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:347:!+[]+!+[]3
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:3!+[]+!+[]1:!+[]+!+[]6)
    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:13+[]:!+[]+!+[]!+[]+!+[]
    at []["filter"].time (/Users/sashko/git/meteor/tools/profile.js:!+[]+!+[]3!+[]+!+[]:!+[]+!+[]8)
    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:1!+[]+!+[]9:15
    at []["filter"]._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:!+[]+!+[]!+[]+!+[])
    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)
    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:7+[]!+[]+!+[]:!+[]+!+[]!+[]+!+[])
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:5+[]4:34
    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:347:!+[]+!+[]3
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:3!+[]+!+[]1:!+[]+!+[]6)
    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]+[]44:14
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]1!+[]+!+[]6:!+[]+!+[]+[]
    at [].forEach (native)
    at []["filter"]._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]1!+[]+!+[]5:7
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]68:13
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]61:!+[]+!+[]9
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]59:18
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at /Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]5+[]:!+[]+!+[]3
    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)
    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:!+[]+!+[]49:19)
    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:!+[]+!+[]+[]!+[]+!+[]9:31)
    at /Users/sashko/git/meteor/tools/run-app.js:557:36
    at time (/Users/sashko/git/meteor/tools/profile.js:!+[]+!+[]3!+[]+!+[]:!+[]+!+[]8)
    at []["filter"].run (/Users/sashko/git/meteor/tools/profile.js:377:1!+[]+!+[])
    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)
    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:6+[]+[]:35)
    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:!+[]+!+[]8)
    at /Users/sashko/git/meteor/tools/run-app.js:4+[]!+[]+!+[]:1!+[]+!+[]`;
