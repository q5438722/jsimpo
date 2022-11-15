import _0x20ba08 from 'cheerio';
import 'flat-map-polyfill';
import {
    pathExists,
    readdir,
    readFile,
    readJSON,
    remove
} from 'fs-extra';
import {
    check,
    File,
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart,
    renderViaHTTP,
    waitFor
} from 'next-test-utils';
import _0x327dac from 'next-webdriver';
import { join } from 'path';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const fixturesDir = join(__dirname, '../..', 'css-fixtures');
describe('CSS\x20Support', () => {
    const _0xba521c = {
        'PKbvA': function (_0x2eeb86, _0x491e66) {
            return _0x2eeb86(_0x491e66);
        },
        'vHQwz': function (_0x4539ef, _0x19f278, _0x31d628) {
            return _0x4539ef(_0x19f278, _0x31d628);
        },
        'MwUIE': '.next',
        'BDgSe': function (_0x41c9ff, _0x22cd78, _0xdc3f22, _0x4a4170) {
            return _0x41c9ff(_0x22cd78, _0xdc3f22, _0x4a4170);
        },
        'jwMCS': function (_0x1e6781, _0x1fcdbf, _0x2ecd7f) {
            return _0x1e6781(_0x1fcdbf, _0x2ecd7f);
        },
        'tpshp': '.next/static/css',
        'ecKAl': function (_0x579377, _0x4d6e72) {
            return _0x579377(_0x4d6e72);
        },
        'CSxmn': function (_0x3571db, _0x3c8375) {
            return _0x3571db(_0x3c8375);
        },
        'piTOv': function (_0x1ec8d2, _0xf33f65) {
            return _0x1ec8d2(_0xf33f65);
        },
        'ktsqt': function (_0x4f3050, _0x1da3a0, _0x138240) {
            return _0x4f3050(_0x1da3a0, _0x138240);
        },
        'CJKIL': function (_0x402f60, _0x34df7b, _0x2126d2) {
            return _0x402f60(_0x34df7b, _0x2126d2);
        },
        'DBAQH': 'utf8',
        'lgwPT': 'color:red',
        'medgh': function (_0x30c9ae, _0x2282e5, _0x2ae182) {
            return _0x30c9ae(_0x2282e5, _0x2ae182);
        },
        'ruqUy': 'single-global',
        'idVXZ': function (_0x97be2b, _0x155ae4) {
            return _0x97be2b(_0x155ae4);
        },
        'XhADw': function (_0x5f0f01, _0x49a56c, _0x1cb0fd) {
            return _0x5f0f01(_0x49a56c, _0x1cb0fd);
        },
        'lJoNY': 'should\x20compile\x20successfully',
        'iFCer': function (_0x34bdeb, _0x119cf3, _0x1c6cd9) {
            return _0x34bdeb(_0x119cf3, _0x1c6cd9);
        },
        'cpKWA': function (_0x57ea46, _0x2fe6db, _0x56ffdf) {
            return _0x57ea46(_0x2fe6db, _0x56ffdf);
        },
        'BVtZW': function (_0x4e8040, _0x365c5e, _0x423701, _0x13a561) {
            return _0x4e8040(_0x365c5e, _0x423701, _0x13a561);
        },
        'rXnMl': function (_0x242b72, _0x2895c6) {
            return _0x242b72(_0x2895c6);
        },
        'cIJYR': function (_0x172f4b, _0x1d8a46) {
            return _0x172f4b(_0x1d8a46);
        },
        'oEthx': function (_0x5b5321, _0x28be0d, _0xc6068f) {
            return _0x5b5321(_0x28be0d, _0xc6068f);
        },
        'pxNkG': function (_0x224870, _0x5f1bf3, _0x4fafc3) {
            return _0x224870(_0x5f1bf3, _0x4fafc3);
        },
        'kRlYj': 'single-global-src',
        'ufTLi': function (_0x4f382b, _0xb1f163) {
            return _0x4f382b(_0xb1f163);
        },
        'iiuuo': function (_0x8a4e74, _0x5aceb1, _0x824fd1) {
            return _0x8a4e74(_0x5aceb1, _0x824fd1);
        },
        'CDYhy': function (_0x2000f3, _0x3940ea, _0x34ecfd) {
            return _0x2000f3(_0x3940ea, _0x34ecfd);
        },
        'iXjmD': function (_0x89d3c8, _0x330782) {
            return _0x89d3c8(_0x330782);
        },
        'FZjVi': function (_0x4b898c, _0x3852c6) {
            return _0x4b898c(_0x3852c6);
        },
        'AxnqM': function (_0x12af5e, _0x1d2f36, _0x4f2f1b) {
            return _0x12af5e(_0x1d2f36, _0x4f2f1b);
        },
        'LUysZ': function (_0x4fbe03, _0x2a9cad, _0x4f0b4a) {
            return _0x4fbe03(_0x2a9cad, _0x4f0b4a);
        },
        'LLsrS': function (_0x541348, _0x4358fb) {
            return _0x541348(_0x4358fb);
        },
        'gRfMO': function (_0x4fde92, _0x390775, _0x87a68e) {
            return _0x4fde92(_0x390775, _0x87a68e);
        },
        'KSUVu': function (_0x2062a5, _0x26569, _0x38f08f, _0x28880a) {
            return _0x2062a5(_0x26569, _0x38f08f, _0x28880a);
        },
        'tRnbF': function (_0x10d522, _0x23c634) {
            return _0x10d522(_0x23c634);
        },
        'NoHBE': function (_0x5104e4, _0xdef88c, _0x16cc8a) {
            return _0x5104e4(_0xdef88c, _0x16cc8a);
        },
        'xBmfe': 'multi-global',
        'sqxoj': function (_0x54dd71, _0x169dca, _0x153424) {
            return _0x54dd71(_0x169dca, _0x153424);
        },
        'EuxPS': function (_0x4764f5, _0x3a8fa8, _0x4382ff) {
            return _0x4764f5(_0x3a8fa8, _0x4382ff);
        },
        'RyxvX': function (_0x39bd10, _0x2859ed) {
            return _0x39bd10(_0x2859ed);
        },
        'skLEC': function (_0x52fa87, _0x2aee62, _0x893d20) {
            return _0x52fa87(_0x2aee62, _0x893d20);
        },
        'TRpFW': function (_0x1ca715, _0x581b0e, _0x423d0b) {
            return _0x1ca715(_0x581b0e, _0x423d0b);
        },
        'NfXUK': function (_0x573124, _0x5c2a30, _0x50b15c) {
            return _0x573124(_0x5c2a30, _0x50b15c);
        },
        'jdLNA': 'nested-global',
        'VLjUZ': function (_0x15d2d2, _0x1c2b3e) {
            return _0x15d2d2(_0x1c2b3e);
        },
        'lJHnb': function (_0x490e25, _0x27cf7f, _0xf2b5ab) {
            return _0x490e25(_0x27cf7f, _0xf2b5ab);
        },
        'glroq': function (_0x19baf5, _0x16ac4f, _0x2692f4, _0x103d46) {
            return _0x19baf5(_0x16ac4f, _0x2692f4, _0x103d46);
        },
        'onDgs': function (_0x49decf, _0x5c39fe) {
            return _0x49decf(_0x5c39fe);
        },
        'ZzMzj': function (_0x2dd23b, _0x351a6d, _0xac4ec6) {
            return _0x2dd23b(_0x351a6d, _0xac4ec6);
        },
        'bkoYM': function (_0x4a5026, _0x1ba1cf, _0x361c34) {
            return _0x4a5026(_0x1ba1cf, _0x361c34);
        },
        'GqjoG': 'compilation-and-prefixing',
        'dBIWz': function (_0x283f93, _0x7a9163) {
            return _0x283f93(_0x7a9163);
        },
        'IhncW': function (_0x491ebf, _0x1b462f, _0x4bea15) {
            return _0x491ebf(_0x1b462f, _0x4bea15);
        },
        'pSJAP': function (_0x2fd7c0, _0x26cfd9, _0x266664, _0x16b512) {
            return _0x2fd7c0(_0x26cfd9, _0x266664, _0x16b512);
        },
        'JuKeV': function (_0x30087d, _0x5ba558) {
            return _0x30087d(_0x5ba558);
        },
        'GEMnK': function (_0x264751, _0x5a0b44) {
            return _0x264751(_0x5a0b44);
        },
        'cydhk': function (_0xa595ff, _0x2c7ffc, _0x3f7983) {
            return _0xa595ff(_0x2c7ffc, _0x3f7983);
        },
        'BefLo': function (_0x3dbd96, _0x334858, _0x19044a) {
            return _0x3dbd96(_0x334858, _0x19044a);
        },
        'ouQlA': function (_0x875091, _0x53443d, _0x20e05b) {
            return _0x875091(_0x53443d, _0x20e05b);
        },
        'vnjKM': 'multi-global-reversed',
        'nZEec': function (_0x3c6c4d, _0x1a11de) {
            return _0x3c6c4d(_0x1a11de);
        },
        'uQGEP': function (_0x9f1a3c, _0x10720d, _0x40cc24) {
            return _0x9f1a3c(_0x10720d, _0x40cc24);
        },
        'ojByN': '#link-other',
        'doRCf': '#red-title',
        'OwqeZ': function (_0xf12d14, _0x45571a, _0x4c5a1a) {
            return _0xf12d14(_0x45571a, _0x4c5a1a);
        },
        'VXrNK': function (_0x483612) {
            return _0x483612();
        },
        'ISgfx': 'transition-react',
        'gobhZ': function (_0x4fcb09, _0x154bbb) {
            return _0x4fcb09(_0x154bbb);
        },
        'HaNnZ': function (_0x246a98, _0x142bfc) {
            return _0x246a98(_0x142bfc);
        },
        'YFpqB': function (_0x5269c3, _0x3b025a, _0x5cc2b5) {
            return _0x5269c3(_0x3b025a, _0x5cc2b5);
        },
        'EuDkM': 'should\x20have\x20the\x20correct\x20color\x20on\x20mount\x20after\x20navigation',
        'weXPP': function (_0x10d674, _0xa31912, _0x15559b, _0x3c0990) {
            return _0x10d674(_0xa31912, _0x15559b, _0x3c0990);
        },
        'dRGpK': function (_0x27d45b, _0x52c017, _0x1dfefc) {
            return _0x27d45b(_0x52c017, _0x1dfefc);
        },
        'dKfRq': function (_0x487c5d, _0x284f06, _0x18b49c) {
            return _0x487c5d(_0x284f06, _0x18b49c);
        },
        'fbJQA': function (_0x47cbce, _0x1187e3) {
            return _0x47cbce(_0x1187e3);
        },
        'tnTMW': function (_0x5c174c, _0x4f9cdc) {
            return _0x5c174c(_0x4f9cdc);
        },
        'TWiIX': function (_0x474c83, _0x303c3b, _0x280660) {
            return _0x474c83(_0x303c3b, _0x280660);
        },
        'qkOvf': 'should\x20have\x20compiled\x20successfully',
        'aSSjk': function (_0x2f86be, _0x1e531b, _0x1a4a56) {
            return _0x2f86be(_0x1e531b, _0x1a4a56);
        },
        'umgBS': function (_0x3ab4ae, _0x40ef66) {
            return _0x3ab4ae(_0x40ef66);
        },
        'YxvuJ': function (_0x3326aa, _0x370724, _0x421593) {
            return _0x3326aa(_0x370724, _0x421593);
        },
        'HpJHQ': function (_0x2847c0, _0x1d71d0, _0x4d2991, _0x54f782) {
            return _0x2847c0(_0x1d71d0, _0x4d2991, _0x54f782);
        },
        'ITbEm': function (_0x1a715f, _0xf0199f) {
            return _0x1a715f(_0xf0199f);
        },
        'VsCzw': function (_0x142eeb, _0x53aa86) {
            return _0x142eeb(_0x53aa86);
        },
        'zaaQu': 'Failed\x20to\x20compile',
        'OslYA': 'styles.module.css',
        'USlRh': function (_0x3bcf54, _0x3c5cd3) {
            return _0x3bcf54(_0x3c5cd3);
        },
        'hLlNR': function (_0x4ccd85, _0x12803d, _0x33f68e) {
            return _0x4ccd85(_0x12803d, _0x33f68e);
        },
        'OgsQk': 'invalid-module-document',
        'KWdor': function (_0x1d92da, _0x9da99a) {
            return _0x1d92da(_0x9da99a);
        },
        'Nckoz': 'should\x20fail\x20to\x20build',
        'Niapb': function (_0x521a1d, _0x59dfea) {
            return _0x521a1d(_0x59dfea);
        },
        'GPHVU': function (_0x46b581, _0x5e79b8, _0x44f759) {
            return _0x46b581(_0x5e79b8, _0x44f759);
        },
        'bbtLF': function (_0x42212d, _0x588888) {
            return _0x42212d(_0x588888);
        },
        'llPbT': 'styles/global.css',
        'WHcyz': function (_0x1caf34, _0x5b3963) {
            return _0x1caf34(_0x5b3963);
        },
        'XLTfr': function (_0x5e3164, _0x1ecece) {
            return _0x5e3164(_0x1ecece);
        },
        'FSXeH': 'invalid-global',
        'GqcGQ': function (_0x5e2782, _0x15bf2f) {
            return _0x5e2782(_0x15bf2f);
        },
        'hSGNh': function (_0x2e4425, _0x2743eb, _0x3c05ad) {
            return _0x2e4425(_0x2743eb, _0x3c05ad);
        },
        'KplOO': function (_0x103d9d, _0x593ad0, _0x3593c1) {
            return _0x103d9d(_0x593ad0, _0x3593c1);
        },
        'onVPN': 'import-global-from-module',
        'hcAOD': function (_0x3299d9, _0x3be6e0, _0x5e341d) {
            return _0x3299d9(_0x3be6e0, _0x5e341d);
        },
        'gferD': function (_0x3194fb, _0x4c02e5) {
            return _0x3194fb(_0x4c02e5);
        },
        'xTAzA': function (_0x2d760c, _0x2c2bdd) {
            return _0x2d760c(_0x2c2bdd);
        },
        'bucnT': function (_0x1514ff, _0x27c368) {
            return _0x1514ff(_0x27c368);
        },
        'DJkWr': 'invalid-global-with-app',
        'zXsBr': function (_0x14e49c, _0x456f48) {
            return _0x14e49c(_0x456f48);
        },
        'eUcNe': function (_0x3da201, _0x4d38af) {
            return _0x3da201(_0x4d38af);
        },
        'DQrHh': 'Please\x20move\x20all\x20first-party\x20global\x20CSS\x20imports',
        'NVSIj': function (_0x18c812, _0x490299) {
            return _0x18c812(_0x490299);
        },
        'HUGfR': function (_0x2d870f, _0x5257cc) {
            return _0x2d870f(_0x5257cc);
        },
        'AnkyY': function (_0x25ca23, _0x36ba58, _0x13e8e0) {
            return _0x25ca23(_0x36ba58, _0x13e8e0);
        },
        'fWfTb': function (_0x2c952f, _0x2268ba, _0x43a4ed) {
            return _0x2c952f(_0x2268ba, _0x43a4ed);
        },
        'VWddP': 'valid-and-invalid-global',
        'FQsEY': function (_0x167c1f, _0x256039, _0x35f650) {
            return _0x167c1f(_0x256039, _0x35f650);
        },
        'oCFqk': function (_0x1dc175, _0x1f5209, _0x4102a9) {
            return _0x1dc175(_0x1f5209, _0x4102a9);
        },
        'dtCRX': function (_0x313a02, _0x47609f, _0x4e652e) {
            return _0x313a02(_0x47609f, _0x4e652e);
        },
        'xMmYB': function (_0x2cde3a, _0x5e6c40) {
            return _0x2cde3a(_0x5e6c40);
        },
        'EibfU': '/page1',
        'hIouJ': 'hello\x20world',
        'VKGty': 'text-input',
        'Reraz': 'styles/global1.css',
        'JpldI': 'color:\x20red',
        'FVAjs': 'color:\x20purple',
        'ZKveC': function (_0x259366, _0x1f3466, _0x19bb88) {
            return _0x259366(_0x1f3466, _0x19bb88);
        },
        'jeNWg': 'rgb(128,\x200,\x20128)',
        'uMVcN': 'multi-page',
        'MGmOP': function (_0x2b0d3c, _0x448410) {
            return _0x2b0d3c(_0x448410);
        },
        'GaOaO': function (_0x1e8e57, _0x2cc809, _0x646f28) {
            return _0x1e8e57(_0x2cc809, _0x646f28);
        },
        'MVtml': 'should\x20update\x20CSS\x20color\x20without\x20remounting\x20<input>',
        'qgQal': function (_0x5a1683, _0x2404cb) {
            return _0x5a1683(_0x2404cb);
        },
        'aSKQk': function (_0x48651a, _0x4c61d7, _0x82eb9f) {
            return _0x48651a(_0x4c61d7, _0x82eb9f);
        },
        'pxaUL': '/page2',
        'OgMET': function (_0x104906, _0x2d3b1c) {
            return _0x104906(_0x2d3b1c);
        },
        'aVUNJ': function (_0x374e43, _0x555624) {
            return _0x374e43(_0x555624);
        },
        'mtjzt': function (_0x4685cb, _0x20b452) {
            return _0x4685cb(_0x20b452);
        },
        'EUQsi': function (_0x2dca63, _0x1fbddf, _0x3f09c5) {
            return _0x2dca63(_0x1fbddf, _0x3f09c5);
        },
        'PxrkP': 'should\x20have\x20CSS\x20for\x20page',
        'PtgLM': function (_0x2abf8c, _0xf9a419) {
            return _0x2abf8c(_0xf9a419);
        },
        'jJZgE': function (_0x47730c) {
            return _0x47730c();
        },
        'kIHJv': 'block',
        'zIBOM': 'unused',
        'ePOCr': function (_0x1ae599, _0x3a653a) {
            return _0x1ae599(_0x3a653a);
        },
        'wHTQr': function (_0x2eac7a, _0x19c252) {
            return _0x2eac7a(_0x19c252);
        },
        'Qhdgy': function (_0x3d7387, _0x1b88d5) {
            return _0x3d7387(_0x1b88d5);
        },
        'YUPyS': function (_0x57961e, _0x26ab3d, _0x4816af) {
            return _0x57961e(_0x26ab3d, _0x4816af);
        },
        'bQGpJ': 'should\x20have\x20body\x20visible',
        'qPpOU': function (_0xcf2748, _0x32acdb) {
            return _0xcf2748(_0x32acdb);
        },
        'IVerR': function (_0x2b7b41, _0x4b0a52) {
            return _0x2b7b41(_0x4b0a52);
        },
        'ClboE': function (_0x5ca347, _0x204524, _0x3409f2) {
            return _0x5ca347(_0x204524, _0x3409f2);
        },
        'LnoTs': 'pages/index.js',
        'nAjLG': '<div\x20/>',
        'AEAJH': '<div>',
        'NKyrf': function (_0x1158f3, _0x438449, _0x49548d) {
            return _0x1158f3(_0x438449, _0x49548d);
        },
        'rptQZ': function (_0x350fd8, _0x5c66f7) {
            return _0x350fd8(_0x5c66f7);
        },
        'IVCda': function (_0x231760, _0x17b582) {
            return _0x231760(_0x17b582);
        },
        'onZQt': function (_0x4c956b, _0x4e8060, _0x177da0) {
            return _0x4c956b(_0x4e8060, _0x177da0);
        },
        'sIekW': function (_0x41ac06, _0x360e92) {
            return _0x41ac06(_0x360e92);
        },
        'MyukX': function (_0x2ba0f7, _0x5bf3f3, _0x10ba80, _0x9b7e8) {
            return _0x2ba0f7(_0x5bf3f3, _0x10ba80, _0x9b7e8);
        },
        'feVbh': function (_0x57e739, _0x1f2542) {
            return _0x57e739(_0x1f2542);
        },
        'IquMt': 'link[rel=\x22preload\x22][as=\x22style\x22]',
        'svVNF': 'href',
        'MeXoo': function (_0x33b51f, _0x5e9101) {
            return _0x33b51f(_0x5e9101);
        },
        'NXiQg': 'link[rel=\x22stylesheet\x22]',
        'xoBbY': function (_0x5649ef, _0x3dddbb) {
            return _0x5649ef(_0x3dddbb);
        },
        'dyXyN': function (_0x29f41d, _0x41e72c) {
            return _0x29f41d(_0x41e72c);
        },
        'uzszP': function (_0x21f0df, _0x185639) {
            return _0x21f0df(_0x185639);
        },
        'ceecI': 'link[rel=\x22preload\x22]',
        'mSXGE': function (_0x12bc21, _0xb358f3) {
            return _0x12bc21(_0xb358f3);
        },
        'aLNAJ': function (_0xaf7251, _0x15dbc6) {
            return _0xaf7251(_0x15dbc6);
        },
        'IkiMm': function (_0x138838, _0x3f966b, _0x1f8e23) {
            return _0x138838(_0x3f966b, _0x1f8e23);
        },
        'xYAXX': function (_0x31fcbb, _0x279719, _0x1e2031) {
            return _0x31fcbb(_0x279719, _0x1e2031);
        },
        'LnMsv': function (_0x1d82d3, _0x12c9bc) {
            return _0x1d82d3(_0x12c9bc);
        },
        'ZPqpq': function (_0x387fe6, _0x774090) {
            return _0x387fe6(_0x774090);
        },
        'ZYCur': function (_0x5a7403, _0x1b16a9, _0x413486) {
            return _0x5a7403(_0x1b16a9, _0x413486);
        },
        'cmtxo': '.next/static/media',
        'MtRha': function (_0x3bf123, _0x2c5c4a, _0x5ac0e6) {
            return _0x3bf123(_0x2c5c4a, _0x5ac0e6);
        },
        'RKMYo': function (_0x5ec14e, _0x5135a0, _0x2190e4) {
            return _0x5ec14e(_0x5135a0, _0x2190e4);
        },
        'MywaP': function (_0x498d54, _0x2ec748) {
            return _0x498d54(_0x2ec748);
        },
        'bpzeU': function (_0x3e888f, _0x10d211) {
            return _0x3e888f(_0x10d211);
        },
        'cevax': function (_0x5e5bf4, _0x31e516, _0x4aba6c) {
            return _0x5e5bf4(_0x31e516, _0x4aba6c);
        },
        'GQfon': 'url-global',
        'zrazN': function (_0x2f2fc5, _0x17ba53, _0x5eb277, _0x23f336) {
            return _0x2f2fc5(_0x17ba53, _0x5eb277, _0x23f336);
        },
        'WBIxk': function (_0x4016b9, _0x1a264c) {
            return _0x4016b9(_0x1a264c);
        },
        'nSfmA': function (_0x2dd66a, _0x303051, _0x30eab9) {
            return _0x2dd66a(_0x303051, _0x30eab9);
        },
        'LnRIV': function (_0x4122ce, _0x465407) {
            return _0x4122ce(_0x465407);
        },
        'RkFql': 'url-global-asset-prefix-1',
        'BoOIA': function (_0x5b318c, _0x149bdf) {
            return _0x5b318c(_0x149bdf);
        },
        'YEqVb': function (_0x217e75, _0x45b23a, _0x4abd89) {
            return _0x217e75(_0x45b23a, _0x4abd89);
        },
        'Xnfxz': function (_0x4af6f2, _0x286e0c, _0x10d141) {
            return _0x4af6f2(_0x286e0c, _0x10d141);
        },
        'KQOUQ': function (_0x2badb4, _0x4e673c, _0x470b6b) {
            return _0x2badb4(_0x4e673c, _0x470b6b);
        },
        'GbZmn': function (_0x575530, _0x975d29) {
            return _0x575530(_0x975d29);
        },
        'ETGYv': function (_0x4bca11, _0x4ea67e) {
            return _0x4bca11(_0x4ea67e);
        },
        'bNkZM': function (_0x1b1c52, _0x3da2c5, _0x16cc70) {
            return _0x1b1c52(_0x3da2c5, _0x16cc70);
        },
        'hKMrk': function (_0x21621f, _0x40f631) {
            return _0x21621f(_0x40f631);
        },
        'EdWhz': function (_0x52d270, _0x330468, _0x5b84c4) {
            return _0x52d270(_0x330468, _0x5b84c4);
        },
        'CBsTu': function (_0x46950a, _0x913d77, _0x4a2780, _0x2311ea) {
            return _0x46950a(_0x913d77, _0x4a2780, _0x2311ea);
        },
        'PSuUu': 'url-global-asset-prefix-2',
        'QBPBq': function (_0x3e95e8, _0x3655a5) {
            return _0x3e95e8(_0x3655a5);
        },
        'DtYOM': function (_0x3e6324, _0x4309a7, _0x460867) {
            return _0x3e6324(_0x4309a7, _0x460867);
        },
        'ziuem': function (_0x48514f, _0x5494fc, _0x12acd2) {
            return _0x48514f(_0x5494fc, _0x12acd2);
        },
        'aHndQ': function (_0x340eb4, _0x427e38) {
            return _0x340eb4(_0x427e38);
        },
        'uDXmC': function (_0x3d1714, _0x5bf6cf, _0x25574c) {
            return _0x3d1714(_0x5bf6cf, _0x25574c);
        },
        'ifoyu': function (_0x242c49, _0x105b90) {
            return _0x242c49(_0x105b90);
        },
        'qYWko': 'npm-import',
        'CDkjS': function (_0x353c31, _0x3dd07f) {
            return _0x353c31(_0x3dd07f);
        },
        'Ildyx': function (_0xed6f48, _0x4e8817) {
            return _0xed6f48(_0x4e8817);
        },
        'dKYOd': function (_0x35e1e4, _0x56e38b, _0x12cde4, _0x44e9a9) {
            return _0x35e1e4(_0x56e38b, _0x12cde4, _0x44e9a9);
        },
        'qggTX': function (_0x51d3f1, _0x179d8d) {
            return _0x51d3f1(_0x179d8d);
        },
        'uYkoi': function (_0x5261f3, _0x1f0091, _0x595eee) {
            return _0x5261f3(_0x1f0091, _0x595eee);
        },
        'AXWBu': function (_0x52bf4f, _0x11c1bc, _0x58d6eb) {
            return _0x52bf4f(_0x11c1bc, _0x58d6eb);
        },
        'CHHTh': function (_0x5df952, _0x592a56) {
            return _0x5df952(_0x592a56);
        },
        'EeRvV': function (_0x573fcf, _0x338919, _0x74c57f) {
            return _0x573fcf(_0x338919, _0x74c57f);
        },
        'jxFaU': 'npm-import-nested',
        'TpjrR': function (_0x2eda43, _0x432b78, _0x43d4a9) {
            return _0x2eda43(_0x432b78, _0x43d4a9);
        },
        'GLumc': function (_0x2a422d, _0x31ed65, _0x596c97) {
            return _0x2a422d(_0x31ed65, _0x596c97);
        },
        'pWFFe': function (_0xd50cf7, _0x24cde7) {
            return _0xd50cf7(_0x24cde7);
        },
        'EIILQ': function (_0x333800, _0x362f53, _0x3b2cd1, _0xb6d09a) {
            return _0x333800(_0x362f53, _0x3b2cd1, _0xb6d09a);
        },
        'ofoxz': function (_0x86b58b, _0x35c85d) {
            return _0x86b58b(_0x35c85d);
        },
        'Dovaw': function (_0x53b890, _0x1fd63e, _0x19d9f3) {
            return _0x53b890(_0x1fd63e, _0x19d9f3);
        },
        'GUTHZ': 'npm-import-bad',
        'kXWhs': function (_0x6d980b, _0x491397) {
            return _0x6d980b(_0x491397);
        },
        'OOqcD': 'should\x20fail\x20the\x20build',
        'axNZv': function (_0x5dd969, _0x2ee3e4) {
            return _0x5dd969(_0x2ee3e4);
        },
        'tIeEF': function (_0x1846d5) {
            return _0x1846d5();
        },
        'gfwqb': function (_0x3474b7, _0x544430) {
            return _0x3474b7(_0x544430);
        },
        'PyUdt': 'with-styled-jsx',
        'oLYST': function (_0x678f46, _0x19b6d7) {
            return _0x678f46(_0x19b6d7);
        },
        'qYweJ': function (_0x1ade64, _0x422d89, _0x520dc6) {
            return _0x1ade64(_0x422d89, _0x520dc6);
        },
        'Flbog': 'should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)',
        'rotfB': function (_0x5d520c, _0x3f9d26) {
            return _0x5d520c(_0x3f9d26);
        },
        'aSUGH': function (_0x247fbb, _0xf7f822) {
            return _0x247fbb(_0xf7f822);
        },
        'kCwqn': function (_0x208eb3, _0x44051a, _0x47ebbd) {
            return _0x208eb3(_0x44051a, _0x47ebbd);
        },
        'llVrg': function (_0x54ee4e, _0x9002f9) {
            return _0x54ee4e(_0x9002f9);
        },
        'ATbiC': function (_0x39e988, _0x5bff07, _0x50a381) {
            return _0x39e988(_0x5bff07, _0x50a381);
        },
        'uLzka': function (_0x489f93, _0x30ef8e) {
            return _0x489f93(_0x30ef8e);
        },
        'oSjqG': function (_0x3d5357, _0x4baa22, _0x22ea7d) {
            return _0x3d5357(_0x4baa22, _0x22ea7d);
        },
        'iMyzg': function (_0x3bdb19, _0x2bd591, _0x46cc91) {
            return _0x3bdb19(_0x2bd591, _0x46cc91);
        },
        'uPqzf': function (_0x1c2b31) {
            return _0x1c2b31();
        },
        'BxTbN': 'script',
        'yXxGT': function (_0x116281, _0x276456) {
            return _0x116281 in _0x276456;
        },
        'Luvcu': 'async',
        'RjSuy': function (_0x4a64b0, _0x5db36c, _0x326256) {
            return _0x4a64b0(_0x5db36c, _0x326256);
        },
        'wvCoW': 'pages/index.module.css',
        'WLcNG': 'color:\x20yellow;',
        'Yegnd': 'color:\x20rgb(1,\x201,\x201);',
        'mxgWo': 'rgb(1,\x201,\x201)',
        'QbuZZ': function (_0x32057f, _0x307ceb, _0x5c7eaa) {
            return _0x32057f(_0x307ceb, _0x5c7eaa);
        },
        'uzjAF': 'rgb(0,\x200,\x20255)',
        'vgvel': 'global-and-module-ordering',
        'yNMgF': function (_0x115d51, _0xe7a40c, _0x228726) {
            return _0x115d51(_0xe7a40c, _0x228726);
        },
        'IVOJz': 'should\x20not\x20execute\x20scripts\x20in\x20any\x20order',
        'YIUfG': function (_0x2c1fec, _0x59d511, _0x4fcff4) {
            return _0x2c1fec(_0x59d511, _0x4fcff4);
        },
        'CcogZ': function (_0x1a30ce, _0x474b8c, _0x5efe0b) {
            return _0x1a30ce(_0x474b8c, _0x5efe0b);
        },
        'ihwkZ': 'should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)\x20during\x20hot\x20reloads',
        'NHgNO': function (_0x132bce, _0xf794a8, _0x230ca6) {
            return _0x132bce(_0xf794a8, _0x230ca6);
        },
        'ACMDA': function (_0x6b149a, _0x1a3a61) {
            return _0x6b149a(_0x1a3a61);
        },
        'IldSQ': function (_0x341f54, _0x1ae6e3, _0x3b63c8) {
            return _0x341f54(_0x1ae6e3, _0x3b63c8);
        },
        'huXox': function (_0x549e19, _0x344f88, _0x2d4811) {
            return _0x549e19(_0x344f88, _0x2d4811);
        },
        'WakPL': function (_0x23daf4, _0x460326) {
            return _0x23daf4(_0x460326);
        },
        'kqwPS': function (_0x273067, _0x5be227) {
            return _0x273067(_0x5be227);
        },
        'rVMaz': function (_0x496b1e, _0x3007af, _0x3e9183) {
            return _0x496b1e(_0x3007af, _0x3e9183);
        },
        'DGkYR': function (_0x167157, _0x1b887b, _0x477e3e) {
            return _0x167157(_0x1b887b, _0x477e3e);
        },
        'OplqP': function (_0x28b4bf, _0x429e17) {
            return _0x28b4bf(_0x429e17);
        },
        'ItbUC': function (_0x1c1b02) {
            return _0x1c1b02();
        },
        'SzTjU': function (_0x12ff7f, _0xeeefcf) {
            return _0x12ff7f(_0xeeefcf);
        },
        'Waeee': function (_0x579e5b, _0x51f282, _0x533a3d) {
            return _0x579e5b(_0x51f282, _0x533a3d);
        },
        'hxvKZ': 'next-issue-15468',
        'wRxmb': 'should\x20have\x20the\x20border\x20width\x20(property\x20ordering)',
        'uzzBW': function (_0xd9046e, _0x26a7a5, _0x16526f, _0x1f3c38) {
            return _0xd9046e(_0x26a7a5, _0x16526f, _0x1f3c38);
        },
        'XoReV': function (_0x47e4b9, _0x154514) {
            return _0x47e4b9(_0x154514);
        },
        'HpJBe': '.css',
        'IOzYM': function (_0x5d7750, _0x1ef57d) {
            return _0x5d7750(_0x1ef57d);
        },
        'jxpZK': function (_0x33b48f, _0x3b683e, _0x551c9e) {
            return _0x33b48f(_0x3b683e, _0x551c9e);
        },
        'ASXdK': function (_0x506fb7, _0x484f06, _0x5cc36b) {
            return _0x506fb7(_0x484f06, _0x5cc36b);
        },
        'dKJdq': 'with-tailwindcss',
        'GZxSm': function (_0x117f68, _0x2e704e) {
            return _0x117f68(_0x2e704e);
        },
        'SKSyX': function (_0x5e4a96, _0x46e5bc) {
            return _0x5e4a96(_0x46e5bc);
        },
        'prwvw': function (_0x45fabe, _0x552a94) {
            return _0x45fabe(_0x552a94);
        },
        'NcCCf': function (_0x5f4a87, _0x56fb10, _0x2f6f95) {
            return _0x5f4a87(_0x56fb10, _0x2f6f95);
        },
        'KruhZ': function (_0x414714, _0x30aa07, _0x325286) {
            return _0x414714(_0x30aa07, _0x325286);
        },
        'kBplQ': function (_0x44e9c3, _0x28c3bd) {
            return _0x44e9c3(_0x28c3bd);
        },
        'NkuvQ': function (_0x2f15cf, _0x52c64b, _0x48ce4a) {
            return _0x2f15cf(_0x52c64b, _0x48ce4a);
        },
        'iTbKv': function (_0x525102, _0x5eeb52) {
            return _0x525102(_0x5eeb52);
        },
        'XgbWJ': function (_0x3928f0, _0x4e55f8) {
            return _0x3928f0(_0x4e55f8);
        },
        'frJvZ': function (_0x20daa1, _0x236bc3, _0x53e51b, _0x477a87) {
            return _0x20daa1(_0x236bc3, _0x53e51b, _0x477a87);
        },
        'qLCII': function (_0x1b58ed, _0x67f25) {
            return _0x1b58ed(_0x67f25);
        },
        'pFrbF': function (_0x271647, _0x2888d4, _0x59b1ca) {
            return _0x271647(_0x2888d4, _0x59b1ca);
        },
        'ptbCR': 'with-tailwindcss-and-purgecss',
        'XiraZ': function (_0x9635f8, _0x265a15) {
            return _0x9635f8(_0x265a15);
        },
        'EZCIy': function (_0x2b3ebb, _0x1895f3, _0x307788) {
            return _0x2b3ebb(_0x1895f3, _0x307788);
        },
        'HJseG': function (_0x147e6a) {
            return _0x147e6a();
        },
        'xawpV': '#blue-title',
        'fkueV': function (_0x13dece, _0x599a2b, _0x6341ab) {
            return _0x13dece(_0x599a2b, _0x6341ab);
        },
        'rsXPl': function (_0x278835, _0xad09b3) {
            return _0x278835(_0xad09b3);
        },
        'pVUCh': function (_0x2f4734, _0x185bd8) {
            return _0x2f4734(_0x185bd8);
        },
        'cLCOi': function (_0x4e4adf, _0x5d07ee) {
            return _0x4e4adf(_0x5d07ee);
        },
        'hrsTw': 'VmVyY2Vs',
        'hxtsS': function (_0x2d1447, _0x5b7bc0) {
            return _0x2d1447(_0x5b7bc0);
        },
        'VShAv': '#link-index',
        'dLUtX': '#green-title',
        'GMAeG': 'rgb(0,\x20128,\x200)',
        'MxzEQ': '0|4|2|5|1|3',
        'bzfNL': '/other',
        'LxfIK': '2|4|0|5|3|1',
        'jtMlQ': 'should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20load)',
        'ObqOS': function (_0x56e7d9, _0x3e420e, _0x29e9ad) {
            return _0x56e7d9(_0x3e420e, _0x29e9ad);
        },
        'QDrMn': 'should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20hover)',
        'lqomB': 'should\x20not\x20change\x20color\x20on\x20hover',
        'DMbMJ': function (_0x186e6f, _0x1a68b5, _0x24df9a) {
            return _0x186e6f(_0x1a68b5, _0x24df9a);
        },
        'WPZbk': 'should\x20have\x20correct\x20CSS\x20injection\x20order',
        'pvwrL': 'should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav\x20from\x20index)',
        'qeQVd': 'should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav\x20from\x20other)',
        'NadwX': function (_0x23ecf1, _0x4df30b) {
            return _0x23ecf1(_0x4df30b);
        },
        'EdipV': function (_0x46d898, _0x59d88d, _0x20635c) {
            return _0x46d898(_0x59d88d, _0x20635c);
        },
        'YcpXq': function (_0x231695, _0x4043ab, _0x3d5af1) {
            return _0x231695(_0x4043ab, _0x3d5af1);
        },
        'aTUZy': 'csp-style-src-nonce',
        'IRkuR': function (_0x18983a, _0x1b1fba, _0x5b9c57) {
            return _0x18983a(_0x1b1fba, _0x5b9c57);
        },
        'zFrjs': 'Production\x20Mode',
        'qiWQQ': 'rgb(255,\x200,\x200)',
        'BoCDJ': function (_0x5983ec, _0x3d9195) {
            return _0x5983ec(_0x3d9195);
        },
        'FnTZG': function (_0x4fc18f, _0x360760) {
            return _0x4fc18f(_0x360760);
        },
        'ROJxC': function (_0x38cc1a, _0x37bbbc, _0x2397de) {
            return _0x38cc1a(_0x37bbbc, _0x2397de);
        },
        'aIchR': function (_0x5114b1, _0x5f283c, _0x2c319a) {
            return _0x5114b1(_0x5f283c, _0x2c319a);
        },
        'RulsK': '#black-title',
        'YZSkk': function (_0x3e0d31, _0x184223) {
            return _0x3e0d31(_0x184223);
        },
        'Rtqle': 'rgb(17,\x2017,\x2017)',
        'AgYKS': function (_0x1fdd85, _0x14a231, _0x323b8f) {
            return _0x1fdd85(_0x14a231, _0x323b8f);
        },
        'nyuIV': function (_0x559fff, _0x2545bc) {
            return _0x559fff(_0x2545bc);
        },
        'rzBvw': function (_0x32e5ee, _0xe41325, _0x1ffcb0) {
            return _0x32e5ee(_0xe41325, _0x1ffcb0);
        },
        'FniLX': function (_0x2d3f59, _0x36d6fb) {
            return _0x2d3f59(_0x36d6fb);
        },
        'VNJmj': function (_0x51ad07, _0x40f05c) {
            return _0x51ad07(_0x40f05c);
        },
        'szoLF': '0|2|1|3|4|5',
        'zKkrY': '0|1|5|2|4|3',
        'DrzfP': function (_0x37baaf, _0x12bf13, _0x1332a6) {
            return _0x37baaf(_0x12bf13, _0x1332a6);
        },
        'PUonf': function (_0x1314ab, _0x5305ad) {
            return _0x1314ab(_0x5305ad);
        },
        'czave': function (_0x24e6a3, _0x2d317d) {
            return _0x24e6a3(_0x2d317d);
        },
        'lNzWf': function (_0x2f4d4a, _0x5de7a5) {
            return _0x2f4d4a(_0x5de7a5);
        },
        'QEsdO': function (_0x233329, _0x1afac6, _0x1f067c) {
            return _0x233329(_0x1afac6, _0x1f067c);
        },
        'alXuj': function (_0x2237c3, _0x3dbd29) {
            return _0x2237c3(_0x3dbd29);
        },
        'kNeNC': 'composes-ordering',
        'VIOBY': 'Development\x20Mode',
        'bWpLZ': function (_0x20037e, _0x71a689, _0x2713a4) {
            return _0x20037e(_0x71a689, _0x2713a4);
        },
        'HOdMN': function (_0x42889a, _0x423052) {
            return _0x42889a(_0x423052);
        },
        'ecnmW': 'Application\x20error:\x20a\x20client-side\x20exception\x20has\x20occurred\x20(see\x20the\x20browser\x20console\x20for\x20more\x20information).',
        'DzaYd': function (_0x3142c4, _0x33af11) {
            return _0x3142c4(_0x33af11);
        },
        'DaQoN': function (_0x159117, _0x43d412, _0x3e3fa0) {
            return _0x159117(_0x43d412, _0x3e3fa0);
        },
        'EcsMw': 'not\x20have\x20intermediary\x20page\x20styles\x20on\x20error\x20rendering',
        'RChFq': function (_0x528698, _0xf13a8b) {
            return _0x528698(_0xf13a8b);
        },
        'viLVN': function (_0x28caa7, _0x49c557) {
            return _0x28caa7(_0x49c557);
        },
        'aDPJV': function (_0x487135) {
            return _0x487135();
        },
        'bHaDx': function (_0x445968, _0x5bd73d) {
            return _0x445968(_0x5bd73d);
        },
        'hPHPh': function (_0x100b80, _0x35b1ce, _0x4a99c8) {
            return _0x100b80(_0x35b1ce, _0x4a99c8);
        },
        'YDRlV': function (_0x55cec5, _0x1cb4ff, _0xe2fa5c, _0x532527) {
            return _0x55cec5(_0x1cb4ff, _0xe2fa5c, _0x532527);
        },
        'JHdYk': function (_0x3e5a37, _0x2f6579, _0x16c3bb) {
            return _0x3e5a37(_0x2f6579, _0x16c3bb);
        },
        'SuMIQ': 'transition-cleanup',
        'qlwdl': function (_0x1aee3b, _0x9ee48a, _0x15f43f) {
            return _0x1aee3b(_0x9ee48a, _0x15f43f);
        },
        'PVsya': 'should\x20fall\x20back\x20to\x20server-side\x20transition\x20on\x20missing\x20CSS',
        'geSKk': function (_0xc4a61c, _0x44992e) {
            return _0xc4a61c(_0x44992e);
        },
        'piIHe': 'build-manifest.json',
        'LoEmW': 'pages',
        'WplRC': function (_0x2b250a, _0x1782c1) {
            return _0x2b250a < _0x1782c1;
        },
        'JcVYi': function (_0x2b981d, _0x55fd28) {
            return _0x2b981d(_0x55fd28);
        },
        'bOPFU': function (_0x550191, _0x5556b8) {
            return _0x550191(_0x5556b8);
        },
        'TGfLd': function (_0x28ba8e, _0x17173f, _0x3501ae) {
            return _0x28ba8e(_0x17173f, _0x3501ae);
        },
        'BUDSJ': 'transition-reload',
        'TtiCO': '1|2|3|4|0',
        'kbLGN': 'mounted',
        'XMhcb': function (_0x5df33d, _0x19e052) {
            return _0x5df33d(_0x19e052);
        },
        'wJqGA': '/client',
        'jHkmj': function (_0x1b110b, _0x2fda5c) {
            return _0x1b110b(_0x2fda5c);
        },
        'MDUZq': function (_0x1aef72, _0x24354e, _0x523288) {
            return _0x1aef72(_0x24354e, _0x523288);
        },
        'UjUFX': 'should\x20hydrate\x20black\x20without\x20dependencies\x20manifest',
        'kmqxb': function (_0x3731f5, _0x3138c1, _0x580763) {
            return _0x3731f5(_0x3138c1, _0x580763);
        },
        'lCnPc': 'should\x20hydrate\x20red\x20without\x20dependencies\x20manifest',
        'MeZdH': 'should\x20route\x20from\x20black\x20to\x20red\x20without\x20dependencies',
        'NAPbP': function (_0x14cc4f, _0x3cb641, _0x55b187, _0x50e837) {
            return _0x14cc4f(_0x3cb641, _0x55b187, _0x50e837);
        },
        'HfnZO': function (_0x3e5ef3) {
            return _0x3e5ef3();
        },
        'ZdWwm': 'BUILD_ID',
        'eTQmq': function (_0x416a08, _0x15fd48, _0x338346, _0x15772c, _0x478ad9) {
            return _0x416a08(_0x15fd48, _0x338346, _0x15772c, _0x478ad9);
        },
        'vxJei': '.next/static/',
        'izQUx': '_buildManifest.js',
        'kDSmS': 'Missing\x20build\x20manifest',
        'bRBtO': function (_0x19f557, _0x4f36ee) {
            return _0x19f557(_0x4f36ee);
        },
        'hGhRy': function (_0x48992b) {
            return _0x48992b();
        },
        'KJIUx': function (_0x37d188, _0x10bcbd, _0x6c9abc) {
            return _0x37d188(_0x10bcbd, _0x6c9abc);
        },
        'yrEcs': 'hydrate-without-deps',
        'NVYCs': 'rgb(255,\x20105,\x20180)',
        'EARdO': function (_0x2793e3, _0x1a4b13, _0x461cbe) {
            return _0x2793e3(_0x1a4b13, _0x461cbe);
        },
        'BaOcN': 'rgb(0,\x20255,\x200)',
        'ZDiPt': '2|4|5|0|1|3',
        'JHObY': function (_0x8e4b53, _0x13051e) {
            return _0x8e4b53(_0x13051e);
        },
        'lkkYU': 'should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav)',
        'wZtom': function (_0x1543b1) {
            return _0x1543b1();
        },
        'HeeJQ': function (_0xb791a5, _0x77c7da) {
            return _0xb791a5(_0x77c7da);
        },
        'qauHJ': function (_0x3caf04, _0x13a87a, _0x587c0c) {
            return _0x3caf04(_0x13a87a, _0x587c0c);
        },
        'Exzax': function (_0x5674a7, _0x3b642d) {
            return _0x5674a7(_0x3b642d);
        },
        'WQPzM': function (_0x14ee21, _0x45f9cc) {
            return _0x14ee21(_0x45f9cc);
        },
        'ZSYJY': function (_0x4c1e3c, _0x7b0bd0, _0x7dfd1e) {
            return _0x4c1e3c(_0x7b0bd0, _0x7dfd1e);
        },
        'ZGXPD': function (_0x4f157d, _0x23307d, _0x5f3329, _0x413d1f) {
            return _0x4f157d(_0x23307d, _0x5f3329, _0x413d1f);
        },
        'GFScK': function (_0x66f034, _0x1f70c1, _0x1583da) {
            return _0x66f034(_0x1f70c1, _0x1583da);
        },
        'wgORJ': function (_0x53ea3f, _0x146ee4) {
            return _0x53ea3f(_0x146ee4);
        },
        'NxuSI': function (_0x4c2585) {
            return _0x4c2585();
        },
        'maCib': 'next-issue-12343',
        'yQxtS': function (_0x4d83a8, _0x145c45, _0x538451) {
            return _0x4d83a8(_0x145c45, _0x538451);
        },
        'HQOOv': function (_0xacaf, _0x4cce3f, _0x3bd6f9) {
            return _0xacaf(_0x4cce3f, _0x3bd6f9);
        },
        'SsApl': '.css.map',
        'txBbk': function (_0xc6d8e2, _0x64314d, _0x31b92a) {
            return _0xc6d8e2(_0x64314d, _0x31b92a);
        },
        'NYZjk': function (_0x36e4f7, _0x39c697, _0x1f4efd, _0x435496) {
            return _0x36e4f7(_0x39c697, _0x1f4efd, _0x435496);
        },
        'LUMYR': function (_0x47d9a1, _0x1b17c4) {
            return _0x47d9a1(_0x1b17c4);
        },
        'GMqOT': 'unresolved-css-url',
        'PwgAj': function (_0x383cdb, _0x5c345c, _0x3edf06) {
            return _0x383cdb(_0x5c345c, _0x3edf06);
        },
        'ZauDO': 'should\x20build\x20correctly',
        'bSdrf': function (_0x363b47, _0x446d37, _0x368155) {
            return _0x363b47(_0x446d37, _0x368155);
        },
        'wMzSP': 'should\x20have\x20correct\x20file\x20references\x20in\x20CSS\x20output',
        'ezTCg': function (_0x2a6227, _0x3c1ce7, _0x437033) {
            return _0x2a6227(_0x3c1ce7, _0x437033);
        },
        'tAXyT': 'Basic\x20Global\x20Support',
        'jWJbp': function (_0xc2b673, _0x13bd7e, _0xe6c21b) {
            return _0xc2b673(_0x13bd7e, _0xe6c21b);
        },
        'XinvC': 'Basic\x20Global\x20Support\x20with\x20src/\x20dir',
        'oGbZr': 'Multi\x20Global\x20Support',
        'bTgpC': function (_0x45368a, _0x2b8fd5, _0x47ba98) {
            return _0x45368a(_0x2b8fd5, _0x47ba98);
        },
        'nFVwk': 'Nested\x20@import()\x20Global\x20Support',
        'NFeSj': function (_0x2a9cc3, _0x4f955e, _0x35b8a1) {
            return _0x2a9cc3(_0x4f955e, _0x35b8a1);
        },
        'qdtJp': 'CSS\x20Compilation\x20and\x20Prefixing',
        'EBYLk': 'Multi\x20Global\x20Support\x20(reversed)',
        'ePhjs': 'React\x20Lifecyce\x20Order\x20(dev)',
        'OmdVt': 'React\x20Lifecyce\x20Order\x20(production)',
        'uHoQP': function (_0x530bae, _0x404d80, _0x25c41f) {
            return _0x530bae(_0x404d80, _0x25c41f);
        },
        'VaoSg': 'Invalid\x20CSS\x20in\x20_document',
        'mEFrL': 'Invalid\x20Global\x20CSS',
        'SVZiI': 'Valid\x20Global\x20CSS\x20from\x20npm',
        'nABKY': 'Invalid\x20Global\x20CSS\x20with\x20Custom\x20App',
        'RAUbv': 'Valid\x20and\x20Invalid\x20Global\x20CSS\x20with\x20Custom\x20App',
        'GTHam': 'Can\x20hot\x20reload\x20CSS\x20without\x20losing\x20state',
        'PvNrM': 'Has\x20CSS\x20in\x20computed\x20styles\x20in\x20Development',
        'LHUMZ': function (_0x46e110, _0x2b099f, _0x5a289c) {
            return _0x46e110(_0x2b099f, _0x5a289c);
        },
        'NzupC': 'Body\x20is\x20not\x20hidden\x20when\x20unused\x20in\x20Development',
        'OLjUQ': function (_0x24d0dd, _0x4c9328, _0x373c24) {
            return _0x24d0dd(_0x4c9328, _0x373c24);
        },
        'YmSuE': 'Body\x20is\x20not\x20hidden\x20when\x20broken\x20in\x20Development',
        'EPpLI': function (_0x4a2fbe, _0x2c3337, _0x176987) {
            return _0x4a2fbe(_0x2c3337, _0x176987);
        },
        'hqbmG': 'Has\x20CSS\x20in\x20computed\x20styles\x20in\x20Production',
        'cJjnV': function (_0x43b25e, _0x37552b, _0x2d1827) {
            return _0x43b25e(_0x37552b, _0x2d1827);
        },
        'NJLZX': 'CSS\x20URL\x20via\x20`file-loader`',
        'HdszU': function (_0x244b4b, _0x283080, _0x5a9b7c) {
            return _0x244b4b(_0x283080, _0x5a9b7c);
        },
        'BdsiO': 'CSS\x20URL\x20via\x20`file-loader`\x20and\x20asset\x20prefix\x20(1)',
        'UJYaV': function (_0x354620, _0x53ef45, _0x22e670) {
            return _0x354620(_0x53ef45, _0x22e670);
        },
        'znOmm': 'CSS\x20URL\x20via\x20`file-loader`\x20and\x20asset\x20prefix\x20(2)',
        'TgRxK': function (_0x3e8985, _0x413095, _0x4ca50a) {
            return _0x3e8985(_0x413095, _0x4ca50a);
        },
        'yAQIh': 'Good\x20CSS\x20Import\x20from\x20node_modules',
        'EYsDj': function (_0x4f964d, _0xaba3e4, _0x55eda5) {
            return _0x4f964d(_0xaba3e4, _0x55eda5);
        },
        'JnhJB': 'Good\x20Nested\x20CSS\x20Import\x20from\x20node_modules',
        'xlWPf': function (_0x28867d, _0x5a91ee, _0x52c44d) {
            return _0x28867d(_0x5a91ee, _0x52c44d);
        },
        'IEiDU': 'CSS\x20Import\x20from\x20node_modules',
        'APbin': function (_0x4933c9, _0x3ff278, _0x2807fa) {
            return _0x4933c9(_0x3ff278, _0x2807fa);
        },
        'nfCpA': 'Ordering\x20with\x20styled-jsx\x20(dev)',
        'NqObE': function (_0x23f35a, _0x5a123e, _0x4fd4ac) {
            return _0x23f35a(_0x5a123e, _0x4fd4ac);
        },
        'oBDzw': 'Ordering\x20with\x20styled-jsx\x20(prod)',
        'VUlQx': 'Ordering\x20with\x20Global\x20CSS\x20and\x20Modules\x20(dev)',
        'CHkeB': 'Ordering\x20with\x20Global\x20CSS\x20and\x20Modules\x20(prod)',
        'QcyOE': function (_0x51b1fa, _0x4457dd, _0x571479) {
            return _0x51b1fa(_0x4457dd, _0x571479);
        },
        'dTgaG': 'CSS\x20Property\x20Ordering',
        'VASBy': 'Basic\x20Tailwind\x20CSS',
        'hvDjD': 'Tailwind\x20and\x20Purge\x20CSS',
        'KPUuK': function (_0x209957, _0xd3fde5, _0x68d619) {
            return _0x209957(_0xd3fde5, _0x68d619);
        },
        'spRnF': 'CSS\x20page\x20transition\x20inject\x20<style>\x20with\x20nonce\x20so\x20it\x20works\x20with\x20CSP\x20header',
        'cJwDc': 'CSS\x20Modules\x20Composes\x20Ordering',
        'ACakb': 'CSS\x20Cleanup\x20on\x20Render\x20Failure',
        'Pxqwc': 'Page\x20reload\x20on\x20CSS\x20missing',
        'IBICr': function (_0x4faa44, _0x2d92c1, _0x5aacfe) {
            return _0x4faa44(_0x2d92c1, _0x5aacfe);
        },
        'OpqQY': 'Page\x20hydrates\x20with\x20CSS\x20and\x20not\x20waiting\x20on\x20dependencies',
        'cogvv': 'Basic\x20CSS\x20Modules\x20Ordering',
        'DNFej': 'should\x20handle\x20unresolved\x20files\x20gracefully'
    };
    _0xba521c['ezTCg'](describe, _0xba521c['tAXyT'], () => {
        const _0x1e7d5e = _0xba521c['medgh'](join, fixturesDir, _0xba521c['ruqUy']);
        _0xba521c['idVXZ'](beforeAll, async () => {
            await _0xba521c['PKbvA'](remove, _0xba521c['vHQwz'](join, _0x1e7d5e, _0xba521c['MwUIE']));
        }), _0xba521c['XhADw'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x1956ac,
                stdout: _0x4404d2
            } = await _0xba521c['BDgSe'](nextBuild, _0x1e7d5e, [], { 'stdout': !![] });
            _0xba521c['PKbvA'](expect, _0x1956ac)['toBe'](0x0), _0xba521c['PKbvA'](expect, _0x4404d2)['toMatch'](/Compiled successfully/);
        }), _0xba521c['iFCer'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x175968 = _0xba521c['jwMCS'](join, _0x1e7d5e, _0xba521c['tpshp']), _0x1d0266 = await _0xba521c['ecKAl'](readdir, _0x175968), _0x215825 = _0x1d0266['filter'](_0x41c7e2 => /\.css$/['test'](_0x41c7e2));
            _0xba521c['CSxmn'](expect, _0x215825['length'])['toBe'](0x1), _0xba521c['piTOv'](expect, await _0xba521c['ktsqt'](readFile, _0xba521c['CJKIL'](join, _0x175968, _0x215825[0x0]), _0xba521c['DBAQH']))['toContain'](_0xba521c['lgwPT']);
        });
    }), _0xba521c['jWJbp'](describe, _0xba521c['XinvC'], () => {
        const _0x377c89 = {
                'EYsIt': function (_0x141cce, _0x5a25ff, _0x53298f, _0x22ec95) {
                    return _0xba521c['BVtZW'](_0x141cce, _0x5a25ff, _0x53298f, _0x22ec95);
                },
                'wWiDF': function (_0x55c26a, _0x15ca59) {
                    return _0xba521c['rXnMl'](_0x55c26a, _0x15ca59);
                },
                'utXph': function (_0xf11ad8, _0x1e13e6) {
                    return _0xba521c['cIJYR'](_0xf11ad8, _0x1e13e6);
                },
                'PDazq': function (_0x59740f, _0x12421a, _0xebb9ae) {
                    return _0xba521c['cpKWA'](_0x59740f, _0x12421a, _0xebb9ae);
                },
                'AHEDN': _0xba521c['tpshp'],
                'FrdWD': function (_0x530ad1, _0x2865aa) {
                    return _0xba521c['cIJYR'](_0x530ad1, _0x2865aa);
                },
                'hhlYF': function (_0x58cac2, _0x43f780, _0x4daed7) {
                    return _0xba521c['oEthx'](_0x58cac2, _0x43f780, _0x4daed7);
                },
                'gVSdd': _0xba521c['DBAQH'],
                'EucWg': _0xba521c['lgwPT']
            }, _0x4a47cb = _0xba521c['pxNkG'](join, fixturesDir, _0xba521c['kRlYj']);
        _0xba521c['ufTLi'](beforeAll, async () => {
            await _0xba521c['idVXZ'](remove, _0xba521c['cpKWA'](join, _0x4a47cb, _0xba521c['MwUIE']));
        }), _0xba521c['iiuuo'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x1b0b39,
                stdout: _0xf7fa8e
            } = await _0x377c89['EYsIt'](nextBuild, _0x4a47cb, [], { 'stdout': !![] });
            _0x377c89['wWiDF'](expect, _0x1b0b39)['toBe'](0x0), _0x377c89['utXph'](expect, _0xf7fa8e)['toMatch'](/Compiled successfully/);
        }), _0xba521c['CDYhy'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x5af131 = _0x377c89['PDazq'](join, _0x4a47cb, _0x377c89['AHEDN']), _0x1ce268 = await _0x377c89['utXph'](readdir, _0x5af131), _0x42c0d4 = _0x1ce268['filter'](_0x13ccab => /\.css$/['test'](_0x13ccab));
            _0x377c89['utXph'](expect, _0x42c0d4['length'])['toBe'](0x1), _0x377c89['FrdWD'](expect, await _0x377c89['PDazq'](readFile, _0x377c89['hhlYF'](join, _0x5af131, _0x42c0d4[0x0]), _0x377c89['gVSdd']))['toContain'](_0x377c89['EucWg']);
        });
    }), _0xba521c['jWJbp'](describe, _0xba521c['oGbZr'], () => {
        const _0x4baedd = {
                'KkejZ': function (_0x64e10f, _0x2d99a7) {
                    return _0xba521c['LLsrS'](_0x64e10f, _0x2d99a7);
                },
                'gIDYm': function (_0x547f81, _0x532359, _0x843403) {
                    return _0xba521c['gRfMO'](_0x547f81, _0x532359, _0x843403);
                },
                'LfTyK': _0xba521c['MwUIE'],
                'HFPGA': function (_0x507712, _0x5a307a, _0x1de931, _0x1114a4) {
                    return _0xba521c['KSUVu'](_0x507712, _0x5a307a, _0x1de931, _0x1114a4);
                },
                'pDdsp': function (_0x17accd, _0x4f4d9b) {
                    return _0xba521c['tRnbF'](_0x17accd, _0x4f4d9b);
                }
            }, _0x208240 = _0xba521c['NoHBE'](join, fixturesDir, _0xba521c['xBmfe']);
        _0xba521c['tRnbF'](beforeAll, async () => {
            await _0x4baedd['KkejZ'](remove, _0x4baedd['gIDYm'](join, _0x208240, _0x4baedd['LfTyK']));
        }), _0xba521c['sqxoj'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x1eb944,
                stdout: _0x243761
            } = await _0x4baedd['HFPGA'](nextBuild, _0x208240, [], { 'stdout': !![] });
            _0x4baedd['KkejZ'](expect, _0x1eb944)['toBe'](0x0), _0x4baedd['pDdsp'](expect, _0x243761)['toMatch'](/Compiled successfully/);
        }), _0xba521c['EuxPS'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x513f8d = _0xba521c['CDYhy'](join, _0x208240, _0xba521c['tpshp']), _0x21f6cf = await _0xba521c['iXjmD'](readdir, _0x513f8d), _0x210923 = _0x21f6cf['filter'](_0x1783db => /\.css$/['test'](_0x1783db));
            _0xba521c['FZjVi'](expect, _0x210923['length'])['toBe'](0x1);
            const _0x440ca5 = await _0xba521c['AxnqM'](readFile, _0xba521c['LUysZ'](join, _0x513f8d, _0x210923[0x0]), _0xba521c['DBAQH']);
            _0xba521c['LLsrS'](expect, _0x440ca5['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.red-text{color:red}.blue-text{color:blue}\x22');
        });
    }), _0xba521c['bTgpC'](describe, _0xba521c['nFVwk'], () => {
        const _0x334515 = {
                'Axaez': function (_0x2fc0d4, _0x16855a) {
                    return _0xba521c['RyxvX'](_0x2fc0d4, _0x16855a);
                },
                'PnLaZ': function (_0x49cbd3, _0x5080bd, _0x43e045) {
                    return _0xba521c['skLEC'](_0x49cbd3, _0x5080bd, _0x43e045);
                },
                'lLcuP': _0xba521c['MwUIE'],
                'QzsIU': _0xba521c['tpshp'],
                'yYvMy': function (_0x44ba2b, _0x4072d9) {
                    return _0xba521c['RyxvX'](_0x44ba2b, _0x4072d9);
                },
                'giMhT': function (_0x59c285, _0x4bdb97, _0x43ac31) {
                    return _0xba521c['TRpFW'](_0x59c285, _0x4bdb97, _0x43ac31);
                },
                'geEJY': function (_0x1870d8, _0x2f6071, _0x20cdfd) {
                    return _0xba521c['NfXUK'](_0x1870d8, _0x2f6071, _0x20cdfd);
                },
                'LtJVo': _0xba521c['DBAQH'],
                'WHwCk': function (_0x64b2de, _0x10d8cd) {
                    return _0xba521c['RyxvX'](_0x64b2de, _0x10d8cd);
                }
            }, _0x5ac2a8 = _0xba521c['NfXUK'](join, fixturesDir, _0xba521c['jdLNA']);
        _0xba521c['VLjUZ'](beforeAll, async () => {
            await _0x334515['Axaez'](remove, _0x334515['PnLaZ'](join, _0x5ac2a8, _0x334515['lLcuP']));
        }), _0xba521c['NfXUK'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x79b7dd,
                stdout: _0x94d270
            } = await _0xba521c['KSUVu'](nextBuild, _0x5ac2a8, [], { 'stdout': !![] });
            _0xba521c['tRnbF'](expect, _0x79b7dd)['toBe'](0x0), _0xba521c['RyxvX'](expect, _0x94d270)['toMatch'](/Compiled successfully/);
        }), _0xba521c['lJHnb'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x24d58e = _0x334515['PnLaZ'](join, _0x5ac2a8, _0x334515['QzsIU']), _0x35d9af = await _0x334515['yYvMy'](readdir, _0x24d58e), _0x7662f4 = _0x35d9af['filter'](_0x4186bd => /\.css$/['test'](_0x4186bd));
            _0x334515['yYvMy'](expect, _0x7662f4['length'])['toBe'](0x1);
            const _0x583a3a = await _0x334515['giMhT'](readFile, _0x334515['geEJY'](join, _0x24d58e, _0x7662f4[0x0]), _0x334515['LtJVo']);
            _0x334515['WHwCk'](expect, _0x583a3a['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.red-text{color:purple;font-weight:bolder;color:red}.blue-text{color:orange;font-weight:bolder;color:blue}\x22');
        });
    }), _0xba521c['NFeSj'](describe, _0xba521c['qdtJp'], () => {
        const _0x6d5b3 = {
                'eoGZG': function (_0x4d4988, _0x4bcc8e, _0x447007) {
                    return _0xba521c['lJHnb'](_0x4d4988, _0x4bcc8e, _0x447007);
                },
                'LlPhA': _0xba521c['tpshp'],
                'iFAzS': function (_0x413123, _0x40c25a) {
                    return _0xba521c['onDgs'](_0x413123, _0x40c25a);
                },
                'USSAX': function (_0x2bce10, _0x435dc8) {
                    return _0xba521c['onDgs'](_0x2bce10, _0x435dc8);
                },
                'sPWJB': function (_0x23ccf8, _0x2cbd7b, _0x52f9b8) {
                    return _0xba521c['ZzMzj'](_0x23ccf8, _0x2cbd7b, _0x52f9b8);
                },
                'QXHFE': _0xba521c['DBAQH'],
                'ANFAp': function (_0x1c3e79, _0x579ecd, _0x5c3ff7) {
                    return _0xba521c['ZzMzj'](_0x1c3e79, _0x579ecd, _0x5c3ff7);
                },
                'DmbzN': function (_0x3027b8, _0x25b52b) {
                    return _0xba521c['onDgs'](_0x3027b8, _0x25b52b);
                },
                'JYGgz': function (_0x195dde, _0x24b350, _0xe70d52) {
                    return _0xba521c['bkoYM'](_0x195dde, _0x24b350, _0xe70d52);
                },
                'DDvwo': function (_0x5cae80, _0x5c2ea6, _0x232700) {
                    return _0xba521c['bkoYM'](_0x5cae80, _0x5c2ea6, _0x232700);
                },
                'HfLrk': function (_0xd06725, _0x186b25) {
                    return _0xba521c['onDgs'](_0xd06725, _0x186b25);
                }
            }, _0x2d603c = _0xba521c['bkoYM'](join, fixturesDir, _0xba521c['GqjoG']);
        _0xba521c['dBIWz'](beforeAll, async () => {
            await _0xba521c['VLjUZ'](remove, _0xba521c['lJHnb'](join, _0x2d603c, _0xba521c['MwUIE']));
        }), _0xba521c['IhncW'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x5ae5ae,
                stdout: _0xb9e530
            } = await _0xba521c['glroq'](nextBuild, _0x2d603c, [], { 'stdout': !![] });
            _0xba521c['VLjUZ'](expect, _0x5ae5ae)['toBe'](0x0), _0xba521c['VLjUZ'](expect, _0xb9e530)['toMatch'](/Compiled successfully/);
        }), _0xba521c['IhncW'](it, 'should\x27ve\x20compiled\x20and\x20prefixed', async () => {
            const _0x15a449 = _0x6d5b3['eoGZG'](join, _0x2d603c, _0x6d5b3['LlPhA']), _0x511ea3 = await _0x6d5b3['iFAzS'](readdir, _0x15a449), _0x40224d = _0x511ea3['filter'](_0x574ac5 => /\.css$/['test'](_0x574ac5));
            _0x6d5b3['USSAX'](expect, _0x40224d['length'])['toBe'](0x1);
            const _0x21480b = await _0x6d5b3['sPWJB'](readFile, _0x6d5b3['sPWJB'](join, _0x15a449, _0x40224d[0x0]), _0x6d5b3['QXHFE']);
            _0x6d5b3['USSAX'](expect, _0x21480b['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22@media\x20(min-width:480px)\x20and\x20(max-width:767px){::-moz-placeholder{color:green}:-ms-input-placeholder{color:green}::placeholder{color:green}}.flex-parsing{flex:0\x200\x20calc(50%\x20-\x20var(--vertical-gutter))}.transform-parsing{transform:translate3d(0,0)}.css-grid-shorthand{grid-column:span\x202}.g-docs-sidenav\x20.filter::-webkit-input-placeholder{opacity:80%}\x22'), _0x6d5b3['USSAX'](expect, _0x21480b)['toMatch'](/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
        }), _0xba521c['IhncW'](it, 'should\x27ve\x20emitted\x20a\x20source\x20map', async () => {
            const _0x1abcac = _0x6d5b3['ANFAp'](join, _0x2d603c, _0x6d5b3['LlPhA']), _0x482e16 = await _0x6d5b3['DmbzN'](readdir, _0x1abcac), _0x379886 = _0x482e16['filter'](_0x2dba6e => /\.css\.map$/['test'](_0x2dba6e));
            _0x6d5b3['DmbzN'](expect, _0x379886['length'])['toBe'](0x1);
            const _0x34d81e = (await _0x6d5b3['JYGgz'](readFile, _0x6d5b3['DDvwo'](join, _0x1abcac, _0x379886[0x0]), _0x6d5b3['QXHFE']))['trim'](), {
                    version: _0x14e574,
                    mappings: _0x3b708a,
                    sourcesContent: _0x2b79dc
                } = JSON['parse'](_0x34d81e);
            _0x6d5b3['HfLrk'](expect, {
                'version': _0x14e574,
                'mappings': _0x3b708a,
                'sourcesContent': _0x2b79dc
            })['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22mappings\x22:\x20\x22AAAA,+CACE,mBACE,WACF,CAFA,uBACE,WACF,CAFA,cACE,WACF,CACF,CAEA,cACE,2CACF,CAEA,mBACE,0BACF,CAEA,oBACE,kBACF,CAEA,mDACE,WACF\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sourcesContent\x22:\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22@media\x20(480px\x20<=\x20width\x20<\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20::placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20green;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.flex-parsing\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x200\x200\x20calc(50%\x20-\x20var(--vertical-gutter));\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.transform-parsing\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0px,\x200px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.css-grid-shorthand\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-column:\x20span\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.g-docs-sidenav\x20.filter::-webkit-input-placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x2080%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22version\x22:\x203,\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), _0xba521c['NFeSj'](describe, _0xba521c['EBYLk'], () => {
        const _0x550207 = {
                'ImMLX': function (_0x4478d8, _0x267035) {
                    return _0xba521c['GEMnK'](_0x4478d8, _0x267035);
                },
                'HOVKr': function (_0x5199b9, _0x453722, _0x186963) {
                    return _0xba521c['IhncW'](_0x5199b9, _0x453722, _0x186963);
                },
                'AuRIw': _0xba521c['MwUIE'],
                'zzuzP': function (_0x143475, _0xbb6094, _0x14ffad) {
                    return _0xba521c['cydhk'](_0x143475, _0xbb6094, _0x14ffad);
                },
                'Bhmcn': _0xba521c['tpshp'],
                'yRQxy': function (_0x5bcc5e, _0x344857, _0x35e383) {
                    return _0xba521c['BefLo'](_0x5bcc5e, _0x344857, _0x35e383);
                },
                'dngyw': _0xba521c['DBAQH'],
                'VjrtF': function (_0x455a0b, _0x56afe8) {
                    return _0xba521c['GEMnK'](_0x455a0b, _0x56afe8);
                }
            }, _0x3cd98e = _0xba521c['ouQlA'](join, fixturesDir, _0xba521c['vnjKM']);
        _0xba521c['GEMnK'](beforeAll, async () => {
            await _0x550207['ImMLX'](remove, _0x550207['HOVKr'](join, _0x3cd98e, _0x550207['AuRIw']));
        }), _0xba521c['ouQlA'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x2f2ab2,
                stdout: _0x2489b2
            } = await _0xba521c['pSJAP'](nextBuild, _0x3cd98e, [], { 'stdout': !![] });
            _0xba521c['JuKeV'](expect, _0x2f2ab2)['toBe'](0x0), _0xba521c['JuKeV'](expect, _0x2489b2)['toMatch'](/Compiled successfully/);
        }), _0xba521c['ouQlA'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x3d5e3a = _0x550207['zzuzP'](join, _0x3cd98e, _0x550207['Bhmcn']), _0x506fc0 = await _0x550207['ImMLX'](readdir, _0x3d5e3a), _0x2e5ab = _0x506fc0['filter'](_0x331420 => /\.css$/['test'](_0x331420));
            _0x550207['ImMLX'](expect, _0x2e5ab['length'])['toBe'](0x1);
            const _0x484d0d = await _0x550207['zzuzP'](readFile, _0x550207['yRQxy'](join, _0x3d5e3a, _0x2e5ab[0x0]), _0x550207['dngyw']);
            _0x550207['VjrtF'](expect, _0x484d0d['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.blue-text{color:blue}.red-text{color:red}\x22');
        });
    }), _0xba521c['NFeSj'](describe, _0xba521c['ePhjs'], () => {
        const _0x38f0cc = {
                'TAQUM': function (_0x163fce, _0x372d7e) {
                    return _0xba521c['nZEec'](_0x163fce, _0x372d7e);
                },
                'EWdnE': function (_0x3ccad8, _0x1c432a, _0x39eb89) {
                    return _0xba521c['OwqeZ'](_0x3ccad8, _0x1c432a, _0x39eb89);
                },
                'JVDvK': _0xba521c['MwUIE'],
                'orLjn': function (_0x22c578) {
                    return _0xba521c['VXrNK'](_0x22c578);
                },
                'WcoUu': function (_0x1a1271, _0x296260, _0x25a0a6) {
                    return _0xba521c['OwqeZ'](_0x1a1271, _0x296260, _0x25a0a6);
                }
            }, _0x4e03ed = _0xba521c['OwqeZ'](join, fixturesDir, _0xba521c['ISgfx']);
        _0xba521c['gobhZ'](beforeAll, async () => {
            await _0x38f0cc['TAQUM'](remove, _0x38f0cc['EWdnE'](join, _0x4e03ed, _0x38f0cc['JVDvK']));
        });
        let _0x47f281, _0x1a524a;
        _0xba521c['gobhZ'](beforeAll, async () => {
            _0x47f281 = await _0x38f0cc['orLjn'](findPort), _0x1a524a = await _0x38f0cc['WcoUu'](launchApp, _0x4e03ed, _0x47f281);
        }), _0xba521c['HaNnZ'](afterAll, async () => {
            await _0xba521c['nZEec'](killApp, _0x1a524a);
        }), _0xba521c['YFpqB'](it, _0xba521c['EuDkM'], async () => {
            let _0x519c72;
            try {
                _0x519c72 = await _0xba521c['uQGEP'](_0x327dac, _0x47f281, '/'), await _0x519c72['waitForElementByCss'](_0xba521c['ojByN'])['click']();
                const _0x3a0608 = await _0x519c72['waitForElementByCss'](_0xba521c['doRCf'])['text']();
                _0xba521c['nZEec'](expect, _0x3a0608)['toMatchInlineSnapshot']('\x22rgb(255,\x200,\x200)\x22');
            } finally {
                _0x519c72 && await _0x519c72['close']();
            }
        });
    }), _0xba521c['NFeSj'](describe, _0xba521c['OmdVt'], () => {
        const _0xd02af1 = _0xba521c['dKfRq'](join, fixturesDir, _0xba521c['ISgfx']);
        _0xba521c['fbJQA'](beforeAll, async () => {
            await _0xba521c['HaNnZ'](remove, _0xba521c['YFpqB'](join, _0xd02af1, _0xba521c['MwUIE']));
        });
        let _0xfb9bba, _0x2cbb42, _0x35fb01, _0x335970;
        _0xba521c['tnTMW'](beforeAll, async () => {
            ;
            ({
                code: _0x35fb01,
                stdout: _0x335970
            } = await _0xba521c['weXPP'](nextBuild, _0xd02af1, [], { 'stdout': !![] }), _0xfb9bba = await _0xba521c['VXrNK'](findPort), _0x2cbb42 = await _0xba521c['YFpqB'](nextStart, _0xd02af1, _0xfb9bba));
        }), _0xba521c['tnTMW'](afterAll, async () => {
            await _0xba521c['HaNnZ'](killApp, _0x2cbb42);
        }), _0xba521c['TWiIX'](it, _0xba521c['qkOvf'], () => {
            _0xba521c['HaNnZ'](expect, _0x35fb01)['toBe'](0x0), _0xba521c['HaNnZ'](expect, _0x335970)['toMatch'](/Compiled successfully/);
        }), _0xba521c['aSSjk'](it, _0xba521c['EuDkM'], async () => {
            let _0x4566e9;
            try {
                _0x4566e9 = await _0xba521c['dRGpK'](_0x327dac, _0xfb9bba, '/'), await _0x4566e9['waitForElementByCss'](_0xba521c['ojByN'])['click']();
                const _0x3dc151 = await _0x4566e9['waitForElementByCss'](_0xba521c['doRCf'])['text']();
                _0xba521c['HaNnZ'](expect, _0x3dc151)['toMatchInlineSnapshot']('\x22rgb(255,\x200,\x200)\x22');
            } finally {
                _0x4566e9 && await _0x4566e9['close']();
            }
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['VaoSg'], () => {
        const _0x3c823d = _0xba521c['hLlNR'](join, fixturesDir, _0xba521c['OgsQk']);
        _0xba521c['KWdor'](beforeAll, async () => {
            await _0xba521c['umgBS'](remove, _0xba521c['YxvuJ'](join, _0x3c823d, _0xba521c['MwUIE']));
        }), _0xba521c['hLlNR'](it, _0xba521c['Nckoz'], async () => {
            const {
                code: _0x1635d6,
                stderr: _0x4b828e
            } = await _0xba521c['HpJHQ'](nextBuild, _0x3c823d, [], { 'stderr': !![] });
            _0xba521c['ITbEm'](expect, _0x1635d6)['not']['toBe'](0x0), _0xba521c['VsCzw'](expect, _0x4b828e)['toContain'](_0xba521c['zaaQu']), _0xba521c['VsCzw'](expect, _0x4b828e)['toContain'](_0xba521c['OslYA']), _0xba521c['VsCzw'](expect, _0x4b828e)['toMatch'](/CSS.*cannot.*be imported within.*pages[\\/]_document\.js/), _0xba521c['USlRh'](expect, _0x4b828e)['toMatch'](/Location:.*pages[\\/]_document\.js/);
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['mEFrL'], () => {
        const _0xce5124 = {
                'kJUwP': function (_0x5973f6, _0x43e699, _0x4b4831, _0x375a27) {
                    return _0xba521c['HpJHQ'](_0x5973f6, _0x43e699, _0x4b4831, _0x375a27);
                },
                'ruymF': function (_0xaf7131, _0x31da03) {
                    return _0xba521c['Niapb'](_0xaf7131, _0x31da03);
                },
                'FZJiL': _0xba521c['zaaQu'],
                'ZrZxK': function (_0x382577, _0x1f2026) {
                    return _0xba521c['bbtLF'](_0x382577, _0x1f2026);
                },
                'buwrK': _0xba521c['llPbT'],
                'ayQER': function (_0x211306, _0x4daddc) {
                    return _0xba521c['WHcyz'](_0x211306, _0x4daddc);
                },
                'MAxKA': function (_0x4c5a82, _0x35f9e8) {
                    return _0xba521c['XLTfr'](_0x4c5a82, _0x35f9e8);
                }
            }, _0x1495cc = _0xba521c['GPHVU'](join, fixturesDir, _0xba521c['FSXeH']);
        _0xba521c['XLTfr'](beforeAll, async () => {
            await _0xba521c['Niapb'](remove, _0xba521c['GPHVU'](join, _0x1495cc, _0xba521c['MwUIE']));
        }), _0xba521c['GPHVU'](it, _0xba521c['Nckoz'], async () => {
            const {
                code: _0x4765ab,
                stderr: _0x5d03d8
            } = await _0xce5124['kJUwP'](nextBuild, _0x1495cc, [], { 'stderr': !![] });
            _0xce5124['ruymF'](expect, _0x4765ab)['not']['toBe'](0x0), _0xce5124['ruymF'](expect, _0x5d03d8)['toContain'](_0xce5124['FZJiL']), _0xce5124['ZrZxK'](expect, _0x5d03d8)['toContain'](_0xce5124['buwrK']), _0xce5124['ayQER'](expect, _0x5d03d8)['toMatch'](/Please move all first-party global CSS imports.*?pages(\/|\\)_app/), _0xce5124['MAxKA'](expect, _0x5d03d8)['toMatch'](/Location:.*pages[\\/]index\.js/);
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['SVZiI'], () => {
        const _0x311a8b = {
                'xFCoL': function (_0x358abe, _0x2caee0) {
                    return _0xba521c['GqcGQ'](_0x358abe, _0x2caee0);
                },
                'asyFt': function (_0x57cc21, _0x12bc1c, _0x31f62a) {
                    return _0xba521c['hSGNh'](_0x57cc21, _0x12bc1c, _0x31f62a);
                },
                'bqcYu': _0xba521c['MwUIE'],
                'jnqzS': _0xba521c['tpshp'],
                'nqDGw': function (_0x436543, _0x30929a) {
                    return _0xba521c['GqcGQ'](_0x436543, _0x30929a);
                },
                'ZrOBg': _0xba521c['DBAQH']
            }, _0x38530a = _0xba521c['KplOO'](join, fixturesDir, _0xba521c['onVPN']);
        _0xba521c['GqcGQ'](beforeAll, async () => {
            await _0x311a8b['xFCoL'](remove, _0x311a8b['asyFt'](join, _0x38530a, _0x311a8b['bqcYu']));
        }), _0xba521c['hcAOD'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x39bafb,
                stdout: _0x3da3ed
            } = await _0xba521c['HpJHQ'](nextBuild, _0x38530a, [], { 'stdout': !![] });
            _0xba521c['XLTfr'](expect, _0x39bafb)['toBe'](0x0), _0xba521c['XLTfr'](expect, _0x3da3ed)['toMatch'](/Compiled successfully/);
        }), _0xba521c['hcAOD'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x4f76ca = _0x311a8b['asyFt'](join, _0x38530a, _0x311a8b['jnqzS']), _0x305fbf = await _0x311a8b['nqDGw'](readdir, _0x4f76ca), _0x31b324 = _0x305fbf['filter'](_0x763cf3 => /\.css$/['test'](_0x763cf3));
            _0x311a8b['nqDGw'](expect, _0x31b324['length'])['toBe'](0x1);
            const _0x37b3d8 = await _0x311a8b['asyFt'](readFile, _0x311a8b['asyFt'](join, _0x4f76ca, _0x31b324[0x0]), _0x311a8b['ZrOBg']);
            _0x311a8b['nqDGw'](expect, _0x37b3d8['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.red-text{color:\x5c\x22red\x5c\x22}\x22');
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['nABKY'], () => {
        const _0x390a56 = {
                'ctqHz': function (_0x517c4e, _0x1ff5eb, _0x388b55, _0xdc2f2f) {
                    return _0xba521c['HpJHQ'](_0x517c4e, _0x1ff5eb, _0x388b55, _0xdc2f2f);
                },
                'Vosrk': function (_0x2d1e49, _0x5c5da4) {
                    return _0xba521c['gferD'](_0x2d1e49, _0x5c5da4);
                },
                'dWkDQ': function (_0x39ef01, _0x3a70c4) {
                    return _0xba521c['xTAzA'](_0x39ef01, _0x3a70c4);
                },
                'uHlvt': _0xba521c['zaaQu'],
                'bBvWP': function (_0x2a4a84, _0xcf5393) {
                    return _0xba521c['xTAzA'](_0x2a4a84, _0xcf5393);
                },
                'yODZy': _0xba521c['llPbT'],
                'AdrOu': function (_0x13f49b, _0x55a5c3) {
                    return _0xba521c['bucnT'](_0x13f49b, _0x55a5c3);
                }
            }, _0x8b4be5 = _0xba521c['hcAOD'](join, fixturesDir, _0xba521c['DJkWr']);
        _0xba521c['zXsBr'](beforeAll, async () => {
            await _0xba521c['GqcGQ'](remove, _0xba521c['hcAOD'](join, _0x8b4be5, _0xba521c['MwUIE']));
        }), _0xba521c['hcAOD'](it, _0xba521c['Nckoz'], async () => {
            const {
                code: _0x1e1ac3,
                stderr: _0x1235a8
            } = await _0x390a56['ctqHz'](nextBuild, _0x8b4be5, [], { 'stderr': !![] });
            _0x390a56['Vosrk'](expect, _0x1e1ac3)['not']['toBe'](0x0), _0x390a56['dWkDQ'](expect, _0x1235a8)['toContain'](_0x390a56['uHlvt']), _0x390a56['bBvWP'](expect, _0x1235a8)['toContain'](_0x390a56['yODZy']), _0x390a56['AdrOu'](expect, _0x1235a8)['toMatch'](/Please move all first-party global CSS imports.*?pages(\/|\\)_app/), _0x390a56['AdrOu'](expect, _0x1235a8)['toMatch'](/Location:.*pages[\\/]index\.js/);
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['RAUbv'], () => {
        const _0x1ad83c = {
                'yIzNI': function (_0x4b079b, _0x13072a) {
                    return _0xba521c['HUGfR'](_0x4b079b, _0x13072a);
                },
                'KGOMp': function (_0x7ee5a3, _0x58190c, _0x45d537) {
                    return _0xba521c['AnkyY'](_0x7ee5a3, _0x58190c, _0x45d537);
                },
                'UxXKN': _0xba521c['MwUIE']
            }, _0x4821a6 = _0xba521c['fWfTb'](join, fixturesDir, _0xba521c['VWddP']);
        _0xba521c['HUGfR'](beforeAll, async () => {
            await _0x1ad83c['yIzNI'](remove, _0x1ad83c['KGOMp'](join, _0x4821a6, _0x1ad83c['UxXKN']));
        }), _0xba521c['FQsEY'](it, _0xba521c['Nckoz'], async () => {
            const {
                code: _0x55e2e2,
                stderr: _0x2538d8
            } = await _0xba521c['HpJHQ'](nextBuild, _0x4821a6, [], { 'stderr': !![] });
            _0xba521c['zXsBr'](expect, _0x55e2e2)['not']['toBe'](0x0), _0xba521c['zXsBr'](expect, _0x2538d8)['toContain'](_0xba521c['zaaQu']), _0xba521c['zXsBr'](expect, _0x2538d8)['toContain'](_0xba521c['llPbT']), _0xba521c['eUcNe'](expect, _0x2538d8)['toContain'](_0xba521c['DQrHh']), _0xba521c['NVSIj'](expect, _0x2538d8)['toMatch'](/Location:.*pages[\\/]index\.js/);
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['GTHam'], () => {
        const _0x1ebd0e = _0xba521c['ZKveC'](join, fixturesDir, _0xba521c['uMVcN']);
        _0xba521c['xMmYB'](beforeAll, async () => {
            await _0xba521c['HUGfR'](remove, _0xba521c['oCFqk'](join, _0x1ebd0e, _0xba521c['MwUIE']));
        });
        let _0x5b7e58, _0x4711da;
        _0xba521c['MGmOP'](beforeAll, async () => {
            _0x5b7e58 = await _0xba521c['VXrNK'](findPort), _0x4711da = await _0xba521c['dtCRX'](launchApp, _0x1ebd0e, _0x5b7e58);
        }), _0xba521c['MGmOP'](afterAll, async () => {
            await _0xba521c['xMmYB'](killApp, _0x4711da);
        }), _0xba521c['GaOaO'](it, _0xba521c['MVtml'], async () => {
            let _0x466aab;
            try {
                _0x466aab = await _0xba521c['dtCRX'](_0x327dac, _0x5b7e58, _0xba521c['EibfU']);
                const _0x3f88f2 = _0xba521c['hIouJ'];
                await _0x466aab['elementById'](_0xba521c['VKGty'])['type'](_0x3f88f2), _0xba521c['xMmYB'](expect, await _0x466aab['elementById'](_0xba521c['VKGty'])['getValue']())['toBe'](_0x3f88f2);
                const _0x17e056 = await _0x466aab['eval']('window.getComputedStyle(document.querySelector(\x27.red-text\x27)).color');
                _0xba521c['xMmYB'](expect, _0x17e056)['toMatchInlineSnapshot']('\x22rgb(255,\x200,\x200)\x22');
                const _0x46114a = new File(_0xba521c['dtCRX'](join, _0x1ebd0e, _0xba521c['Reraz']));
                try {
                    _0x46114a['replace'](_0xba521c['JpldI'], _0xba521c['FVAjs']), await _0xba521c['ZKveC'](check, () => _0x466aab['eval']('window.getComputedStyle(document.querySelector(\x27.red-text\x27)).color'), _0xba521c['jeNWg']), _0xba521c['xMmYB'](expect, await _0x466aab['elementById'](_0xba521c['VKGty'])['getValue']())['toBe'](_0x3f88f2);
                } finally {
                    _0x46114a['restore']();
                }
            } finally {
                _0x466aab && await _0x466aab['close']();
            }
        });
    }), _0xba521c['uHoQP'](describe, _0xba521c['PvNrM'], () => {
        const _0xbef767 = _0xba521c['aSKQk'](join, fixturesDir, _0xba521c['uMVcN']);
        _0xba521c['aVUNJ'](beforeAll, async () => {
            await _0xba521c['qgQal'](remove, _0xba521c['aSKQk'](join, _0xbef767, _0xba521c['MwUIE']));
        });
        let _0x2e4c7a, _0x264c95;
        _0xba521c['aVUNJ'](beforeAll, async () => {
            _0x2e4c7a = await _0xba521c['VXrNK'](findPort), _0x264c95 = await _0xba521c['aSKQk'](launchApp, _0xbef767, _0x2e4c7a);
        }), _0xba521c['mtjzt'](afterAll, async () => {
            await _0xba521c['qgQal'](killApp, _0x264c95);
        }), _0xba521c['EUQsi'](it, _0xba521c['PxrkP'], async () => {
            let _0x258d44;
            try {
                _0x258d44 = await _0xba521c['aSKQk'](_0x327dac, _0x2e4c7a, _0xba521c['pxaUL']);
                const _0x2fe484 = await _0x258d44['eval']('window.getComputedStyle(document.querySelector(\x27.blue-text\x27)).color');
                _0xba521c['OgMET'](expect, _0x2fe484)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
            } finally {
                _0x258d44 && await _0x258d44['close']();
            }
        });
    }), _0xba521c['LHUMZ'](describe, _0xba521c['NzupC'], () => {
        const _0x19643a = {
                'IxYLl': function (_0x3e64a3, _0x2ab1aa) {
                    return _0xba521c['PtgLM'](_0x3e64a3, _0x2ab1aa);
                },
                'cbMYY': function (_0x55b134, _0x297108, _0x31abb4) {
                    return _0xba521c['EUQsi'](_0x55b134, _0x297108, _0x31abb4);
                },
                'PWMvl': function (_0x197fa6, _0xfb29d5) {
                    return _0xba521c['PtgLM'](_0x197fa6, _0xfb29d5);
                },
                'MRqhX': _0xba521c['kIHJv']
            }, _0x493553 = _0xba521c['EUQsi'](join, fixturesDir, _0xba521c['zIBOM']);
        _0xba521c['ePOCr'](beforeAll, async () => {
            await _0xba521c['PtgLM'](remove, _0xba521c['EUQsi'](join, _0x493553, _0xba521c['MwUIE']));
        });
        let _0x3bcb31, _0xaa6456;
        _0xba521c['wHTQr'](beforeAll, async () => {
            _0x3bcb31 = await _0xba521c['jJZgE'](findPort), _0xaa6456 = await _0xba521c['EUQsi'](launchApp, _0x493553, _0x3bcb31);
        }), _0xba521c['Qhdgy'](afterAll, async () => {
            await _0x19643a['IxYLl'](killApp, _0xaa6456);
        }), _0xba521c['YUPyS'](it, _0xba521c['bQGpJ'], async () => {
            let _0xda254f;
            try {
                _0xda254f = await _0x19643a['cbMYY'](_0x327dac, _0x3bcb31, '/');
                const _0x1a7550 = await _0xda254f['eval']('window.getComputedStyle(document.querySelector(\x27body\x27)).display');
                _0x19643a['PWMvl'](expect, _0x1a7550)['toBe'](_0x19643a['MRqhX']);
            } finally {
                _0xda254f && await _0xda254f['close']();
            }
        });
    }), _0xba521c['OLjUQ'](describe, _0xba521c['YmSuE'], () => {
        const _0x431447 = {
                'mJYZB': function (_0x4d9785, _0x5019e6) {
                    return _0xba521c['IVerR'](_0x4d9785, _0x5019e6);
                },
                'WhUiZ': function (_0x918891, _0x1a6189, _0x372106) {
                    return _0xba521c['ClboE'](_0x918891, _0x1a6189, _0x372106);
                },
                'mqKiJ': _0xba521c['MwUIE'],
                'ltmUk': function (_0x482de3) {
                    return _0xba521c['jJZgE'](_0x482de3);
                },
                'Yseww': function (_0x53f1c5, _0x2a19e2, _0x1f08ee) {
                    return _0xba521c['ClboE'](_0x53f1c5, _0x2a19e2, _0x1f08ee);
                },
                'sKUMj': function (_0x260c27, _0x11cc04, _0x39fd2e) {
                    return _0xba521c['ClboE'](_0x260c27, _0x11cc04, _0x39fd2e);
                },
                'RcgOX': _0xba521c['LnoTs'],
                'RWXlp': _0xba521c['nAjLG'],
                'VUhla': _0xba521c['AEAJH'],
                'OLXDe': function (_0x5e0f5e, _0x1f0566) {
                    return _0xba521c['IVerR'](_0x5e0f5e, _0x1f0566);
                },
                'kMQbz': function (_0x40a141, _0x4451cf, _0x13b3a2) {
                    return _0xba521c['ClboE'](_0x40a141, _0x4451cf, _0x13b3a2);
                },
                'PueIo': _0xba521c['kIHJv']
            }, _0x2dae09 = _0xba521c['NKyrf'](join, fixturesDir, _0xba521c['zIBOM']);
        let _0x40cb5b, _0x3a6312;
        _0xba521c['rptQZ'](beforeAll, async () => {
            await _0x431447['mJYZB'](remove, _0x431447['WhUiZ'](join, _0x2dae09, _0x431447['mqKiJ'])), _0x40cb5b = await _0x431447['ltmUk'](findPort), _0x3a6312 = await _0x431447['Yseww'](launchApp, _0x2dae09, _0x40cb5b);
        }), _0xba521c['IVCda'](afterAll, async () => {
            await _0xba521c['qPpOU'](killApp, _0x3a6312);
        }), _0xba521c['onZQt'](it, _0xba521c['bQGpJ'], async () => {
            const _0x363b2e = new File(_0x431447['sKUMj'](join, _0x2dae09, _0x431447['RcgOX']));
            let _0x525ed8;
            try {
                _0x363b2e['replace'](_0x431447['RWXlp'], _0x431447['VUhla']), await _0x431447['OLXDe'](waitFor, 0x7d0), _0x525ed8 = await _0x431447['kMQbz'](_0x327dac, _0x40cb5b, '/');
                const _0x411692 = await _0x525ed8['eval']('window.getComputedStyle(document.querySelector(\x27body\x27)).display');
                _0x431447['OLXDe'](expect, _0x411692)['toBe'](_0x431447['PueIo']);
            } finally {
                _0x363b2e['restore'](), _0x525ed8 && await _0x525ed8['close']();
            }
        });
    }), _0xba521c['EPpLI'](describe, _0xba521c['hqbmG'], () => {
        const _0x902a00 = {
                'TCaPQ': function (_0x3ba044, _0x5254fd) {
                    return _0xba521c['uzszP'](_0x3ba044, _0x5254fd);
                },
                'nSXOW': function (_0x29445b, _0x8388ae) {
                    return _0xba521c['uzszP'](_0x29445b, _0x8388ae);
                },
                'LPTDA': function (_0x252697, _0x1812a7, _0x13394a) {
                    return _0xba521c['onZQt'](_0x252697, _0x1812a7, _0x13394a);
                },
                'sLDVM': _0xba521c['pxaUL'],
                'qDuAW': function (_0x19b8eb, _0x2b8009) {
                    return _0xba521c['mSXGE'](_0x19b8eb, _0x2b8009);
                }
            }, _0x15d768 = _0xba521c['onZQt'](join, fixturesDir, _0xba521c['uMVcN']);
        let _0x46cc6d, _0x1968b6, _0xcca72f, _0x4af471;
        _0xba521c['aLNAJ'](beforeAll, async () => {
            await _0xba521c['sIekW'](remove, _0xba521c['onZQt'](join, _0x15d768, _0xba521c['MwUIE'])), {
                code: _0x4af471,
                stdout: _0xcca72f
            } = await _0xba521c['MyukX'](nextBuild, _0x15d768, [], { 'stdout': !![] }), _0x46cc6d = await _0xba521c['jJZgE'](findPort), _0x1968b6 = await _0xba521c['onZQt'](nextStart, _0x15d768, _0x46cc6d);
        }), _0xba521c['aLNAJ'](afterAll, async () => {
            await _0xba521c['feVbh'](killApp, _0x1968b6);
        }), _0xba521c['IkiMm'](it, _0xba521c['qkOvf'], () => {
            _0x902a00['TCaPQ'](expect, _0x4af471)['toBe'](0x0), _0x902a00['nSXOW'](expect, _0xcca72f)['toMatch'](/Compiled successfully/);
        }), _0xba521c['IkiMm'](it, _0xba521c['PxrkP'], async () => {
            const _0x369621 = await _0x902a00['LPTDA'](_0x327dac, _0x46cc6d, _0x902a00['sLDVM']), _0x627c15 = await _0x369621['eval']('window.getComputedStyle(document.querySelector(\x27.blue-text\x27)).color');
            _0x902a00['qDuAW'](expect, _0x627c15)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
        }), _0xba521c['xYAXX'](it, 'should\x27ve\x20preloaded\x20the\x20CSS\x20file\x20and\x20injected\x20it\x20in\x20<head>', async () => {
            const _0x3f56ac = await _0xba521c['onZQt'](renderViaHTTP, _0x46cc6d, _0xba521c['pxaUL']), _0x3a9dae = _0x20ba08['load'](_0x3f56ac), _0x4e038d = _0xba521c['feVbh'](_0x3a9dae, _0xba521c['IquMt']);
            _0xba521c['feVbh'](expect, _0x4e038d['length'])['toBe'](0x1), _0xba521c['feVbh'](expect, _0x4e038d['attr'](_0xba521c['svVNF']))['toMatch'](/^\/_next\/static\/css\/.*\.css$/);
            const _0x5916b5 = _0xba521c['MeXoo'](_0x3a9dae, _0xba521c['NXiQg']);
            _0xba521c['xoBbY'](expect, _0x5916b5['length'])['toBe'](0x1), _0xba521c['dyXyN'](expect, _0x5916b5['attr'](_0xba521c['svVNF']))['toMatch'](/^\/_next\/static\/css\/.*\.css$/);
            const _0x4bb95d = []['slice']['call'](_0xba521c['uzszP'](_0x3a9dae, _0xba521c['ceecI'])), _0x268cad = _0x4bb95d['flatMap']((_0x4becf3, _0x673e40) => _0x4becf3['attribs']['as'] === 'style' ? _0x673e40 : []);
            _0xba521c['uzszP'](expect, _0x268cad)['toEqual']([0x0]);
        });
    }), _0xba521c['cJjnV'](describe, _0xba521c['NJLZX'], () => {
        const _0x3714d2 = {
                'AtMVD': function (_0x30d92d, _0xa8dd1) {
                    return _0xba521c['ZPqpq'](_0x30d92d, _0xa8dd1);
                },
                'rHlQO': function (_0x41dd0c, _0x9907ca, _0xcd889b) {
                    return _0xba521c['ZYCur'](_0x41dd0c, _0x9907ca, _0xcd889b);
                },
                'NJdOx': _0xba521c['MwUIE'],
                'JigUg': function (_0xe8e952, _0x2e29cd, _0x876073) {
                    return _0xba521c['ZYCur'](_0xe8e952, _0x2e29cd, _0x876073);
                },
                'BMAyR': _0xba521c['tpshp'],
                'Sjuks': _0xba521c['cmtxo'],
                'LSILa': function (_0x35abd2, _0x6d61b1) {
                    return _0xba521c['ZPqpq'](_0x35abd2, _0x6d61b1);
                },
                'bhbMK': function (_0x5e232c, _0x4acc78, _0x4d914e) {
                    return _0xba521c['MtRha'](_0x5e232c, _0x4acc78, _0x4d914e);
                },
                'RqjHM': function (_0x574b45, _0x3b8312, _0x279207) {
                    return _0xba521c['RKMYo'](_0x574b45, _0x3b8312, _0x279207);
                },
                'StKHl': _0xba521c['DBAQH'],
                'QbfQd': function (_0x377c0b, _0x1bd53e) {
                    return _0xba521c['ZPqpq'](_0x377c0b, _0x1bd53e);
                },
                'Ruoyx': function (_0x20744f, _0x453c00) {
                    return _0xba521c['ZPqpq'](_0x20744f, _0x453c00);
                },
                'OEdkm': function (_0x5ea412, _0xd64a74) {
                    return _0xba521c['MywaP'](_0x5ea412, _0xd64a74);
                },
                'XtZdM': function (_0x14360a, _0xf7c580) {
                    return _0xba521c['bpzeU'](_0x14360a, _0xf7c580);
                }
            }, _0x5329c1 = _0xba521c['cevax'](join, fixturesDir, _0xba521c['GQfon']);
        _0xba521c['bpzeU'](beforeAll, async () => {
            await _0x3714d2['AtMVD'](remove, _0x3714d2['rHlQO'](join, _0x5329c1, _0x3714d2['NJdOx']));
        }), _0xba521c['cevax'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x4868dd,
                stdout: _0x27e5f0
            } = await _0xba521c['MyukX'](nextBuild, _0x5329c1, [], { 'stdout': !![] });
            _0xba521c['aLNAJ'](expect, _0x4868dd)['toBe'](0x0), _0xba521c['LnMsv'](expect, _0x27e5f0)['toMatch'](/Compiled successfully/);
        }), _0xba521c['cevax'](it, 'should\x27ve\x20emitted\x20expected\x20files', async () => {
            const _0x52e4e5 = _0x3714d2['JigUg'](join, _0x5329c1, _0x3714d2['BMAyR']), _0x1f1918 = _0x3714d2['JigUg'](join, _0x5329c1, _0x3714d2['Sjuks']), _0x33af7a = await _0x3714d2['AtMVD'](readdir, _0x52e4e5), _0x573cda = _0x33af7a['filter'](_0x57474e => /\.css$/['test'](_0x57474e));
            _0x3714d2['LSILa'](expect, _0x573cda['length'])['toBe'](0x1);
            const _0x51c758 = await _0x3714d2['bhbMK'](readFile, _0x3714d2['RqjHM'](join, _0x52e4e5, _0x573cda[0x0]), _0x3714d2['StKHl']);
            _0x3714d2['QbfQd'](expect, _0x51c758['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/^\.red-text\{color:red;background-image:url\(\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
            const _0x101fc1 = await _0x3714d2['Ruoyx'](readdir, _0x1f1918);
            _0x3714d2['OEdkm'](expect, _0x101fc1['length'])['toBe'](0x3), _0x3714d2['XtZdM'](expect, _0x101fc1['map'](_0x441bc0 => /^(.+?)\..{32}\.(.+?)$/['exec'](_0x441bc0)['slice'](0x1)['join']('.'))['sort']())['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark2.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22light.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), _0xba521c['HdszU'](describe, _0xba521c['BdsiO'], () => {
        const _0x2250fb = {
                'YTYoV': function (_0x397945, _0x19b275) {
                    return _0xba521c['WBIxk'](_0x397945, _0x19b275);
                },
                'jnhWN': function (_0x22b827, _0x2f4b35, _0x3a3867) {
                    return _0xba521c['nSfmA'](_0x22b827, _0x2f4b35, _0x3a3867);
                },
                'TcMkT': _0xba521c['MwUIE'],
                'stBym': _0xba521c['tpshp'],
                'AizZE': _0xba521c['cmtxo'],
                'VofDK': function (_0x126fd7, _0x403a85) {
                    return _0xba521c['WBIxk'](_0x126fd7, _0x403a85);
                },
                'ivcUO': function (_0x369ffc, _0x3b73bb) {
                    return _0xba521c['LnRIV'](_0x369ffc, _0x3b73bb);
                },
                'BLtYH': _0xba521c['DBAQH'],
                'pTIXk': function (_0x2e5a0f, _0x552e11) {
                    return _0xba521c['LnRIV'](_0x2e5a0f, _0x552e11);
                },
                'JAUad': function (_0x23385a, _0x77464c) {
                    return _0xba521c['LnRIV'](_0x23385a, _0x77464c);
                },
                'sxLAV': function (_0x214122, _0x3b8d3a) {
                    return _0xba521c['LnRIV'](_0x214122, _0x3b8d3a);
                }
            }, _0x488317 = _0xba521c['nSfmA'](join, fixturesDir, _0xba521c['RkFql']);
        _0xba521c['BoOIA'](beforeAll, async () => {
            await _0x2250fb['YTYoV'](remove, _0x2250fb['jnhWN'](join, _0x488317, _0x2250fb['TcMkT']));
        }), _0xba521c['nSfmA'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x44be06,
                stdout: _0x373559
            } = await _0xba521c['zrazN'](nextBuild, _0x488317, [], { 'stdout': !![] });
            _0xba521c['WBIxk'](expect, _0x44be06)['toBe'](0x0), _0xba521c['WBIxk'](expect, _0x373559)['toMatch'](/Compiled successfully/);
        }), _0xba521c['YEqVb'](it, 'should\x27ve\x20emitted\x20expected\x20files', async () => {
            const _0x14e8ce = _0x2250fb['jnhWN'](join, _0x488317, _0x2250fb['stBym']), _0x2d3cc7 = _0x2250fb['jnhWN'](join, _0x488317, _0x2250fb['AizZE']), _0x169b43 = await _0x2250fb['VofDK'](readdir, _0x14e8ce), _0xea84ee = _0x169b43['filter'](_0x487368 => /\.css$/['test'](_0x487368));
            _0x2250fb['ivcUO'](expect, _0xea84ee['length'])['toBe'](0x1);
            const _0xb95d14 = await _0x2250fb['jnhWN'](readFile, _0x2250fb['jnhWN'](join, _0x14e8ce, _0xea84ee[0x0]), _0x2250fb['BLtYH']);
            _0x2250fb['pTIXk'](expect, _0xb95d14['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/^\.red-text\{color:red;background-image:url\(\/foo\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/foo\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/foo\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
            const _0x5f6331 = await _0x2250fb['JAUad'](readdir, _0x2d3cc7);
            _0x2250fb['JAUad'](expect, _0x5f6331['length'])['toBe'](0x3), _0x2250fb['sxLAV'](expect, _0x5f6331['map'](_0x56bc72 => /^(.+?)\..{32}\.(.+?)$/['exec'](_0x56bc72)['slice'](0x1)['join']('.'))['sort']())['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark2.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22light.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), _0xba521c['UJYaV'](describe, _0xba521c['znOmm'], () => {
        const _0x45b940 = {
                'ouTvq': function (_0x18d4a0, _0x4a3db7) {
                    return _0xba521c['hKMrk'](_0x18d4a0, _0x4a3db7);
                },
                'ucOYv': function (_0x525038, _0x3db5af, _0x43e324) {
                    return _0xba521c['EdWhz'](_0x525038, _0x3db5af, _0x43e324);
                },
                'BBZFy': _0xba521c['MwUIE'],
                'MwMSG': function (_0x33459a, _0x136e8c, _0x4dea6e, _0x251129) {
                    return _0xba521c['CBsTu'](_0x33459a, _0x136e8c, _0x4dea6e, _0x251129);
                },
                'kIVTY': function (_0x3d1055, _0x4128d7) {
                    return _0xba521c['hKMrk'](_0x3d1055, _0x4128d7);
                }
            }, _0x2e3714 = _0xba521c['EdWhz'](join, fixturesDir, _0xba521c['PSuUu']);
        _0xba521c['QBPBq'](beforeAll, async () => {
            await _0x45b940['ouTvq'](remove, _0x45b940['ucOYv'](join, _0x2e3714, _0x45b940['BBZFy']));
        }), _0xba521c['DtYOM'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0xc80bc3,
                stdout: _0x358684
            } = await _0x45b940['MwMSG'](nextBuild, _0x2e3714, [], { 'stdout': !![] });
            _0x45b940['ouTvq'](expect, _0xc80bc3)['toBe'](0x0), _0x45b940['kIVTY'](expect, _0x358684)['toMatch'](/Compiled successfully/);
        }), _0xba521c['DtYOM'](it, 'should\x27ve\x20emitted\x20expected\x20files', async () => {
            const _0x4910b0 = _0xba521c['Xnfxz'](join, _0x2e3714, _0xba521c['tpshp']), _0x1f42fe = _0xba521c['KQOUQ'](join, _0x2e3714, _0xba521c['cmtxo']), _0x5d7c43 = await _0xba521c['GbZmn'](readdir, _0x4910b0), _0x412c35 = _0x5d7c43['filter'](_0x3df746 => /\.css$/['test'](_0x3df746));
            _0xba521c['ETGYv'](expect, _0x412c35['length'])['toBe'](0x1);
            const _0x4b9580 = await _0xba521c['KQOUQ'](readFile, _0xba521c['bNkZM'](join, _0x4910b0, _0x412c35[0x0]), _0xba521c['DBAQH']);
            _0xba521c['ETGYv'](expect, _0x4b9580['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/^\.red-text\{color:red;background-image:url\(\/foo\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/foo\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/foo\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
            const _0x3d4a4e = await _0xba521c['ETGYv'](readdir, _0x1f42fe);
            _0xba521c['ETGYv'](expect, _0x3d4a4e['length'])['toBe'](0x3), _0xba521c['ETGYv'](expect, _0x3d4a4e['map'](_0x41d3b0 => /^(.+?)\..{32}\.(.+?)$/['exec'](_0x41d3b0)['slice'](0x1)['join']('.'))['sort']())['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark2.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22light.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), _0xba521c['TgRxK'](describe, _0xba521c['yAQIh'], () => {
        const _0x1a4f4a = {
                'fqtnv': function (_0x4863c9, _0x3a4689) {
                    return _0xba521c['ifoyu'](_0x4863c9, _0x3a4689);
                },
                'BdqQi': function (_0x113886, _0x46627, _0x1c73e6) {
                    return _0xba521c['uDXmC'](_0x113886, _0x46627, _0x1c73e6);
                },
                'ucJhO': _0xba521c['MwUIE'],
                'KvmGX': function (_0x5dff14, _0x3bd271, _0x104566, _0x2914a2) {
                    return _0xba521c['CBsTu'](_0x5dff14, _0x3bd271, _0x104566, _0x2914a2);
                },
                'pdfBh': function (_0x2a6e14, _0x3a2121) {
                    return _0xba521c['ifoyu'](_0x2a6e14, _0x3a2121);
                }
            }, _0x5a2c3e = _0xba521c['uDXmC'](join, fixturesDir, _0xba521c['qYWko']);
        _0xba521c['CDkjS'](beforeAll, async () => {
            await _0x1a4f4a['fqtnv'](remove, _0x1a4f4a['BdqQi'](join, _0x5a2c3e, _0x1a4f4a['ucJhO']));
        }), _0xba521c['uDXmC'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x1f8265,
                stdout: _0x22ddb7
            } = await _0x1a4f4a['KvmGX'](nextBuild, _0x5a2c3e, [], { 'stdout': !![] });
            _0x1a4f4a['fqtnv'](expect, _0x1f8265)['toBe'](0x0), _0x1a4f4a['pdfBh'](expect, _0x22ddb7)['toMatch'](/Compiled successfully/);
        }), _0xba521c['uDXmC'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x588908 = _0xba521c['ziuem'](join, _0x5a2c3e, _0xba521c['tpshp']), _0xc1d77a = await _0xba521c['QBPBq'](readdir, _0x588908), _0x202673 = _0xc1d77a['filter'](_0x2b91e2 => /\.css$/['test'](_0x2b91e2));
            _0xba521c['aHndQ'](expect, _0x202673['length'])['toBe'](0x1);
            const _0x5c9532 = await _0xba521c['ziuem'](readFile, _0xba521c['uDXmC'](join, _0x588908, _0x202673[0x0]), _0xba521c['DBAQH']);
            _0xba521c['aHndQ'](expect, _0x5c9532['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/nprogress/);
        });
    }), _0xba521c['EYsDj'](describe, _0xba521c['JnhJB'], () => {
        const _0x4397cb = _0xba521c['EeRvV'](join, fixturesDir, _0xba521c['jxFaU']);
        _0xba521c['CHHTh'](beforeAll, async () => {
            await _0xba521c['Ildyx'](remove, _0xba521c['uDXmC'](join, _0x4397cb, _0xba521c['MwUIE']));
        }), _0xba521c['TpjrR'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x1eb9f9,
                stdout: _0x713ac4
            } = await _0xba521c['dKYOd'](nextBuild, _0x4397cb, [], { 'stdout': !![] });
            _0xba521c['Ildyx'](expect, _0x1eb9f9)['toBe'](0x0), _0xba521c['qggTX'](expect, _0x713ac4)['toMatch'](/Compiled successfully/);
        }), _0xba521c['GLumc'](it, 'should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x1e9a4d = _0xba521c['uYkoi'](join, _0x4397cb, _0xba521c['tpshp']), _0x325035 = await _0xba521c['qggTX'](readdir, _0x1e9a4d), _0x3711b5 = _0x325035['filter'](_0xa1847f => /\.css$/['test'](_0xa1847f));
            _0xba521c['qggTX'](expect, _0x3711b5['length'])['toBe'](0x1);
            const _0x5a15df = await _0xba521c['AXWBu'](readFile, _0xba521c['AXWBu'](join, _0x1e9a4d, _0x3711b5[0x0]), _0xba521c['DBAQH']);
            _0xba521c['CHHTh'](expect, _0x5a15df['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.other{color:blue}.test{color:red}\x22');
        });
    }), _0xba521c['xlWPf'](describe, _0xba521c['IEiDU'], () => {
        const _0x1e5099 = {
                'MvOES': function (_0x25d92c, _0x26f2e0, _0x50d8bc, _0x90d0d9) {
                    return _0xba521c['EIILQ'](_0x25d92c, _0x26f2e0, _0x50d8bc, _0x90d0d9);
                },
                'IomUP': function (_0x16e7b9, _0x3182f7) {
                    return _0xba521c['ofoxz'](_0x16e7b9, _0x3182f7);
                }
            }, _0x4cc202 = _0xba521c['Dovaw'](join, fixturesDir, _0xba521c['GUTHZ']);
        _0xba521c['kXWhs'](beforeAll, async () => {
            await _0xba521c['pWFFe'](remove, _0xba521c['GLumc'](join, _0x4cc202, _0xba521c['MwUIE']));
        }), _0xba521c['Dovaw'](it, _0xba521c['OOqcD'], async () => {
            const {
                code: _0x519055,
                stderr: _0x5314c0
            } = await _0x1e5099['MvOES'](nextBuild, _0x4cc202, [], { 'stderr': !![] });
            _0x1e5099['IomUP'](expect, _0x519055)['toBe'](0x0), _0x1e5099['IomUP'](expect, _0x5314c0)['not']['toMatch'](/Can't resolve '[^']*?nprogress[^']*?'/), _0x1e5099['IomUP'](expect, _0x5314c0)['not']['toMatch'](/Build error occurred/);
        });
    }), _0xba521c['APbin'](describe, _0xba521c['nfCpA'], () => {
        const _0x240759 = {
                'CPXlO': function (_0x472544, _0x1fc81d, _0x333eef) {
                    return _0xba521c['Dovaw'](_0x472544, _0x1fc81d, _0x333eef);
                },
                'DYZaQ': function (_0x52a5fd, _0x489196) {
                    return _0xba521c['gfwqb'](_0x52a5fd, _0x489196);
                }
            }, _0x271d54 = _0xba521c['Dovaw'](join, fixturesDir, _0xba521c['PyUdt']);
        let _0x16278a, _0x287e87;
        _0xba521c['gfwqb'](beforeAll, async () => {
            await _0xba521c['axNZv'](remove, _0xba521c['Dovaw'](join, _0x271d54, _0xba521c['MwUIE'])), _0x16278a = await _0xba521c['tIeEF'](findPort), _0x287e87 = await _0xba521c['Dovaw'](launchApp, _0x271d54, _0x16278a);
        }), _0xba521c['oLYST'](afterAll, async () => {
            await _0xba521c['axNZv'](killApp, _0x287e87);
        }), _0xba521c['qYweJ'](it, _0xba521c['Flbog'], async () => {
            const _0x1054cb = await _0x240759['CPXlO'](_0x327dac, _0x16278a, '/'), _0x35d7ca = await _0x1054cb['eval']('window.getComputedStyle(document.querySelector(\x27.my-text\x27)).color');
            _0x240759['DYZaQ'](expect, _0x35d7ca)['toMatchInlineSnapshot']('\x22rgb(0,\x20128,\x200)\x22');
        });
    }), _0xba521c['NqObE'](describe, _0xba521c['oBDzw'], () => {
        const _0x13b4c5 = {
                'aGRxa': function (_0x47b404, _0x2fbfd1) {
                    return _0xba521c['llVrg'](_0x47b404, _0x2fbfd1);
                },
                'ygMNS': function (_0x51a79b, _0x188274, _0x51afd2) {
                    return _0xba521c['ATbiC'](_0x51a79b, _0x188274, _0x51afd2);
                },
                'irQKh': _0xba521c['MwUIE'],
                'imVcm': function (_0x53dca5, _0x3ede20, _0x239802, _0x1654e4) {
                    return _0xba521c['EIILQ'](_0x53dca5, _0x3ede20, _0x239802, _0x1654e4);
                },
                'aYjFX': function (_0x1eeaf3) {
                    return _0xba521c['tIeEF'](_0x1eeaf3);
                },
                'YSVUs': function (_0x18ca08, _0x477491, _0x3695a0) {
                    return _0xba521c['ATbiC'](_0x18ca08, _0x477491, _0x3695a0);
                },
                'LFlRr': function (_0x415bb3, _0x425e51) {
                    return _0xba521c['uLzka'](_0x415bb3, _0x425e51);
                }
            }, _0x2b05bf = _0xba521c['oSjqG'](join, fixturesDir, _0xba521c['PyUdt']);
        let _0x447623, _0x2bfe5f, _0x18ad0d, _0x6e8145;
        _0xba521c['uLzka'](beforeAll, async () => {
            await _0x13b4c5['aGRxa'](remove, _0x13b4c5['ygMNS'](join, _0x2b05bf, _0x13b4c5['irQKh'])), {
                code: _0x6e8145,
                stdout: _0x18ad0d
            } = await _0x13b4c5['imVcm'](nextBuild, _0x2b05bf, [], { 'stdout': !![] }), _0x447623 = await _0x13b4c5['aYjFX'](findPort), _0x2bfe5f = await _0x13b4c5['YSVUs'](nextStart, _0x2b05bf, _0x447623);
        }), _0xba521c['uLzka'](afterAll, async () => {
            await _0x13b4c5['LFlRr'](killApp, _0x2bfe5f);
        }), _0xba521c['oSjqG'](it, _0xba521c['qkOvf'], () => {
            _0xba521c['rotfB'](expect, _0x6e8145)['toBe'](0x0), _0xba521c['aSUGH'](expect, _0x18ad0d)['toMatch'](/Compiled successfully/);
        }), _0xba521c['iMyzg'](it, _0xba521c['Flbog'], async () => {
            const _0x5aafab = await _0xba521c['kCwqn'](_0x327dac, _0x447623, '/'), _0x387ccc = await _0x5aafab['eval']('window.getComputedStyle(document.querySelector(\x27.my-text\x27)).color');
            _0xba521c['aSUGH'](expect, _0x387ccc)['toMatchInlineSnapshot']('\x22rgb(0,\x20128,\x200)\x22');
        });
    }), _0xba521c['NqObE'](describe, _0xba521c['VUlQx'], () => {
        const _0x5324d8 = {
                'nrbqy': function (_0x39a2ea, _0x4f72c2, _0x50732e) {
                    return _0xba521c['iMyzg'](_0x39a2ea, _0x4f72c2, _0x50732e);
                },
                'UnCAj': function (_0x199fd7, _0xdfab35) {
                    return _0xba521c['uLzka'](_0x199fd7, _0xdfab35);
                },
                'UgAJH': _0xba521c['BxTbN'],
                'GxAJv': function (_0x99f70b, _0x5a754e) {
                    return _0xba521c['yXxGT'](_0x99f70b, _0x5a754e);
                },
                'HNvhQ': _0xba521c['Luvcu'],
                'tcgdQ': function (_0x42cf3d, _0x2283a3, _0x54c8b8) {
                    return _0xba521c['iMyzg'](_0x42cf3d, _0x2283a3, _0x54c8b8);
                },
                'tyFfZ': function (_0x3a6321, _0x40dd44, _0x7e0fb2) {
                    return _0xba521c['RjSuy'](_0x3a6321, _0x40dd44, _0x7e0fb2);
                },
                'TXvrJ': _0xba521c['wvCoW'],
                'sQWcD': _0xba521c['WLcNG'],
                'oWqlk': _0xba521c['Yegnd'],
                'OMqSh': function (_0x185cd0, _0x5807f7, _0xb2a0e7) {
                    return _0xba521c['RjSuy'](_0x185cd0, _0x5807f7, _0xb2a0e7);
                },
                'lglVZ': _0xba521c['mxgWo'],
                'zDzom': function (_0x5b3408, _0x320d53, _0x5e2faf) {
                    return _0xba521c['QbuZZ'](_0x5b3408, _0x320d53, _0x5e2faf);
                },
                'pJhAM': _0xba521c['uzjAF']
            }, _0x2c799b = _0xba521c['QbuZZ'](join, fixturesDir, _0xba521c['vgvel']);
        let _0x23a3e1, _0x1dd6df;
        _0xba521c['uLzka'](beforeAll, async () => {
            await _0xba521c['uLzka'](remove, _0xba521c['iMyzg'](join, _0x2c799b, _0xba521c['MwUIE'])), _0x23a3e1 = await _0xba521c['uPqzf'](findPort), _0x1dd6df = await _0xba521c['iMyzg'](launchApp, _0x2c799b, _0x23a3e1);
        }), _0xba521c['uLzka'](afterAll, async () => {
            await _0xba521c['uLzka'](killApp, _0x1dd6df);
        }), _0xba521c['yNMgF'](it, _0xba521c['IVOJz'], async () => {
            const _0x270d61 = await _0x5324d8['nrbqy'](renderViaHTTP, _0x23a3e1, '/'), _0x1c646a = _0x20ba08['load'](_0x270d61);
            let _0x53e860 = 0x0, _0x30ef8f = 0x0;
            for (const _0x49eea3 of _0x5324d8['UnCAj'](_0x1c646a, _0x5324d8['UgAJH'])['toArray']()) {
                ++_0x30ef8f, _0x5324d8['GxAJv'](_0x5324d8['HNvhQ'], _0x49eea3['attribs']) && ++_0x53e860;
            }
            _0x5324d8['UnCAj'](expect, _0x53e860)['toBe'](0x0), _0x5324d8['UnCAj'](expect, _0x30ef8f)['not']['toBe'](0x0);
        }), _0xba521c['YIUfG'](it, _0xba521c['Flbog'], async () => {
            const _0x31c26a = await _0xba521c['iMyzg'](_0x327dac, _0x23a3e1, '/'), _0x548aaa = await _0x31c26a['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color');
            _0xba521c['uLzka'](expect, _0x548aaa)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
        }), _0xba521c['CcogZ'](it, _0xba521c['ihwkZ'], async () => {
            let _0x5c1e24;
            try {
                _0x5c1e24 = await _0x5324d8['tcgdQ'](_0x327dac, _0x23a3e1, '/');
                const _0x24aa0b = await _0x5c1e24['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color');
                _0x5324d8['UnCAj'](expect, _0x24aa0b)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
                const _0x5c669f = await _0x5c1e24['eval']('window.getComputedStyle(document.querySelector(\x27#yellowText\x27)).color');
                _0x5324d8['UnCAj'](expect, _0x5c669f)['toMatchInlineSnapshot']('\x22rgb(255,\x20255,\x200)\x22');
                const _0x4542c4 = new File(_0x5324d8['tyFfZ'](join, _0x2c799b, _0x5324d8['TXvrJ']));
                try {
                    _0x4542c4['replace'](_0x5324d8['sQWcD'], _0x5324d8['oWqlk']), await _0x5324d8['OMqSh'](check, () => _0x5c1e24['eval']('window.getComputedStyle(document.querySelector(\x27#yellowText\x27)).color'), _0x5324d8['lglVZ']), await _0x5324d8['zDzom'](check, () => _0x5c1e24['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color'), _0x5324d8['pJhAM']);
                } finally {
                    _0x4542c4['restore']();
                }
            } finally {
                _0x5c1e24 && await _0x5c1e24['close']();
            }
        });
    }), _0xba521c['NqObE'](describe, _0xba521c['CHkeB'], () => {
        const _0x36b183 = {
                'kvKMC': function (_0x52581d, _0x2ec4a6) {
                    return _0xba521c['ACMDA'](_0x52581d, _0x2ec4a6);
                },
                'IGaFj': function (_0x34d306, _0x19b885, _0x44566c) {
                    return _0xba521c['NHgNO'](_0x34d306, _0x19b885, _0x44566c);
                },
                'pXnGb': _0xba521c['MwUIE'],
                'KFiqr': function (_0x7169a2, _0x3e3eeb, _0x2894f7, _0x397972) {
                    return _0xba521c['EIILQ'](_0x7169a2, _0x3e3eeb, _0x2894f7, _0x397972);
                },
                'pqRMD': function (_0x30a371) {
                    return _0xba521c['uPqzf'](_0x30a371);
                },
                'fFsVL': function (_0x4626aa, _0x56c4aa, _0xf739a1) {
                    return _0xba521c['IldSQ'](_0x4626aa, _0x56c4aa, _0xf739a1);
                },
                'bBuOa': function (_0x5ab27, _0x4dea1e) {
                    return _0xba521c['ACMDA'](_0x5ab27, _0x4dea1e);
                },
                'iEsLA': function (_0x21402b, _0x508c37) {
                    return _0xba521c['ACMDA'](_0x21402b, _0x508c37);
                }
            }, _0x1378ab = _0xba521c['huXox'](join, fixturesDir, _0xba521c['vgvel']);
        let _0x574694, _0x2ef9a5, _0x31a7f1, _0x26c519;
        _0xba521c['WakPL'](beforeAll, async () => {
            await _0x36b183['kvKMC'](remove, _0x36b183['IGaFj'](join, _0x1378ab, _0x36b183['pXnGb'])), {
                code: _0x26c519,
                stdout: _0x31a7f1
            } = await _0x36b183['KFiqr'](nextBuild, _0x1378ab, [], { 'stdout': !![] }), _0x574694 = await _0x36b183['pqRMD'](findPort), _0x2ef9a5 = await _0x36b183['fFsVL'](nextStart, _0x1378ab, _0x574694);
        }), _0xba521c['kqwPS'](afterAll, async () => {
            await _0x36b183['bBuOa'](killApp, _0x2ef9a5);
        }), _0xba521c['rVMaz'](it, _0xba521c['qkOvf'], () => {
            _0x36b183['bBuOa'](expect, _0x26c519)['toBe'](0x0), _0x36b183['iEsLA'](expect, _0x31a7f1)['toMatch'](/Compiled successfully/);
        }), _0xba521c['DGkYR'](it, _0xba521c['Flbog'], async () => {
            const _0x4a1415 = await _0xba521c['NHgNO'](_0x327dac, _0x574694, '/'), _0x1c70fb = await _0x4a1415['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color');
            _0xba521c['ACMDA'](expect, _0x1c70fb)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
        });
    }), _0xba521c['QcyOE'](describe, _0xba521c['dTgaG'], () => {
        const _0x18fb01 = {
                'QhOKi': function (_0x3491c5, _0xbcdaa9) {
                    return _0xba521c['SzTjU'](_0x3491c5, _0xbcdaa9);
                },
                'cSRXy': function (_0x108083, _0x1114d7) {
                    return _0xba521c['SzTjU'](_0x108083, _0x1114d7);
                }
            }, _0x473b0f = _0xba521c['Waeee'](join, fixturesDir, _0xba521c['hxvKZ']);
        let _0x128ac3, _0x1d4bd7, _0x374301, _0x153a3b;
        _0xba521c['SzTjU'](beforeAll, async () => {
            await _0xba521c['OplqP'](remove, _0xba521c['DGkYR'](join, _0x473b0f, _0xba521c['MwUIE'])), {
                code: _0x153a3b,
                stdout: _0x374301
            } = await _0xba521c['EIILQ'](nextBuild, _0x473b0f, [], { 'stdout': !![] }), _0x128ac3 = await _0xba521c['ItbUC'](findPort), _0x1d4bd7 = await _0xba521c['DGkYR'](nextStart, _0x473b0f, _0x128ac3);
        }), _0xba521c['SzTjU'](afterAll, async () => {
            await _0x18fb01['QhOKi'](killApp, _0x1d4bd7);
        }), _0xba521c['Waeee'](it, _0xba521c['qkOvf'], () => {
            _0x18fb01['cSRXy'](expect, _0x153a3b)['toBe'](0x0), _0x18fb01['cSRXy'](expect, _0x374301)['toMatch'](/Compiled successfully/);
        }), _0xba521c['Waeee'](it, _0xba521c['wRxmb'], async () => {
            const _0x2e4713 = await _0xba521c['DGkYR'](_0x327dac, _0x128ac3, '/'), _0x4b40e7 = await _0x2e4713['eval']('window.getComputedStyle(document.querySelector(\x27.test1\x27)).borderWidth');
            _0xba521c['OplqP'](expect, _0x4b40e7)['toMatchInlineSnapshot']('\x220px\x22');
            const _0x428104 = await _0x2e4713['eval']('window.getComputedStyle(document.querySelector(\x27.test2\x27)).borderWidth');
            _0xba521c['OplqP'](expect, _0x428104)['toMatchInlineSnapshot']('\x225px\x22');
        });
    }), _0xba521c['QcyOE'](describe, _0xba521c['VASBy'], () => {
        const _0x30ef78 = {
                'lHAtr': function (_0x5d16a7, _0x536730) {
                    return _0xba521c['IOzYM'](_0x5d16a7, _0x536730);
                },
                'nqKuh': function (_0x3f414b, _0x22bb5e, _0x49fe38) {
                    return _0xba521c['Waeee'](_0x3f414b, _0x22bb5e, _0x49fe38);
                },
                'pQbwk': _0xba521c['MwUIE'],
                'UURlA': function (_0x1a9e3e, _0x3de81e, _0x2d18b9) {
                    return _0xba521c['jxpZK'](_0x1a9e3e, _0x3de81e, _0x2d18b9);
                },
                'rEPPl': _0xba521c['tpshp'],
                'ZALbO': function (_0x5b5c37, _0x405de6, _0x1753fd) {
                    return _0xba521c['ASXdK'](_0x5b5c37, _0x405de6, _0x1753fd);
                },
                'SBqut': _0xba521c['DBAQH'],
                'UuPLF': function (_0x18ad43, _0x582149) {
                    return _0xba521c['IOzYM'](_0x18ad43, _0x582149);
                }
            }, _0x4ebf79 = _0xba521c['ASXdK'](join, fixturesDir, _0xba521c['dKJdq']);
        _0xba521c['GZxSm'](beforeAll, async () => {
            await _0x30ef78['lHAtr'](remove, _0x30ef78['nqKuh'](join, _0x4ebf79, _0x30ef78['pQbwk']));
        }), _0xba521c['ASXdK'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x386a89,
                stdout: _0x12dc0e
            } = await _0xba521c['uzzBW'](nextBuild, _0x4ebf79, [], { 'stdout': !![] });
            _0xba521c['SzTjU'](expect, _0x386a89)['toBe'](0x0), _0xba521c['SzTjU'](expect, _0x12dc0e)['toMatch'](/Compiled successfully/), _0xba521c['XoReV'](expect, _0x12dc0e)['toContain'](_0xba521c['HpJBe']);
        }), _0xba521c['ASXdK'](it, 'should\x27ve\x20compiled\x20and\x20prefixed', async () => {
            const _0x15ac00 = _0x30ef78['UURlA'](join, _0x4ebf79, _0x30ef78['rEPPl']), _0x1ae59d = await _0x30ef78['lHAtr'](readdir, _0x15ac00), _0x44111d = _0x1ae59d['filter'](_0x49d3c6 => /\.css$/['test'](_0x49d3c6));
            _0x30ef78['lHAtr'](expect, _0x44111d['length'])['toBe'](0x1);
            const _0x130e99 = await _0x30ef78['ZALbO'](readFile, _0x30ef78['ZALbO'](join, _0x15ac00, _0x44111d[0x0]), _0x30ef78['SBqut']);
            _0x30ef78['UuPLF'](expect, _0x130e99)['toMatch'](/object-right-bottom/), _0x30ef78['UuPLF'](expect, _0x130e99)['not']['toMatch'](/tailwind/), _0x30ef78['UuPLF'](expect, _0x130e99)['toMatch'](/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
        }), _0xba521c['ASXdK'](it, 'should\x27ve\x20emitted\x20a\x20source\x20map', async () => {
            const _0xa27bd = _0xba521c['Waeee'](join, _0x4ebf79, _0xba521c['tpshp']), _0x415c47 = await _0xba521c['XoReV'](readdir, _0xa27bd), _0x73374a = _0x415c47['filter'](_0x419ec3 => /\.css\.map$/['test'](_0x419ec3));
            _0xba521c['IOzYM'](expect, _0x73374a['length'])['toBe'](0x1);
        });
    }), _0xba521c['QcyOE'](describe, _0xba521c['hvDjD'], () => {
        const _0x16dcc9 = {
                'bpPGx': function (_0x4d305f, _0x362dde) {
                    return _0xba521c['XgbWJ'](_0x4d305f, _0x362dde);
                },
                'UDEmF': function (_0x155c5c, _0x183eba, _0xf05a95) {
                    return _0xba521c['NkuvQ'](_0x155c5c, _0x183eba, _0xf05a95);
                },
                'qmeiM': _0xba521c['MwUIE'],
                'mTAzU': function (_0x2a32da, _0x37b952, _0x5a3c84, _0x47f910) {
                    return _0xba521c['frJvZ'](_0x2a32da, _0x37b952, _0x5a3c84, _0x47f910);
                },
                'dOcSD': function (_0x3bdb25, _0x34f99a) {
                    return _0xba521c['qLCII'](_0x3bdb25, _0x34f99a);
                }
            }, _0x4a8b7a = _0xba521c['pFrbF'](join, fixturesDir, _0xba521c['ptbCR']);
        _0xba521c['XiraZ'](beforeAll, async () => {
            await _0x16dcc9['bpPGx'](remove, _0x16dcc9['UDEmF'](join, _0x4a8b7a, _0x16dcc9['qmeiM']));
        }), _0xba521c['pFrbF'](it, _0xba521c['lJoNY'], async () => {
            const {
                code: _0x19d49a,
                stdout: _0x3a372c
            } = await _0x16dcc9['mTAzU'](nextBuild, _0x4a8b7a, [], { 'stdout': !![] });
            _0x16dcc9['bpPGx'](expect, _0x19d49a)['toBe'](0x0), _0x16dcc9['dOcSD'](expect, _0x3a372c)['toMatch'](/Compiled successfully/);
        }), _0xba521c['pFrbF'](it, 'should\x27ve\x20compiled\x20and\x20prefixed', async () => {
            const _0x59c04 = _0xba521c['ASXdK'](join, _0x4a8b7a, _0xba521c['tpshp']), _0x492548 = await _0xba521c['SKSyX'](readdir, _0x59c04), _0x3f6baa = _0x492548['filter'](_0x14528d => /\.css$/['test'](_0x14528d));
            _0xba521c['prwvw'](expect, _0x3f6baa['length'])['toBe'](0x1);
            const _0x4107cc = await _0xba521c['NcCCf'](readFile, _0xba521c['KruhZ'](join, _0x59c04, _0x3f6baa[0x0]), _0xba521c['DBAQH']);
            _0xba521c['kBplQ'](expect, _0x4107cc)['not']['toMatch'](/object-right-bottom/), _0xba521c['kBplQ'](expect, _0x4107cc)['toMatch'](/text-blue-500/), _0xba521c['kBplQ'](expect, _0x4107cc)['not']['toMatch'](/tailwind/), _0xba521c['kBplQ'](expect, _0x4107cc)['toMatch'](/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
        }), _0xba521c['EZCIy'](it, 'should\x27ve\x20emitted\x20a\x20source\x20map', async () => {
            const _0xd8f5b7 = _0xba521c['NkuvQ'](join, _0x4a8b7a, _0xba521c['tpshp']), _0x2f060e = await _0xba521c['iTbKv'](readdir, _0xd8f5b7), _0x4c1067 = _0x2f060e['filter'](_0x20ec1c => /\.css\.map$/['test'](_0x20ec1c));
            _0xba521c['iTbKv'](expect, _0x4c1067['length'])['toBe'](0x1);
        });
    }), _0xba521c['KPUuK'](describe, _0xba521c['spRnF'], () => {
        const _0x4cc43a = {
                'uXWqz': _0xba521c['xawpV'],
                'ZdVjd': function (_0x392a04, _0xe4203e) {
                    return _0xba521c['XiraZ'](_0x392a04, _0xe4203e);
                },
                'XbYfw': _0xba521c['uzjAF'],
                'cZGyR': function (_0x5dea9b, _0x4ce52c, _0x3d0bf4) {
                    return _0xba521c['fkueV'](_0x5dea9b, _0x4ce52c, _0x3d0bf4);
                },
                'vacvh': function (_0x204c6d, _0xaf3f7b) {
                    return _0xba521c['rsXPl'](_0x204c6d, _0xaf3f7b);
                },
                'zCUaN': _0xba521c['ojByN'],
                'LJjVf': function (_0x38cd65, _0x419fad) {
                    return _0xba521c['rsXPl'](_0x38cd65, _0x419fad);
                },
                'EApDn': function (_0x5644d2, _0x41f6df) {
                    return _0xba521c['pVUCh'](_0x5644d2, _0x41f6df);
                },
                'CLCTM': function (_0x15c2a4, _0x37cbc4) {
                    return _0xba521c['pVUCh'](_0x15c2a4, _0x37cbc4);
                },
                'lUdBp': function (_0x39b4f0, _0x132c9b) {
                    return _0xba521c['pVUCh'](_0x39b4f0, _0x132c9b);
                },
                'Gviwo': function (_0x4c0edb, _0x55bc0c, _0x3044de) {
                    return _0xba521c['fkueV'](_0x4c0edb, _0x55bc0c, _0x3044de);
                },
                'icscv': function (_0x51db53, _0x22128f) {
                    return _0xba521c['cLCOi'](_0x51db53, _0x22128f);
                },
                'YOJZE': function (_0x4ddd2c, _0x27b0f3) {
                    return _0xba521c['cLCOi'](_0x4ddd2c, _0x27b0f3);
                },
                'YnrvW': _0xba521c['hrsTw'],
                'sdUIM': function (_0xabc85c, _0x33c5aa) {
                    return _0xba521c['hxtsS'](_0xabc85c, _0x33c5aa);
                },
                'ECXHh': _0xba521c['VShAv'],
                'TullT': _0xba521c['dLUtX'],
                'vgRic': function (_0x537618, _0x1902b4) {
                    return _0xba521c['hxtsS'](_0x537618, _0x1902b4);
                },
                'YJDhw': _0xba521c['GMAeG'],
                'jpeNp': function (_0x137a2e, _0x2d8331, _0x1247df) {
                    return _0xba521c['fkueV'](_0x137a2e, _0x2d8331, _0x1247df);
                },
                'nrvDW': _0xba521c['MxzEQ'],
                'ESoHE': _0xba521c['bzfNL'],
                'nBqsG': _0xba521c['LxfIK'],
                'gpsMV': _0xba521c['jtMlQ'],
                'kzKok': function (_0x23f59c, _0x29b82b, _0x97b295) {
                    return _0xba521c['ObqOS'](_0x23f59c, _0x29b82b, _0x97b295);
                },
                'xmBGI': _0xba521c['QDrMn'],
                'etIvT': _0xba521c['lqomB'],
                'UFaKc': function (_0xc6afda, _0x182285, _0x2da1a9) {
                    return _0xba521c['DMbMJ'](_0xc6afda, _0x182285, _0x2da1a9);
                },
                'HTkMo': _0xba521c['WPZbk'],
                'tEObY': _0xba521c['pvwrL'],
                'yTajm': function (_0x532178, _0x1a1736, _0x2c349b) {
                    return _0xba521c['DMbMJ'](_0x532178, _0x1a1736, _0x2c349b);
                },
                'WTKFs': _0xba521c['qeQVd'],
                'VFbst': function (_0x250ddf, _0x20516f) {
                    return _0xba521c['NadwX'](_0x250ddf, _0x20516f);
                },
                'dbzGX': function (_0x2bf9c1, _0x5a2199, _0x1e4b48) {
                    return _0xba521c['EdipV'](_0x2bf9c1, _0x5a2199, _0x1e4b48);
                },
                'ctiVp': _0xba521c['MwUIE']
            }, _0x276c7f = _0xba521c['YcpXq'](join, fixturesDir, _0xba521c['aTUZy']);
        let _0x2040e8, _0x5a0e89;
        function _0x47c962() {
            const _0x4d9668 = {
                'JLbpT': _0x4cc43a['TullT'],
                'JukTv': function (_0x243a92, _0x4e3c30) {
                    return _0x4cc43a['vgRic'](_0x243a92, _0x4e3c30);
                },
                'wpvCT': _0x4cc43a['YJDhw'],
                'aMHbq': function (_0x31712c, _0x3fac79, _0x1e4212) {
                    return _0x4cc43a['jpeNp'](_0x31712c, _0x3fac79, _0x1e4212);
                },
                'lKWmd': _0x4cc43a['nrvDW'],
                'mfgPV': function (_0x35f54d, _0x45d120) {
                    return _0x4cc43a['vgRic'](_0x35f54d, _0x45d120);
                },
                'wNThR': _0x4cc43a['ECXHh'],
                'RJlCk': function (_0x1dd40e, _0x33c8e5) {
                    return _0x4cc43a['vgRic'](_0x1dd40e, _0x33c8e5);
                },
                'gLfnL': _0x4cc43a['zCUaN'],
                'phcZs': function (_0x3c0e35, _0x37348f) {
                    return _0x4cc43a['vgRic'](_0x3c0e35, _0x37348f);
                },
                'qesSN': function (_0xafae34, _0x4b1d12, _0x28e198) {
                    return _0x4cc43a['jpeNp'](_0xafae34, _0x4b1d12, _0x28e198);
                },
                'GbSRY': _0x4cc43a['ESoHE'],
                'qjbBT': _0x4cc43a['nBqsG'],
                'qVGOH': function (_0x296586, _0x4c318c) {
                    return _0x4cc43a['vgRic'](_0x296586, _0x4c318c);
                }
            };
            async function _0x2fe0a3(_0xebc514) {
                await _0xebc514['waitForElementByCss'](_0x4d9668['JLbpT']);
                const _0xbb954 = await _0xebc514['eval']('window.getComputedStyle(document.querySelector(\x27#green-title\x27)).color');
                _0x4d9668['JukTv'](expect, _0xbb954)['toBe'](_0x4d9668['wpvCT']);
            }
            async function _0x101d22(_0x43b99f) {
                await _0x43b99f['waitForElementByCss'](_0x4cc43a['uXWqz']);
                const _0xbb3b18 = await _0x43b99f['eval']('window.getComputedStyle(document.querySelector(\x27#blue-title\x27)).color');
                _0x4cc43a['ZdVjd'](expect, _0xbb3b18)['toBe'](_0x4cc43a['XbYfw']);
            }
            _0x4cc43a['jpeNp'](it, _0x4cc43a['gpsMV'], async () => {
                const _0x186508 = await _0x4cc43a['cZGyR'](_0x327dac, _0x5a0e89, '/');
                try {
                    await _0x4cc43a['vacvh'](_0x2fe0a3, _0x186508);
                } finally {
                    await _0x186508['close']();
                }
            }), _0x4cc43a['kzKok'](it, _0x4cc43a['xmBGI'], async () => {
                const _0x54c90b = await _0x4cc43a['cZGyR'](_0x327dac, _0x5a0e89, '/');
                try {
                    await _0x4cc43a['vacvh'](_0x2fe0a3, _0x54c90b), await _0x54c90b['waitForElementByCss'](_0x4cc43a['zCUaN'])['moveTo'](), await _0x4cc43a['LJjVf'](waitFor, 0x7d0), await _0x4cc43a['LJjVf'](_0x2fe0a3, _0x54c90b);
                } finally {
                    await _0x54c90b['close']();
                }
            }), _0x4cc43a['kzKok'](it, _0x4cc43a['etIvT'], async () => {
                const _0x41c0cc = await _0x4cc43a['cZGyR'](_0x327dac, _0x5a0e89, '/');
                try {
                    await _0x4cc43a['EApDn'](_0x2fe0a3, _0x41c0cc), await _0x41c0cc['waitForElementByCss'](_0x4cc43a['zCUaN'])['moveTo'](), await _0x4cc43a['CLCTM'](waitFor, 0x7d0), await _0x4cc43a['lUdBp'](_0x2fe0a3, _0x41c0cc);
                } finally {
                    await _0x41c0cc['close']();
                }
            }), _0x4cc43a['UFaKc'](it, _0x4cc43a['HTkMo'], async () => {
                const _0x30835b = await _0x4cc43a['Gviwo'](_0x327dac, _0x5a0e89, '/');
                try {
                    await _0x4cc43a['lUdBp'](_0x2fe0a3, _0x30835b);
                    const _0x3511b9 = await _0x30835b['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).previousSibling.getAttribute(\x27href\x27)'), _0x13b47e = await _0x30835b['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).getAttribute(\x27href\x27)');
                    _0x4cc43a['lUdBp'](expect, _0x3511b9)['toBeDefined'](), _0x4cc43a['icscv'](expect, _0x3511b9)['toBe'](_0x13b47e), await _0x30835b['waitForElementByCss'](_0x4cc43a['zCUaN'])['click'](), await _0x4cc43a['YOJZE'](_0x101d22, _0x30835b);
                    const _0x277753 = await _0x30835b['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x3d987c = await _0x30835b['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    _0x4cc43a['YOJZE'](expect, _0x277753)['toBe'](_0x4cc43a['YnrvW']), _0x4cc43a['sdUIM'](expect, _0x3d987c)['toBeDefined'](), _0x4cc43a['sdUIM'](expect, _0x3d987c)['not']['toBe'](_0x13b47e), await _0x30835b['waitForElementByCss'](_0x4cc43a['ECXHh'])['click'](), await _0x4cc43a['sdUIM'](_0x2fe0a3, _0x30835b);
                    const _0x218a63 = await _0x30835b['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x1e360f = await _0x30835b['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    _0x4cc43a['sdUIM'](expect, _0x218a63)['toBeTruthy'](), _0x4cc43a['sdUIM'](expect, _0x1e360f)['toBeDefined'](), _0x4cc43a['sdUIM'](expect, _0x1e360f)['toBe'](_0x13b47e);
                } finally {
                    await _0x30835b['close']();
                }
            }), _0x4cc43a['UFaKc'](it, _0x4cc43a['tEObY'], async () => {
                const _0x3a801e = await _0x4d9668['aMHbq'](_0x327dac, _0x5a0e89, '/');
                try {
                    const _0x2ce59d = _0x4d9668['lKWmd']['split']('|');
                    let _0x4a8366 = 0x0;
                    while (!![]) {
                        switch (_0x2ce59d[_0x4a8366++]) {
                        case '0':
                            await _0x4d9668['mfgPV'](_0x2fe0a3, _0x3a801e);
                            continue;
                        case '1':
                            await _0x3a801e['waitForElementByCss'](_0x4d9668['wNThR'])['click']();
                            continue;
                        case '2':
                            await _0x3a801e['waitForElementByCss'](_0x4d9668['wNThR']);
                            continue;
                        case '3':
                            await _0x4d9668['RJlCk'](_0x2fe0a3, _0x3a801e);
                            continue;
                        case '4':
                            await _0x3a801e['waitForElementByCss'](_0x4d9668['gLfnL'])['click']();
                            continue;
                        case '5':
                            await _0x4d9668['phcZs'](_0x101d22, _0x3a801e);
                            continue;
                        }
                        break;
                    }
                } finally {
                    await _0x3a801e['close']();
                }
            }), _0x4cc43a['yTajm'](it, _0x4cc43a['WTKFs'], async () => {
                const _0x16f191 = await _0x4d9668['qesSN'](_0x327dac, _0x5a0e89, _0x4d9668['GbSRY']);
                try {
                    const _0x9db310 = _0x4d9668['qjbBT']['split']('|');
                    let _0x19fed6 = 0x0;
                    while (!![]) {
                        switch (_0x9db310[_0x19fed6++]) {
                        case '0':
                            await _0x16f191['waitForElementByCss'](_0x4d9668['gLfnL']);
                            continue;
                        case '1':
                            await _0x4d9668['phcZs'](_0x101d22, _0x16f191);
                            continue;
                        case '2':
                            await _0x4d9668['phcZs'](_0x101d22, _0x16f191);
                            continue;
                        case '3':
                            await _0x16f191['waitForElementByCss'](_0x4d9668['gLfnL'])['click']();
                            continue;
                        case '4':
                            await _0x16f191['waitForElementByCss'](_0x4d9668['wNThR'])['click']();
                            continue;
                        case '5':
                            await _0x4d9668['qVGOH'](_0x2fe0a3, _0x16f191);
                            continue;
                        }
                        break;
                    }
                } finally {
                    await _0x16f191['close']();
                }
            });
        }
        _0xba521c['IRkuR'](describe, _0xba521c['zFrjs'], () => {
            const _0x5ab8d0 = {
                'RnoJY': function (_0x53697e, _0x9c30bc, _0x88a40d, _0xb5b84) {
                    return _0xba521c['frJvZ'](_0x53697e, _0x9c30bc, _0x88a40d, _0xb5b84);
                },
                'lRAKx': function (_0x28bc8f) {
                    return _0xba521c['ItbUC'](_0x28bc8f);
                },
                'gkojJ': function (_0x352c59, _0xe7086f, _0x1d0e97) {
                    return _0xba521c['EZCIy'](_0x352c59, _0xe7086f, _0x1d0e97);
                }
            };
            _0xba521c['XiraZ'](beforeAll, async () => {
                await _0x4cc43a['VFbst'](remove, _0x4cc43a['dbzGX'](join, _0x276c7f, _0x4cc43a['ctiVp']));
            }), _0xba521c['XiraZ'](beforeAll, async () => {
                await _0x5ab8d0['RnoJY'](nextBuild, _0x276c7f, [], {}), _0x5a0e89 = await _0x5ab8d0['lRAKx'](findPort), _0x2040e8 = await _0x5ab8d0['gkojJ'](nextStart, _0x276c7f, _0x5a0e89);
            }), _0xba521c['XiraZ'](afterAll, async () => {
                await _0x4cc43a['VFbst'](killApp, _0x2040e8);
            }), _0xba521c['HJseG'](_0x47c962);
        });
    }), _0xba521c['KPUuK'](describe, _0xba521c['cJwDc'], () => {
        const _0x100de6 = {
                'NitcI': _0xba521c['RulsK'],
                'Zynsy': function (_0x38439f, _0x27efa3) {
                    return _0xba521c['YZSkk'](_0x38439f, _0x27efa3);
                },
                'ElsOo': _0xba521c['Rtqle'],
                'Yoqxm': function (_0x4c4dda, _0x8aa422, _0x3995c4) {
                    return _0xba521c['AgYKS'](_0x4c4dda, _0x8aa422, _0x3995c4);
                },
                'Bljtg': function (_0x371f55, _0x13bc12) {
                    return _0xba521c['nyuIV'](_0x371f55, _0x13bc12);
                },
                'JSOXZ': function (_0x5ee0b6, _0x4b199a, _0x309fd7) {
                    return _0xba521c['AgYKS'](_0x5ee0b6, _0x4b199a, _0x309fd7);
                },
                'ugnZK': _0xba521c['ojByN'],
                'xbhGS': function (_0x44f969, _0x55fa89) {
                    return _0xba521c['nyuIV'](_0x44f969, _0x55fa89);
                },
                'rRyVF': function (_0x58c616, _0x493bff) {
                    return _0xba521c['nyuIV'](_0x58c616, _0x493bff);
                },
                'mCfKD': function (_0x3f1f52, _0x53ae54, _0x206e27) {
                    return _0xba521c['rzBvw'](_0x3f1f52, _0x53ae54, _0x206e27);
                },
                'QNPVM': function (_0x36163b, _0x4365c5) {
                    return _0xba521c['FniLX'](_0x36163b, _0x4365c5);
                },
                'UYndv': function (_0x757074, _0x4b7adf) {
                    return _0xba521c['FniLX'](_0x757074, _0x4b7adf);
                },
                'XstaJ': function (_0x19b544, _0x27cc1c) {
                    return _0xba521c['FniLX'](_0x19b544, _0x27cc1c);
                },
                'MvEHc': function (_0xf3aec, _0x208050) {
                    return _0xba521c['VNJmj'](_0xf3aec, _0x208050);
                },
                'KqZxW': function (_0x9d7271, _0x2e2535) {
                    return _0xba521c['VNJmj'](_0x9d7271, _0x2e2535);
                },
                'ECqtE': _0xba521c['VShAv'],
                'RhimA': function (_0x4d42cc, _0x30347b) {
                    return _0xba521c['VNJmj'](_0x4d42cc, _0x30347b);
                },
                'LjIKH': function (_0x39c2fc, _0x27dc5e) {
                    return _0xba521c['VNJmj'](_0x39c2fc, _0x27dc5e);
                },
                'yaXTH': function (_0x5c4faa, _0x1e6d00, _0x594c7f) {
                    return _0xba521c['rzBvw'](_0x5c4faa, _0x1e6d00, _0x594c7f);
                },
                'gDfmk': _0xba521c['szoLF'],
                'VbnOc': function (_0x44246d, _0x46c8d3) {
                    return _0xba521c['VNJmj'](_0x44246d, _0x46c8d3);
                },
                'RtrzT': function (_0x53bd2a, _0x18e0bd) {
                    return _0xba521c['VNJmj'](_0x53bd2a, _0x18e0bd);
                },
                'XeIFy': _0xba521c['bzfNL'],
                'epiuD': _0xba521c['zKkrY'],
                'BCRzK': function (_0x3bcb71, _0x3499ca) {
                    return _0xba521c['VNJmj'](_0x3bcb71, _0x3499ca);
                },
                'MDIxP': function (_0x57d5a8, _0x5a5a7c) {
                    return _0xba521c['VNJmj'](_0x57d5a8, _0x5a5a7c);
                },
                'SupLe': function (_0x4920af, _0x597e54) {
                    return _0xba521c['VNJmj'](_0x4920af, _0x597e54);
                },
                'dltKE': function (_0x257b70, _0x1b243b, _0x30138c) {
                    return _0xba521c['DrzfP'](_0x257b70, _0x1b243b, _0x30138c);
                },
                'vTQFp': _0xba521c['MwUIE'],
                'bgdkJ': function (_0x2743c1) {
                    return _0xba521c['HJseG'](_0x2743c1);
                },
                'BnxmT': function (_0x3c52fe, _0x2b45c7, _0x3a2609) {
                    return _0xba521c['DrzfP'](_0x3c52fe, _0x2b45c7, _0x3a2609);
                },
                'vLMxX': function (_0x9841ff, _0x4db097) {
                    return _0xba521c['VNJmj'](_0x9841ff, _0x4db097);
                },
                'DebFT': function (_0x117f21, _0x3b06aa) {
                    return _0xba521c['PUonf'](_0x117f21, _0x3b06aa);
                },
                'ozOab': function (_0x53b7cf, _0x437d82) {
                    return _0xba521c['czave'](_0x53b7cf, _0x437d82);
                },
                'hIqpE': function (_0x194795, _0x2eef22) {
                    return _0xba521c['lNzWf'](_0x194795, _0x2eef22);
                },
                'uhpFu': function (_0xd5c70f, _0x52240f, _0x1d4cdd, _0x32800c) {
                    return _0xba521c['frJvZ'](_0xd5c70f, _0x52240f, _0x1d4cdd, _0x32800c);
                },
                'QXTUZ': function (_0x2f8ca5, _0x267f36, _0x206614) {
                    return _0xba521c['QEsdO'](_0x2f8ca5, _0x267f36, _0x206614);
                },
                'maqiU': function (_0x5e77e0, _0x329b39) {
                    return _0xba521c['alXuj'](_0x5e77e0, _0x329b39);
                },
                'UAURK': function (_0x705f79, _0x473bae) {
                    return _0xba521c['alXuj'](_0x705f79, _0x473bae);
                },
                'ezyeH': function (_0x431bc6) {
                    return _0xba521c['HJseG'](_0x431bc6);
                }
            }, _0x35087a = _0xba521c['QEsdO'](join, fixturesDir, _0xba521c['kNeNC']);
        let _0x5747dd, _0x4b24bd;
        function _0x3424ff(_0x347907 = ![]) {
            const _0x612ffe = {
                'baZmR': _0xba521c['doRCf'],
                'iuwQO': function (_0x419a72, _0x3bfdb9) {
                    return _0xba521c['NadwX'](_0x419a72, _0x3bfdb9);
                },
                'Fijeb': _0xba521c['qiWQQ'],
                'zZQKy': function (_0x2d265a, _0x4a3e36, _0x321392) {
                    return _0xba521c['IRkuR'](_0x2d265a, _0x4a3e36, _0x321392);
                },
                'rHDKE': _0xba521c['ojByN'],
                'FWnes': function (_0x57cd4b, _0xa3850) {
                    return _0xba521c['BoCDJ'](_0x57cd4b, _0xa3850);
                },
                'HyTYq': function (_0x4690e2, _0x2af879) {
                    return _0xba521c['FnTZG'](_0x4690e2, _0x2af879);
                }
            };
            async function _0x1e6a14(_0x6d4df7) {
                await _0x6d4df7['waitForElementByCss'](_0x100de6['NitcI']);
                const _0x2c2804 = await _0x6d4df7['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                _0x100de6['Zynsy'](expect, _0x2c2804)['toBe'](_0x100de6['ElsOo']);
            }
            async function _0x3929f3(_0x17f14c) {
                await _0x17f14c['waitForElementByCss'](_0x612ffe['baZmR']);
                const _0x33e86d = await _0x17f14c['eval']('window.getComputedStyle(document.querySelector(\x27#red-title\x27)).color');
                _0x612ffe['iuwQO'](expect, _0x33e86d)['toBe'](_0x612ffe['Fijeb']);
            }
            _0xba521c['IRkuR'](it, _0xba521c['jtMlQ'], async () => {
                const _0x444580 = await _0x100de6['Yoqxm'](_0x327dac, _0x4b24bd, '/');
                try {
                    await _0x100de6['Bljtg'](_0x1e6a14, _0x444580);
                } finally {
                    await _0x444580['close']();
                }
            }), _0xba521c['IRkuR'](it, _0xba521c['QDrMn'], async () => {
                const _0x3e186a = await _0x612ffe['zZQKy'](_0x327dac, _0x4b24bd, '/');
                try {
                    await _0x612ffe['iuwQO'](_0x1e6a14, _0x3e186a), await _0x3e186a['waitForElementByCss'](_0x612ffe['rHDKE'])['moveTo'](), await _0x612ffe['FWnes'](waitFor, 0x7d0), await _0x612ffe['HyTYq'](_0x1e6a14, _0x3e186a);
                } finally {
                    await _0x3e186a['close']();
                }
            }), !_0x347907 && (_0xba521c['IRkuR'](it, _0xba521c['lqomB'], async () => {
                const _0x4f2bfe = await _0x100de6['JSOXZ'](_0x327dac, _0x4b24bd, '/');
                try {
                    await _0x100de6['Bljtg'](_0x1e6a14, _0x4f2bfe), await _0x4f2bfe['waitForElementByCss'](_0x100de6['ugnZK'])['moveTo'](), await _0x100de6['xbhGS'](waitFor, 0x7d0), await _0x100de6['rRyVF'](_0x1e6a14, _0x4f2bfe);
                } finally {
                    await _0x4f2bfe['close']();
                }
            }), _0xba521c['ROJxC'](it, _0xba521c['WPZbk'], async () => {
                const _0x2e296b = await _0x100de6['mCfKD'](_0x327dac, _0x4b24bd, '/');
                try {
                    await _0x100de6['rRyVF'](_0x1e6a14, _0x2e296b);
                    const _0x281931 = await _0x2e296b['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).previousSibling.getAttribute(\x27href\x27)'), _0x12033d = await _0x2e296b['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).getAttribute(\x27href\x27)');
                    _0x100de6['QNPVM'](expect, _0x281931)['toBeDefined'](), _0x100de6['UYndv'](expect, _0x281931)['toBe'](_0x12033d), await _0x2e296b['waitForElementByCss'](_0x100de6['ugnZK'])['click'](), await _0x100de6['XstaJ'](_0x3929f3, _0x2e296b);
                    const _0x4b298c = await _0x2e296b['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x252a2a = await _0x2e296b['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    _0x100de6['MvEHc'](expect, _0x4b298c)['toBe'](''), _0x100de6['KqZxW'](expect, _0x252a2a)['toBeDefined'](), _0x100de6['KqZxW'](expect, _0x252a2a)['not']['toBe'](_0x12033d), await _0x2e296b['waitForElementByCss'](_0x100de6['ECqtE'])['click'](), await _0x100de6['RhimA'](_0x1e6a14, _0x2e296b);
                    const _0x4f4226 = await _0x2e296b['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x1a91b6 = await _0x2e296b['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    _0x100de6['RhimA'](expect, _0x4f4226)['toBe'](''), _0x100de6['LjIKH'](expect, _0x1a91b6)['toBeDefined'](), _0x100de6['LjIKH'](expect, _0x1a91b6)['toBe'](_0x12033d);
                } finally {
                    await _0x2e296b['close']();
                }
            })), _0xba521c['ROJxC'](it, _0xba521c['pvwrL'], async () => {
                const _0x3cb492 = await _0x100de6['yaXTH'](_0x327dac, _0x4b24bd, '/');
                try {
                    const _0x8a70f3 = _0x100de6['gDfmk']['split']('|');
                    let _0x5ae1a1 = 0x0;
                    while (!![]) {
                        switch (_0x8a70f3[_0x5ae1a1++]) {
                        case '0':
                            await _0x100de6['VbnOc'](_0x1e6a14, _0x3cb492);
                            continue;
                        case '1':
                            await _0x3cb492['waitForElementByCss'](_0x100de6['ECqtE']);
                            continue;
                        case '2':
                            await _0x3cb492['waitForElementByCss'](_0x100de6['ugnZK'])['click']();
                            continue;
                        case '3':
                            await _0x100de6['VbnOc'](_0x3929f3, _0x3cb492);
                            continue;
                        case '4':
                            await _0x3cb492['waitForElementByCss'](_0x100de6['ECqtE'])['click']();
                            continue;
                        case '5':
                            await _0x100de6['RtrzT'](_0x1e6a14, _0x3cb492);
                            continue;
                        }
                        break;
                    }
                } finally {
                    await _0x3cb492['close']();
                }
            }), _0xba521c['aIchR'](it, _0xba521c['qeQVd'], async () => {
                const _0x101073 = await _0x100de6['yaXTH'](_0x327dac, _0x4b24bd, _0x100de6['XeIFy']);
                try {
                    const _0x27036b = _0x100de6['epiuD']['split']('|');
                    let _0x54737f = 0x0;
                    while (!![]) {
                        switch (_0x27036b[_0x54737f++]) {
                        case '0':
                            await _0x100de6['RtrzT'](_0x3929f3, _0x101073);
                            continue;
                        case '1':
                            await _0x101073['waitForElementByCss'](_0x100de6['ECqtE'])['click']();
                            continue;
                        case '2':
                            await _0x100de6['BCRzK'](_0x1e6a14, _0x101073);
                            continue;
                        case '3':
                            await _0x100de6['MDIxP'](_0x3929f3, _0x101073);
                            continue;
                        case '4':
                            await _0x101073['waitForElementByCss'](_0x100de6['ugnZK'])['click']();
                            continue;
                        case '5':
                            await _0x101073['waitForElementByCss'](_0x100de6['ugnZK']);
                            continue;
                        }
                        break;
                    }
                } finally {
                    await _0x101073['close']();
                }
            });
        }
        _0xba521c['QEsdO'](describe, _0xba521c['VIOBY'], () => {
            const _0x5da5b1 = {
                'RvyuH': function (_0x66ba72, _0x1073ad) {
                    return _0x100de6['vLMxX'](_0x66ba72, _0x1073ad);
                }
            };
            _0x100de6['DebFT'](beforeAll, async () => {
                await _0x100de6['SupLe'](remove, _0x100de6['dltKE'](join, _0x35087a, _0x100de6['vTQFp']));
            }), _0x100de6['DebFT'](beforeAll, async () => {
                _0x4b24bd = await _0x100de6['bgdkJ'](findPort), _0x5747dd = await _0x100de6['BnxmT'](launchApp, _0x35087a, _0x4b24bd);
            }), _0x100de6['ozOab'](afterAll, async () => {
                await _0x5da5b1['RvyuH'](killApp, _0x5747dd);
            }), _0x100de6['ozOab'](_0x3424ff, !![]);
        }), _0xba521c['bWpLZ'](describe, _0xba521c['zFrjs'], () => {
            const _0x3486f2 = {
                'uygnd': function (_0x1e63f6, _0x20d8d5, _0x14debd, _0x351b6c) {
                    return _0x100de6['uhpFu'](_0x1e63f6, _0x20d8d5, _0x14debd, _0x351b6c);
                },
                'oBZHr': function (_0x2ef802) {
                    return _0x100de6['bgdkJ'](_0x2ef802);
                },
                'TBCLW': function (_0x21fcca, _0x167793, _0x31854d) {
                    return _0x100de6['QXTUZ'](_0x21fcca, _0x167793, _0x31854d);
                }
            };
            _0x100de6['maqiU'](beforeAll, async () => {
                await _0x100de6['ozOab'](remove, _0x100de6['BnxmT'](join, _0x35087a, _0x100de6['vTQFp']));
            }), _0x100de6['UAURK'](beforeAll, async () => {
                await _0x3486f2['uygnd'](nextBuild, _0x35087a, [], {}), _0x4b24bd = await _0x3486f2['oBZHr'](findPort), _0x5747dd = await _0x3486f2['TBCLW'](nextStart, _0x35087a, _0x4b24bd);
            }), _0x100de6['UAURK'](afterAll, async () => {
                await _0x100de6['hIqpE'](killApp, _0x5747dd);
            }), _0x100de6['ezyeH'](_0x3424ff);
        });
    }), _0xba521c['KPUuK'](describe, _0xba521c['ACakb'], () => {
        const _0x5e30b3 = {
                'ImBCq': _0xba521c['RulsK'],
                'pyPBO': function (_0x59cb84, _0x434bb0) {
                    return _0xba521c['viLVN'](_0x59cb84, _0x434bb0);
                },
                'AMkGe': _0xba521c['Rtqle'],
                'kfdbg': function (_0x385968, _0x5f51c1) {
                    return _0xba521c['bHaDx'](_0x385968, _0x5f51c1);
                },
                'mQDGu': function (_0x221a4b, _0x394886, _0x9488c6) {
                    return _0xba521c['hPHPh'](_0x221a4b, _0x394886, _0x9488c6);
                },
                'myMWU': _0xba521c['MwUIE'],
                'zLgfn': function (_0x18fa70, _0x1fe47a, _0x4fc7ba, _0x317749) {
                    return _0xba521c['YDRlV'](_0x18fa70, _0x1fe47a, _0x4fc7ba, _0x317749);
                },
                'bAklE': function (_0x54a11b) {
                    return _0xba521c['aDPJV'](_0x54a11b);
                },
                'pZFPq': function (_0x55c7da, _0x5b2168, _0x2c1918) {
                    return _0xba521c['hPHPh'](_0x55c7da, _0x5b2168, _0x2c1918);
                }
            }, _0x40559a = _0xba521c['JHdYk'](join, fixturesDir, _0xba521c['SuMIQ']);
        let _0x2e3383, _0x5621a4;
        function _0x166b72() {
            const _0x18deb0 = {
                'pniNi': function (_0x1ccfe9, _0x2f88eb, _0x45c0d8) {
                    return _0xba521c['bWpLZ'](_0x1ccfe9, _0x2f88eb, _0x45c0d8);
                },
                'CuuHf': function (_0x50f2b6, _0x2dd6e1) {
                    return _0xba521c['HOdMN'](_0x50f2b6, _0x2dd6e1);
                },
                'TPCwo': function (_0x2a9873, _0x58cd07) {
                    return _0xba521c['HOdMN'](_0x2a9873, _0x58cd07);
                },
                'esBwu': _0xba521c['ojByN'],
                'UzRVw': function (_0x4e492e, _0x4d100b, _0x2f24fd, _0x51d3a5) {
                    return _0xba521c['frJvZ'](_0x4e492e, _0x4d100b, _0x2f24fd, _0x51d3a5);
                },
                'QQBoP': _0xba521c['ecnmW'],
                'ZsmFS': function (_0x25f642, _0x46ee82) {
                    return _0xba521c['DzaYd'](_0x25f642, _0x46ee82);
                }
            };
            async function _0x26d0a3(_0x2c47a1) {
                await _0x2c47a1['waitForElementByCss'](_0x5e30b3['ImBCq']);
                const _0x3f15ec = await _0x2c47a1['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                _0x5e30b3['pyPBO'](expect, _0x3f15ec)['toBe'](_0x5e30b3['AMkGe']);
            }
            _0xba521c['DaQoN'](it, _0xba521c['EcsMw'], async () => {
                const _0xcaadef = await _0x18deb0['pniNi'](_0x327dac, _0x5621a4, '/');
                try {
                    await _0x18deb0['CuuHf'](_0x26d0a3, _0xcaadef);
                    const _0x275cf0 = await _0xcaadef['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27)');
                    _0x18deb0['TPCwo'](expect, _0x275cf0)['toBeDefined'](), await _0xcaadef['waitForElementByCss'](_0x18deb0['esBwu'])['click'](), await _0x18deb0['UzRVw'](check, () => _0xcaadef['eval']('document.body.innerText'), _0x18deb0['QQBoP'], !![]);
                    const _0x231dd2 = await _0xcaadef['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27)');
                    _0x18deb0['TPCwo'](expect, _0x231dd2)['toBeFalsy']();
                    const _0x36e118 = await _0xcaadef['eval']('document.querySelector(\x27link[rel=stylesheet]\x27)');
                    _0x18deb0['ZsmFS'](expect, _0x36e118)['toBeFalsy']();
                } finally {
                    await _0xcaadef['close']();
                }
            });
        }
        _0xba521c['JHdYk'](describe, _0xba521c['zFrjs'], () => {
            _0xba521c['DzaYd'](beforeAll, async () => {
                await _0x5e30b3['kfdbg'](remove, _0x5e30b3['mQDGu'](join, _0x40559a, _0x5e30b3['myMWU']));
            }), _0xba521c['RChFq'](beforeAll, async () => {
                await _0x5e30b3['zLgfn'](nextBuild, _0x40559a, [], {}), _0x5621a4 = await _0x5e30b3['bAklE'](findPort), _0x2e3383 = await _0x5e30b3['pZFPq'](nextStart, _0x40559a, _0x5621a4);
            }), _0xba521c['viLVN'](afterAll, async () => {
                await _0x5e30b3['kfdbg'](killApp, _0x2e3383);
            }), _0xba521c['aDPJV'](_0x166b72);
        });
    }), _0xba521c['KPUuK'](describe, _0xba521c['Pxqwc'], () => {
        const _0x52cb88 = {
                'WjkbS': function (_0x52ed78, _0x2fa5be, _0x48b2a3) {
                    return _0xba521c['qlwdl'](_0x52ed78, _0x2fa5be, _0x48b2a3);
                },
                'vpupF': function (_0x120581, _0x687658) {
                    return _0xba521c['bOPFU'](_0x120581, _0x687658);
                },
                'jwTkq': _0xba521c['ojByN'],
                'AWKpv': _0xba521c['VShAv']
            }, _0xbec801 = _0xba521c['TGfLd'](join, fixturesDir, _0xba521c['BUDSJ']);
        let _0xc3de4f, _0x42f116;
        function _0x4488cf() {
            const _0x531a91 = {
                'mUMst': _0xba521c['RulsK'],
                'bADLj': function (_0x1e989a, _0x283945) {
                    return _0xba521c['bHaDx'](_0x1e989a, _0x283945);
                },
                'BfPPW': _0xba521c['Rtqle']
            };
            async function _0x45e509(_0x5bb2f2) {
                await _0x5bb2f2['waitForElementByCss'](_0x531a91['mUMst']);
                const _0x5be42d = await _0x5bb2f2['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                _0x531a91['bADLj'](expect, _0x5be42d)['toBe'](_0x531a91['BfPPW']);
            }
            _0xba521c['qlwdl'](it, _0xba521c['PVsya'], async () => {
                const _0x32f382 = await _0x52cb88['WjkbS'](_0x327dac, _0x42f116, '/');
                try {
                    await _0x52cb88['vpupF'](_0x45e509, _0x32f382), await _0x32f382['eval']('window.__priorNavigatePageState\x20=\x20\x27OOF\x27;'), await _0x32f382['waitForElementByCss'](_0x52cb88['jwTkq'])['click'](), await _0x32f382['waitForElementByCss'](_0x52cb88['AWKpv']);
                    const _0xcdc35c = await _0x32f382['eval']('window.__priorNavigatePageState');
                    _0x52cb88['vpupF'](expect, _0xcdc35c)['toBeFalsy']();
                } finally {
                    await _0x32f382['close']();
                }
            });
        }
        _0xba521c['TGfLd'](describe, _0xba521c['zFrjs'], () => {
            const _0x3b2f3e = {
                'XSNPZ': function (_0xd85b10, _0x111057) {
                    return _0xba521c['geSKk'](_0xd85b10, _0x111057);
                },
                'oOzAf': function (_0x245a10, _0x5efbe0, _0x55a360) {
                    return _0xba521c['qlwdl'](_0x245a10, _0x5efbe0, _0x55a360);
                },
                'aHVfi': _0xba521c['MwUIE'],
                'DQHvT': function (_0x3c6e4f, _0x4f1c44, _0x575f42, _0x2c6e64) {
                    return _0xba521c['YDRlV'](_0x3c6e4f, _0x4f1c44, _0x575f42, _0x2c6e64);
                },
                'wFRLJ': function (_0x4ccc42) {
                    return _0xba521c['aDPJV'](_0x4ccc42);
                },
                'mHIFw': _0xba521c['piIHe'],
                'OtHqU': _0xba521c['LoEmW'],
                'gwvKy': _0xba521c['bzfNL'],
                'iNJkt': function (_0x1e446f, _0x3a5246) {
                    return _0xba521c['WplRC'](_0x1e446f, _0x3a5246);
                }
            };
            _0xba521c['JcVYi'](beforeAll, async () => {
                await _0x3b2f3e['XSNPZ'](remove, _0x3b2f3e['oOzAf'](join, _0xbec801, _0x3b2f3e['aHVfi']));
            }), _0xba521c['JcVYi'](beforeAll, async () => {
                await _0x3b2f3e['DQHvT'](nextBuild, _0xbec801, [], {}), _0x42f116 = await _0x3b2f3e['wFRLJ'](findPort), _0xc3de4f = await _0x3b2f3e['oOzAf'](nextStart, _0xbec801, _0x42f116);
                const _0xc240e9 = await _0x3b2f3e['XSNPZ'](readJSON, _0x3b2f3e['DQHvT'](join, _0xbec801, _0x3b2f3e['aHVfi'], _0x3b2f3e['mHIFw'])), _0x1be416 = _0xc240e9[_0x3b2f3e['OtHqU']][_0x3b2f3e['gwvKy']]['filter'](_0x108bcc => _0x108bcc['endsWith']('.css'));
                if (_0x3b2f3e['iNJkt'](_0x1be416['length'], 0x1))
                    throw new Error();
                await Promise['all'](_0x1be416['map'](_0x4ea5b2 => remove(join(_0xbec801, '.next', _0x4ea5b2))));
            }), _0xba521c['bOPFU'](afterAll, async () => {
                await _0x52cb88['vpupF'](killApp, _0xc3de4f);
            }), _0xba521c['aDPJV'](_0x4488cf);
        });
    }), _0xba521c['IBICr'](describe, _0xba521c['OpqQY'], () => {
        const _0x5e768a = {
                'qtEOe': _0xba521c['RulsK'],
                'vEKpi': function (_0x408473, _0x2f1b52) {
                    return _0xba521c['bOPFU'](_0x408473, _0x2f1b52);
                },
                'bTXZH': _0xba521c['Rtqle'],
                'KDDow': _0xba521c['doRCf'],
                'dGXpa': function (_0x4f75ab, _0x10135c) {
                    return _0xba521c['bOPFU'](_0x4f75ab, _0x10135c);
                },
                'xxbIg': _0xba521c['qiWQQ'],
                'TixKv': function (_0x2f6915, _0x3229c7, _0x1a2c74) {
                    return _0xba521c['TGfLd'](_0x2f6915, _0x3229c7, _0x1a2c74);
                },
                'ylkOn': _0xba521c['TtiCO'],
                'hmGzf': _0xba521c['kbLGN'],
                'naZgB': function (_0x3122d3, _0x25bd7b) {
                    return _0xba521c['bOPFU'](_0x3122d3, _0x25bd7b);
                },
                'mNsRM': function (_0x4798e1, _0x5346a3) {
                    return _0xba521c['bOPFU'](_0x4798e1, _0x5346a3);
                },
                'wHAfC': function (_0x12b104, _0x3c420a) {
                    return _0xba521c['XMhcb'](_0x12b104, _0x3c420a);
                },
                'yBWFl': _0xba521c['wJqGA'],
                'lCHLH': function (_0x5bdb3c, _0x536b58) {
                    return _0xba521c['jHkmj'](_0x5bdb3c, _0x536b58);
                },
                'QQiJE': function (_0x1e435a, _0x29e1a8, _0x355ab1) {
                    return _0xba521c['MDUZq'](_0x1e435a, _0x29e1a8, _0x355ab1);
                },
                'WvHTw': _0xba521c['UjUFX'],
                'HDuJY': function (_0x4c98ad, _0x3f0877, _0x121f2a) {
                    return _0xba521c['kmqxb'](_0x4c98ad, _0x3f0877, _0x121f2a);
                },
                'GuFSn': _0xba521c['lCnPc'],
                'FgexM': _0xba521c['MeZdH'],
                'iSYIU': function (_0x4bcf84, _0x1dcfe2) {
                    return _0xba521c['jHkmj'](_0x4bcf84, _0x1dcfe2);
                },
                'DwUyv': _0xba521c['MwUIE'],
                'EziQm': function (_0x52c42c, _0x84f6ea, _0x500a8a, _0x280a33) {
                    return _0xba521c['NAPbP'](_0x52c42c, _0x84f6ea, _0x500a8a, _0x280a33);
                },
                'dfPmQ': function (_0x4c170e) {
                    return _0xba521c['HfnZO'](_0x4c170e);
                },
                'HiARO': function (_0x436849, _0x14d0c6, _0xf93825) {
                    return _0xba521c['kmqxb'](_0x436849, _0x14d0c6, _0xf93825);
                },
                'nveYS': _0xba521c['ZdWwm'],
                'NOBhh': _0xba521c['DBAQH'],
                'HwWFt': function (_0x5140e3, _0x3ef2f9, _0x5942f7, _0x265e9e, _0x45ba97) {
                    return _0xba521c['eTQmq'](_0x5140e3, _0x3ef2f9, _0x5942f7, _0x265e9e, _0x45ba97);
                },
                'kiVew': _0xba521c['vxJei'],
                'VOMne': _0xba521c['izQUx'],
                'TuOVK': _0xba521c['kDSmS'],
                'AEHmI': function (_0x3e8f1e, _0x1f3532) {
                    return _0xba521c['jHkmj'](_0x3e8f1e, _0x1f3532);
                },
                'tnQhG': function (_0x130186, _0x2f3661) {
                    return _0xba521c['bRBtO'](_0x130186, _0x2f3661);
                },
                'lezeI': function (_0x5ceb, _0x55d4b1) {
                    return _0xba521c['bRBtO'](_0x5ceb, _0x55d4b1);
                },
                'fvbxB': function (_0x4d7df3, _0x53f16b) {
                    return _0xba521c['bRBtO'](_0x4d7df3, _0x53f16b);
                },
                'IqXaw': function (_0x1a7be0, _0x39598e) {
                    return _0xba521c['bRBtO'](_0x1a7be0, _0x39598e);
                },
                'TOqcq': function (_0x14da9a) {
                    return _0xba521c['hGhRy'](_0x14da9a);
                }
            }, _0x291818 = _0xba521c['KJIUx'](join, fixturesDir, _0xba521c['yrEcs']);
        let _0x22c40a, _0x1dd08b;
        function _0x124ecf() {
            const _0x309fb7 = {
                'FhQNs': function (_0x180885, _0x1343d7, _0x2025b0) {
                    return _0x5e768a['TixKv'](_0x180885, _0x1343d7, _0x2025b0);
                },
                'SCFjK': function (_0x3a48fa, _0x34b8fe) {
                    return _0x5e768a['wHAfC'](_0x3a48fa, _0x34b8fe);
                },
                'IhDZf': _0x5e768a['hmGzf'],
                'txmYy': _0x5e768a['yBWFl'],
                'PtuJG': function (_0x8de0d9, _0x3cef77) {
                    return _0x5e768a['lCHLH'](_0x8de0d9, _0x3cef77);
                },
                'svTLe': function (_0x2af748, _0x47c9f1, _0x1c3013) {
                    return _0x5e768a['TixKv'](_0x2af748, _0x47c9f1, _0x1c3013);
                }
            };
            async function _0x40fb24(_0x403d2e) {
                await _0x403d2e['waitForElementByCss'](_0x5e768a['qtEOe']);
                const _0x29c63d = await _0x403d2e['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                _0x5e768a['vEKpi'](expect, _0x29c63d)['toBe'](_0x5e768a['bTXZH']);
            }
            async function _0x52ccf8(_0x358e12) {
                await _0x358e12['waitForElementByCss'](_0x5e768a['KDDow']);
                const _0x20b508 = await _0x358e12['eval']('window.getComputedStyle(document.querySelector(\x27#red-title\x27)).color');
                _0x5e768a['dGXpa'](expect, _0x20b508)['toBe'](_0x5e768a['xxbIg']);
            }
            _0x5e768a['QQiJE'](it, _0x5e768a['WvHTw'], async () => {
                const _0x1e1937 = await _0x309fb7['FhQNs'](_0x327dac, _0x1dd08b, '/');
                try {
                    await _0x309fb7['SCFjK'](_0x40fb24, _0x1e1937), await _0x309fb7['FhQNs'](check, () => _0x1e1937['eval']('document.querySelector(\x27p\x27).innerText'), _0x309fb7['IhDZf']);
                } finally {
                    await _0x1e1937['close']();
                }
            }), _0x5e768a['HDuJY'](it, _0x5e768a['GuFSn'], async () => {
                const _0x2cd1db = await _0x309fb7['FhQNs'](_0x327dac, _0x1dd08b, _0x309fb7['txmYy']);
                try {
                    await _0x309fb7['PtuJG'](_0x52ccf8, _0x2cd1db), await _0x309fb7['svTLe'](check, () => _0x2cd1db['eval']('document.querySelector(\x27p\x27).innerText'), _0x309fb7['IhDZf']);
                } finally {
                    await _0x2cd1db['close']();
                }
            }), _0x5e768a['HDuJY'](it, _0x5e768a['FgexM'], async () => {
                const _0x4c23f7 = await _0x5e768a['TixKv'](_0x327dac, _0x1dd08b, '/');
                try {
                    const _0x565a9f = _0x5e768a['ylkOn']['split']('|');
                    let _0x5bdd2e = 0x0;
                    while (!![]) {
                        switch (_0x565a9f[_0x5bdd2e++]) {
                        case '0':
                            await _0x5e768a['TixKv'](check, () => _0x4c23f7['eval']('document.querySelector(\x27p\x27).innerText'), _0x5e768a['hmGzf']);
                            continue;
                        case '1':
                            await _0x5e768a['naZgB'](_0x40fb24, _0x4c23f7);
                            continue;
                        case '2':
                            await _0x5e768a['TixKv'](check, () => _0x4c23f7['eval']('document.querySelector(\x27p\x27).innerText'), _0x5e768a['hmGzf']);
                            continue;
                        case '3':
                            await _0x4c23f7['eval']('document.querySelector(\x27#link-client\x27).click()');
                            continue;
                        case '4':
                            await _0x5e768a['mNsRM'](_0x52ccf8, _0x4c23f7);
                            continue;
                        }
                        break;
                    }
                } finally {
                    await _0x4c23f7['close']();
                }
            });
        }
        _0xba521c['KJIUx'](describe, _0xba521c['zFrjs'], () => {
            const _0x517cd5 = {
                'atNRW': function (_0xa55a67, _0x2585d5) {
                    return _0x5e768a['tnQhG'](_0xa55a67, _0x2585d5);
                }
            };
            _0x5e768a['lezeI'](beforeAll, async () => {
                await _0x5e768a['iSYIU'](remove, _0x5e768a['HDuJY'](join, _0x291818, _0x5e768a['DwUyv']));
            }), _0x5e768a['fvbxB'](beforeAll, async () => {
                await _0x5e768a['EziQm'](nextBuild, _0x291818, [], {}), _0x1dd08b = await _0x5e768a['dfPmQ'](findPort), _0x22c40a = await _0x5e768a['HDuJY'](nextStart, _0x291818, _0x1dd08b);
                const _0x4c9811 = (await _0x5e768a['HiARO'](readFile, _0x5e768a['EziQm'](join, _0x291818, _0x5e768a['DwUyv'], _0x5e768a['nveYS']), _0x5e768a['NOBhh']))['trim'](), _0x1c6dbd = _0x5e768a['HwWFt'](join, _0x291818, _0x5e768a['kiVew'], _0x4c9811, _0x5e768a['VOMne']);
                if (!await _0x5e768a['iSYIU'](pathExists, _0x1c6dbd))
                    throw new Error(_0x5e768a['TuOVK']);
                await _0x5e768a['AEHmI'](remove, _0x1c6dbd);
            }), _0x5e768a['IqXaw'](afterAll, async () => {
                await _0x517cd5['atNRW'](killApp, _0x22c40a);
            }), _0x5e768a['TOqcq'](_0x124ecf);
        });
    }), _0xba521c['IBICr'](describe, _0xba521c['cogvv'], () => {
        const _0x27e6c2 = {
                'wjfgW': _0xba521c['VShAv'],
                'yYnuL': function (_0x3f9f40, _0x4a07b9) {
                    return _0xba521c['bRBtO'](_0x3f9f40, _0x4a07b9);
                },
                'cBUqZ': _0xba521c['NVYCs'],
                'VZhWu': function (_0x1f1309, _0x468be4, _0x28fe7e) {
                    return _0xba521c['EARdO'](_0x1f1309, _0x468be4, _0x28fe7e);
                },
                'SxKnr': _0xba521c['ojByN'],
                'QSSnU': function (_0x1646ed, _0xa22a55) {
                    return _0xba521c['bRBtO'](_0x1646ed, _0xa22a55);
                },
                'OhnYx': function (_0x56c35e, _0x330eff) {
                    return _0xba521c['bRBtO'](_0x56c35e, _0x330eff);
                },
                'OVvtv': _0xba521c['BaOcN'],
                'IwezX': _0xba521c['ZDiPt'],
                'ntcQm': function (_0x17b872, _0x506365) {
                    return _0xba521c['bRBtO'](_0x17b872, _0x506365);
                },
                'qpatV': function (_0x9de744, _0x58eff1) {
                    return _0xba521c['JHObY'](_0x9de744, _0x58eff1);
                },
                'oQwba': _0xba521c['jtMlQ'],
                'TTyDT': _0xba521c['QDrMn'],
                'yQmFJ': _0xba521c['lkkYU'],
                'fyosx': function (_0x41673f) {
                    return _0xba521c['wZtom'](_0x41673f);
                },
                'uIDbr': function (_0x247d2a, _0x549ef3) {
                    return _0xba521c['HeeJQ'](_0x247d2a, _0x549ef3);
                },
                'IDoQu': function (_0x7bfbf7, _0x34ae53, _0x2716e1) {
                    return _0xba521c['qauHJ'](_0x7bfbf7, _0x34ae53, _0x2716e1);
                },
                'bqCeO': _0xba521c['MwUIE'],
                'btNVx': function (_0xcebec3, _0x82480d) {
                    return _0xba521c['Exzax'](_0xcebec3, _0x82480d);
                },
                'hIGHu': function (_0x568f33) {
                    return _0xba521c['wZtom'](_0x568f33);
                },
                'Jaijp': function (_0x2d7e95, _0x3fe825) {
                    return _0xba521c['WQPzM'](_0x2d7e95, _0x3fe825);
                },
                'TQGYZ': function (_0x9d6e71, _0x88c686, _0x457654) {
                    return _0xba521c['ZSYJY'](_0x9d6e71, _0x88c686, _0x457654);
                },
                'xXliH': function (_0x35154d, _0x2c7045, _0x5d96e5, _0x5c12c2) {
                    return _0xba521c['ZGXPD'](_0x35154d, _0x2c7045, _0x5d96e5, _0x5c12c2);
                },
                'ZaLxu': function (_0x592999) {
                    return _0xba521c['wZtom'](_0x592999);
                },
                'mnPTQ': function (_0x381452, _0x87310c, _0x22f181) {
                    return _0xba521c['GFScK'](_0x381452, _0x87310c, _0x22f181);
                },
                'MQqEO': function (_0x1bf389, _0x1f0c6e) {
                    return _0xba521c['WQPzM'](_0x1bf389, _0x1f0c6e);
                },
                'eIajc': function (_0x262e6c, _0x2c462a) {
                    return _0xba521c['WQPzM'](_0x262e6c, _0x2c462a);
                },
                'yVjsD': function (_0x22d6fa, _0x19cb10) {
                    return _0xba521c['wgORJ'](_0x22d6fa, _0x19cb10);
                },
                'aksBh': function (_0x47df2f) {
                    return _0xba521c['NxuSI'](_0x47df2f);
                }
            }, _0x4ecb64 = _0xba521c['GFScK'](join, fixturesDir, _0xba521c['maCib']);
        let _0x5db7d2, _0x1458fe;
        function _0x1dbff3() {
            const _0x170c75 = {
                'WbDbb': _0x27e6c2['SxKnr'],
                'wbTRo': function (_0x9e8c11, _0x4427a5) {
                    return _0x27e6c2['OhnYx'](_0x9e8c11, _0x4427a5);
                },
                'EjWTi': _0x27e6c2['OVvtv'],
                'lXPjG': function (_0x3814bd, _0x469278, _0x2d2d33) {
                    return _0x27e6c2['VZhWu'](_0x3814bd, _0x469278, _0x2d2d33);
                },
                'mZjmo': _0x27e6c2['IwezX'],
                'WyDNe': function (_0x284db7, _0x42f835) {
                    return _0x27e6c2['ntcQm'](_0x284db7, _0x42f835);
                },
                'OaplX': _0x27e6c2['wjfgW'],
                'rANGc': function (_0xa4f1e5, _0x82ecef) {
                    return _0x27e6c2['qpatV'](_0xa4f1e5, _0x82ecef);
                },
                'ChiHK': function (_0x2970b9, _0x4f66f5) {
                    return _0x27e6c2['qpatV'](_0x2970b9, _0x4f66f5);
                }
            };
            async function _0x4326b0(_0x3ed37e) {
                await _0x3ed37e['waitForElementByCss'](_0x170c75['WbDbb']);
                const _0x56fd50 = await _0x3ed37e['eval']('window.getComputedStyle(document.querySelector(\x27#link-other\x27)).backgroundColor');
                _0x170c75['wbTRo'](expect, _0x56fd50)['toBe'](_0x170c75['EjWTi']);
            }
            async function _0x43dee8(_0x2453d6) {
                await _0x2453d6['waitForElementByCss'](_0x27e6c2['wjfgW']);
                const _0x4e50a8 = await _0x2453d6['eval']('window.getComputedStyle(document.querySelector(\x27#link-index\x27)).backgroundColor');
                _0x27e6c2['yYnuL'](expect, _0x4e50a8)['toBe'](_0x27e6c2['cBUqZ']);
            }
            _0x27e6c2['VZhWu'](it, _0x27e6c2['oQwba'], async () => {
                const _0x572efb = await _0x170c75['lXPjG'](_0x327dac, _0x1458fe, '/');
                try {
                    await _0x170c75['wbTRo'](_0x4326b0, _0x572efb);
                } finally {
                    await _0x572efb['close']();
                }
            }), _0x27e6c2['VZhWu'](it, _0x27e6c2['TTyDT'], async () => {
                const _0x5cd262 = await _0x27e6c2['VZhWu'](_0x327dac, _0x1458fe, '/');
                try {
                    await _0x27e6c2['yYnuL'](_0x4326b0, _0x5cd262), await _0x5cd262['waitForElementByCss'](_0x27e6c2['SxKnr'])['moveTo'](), await _0x27e6c2['QSSnU'](waitFor, 0x7d0), await _0x27e6c2['OhnYx'](_0x4326b0, _0x5cd262);
                } finally {
                    await _0x5cd262['close']();
                }
            }), _0x27e6c2['VZhWu'](it, _0x27e6c2['yQmFJ'], async () => {
                const _0x1b7d8 = await _0x170c75['lXPjG'](_0x327dac, _0x1458fe, '/');
                try {
                    const _0x8e6b8f = _0x170c75['mZjmo']['split']('|');
                    let _0x4f8d74 = 0x0;
                    while (!![]) {
                        switch (_0x8e6b8f[_0x4f8d74++]) {
                        case '0':
                            await _0x170c75['WyDNe'](_0x43dee8, _0x1b7d8);
                            continue;
                        case '1':
                            await _0x1b7d8['waitForElementByCss'](_0x170c75['OaplX'])['click']();
                            continue;
                        case '2':
                            await _0x170c75['rANGc'](_0x4326b0, _0x1b7d8);
                            continue;
                        case '3':
                            await _0x170c75['ChiHK'](_0x4326b0, _0x1b7d8);
                            continue;
                        case '4':
                            await _0x1b7d8['waitForElementByCss'](_0x170c75['WbDbb'])['click']();
                            continue;
                        case '5':
                            await _0x1b7d8['waitForElementByCss'](_0x170c75['OaplX']);
                            continue;
                        }
                        break;
                    }
                } finally {
                    await _0x1b7d8['close']();
                }
            });
        }
        _0xba521c['GFScK'](describe, _0xba521c['VIOBY'], () => {
            const _0x1f2836 = {
                'GRraC': function (_0xbf8d29, _0x22e911) {
                    return _0x27e6c2['uIDbr'](_0xbf8d29, _0x22e911);
                },
                'RJiDx': function (_0x4a930c, _0x424765, _0x1bfff9) {
                    return _0x27e6c2['IDoQu'](_0x4a930c, _0x424765, _0x1bfff9);
                },
                'rNxCO': _0x27e6c2['bqCeO']
            };
            _0x27e6c2['uIDbr'](beforeAll, async () => {
                await _0x1f2836['GRraC'](remove, _0x1f2836['RJiDx'](join, _0x4ecb64, _0x1f2836['rNxCO']));
            }), _0x27e6c2['btNVx'](beforeAll, async () => {
                _0x1458fe = await _0x27e6c2['fyosx'](findPort), _0x5db7d2 = await _0x27e6c2['VZhWu'](launchApp, _0x4ecb64, _0x1458fe);
            }), _0x27e6c2['btNVx'](afterAll, async () => {
                await _0x27e6c2['uIDbr'](killApp, _0x5db7d2);
            }), _0x27e6c2['hIGHu'](_0x1dbff3);
        }), _0xba521c['yQxtS'](describe, _0xba521c['zFrjs'], () => {
            const _0x43225b = {
                'PmRxw': function (_0x2c95ce, _0x1ef745, _0x2d10cb, _0x37dda7) {
                    return _0x27e6c2['xXliH'](_0x2c95ce, _0x1ef745, _0x2d10cb, _0x37dda7);
                },
                'klCsk': function (_0x2bcfd5) {
                    return _0x27e6c2['ZaLxu'](_0x2bcfd5);
                },
                'MfVIq': function (_0x597ed0, _0x11392b, _0x326253) {
                    return _0x27e6c2['mnPTQ'](_0x597ed0, _0x11392b, _0x326253);
                },
                'pWDrN': function (_0x5702ef, _0x219f33) {
                    return _0x27e6c2['Jaijp'](_0x5702ef, _0x219f33);
                }
            };
            _0x27e6c2['MQqEO'](beforeAll, async () => {
                await _0x27e6c2['Jaijp'](remove, _0x27e6c2['TQGYZ'](join, _0x4ecb64, _0x27e6c2['bqCeO']));
            }), _0x27e6c2['eIajc'](beforeAll, async () => {
                await _0x43225b['PmRxw'](nextBuild, _0x4ecb64, [], {}), _0x1458fe = await _0x43225b['klCsk'](findPort), _0x5db7d2 = await _0x43225b['MfVIq'](nextStart, _0x4ecb64, _0x1458fe);
            }), _0x27e6c2['yVjsD'](afterAll, async () => {
                await _0x43225b['pWDrN'](killApp, _0x5db7d2);
            }), _0x27e6c2['aksBh'](_0x1dbff3);
        });
    }), _0xba521c['IBICr'](describe, _0xba521c['DNFej'], () => {
        const _0x379bda = _0xba521c['txBbk'](join, fixturesDir, _0xba521c['GMqOT']);
        _0xba521c['PwgAj'](it, _0xba521c['ZauDO'], async () => {
            await _0xba521c['wgORJ'](remove, _0xba521c['HQOOv'](join, _0x379bda, _0xba521c['MwUIE']));
            const {code: _0x5ca687} = await _0xba521c['wgORJ'](nextBuild, _0x379bda);
            _0xba521c['wgORJ'](expect, _0x5ca687)['toBe'](0x0);
        }), _0xba521c['bSdrf'](it, _0xba521c['wMzSP'], async () => {
            const _0x2444cf = await _0xba521c['wgORJ'](readdir, _0xba521c['HQOOv'](join, _0x379bda, _0xba521c['tpshp']));
            for (const _0x5f5b6f of _0x2444cf) {
                if (_0x5f5b6f['endsWith'](_0xba521c['SsApl']))
                    continue;
                const _0x26f92d = await _0xba521c['txBbk'](readFile, _0xba521c['NYZjk'](join, _0x379bda, _0xba521c['tpshp'], _0x5f5b6f), _0xba521c['DBAQH']);
                console['log'](_0x5f5b6f, _0x26f92d);
                const _0x1a9153 = _0x26f92d['includes']('p{') || _0x26f92d['includes']('p,') ? 0x2 : 0x1;
                _0xba521c['wgORJ'](expect, _0x26f92d['match'](/\(\/vercel\.svg/g)['length'])['toBe'](_0x1a9153), _0xba521c['LUMYR'](expect, _0x26f92d['match'](/\(\/_next\/static\/media/g)['length'])['toBe'](0x1), _0xba521c['LUMYR'](expect, _0x26f92d['match'](/\(https:\/\//g)['length'])['toBe'](_0x1a9153);
            }
        });
    });
});
