const _0x1a0c = ['1ZTVQFb', '867733GjWjmq', '5044691BOwBUP', 'view-livechat-manager', 'Livechat_webhookUrl', 'Livechat_secret_token', 'Livechat_webhook_on_start', 'Livechat_webhook_on_close', 'Livechat_webhook_on_chat_taken', 'Livechat_webhook_on_chat_queued', 'Livechat_webhook_on_forward', 'HppKu', 'jrElu', 'OVvJM', 'lOEao', 'vawkS', 'Livechat_webhook_on_offline_msg', 'Livechat_webhook_on_agent_message', 'toArray', '59GpgstB', '24995IXOQVG', '44518yMcGLS', '26ZQeUeQ', '1254866CInzVc', '1sRXVVf', '754GcFmXm', '421tRcIry', '902962TeAxoF'];

function _0x4776(_0xd93e2b, _0x36a76a) {
    return _0x4776 = function (_0x19cfc0, _0x1c164b) {
        _0x19cfc0 = _0x19cfc0 - 269;
        const _0x1583ae = _0x1a0c[_0x19cfc0];

        return _0x1583ae;
    }, _0x4776(_0xd93e2b, _0x36a76a);
}
(function (_0x470e3d, _0x4760ff) {
    const _0x584080 = _0x4776;

    while (true) {
        try {
            const _0x4e1d38 = parseInt(_0x584080(0x10d)) * parseInt(_0x584080(0x10e)) + parseInt(_0x584080(0x10f)) * parseInt(_0x584080(0x110)) + parseInt(_0x584080(0x111)) * parseInt(_0x584080(0x112)) + -parseInt(_0x584080(0x113)) * -parseInt(_0x584080(0x114)) + parseInt(_0x584080(0x115)) + parseInt(_0x584080(0x116)) * parseInt(_0x584080(0x117)) + -parseInt(_0x584080(0x118));

            if (_0x4e1d38 === _0x4760ff) break;else _0x470e3d.push(_0x470e3d.shift());
        } catch (_0x2b6cb9) {
            _0x470e3d.push(_0x470e3d.shift());
        }
    }
})(_0x1a0c, 930477);
import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { Settings } from '../../../../models/server/raw';
export async function findIntegrationSettings({ userId: _0x11085b }) {
    const _0xb1d9ea = _0x4776;
    const _0x28d386 = {
        'pIcMx': function (_0x31c72e, _0x237c9f, _0x162a0b) {
            return _0x31c72e(_0x237c9f, _0x162a0b);
        },
        'zyQIt': _0xb1d9ea(0x119),
        'HppKu': _0xb1d9ea(0x11a),
        'jrElu': _0xb1d9ea(0x11b),
        'FUHlU': _0xb1d9ea(0x11c),
        'OVvJM': _0xb1d9ea(0x11d),
        'lOEao': _0xb1d9ea(0x11e),
        'vawkS': _0xb1d9ea(0x11f),
        'zQGvu': _0xb1d9ea(0x120)
    };

    if (!(await _0x28d386.pIcMx(hasPermissionAsync, _0x11085b, _0x28d386.zyQIt))) throw new Error('error-not-authorized');

    const _0x3afe4c = await Settings.findByIds([_0x28d386[_0xb1d9ea(0x121)], _0x28d386[_0xb1d9ea(0x122)], _0x28d386.FUHlU, _0x28d386[_0xb1d9ea(0x123)], _0x28d386[_0xb1d9ea(0x124)], _0x28d386[_0xb1d9ea(0x125)], _0x28d386.zQGvu, _0xb1d9ea(0x126), 'Livechat_webhook_on_visitor_message', _0xb1d9ea(0x127)])[_0xb1d9ea(0x128)]();

    return { 'settings': _0x3afe4c };
}
