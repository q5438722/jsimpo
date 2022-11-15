const URL = require(_0x4a3790(217))['URL'], Arborist = require('@npmcli/arborist');
function normalizeFunding(_0x3bab0c) {
    const _0x57bec0 = _0x4a3790, _0x4a2d1c = _0x455274 => typeof _0x455274 === _0x57bec0(218) ? { 'url': _0x455274 } : _0x455274, _0x3e9221 = [][_0x57bec0(219)](_0x3bab0c || [])[_0x57bec0(220)](_0x4a2d1c);
    return Array['isArray'](_0x3bab0c) ? _0x3e9221 : _0x3e9221[0];
}
function isValidFunding(_0x131006) {
    const _0x38a461 = _0x4a3790;
    if (!_0x131006)
        return ![];
    if (Array['isArray'](_0x131006))
        return _0x131006[_0x38a461(221)](_0x3dd62e => !Array['isArray'](_0x3dd62e) && isValidFunding(_0x3dd62e));
    try {
        var _0x3734f5 = new URL(_0x131006['url'] || _0x131006);
    } catch (_0x194515) {
        return ![];
    }
    if (_0x3734f5[_0x38a461(222)] !== _0x38a461(223) && _0x3734f5[_0x38a461(222)] !== _0x38a461(224))
        return ![];
    return Boolean(_0x3734f5[_0x38a461(225)]);
}
const empty = () => Object['create'](null);
function readTree(_0x5b0502, _0xd09daf) {
    const _0x4e14e8 = _0x4a3790;
    let _0x1bcfdf = 0;
    const _0x4e9c58 = new Set(), {countOnly: _0x2449ef} = _0xd09daf || {}, _0x8d2339 = Symbol(_0x4e14e8(226));
    let _0x5c600b;
    if (_0xd09daf && _0xd09daf[_0x4e14e8(227)] && _0xd09daf[_0x4e14e8(227)][_0x4e14e8(228)]) {
        const _0x58ca56 = new Arborist(_0xd09daf);
        _0x5c600b = _0x58ca56[_0x4e14e8(229)](_0x5b0502, _0xd09daf[_0x4e14e8(227)]);
    }
    function _0x5b19f4(_0x3ee5f7, _0x4a400b) {
        const _0x215c92 = _0x4e14e8, _0x1ff34e = String(_0x3ee5f7) + String(_0x4a400b);
        if (_0x4e9c58[_0x215c92(230)](_0x1ff34e))
            return !![];
        _0x4e9c58[_0x215c92(231)](_0x1ff34e);
    }
    function _0x48b21b(_0x284cab) {
        const _0x4660f3 = _0x284cab[_0x8d2339];
        if (_0x4660f3)
            return Object['assign'](empty(), _0x284cab, _0x4660f3);
        return _0x284cab;
    }
    function _0x2d12bd(_0x1a9ac1) {
        const _0x6a51d4 = _0x4e14e8;
        return _0x1a9ac1 && (Object['keys'](_0x1a9ac1)[_0x6a51d4(228)] || _0x1a9ac1[_0x8d2339]);
    }
    function _0x4843eb(_0x3bd53f, _0x2c492c) {
        const _0x20bde4 = _0x4e14e8;
        _0x2c492c && isValidFunding(_0x2c492c) && (_0x3bd53f[_0x20bde4(232)] = normalizeFunding(_0x2c492c), _0x1bcfdf++);
    }
    function _0x4a767c(_0x2aa106) {
        const _0x42b977 = _0x4e14e8, _0x1bbfb7 = _0x2aa106 && _0x2aa106['edgesOut'] && _0x2aa106[_0x42b977(233)]['values']();
        if (!_0x1bbfb7)
            return empty();
        const _0x2e4a8c = Array['from'](_0x1bbfb7)[_0x42b977(220)](_0x401587 => {
            const _0x829046 = _0x42b977;
            if (!_0x401587 || !_0x401587['to'])
                return empty();
            const _0x136728 = _0x401587['to'][_0x829046(234)] || _0x401587['to'];
            if (!_0x136728[_0x829046(235)])
                return empty();
            if (_0x5c600b && _0x5c600b[_0x829046(236)] > 0 && !_0x5c600b[_0x829046(230)](_0x136728))
                return empty();
            const {
                name: _0x194e36,
                funding: _0x17881d,
                version: _0xa3657e
            } = _0x136728[_0x829046(235)];
            if (_0x5b19f4(_0x194e36, _0xa3657e))
                return empty();
            const _0x12c361 = {};
            if (_0xa3657e)
                _0x12c361[_0x829046(237)] = _0xa3657e;
            return _0x4843eb(_0x12c361, _0x17881d), {
                'node': _0x136728,
                'fundingItem': _0x12c361
            };
        });
        return _0x2e4a8c[_0x42b977(238)]((_0x1b723e, {
            node: _0x9b0324,
            fundingItem: _0x1c36e3
        }, _0x6de67b) => {
            const _0x288b57 = _0x42b977;
            if (!_0x1c36e3 || _0x1c36e3[_0x288b57(228)] === 0 || !_0x9b0324)
                return _0x1b723e;
            const _0x46aec8 = _0x9b0324[_0x288b57(233)] && _0x9b0324['edgesOut'][_0x288b57(236)] > 0 && _0x4a767c(_0x9b0324);
            if (_0x2449ef)
                return null;
            _0x2d12bd(_0x46aec8) && (_0x1c36e3[_0x288b57(239)] = _0x48b21b(_0x46aec8));
            if (isValidFunding(_0x1c36e3['funding']))
                _0x1b723e[_0x9b0324[_0x288b57(235)][_0x288b57(240)]] = _0x1c36e3;
            else
                _0x2d12bd(_0x1c36e3[_0x288b57(239)]) && (_0x1b723e[_0x8d2339] = Object[_0x288b57(241)](empty(), _0x1b723e[_0x8d2339], _0x1c36e3[_0x288b57(239)]));
            return _0x1b723e;
        }, _0x2449ef ? null : empty());
    }
    const _0x28570b = _0x4a767c(_0x5b0502), _0x122cc7 = { 'length': _0x1bcfdf };
    if (!_0x2449ef) {
        const _0x3dfd23 = _0x5b0502 && _0x5b0502[_0x4e14e8(235)] && _0x5b0502[_0x4e14e8(235)][_0x4e14e8(240)] || _0x5b0502 && _0x5b0502['name'];
        _0x122cc7[_0x4e14e8(240)] = _0x3dfd23 || _0x5b0502 && _0x5b0502[_0x4e14e8(242)];
        if (_0x5b0502 && _0x5b0502['package'] && _0x5b0502[_0x4e14e8(235)][_0x4e14e8(237)])
            _0x122cc7['version'] = _0x5b0502['package'][_0x4e14e8(237)];
        if (_0x5b0502 && _0x5b0502[_0x4e14e8(235)] && _0x5b0502[_0x4e14e8(235)]['funding'])
            _0x122cc7['funding'] = normalizeFunding(_0x5b0502[_0x4e14e8(235)][_0x4e14e8(232)]);
        _0x122cc7[_0x4e14e8(239)] = _0x48b21b(_0x28570b);
    }
    return _0x122cc7;
}
function _0x1612(_0x1275a5, _0x270af3) {
    return _0x1612 = function (_0xe16f97, _0x161281) {
        _0xe16f97 = _0xe16f97 - 206;
        let _0x2650bf = _0xe16f[_0xe16f97];
        return _0x2650bf;
    }, _0x1612(_0x1275a5, _0x270af3);
}
async function read(_0x1ada5b) {
    const _0x3f71c4 = _0x4a3790, _0x489200 = new Arborist(_0x1ada5b), _0x42e36f = await _0x489200[_0x3f71c4(243)](_0x1ada5b);
    return readTree(_0x42e36f, _0x1ada5b);
}
module['exports'] = {
    'read': read,
    'readTree': readTree,
    'normalizeFunding': normalizeFunding,
    'isValidFunding': isValidFunding
};