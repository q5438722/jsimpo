var ENV = ENV || function () {
    var _0x5b3983 = _0xd46e, _0x38ccd2 = !![], _0x2b246a = 0, _0x27e3b7, _0x4472fa;
    (_0x4472fa = String['prototype'])[_0x5b3983(331)] || (_0x4472fa[_0x5b3983(331)] = function (_0x43a1c8, _0x1f2829) {
        var _0x732426 = _0x5b3983;
        return _0x43a1c8[_0x732426(332)]((_0x1f2829 - this['length']) / _0x43a1c8[_0x732426(333)])[_0x732426(334)](this);
    });
    function _0x3b19e3(_0x3edf75) {
        var _0x18af98 = _0x5b3983, _0x3789e5 = parseFloat(_0x3edf75)[_0x18af98(335)](2);
        return _0x3edf75 > 60 && (minutes = Math[_0x18af98(336)](_0x3edf75 / 60), comps = (_0x3edf75 % 60)['toFixed'](2)[_0x18af98(337)]('.'), seconds = comps[0]['lpad']('0', 2), ms = comps[1], _0x3789e5 = minutes + ':' + seconds + '.' + ms), _0x3789e5;
    }
    function _0xf7dd97(_0x5731c1) {
        var _0x50ec6c = _0x5b3983, _0x477047 = 'Query elapsed';
        if (_0x5731c1 >= 10)
            _0x477047 += _0x50ec6c(338);
        else
            _0x5731c1 >= 1 ? _0x477047 += _0x50ec6c(339) : _0x477047 += _0x50ec6c(340);
        return _0x477047;
    }
    function _0x4f23a7(_0x291414) {
        var _0x5249d8 = _0x5b3983, _0x33e872 = _0x5249d8(341);
        if (_0x291414 >= 20)
            _0x33e872 += ' label-important';
        else
            _0x291414 >= 10 ? _0x33e872 += _0x5249d8(342) : _0x33e872 += _0x5249d8(343);
        return _0x33e872;
    }
    function _0x415418(_0x50b197) {
        var _0x2b6711 = _0x5b3983;
        !_0x50b197 && (_0x50b197 = {});
        var _0x28ef73 = Math['random']() * 15;
        return _0x50b197['elapsed'] = _0x28ef73, _0x50b197['formatElapsed'] = _0x3b19e3(_0x28ef73), _0x50b197[_0x2b6711(344)] = _0xf7dd97(_0x28ef73), _0x50b197[_0x2b6711(345)] = 'SELECT blah FROM something', _0x50b197[_0x2b6711(346)] = Math[_0x2b6711(347)]() < 0.5, Math[_0x2b6711(347)]() < 0.2 && (_0x50b197['query'] = _0x2b6711(348)), Math['random']() < 0.1 && (_0x50b197[_0x2b6711(345)] = 'vacuum'), _0x50b197;
    }
    function _0x61b463(_0x42cc8c) {
        var _0x3f0f2c = _0x5b3983;
        if (_0x42cc8c)
            _0x42cc8c[_0x3f0f2c(349)] = '', _0x42cc8c['elapsedClassName'] = '', _0x42cc8c[_0x3f0f2c(345)] = '', _0x42cc8c[_0x3f0f2c(350)] = null, _0x42cc8c['waiting'] = null;
        else
            return {
                'query': _0x3f0f2c(351),
                'formatElapsed': '',
                'elapsedClassName': ''
            };
    }
    function _0x43655d(_0x1313de, _0x3ec9ba, _0x191b9c) {
        var _0x2b4316 = _0x5b3983, _0x5cca42 = Math[_0x2b4316(336)](Math[_0x2b4316(347)]() * 10 + 1);
        !_0x1313de && (_0x1313de = {});
        _0x1313de[_0x2b4316(352)] = _0x191b9c, _0x1313de[_0x2b4316(353)] = _0x5cca42;
        !_0x1313de[_0x2b4316(354)] && (_0x1313de[_0x2b4316(354)] = {});
        !_0x1313de[_0x2b4316(354)][_0x2b4316(355)] && (_0x1313de['lastSample']['topFiveQueries'] = []);
        if (_0x3ec9ba) {
            if (!_0x1313de['lastSample'][_0x2b4316(356)]) {
                _0x1313de[_0x2b4316(354)][_0x2b4316(356)] = [];
                for (var _0x2abf6f = 0; _0x2abf6f < 12; _0x2abf6f++) {
                    _0x1313de[_0x2b4316(354)][_0x2b4316(356)][_0x2abf6f] = _0x61b463();
                }
            }
            for (var _0x558ccf in _0x1313de[_0x2b4316(354)]['queries']) {
                var _0x3f2650 = _0x1313de[_0x2b4316(354)]['queries'][_0x558ccf];
                _0x558ccf <= _0x5cca42 ? _0x415418(_0x3f2650) : _0x61b463(_0x3f2650);
            }
        } else {
            _0x1313de[_0x2b4316(354)][_0x2b4316(356)] = [];
            for (var _0x558ccf = 0; _0x558ccf < 12; _0x558ccf++) {
                if (_0x558ccf < _0x5cca42) {
                    var _0x3f2650 = _0x415418(_0x61b463());
                    _0x1313de[_0x2b4316(354)][_0x2b4316(356)]['push'](_0x3f2650);
                } else
                    _0x1313de[_0x2b4316(354)]['queries']['push'](_0x61b463());
            }
        }
        for (var _0x25ee79 = 0; _0x25ee79 < 5; _0x25ee79++) {
            var _0x1c6c20 = _0x1313de[_0x2b4316(354)][_0x2b4316(356)][_0x25ee79];
            _0x1313de[_0x2b4316(354)][_0x2b4316(355)][_0x25ee79] = _0x1c6c20;
        }
        return _0x1313de[_0x2b4316(354)]['nbQueries'] = _0x5cca42, _0x1313de[_0x2b4316(354)][_0x2b4316(357)] = _0x4f23a7(_0x5cca42), _0x1313de;
    }
    function _0x25e5fb(_0x97f232) {
        var _0x1097a2 = _0x5b3983, _0x7802be = _0x27e3b7;
        if (!_0x97f232) {
            _0x27e3b7 = [];
            for (var _0x44c0b2 = 1; _0x44c0b2 <= ENV[_0x1097a2(358)]; _0x44c0b2++) {
                _0x27e3b7[_0x1097a2(359)]({
                    'dbname': _0x1097a2(360) + _0x44c0b2,
                    'query': '',
                    'formatElapsed': '',
                    'elapsedClassName': ''
                }), _0x27e3b7['push']({
                    'dbname': _0x1097a2(360) + _0x44c0b2 + _0x1097a2(361),
                    'query': '',
                    'formatElapsed': '',
                    'elapsedClassName': ''
                });
            }
        }
        if (!_0x27e3b7) {
            _0x27e3b7 = [];
            for (var _0x44c0b2 = 1; _0x44c0b2 <= ENV[_0x1097a2(358)]; _0x44c0b2++) {
                _0x27e3b7[_0x1097a2(359)]({ 'dbname': _0x1097a2(360) + _0x44c0b2 }), _0x27e3b7[_0x1097a2(359)]({ 'dbname': 'cluster' + _0x44c0b2 + _0x1097a2(361) });
            }
            _0x7802be = _0x27e3b7;
        }
        for (var _0x44c0b2 in _0x27e3b7) {
            var _0x1d66f4 = _0x27e3b7[_0x44c0b2];
            !_0x97f232 && _0x7802be && _0x7802be[_0x44c0b2] && (_0x1d66f4['lastSample'] = _0x7802be[_0x44c0b2][_0x1097a2(354)]), !_0x1d66f4['lastSample'] || Math['random']() < ENV[_0x1097a2(362)]() ? (_0x2b246a = _0x2b246a + 1, !_0x97f232 && (_0x1d66f4['lastSample'] = null), _0x43655d(_0x1d66f4, _0x97f232, _0x2b246a)) : _0x27e3b7[_0x44c0b2] = _0x7802be[_0x44c0b2];
        }
        return _0x38ccd2 = ![], {
            'toArray': function () {
                return _0x27e3b7;
            }
        };
    }
    var _0x38a4a8 = 0.5;
    function _0x29fd2e(_0x1f05ef) {
        return _0x1f05ef ? (_0x38a4a8 = _0x1f05ef, _0x38a4a8) : _0x38a4a8;
    }
    var _0x25fcbb = document['querySelector'](_0x5b3983(363)), _0x159440 = _0x25fcbb['firstChild'], _0x29e766 = document[_0x5b3983(364)](_0x5b3983(365));
    _0x29e766[_0x5b3983(366)][_0x5b3983(367)] = 'display: flex';
    var _0x2547b5 = document[_0x5b3983(364)](_0x5b3983(368)), _0x2f40c4 = document['createElement'](_0x5b3983(341));
    return _0x2f40c4['innerHTML'] = _0x5b3983(369) + (_0x38a4a8 * 100)[_0x5b3983(335)](0) + '%', _0x2f40c4['id'] = _0x5b3983(370), _0x2547b5[_0x5b3983(371)](_0x5b3983(372), _0x5b3983(373)), _0x2547b5[_0x5b3983(366)][_0x5b3983(367)] = 'margin-bottom: 10px; margin-top: 5px', _0x2547b5[_0x5b3983(374)](_0x5b3983(375), function (_0x1552bc) {
        var _0x311830 = _0x5b3983;
        ENV[_0x311830(362)](_0x1552bc[_0x311830(376)][_0x311830(377)] / 100), document[_0x311830(378)]('#ratioval')[_0x311830(379)] = 'mutations : ' + (ENV[_0x311830(362)]() * 100)[_0x311830(335)](0) + '%';
    }), _0x29e766[_0x5b3983(380)](_0x2f40c4), _0x29e766[_0x5b3983(380)](_0x2547b5), _0x25fcbb[_0x5b3983(381)](_0x29e766, _0x159440), {
        'generateData': _0x25e5fb,
        'rows': 50,
        'timeout': 0,
        'mutations': _0x29fd2e
    };
}();