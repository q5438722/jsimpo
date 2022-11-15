const _0x4483 = ['50109AhIvPm', '5WVtCzY', '176950xUYvtc', '345402BRbWdB', '61475cyEjnA', '390557UazPCd', '190735ToYjVk', '4119ZAGItW', '128JCgzhH', 'nth', '2|6|5|0|1|3|4', 'should work with a negative `n`', 'should return `undefined` for empty arrays', 'uvVyC', 'EPjZj', 'NHRRK', 'map', 'zrPgi', 'length', 'BeJYp', 'should coerce `n` to an integer', 'HPJYJ', 'split', 'deepStrictEqual', 'wlLwg', 'UEQkE', 'adviW', 'HPfSp', '4|3|1|6|5|2|7|0', 'rYriN', 'hanqU', 'NjnXu', 'UcWfC', 'jbRzG', 'sCfqq', 'ohNYG'];

function _0x1358(_0x5c60e2, _0x1c37b0) {
    return _0x1358 = function (_0x45dcd0, _0x7e75b4) {
        _0x45dcd0 = _0x45dcd0 - 138;
        const _0x4de10d = _0x4483[_0x45dcd0];

        return _0x4de10d;
    }, _0x1358(_0x5c60e2, _0x1c37b0);
}
const _0x5818cb = _0x1358;

