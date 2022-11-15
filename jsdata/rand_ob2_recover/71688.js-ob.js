function _0x5e64(_0x2877fe, _0x414b82) {
    return _0x5e64 = function (_0x44ac7b, _0x5e6424) {
        _0x44ac7b = _0x44ac7b - 339;
        let _0x5ad98a = _0x44ac[_0x44ac7b];
        return _0x5ad98a;
    }, _0x5e64(_0x2877fe, _0x414b82);
}
const BinaryMiddleware = require(_0xd1b2bf(350)), SerializerMiddleware = require(_0xd1b2bf(351)), cont = (_0x1e7320, _0x3140d4) => {
        const _0x27f6ed = _0xd1b2bf, _0x56194c = [];
        for (let _0x3f2294 = 0; _0x3f2294 < _0x3140d4; _0x3f2294++) {
            _0x56194c[_0x27f6ed(352)](_0x1e7320[_0x3f2294 % _0x1e7320[_0x27f6ed(353)]]);
        }
        return _0x56194c;
    }, mw = new BinaryMiddleware(), other = { 'other': !![] }, resolveLazy = _0x2b61a0 => {
        const _0x131615 = _0xd1b2bf;
        if (SerializerMiddleware[_0x131615(354)](_0x2b61a0)) {
            const _0x139275 = _0x2b61a0();
            if (Array[_0x131615(355)](_0x139275))
                return { 'resolvesTo': _0x139275[_0x131615(356)](resolveLazy) };
            return { 'resolvesTo': resolveLazy(_0x139275) };
        }
        return _0x2b61a0;
    };
describe(_0xd1b2bf(357), () => {
    const _0x12f8ea = _0xd1b2bf, _0x30955c = [
            !![],
            ![],
            null,
            '',
            'hi',
            'hi'[_0x12f8ea(358)](200),
            '\uD83D\uDE00',
            '\uD83D\uDE00'[_0x12f8ea(358)](200),
            Buffer['from']('hello'),
            1,
            11,
            256,
            -1,
            -11,
            -256,
            -1.25,
            SerializerMiddleware[_0x12f8ea(359)]([5], other)
        ], _0x51211d = [
            ..._0x30955c,
            SerializerMiddleware[_0x12f8ea(359)]([SerializerMiddleware[_0x12f8ea(359)]([5], other)], mw),
            SerializerMiddleware[_0x12f8ea(359)]([
                1,
                SerializerMiddleware['createLazy']([2], mw),
                SerializerMiddleware['createLazy']([5], other),
                4
            ], mw)
        ];
    _0x51211d[_0x12f8ea(352)](SerializerMiddleware[_0x12f8ea(359)](_0x51211d[_0x12f8ea(360)](), mw)), _0x51211d[_0x12f8ea(352)](SerializerMiddleware['createLazy'](_0x51211d['slice'](), other)), _0x30955c[_0x12f8ea(352)](undefined);
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
        ], 5),
        cont([!![]], 5),
        cont([![]], 5),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 6),
        cont([!![]], 6),
        cont([![]], 6),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 7),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 8),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 9),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 132),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 133),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 134),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 135),
        cont([
            ![],
            !![],
            ![],
            !![]
        ], 10000),
        cont([!![]], 135),
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
        cont([null], 4),
        cont([null], 100),
        cont([null], 300),
        cont([-20], 20),
        cont([400], 20),
        cont([5.5], 20)
    ];
    for (const _0x47a865 of [
            1,
            100
        ]) {
        for (const _0x26489a of _0x2c0f60) {
            for (const _0xfb0213 of _0x30955c) {
                for (const _0x1cd1e5 of _0x30955c) {
                    if (_0x47a865 > 1 && _0x1cd1e5 !== undefined)
                        continue;
                    let _0xb91d34 = [
                        _0xfb0213,
                        ..._0x26489a,
                        _0x1cd1e5
                    ][_0x12f8ea(361)](_0x4bbba4 => _0x4bbba4 !== undefined);
                    if (_0xb91d34[_0x12f8ea(353)] * _0x47a865 > 200000)
                        continue;
                    if (_0xb91d34[_0x12f8ea(353)] === 0)
                        continue;
                    let _0x45c2a8 = JSON[_0x12f8ea(362)](_0xb91d34[_0x12f8ea(356)](resolveLazy));
                    if (_0x45c2a8['length'] > 100)
                        _0x45c2a8 = _0x45c2a8[_0x12f8ea(360)](0, 50) + _0x12f8ea(363) + _0x45c2a8[_0x12f8ea(360)](-50);
                    it(_0x12f8ea(364) + _0x47a865 + _0x12f8ea(365) + _0x45c2a8 + ' (' + _0xb91d34['length'] + _0x12f8ea(366), () => {
                        const _0x3c026c = _0x12f8ea, _0x437004 = cont(_0xb91d34, _0xb91d34['length'] * _0x47a865), _0x5a01af = mw[_0x3c026c(367)](_0x437004, {}), _0x5b7ce8 = mw['deserialize'](_0x5a01af, {});
                        expect(_0x5b7ce8[_0x3c026c(356)](resolveLazy))['toEqual'](_0x437004[_0x3c026c(356)](resolveLazy));
                    });
                }
            }
        }
    }
});