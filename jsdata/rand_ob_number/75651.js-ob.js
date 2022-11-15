import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { Settings } from '../../../../models/server/raw';
export async function findIntegrationSettings({userId: _0x35260a}) {
    if (!await hasPermissionAsync(_0x35260a, 'view-livechat-manager'))
        throw new Error('error-not-authorized');
    const _0x1c31db = await Settings['findByIds']([
        'Livechat_webhookUrl',
        'Livechat_secret_token',
        'Livechat_webhook_on_start',
        'Livechat_webhook_on_close',
        'Livechat_webhook_on_chat_taken',
        'Livechat_webhook_on_chat_queued',
        'Livechat_webhook_on_forward',
        'Livechat_webhook_on_offline_msg',
        'Livechat_webhook_on_visitor_message',
        'Livechat_webhook_on_agent_message'
    ])['toArray']();
    return { 'settings': _0x1c31db };
}
