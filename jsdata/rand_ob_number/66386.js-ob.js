'use strict';
const npa = require('npm-package-arg'), semver = require('semver'), {checkEngine} = require('npm-install-checks'), normalizeBin = require('npm-normalize-package-bin'), engineOk = (_0x3ea6b8, _0x2c7f74, _0xb9aadd) => {
        try {
            return checkEngine(_0x3ea6b8, _0x2c7f74, _0xb9aadd), !![];
        } catch (_0x3f6dc0) {
            return ![];
        }
    }, isBefore = (_0x369f40, _0x57f7cc, _0x90b3d0) => !_0x369f40 || !_0x369f40[_0x57f7cc] || Date['parse'](_0x369f40[_0x57f7cc]) <= _0x90b3d0, avoidSemverOpt = {
        'includePrerelease': !![],
        'loose': !![]
    }, shouldAvoid = (_0x122822, _0x4123fa) => _0x4123fa && semver['satisfies'](_0x122822, _0x4123fa, avoidSemverOpt), decorateAvoid = (_0x391186, _0x5c9915) => _0x391186 && shouldAvoid(_0x391186['version'], _0x5c9915) ? {
        ..._0x391186,
        '_shouldAvoid': !![]
    } : _0x391186, pickManifest = (_0x12b5f3, _0x55a7ce, _0x9c7833) => {
        const {
                defaultTag: defaultTag = 'latest',
                before: before = null,
                nodeVersion: nodeVersion = process['version'],
                npmVersion: npmVersion = null,
                includeStaged: includeStaged = ![],
                avoid: avoid = null,
                avoidStrict: avoidStrict = ![]
            } = _0x9c7833, {
                name: _0x5dbab4,
                time: _0x195e77
            } = _0x12b5f3, _0x3e9d63 = _0x12b5f3['versions'] || {};
        if (avoidStrict) {
            const _0x465e59 = {
                    ..._0x9c7833,
                    'avoidStrict': ![]
                }, _0x11b2d4 = pickManifest(_0x12b5f3, _0x55a7ce, _0x465e59);
            if (!_0x11b2d4 || !_0x11b2d4['_shouldAvoid'])
                return _0x11b2d4;
            const _0x25e8e5 = pickManifest(_0x12b5f3, '^' + _0x11b2d4['version'], _0x465e59);
            if (!_0x25e8e5 || !_0x25e8e5['_shouldAvoid'])
                return {
                    ..._0x25e8e5,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': ![]
                };
            const _0x1f3adc = pickManifest(_0x12b5f3, '*', _0x465e59);
            if (!_0x1f3adc || !_0x1f3adc['_shouldAvoid'])
                return {
                    ..._0x1f3adc,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': !![]
                };
            throw Object['assign'](new Error('No\x20avoidable\x20versions\x20for\x20' + _0x5dbab4), {
                'code': 'ETARGET',
                'name': _0x5dbab4,
                'wanted': _0x55a7ce,
                'avoid': avoid,
                'before': before,
                'versions': Object['keys'](_0x3e9d63)
            });
        }
        const _0x1d81d9 = includeStaged && _0x12b5f3['stagedVersions'] && _0x12b5f3['stagedVersions']['versions'] || {}, _0x54a377 = _0x12b5f3['policyRestrictions'] && _0x12b5f3['policyRestrictions']['versions'] || {}, _0x45d663 = before && _0x195e77 ? +new Date(before) : Infinity, _0x1a56e9 = npa['resolve'](_0x5dbab4, _0x55a7ce || defaultTag), _0x480ebe = _0x1a56e9['type'], _0x2183d5 = _0x12b5f3['dist-tags'] || {};
        if (_0x480ebe !== 'tag' && _0x480ebe !== 'version' && _0x480ebe !== 'range')
            throw new Error('Only\x20tag,\x20version,\x20and\x20range\x20are\x20supported');
        if (_0x55a7ce && _0x480ebe === 'tag') {
            const _0x337428 = _0x2183d5[_0x55a7ce];
            return isBefore(_0x195e77, _0x337428, _0x45d663) ? decorateAvoid(_0x3e9d63[_0x337428] || _0x1d81d9[_0x337428] || _0x54a377[_0x337428], avoid) : pickManifest(_0x12b5f3, '<=' + _0x337428, _0x9c7833);
        }
        if (_0x55a7ce && _0x480ebe === 'version') {
            const _0x1d4091 = semver['clean'](_0x55a7ce, { 'loose': !![] }), _0x2d70c2 = _0x3e9d63[_0x1d4091] || _0x1d81d9[_0x1d4091] || _0x54a377[_0x1d4091];
            return isBefore(_0x195e77, _0x1d4091, _0x45d663) ? decorateAvoid(_0x2d70c2, avoid) : null;
        }
        const _0x4842e2 = _0x480ebe === 'range' ? _0x55a7ce : '*', _0x4d0476 = _0x2183d5[defaultTag];
        if (_0x4d0476 && (_0x4842e2 === '*' || semver['satisfies'](_0x4d0476, _0x4842e2, { 'loose': !![] })) && !shouldAvoid(_0x4d0476, avoid)) {
            const _0x19317f = _0x3e9d63[_0x4d0476];
            if (_0x19317f && isBefore(_0x195e77, _0x4d0476, _0x45d663))
                return _0x19317f;
        }
        const _0x2c0146 = Object['entries'](_0x3e9d63)['concat'](Object['entries'](_0x1d81d9))['concat'](Object['entries'](_0x54a377))['filter'](([_0x12df48, _0x46ed6b]) => isBefore(_0x195e77, _0x12df48, _0x45d663));
        if (!_0x2c0146['length'])
            throw Object['assign'](new Error('No\x20versions\x20available\x20for\x20' + _0x5dbab4), {
                'code': 'ENOVERSIONS',
                'name': _0x5dbab4,
                'type': _0x480ebe,
                'wanted': _0x55a7ce,
                'before': before,
                'versions': Object['keys'](_0x3e9d63)
            });
        const _0x10c088 = { 'loose': !![] }, _0x2685b9 = _0x2c0146['filter'](([_0x325feb, _0x1832e6]) => semver['satisfies'](_0x325feb, _0x4842e2, { 'loose': !![] }))['sort']((_0x53e773, _0x393c79) => {
                const [_0xa06390, _0x1876df] = _0x53e773, [_0x5aef95, _0x54d9d0] = _0x393c79, _0x4392a0 = !shouldAvoid(_0xa06390, avoid), _0x2d3aed = !shouldAvoid(_0x5aef95, avoid), _0x2d6372 = !_0x54a377[_0x53e773], _0x5f15e6 = !_0x54a377[_0x393c79], _0x4bccc2 = !_0x1d81d9[_0x53e773], _0xbbb6f2 = !_0x1d81d9[_0x393c79], _0x288f95 = !_0x1876df['deprecated'], _0x6eb827 = !_0x54d9d0['deprecated'], _0x225919 = engineOk(_0x1876df, npmVersion, nodeVersion), _0x3dc7d5 = engineOk(_0x54d9d0, npmVersion, nodeVersion);
                return _0x2d3aed - _0x4392a0 || _0x5f15e6 - _0x2d6372 || _0xbbb6f2 - _0x4bccc2 || (_0x6eb827 && _0x3dc7d5) - (_0x288f95 && _0x225919) || _0x3dc7d5 - _0x225919 || _0x6eb827 - _0x288f95 || semver['rcompare'](_0xa06390, _0x5aef95, _0x10c088);
            });
        return decorateAvoid(_0x2685b9[-0x505 + 0x1 * 0x63b + -0x1f * 0xa] && _0x2685b9[0x26aa + 0x617 + 0xc9 * -0x39][-0x2fa * 0x3 + 0x6e6 + -0x209 * -0x1], avoid);
    };
