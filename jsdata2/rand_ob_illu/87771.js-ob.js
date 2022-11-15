const _0x586b = ['mzIYi', 'last', 'RbMuw', 'yKmok', 'insideFiber', 'AFaiy', '223883HgbNEK', '2MACQJE', '262550YuqgsG', '1eAGOfb', '323hiQDtG', '111QnfsDU', '5010PWZTtH', '24RawCxN', '86ztsahS', '4367vtGVFF', '285721zAlixS', '1ewrJHo', '1874007oErMin', 'define', 'parse-stack-test.js', 'selftest.js', 'outsideFiber', 'convertToStandardPath', 'file', 'expectEqual', 'split'];
const _0x258265 = _0x241a;

(function (_0x34868d, _0x40ce5a) {
    const _0x4becb7 = _0x241a;

    while (true) {
        try {
            const _0x5e9025 = -parseInt(_0x4becb7(0x17e)) * parseInt(_0x4becb7(0x17f)) + -parseInt(_0x4becb7(0x180)) * parseInt(_0x4becb7(0x181)) + parseInt(_0x4becb7(0x182)) * -parseInt(_0x4becb7(0x183)) + parseInt(_0x4becb7(0x184)) * -parseInt(_0x4becb7(0x185)) + -parseInt(_0x4becb7(0x186)) * parseInt(_0x4becb7(0x187)) + -parseInt(_0x4becb7(0x188)) + parseInt(_0x4becb7(0x189)) * parseInt(_0x4becb7(0x18a));

            if (_0x5e9025 === _0x40ce5a) break;else _0x34868d.push(_0x34868d.shift());
        } catch (_0x3c42be) {
            _0x34868d.push(_0x34868d.shift());
        }
    }
})(_0x586b, 346315);
import _0x546d9e from '../tool-testing/selftest.js';
import { parse, markBottom } from '../utils/parse-stack';
import _0xaa5e4 from 'underscore';
import _0x15cf60 from 'fibers';
import _0x18df4b from 'fibers/future';
function _0x241a(_0x3e6844, _0x217358) {
    return _0x241a = function (_0x4f8b65, _0x2104c2) {
        _0x4f8b65 = _0x4f8b65 - 382;
        const _0x26335c = _0x586b[_0x4f8b65];

        return _0x26335c;
    }, _0x241a(_0x3e6844, _0x217358);
}
import _0x509a8f from '../fs/files';
_0x546d9e[_0x258265(0x18b)]('parse-stack - parse stack traces without fibers', () => {
    const _0x1f1ff2 = _0x258265;
    const _0x2aab3f = {
        'yKmok': function (_0x4cba87, _0x1a8ed5) {
            return _0x4cba87(_0x1a8ed5);
        },
        'mzIYi': _0x1f1ff2(0x18c),
        'RbMuw': _0x1f1ff2(0x18d)
    };

    const _0x51ed19 = new Error();

    const _0x526ca3 = parse(_0x51ed19)[_0x1f1ff2(0x18e)];

    const _0x44ce6d = _0x509a8f[_0x1f1ff2(0x18f)](_0x526ca3[0][_0x1f1ff2(0x190)]);

    _0x546d9e[_0x1f1ff2(0x191)](_0xaa5e4.last(_0x44ce6d[_0x1f1ff2(0x192)]('/')), _0x2aab3f[_0x1f1ff2(0x193)]);

    const _0x2f5ddc = _0x509a8f[_0x1f1ff2(0x18f)](_0xaa5e4.last(_0x526ca3)[_0x1f1ff2(0x190)]);

    _0x546d9e[_0x1f1ff2(0x191)](_0xaa5e4[_0x1f1ff2(0x194)](_0x2f5ddc[_0x1f1ff2(0x192)]('/')), _0x2aab3f[_0x1f1ff2(0x195)]), markBottom(() => {
        const _0x226f1e = _0x1f1ff2;

        const _0x22027 = new Error();

        var {
            outsideFiber: _0x7f8b28,
            insideFiber: _0x266bf8
        } = _0x2aab3f[_0x226f1e(0x196)](parse, _0x22027);

        _0x546d9e[_0x226f1e(0x191)](_0x266bf8, undefined), _0x546d9e[_0x226f1e(0x191)](_0x7f8b28.length, 1);

        const _0x4b33f3 = _0x509a8f[_0x226f1e(0x18f)](_0x7f8b28[0].file);

        _0x546d9e[_0x226f1e(0x191)](_0xaa5e4.last(_0x4b33f3.split('/')), _0x2aab3f[_0x226f1e(0x193)]);
    })();
}), _0x546d9e[_0x258265(0x18b)]('parse-stack - parse stack traces with fibers', () => {
    const _0x5be7b7 = _0x258265;
    const _0x2ab591 = { 'AFaiy': 'template-compiler.js' };

    const _0x3d238c = parse({ 'stack': exampleStackTrace });

    _0x546d9e[_0x5be7b7(0x191)](_0x3d238c[_0x5be7b7(0x197)][0][_0x5be7b7(0x190)], _0x2ab591.AFaiy), _0x546d9e.expectEqual(_0xaa5e4[_0x5be7b7(0x194)](_0x3d238c.outsideFiber).file, _0x2ab591[_0x5be7b7(0x198)]);
});
const exampleStackTrace = 'TypeError: object is not a function\n    at Object.Future.wait (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/fibers/future.js:395:16)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:312:12)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12\n    - - - - -\n    at TemplateCompiler.compileOneFile (template-compiler.js:43:23)\n    at caching-compiler.js:292:32\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:182:20\n    at replenish (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:317:21)\n    at /Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:328:15\n    at Object.async.forEachLimit.async.eachLimit (/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:221:35)\n    at TemplateCompiler.processFilesForTarget (caching-compiler.js:277:11)\n    at TemplateCompiler.processFilesForTarget (template-compiler.js:28:32)\n    at __bottom_mark__ (/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\n    at Function.time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at /Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\n    at [object Object]._.extend.runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\n    at [object Object]._.extend._runCompilerPlugins (/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\n    at /Users/sashko/git/meteor/tools/buildmessage.js:356:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:349:34\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:347:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.enterJob (/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\n    at [object Object]._.extend.make (/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\n    at Array.forEach (native)\n    at Function._.each._.forEach (/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\n    at /Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\n    at /Users/sashko/git/meteor/tools/buildmessage.js:268:13\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:261:29\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:259:18\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at /Users/sashko/git/meteor/tools/buildmessage.js:250:23\n    at [object Object]._.extend.withValue (/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\n    at Object.capture (/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\n    at Object.exports.bundle (/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\n    at /Users/sashko/git/meteor/tools/run-app.js:557:36\n    at time (/Users/sashko/git/meteor/tools/profile.js:232:28)\n    at Function.run (/Users/sashko/git/meteor/tools/profile.js:377:12)\n    at bundleApp (/Users/sashko/git/meteor/tools/run-app.js:547:34)\n    at [object Object]._.extend._runOnce (/Users/sashko/git/meteor/tools/run-app.js:600:35)\n    at [object Object]._.extend._fiber (/Users/sashko/git/meteor/tools/run-app.js:848:28)\n    at /Users/sashko/git/meteor/tools/run-app.js:402:12';
