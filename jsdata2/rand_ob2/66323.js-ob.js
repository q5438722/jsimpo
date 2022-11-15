'use strict';
const _0x1d64 = [
    '301899UINKdF',
    '364214LRhXYx',
    '2kwIIeD',
    '748781NgCZoS',
    '61735oiatTg',
    '14lxKNrH',
    '64577AFJQUz',
    '9nBmuMx',
    '413BxJFyp',
    '1033uUJmON',
    '2049382wPspUc',
    'url',
    'URL',
    'concat',
    'map',
    'isArray',
    'protocol',
    'https:',
    'http:',
    'host',
    'create',
    'trailingDependencies',
    'workspaces',
    'length',
    'has',
    'add',
    'assign',
    'keys',
    'edgesOut',
    'values',
    'from',
    'target',
    'size',
    'package',
    'version',
    'reduce',
    'dependencies',
    'funding',
    'name',
    'path',
    'loadActual'
];
const _0x4eb723 = _0x1ae8;
(function (_0x11b111, _0x2767b9) {
    const _0x56412d = _0x1ae8;
    while (!![]) {
        try {
            const _0x197e14 = parseInt(_0x56412d(0x149)) + -parseInt(_0x56412d(0x14a)) * parseInt(_0x56412d(0x14b)) + parseInt(_0x56412d(0x14c)) + -parseInt(_0x56412d(0x14d)) * parseInt(_0x56412d(0x14e)) + parseInt(_0x56412d(0x14f)) * -parseInt(_0x56412d(0x150)) + -parseInt(_0x56412d(0x151)) * parseInt(_0x56412d(0x152)) + parseInt(_0x56412d(0x153));
            if (_0x197e14 === _0x2767b9)
                break;
            else
                _0x11b111['push'](_0x11b111['shift']());
        } catch (_0x2100c6) {
            _0x11b111['push'](_0x11b111['shift']());
        }
    }
}(_0x1d64, 0x79f42));
const URL = require(_0x4eb723(0x154))[_0x4eb723(0x155)], Arborist = require('@npmcli/arborist');
function normalizeFunding(_0x3bb211) {
    const _0x174225 = _0x4eb723, _0x8c0c9f = _0xe6b1d6 => typeof _0xe6b1d6 === 'string' ? { 'url': _0xe6b1d6 } : _0xe6b1d6, _0x47a060 = [][_0x174225(0x156)](_0x3bb211 || [])[_0x174225(0x157)](_0x8c0c9f);
    return Array[_0x174225(0x158)](_0x3bb211) ? _0x47a060 : _0x47a060[0x0];
}
function isValidFunding(_0x1542bf) {
    const _0x37f408 = _0x4eb723;
    if (!_0x1542bf)
        return ![];
    if (Array['isArray'](_0x1542bf))
        return _0x1542bf['every'](_0x344902 => !Array['isArray'](_0x344902) && isValidFunding(_0x344902));
    try {
        var _0x4a7f1a = new URL(_0x1542bf[_0x37f408(0x154)] || _0x1542bf);
    } catch (_0x216d53) {
        return ![];
    }
    if (_0x4a7f1a[_0x37f408(0x159)] !== _0x37f408(0x15a) && _0x4a7f1a[_0x37f408(0x159)] !== _0x37f408(0x15b))
        return ![];
    return Boolean(_0x4a7f1a[_0x37f408(0x15c)]);
}
function _0x1ae8(_0x14ec33, _0x1a7b99) {
    return _0x1ae8 = function (_0x1d6453, _0x1ae843) {
        _0x1d6453 = _0x1d6453 - 0x149;
        let _0x2047cc = _0x1d64[_0x1d6453];
        return _0x2047cc;
    }, _0x1ae8(_0x14ec33, _0x1a7b99);
}
const empty = () => Object[_0x4eb723(0x15d)](null);
function readTree(_0x44bd3e, _0x28796b) {
    const _0x4aaf1c = _0x4eb723;
    let _0xa4d765 = 0x0;
    const _0x5a8cdd = new Set(), {countOnly: _0xf37645} = _0x28796b || {}, _0x33825d = Symbol(_0x4aaf1c(0x15e));
    let _0x4c9413;
    if (_0x28796b && _0x28796b['workspaces'] && _0x28796b[_0x4aaf1c(0x15f)][_0x4aaf1c(0x160)]) {
        const _0xe47445 = new Arborist(_0x28796b);
        _0x4c9413 = _0xe47445['workspaceDependencySet'](_0x44bd3e, _0x28796b[_0x4aaf1c(0x15f)]);
    }
    function _0x29371c(_0x2d4147, _0x50db9e) {
        const _0x2790c9 = _0x4aaf1c, _0x24faaa = String(_0x2d4147) + String(_0x50db9e);
        if (_0x5a8cdd[_0x2790c9(0x161)](_0x24faaa))
            return !![];
        _0x5a8cdd[_0x2790c9(0x162)](_0x24faaa);
    }
    function _0x511398(_0x567ecf) {
        const _0x557618 = _0x4aaf1c, _0x60ea7a = _0x567ecf[_0x33825d];
        if (_0x60ea7a)
            return Object[_0x557618(0x163)](empty(), _0x567ecf, _0x60ea7a);
        return _0x567ecf;
    }
    function _0x38510b(_0x506fe3) {
        const _0x15efda = _0x4aaf1c;
        return _0x506fe3 && (Object[_0x15efda(0x164)](_0x506fe3)[_0x15efda(0x160)] || _0x506fe3[_0x33825d]);
    }
    function _0x557dfd(_0x382f84, _0x5c3e35) {
        _0x5c3e35 && isValidFunding(_0x5c3e35) && (_0x382f84['funding'] = normalizeFunding(_0x5c3e35), _0xa4d765++);
    }
    function _0x17fd42(_0x4714d0) {
        const _0xe742db = _0x4aaf1c, _0x385d58 = _0x4714d0 && _0x4714d0[_0xe742db(0x165)] && _0x4714d0['edgesOut'][_0xe742db(0x166)]();
        if (!_0x385d58)
            return empty();
        const _0x485b12 = Array[_0xe742db(0x167)](_0x385d58)[_0xe742db(0x157)](_0x4e2ee5 => {
            const _0x475438 = _0xe742db;
            if (!_0x4e2ee5 || !_0x4e2ee5['to'])
                return empty();
            const _0x395671 = _0x4e2ee5['to'][_0x475438(0x168)] || _0x4e2ee5['to'];
            if (!_0x395671['package'])
                return empty();
            if (_0x4c9413 && _0x4c9413[_0x475438(0x169)] > 0x0 && !_0x4c9413['has'](_0x395671))
                return empty();
            const {
                name: _0x59666a,
                funding: _0x3bdaac,
                version: _0x42a251
            } = _0x395671[_0x475438(0x16a)];
            if (_0x29371c(_0x59666a, _0x42a251))
                return empty();
            const _0x3be53d = {};
            if (_0x42a251)
                _0x3be53d[_0x475438(0x16b)] = _0x42a251;
            return _0x557dfd(_0x3be53d, _0x3bdaac), {
                'node': _0x395671,
                'fundingItem': _0x3be53d
            };
        });
        return _0x485b12[_0xe742db(0x16c)]((_0x5f120c, {
            node: _0x5d77e5,
            fundingItem: _0x58364d
        }, _0x4be4a3) => {
            const _0xd42bf3 = _0xe742db;
            if (!_0x58364d || _0x58364d[_0xd42bf3(0x160)] === 0x0 || !_0x5d77e5)
                return _0x5f120c;
            const _0x3fe695 = _0x5d77e5['edgesOut'] && _0x5d77e5[_0xd42bf3(0x165)][_0xd42bf3(0x169)] > 0x0 && _0x17fd42(_0x5d77e5);
            if (_0xf37645)
                return null;
            _0x38510b(_0x3fe695) && (_0x58364d[_0xd42bf3(0x16d)] = _0x511398(_0x3fe695));
            if (isValidFunding(_0x58364d[_0xd42bf3(0x16e)]))
                _0x5f120c[_0x5d77e5[_0xd42bf3(0x16a)][_0xd42bf3(0x16f)]] = _0x58364d;
            else
                _0x38510b(_0x58364d[_0xd42bf3(0x16d)]) && (_0x5f120c[_0x33825d] = Object['assign'](empty(), _0x5f120c[_0x33825d], _0x58364d[_0xd42bf3(0x16d)]));
            return _0x5f120c;
        }, _0xf37645 ? null : empty());
    }
    const _0x203c8d = _0x17fd42(_0x44bd3e), _0x28b9ba = { 'length': _0xa4d765 };
    if (!_0xf37645) {
        const _0x27bc4a = _0x44bd3e && _0x44bd3e[_0x4aaf1c(0x16a)] && _0x44bd3e[_0x4aaf1c(0x16a)][_0x4aaf1c(0x16f)] || _0x44bd3e && _0x44bd3e[_0x4aaf1c(0x16f)];
        _0x28b9ba[_0x4aaf1c(0x16f)] = _0x27bc4a || _0x44bd3e && _0x44bd3e[_0x4aaf1c(0x170)];
        if (_0x44bd3e && _0x44bd3e[_0x4aaf1c(0x16a)] && _0x44bd3e[_0x4aaf1c(0x16a)]['version'])
            _0x28b9ba[_0x4aaf1c(0x16b)] = _0x44bd3e['package'][_0x4aaf1c(0x16b)];
        if (_0x44bd3e && _0x44bd3e['package'] && _0x44bd3e['package'][_0x4aaf1c(0x16e)])
            _0x28b9ba[_0x4aaf1c(0x16e)] = normalizeFunding(_0x44bd3e['package'][_0x4aaf1c(0x16e)]);
        _0x28b9ba[_0x4aaf1c(0x16d)] = _0x511398(_0x203c8d);
    }
    return _0x28b9ba;
}
async function read(_0x59c04f) {
    const _0x3c40ce = _0x4eb723, _0x5655a0 = new Arborist(_0x59c04f), _0x214f4f = await _0x5655a0[_0x3c40ce(0x171)](_0x59c04f);
    return readTree(_0x214f4f, _0x59c04f);
}
module['exports'] = {
    'read': read,
    'readTree': readTree,
    'normalizeFunding': normalizeFunding,
    'isValidFunding': isValidFunding
};
