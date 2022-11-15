const _0x419d = [
    'bottom',
    'platform',
    'toLowerCase',
    'android',
    'ios',
    'devtools',
    '7418aaFlup',
    '49eiVAhT',
    '272035KKomQR',
    '179402gMjegt',
    '5bEMhAv',
    '28rMpZfG',
    '40249LgGrpJ',
    '730949mWWxrj',
    '17TSyAwg',
    '85223euivRo',
    '6977vxCUZh',
    '695SFtDnI',
    '__DC_STAT_UUID',
    'now',
    'random',
    'setStorage',
    'deviceId',
    'safeArea',
    'safeAreaInsets',
    'top',
    'right',
    'windowHeight'
];
const _0x294e7f = _0x2bb6;
(function (_0x4709dd, _0x520bc4) {
    const _0x4c40db = _0x2bb6;
    while (!![]) {
        try {
            const _0x22ea4b = -parseInt(_0x4c40db(0x167)) * -parseInt(_0x4c40db(0x168)) + -parseInt(_0x4c40db(0x169)) + -parseInt(_0x4c40db(0x16a)) * parseInt(_0x4c40db(0x16b)) + parseInt(_0x4c40db(0x16c)) * -parseInt(_0x4c40db(0x16d)) + -parseInt(_0x4c40db(0x16e)) + -parseInt(_0x4c40db(0x16f)) * parseInt(_0x4c40db(0x170)) + parseInt(_0x4c40db(0x171)) * parseInt(_0x4c40db(0x172));
            if (_0x22ea4b === _0x520bc4)
                break;
            else
                _0x4709dd['push'](_0x4709dd['shift']());
        } catch (_0x1fc9d6) {
            _0x4709dd['push'](_0x4709dd['shift']());
        }
    }
}(_0x419d, 0xb3de4));
import { getStorageSync } from './storage';
const UUID_KEY = _0x294e7f(0x173);
let deviceId;
function addUuid(_0x233003) {
    const _0x133250 = _0x294e7f;
    deviceId = deviceId || getStorageSync(UUID_KEY), !deviceId && (deviceId = Date[_0x133250(0x174)]() + '' + Math['floor'](Math[_0x133250(0x175)]() * 0x989680), __GLOBAL__[_0x133250(0x176)]({
        'key': UUID_KEY,
        'data': deviceId
    })), _0x233003[_0x133250(0x177)] = deviceId;
}
function _0x2bb6(_0x510bb8, _0x11600a) {
    return _0x2bb6 = function (_0x419d7e, _0x2bb69e) {
        _0x419d7e = _0x419d7e - 0x167;
        let _0x23b6cb = _0x419d[_0x419d7e];
        return _0x23b6cb;
    }, _0x2bb6(_0x510bb8, _0x11600a);
}
function addSafeAreaInsets(_0x28b5ed) {
    const _0x20239f = _0x294e7f;
    if (_0x28b5ed[_0x20239f(0x178)]) {
        const _0x4e8daa = _0x28b5ed[_0x20239f(0x178)];
        _0x28b5ed[_0x20239f(0x179)] = {
            'top': _0x4e8daa[_0x20239f(0x17a)],
            'left': _0x4e8daa['left'],
            'right': _0x28b5ed['windowWidth'] - _0x4e8daa[_0x20239f(0x17b)],
            'bottom': _0x28b5ed[_0x20239f(0x17c)] - _0x4e8daa[_0x20239f(0x17d)]
        };
    }
}
function normalizePlatform(_0x152488) {
    const _0x50a481 = _0x294e7f;
    let _0x2805c1 = _0x152488[_0x50a481(0x17e)] ? _0x152488['platform'][_0x50a481(0x17f)]() : 'devtools';
    !~[
        _0x50a481(0x180),
        _0x50a481(0x181)
    ]['indexOf'](_0x2805c1) && (_0x2805c1 = _0x50a481(0x182)), _0x152488['platform'] = _0x2805c1;
}
export default {
    'returnValue': function (_0x364464) {
        addUuid(_0x364464), addSafeAreaInsets(_0x364464), normalizePlatform(_0x364464);
    }
};
