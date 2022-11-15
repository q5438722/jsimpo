const _0x1fe6 = [
    '804638yWAsou',
    '1230034IpmBdb',
    '210024mPcUgS',
    '1299021ZrYxNh',
    '1998LjfFSJ',
    '307MgRvqB',
    '456679xfXPiV',
    '964625VpVFmx',
    '../',
    'server.js',
    'eADfB',
    'pAkVw',
    'env',
    'McvZV',
    'Serverless\x20Trace',
    '.next/BUILD_ID',
    '.next/prerender-manifest.json',
    '/revalidate',
    'Cache-Control',
    'should\x20have\x20revalidate\x20page\x20in\x20prerender-manifest\x20with\x20correct\x20interval',
    'GvKEV',
    'oifbk',
    'readFile',
    'LNnVl',
    'utf8',
    'jXhPo',
    'dafSj',
    'readJSON',
    'routes',
    'toEqual',
    '/_next/data/',
    '/revalidate.json',
    'should\x20set\x20correct\x20Cache-Control\x20header',
    'http://localhost:',
    'headers',
    'get',
    'snBiy',
    'toMatch',
    's-maxage=10,\x20stale-while-revalidate'
];
const _0xb01c1d = _0x1e48;
(function (_0x468071, _0x364ee4) {
    const _0x34681a = _0x1e48;
    while (!![]) {
        try {
            const _0x1f5a70 = parseInt(_0x34681a(0x111)) + -parseInt(_0x34681a(0x112)) + -parseInt(_0x34681a(0x113)) + parseInt(_0x34681a(0x114)) + parseInt(_0x34681a(0x115)) * parseInt(_0x34681a(0x116)) + parseInt(_0x34681a(0x117)) + -parseInt(_0x34681a(0x118));
            if (_0x1f5a70 === _0x364ee4)
                break;
            else
                _0x468071['push'](_0x468071['shift']());
        } catch (_0x6e74b0) {
            _0x468071['push'](_0x468071['shift']());
        }
    }
}(_0x1fe6, 0x1 * -0xbc72b + -0x2 * 0x79d4d + -0x50a2 * -0x7b));
import _0x11c71c from 'fs-extra';
function _0x1e48(_0x2d1614, _0x34a1ab) {
    return _0x1e48 = function (_0x29a33e, _0x2f6533) {
        _0x29a33e = _0x29a33e - (0x2271 + -0x6f6 + 0xd35 * -0x2);
        let _0x13149a = _0x1fe6[_0x29a33e];
        return _0x13149a;
    }, _0x1e48(_0x2d1614, _0x34a1ab);
}
import { join } from 'path';
import {
    nextBuild,
    findPort,
    killApp,
    initNextServerScript
} from 'next-test-utils';
const appDir = join(__dirname, _0xb01c1d(0x119));
jest['setTimeout']((-0x7fb + 0x1 * -0x19b1 + 0x2594) * (0x143e + -0x90d * -0x1 + -0x1d0f) * (0x8dd + 0x6b1 * -0x2 + -0x1 * -0x487));
let appPort, app, buildId;
const nextStart = async (_0x4358f9, _0x3996e8) => {
    const _0x1d5b47 = _0xb01c1d, _0x1e14ca = {
            'eADfB': function (_0x197a1d, _0x1c02d9, _0x52e135) {
                return _0x197a1d(_0x1c02d9, _0x52e135);
            },
            'pAkVw': _0x1d5b47(0x11a),
            'McvZV': function (_0x9875a, _0x108baf, _0x1de446, _0x3b349c, _0x1f6c80) {
                return _0x9875a(_0x108baf, _0x1de446, _0x3b349c, _0x1f6c80);
            }
        }, _0x470c57 = _0x1e14ca[_0x1d5b47(0x11b)](join, _0x4358f9, _0x1e14ca[_0x1d5b47(0x11c)]), _0x5b6d55 = Object['assign']({ ...process[_0x1d5b47(0x11d)] }, { 'PORT': '' + _0x3996e8 });
    return _0x1e14ca[_0x1d5b47(0x11e)](initNextServerScript, _0x470c57, /ready on/i, _0x5b6d55, /ReferenceError: options is not defined/);
};
describe(_0xb01c1d(0x11f), () => {
    const _0x3b8e40 = _0xb01c1d, _0x6d8de0 = {
            'GvKEV': function (_0xaf947f) {
                return _0xaf947f();
            },
            'oifbk': function (_0x10f243, _0x374f94, _0x36d148) {
                return _0x10f243(_0x374f94, _0x36d148);
            },
            'LNnVl': _0x3b8e40(0x120),
            'fmdvp': _0x3b8e40(0x121),
            'jXhPo': function (_0x47a2c1, _0x439a42) {
                return _0x47a2c1(_0x439a42);
            },
            'nTTQR': _0x3b8e40(0x122),
            'snBiy': _0x3b8e40(0x123),
            'dafSj': _0x3b8e40(0x124),
            'EHCnU': function (_0xf4978f, _0x48d1f8, _0x5cf1ec) {
                return _0xf4978f(_0x48d1f8, _0x5cf1ec);
            }
        };
    beforeAll(async () => {
        const _0xf19af6 = _0x3b8e40;
        await nextBuild(appDir), appPort = await _0x6d8de0[_0xf19af6(0x125)](findPort), app = await _0x6d8de0[_0xf19af6(0x126)](nextStart, appDir, appPort), buildId = await _0x11c71c[_0xf19af6(0x127)](_0x6d8de0[_0xf19af6(0x126)](join, appDir, _0x6d8de0[_0xf19af6(0x128)]), _0xf19af6(0x129));
    }), _0x6d8de0[_0x3b8e40(0x12a)](afterAll, () => killApp(app)), _0x6d8de0['oifbk'](it, _0x6d8de0[_0x3b8e40(0x12b)], async () => {
        const _0x5114bf = _0x3b8e40, _0x233eed = await _0x11c71c[_0x5114bf(0x12c)](_0x6d8de0[_0x5114bf(0x126)](join, appDir, _0x6d8de0['fmdvp']));
        _0x6d8de0[_0x5114bf(0x12a)](expect, _0x233eed[_0x5114bf(0x12d)][_0x6d8de0['nTTQR']])[_0x5114bf(0x12e)]({
            'initialRevalidateSeconds': 0xa,
            'dataRoute': _0x5114bf(0x12f) + buildId + _0x5114bf(0x130),
            'srcRoute': null
        });
    }), _0x6d8de0['EHCnU'](it, _0x3b8e40(0x131), async () => {
        const _0x3c4008 = _0x3b8e40, _0x15a2b4 = _0x3c4008(0x132) + appPort + _0x3c4008(0x122), _0x5ae706 = await _0x6d8de0[_0x3c4008(0x12a)](fetch, _0x15a2b4);
        expect(_0x5ae706[_0x3c4008(0x133)][_0x3c4008(0x134)](_0x6d8de0[_0x3c4008(0x135)]))[_0x3c4008(0x136)](_0x3c4008(0x137));
    });
});
