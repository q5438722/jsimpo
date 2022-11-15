import _0xb84b2d from 'fs-extra';
import { join } from 'path';
import {
    nextBuild,
    findPort,
    killApp,
    initNextServerScript
} from 'next-test-utils';
const appDir = join(__dirname, '../');
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
let appPort, app, buildId;
const nextStart = async (_0x4ba0dc, _0x2c8f57) => {
    const _0x4b2155 = {
            'yPUYA': function (_0x17a5f2, _0x1bca12, _0x80bd6f) {
                return _0x17a5f2(_0x1bca12, _0x80bd6f);
            },
            'LWYCw': 'server.js',
            'TubXb': function (_0x264019, _0x436a03, _0x42f6fd, _0x2d2646, _0x426b5d) {
                return _0x264019(_0x436a03, _0x42f6fd, _0x2d2646, _0x426b5d);
            }
        }, _0x5aab35 = _0x4b2155['yPUYA'](join, _0x4ba0dc, _0x4b2155['LWYCw']), _0x1e347a = Object['assign']({ ...process['env'] }, { 'PORT': '' + _0x2c8f57 });
    return _0x4b2155['TubXb'](initNextServerScript, _0x5aab35, /ready on/i, _0x1e347a, /ReferenceError: options is not defined/);
};
describe('Serverless\x20Trace', () => {
    const _0xc25e5b = {
        'UHdRe': function (_0x3359f8, _0xc65abe) {
            return _0x3359f8(_0xc65abe);
        },
        'OtbDp': function (_0x517bb3) {
            return _0x517bb3();
        },
        'xnqXG': function (_0x18fc53, _0x460f4b, _0x311401) {
            return _0x18fc53(_0x460f4b, _0x311401);
        },
        'hoyIm': '.next/BUILD_ID',
        'Ylvjh': 'utf8',
        'rfwpq': '.next/prerender-manifest.json',
        'SKhcQ': function (_0x280055, _0x42cfee) {
            return _0x280055(_0x42cfee);
        },
        'KAYTf': '/revalidate',
        'OyYJf': function (_0x3b3f0b, _0x2d1237) {
            return _0x3b3f0b(_0x2d1237);
        },
        'TKTkh': function (_0x1260ca, _0x5b6774) {
            return _0x1260ca(_0x5b6774);
        },
        'QpqPF': 'Cache-Control',
        'Ilmha': 's-maxage=10,\x20stale-while-revalidate',
        'mVkZL': function (_0x1a0a8c, _0x152fc2) {
            return _0x1a0a8c(_0x152fc2);
        },
        'SGVyw': function (_0x2342a7, _0x4fb3af) {
            return _0x2342a7(_0x4fb3af);
        },
        'WvPrK': function (_0x542fd9, _0x449d07, _0x370254) {
            return _0x542fd9(_0x449d07, _0x370254);
        },
        'YDIKq': 'should\x20have\x20revalidate\x20page\x20in\x20prerender-manifest\x20with\x20correct\x20interval',
        'UxAGv': 'should\x20set\x20correct\x20Cache-Control\x20header'
    };
    _0xc25e5b['mVkZL'](beforeAll, async () => {
        await _0xc25e5b['UHdRe'](nextBuild, appDir), appPort = await _0xc25e5b['OtbDp'](findPort), app = await _0xc25e5b['xnqXG'](nextStart, appDir, appPort), buildId = await _0xb84b2d['readFile'](_0xc25e5b['xnqXG'](join, appDir, _0xc25e5b['hoyIm']), _0xc25e5b['Ylvjh']);
    }), _0xc25e5b['SGVyw'](afterAll, () => killApp(app)), _0xc25e5b['WvPrK'](it, _0xc25e5b['YDIKq'], async () => {
        const _0x357fea = await _0xb84b2d['readJSON'](_0xc25e5b['xnqXG'](join, appDir, _0xc25e5b['rfwpq']));
        _0xc25e5b['SKhcQ'](expect, _0x357fea['routes'][_0xc25e5b['KAYTf']])['toEqual']({
            'initialRevalidateSeconds': 0xa,
            'dataRoute': '/_next/data/' + buildId + '/revalidate.json',
            'srcRoute': null
        });
    }), _0xc25e5b['WvPrK'](it, _0xc25e5b['UxAGv'], async () => {
        const _0x129436 = 'http://localhost:' + appPort + '/revalidate', _0x5104c7 = await _0xc25e5b['OyYJf'](fetch, _0x129436);
        _0xc25e5b['TKTkh'](expect, _0x5104c7['headers']['get'](_0xc25e5b['QpqPF']))['toMatch'](_0xc25e5b['Ilmha']);
    });
});
