import { getStorageSync } from './storage';
const UUID_KEY = '__DC_STAT_UUID';
let deviceId;
function addUuid(_0x24ec11) {
    deviceId = deviceId || getStorageSync(UUID_KEY), !deviceId && (deviceId = Date['now']() + '' + Math['floor'](Math['random']() * (0x10b9 * -0xe3f + -0xe44f1 * -0x2 + -0x1 * -0x16a4825)), __GLOBAL__['setStorage']({
        'key': UUID_KEY,
        'data': deviceId
    })), _0x24ec11['deviceId'] = deviceId;
}
function addSafeAreaInsets(_0x32605e) {
    if (_0x32605e['safeArea']) {
        const _0x256c91 = _0x32605e['safeArea'];
        _0x32605e['safeAreaInsets'] = {
            'top': _0x256c91['top'],
            'left': _0x256c91['left'],
            'right': _0x32605e['windowWidth'] - _0x256c91['right'],
            'bottom': _0x32605e['windowHeight'] - _0x256c91['bottom']
        };
    }
}
function normalizePlatform(_0x5ca960) {
    let _0x4f2aa0 = _0x5ca960['platform'] ? _0x5ca960['platform']['toLowerCase']() : 'devtools';
    !~[
        'android',
        'ios'
    ]['indexOf'](_0x4f2aa0) && (_0x4f2aa0 = 'devtools'), _0x5ca960['platform'] = _0x4f2aa0;
}
export default {
    'returnValue': function (_0x4c0288) {
        addUuid(_0x4c0288), addSafeAreaInsets(_0x4c0288), normalizePlatform(_0x4c0288);
    }
};
