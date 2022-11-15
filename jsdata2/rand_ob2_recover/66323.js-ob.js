const URL = require(_0x4eb723(340))[_0x4eb723(341)], Arborist = require('@npmcli/arborist');
function normalizeFunding(_0x3bb211) {
    const _0x174225 = _0x4eb723, _0x8c0c9f = _0xe6b1d6 => typeof _0xe6b1d6 === 'string' ? { 'url': _0xe6b1d6 } : _0xe6b1d6, _0x47a060 = [][_0x174225(342)](_0x3bb211 || [])[_0x174225(343)](_0x8c0c9f);
    return Array[_0x174225(344)](_0x3bb211) ? _0x47a060 : _0x47a060[0];
}
function isValidFunding(_0x1542bf) {
    const _0x37f408 = _0x4eb723;
    if (!_0x1542bf)
        return ![];
    if (Array['isArray'](_0x1542bf))
        return _0x1542bf['every'](_0x344902 => !Array['isArray'](_0x344902) && isValidFunding(_0x344902));
    try {
        var _0x4a7f1a = new URL(_0x1542bf[_0x37f408(340)] || _0x1542bf);
    } catch (_0x216d53) {
        return ![];
    }
    if (_0x4a7f1a[_0x37f408(345)] !== _0x37f408(346) && _0x4a7f1a[_0x37f408(345)] !== _0x37f408(347))
        return ![];
    return Boolean(_0x4a7f1a[_0x37f408(348)]);
}
function _0x1ae8(_0x14ec33, _0x1a7b99) {
    return _0x1ae8 = function (_0x1d6453, _0x1ae843) {
        _0x1d6453 = _0x1d6453 - 329;
        let _0x2047cc = _0x1d64[_0x1d6453];
        return _0x2047cc;
    }, _0x1ae8(_0x14ec33, _0x1a7b99);
}
const empty = () => Object[_0x4eb723(349)](null);
function readTree(_0x44bd3e, _0x28796b) {
    const _0x4aaf1c = _0x4eb723;
    let _0xa4d765 = 0;
    const _0x5a8cdd = new Set(), {countOnly: _0xf37645} = _0x28796b || {}, _0x33825d = Symbol(_0x4aaf1c(350));
    let _0x4c9413;
    if (_0x28796b && _0x28796b['workspaces'] && _0x28796b[_0x4aaf1c(351)][_0x4aaf1c(352)]) {
        const _0xe47445 = new Arborist(_0x28796b);
        _0x4c9413 = _0xe47445['workspaceDependencySet'](_0x44bd3e, _0x28796b[_0x4aaf1c(351)]);
    }
    function _0x29371c(_0x2d4147, _0x50db9e) {
        const _0x2790c9 = _0x4aaf1c, _0x24faaa = String(_0x2d4147) + String(_0x50db9e);
        if (_0x5a8cdd[_0x2790c9(353)](_0x24faaa))
            return !![];
        _0x5a8cdd[_0x2790c9(354)](_0x24faaa);
    }
    function _0x511398(_0x567ecf) {
        const _0x557618 = _0x4aaf1c, _0x60ea7a = _0x567ecf[_0x33825d];
        if (_0x60ea7a)
            return Object[_0x557618(355)](empty(), _0x567ecf, _0x60ea7a);
        return _0x567ecf;
    }
    function _0x38510b(_0x506fe3) {
        const _0x15efda = _0x4aaf1c;
        return _0x506fe3 && (Object[_0x15efda(356)](_0x506fe3)[_0x15efda(352)] || _0x506fe3[_0x33825d]);
    }
    function _0x557dfd(_0x382f84, _0x5c3e35) {
        _0x5c3e35 && isValidFunding(_0x5c3e35) && (_0x382f84['funding'] = normalizeFunding(_0x5c3e35), _0xa4d765++);
    }
    function _0x17fd42(_0x4714d0) {
        const _0xe742db = _0x4aaf1c, _0x385d58 = _0x4714d0 && _0x4714d0[_0xe742db(357)] && _0x4714d0['edgesOut'][_0xe742db(358)]();
        if (!_0x385d58)
            return empty();
        const _0x485b12 = Array[_0xe742db(359)](_0x385d58)[_0xe742db(343)](_0x4e2ee5 => {
            const _0x475438 = _0xe742db;
            if (!_0x4e2ee5 || !_0x4e2ee5['to'])
                return empty();
            const _0x395671 = _0x4e2ee5['to'][_0x475438(360)] || _0x4e2ee5['to'];
            if (!_0x395671['package'])
                return empty();
            if (_0x4c9413 && _0x4c9413[_0x475438(361)] > 0 && !_0x4c9413['has'](_0x395671))
                return empty();
            const {
                name: _0x59666a,
                funding: _0x3bdaac,
                version: _0x42a251
            } = _0x395671[_0x475438(362)];
            if (_0x29371c(_0x59666a, _0x42a251))
                return empty();
            const _0x3be53d = {};
            if (_0x42a251)
                _0x3be53d[_0x475438(363)] = _0x42a251;
            return _0x557dfd(_0x3be53d, _0x3bdaac), {
                'node': _0x395671,
                'fundingItem': _0x3be53d
            };
        });
        return _0x485b12[_0xe742db(364)]((_0x5f120c, {
            node: _0x5d77e5,
            fundingItem: _0x58364d
        }, _0x4be4a3) => {
            const _0xd42bf3 = _0xe742db;
            if (!_0x58364d || _0x58364d[_0xd42bf3(352)] === 0 || !_0x5d77e5)
                return _0x5f120c;
            const _0x3fe695 = _0x5d77e5['edgesOut'] && _0x5d77e5[_0xd42bf3(357)][_0xd42bf3(361)] > 0 && _0x17fd42(_0x5d77e5);
            if (_0xf37645)
                return null;
            _0x38510b(_0x3fe695) && (_0x58364d[_0xd42bf3(365)] = _0x511398(_0x3fe695));
            if (isValidFunding(_0x58364d[_0xd42bf3(366)]))
                _0x5f120c[_0x5d77e5[_0xd42bf3(362)][_0xd42bf3(367)]] = _0x58364d;
            else
                _0x38510b(_0x58364d[_0xd42bf3(365)]) && (_0x5f120c[_0x33825d] = Object['assign'](empty(), _0x5f120c[_0x33825d], _0x58364d[_0xd42bf3(365)]));
            return _0x5f120c;
        }, _0xf37645 ? null : empty());
    }
    const _0x203c8d = _0x17fd42(_0x44bd3e), _0x28b9ba = { 'length': _0xa4d765 };
    if (!_0xf37645) {
        const _0x27bc4a = _0x44bd3e && _0x44bd3e[_0x4aaf1c(362)] && _0x44bd3e[_0x4aaf1c(362)][_0x4aaf1c(367)] || _0x44bd3e && _0x44bd3e[_0x4aaf1c(367)];
        _0x28b9ba[_0x4aaf1c(367)] = _0x27bc4a || _0x44bd3e && _0x44bd3e[_0x4aaf1c(368)];
        if (_0x44bd3e && _0x44bd3e[_0x4aaf1c(362)] && _0x44bd3e[_0x4aaf1c(362)]['version'])
            _0x28b9ba[_0x4aaf1c(363)] = _0x44bd3e['package'][_0x4aaf1c(363)];
        if (_0x44bd3e && _0x44bd3e['package'] && _0x44bd3e['package'][_0x4aaf1c(366)])
            _0x28b9ba[_0x4aaf1c(366)] = normalizeFunding(_0x44bd3e['package'][_0x4aaf1c(366)]);
        _0x28b9ba[_0x4aaf1c(365)] = _0x511398(_0x203c8d);
    }
    return _0x28b9ba;
}
async function read(_0x59c04f) {
    const _0x3c40ce = _0x4eb723, _0x5655a0 = new Arborist(_0x59c04f), _0x214f4f = await _0x5655a0[_0x3c40ce(369)](_0x59c04f);
    return readTree(_0x214f4f, _0x59c04f);
}
module['exports'] = {
    'read': read,
    'readTree': readTree,
    'normalizeFunding': normalizeFunding,
    'isValidFunding': isValidFunding
};