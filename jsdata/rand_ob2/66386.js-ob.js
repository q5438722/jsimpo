'use strict';
const _0x554d = [
    'resolve',
    'type',
    'dist-tags',
    'tag',
    'range',
    'Only\x20tag,\x20version,\x20and\x20range\x20are\x20supported',
    'clean',
    'satisfies',
    'entries',
    'concat',
    'filter',
    'length',
    'No\x20versions\x20available\x20for\x20',
    'deprecated',
    'rcompare',
    'toLocaleString',
    'message',
    'No\x20matching\x20version\x20found\x20for\x20',
    'Could\x20not\x20download\x20',
    'E403',
    'name',
    '6RwNCUy',
    '186611TcjgyB',
    '1dlOAwt',
    '233113wVzwAK',
    '316492IPkTqN',
    '1102321kyhMSU',
    '1LIwzMR',
    '318926NHbQjQ',
    '181uxYPKx',
    '457aKQEHt',
    '659gJqrQq',
    '697iVoaro',
    'npm-package-arg',
    'npm-install-checks',
    'npm-normalize-package-bin',
    'parse',
    'version',
    'latest',
    'versions',
    '_shouldAvoid',
    'assign',
    'ETARGET',
    'keys',
    'policyRestrictions'
];
const _0x55333d = _0x141e;
(function (_0x458cb8, _0x30a2c7) {
    const _0x2cd6d6 = _0x141e;
    while (!![]) {
        try {
            const _0x5598eb = -parseInt(_0x2cd6d6(0xff)) * parseInt(_0x2cd6d6(0x100)) + -parseInt(_0x2cd6d6(0x101)) * -parseInt(_0x2cd6d6(0x102)) + -parseInt(_0x2cd6d6(0x103)) + parseInt(_0x2cd6d6(0x104)) + -parseInt(_0x2cd6d6(0x105)) * -parseInt(_0x2cd6d6(0x106)) + -parseInt(_0x2cd6d6(0x107)) * parseInt(_0x2cd6d6(0x108)) + parseInt(_0x2cd6d6(0x109)) * parseInt(_0x2cd6d6(0x10a));
            if (_0x5598eb === _0x30a2c7)
                break;
            else
                _0x458cb8['push'](_0x458cb8['shift']());
        } catch (_0x9fc610) {
            _0x458cb8['push'](_0x458cb8['shift']());
        }
    }
}(_0x554d, 0x91378));
function _0x141e(_0x13648d, _0x2b33ab) {
    return _0x141e = function (_0x554d2e, _0x141e89) {
        _0x554d2e = _0x554d2e - 0xff;
        let _0x39ee79 = _0x554d[_0x554d2e];
        return _0x39ee79;
    }, _0x141e(_0x13648d, _0x2b33ab);
}
const npa = require(_0x55333d(0x10b)), semver = require('semver'), {checkEngine} = require(_0x55333d(0x10c)), normalizeBin = require(_0x55333d(0x10d)), engineOk = (_0x19f6a3, _0x35e99d, _0x309a1e) => {
        try {
            return checkEngine(_0x19f6a3, _0x35e99d, _0x309a1e), !![];
        } catch (_0x5ae055) {
            return ![];
        }
    }, isBefore = (_0xc78717, _0x4e6db1, _0xd76885) => !_0xc78717 || !_0xc78717[_0x4e6db1] || Date[_0x55333d(0x10e)](_0xc78717[_0x4e6db1]) <= _0xd76885, avoidSemverOpt = {
        'includePrerelease': !![],
        'loose': !![]
    }, shouldAvoid = (_0x4c9555, _0x4a4119) => _0x4a4119 && semver['satisfies'](_0x4c9555, _0x4a4119, avoidSemverOpt), decorateAvoid = (_0x57c4c4, _0x131080) => _0x57c4c4 && shouldAvoid(_0x57c4c4[_0x55333d(0x10f)], _0x131080) ? {
        ..._0x57c4c4,
        '_shouldAvoid': !![]
    } : _0x57c4c4, pickManifest = (_0x7e0bf6, _0x456b00, _0x3f3b30) => {
        const _0x5b31d9 = _0x55333d, {
                defaultTag: defaultTag = _0x5b31d9(0x110),
                before: before = null,
                nodeVersion: nodeVersion = process[_0x5b31d9(0x10f)],
                npmVersion: npmVersion = null,
                includeStaged: includeStaged = ![],
                avoid: avoid = null,
                avoidStrict: avoidStrict = ![]
            } = _0x3f3b30, {
                name: _0x4ace1c,
                time: _0x393a9a
            } = _0x7e0bf6, _0x2ea55c = _0x7e0bf6[_0x5b31d9(0x111)] || {};
        if (avoidStrict) {
            const _0x15c313 = {
                    ..._0x3f3b30,
                    'avoidStrict': ![]
                }, _0x5ddea5 = pickManifest(_0x7e0bf6, _0x456b00, _0x15c313);
            if (!_0x5ddea5 || !_0x5ddea5[_0x5b31d9(0x112)])
                return _0x5ddea5;
            const _0x3faf92 = pickManifest(_0x7e0bf6, '^' + _0x5ddea5['version'], _0x15c313);
            if (!_0x3faf92 || !_0x3faf92['_shouldAvoid'])
                return {
                    ..._0x3faf92,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': ![]
                };
            const _0x1b174a = pickManifest(_0x7e0bf6, '*', _0x15c313);
            if (!_0x1b174a || !_0x1b174a[_0x5b31d9(0x112)])
                return {
                    ..._0x1b174a,
                    '_outsideDependencyRange': !![],
                    '_isSemVerMajor': !![]
                };
            throw Object[_0x5b31d9(0x113)](new Error('No\x20avoidable\x20versions\x20for\x20' + _0x4ace1c), {
                'code': _0x5b31d9(0x114),
                'name': _0x4ace1c,
                'wanted': _0x456b00,
                'avoid': avoid,
                'before': before,
                'versions': Object[_0x5b31d9(0x115)](_0x2ea55c)
            });
        }
        const _0xdb386d = includeStaged && _0x7e0bf6['stagedVersions'] && _0x7e0bf6['stagedVersions'][_0x5b31d9(0x111)] || {}, _0x36b297 = _0x7e0bf6[_0x5b31d9(0x116)] && _0x7e0bf6[_0x5b31d9(0x116)][_0x5b31d9(0x111)] || {}, _0x7023bd = before && _0x393a9a ? +new Date(before) : Infinity, _0x168985 = npa[_0x5b31d9(0x117)](_0x4ace1c, _0x456b00 || defaultTag), _0x448a70 = _0x168985[_0x5b31d9(0x118)], _0x3c2caa = _0x7e0bf6[_0x5b31d9(0x119)] || {};
        if (_0x448a70 !== _0x5b31d9(0x11a) && _0x448a70 !== 'version' && _0x448a70 !== _0x5b31d9(0x11b))
            throw new Error(_0x5b31d9(0x11c));
        if (_0x456b00 && _0x448a70 === _0x5b31d9(0x11a)) {
            const _0x104a8d = _0x3c2caa[_0x456b00];
            return isBefore(_0x393a9a, _0x104a8d, _0x7023bd) ? decorateAvoid(_0x2ea55c[_0x104a8d] || _0xdb386d[_0x104a8d] || _0x36b297[_0x104a8d], avoid) : pickManifest(_0x7e0bf6, '<=' + _0x104a8d, _0x3f3b30);
        }
        if (_0x456b00 && _0x448a70 === _0x5b31d9(0x10f)) {
            const _0x5e717f = semver[_0x5b31d9(0x11d)](_0x456b00, { 'loose': !![] }), _0x1e963a = _0x2ea55c[_0x5e717f] || _0xdb386d[_0x5e717f] || _0x36b297[_0x5e717f];
            return isBefore(_0x393a9a, _0x5e717f, _0x7023bd) ? decorateAvoid(_0x1e963a, avoid) : null;
        }
        const _0x15af4f = _0x448a70 === _0x5b31d9(0x11b) ? _0x456b00 : '*', _0x4ccaeb = _0x3c2caa[defaultTag];
        if (_0x4ccaeb && (_0x15af4f === '*' || semver[_0x5b31d9(0x11e)](_0x4ccaeb, _0x15af4f, { 'loose': !![] })) && !shouldAvoid(_0x4ccaeb, avoid)) {
            const _0x361bc4 = _0x2ea55c[_0x4ccaeb];
            if (_0x361bc4 && isBefore(_0x393a9a, _0x4ccaeb, _0x7023bd))
                return _0x361bc4;
        }
        const _0x211300 = Object[_0x5b31d9(0x11f)](_0x2ea55c)['concat'](Object[_0x5b31d9(0x11f)](_0xdb386d))[_0x5b31d9(0x120)](Object[_0x5b31d9(0x11f)](_0x36b297))[_0x5b31d9(0x121)](([_0x385ca5, _0x2130e6]) => isBefore(_0x393a9a, _0x385ca5, _0x7023bd));
        if (!_0x211300[_0x5b31d9(0x122)])
            throw Object['assign'](new Error(_0x5b31d9(0x123) + _0x4ace1c), {
                'code': 'ENOVERSIONS',
                'name': _0x4ace1c,
                'type': _0x448a70,
                'wanted': _0x456b00,
                'before': before,
                'versions': Object[_0x5b31d9(0x115)](_0x2ea55c)
            });
        const _0xa1c62a = { 'loose': !![] }, _0x465af6 = _0x211300[_0x5b31d9(0x121)](([_0xf0107e, _0x2c762e]) => semver[_0x5b31d9(0x11e)](_0xf0107e, _0x15af4f, { 'loose': !![] }))['sort']((_0x2363ca, _0xcca33) => {
                const _0x2952ab = _0x5b31d9, [_0x2a095c, _0xb095b6] = _0x2363ca, [_0x29a186, _0x39919e] = _0xcca33, _0x2e1208 = !shouldAvoid(_0x2a095c, avoid), _0x3e7f44 = !shouldAvoid(_0x29a186, avoid), _0x533d93 = !_0x36b297[_0x2363ca], _0x14fade = !_0x36b297[_0xcca33], _0x2415d2 = !_0xdb386d[_0x2363ca], _0x91c44f = !_0xdb386d[_0xcca33], _0x392938 = !_0xb095b6[_0x2952ab(0x124)], _0x49419 = !_0x39919e[_0x2952ab(0x124)], _0x32afa6 = engineOk(_0xb095b6, npmVersion, nodeVersion), _0x52993a = engineOk(_0x39919e, npmVersion, nodeVersion);
                return _0x3e7f44 - _0x2e1208 || _0x14fade - _0x533d93 || _0x91c44f - _0x2415d2 || (_0x49419 && _0x52993a) - (_0x392938 && _0x32afa6) || _0x52993a - _0x32afa6 || _0x49419 - _0x392938 || semver[_0x2952ab(0x125)](_0x2a095c, _0x29a186, _0xa1c62a);
            });
        return decorateAvoid(_0x465af6[0x0] && _0x465af6[0x0][0x1], avoid);
    };
