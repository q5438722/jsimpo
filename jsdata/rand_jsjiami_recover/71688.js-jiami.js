const BinaryMiddleware = require('../lib/serialization/BinaryMiddleware');
const SerializerMiddleware = require('../lib/serialization/SerializerMiddleware');
const cont = (_0x3ac88c, _0x11f14b) => {
    const _0x3aae85 = [];
    for (let _0x24362c = 0; _0x24362c < _0x11f14b; _0x24362c++) {
        _0x3aae85['push'](_0x3ac88c[_0x24362c % _0x3ac88c['length']]);
    }
    return _0x3aae85;
};
const mw = new BinaryMiddleware();
const other = { 'other': !![] };
const resolveLazy = _0x34f5d8 => {
    if (SerializerMiddleware['isLazy'](_0x34f5d8)) {
        const _0x1ca3e6 = _0x34f5d8();
        if (Array['isArray'](_0x1ca3e6))
            return { 'resolvesTo': _0x1ca3e6['map'](resolveLazy) };
        return { 'resolvesTo': resolveLazy(_0x1ca3e6) };
    }
    return _0x34f5d8;
};
describe('BinaryMiddleware', () => {
    const _0x4f2885 = [
        !![],
        ![],
        null,
        '',
        'hi',
        'hi'['repeat'](200),
        '\uD83D\uDE00',
        '\uD83D\uDE00'['repeat'](200),
        Buffer['from']('hello'),
        1,
        11,
        256,
        -1,
        -11,
        -256,
        -1.25,
        SerializerMiddleware['createLazy']([5], other)
    ];
    const _0x2e5283 = [
        ..._0x4f2885,
        SerializerMiddleware['createLazy']([SerializerMiddleware['createLazy']([5], other)], mw),
        SerializerMiddleware['createLazy']([
            1,
            SerializerMiddleware['createLazy']([2], mw),
            SerializerMiddleware['createLazy']([5], other),
            4
        ], mw)
    ];
    _0x2e5283['push'](SerializerMiddleware['createLazy'](_0x2e5283['slice'](), mw));
    _0x2e5283['push'](SerializerMiddleware['createLazy'](_0x2e5283['slice'](), other));
    _0x4f2885['push'](undefined);
    const _0x283e81 = [
        ..._0x2e5283['map'](_0x320194 => [_0x320194]),
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
    for (const _0x522d12 of [
            1,
            100
        ]) {
        for (const _0x5b1e18 of _0x283e81) {
            if ('EDtdC' === 'DEQtE') {
                const _0x474b6b = [];
                for (let _0x198281 = 0; _0x198281 < count; _0x198281++) {
                    _0x474b6b['push'](base[_0x198281 % base['length']]);
                }
                return _0x474b6b;
            } else {
                for (const _0x503530 of _0x4f2885) {
                    if ('EgXTQ' === 'EgXTQ') {
                        for (const _0x25704f of _0x4f2885) {
                            if (_0x522d12 > 1 && _0x25704f !== undefined)
                                continue;
                            let _0xe3c6c5 = [
                                _0x503530,
                                ..._0x5b1e18,
                                _0x25704f
                            ]['filter'](_0x30e58f => _0x30e58f !== undefined);
                            if (_0xe3c6c5['length'] * _0x522d12 > 200000)
                                continue;
                            if (_0xe3c6c5['length'] === 0)
                                continue;
                            let _0x3e61b8 = JSON['stringify'](_0xe3c6c5['map'](resolveLazy));
                            if (_0x3e61b8['length'] > 100)
                                _0x3e61b8 = _0x3e61b8['slice'](0, 50) + ' ... ' + _0x3e61b8['slice'](-50);
                            it('should serialize ' + _0x522d12 + ' x ' + _0x3e61b8 + ' (' + _0xe3c6c5['length'] + ') correctly', () => {
                                if ('wRMMk' !== 'wRMMk') {
                                    const _0x12eaeb = cont(_0xe3c6c5, _0xe3c6c5['length'] * _0x522d12);
                                    const _0x381807 = mw['serialize'](_0x12eaeb, {});
                                    const _0x35dd8a = mw['deserialize'](_0x381807, {});
                                    expect(_0x35dd8a['map'](resolveLazy))['toEqual'](_0x12eaeb['map'](resolveLazy));
                                } else {
                                    const _0x41be3f = cont(_0xe3c6c5, _0xe3c6c5['length'] * _0x522d12);
                                    const _0x2da004 = mw['serialize'](_0x41be3f, {});
                                    const _0x477401 = mw['deserialize'](_0x2da004, {});
                                    expect(_0x477401['map'](resolveLazy))['toEqual'](_0x41be3f['map'](resolveLazy));
                                }
                            });
                        }
                    } else {
                        result['push'](base[i % base['length']]);
                    }
                }
            }
        }
    }
});