'use strict';
const _0x22e7 = [
    'No\x20matching\x20version\x20found\x20for\x20',
    'Could\x20not\x20download\x20',
    'HCpWu',
    'type',
    'cHOtJ',
    '17741UbjiGE',
    '3UihhnZ',
    '260562JtHLUo',
    '638362aVVHAN',
    '220738jrClSN',
    '706111xzVxEe',
    '812945XXxujp',
    '206208iiKpUm',
    'npm-install-checks',
    'npm-normalize-package-bin',
    'cCyYj',
    'parse',
    'satisfies',
    'latest',
    'ETARGET',
    'dist-tags',
    'tag',
    'ENOVERSIONS',
    'hcgYP',
    'version',
    'zdInV',
    '_shouldAvoid',
    'JSlUj',
    'btbFU',
    'assign',
    'No\x20avoidable\x20versions\x20for\x20',
    'kXYUS',
    'keys',
    'stagedVersions',
    'versions',
    'policyRestrictions',
    'yROFu',
    'resolve',
    'ivCwq',
    'kAfVc',
    'ldfff',
    'LlIMw',
    'YwXfX',
    'kahou',
    'range',
    'Only\x20tag,\x20version,\x20and\x20range\x20are\x20supported',
    'HAIbr',
    'clean',
    'MbPgA',
    'jOTRh',
    'AgLRH',
    'concat',
    'entries',
    'filter',
    'length',
    'No\x20versions\x20available\x20for\x20',
    'oqTjw',
    'sMstT',
    'deprecated',
    'CgNtR',
    'nWtbx',
    'pWLIH',
    'auhpr',
    'slaNn',
    'rcompare',
    'exports',
    'oAltr',
    'CpwFV',
    'toLocaleString',
    'XvEwu',
    'message'
];
const _0x108565 = _0x3d8c;
(function (_0x2d9eda, _0x1fb998) {
    const _0x464f79 = _0x3d8c;
    while (!![]) {
        try {
            const _0x45acb1 = -parseInt(_0x464f79(0xad)) * parseInt(_0x464f79(0xae)) + -parseInt(_0x464f79(0xaf)) + parseInt(_0x464f79(0xb0)) + parseInt(_0x464f79(0xb1)) + -parseInt(_0x464f79(0xb2)) + parseInt(_0x464f79(0xb3)) + -parseInt(_0x464f79(0xb4));
            if (_0x45acb1 === _0x1fb998)
                break;
            else
                _0x2d9eda['push'](_0x2d9eda['shift']());
        } catch (_0x5e20cc) {
            _0x2d9eda['push'](_0x2d9eda['shift']());
        }
    }
}(_0x22e7, -0x3 * -0x48851 + -0x1a2 * -0x5b7 + 0x80fe6 * -0x2));
const npa = require('npm-package-arg'), semver = require('semver'), {checkEngine} = require(_0x108565(0xb5)), normalizeBin = require(_0x108565(0xb6)), engineOk = (_0x918c5d, _0x30bc3c, _0x18f99d) => {
        const _0x355c1e = _0x108565, _0x2656e4 = {
                'cCyYj': function (_0x4a8d23, _0x1c1be1, _0x5b92e6, _0x337665) {
                    return _0x4a8d23(_0x1c1be1, _0x5b92e6, _0x337665);
                }
            };
        try {
            return _0x2656e4[_0x355c1e(0xb7)](checkEngine, _0x918c5d, _0x30bc3c, _0x18f99d), !![];
        } catch (_0x323a5f) {
            return ![];
        }
    }, isBefore = (_0x28c88f, _0x57ad13, _0x3fb77f) => !_0x28c88f || !_0x28c88f[_0x57ad13] || Date[_0x108565(0xb8)](_0x28c88f[_0x57ad13]) <= _0x3fb77f, avoidSemverOpt = {
        'includePrerelease': !![],
        'loose': !![]
    }, shouldAvoid = (_0x2ac9ba, _0x45a6ff) => _0x45a6ff && semver[_0x108565(0xb9)](_0x2ac9ba, _0x45a6ff, avoidSemverOpt), decorateAvoid = (_0x3c566a, _0x41c738) => _0x3c566a && shouldAvoid(_0x3c566a['version'], _0x41c738) ? {
        ..._0x3c566a,
        '_shouldAvoid': !![]
    } : _0x3c566a, pickManifest = (_0x195320, _0x119c1e, _0x182bb8) => {
        const _0x24683b = _0x108565, _0x560236 = {
                'sMstT': function (_0xd776a2, _0x53af66, _0x3b1586) {
                    return _0xd776a2(_0x53af66, _0x3b1586);
                },
                'HAIbr': function (_0x2fb8ef, _0x335e43, _0x4b0f90) {
                    return _0x2fb8ef(_0x335e43, _0x4b0f90);
                },
                'CgNtR': function (_0x323b04, _0x5d4e66, _0x26c2ff, _0x50dbfc) {
                    return _0x323b04(_0x5d4e66, _0x26c2ff, _0x50dbfc);
                },
                'nWtbx': function (_0x811650, _0x20a2e2) {
                    return _0x811650 - _0x20a2e2;
                },
                'pWLIH': function (_0x273120, _0x1f58ec) {
                    return _0x273120 - _0x1f58ec;
                },
                'auhpr': function (_0x41e3f3, _0x11a0c4) {
                    return _0x41e3f3 - _0x11a0c4;
                },
                'slaNn': function (_0x40f282, _0x254e3d) {
                    return _0x40f282 && _0x254e3d;
                },
                'yROFu': function (_0x3a9ce4, _0x3c822d) {
                    return _0x3a9ce4 && _0x3c822d;
                },
                'hcgYP': _0x24683b(0xba),
                'zdInV': function (_0x2f2572, _0x4233fa, _0xc4fe48, _0x5cc91b) {
                    return _0x2f2572(_0x4233fa, _0xc4fe48, _0x5cc91b);
                },
                'JSlUj': function (_0x28089c, _0x4f4222, _0x4b2b8b, _0x50dc09) {
                    return _0x28089c(_0x4f4222, _0x4b2b8b, _0x50dc09);
                },
                'btbFU': function (_0x18b78e, _0x2878c4, _0x476c82, _0x2c2153) {
                    return _0x18b78e(_0x2878c4, _0x476c82, _0x2c2153);
                },
                'kXYUS': _0x24683b(0xbb),
                'ivCwq': function (_0x422d81, _0x396dee) {
                    return _0x422d81 || _0x396dee;
                },
                'kAfVc': _0x24683b(0xbc),
                'ldfff': function (_0x41900a, _0x310d9f) {
                    return _0x41900a !== _0x310d9f;
                },
                'LlIMw': _0x24683b(0xbd),
                'YwXfX': 'version',
                'kahou': function (_0x21cbfd, _0x33524d) {
                    return _0x21cbfd !== _0x33524d;
                },
                'jOTRh': function (_0x36a3fc, _0x25e28d) {
                    return _0x36a3fc === _0x25e28d;
                },
                'MbPgA': function (_0x1891b9, _0x3ad666, _0x1af7b0, _0x180c71) {
                    return _0x1891b9(_0x3ad666, _0x1af7b0, _0x180c71);
                },
                'AgLRH': function (_0x13508f, _0x57cb99, _0x31247e) {
                    return _0x13508f(_0x57cb99, _0x31247e);
                },
                'oqTjw': _0x24683b(0xbe),
                'WEXjR': function (_0x29cbe9, _0x4eb6b4, _0x5d8c83) {
                    return _0x29cbe9(_0x4eb6b4, _0x5d8c83);
                }
            }, {
                defaultTag: defaultTag = _0x560236[_0x24683b(0xbf)],
                before: before = null,
                nodeVersion: nodeVersion = process[_0x24683b(0xc0)],
                npmVersion: npmVersion = null,
                includeStaged: includeStaged = ![],
                avoid: avoid = null,
                avoidStrict: avoidStrict = ![]
            } = _0x182bb8, {
                name: _0x1cdcfe,
                time: _0x312f40
            } = _0x195320, _0x579df1 = _0x195320['versions'] || {};
        if (avoidStrict) {
            const _0x330e3f = {
                    ..._0x182bb8,
                    'avoidStrict': ![]
                }, _0x142ab0 = _0x560236[_0x24683b(0xc1)](pickManifest, _0x195320, _0x119c1e, _0x330e3f);
            if (!_0x142ab0 || !_0x142ab0[_0x24683b(0xc2)])
                return _0x142ab0;
            const _0x1f9c33 = _0x560236[_0x24683b(0xc3)](pickManifest, _0x195320, '^' + _0x142ab0[_0x24683b(0xc0)], _0x330e3f);
            if (!_0x1f9c33 || !_0x1f9c33[_0x24683b(0xc2)])
                return {
                    ..._0x1f9c33,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': ![]
                };
            const _0x422de7 = _0x560236[_0x24683b(0xc4)](pickManifest, _0x195320, '*', _0x330e3f);
            if (!_0x422de7 || !_0x422de7[_0x24683b(0xc2)])
                return {
                    ..._0x422de7,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': !![]
                };
            throw Object[_0x24683b(0xc5)](new Error(_0x24683b(0xc6) + _0x1cdcfe), {
                'code': _0x560236[_0x24683b(0xc7)],
                'name': _0x1cdcfe,
                'wanted': _0x119c1e,
                'avoid': avoid,
                'before': before,
                'versions': Object[_0x24683b(0xc8)](_0x579df1)
            });
        }
        const _0x49305d = includeStaged && _0x195320[_0x24683b(0xc9)] && _0x195320['stagedVersions'][_0x24683b(0xca)] || {}, _0x1570f2 = _0x195320['policyRestrictions'] && _0x195320[_0x24683b(0xcb)]['versions'] || {}, _0x322500 = _0x560236[_0x24683b(0xcc)](before, _0x312f40) ? +new Date(before) : Infinity, _0x12c4f3 = npa[_0x24683b(0xcd)](_0x1cdcfe, _0x560236[_0x24683b(0xce)](_0x119c1e, defaultTag)), _0x883c31 = _0x12c4f3['type'], _0x100c46 = _0x195320[_0x560236[_0x24683b(0xcf)]] || {};
        if (_0x560236[_0x24683b(0xd0)](_0x883c31, _0x560236[_0x24683b(0xd1)]) && _0x883c31 !== _0x560236[_0x24683b(0xd2)] && _0x560236[_0x24683b(0xd3)](_0x883c31, _0x24683b(0xd4)))
            throw new Error(_0x24683b(0xd5));
        if (_0x119c1e && _0x883c31 === _0x560236[_0x24683b(0xd1)]) {
            const _0x450452 = _0x100c46[_0x119c1e];
            return isBefore(_0x312f40, _0x450452, _0x322500) ? _0x560236[_0x24683b(0xd6)](decorateAvoid, _0x579df1[_0x450452] || _0x49305d[_0x450452] || _0x1570f2[_0x450452], avoid) : _0x560236[_0x24683b(0xc4)](pickManifest, _0x195320, '<=' + _0x450452, _0x182bb8);
        }
        if (_0x119c1e && _0x560236['jOTRh'](_0x883c31, _0x24683b(0xc0))) {
            const _0x5a07b4 = semver[_0x24683b(0xd7)](_0x119c1e, { 'loose': !![] }), _0x14e10c = _0x579df1[_0x5a07b4] || _0x49305d[_0x5a07b4] || _0x1570f2[_0x5a07b4];
            return _0x560236[_0x24683b(0xd8)](isBefore, _0x312f40, _0x5a07b4, _0x322500) ? decorateAvoid(_0x14e10c, avoid) : null;
        }
        const _0x43926a = _0x883c31 === _0x24683b(0xd4) ? _0x119c1e : '*', _0x1d7e10 = _0x100c46[defaultTag];
        if (_0x1d7e10 && (_0x560236[_0x24683b(0xd9)](_0x43926a, '*') || semver[_0x24683b(0xb9)](_0x1d7e10, _0x43926a, { 'loose': !![] })) && !_0x560236[_0x24683b(0xda)](shouldAvoid, _0x1d7e10, avoid)) {
            const _0x2d04dd = _0x579df1[_0x1d7e10];
            if (_0x2d04dd && _0x560236['MbPgA'](isBefore, _0x312f40, _0x1d7e10, _0x322500))
                return _0x2d04dd;
        }
        const _0x5644e4 = Object['entries'](_0x579df1)[_0x24683b(0xdb)](Object[_0x24683b(0xdc)](_0x49305d))[_0x24683b(0xdb)](Object['entries'](_0x1570f2))[_0x24683b(0xdd)](([_0x334536, _0x3cb962]) => isBefore(_0x312f40, _0x334536, _0x322500));
        if (!_0x5644e4[_0x24683b(0xde)])
            throw Object[_0x24683b(0xc5)](new Error(_0x24683b(0xdf) + _0x1cdcfe), {
                'code': _0x560236[_0x24683b(0xe0)],
                'name': _0x1cdcfe,
                'type': _0x883c31,
                'wanted': _0x119c1e,
                'before': before,
                'versions': Object[_0x24683b(0xc8)](_0x579df1)
            });
        const _0x66940a = { 'loose': !![] }, _0x2cdba2 = _0x5644e4['filter'](([_0x2dc164, _0x1d234e]) => semver[_0x24683b(0xb9)](_0x2dc164, _0x43926a, { 'loose': !![] }))['sort']((_0x511be2, _0x22b3e5) => {
                const _0x1401e1 = _0x24683b, [_0x5ed3f7, _0x5d5f25] = _0x511be2, [_0x340b8d, _0x307212] = _0x22b3e5, _0x44fa9d = !_0x560236[_0x1401e1(0xe1)](shouldAvoid, _0x5ed3f7, avoid), _0x2d9b97 = !_0x560236[_0x1401e1(0xd6)](shouldAvoid, _0x340b8d, avoid), _0x3add4e = !_0x1570f2[_0x511be2], _0x468db5 = !_0x1570f2[_0x22b3e5], _0x1e78d4 = !_0x49305d[_0x511be2], _0xdcd275 = !_0x49305d[_0x22b3e5], _0x525e3a = !_0x5d5f25['deprecated'], _0x801860 = !_0x307212[_0x1401e1(0xe2)], _0x402226 = engineOk(_0x5d5f25, npmVersion, nodeVersion), _0xe3ce0a = _0x560236[_0x1401e1(0xe3)](engineOk, _0x307212, npmVersion, nodeVersion);
                return _0x560236[_0x1401e1(0xe4)](_0x2d9b97, _0x44fa9d) || _0x560236[_0x1401e1(0xe4)](_0x468db5, _0x3add4e) || _0x560236[_0x1401e1(0xe5)](_0xdcd275, _0x1e78d4) || _0x560236[_0x1401e1(0xe6)](_0x560236[_0x1401e1(0xe7)](_0x801860, _0xe3ce0a), _0x560236[_0x1401e1(0xcc)](_0x525e3a, _0x402226)) || _0xe3ce0a - _0x402226 || _0x560236[_0x1401e1(0xe6)](_0x801860, _0x525e3a) || semver[_0x1401e1(0xe8)](_0x5ed3f7, _0x340b8d, _0x66940a);
            });
        return _0x560236['WEXjR'](decorateAvoid, _0x2cdba2[0x322 * -0x4 + -0x153 * -0x1d + 0x25 * -0xb3] && _0x2cdba2[-0xf69 * -0x1 + -0x1 * -0x185b + -0x27c4 * 0x1][0x2264 * -0x1 + 0x174a + 0xb1b], avoid);
    };
