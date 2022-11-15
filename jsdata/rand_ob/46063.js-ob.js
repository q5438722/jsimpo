const _0x3e6e = [
    '1184879qhYpyx',
    '1XdhfmU',
    '1CMwHNc',
    '4020422nlESGx',
    'setTimeout',
    '/some-page',
    '#items',
    'should\x20contain\x20all\x20values\x20passed\x20in\x20param\x20as\x20array',
    'EWoZt',
    'WUdfg',
    'CJrVD',
    'elementByCss',
    'mJfHo',
    'toBe',
    'YTYda',
    'rewrites\x20destination\x20query',
    'dev\x20mode',
    'ROyeh',
    'RCZBS',
    'PNJKa',
    'ikSxh',
    'iWwMs',
    'NPNLq',
    'production\x20mode',
    'BdpsZ',
    'jvZcY',
    'RYFcs',
    '84007LpyBDp',
    '1zYGjoc',
    '1731289MQEEXw',
    '507354SxYBGS',
    '1539221kXddxE',
    '102536YzBAde'
];
const _0x2ea074 = _0x3c0d;
(function (_0x260a57, _0x371f4b) {
    const _0x545fe5 = _0x3c0d;
    while (!![]) {
        try {
            const _0x470305 = parseInt(_0x545fe5(0xdc)) + -parseInt(_0x545fe5(0xdd)) * -parseInt(_0x545fe5(0xde)) + parseInt(_0x545fe5(0xdf)) + parseInt(_0x545fe5(0xe0)) + -parseInt(_0x545fe5(0xe1)) + parseInt(_0x545fe5(0xe2)) * parseInt(_0x545fe5(0xe3)) + parseInt(_0x545fe5(0xe4)) * -parseInt(_0x545fe5(0xe5));
            if (_0x470305 === _0x371f4b)
                break;
            else
                _0x260a57['push'](_0x260a57['shift']());
        } catch (_0x31465e) {
            _0x260a57['push'](_0x260a57['shift']());
        }
    }
}(_0x3e6e, -0xb0 * -0x79d + 0x19badf + 0x1 * -0x10de3f));
import { join } from 'path';
function _0x3c0d(_0x1d31a9, _0xdbac2a) {
    return _0x3c0d = function (_0x56be88, _0x5ca8e5) {
        _0x56be88 = _0x56be88 - (0x9 * 0x248 + 0x96f + -0x1d1b * 0x1);
        let _0x46011a = _0x3e6e[_0x56be88];
        return _0x46011a;
    }, _0x3c0d(_0x1d31a9, _0xdbac2a);
}
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0x4aed66 from 'next-webdriver';
jest[_0x2ea074(0xe6)]((0x1 * -0x802 + 0x9dc + 0x20e) * (-0x6f * 0x42 + -0x2577 + 0x4251 * 0x1) * (-0x10 * -0x132 + -0xbe9 + -0x735));
const appDir = join(__dirname, '../');
let appPort, app;
const runTests = () => {
    const _0x14c91c = _0x2ea074, _0x31c80a = {
            'CJrVD': _0x14c91c(0xe7),
            'mJfHo': _0x14c91c(0xe8),
            'YTYda': '1,2',
            'EWoZt': function (_0x586bdd, _0x634abb, _0x5fe6e0) {
                return _0x586bdd(_0x634abb, _0x5fe6e0);
            },
            'WUdfg': _0x14c91c(0xe9)
        };
    _0x31c80a[_0x14c91c(0xea)](it, _0x31c80a[_0x14c91c(0xeb)], async () => {
        const _0x438ccf = _0x14c91c, _0x14d290 = await _0x4aed66(appPort, _0x31c80a[_0x438ccf(0xec)]);
        expect(await _0x14d290[_0x438ccf(0xed)](_0x31c80a[_0x438ccf(0xee)])['text']())[_0x438ccf(0xef)](_0x31c80a[_0x438ccf(0xf0)]);
    });
};
describe(_0x2ea074(0xf1), () => {
    const _0x39fb39 = _0x2ea074, _0x5b17d4 = {
            'ikSxh': function (_0x41e270) {
                return _0x41e270();
            },
            'iWwMs': function (_0x197c63, _0x4c9387, _0xa18255) {
                return _0x197c63(_0x4c9387, _0xa18255);
            },
            'PNJKa': function (_0xa84aab, _0x175c13) {
                return _0xa84aab(_0x175c13);
            },
            'NPNLq': function (_0x55ca37) {
                return _0x55ca37();
            },
            'gPldY': function (_0x1a1f27) {
                return _0x1a1f27();
            },
            'xGMxz': function (_0x1b8816, _0x193145) {
                return _0x1b8816(_0x193145);
            },
            'RYFcs': function (_0x3a4d46) {
                return _0x3a4d46();
            },
            'ROyeh': function (_0x1a5a60, _0x4582fc, _0x27ff48) {
                return _0x1a5a60(_0x4582fc, _0x27ff48);
            },
            'RCZBS': _0x39fb39(0xf2)
        };
    _0x5b17d4[_0x39fb39(0xf3)](describe, _0x5b17d4[_0x39fb39(0xf4)], () => {
        const _0x5d7435 = _0x39fb39;
        _0x5b17d4[_0x5d7435(0xf5)](beforeAll, async () => {
            const _0x3593ba = _0x5d7435;
            appPort = await _0x5b17d4[_0x3593ba(0xf6)](findPort), app = await _0x5b17d4[_0x3593ba(0xf7)](launchApp, appDir, appPort);
        }), _0x5b17d4[_0x5d7435(0xf5)](afterAll, () => killApp(app)), _0x5b17d4[_0x5d7435(0xf8)](runTests);
    }), describe(_0x39fb39(0xf9), () => {
        const _0x2697ed = _0x39fb39, _0x6bdeec = {
                'BdpsZ': function (_0x2068f2, _0x4b150b) {
                    const _0x171e1f = _0x3c0d;
                    return _0x5b17d4[_0x171e1f(0xf5)](_0x2068f2, _0x4b150b);
                },
                'jvZcY': function (_0x26a657) {
                    return _0x5b17d4['gPldY'](_0x26a657);
                }
            };
        _0x5b17d4[_0x2697ed(0xf5)](beforeAll, async () => {
            const _0x26bc22 = _0x2697ed;
            await _0x6bdeec[_0x26bc22(0xfa)](nextBuild, appDir), appPort = await _0x6bdeec[_0x26bc22(0xfb)](findPort), app = await nextStart(appDir, appPort);
        }), _0x5b17d4['xGMxz'](afterAll, () => killApp(app)), _0x5b17d4[_0x2697ed(0xfc)](runTests);
    });
});
