const _0x4a67 = [
    '188173zLfSCa',
    '1540KBUnBC',
    '1015VTcLnz',
    '__DC_STAT_UUID',
    'now',
    'random',
    'setStorage',
    'deviceId',
    'safeArea',
    'safeAreaInsets',
    'left',
    'windowWidth',
    'windowHeight',
    'bottom',
    'platform',
    'toLowerCase',
    'devtools',
    'ios',
    'indexOf',
    '123330MJUtrh',
    '36257GJicvu',
    '22vdQWje',
    '779145TBPevN',
    '234394EAzAXs',
    '209434dyrWvF',
    '2wWrHiM'
];
const _0x339a5d = _0x44fc;
(function (_0x3c051e, _0x434011) {
    const _0x41bf29 = _0x44fc;
    while (!![]) {
        try {
            const _0x132a18 = parseInt(_0x41bf29(0xbc)) + -parseInt(_0x41bf29(0xbd)) * parseInt(_0x41bf29(0xbe)) + -parseInt(_0x41bf29(0xbf)) + -parseInt(_0x41bf29(0xc0)) + parseInt(_0x41bf29(0xc1)) + parseInt(_0x41bf29(0xc2)) * parseInt(_0x41bf29(0xc3)) + parseInt(_0x41bf29(0xc4)) * parseInt(_0x41bf29(0xc5));
            if (_0x132a18 === _0x434011)
                break;
            else
                _0x3c051e['push'](_0x3c051e['shift']());
        } catch (_0x281bc9) {
            _0x3c051e['push'](_0x3c051e['shift']());
        }
    }
}(_0x4a67, 0x708d9));
import { getStorageSync } from './storage';
const UUID_KEY = _0x339a5d(0xc6);
let deviceId;
function addUuid(_0x2c6842) {
    const _0x1dd65e = _0x339a5d;
    deviceId = deviceId || getStorageSync(UUID_KEY), !deviceId && (deviceId = Date[_0x1dd65e(0xc7)]() + '' + Math['floor'](Math[_0x1dd65e(0xc8)]() * 0x989680), __GLOBAL__[_0x1dd65e(0xc9)]({
        'key': UUID_KEY,
        'data': deviceId
    })), _0x2c6842[_0x1dd65e(0xca)] = deviceId;
}
function addSafeAreaInsets(_0x3d53a6) {
    const _0x440c4b = _0x339a5d;
    if (_0x3d53a6[_0x440c4b(0xcb)]) {
        const _0xc060b4 = _0x3d53a6[_0x440c4b(0xcb)];
        _0x3d53a6[_0x440c4b(0xcc)] = {
            'top': _0xc060b4['top'],
            'left': _0xc060b4[_0x440c4b(0xcd)],
            'right': _0x3d53a6[_0x440c4b(0xce)] - _0xc060b4['right'],
            'bottom': _0x3d53a6[_0x440c4b(0xcf)] - _0xc060b4[_0x440c4b(0xd0)]
        };
    }
}
function _0x44fc(_0x494f56, _0x4f6ff8) {
    return _0x44fc = function (_0x4a671b, _0x44fc41) {
        _0x4a671b = _0x4a671b - 0xbc;
        let _0x1b7712 = _0x4a67[_0x4a671b];
        return _0x1b7712;
    }, _0x44fc(_0x494f56, _0x4f6ff8);
}
function normalizePlatform(_0x21d269) {
    const _0x2cebe1 = _0x339a5d;
    let _0x519920 = _0x21d269[_0x2cebe1(0xd1)] ? _0x21d269[_0x2cebe1(0xd1)][_0x2cebe1(0xd2)]() : _0x2cebe1(0xd3);
    !~[
        'android',
        _0x2cebe1(0xd4)
    ][_0x2cebe1(0xd5)](_0x519920) && (_0x519920 = _0x2cebe1(0xd3)), _0x21d269[_0x2cebe1(0xd1)] = _0x519920;
}
export default {
    'returnValue': function (_0x23b4aa) {
        addUuid(_0x23b4aa), addSafeAreaInsets(_0x23b4aa), normalizePlatform(_0x23b4aa);
    }
};
