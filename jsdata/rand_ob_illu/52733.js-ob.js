'use strict';

const _0x564a = ['48803iXUPCz', '172367gXGbbB', '1bsMyWX', '1iZCGbS', '1361837EjTHCZ', './exception', 'kind', 'resolve', 'construct', 'instanceOf', 'predicate', 'represent', 'defaultStyle', 'mapping', 'mmrzf', 'forEach', '5|11|6|9|3|1|7|10|2|4|0|12|8', '" YAML type.', 'Unknown kind "', 'Uqpvo', 'split', 'KfAUQ', 'ajubs', 'zbCkn', 'NpEiF', 'LiRAe', 'PQMIK', 'indexOf', 'Qgdvb', 'DPOnJ', 'JFMnd', 'aUxAe', 'PHcmL', 'rZqPa', 'kdglX', 'ZtVhx', 'kXRZA', 'tag', 'cQJpi', 'xNzim', 'styleAliases', 'tUoDc', '89780gEwGyv', '1068394DIVQUJ', '1723082uFVsgH', '758417ZsVPIq'];
const _0x42e6df = _0x524a;

(function (_0x1328a9, _0x4fbd40) {
    const _0x1e5e32 = _0x524a;

    while (true) {
        try {
            const _0xdf0520 = parseInt(_0x1e5e32(0x1a4)) + parseInt(_0x1e5e32(0x1a5)) + parseInt(_0x1e5e32(0x1a6)) + -parseInt(_0x1e5e32(0x1a7)) + -parseInt(_0x1e5e32(0x1a8)) + -parseInt(_0x1e5e32(0x1a9)) * -parseInt(_0x1e5e32(0x1aa)) + -parseInt(_0x1e5e32(0x1ab)) * parseInt(_0x1e5e32(0x1ac));

            if (_0xdf0520 === _0x4fbd40) break;else _0x1328a9.push(_0x1328a9.shift());
        } catch (_0x4ffccb) {
            _0x1328a9.push(_0x1328a9.shift());
        }
    }
})(_0x564a, 884566);
function _0x524a(_0x4287f3, _0x571568) {
    return _0x524a = function (_0x1ad6a5, _0x253871) {
        _0x1ad6a5 = _0x1ad6a5 - 420;
        const _0x3b07ef = _0x564a[_0x1ad6a5];

        return _0x3b07ef;
    }, _0x524a(_0x4287f3, _0x571568);
}

const YAMLException = require(_0x42e6df(0x1ad));

const TYPE_CONSTRUCTOR_OPTIONS = [_0x42e6df(0x1ae), _0x42e6df(0x1af), _0x42e6df(0x1b0), _0x42e6df(0x1b1), _0x42e6df(0x1b2), _0x42e6df(0x1b3), _0x42e6df(0x1b4), 'styleAliases'];
const YAML_NODE_KINDS = ['scalar', 'sequence', _0x42e6df(0x1b5)];

