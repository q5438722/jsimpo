const _0x32e1 = [
    '4962167vghnBu',
    '1IbymRz',
    'undefined',
    '__VUE_DEVTOOLS_GLOBAL_HOOK__',
    'emit',
    'vuex:init',
    'replaceState',
    'subscribeAction',
    '1589020jHFfgZ',
    '1456827RNzNnT',
    '932612cJHaCD',
    '729050fAalki',
    '461046fODsri',
    '829400gDynyc'
];
const _0x5db068 = _0x1479;
function _0x1479(_0x2a23e6, _0x2a0297) {
    return _0x1479 = function (_0x32e108, _0x14790c) {
        _0x32e108 = _0x32e108 - 0xd9;
        let _0x1f02f2 = _0x32e1[_0x32e108];
        return _0x1f02f2;
    }, _0x1479(_0x2a23e6, _0x2a0297);
}
(function (_0x3db121, _0x1902f8) {
    const _0x5dd91d = _0x1479;
    while (!![]) {
        try {
            const _0x5b3cba = -parseInt(_0x5dd91d(0xd9)) + -parseInt(_0x5dd91d(0xda)) + parseInt(_0x5dd91d(0xdb)) + -parseInt(_0x5dd91d(0xdc)) + -parseInt(_0x5dd91d(0xdd)) + -parseInt(_0x5dd91d(0xde)) + -parseInt(_0x5dd91d(0xdf)) * -parseInt(_0x5dd91d(0xe0));
            if (_0x5b3cba === _0x1902f8)
                break;
            else
                _0x3db121['push'](_0x3db121['shift']());
        } catch (_0x3d4b44) {
            _0x3db121['push'](_0x3db121['shift']());
        }
    }
}(_0x32e1, 0xca7fc));
const target = typeof window !== _0x5db068(0xe1) ? window : typeof global !== _0x5db068(0xe1) ? global : {}, devtoolHook = target[_0x5db068(0xe2)];
export default function devtoolPlugin(_0x315ae3) {
    const _0x236e08 = _0x5db068;
    if (!devtoolHook)
        return;
    _0x315ae3['_devtoolHook'] = devtoolHook, devtoolHook[_0x236e08(0xe3)](_0x236e08(0xe4), _0x315ae3), devtoolHook['on']('vuex:travel-to-state', _0x3f3979 => {
        const _0x3d3494 = _0x236e08;
        _0x315ae3[_0x3d3494(0xe5)](_0x3f3979);
    }), _0x315ae3['subscribe']((_0x4a79cb, _0x185596) => {
        const _0x43b518 = _0x236e08;
        devtoolHook[_0x43b518(0xe3)]('vuex:mutation', _0x4a79cb, _0x185596);
    }, { 'prepend': !![] }), _0x315ae3[_0x236e08(0xe6)]((_0x46fa33, _0x2438d1) => {
        const _0x3d5927 = _0x236e08;
        devtoolHook[_0x3d5927(0xe3)]('vuex:action', _0x46fa33, _0x2438d1);
    }, { 'prepend': !![] });
}
