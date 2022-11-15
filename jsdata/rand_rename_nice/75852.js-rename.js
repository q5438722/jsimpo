'use strict';
import{
  Settings as Settings
}from "../../../models/server/raw";
import{
  callbacks as callbacks
}from "../../../callbacks";
function calculateOfflineData({
  workspaceId : id,
  client_name : value,
  client_id : tmpPathFolder,
  client_secret : requiredAuths,
  client_secret_expires_at : purpose,
  publicKey : subjectPublicKey,
  registration_client_uri : writeTimeout,
  licenseData : response
}) {
  return Promise.all([Settings.updateValueById("Register_Server", true), Settings.updateValueById("Cloud_Workspace_Id", id), Settings.updateValueById("Cloud_Workspace_Name", value), Settings.updateValueById("Cloud_Workspace_Client_Id", tmpPathFolder), Settings.updateValueById("Cloud_Workspace_Client_Secret", requiredAuths), Settings.updateValueById("Cloud_Workspace_Client_Secret_Expires_At", purpose), Settings.updateValueById("Cloud_Workspace_PublicKey", subjectPublicKey), Settings.updateValueById("Cloud_Workspace_Registration_Client_Uri", 
  writeTimeout), Settings.updateValueById("Cloud_Workspace_License", response.license || "")]).then((....num_const) => {
    callbacks.run("workspaceLicenseChanged", response.license);
    return .num_const;
  });
}
export{
  calculateOfflineData as saveRegistrationData
};

