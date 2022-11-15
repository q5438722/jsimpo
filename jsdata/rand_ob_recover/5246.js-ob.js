var parser = require(_0x983d7e(509)), test = require(_0x983d7e(510))[_0x983d7e(511)], path = require(_0x983d7e(512)), files = {
        'foo': path[_0x983d7e(513)](__dirname, _0x983d7e(514)),
        'bar': path[_0x983d7e(513)](__dirname, _0x983d7e(515))
    }, sources = {
        'foo': _0x983d7e(516),
        'bar': 'notreal bar'
    }, cache = {};
cache[files[_0x983d7e(517)]] = {
    'source': sources[_0x983d7e(517)],
    'deps': { './bar': files['bar'] }
}, cache[files[_0x983d7e(518)]] = {
    'source': sources[_0x983d7e(518)],
    'deps': {}
}, test(_0x983d7e(519), function (_0x37bbf5) {
    var _0x4419e4 = _0x983d7e, _0x5e0c04 = {
            'uikuT': _0x4419e4(517),
            'WsnBw': _0x4419e4(520),
            'ZhfNN': _0x4419e4(521),
            'RfqaN': function (_0x9b9688, _0x1c9abd) {
                return _0x9b9688(_0x1c9abd);
            },
            'FShSH': _0x4419e4(522)
        };
    _0x37bbf5[_0x4419e4(523)](-5507 + -6006 + 11514);
    var _0x2f9077 = _0x5e0c04[_0x4419e4(524)](parser, { 'cache': cache });
    _0x2f9077['write']({
        'id': files['bar'],
        'expose': _0x5e0c04[_0x4419e4(525)],
        'entry': ![]
    }), _0x2f9077['end']({
        'id': _0x5e0c04[_0x4419e4(526)],
        'file': files[_0x4419e4(517)],
        'entry': !![],
        'expose': _0x5e0c04[_0x4419e4(527)]
    });
    var _0x21e5f9 = [];
    _0x2f9077['on'](_0x5e0c04['FShSH'], function (_0x4ce017) {
        var _0x59e302 = _0x4419e4;
        _0x21e5f9[_0x59e302(528)](_0x4ce017);
    }), _0x2f9077['on']('end', function () {
        var _0x15ab68 = _0x4419e4;
        _0x37bbf5[_0x15ab68(529)](_0x21e5f9[_0x15ab68(530)](cmp), [
            {
                'id': _0x5e0c04[_0x15ab68(526)],
                'expose': _0x5e0c04['WsnBw'],
                'entry': !![],
                'file': files['foo'],
                'source': sources['foo'],
                'deps': { './bar': files[_0x15ab68(518)] }
            },
            {
                'id': files[_0x15ab68(518)],
                'expose': _0x5e0c04['ZhfNN'],
                'file': files[_0x15ab68(518)],
                'source': sources[_0x15ab68(518)],
                'deps': {}
            }
        ][_0x15ab68(530)](cmp));
    });
});
function cmp(_0x460ef7, _0x44bdcd) {
    var _0x10a8f2 = _0x983d7e, _0xd2f94b = {
            'Rzpix': function (_0xf7beda, _0x20cca4) {
                return _0xf7beda < _0x20cca4;
            }
        };
    return _0xd2f94b[_0x10a8f2(531)](_0x460ef7['id'], _0x44bdcd['id']) ? -(1894 + -2 * 3464 + -5 * -1007) : -79 * 25 + 325 * 1 + 1651;
}