const _0xd704 = ['1SOhGxI', '13DIuyGe', '76777OTwLsJ', '414366XXWAwI', '39511gjSifZ', '15dsgXMj', '1415569sgadZD', '2076185RoTypT', './dalek', 'exports', 'niQWV', 'length', 'deprecate', '" installed as a community package. See https://github.com/atom/atom/blob/master/packages/dalek/README.md for how this causes problems and instructions on how to correct the situation.', '677896ZMUQOw', '2LFDWBe', '1424744IKvBbj'];
const _0xaa2bb3 = _0x4fc0;

(function (_0x5a1e2b, _0x59cbe3) {
    const _0x49416f = _0x4fc0;

    while (true) {
        try {
            const _0x211ce4 = parseInt(_0x49416f(0x18a)) * -parseInt(_0x49416f(0x18b)) + -parseInt(_0x49416f(0x18c)) * -parseInt(_0x49416f(0x18d)) + -parseInt(_0x49416f(0x18e)) * -parseInt(_0x49416f(0x18f)) + -parseInt(_0x49416f(0x190)) + -parseInt(_0x49416f(0x191)) * parseInt(_0x49416f(0x192)) + -parseInt(_0x49416f(0x193)) + parseInt(_0x49416f(0x194));

            if (_0x211ce4 === _0x59cbe3) break;else _0x5a1e2b.push(_0x5a1e2b.shift());
        } catch (_0x57136e) {
            _0x5a1e2b.push(_0x5a1e2b.shift());
        }
    }
})(_0xd704, 720638);

const dalek = require(_0xaa2bb3(0x195));

const Grim = require('grim');

function _0x4fc0(_0x473de5, _0x404e35) {
    return _0x4fc0 = function (_0x4e87a7, _0x56b4ad) {
        _0x4e87a7 = _0x4e87a7 - 394;
        const _0x18ad48 = _0xd704[_0x4e87a7];

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

        atom.packages.onDidActivateInitialPackages(async () => {
            const _0x2cf8bb = _0x4fc0;

            const _0x4afd29 = await dalek.enumerate();

            for (let _0x229ac3 = 0; _0x26dad7[_0x2cf8bb(0x197)](_0x229ac3, _0x4afd29[_0x2cf8bb(0x198)]); _0x229ac3++) {
                const _0xb2d860 = _0x4afd29[_0x229ac3];

                Grim[_0x2cf8bb(0x199)]('You have the core package "' + _0xb2d860 + _0x2cf8bb(0x19a), { 'packageName': _0xb2d860 });
            }
        });
    }
};
