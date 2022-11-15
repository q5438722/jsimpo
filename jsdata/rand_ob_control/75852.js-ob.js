import { Settings } from '../../../models/server/raw';
import { callbacks } from '../../../callbacks';
export function saveRegistrationData({
    workspaceId: _0x57d839,
    client_name: _0x42b934,
    client_id: _0x1750dc,
    client_secret: _0xdb820d,
    client_secret_expires_at: _0x5d27e3,
    publicKey: _0x464fa8,
    registration_client_uri: _0x22d9b5,
    licenseData: _0x1d0db4
}) {
    var _0x2863f8 = {
        'OdrvC': 'workspaceLicenseChanged',
        'SrMMP': 'Register_Server',
        'OffTl': 'Cloud_Workspace_Id',
        'JAANj': 'Cloud_Workspace_Name',
        'sTNhp': 'Cloud_Workspace_Client_Id',
        'qVonG': 'Cloud_Workspace_Client_Secret',
        'ojdAK': 'Cloud_Workspace_Client_Secret_Expires_At',
        'tKVgo': 'Cloud_Workspace_PublicKey',
        'iSzQC': 'Cloud_Workspace_Registration_Client_Uri',
        'pOelm': 'Cloud_Workspace_License'
    };
    return Promise['all']([
        Settings['updateValueById'](_0x2863f8['SrMMP'], !![]),
        Settings['updateValueById'](_0x2863f8['OffTl'], _0x57d839),
        Settings['updateValueById'](_0x2863f8['JAANj'], _0x42b934),
        Settings['updateValueById'](_0x2863f8['sTNhp'], _0x1750dc),
        Settings['updateValueById'](_0x2863f8['qVonG'], _0xdb820d),
        Settings['updateValueById'](_0x2863f8['ojdAK'], _0x5d27e3),
        Settings['updateValueById'](_0x2863f8['tKVgo'], _0x464fa8),
        Settings['updateValueById'](_0x2863f8['iSzQC'], _0x22d9b5),
        Settings['updateValueById'](_0x2863f8['pOelm'], _0x1d0db4['license'] || '')
    ])['then']((..._0x31b1d6) => {
        return callbacks['run'](_0x2863f8['OdrvC'], _0x1d0db4['license']), _0x31b1d6;
    });
}
