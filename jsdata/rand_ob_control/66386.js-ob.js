'use strict';
const npa = require('npm-package-arg'), semver = require('semver'), {checkEngine} = require('npm-install-checks'), normalizeBin = require('npm-normalize-package-bin'), engineOk = (_0x377ba9, _0x5ca0db, _0x579dde) => {
        const _0x55a5f6 = {
            'NDuiQ': function (_0x4517e6, _0x5a389f, _0x1e1717, _0x299fcb) {
                return _0x4517e6(_0x5a389f, _0x1e1717, _0x299fcb);
            }
        };
        try {
            return _0x55a5f6['NDuiQ'](checkEngine, _0x377ba9, _0x5ca0db, _0x579dde), !![];
        } catch (_0x4f1374) {
            return ![];
        }
    }, isBefore = (_0x4e847f, _0x4b6e50, _0x2f82b6) => !_0x4e847f || !_0x4e847f[_0x4b6e50] || Date['parse'](_0x4e847f[_0x4b6e50]) <= _0x2f82b6, avoidSemverOpt = {
        'includePrerelease': !![],
        'loose': !![]
    }, shouldAvoid = (_0x5199c9, _0x1bd903) => _0x1bd903 && semver['satisfies'](_0x5199c9, _0x1bd903, avoidSemverOpt), decorateAvoid = (_0x23e348, _0x3b19c4) => _0x23e348 && shouldAvoid(_0x23e348['version'], _0x3b19c4) ? {
        ..._0x23e348,
        '_shouldAvoid': !![]
    } : _0x23e348, pickManifest = (_0xf0a0ca, _0x45f41d, _0x3c74cb) => {
        const _0x24ca1f = {
                'zlJcX': function (_0x167d2a, _0x314782, _0x3ba901) {
                    return _0x167d2a(_0x314782, _0x3ba901);
                },
                'XBedY': function (_0x2c49d4, _0x4c96d3, _0x35eb54, _0x5536bf) {
                    return _0x2c49d4(_0x4c96d3, _0x35eb54, _0x5536bf);
                },
                'msZNP': function (_0x18aa24, _0x440682) {
                    return _0x18aa24 - _0x440682;
                },
                'SyuZa': function (_0x7a8b71, _0x22655c) {
                    return _0x7a8b71 && _0x22655c;
                },
                'bJOXA': function (_0x4dc53b, _0x595ea2) {
                    return _0x4dc53b && _0x595ea2;
                },
                'QXKnu': 'latest',
                'JMrVu': function (_0x411240, _0x504355, _0x2560cf, _0x1487e3) {
                    return _0x411240(_0x504355, _0x2560cf, _0x1487e3);
                },
                'jDMox': function (_0x2569dd, _0x37912c, _0x5ead05, _0x19de74) {
                    return _0x2569dd(_0x37912c, _0x5ead05, _0x19de74);
                },
                'LCKgt': function (_0x394760, _0x5404fa, _0x18f3c9, _0x2c994d) {
                    return _0x394760(_0x5404fa, _0x18f3c9, _0x2c994d);
                },
                'pwwPL': 'ETARGET',
                'Epvcq': function (_0x3853ec, _0x1cb310) {
                    return _0x3853ec || _0x1cb310;
                },
                'ZxNPB': 'dist-tags',
                'wuwAx': function (_0x4ac51f, _0x313489) {
                    return _0x4ac51f !== _0x313489;
                },
                'mpiJr': 'tag',
                'Yojss': 'version',
                'jTNOX': 'range',
                'lQMDg': 'Only\x20tag,\x20version,\x20and\x20range\x20are\x20supported',
                'AvxmY': function (_0x21a39a, _0x364a00) {
                    return _0x21a39a === _0x364a00;
                },
                'MSdNr': function (_0x112273, _0x327d04, _0x29fddc, _0x531757) {
                    return _0x112273(_0x327d04, _0x29fddc, _0x531757);
                },
                'GCDLG': function (_0x554460, _0x5e98f6) {
                    return _0x554460 === _0x5e98f6;
                },
                'uJgmN': function (_0x4a0f51, _0x53bdd5, _0x4840d3, _0x4ad3ed) {
                    return _0x4a0f51(_0x53bdd5, _0x4840d3, _0x4ad3ed);
                },
                'AZZgr': function (_0x1a2515, _0x1f621c, _0x408850) {
                    return _0x1a2515(_0x1f621c, _0x408850);
                },
                'LgHtl': function (_0x48d967, _0x5b65bc) {
                    return _0x48d967 === _0x5b65bc;
                },
                'jcSRW': function (_0x5e70ef, _0x48f94c) {
                    return _0x5e70ef === _0x48f94c;
                },
                'vrwnG': 'ENOVERSIONS',
                'eisWe': function (_0x3b03f0, _0x2cdb86, _0x1ee289) {
                    return _0x3b03f0(_0x2cdb86, _0x1ee289);
                }
            }, {
                defaultTag: defaultTag = _0x24ca1f['QXKnu'],
                before: before = null,
                nodeVersion: nodeVersion = process['version'],
                npmVersion: npmVersion = null,
                includeStaged: includeStaged = ![],
                avoid: avoid = null,
                avoidStrict: avoidStrict = ![]
            } = _0x3c74cb, {
                name: _0x43f32c,
                time: _0x4caddc
            } = _0xf0a0ca, _0x4b02d9 = _0xf0a0ca['versions'] || {};
        if (avoidStrict) {
            const _0x3bd852 = {
                    ..._0x3c74cb,
                    'avoidStrict': ![]
                }, _0x83cf7e = _0x24ca1f['JMrVu'](pickManifest, _0xf0a0ca, _0x45f41d, _0x3bd852);
            if (!_0x83cf7e || !_0x83cf7e['_shouldAvoid'])
                return _0x83cf7e;
            const _0x571913 = _0x24ca1f['jDMox'](pickManifest, _0xf0a0ca, '^' + _0x83cf7e['version'], _0x3bd852);
            if (!_0x571913 || !_0x571913['_shouldAvoid'])
                return {
                    ..._0x571913,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': ![]
                };
            const _0x9b1fa7 = _0x24ca1f['LCKgt'](pickManifest, _0xf0a0ca, '*', _0x3bd852);
            if (!_0x9b1fa7 || !_0x9b1fa7['_shouldAvoid'])
                return {
                    ..._0x9b1fa7,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': !![]
                };
            throw Object['assign'](new Error('No\x20avoidable\x20versions\x20for\x20' + _0x43f32c), {
                'code': _0x24ca1f['pwwPL'],
                'name': _0x43f32c,
                'wanted': _0x45f41d,
                'avoid': avoid,
                'before': before,
                'versions': Object['keys'](_0x4b02d9)
            });
        }
        const _0x3fdd02 = includeStaged && _0xf0a0ca['stagedVersions'] && _0xf0a0ca['stagedVersions']['versions'] || {}, _0x593168 = _0xf0a0ca['policyRestrictions'] && _0xf0a0ca['policyRestrictions']['versions'] || {}, _0x5bc0c1 = _0x24ca1f['bJOXA'](before, _0x4caddc) ? +new Date(before) : Infinity, _0x5847f1 = npa['resolve'](_0x43f32c, _0x24ca1f['Epvcq'](_0x45f41d, defaultTag)), _0x2b0c9c = _0x5847f1['type'], _0x88d538 = _0xf0a0ca[_0x24ca1f['ZxNPB']] || {};
        if (_0x24ca1f['wuwAx'](_0x2b0c9c, _0x24ca1f['mpiJr']) && _0x24ca1f['wuwAx'](_0x2b0c9c, _0x24ca1f['Yojss']) && _0x24ca1f['wuwAx'](_0x2b0c9c, _0x24ca1f['jTNOX']))
            throw new Error(_0x24ca1f['lQMDg']);
        if (_0x45f41d && _0x24ca1f['AvxmY'](_0x2b0c9c, _0x24ca1f['mpiJr'])) {
            const _0x470b6b = _0x88d538[_0x45f41d];
            return _0x24ca1f['MSdNr'](isBefore, _0x4caddc, _0x470b6b, _0x5bc0c1) ? _0x24ca1f['zlJcX'](decorateAvoid, _0x4b02d9[_0x470b6b] || _0x3fdd02[_0x470b6b] || _0x593168[_0x470b6b], avoid) : _0x24ca1f['MSdNr'](pickManifest, _0xf0a0ca, '<=' + _0x470b6b, _0x3c74cb);
        }
        if (_0x45f41d && _0x24ca1f['GCDLG'](_0x2b0c9c, _0x24ca1f['Yojss'])) {
            const _0x4612e2 = semver['clean'](_0x45f41d, { 'loose': !![] }), _0x504711 = _0x4b02d9[_0x4612e2] || _0x3fdd02[_0x4612e2] || _0x593168[_0x4612e2];
            return _0x24ca1f['uJgmN'](isBefore, _0x4caddc, _0x4612e2, _0x5bc0c1) ? _0x24ca1f['AZZgr'](decorateAvoid, _0x504711, avoid) : null;
        }
        const _0x45a297 = _0x24ca1f['LgHtl'](_0x2b0c9c, _0x24ca1f['jTNOX']) ? _0x45f41d : '*', _0x3e5d27 = _0x88d538[defaultTag];
        if (_0x3e5d27 && (_0x24ca1f['jcSRW'](_0x45a297, '*') || semver['satisfies'](_0x3e5d27, _0x45a297, { 'loose': !![] })) && !_0x24ca1f['AZZgr'](shouldAvoid, _0x3e5d27, avoid)) {
            const _0x37c3a7 = _0x4b02d9[_0x3e5d27];
            if (_0x37c3a7 && _0x24ca1f['uJgmN'](isBefore, _0x4caddc, _0x3e5d27, _0x5bc0c1))
                return _0x37c3a7;
        }
        const _0x15356e = Object['entries'](_0x4b02d9)['concat'](Object['entries'](_0x3fdd02))['concat'](Object['entries'](_0x593168))['filter'](([_0x308325, _0x35e717]) => isBefore(_0x4caddc, _0x308325, _0x5bc0c1));
        if (!_0x15356e['length'])
            throw Object['assign'](new Error('No\x20versions\x20available\x20for\x20' + _0x43f32c), {
                'code': _0x24ca1f['vrwnG'],
                'name': _0x43f32c,
                'type': _0x2b0c9c,
                'wanted': _0x45f41d,
                'before': before,
                'versions': Object['keys'](_0x4b02d9)
            });
        const _0xe78842 = { 'loose': !![] }, _0x56fa7b = _0x15356e['filter'](([_0x1a25ee, _0x1dd70c]) => semver['satisfies'](_0x1a25ee, _0x45a297, { 'loose': !![] }))['sort']((_0x38099a, _0x2701e4) => {
                const [_0x41227c, _0x3cf7f3] = _0x38099a, [_0x553039, _0x292776] = _0x2701e4, _0x2f875f = !_0x24ca1f['zlJcX'](shouldAvoid, _0x41227c, avoid), _0x5efb85 = !_0x24ca1f['zlJcX'](shouldAvoid, _0x553039, avoid), _0x36443f = !_0x593168[_0x38099a], _0xfd22da = !_0x593168[_0x2701e4], _0x46c122 = !_0x3fdd02[_0x38099a], _0x22ef7f = !_0x3fdd02[_0x2701e4], _0x4a2ef1 = !_0x3cf7f3['deprecated'], _0x4d3294 = !_0x292776['deprecated'], _0x35b476 = _0x24ca1f['XBedY'](engineOk, _0x3cf7f3, npmVersion, nodeVersion), _0x1f23ca = _0x24ca1f['XBedY'](engineOk, _0x292776, npmVersion, nodeVersion);
                return _0x24ca1f['msZNP'](_0x5efb85, _0x2f875f) || _0x24ca1f['msZNP'](_0xfd22da, _0x36443f) || _0x24ca1f['msZNP'](_0x22ef7f, _0x46c122) || _0x24ca1f['msZNP'](_0x24ca1f['SyuZa'](_0x4d3294, _0x1f23ca), _0x24ca1f['bJOXA'](_0x4a2ef1, _0x35b476)) || _0x24ca1f['msZNP'](_0x1f23ca, _0x35b476) || _0x24ca1f['msZNP'](_0x4d3294, _0x4a2ef1) || semver['rcompare'](_0x41227c, _0x553039, _0xe78842);
            });
        return _0x24ca1f['eisWe'](decorateAvoid, _0x56fa7b[0x0] && _0x56fa7b[0x0][0x1], avoid);
    };
