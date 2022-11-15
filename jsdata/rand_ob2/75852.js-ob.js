var _0x324b = [
    'Register_Server',
    'Cloud_Workspace_Id',
    'Cloud_Workspace_Name',
    'Cloud_Workspace_Client_Id',
    'Cloud_Workspace_Client_Secret',
    'Cloud_Workspace_Client_Secret_Expires_At',
    'Cloud_Workspace_PublicKey',
    'Cloud_Workspace_License',
    'license',
    'run',
    'workspaceLicenseChanged',
    '124404OWtCfu',
    '704593KArrPO',
    '195KROxIi',
    '4660EcdHOc',
    '116046QEttlR',
    '266581vHSEBB',
    '1318454PzjMYE',
    '1358867UUrPAa',
    '1ZKAqvC',
    'all',
    'updateValueById'
];
function _0x2947(_0x498dc8, _0x423197) {
    return _0x2947 = function (_0x324baf, _0x2947ab) {
        _0x324baf = _0x324baf - 0x153;
        var _0x301c2e = _0x324b[_0x324baf];
        return _0x301c2e;
    }, _0x2947(_0x498dc8, _0x423197);
}
(function (_0x41cc56, _0x21d37d) {
    var _0x53f67c = _0x2947;
    while (!![]) {
        try {
            var _0x1ea8e4 = -parseInt(_0x53f67c(0x153)) + -parseInt(_0x53f67c(0x154)) + parseInt(_0x53f67c(0x155)) * -parseInt(_0x53f67c(0x156)) + parseInt(_0x53f67c(0x157)) + -parseInt(_0x53f67c(0x158)) + parseInt(_0x53f67c(0x159)) + parseInt(_0x53f67c(0x15a)) * parseInt(_0x53f67c(0x15b));
            if (_0x1ea8e4 === _0x21d37d)
                break;
            else
                _0x41cc56['push'](_0x41cc56['shift']());
        } catch (_0x2e71ec) {
            _0x41cc56['push'](_0x41cc56['shift']());
        }
    }
}(_0x324b, 0xc0a61));
import { Settings } from '../../../models/server/raw';
import { callbacks } from '../../../callbacks';
export function saveRegistrationData({
    workspaceId: _0x5cb7bc,
    client_name: _0x15e025,
    client_id: _0x20fbbf,
    client_secret: _0x4a4add,
    client_secret_expires_at: _0x59b831,
    publicKey: _0x28e4e1,
    registration_client_uri: _0x10b1b8,
    licenseData: _0x35fa64
}) {
    var _0x4ad779 = _0x2947;
    return Promise[_0x4ad779(0x15c)]([
        Settings[_0x4ad779(0x15d)](_0x4ad779(0x15e), !![]),
        Settings[_0x4ad779(0x15d)](_0x4ad779(0x15f), _0x5cb7bc),
        Settings['updateValueById'](_0x4ad779(0x160), _0x15e025),
        Settings[_0x4ad779(0x15d)](_0x4ad779(0x161), _0x20fbbf),
        Settings['updateValueById'](_0x4ad779(0x162), _0x4a4add),
        Settings['updateValueById'](_0x4ad779(0x163), _0x59b831),
        Settings[_0x4ad779(0x15d)](_0x4ad779(0x164), _0x28e4e1),
        Settings[_0x4ad779(0x15d)]('Cloud_Workspace_Registration_Client_Uri', _0x10b1b8),
        Settings[_0x4ad779(0x15d)](_0x4ad779(0x165), _0x35fa64[_0x4ad779(0x166)] || '')
    ])['then']((..._0x390816) => {
        var _0x53cac8 = _0x4ad779;
        return callbacks[_0x53cac8(0x167)](_0x53cac8(0x168), _0x35fa64[_0x53cac8(0x166)]), _0x390816;
    });
}
