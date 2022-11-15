const assert = require('assert'), _ = require('lodash'), request = require('supertest'), jsonServer = require('../../src/server');
describe('Server', () => {
    const _0x51d29b = {
        'HWWHs': '9|10|2|4|8|3|14|6|5|7|11|0|12|15|13|1',
        'DwPie': 'Technology',
        'LFXcP': 'Photography',
        'CWDFZ': 'photo',
        'IufvL': 'Aileen',
        'yRfuB': 'Colombia',
        'HsRPH': 'Barney',
        'OQvtS': 'Carley',
        'LPmqG': 'Daniel',
        'aRbfO': 'Belize',
        'ikFRr': 'Ellen',
        'yusGy': 'Frank',
        'ZfqhI': 'Grace',
        'EDeBr': 'Argentina',
        'KKReB': 'Henry',
        'gyyZq': 'Isabelle',
        'rujhN': 'Jim',
        'pEbuz': '0123',
        'JEFJq': 'George',
        'LOPac': '123',
        'AcBvW': '1234',
        'GhPGj': 'dewey',
        'mLibK': 'cheatem',
        'XWBAQ': 'howe',
        'eDGFZ': 'foo',
        'zxgex': 'bar',
        'rljZa': 'baz',
        'MNOHC': 'qux',
        'MEMCR': 'quux',
        'XJCax': 'abcd-1234',
        'ZHMdV': 'http://example.com',
        'uzPMr': function (_0x4fef4b, _0x429361, _0x46d157) {
            return _0x4fef4b(_0x429361, _0x46d157);
        },
        'pnDjO': 'should\x20respond\x20with\x20json\x20and\x20full\x20database',
        'ItJbq': 'should\x20respond\x20with\x20json\x20and\x20corresponding\x20resources',
        'kuOnZ': function (_0x395138, _0x4b3fad, _0x3e7e4f) {
            return _0x395138(_0x4b3fad, _0x3e7e4f);
        },
        'QVKsN': 'should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found',
        'UZgBi': function (_0x4bb8e1, _0x503aef) {
            return _0x4bb8e1(_0x503aef);
        },
        'vIKFj': '/posts?body=foo',
        'BQAji': 'Content-Type',
        'aIUuA': function (_0x101ea3, _0x18cda4, _0x853387) {
            return _0x101ea3(_0x18cda4, _0x853387);
        },
        'EnbOt': 'should\x20respond\x20with\x20json\x20and\x20filter\x20resources',
        'TETJi': 'should\x20be\x20strict',
        'IfIPI': 'should\x20support\x20multiple\x20filters',
        'rfWzm': 'should\x20support\x20deep\x20filter',
        'KjoYo': function (_0x4b190d, _0x5514ab, _0x296870) {
            return _0x4b190d(_0x5514ab, _0x296870);
        },
        'rRtDg': 'should\x20ignore\x20JSONP\x20query\x20parameters\x20callback\x20and\x20_\x20',
        'dRRGX': function (_0x294d58, _0x5563f6, _0x4f1691) {
            return _0x294d58(_0x5563f6, _0x4f1691);
        },
        'RpIlc': 'should\x20ignore\x20unknown\x20query\x20parameters',
        'vntKK': 'should\x20not\x20fail\x20with\x20null\x20value',
        'FXpSW': '4|1|3|5|2|0',
        'wxraQ': function (_0x59b07d, _0x3bfa4f, _0x449c09) {
            return _0x59b07d(_0x3bfa4f, _0x449c09);
        },
        'JKyFz': 'should\x20support\x20filtering\x20by\x20boolean\x20value\x20false',
        'SGNbU': 'should\x20respond\x20with\x20json\x20and\x20make\x20a\x20deep\x20full-text\x20search',
        'GRDBY': function (_0x605afc, _0x2d7313, _0x53a0bf) {
            return _0x605afc(_0x2d7313, _0x53a0bf);
        },
        'HHunC': 'should\x20ignore\x20duplicate\x20q\x20query\x20parameters',
        'kzZMR': function (_0x5d7c21, _0x24081e, _0x2baac8) {
            return _0x5d7c21(_0x24081e, _0x2baac8);
        },
        'bwTzK': 'should\x20return\x20an\x20empty\x20array\x20when\x20nothing\x20is\x20matched',
        'UdaqX': 'should\x20respond\x20with\x20json\x20and\x20make\x20a\x20full-text\x20search',
        'VhjgD': 'should\x20support\x20other\x20query\x20parameters',
        'FjjNx': function (_0x3880eb, _0x5d4fb2, _0x240bc3) {
            return _0x3880eb(_0x5d4fb2, _0x240bc3);
        },
        'NEaic': 'should\x20respond\x20with\x20a\x20sliced\x20array',
        'qkHZS': '5|0|2|1|4|3',
        'SEyHP': 'should\x20reverse\x20sorting\x20with\x20_order=DESC',
        'ptrhU': 'should\x20sort\x20on\x20numerical\x20field',
        'neQxf': function (_0x207fe6, _0x4a73d3, _0x3a43f5) {
            return _0x207fe6(_0x4a73d3, _0x3a43f5);
        },
        'CAunb': 'should\x20reverse\x20sorting\x20with\x20_order=desc\x20(case\x20insensitive)',
        'imVyZ': 'should\x20sort\x20on\x20multiple\x20fields',
        'rgRdN': function (_0x3accb7, _0x50eff0, _0x1275f7) {
            return _0x3accb7(_0x50eff0, _0x1275f7);
        },
        'OsNQx': 'should\x20sort\x20on\x20nested\x20field',
        'RMCxE': function (_0x5574eb, _0x2f4e60, _0x56842e) {
            return _0x5574eb(_0x2f4e60, _0x56842e);
        },
        'jStdD': 'should\x20respond\x20with\x20json\x20and\x20sort\x20on\x20a\x20field',
        'yZvSt': function (_0x1eac01, _0x6f8cdd, _0x1c5092) {
            return _0x1eac01(_0x6f8cdd, _0x1c5092);
        },
        'ZHPEs': 'should\x20respond\x20with\x20a\x20limited\x20array',
        'XyDZz': function (_0x2f7426, _0x573d35, _0x5964ab) {
            return _0x2f7426(_0x573d35, _0x5964ab);
        },
        'bmkXY': 'should\x20paginate',
        'PsMzf': '<http://localhost/list?_page=1&_limit=1>;\x20rel=\x22first\x22',
        'hpbPT': '<http://localhost/list?_page=1&_limit=1>;\x20rel=\x22prev\x22',
        'bWVSQ': '<http://localhost/list?_page=3&_limit=1>;\x20rel=\x22next\x22',
        'XIMQv': '<http://localhost/list?_page=15&_limit=1>;\x20rel=\x22last\x22',
        'brxYI': function (_0x47aa6b, _0xa1c1e4) {
            return _0x47aa6b(_0xa1c1e4);
        },
        'BmSsi': '/list?_page=2&_limit=1',
        'mbHXo': 'host',
        'VtBvc': 'localhost',
        'CzRRj': 'x-total-count',
        'RlvHc': 'link',
        'rFZjl': 'Access-Control-Expose-Headers',
        'anhMP': 'X-Total-Count,\x20Link',
        'DlgEc': function (_0xba496d, _0x1be615, _0x3c234d) {
            return _0xba496d(_0x1be615, _0x3c234d);
        },
        'UPrUT': 'should\x20paginate\x20with\x20a\x20custom\x20limit',
        'GybPL': function (_0x325021, _0x251569, _0x286974) {
            return _0x325021(_0x251569, _0x286974);
        },
        'tyQPO': 'should\x20accept\x20multiple\x20parameters',
        'ZvppZ': 'should\x20respond\x20with\x20an\x20array\x20that\x20matches\x20the\x20like\x20operator\x20(case\x20insensitive)',
        'LeAku': 'should\x20respond\x20with\x20json\x20and\x20corresponding\x20nested\x20resources',
        'UUwFy': function (_0xf79274, _0x267c2b, _0x18da4e) {
            return _0xf79274(_0x267c2b, _0x18da4e);
        },
        'fdRDm': 'should\x20respond\x20with\x20json\x20and\x20corresponding\x20resource',
        'TDTNa': 'should\x20support\x20string\x20id,\x20respond\x20with\x20json\x20and\x20corresponding\x20resource',
        'kOdgV': 'should\x20support\x20integer\x20id\x20as\x20string',
        'oWbku': function (_0x54fa56, _0x520af5, _0x3578c9) {
            return _0x54fa56(_0x520af5, _0x3578c9);
        },
        'BikSn': function (_0x5109ef, _0xead026) {
            return _0x5109ef(_0xead026);
        },
        'BYOKX': '/posts?_embed=comments',
        'sMzLP': 'should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources',
        'HKCEC': function (_0x1a2902, _0x56869d) {
            return _0x1a2902(_0x56869d);
        },
        'NCaUs': '/posts?_embed=comments&_embed=refs',
        'LDvhu': '/posts/1?_embed=comments',
        'vIEMl': function (_0x3a7e1f, _0x33a7d9, _0xf6ab0a) {
            return _0x3a7e1f(_0x33a7d9, _0xf6ab0a);
        },
        'orXNb': function (_0x4d5cbb, _0x343325) {
            return _0x4d5cbb(_0x343325);
        },
        'KeYfV': '/posts/1?_embed=comments&_embed=refs',
        'tFmbA': 'should\x20respond\x20with\x20corresponding\x20resource\x20and\x20embedded\x20resources',
        'GZlTD': function (_0x140a3a, _0x30aa33) {
            return _0x140a3a(_0x30aa33);
        },
        'ueEVD': '/refs?_expand=post',
        'JSDHx': function (_0x14848e, _0x2f696b, _0x15a6f3) {
            return _0x14848e(_0x2f696b, _0x15a6f3);
        },
        'ciXpE': 'should\x20respond\x20with\x20corresponding\x20resource\x20and\x20expanded\x20inner\x20resources',
        'mHfak': function (_0x19f96c, _0x47fd55) {
            return _0x19f96c(_0x47fd55);
        },
        'RYuZu': '/comments/1?_expand=post',
        'ztugI': '/refs?_expand=post&_expand=user',
        'nrqqW': '/comments/1?_expand=post&_expand=user',
        'iaHjz': function (_0x1df027, _0x593160) {
            return _0x1df027(_0x593160);
        },
        'cteiV': function (_0x2227d2, _0x41ac10) {
            return _0x2227d2 > _0x41ac10;
        },
        'eGqAF': function (_0x53fef1, _0x537aa4) {
            return _0x53fef1 - _0x537aa4;
        },
        'HTJgy': 'Request\x20wasn\x27t\x20delayed',
        'PGPWH': function (_0x25ac39, _0x3cb0f3) {
            return _0x25ac39(_0x3cb0f3);
        },
        'hAGpN': '/posts?_delay=1100',
        'PDwWz': 'should\x20delay\x20response',
        'GaMhc': function (_0x263a7d, _0x4c7192) {
            return _0x263a7d(_0x4c7192);
        },
        'IfYDz': '/posts',
        'MoexK': 'form',
        'mFttH': 'true',
        'RqNOm': function (_0x6223b0, _0x29845) {
            return _0x6223b0(_0x29845);
        },
        'GzWGP': '/refs',
        'Ndklv': 'http://foo.com',
        'DzAOK': function (_0x5f371d, _0x590740) {
            return _0x5f371d(_0x590740);
        },
        'ZGUhK': 'Location',
        'yZRDO': 'should\x20respond\x20with\x20json,\x20create\x20a\x20resource\x20and\x20increment\x20id',
        'VaXMa': function (_0x188dd3, _0x4e436e, _0x1d5519) {
            return _0x188dd3(_0x4e436e, _0x1d5519);
        },
        'XJVBK': 'should\x20support\x20x-www-form-urlencoded',
        'LJFsr': function (_0x38d64f, _0xdc3b0e, _0x185cd5) {
            return _0x38d64f(_0xdc3b0e, _0x185cd5);
        },
        'qaBFb': 'should\x20respond\x20with\x20json,\x20create\x20a\x20resource\x20and\x20generate\x20string\x20id',
        'hyLxm': function (_0x388316, _0x26427d, _0x1ab559) {
            return _0x388316(_0x26427d, _0x1ab559);
        },
        'qWlaT': 'should\x20respond\x20with\x20json\x20and\x20set\x20parentId',
        'pOhgE': function (_0x142510, _0x33082f) {
            return _0x142510 > _0x33082f;
        },
        'jIETP': function (_0x4cea6c, _0x5c4899) {
            return _0x4cea6c - _0x5c4899;
        },
        'uRhMZ': function (_0x1bd3eb, _0x29be4f) {
            return _0x1bd3eb(_0x29be4f);
        },
        'TkkdB': '/posts/1',
        'wcdnx': 'Accept',
        'TBnmS': 'application/json',
        'pWIlE': function (_0x49b186, _0xfcd8ac, _0x2ee371) {
            return _0x49b186(_0xfcd8ac, _0x2ee371);
        },
        'IxevK': 'should\x20respond\x20with\x20json\x20and\x20replace\x20resource',
        'icEvM': function (_0x56f5b9, _0x3efbca, _0x3081d4) {
            return _0x56f5b9(_0x3efbca, _0x3081d4);
        },
        'gMHfv': function (_0x472313, _0x305105) {
            return _0x472313(_0x305105);
        },
        'hjdXP': function (_0x1a4029, _0x5dec80) {
            return _0x1a4029 > _0x5dec80;
        },
        'fqttO': function (_0x4343a8, _0x9f0f) {
            return _0x4343a8(_0x9f0f);
        },
        'cWoYa': '/posts/1?_delay=1100',
        'pqAah': function (_0x44cef5, _0x2f1526, _0x2fb87b) {
            return _0x44cef5(_0x2f1526, _0x2fb87b);
        },
        'lawRv': function (_0x577b08, _0x2120f2) {
            return _0x577b08(_0x2120f2);
        },
        'wgAsx': 'should\x20respond\x20with\x20json\x20and\x20update\x20resource',
        'HnrmM': function (_0x5f202a, _0xebce65) {
            return _0x5f202a(_0xebce65);
        },
        'lYAjR': function (_0x42448e, _0x1c3450) {
            return _0x42448e > _0x1c3450;
        },
        'MyClW': function (_0x4fe1ae, _0x270cc9) {
            return _0x4fe1ae - _0x270cc9;
        },
        'kAUOt': function (_0x2969b2, _0x159d05) {
            return _0x2969b2(_0x159d05);
        },
        'DYJbe': function (_0xbec76f, _0x2190f4, _0x934175) {
            return _0xbec76f(_0x2190f4, _0x934175);
        },
        'YfMGQ': 'should\x20respond\x20with\x20empty\x20data,\x20destroy\x20resource\x20and\x20dependent\x20resources',
        'chxgE': function (_0x150aef, _0x3547db) {
            return _0x150aef(_0x3547db);
        },
        'mTlIo': function (_0x47a08d, _0x28a3c1) {
            return _0x47a08d(_0x28a3c1);
        },
        'MsZge': function (_0x4c37d7, _0x3f1210, _0x5c74bc) {
            return _0x4c37d7(_0x3f1210, _0x5c74bc);
        },
        'jOtLK': 'should\x20respond\x20with\x20js',
        'qUeqX': function (_0x2c9fbd, _0x58d2d0, _0x4e893d) {
            return _0x2c9fbd(_0x58d2d0, _0x4e893d);
        },
        'Ozsln': 'should\x20respond\x20with\x20css',
        'wqVas': function (_0x440399, _0x3aa793, _0x26ff84) {
            return _0x440399(_0x3aa793, _0x26ff84);
        },
        'cICGU': 'should\x20respond\x20with\x20html',
        'BQxYx': function (_0x27afb0, _0x2c79e9, _0xd02c2c) {
            return _0x27afb0(_0x2c79e9, _0xd02c2c);
        },
        'BrvAz': 'GET\x20/',
        'FtrLS': function (_0x190766, _0x58b375, _0x3259ff) {
            return _0x190766(_0x58b375, _0x3259ff);
        },
        'eByAy': 'GET\x20/script.js',
        'GzleE': function (_0x5f5bec, _0x3742f7, _0x2547c5) {
            return _0x5f5bec(_0x3742f7, _0x2547c5);
        },
        'PJNZs': 'GET\x20/style.css',
        'dMqzk': function (_0x4d62bd, _0x257044) {
            return _0x4d62bd(_0x257044);
        },
        'IQHZr': function (_0x332a5c, _0x292b0e, _0x4643d8) {
            return _0x332a5c(_0x292b0e, _0x4643d8);
        },
        'XIrRe': 'should\x20be\x20accessible',
        'ihNZW': function (_0x25170a, _0x2fe670, _0x2ada1f) {
            return _0x25170a(_0x2fe670, _0x2ada1f);
        },
        'hvBkB': 'should\x20have\x20no\x20cache\x20headers\x20(for\x20IE)',
        'QzlnD': '/firstpostwithcomments',
        'ePsrp': function (_0x552d80, _0x33f9f1, _0x4c854e) {
            return _0x552d80(_0x33f9f1, _0x4c854e);
        },
        'gEbnn': 'should\x20rewrite\x20using\x20prefix',
        'MMZUW': function (_0x4375c8, _0x30b52e, _0x100c6f) {
            return _0x4375c8(_0x30b52e, _0x100c6f);
        },
        'YqvFV': 'should\x20rewrite\x20using\x20params',
        'Axmtx': 'should\x20rewrite\x20using\x20query\x20without\x20params',
        'dGBic': 'should\x20rewrite\x20using\x20params\x20and\x20query',
        'vJkvV': 'should\x20rewrite\x20query\x20params',
        'XoOcG': 'should\x20expose\x20routes',
        'gkZDt': 'should\x20be\x20possible\x20to\x20wrap\x20response',
        'vpgUT': '_id',
        'XzygR': 'should\x20be\x20possible\x20to\x20GET\x20using\x20a\x20different\x20id\x20property',
        'qKTmf': 'should\x20be\x20possible\x20to\x20POST\x20using\x20a\x20different\x20id\x20property',
        'iacSA': '/$1',
        'wNZzy': '/posts/:id',
        'otSnu': '/comments/?userId=:userId&body=:body',
        'WxXYE': function (_0x444c5c, _0x57c736) {
            return _0x444c5c(_0x57c736);
        },
        'smGEm': function (_0x8bbfe6, _0x177e45, _0x3f76c0) {
            return _0x8bbfe6(_0x177e45, _0x3f76c0);
        },
        'nIvOj': 'GET\x20/db',
        'RiwPE': 'GET\x20/:resource',
        'lgBJM': 'GET\x20/:resource?attr=&attr=',
        'Bvvyi': 'GET\x20/:resource?q=',
        'qxaqI': 'GET\x20/:resource?_end=',
        'JKqwP': 'GET\x20/:resource?_sort=',
        'BwRch': function (_0x4e66a7, _0x4fae6a, _0x1efd90) {
            return _0x4e66a7(_0x4fae6a, _0x1efd90);
        },
        'xqdkm': 'GET\x20/:resource?_start=&_end=',
        'eRGey': function (_0x494f9c, _0x34e729, _0xd4c1a4) {
            return _0x494f9c(_0x34e729, _0xd4c1a4);
        },
        'HOyES': 'GET\x20/:resource?_start=&_limit=',
        'FCgJC': function (_0xd3f4e6, _0x44fa8b, _0x1e6784) {
            return _0xd3f4e6(_0x44fa8b, _0x1e6784);
        },
        'AUlJL': 'GET\x20/:resource?_page=',
        'jHEdQ': function (_0x50f0fe, _0x3e4026, _0x512dcd) {
            return _0x50f0fe(_0x3e4026, _0x512dcd);
        },
        'TFASf': 'GET\x20/:resource?_page=&_limit=',
        'FFwQB': 'GET\x20/:resource?attr_gte=&attr_lte=',
        'wvpBp': 'GET\x20/:resource?attr_ne=',
        'JwAhe': 'GET\x20/:resource?attr_like=',
        'JUguH': 'GET\x20/:parent/:parentId/:resource',
        'PXDkV': 'GET\x20/:resource/:id',
        'meLkb': 'GET\x20/:resource?_embed=',
        'KjbHJ': function (_0x4fef03, _0x42c543, _0x5557c2) {
            return _0x4fef03(_0x42c543, _0x5557c2);
        },
        'uDamn': 'GET\x20/:resource?_embed&_embed=',
        'auFzS': function (_0x4c4e14, _0x2208a9, _0x326e64) {
            return _0x4c4e14(_0x2208a9, _0x326e64);
        },
        'hdBZW': 'GET\x20/:resource/:id?_embed=',
        'XaNxj': 'GET\x20/:resource/:id?_embed=&_embed=',
        'TFiKE': 'GET\x20/:resource?_expand=',
        'xZRbd': function (_0x4b2817, _0x20cbcd, _0x5c19ec) {
            return _0x4b2817(_0x20cbcd, _0x5c19ec);
        },
        'DXlfk': 'GET\x20/:resource/:id?_expand=',
        'QoJoe': function (_0x40cd2f, _0x112f8b, _0x100300) {
            return _0x40cd2f(_0x112f8b, _0x100300);
        },
        'dHijV': 'GET\x20/:resource?_expand=&_expand',
        'VrStn': 'GET\x20/:resource/:id?_expand=&_expand=',
        'vKjiQ': 'GET\x20/:resource>_delay=',
        'YrYXR': 'POST\x20/:resource',
        'yyhUT': function (_0x5851b0, _0x11f04f, _0x4e7bb2) {
            return _0x5851b0(_0x11f04f, _0x4e7bb2);
        },
        'dRhmb': 'POST\x20/:parent/:parentId/:resource',
        'PkVXJ': 'POST\x20/:resource?_delay=',
        'GZOcX': function (_0x3c0ea5, _0x27cb45, _0x39b0b7) {
            return _0x3c0ea5(_0x27cb45, _0x39b0b7);
        },
        'FvEWa': 'PUT\x20/:resource/:id',
        'rsYAM': function (_0x3e0c07, _0x411155, _0x309ec7) {
            return _0x3e0c07(_0x411155, _0x309ec7);
        },
        'ekmkL': 'PUT\x20/:resource:id?_delay=',
        'oizWW': 'PATCH\x20/:resource/:id',
        'nSTJo': function (_0x1f9853, _0x40579c, _0x63a90) {
            return _0x1f9853(_0x40579c, _0x63a90);
        },
        'oaBYE': 'PATCH\x20/:resource:id?_delay=',
        'SnPRM': 'DELETE\x20/:resource/:id',
        'WktWq': function (_0x50e04b, _0x5c139b, _0x49ff9b) {
            return _0x50e04b(_0x5c139b, _0x49ff9b);
        },
        'cbYeO': 'DELETE\x20/:resource:id?_delay=',
        'dBFQz': 'Static\x20routes',
        'GLnna': 'Database\x20state',
        'svzyw': function (_0x37a9a8, _0x104970, _0x454b38) {
            return _0x37a9a8(_0x104970, _0x454b38);
        },
        'BRMRy': 'Responses',
        'wZjQc': function (_0x4b2c88, _0x2385a7, _0x2bfd65) {
            return _0x4b2c88(_0x2385a7, _0x2bfd65);
        },
        'wmIUI': 'Rewriter',
        'IAgnM': function (_0x2e7f90, _0x61c5a8, _0x20dd5a) {
            return _0x2e7f90(_0x61c5a8, _0x20dd5a);
        },
        'TfuBf': 'router.render',
        'bMxfp': 'router.db._.id'
    };
    let _0xdaa69b, _0x2f1398, _0x3ff6a4;
    const _0x5cb351 = {
        '/api/*': _0x51d29b['iacSA'],
        '/blog/posts/:id/show': _0x51d29b['wNZzy'],
        '/comments/special/:userId-:body': _0x51d29b['otSnu'],
        '/firstpostwithcomments': _0x51d29b['LDvhu'],
        '/articles\x5c?_id=:id': _0x51d29b['wNZzy']
    };
    _0x51d29b['WxXYE'](beforeEach, () => {
        const _0x515297 = _0x51d29b['HWWHs']['split']('|');
        let _0x396b80 = 0x0;
        while (!![]) {
            switch (_0x515297[_0x396b80++]) {
            case '0':
                _0xdaa69b = jsonServer['create']();
                continue;
            case '1':
                _0xdaa69b['use'](_0x2f1398);
                continue;
            case '2':
                _0x3ff6a4['tags'] = [
                    {
                        'id': 0x1,
                        'body': _0x51d29b['DwPie']
                    },
                    {
                        'id': 0x2,
                        'body': _0x51d29b['LFXcP']
                    },
                    {
                        'id': 0x3,
                        'body': _0x51d29b['CWDFZ']
                    }
                ];
                continue;
            case '3':
                _0x3ff6a4['buyers'] = [
                    {
                        'id': 0x1,
                        'name': _0x51d29b['IufvL'],
                        'country': _0x51d29b['yRfuB'],
                        'total': 0x64
                    },
                    {
                        'id': 0x2,
                        'name': _0x51d29b['HsRPH'],
                        'country': _0x51d29b['yRfuB'],
                        'total': 0xc8
                    },
                    {
                        'id': 0x3,
                        'name': _0x51d29b['OQvtS'],
                        'country': _0x51d29b['yRfuB'],
                        'total': 0x12c
                    },
                    {
                        'id': 0x4,
                        'name': _0x51d29b['LPmqG'],
                        'country': _0x51d29b['aRbfO'],
                        'total': 0x1e
                    },
                    {
                        'id': 0x5,
                        'name': _0x51d29b['ikFRr'],
                        'country': _0x51d29b['aRbfO'],
                        'total': 0x14
                    },
                    {
                        'id': 0x6,
                        'name': _0x51d29b['yusGy'],
                        'country': _0x51d29b['aRbfO'],
                        'total': 0xa
                    },
                    {
                        'id': 0x7,
                        'name': _0x51d29b['ZfqhI'],
                        'country': _0x51d29b['EDeBr'],
                        'total': 0x1
                    },
                    {
                        'id': 0x8,
                        'name': _0x51d29b['KKReB'],
                        'country': _0x51d29b['EDeBr'],
                        'total': 0x2
                    },
                    {
                        'id': 0x9,
                        'name': _0x51d29b['gyyZq'],
                        'country': _0x51d29b['EDeBr'],
                        'total': 0x3
                    }
                ];
                continue;
            case '4':
                _0x3ff6a4['users'] = [
                    {
                        'id': 0x1,
                        'username': _0x51d29b['rujhN'],
                        'tel': _0x51d29b['pEbuz']
                    },
                    {
                        'id': 0x2,
                        'username': _0x51d29b['JEFJq'],
                        'tel': _0x51d29b['LOPac']
                    }
                ];
                continue;
            case '5':
                _0x3ff6a4['deep'] = [
                    { 'a': { 'b': 0x1 } },
                    { 'a': 0x1 }
                ];
                continue;
            case '6':
                _0x3ff6a4['stringIds'] = [{ 'id': _0x51d29b['AcBvW'] }];
                continue;
            case '7':
                _0x3ff6a4['nested'] = [
                    { 'resource': { 'name': _0x51d29b['GhPGj'] } },
                    { 'resource': { 'name': _0x51d29b['mLibK'] } },
                    { 'resource': { 'name': _0x51d29b['XWBAQ'] } }
                ];
                continue;
            case '8':
                _0x3ff6a4['comments'] = [
                    {
                        'id': 0x1,
                        'body': _0x51d29b['eDGFZ'],
                        'published': !![],
                        'postId': 0x1,
                        'userId': 0x1
                    },
                    {
                        'id': 0x2,
                        'body': _0x51d29b['zxgex'],
                        'published': ![],
                        'postId': 0x1,
                        'userId': 0x2
                    },
                    {
                        'id': 0x3,
                        'body': _0x51d29b['rljZa'],
                        'published': ![],
                        'postId': 0x2,
                        'userId': 0x1
                    },
                    {
                        'id': 0x4,
                        'body': _0x51d29b['MNOHC'],
                        'published': !![],
                        'postId': 0x2,
                        'userId': 0x2
                    },
                    {
                        'id': 0x5,
                        'body': _0x51d29b['MEMCR'],
                        'published': ![],
                        'postId': 0x2,
                        'userId': 0x1
                    }
                ];
                continue;
            case '9':
                _0x3ff6a4 = {};
                continue;
            case '10':
                _0x3ff6a4['posts'] = [
                    {
                        'id': 0x1,
                        'body': _0x51d29b['eDGFZ']
                    },
                    {
                        'id': 0x2,
                        'body': _0x51d29b['zxgex']
                    }
                ];
                continue;
            case '11':
                _0x3ff6a4['list'] = [
                    { 'id': 0x1 },
                    { 'id': 0x2 },
                    { 'id': 0x3 },
                    { 'id': 0x4 },
                    { 'id': 0x5 },
                    { 'id': 0x6 },
                    { 'id': 0x7 },
                    { 'id': 0x8 },
                    { 'id': 0x9 },
                    { 'id': 0xa },
                    { 'id': 0xb },
                    { 'id': 0xc },
                    { 'id': 0xd },
                    { 'id': 0xe },
                    { 'id': 0xf }
                ];
                continue;
            case '12':
                _0x2f1398 = jsonServer['router'](_0x3ff6a4);
                continue;
            case '13':
                _0xdaa69b['use'](jsonServer['rewriter'](_0x5cb351));
                continue;
            case '14':
                _0x3ff6a4['refs'] = [{
                        'id': _0x51d29b['XJCax'],
                        'url': _0x51d29b['ZHMdV'],
                        'postId': 0x1,
                        'userId': 0x1
                    }];
                continue;
            case '15':
                _0xdaa69b['use'](jsonServer['defaults']());
                continue;
            }
            break;
        }
    }), _0x51d29b['smGEm'](describe, _0x51d29b['nIvOj'], () => {
        _0x51d29b['uzPMr'](test, _0x51d29b['pnDjO'], () => request(_0xdaa69b)['get']('/db')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4));
    }), _0x51d29b['smGEm'](describe, _0x51d29b['RiwPE'], () => {
        _0x51d29b['uzPMr'](test, _0x51d29b['ItJbq'], () => request(_0xdaa69b)['get']('/posts')['set']('Origin', 'http://example.com')['expect']('Content-Type', /json/)['expect']('Access-Control-Allow-Credentials', 'true')['expect']('Access-Control-Allow-Origin', 'http://example.com')['expect'](0xc8, _0x3ff6a4['posts'])), _0x51d29b['kuOnZ'](test, _0x51d29b['QVKsN'], () => request(_0xdaa69b)['get']('/undefined')['expect'](0x194));
    }), _0x51d29b['smGEm'](describe, _0x51d29b['lgBJM'], () => {
        const _0x349335 = {
            'QLCDs': function (_0x5bd2d4, _0x455365) {
                return _0x51d29b['UZgBi'](_0x5bd2d4, _0x455365);
            },
            'vEDrl': _0x51d29b['vIKFj'],
            'sLwjD': _0x51d29b['BQAji']
        };
        _0x51d29b['aIUuA'](test, _0x51d29b['EnbOt'], () => request(_0xdaa69b)['get']('/comments?postId=1&published=true')['expect']('Content-Type', /json/)['expect'](0xc8, [_0x3ff6a4['comments'][0x0]])), _0x51d29b['aIUuA'](test, _0x51d29b['TETJi'], () => request(_0xdaa69b)['get']('/users?tel=123')['expect']('Content-Type', /json/)['expect'](0xc8, [_0x3ff6a4['users'][0x1]])), _0x51d29b['aIUuA'](test, _0x51d29b['IfIPI'], () => request(_0xdaa69b)['get']('/comments?id=1&id=2')['expect']('Content-Type', /json/)['expect'](0xc8, [
            _0x3ff6a4['comments'][0x0],
            _0x3ff6a4['comments'][0x1]
        ])), _0x51d29b['aIUuA'](test, _0x51d29b['rfWzm'], () => request(_0xdaa69b)['get']('/deep?a.b=1')['expect']('Content-Type', /json/)['expect'](0xc8, [_0x3ff6a4['deep'][0x0]])), _0x51d29b['KjoYo'](test, _0x51d29b['rRtDg'], () => request(_0xdaa69b)['get']('/comments?callback=1&_=1')['expect']('Content-Type', /text/)['expect'](new RegExp(_0x3ff6a4['comments'][0x0]['body']))['expect'](0xc8)), _0x51d29b['dRRGX'](test, _0x51d29b['RpIlc'], () => request(_0xdaa69b)['get']('/comments?foo=1&bar=2')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['comments'])), _0x51d29b['dRRGX'](test, _0x51d29b['vntKK'], () => {
            return _0x3ff6a4['posts']['push']({
                'id': 0x63,
                'body': null
            }), _0x349335['QLCDs'](request, _0xdaa69b)['get'](_0x349335['vEDrl'])['expect'](_0x349335['sLwjD'], /json/)['expect'](0xc8, [_0x3ff6a4['posts'][0x0]]);
        });
    }), _0x51d29b['smGEm'](describe, _0x51d29b['Bvvyi'], () => {
        const _0x39a084 = _0x51d29b['FXpSW']['split']('|');
        let _0x4a832e = 0x0;
        while (!![]) {
            switch (_0x39a084[_0x4a832e++]) {
            case '0':
                _0x51d29b['wxraQ'](test, _0x51d29b['JKyFz'], () => request(_0xdaa69b)['get']('/comments?published=false')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['comments'][0x1],
                    _0x3ff6a4['comments'][0x2],
                    _0x3ff6a4['comments'][0x4]
                ]));
                continue;
            case '1':
                _0x51d29b['wxraQ'](test, _0x51d29b['SGNbU'], () => request(_0xdaa69b)['get']('/deep?q=1')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['deep']));
                continue;
            case '2':
                _0x51d29b['GRDBY'](test, _0x51d29b['HHunC'], () => request(_0xdaa69b)['get']('/comments?q=foo&q=bar')['expect']('Content-Type', /json/)['expect'](0xc8, [_0x3ff6a4['comments'][0x0]]));
                continue;
            case '3':
                _0x51d29b['kzZMR'](test, _0x51d29b['bwTzK'], () => request(_0xdaa69b)['get']('/tags?q=nope')['expect']('Content-Type', /json/)['expect'](0xc8, []));
                continue;
            case '4':
                _0x51d29b['kzZMR'](test, _0x51d29b['UdaqX'], () => request(_0xdaa69b)['get']('/tags?q=pho')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['tags'][0x1],
                    _0x3ff6a4['tags'][0x2]
                ]));
                continue;
            case '5':
                _0x51d29b['kzZMR'](test, _0x51d29b['VhjgD'], () => request(_0xdaa69b)['get']('/comments?q=qu&published=true')['expect']('Content-Type', /json/)['expect'](0xc8, [_0x3ff6a4['comments'][0x3]]));
                continue;
            }
            break;
        }
    }), _0x51d29b['smGEm'](describe, _0x51d29b['qxaqI'], () => {
        _0x51d29b['FjjNx'](test, _0x51d29b['NEaic'], () => request(_0xdaa69b)['get']('/comments?_end=2')['expect']('Content-Type', /json/)['expect']('x-total-count', _0x3ff6a4['comments']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count')['expect'](0xc8, _0x3ff6a4['comments']['slice'](0x0, 0x2)));
    }), _0x51d29b['smGEm'](describe, _0x51d29b['JKqwP'], () => {
        const _0xdf5290 = _0x51d29b['qkHZS']['split']('|');
        let _0x1f59f3 = 0x0;
        while (!![]) {
            switch (_0xdf5290[_0x1f59f3++]) {
            case '0':
                _0x51d29b['FjjNx'](test, _0x51d29b['SEyHP'], () => request(_0xdaa69b)['get']('/tags?_sort=body&_order=DESC')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['tags'][0x2],
                    _0x3ff6a4['tags'][0x0],
                    _0x3ff6a4['tags'][0x1]
                ]));
                continue;
            case '1':
                _0x51d29b['FjjNx'](test, _0x51d29b['ptrhU'], () => request(_0xdaa69b)['get']('/posts?_sort=id&_order=DESC')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['posts']['reverse']()));
                continue;
            case '2':
                _0x51d29b['neQxf'](test, _0x51d29b['CAunb'], () => request(_0xdaa69b)['get']('/tags?_sort=body&_order=desc')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['tags'][0x2],
                    _0x3ff6a4['tags'][0x0],
                    _0x3ff6a4['tags'][0x1]
                ]));
                continue;
            case '3':
                _0x51d29b['neQxf'](test, _0x51d29b['imVyZ'], () => request(_0xdaa69b)['get']('/buyers?_sort=country,total&_order=asc,desc')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['buyers'][0x8],
                    _0x3ff6a4['buyers'][0x7],
                    _0x3ff6a4['buyers'][0x6],
                    _0x3ff6a4['buyers'][0x3],
                    _0x3ff6a4['buyers'][0x4],
                    _0x3ff6a4['buyers'][0x5],
                    _0x3ff6a4['buyers'][0x2],
                    _0x3ff6a4['buyers'][0x1],
                    _0x3ff6a4['buyers'][0x0]
                ]));
                continue;
            case '4':
                _0x51d29b['rgRdN'](test, _0x51d29b['OsNQx'], () => request(_0xdaa69b)['get']('/nested?_sort=resource.name')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['nested'][0x1],
                    _0x3ff6a4['nested'][0x0],
                    _0x3ff6a4['nested'][0x2]
                ]));
                continue;
            case '5':
                _0x51d29b['RMCxE'](test, _0x51d29b['jStdD'], () => request(_0xdaa69b)['get']('/tags?_sort=body')['expect']('Content-Type', /json/)['expect'](0xc8, [
                    _0x3ff6a4['tags'][0x1],
                    _0x3ff6a4['tags'][0x0],
                    _0x3ff6a4['tags'][0x2]
                ]));
                continue;
            }
            break;
        }
    }), _0x51d29b['BwRch'](describe, _0x51d29b['xqdkm'], () => {
        _0x51d29b['RMCxE'](test, _0x51d29b['NEaic'], () => request(_0xdaa69b)['get']('/comments?_start=1&_end=2')['expect']('Content-Type', /json/)['expect']('X-Total-Count', _0x3ff6a4['comments']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count')['expect'](0xc8, _0x3ff6a4['comments']['slice'](0x1, 0x2)));
    }), _0x51d29b['eRGey'](describe, _0x51d29b['HOyES'], () => {
        _0x51d29b['yZvSt'](test, _0x51d29b['ZHPEs'], () => request(_0xdaa69b)['get']('/comments?_start=1&_limit=1')['expect']('Content-Type', /json/)['expect']('X-Total-Count', _0x3ff6a4['comments']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count')['expect'](0xc8, _0x3ff6a4['comments']['slice'](0x1, 0x2)));
    }), _0x51d29b['FCgJC'](describe, _0x51d29b['AUlJL'], () => {
        _0x51d29b['XyDZz'](test, _0x51d29b['bmkXY'], () => request(_0xdaa69b)['get']('/list?_page=2')['expect']('Content-Type', /json/)['expect']('x-total-count', _0x3ff6a4['list']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count,\x20Link')['expect'](0xc8, _0x3ff6a4['list']['slice'](0xa, 0x14)));
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['TFASf'], () => {
        const _0x56a47c = {
            'FjEyy': _0x51d29b['PsMzf'],
            'odBeR': _0x51d29b['hpbPT'],
            'FIzpq': _0x51d29b['bWVSQ'],
            'jmcWA': _0x51d29b['XIMQv'],
            'LvRQe': function (_0x2b3261, _0x573542) {
                return _0x51d29b['brxYI'](_0x2b3261, _0x573542);
            },
            'umINX': _0x51d29b['BmSsi'],
            'xIiGq': _0x51d29b['mbHXo'],
            'EUhqw': _0x51d29b['VtBvc'],
            'hLMgz': _0x51d29b['BQAji'],
            'SYDLb': _0x51d29b['CzRRj'],
            'CihFo': _0x51d29b['RlvHc'],
            'WNQPA': _0x51d29b['rFZjl'],
            'TaucL': _0x51d29b['anhMP']
        };
        _0x51d29b['DlgEc'](test, _0x51d29b['UPrUT'], () => {
            const _0x3ad11d = [
                _0x56a47c['FjEyy'],
                _0x56a47c['odBeR'],
                _0x56a47c['FIzpq'],
                _0x56a47c['jmcWA']
            ]['join'](',\x20');
            return _0x56a47c['LvRQe'](request, _0xdaa69b)['get'](_0x56a47c['umINX'])['set'](_0x56a47c['xIiGq'], _0x56a47c['EUhqw'])['expect'](_0x56a47c['hLMgz'], /json/)['expect'](_0x56a47c['SYDLb'], _0x3ff6a4['list']['length']['toString']())['expect'](_0x56a47c['CihFo'], _0x3ad11d)['expect'](_0x56a47c['WNQPA'], _0x56a47c['TaucL'])['expect'](0xc8, _0x3ff6a4['list']['slice'](0x1, 0x2));
        });
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['FFwQB'], () => {
        _0x51d29b['DlgEc'](test, _0x51d29b['ZHPEs'], () => request(_0xdaa69b)['get']('/comments?id_gte=2&id_lte=3')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['comments']['slice'](0x1, 0x3)));
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['wvpBp'], () => {
        _0x51d29b['GybPL'](test, _0x51d29b['ZHPEs'], () => request(_0xdaa69b)['get']('/comments?id_ne=1')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['comments']['slice'](0x1))), _0x51d29b['GybPL'](test, _0x51d29b['tyQPO'], () => request(_0xdaa69b)['get']('/comments?id_ne=1&id_ne=2')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['comments']['slice'](0x2)));
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['JwAhe'], () => {
        _0x51d29b['GybPL'](test, _0x51d29b['ZvppZ'], () => request(_0xdaa69b)['get']('/tags?body_like=photo')['expect']('Content-Type', /json/)['expect'](0xc8, [
            _0x3ff6a4['tags'][0x1],
            _0x3ff6a4['tags'][0x2]
        ])), _0x51d29b['GybPL'](test, _0x51d29b['tyQPO'], () => request(_0xdaa69b)['get']('/tags?body_like=photo&body_like=tech')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['tags']));
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['JUguH'], () => {
        _0x51d29b['GybPL'](test, _0x51d29b['LeAku'], () => request(_0xdaa69b)['get']('/posts/1/comments')['expect']('Content-Type', /json/)['expect'](0xc8, [
            _0x3ff6a4['comments'][0x0],
            _0x3ff6a4['comments'][0x1]
        ]));
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['PXDkV'], () => {
        _0x51d29b['UUwFy'](test, _0x51d29b['fdRDm'], () => request(_0xdaa69b)['get']('/posts/1')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['posts'][0x0])), _0x51d29b['UUwFy'](test, _0x51d29b['TDTNa'], () => request(_0xdaa69b)['get']('/refs/abcd-1234')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['refs'][0x0])), _0x51d29b['UUwFy'](test, _0x51d29b['kOdgV'], () => request(_0xdaa69b)['get']('/stringIds/1234')['expect']('Content-Type', /json/)['expect'](0xc8, _0x3ff6a4['stringIds'][0x0])), _0x51d29b['oWbku'](test, _0x51d29b['QVKsN'], () => request(_0xdaa69b)['get']('/posts/9001')['expect']('Content-Type', /json/)['expect'](0x194, {}));
    }), _0x51d29b['jHEdQ'](describe, _0x51d29b['meLkb'], () => {
        const _0x1f16d4 = {
            'JIAAf': function (_0x3412cb, _0x3080f6) {
                return _0x51d29b['BikSn'](_0x3412cb, _0x3080f6);
            },
            'bHfgM': _0x51d29b['BYOKX'],
            'xQqrP': _0x51d29b['BQAji']
        };
        _0x51d29b['oWbku'](test, _0x51d29b['sMzLP'], () => {
            const _0x5a0017 = _['cloneDeep'](_0x3ff6a4['posts']);
            return _0x5a0017[0x0]['comments'] = [
                _0x3ff6a4['comments'][0x0],
                _0x3ff6a4['comments'][0x1]
            ], _0x5a0017[0x1]['comments'] = [
                _0x3ff6a4['comments'][0x2],
                _0x3ff6a4['comments'][0x3],
                _0x3ff6a4['comments'][0x4]
            ], _0x1f16d4['JIAAf'](request, _0xdaa69b)['get'](_0x1f16d4['bHfgM'])['expect'](_0x1f16d4['xQqrP'], /json/)['expect'](0xc8, _0x5a0017);
        });
    }), _0x51d29b['KjbHJ'](describe, _0x51d29b['uDamn'], () => {
        const _0x58f9f2 = {
            'veIyC': function (_0x2225cb, _0xc72e21) {
                return _0x51d29b['HKCEC'](_0x2225cb, _0xc72e21);
            },
            'jAdZF': _0x51d29b['NCaUs'],
            'digeL': _0x51d29b['BQAji']
        };
        _0x51d29b['oWbku'](test, _0x51d29b['sMzLP'], () => {
            const _0x167e4b = _['cloneDeep'](_0x3ff6a4['posts']);
            return _0x167e4b[0x0]['comments'] = [
                _0x3ff6a4['comments'][0x0],
                _0x3ff6a4['comments'][0x1]
            ], _0x167e4b[0x0]['refs'] = [_0x3ff6a4['refs'][0x0]], _0x167e4b[0x1]['comments'] = [
                _0x3ff6a4['comments'][0x2],
                _0x3ff6a4['comments'][0x3],
                _0x3ff6a4['comments'][0x4]
            ], _0x167e4b[0x1]['refs'] = [], _0x58f9f2['veIyC'](request, _0xdaa69b)['get'](_0x58f9f2['jAdZF'])['expect'](_0x58f9f2['digeL'], /json/)['expect'](0xc8, _0x167e4b);
        });
    }), _0x51d29b['auFzS'](describe, _0x51d29b['hdBZW'], () => {
        _0x51d29b['vIEMl'](test, _0x51d29b['sMzLP'], () => {
            const _0x582d78 = _['cloneDeep'](_0x3ff6a4['posts'][0x0]);
            return _0x582d78['comments'] = [
                _0x3ff6a4['comments'][0x0],
                _0x3ff6a4['comments'][0x1]
            ], _0x51d29b['HKCEC'](request, _0xdaa69b)['get'](_0x51d29b['LDvhu'])['expect'](_0x51d29b['BQAji'], /json/)['expect'](0xc8, _0x582d78);
        });
    }), _0x51d29b['auFzS'](describe, _0x51d29b['XaNxj'], () => {
        const _0x45d1fa = {
            'Kjovq': function (_0x2b2b8b, _0x80ffaf) {
                return _0x51d29b['orXNb'](_0x2b2b8b, _0x80ffaf);
            },
            'Wzivv': _0x51d29b['KeYfV'],
            'bCUTZ': _0x51d29b['BQAji']
        };
        _0x51d29b['vIEMl'](test, _0x51d29b['tFmbA'], () => {
            const _0x4431d9 = _['cloneDeep'](_0x3ff6a4['posts'][0x0]);
            return _0x4431d9['comments'] = [
                _0x3ff6a4['comments'][0x0],
                _0x3ff6a4['comments'][0x1]
            ], _0x4431d9['refs'] = [_0x3ff6a4['refs'][0x0]], _0x45d1fa['Kjovq'](request, _0xdaa69b)['get'](_0x45d1fa['Wzivv'])['expect'](_0x45d1fa['bCUTZ'], /json/)['expect'](0xc8, _0x4431d9);
        });
    }), _0x51d29b['auFzS'](describe, _0x51d29b['TFiKE'], () => {
        _0x51d29b['JSDHx'](test, _0x51d29b['ciXpE'], () => {
            const _0x3ae432 = _['cloneDeep'](_0x3ff6a4['refs']);
            return _0x3ae432[0x0]['post'] = _0x3ff6a4['posts'][0x0], _0x51d29b['GZlTD'](request, _0xdaa69b)['get'](_0x51d29b['ueEVD'])['expect'](_0x51d29b['BQAji'], /json/)['expect'](0xc8, _0x3ae432);
        });
    }), _0x51d29b['xZRbd'](describe, _0x51d29b['DXlfk'], () => {
        const _0x4dfea5 = {
            'SzRet': function (_0x3ed081, _0x1285b9) {
                return _0x51d29b['mHfak'](_0x3ed081, _0x1285b9);
            },
            'PyVkG': _0x51d29b['RYuZu'],
            'OBAgz': _0x51d29b['BQAji']
        };
        _0x51d29b['JSDHx'](test, _0x51d29b['ciXpE'], () => {
            const _0x572bc9 = _['cloneDeep'](_0x3ff6a4['comments'][0x0]);
            return _0x572bc9['post'] = _0x3ff6a4['posts'][0x0], _0x4dfea5['SzRet'](request, _0xdaa69b)['get'](_0x4dfea5['PyVkG'])['expect'](_0x4dfea5['OBAgz'], /json/)['expect'](0xc8, _0x572bc9);
        });
    }), _0x51d29b['QoJoe'](describe, _0x51d29b['dHijV'], () => {
        const _0x1f611e = {
            'GbyrZ': function (_0x43292f, _0x3ad0af) {
                return _0x51d29b['mHfak'](_0x43292f, _0x3ad0af);
            },
            'jgJeA': _0x51d29b['ztugI'],
            'eofpF': _0x51d29b['BQAji']
        };
        _0x51d29b['JSDHx'](test, _0x51d29b['ciXpE'], () => {
            const _0x389aa2 = _['cloneDeep'](_0x3ff6a4['refs']);
            return _0x389aa2[0x0]['post'] = _0x3ff6a4['posts'][0x0], _0x389aa2[0x0]['user'] = _0x3ff6a4['users'][0x0], _0x1f611e['GbyrZ'](request, _0xdaa69b)['get'](_0x1f611e['jgJeA'])['expect'](_0x1f611e['eofpF'], /json/)['expect'](0xc8, _0x389aa2);
        });
    }), _0x51d29b['QoJoe'](describe, _0x51d29b['VrStn'], () => {
        _0x51d29b['JSDHx'](test, _0x51d29b['ciXpE'], () => {
            const _0x4d9497 = _0x3ff6a4['comments'][0x0];
            return _0x4d9497['post'] = _0x3ff6a4['posts'][0x0], _0x4d9497['user'] = _0x3ff6a4['users'][0x0], _0x51d29b['mHfak'](request, _0xdaa69b)['get'](_0x51d29b['nrqqW'])['expect'](_0x51d29b['BQAji'], /json/)['expect'](0xc8, _0x4d9497);
        });
    }), _0x51d29b['QoJoe'](describe, _0x51d29b['vKjiQ'], () => {
        _0x51d29b['JSDHx'](test, _0x51d29b['PDwWz'], _0x201bcf => {
            const _0x238f7e = {
                    'xAueN': function (_0x10125f, _0x3133ab) {
                        return _0x51d29b['iaHjz'](_0x10125f, _0x3133ab);
                    },
                    'BcrgN': function (_0x25dfe6, _0x111f5c) {
                        return _0x51d29b['cteiV'](_0x25dfe6, _0x111f5c);
                    },
                    'hdCar': function (_0x399b46, _0x200392) {
                        return _0x51d29b['eGqAF'](_0x399b46, _0x200392);
                    },
                    'dGFKP': _0x51d29b['HTJgy']
                }, _0x4d65ed = new Date();
            _0x51d29b['PGPWH'](request, _0xdaa69b)['get'](_0x51d29b['hAGpN'])['expect'](0xc8, function (_0x20dd16) {
                const _0x22ea3c = new Date();
                _0x238f7e['xAueN'](_0x201bcf, _0x238f7e['BcrgN'](_0x238f7e['hdCar'](_0x22ea3c, _0x4d65ed), 0x3e8) ? _0x20dd16 : new Error(_0x238f7e['dGFKP']));
            });
        });
    }), _0x51d29b['QoJoe'](describe, _0x51d29b['YrYXR'], () => {
        const _0x226efb = {
            'XvbeX': function (_0xf3be4d, _0x52a4e4) {
                return _0x51d29b['DzAOK'](_0xf3be4d, _0x52a4e4);
            },
            'frauV': _0x51d29b['IfYDz'],
            'nvxCq': _0x51d29b['eDGFZ'],
            'lfYhz': _0x51d29b['rFZjl'],
            'xRwiF': _0x51d29b['ZGUhK'],
            'CWuWi': _0x51d29b['BQAji']
        };
        _0x51d29b['JSDHx'](test, _0x51d29b['yZRDO'], async () => {
            await _0x226efb['XvbeX'](request, _0xdaa69b)['post'](_0x226efb['frauV'])['send']({
                'body': _0x226efb['nvxCq'],
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](_0x226efb['lfYhz'], _0x226efb['xRwiF'])['expect'](_0x226efb['xRwiF'], /posts\/3$/)['expect'](_0x226efb['CWuWi'], /json/)['expect'](0xc9, {
                'id': 0x3,
                'body': _0x226efb['nvxCq'],
                'booleanValue': !![],
                'integerValue': 0x1
            }), assert['strictEqual'](_0x3ff6a4['posts']['length'], 0x3);
        }), _0x51d29b['VaXMa'](test, _0x51d29b['XJVBK'], async () => {
            await _0x51d29b['GaMhc'](request, _0xdaa69b)['post'](_0x51d29b['IfYDz'])['type'](_0x51d29b['MoexK'])['send']({
                'body': _0x51d29b['eDGFZ'],
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](_0x51d29b['BQAji'], /json/)['expect'](0xc9, {
                'id': 0x3,
                'body': _0x51d29b['eDGFZ'],
                'booleanValue': _0x51d29b['mFttH'],
                'integerValue': '1'
            }), assert['strictEqual'](_0x3ff6a4['posts']['length'], 0x3);
        }), _0x51d29b['LJFsr'](test, _0x51d29b['qaBFb'], async () => {
            await _0x51d29b['RqNOm'](request, _0xdaa69b)['post'](_0x51d29b['GzWGP'])['send']({
                'url': _0x51d29b['Ndklv'],
                'postId': 0x1
            })['expect'](_0x51d29b['BQAji'], /json/)['expect'](0xc9), assert['strictEqual'](_0x3ff6a4['refs']['length'], 0x2);
        });
    }), _0x51d29b['yyhUT'](describe, _0x51d29b['dRhmb'], () => {
        _0x51d29b['hyLxm'](test, _0x51d29b['qWlaT'], () => request(_0xdaa69b)['post']('/posts/1/comments')['send']({ 'body': 'foo' })['expect']('Content-Type', /json/)['expect'](0xc9, {
            'id': 0x6,
            'postId': '1',
            'body': 'foo'
        }));
    }), _0x51d29b['yyhUT'](describe, _0x51d29b['PkVXJ'], () => {
        const _0x703e3a = {
            'jYsnU': function (_0x2c527b, _0x11d699) {
                return _0x51d29b['DzAOK'](_0x2c527b, _0x11d699);
            },
            'OrRZA': function (_0xac94c9, _0x60764b) {
                return _0x51d29b['pOhgE'](_0xac94c9, _0x60764b);
            },
            'HAvzv': function (_0x4cd811, _0x57e175) {
                return _0x51d29b['jIETP'](_0x4cd811, _0x57e175);
            },
            'nClPv': _0x51d29b['HTJgy'],
            'bMNsm': _0x51d29b['hAGpN'],
            'lUofl': _0x51d29b['eDGFZ']
        };
        _0x51d29b['hyLxm'](test, _0x51d29b['PDwWz'], _0x270336 => {
            const _0x3ec073 = new Date();
            _0x703e3a['jYsnU'](request, _0xdaa69b)['post'](_0x703e3a['bMNsm'])['send']({
                'body': _0x703e3a['lUofl'],
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xc9, function (_0x10e1c2) {
                const _0x327e9a = new Date();
                _0x703e3a['jYsnU'](_0x270336, _0x703e3a['OrRZA'](_0x703e3a['HAvzv'](_0x327e9a, _0x3ec073), 0x3e8) ? _0x10e1c2 : new Error(_0x703e3a['nClPv']));
            });
        });
    }), _0x51d29b['GZOcX'](describe, _0x51d29b['FvEWa'], () => {
        _0x51d29b['pWIlE'](test, _0x51d29b['IxevK'], async () => {
            const _0x5337c8 = {
                    'id': 0x1,
                    'booleanValue': !![],
                    'integerValue': 0x1
                }, _0x1fd872 = await _0x51d29b['uRhMZ'](request, _0xdaa69b)['put'](_0x51d29b['TkkdB'])['set'](_0x51d29b['wcdnx'], _0x51d29b['TBnmS'])['send'](_0x5337c8)['expect'](_0x51d29b['BQAji'], /json/)['expect'](0xc8, _0x5337c8);
            assert['deepStrictEqual'](_0x1fd872['body'], _0x5337c8), assert['deepStrictEqual'](_0x3ff6a4['posts'][0x0], _0x5337c8);
        }), _0x51d29b['icEvM'](test, _0x51d29b['QVKsN'], () => request(_0xdaa69b)['put']('/posts/9001')['send']({
            'id': 0x1,
            'body': 'bar'
        })['expect']('Content-Type', /json/)['expect'](0x194, {}));
    }), _0x51d29b['rsYAM'](describe, _0x51d29b['ekmkL'], () => {
        _0x51d29b['pqAah'](test, _0x51d29b['PDwWz'], _0xdb3e01 => {
            const _0x429dc6 = {
                    'smkHH': function (_0xa32fb1, _0x2635e5) {
                        return _0x51d29b['gMHfv'](_0xa32fb1, _0x2635e5);
                    },
                    'EMgik': function (_0x2ae6d7, _0x2141b6) {
                        return _0x51d29b['hjdXP'](_0x2ae6d7, _0x2141b6);
                    },
                    'KCAqX': function (_0x4c8aff, _0x1f4524) {
                        return _0x51d29b['jIETP'](_0x4c8aff, _0x1f4524);
                    },
                    'EWPbn': _0x51d29b['HTJgy']
                }, _0x465c37 = new Date();
            _0x51d29b['fqttO'](request, _0xdaa69b)['put'](_0x51d29b['cWoYa'])['set'](_0x51d29b['wcdnx'], _0x51d29b['TBnmS'])['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xc8, function (_0x52f29a) {
                const _0x8c4062 = new Date();
                _0x429dc6['smkHH'](_0xdb3e01, _0x429dc6['EMgik'](_0x429dc6['KCAqX'](_0x8c4062, _0x465c37), 0x3e8) ? _0x52f29a : new Error(_0x429dc6['EWPbn']));
            });
        });
    }), _0x51d29b['rsYAM'](describe, _0x51d29b['oizWW'], () => {
        const _0x1ae04f = {
            'PONJo': _0x51d29b['zxgex'],
            'guUcL': function (_0x3cc9ae, _0x9cce6f) {
                return _0x51d29b['lawRv'](_0x3cc9ae, _0x9cce6f);
            },
            'LDLGH': _0x51d29b['TkkdB'],
            'slMHU': _0x51d29b['BQAji']
        };
        _0x51d29b['pqAah'](test, _0x51d29b['wgAsx'], async () => {
            const _0x5343d7 = { 'body': _0x1ae04f['PONJo'] }, _0x16fbf6 = {
                    'id': 0x1,
                    'body': _0x1ae04f['PONJo']
                }, _0x54b60a = await _0x1ae04f['guUcL'](request, _0xdaa69b)['patch'](_0x1ae04f['LDLGH'])['send'](_0x5343d7)['expect'](_0x1ae04f['slMHU'], /json/)['expect'](0xc8, _0x16fbf6);
            assert['deepStrictEqual'](_0x54b60a['body'], _0x16fbf6), assert['deepStrictEqual'](_0x3ff6a4['posts'][0x0], _0x16fbf6);
        }), _0x51d29b['pqAah'](test, _0x51d29b['QVKsN'], () => request(_0xdaa69b)['patch']('/posts/9001')['send']({ 'body': 'bar' })['expect']('Content-Type', /json/)['expect'](0x194, {}));
    }), _0x51d29b['nSTJo'](describe, _0x51d29b['oaBYE'], () => {
        const _0x368859 = {
            'JHnWV': function (_0x319377, _0x5656b8) {
                return _0x51d29b['HnrmM'](_0x319377, _0x5656b8);
            },
            'roDci': function (_0x5e2758, _0x2799b7) {
                return _0x51d29b['lYAjR'](_0x5e2758, _0x2799b7);
            },
            'jNAiG': function (_0x564a5a, _0x20aaa8) {
                return _0x51d29b['MyClW'](_0x564a5a, _0x20aaa8);
            },
            'HMPin': _0x51d29b['HTJgy']
        };
        _0x51d29b['pqAah'](test, _0x51d29b['PDwWz'], _0x314d0c => {
            const _0xe7a492 = new Date();
            _0x51d29b['HnrmM'](request, _0xdaa69b)['patch'](_0x51d29b['cWoYa'])['send']({ 'body': _0x51d29b['zxgex'] })['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xc8, function (_0x1c7615) {
                const _0x45efb0 = new Date();
                _0x368859['JHnWV'](_0x314d0c, _0x368859['roDci'](_0x368859['jNAiG'](_0x45efb0, _0xe7a492), 0x3e8) ? _0x1c7615 : new Error(_0x368859['HMPin']));
            });
        });
    }), _0x51d29b['nSTJo'](describe, _0x51d29b['SnPRM'], () => {
        const _0xb96a0a = {
            'NaZic': function (_0x5953b7, _0x2abe60) {
                return _0x51d29b['kAUOt'](_0x5953b7, _0x2abe60);
            },
            'cjmTq': _0x51d29b['TkkdB']
        };
        _0x51d29b['DYJbe'](test, _0x51d29b['YfMGQ'], async () => {
            await _0xb96a0a['NaZic'](request, _0xdaa69b)['del'](_0xb96a0a['cjmTq'])['expect'](0xc8, {}), assert['strictEqual'](_0x3ff6a4['posts']['length'], 0x1), assert['strictEqual'](_0x3ff6a4['comments']['length'], 0x3);
        }), _0x51d29b['DYJbe'](test, _0x51d29b['QVKsN'], () => request(_0xdaa69b)['del']('/posts/9001')['expect']('Content-Type', /json/)['expect'](0x194, {}));
    }), _0x51d29b['WktWq'](describe, _0x51d29b['cbYeO'], () => {
        const _0x2aa360 = {
            'zwJpY': function (_0x1eeeb8, _0x38ec02) {
                return _0x51d29b['chxgE'](_0x1eeeb8, _0x38ec02);
            },
            'Iwmil': function (_0x520185, _0x318f7e) {
                return _0x51d29b['lYAjR'](_0x520185, _0x318f7e);
            },
            'LfMbv': function (_0x24e711, _0x51f000) {
                return _0x51d29b['MyClW'](_0x24e711, _0x51f000);
            },
            'yHyhL': _0x51d29b['HTJgy'],
            'OymVR': function (_0x20579, _0x2e8748) {
                return _0x51d29b['mTlIo'](_0x20579, _0x2e8748);
            },
            'NSOvA': _0x51d29b['cWoYa']
        };
        _0x51d29b['DYJbe'](test, _0x51d29b['PDwWz'], _0x54ecde => {
            const _0x4e0714 = {
                    'IbfvV': function (_0x5634d9, _0x140577) {
                        return _0x2aa360['zwJpY'](_0x5634d9, _0x140577);
                    },
                    'Skcup': function (_0x5533c7, _0x213c75) {
                        return _0x2aa360['Iwmil'](_0x5533c7, _0x213c75);
                    },
                    'sXkkn': function (_0x32163f, _0x2c9cef) {
                        return _0x2aa360['LfMbv'](_0x32163f, _0x2c9cef);
                    },
                    'acCXs': _0x2aa360['yHyhL']
                }, _0xb5237f = new Date();
            _0x2aa360['OymVR'](request, _0xdaa69b)['del'](_0x2aa360['NSOvA'])['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xc8, function (_0x3eb86d) {
                const _0x546e6e = new Date();
                _0x4e0714['IbfvV'](_0x54ecde, _0x4e0714['Skcup'](_0x4e0714['sXkkn'](_0x546e6e, _0xb5237f), 0x3e8) ? _0x3eb86d : new Error(_0x4e0714['acCXs']));
            });
        });
    }), _0x51d29b['WktWq'](describe, _0x51d29b['dBFQz'], () => {
        const _0x46da62 = {
            'kcYbF': function (_0x24ac45, _0x4d0bde, _0x1a5af2) {
                return _0x51d29b['wqVas'](_0x24ac45, _0x4d0bde, _0x1a5af2);
            },
            'kMIel': _0x51d29b['cICGU']
        };
        _0x51d29b['BQxYx'](describe, _0x51d29b['BrvAz'], () => {
            _0x46da62['kcYbF'](test, _0x46da62['kMIel'], () => request(_0xdaa69b)['get']('/')['expect'](/You're successfully running JSON Server/)['expect'](0xc8));
        }), _0x51d29b['FtrLS'](describe, _0x51d29b['eByAy'], () => {
            _0x51d29b['MsZge'](test, _0x51d29b['jOtLK'], () => request(_0xdaa69b)['get']('/script.js')['expect']('Content-Type', /javascript/)['expect'](0xc8));
        }), _0x51d29b['GzleE'](describe, _0x51d29b['PJNZs'], () => {
            _0x51d29b['qUeqX'](test, _0x51d29b['Ozsln'], () => request(_0xdaa69b)['get']('/style.css')['expect']('Content-Type', /css/)['expect'](0xc8));
        });
    }), _0x51d29b['WktWq'](describe, _0x51d29b['GLnna'], () => {
        _0x51d29b['IQHZr'](test, _0x51d29b['XIrRe'], () => {
            _0x51d29b['dMqzk'](assert, _0x2f1398['db']['getState']());
        });
    }), _0x51d29b['svzyw'](describe, _0x51d29b['BRMRy'], () => {
        _0x51d29b['ihNZW'](test, _0x51d29b['hvBkB'], () => request(_0xdaa69b)['get']('/db')['expect']('Cache-Control', 'no-cache')['expect']('Pragma', 'no-cache')['expect']('Expires', '-1'));
    }), _0x51d29b['wZjQc'](describe, _0x51d29b['wmIUI'], () => {
        _0x51d29b['ePsrp'](test, _0x51d29b['gEbnn'], () => request(_0xdaa69b)['get']('/api/posts/1')['expect'](_0x3ff6a4['posts'][0x0])), _0x51d29b['MMZUW'](test, _0x51d29b['YqvFV'], () => request(_0xdaa69b)['get']('/blog/posts/1/show')['expect'](_0x3ff6a4['posts'][0x0])), _0x51d29b['MMZUW'](test, _0x51d29b['Axmtx'], () => {
            const _0x19a7fa = _['cloneDeep'](_0x3ff6a4['posts'][0x0]);
            return _0x19a7fa['comments'] = [
                _0x3ff6a4['comments'][0x0],
                _0x3ff6a4['comments'][0x1]
            ], _0x51d29b['dMqzk'](request, _0xdaa69b)['get'](_0x51d29b['QzlnD'])['expect'](_0x19a7fa);
        }), _0x51d29b['MMZUW'](test, _0x51d29b['dGBic'], () => request(_0xdaa69b)['get']('/comments/special/1-quux')['expect'](0xc8, [_0x3ff6a4['comments'][0x4]])), _0x51d29b['MMZUW'](test, _0x51d29b['vJkvV'], () => request(_0xdaa69b)['get']('/articles?_id=1')['expect'](_0x3ff6a4['posts'][0x0])), _0x51d29b['MMZUW'](test, _0x51d29b['XoOcG'], () => request(_0xdaa69b)['get']('/__rules')['expect'](_0x5cb351));
    }), _0x51d29b['IAgnM'](describe, _0x51d29b['TfuBf'], () => {
        _0x51d29b['dMqzk'](beforeEach, () => {
            _0x2f1398['render'] = (_0xfcde4e, _0xc8c6ae) => {
                _0xc8c6ae['jsonp']({ 'data': _0xc8c6ae['locals']['data'] });
            };
        }), _0x51d29b['MMZUW'](test, _0x51d29b['gkZDt'], () => request(_0xdaa69b)['get']('/posts/1')['expect']('Content-Type', /json/)['expect'](0xc8, { 'data': _0x3ff6a4['posts'][0x0] }));
    }), _0x51d29b['IAgnM'](describe, _0x51d29b['bMxfp'], () => {
        _0x51d29b['dMqzk'](beforeEach, () => {
            _0x2f1398['db']['setState']({ 'posts': [{ '_id': 0x1 }] }), _0x2f1398['db']['_']['id'] = _0x51d29b['vpgUT'];
        }), _0x51d29b['MMZUW'](test, _0x51d29b['XzygR'], () => request(_0xdaa69b)['get']('/posts/1')['expect']('Content-Type', /json/)['expect'](0xc8, _0x2f1398['db']['getState']()['posts'][0x0])), _0x51d29b['MMZUW'](test, _0x51d29b['qKTmf'], () => request(_0xdaa69b)['post']('/posts')['send']({ 'body': 'hello' })['expect']('Content-Type', /json/)['expect'](0xc9, {
            '_id': 0x2,
            'body': 'hello'
        }));
    });
});
