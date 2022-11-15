const _0x5485 = [
    'css',
    '\x0a\x20\x20\x20\x20\x20\x20.font-normal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20400;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.test\x5c:font-bold\x20*::test\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.test\x5c:font-medium\x20*::test\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.hover\x5c:test\x5c:font-black:hover\x20*::test\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20900;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.test\x5c:font-bold::test\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.test\x5c:font-medium::test\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.hover\x5c:test\x5c:font-black:hover::test\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20900;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    '801194riAGWo',
    '4EBqpUR',
    '17862meaADp',
    '177KNFEGk',
    '8093lkmmpk',
    '927119wbHnai',
    '1enDhVN',
    '12774JgjGSj',
    '62iksFov',
    '650171cgDUTQ',
    '1gzuEwX',
    '4053415iawjaH',
    'process',
    'resolve',
    '?test=',
    'jit',
    'test',
    '\x20*::test',
    'separator',
    '@tailwind\x20utilities'
];
function _0x481d(_0x3211f2, _0x2614ad) {
    return _0x481d = function (_0x5485cb, _0x481d3f) {
        _0x5485cb = _0x5485cb - 0xfb;
        let _0x3a6440 = _0x5485[_0x5485cb];
        return _0x3a6440;
    }, _0x481d(_0x3211f2, _0x2614ad);
}
(function (_0x26b790, _0x19bbb0) {
    const _0x188211 = _0x481d;
    while (!![]) {
        try {
            const _0x4483c1 = -parseInt(_0x188211(0xfb)) + -parseInt(_0x188211(0xfc)) * parseInt(_0x188211(0xfd)) + parseInt(_0x188211(0xfe)) * -parseInt(_0x188211(0xff)) + parseInt(_0x188211(0x100)) * -parseInt(_0x188211(0x101)) + -parseInt(_0x188211(0x102)) * -parseInt(_0x188211(0x103)) + -parseInt(_0x188211(0x104)) * parseInt(_0x188211(0x105)) + parseInt(_0x188211(0x106));
            if (_0x4483c1 === _0x19bbb0)
                break;
            else
                _0x26b790['push'](_0x26b790['shift']());
        } catch (_0x5b5070) {
            _0x26b790['push'](_0x26b790['shift']());
        }
    }
}(_0x5485, 0xeb1c2));
import _0x1522b9 from 'postcss';
import _0x41b487 from 'path';
import _0x4bfdf from '../../src/jit/index.js';
import {
    transformAllSelectors,
    updateAllClasses
} from '../../src/util/pluginUtils.js';
function run(_0x51f899, _0x14289d = {}) {
    const _0x56ebb6 = _0x481d, {currentTestName: _0x3fa00b} = expect['getState']();
    return _0x1522b9(_0x4bfdf(_0x14289d))[_0x56ebb6(0x107)](_0x51f899, { 'from': _0x41b487[_0x56ebb6(0x108)](__filename) + _0x56ebb6(0x109) + _0x3fa00b });
}
test('basic\x20parallel\x20variants', async () => {
    const _0x1400ee = _0x481d;
    let _0x3f155a = {
            'mode': _0x1400ee(0x10a),
            'purge': [{ 'raw': '<div\x20class=\x22font-normal\x20hover:test:font-black\x20test:font-bold\x20test:font-medium\x22></div>' }],
            'theme': {},
            'plugins': [function _0x502ee9({
                    addVariant: _0x29c726,
                    config: _0x197231
                }) {
                    const _0x2c745f = _0x1400ee;
                    _0x29c726(_0x2c745f(0x10b), [
                        transformAllSelectors(_0x11fd1b => {
                            const _0x1a2c1e = _0x2c745f;
                            let _0x12ac18 = updateAllClasses(_0x11fd1b, _0x390d85 => {
                                return 'test' + _0x197231('separator') + _0x390d85;
                            });
                            return _0x12ac18 + _0x1a2c1e(0x10c);
                        }),
                        transformAllSelectors(_0x401d8b => {
                            return updateAllClasses(_0x401d8b, (_0x3b4f95, {withPseudo: _0x3eb3d5}) => {
                                const _0x2f73ff = _0x481d;
                                return _0x3eb3d5('test' + _0x197231(_0x2f73ff(0x10d)) + _0x3b4f95, '::test');
                            });
                        })
                    ]);
                }]
        }, _0x34e6a4 = _0x1400ee(0x10e);
    return run(_0x34e6a4, _0x3f155a)['then'](_0x2bea79 => {
        const _0xc57425 = _0x1400ee;
        expect(_0x2bea79[_0xc57425(0x10f)])['toMatchFormattedCss'](_0xc57425(0x110));
    });
});
