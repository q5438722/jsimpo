const _0x22b6 = [
    '__VUE_DEVTOOLS_GLOBAL_HOOK__',
    'vuex:action',
    'vuex:init',
    'vuex:travel-to-state',
    '_devtoolHook',
    'emit',
    'ohVeU',
    'QXkEO',
    'vuex:mutation',
    'subscribeAction',
    'tpOId',
    '352949rOYgmw',
    '212378TEYshx',
    '168213XDheLG',
    '28311PYRmmg',
    '2MBsEYM',
    '128283HwvxBy',
    '3NkhYnt',
    '424502nZeSVr',
    '707225bouDWH',
    'undefined'
];
function _0x39a5(_0x480fc1, _0x55f367) {
    return _0x39a5 = function (_0x269e09, _0x1adaed) {
        _0x269e09 = _0x269e09 - (-0xbb2 + -0x1f * 0x10a + 0x2d4c);
        let _0x23debb = _0x22b6[_0x269e09];
        return _0x23debb;
    }, _0x39a5(_0x480fc1, _0x55f367);
}
const _0x3d0df3 = _0x39a5;
(function (_0x37f551, _0x3df8fd) {
    const _0x3f0a95 = _0x39a5;
    while (!![]) {
        try {
            const _0x1b0005 = parseInt(_0x3f0a95(0x164)) + parseInt(_0x3f0a95(0x165)) + -parseInt(_0x3f0a95(0x166)) + -parseInt(_0x3f0a95(0x167)) * parseInt(_0x3f0a95(0x168)) + parseInt(_0x3f0a95(0x169)) * -parseInt(_0x3f0a95(0x16a)) + -parseInt(_0x3f0a95(0x16b)) + parseInt(_0x3f0a95(0x16c));
            if (_0x1b0005 === _0x3df8fd)
                break;
            else
                _0x37f551['push'](_0x37f551['shift']());
        } catch (_0x1441ef) {
            _0x37f551['push'](_0x37f551['shift']());
        }
    }
}(_0x22b6, 0x99a * 0x2a + -0x4aaeb + -0x6bac5 * -0x1));
const target = typeof window !== _0x3d0df3(0x16d) ? window : typeof global !== 'undefined' ? global : {}, devtoolHook = target[_0x3d0df3(0x16e)];
export default function devtoolPlugin(_0x17ea58) {
    const _0x58cc9d = _0x3d0df3, _0x58685c = {
            'tpOId': _0x58cc9d(0x16f),
            'ohVeU': _0x58cc9d(0x170),
            'QXkEO': _0x58cc9d(0x171)
        };
    if (!devtoolHook)
        return;
    _0x17ea58[_0x58cc9d(0x172)] = devtoolHook, devtoolHook[_0x58cc9d(0x173)](_0x58685c[_0x58cc9d(0x174)], _0x17ea58), devtoolHook['on'](_0x58685c[_0x58cc9d(0x175)], _0x235f00 => {
        _0x17ea58['replaceState'](_0x235f00);
    }), _0x17ea58['subscribe']((_0x390e6c, _0x221f08) => {
        const _0x48bb30 = _0x58cc9d;
        devtoolHook['emit'](_0x48bb30(0x176), _0x390e6c, _0x221f08);
    }, { 'prepend': !![] }), _0x17ea58[_0x58cc9d(0x177)]((_0x34922f, _0x3167e5) => {
        const _0x1088af = _0x58cc9d;
        devtoolHook['emit'](_0x58685c[_0x1088af(0x178)], _0x34922f, _0x3167e5);
    }, { 'prepend': !![] });
}
