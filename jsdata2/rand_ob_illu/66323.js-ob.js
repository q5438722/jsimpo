'use strict';

const _0x1123 = ['lzrhz', 'edgesOut', 'from', 'map', 'target', 'size', 'package', 'lNdXZ', 'version', 'xsSoy', 'reduce', 'dependencies', 'gNqyr', 'name', 'qlKQz', 'ZKOKs', 'path', 'loadActual', 'exports', '158568eZjXwZ', '304720KPgevA', '19371iNjESI', '7WPlaem', '10709KJEfnO', '39ProcnB', '275490SBjteI', '25TRwQqP', '3110mXGTvt', '68703jrmzlo', '5zaUjBt', 'url', '@npmcli/arborist', 'concat', 'isArray', '3|2|0|4|1', 'http:', 'QzbGz', 'BqSLe', 'host', 'every', 'Siwfs', 'SjaWK', 'wJFXv', 'protocol', 'XspJW', 'create', 'YMgis', 'VrnQd', 'vjGeZ', 'workspaces', 'length', 'workspaceDependencySet', 'wFpPI', 'has', 'add', 'assign', 'uUNdn', 'keys', 'funding', 'hLWGV'];
const _0x50dce6 = _0x354f;

(function (_0x3355e5, _0x841a4c) {
    const _0x46b199 = _0x354f;

    while (true) {
        try {
            const _0x276632 = -parseInt(_0x46b199(0x133)) + -parseInt(_0x46b199(0x134)) + parseInt(_0x46b199(0x135)) * parseInt(_0x46b199(0x136)) + parseInt(_0x46b199(0x137)) * parseInt(_0x46b199(0x138)) + -parseInt(_0x46b199(0x139)) + -parseInt(_0x46b199(0x13a)) * -parseInt(_0x46b199(0x13b)) + -parseInt(_0x46b199(0x13c)) * -parseInt(_0x46b199(0x13d));

            if (_0x276632 === _0x841a4c) break;else _0x3355e5.push(_0x3355e5.shift());
        } catch (_0x461304) {
            _0x3355e5.push(_0x3355e5.shift());
        }
    }
})(_0x1123, 235735);

const URL = require(_0x50dce6(0x13e)).URL;

const Arborist = require(_0x50dce6(0x13f));

function normalizeFunding(_0x48d231) {
    const _0x41af2f = _0x50dce6;

    const _0x622020 = _0x50a3ab => typeof _0x50a3ab === 'string' ? { 'url': _0x50a3ab } : _0x50a3ab;

    const _0x683bfd = [][_0x41af2f(0x140)](_0x48d231 || []).map(_0x622020);

    return Array[_0x41af2f(0x141)](_0x48d231) ? _0x683bfd : _0x683bfd[0];
}
function isValidFunding(_0x4b4b1b) {
    const _0x190f76 = _0x50dce6;
    const _0x43bea1 = {
        'QzbGz': _0x190f76(0x142),
        'BqSLe': function (_0x1a4859, _0x2ebd1f) {
            return _0x1a4859(_0x2ebd1f);
        },
        'Siwfs': function (_0x16bc70, _0x535f7f) {
            return _0x16bc70 !== _0x535f7f;
        },
        'SjaWK': 'https:',
        'wJFXv': function (_0x48b72a, _0x29b646) {
            return _0x48b72a !== _0x29b646;
        },
        'XspJW': _0x190f76(0x143)
    };

    const _0x189649 = _0x43bea1[_0x190f76(0x144)].split('|');

    var _0x2677a7 = 0;

    while (true) {
        switch (_0x189649[_0x2677a7++]) {
            case '0':
                try {
                    const _0x111e70 = new URL(_0x4b4b1b[_0x190f76(0x13e)] || _0x4b4b1b);
                } catch (_0xd2328c) {
                    return false;
                }
                continue;
            case '1':
                return _0x43bea1[_0x190f76(0x145)](Boolean, _0x111e70[_0x190f76(0x146)]);
            case '2':
                if (Array[_0x190f76(0x141)](_0x4b4b1b)) return _0x4b4b1b[_0x190f76(0x147)](_0x4ef577 => !Array[_0x190f76(0x141)](_0x4ef577) && isValidFunding(_0x4ef577));
                continue;
            case '3':
                if (!_0x4b4b1b) return false;
                continue;
            case '4':
                if (_0x43bea1[_0x190f76(0x148)](_0x111e70.protocol, _0x43bea1[_0x190f76(0x149)]) && _0x43bea1[_0x190f76(0x14a)](_0x111e70[_0x190f76(0x14b)], _0x43bea1[_0x190f76(0x14c)])) return false;
                continue;
        }
        break;
    }
}
function _0x354f(_0x32392b, _0x464f45) {
    return _0x354f = function (_0x22005d, _0x5f0ac3) {
        _0x22005d = _0x22005d - 307;
        const _0x2b97fb = _0x1123[_0x22005d];

        return _0x2b97fb;
    }, _0x354f(_0x32392b, _0x464f45);
}

