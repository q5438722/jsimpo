const jobsManager = require('../../utils/jobs/manager');
jest['spyOn'](jobsManager, 'enqueueJob'), jest['spyOn'](jobsManager, 'removeInProgressJob'), jest['mock']('uuid/v4', () => () => '1234');
import { jobsV2Reducer as _0x4fe99e } from '../reducers/jobsv2';
describe('Job\x20v2\x20actions/reducer', () => {
    const _0x3d612d = {
            'SOPYl': function (_0x32c829, _0x5216e0, _0x435d73) {
                return _0x32c829(_0x5216e0, _0x435d73);
            },
            'StTMi': function (_0x49635f, _0x37d634) {
                return _0x49635f(_0x37d634);
            },
            'dyHhP': function (_0x27c579) {
                return _0x27c579();
            },
            'LXfEO': function (_0x566751) {
                return _0x566751();
            },
            'yLVQF': function (_0x35bdfc, _0x730b5a) {
                return _0x35bdfc(_0x730b5a);
            },
            'DXhBF': function (_0x53fea7, _0x5c6451) {
                return _0x53fea7(_0x5c6451);
            },
            'Yvuuu': function (_0x556f93, _0x2b4903) {
                return _0x556f93(_0x2b4903);
            },
            'WQTGZ': function (_0x292471, _0x4d6362) {
                return _0x292471(_0x4d6362);
            },
            'PhPhR': function (_0x4a4fcf) {
                return _0x4a4fcf();
            },
            'qgVPv': function (_0x4b2bf6, _0x283ec4) {
                return _0x4b2bf6(_0x283ec4);
            },
            'AGOcr': function (_0x111774, _0x548f46) {
                return _0x111774(_0x548f46);
            },
            'wgXIR': function (_0x1398a3) {
                return _0x1398a3();
            },
            'TtuPt': function (_0x19fa6f, _0x4c3958) {
                return _0x19fa6f(_0x4c3958);
            },
            'dUhrF': function (_0x31078e, _0x3762df) {
                return _0x31078e(_0x3762df);
            }
        }, _0xa1219e = {
            'name': 'test-plugin',
            'version': '1.0.0',
            'resolve': '/node_modules/test-plugin'
        }, _0x53101d = _0x4b7699 => {
            return {
                'program': { 'directory': __dirname },
                'jobsV2': _0x3d612d['SOPYl'](_0x4fe99e, undefined, {}),
                ..._0x4b7699
            };
        };
    _0x3d612d['dUhrF'](beforeEach, () => {
        jobsManager['enqueueJob']['mockClear'](), jobsManager['enqueueJob']['mockImplementation'](() => Promise['resolve']('myresult'));
    });
    const _0x5a89ef = _0x5f5a16 => {
            const _0x235bdf = _0x1ff203 => _0x4fe99e(_0x439514()['jobsV2'], _0x1ff203), _0x439514 = () => _0x5f5a16;
            return _0x5f2b1f => _0x5f2b1f(_0x235bdf, _0x439514);
        }, _0xfc3e09 = () => {
            const _0x12f982 = {
                'MisGz': function (_0x1cbceb, _0x5afcfa) {
                    return _0x3d612d['StTMi'](_0x1cbceb, _0x5afcfa);
                }
            };
            let _0x2d83bf;
            return jest['isolateModules'](() => {
                const {
                    actions: _0x57a9ee,
                    internalActions: _0x1e007d
                } = _0x12f982['MisGz'](require, '../actions');
                _0x2d83bf = {
                    'actions': _0x57a9ee,
                    'internalActions': _0x1e007d
                };
            }), _0x2d83bf;
        };
    _0x3d612d['SOPYl'](it, 'should\x20enqueueJob', async () => {
        const {actions: _0x1c8f8a} = _0x3d612d['dyHhP'](_0xfc3e09), _0x4e2010 = _0x3d612d['LXfEO'](_0x53101d), _0x240cd0 = _0x3d612d['StTMi'](_0x5a89ef, _0x4e2010), _0xb81e97 = _0x3d612d['yLVQF'](_0x240cd0, _0x1c8f8a['createJobV2']({
                'name': 'TEST_JOB',
                'inputPaths': [],
                'outputDir': '/public/static',
                'args': {}
            }, _0xa1219e));
        _0x3d612d['yLVQF'](expect, _0x4e2010['jobsV2'])['toMatchSnapshot'](), _0x3d612d['DXhBF'](expect, _0x4e2010['jobsV2']['complete']['size'])['toBe'](0x0), _0x3d612d['DXhBF'](expect, _0x4e2010['jobsV2']['incomplete']['size'])['toBe'](0x1), await _0xb81e97;
        const _0x13a6fd = Array['from'](_0x4e2010['jobsV2']['complete']['values']());
        _0x3d612d['Yvuuu'](expect, _0x4e2010['jobsV2']['complete']['size'])['toBe'](0x1), _0x3d612d['Yvuuu'](expect, _0x13a6fd[0x0])['toEqual']({
            'result': 'myresult',
            'inputPaths': []
        }), _0x3d612d['WQTGZ'](expect, jobsManager['removeInProgressJob'])['toHaveBeenCalledTimes'](0x1), _0x3d612d['WQTGZ'](expect, jobsManager['enqueueJob'])['toMatchSnapshot']();
    }), _0x3d612d['SOPYl'](it, 'should\x20return\x20the\x20result\x20when\x20job\x20already\x20ran', async () => {
        const {actions: _0x40bed4} = _0x3d612d['PhPhR'](_0xfc3e09), _0x48edea = _0x3d612d['PhPhR'](_0x53101d), _0x10435f = _0x3d612d['WQTGZ'](_0x5a89ef, _0x48edea), _0x2c6b71 = {
                'name': 'TEST_JOB',
                'inputPaths': [],
                'outputDir': '/public/static',
                'args': {}
            };
        await _0x3d612d['WQTGZ'](expect, _0x3d612d['qgVPv'](_0x10435f, _0x40bed4['createJobV2'](_0x2c6b71, _0xa1219e)))['resolves']['toBe']('myresult'), await _0x3d612d['qgVPv'](expect, _0x3d612d['AGOcr'](_0x10435f, _0x40bed4['createJobV2'](_0x2c6b71, _0xa1219e)))['resolves']['toBe']('myresult'), _0x3d612d['AGOcr'](expect, jobsManager['enqueueJob'])['toHaveBeenCalledTimes'](0x1);
    }), _0x3d612d['SOPYl'](it, 'should\x20remove\x20a\x20stale\x20job', async () => {
        const {internalActions: _0x332312} = _0x3d612d['PhPhR'](_0xfc3e09), {jobsV2: _0x58d6e1} = _0x3d612d['wgXIR'](_0x53101d);
        _0x58d6e1['complete']['set']('1234', {}), _0x58d6e1['incomplete']['set']('12345', {}), _0x3d612d['SOPYl'](_0x4fe99e, _0x58d6e1, _0x332312['removeStaleJob']('1234')), _0x3d612d['AGOcr'](expect, _0x58d6e1['complete']['size'])['toBe'](0x0), _0x3d612d['AGOcr'](expect, _0x58d6e1['incomplete']['size'])['toBe'](0x1), _0x3d612d['SOPYl'](_0x4fe99e, _0x58d6e1, _0x332312['removeStaleJob']('12345')), _0x3d612d['TtuPt'](expect, _0x58d6e1['complete']['size'])['toBe'](0x0), _0x3d612d['dUhrF'](expect, _0x58d6e1['incomplete']['size'])['toBe'](0x0);
    });
});
