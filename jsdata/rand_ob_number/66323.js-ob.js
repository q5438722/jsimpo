'use strict';
const URL = require('url')['URL'], Arborist = require('@npmcli/arborist');
function normalizeFunding(_0x2c641d) {
    const _0x41e34e = _0x29aa4c => typeof _0x29aa4c === 'string' ? { 'url': _0x29aa4c } : _0x29aa4c, _0x1721f = []['concat'](_0x2c641d || [])['map'](_0x41e34e);
    return Array['isArray'](_0x2c641d) ? _0x1721f : _0x1721f[-0x108c + -0x33a * 0x4 + 0x1d74];
}
function isValidFunding(_0x5955ae) {
    if (!_0x5955ae)
        return ![];
    if (Array['isArray'](_0x5955ae))
        return _0x5955ae['every'](_0x570807 => !Array['isArray'](_0x570807) && isValidFunding(_0x570807));
    try {
        var _0x4136b4 = new URL(_0x5955ae['url'] || _0x5955ae);
    } catch (_0x395f1d) {
        return ![];
    }
    if (_0x4136b4['protocol'] !== 'https:' && _0x4136b4['protocol'] !== 'http:')
        return ![];
    return Boolean(_0x4136b4['host']);
}
const empty = () => Object['create'](null);
function readTree(_0x4bb3ca, _0x13e056) {
    let _0x45e249 = 0xa7c * -0x1 + 0x1e83 + 0x6ad * -0x3;
    const _0x4c2628 = new Set(), {countOnly: _0x959e37} = _0x13e056 || {}, _0x55f2a0 = Symbol('trailingDependencies');
    let _0x20c0a1;
    if (_0x13e056 && _0x13e056['workspaces'] && _0x13e056['workspaces']['length']) {
        const _0x589f78 = new Arborist(_0x13e056);
        _0x20c0a1 = _0x589f78['workspaceDependencySet'](_0x4bb3ca, _0x13e056['workspaces']);
    }
    function _0x4daf22(_0x2a9172, _0x562742) {
        const _0x587332 = String(_0x2a9172) + String(_0x562742);
        if (_0x4c2628['has'](_0x587332))
            return !![];
        _0x4c2628['add'](_0x587332);
    }
    function _0x59bf94(_0x24031a) {
        const _0x1d7757 = _0x24031a[_0x55f2a0];
        if (_0x1d7757)
            return Object['assign'](empty(), _0x24031a, _0x1d7757);
        return _0x24031a;
    }
    function _0x171ba4(_0x40d6d5) {
        return _0x40d6d5 && (Object['keys'](_0x40d6d5)['length'] || _0x40d6d5[_0x55f2a0]);
    }
    function _0xc79bee(_0x2f9359, _0x306df9) {
        _0x306df9 && isValidFunding(_0x306df9) && (_0x2f9359['funding'] = normalizeFunding(_0x306df9), _0x45e249++);
    }
    function _0x579e65(_0x291d0a) {
        const _0x356ccd = _0x291d0a && _0x291d0a['edgesOut'] && _0x291d0a['edgesOut']['values']();
        if (!_0x356ccd)
            return empty();
        const _0x13ce9a = Array['from'](_0x356ccd)['map'](_0x4d22ab => {
            if (!_0x4d22ab || !_0x4d22ab['to'])
                return empty();
            const _0x6e29c6 = _0x4d22ab['to']['target'] || _0x4d22ab['to'];
            if (!_0x6e29c6['package'])
                return empty();
            if (_0x20c0a1 && _0x20c0a1['size'] > 0xcec + 0x48 + -0x5 * 0x2a4 && !_0x20c0a1['has'](_0x6e29c6))
                return empty();
            const {
                name: _0xb8f451,
                funding: _0x30266e,
                version: _0x51bc2c
            } = _0x6e29c6['package'];
            if (_0x4daf22(_0xb8f451, _0x51bc2c))
                return empty();
            const _0x13ccc1 = {};
            if (_0x51bc2c)
                _0x13ccc1['version'] = _0x51bc2c;
            return _0xc79bee(_0x13ccc1, _0x30266e), {
                'node': _0x6e29c6,
                'fundingItem': _0x13ccc1
            };
        });
        return _0x13ce9a['reduce']((_0x2267f9, {
            node: _0x5d9780,
            fundingItem: _0x21f10d
        }, _0x3c765d) => {
            if (!_0x21f10d || _0x21f10d['length'] === 0x1cbd + -0xefd * -0x1 + -0x3a * 0xc1 || !_0x5d9780)
                return _0x2267f9;
            const _0x8e9fbf = _0x5d9780['edgesOut'] && _0x5d9780['edgesOut']['size'] > 0x109 * -0x13 + 0x8a9 + 0x581 * 0x2 && _0x579e65(_0x5d9780);
            if (_0x959e37)
                return null;
            _0x171ba4(_0x8e9fbf) && (_0x21f10d['dependencies'] = _0x59bf94(_0x8e9fbf));
            if (isValidFunding(_0x21f10d['funding']))
                _0x2267f9[_0x5d9780['package']['name']] = _0x21f10d;
            else
                _0x171ba4(_0x21f10d['dependencies']) && (_0x2267f9[_0x55f2a0] = Object['assign'](empty(), _0x2267f9[_0x55f2a0], _0x21f10d['dependencies']));
            return _0x2267f9;
        }, _0x959e37 ? null : empty());
    }
    const _0x18d892 = _0x579e65(_0x4bb3ca), _0x3cd7f9 = { 'length': _0x45e249 };
    if (!_0x959e37) {
        const _0x57e20a = _0x4bb3ca && _0x4bb3ca['package'] && _0x4bb3ca['package']['name'] || _0x4bb3ca && _0x4bb3ca['name'];
        _0x3cd7f9['name'] = _0x57e20a || _0x4bb3ca && _0x4bb3ca['path'];
        if (_0x4bb3ca && _0x4bb3ca['package'] && _0x4bb3ca['package']['version'])
            _0x3cd7f9['version'] = _0x4bb3ca['package']['version'];
        if (_0x4bb3ca && _0x4bb3ca['package'] && _0x4bb3ca['package']['funding'])
            _0x3cd7f9['funding'] = normalizeFunding(_0x4bb3ca['package']['funding']);
        _0x3cd7f9['dependencies'] = _0x59bf94(_0x18d892);
    }
    return _0x3cd7f9;
}
async function read(_0x5853ca) {
    const _0x3284b7 = new Arborist(_0x5853ca), _0x44537a = await _0x3284b7['loadActual'](_0x5853ca);
    return readTree(_0x44537a, _0x5853ca);
}
module['exports'] = {
    'read': read,
    'readTree': readTree,
    'normalizeFunding': normalizeFunding,
    'isValidFunding': isValidFunding
};
