const _0x2171 = [
    'CfUrW',
    '../actions',
    'should\x20enqueueJob',
    'eJhlk',
    'DlxqK',
    'xzmfF',
    'createJobV2',
    '/public/static',
    'JEvSn',
    'WSfKy',
    'complete',
    'size',
    'toBe',
    'incomplete',
    'from',
    'values',
    'xmLXF',
    'toEqual',
    'toHaveBeenCalledTimes',
    'toMatchSnapshot',
    'should\x20return\x20the\x20result\x20when\x20job\x20already\x20ran',
    'HOAgg',
    'TEST_JOB',
    'VPGam',
    'resolves',
    'MOGnB',
    'should\x20remove\x20a\x20stale\x20job',
    'XMBdq',
    'louNi',
    'set',
    '12345',
    'removeStaleJob',
    '1XNmHGo',
    '25408VfTmQf',
    '1889gqjhIw',
    '135NOFnpa',
    '705658iwgKCj',
    '741417MAmhax',
    '1OEUqLF',
    '1096232blozwx',
    '652797imQsYy',
    '4261499CkYqxQ',
    '../../utils/jobs/manager',
    'spyOn',
    'enqueueJob',
    'removeInProgressJob',
    'mock',
    '1234',
    'test-plugin',
    '/node_modules/test-plugin',
    'BwmOH',
    'TspFt',
    'mockClear',
    'resolve',
    'myresult',
    'jobsV2',
    'isolateModules'
];
const _0x1533c2 = _0x27b6;
(function (_0x2f3e03, _0x48273c) {
    const _0x1241f1 = _0x27b6;
    while (!![]) {
        try {
            const _0x493f3 = parseInt(_0x1241f1(0xba)) * parseInt(_0x1241f1(0xbb)) + -parseInt(_0x1241f1(0xbc)) * parseInt(_0x1241f1(0xbd)) + -parseInt(_0x1241f1(0xbe)) + -parseInt(_0x1241f1(0xbf)) + -parseInt(_0x1241f1(0xc0)) * parseInt(_0x1241f1(0xc1)) + -parseInt(_0x1241f1(0xc2)) + parseInt(_0x1241f1(0xc3));
            if (_0x493f3 === _0x48273c)
                break;
            else
                _0x2f3e03['push'](_0x2f3e03['shift']());
        } catch (_0x439cb3) {
            _0x2f3e03['push'](_0x2f3e03['shift']());
        }
    }
}(_0x2171, -0x96896 + -0x18c878 + 0x2ef1da));
const jobsManager = require(_0x1533c2(0xc4));
jest[_0x1533c2(0xc5)](jobsManager, _0x1533c2(0xc6)), jest[_0x1533c2(0xc5)](jobsManager, _0x1533c2(0xc7)), jest[_0x1533c2(0xc8)]('uuid/v4', () => () => _0x1533c2(0xc9));
function _0x27b6(_0x315252, _0x52af23) {
    return _0x27b6 = function (_0x240bae, _0x10990c) {
        _0x240bae = _0x240bae - (-0x2391 + -0x2298 + 0x46e3);
        let _0x2dc63e = _0x2171[_0x240bae];
        return _0x2dc63e;
    }, _0x27b6(_0x315252, _0x52af23);
}
import { jobsV2Reducer as _0x5ca2d3 } from '../reducers/jobsv2';
describe('Job\x20v2\x20actions/reducer', () => {
    const _0x258c4d = _0x1533c2, _0x214fa1 = {
            'BwmOH': function (_0x97b988, _0x201e29, _0x44c6c9) {
                return _0x97b988(_0x201e29, _0x44c6c9);
            },
            'eJhlk': function (_0x3f7fe4) {
                return _0x3f7fe4();
            },
            'DlxqK': function (_0x25f4b5, _0x166f4c) {
                return _0x25f4b5(_0x166f4c);
            },
            'xzmfF': function (_0x9ed546, _0xa2d1df) {
                return _0x9ed546(_0xa2d1df);
            },
            'JEvSn': function (_0x232c21, _0x148d50) {
                return _0x232c21(_0x148d50);
            },
            'WSfKy': function (_0x4ccd84, _0x52fc2f) {
                return _0x4ccd84(_0x52fc2f);
            },
            'OGYvP': function (_0x2261cb, _0x2eaee5) {
                return _0x2261cb(_0x2eaee5);
            },
            'xmLXF': function (_0x1cb6f3, _0x1293e5) {
                return _0x1cb6f3(_0x1293e5);
            },
            'HOAgg': function (_0x1b142d) {
                return _0x1b142d();
            },
            'VPGam': function (_0x5aaada, _0x50fafd) {
                return _0x5aaada(_0x50fafd);
            },
            'MOGnB': function (_0x1805f1, _0x2ef9bf) {
                return _0x1805f1(_0x2ef9bf);
            },
            'XMBdq': function (_0x4c65e5) {
                return _0x4c65e5();
            },
            'louNi': function (_0x595180) {
                return _0x595180();
            },
            'TspFt': function (_0x906f05, _0x64039c) {
                return _0x906f05(_0x64039c);
            }
        }, _0x3cef94 = {
            'name': _0x258c4d(0xca),
            'version': '1.0.0',
            'resolve': _0x258c4d(0xcb)
        }, _0x5d9ad6 = _0x1f2ece => {
            const _0x9de0bf = _0x258c4d;
            return {
                'program': { 'directory': __dirname },
                'jobsV2': _0x214fa1[_0x9de0bf(0xcc)](_0x5ca2d3, undefined, {}),
                ..._0x1f2ece
            };
        };
    _0x214fa1[_0x258c4d(0xcd)](beforeEach, () => {
        const _0xaed935 = _0x258c4d;
        jobsManager[_0xaed935(0xc6)][_0xaed935(0xce)](), jobsManager['enqueueJob']['mockImplementation'](() => Promise[_0xaed935(0xcf)](_0xaed935(0xd0)));
    });
    const _0x1ee777 = _0xfb35db => {
            const _0x41fe4e = _0x258c4d, _0x37c055 = _0x519db6 => _0x5ca2d3(_0x4512a3()[_0x41fe4e(0xd1)], _0x519db6), _0x4512a3 = () => _0xfb35db;
            return _0x1a5acb => _0x1a5acb(_0x37c055, _0x4512a3);
        }, _0x5a1a6f = () => {
            const _0x257eeb = _0x258c4d, _0x42d955 = {
                    'CfUrW': function (_0x2f89d5, _0x738f25) {
                        return _0x2f89d5(_0x738f25);
                    }
                };
            let _0x2fe5e8;
            return jest[_0x257eeb(0xd2)](() => {
                const _0x34a6ce = _0x257eeb, {
                        actions: _0x6d9562,
                        internalActions: _0x4cbcf6
                    } = _0x42d955[_0x34a6ce(0xd3)](require, _0x34a6ce(0xd4));
                _0x2fe5e8 = {
                    'actions': _0x6d9562,
                    'internalActions': _0x4cbcf6
                };
            }), _0x2fe5e8;
        };
    _0x214fa1[_0x258c4d(0xcc)](it, _0x258c4d(0xd5), async () => {
        const _0x3ef3cf = _0x258c4d, {actions: _0x719859} = _0x214fa1[_0x3ef3cf(0xd6)](_0x5a1a6f), _0x513bf7 = _0x214fa1[_0x3ef3cf(0xd6)](_0x5d9ad6), _0x2c8f39 = _0x214fa1[_0x3ef3cf(0xd7)](_0x1ee777, _0x513bf7), _0x36081a = _0x214fa1[_0x3ef3cf(0xd8)](_0x2c8f39, _0x719859[_0x3ef3cf(0xd9)]({
                'name': 'TEST_JOB',
                'inputPaths': [],
                'outputDir': _0x3ef3cf(0xda),
                'args': {}
            }, _0x3cef94));
        _0x214fa1[_0x3ef3cf(0xdb)](expect, _0x513bf7[_0x3ef3cf(0xd1)])['toMatchSnapshot'](), _0x214fa1[_0x3ef3cf(0xdc)](expect, _0x513bf7[_0x3ef3cf(0xd1)][_0x3ef3cf(0xdd)][_0x3ef3cf(0xde)])[_0x3ef3cf(0xdf)](-0xc94 + -0x17fd + 0x17 * 0x197), expect(_0x513bf7[_0x3ef3cf(0xd1)][_0x3ef3cf(0xe0)]['size'])[_0x3ef3cf(0xdf)](-0x95f * -0x2 + -0x1d2e + -0x21 * -0x51), await _0x36081a;
        const _0x54e8f0 = Array[_0x3ef3cf(0xe1)](_0x513bf7[_0x3ef3cf(0xd1)][_0x3ef3cf(0xdd)][_0x3ef3cf(0xe2)]());
        _0x214fa1['OGYvP'](expect, _0x513bf7[_0x3ef3cf(0xd1)][_0x3ef3cf(0xdd)][_0x3ef3cf(0xde)])['toBe'](0x19af + 0x2 * 0x92 + 0x1ad2 * -0x1), _0x214fa1[_0x3ef3cf(0xe3)](expect, _0x54e8f0[0x178e + 0x10bb + -0x1 * 0x2849])[_0x3ef3cf(0xe4)]({
            'result': _0x3ef3cf(0xd0),
            'inputPaths': []
        }), _0x214fa1[_0x3ef3cf(0xe3)](expect, jobsManager['removeInProgressJob'])[_0x3ef3cf(0xe5)](-0x3 * 0x137 + -0x4 * 0x233 + 0xc72), _0x214fa1[_0x3ef3cf(0xe3)](expect, jobsManager['enqueueJob'])[_0x3ef3cf(0xe6)]();
    }), it(_0x258c4d(0xe7), async () => {
        const _0x938c7f = _0x258c4d, {actions: _0x3bda7b} = _0x214fa1['eJhlk'](_0x5a1a6f), _0x2caea6 = _0x214fa1[_0x938c7f(0xe8)](_0x5d9ad6), _0x43c15f = _0x1ee777(_0x2caea6), _0x557ebd = {
                'name': _0x938c7f(0xe9),
                'inputPaths': [],
                'outputDir': _0x938c7f(0xda),
                'args': {}
            };
        await _0x214fa1[_0x938c7f(0xea)](expect, _0x214fa1[_0x938c7f(0xea)](_0x43c15f, _0x3bda7b[_0x938c7f(0xd9)](_0x557ebd, _0x3cef94)))[_0x938c7f(0xeb)]['toBe'](_0x938c7f(0xd0)), await _0x214fa1[_0x938c7f(0xea)](expect, _0x214fa1['MOGnB'](_0x43c15f, _0x3bda7b[_0x938c7f(0xd9)](_0x557ebd, _0x3cef94)))[_0x938c7f(0xeb)]['toBe']('myresult'), _0x214fa1[_0x938c7f(0xec)](expect, jobsManager[_0x938c7f(0xc6)])['toHaveBeenCalledTimes'](-0x2 * -0x13a + -0x270f * 0x1 + 0x249c);
    }), it(_0x258c4d(0xed), async () => {
        const _0x202cc8 = _0x258c4d, {internalActions: _0x4204b1} = _0x214fa1[_0x202cc8(0xee)](_0x5a1a6f), {jobsV2: _0x4f3add} = _0x214fa1[_0x202cc8(0xef)](_0x5d9ad6);
        _0x4f3add[_0x202cc8(0xdd)][_0x202cc8(0xf0)](_0x202cc8(0xc9), {}), _0x4f3add['incomplete'][_0x202cc8(0xf0)](_0x202cc8(0xf1), {}), _0x5ca2d3(_0x4f3add, _0x4204b1['removeStaleJob'](_0x202cc8(0xc9))), expect(_0x4f3add[_0x202cc8(0xdd)][_0x202cc8(0xde)])[_0x202cc8(0xdf)](-0x1dac + 0x2337 * -0x1 + 0x40e3), _0x214fa1['MOGnB'](expect, _0x4f3add[_0x202cc8(0xe0)][_0x202cc8(0xde)])['toBe'](-0x14a * -0xc + -0x17 * -0x29 + -0x1326), _0x5ca2d3(_0x4f3add, _0x4204b1[_0x202cc8(0xf2)](_0x202cc8(0xf1))), expect(_0x4f3add[_0x202cc8(0xdd)][_0x202cc8(0xde)])['toBe'](-0x3 * 0xb23 + 0x453 * 0x7 + 0x324 * 0x1), _0x214fa1[_0x202cc8(0xec)](expect, _0x4f3add['incomplete'][_0x202cc8(0xde)])[_0x202cc8(0xdf)](-0x7c8 * -0x1 + 0x1cdc + -0x24a4);
    });
});