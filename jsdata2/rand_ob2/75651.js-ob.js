const _0x1255 = [
    '409877FBLqKR',
    '1ChpdKK',
    '54695LVCILZ',
    '3697ZfqSub',
    'view-livechat-manager',
    'error-not-authorized',
    'findByIds',
    'Livechat_webhookUrl',
    'Livechat_secret_token',
    'Livechat_webhook_on_start',
    'Livechat_webhook_on_close',
    'Livechat_webhook_on_forward',
    'Livechat_webhook_on_offline_msg',
    'Livechat_webhook_on_visitor_message',
    'Livechat_webhook_on_agent_message',
    'toArray',
    '31991gHhPBL',
    '1ohwMKz',
    '199470wIGIAJ',
    '257231ENrZUz',
    '63FYYDOb',
    '1693vOHvGn'
];
(function (_0x79464b, _0x10d871) {
    const _0xe3b54d = _0x1e38;
    while (!![]) {
        try {
            const _0x91506e = -parseInt(_0xe3b54d(0x1d5)) * -parseInt(_0xe3b54d(0x1d6)) + parseInt(_0xe3b54d(0x1d7)) + parseInt(_0xe3b54d(0x1d8)) + -parseInt(_0xe3b54d(0x1d9)) * -parseInt(_0xe3b54d(0x1da)) + -parseInt(_0xe3b54d(0x1db)) + parseInt(_0xe3b54d(0x1dc)) * parseInt(_0xe3b54d(0x1dd)) + -parseInt(_0xe3b54d(0x1de));
            if (_0x91506e === _0x10d871)
                break;
            else
                _0x79464b['push'](_0x79464b['shift']());
        } catch (_0x4f0094) {
            _0x79464b['push'](_0x79464b['shift']());
        }
    }
}(_0x1255, 0x39bb8));
function _0x1e38(_0x3e8c1c, _0x53e0b9) {
    return _0x1e38 = function (_0x1255e0, _0x1e384b) {
        _0x1255e0 = _0x1255e0 - 0x1d5;
        let _0x4a91d6 = _0x1255[_0x1255e0];
        return _0x4a91d6;
    }, _0x1e38(_0x3e8c1c, _0x53e0b9);
}
import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { Settings } from '../../../../models/server/raw';
export async function findIntegrationSettings({userId: _0x2edd54}) {
    const _0x499471 = _0x1e38;
    if (!await hasPermissionAsync(_0x2edd54, _0x499471(0x1df)))
        throw new Error(_0x499471(0x1e0));
    const _0xc2ecdc = await Settings[_0x499471(0x1e1)]([
        _0x499471(0x1e2),
        _0x499471(0x1e3),
        _0x499471(0x1e4),
        _0x499471(0x1e5),
        'Livechat_webhook_on_chat_taken',
        'Livechat_webhook_on_chat_queued',
        _0x499471(0x1e6),
        _0x499471(0x1e7),
        _0x499471(0x1e8),
        _0x499471(0x1e9)
    ])[_0x499471(0x1ea)]();
    return { 'settings': _0xc2ecdc };
}
