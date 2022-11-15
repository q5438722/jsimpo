const _0x1597 = [
    '1014785fMrbiq',
    '619309IfjqlB',
    '1rHUswn',
    '2929WetuMh',
    '435fCiIdG',
    '131489LAqGiu',
    '1hutKNm',
    '700456htariL',
    '3853eQmYXH',
    '586daWGMv',
    '../../utils/jobs/manager',
    'spyOn',
    'enqueueJob',
    'removeInProgressJob',
    'mock',
    'uuid/v4',
    '1234',
    'Job\x20v2\x20actions/reducer',
    'test-plugin',
    '/node_modules/test-plugin',
    'mockClear',
    'resolve',
    'myresult',
    'isolateModules',
    '../actions',
    'should\x20enqueueJob',
    'TEST_JOB',
    'jobsV2',
    'toMatchSnapshot',
    'size',
    'incomplete',
    'toBe',
    'from',
    'complete',
    'toEqual',
    '/public/static',
    'resolves',
    'createJobV2',
    'toHaveBeenCalledTimes',
    'set',
    '12345',
    'removeStaleJob',
    '1256404VVYkfo'
];
const _0x5711c0 = _0x3e06;
(function (_0x332413, _0x42ea02) {
    const _0x3e27dd = _0x3e06;
    while (!![]) {
        try {
            const _0x19788a = parseInt(_0x3e27dd(0x1ce)) + -parseInt(_0x3e27dd(0x1cf)) + parseInt(_0x3e27dd(0x1d0)) * parseInt(_0x3e27dd(0x1d1)) + -parseInt(_0x3e27dd(0x1d2)) * -parseInt(_0x3e27dd(0x1d3)) + parseInt(_0x3e27dd(0x1d4)) + -parseInt(_0x3e27dd(0x1d5)) * -parseInt(_0x3e27dd(0x1d6)) + parseInt(_0x3e27dd(0x1d7)) * -parseInt(_0x3e27dd(0x1d8));
            if (_0x19788a === _0x42ea02)
                break;
            else
                _0x332413['push'](_0x332413['shift']());
        } catch (_0x4e9987) {
            _0x332413['push'](_0x332413['shift']());
        }
    }
}(_0x1597, 0xad20a));
const jobsManager = require(_0x5711c0(0x1d9));
jest[_0x5711c0(0x1da)](jobsManager, _0x5711c0(0x1db)), jest[_0x5711c0(0x1da)](jobsManager, _0x5711c0(0x1dc)), jest[_0x5711c0(0x1dd)](_0x5711c0(0x1de), () => () => _0x5711c0(0x1df));
import { jobsV2Reducer as _0x484984 } from '../reducers/jobsv2';
function _0x3e06(_0x4a6d41, _0x1b8399) {
    return _0x3e06 = function (_0x1597ec, _0x3e062b) {
        _0x1597ec = _0x1597ec - 0x1ce;
        let _0x38c08c = _0x1597[_0x1597ec];
        return _0x38c08c;
    }, _0x3e06(_0x4a6d41, _0x1b8399);
}
describe(_0x5711c0(0x1e0), () => {
    const _0x3ce850 = _0x5711c0, _0x3cc9dd = {
            'name': _0x3ce850(0x1e1),
            'version': '1.0.0',
            'resolve': _0x3ce850(0x1e2)
        }, _0x458b02 = _0x3472d3 => {
            return {
                'program': { 'directory': __dirname },
                'jobsV2': _0x484984(undefined, {}),
                ..._0x3472d3
            };
        };
    beforeEach(() => {
        const _0x795017 = _0x3ce850;
        jobsManager['enqueueJob'][_0x795017(0x1e3)](), jobsManager[_0x795017(0x1db)]['mockImplementation'](() => Promise[_0x795017(0x1e4)](_0x795017(0x1e5)));
    });
    const _0x3c27dc = _0x5560d8 => {
            const _0x3cfa49 = _0x542115 => _0x484984(_0x1fe275()['jobsV2'], _0x542115), _0x1fe275 = () => _0x5560d8;
            return _0x17274c => _0x17274c(_0x3cfa49, _0x1fe275);
        }, _0x5cf231 = () => {
            const _0x26ab12 = _0x3ce850;
            let _0x2fa1f3;
            return jest[_0x26ab12(0x1e6)](() => {
                const _0x4aa2ab = _0x26ab12, {
                        actions: _0x22a6bf,
                        internalActions: _0x1b8e2f
                    } = require(_0x4aa2ab(0x1e7));
                _0x2fa1f3 = {
                    'actions': _0x22a6bf,
                    'internalActions': _0x1b8e2f
                };
            }), _0x2fa1f3;
        };
    it(_0x3ce850(0x1e8), async () => {
        const _0x128c7d = _0x3ce850, {actions: _0x2e7039} = _0x5cf231(), _0x4c33af = _0x458b02(), _0x4b6e7d = _0x3c27dc(_0x4c33af), _0x27d1e1 = _0x4b6e7d(_0x2e7039['createJobV2']({
                'name': _0x128c7d(0x1e9),
                'inputPaths': [],
                'outputDir': '/public/static',
                'args': {}
            }, _0x3cc9dd));
        expect(_0x4c33af[_0x128c7d(0x1ea)])[_0x128c7d(0x1eb)](), expect(_0x4c33af[_0x128c7d(0x1ea)]['complete'][_0x128c7d(0x1ec)])['toBe'](0x0), expect(_0x4c33af['jobsV2'][_0x128c7d(0x1ed)]['size'])[_0x128c7d(0x1ee)](0x1), await _0x27d1e1;
        const _0xf802b7 = Array[_0x128c7d(0x1ef)](_0x4c33af[_0x128c7d(0x1ea)][_0x128c7d(0x1f0)]['values']());
        expect(_0x4c33af[_0x128c7d(0x1ea)][_0x128c7d(0x1f0)][_0x128c7d(0x1ec)])['toBe'](0x1), expect(_0xf802b7[0x0])[_0x128c7d(0x1f1)]({
            'result': _0x128c7d(0x1e5),
            'inputPaths': []
        }), expect(jobsManager[_0x128c7d(0x1dc)])['toHaveBeenCalledTimes'](0x1), expect(jobsManager['enqueueJob'])[_0x128c7d(0x1eb)]();
    }), it('should\x20return\x20the\x20result\x20when\x20job\x20already\x20ran', async () => {
        const _0x17d42f = _0x3ce850, {actions: _0x40b47e} = _0x5cf231(), _0x3a8be1 = _0x458b02(), _0x2d6695 = _0x3c27dc(_0x3a8be1), _0x3086de = {
                'name': 'TEST_JOB',
                'inputPaths': [],
                'outputDir': _0x17d42f(0x1f2),
                'args': {}
            };
        await expect(_0x2d6695(_0x40b47e['createJobV2'](_0x3086de, _0x3cc9dd)))[_0x17d42f(0x1f3)]['toBe']('myresult'), await expect(_0x2d6695(_0x40b47e[_0x17d42f(0x1f4)](_0x3086de, _0x3cc9dd)))[_0x17d42f(0x1f3)]['toBe'](_0x17d42f(0x1e5)), expect(jobsManager[_0x17d42f(0x1db)])[_0x17d42f(0x1f5)](0x1);
    }), it('should\x20remove\x20a\x20stale\x20job', async () => {
        const _0x542d5f = _0x3ce850, {internalActions: _0x37beb5} = _0x5cf231(), {jobsV2: _0x305f5a} = _0x458b02();
        _0x305f5a[_0x542d5f(0x1f0)][_0x542d5f(0x1f6)](_0x542d5f(0x1df), {}), _0x305f5a[_0x542d5f(0x1ed)]['set'](_0x542d5f(0x1f7), {}), _0x484984(_0x305f5a, _0x37beb5[_0x542d5f(0x1f8)](_0x542d5f(0x1df))), expect(_0x305f5a['complete'][_0x542d5f(0x1ec)])[_0x542d5f(0x1ee)](0x0), expect(_0x305f5a[_0x542d5f(0x1ed)]['size'])['toBe'](0x1), _0x484984(_0x305f5a, _0x37beb5['removeStaleJob']('12345')), expect(_0x305f5a[_0x542d5f(0x1f0)]['size'])[_0x542d5f(0x1ee)](0x0), expect(_0x305f5a[_0x542d5f(0x1ed)][_0x542d5f(0x1ec)])[_0x542d5f(0x1ee)](0x0);
    });
});
