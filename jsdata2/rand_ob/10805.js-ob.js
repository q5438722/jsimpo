const _0x8321 = [
    '206130zEdRsI',
    '219950EevlVb',
    '14jsiDCy',
    '14549KwjmBF',
    '305896EtabRy',
    'RMCbI',
    'dSZgN',
    'HmYmo',
    '89MNriwM',
    '5828BqxQmx',
    '455413EjDujk',
    '229607UcfQSG'
];
(function (_0x46ee5e, _0x3c35af) {
    const _0x202d95 = _0x265d;
    while (!![]) {
        try {
            const _0x162af5 = -parseInt(_0x202d95(0xbb)) * parseInt(_0x202d95(0xbc)) + parseInt(_0x202d95(0xbd)) + parseInt(_0x202d95(0xbe)) + -parseInt(_0x202d95(0xbf)) + parseInt(_0x202d95(0xc0)) + -parseInt(_0x202d95(0xc1)) * parseInt(_0x202d95(0xc2)) + parseInt(_0x202d95(0xc3));
            if (_0x162af5 === _0x3c35af)
                break;
            else
                _0x46ee5e['push'](_0x46ee5e['shift']());
        } catch (_0x41018a) {
            _0x46ee5e['push'](_0x46ee5e['shift']());
        }
    }
}(_0x8321, -0x647e4 + -0x1 * 0xab2d + -0x8b5 * -0x14b));
import { dispatch } from '../../app';
import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from './constants';
function _0x265d(_0x119cf3, _0x52d141) {
    return _0x265d = function (_0x139e5a, _0x2d32e5) {
        _0x139e5a = _0x139e5a - (-0x1d60 + -0x159b + -0x33b6 * -0x1);
        let _0x29d988 = _0x8321[_0x139e5a];
        return _0x29d988;
    }, _0x265d(_0x119cf3, _0x52d141);
}
let nextNotificationId = -0x61 * -0x62 + -0xe9b * -0x1 + -0xa59 * 0x5;
export function showNotification(_0x7f8a1a, _0x293d65) {
    const _0x1513a0 = {
        'RMCbI': function (_0x31e7ad, _0x2740fa) {
            return _0x31e7ad(_0x2740fa);
        }
    };
    return nextNotificationId++, (_0xbaf2db => {
        const _0xe8e4f6 = {
            'dSZgN': function (_0x5a8719, _0x3c6512) {
                const _0xdb0c4f = _0x265d;
                return _0x1513a0[_0xdb0c4f(0xc4)](_0x5a8719, _0x3c6512);
            },
            'HmYmo': function (_0x212397, _0x1ca9ab) {
                const _0x383f4d = _0x265d;
                return _0x1513a0[_0x383f4d(0xc4)](_0x212397, _0x1ca9ab);
            }
        };
        setTimeout(() => {
            const _0x4e10dc = _0x265d;
            _0xe8e4f6[_0x4e10dc(0xc5)](dispatch, _0xe8e4f6[_0x4e10dc(0xc6)](hideNotification, _0xbaf2db));
        }, 0x2 * 0x9d4 + -0x1 * 0x24f2 + -0x1b0e * -0x1);
    })(nextNotificationId), {
        'type': SHOW_NOTIFICATION,
        'message': _0x7f8a1a,
        'status': _0x293d65,
        'id': nextNotificationId
    };
}
export function hideNotification(_0x280d0d) {
    return {
        'type': HIDE_NOTIFICATION,
        'id': _0x280d0d
    };
}
