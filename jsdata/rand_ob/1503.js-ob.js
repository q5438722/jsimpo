const _0xd704 = [
    '1SOhGxI',
    '13DIuyGe',
    '76777OTwLsJ',
    '414366XXWAwI',
    '39511gjSifZ',
    '15dsgXMj',
    '1415569sgadZD',
    '2076185RoTypT',
    './dalek',
    'exports',
    'niQWV',
    'length',
    'deprecate',
    '\x22\x20installed\x20as\x20a\x20community\x20package.\x20See\x20https://github.com/atom/atom/blob/master/packages/dalek/README.md\x20for\x20how\x20this\x20causes\x20problems\x20and\x20instructions\x20on\x20how\x20to\x20correct\x20the\x20situation.',
    '677896ZMUQOw',
    '2LFDWBe',
    '1424744IKvBbj'
];
const _0xaa2bb3 = _0x4fc0;
(function (_0x5a1e2b, _0x59cbe3) {
    const _0x49416f = _0x4fc0;
    while (!![]) {
        try {
            const _0x211ce4 = parseInt(_0x49416f(0x18a)) * -parseInt(_0x49416f(0x18b)) + -parseInt(_0x49416f(0x18c)) * -parseInt(_0x49416f(0x18d)) + -parseInt(_0x49416f(0x18e)) * -parseInt(_0x49416f(0x18f)) + -parseInt(_0x49416f(0x190)) + -parseInt(_0x49416f(0x191)) * parseInt(_0x49416f(0x192)) + -parseInt(_0x49416f(0x193)) + parseInt(_0x49416f(0x194));
            if (_0x211ce4 === _0x59cbe3)
                break;
            else
                _0x5a1e2b['push'](_0x5a1e2b['shift']());
        } catch (_0x57136e) {
            _0x5a1e2b['push'](_0x5a1e2b['shift']());
        }
    }
}(_0xd704, -0x1194f * -0x3 + -0x12fa67 * -0x1 + -0xb4756));
const dalek = require(_0xaa2bb3(0x195)), Grim = require('grim');
function _0x4fc0(_0x473de5, _0x404e35) {
    return _0x4fc0 = function (_0x4e87a7, _0x56b4ad) {
        _0x4e87a7 = _0x4e87a7 - (-0x16d0 + -0x1 * 0x14c5 + -0x2d1f * -0x1);
        let _0x18ad48 = _0xd704[_0x4e87a7];
        return _0x18ad48;
    }, _0x4fc0(_0x473de5, _0x404e35);
}
module[_0xaa2bb3(0x196)] = {
    'activate'() {
        const _0x26dad7 = {
            'niQWV': function (_0x442fa6, _0x3830d8) {
                return _0x442fa6 < _0x3830d8;
            }
        };
        atom['packages']['onDidActivateInitialPackages'](async () => {
            const _0x2cf8bb = _0x4fc0, _0x4afd29 = await dalek['enumerate']();
            for (let _0x229ac3 = 0x13 * -0xe + 0xba8 + -0xa9e; _0x26dad7[_0x2cf8bb(0x197)](_0x229ac3, _0x4afd29[_0x2cf8bb(0x198)]); _0x229ac3++) {
                const _0xb2d860 = _0x4afd29[_0x229ac3];
                Grim[_0x2cf8bb(0x199)]('You\x20have\x20the\x20core\x20package\x20\x22' + _0xb2d860 + _0x2cf8bb(0x19a), { 'packageName': _0xb2d860 });
            }
        });
    }
};