function _0x3d8c(_0x372641, _0x33319a) {
    return _0x3d8c = function (_0x424239, _0x34196b) {
        _0x424239 = _0x424239 - (0x1e0e + 0x4 * -0x806 + 0x2b7);
        let _0x36342c = _0x22e7[_0x424239];
        return _0x36342c;
    }, _0x3d8c(_0x372641, _0x33319a);
}
module[_0x108565(0xe9)] = (_0x43fa56, _0x5cb709, _0x16656b = {}) => {
    const _0xea14b0 = _0x108565, _0x407555 = {
            'JNmYU': function (_0x4c4d19, _0x304202, _0x2de63a, _0x2e1666) {
                return _0x4c4d19(_0x304202, _0x2de63a, _0x2e1666);
            },
            'oAltr': function (_0x4c0555, _0x3e361b) {
                return _0x4c0555(_0x3e361b);
            },
            'CpwFV': 'latest',
            'XvEwu': function (_0x2b04de, _0x38e668) {
                return _0x2b04de + _0x38e668;
            },
            'VslHd': 'E403',
            'HCpWu': _0xea14b0(0xbb),
            'cHOtJ': _0xea14b0(0xbc)
        }, _0x361987 = _0x407555['JNmYU'](pickManifest, _0x43fa56, _0x5cb709, _0x16656b), _0x1ea786 = _0x361987 && _0x407555[_0xea14b0(0xea)](normalizeBin, _0x361987), _0x21c458 = _0x43fa56[_0xea14b0(0xcb)], _0x1164b4 = _0x21c458 && _0x21c458['versions'] || {};
    if (_0x1ea786 && !_0x1164b4[_0x1ea786[_0xea14b0(0xc0)]])
        return _0x1ea786;
    const {
            before: before = null,
            defaultTag: defaultTag = _0x407555[_0xea14b0(0xeb)]
        } = _0x16656b, _0x456c83 = before ? new Date(before)[_0xea14b0(0xec)]() : '', {name: _0x534c86} = _0x43fa56, _0x494ba8 = _0x407555[_0xea14b0(0xed)](_0x534c86 + '@' + _0x5cb709, before ? '\x20with\x20a\x20date\x20before\x20' + _0x456c83 : ''), _0x2c1026 = _0x1ea786 && !!_0x1164b4[_0x1ea786[_0xea14b0(0xc0)]], _0x33b064 = _0x2c1026 ? _0x21c458[_0xea14b0(0xee)] : '', _0x509857 = !_0x2c1026 ? _0xea14b0(0xef) + _0x494ba8 + '.' : _0xea14b0(0xf0) + _0x494ba8 + '\x20due\x20to\x20policy\x20violations:\x0a' + _0x33b064, _0x3f7a6b = _0x2c1026 ? _0x407555['VslHd'] : _0x407555[_0xea14b0(0xf1)];
    throw Object['assign'](new Error(_0x509857), {
        'code': _0x3f7a6b,
        'type': npa['resolve'](_0x43fa56['name'], _0x5cb709)[_0xea14b0(0xf2)],
        'wanted': _0x5cb709,
        'versions': Object[_0xea14b0(0xc8)](_0x43fa56[_0xea14b0(0xca)]),
        'name': _0x534c86,
        'distTags': _0x43fa56[_0x407555[_0xea14b0(0xf3)]],
        'defaultTag': defaultTag
    });
};
