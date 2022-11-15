const BinaryMiddleware = require('../lib/serialization/BinaryMiddleware'), SerializerMiddleware = require('../lib/serialization/SerializerMiddleware'), cont = (_0x3e4ea2, _0x18fec4) => {
        const _0x1f24ff = [];
        for (let _0x1e8662 = -0x19fd * -0x1 + 0x572 * 0x1 + 0x1 * -0x1f6f; _0x1e8662 < _0x18fec4; _0x1e8662++) {
            _0x1f24ff['push'](_0x3e4ea2[_0x1e8662 % _0x3e4ea2['length']]);
        }
        return _0x1f24ff;
    }, mw = new BinaryMiddleware(), other = { 'other': !![] }, resolveLazy = _0x203e8c => {
        if (SerializerMiddleware['isLazy'](_0x203e8c)) {
            const _0x26f9da = _0x203e8c();
            if (Array['isArray'](_0x26f9da))
                return { 'resolvesTo': _0x26f9da['map'](resolveLazy) };
            return { 'resolvesTo': resolveLazy(_0x26f9da) };
        }
        return _0x203e8c;
    };
describe('BinaryMiddleware', () => {
    const _0x449fd8 = [
            !![],
            ![],
            null,
            '',
            'hi',
            'hi'['repeat'](0x62a + 0x1 * -0xa60 + 0x4fe),
            '😀',
            '😀'['repeat'](-0xe8f * 0x2 + -0x6b5 + 0x249b),
            Buffer['from']('hello'),
            0x1 * 0x11fb + -0x237a + 0x1180,
            -0x1 * -0x1f01 + 0x1657 + -0x354d,
            -0x1c72 + -0x8e * 0x21 + 0x2fc0,
            -(0x483 + 0x1015 + -0x1497),
            -(0x165 + 0x679 * 0x1 + -0x7d3 * 0x1),
            -(-0x2694 + 0xd * -0x2 + 0x27ae),
            -(0x928 * 0x4 + 0x5 * 0x56d + -0x7f8 * 0x8 + 0.25),
            SerializerMiddleware['createLazy']([0x2 * -0xe71 + 0x2149 + -0x462], other)
        ], _0x2b5dc3 = [
            ..._0x449fd8,
            SerializerMiddleware['createLazy']([SerializerMiddleware['createLazy']([0x553 + -0x1980 + -0xa * -0x205], other)], mw),
            SerializerMiddleware['createLazy']([
                0x2 * 0x1191 + 0x817 * 0x1 + -0x2b38,
                SerializerMiddleware['createLazy']([0x1f0 * 0x1 + 0x4 * 0xf1 + -0x5b2], mw),
                SerializerMiddleware['createLazy']([-0x14 * -0x15d + 0x53 * 0x29 + -0x288a], other),
                0x1813 + 0x25da + -0x3de9
            ], mw)
        ];
    _0x2b5dc3['push'](SerializerMiddleware['createLazy'](_0x2b5dc3['slice'](), mw)), _0x2b5dc3['push'](SerializerMiddleware['createLazy'](_0x2b5dc3['slice'](), other)), _0x449fd8['push'](undefined);
    const _0x2bccde = [
        ..._0x2b5dc3['map'](_0x419e12 => [_0x419e12]),
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
        cont([
            ![],
            !![],
            ![],
            !![]
        ], -0x18d * -0xb + -0x28 * 0x8e + 0x526 * 0x1),
        cont([!![]], 0x31f + -0x7 * -0x2f5 + -0x17cd),
        cont([![]], 0x1332 + 0xa * 0x13b + 0x1f7b * -0x1),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], -0x5 * -0x299 + -0xddb + 0x13 * 0xc),
        cont([!![]], 0x5dd + 0x1 * -0x16e3 + -0x886 * -0x2),
        cont([![]], -0x2e + -0x11af + 0x11e3),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x4a * 0x3b + -0x7 * -0xfb + 0x22c * -0xb),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], -0x16ca + -0x5 * -0x407 + 0x2af),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], -0x19ad + -0x1c4f + 0x3605),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x240a + 0x824 + 0x2baa * -0x1),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x90 + 0x5 * -0x54f + 0x1a80),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x583 * -0x3 + 0x42d * -0x1 + 0x153c),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], -0x1 * -0x2479 + -0x6f1 * -0x5 + -0x46a7),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], -0x4a65 + 0x23bb + 0x4dba),
        cont([!![]], -0xa99 + 0x3 * -0x3cf + 0x17 * 0xfb),
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
        cont([null], -0x1d6a + 0x10e9 + 0xc85),
        cont([null], -0x29f * 0xb + 0xffe + 0xd3b),
        cont([null], -0x99 * 0x27 + 0x1 * -0x3f5 + 0x1c70),
        cont([-(0xd21 + -0x29d + -0xa70)], -0xaac + -0x1d96 + 0x2856 * 0x1),
        cont([-0x92c + 0x3a2 + -0x38d * -0x2], 0x2 * -0x5dc + 0x1694 + -0xc * 0xe6),
        cont([0x853 + -0x5 * 0x31c + 0xce * 0x9 + 0.5], -0x69 * -0xf + 0x231 + 0x2 * -0x422)
    ];
    for (const _0x31bb35 of [
            0x2054 + -0x434 + 0x1c1f * -0x1,
            0x1 * -0xb93 + 0x4 * -0x1f6 + 0x1cd * 0xb
        ]) {
        for (const _0x3114a4 of _0x2bccde) {
            for (const _0x18e5c9 of _0x449fd8) {
                for (const _0x1c35e3 of _0x449fd8) {
                    if (_0x31bb35 > 0x2 * 0x973 + 0xa * 0x29c + -0x2cfd && _0x1c35e3 !== undefined)
                        continue;
                    let _0x22961e = [
                        _0x18e5c9,
                        ..._0x3114a4,
                        _0x1c35e3
                    ]['filter'](_0xc34172 => _0xc34172 !== undefined);
                    if (_0x22961e['length'] * _0x31bb35 > 0x956f * -0x5 + -0x1 * 0x38fc3 + -0x1 * -0x9882e)
                        continue;
                    if (_0x22961e['length'] === 0x10f + -0x8fb + -0x4 * -0x1fb)
                        continue;
                    let _0x39a83e = JSON['stringify'](_0x22961e['map'](resolveLazy));
                    if (_0x39a83e['length'] > -0xc * -0xee + -0x49d + -0x627)
                        _0x39a83e = _0x39a83e['slice'](-0x90 * 0x39 + -0x1 * 0x101f + 0x302f, 0x1e6d * -0x1 + -0x1bf4 + 0x3a93) + '\x20...\x20' + _0x39a83e['slice'](-(-0x1c1 * 0xd + 0x2 * 0x641 + 0xa7d));
                    it('should\x20serialize\x20' + _0x31bb35 + '\x20x\x20' + _0x39a83e + '\x20(' + _0x22961e['length'] + ')\x20correctly', () => {
                        const _0x3b5c04 = cont(_0x22961e, _0x22961e['length'] * _0x31bb35), _0x21da93 = mw['serialize'](_0x3b5c04, {}), _0x1f2e09 = mw['deserialize'](_0x21da93, {});
                        expect(_0x1f2e09['map'](resolveLazy))['toEqual'](_0x3b5c04['map'](resolveLazy));
                    });
                }
            }
        }
    }
});
