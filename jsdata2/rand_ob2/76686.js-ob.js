const _0x5a6b = [
    'set',
    'expect',
    'application/json',
    'body',
    'have',
    'property',
    'error',
    'error-not-authorized',
    'end',
    'should\x20return\x20an\x20array\x20of\x20departments',
    'admin',
    'livechat/department',
    'success',
    'departments',
    'array',
    'total',
    'count',
    'livechat/department/',
    '_id',
    'equal',
    'Content-Type',
    'department',
    'not',
    'agents',
    '151530pcxCKf',
    '155773BUSjEd',
    '2NtFADY',
    '218992GaqEFf',
    '1CpkQsu',
    '324279wLaXgN',
    '123843QLCDei',
    '18167JhsGYD',
    '47121DtBYwQ',
    'LIVECHAT\x20-\x20departments',
    'retries',
    'Livechat_enabled',
    'then',
    'catch',
    'log',
    'should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]',
    'view-l-room',
    'view-livechat-departments',
    'get'
];
const _0x188466 = _0x41a9;
function _0x41a9(_0x10afc4, _0x78b984) {
    return _0x41a9 = function (_0x5a6b6a, _0x41a9f1) {
        _0x5a6b6a = _0x5a6b6a - 0x194;
        let _0x4e335a = _0x5a6b[_0x5a6b6a];
        return _0x4e335a;
    }, _0x41a9(_0x10afc4, _0x78b984);
}
(function (_0x2063fe, _0x2168ac) {
    const _0xb1bcc6 = _0x41a9;
    while (!![]) {
        try {
            const _0x313c72 = -parseInt(_0xb1bcc6(0x194)) + parseInt(_0xb1bcc6(0x195)) * parseInt(_0xb1bcc6(0x196)) + -parseInt(_0xb1bcc6(0x197)) + parseInt(_0xb1bcc6(0x198)) * parseInt(_0xb1bcc6(0x199)) + -parseInt(_0xb1bcc6(0x19a)) + -parseInt(_0xb1bcc6(0x19b)) + parseInt(_0xb1bcc6(0x19c));
            if (_0x313c72 === _0x2168ac)
                break;
            else
                _0x2063fe['push'](_0x2063fe['shift']());
        } catch (_0x3b779a) {
            _0x2063fe['push'](_0x2063fe['shift']());
        }
    }
}(_0x5a6b, 0x299ae));
import { expect } from 'chai';
import {
    getCredentials,
    api,
    request,
    credentials
} from '../../../data/api-data.js';
import {
    updatePermission,
    updateSetting
} from '../../../data/permissions.helper';
import { createDepartment } from '../../../data/livechat/department.js';
describe(_0x188466(0x19d), function () {
    const _0x2a3db4 = _0x188466;
    this[_0x2a3db4(0x19e)](0x0);
    let _0x338882;
    before(_0x6a6a8f => getCredentials(_0x6a6a8f)), before(_0x514fd8 => {
        const _0x338123 = _0x2a3db4;
        updateSetting(_0x338123(0x19f), !![])['then'](() => createDepartment())[_0x338123(0x1a0)](_0x163dca => {
            _0x338882 = _0x163dca, _0x514fd8();
        })[_0x338123(0x1a1)](console[_0x338123(0x1a2)]);
    }), describe('livechat/department', () => {
        const _0x4f8fbd = _0x2a3db4;
        it(_0x4f8fbd(0x1a3), _0x19483b => {
            const _0x21453d = _0x4f8fbd;
            updatePermission(_0x21453d(0x1a4), [])[_0x21453d(0x1a0)](() => updatePermission(_0x21453d(0x1a5), []))[_0x21453d(0x1a0)](() => {
                const _0x138178 = _0x21453d;
                request[_0x138178(0x1a6)](api('livechat/department'))[_0x138178(0x1a7)](credentials)[_0x138178(0x1a8)]('Content-Type', _0x138178(0x1a9))['expect'](0x190)[_0x138178(0x1a8)](_0x1a123d => {
                    const _0x3f69ea = _0x138178;
                    expect(_0x1a123d[_0x3f69ea(0x1aa)])['to'][_0x3f69ea(0x1ab)][_0x3f69ea(0x1ac)]('success', ![]), expect(_0x1a123d[_0x3f69ea(0x1aa)][_0x3f69ea(0x1ad)])['to']['be']['equal'](_0x3f69ea(0x1ae));
                })[_0x138178(0x1af)](_0x19483b);
            });
        }), it(_0x4f8fbd(0x1b0), _0x48dfd3 => {
            const _0xb3a4ef = _0x4f8fbd;
            updatePermission(_0xb3a4ef(0x1a4), [_0xb3a4ef(0x1b1)])[_0xb3a4ef(0x1a0)](() => updatePermission(_0xb3a4ef(0x1a5), [_0xb3a4ef(0x1b1)]))[_0xb3a4ef(0x1a0)](() => {
                const _0x306717 = _0xb3a4ef;
                request['get'](api(_0x306717(0x1b2)))[_0x306717(0x1a7)](credentials)['expect']('Content-Type', _0x306717(0x1a9))[_0x306717(0x1a8)](0xc8)[_0x306717(0x1a8)](_0x3fa677 => {
                    const _0xb10f0d = _0x306717;
                    expect(_0x3fa677['body'])['to']['have'][_0xb10f0d(0x1ac)](_0xb10f0d(0x1b3), !![]), expect(_0x3fa677[_0xb10f0d(0x1aa)][_0xb10f0d(0x1b4)])['to']['be']['an'](_0xb10f0d(0x1b5)), expect(_0x3fa677['body'])['to'][_0xb10f0d(0x1ab)][_0xb10f0d(0x1ac)]('offset'), expect(_0x3fa677['body'])['to']['have'][_0xb10f0d(0x1ac)](_0xb10f0d(0x1b6)), expect(_0x3fa677[_0xb10f0d(0x1aa)])['to']['have'][_0xb10f0d(0x1ac)](_0xb10f0d(0x1b7));
                })[_0x306717(0x1af)](_0x48dfd3);
            });
        });
    }), describe('livechat/department/id', () => {
        const _0x1e5f96 = _0x2a3db4;
        it(_0x1e5f96(0x1a3), _0x13bb30 => {
            const _0x42c4ea = _0x1e5f96;
            updatePermission('view-l-room', [])[_0x42c4ea(0x1a0)](() => updatePermission(_0x42c4ea(0x1a5), []))[_0x42c4ea(0x1a0)](() => {
                const _0xff7d61 = _0x42c4ea;
                request[_0xff7d61(0x1a6)](api(_0xff7d61(0x1b8) + _0x338882[_0xff7d61(0x1b9)]))[_0xff7d61(0x1a7)](credentials)[_0xff7d61(0x1a8)]('Content-Type', 'application/json')['expect'](0x190)['expect'](_0x54e449 => {
                    const _0x3c4007 = _0xff7d61;
                    expect(_0x54e449[_0x3c4007(0x1aa)])['to']['have']['property']('success', ![]), expect(_0x54e449['body']['error'])['to']['be'][_0x3c4007(0x1ba)](_0x3c4007(0x1ae));
                })[_0xff7d61(0x1af)](_0x13bb30);
            });
        }), it('should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission', _0x2c801b => {
            const _0x1fc2ff = _0x1e5f96;
            updatePermission(_0x1fc2ff(0x1a4), [_0x1fc2ff(0x1b1)])[_0x1fc2ff(0x1a0)](() => updatePermission(_0x1fc2ff(0x1a5), []))[_0x1fc2ff(0x1a0)](() => {
                const _0x3a2de7 = _0x1fc2ff;
                request['get'](api('livechat/department/' + _0x338882[_0x3a2de7(0x1b9)]))[_0x3a2de7(0x1a7)](credentials)['expect'](_0x3a2de7(0x1bb), 'application/json')[_0x3a2de7(0x1a8)](0xc8)[_0x3a2de7(0x1a8)](_0x27c0a8 => {
                    const _0x2c8671 = _0x3a2de7;
                    expect(_0x27c0a8[_0x2c8671(0x1aa)])['to'][_0x2c8671(0x1ab)]['property'](_0x2c8671(0x1b3), !![]), expect(_0x27c0a8[_0x2c8671(0x1aa)])['to'][_0x2c8671(0x1ab)]['property'](_0x2c8671(0x1bc)), expect(_0x27c0a8[_0x2c8671(0x1aa)])['to'][_0x2c8671(0x1bd)]['have'][_0x2c8671(0x1ac)](_0x2c8671(0x1be)), expect(_0x27c0a8[_0x2c8671(0x1aa)]['department'][_0x2c8671(0x1b9)])['to']['be'][_0x2c8671(0x1ba)](_0x338882['_id']);
                })[_0x3a2de7(0x1af)](_0x2c801b);
            });
        }), it('should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20have\x20the\x20permission\x20but\x20request\x20to\x20no\x20include\x20the\x20agents', _0x1da90e => {
            const _0x4a12c6 = _0x1e5f96;
            updatePermission('view-livechat-departments', [_0x4a12c6(0x1b1)])['then'](() => {
                const _0x102b3e = _0x4a12c6;
                request[_0x102b3e(0x1a6)](api('livechat/department/' + _0x338882['_id'] + '?includeAgents=false'))[_0x102b3e(0x1a7)](credentials)[_0x102b3e(0x1a8)](_0x102b3e(0x1bb), _0x102b3e(0x1a9))[_0x102b3e(0x1a8)](0xc8)[_0x102b3e(0x1a8)](_0x3ee1c5 => {
                    const _0x370f5e = _0x102b3e;
                    expect(_0x3ee1c5[_0x370f5e(0x1aa)])['to']['have'][_0x370f5e(0x1ac)](_0x370f5e(0x1b3), !![]), expect(_0x3ee1c5[_0x370f5e(0x1aa)])['to'][_0x370f5e(0x1ab)][_0x370f5e(0x1ac)](_0x370f5e(0x1bc)), expect(_0x3ee1c5[_0x370f5e(0x1aa)])['to'][_0x370f5e(0x1bd)][_0x370f5e(0x1ab)][_0x370f5e(0x1ac)](_0x370f5e(0x1be)), expect(_0x3ee1c5['body'][_0x370f5e(0x1bc)][_0x370f5e(0x1b9)])['to']['be'][_0x370f5e(0x1ba)](_0x338882['_id']);
                })[_0x102b3e(0x1af)](_0x1da90e);
            });
        }), it('should\x20return\x20the\x20created\x20department', _0x15bba5 => {
            const _0x1f0647 = _0x1e5f96;
            updatePermission(_0x1f0647(0x1a4), ['admin'])[_0x1f0647(0x1a0)](() => updatePermission(_0x1f0647(0x1a5), ['admin']))[_0x1f0647(0x1a0)](() => {
                const _0x714ec6 = _0x1f0647;
                request[_0x714ec6(0x1a6)](api(_0x714ec6(0x1b8) + _0x338882['_id']))[_0x714ec6(0x1a7)](credentials)[_0x714ec6(0x1a8)](_0x714ec6(0x1bb), _0x714ec6(0x1a9))['expect'](0xc8)[_0x714ec6(0x1a8)](_0x3b1d3b => {
                    const _0xf5c594 = _0x714ec6;
                    expect(_0x3b1d3b['body'])['to'][_0xf5c594(0x1ab)]['property'](_0xf5c594(0x1b3), !![]), expect(_0x3b1d3b[_0xf5c594(0x1aa)])['to'][_0xf5c594(0x1ab)][_0xf5c594(0x1ac)]('department'), expect(_0x3b1d3b[_0xf5c594(0x1aa)])['to'][_0xf5c594(0x1ab)][_0xf5c594(0x1ac)]('agents'), expect(_0x3b1d3b['body'][_0xf5c594(0x1bc)][_0xf5c594(0x1b9)])['to']['be'][_0xf5c594(0x1ba)](_0x338882[_0xf5c594(0x1b9)]);
                })[_0x714ec6(0x1af)](_0x15bba5);
            });
        });
    });
});
