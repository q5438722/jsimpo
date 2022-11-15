const BinaryMiddleware = require('../lib/serialization/BinaryMiddleware'), SerializerMiddleware = require('../lib/serialization/SerializerMiddleware'), cont = (_0x1dd8f1, _0x1146a2) => {
        const _0xbb936b = {
                'OXfQZ': function (_0x5c4e11, _0x4a257d) {
                    return _0x5c4e11 < _0x4a257d;
                },
                'RUAey': function (_0x1893f4, _0x404aba) {
                    return _0x1893f4 % _0x404aba;
                }
            }, _0x1156a2 = [];
        for (let _0x18b8b5 = 0x0; _0xbb936b['OXfQZ'](_0x18b8b5, _0x1146a2); _0x18b8b5++) {
            _0x1156a2['push'](_0x1dd8f1[_0xbb936b['RUAey'](_0x18b8b5, _0x1dd8f1['length'])]);
        }
        return _0x1156a2;
    }, mw = new BinaryMiddleware(), other = { 'other': !![] }, resolveLazy = _0x120037 => {
        const _0x16c375 = {
            'JYinG': function (_0x416be9) {
                return _0x416be9();
            },
            'LyDyW': function (_0x4e8204, _0x38f0e8) {
                return _0x4e8204(_0x38f0e8);
            }
        };
        if (SerializerMiddleware['isLazy'](_0x120037)) {
            const _0x526c70 = _0x16c375['JYinG'](_0x120037);
            if (Array['isArray'](_0x526c70))
                return { 'resolvesTo': _0x526c70['map'](resolveLazy) };
            return { 'resolvesTo': _0x16c375['LyDyW'](resolveLazy, _0x526c70) };
        }
        return _0x120037;
    };
