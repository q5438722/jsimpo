import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0xe26c23 from 'next-webdriver';
import { join } from 'path';
jest['setTimeout'](0x3e8 * 0x3c);
const appDir = join(__dirname, '../');
let appPort, app, browser;
function runTests() {
    const _0x540bfe = {
        'YSSCG': 'static',
        'ocGiO': 'src',
        'HoccN': function (_0x220d75, _0x4cea08) {
            return _0x220d75(_0x4cea08);
        },
        'dCoMG': function (_0x2561e1, _0x27ec53) {
            return _0x2561e1(_0x27ec53);
        },
        'WsiAG': function (_0x578512, _0x407add) {
            return _0x578512(_0x407add);
        },
        'kMQZC': 'internal',
        'CxKfB': function (_0x4ae270, _0x3bc78f) {
            return _0x4ae270(_0x3bc78f);
        },
        'eRDNP': '/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png',
        'dfyHm': 'external',
        'HBSBI': '/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png',
        'yWZKL': function (_0xf48497, _0x34e791) {
            return _0xf48497(_0x34e791);
        },
        'ScZAP': 'internal-space',
        'oJZQE': '/_next/image?url=%2Fhello%2520world.jpg',
        'osDGL': function (_0x9aaec1, _0x5ea4e0) {
            return _0x9aaec1(_0x5ea4e0);
        },
        'XANhp': 'external-space',
        'dqcnM': '/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg',
        'EdCHS': function (_0xf397c4, _0x4e49ec, _0x2fe7bd) {
            return _0xf397c4(_0x4e49ec, _0x2fe7bd);
        },
        'BNAKu': 'should\x20load\x20static\x20unicode\x20image',
        'NlTci': 'should\x20load\x20internal\x20unicode\x20image',
        'aqKtj': 'should\x20load\x20external\x20unicode\x20image',
        'lQHBM': 'should\x20load\x20internal\x20image\x20with\x20space',
        'tJjej': 'should\x20load\x20external\x20image\x20with\x20space'
    };
    _0x540bfe['EdCHS'](it, _0x540bfe['BNAKu'], async () => {
        const _0x21e541 = await browser['elementById'](_0x540bfe['YSSCG'])['getAttribute'](_0x540bfe['ocGiO']);
        _0x540bfe['HoccN'](expect, _0x21e541)['toMatch'](/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);
        const _0x2cab5c = await _0x540bfe['dCoMG'](fetch, _0x21e541);
        _0x540bfe['WsiAG'](expect, _0x2cab5c['status'])['toBe'](0xc8);
    }), _0x540bfe['EdCHS'](it, _0x540bfe['NlTci'], async () => {
        const _0x404edb = await browser['elementById'](_0x540bfe['kMQZC'])['getAttribute'](_0x540bfe['ocGiO']);
        _0x540bfe['CxKfB'](expect, _0x404edb)['toMatch'](_0x540bfe['eRDNP']);
        const _0x594fa4 = await _0x540bfe['CxKfB'](fetch, _0x404edb);
        _0x540bfe['CxKfB'](expect, _0x594fa4['status'])['toBe'](0xc8);
    }), _0x540bfe['EdCHS'](it, _0x540bfe['aqKtj'], async () => {
        const _0x292936 = await browser['elementById'](_0x540bfe['dfyHm'])['getAttribute'](_0x540bfe['ocGiO']);
        _0x540bfe['CxKfB'](expect, _0x292936)['toMatch'](_0x540bfe['HBSBI']);
        const _0x428dc0 = await _0x540bfe['CxKfB'](fetch, _0x292936);
        _0x540bfe['yWZKL'](expect, _0x428dc0['status'])['toBe'](0xc8);
    }), _0x540bfe['EdCHS'](it, _0x540bfe['lQHBM'], async () => {
        const _0x4922ea = await browser['elementById'](_0x540bfe['ScZAP'])['getAttribute'](_0x540bfe['ocGiO']);
        _0x540bfe['yWZKL'](expect, _0x4922ea)['toMatch'](_0x540bfe['oJZQE']);
        const _0x4d45f6 = await _0x540bfe['yWZKL'](fetch, _0x4922ea);
        _0x540bfe['osDGL'](expect, _0x4d45f6['status'])['toBe'](0xc8);
    }), _0x540bfe['EdCHS'](it, _0x540bfe['tJjej'], async () => {
        const _0x3fbfee = await browser['elementById'](_0x540bfe['XANhp'])['getAttribute'](_0x540bfe['ocGiO']);
        _0x540bfe['osDGL'](expect, _0x3fbfee)['toMatch'](_0x540bfe['dqcnM']);
        const _0x5c0d49 = await _0x540bfe['osDGL'](fetch, _0x3fbfee);
        _0x540bfe['osDGL'](expect, _0x5c0d49['status'])['toBe'](0xc8);
    });
}
describe('Image\x20Component\x20Unicode\x20Image\x20URL', () => {
    const _0x1f94c6 = {
        'DgRfm': function (_0x24c5c8) {
            return _0x24c5c8();
        },
        'VmhjF': function (_0x29f830, _0x2f7b2a, _0x3153d8) {
            return _0x29f830(_0x2f7b2a, _0x3153d8);
        },
        'QzGPO': function (_0xd42b04, _0x2e12d3) {
            return _0xd42b04(_0x2e12d3);
        },
        'gEWsH': function (_0x4645a, _0x11ac4a) {
            return _0x4645a(_0x11ac4a);
        },
        'lkiOM': function (_0x402008, _0x5a1c9f) {
            return _0x402008(_0x5a1c9f);
        },
        'yNefD': function (_0x3dd5c9, _0x55f1e7) {
            return _0x3dd5c9(_0x55f1e7);
        },
        'wnZHJ': function (_0x2d8fb1) {
            return _0x2d8fb1();
        },
        'MgllP': function (_0xe6310e, _0x15559d, _0x3fb535) {
            return _0xe6310e(_0x15559d, _0x3fb535);
        },
        'vSltq': 'dev\x20mode',
        'IBpNz': 'server\x20mode'
    };
    _0x1f94c6['MgllP'](describe, _0x1f94c6['vSltq'], () => {
        const _0x2536ba = {
            'rxieL': function (_0x297049) {
                return _0x1f94c6['DgRfm'](_0x297049);
            },
            'DnYQx': function (_0x507d4e, _0x3bb705, _0x1ddbb1) {
                return _0x1f94c6['VmhjF'](_0x507d4e, _0x3bb705, _0x1ddbb1);
            },
            'CGMKg': function (_0x1307f6, _0x5397a2) {
                return _0x1f94c6['QzGPO'](_0x1307f6, _0x5397a2);
            }
        };
        _0x1f94c6['QzGPO'](beforeAll, async () => {
            appPort = await _0x2536ba['rxieL'](findPort), app = await _0x2536ba['DnYQx'](launchApp, appDir, appPort), browser = await _0x2536ba['DnYQx'](_0xe26c23, appPort, '/');
        }), _0x1f94c6['QzGPO'](afterAll, () => {
            _0x2536ba['CGMKg'](killApp, app), browser && browser['close']();
        }), _0x1f94c6['DgRfm'](runTests);
    }), _0x1f94c6['MgllP'](describe, _0x1f94c6['IBpNz'], () => {
        const _0x3cd52b = {
            'IwHiT': function (_0xb8a339, _0x5d22e1) {
                return _0x1f94c6['gEWsH'](_0xb8a339, _0x5d22e1);
            },
            'bcnMh': function (_0x51a555) {
                return _0x1f94c6['DgRfm'](_0x51a555);
            },
            'MEHLz': function (_0x175cd1, _0xbee93e, _0x417dc2) {
                return _0x1f94c6['VmhjF'](_0x175cd1, _0xbee93e, _0x417dc2);
            },
            'EKMUm': function (_0x4f8c33, _0x26e6f0, _0x4f63a2) {
                return _0x1f94c6['VmhjF'](_0x4f8c33, _0x26e6f0, _0x4f63a2);
            },
            'tYGeN': function (_0xccb29e, _0x483b88) {
                return _0x1f94c6['gEWsH'](_0xccb29e, _0x483b88);
            }
        };
        _0x1f94c6['lkiOM'](beforeAll, async () => {
            await _0x3cd52b['IwHiT'](nextBuild, appDir), appPort = await _0x3cd52b['bcnMh'](findPort), app = await _0x3cd52b['MEHLz'](nextStart, appDir, appPort), browser = await _0x3cd52b['EKMUm'](_0xe26c23, appPort, '/');
        }), _0x1f94c6['yNefD'](afterAll, () => {
            _0x3cd52b['tYGeN'](killApp, app), browser && browser['close']();
        }), _0x1f94c6['wnZHJ'](runTests);
    });
});
