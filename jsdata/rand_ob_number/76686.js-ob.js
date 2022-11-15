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
describe('LIVECHAT\x20-\x20departments', function () {
    this['retries'](0x439 * -0x5 + -0x137d + 0x1 * 0x289a);
    let _0xe7c92c;
    before(_0x416702 => getCredentials(_0x416702)), before(_0xdeefe8 => {
        updateSetting('Livechat_enabled', !![])['then'](() => createDepartment())['then'](_0x1b23db => {
            _0xe7c92c = _0x1b23db, _0xdeefe8();
        })['catch'](console['log']);
    }), describe('livechat/department', () => {
        it('should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]', _0x4bad08 => {
            updatePermission('view-l-room', [])['then'](() => updatePermission('view-livechat-departments', []))['then'](() => {
                request['get'](api('livechat/department'))['set'](credentials)['expect']('Content-Type', 'application/json')['expect'](-0x262e + -0x1e00 + 0xe2 * 0x4f)['expect'](_0x590c57 => {
                    expect(_0x590c57['body'])['to']['have']['property']('success', ![]), expect(_0x590c57['body']['error'])['to']['be']['equal']('error-not-authorized');
                })['end'](_0x4bad08);
            });
        }), it('should\x20return\x20an\x20array\x20of\x20departments', _0x24a5b6 => {
            updatePermission('view-l-room', ['admin'])['then'](() => updatePermission('view-livechat-departments', ['admin']))['then'](() => {
                request['get'](api('livechat/department'))['set'](credentials)['expect']('Content-Type', 'application/json')['expect'](-0x9f2 + 0x9 * -0x108 + 0x1402)['expect'](_0x4c4a36 => {
                    expect(_0x4c4a36['body'])['to']['have']['property']('success', !![]), expect(_0x4c4a36['body']['departments'])['to']['be']['an']('array'), expect(_0x4c4a36['body'])['to']['have']['property']('offset'), expect(_0x4c4a36['body'])['to']['have']['property']('total'), expect(_0x4c4a36['body'])['to']['have']['property']('count');
                })['end'](_0x24a5b6);
            });
        });
    }), describe('livechat/department/id', () => {
        it('should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]', _0x450885 => {
            updatePermission('view-l-room', [])['then'](() => updatePermission('view-livechat-departments', []))['then'](() => {
                request['get'](api('livechat/department/' + _0xe7c92c['_id']))['set'](credentials)['expect']('Content-Type', 'application/json')['expect'](0x23bf * -0x1 + 0x188 + 0x23c7)['expect'](_0x2b9b2d => {
                    expect(_0x2b9b2d['body'])['to']['have']['property']('success', ![]), expect(_0x2b9b2d['body']['error'])['to']['be']['equal']('error-not-authorized');
                })['end'](_0x450885);
            });
        }), it('should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission', _0x34b7bd => {
            updatePermission('view-l-room', ['admin'])['then'](() => updatePermission('view-livechat-departments', []))['then'](() => {
                request['get'](api('livechat/department/' + _0xe7c92c['_id']))['set'](credentials)['expect']('Content-Type', 'application/json')['expect'](0x1629 + 0x251c + 0x45 * -0xd9)['expect'](_0x49da0e => {
                    expect(_0x49da0e['body'])['to']['have']['property']('success', !![]), expect(_0x49da0e['body'])['to']['have']['property']('department'), expect(_0x49da0e['body'])['to']['not']['have']['property']('agents'), expect(_0x49da0e['body']['department']['_id'])['to']['be']['equal'](_0xe7c92c['_id']);
                })['end'](_0x34b7bd);
            });
        }), it('should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20have\x20the\x20permission\x20but\x20request\x20to\x20no\x20include\x20the\x20agents', _0xb296e8 => {
            updatePermission('view-livechat-departments', ['admin'])['then'](() => {
                request['get'](api('livechat/department/' + _0xe7c92c['_id'] + '?includeAgents=false'))['set'](credentials)['expect']('Content-Type', 'application/json')['expect'](-0x693 + 0xf67 * 0x1 + -0x80c)['expect'](_0x24911f => {
                    expect(_0x24911f['body'])['to']['have']['property']('success', !![]), expect(_0x24911f['body'])['to']['have']['property']('department'), expect(_0x24911f['body'])['to']['not']['have']['property']('agents'), expect(_0x24911f['body']['department']['_id'])['to']['be']['equal'](_0xe7c92c['_id']);
                })['end'](_0xb296e8);
            });
        }), it('should\x20return\x20the\x20created\x20department', _0x1252d6 => {
            updatePermission('view-l-room', ['admin'])['then'](() => updatePermission('view-livechat-departments', ['admin']))['then'](() => {
                request['get'](api('livechat/department/' + _0xe7c92c['_id']))['set'](credentials)['expect']('Content-Type', 'application/json')['expect'](-0x1662 + -0x1 * -0xd8b + 0x99f)['expect'](_0x1e39e4 => {
                    expect(_0x1e39e4['body'])['to']['have']['property']('success', !![]), expect(_0x1e39e4['body'])['to']['have']['property']('department'), expect(_0x1e39e4['body'])['to']['have']['property']('agents'), expect(_0x1e39e4['body']['department']['_id'])['to']['be']['equal'](_0xe7c92c['_id']);
                })['end'](_0x1252d6);
            });
        });
    });
});
