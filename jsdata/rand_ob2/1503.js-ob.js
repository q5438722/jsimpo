const _0x5f31 = [
    '487550EWEwKY',
    '246489lReTXN',
    '72811VuJQLp',
    '7sxXjPs',
    '29378cyunoY',
    './dalek',
    'grim',
    'packages',
    'deprecate',
    'You\x20have\x20the\x20core\x20package\x20\x22',
    '\x22\x20installed\x20as\x20a\x20community\x20package.\x20See\x20https://github.com/atom/atom/blob/master/packages/dalek/README.md\x20for\x20how\x20this\x20causes\x20problems\x20and\x20instructions\x20on\x20how\x20to\x20correct\x20the\x20situation.',
    '281773MfOFrl',
    '641482XMcmPy',
    '37hpdChM',
    '24945IfHzTU',
    '2toSJMg'
];
function _0x20ad(_0x2b60b8, _0x8049b0) {
    return _0x20ad = function (_0x5f3175, _0x20addd) {
        _0x5f3175 = _0x5f3175 - 0x1ac;
        let _0x37f111 = _0x5f31[_0x5f3175];
        return _0x37f111;
    }, _0x20ad(_0x2b60b8, _0x8049b0);
}
const _0x4d4ac7 = _0x20ad;
(function (_0xd97637, _0x826532) {
    const _0x43f332 = _0x20ad;
    while (!![]) {
        try {
            const _0x2fb021 = parseInt(_0x43f332(0x1ac)) + parseInt(_0x43f332(0x1ad)) + parseInt(_0x43f332(0x1ae)) * parseInt(_0x43f332(0x1af)) + -parseInt(_0x43f332(0x1b0)) * parseInt(_0x43f332(0x1b1)) + -parseInt(_0x43f332(0x1b2)) + parseInt(_0x43f332(0x1b3)) + parseInt(_0x43f332(0x1b4)) * -parseInt(_0x43f332(0x1b5));
            if (_0x2fb021 === _0x826532)
                break;
            else
                _0xd97637['push'](_0xd97637['shift']());
        } catch (_0x22641d) {
            _0xd97637['push'](_0xd97637['shift']());
        }
    }
}(_0x5f31, 0x78114));
const dalek = require(_0x4d4ac7(0x1b6)), Grim = require(_0x4d4ac7(0x1b7));
module['exports'] = {
    'activate'() {
        const _0x1956a2 = _0x4d4ac7;
        atom[_0x1956a2(0x1b8)]['onDidActivateInitialPackages'](async () => {
            const _0x2bf49f = _0x1956a2, _0x270c93 = await dalek['enumerate']();
            for (let _0x35e7d8 = 0x0; _0x35e7d8 < _0x270c93['length']; _0x35e7d8++) {
                const _0x180f29 = _0x270c93[_0x35e7d8];
                Grim[_0x2bf49f(0x1b9)](_0x2bf49f(0x1ba) + _0x180f29 + _0x2bf49f(0x1bb), { 'packageName': _0x180f29 });
            }
        });
    }
};
