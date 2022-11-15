import { join } from 'path';
import _0x3f1a01 from 'cheerio';
import {
    renderViaHTTP,
    findPort,
    launchApp,
    killApp
} from 'next-test-utils';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '..');
let appPort, app;
async function get$(_0x5edeeb, _0x4d328f) {
    const _0x3eddf9 = {
            'CMtdn': function (_0x4d2391, _0x10b5f0, _0x47759f, _0x48977b) {
                return _0x4d2391(_0x10b5f0, _0x47759f, _0x48977b);
            }
        }, _0x4d3991 = await _0x3eddf9['CMtdn'](renderViaHTTP, appPort, _0x5edeeb, _0x4d328f);
    return _0x3f1a01['load'](_0x4d3991);
}
describe('TypeScript\x20Features', () => {
    const _0x32be69 = {
        'GGdoV': function (_0x21bbae) {
            return _0x21bbae();
        },
        'PngUU': function (_0x38f7c6, _0x3d31b1, _0x596101, _0x4ec9a3) {
            return _0x38f7c6(_0x3d31b1, _0x596101, _0x4ec9a3);
        },
        'ErdjW': function (_0x257db1, _0x591aa7) {
            return _0x257db1(_0x591aa7);
        },
        'fbNjP': '/basic-alias',
        'mlkac': 'body',
        'iGJKN': function (_0x25b6bb, _0x178595) {
            return _0x25b6bb(_0x178595);
        },
        'QkhLP': '/resolve-order',
        'oBPNY': '/resolve-fallback',
        'okmDL': '/single-alias',
        'cuvms': function (_0x111bcc, _0xee8ba0) {
            return _0x111bcc(_0xee8ba0);
        },
        'RUEWm': function (_0xcee10a, _0xa3b6da) {
            return _0xcee10a(_0xa3b6da);
        },
        'VBmLR': '/alias-to-d-ts',
        'NwQxP': function (_0xd7a4ce, _0x5cd224) {
            return _0xd7a4ce(_0x5cd224);
        },
        'IirFJ': function (_0x4ff8c9, _0x3ea827) {
            return _0x4ff8c9(_0x3ea827);
        },
        'fkmDQ': function (_0x18df7a, _0x168671, _0x2c0479) {
            return _0x18df7a(_0x168671, _0x2c0479);
        },
        'CZsFu': 'should\x20alias\x20components',
        'pfSUy': function (_0x411562, _0x41a4f6, _0x159b55) {
            return _0x411562(_0x41a4f6, _0x159b55);
        },
        'BAShL': 'should\x20resolve\x20the\x20first\x20item\x20in\x20the\x20array\x20first',
        'LeluD': function (_0x3e62ae, _0x288fb5, _0x1f483f) {
            return _0x3e62ae(_0x288fb5, _0x1f483f);
        },
        'fCwqG': 'should\x20resolve\x20the\x20second\x20item\x20in\x20as\x20a\x20fallback',
        'qmcHI': function (_0x308798, _0x1f8b5c, _0x52b96b) {
            return _0x308798(_0x1f8b5c, _0x52b96b);
        },
        'MBrml': 'should\x20resolve\x20a\x20single\x20matching\x20alias',
        'MoWiy': function (_0x2ee323, _0x23eb61, _0xf04648) {
            return _0x2ee323(_0x23eb61, _0xf04648);
        },
        'VqjhL': 'should\x20not\x20resolve\x20to\x20.d.ts\x20files',
        'mxwaE': function (_0x57fd02, _0x4eee72, _0x56f75c) {
            return _0x57fd02(_0x4eee72, _0x56f75c);
        },
        'dyuTJ': 'default\x20behavior'
    };
    _0x32be69['mxwaE'](describe, _0x32be69['dyuTJ'], () => {
        const _0x368be4 = {
            'RFZoM': function (_0x57bc18, _0x2555b0) {
                return _0x32be69['iGJKN'](_0x57bc18, _0x2555b0);
            },
            'wDyIR': _0x32be69['QkhLP'],
            'bzIPE': function (_0x2bb3d5, _0xc37fb9) {
                return _0x32be69['iGJKN'](_0x2bb3d5, _0xc37fb9);
            },
            'xlmVF': _0x32be69['mlkac'],
            'mbnsV': function (_0x3798b4, _0x24eead) {
                return _0x32be69['iGJKN'](_0x3798b4, _0x24eead);
            },
            'QNzuI': _0x32be69['oBPNY'],
            'UrZqC': function (_0xb77eb5, _0x86797a) {
                return _0x32be69['iGJKN'](_0xb77eb5, _0x86797a);
            },
            'uVLmB': _0x32be69['okmDL'],
            'cdFIr': function (_0x2ba977, _0x41ef91) {
                return _0x32be69['cuvms'](_0x2ba977, _0x41ef91);
            },
            'ZLfvK': function (_0x2a8fca, _0x398db1) {
                return _0x32be69['RUEWm'](_0x2a8fca, _0x398db1);
            },
            'sNPtw': _0x32be69['VBmLR']
        };
        _0x32be69['NwQxP'](beforeAll, async () => {
            appPort = await _0x32be69['GGdoV'](findPort), app = await _0x32be69['PngUU'](launchApp, appDir, appPort, {});
        }), _0x32be69['IirFJ'](afterAll, () => killApp(app)), _0x32be69['fkmDQ'](it, _0x32be69['CZsFu'], async () => {
            const _0x4cbd91 = await _0x32be69['ErdjW'](get$, _0x32be69['fbNjP']);
            _0x32be69['ErdjW'](expect, _0x32be69['ErdjW'](_0x4cbd91, _0x32be69['mlkac'])['text']())['toMatch'](/World/);
        }), _0x32be69['pfSUy'](it, _0x32be69['BAShL'], async () => {
            const _0x17e707 = await _0x368be4['RFZoM'](get$, _0x368be4['wDyIR']);
            _0x368be4['bzIPE'](expect, _0x368be4['bzIPE'](_0x17e707, _0x368be4['xlmVF'])['text']())['toMatch'](/Hello from a/);
        }), _0x32be69['LeluD'](it, _0x32be69['fCwqG'], async () => {
            const _0x2f5a78 = await _0x368be4['mbnsV'](get$, _0x368be4['QNzuI']);
            _0x368be4['mbnsV'](expect, _0x368be4['UrZqC'](_0x2f5a78, _0x368be4['xlmVF'])['text']())['toMatch'](/Hello from only b/);
        }), _0x32be69['qmcHI'](it, _0x32be69['MBrml'], async () => {
            const _0x866dfe = await _0x368be4['UrZqC'](get$, _0x368be4['uVLmB']);
            _0x368be4['UrZqC'](expect, _0x368be4['cdFIr'](_0x866dfe, _0x368be4['xlmVF'])['text']())['toMatch'](/Hello/);
        }), _0x32be69['MoWiy'](it, _0x32be69['VqjhL'], async () => {
            const _0xf485dc = await _0x368be4['ZLfvK'](get$, _0x368be4['sNPtw']);
            _0x368be4['ZLfvK'](expect, _0x368be4['ZLfvK'](_0xf485dc, _0x368be4['xlmVF'])['text']())['toMatch'](/Not aliased to d\.ts file/);
        });
    });
});
