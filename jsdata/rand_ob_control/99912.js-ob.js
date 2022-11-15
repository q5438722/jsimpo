import _0x4b39b1 from 'consola';
import {
    loadFixture,
    getPort,
    Nuxt,
    rp
} from '../utils';
let port;
const url = _0x474b00 => 'http://localhost:' + port + _0x474b00;
let nuxt = null;
describe('basic\x20ssr', () => {
    const _0x7d8110 = {
        'SmSiP': function (_0x3f7678, _0x492c21) {
            return _0x3f7678(_0x492c21);
        },
        'uRlQY': 'basic',
        'GNHtz': function (_0x3ddbd5) {
            return _0x3ddbd5();
        },
        'ieARw': '0.0.0.0',
        'gbctJ': '/stateless',
        'YIbdU': function (_0x174977, _0x4da1d1) {
            return _0x174977(_0x4da1d1);
        },
        'ocwkT': '<h1>My\x20component!</h1>',
        'HUpCV': '/store-module',
        'EvnxC': function (_0x31ab9d, _0x853733) {
            return _0x31ab9d(_0x853733);
        },
        'aoOBb': '<h1>mutated</h1>',
        'hOwMv': '/css',
        'FzuEj': 'color:red',
        'hSVDk': '.red',
        'VHXkN': function (_0x3ff57c, _0x56220b) {
            return _0x3ff57c(_0x56220b);
        },
        'vVaoM': function (_0x282b32, _0x590db2) {
            return _0x282b32(_0x590db2);
        },
        'rkAvR': 'This\x20is\x20red',
        'uvKXW': function (_0xce7337, _0x1cfb2b) {
            return _0xce7337(_0x1cfb2b);
        },
        'ezpyF': 'red',
        'VilrJ': function (_0x521fe3, _0x26ae59) {
            return _0x521fe3(_0x26ae59);
        },
        'mkrSS': function (_0x4e19cb, _0x810e12) {
            return _0x4e19cb(_0x810e12);
        },
        'bMcMr': 'background-color:#00f',
        'nodGs': '/stateful',
        'cffSn': function (_0x5e27f8, _0xdcbd23) {
            return _0x5e27f8(_0xdcbd23);
        },
        'ApEPp': '<div><p>The\x20answer\x20is\x2042</p></div>',
        'VsBwR': '/store',
        'tPOAy': '<h1>foo/bar/baz:\x20Vuex\x20Nested\x20Modules</h1>',
        'Zuvoc': function (_0x321fbe, _0xcfad67) {
            return _0x321fbe(_0xcfad67);
        },
        'PKeXV': '<h2>index/counter:\x201</h2>',
        'fCtXk': function (_0x17fc27, _0x24e86b) {
            return _0x17fc27(_0x24e86b);
        },
        'dtZDp': '<h3>foo/blarg/getVal:\x204</h3>',
        'WwErD': '<h4>foo/bab/getBabVal:\x2010</h4>',
        'wqbme': '/head',
        'eqfoE': function (_0x1a7ae0, _0x295c3f) {
            return _0x1a7ae0(_0x295c3f);
        },
        'XkkLD': 'My\x20title\x20-\x20Nuxt',
        'KuDri': 'html',
        'votBF': function (_0x183aa0, _0x3b542a) {
            return _0x183aa0(_0x3b542a);
        },
        'xNOUh': '<div><h1>I\x20can\x20haz\x20meta\x20tags</h1></div>',
        'CMpzl': function (_0x47ee7f, _0xb40585) {
            return _0x47ee7f(_0xb40585);
        },
        'bRKde': '<script\x20data-n-head=\x22ssr\x22\x20src=\x22/body.js\x22\x20data-body=\x22true\x22>',
        'MgGJB': 'meta',
        'aViaB': function (_0x54f967, _0x4c032e) {
            return _0x54f967(_0x4c032e);
        },
        'PcpFW': 'content',
        'ROvRE': 'my\x20meta',
        'KyXyD': function (_0x43bf86, _0x2ede4d) {
            return _0x43bf86(_0x2ede4d);
        },
        'SgDaF': 'Body\x20script!',
        'hFnNC': '<html\x20foo=\x22baz\x22\x20data-n-head=\x22%7B%22foo%22:%7B%22ssr%22:%22baz%22%7D%7D\x22>',
        'jXYSZ': function (_0x16f7ba, _0x4ad6f5) {
            return _0x16f7ba(_0x4ad6f5);
        },
        'EHhYh': '<head\x20bar=\x22foo\x22\x20data-n-head=\x22%7B%22bar%22:%7B%22ssr%22:%22foo%22%7D%7D\x22>',
        'PWOgN': '<body\x20baz=\x22bar\x22\x20data-n-head=\x22%7B%22baz%22:%7B%22ssr%22:%22bar%22%7D%7D\x22>',
        'UYNbD': '/async-data',
        'evkMK': function (_0x2c3975, _0x584898) {
            return _0x2c3975(_0x584898);
        },
        'XmtdB': '<p>Nuxt</p>',
        'eIUir': '/await-async-data',
        'ExIMr': function (_0x1c6411, _0x24d500) {
            return _0x1c6411(_0x24d500);
        },
        'QRqAf': '<p>Await\x20Nuxt</p>',
        'sSLyA': '/callback-async-data',
        'DYESD': function (_0x50243c, _0x236f62) {
            return _0x50243c(_0x236f62);
        },
        'dncNp': '<p>Callback\x20Nuxt</p>',
        'fwMcz': '/users/1',
        'YwEHB': function (_0x2dab88, _0x515a72) {
            return _0x2dab88(_0x515a72);
        },
        'klEdm': '<h1>User:\x201</h1>',
        'RloKt': '/validate',
        'NJkHn': 'This\x20page\x20could\x20not\x20be\x20found',
        'RusjP': '/validate-async',
        'jGIZI': function (_0x486ad9, _0x5d91e0) {
            return _0x486ad9(_0x5d91e0);
        },
        'eVFBD': '/validate?valid=true',
        'RSUIw': function (_0x3476a1, _0x5edb12) {
            return _0x3476a1(_0x5edb12);
        },
        'vQauo': '<h1>I\x20am\x20valid</h1>',
        'fOIdF': '/validate-async?valid=true',
        'EmLxN': function (_0x35e17b, _0x813795) {
            return _0x35e17b(_0x813795);
        },
        'xMssE': '/validate?error=403',
        'pzVoa': 'Custom\x20Error',
        'fTgpP': '/validate-async?error=503',
        'SEjhG': '/before-enter',
        'kFyRR': function (_0x43bf15, _0x19c42a) {
            return _0x43bf15(_0x19c42a);
        },
        'QQrHm': '<h1>Index\x20page</h1>',
        'ASFyj': '/redirect',
        'GSzVV': '<div\x20id=\x22__nuxt\x22></div>',
        'pXDXu': 'window.__NUXT__',
        'pVFRe': function (_0x3541ce, _0xbe4ec4) {
            return _0x3541ce === _0xbe4ec4;
        },
        'JvbcM': function (_0x45f24d, _0x5ee458) {
            return _0x45f24d === _0x5ee458;
        },
        'voqPT': '/redirect-external',
        'ZOocU': function (_0xd0a404, _0x1c4851) {
            return _0xd0a404(_0x1c4851);
        },
        'LSvOf': 'https://nuxtjs.org/docs/2.x/features/data-fetching/',
        'PUSRI': '<div\x20data-server-rendered=\x22true\x22\x20id=\x22__nuxt\x22></div>',
        'wBWJh': '/redirect-external-no-slash',
        'gRlNo': 'https://nuxtjs.org/docs/2.x/features/data-fetching',
        'uDNNh': '/redirect-external-root',
        'rVKiT': function (_0x52d4c6, _0x40ea07) {
            return _0x52d4c6(_0x40ea07);
        },
        'pcyrd': 'https://nuxtjs.org/',
        'kBCRa': function (_0x11ec6b, _0x17526c, _0x23738d) {
            return _0x11ec6b(_0x17526c, _0x23738d);
        },
        'OkNiG': '/redirect\x20->\x20check\x20redirected\x20source',
        'NoJTN': function (_0x33a591, _0x386005, _0x25be45) {
            return _0x33a591(_0x386005, _0x25be45);
        },
        'ObtOq': '/redirect\x20->\x20external\x20link',
        'kUDaK': function (_0x415afa, _0xf610d6, _0xa8bc7d) {
            return _0x415afa(_0xf610d6, _0xa8bc7d);
        },
        'AxZeo': '/redirect\x20->\x20external\x20link\x20without\x20trailing\x20slash',
        'hpBif': function (_0x2b3b11, _0x55d140, _0xba8c2) {
            return _0x2b3b11(_0x55d140, _0xba8c2);
        },
        'JaTws': '/redirect\x20->\x20external\x20link\x20with\x20root\x20domain\x20url',
        'KAcxd': '/before-nuxt-render',
        'qBaWr': 'Nuxt',
        'QxBFm': function (_0x1c2649, _0x5c3209) {
            return _0x1c2649(_0x5c3209);
        },
        'ZcXVp': '/before-serialize',
        'ZajaT': function (_0x3142d9, _0x439691) {
            return _0x3142d9(_0x439691);
        },
        'dmIMH': function (_0x114c36, _0x5877d1) {
            return _0x114c36(_0x5877d1);
        },
        'REbOx': '/error',
        'MVXrD': 'Error\x20mouahahah',
        'CHsMH': '/error-string',
        'tmthR': function (_0x38a0d8, _0x3cb5a0) {
            return _0x38a0d8(_0x3cb5a0);
        },
        'REVTx': 'fetch\x20error!',
        'CNqPe': '/error-object',
        'BVyob': function (_0x4d510c, _0x2d38f2) {
            return _0x4d510c(_0x2d38f2);
        },
        'yxQxc': 'application/json',
        'aOJKu': function (_0x477cf3, _0x335436, _0xe6e35b) {
            return _0x477cf3(_0x335436, _0xe6e35b);
        },
        'iWrdO': 'text/json;\x20charset=utf-8',
        'CvwBj': '/error2',
        'XrZBE': function (_0x19a31e, _0x5ca90b) {
            return _0x19a31e(_0x5ca90b);
        },
        'TazTA': 'Custom\x20error',
        'VKFlI': function (_0x1a8490, _0xfab5c3) {
            return _0x1a8490(_0xfab5c3);
        },
        'cHawR': 'ezpz',
        'zkVFA': function (_0xeee4e2, _0x590d41) {
            return _0xeee4e2(_0x590d41);
        },
        'MnYKi': function (_0x1fdde5, _0x4ea670) {
            return _0x1fdde5(_0x4ea670);
        },
        'SYZdN': function (_0x59a557, _0x46210d) {
            return _0x59a557(_0x46210d);
        },
        'rsqze': '/error-midd',
        'QLdlh': function (_0xd447bf, _0x466d9d) {
            return _0xd447bf(_0x466d9d);
        },
        'HwXcq': function (_0x4d6ad3, _0x1eaf14) {
            return _0x4d6ad3(_0x1eaf14);
        },
        'IrfGJ': function (_0x35eba2, _0x2a68e8) {
            return _0x35eba2(_0x2a68e8);
        },
        'FtlpI': '/redirect-middleware',
        'fSvdN': '/redirect-name',
        'IHXKT': function (_0x29c9b3, _0x55b63f) {
            return _0x29c9b3 === _0x55b63f;
        },
        'IZVGJ': '/client-only',
        'lwblZ': function (_0x4ac4de, _0x31fa05) {
            return _0x4ac4de(_0x31fa05);
        },
        'QUZtb': '<p\x20class=\x22client-only-placeholder\x22>Loading...</p>',
        'qiOZR': 'Displayed\x20only\x20on\x20client-side</h1>',
        'KWWbf': '/no-ssr',
        'vUKtJ': '<p\x20class=\x22no-ssr-placeholder\x22>Loading...</p>',
        'mUwCo': '<no-ssr>\x20has\x20been\x20deprecated',
        'SuMpz': function (_0x117250, _0x3ad3ad, _0x5f1ca8) {
            return _0x117250(_0x3ad3ad, _0x5f1ca8);
        },
        'VULmF': function (_0x5032fa, _0x191ea5) {
            return _0x5032fa(_0x191ea5);
        },
        'LVZpP': function (_0x3f67db, _0x42154f) {
            return _0x3f67db(_0x42154f);
        },
        'iHwKG': function (_0x3a6236, _0x2649ac) {
            return _0x3a6236(_0x2649ac);
        },
        'jIviv': '/_nuxt/',
        'YopUV': '/meta',
        'nHuHh': function (_0x3d803f, _0x4d5210) {
            return _0x3d803f(_0x4d5210);
        },
        'KKLjC': '/fn-midd',
        'xrBXK': '/fn-midd?please=true',
        'YcBIY': function (_0x19e757, _0x20b909) {
            return _0x19e757(_0x20b909);
        },
        'zGwHI': '<h1>Date:',
        'WCzQH': '/router-guard',
        'nvPdh': function (_0x4607e9, _0x15a4d3) {
            return _0x4607e9(_0x15a4d3);
        },
        'gbxkd': 'Router\x20Guard',
        'jLMRg': '/router-guard-error',
        'nkPQC': 'Page\x20content',
        'gjrVZ': '/router-guard-error?error=zepe',
        'UDGXH': function (_0x208c1c, _0x40f318) {
            return _0x208c1c(_0x40f318);
        },
        'GDOdW': 'zepe',
        'eXTdu': '/router-guard-error?throw=ezae',
        'zqbYp': 'ezae',
        'Nlubz': '/jsx',
        'Pogmz': '<h1>JSX\x20Page</h1>',
        'gNpng': '/jsx-link',
        'WdBzF': function (_0x5f4421, _0x1117a9) {
            return _0x5f4421(_0x1117a9);
        },
        'QyyMM': '<h1>JSX\x20Link\x20Page</h1>',
        'NmZWw': '/js-link',
        'WwUpI': '<h1>vue\x20file\x20is\x20first-class</h1>',
        'FXNRo': '/тест雨',
        'pMAmU': 'Hello\x20unicode',
        'PXNAe': '/custom',
        'ckjob': '<h1>JS\x20Layout</h1>',
        'rqEWn': function (_0x3799e4, _0x24f330) {
            return _0x3799e4(_0x24f330);
        },
        'CCkPQ': '<h2>custom\x20page</h2>',
        'bNCCL': '/symlink/symlinked',
        'WzhiS': '<h1>Symlinked\x20page</h1>',
        'xSuwl': '/symlink/deep/nested-symlinked',
        'vYHkr': function (_0x39f431, _0xf2b045) {
            return _0x39f431(_0xf2b045);
        },
        'CUbNV': '<h1>Nested\x20symlink\x20page</h1>',
        'bKXyu': '/components',
        'vlejn': function (_0x3c2bcc, _0x37bc0c) {
            return _0x3c2bcc(_0x37bc0c);
        },
        'IGPfD': 'Auto\x20discovered\x20component!',
        'Ojwce': function (_0x85f13f, _0x5e2767) {
            return _0x85f13f(_0x5e2767);
        },
        'GJaqZ': '\x22\x20defer>',
        'KJKZU': function (_0x4efbce, _0x495c04, _0x5c92a9) {
            return _0x4efbce(_0x495c04, _0x5c92a9);
        },
        'CIICL': function (_0x1f582f, _0x5cc83a, _0x4ad50c) {
            return _0x1f582f(_0x5cc83a, _0x4ad50c);
        },
        'xGJOI': '/postcss',
        'YDzPO': function (_0xff8ad1, _0x54b96c, _0x17312b) {
            return _0xff8ad1(_0x54b96c, _0x17312b);
        },
        'AOdiu': function (_0x3d5f9e, _0x5b198b, _0x579392) {
            return _0x3d5f9e(_0x5b198b, _0x579392);
        },
        'OcAHZ': function (_0x9095e4, _0x36669c, _0x5a83eb) {
            return _0x9095e4(_0x36669c, _0x5a83eb);
        },
        'yRoif': function (_0x4f1419, _0xfb47c6, _0x3fb427) {
            return _0x4f1419(_0xfb47c6, _0x3fb427);
        },
        'IYZWk': '/validate\x20should\x20display\x20a\x20404',
        'pqJYD': function (_0x31889f, _0x490ebe, _0x1f7461) {
            return _0x31889f(_0x490ebe, _0x1f7461);
        },
        'BRoAs': '/validate-async\x20should\x20display\x20a\x20404',
        'LOVFX': function (_0x3268ba, _0x11f1ba, _0x5c3d82) {
            return _0x3268ba(_0x11f1ba, _0x5c3d82);
        },
        'pSOfq': function (_0x33c9e7, _0x58cf01, _0x1d9791) {
            return _0x33c9e7(_0x58cf01, _0x1d9791);
        },
        'iRLlw': function (_0x41abf8, _0x2bcc13, _0x5e5ef7) {
            return _0x41abf8(_0x2bcc13, _0x5e5ef7);
        },
        'iMdOR': function (_0x41190c, _0x2fdd62, _0x3c3afa) {
            return _0x41190c(_0x2fdd62, _0x3c3afa);
        },
        'OclpW': '/before-nuxt-render\x20->\x20check\x20window.__NUXT__.beforeNuxtRender\x20=\x20true',
        'mFcYE': '/before-serialize\x20->\x20check\x20window.__NUXT__.beforeSerialize\x20=\x20true',
        'mfzOV': function (_0x382dc8, _0x5ef731, _0x13202b) {
            return _0x382dc8(_0x5ef731, _0x13202b);
        },
        'xGDij': function (_0x1c38fc, _0x3aa86c, _0x57aee3) {
            return _0x1c38fc(_0x3aa86c, _0x57aee3);
        },
        'ALcDC': '/error\x20status\x20code',
        'VfmZg': function (_0x4325a1, _0x499093, _0x47c9e4) {
            return _0x4325a1(_0x499093, _0x47c9e4);
        },
        'IlMZz': '/error\x20json\x20format\x20error',
        'mvJAV': '/error2\x20status\x20code',
        'RLPnm': function (_0x5092d3, _0x4207ed, _0x2c5504) {
            return _0x5092d3(_0x4207ed, _0x2c5504);
        },
        'rOjbA': function (_0x5cf528, _0x112f61, _0x3a2b2b) {
            return _0x5cf528(_0x112f61, _0x3a2b2b);
        },
        'CTMbi': function (_0x3f9cf7, _0x4a492c, _0x94d7e7) {
            return _0x3f9cf7(_0x4a492c, _0x94d7e7);
        },
        'mxsHp': function (_0x2431bc, _0x3ba0bf, _0x3cb4a2) {
            return _0x2431bc(_0x3ba0bf, _0x3cb4a2);
        },
        'jHFAF': '/client-only\x20(client-side)',
        'QYzZu': '/no-ssr\x20(client-side)',
        'lwDrP': function (_0x27c657, _0x547afd, _0x2518fb) {
            return _0x27c657(_0x547afd, _0x2518fb);
        },
        'sPMmo': 'ETag\x20Header',
        'NzuCB': function (_0x12609b, _0x1966e1, _0x2b49af) {
            return _0x12609b(_0x1966e1, _0x2b49af);
        },
        'AMueW': '/_nuxt/\x20should\x20return\x20404',
        'LmodB': function (_0x345bf6, _0xd8b1bf, _0x437c5b) {
            return _0x345bf6(_0xd8b1bf, _0x437c5b);
        },
        'irbWC': function (_0x5b1ea9, _0x28ea50, _0x2d98f2) {
            return _0x5b1ea9(_0x28ea50, _0x2d98f2);
        },
        'fQXPo': function (_0x5dfd21, _0x32f6a8, _0xa97ff3) {
            return _0x5dfd21(_0x32f6a8, _0xa97ff3);
        },
        'BJWZw': function (_0xdeff74, _0x195334, _0x468f19) {
            return _0xdeff74(_0x195334, _0x468f19);
        },
        'QkOyS': '/тест雨\x20(test\x20non\x20ascii\x20route)',
        'icPjT': function (_0x2b6cad, _0x1f3945, _0x366fe6) {
            return _0x2b6cad(_0x1f3945, _0x366fe6);
        },
        'oNPIl': '/custom\x20(js\x20layout)',
        'VbHJW': function (_0x23d6ff, _0xf00f18, _0x1211a0) {
            return _0x23d6ff(_0xf00f18, _0x1211a0);
        },
        'QIQUU': function (_0x37c4bd, _0x3b33f3, _0x596202) {
            return _0x37c4bd(_0x3b33f3, _0x596202);
        },
        'wJAbi': '/\x20(normal\x20<script>)'
    };
    _0x7d8110['Ojwce'](beforeAll, async () => {
        const _0xde56c8 = await _0x7d8110['SmSiP'](loadFixture, _0x7d8110['uRlQY']);
        nuxt = new Nuxt(_0xde56c8), await nuxt['ready'](), port = await _0x7d8110['GNHtz'](getPort), await nuxt['server']['listen'](port, _0x7d8110['ieARw']);
    }), _0x7d8110['KJKZU'](test, _0x7d8110['gbctJ'], async () => {
        const {html: _0x30bd27} = await nuxt['server']['renderRoute'](_0x7d8110['gbctJ']);
        _0x7d8110['YIbdU'](expect, _0x30bd27)['toContain'](_0x7d8110['ocwkT']);
    }), _0x7d8110['CIICL'](test, _0x7d8110['HUpCV'], async () => {
        const {html: _0x1d2d82} = await nuxt['server']['renderRoute'](_0x7d8110['HUpCV']);
        _0x7d8110['EvnxC'](expect, _0x1d2d82)['toContain'](_0x7d8110['aoOBb']);
    }), _0x7d8110['CIICL'](test, _0x7d8110['hOwMv'], async () => {
        const _0x17f6c1 = await nuxt['server']['renderAndGetWindow'](_0x7d8110['EvnxC'](url, _0x7d8110['hOwMv'])), _0x430bad = _0x17f6c1['document']['head']['innerHTML'];
        _0x7d8110['EvnxC'](expect, _0x430bad)['toContain'](_0x7d8110['FzuEj']);
        const _0xed5af0 = _0x17f6c1['document']['querySelector'](_0x7d8110['hSVDk']);
        _0x7d8110['VHXkN'](expect, _0xed5af0)['not']['toBe'](null), _0x7d8110['vVaoM'](expect, _0xed5af0['textContent'])['toContain'](_0x7d8110['rkAvR']), _0x7d8110['uvKXW'](expect, _0xed5af0['className'])['toBe'](_0x7d8110['ezpyF']);
    }), _0x7d8110['CIICL'](test, _0x7d8110['xGJOI'], async () => {
        const _0x36741e = await nuxt['server']['renderAndGetWindow'](_0x7d8110['uvKXW'](url, _0x7d8110['hOwMv'])), _0x6fc914 = _0x36741e['document']['head']['innerHTML'];
        _0x7d8110['VilrJ'](expect, _0x6fc914)['toContain'](_0x7d8110['FzuEj']);
        const _0x2743e3 = _0x36741e['document']['querySelector'](_0x7d8110['hSVDk']);
        _0x7d8110['VilrJ'](expect, _0x2743e3)['not']['toBe'](null), _0x7d8110['VilrJ'](expect, _0x2743e3['textContent'])['toContain'](_0x7d8110['rkAvR']), _0x7d8110['mkrSS'](expect, _0x2743e3['className'])['toBe'](_0x7d8110['ezpyF']);
    }), _0x7d8110['CIICL'](test, _0x7d8110['xGJOI'], async () => {
        const _0x2acccc = await nuxt['server']['renderAndGetWindow'](_0x7d8110['mkrSS'](url, _0x7d8110['hOwMv'])), _0x430692 = _0x2acccc['document']['head']['innerHTML'];
        _0x7d8110['mkrSS'](expect, _0x430692)['toContain'](_0x7d8110['bMcMr']);
    }), _0x7d8110['YDzPO'](test, _0x7d8110['nodGs'], async () => {
        const {html: _0x3b8429} = await nuxt['server']['renderRoute'](_0x7d8110['nodGs']);
        _0x7d8110['cffSn'](expect, _0x3b8429)['toContain'](_0x7d8110['ApEPp']);
    }), _0x7d8110['YDzPO'](test, _0x7d8110['VsBwR'], async () => {
        const {html: _0x3f83d9} = await nuxt['server']['renderRoute'](_0x7d8110['VsBwR']);
        _0x7d8110['cffSn'](expect, _0x3f83d9)['toContain'](_0x7d8110['tPOAy']), _0x7d8110['Zuvoc'](expect, _0x3f83d9)['toContain'](_0x7d8110['PKeXV']), _0x7d8110['fCtXk'](expect, _0x3f83d9)['toContain'](_0x7d8110['dtZDp']), _0x7d8110['fCtXk'](expect, _0x3f83d9)['toContain'](_0x7d8110['WwErD']);
    }), _0x7d8110['AOdiu'](test, _0x7d8110['wqbme'], async () => {
        const _0x335133 = await nuxt['server']['renderAndGetWindow'](_0x7d8110['fCtXk'](url, _0x7d8110['wqbme']));
        _0x7d8110['eqfoE'](expect, _0x335133['document']['title'])['toBe'](_0x7d8110['XkkLD']);
        const _0x4757ab = _0x335133['document']['querySelector'](_0x7d8110['KuDri'])['outerHTML'];
        _0x7d8110['votBF'](expect, _0x4757ab)['toContain'](_0x7d8110['xNOUh']), _0x7d8110['CMpzl'](expect, _0x4757ab)['toContain'](_0x7d8110['bRKde']);
        const _0x70cf0a = _0x335133['document']['getElementsByTagName'](_0x7d8110['MgGJB']);
        _0x7d8110['aViaB'](expect, _0x70cf0a[0x1]['getAttribute'](_0x7d8110['PcpFW']))['toBe'](_0x7d8110['ROvRE']), _0x7d8110['KyXyD'](expect, _0x4b39b1['log'])['toHaveBeenCalledWith'](_0x7d8110['SgDaF']), _0x7d8110['KyXyD'](expect, _0x4757ab)['toContain'](_0x7d8110['hFnNC']), _0x7d8110['jXYSZ'](expect, _0x4757ab)['toContain'](_0x7d8110['EHhYh']), _0x7d8110['jXYSZ'](expect, _0x4757ab)['toContain'](_0x7d8110['PWOgN']);
    }), _0x7d8110['AOdiu'](test, _0x7d8110['UYNbD'], async () => {
        const {html: _0x4da7fe} = await nuxt['server']['renderRoute'](_0x7d8110['UYNbD']);
        _0x7d8110['evkMK'](expect, _0x4da7fe)['toContain'](_0x7d8110['XmtdB']);
    }), _0x7d8110['AOdiu'](test, _0x7d8110['eIUir'], async () => {
        const {html: _0x3459f8} = await nuxt['server']['renderRoute'](_0x7d8110['eIUir']);
        _0x7d8110['ExIMr'](expect, _0x3459f8)['toContain'](_0x7d8110['QRqAf']);
    }), _0x7d8110['OcAHZ'](test, _0x7d8110['sSLyA'], async () => {
        const {html: _0x38caba} = await nuxt['server']['renderRoute'](_0x7d8110['sSLyA']);
        _0x7d8110['DYESD'](expect, _0x38caba)['toContain'](_0x7d8110['dncNp']);
    }), _0x7d8110['yRoif'](test, _0x7d8110['fwMcz'], async () => {
        const {html: _0x605347} = await nuxt['server']['renderRoute'](_0x7d8110['fwMcz']);
        _0x7d8110['YwEHB'](expect, _0x605347)['toContain'](_0x7d8110['klEdm']);
    }), _0x7d8110['yRoif'](test, _0x7d8110['IYZWk'], async () => {
        const {html: _0x25e72e} = await nuxt['server']['renderRoute'](_0x7d8110['RloKt']);
        _0x7d8110['YwEHB'](expect, _0x25e72e)['toContain'](_0x7d8110['NJkHn']);
    }), _0x7d8110['pqJYD'](test, _0x7d8110['BRoAs'], async () => {
        const {html: _0x7c1c5f} = await nuxt['server']['renderRoute'](_0x7d8110['RusjP']);
        _0x7d8110['jGIZI'](expect, _0x7c1c5f)['toContain'](_0x7d8110['NJkHn']);
    }), _0x7d8110['pqJYD'](test, _0x7d8110['eVFBD'], async () => {
        const {html: _0x4fab80} = await nuxt['server']['renderRoute'](_0x7d8110['eVFBD']);
        _0x7d8110['RSUIw'](expect, _0x4fab80)['toContain'](_0x7d8110['vQauo']);
    }), _0x7d8110['LOVFX'](test, _0x7d8110['fOIdF'], async () => {
        const {html: _0xe4ef23} = await nuxt['server']['renderRoute'](_0x7d8110['fOIdF']);
        _0x7d8110['EmLxN'](expect, _0xe4ef23)['toContain'](_0x7d8110['vQauo']);
    }), _0x7d8110['pSOfq'](test, _0x7d8110['xMssE'], async () => {
        const {
            html: _0x429dbd,
            error: _0x3fba74
        } = await nuxt['server']['renderRoute'](_0x7d8110['xMssE']);
        _0x7d8110['EmLxN'](expect, _0x3fba74)['toMatchObject']({
            'statusCode': 0x193,
            'message': _0x7d8110['pzVoa']
        }), _0x7d8110['EmLxN'](expect, _0x429dbd)['toContain'](_0x7d8110['pzVoa']);
    }), _0x7d8110['iRLlw'](test, _0x7d8110['fTgpP'], async () => {
        const {
            html: _0x35405f,
            error: _0x11cd26
        } = await nuxt['server']['renderRoute'](_0x7d8110['fTgpP']);
        _0x7d8110['EmLxN'](expect, _0x11cd26)['toMatchObject']({
            'statusCode': 0x1f7,
            'message': _0x7d8110['pzVoa']
        }), _0x7d8110['EmLxN'](expect, _0x35405f)['toContain'](_0x7d8110['pzVoa']);
    }), _0x7d8110['iRLlw'](test, _0x7d8110['SEjhG'], async () => {
        const {html: _0x27f585} = await nuxt['server']['renderRoute'](_0x7d8110['SEjhG']);
        _0x7d8110['kFyRR'](expect, _0x27f585)['toContain'](_0x7d8110['QQrHm']);
    }), _0x7d8110['iMdOR'](describe, _0x7d8110['ASFyj'], () => {
        const _0x599a00 = {
            'saNIL': _0x7d8110['voqPT'],
            'qMvmy': function (_0x5f3359, _0x4448c4) {
                return _0x7d8110['ZOocU'](_0x5f3359, _0x4448c4);
            },
            'HFyxC': _0x7d8110['LSvOf'],
            'seIJV': _0x7d8110['PUSRI'],
            'TFnOl': _0x7d8110['wBWJh'],
            'lXbuc': _0x7d8110['gRlNo'],
            'CBNpB': _0x7d8110['uDNNh'],
            'ZRmsn': function (_0x574161, _0x166126) {
                return _0x7d8110['rVKiT'](_0x574161, _0x166126);
            },
            'SvwXn': _0x7d8110['pcyrd']
        };
        let _0x5b5d1c, _0x10e944;
        const _0x538980 = {
            'res': {
                'writeHead'(_0x326e7c, _0x3380fc) {
                    _0x10e944 = _0x326e7c, _0x5b5d1c = _0x3380fc;
                },
                'end'() {
                }
            }
        };
        _0x7d8110['kBCRa'](test, _0x7d8110['ASFyj'], async () => {
            const {
                html: _0x506e80,
                redirected: _0x1f042e
            } = await nuxt['server']['renderRoute'](_0x7d8110['ASFyj']);
            _0x7d8110['kFyRR'](expect, _0x506e80)['toContain'](_0x7d8110['GSzVV']), _0x7d8110['kFyRR'](expect, _0x506e80)['not']['toContain'](_0x7d8110['pXDXu']), _0x7d8110['kFyRR'](expect, _0x7d8110['pVFRe'](_0x1f042e['path'], '/'))['toBe'](!![]), _0x7d8110['kFyRR'](expect, _0x7d8110['JvbcM'](_0x1f042e['status'], 0x12e))['toBe'](!![]);
        }), _0x7d8110['kBCRa'](test, _0x7d8110['OkNiG'], async () => {
            const _0x77db4d = await nuxt['server']['renderAndGetWindow'](_0x7d8110['kFyRR'](url, _0x7d8110['ASFyj'])), _0x29768 = _0x77db4d['document']['body']['innerHTML'];
            _0x7d8110['kFyRR'](expect, _0x29768)['toContain'](_0x7d8110['QQrHm']);
        }), _0x7d8110['NoJTN'](test, _0x7d8110['ObtOq'], async () => {
            const {html: _0x156686} = await nuxt['server']['renderRoute'](_0x599a00['saNIL'], _0x538980);
            _0x599a00['qMvmy'](expect, _0x10e944)['toBe'](0x12e), _0x599a00['qMvmy'](expect, _0x5b5d1c['Location'])['toBe'](_0x599a00['HFyxC']), _0x599a00['qMvmy'](expect, _0x156686)['toContain'](_0x599a00['seIJV']);
        }), _0x7d8110['kUDaK'](test, _0x7d8110['AxZeo'], async () => {
            const {html: _0x5318e5} = await nuxt['server']['renderRoute'](_0x599a00['TFnOl'], _0x538980);
            _0x599a00['qMvmy'](expect, _0x10e944)['toBe'](0x12e), _0x599a00['qMvmy'](expect, _0x5b5d1c['Location'])['toBe'](_0x599a00['lXbuc']), _0x599a00['qMvmy'](expect, _0x5318e5)['toContain'](_0x599a00['seIJV']);
        }), _0x7d8110['hpBif'](test, _0x7d8110['JaTws'], async () => {
            const {html: _0x1fdeb8} = await nuxt['server']['renderRoute'](_0x599a00['CBNpB'], _0x538980);
            _0x599a00['ZRmsn'](expect, _0x10e944)['toBe'](0x12e), _0x599a00['ZRmsn'](expect, _0x5b5d1c['Location'])['toBe'](_0x599a00['SvwXn']), _0x599a00['ZRmsn'](expect, _0x1fdeb8)['toContain'](_0x599a00['seIJV']);
        });
    }), _0x7d8110['iMdOR'](test, _0x7d8110['OclpW'], async () => {
        const _0xa47d91 = await nuxt['server']['renderAndGetWindow'](_0x7d8110['rVKiT'](url, _0x7d8110['KAcxd']));
        _0x7d8110['rVKiT'](expect, _0xa47d91['document']['title'])['toBe'](_0x7d8110['qBaWr']), _0x7d8110['QxBFm'](expect, _0xa47d91['__NUXT__']['beforeNuxtRender'])['toBe'](!![]);
    }), _0x7d8110['iMdOR'](test, _0x7d8110['mFcYE'], async () => {
        const _0x15bbfd = await nuxt['server']['renderAndGetWindow'](_0x7d8110['QxBFm'](url, _0x7d8110['ZcXVp']));
        _0x7d8110['ZajaT'](expect, _0x15bbfd['document']['title'])['toBe'](_0x7d8110['qBaWr']), _0x7d8110['dmIMH'](expect, _0x15bbfd['__NUXT__']['beforeSerialize'])['toBe'](!![]);
    }), _0x7d8110['mfzOV'](test, _0x7d8110['REbOx'], async () => {
        await _0x7d8110['dmIMH'](expect, nuxt['server']['renderRoute'](_0x7d8110['REbOx'], {
            'req': {},
            'res': {}
        }))['rejects']['toThrow'](_0x7d8110['MVXrD']);
    }), _0x7d8110['xGDij'](test, _0x7d8110['CHsMH'], async () => {
        let _0x383b05;
        try {
            await nuxt['server']['renderRoute'](_0x7d8110['CHsMH'], {
                'req': {},
                'res': {}
            });
        } catch (_0x15d24a) {
            _0x383b05 = _0x15d24a;
        }
        await _0x7d8110['tmthR'](expect, _0x383b05)['toEqual'](_0x7d8110['REVTx']);
    }), _0x7d8110['xGDij'](test, _0x7d8110['CNqPe'], async () => {
        let _0x16191b;
        try {
            await nuxt['server']['renderRoute'](_0x7d8110['CNqPe'], {
                'req': {},
                'res': {}
            });
        } catch (_0x4cdb08) {
            _0x16191b = _0x4cdb08;
        }
        await _0x7d8110['tmthR'](expect, _0x16191b)['toEqual']({ 'error': _0x7d8110['REVTx'] });
    }), _0x7d8110['xGDij'](test, _0x7d8110['ALcDC'], async () => {
        await _0x7d8110['tmthR'](expect, _0x7d8110['BVyob'](rp, _0x7d8110['BVyob'](url, _0x7d8110['REbOx'])))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x1f4 } });
    }), _0x7d8110['VfmZg'](test, _0x7d8110['IlMZz'], async () => {
        const _0x5e9ef9 = { 'headers': { 'accept': _0x7d8110['yxQxc'] } };
        await _0x7d8110['BVyob'](expect, _0x7d8110['aOJKu'](rp, _0x7d8110['BVyob'](url, _0x7d8110['REbOx']), _0x5e9ef9))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'headers': { 'content-type': _0x7d8110['iWrdO'] }
            }
        });
    }), _0x7d8110['VfmZg'](test, _0x7d8110['CvwBj'], async () => {
        const {
            html: _0x931e22,
            error: _0x39aaf7
        } = await nuxt['server']['renderRoute'](_0x7d8110['CvwBj']);
        _0x7d8110['XrZBE'](expect, _0x931e22)['toContain'](_0x7d8110['TazTA']), _0x7d8110['XrZBE'](expect, _0x39aaf7['message'])['toContain'](_0x7d8110['TazTA']), _0x7d8110['VKFlI'](expect, _0x39aaf7['statusCode'])['toBe'](0x1f4), _0x7d8110['VKFlI'](expect, _0x39aaf7['customProp'])['toBe'](_0x7d8110['cHawR']);
    }), _0x7d8110['VfmZg'](test, _0x7d8110['mvJAV'], async () => {
        await _0x7d8110['VKFlI'](expect, _0x7d8110['VKFlI'](rp, _0x7d8110['VKFlI'](url, _0x7d8110['CvwBj'])))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'body': expect['stringContaining'](_0x7d8110['TazTA'])
            }
        });
    }), _0x7d8110['RLPnm'](test, _0x7d8110['rsqze'], async () => {
        await _0x7d8110['zkVFA'](expect, _0x7d8110['MnYKi'](rp, _0x7d8110['SYZdN'](url, _0x7d8110['rsqze'])))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x1f9 } });
    }), _0x7d8110['rOjbA'](test, _0x7d8110['FtlpI'], async () => {
        await _0x7d8110['QLdlh'](expect, _0x7d8110['HwXcq'](rp, _0x7d8110['IrfGJ'](url, _0x7d8110['FtlpI'])))['resolves']['toBeTruthy']();
    }), _0x7d8110['rOjbA'](test, _0x7d8110['fSvdN'], async () => {
        const {
            html: _0x5c43f7,
            redirected: _0x1ea35b
        } = await nuxt['server']['renderRoute'](_0x7d8110['fSvdN']);
        _0x7d8110['IrfGJ'](expect, _0x5c43f7)['toContain'](_0x7d8110['GSzVV']), _0x7d8110['IrfGJ'](expect, _0x7d8110['IHXKT'](_0x1ea35b['path'], _0x7d8110['gbctJ']))['toBe'](!![]), _0x7d8110['IrfGJ'](expect, _0x7d8110['IHXKT'](_0x1ea35b['status'], 0x12e))['toBe'](!![]);
    }), _0x7d8110['CTMbi'](test, _0x7d8110['IZVGJ'], async () => {
        const {html: _0x2adc03} = await nuxt['server']['renderRoute'](_0x7d8110['IZVGJ']);
        _0x7d8110['lwblZ'](expect, _0x2adc03['includes'](_0x7d8110['QUZtb']))['toBe'](!![]);
    }), _0x7d8110['mxsHp'](test, _0x7d8110['jHFAF'], async () => {
        const _0x479880 = await nuxt['server']['renderAndGetWindow'](_0x7d8110['lwblZ'](url, _0x7d8110['IZVGJ'])), _0x345266 = _0x479880['document']['body']['innerHTML'];
        _0x7d8110['lwblZ'](expect, _0x345266)['toContain'](_0x7d8110['qiOZR']);
    }), _0x7d8110['mxsHp'](test, _0x7d8110['KWWbf'], async () => {
        const {html: _0x583edd} = await nuxt['server']['renderRoute'](_0x7d8110['KWWbf']);
        _0x7d8110['lwblZ'](expect, _0x583edd['includes'](_0x7d8110['vUKtJ']))['toBe'](!![]);
    }), _0x7d8110['mxsHp'](test, _0x7d8110['QYzZu'], async () => {
        const _0x45ebdb = await nuxt['server']['renderAndGetWindow'](_0x7d8110['lwblZ'](url, _0x7d8110['KWWbf'])), _0xccec7 = _0x45ebdb['document']['body']['innerHTML'];
        _0x7d8110['lwblZ'](expect, _0xccec7)['toContain'](_0x7d8110['qiOZR']), _0x7d8110['lwblZ'](expect, _0x4b39b1['warn'])['toHaveBeenCalledTimes'](0x1), _0x7d8110['lwblZ'](expect, _0x4b39b1['warn'])['toHaveBeenCalledWith'](expect['stringContaining'](_0x7d8110['mUwCo']));
    }), _0x7d8110['lwDrP'](test, _0x7d8110['sPMmo'], async () => {
        const {
                headers: {etag: _0x19acbb}
            } = await _0x7d8110['lwblZ'](rp, _0x7d8110['lwblZ'](url, _0x7d8110['gbctJ'])), _0x46f07c = await _0x7d8110['SuMpz'](rp, _0x7d8110['VULmF'](url, _0x7d8110['gbctJ']), { 'headers': { 'If-None-Match': _0x19acbb } });
        await _0x7d8110['LVZpP'](expect, _0x46f07c)['toMatchObject']({ 'statusCode': 0x130 });
    }), _0x7d8110['NzuCB'](test, _0x7d8110['AMueW'], async () => {
        await _0x7d8110['LVZpP'](expect, _0x7d8110['iHwKG'](rp, _0x7d8110['iHwKG'](url, _0x7d8110['jIviv'])))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x194 } });
    }), _0x7d8110['LmodB'](test, _0x7d8110['YopUV'], async () => {
        const {html: _0x43c948} = await nuxt['server']['renderRoute'](_0x7d8110['YopUV']);
        _0x7d8110['iHwKG'](expect, /<pre>.*&quot;works&quot;: true.*<\/pre>/s['test'](_0x43c948))['toBe'](!![]);
    }), _0x7d8110['LmodB'](test, _0x7d8110['KKLjC'], async () => {
        await _0x7d8110['iHwKG'](expect, _0x7d8110['nHuHh'](rp, _0x7d8110['nHuHh'](url, _0x7d8110['KKLjC'])))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x193 } });
    }), _0x7d8110['LmodB'](test, _0x7d8110['xrBXK'], async () => {
        const {html: _0x46fa1f} = await nuxt['server']['renderRoute'](_0x7d8110['xrBXK']);
        _0x7d8110['YcBIY'](expect, _0x46fa1f)['toContain'](_0x7d8110['zGwHI']);
    }), _0x7d8110['LmodB'](test, _0x7d8110['WCzQH'], async () => {
        const {html: _0x45a122} = await nuxt['server']['renderRoute'](_0x7d8110['WCzQH']);
        _0x7d8110['nvPdh'](expect, _0x45a122)['toContain'](_0x7d8110['XmtdB']), _0x7d8110['nvPdh'](expect, _0x45a122['includes'](_0x7d8110['gbxkd']))['toBe'](![]);
    }), _0x7d8110['LmodB'](test, _0x7d8110['jLMRg'], async () => {
        const {
            html: _0x2d0d48,
            error: _0xd2dcc7
        } = await nuxt['server']['renderRoute'](_0x7d8110['jLMRg']);
        _0x7d8110['nvPdh'](expect, _0xd2dcc7)['toBe'](null), _0x7d8110['nvPdh'](expect, _0x2d0d48['includes'](_0x7d8110['nkPQC']))['toBe'](![]);
    }), _0x7d8110['irbWC'](test, _0x7d8110['gjrVZ'], async () => {
        const {
            html: _0x302eec,
            error: _0x15e285
        } = await nuxt['server']['renderRoute'](_0x7d8110['gjrVZ']);
        _0x7d8110['nvPdh'](expect, _0x302eec['includes'](_0x7d8110['nkPQC']))['toBe'](![]), _0x7d8110['UDGXH'](expect, _0x302eec)['toContain'](_0x7d8110['GDOdW']), _0x7d8110['UDGXH'](expect, _0x15e285['message'])['toContain'](_0x7d8110['GDOdW']), _0x7d8110['UDGXH'](expect, _0x15e285['statusCode'])['toBe'](0x1f4);
    }), _0x7d8110['irbWC'](test, _0x7d8110['eXTdu'], async () => {
        await _0x7d8110['UDGXH'](expect, nuxt['server']['renderRoute'](_0x7d8110['eXTdu']))['rejects']['toMatchObject']({ 'message': _0x7d8110['zqbYp'] });
    }), _0x7d8110['fQXPo'](test, _0x7d8110['Nlubz'], async () => {
        const {html: _0x564e3c} = await nuxt['server']['renderRoute'](_0x7d8110['Nlubz']);
        _0x7d8110['UDGXH'](expect, _0x564e3c)['toContain'](_0x7d8110['Pogmz']);
    }), _0x7d8110['fQXPo'](test, _0x7d8110['gNpng'], async () => {
        const {html: _0xe151ac} = await nuxt['server']['renderRoute'](_0x7d8110['gNpng']);
        _0x7d8110['WdBzF'](expect, _0xe151ac)['toContain'](_0x7d8110['QyyMM']);
    }), _0x7d8110['BJWZw'](test, _0x7d8110['NmZWw'], async () => {
        const {html: _0x2db25c} = await nuxt['server']['renderRoute'](_0x7d8110['NmZWw']);
        _0x7d8110['WdBzF'](expect, _0x2db25c)['toContain'](_0x7d8110['WwUpI']);
    }), _0x7d8110['BJWZw'](test, _0x7d8110['QkOyS'], async () => {
        const _0x26e8a8 = await nuxt['server']['renderAndGetWindow'](_0x7d8110['WdBzF'](url, _0x7d8110['FXNRo'])), _0x32cc82 = _0x26e8a8['document']['body']['innerHTML'];
        _0x7d8110['WdBzF'](expect, _0x32cc82)['toMatch'](_0x7d8110['pMAmU']);
    }), _0x7d8110['icPjT'](test, _0x7d8110['oNPIl'], async () => {
        const _0x5f0013 = await nuxt['server']['renderAndGetWindow'](_0x7d8110['WdBzF'](url, _0x7d8110['PXNAe'])), _0x31a27a = _0x5f0013['document']['body']['innerHTML'];
        _0x7d8110['WdBzF'](expect, _0x31a27a)['toMatch'](_0x7d8110['ckjob']), _0x7d8110['rqEWn'](expect, _0x31a27a)['toMatch'](_0x7d8110['CCkPQ']);
    }), _0x7d8110['VbHJW'](test, _0x7d8110['bNCCL'], async () => {
        const {html: _0x4b1ad9} = await nuxt['server']['renderRoute'](_0x7d8110['bNCCL']);
        _0x7d8110['rqEWn'](expect, _0x4b1ad9)['toContain'](_0x7d8110['WzhiS']);
    }), _0x7d8110['QIQUU'](test, _0x7d8110['xSuwl'], async () => {
        const {html: _0x1e1414} = await nuxt['server']['renderRoute'](_0x7d8110['xSuwl']);
        _0x7d8110['vYHkr'](expect, _0x1e1414)['toContain'](_0x7d8110['CUbNV']);
    }), _0x7d8110['QIQUU'](test, _0x7d8110['bKXyu'], async () => {
        const {html: _0x48896e} = await nuxt['server']['renderRoute'](_0x7d8110['bKXyu']);
        _0x7d8110['vlejn'](expect, _0x48896e)['toContain'](_0x7d8110['IGPfD']);
    }), _0x7d8110['QIQUU'](test, _0x7d8110['wJAbi'], async () => {
        const {html: _0x45d39f} = await nuxt['server']['renderRoute']('/');
        _0x7d8110['Ojwce'](expect, _0x45d39f)['toContain'](_0x7d8110['GJaqZ']);
    }), _0x7d8110['Ojwce'](afterAll, async () => {
        await nuxt['close']();
    });
});