(function (_0x3b768d, _0x1700c8) {
    const _0x4d4b03 = _0x1358;

    while (true) {
        try {
            const _0x286795 = parseInt(_0x4d4b03(0x8a)) * parseInt(_0x4d4b03(0x8b)) + parseInt(_0x4d4b03(0x8c)) + -parseInt(_0x4d4b03(0x8d)) + parseInt(_0x4d4b03(0x8e)) + parseInt(_0x4d4b03(0x8f)) + parseInt(_0x4d4b03(0x90)) + -parseInt(_0x4d4b03(0x91)) * parseInt(_0x4d4b03(0x92));

            if (_0x286795 === _0x1700c8) break;else _0x3b768d.push(_0x3b768d.shift());
        } catch (_0x3b979d) {
            _0x3b768d.push(_0x3b768d.shift());
        }
    }
})(_0x4483, 197628);
import _0x1384ed from 'assert';
import _0x3771ed from 'lodash';
import { falsey, stubA, stubB, noop } from './utils.js';
import _0x5b3fe2 from '../nth.js';
describe(_0x5818cb(0x93), function () {
    const _0x3a8fb9 = _0x5818cb;
    const _0x3f88af = {
        'uvVyC': _0x3a8fb9(0x94),
        'EPjZj': function (_0x42f96b, _0x4c1ff2, _0x22fe7e) {
            return _0x42f96b(_0x4c1ff2, _0x22fe7e);
        },
        'NHRRK': _0x3a8fb9(0x95),
        'adviW': function (_0x2fcdc3, _0x181143, _0x24eb74) {
            return _0x2fcdc3(_0x181143, _0x24eb74);
        },
        'HPfSp': function (_0x14c669, _0x484274) {
            return _0x14c669 + _0x484274;
        },
        'rYriN': function (_0x1f21a0, _0x4a66ef, _0x19716a) {
            return _0x1f21a0(_0x4a66ef, _0x19716a);
        },
        'hanqU': function (_0x890424, _0x793949, _0x24ac6a) {
            return _0x890424(_0x793949, _0x24ac6a);
        },
        'NjnXu': _0x3a8fb9(0x96),
        'UcWfC': 'should return `undefined` for non-indexes',
        'sCfqq': 'should get the nth element of `array`'
    };

    const _0x367985 = _0x3f88af[_0x3a8fb9(0x97)].split('|');

    var _0x3caa2d = 0;

    while (true) {
        switch (_0x367985[_0x3caa2d++]) {
            case '0':
                _0x3f88af[_0x3a8fb9(0x98)](it, _0x3f88af[_0x3a8fb9(0x99)], function () {
                    const _0x1b370a = _0x3a8fb9;

                    const _0x21fe1a = _0x3771ed[_0x1b370a(0x9a)](_0x3771ed.range(1, _0x1dc204[_0x1b370a(0x9b)](_0x27003b[_0x1b370a(0x9c)], 1)), function (_0x5d7522) {
                        const _0x2319a8 = _0x1b370a;

                        return _0x1dc204[_0x2319a8(0x9d)](_0x5b3fe2, _0x27003b, -_0x5d7522);
                    });

                    _0x1384ed.deepStrictEqual(_0x21fe1a, ['d', 'c', 'b', 'a']);
                });
                continue;
            case '1':
                it(_0x3a8fb9(0x9e), function () {
                    const _0x3af0e7 = _0x3a8fb9;

                    const _0x344cc7 = _0x1dc204[_0x3af0e7(0x9f)][_0x3af0e7(0xa0)]('|');

                    var _0x441519 = 0;

                    while (true) {
                        switch (_0x344cc7[_0x441519++]) {
                            case '0':
                                _0x1384ed[_0x3af0e7(0xa1)](_0x6805f0, _0x229dc1);
                                continue;
                            case '1':
                                var _0x6805f0 = _0x3771ed[_0x3af0e7(0x9a)](_0x56f764, function (_0x5abcec) {
                                    const _0x3784c9 = _0x3af0e7;

                                    return _0x5abcec ? _0x29b7e7[_0x3784c9(0xa2)](_0x5b3fe2, _0x27003b, _0x5abcec) : _0x5b3fe2(_0x27003b);
                                });

                                continue;
                            case '2':
                                _0x229dc1 = _0x3771ed.map(_0x56f764, stubB);
                                continue;
                            case '3':
                                var _0x56f764 = falsey;

                                var _0x229dc1 = _0x3771ed[_0x3af0e7(0x9a)](_0x56f764, stubA);

                                continue;
                            case '4':
                                const _0x29b7e7 = {
                                    'wlLwg': function (_0x34f5fe, _0x1bbf51, _0x5bd75a) {
                                        const _0x3d61b4 = _0x3af0e7;

                                        return _0x1dc204[_0x3d61b4(0xa3)](_0x34f5fe, _0x1bbf51, _0x5bd75a);
                                    },
                                    'tTsvr': function (_0x50160e, _0x4bca21, _0x1a2f79) {
                                        return _0x1dc204.UEQkE(_0x50160e, _0x4bca21, _0x1a2f79);
                                    }
                                };

                                continue;
                            case '5':
                                _0x56f764 = ['1', 1.6];
                                continue;
                            case '6':
                                _0x1384ed[_0x3af0e7(0xa1)](_0x6805f0, _0x229dc1);
                                continue;
                            case '7':
                                _0x6805f0 = _0x3771ed[_0x3af0e7(0x9a)](_0x56f764, function (_0xfea1c7) {
                                    return _0x29b7e7.tTsvr(_0x5b3fe2, _0x27003b, _0xfea1c7);
                                });
                                continue;
                        }
                        break;
                    }
                });
                continue;
            case '2':
                const _0x1dc204 = {
                    'BeJYp': function (_0xbb35db, _0x40da58, _0x1708c4) {
                        const _0x2160c1 = _0x3a8fb9;

                        return _0x3f88af[_0x2160c1(0xa4)](_0xbb35db, _0x40da58, _0x1708c4);
                    },
                    'zrPgi': function (_0x516497, _0x45c65a) {
                        const _0x51b144 = _0x3a8fb9;

                        return _0x3f88af[_0x51b144(0xa5)](_0x516497, _0x45c65a);
                    },
                    'HPJYJ': _0x3a8fb9(0xa6),
                    'UEQkE': function (_0x36653f, _0x3ae899, _0x255f30) {
                        return _0x36653f(_0x3ae899, _0x255f30);
                    },
                    'jbRzG': function (_0x391e0f, _0x17af4a, _0x3d3982) {
                        const _0x4e84e4 = _0x3a8fb9;

                        return _0x3f88af[_0x4e84e4(0xa7)](_0x391e0f, _0x17af4a, _0x3d3982);
                    }
                };

                continue;
            case '3':
                _0x3f88af[_0x3a8fb9(0xa8)](it, _0x3f88af[_0x3a8fb9(0xa9)], function () {
                    const _0x4ccd9d = _0x3a8fb9;
                    const _0x5a91ce = [null, undefined, []];

                    const _0x4f3923 = _0x3771ed[_0x4ccd9d(0x9a)](_0x5a91ce, noop);

                    const _0x1cc8d8 = _0x3771ed[_0x4ccd9d(0x9a)](_0x5a91ce, function (_0x3d03e3) {
                        const _0x2dbd27 = _0x4ccd9d;

                        return _0x1dc204[_0x2dbd27(0xa3)](_0x5b3fe2, _0x3d03e3, 1);
                    });

                    _0x1384ed.deepStrictEqual(_0x1cc8d8, _0x4f3923);
                });
                continue;
            case '4':
                it(_0x3f88af[_0x3a8fb9(0xaa)], function () {
                    const _0x1c76b1 = _0x3a8fb9;
                    const _0x444ec6 = [1, 2];
                    const _0x5541cf = [Infinity, _0x444ec6[_0x1c76b1(0x9c)]];

                    const _0x37edcd = _0x3771ed[_0x1c76b1(0x9a)](_0x5541cf, noop);

                    _0x444ec6[-1] = 3;

                    const _0x595eaa = _0x3771ed[_0x1c76b1(0x9a)](_0x5541cf, function (_0x1ecbe8) {
                        const _0x52c454 = _0x1c76b1;

                        return _0x1dc204[_0x52c454(0xab)](_0x5b3fe2, _0x444ec6, _0x1ecbe8);
                    });

                    _0x1384ed.deepStrictEqual(_0x595eaa, _0x37edcd);
                });
                continue;
            case '5':
                it(_0x3f88af[_0x3a8fb9(0xac)], function () {
                    const _0x25af42 = _0x3a8fb9;
                    const _0x2b2a43 = {
                        'ohNYG': function (_0x2cc5ed, _0x5dddb9, _0x56e924) {
                            const _0x365dbe = _0x1358;

                            return _0x1dc204[_0x365dbe(0x9d)](_0x2cc5ed, _0x5dddb9, _0x56e924);
                        }
                    };

                    const _0x23cd5f = _0x3771ed[_0x25af42(0x9a)](_0x27003b, function (_0x4ec151, _0x120dad) {
                        const _0x1e3179 = _0x25af42;

                        return _0x2b2a43[_0x1e3179(0xad)](_0x5b3fe2, _0x27003b, _0x120dad);
                    });

                    _0x1384ed[_0x25af42(0xa1)](_0x23cd5f, _0x27003b);
                });
                continue;
            case '6':
                const _0x27003b = ['a', 'b', 'c', 'd'];

                continue;
        }
        break;
    }
});
