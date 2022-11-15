const _0x4279 = [
    'Livechat_webhook_on_forward',
    'Livechat_webhook_on_offline_msg',
    'Livechat_webhook_on_visitor_message',
    'Livechat_webhook_on_agent_message',
    'toArray',
    '6508KaNjHU',
    '1TZuszK',
    '3DZXEXG',
    '24986Wrtjhr',
    '94753fIhwvQ',
    '3rQRPgB',
    '69513yiLbQF',
    '1myoDSX',
    '3593dixEyZ',
    '83reHPwX',
    '71nmKogz',
    '4847UOWvEq',
    '96ROOFQC',
    '1593cvgITX',
    'view-livechat-manager',
    'findByIds',
    'Livechat_webhookUrl',
    'Livechat_secret_token',
    'Livechat_webhook_on_start',
    'Livechat_webhook_on_chat_queued'
];
(function (_0x34ea40, _0x398335) {
    const _0x4bd828 = _0x3ad8;
    while (!![]) {
        try {
            const _0x39f423 = parseInt(_0x4bd828(0x1cd)) * parseInt(_0x4bd828(0x1ce)) + -parseInt(_0x4bd828(0x1cf)) * -parseInt(_0x4bd828(0x1d0)) + -parseInt(_0x4bd828(0x1d1)) * -parseInt(_0x4bd828(0x1d2)) + parseInt(_0x4bd828(0x1d3)) * -parseInt(_0x4bd828(0x1d4)) + parseInt(_0x4bd828(0x1d5)) * -parseInt(_0x4bd828(0x1d6)) + parseInt(_0x4bd828(0x1d7)) * parseInt(_0x4bd828(0x1d8)) + -parseInt(_0x4bd828(0x1d9)) * parseInt(_0x4bd828(0x1da));
            if (_0x39f423 === _0x398335)
                break;
            else
                _0x34ea40['push'](_0x34ea40['shift']());
        } catch (_0x1df150) {
            _0x34ea40['push'](_0x34ea40['shift']());
        }
    }
}(_0x4279, 0x2e312));
import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { Settings } from '../../../../models/server/raw';
function _0x3ad8(_0x2c39b5, _0x4fc7c5) {
    return _0x3ad8 = function (_0x42798c, _0x3ad89b) {
        _0x42798c = _0x42798c - 0x1cd;
        let _0x4f0369 = _0x4279[_0x42798c];
        return _0x4f0369;
    }, _0x3ad8(_0x2c39b5, _0x4fc7c5);
}
export async function findIntegrationSettings({userId: _0x5a35fe}) {
    const _0x4ba344 = _0x3ad8;
    if (!await hasPermissionAsync(_0x5a35fe, _0x4ba344(0x1db)))
        throw new Error('error-not-authorized');
    const _0x1ec146 = await Settings[_0x4ba344(0x1dc)]([
        _0x4ba344(0x1dd),
        _0x4ba344(0x1de),
        _0x4ba344(0x1df),
        'Livechat_webhook_on_close',
        'Livechat_webhook_on_chat_taken',
        _0x4ba344(0x1e0),
        _0x4ba344(0x1e1),
        _0x4ba344(0x1e2),
        _0x4ba344(0x1e3),
        _0x4ba344(0x1e4)
    ])[_0x4ba344(0x1e5)]();
    return { 'settings': _0x1ec146 };
}