module['exports'] = (_0x4bd79d, _0x4a378f, _0xe0034e = {}) => {
    const _0x1937b4 = _0x55333d, _0x39047c = pickManifest(_0x4bd79d, _0x4a378f, _0xe0034e), _0x46405a = _0x39047c && normalizeBin(_0x39047c), _0x2bb2af = _0x4bd79d['policyRestrictions'], _0xbd418 = _0x2bb2af && _0x2bb2af[_0x1937b4(0x111)] || {};
    if (_0x46405a && !_0xbd418[_0x46405a[_0x1937b4(0x10f)]])
        return _0x46405a;
    const {
            before: before = null,
            defaultTag: defaultTag = _0x1937b4(0x110)
        } = _0xe0034e, _0x2b4af2 = before ? new Date(before)[_0x1937b4(0x126)]() : '', {name: _0x3c62fb} = _0x4bd79d, _0x1965f3 = _0x3c62fb + '@' + _0x4a378f + (before ? '\x20with\x20a\x20date\x20before\x20' + _0x2b4af2 : ''), _0x3cedb9 = _0x46405a && !!_0xbd418[_0x46405a[_0x1937b4(0x10f)]], _0x355f54 = _0x3cedb9 ? _0x2bb2af[_0x1937b4(0x127)] : '', _0x5058c4 = !_0x3cedb9 ? _0x1937b4(0x128) + _0x1965f3 + '.' : _0x1937b4(0x129) + _0x1965f3 + '\x20due\x20to\x20policy\x20violations:\x0a' + _0x355f54, _0x6ed3e5 = _0x3cedb9 ? _0x1937b4(0x12a) : _0x1937b4(0x114);
    throw Object[_0x1937b4(0x113)](new Error(_0x5058c4), {
        'code': _0x6ed3e5,
        'type': npa[_0x1937b4(0x117)](_0x4bd79d[_0x1937b4(0x12b)], _0x4a378f)[_0x1937b4(0x118)],
        'wanted': _0x4a378f,
        'versions': Object['keys'](_0x4bd79d[_0x1937b4(0x111)]),
        'name': _0x3c62fb,
        'distTags': _0x4bd79d[_0x1937b4(0x119)],
        'defaultTag': defaultTag
    });
};