function compileStyleAliases(_0x3f0e9c) {
    const _0x23eb48 = _0x42e6df;
    const _0xdbe099 = {
        'mmrzf': function (_0x3189f0, _0x2ab419) {
            return _0x3189f0 !== _0x2ab419;
        }
    };
    const _0x360395 = {};

    return _0xdbe099[_0x23eb48(0x1b6)](_0x3f0e9c, null) && Object.keys(_0x3f0e9c).forEach(function (_0x19fb9c) {
        const _0x3f5de3 = _0x23eb48;

        _0x3f0e9c[_0x19fb9c][_0x3f5de3(0x1b7)](function (_0x253210) {
            _0x360395[String(_0x253210)] = _0x19fb9c;
        });
    }), _0x360395;
}
function Type(_0x1bc2ed, _0x166424) {
    const _0x59f661 = _0x42e6df;
    const _0x57dec0 = {
        'Uqpvo': _0x59f661(0x1b8),
        'ouMKj': 'defaultStyle',
        'KfAUQ': 'resolve',
        'ajubs': _0x59f661(0x1b2),
        'fHHRa': _0x59f661(0x1ae),
        'IbcHN': function (_0x263e62, _0x13897b) {
            return _0x263e62 + _0x13897b;
        },
        'zbCkn': 'Unknown option "',
        'NpEiF': '" is met in definition of "',
        'LiRAe': _0x59f661(0x1b9),
        'PHcmL': function (_0x13ad45, _0xefdbbe) {
            return _0x13ad45 === _0xefdbbe;
        },
        'rZqPa': function (_0x4f34a1, _0x4a74a) {
            return _0x4f34a1 + _0x4a74a;
        },
        'GTNql': function (_0x14686a, _0x373aa0) {
            return _0x14686a + _0x373aa0;
        },
        'kdglX': function (_0x489c59, _0x25a4d8) {
            return _0x489c59 + _0x25a4d8;
        },
        'ZtVhx': _0x59f661(0x1ba),
        'kXRZA': '" is specified for "',
        'cQJpi': _0x59f661(0x1b1),
        'xNzim': function (_0x5b8357, _0x1bdda9) {
            return _0x5b8357 || _0x1bdda9;
        },
        'tUoDc': function (_0x598599, _0x3bb9b1) {
            return _0x598599(_0x3bb9b1);
        }
    };

    const _0x58e0de = _0x57dec0[_0x59f661(0x1bb)][_0x59f661(0x1bc)]('|');

    var _0x2782f7 = 0;

    while (true) {
        switch (_0x58e0de[_0x2782f7++]) {
            case '0':
                this['defaultStyle'] = _0x166424[_0x57dec0.ouMKj] || null;
                continue;
            case '1':
                this['resolve'] = _0x166424[_0x57dec0[_0x59f661(0x1bd)]] || function () {
                    return true;
                };
                continue;
            case '2':
                this[_0x59f661(0x1b2)] = _0x166424[_0x57dec0[_0x59f661(0x1be)]] || null;
                continue;
            case '3':
                this['kind'] = _0x166424[_0x57dec0.fHHRa] || null;
                continue;
            case '4':
                this[_0x59f661(0x1b3)] = _0x166424.represent || null;
                continue;
            case '5':
                const _0x30fec2 = {
                    'PQMIK': function (_0x100465, _0x957941) {
                        return _0x100465 === _0x957941;
                    },
                    'Qgdvb': function (_0x2f6f8a, _0x1551b6) {
                        return _0x57dec0.IbcHN(_0x2f6f8a, _0x1551b6);
                    },
                    'DPOnJ': _0x57dec0[_0x59f661(0x1bf)],
                    'JFMnd': _0x57dec0[_0x59f661(0x1c0)],
                    'aUxAe': _0x57dec0[_0x59f661(0x1c1)]
                };

                continue;
            case '6':
                Object.keys(_0x166424)[_0x59f661(0x1b7)](function (_0x5c2ade) {
                    const _0x12ab5c = _0x59f661;

                    if (_0x30fec2[_0x12ab5c(0x1c2)](TYPE_CONSTRUCTOR_OPTIONS[_0x12ab5c(0x1c3)](_0x5c2ade), -1)) throw new YAMLException(_0x30fec2.Qgdvb(_0x30fec2[_0x12ab5c(0x1c4)](_0x30fec2[_0x12ab5c(0x1c4)](_0x30fec2[_0x12ab5c(0x1c5)], _0x5c2ade), _0x30fec2[_0x12ab5c(0x1c6)]) + _0x1bc2ed, _0x30fec2[_0x12ab5c(0x1c7)]));
                });
                continue;
            case '7':
                this[_0x59f661(0x1b0)] = _0x166424[_0x59f661(0x1b0)] || function (_0x5c5d08) {
                    return _0x5c5d08;
                };
                continue;
            case '8':
                if (_0x57dec0[_0x59f661(0x1c8)](YAML_NODE_KINDS[_0x59f661(0x1c3)](this[_0x59f661(0x1ae)]), -1)) throw new YAMLException(_0x57dec0[_0x59f661(0x1c9)](_0x57dec0[_0x59f661(0x1c9)](_0x57dec0.GTNql(_0x57dec0[_0x59f661(0x1ca)](_0x57dec0[_0x59f661(0x1cb)], this[_0x59f661(0x1ae)]), _0x57dec0[_0x59f661(0x1cc)]), _0x1bc2ed), _0x57dec0[_0x59f661(0x1c1)]));
                continue;
            case '9':
                this[_0x59f661(0x1cd)] = _0x1bc2ed;
                continue;
            case '10':
                this[_0x59f661(0x1b1)] = _0x166424[_0x57dec0[_0x59f661(0x1ce)]] || null;
                continue;
            case '11':
                _0x166424 = _0x57dec0[_0x59f661(0x1cf)](_0x166424, {});
                continue;
            case '12':
                this[_0x59f661(0x1d0)] = _0x57dec0[_0x59f661(0x1d1)](compileStyleAliases, _0x166424[_0x59f661(0x1d0)] || null);
                continue;
        }
        break;
    }
}
module['exports'] = Type;