describe('BinaryMiddleware', () => {
    const _0x2d3865 = {
            'ffJWd': function (_0x99bf07, _0x46b908, _0x2b4ac4) {
                return _0x99bf07(_0x46b908, _0x2b4ac4);
            },
            'aYQJT': function (_0x575868, _0x3be685) {
                return _0x575868 * _0x3be685;
            },
            'iLHrM': function (_0x3c529f, _0x48320d) {
                return _0x3c529f(_0x48320d);
            },
            'jjKgf': 'hello',
            'HmRLU': function (_0x11a03a, _0x2415f5, _0x50d8fc) {
                return _0x11a03a(_0x2415f5, _0x50d8fc);
            },
            'lnyaN': function (_0x2b935e, _0x37c828, _0x3d7436) {
                return _0x2b935e(_0x37c828, _0x3d7436);
            },
            'xwDev': function (_0x58b6eb, _0x4d7fe6, _0xb7afd4) {
                return _0x58b6eb(_0x4d7fe6, _0xb7afd4);
            },
            'JrxUY': function (_0x43cbad, _0x13c31a, _0x59aa67) {
                return _0x43cbad(_0x13c31a, _0x59aa67);
            },
            'dFJsA': function (_0x289eb1, _0x86fe18, _0x37063c) {
                return _0x289eb1(_0x86fe18, _0x37063c);
            },
            'LjGRD': function (_0x2485c3, _0x5dbdd0, _0x319bc7) {
                return _0x2485c3(_0x5dbdd0, _0x319bc7);
            },
            'JbiCF': function (_0x34288f, _0x21fc20, _0x6d34d4) {
                return _0x34288f(_0x21fc20, _0x6d34d4);
            },
            'CbfEd': function (_0x4d4965, _0x3f3585, _0x5a5855) {
                return _0x4d4965(_0x3f3585, _0x5a5855);
            },
            'PPZmf': function (_0x2b6294, _0x1cdc95, _0x16d5ac) {
                return _0x2b6294(_0x1cdc95, _0x16d5ac);
            },
            'gnUoc': function (_0x48282a, _0x54826d, _0x24ade1) {
                return _0x48282a(_0x54826d, _0x24ade1);
            },
            'HPmWG': function (_0x34c204, _0x5685a2, _0x103353) {
                return _0x34c204(_0x5685a2, _0x103353);
            },
            'hEzrq': function (_0x16c83c, _0x1ab25f) {
                return _0x16c83c > _0x1ab25f;
            },
            'uumob': function (_0xa6ea84, _0x3ce5bb) {
                return _0xa6ea84 !== _0x3ce5bb;
            },
            'WkoCG': function (_0x2756c7, _0x290e14) {
                return _0x2756c7 > _0x290e14;
            },
            'zfiMH': function (_0x3f11c7, _0x20e81f) {
                return _0x3f11c7 === _0x20e81f;
            },
            'QpRKO': function (_0x446a36, _0xca4b57) {
                return _0x446a36 > _0xca4b57;
            },
            'hhzSK': function (_0x33af66, _0x183361) {
                return _0x33af66 + _0x183361;
            },
            'HdLyP': function (_0x592b46, _0x416e99) {
                return _0x592b46 + _0x416e99;
            },
            'OLsFf': '\x20...\x20',
            'VpEcp': function (_0x111ce1, _0x463e1e, _0x2ae553) {
                return _0x111ce1(_0x463e1e, _0x2ae553);
            }
        }, _0x35aabe = [
            !![],
            ![],
            null,
            '',
            'hi',
            'hi'['repeat'](0xc8),
            '😀',
            '😀'['repeat'](0xc8),
            Buffer['from'](_0x2d3865['jjKgf']),
            0x1,
            0xb,
            0x100,
            -0x1,
            -0xb,
            -0x100,
            -1.25,
            SerializerMiddleware['createLazy']([0x5], other)
        ], _0x5a7863 = [
            ..._0x35aabe,
            SerializerMiddleware['createLazy']([SerializerMiddleware['createLazy']([0x5], other)], mw),
            SerializerMiddleware['createLazy']([
                0x1,
                SerializerMiddleware['createLazy']([0x2], mw),
                SerializerMiddleware['createLazy']([0x5], other),
                0x4
            ], mw)
        ];
    _0x5a7863['push'](SerializerMiddleware['createLazy'](_0x5a7863['slice'](), mw)), _0x5a7863['push'](SerializerMiddleware['createLazy'](_0x5a7863['slice'](), other)), _0x35aabe['push'](undefined);
    const _0x3bdecb = [
        ..._0x5a7863['map'](_0xf72989 => [_0xf72989]),
        [(!![], !![])],
        [
            ![],
            !![]
        ],
        [
            !![],
            ![]
        ],
        [
            ![],
            ![]
        ],
        [
            ![],
            ![],
            ![]
        ],
        [
            ![],
            !![],
            ![],
            !![]
        ],
        [
            !![],
            !![],
            !![]
        ],
        [
            ![],
            ![],
            ![]
        ],
        _0x2d3865['HmRLU'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x5),
        _0x2d3865['lnyaN'](cont, [!![]], 0x5),
        _0x2d3865['lnyaN'](cont, [![]], 0x5),
        _0x2d3865['xwDev'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x6),
        _0x2d3865['xwDev'](cont, [!![]], 0x6),
        _0x2d3865['xwDev'](cont, [![]], 0x6),
        _0x2d3865['JrxUY'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x7),
        _0x2d3865['dFJsA'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x8),
        _0x2d3865['LjGRD'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x9),
        _0x2d3865['JbiCF'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x84),
        _0x2d3865['JbiCF'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x85),
        _0x2d3865['JbiCF'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x86),
        _0x2d3865['CbfEd'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x87),
        _0x2d3865['CbfEd'](cont, [
            ![],
            !![],
            ![],
            !![]
        ], 0x2710),
        _0x2d3865['PPZmf'](cont, [!![]], 0x87),
        [null],
        [
            null,
            null
        ],
        [
            null,
            null,
            null
        ],
        _0x2d3865['PPZmf'](cont, [null], 0x4),
        _0x2d3865['PPZmf'](cont, [null], 0x64),
        _0x2d3865['gnUoc'](cont, [null], 0x12c),
        _0x2d3865['gnUoc'](cont, [-0x14], 0x14),
        _0x2d3865['gnUoc'](cont, [0x190], 0x14),
        _0x2d3865['HPmWG'](cont, [5.5], 0x14)
    ];
    for (const _0x4f44e4 of [
            0x1,
            0x64
        ]) {
        for (const _0x444b76 of _0x3bdecb) {
            for (const _0x51542f of _0x35aabe) {
                for (const _0x4de71c of _0x35aabe) {
                    if (_0x2d3865['hEzrq'](_0x4f44e4, 0x1) && _0x2d3865['uumob'](_0x4de71c, undefined))
                        continue;
                    let _0x1f521f = [
                        _0x51542f,
                        ..._0x444b76,
                        _0x4de71c
                    ]['filter'](_0x4b2364 => _0x4b2364 !== undefined);
                    if (_0x2d3865['WkoCG'](_0x2d3865['aYQJT'](_0x1f521f['length'], _0x4f44e4), 0x30d40))
                        continue;
                    if (_0x2d3865['zfiMH'](_0x1f521f['length'], 0x0))
                        continue;
                    let _0xc109df = JSON['stringify'](_0x1f521f['map'](resolveLazy));
                    if (_0x2d3865['QpRKO'](_0xc109df['length'], 0x64))
                        _0xc109df = _0x2d3865['hhzSK'](_0x2d3865['HdLyP'](_0xc109df['slice'](0x0, 0x32), _0x2d3865['OLsFf']), _0xc109df['slice'](-0x32));
                    _0x2d3865['VpEcp'](it, 'should\x20serialize\x20' + _0x4f44e4 + '\x20x\x20' + _0xc109df + '\x20(' + _0x1f521f['length'] + ')\x20correctly', () => {
                        const _0x411004 = _0x2d3865['ffJWd'](cont, _0x1f521f, _0x2d3865['aYQJT'](_0x1f521f['length'], _0x4f44e4)), _0x571bab = mw['serialize'](_0x411004, {}), _0x29d6df = mw['deserialize'](_0x571bab, {});
                        _0x2d3865['iLHrM'](expect, _0x29d6df['map'](resolveLazy))['toEqual'](_0x411004['map'](resolveLazy));
                    });
                }
            }
        }
    }
});
