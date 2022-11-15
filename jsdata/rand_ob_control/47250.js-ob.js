import { join } from 'path';
import {
    killApp,
    findPort,
    launchApp,
    fetchViaHTTP,
    initNextServerScript
} from 'next-test-utils';
import _0x2642e8 from 'clone';
import _0x56c81b from 'get-port';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '../');
let appPort, app, server;
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const context = {};
function runTests() {
    const _0xfc622a = {
        'ExWYj': function (_0x177bd5) {
            return _0x177bd5();
        },
        'eKIRq': function (_0x4aa849, _0x564f26, _0x3f30a5, _0x333e8e) {
            return _0x4aa849(_0x564f26, _0x3f30a5, _0x333e8e);
        },
        'zHctT': function (_0x3c01d6) {
            return _0x3c01d6();
        },
        'LostW': function (_0x456b6e, _0x575b13) {
            return _0x456b6e(_0x575b13);
        },
        'nqihB': 'Nextjs',
        'FMUPC': function (_0x5a415, _0x33a6e4) {
            return _0x5a415(_0x33a6e4);
        },
        'TmrVX': function (_0x3fb5c3) {
            return _0x3fb5c3();
        },
        'LkStk': function (_0x1edd5c) {
            return _0x1edd5c();
        },
        'jnwER': function (_0x2e2111) {
            return _0x2e2111();
        },
        'gBlzu': function (_0x5f05ca, _0x3784b6) {
            return _0x5f05ca(_0x3784b6);
        },
        'wdMjM': function (_0x1390e9, _0xcf925a) {
            return _0x1390e9(_0xcf925a);
        },
        'Iushl': function (_0x20544a, _0xec285d, _0x4f0462) {
            return _0x20544a(_0xec285d, _0x4f0462);
        },
        'EArAR': 'should\x20parse\x20JSON\x20body',
        'YlMsp': 'should\x20not\x20throw\x20if\x20request\x20body\x20is\x20already\x20parsed\x20in\x20custom\x20middleware',
        'FRpFA': function (_0x46fef6, _0x1c9425, _0x139616) {
            return _0x46fef6(_0x1c9425, _0x139616);
        },
        'eVGlx': 'should\x20not\x20throw\x20if\x20request\x27s\x20content-type\x20is\x20invalid'
    };
    _0xfc622a['Iushl'](it, _0xfc622a['EArAR'], async () => {
        appPort = await _0xfc622a['ExWYj'](findPort), app = await _0xfc622a['eKIRq'](launchApp, appDir, appPort, {});
        const _0x36a23c = await _0xfc622a['zHctT'](makeRequest);
        _0xfc622a['LostW'](expect, _0x36a23c)['toEqual']([{ 'title': _0xfc622a['nqihB'] }]), _0xfc622a['FMUPC'](killApp, app);
    }), _0xfc622a['Iushl'](it, _0xfc622a['YlMsp'], async () => {
        await _0xfc622a['TmrVX'](startServer);
        const _0x23e5df = await _0xfc622a['TmrVX'](makeRequest);
        _0xfc622a['FMUPC'](expect, _0x23e5df)['toEqual']([{ 'title': _0xfc622a['nqihB'] }]), _0xfc622a['FMUPC'](killApp, server);
    }), _0xfc622a['FRpFA'](it, _0xfc622a['eVGlx'], async () => {
        await _0xfc622a['LkStk'](startServer);
        const _0x4532d5 = await _0xfc622a['jnwER'](makeRequestWithInvalidContentType);
        _0xfc622a['gBlzu'](expect, _0x4532d5)['toBe'](0xc8), _0xfc622a['wdMjM'](killApp, server);
    });
}
async function makeRequest() {
    const _0x4b13c6 = {
            'UWfWW': function (_0x14ad17, _0xe86791, _0x52a75e, _0x938b1e, _0x3491da) {
                return _0x14ad17(_0xe86791, _0x52a75e, _0x938b1e, _0x3491da);
            },
            'EsIMS': '/api',
            'AHfDc': 'POST',
            'Lqqqk': 'application/json;\x20charset=utf-8',
            'DOkOk': 'Nextjs'
        }, _0x1d63db = await _0x4b13c6['UWfWW'](fetchViaHTTP, appPort, _0x4b13c6['EsIMS'], null, {
            'method': _0x4b13c6['AHfDc'],
            'headers': { 'Content-Type': _0x4b13c6['Lqqqk'] },
            'body': JSON['stringify']([{ 'title': _0x4b13c6['DOkOk'] }])
        })['then'](_0x35d0b6 => _0x35d0b6['ok'] && _0x35d0b6['json']());
    return _0x1d63db;
}
async function makeRequestWithInvalidContentType() {
    const _0x2957df = {
            'lLfcA': function (_0x28c5bb, _0x411967, _0x4c3764, _0x33561a, _0x1af9b1) {
                return _0x28c5bb(_0x411967, _0x4c3764, _0x33561a, _0x1af9b1);
            },
            'nUoSD': '/api',
            'rbcUv': 'POST',
            'EAiTc': 'application/json;',
            'mSabh': 'Nextjs'
        }, _0x43c73d = await _0x2957df['lLfcA'](fetchViaHTTP, appPort, _0x2957df['nUoSD'], null, {
            'method': _0x2957df['rbcUv'],
            'headers': { 'Content-Type': _0x2957df['EAiTc'] },
            'body': JSON['stringify']([{ 'title': _0x2957df['mSabh'] }])
        })['then'](_0x4dbc1f => _0x4dbc1f['status']);
    return _0x43c73d;
}
const startServer = async (_0x4dec07 = {}, _0x15ea94) => {
    const _0x5a77f2 = {
            'efRww': function (_0x4e668d, _0x2bf897, _0x5d29ce) {
                return _0x4e668d(_0x2bf897, _0x5d29ce);
            },
            'TgIsE': 'server.js',
            'LkiMF': function (_0x19bd09) {
                return _0x19bd09();
            },
            'PixMp': function (_0x161088, _0x377c19) {
                return _0x161088(_0x377c19);
            },
            'AEOnI': function (_0x623f6c, _0x4704b6, _0xbcfb1e, _0x2658ac, _0x4cbd58, _0x21c3fa) {
                return _0x623f6c(_0x4704b6, _0xbcfb1e, _0x2658ac, _0x4cbd58, _0x21c3fa);
            }
        }, _0x42f050 = _0x5a77f2['efRww'](join, appDir, _0x5a77f2['TgIsE']);
    context['appPort'] = appPort = await _0x5a77f2['LkiMF'](_0x56c81b);
    const _0x10c87a = Object['assign']({}, _0x5a77f2['PixMp'](_0x2642e8, process['env']), { 'PORT': '' + appPort }, _0x4dec07);
    server = await _0x5a77f2['AEOnI'](initNextServerScript, _0x42f050, /ready on/i, _0x10c87a, /ReferenceError: options is not defined/, _0x15ea94);
};
runTests();
