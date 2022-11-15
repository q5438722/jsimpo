const _0x52b9 = [
    'Livechat_webhook_on_chat_queued',
    'Livechat_webhook_on_offline_msg',
    'ToMtx',
    'sqKfL',
    'UNSeh',
    'mVpaF',
    'tgjLL',
    'wBgTV',
    'CJhuc',
    'lVZnH',
    'NWiWJ',
    'Livechat_webhook_on_forward',
    'ozXvv',
    'Livechat_webhook_on_visitor_message',
    'dYOtJ',
    '15956NKgJnK',
    '47LMforb',
    '821293qLJnyY',
    '1302252GyczVg',
    '691701HafBYI',
    '18061djuWKc',
    '13uIiidQ',
    '250260FWxTFw',
    '144nqdDys',
    '11958aIPmdN',
    'view-livechat-manager',
    'Livechat_secret_token',
    'Livechat_webhook_on_start',
    'Livechat_webhook_on_chat_taken'
];
(function (_0xd68a07, _0xfa1b83) {
    const _0x3d181e = _0x3be1;
    while (!![]) {
        try {
            const _0x30460a = parseInt(_0x3d181e(0xe0)) * -parseInt(_0x3d181e(0xe1)) + -parseInt(_0x3d181e(0xe2)) + parseInt(_0x3d181e(0xe3)) + -parseInt(_0x3d181e(0xe4)) + parseInt(_0x3d181e(0xe5)) * parseInt(_0x3d181e(0xe6)) + -parseInt(_0x3d181e(0xe7)) + parseInt(_0x3d181e(0xe8)) * parseInt(_0x3d181e(0xe9));
            if (_0x30460a === _0xfa1b83)
                break;
            else
                _0xd68a07['push'](_0xd68a07['shift']());
        } catch (_0x183d67) {
            _0xd68a07['push'](_0xd68a07['shift']());
        }
    }
}(_0x52b9, 0x8612e + -0x6ec76 + 0x9ec9b * 0x1));
function _0x3be1(_0x276769, _0x4daeab) {
    return _0x3be1 = function (_0x149765, _0x5d5250) {
        _0x149765 = _0x149765 - (0xd * 0x1a7 + -0xf * -0x3e + -0x4d9 * 0x5);
        let _0x31761c = _0x52b9[_0x149765];
        return _0x31761c;
    }, _0x3be1(_0x276769, _0x4daeab);
}
import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { Settings } from '../../../../models/server/raw';
export async function findIntegrationSettings({userId: _0x47dcbe}) {
    const _0x5a63aa = _0x3be1, _0x351e65 = {
            'ToMtx': function (_0x4d38bf, _0x17a4ff, _0x232e96) {
                return _0x4d38bf(_0x17a4ff, _0x232e96);
            },
            'sqKfL': _0x5a63aa(0xea),
            'UNSeh': 'error-not-authorized',
            'mVpaF': 'Livechat_webhookUrl',
            'tgjLL': _0x5a63aa(0xeb),
            'wBgTV': _0x5a63aa(0xec),
            'CJhuc': 'Livechat_webhook_on_close',
            'lVZnH': _0x5a63aa(0xed),
            'NWiWJ': _0x5a63aa(0xee),
            'ozXvv': _0x5a63aa(0xef),
            'dYOtJ': 'Livechat_webhook_on_agent_message'
        };
    if (!await _0x351e65[_0x5a63aa(0xf0)](hasPermissionAsync, _0x47dcbe, _0x351e65[_0x5a63aa(0xf1)]))
        throw new Error(_0x351e65[_0x5a63aa(0xf2)]);
    const _0x45a76a = await Settings['findByIds']([
        _0x351e65[_0x5a63aa(0xf3)],
        _0x351e65[_0x5a63aa(0xf4)],
        _0x351e65[_0x5a63aa(0xf5)],
        _0x351e65[_0x5a63aa(0xf6)],
        _0x351e65[_0x5a63aa(0xf7)],
        _0x351e65[_0x5a63aa(0xf8)],
        _0x5a63aa(0xf9),
        _0x351e65[_0x5a63aa(0xfa)],
        _0x5a63aa(0xfb),
        _0x351e65[_0x5a63aa(0xfc)]
    ])['toArray']();
    return { 'settings': _0x45a76a };
}
