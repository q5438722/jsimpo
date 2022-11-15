import { Settings } from "../../../models/server/raw";import { callbacks } from "../../../callbacks";export function saveRegistrationData({ workspaceId: e, client_name: t, client_id: a, client_secret: i, client_secret_expires_at: l, publicKey: r, registration_client_uri: s, licenseData: n }) {
  return Promise.all([Settings.updateValueById("Register_Server", true), Settings.updateValueById("Cloud_Workspace_Id", e), Settings.updateValueById("Cloud_Workspace_Name", t), Settings.updateValueById("Cloud_Workspace_Client_Id", a), Settings.updateValueById("Cloud_Workspace_Client_Secret", i), Settings.updateValueById("Cloud_Workspace_Client_Secret_Expires_At", l), Settings.updateValueById("Cloud_Workspace_PublicKey", r), Settings.updateValueById("Cloud_Workspace_Registration_Client_Uri", s), Settings.updateValueById("Cloud_Workspace_License", n.license || "")]).then((...e) => {
    callbacks.run("workspaceLicenseChanged", n.license);return e;
  });
}
