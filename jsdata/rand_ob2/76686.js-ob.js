const _0x104f = [
    'property',
    'success',
    'error',
    'equal',
    'end',
    'admin',
    'departments',
    'array',
    'offset',
    'count',
    '_id',
    'error-not-authorized',
    'should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission',
    'livechat/department/',
    'not',
    'agents',
    'department',
    'should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20have\x20the\x20permission\x20but\x20request\x20to\x20no\x20include\x20the\x20agents',
    '?includeAgents=false',
    '997184dAAXei',
    '35VILqCj',
    '30576ooCvir',
    '1139496TaYqZV',
    '1101503RiehYa',
    '621722oSHRqw',
    '1HpUinx',
    '1039956rHOpNB',
    '711353OkpoGp',
    'LIVECHAT\x20-\x20departments',
    'retries',
    'Livechat_enabled',
    'then',
    'log',
    'livechat/department',
    'should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]',
    'view-l-room',
    'view-livechat-departments',
    'get',
    'set',
    'expect',
    'Content-Type',
    'application/json',
    'body',
    'have'
];
const _0x46127d = _0x3d27;
function _0x3d27(_0x2ab8ff, _0x963e65) {
    return _0x3d27 = function (_0x104f34, _0x3d2756) {
        _0x104f34 = _0x104f34 - 0xda;
        let _0x2f2e79 = _0x104f[_0x104f34];
        return _0x2f2e79;
    }, _0x3d27(_0x2ab8ff, _0x963e65);
}
(function (_0xddb71a, _0xeaf5cc) {
    const _0xb1c5ce = _0x3d27;
    while (!![]) {
        try {
            const _0x4b75b4 = parseInt(_0xb1c5ce(0xda)) + -parseInt(_0xb1c5ce(0xdb)) * parseInt(_0xb1c5ce(0xdc)) + parseInt(_0xb1c5ce(0xdd)) + -parseInt(_0xb1c5ce(0xde)) + parseInt(_0xb1c5ce(0xdf)) * parseInt(_0xb1c5ce(0xe0)) + parseInt(_0xb1c5ce(0xe1)) + -parseInt(_0xb1c5ce(0xe2));
            if (_0x4b75b4 === _0xeaf5cc)
                break;
            else
                _0xddb71a['push'](_0xddb71a['shift']());
        } catch (_0x3e1058) {
            _0xddb71a['push'](_0xddb71a['shift']());
        }
    }
}(_0x104f, 0xdf78e));
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
describe(_0x46127d(0xe3), function () {
    const _0x4668ce = _0x46127d;
    this[_0x4668ce(0xe4)](0x0);
    let _0x5bfd2b;
    before(_0x4a288b => getCredentials(_0x4a288b)), before(_0x3b17e4 => {
        const _0x42c0ba = _0x4668ce;
        updateSetting(_0x42c0ba(0xe5), !![])[_0x42c0ba(0xe6)](() => createDepartment())[_0x42c0ba(0xe6)](_0x836744 => {
            _0x5bfd2b = _0x836744, _0x3b17e4();
        })['catch'](console[_0x42c0ba(0xe7)]);
    }), describe(_0x4668ce(0xe8), () => {
        const _0x351066 = _0x4668ce;
        it(_0x351066(0xe9), _0x319b80 => {
            const _0x59e22e = _0x351066;
            updatePermission(_0x59e22e(0xea), [])[_0x59e22e(0xe6)](() => updatePermission(_0x59e22e(0xeb), []))[_0x59e22e(0xe6)](() => {
                const _0x548130 = _0x59e22e;
                request[_0x548130(0xec)](api(_0x548130(0xe8)))[_0x548130(0xed)](credentials)[_0x548130(0xee)](_0x548130(0xef), _0x548130(0xf0))[_0x548130(0xee)](0x190)[_0x548130(0xee)](_0x5b1a79 => {
                    const _0x598969 = _0x548130;
                    expect(_0x5b1a79[_0x598969(0xf1)])['to'][_0x598969(0xf2)][_0x598969(0xf3)](_0x598969(0xf4), ![]), expect(_0x5b1a79[_0x598969(0xf1)][_0x598969(0xf5)])['to']['be'][_0x598969(0xf6)]('error-not-authorized');
                })[_0x548130(0xf7)](_0x319b80);
            });
        }), it('should\x20return\x20an\x20array\x20of\x20departments', _0x32ebe7 => {
            const _0x956929 = _0x351066;
            updatePermission(_0x956929(0xea), [_0x956929(0xf8)])[_0x956929(0xe6)](() => updatePermission('view-livechat-departments', [_0x956929(0xf8)]))[_0x956929(0xe6)](() => {
                const _0x549985 = _0x956929;
                request[_0x549985(0xec)](api(_0x549985(0xe8)))[_0x549985(0xed)](credentials)[_0x549985(0xee)](_0x549985(0xef), _0x549985(0xf0))['expect'](0xc8)['expect'](_0x566ae9 => {
                    const _0x527e80 = _0x549985;
                    expect(_0x566ae9[_0x527e80(0xf1)])['to'][_0x527e80(0xf2)][_0x527e80(0xf3)](_0x527e80(0xf4), !![]), expect(_0x566ae9[_0x527e80(0xf1)][_0x527e80(0xf9)])['to']['be']['an'](_0x527e80(0xfa)), expect(_0x566ae9['body'])['to'][_0x527e80(0xf2)]['property'](_0x527e80(0xfb)), expect(_0x566ae9['body'])['to'][_0x527e80(0xf2)][_0x527e80(0xf3)]('total'), expect(_0x566ae9[_0x527e80(0xf1)])['to']['have']['property'](_0x527e80(0xfc));
                })[_0x549985(0xf7)](_0x32ebe7);
            });
        });
    }), describe('livechat/department/id', () => {
        const _0x32f496 = _0x4668ce;
        it(_0x32f496(0xe9), _0x5af2f3 => {
            const _0x551393 = _0x32f496;
            updatePermission(_0x551393(0xea), [])[_0x551393(0xe6)](() => updatePermission(_0x551393(0xeb), []))['then'](() => {
                const _0x51197f = _0x551393;
                request[_0x51197f(0xec)](api('livechat/department/' + _0x5bfd2b[_0x51197f(0xfd)]))[_0x51197f(0xed)](credentials)[_0x51197f(0xee)]('Content-Type', _0x51197f(0xf0))[_0x51197f(0xee)](0x190)[_0x51197f(0xee)](_0x5e2022 => {
                    const _0x375081 = _0x51197f;
                    expect(_0x5e2022[_0x375081(0xf1)])['to']['have'][_0x375081(0xf3)](_0x375081(0xf4), ![]), expect(_0x5e2022['body'][_0x375081(0xf5)])['to']['be'][_0x375081(0xf6)](_0x375081(0xfe));
                })[_0x51197f(0xf7)](_0x5af2f3);
            });
        }), it(_0x32f496(0xff), _0x9c678 => {
            const _0x4a11b0 = _0x32f496;
            updatePermission(_0x4a11b0(0xea), [_0x4a11b0(0xf8)])[_0x4a11b0(0xe6)](() => updatePermission(_0x4a11b0(0xeb), []))[_0x4a11b0(0xe6)](() => {
                const _0x518216 = _0x4a11b0;
                request[_0x518216(0xec)](api(_0x518216(0x100) + _0x5bfd2b[_0x518216(0xfd)]))['set'](credentials)[_0x518216(0xee)](_0x518216(0xef), 'application/json')[_0x518216(0xee)](0xc8)[_0x518216(0xee)](_0x1935d0 => {
                    const _0x51b6b3 = _0x518216;
                    expect(_0x1935d0[_0x51b6b3(0xf1)])['to'][_0x51b6b3(0xf2)][_0x51b6b3(0xf3)](_0x51b6b3(0xf4), !![]), expect(_0x1935d0[_0x51b6b3(0xf1)])['to']['have'][_0x51b6b3(0xf3)]('department'), expect(_0x1935d0[_0x51b6b3(0xf1)])['to'][_0x51b6b3(0x101)][_0x51b6b3(0xf2)][_0x51b6b3(0xf3)](_0x51b6b3(0x102)), expect(_0x1935d0['body'][_0x51b6b3(0x103)][_0x51b6b3(0xfd)])['to']['be'][_0x51b6b3(0xf6)](_0x5bfd2b[_0x51b6b3(0xfd)]);
                })['end'](_0x9c678);
            });
        }), it(_0x32f496(0x104), _0x283553 => {
            const _0x2009c4 = _0x32f496;
            updatePermission(_0x2009c4(0xeb), [_0x2009c4(0xf8)])[_0x2009c4(0xe6)](() => {
                const _0xc27f91 = _0x2009c4;
                request['get'](api(_0xc27f91(0x100) + _0x5bfd2b[_0xc27f91(0xfd)] + _0xc27f91(0x105)))['set'](credentials)[_0xc27f91(0xee)]('Content-Type', _0xc27f91(0xf0))[_0xc27f91(0xee)](0xc8)[_0xc27f91(0xee)](_0x7484a2 => {
                    const _0x23efc5 = _0xc27f91;
                    expect(_0x7484a2[_0x23efc5(0xf1)])['to'][_0x23efc5(0xf2)][_0x23efc5(0xf3)]('success', !![]), expect(_0x7484a2['body'])['to'][_0x23efc5(0xf2)][_0x23efc5(0xf3)](_0x23efc5(0x103)), expect(_0x7484a2[_0x23efc5(0xf1)])['to'][_0x23efc5(0x101)][_0x23efc5(0xf2)][_0x23efc5(0xf3)](_0x23efc5(0x102)), expect(_0x7484a2[_0x23efc5(0xf1)][_0x23efc5(0x103)][_0x23efc5(0xfd)])['to']['be'][_0x23efc5(0xf6)](_0x5bfd2b[_0x23efc5(0xfd)]);
                })[_0xc27f91(0xf7)](_0x283553);
            });
        }), it('should\x20return\x20the\x20created\x20department', _0xfb46eb => {
            const _0x440abe = _0x32f496;
            updatePermission(_0x440abe(0xea), [_0x440abe(0xf8)])['then'](() => updatePermission('view-livechat-departments', [_0x440abe(0xf8)]))['then'](() => {
                const _0x4eb0d5 = _0x440abe;
                request['get'](api('livechat/department/' + _0x5bfd2b['_id']))[_0x4eb0d5(0xed)](credentials)[_0x4eb0d5(0xee)]('Content-Type', 'application/json')[_0x4eb0d5(0xee)](0xc8)[_0x4eb0d5(0xee)](_0x315f9b => {
                    const _0x10278a = _0x4eb0d5;
                    expect(_0x315f9b['body'])['to'][_0x10278a(0xf2)][_0x10278a(0xf3)](_0x10278a(0xf4), !![]), expect(_0x315f9b['body'])['to'][_0x10278a(0xf2)][_0x10278a(0xf3)](_0x10278a(0x103)), expect(_0x315f9b['body'])['to'][_0x10278a(0xf2)][_0x10278a(0xf3)](_0x10278a(0x102)), expect(_0x315f9b['body']['department'][_0x10278a(0xfd)])['to']['be'][_0x10278a(0xf6)](_0x5bfd2b[_0x10278a(0xfd)]);
                })['end'](_0xfb46eb);
            });
        });
    });
});
