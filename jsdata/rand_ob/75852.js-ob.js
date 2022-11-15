var _0x2ed3 = [
    'then',
    'run',
    'eYhFO',
    '1ogUofR',
    '1205179UlxluQ',
    '1014666WhNpas',
    '750613bnrpvi',
    '341238OmLEqz',
    '6397yHqTYc',
    '71PhOcIk',
    '1055957EFIKWv',
    '2351834WYkRVL',
    'Register_Server',
    'Cloud_Workspace_Client_Id',
    'Cloud_Workspace_Client_Secret',
    'Cloud_Workspace_Client_Secret_Expires_At',
    'Cloud_Workspace_Registration_Client_Uri',
    'Cloud_Workspace_License',
    'updateValueById',
    'Lbgvh',
    'Cloud_Workspace_Id',
    'Cloud_Workspace_Name',
    'BWkjD',
    'CelVE',
    'AddPa',
    'Ovqln',
    'license'
];
(function (_0x2ab645, _0x3c720e) {
    var _0x3f4d94 = _0x4761;
    while (!![]) {
        try {
            var _0x210268 = -parseInt(_0x3f4d94(0x1c3)) * -parseInt(_0x3f4d94(0x1c4)) + -parseInt(_0x3f4d94(0x1c5)) + -parseInt(_0x3f4d94(0x1c6)) + parseInt(_0x3f4d94(0x1c7)) + parseInt(_0x3f4d94(0x1c8)) * -parseInt(_0x3f4d94(0x1c9)) + -parseInt(_0x3f4d94(0x1ca)) + parseInt(_0x3f4d94(0x1cb));
            if (_0x210268 === _0x3c720e)
                break;
            else
                _0x2ab645['push'](_0x2ab645['shift']());
        } catch (_0x5579fe) {
            _0x2ab645['push'](_0x2ab645['shift']());
        }
    }
}(_0x2ed3, 0x63798 * 0x1 + 0xcfd3 + 0x27981));
import { Settings } from '../../../models/server/raw';
import { callbacks } from '../../../callbacks';
function _0x4761(_0x4d115b, _0x266c1a) {
    return _0x4761 = function (_0x40861f, _0x486823) {
        _0x40861f = _0x40861f - (-0x222d + -0x1 * -0xef2 + -0x2 * -0xa7f);
        var _0x174e9f = _0x2ed3[_0x40861f];
        return _0x174e9f;
    }, _0x4761(_0x4d115b, _0x266c1a);
}
export function saveRegistrationData({
    workspaceId: _0x584828,
    client_name: _0x6ab32,
    client_id: _0x3ade25,
    client_secret: _0x1f295a,
    client_secret_expires_at: _0x33480,
    publicKey: _0x176200,
    registration_client_uri: _0x2b839e,
    licenseData: _0x97a85e
}) {
    var _0x5563f3 = _0x4761, _0x27ff2f = {
            'eYhFO': 'workspaceLicenseChanged',
            'Lbgvh': _0x5563f3(0x1cc),
            'BWkjD': _0x5563f3(0x1cd),
            'VALvG': _0x5563f3(0x1ce),
            'CelVE': _0x5563f3(0x1cf),
            'AddPa': _0x5563f3(0x1d0),
            'Ovqln': _0x5563f3(0x1d1)
        };
    return Promise['all']([
        Settings[_0x5563f3(0x1d2)](_0x27ff2f[_0x5563f3(0x1d3)], !![]),
        Settings['updateValueById'](_0x5563f3(0x1d4), _0x584828),
        Settings['updateValueById'](_0x5563f3(0x1d5), _0x6ab32),
        Settings[_0x5563f3(0x1d2)](_0x27ff2f[_0x5563f3(0x1d6)], _0x3ade25),
        Settings['updateValueById'](_0x27ff2f['VALvG'], _0x1f295a),
        Settings[_0x5563f3(0x1d2)](_0x27ff2f[_0x5563f3(0x1d7)], _0x33480),
        Settings[_0x5563f3(0x1d2)]('Cloud_Workspace_PublicKey', _0x176200),
        Settings['updateValueById'](_0x27ff2f[_0x5563f3(0x1d8)], _0x2b839e),
        Settings[_0x5563f3(0x1d2)](_0x27ff2f[_0x5563f3(0x1d9)], _0x97a85e[_0x5563f3(0x1da)] || '')
    ])[_0x5563f3(0x1db)]((..._0x3a71b8) => {
        var _0x493694 = _0x5563f3;
        return callbacks[_0x493694(0x1dc)](_0x27ff2f[_0x493694(0x1dd)], _0x97a85e[_0x493694(0x1da)]), _0x3a71b8;
    });
}
