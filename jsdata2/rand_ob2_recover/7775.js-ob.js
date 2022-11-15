var ENV = ENV || function () {
    var _0xe95c4b = _0x5693, _0x5d2d74 = !![], _0x6a0ac = 0, _0x2bf9b7, _0x33eb30;
    (_0x33eb30 = String[_0xe95c4b(361)])[_0xe95c4b(362)] || (_0x33eb30['lpad'] = function (_0x540fcb, _0x2bb165) {
        var _0x11a735 = _0xe95c4b;
        return _0x540fcb['repeat']((_0x2bb165 - this[_0x11a735(363)]) / _0x540fcb['length'])[_0x11a735(364)](this);
    });
    function _0x2261e7(_0x52ffae) {
        var _0x525d0a = _0xe95c4b, _0x1158d6 = parseFloat(_0x52ffae)[_0x525d0a(365)](2);
        return _0x52ffae > 60 && (minutes = Math[_0x525d0a(366)](_0x52ffae / 60), comps = (_0x52ffae % 60)[_0x525d0a(365)](2)[_0x525d0a(367)]('.'), seconds = comps[0][_0x525d0a(362)]('0', 2), ms = comps[1], _0x1158d6 = minutes + ':' + seconds + '.' + ms), _0x1158d6;
    }
    function _0x17d64c(_0x49c328) {
        var _0x231222 = _0xe95c4b, _0x40832 = _0x231222(368);
        if (_0x49c328 >= 10)
            _0x40832 += _0x231222(369);
        else
            _0x49c328 >= 1 ? _0x40832 += ' warn' : _0x40832 += ' short';
        return _0x40832;
    }
    function _0xdf3420(_0x26f3c7) {
        var _0x354da5 = _0xe95c4b, _0x493585 = _0x354da5(370);
        if (_0x26f3c7 >= 20)
            _0x493585 += ' label-important';
        else
            _0x26f3c7 >= 10 ? _0x493585 += ' label-warning' : _0x493585 += _0x354da5(371);
        return _0x493585;
    }
    function _0x581fe7(_0x2f041e) {
        var _0x50dd65 = _0xe95c4b;
        !_0x2f041e && (_0x2f041e = {});
        var _0x55b26b = Math[_0x50dd65(372)]() * 15;
        return _0x2f041e['elapsed'] = _0x55b26b, _0x2f041e[_0x50dd65(373)] = _0x2261e7(_0x55b26b), _0x2f041e[_0x50dd65(374)] = _0x17d64c(_0x55b26b), _0x2f041e[_0x50dd65(375)] = 'SELECT blah FROM something', _0x2f041e[_0x50dd65(376)] = Math[_0x50dd65(372)]() < 0.5, Math[_0x50dd65(372)]() < 0.2 && (_0x2f041e['query'] = _0x50dd65(377)), Math['random']() < 0.1 && (_0x2f041e[_0x50dd65(375)] = 'vacuum'), _0x2f041e;
    }
    function _0x53abe9(_0x5959f4) {
        var _0x1ef21a = _0xe95c4b;
        if (_0x5959f4)
            _0x5959f4[_0x1ef21a(373)] = '', _0x5959f4[_0x1ef21a(374)] = '', _0x5959f4[_0x1ef21a(375)] = '', _0x5959f4['elapsed'] = null, _0x5959f4[_0x1ef21a(376)] = null;
        else
            return {
                'query': _0x1ef21a(378),
                'formatElapsed': '',
                'elapsedClassName': ''
            };
    }
    function _0x5f5988(_0x2f3e11, _0x40544f, _0x480141) {
        var _0x1e4cae = _0xe95c4b, _0x280381 = Math[_0x1e4cae(366)](Math[_0x1e4cae(372)]() * 10 + 1);
        !_0x2f3e11 && (_0x2f3e11 = {});
        _0x2f3e11[_0x1e4cae(379)] = _0x480141, _0x2f3e11[_0x1e4cae(380)] = _0x280381;
        !_0x2f3e11['lastSample'] && (_0x2f3e11[_0x1e4cae(381)] = {});
        !_0x2f3e11[_0x1e4cae(381)]['topFiveQueries'] && (_0x2f3e11[_0x1e4cae(381)][_0x1e4cae(382)] = []);
        if (_0x40544f) {
            if (!_0x2f3e11[_0x1e4cae(381)][_0x1e4cae(383)]) {
                _0x2f3e11[_0x1e4cae(381)][_0x1e4cae(383)] = [];
                for (var _0x124629 = 0; _0x124629 < 12; _0x124629++) {
                    _0x2f3e11[_0x1e4cae(381)]['queries'][_0x124629] = _0x53abe9();
                }
            }
            for (var _0x2961fe in _0x2f3e11['lastSample'][_0x1e4cae(383)]) {
                var _0x452917 = _0x2f3e11['lastSample'][_0x1e4cae(383)][_0x2961fe];
                _0x2961fe <= _0x280381 ? _0x581fe7(_0x452917) : _0x53abe9(_0x452917);
            }
        } else {
            _0x2f3e11['lastSample'][_0x1e4cae(383)] = [];
            for (var _0x2961fe = 0; _0x2961fe < 12; _0x2961fe++) {
                if (_0x2961fe < _0x280381) {
                    var _0x452917 = _0x581fe7(_0x53abe9());
                    _0x2f3e11['lastSample'][_0x1e4cae(383)][_0x1e4cae(384)](_0x452917);
                } else
                    _0x2f3e11[_0x1e4cae(381)]['queries']['push'](_0x53abe9());
            }
        }
        for (var _0x4128d9 = 0; _0x4128d9 < 5; _0x4128d9++) {
            var _0x81a171 = _0x2f3e11[_0x1e4cae(381)][_0x1e4cae(383)][_0x4128d9];
            _0x2f3e11[_0x1e4cae(381)]['topFiveQueries'][_0x4128d9] = _0x81a171;
        }
        return _0x2f3e11[_0x1e4cae(381)][_0x1e4cae(380)] = _0x280381, _0x2f3e11['lastSample']['countClassName'] = _0xdf3420(_0x280381), _0x2f3e11;
    }
    function _0x1453a1(_0x21db90) {
        var _0x2b2299 = _0xe95c4b, _0xfb03b2 = _0x2bf9b7;
        if (!_0x21db90) {
            _0x2bf9b7 = [];
            for (var _0x4e3142 = 1; _0x4e3142 <= ENV['rows']; _0x4e3142++) {
                _0x2bf9b7[_0x2b2299(384)]({
                    'dbname': _0x2b2299(385) + _0x4e3142,
                    'query': '',
                    'formatElapsed': '',
                    'elapsedClassName': ''
                }), _0x2bf9b7[_0x2b2299(384)]({
                    'dbname': 'cluster' + _0x4e3142 + _0x2b2299(386),
                    'query': '',
                    'formatElapsed': '',
                    'elapsedClassName': ''
                });
            }
        }
        if (!_0x2bf9b7) {
            _0x2bf9b7 = [];
            for (var _0x4e3142 = 1; _0x4e3142 <= ENV[_0x2b2299(387)]; _0x4e3142++) {
                _0x2bf9b7[_0x2b2299(384)]({ 'dbname': _0x2b2299(385) + _0x4e3142 }), _0x2bf9b7['push']({ 'dbname': _0x2b2299(385) + _0x4e3142 + ' slave' });
            }
            _0xfb03b2 = _0x2bf9b7;
        }
        for (var _0x4e3142 in _0x2bf9b7) {
            var _0x6c53a7 = _0x2bf9b7[_0x4e3142];
            !_0x21db90 && _0xfb03b2 && _0xfb03b2[_0x4e3142] && (_0x6c53a7['lastSample'] = _0xfb03b2[_0x4e3142][_0x2b2299(381)]), !_0x6c53a7[_0x2b2299(381)] || Math['random']() < ENV[_0x2b2299(388)]() ? (_0x6a0ac = _0x6a0ac + 1, !_0x21db90 && (_0x6c53a7[_0x2b2299(381)] = null), _0x5f5988(_0x6c53a7, _0x21db90, _0x6a0ac)) : _0x2bf9b7[_0x4e3142] = _0xfb03b2[_0x4e3142];
        }
        return _0x5d2d74 = ![], {
            'toArray': function () {
                return _0x2bf9b7;
            }
        };
    }
    var _0x167081 = 0.5;
    function _0x5b0038(_0x14e656) {
        return _0x14e656 ? (_0x167081 = _0x14e656, _0x167081) : _0x167081;
    }
    var _0x5dd56c = document[_0xe95c4b(389)](_0xe95c4b(390)), _0x36e422 = _0x5dd56c[_0xe95c4b(391)], _0x1b6850 = document['createElement'](_0xe95c4b(392));
    _0x1b6850[_0xe95c4b(393)][_0xe95c4b(394)] = _0xe95c4b(395);
    var _0x3a8c46 = document['createElement'](_0xe95c4b(396)), _0x104a28 = document['createElement'](_0xe95c4b(370));
    return _0x104a28[_0xe95c4b(397)] = _0xe95c4b(398) + (_0x167081 * 100)[_0xe95c4b(365)](0) + '%', _0x104a28['id'] = _0xe95c4b(399), _0x3a8c46[_0xe95c4b(400)](_0xe95c4b(401), _0xe95c4b(402)), _0x3a8c46[_0xe95c4b(393)][_0xe95c4b(394)] = _0xe95c4b(403), _0x3a8c46[_0xe95c4b(404)]('change', function (_0x70f71d) {
        var _0x49ee66 = _0xe95c4b;
        ENV['mutations'](_0x70f71d[_0x49ee66(405)]['value'] / 100), document[_0x49ee66(389)]('#ratioval')['innerHTML'] = 'mutations : ' + (ENV[_0x49ee66(388)]() * 100)[_0x49ee66(365)](0) + '%';
    }), _0x1b6850[_0xe95c4b(406)](_0x104a28), _0x1b6850[_0xe95c4b(406)](_0x3a8c46), _0x5dd56c[_0xe95c4b(407)](_0x1b6850, _0x36e422), {
        'generateData': _0x1453a1,
        'rows': 50,
        'timeout': 0,
        'mutations': _0x5b0038
    };
}();