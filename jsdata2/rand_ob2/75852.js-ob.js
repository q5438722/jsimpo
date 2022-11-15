var _0x196c = [
    'Cloud_Workspace_Name',
    'Cloud_Workspace_Client_Secret',
    'Cloud_Workspace_Client_Secret_Expires_At',
    'Cloud_Workspace_PublicKey',
    'Cloud_Workspace_Registration_Client_Uri',
    'Cloud_Workspace_License',
    'license',
    'then',
    'run',
    'workspaceLicenseChanged',
    '89zbRIbs',
    '2571xEhDwY',
    '109656VovfeV',
    '173453UswSvG',
    '1emCcKQ',
    '4XfxVFS',
    '17526pNfvjI',
    '322980SxAggE',
    '7EgQICc',
    '21405MrvWPc',
    '272798tETBES',
    'all',
    'updateValueById'
];
(function (_0x30dcb9, _0x311618) {
    var _0x42d476 = _0x231c;
    while (!![]) {
        try {
            var _0xd5b5bc = -parseInt(_0x42d476(0x186)) * -parseInt(_0x42d476(0x187)) + -parseInt(_0x42d476(0x188)) + -parseInt(_0x42d476(0x189)) * -parseInt(_0x42d476(0x18a)) + parseInt(_0x42d476(0x18b)) * parseInt(_0x42d476(0x18c)) + -parseInt(_0x42d476(0x18d)) + parseInt(_0x42d476(0x18e)) * -parseInt(_0x42d476(0x18f)) + parseInt(_0x42d476(0x190));
            if (_0xd5b5bc === _0x311618)
                break;
            else
                _0x30dcb9['push'](_0x30dcb9['shift']());
        } catch (_0x41855f) {
            _0x30dcb9['push'](_0x30dcb9['shift']());
        }
    }
}(_0x196c, 0x27b8f));
function _0x231c(_0x49c986, _0xdbe8a9) {
    return _0x231c = function (_0x196c37, _0x231c69) {
        _0x196c37 = _0x196c37 - 0x186;
        var _0x3c2581 = _0x196c[_0x196c37];
        return _0x3c2581;
    }, _0x231c(_0x49c986, _0xdbe8a9);
}
import { Settings } from '../../../models/server/raw';
import { callbacks } from '../../../callbacks';
export function saveRegistrationData({
    workspaceId: _0x4d9223,
    client_name: _0x5d362b,
    client_id: _0x4c4a65,
    client_secret: _0x1183d0,
    client_secret_expires_at: _0x43c51e,
    publicKey: _0x5e31c5,
    registration_client_uri: _0x4831fb,
    licenseData: _0x53776e
}) {
    var _0x125808 = _0x231c;
    return Promise[_0x125808(0x191)]([
        Settings[_0x125808(0x192)]('Register_Server', !![]),
        Settings['updateValueById']('Cloud_Workspace_Id', _0x4d9223),
        Settings[_0x125808(0x192)](_0x125808(0x193), _0x5d362b),
        Settings[_0x125808(0x192)]('Cloud_Workspace_Client_Id', _0x4c4a65),
        Settings[_0x125808(0x192)](_0x125808(0x194), _0x1183d0),
        Settings[_0x125808(0x192)](_0x125808(0x195), _0x43c51e),
        Settings['updateValueById'](_0x125808(0x196), _0x5e31c5),
        Settings['updateValueById'](_0x125808(0x197), _0x4831fb),
        Settings[_0x125808(0x192)](_0x125808(0x198), _0x53776e[_0x125808(0x199)] || '')
    ])[_0x125808(0x19a)]((..._0x53d7e1) => {
        var _0x3b95fd = _0x125808;
        return callbacks[_0x3b95fd(0x19b)](_0x3b95fd(0x19c), _0x53776e[_0x3b95fd(0x199)]), _0x53d7e1;
    });
}