module['exports'] = (_0x3a0d72, _0x1fa614, _0x5ccaf4 = {}) => {
    const _0x9175d8 = pickManifest(_0x3a0d72, _0x1fa614, _0x5ccaf4), _0x239dcf = _0x9175d8 && normalizeBin(_0x9175d8), _0x50b1fa = _0x3a0d72['policyRestrictions'], _0x550c0d = _0x50b1fa && _0x50b1fa['versions'] || {};
    if (_0x239dcf && !_0x550c0d[_0x239dcf['version']])
        return _0x239dcf;
    const {
            before: before = null,
            defaultTag: defaultTag = 'latest'
        } = _0x5ccaf4, _0x11cbc3 = before ? new Date(before)['toLocaleString']() : '', {name: _0x34d5f0} = _0x3a0d72, _0x159304 = _0x34d5f0 + '@' + _0x1fa614 + (before ? '\x20with\x20a\x20date\x20before\x20' + _0x11cbc3 : ''), _0xebf71c = _0x239dcf && !!_0x550c0d[_0x239dcf['version']], _0x1038e4 = _0xebf71c ? _0x50b1fa['message'] : '', _0x2187e5 = !_0xebf71c ? 'No\x20matching\x20version\x20found\x20for\x20' + _0x159304 + '.' : 'Could\x20not\x20download\x20' + _0x159304 + '\x20due\x20to\x20policy\x20violations:\x0a' + _0x1038e4, _0x9e2c94 = _0xebf71c ? 'E403' : 'ETARGET';
    throw Object['assign'](new Error(_0x2187e5), {
        'code': _0x9e2c94,
        'type': npa['resolve'](_0x3a0d72['name'], _0x1fa614)['type'],
        'wanted': _0x1fa614,
        'versions': Object['keys'](_0x3a0d72['versions']),
        'name': _0x34d5f0,
        'distTags': _0x3a0d72['dist-tags'],
        'defaultTag': defaultTag
    });
};
