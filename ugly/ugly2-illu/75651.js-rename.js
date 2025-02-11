import { hasPermissionAsync } from "../../../../authorization/server/functions/hasPermission";import { Settings } from "../../../../models/server/raw";export async function findIntegrationSettings({ userId: e }) {
  if (!(await hasPermissionAsync(e, "view-livechat-manager"))) {
    throw new Error("error-not-authorized");
  }const o = await Settings.findByIds(["Livechat_webhookUrl", "Livechat_secret_token", "Livechat_webhook_on_start", "Livechat_webhook_on_close", "Livechat_webhook_on_chat_taken", "Livechat_webhook_on_chat_queued", "Livechat_webhook_on_forward", "Livechat_webhook_on_offline_msg", "Livechat_webhook_on_visitor_message", "Livechat_webhook_on_agent_message"]).toArray();
  return { settings: o };
}
