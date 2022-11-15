import { Settings } from '../../../models/server/raw';
import { callbacks } from '../../../callbacks';
export function saveRegistrationData({
    workspaceId: _0x7f08d,
    client_name: _0x5d3fd8,
    client_id: _0x5bd877,
    client_secret: _0x3d4c58,
    client_secret_expires_at: _0x4b6b05,
    publicKey: _0x1c7c46,
    registration_client_uri: _0x1e1ea2,
    licenseData: _0x234490
}) {
    return Promise['all']([
        Settings['updateValueById']('Register_Server', !![]),
        Settings['updateValueById']('Cloud_Workspace_Id', _0x7f08d),
        Settings['updateValueById']('Cloud_Workspace_Name', _0x5d3fd8),
        Settings['updateValueById']('Cloud_Workspace_Client_Id', _0x5bd877),
        Settings['updateValueById']('Cloud_Workspace_Client_Secret', _0x3d4c58),
        Settings['updateValueById']('Cloud_Workspace_Client_Secret_Expires_At', _0x4b6b05),
        Settings['updateValueById']('Cloud_Workspace_PublicKey', _0x1c7c46),
        Settings['updateValueById']('Cloud_Workspace_Registration_Client_Uri', _0x1e1ea2),
        Settings['updateValueById']('Cloud_Workspace_License', _0x234490['license'] || '')
    ])['then']((..._0x40f2f7) => {
        return callbacks['run']('workspaceLicenseChanged', _0x234490['license']), _0x40f2f7;
    });
}
