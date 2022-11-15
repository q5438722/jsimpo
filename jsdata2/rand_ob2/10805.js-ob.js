const _0x4b9f = [
    '51969Zzqges',
    '2CuCCEh',
    '1nREqnU',
    '1371353DcpdYW',
    '504055GUrnmN',
    '1160503rGGuas',
    '55411VrIghn',
    '11DGZAzy',
    '2067552muSAiY',
    '1485717MEZZop'
];
(function (_0x28b8b7, _0x564d21) {
    const _0x328569 = _0x4a70;
    while (!![]) {
        try {
            const _0x543008 = -parseInt(_0x328569(0x193)) + -parseInt(_0x328569(0x194)) * -parseInt(_0x328569(0x195)) + parseInt(_0x328569(0x196)) * parseInt(_0x328569(0x197)) + parseInt(_0x328569(0x198)) + -parseInt(_0x328569(0x199)) + -parseInt(_0x328569(0x19a)) * parseInt(_0x328569(0x19b)) + parseInt(_0x328569(0x19c));
            if (_0x543008 === _0x564d21)
                break;
            else
                _0x28b8b7['push'](_0x28b8b7['shift']());
        } catch (_0x5b74b9) {
            _0x28b8b7['push'](_0x28b8b7['shift']());
        }
    }
}(_0x4b9f, 0xc1275));
import { dispatch } from '../../app';
function _0x4a70(_0x3b5875, _0x30bdd2) {
    return _0x4a70 = function (_0x4b9fa7, _0x4a7086) {
        _0x4b9fa7 = _0x4b9fa7 - 0x193;
        let _0x193a6f = _0x4b9f[_0x4b9fa7];
        return _0x193a6f;
    }, _0x4a70(_0x3b5875, _0x30bdd2);
}
import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from './constants';
let nextNotificationId = 0x0;
export function showNotification(_0x5c245f, _0x37637f) {
    return nextNotificationId++, (_0x3b0aa2 => {
        setTimeout(() => {
            dispatch(hideNotification(_0x3b0aa2));
        }, 0x9c4);
    })(nextNotificationId), {
        'type': SHOW_NOTIFICATION,
        'message': _0x5c245f,
        'status': _0x37637f,
        'id': nextNotificationId
    };
}
export function hideNotification(_0x4fe921) {
    return {
        'type': HIDE_NOTIFICATION,
        'id': _0x4fe921
    };
}