module['exports'] = (_0x54a9a2, _0x2e9cbd, _0x35d534 = {}) => {
    const _0x339b30 = {
            'waned': function (_0x38954b, _0x2d8096, _0x482b40, _0x58cb61) {
                return _0x38954b(_0x2d8096, _0x482b40, _0x58cb61);
            },
            'nEpFY': function (_0x1f31c1, _0x1d1d8b) {
                return _0x1f31c1(_0x1d1d8b);
            },
            'WYgph': 'latest',
            'VEjoh': function (_0x226a70, _0x2bd67f) {
                return _0x226a70 + _0x2bd67f;
            },
            'uyzQn': 'E403',
            'wTcTY': 'ETARGET',
            'SskJm': 'dist-tags'
        }, _0x2e72ef = _0x339b30['waned'](pickManifest, _0x54a9a2, _0x2e9cbd, _0x35d534), _0x32b802 = _0x2e72ef && _0x339b30['nEpFY'](normalizeBin, _0x2e72ef), _0x9bd361 = _0x54a9a2['policyRestrictions'], _0x26a488 = _0x9bd361 && _0x9bd361['versions'] || {};
    if (_0x32b802 && !_0x26a488[_0x32b802['version']])
        return _0x32b802;
    const {
            before: before = null,
            defaultTag: defaultTag = _0x339b30['WYgph']
        } = _0x35d534, _0x55d9a7 = before ? new Date(before)['toLocaleString']() : '', {name: _0x1f67a4} = _0x54a9a2, _0x4a89b8 = _0x339b30['VEjoh'](_0x1f67a4 + '@' + _0x2e9cbd, before ? '\x20with\x20a\x20date\x20before\x20' + _0x55d9a7 : ''), _0xf98236 = _0x32b802 && !!_0x26a488[_0x32b802['version']], _0x4c611c = _0xf98236 ? _0x9bd361['message'] : '', _0x5e82a4 = !_0xf98236 ? 'No\x20matching\x20version\x20found\x20for\x20' + _0x4a89b8 + '.' : 'Could\x20not\x20download\x20' + _0x4a89b8 + '\x20due\x20to\x20policy\x20violations:\x0a' + _0x4c611c, _0x2b298e = _0xf98236 ? _0x339b30['uyzQn'] : _0x339b30['wTcTY'];
    throw Object['assign'](new Error(_0x5e82a4), {
        'code': _0x2b298e,
        'type': npa['resolve'](_0x54a9a2['name'], _0x2e9cbd)['type'],
        'wanted': _0x2e9cbd,
        'versions': Object['keys'](_0x54a9a2['versions']),
        'name': _0x1f67a4,
        'distTags': _0x54a9a2[_0x339b30['SskJm']],
        'defaultTag': defaultTag
    });
};
