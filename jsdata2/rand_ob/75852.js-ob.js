var _0x1410 = [
    'ioyTq',
    'TOBVh',
    'Cloud_Workspace_PublicKey',
    'AQoeV',
    'license',
    'then',
    'hQBSv',
    '1JjIkJI',
    '553669tXxrgA',
    '644812CtvcCA',
    '205967Xbehfq',
    '1MIoySr',
    '606739JAZjro',
    '94652BRzZOg',
    '1234927RFMLNn',
    '282129kGfrIa',
    'workspaceLicenseChanged',
    'Register_Server',
    'Cloud_Workspace_Client_Id',
    'Cloud_Workspace_Client_Secret',
    'Cloud_Workspace_Client_Secret_Expires_At',
    'Cloud_Workspace_Registration_Client_Uri',
    'Cloud_Workspace_License',
    'updateValueById',
    'phWrg',
    'gaPBg'
];
(function (_0x526260, _0x36fbcd) {
    var _0x5c6f33 = _0x56f5;
    while (!![]) {
        try {
            var _0xea7cbb = parseInt(_0x5c6f33(0x188)) * parseInt(_0x5c6f33(0x189)) + parseInt(_0x5c6f33(0x18a)) + -parseInt(_0x5c6f33(0x18b)) + parseInt(_0x5c6f33(0x18c)) * parseInt(_0x5c6f33(0x18d)) + parseInt(_0x5c6f33(0x18e)) + -parseInt(_0x5c6f33(0x18f)) + parseInt(_0x5c6f33(0x190));
            if (_0xea7cbb === _0x36fbcd)
                break;
            else
                _0x526260['push'](_0x526260['shift']());
        } catch (_0x245cd9) {
            _0x526260['push'](_0x526260['shift']());
        }
    }
}(_0x1410, 0x14f * -0xfa9 + 0x3 * 0x45d2 + -0xccb * -0x26c));
function _0x56f5(_0x50da50, _0x21784b) {
    return _0x56f5 = function (_0x1ea113, _0x25783c) {
        _0x1ea113 = _0x1ea113 - (0x2656 + -0x1571 * 0x1 + -0xf5d);
        var _0x51a196 = _0x1410[_0x1ea113];
        return _0x51a196;
    }, _0x56f5(_0x50da50, _0x21784b);
}
import { Settings } from '../../../models/server/raw';
import { callbacks } from '../../../callbacks';
export function saveRegistrationData({
    workspaceId: _0x12b52f,
    client_name: _0x552810,
    client_id: _0x164a9e,
    client_secret: _0xff263b,
    client_secret_expires_at: _0x36bca0,
    publicKey: _0x2101ec,
    registration_client_uri: _0x439f43,
    licenseData: _0xef881f
}) {
    var _0x491e37 = _0x56f5, _0x249fab = {
            'hQBSv': _0x491e37(0x191),
            'phWrg': _0x491e37(0x192),
            'gaPBg': 'Cloud_Workspace_Id',
            'WfqBx': 'Cloud_Workspace_Name',
            'GcmNG': _0x491e37(0x193),
            'ioyTq': _0x491e37(0x194),
            'TOBVh': _0x491e37(0x195),
            'AQoeV': _0x491e37(0x196),
            'hbcpR': _0x491e37(0x197)
        };
    return Promise['all']([
        Settings[_0x491e37(0x198)](_0x249fab[_0x491e37(0x199)], !![]),
        Settings[_0x491e37(0x198)](_0x249fab[_0x491e37(0x19a)], _0x12b52f),
        Settings[_0x491e37(0x198)](_0x249fab['WfqBx'], _0x552810),
        Settings['updateValueById'](_0x249fab['GcmNG'], _0x164a9e),
        Settings[_0x491e37(0x198)](_0x249fab[_0x491e37(0x19b)], _0xff263b),
        Settings['updateValueById'](_0x249fab[_0x491e37(0x19c)], _0x36bca0),
        Settings[_0x491e37(0x198)](_0x491e37(0x19d), _0x2101ec),
        Settings[_0x491e37(0x198)](_0x249fab[_0x491e37(0x19e)], _0x439f43),
        Settings[_0x491e37(0x198)](_0x249fab['hbcpR'], _0xef881f[_0x491e37(0x19f)] || '')
    ])[_0x491e37(0x1a0)]((..._0x10f280) => {
        var _0x488050 = _0x491e37;
        return callbacks['run'](_0x249fab[_0x488050(0x1a1)], _0xef881f[_0x488050(0x19f)]), _0x10f280;
    });
}
