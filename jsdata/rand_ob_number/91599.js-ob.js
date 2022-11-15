const jobsManager = require('../../utils/jobs/manager');
jest['spyOn'](jobsManager, 'enqueueJob'), jest['spyOn'](jobsManager, 'removeInProgressJob'), jest['mock']('uuid/v4', () => () => '1234');
import { jobsV2Reducer as _0x5a7d9b } from '../reducers/jobsv2';
describe('Job\x20v2\x20actions/reducer', () => {
    const _0x3b218b = {
            'name': 'test-plugin',
            'version': '1.0.0',
            'resolve': '/node_modules/test-plugin'
        }, _0x32656f = _0x377c4a => {
            return {
                'program': { 'directory': __dirname },
                'jobsV2': _0x5a7d9b(undefined, {}),
                ..._0x377c4a
            };
        };
    beforeEach(() => {
        jobsManager['enqueueJob']['mockClear'](), jobsManager['enqueueJob']['mockImplementation'](() => Promise['resolve']('myresult'));
    });
    const _0xd8ae56 = _0x33dda8 => {
            const _0x2094df = _0x46769 => _0x5a7d9b(_0x5505f0()['jobsV2'], _0x46769), _0x5505f0 = () => _0x33dda8;
            return _0x4e516d => _0x4e516d(_0x2094df, _0x5505f0);
        }, _0x38eb54 = () => {
            let _0x555d34;
            return jest['isolateModules'](() => {
                const {
                    actions: _0xa364fe,
                    internalActions: _0x17fa0e
                } = require('../actions');
                _0x555d34 = {
                    'actions': _0xa364fe,
                    'internalActions': _0x17fa0e
                };
            }), _0x555d34;
        };
    it('should\x20enqueueJob', async () => {
        const {actions: _0x5ee1a7} = _0x38eb54(), _0x5b48e7 = _0x32656f(), _0x4d5d13 = _0xd8ae56(_0x5b48e7), _0x330bc5 = _0x4d5d13(_0x5ee1a7['createJobV2']({
                'name': 'TEST_JOB',
                'inputPaths': [],
                'outputDir': '/public/static',
                'args': {}
            }, _0x3b218b));
        expect(_0x5b48e7['jobsV2'])['toMatchSnapshot'](), expect(_0x5b48e7['jobsV2']['complete']['size'])['toBe'](-0x1bec + 0x21c7 + -0x5db * 0x1), expect(_0x5b48e7['jobsV2']['incomplete']['size'])['toBe'](0x45 * 0x7b + 0x3fb + -0x2521), await _0x330bc5;
        const _0x45e72a = Array['from'](_0x5b48e7['jobsV2']['complete']['values']());
        expect(_0x5b48e7['jobsV2']['complete']['size'])['toBe'](-0x3 * 0x8 + -0x1 * 0x20af + 0x20c8), expect(_0x45e72a[0x1a * 0x14a + -0x198 + -0x1fec])['toEqual']({
            'result': 'myresult',
            'inputPaths': []
        }), expect(jobsManager['removeInProgressJob'])['toHaveBeenCalledTimes'](0x1027 + 0x1 * 0x194a + -0x2970), expect(jobsManager['enqueueJob'])['toMatchSnapshot']();
    }), it('should\x20return\x20the\x20result\x20when\x20job\x20already\x20ran', async () => {
        const {actions: _0x36cbf8} = _0x38eb54(), _0x4de2a3 = _0x32656f(), _0x27eca6 = _0xd8ae56(_0x4de2a3), _0x5e5b7b = {
                'name': 'TEST_JOB',
                'inputPaths': [],
                'outputDir': '/public/static',
                'args': {}
            };
        await expect(_0x27eca6(_0x36cbf8['createJobV2'](_0x5e5b7b, _0x3b218b)))['resolves']['toBe']('myresult'), await expect(_0x27eca6(_0x36cbf8['createJobV2'](_0x5e5b7b, _0x3b218b)))['resolves']['toBe']('myresult'), expect(jobsManager['enqueueJob'])['toHaveBeenCalledTimes'](0x3 * 0xa53 + -0x10cd + -0xe2b);
    }), it('should\x20remove\x20a\x20stale\x20job', async () => {
        const {internalActions: _0x42294f} = _0x38eb54(), {jobsV2: _0x31da7e} = _0x32656f();
        _0x31da7e['complete']['set']('1234', {}), _0x31da7e['incomplete']['set']('12345', {}), _0x5a7d9b(_0x31da7e, _0x42294f['removeStaleJob']('1234')), expect(_0x31da7e['complete']['size'])['toBe'](-0x1ae8 + 0x1206 + -0x6 * -0x17b), expect(_0x31da7e['incomplete']['size'])['toBe'](0x1 * -0xad9 + -0x1650 + 0x212a), _0x5a7d9b(_0x31da7e, _0x42294f['removeStaleJob']('12345')), expect(_0x31da7e['complete']['size'])['toBe'](0x22a6 + 0xdeb * -0x1 + -0x14bb), expect(_0x31da7e['incomplete']['size'])['toBe'](-0x1e45 + 0x1159 + 0xcec);
    });
});
