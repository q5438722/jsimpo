const _0x586b = [
    'mzIYi',
    'last',
    'RbMuw',
    'yKmok',
    'insideFiber',
    'AFaiy',
    '223883HgbNEK',
    '2MACQJE',
    '262550YuqgsG',
    '1eAGOfb',
    '323hiQDtG',
    '111QnfsDU',
    '5010PWZTtH',
    '24RawCxN',
    '86ztsahS',
    '4367vtGVFF',
    '285721zAlixS',
    '1ewrJHo',
    '1874007oErMin',
    'define',
    'parse-stack-test.js',
    'selftest.js',
    'outsideFiber',
    'convertToStandardPath',
    'file',
    'expectEqual',
    'split'
];
const _0x258265 = _0x241a;
(function (_0x34868d, _0x40ce5a) {
    const _0x4becb7 = _0x241a;
    while (!![]) {
        try {
            const _0x5e9025 = -parseInt(_0x4becb7(0x17e)) * parseInt(_0x4becb7(0x17f)) + -parseInt(_0x4becb7(0x180)) * parseInt(_0x4becb7(0x181)) + parseInt(_0x4becb7(0x182)) * -parseInt(_0x4becb7(0x183)) + parseInt(_0x4becb7(0x184)) * -parseInt(_0x4becb7(0x185)) + -parseInt(_0x4becb7(0x186)) * parseInt(_0x4becb7(0x187)) + -parseInt(_0x4becb7(0x188)) + parseInt(_0x4becb7(0x189)) * parseInt(_0x4becb7(0x18a));
            if (_0x5e9025 === _0x40ce5a)
                break;
            else
                _0x34868d['push'](_0x34868d['shift']());
        } catch (_0x3c42be) {
            _0x34868d['push'](_0x34868d['shift']());
        }
    }
}(_0x586b, 0x8cad + 0xd6b * -0x1b + 0x62667));
import _0x546d9e from '../tool-testing/selftest.js';
import {
    parse,
    markBottom
} from '../utils/parse-stack';
import _0xaa5e4 from 'underscore';
import _0x15cf60 from 'fibers';
import _0x18df4b from 'fibers/future';
function _0x241a(_0x3e6844, _0x217358) {
    return _0x241a = function (_0x4f8b65, _0x2104c2) {
        _0x4f8b65 = _0x4f8b65 - (-0x1 * 0x211 + 0x25cb + -0x223c);
        let _0x26335c = _0x586b[_0x4f8b65];
        return _0x26335c;
    }, _0x241a(_0x3e6844, _0x217358);
}
import _0x509a8f from '../fs/files';
_0x546d9e[_0x258265(0x18b)]('parse-stack\x20-\x20parse\x20stack\x20traces\x20without\x20fibers', () => {
    const _0x1f1ff2 = _0x258265, _0x2aab3f = {
            'yKmok': function (_0x4cba87, _0x1a8ed5) {
                return _0x4cba87(_0x1a8ed5);
            },
            'mzIYi': _0x1f1ff2(0x18c),
            'RbMuw': _0x1f1ff2(0x18d)
        }, _0x51ed19 = new Error(), _0x526ca3 = parse(_0x51ed19)[_0x1f1ff2(0x18e)], _0x44ce6d = _0x509a8f[_0x1f1ff2(0x18f)](_0x526ca3[0x4 * 0x7f7 + -0x7f * -0x25 + -0x3237][_0x1f1ff2(0x190)]);
    _0x546d9e[_0x1f1ff2(0x191)](_0xaa5e4['last'](_0x44ce6d[_0x1f1ff2(0x192)]('/')), _0x2aab3f[_0x1f1ff2(0x193)]);
    const _0x2f5ddc = _0x509a8f[_0x1f1ff2(0x18f)](_0xaa5e4['last'](_0x526ca3)[_0x1f1ff2(0x190)]);
    _0x546d9e[_0x1f1ff2(0x191)](_0xaa5e4[_0x1f1ff2(0x194)](_0x2f5ddc[_0x1f1ff2(0x192)]('/')), _0x2aab3f[_0x1f1ff2(0x195)]), markBottom(() => {
        const _0x226f1e = _0x1f1ff2, _0x22027 = new Error(), {
                outsideFiber: _0x7f8b28,
                insideFiber: _0x266bf8
            } = _0x2aab3f[_0x226f1e(0x196)](parse, _0x22027);
        _0x546d9e[_0x226f1e(0x191)](_0x266bf8, undefined), _0x546d9e[_0x226f1e(0x191)](_0x7f8b28['length'], -0x2 * 0x1315 + -0xfe * 0x1 + 0x2729);
        const _0x4b33f3 = _0x509a8f[_0x226f1e(0x18f)](_0x7f8b28[0xd62 + 0x1303 + -0x2065]['file']);
        _0x546d9e[_0x226f1e(0x191)](_0xaa5e4['last'](_0x4b33f3['split']('/')), _0x2aab3f[_0x226f1e(0x193)]);
    })();
}), _0x546d9e[_0x258265(0x18b)]('parse-stack\x20-\x20parse\x20stack\x20traces\x20with\x20fibers', () => {
    const _0x5be7b7 = _0x258265, _0x2ab591 = { 'AFaiy': 'template-compiler.js' }, _0x3d238c = parse({ 'stack': exampleStackTrace });
    _0x546d9e[_0x5be7b7(0x191)](_0x3d238c[_0x5be7b7(0x197)][0x20c5 + -0x24b3 * -0x1 + -0x4578][_0x5be7b7(0x190)], _0x2ab591['AFaiy']), _0x546d9e['expectEqual'](_0xaa5e4[_0x5be7b7(0x194)](_0x3d238c['outsideFiber'])['file'], _0x2ab591[_0x5be7b7(0x198)]);
});
const exampleStackTrace = 'TypeError:\x20object\x20is\x20not\x20a\x20function\x0a\x20\x20\x20\x20at\x20Object.Future.wait\x20(/Users/sashko/git/meteor/dev_bundle/lib/node_modules/fibers/future.js:395:16)\x0a\x20\x20\x20\x20at\x20TemplateCompiler.processFilesForTarget\x20(caching-compiler.js:312:12)\x0a\x20\x20\x20\x20at\x20TemplateCompiler.processFilesForTarget\x20(template-compiler.js:28:32)\x0a\x20\x20\x20\x20at\x20__bottom_mark__\x20(/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:356:18\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:349:34\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:347:23\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20Object.enterJob\x20(/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\x0a\x20\x20\x20\x20at\x20Function.time\x20(/Users/sashko/git/meteor/tools/profile.js:232:28)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\x0a\x20\x20\x20\x20at\x20Function._.each._.forEach\x20(/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.runCompilerPlugins\x20(/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend._runCompilerPlugins\x20(/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:356:18\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:349:34\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:347:23\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20Object.enterJob\x20(/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.make\x20(/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\x0a\x20\x20\x20\x20at\x20Array.forEach\x20(native)\x0a\x20\x20\x20\x20at\x20Function._.each._.forEach\x20(/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:268:13\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:261:29\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:259:18\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:250:23\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20Object.capture\x20(/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\x0a\x20\x20\x20\x20at\x20Object.exports.bundle\x20(/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/run-app.js:557:36\x0a\x20\x20\x20\x20at\x20time\x20(/Users/sashko/git/meteor/tools/profile.js:232:28)\x0a\x20\x20\x20\x20at\x20Function.run\x20(/Users/sashko/git/meteor/tools/profile.js:377:12)\x0a\x20\x20\x20\x20at\x20bundleApp\x20(/Users/sashko/git/meteor/tools/run-app.js:547:34)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend._runOnce\x20(/Users/sashko/git/meteor/tools/run-app.js:600:35)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend._fiber\x20(/Users/sashko/git/meteor/tools/run-app.js:848:28)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/run-app.js:402:12\x0a\x20\x20\x20\x20-\x20-\x20-\x20-\x20-\x0a\x20\x20\x20\x20at\x20TemplateCompiler.compileOneFile\x20(template-compiler.js:43:23)\x0a\x20\x20\x20\x20at\x20caching-compiler.js:292:32\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:182:20\x0a\x20\x20\x20\x20at\x20replenish\x20(/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:317:21)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:328:15\x0a\x20\x20\x20\x20at\x20Object.async.forEachLimit.async.eachLimit\x20(/Users/sashko/git/meteor/packages/caching-compiler/.npm/package/node_modules/async/lib/async.js:221:35)\x0a\x20\x20\x20\x20at\x20TemplateCompiler.processFilesForTarget\x20(caching-compiler.js:277:11)\x0a\x20\x20\x20\x20at\x20TemplateCompiler.processFilesForTarget\x20(template-compiler.js:28:32)\x0a\x20\x20\x20\x20at\x20__bottom_mark__\x20(/Users/sashko/git/meteor/tools/parse-stack.js:92:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:141:13\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:356:18\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:349:34\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:347:23\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20Object.enterJob\x20(/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:130:22\x0a\x20\x20\x20\x20at\x20Function.time\x20(/Users/sashko/git/meteor/tools/profile.js:232:28)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:129:15\x0a\x20\x20\x20\x20at\x20Function._.each._.forEach\x20(/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:87:22)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.runCompilerPlugins\x20(/Users/sashko/git/meteor/tools/isobuild/compiler-plugin.js:118:7)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend._runCompilerPlugins\x20(/Users/sashko/git/meteor/tools/isobuild/bundler.js:702:22)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:504:34\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:356:18\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:349:34\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:347:23\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20Object.enterJob\x20(/Users/sashko/git/meteor/tools/buildmessage.js:321:26)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.make\x20(/Users/sashko/git/meteor/tools/isobuild/bundler.js:498:18)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:2044:14\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:2126:20\x0a\x20\x20\x20\x20at\x20Array.forEach\x20(native)\x0a\x20\x20\x20\x20at\x20Function._.each._.forEach\x20(/Users/sashko/git/meteor/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/isobuild/bundler.js:2125:7\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:268:13\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:261:29\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:259:18\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/buildmessage.js:250:23\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend.withValue\x20(/Users/sashko/git/meteor/tools/fiber-helpers.js:114:14)\x0a\x20\x20\x20\x20at\x20Object.capture\x20(/Users/sashko/git/meteor/tools/buildmessage.js:249:19)\x0a\x20\x20\x20\x20at\x20Object.exports.bundle\x20(/Users/sashko/git/meteor/tools/isobuild/bundler.js:2029:31)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/run-app.js:557:36\x0a\x20\x20\x20\x20at\x20time\x20(/Users/sashko/git/meteor/tools/profile.js:232:28)\x0a\x20\x20\x20\x20at\x20Function.run\x20(/Users/sashko/git/meteor/tools/profile.js:377:12)\x0a\x20\x20\x20\x20at\x20bundleApp\x20(/Users/sashko/git/meteor/tools/run-app.js:547:34)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend._runOnce\x20(/Users/sashko/git/meteor/tools/run-app.js:600:35)\x0a\x20\x20\x20\x20at\x20[object\x20Object]._.extend._fiber\x20(/Users/sashko/git/meteor/tools/run-app.js:848:28)\x0a\x20\x20\x20\x20at\x20/Users/sashko/git/meteor/tools/run-app.js:402:12';
