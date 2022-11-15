const _0x44ac = [
    'filter',
    'stringify',
    '\x20...\x20',
    'should\x20serialize\x20',
    '\x20x\x20',
    ')\x20correctly',
    'serialize',
    '29494cBBHRu',
    '279416fmKbEv',
    '101307OFaQLI',
    '1bLudEV',
    '111086gwlyMz',
    '1ENtjCz',
    '225701mmwonl',
    '2PHpHvD',
    '1VvtNyI',
    '247247vCjWyo',
    '297211iCguVR',
    '../lib/serialization/BinaryMiddleware',
    '../lib/serialization/SerializerMiddleware',
    'push',
    'length',
    'isLazy',
    'isArray',
    'map',
    'BinaryMiddleware',
    'repeat',
    'createLazy',
    'slice'
];
const _0xd1b2bf = _0x5e64;
(function (_0x5077d7, _0x4e30db) {
    const _0x4788ff = _0x5e64;
    while (!![]) {
        try {
            const _0x393600 = parseInt(_0x4788ff(0x153)) + -parseInt(_0x4788ff(0x154)) + parseInt(_0x4788ff(0x155)) * parseInt(_0x4788ff(0x156)) + parseInt(_0x4788ff(0x157)) * -parseInt(_0x4788ff(0x158)) + parseInt(_0x4788ff(0x159)) * parseInt(_0x4788ff(0x15a)) + -parseInt(_0x4788ff(0x15b)) * parseInt(_0x4788ff(0x15c)) + parseInt(_0x4788ff(0x15d));
            if (_0x393600 === _0x4e30db)
                break;
            else
                _0x5077d7['push'](_0x5077d7['shift']());
        } catch (_0x112076) {
            _0x5077d7['push'](_0x5077d7['shift']());
        }
    }
}(_0x44ac, 0x3b001));
function _0x5e64(_0x2877fe, _0x414b82) {
    return _0x5e64 = function (_0x44ac7b, _0x5e6424) {
        _0x44ac7b = _0x44ac7b - 0x153;
        let _0x5ad98a = _0x44ac[_0x44ac7b];
        return _0x5ad98a;
    }, _0x5e64(_0x2877fe, _0x414b82);
}
const BinaryMiddleware = require(_0xd1b2bf(0x15e)), SerializerMiddleware = require(_0xd1b2bf(0x15f)), cont = (_0x1e7320, _0x3140d4) => {
        const _0x27f6ed = _0xd1b2bf, _0x56194c = [];
        for (let _0x3f2294 = 0x0; _0x3f2294 < _0x3140d4; _0x3f2294++) {
            _0x56194c[_0x27f6ed(0x160)](_0x1e7320[_0x3f2294 % _0x1e7320[_0x27f6ed(0x161)]]);
        }
        return _0x56194c;
    }, mw = new BinaryMiddleware(), other = { 'other': !![] }, resolveLazy = _0x2b61a0 => {
        const _0x131615 = _0xd1b2bf;
        if (SerializerMiddleware[_0x131615(0x162)](_0x2b61a0)) {
            const _0x139275 = _0x2b61a0();
            if (Array[_0x131615(0x163)](_0x139275))
                return { 'resolvesTo': _0x139275[_0x131615(0x164)](resolveLazy) };
            return { 'resolvesTo': resolveLazy(_0x139275) };
        }
        return _0x2b61a0;
    };
describe(_0xd1b2bf(0x165), () => {
    const _0x12f8ea = _0xd1b2bf, _0x30955c = [
            !![],
            ![],
            null,
            '',
            'hi',
            'hi'[_0x12f8ea(0x166)](0xc8),
            '😀',
            '😀'[_0x12f8ea(0x166)](0xc8),
            Buffer['from']('hello'),
            0x1,
            0xb,
            0x100,
            -0x1,
            -0xb,
            -0x100,
            -1.25,
            SerializerMiddleware[_0x12f8ea(0x167)]([0x5], other)
        ], _0x51211d = [
            ..._0x30955c,
            SerializerMiddleware[_0x12f8ea(0x167)]([SerializerMiddleware[_0x12f8ea(0x167)]([0x5], other)], mw),
            SerializerMiddleware[_0x12f8ea(0x167)]([
                0x1,
                SerializerMiddleware['createLazy']([0x2], mw),
                SerializerMiddleware['createLazy']([0x5], other),
                0x4
            ], mw)
        ];
    _0x51211d[_0x12f8ea(0x160)](SerializerMiddleware[_0x12f8ea(0x167)](_0x51211d[_0x12f8ea(0x168)](), mw)), _0x51211d[_0x12f8ea(0x160)](SerializerMiddleware['createLazy'](_0x51211d['slice'](), other)), _0x30955c[_0x12f8ea(0x160)](undefined);
    const _0x2c0f60 = [
        ..._0x51211d['map'](_0x166710 => [_0x166710]),
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
        ], 0x5),
        cont([!![]], 0x5),
        cont([![]], 0x5),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x6),
        cont([!![]], 0x6),
        cont([![]], 0x6),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x7),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x8),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x9),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x84),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x85),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x86),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x87),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 0x2710),
        cont([!![]], 0x87),
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
        cont([null], 0x4),
        cont([null], 0x64),
        cont([null], 0x12c),
        cont([-0x14], 0x14),
        cont([0x190], 0x14),
        cont([5.5], 0x14)
    ];
    for (const _0x47a865 of [
            0x1,
            0x64
        ]) {
        for (const _0x26489a of _0x2c0f60) {
            for (const _0xfb0213 of _0x30955c) {
                for (const _0x1cd1e5 of _0x30955c) {
                    if (_0x47a865 > 0x1 && _0x1cd1e5 !== undefined)
                        continue;
                    let _0xb91d34 = [
                        _0xfb0213,
                        ..._0x26489a,
                        _0x1cd1e5
                    ][_0x12f8ea(0x169)](_0x4bbba4 => _0x4bbba4 !== undefined);
                    if (_0xb91d34[_0x12f8ea(0x161)] * _0x47a865 > 0x30d40)
                        continue;
                    if (_0xb91d34[_0x12f8ea(0x161)] === 0x0)
                        continue;
                    let _0x45c2a8 = JSON[_0x12f8ea(0x16a)](_0xb91d34[_0x12f8ea(0x164)](resolveLazy));
                    if (_0x45c2a8['length'] > 0x64)
                        _0x45c2a8 = _0x45c2a8[_0x12f8ea(0x168)](0x0, 0x32) + _0x12f8ea(0x16b) + _0x45c2a8[_0x12f8ea(0x168)](-0x32);
                    it(_0x12f8ea(0x16c) + _0x47a865 + _0x12f8ea(0x16d) + _0x45c2a8 + '\x20(' + _0xb91d34['length'] + _0x12f8ea(0x16e), () => {
                        const _0x3c026c = _0x12f8ea, _0x437004 = cont(_0xb91d34, _0xb91d34['length'] * _0x47a865), _0x5a01af = mw[_0x3c026c(0x16f)](_0x437004, {}), _0x5b7ce8 = mw['deserialize'](_0x5a01af, {});
                        expect(_0x5b7ce8[_0x3c026c(0x164)](resolveLazy))['toEqual'](_0x437004[_0x3c026c(0x164)](resolveLazy));
                    });
                }
            }
        }
    }
});
