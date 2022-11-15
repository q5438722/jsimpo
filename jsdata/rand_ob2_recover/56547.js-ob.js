require(_0x5e4efe(119));
const assert = require(_0x5e4efe(120)), util = require(_0x5e4efe(121));
function findInGraph(_0xefdbc, _0x9c7492, _0x5cbf5a) {
    const _0x403e2c = _0x5e4efe;
    let _0x9b7f62 = 0;
    for (let _0x477695 = 0; _0x477695 < _0xefdbc[_0x403e2c(122)]; _0x477695++) {
        const _0x4b784a = _0xefdbc[_0x477695];
        if (_0x4b784a['type'] === _0x9c7492)
            _0x9b7f62++;
        if (_0x9b7f62 === _0x5cbf5a)
            return _0x4b784a;
    }
}
function _0x5d37(_0xf00bd0, _0x4d6d3d) {
    return _0x5d37 = function (_0x37db06, _0x5d3715) {
        _0x37db06 = _0x37db06 - 108;
        let _0x3cfe43 = _0x37db[_0x37db06];
        return _0x3cfe43;
    }, _0x5d37(_0xf00bd0, _0x4d6d3d);
}
function pruneTickObjects(_0x300cbd) {
    const _0x545f64 = _0x5e4efe, _0x228ad3 = {
            'found': !![],
            'index': null,
            'data': null
        };
    if (!Array[_0x545f64(123)](_0x300cbd))
        return _0x300cbd;
    while (_0x228ad3[_0x545f64(124)]) {
        for (let _0x2a76c1 = 0; _0x2a76c1 < _0x300cbd[_0x545f64(122)]; _0x2a76c1++) {
            if (_0x300cbd[_0x2a76c1][_0x545f64(125)] === 'TickObject') {
                _0x228ad3[_0x545f64(126)] = _0x2a76c1;
                break;
            } else
                _0x2a76c1 + 1 >= _0x300cbd[_0x545f64(122)] && (_0x228ad3[_0x545f64(124)] = ![]);
        }
        if (_0x228ad3['found']) {
            _0x228ad3['data'] = _0x300cbd[_0x228ad3[_0x545f64(126)]];
            const _0x4b83ca = {
                'new': _0x228ad3[_0x545f64(127)]['triggerAsyncId'],
                'old': _0x228ad3[_0x545f64(127)][_0x545f64(128)]
            };
            _0x300cbd['forEach'](function _0xc8231d(_0x1b2e70) {
                const _0x5ea653 = _0x545f64;
                if (_0x1b2e70[_0x5ea653(129)] === _0x4b83ca[_0x5ea653(130)])
                    _0x1b2e70[_0x5ea653(129)] = _0x4b83ca[_0x5ea653(131)];
            }), _0x300cbd[_0x545f64(132)](_0x228ad3[_0x545f64(126)], 1);
        }
    }
    return _0x300cbd;
}
module[_0x5e4efe(133)] = function verifyGraph(_0x1d8ad2, _0x26edc9) {
    const _0x125216 = _0x5e4efe;
    pruneTickObjects(_0x1d8ad2);
    const _0x3e5028 = {}, _0x1840b6 = {}, _0x20ce6f = {}, _0x3d276a = [], _0x361eb2 = pruneTickObjects(_0x1d8ad2[_0x125216(134)]);
    _0x361eb2[_0x125216(135)](_0x473389);
    function _0x473389(_0x34e851) {
        const _0x2e4bb5 = _0x125216;
        if (!_0x20ce6f[_0x34e851[_0x2e4bb5(125)]])
            _0x20ce6f[_0x34e851[_0x2e4bb5(125)]] = 0;
        _0x20ce6f[_0x34e851[_0x2e4bb5(125)]]++;
        const _0x446d4d = findInGraph(_0x26edc9, _0x34e851['type'], _0x20ce6f[_0x34e851[_0x2e4bb5(125)]]);
        if (_0x446d4d == null)
            return;
        _0x3e5028[_0x446d4d['id']] = _0x34e851['uid'], _0x1840b6[_0x34e851[_0x2e4bb5(128)]] = _0x446d4d['id'];
        if (_0x446d4d[_0x2e4bb5(129)] == null)
            return;
        const _0x269e58 = _0x3e5028[_0x446d4d[_0x2e4bb5(129)]];
        if (_0x34e851[_0x2e4bb5(129)] === _0x269e58)
            return;
        _0x3d276a[_0x2e4bb5(136)]({
            'id': _0x446d4d['id'],
            'expectedTid': _0x446d4d[_0x2e4bb5(129)],
            'actualTid': _0x1840b6[_0x34e851[_0x2e4bb5(129)]]
        });
    }
    _0x3d276a[_0x125216(122)] && _0x3d276a[_0x125216(135)](_0x48592a => console[_0x125216(137)]('\'' + _0x48592a['id'] + _0x125216(138) + _0x48592a[_0x125216(139)] + '\', ' + (_0x125216(140) + _0x48592a['actualTid'] + _0x125216(141))));
    assert[_0x125216(142)](_0x3d276a[_0x125216(122)], 0);
    const _0x24ac8b = Object['create'](null);
    for (let _0x4eec20 = 0; _0x4eec20 < _0x26edc9[_0x125216(122)]; _0x4eec20++) {
        if (_0x24ac8b[_0x26edc9[_0x4eec20]['type']] == null)
            _0x24ac8b[_0x26edc9[_0x4eec20][_0x125216(125)]] = 0;
        _0x24ac8b[_0x26edc9[_0x4eec20][_0x125216(125)]]++;
    }
    for (const _0x471493 in _0x24ac8b) {
        assert['ok'](_0x20ce6f[_0x471493] >= _0x24ac8b[_0x471493], _0x125216(143) + _0x471493 + _0x125216(144) + _0x24ac8b[_0x471493] + ' ' + ('found: ' + _0x20ce6f[_0x471493]));
    }
};
function inspect(_0x37cd1f, _0x2e3fc3) {
    const _0x7e610c = _0x5e4efe;
    console[_0x7e610c(137)](util[_0x7e610c(145)](_0x37cd1f, ![], _0x2e3fc3 || 5, !![]));
}
module[_0x5e4efe(133)][_0x5e4efe(146)] = function printGraph(_0x19aed3) {
    const _0x487468 = _0x5e4efe, _0x5c5405 = {}, _0x8cc29e = {}, _0x1e0e69 = pruneTickObjects(_0x19aed3[_0x487468(134)]), _0x57d051 = [];
    _0x1e0e69['forEach'](_0x2c0a73);
    function _0x2c0a73(_0x2b5b62) {
        const _0x45e578 = _0x487468, _0xff0334 = _0x2b5b62[_0x45e578(125)][_0x45e578(147)](/WRAP/, '')[_0x45e578(148)]();
        if (!_0x5c5405[_0xff0334])
            _0x5c5405[_0xff0334] = 1;
        const _0x47d1b5 = _0xff0334 + ':' + _0x5c5405[_0xff0334]++;
        _0x8cc29e[_0x2b5b62['uid']] = _0x47d1b5;
        const _0x3cb006 = _0x8cc29e[_0x2b5b62[_0x45e578(129)]] || null;
        _0x57d051[_0x45e578(136)]({
            'type': _0x2b5b62['type'],
            'id': _0x47d1b5,
            'triggerAsyncId': _0x3cb006
        });
    }
    inspect(_0x57d051);
};