const empty = () => Object[_0x50dce6(0x14d)](null);

function readTree(_0x4467f7, _0x5aa42e) {
    const _0x4b95ae = _0x50dce6;
    const _0x4b0393 = {
        'nJSTr': function (_0x30e74a, _0x48d4f5) {
            return _0x30e74a + _0x48d4f5;
        },
        'wFpPI': function (_0x24559d, _0x3fb048) {
            return _0x24559d(_0x3fb048);
        },
        'PcZoT': function (_0x442b80, _0x19783b) {
            return _0x442b80(_0x19783b);
        },
        'uUNdn': function (_0x23acff) {
            return _0x23acff();
        },
        'hLWGV': function (_0x5fd4ae, _0x87d42d) {
            return _0x5fd4ae > _0x87d42d;
        },
        'EotTI': function (_0x1af853, _0x2d3700, _0x468158) {
            return _0x1af853(_0x2d3700, _0x468158);
        },
        'lNdXZ': function (_0x4006b1) {
            return _0x4006b1();
        },
        'xsSoy': function (_0x3eff76, _0x5f1845, _0x37a927) {
            return _0x3eff76(_0x5f1845, _0x37a927);
        },
        'VrnQd': function (_0x28ed72, _0x196b56) {
            return _0x28ed72(_0x196b56);
        },
        'lzrhz': function (_0x33c326) {
            return _0x33c326();
        },
        'YMgis': function (_0x1fc824, _0x506ed8) {
            return _0x1fc824 || _0x506ed8;
        },
        'vjGeZ': 'trailingDependencies',
        'ZKOKs': function (_0xdb0e62, _0x1915f2) {
            return _0xdb0e62(_0x1915f2);
        },
        'uWpZD': function (_0x84cb81, _0x334935) {
            return _0x84cb81(_0x334935);
        }
    };
    var _0x571720 = 0;

    const _0x2f232a = new Set();

    var { countOnly: _0x2eb81c } = _0x4b0393[_0x4b95ae(0x14e)](_0x5aa42e, {});

    const _0x41402d = _0x4b0393[_0x4b95ae(0x14f)](Symbol, _0x4b0393[_0x4b95ae(0x150)]);

    var _0x3f2f5d;

    if (_0x5aa42e && _0x5aa42e[_0x4b95ae(0x151)] && _0x5aa42e.workspaces[_0x4b95ae(0x152)]) {
        const _0x3910be = new Arborist(_0x5aa42e);

        _0x3f2f5d = _0x3910be[_0x4b95ae(0x153)](_0x4467f7, _0x5aa42e[_0x4b95ae(0x151)]);
    }
    function _0x436695(_0x255bf9, _0x3e06cc) {
        const _0x43595c = _0x4b95ae;

        const _0x3e9e9c = _0x4b0393.nJSTr(_0x4b0393[_0x43595c(0x154)](String, _0x255bf9), _0x4b0393.PcZoT(String, _0x3e06cc));

        if (_0x2f232a[_0x43595c(0x155)](_0x3e9e9c)) return true;
        _0x2f232a[_0x43595c(0x156)](_0x3e9e9c);
    }
    function _0x22422e(_0x338fa7) {
        const _0x57db99 = _0x4b95ae;
        const _0x576507 = _0x338fa7[_0x41402d];

        if (_0x576507) return Object[_0x57db99(0x157)](_0x4b0393[_0x57db99(0x158)](empty), _0x338fa7, _0x576507);
        return _0x338fa7;
    }
    function _0x10c33b(_0x207c35) {
        const _0x320a12 = _0x4b95ae;

        return _0x207c35 && (Object[_0x320a12(0x159)](_0x207c35)[_0x320a12(0x152)] || _0x207c35[_0x41402d]);
    }
    function _0x38562e(_0x4db83f, _0x38f1e7) {
        const _0x2f7b51 = _0x4b95ae;

        _0x38f1e7 && isValidFunding(_0x38f1e7) && (_0x4db83f[_0x2f7b51(0x15a)] = _0x4b0393.PcZoT(normalizeFunding, _0x38f1e7), _0x571720++);
    }
    function _0x1e0a1b(_0x325788) {
        const _0x1a99ae = _0x4b95ae;
        const _0xbbe3cf = {
            'auOOM': function (_0x28042c, _0xc6b85d) {
                const _0x37e8d4 = _0x354f;

                return _0x4b0393[_0x37e8d4(0x15b)](_0x28042c, _0xc6b85d);
            },
            'sTOXP': function (_0xa8f5f3, _0x36c466) {
                const _0x446b2b = _0x354f;

                return _0x4b0393[_0x446b2b(0x14f)](_0xa8f5f3, _0x36c466);
            },
            'gNqyr': function (_0x340fbb, _0x4542c4) {
                const _0x2646e9 = _0x354f;

                return _0x4b0393[_0x2646e9(0x14f)](_0x340fbb, _0x4542c4);
            },
            'qlKQz': function (_0x57883f) {
                const _0x1ef536 = _0x354f;

                return _0x4b0393[_0x1ef536(0x15c)](_0x57883f);
            }
        };

        const _0x10fe0e = _0x325788 && _0x325788[_0x1a99ae(0x15d)] && _0x325788[_0x1a99ae(0x15d)].values();

        if (!_0x10fe0e) return _0x4b0393[_0x1a99ae(0x15c)](empty);

        const _0x82fed = Array[_0x1a99ae(0x15e)](_0x10fe0e)[_0x1a99ae(0x15f)](_0x167454 => {
            const _0x550db4 = _0x1a99ae;

            if (!_0x167454 || !_0x167454.to) return _0x4b0393[_0x550db4(0x158)](empty);

            const _0x4a2832 = _0x167454.to[_0x550db4(0x160)] || _0x167454.to;

            if (!_0x4a2832.package) return _0x4b0393[_0x550db4(0x158)](empty);
            if (_0x3f2f5d && _0x4b0393.hLWGV(_0x3f2f5d[_0x550db4(0x161)], 0) && !_0x3f2f5d[_0x550db4(0x155)](_0x4a2832)) return _0x4b0393[_0x550db4(0x158)](empty);

            var {
                name: _0x1e7670,
                funding: _0x40a22a,
                version: _0x1b3bb7
            } = _0x4a2832[_0x550db4(0x162)];

            if (_0x4b0393.EotTI(_0x436695, _0x1e7670, _0x1b3bb7)) return _0x4b0393[_0x550db4(0x163)](empty);
            const _0x430ad5 = {};

            if (_0x1b3bb7) _0x430ad5[_0x550db4(0x164)] = _0x1b3bb7;
            return _0x4b0393[_0x550db4(0x165)](_0x38562e, _0x430ad5, _0x40a22a), {
                'node': _0x4a2832,
                'fundingItem': _0x430ad5
            };
        });

        return _0x82fed[_0x1a99ae(0x166)]((_0x492f02, {
            node: _0x394911,
            fundingItem: _0x5a66f6
        }, _0x3f089b) => {
            const _0x24542d = _0x1a99ae;

            if (!_0x5a66f6 || _0x5a66f6[_0x24542d(0x152)] === 0 || !_0x394911) return _0x492f02;

            const _0x1842dc = _0x394911[_0x24542d(0x15d)] && _0xbbe3cf.auOOM(_0x394911[_0x24542d(0x15d)][_0x24542d(0x161)], 0) && _0x1e0a1b(_0x394911);

            if (_0x2eb81c) return null;
            _0xbbe3cf.sTOXP(_0x10c33b, _0x1842dc) && (_0x5a66f6[_0x24542d(0x167)] = _0x22422e(_0x1842dc));
            if (_0xbbe3cf[_0x24542d(0x168)](isValidFunding, _0x5a66f6[_0x24542d(0x15a)])) _0x492f02[_0x394911[_0x24542d(0x162)][_0x24542d(0x169)]] = _0x5a66f6;else _0x10c33b(_0x5a66f6.dependencies) && (_0x492f02[_0x41402d] = Object.assign(_0xbbe3cf[_0x24542d(0x16a)](empty), _0x492f02[_0x41402d], _0x5a66f6[_0x24542d(0x167)]));
            return _0x492f02;
        }, _0x2eb81c ? null : _0x4b0393.lzrhz(empty));
    }

    const _0xe1405a = _0x4b0393[_0x4b95ae(0x16b)](_0x1e0a1b, _0x4467f7);

    const _0x4f9772 = { 'length': _0x571720 };

    if (!_0x2eb81c) {
        const _0x48d94e = _0x4467f7 && _0x4467f7[_0x4b95ae(0x162)] && _0x4467f7[_0x4b95ae(0x162)].name || _0x4467f7 && _0x4467f7[_0x4b95ae(0x169)];

        _0x4f9772[_0x4b95ae(0x169)] = _0x48d94e || _0x4467f7 && _0x4467f7[_0x4b95ae(0x16c)];
        if (_0x4467f7 && _0x4467f7[_0x4b95ae(0x162)] && _0x4467f7[_0x4b95ae(0x162)][_0x4b95ae(0x164)]) _0x4f9772[_0x4b95ae(0x164)] = _0x4467f7[_0x4b95ae(0x162)][_0x4b95ae(0x164)];
        if (_0x4467f7 && _0x4467f7[_0x4b95ae(0x162)] && _0x4467f7[_0x4b95ae(0x162)][_0x4b95ae(0x15a)]) _0x4f9772[_0x4b95ae(0x15a)] = _0x4b0393[_0x4b95ae(0x16b)](normalizeFunding, _0x4467f7[_0x4b95ae(0x162)].funding);
        _0x4f9772[_0x4b95ae(0x167)] = _0x4b0393.uWpZD(_0x22422e, _0xe1405a);
    }
    return _0x4f9772;
}
async function read(_0x293f14) {
    const _0x263075 = _0x50dce6;
    const _0x5ae0a7 = {
        'rQnBO': function (_0x584105, _0x1bffd5, _0x433d17) {
            return _0x584105(_0x1bffd5, _0x433d17);
        }
    };

    const _0xb6b812 = new Arborist(_0x293f14);

    const _0x4435e5 = await _0xb6b812[_0x263075(0x16d)](_0x293f14);

    return _0x5ae0a7.rQnBO(readTree, _0x4435e5, _0x293f14);
}
module[_0x50dce6(0x16e)] = {
    'read': read,
    'readTree': readTree,
    'normalizeFunding': normalizeFunding,
    'isValidFunding': isValidFunding
};
