import { getStorageSync } from './storage';
const UUID_KEY = '__DC_STAT_UUID';
let deviceId;
function addUuid(_0x588081) {
    const _0x483895 = {
        'JUbdS': function (_0x3b4899, _0x2f9f09) {
            return _0x3b4899(_0x2f9f09);
        },
        'GhLsr': function (_0x2aacaa, _0x15d189) {
            return _0x2aacaa + _0x15d189;
        },
        'WuUDh': function (_0x1444be, _0x292af8) {
            return _0x1444be + _0x292af8;
        },
        'kZGov': function (_0x463de4, _0x3f7a95) {
            return _0x463de4 * _0x3f7a95;
        }
    };
    deviceId = deviceId || _0x483895['JUbdS'](getStorageSync, UUID_KEY), !deviceId && (deviceId = _0x483895['GhLsr'](_0x483895['WuUDh'](Date['now'](), ''), Math['floor'](_0x483895['kZGov'](Math['random'](), 0x989680))), __GLOBAL__['setStorage']({
        'key': UUID_KEY,
        'data': deviceId
    })), _0x588081['deviceId'] = deviceId;
}
function addSafeAreaInsets(_0xa0f10c) {
    const _0x31c746 = {
        'qYlkp': function (_0x2a9759, _0x3232a9) {
            return _0x2a9759 - _0x3232a9;
        }
    };
    if (_0xa0f10c['safeArea']) {
        const _0x3298e1 = _0xa0f10c['safeArea'];
        _0xa0f10c['safeAreaInsets'] = {
            'top': _0x3298e1['top'],
            'left': _0x3298e1['left'],
            'right': _0x31c746['qYlkp'](_0xa0f10c['windowWidth'], _0x3298e1['right']),
            'bottom': _0x31c746['qYlkp'](_0xa0f10c['windowHeight'], _0x3298e1['bottom'])
        };
    }
}
function normalizePlatform(_0x1bbabc) {
    const _0x171a87 = {
        'ABAUO': 'devtools',
        'iDZpM': 'android',
        'bEQtb': 'ios'
    };
    let _0x4b7851 = _0x1bbabc['platform'] ? _0x1bbabc['platform']['toLowerCase']() : _0x171a87['ABAUO'];
    !~[
        _0x171a87['iDZpM'],
        _0x171a87['bEQtb']
    ]['indexOf'](_0x4b7851) && (_0x4b7851 = _0x171a87['ABAUO']), _0x1bbabc['platform'] = _0x4b7851;
}
export default {
    'returnValue': function (_0x3ae470) {
        const _0x29f689 = {
            'SHmzH': function (_0x2f53fe, _0x302777) {
                return _0x2f53fe(_0x302777);
            },
            'ybUiu': function (_0x16297d, _0x3c864c) {
                return _0x16297d(_0x3c864c);
            }
        };
        _0x29f689['SHmzH'](addUuid, _0x3ae470), _0x29f689['SHmzH'](addSafeAreaInsets, _0x3ae470), _0x29f689['ybUiu'](normalizePlatform, _0x3ae470);
    }
};
