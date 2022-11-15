var ENV = ENV || function () {
    var _0x659109 = !![], _0x5af7f4 = 0x14d2 + -0x1694 + 0x1c2, _0x561868, _0x5cc269;
    (_0x5cc269 = String['prototype'])['lpad'] || (_0x5cc269['lpad'] = function (_0x187534, _0x1d763c) {
        return _0x187534['repeat']((_0x1d763c - this['length']) / _0x187534['length'])['concat'](this);
    });
    function _0x2fa1fa(_0x303dac) {
        var _0x2a6f24 = parseFloat(_0x303dac)['toFixed'](-0x1b63 + 0x81 * 0x29 + 0x4 * 0x1af);
        return _0x303dac > -0x63b + -0x2566 + 0x2bdd && (minutes = Math['floor'](_0x303dac / (0x1b92 + 0x182 * 0x10 + -0x3376)), comps = (_0x303dac % (-0x63 * -0x25 + -0x10 * -0xca + -0x1ab3))['toFixed'](0x9c6 + -0x816 + -0x1ae)['split']('.'), seconds = comps[-0x12fc + 0x24c * 0x1 + 0x4 * 0x42c]['lpad']('0', 0x378 + -0x627 + 0x2b1), ms = comps[0x2 * -0x1103 + 0x11bc + 0x104b], _0x2a6f24 = minutes + ':' + seconds + '.' + ms), _0x2a6f24;
    }
    function _0x136a42(_0xb476d6) {
        var _0x571fe5 = 'Query\x20elapsed';
        if (_0xb476d6 >= -0x3c1 * 0x4 + 0x6b0 + 0x85e)
            _0x571fe5 += '\x20warn_long';
        else
            _0xb476d6 >= -0x531 + 0x22 * -0x59 + 0x1104 ? _0x571fe5 += '\x20warn' : _0x571fe5 += '\x20short';
        return _0x571fe5;
    }
    function _0x5f4c85(_0x261985) {
        var _0x184de7 = 'label';
        if (_0x261985 >= 0x124e + 0x115c + -0x2 * 0x11cb)
            _0x184de7 += '\x20label-important';
        else
            _0x261985 >= -0xec + -0xfa1 + 0x1097 ? _0x184de7 += '\x20label-warning' : _0x184de7 += '\x20label-success';
        return _0x184de7;
    }
    function _0x3beacd(_0x13118e) {
        !_0x13118e && (_0x13118e = {});
        var _0x442ed2 = Math['random']() * (-0x226b + 0x12f8 * 0x1 + 0x5 * 0x31a);
        return _0x13118e['elapsed'] = _0x442ed2, _0x13118e['formatElapsed'] = _0x2fa1fa(_0x442ed2), _0x13118e['elapsedClassName'] = _0x136a42(_0x442ed2), _0x13118e['query'] = 'SELECT\x20blah\x20FROM\x20something', _0x13118e['waiting'] = Math['random']() < 0x1d87 + 0xe7d * -0x2 + -0x8d + 0.5, Math['random']() < -0x6 * -0x2e7 + -0x4d1 + -0xc99 + 0.2 && (_0x13118e['query'] = '<IDLE>\x20in\x20transaction'), Math['random']() < 0xacf * 0x1 + -0xc03 + -0xe * -0x16 + 0.1 && (_0x13118e['query'] = 'vacuum'), _0x13118e;
    }
    function _0x3bbf44(_0x5192bb) {
        if (_0x5192bb)
            _0x5192bb['formatElapsed'] = '', _0x5192bb['elapsedClassName'] = '', _0x5192bb['query'] = '', _0x5192bb['elapsed'] = null, _0x5192bb['waiting'] = null;
        else
            return {
                'query': '***',
                'formatElapsed': '',
                'elapsedClassName': ''
            };
    }
    function _0x32971e(_0x3317de, _0x150757, _0x1fdc58) {
        var _0x360268 = Math['floor'](Math['random']() * (-0x1 * 0x989 + 0x3c9 * 0x7 + -0x10ec) + (0x4 * -0xca + 0x192 + -0x1 * -0x197));
        !_0x3317de && (_0x3317de = {});
        _0x3317de['lastMutationId'] = _0x1fdc58, _0x3317de['nbQueries'] = _0x360268;
        !_0x3317de['lastSample'] && (_0x3317de['lastSample'] = {});
        !_0x3317de['lastSample']['topFiveQueries'] && (_0x3317de['lastSample']['topFiveQueries'] = []);
        if (_0x150757) {
            if (!_0x3317de['lastSample']['queries']) {
                _0x3317de['lastSample']['queries'] = [];
                for (var _0x2b5391 = 0xebe + -0x608 * 0x5 + -0x1 * -0xf6a; _0x2b5391 < 0xea * -0x17 + 0x182 * 0xd + 0x178; _0x2b5391++) {
                    _0x3317de['lastSample']['queries'][_0x2b5391] = _0x3bbf44();
                }
            }
            for (var _0x45f801 in _0x3317de['lastSample']['queries']) {
                var _0x465372 = _0x3317de['lastSample']['queries'][_0x45f801];
                _0x45f801 <= _0x360268 ? _0x3beacd(_0x465372) : _0x3bbf44(_0x465372);
            }
        } else {
            _0x3317de['lastSample']['queries'] = [];
            for (var _0x45f801 = -0x4 * -0x88c + -0x1a * 0x6b + -0x1752; _0x45f801 < 0xba8 + -0x4 * -0x1a3 + -0x1228 * 0x1; _0x45f801++) {
                if (_0x45f801 < _0x360268) {
                    var _0x465372 = _0x3beacd(_0x3bbf44());
                    _0x3317de['lastSample']['queries']['push'](_0x465372);
                } else
                    _0x3317de['lastSample']['queries']['push'](_0x3bbf44());
            }
        }
        for (var _0x217c4e = -0xec3 + 0x17ce + -0x90b; _0x217c4e < -0x1 * 0x17 + 0x24a4 + -0x8 * 0x491; _0x217c4e++) {
            var _0x3765d6 = _0x3317de['lastSample']['queries'][_0x217c4e];
            _0x3317de['lastSample']['topFiveQueries'][_0x217c4e] = _0x3765d6;
        }
        return _0x3317de['lastSample']['nbQueries'] = _0x360268, _0x3317de['lastSample']['countClassName'] = _0x5f4c85(_0x360268), _0x3317de;
    }
    function _0x4c2f04(_0x497489) {
        var _0x9defb2 = _0x561868;
        if (!_0x497489) {
            _0x561868 = [];
            for (var _0x312841 = 0x1c15 + -0x2065 + 0x451; _0x312841 <= ENV['rows']; _0x312841++) {
                _0x561868['push']({
                    'dbname': 'cluster' + _0x312841,
                    'query': '',
                    'formatElapsed': '',
                    'elapsedClassName': ''
                }), _0x561868['push']({
                    'dbname': 'cluster' + _0x312841 + '\x20slave',
                    'query': '',
                    'formatElapsed': '',
                    'elapsedClassName': ''
                });
            }
        }
        if (!_0x561868) {
            _0x561868 = [];
            for (var _0x312841 = -0x5c1 * 0x5 + -0x4 * -0x4 + -0xd2 * -0x23; _0x312841 <= ENV['rows']; _0x312841++) {
                _0x561868['push']({ 'dbname': 'cluster' + _0x312841 }), _0x561868['push']({ 'dbname': 'cluster' + _0x312841 + '\x20slave' });
            }
            _0x9defb2 = _0x561868;
        }
        for (var _0x312841 in _0x561868) {
            var _0x24a365 = _0x561868[_0x312841];
            !_0x497489 && _0x9defb2 && _0x9defb2[_0x312841] && (_0x24a365['lastSample'] = _0x9defb2[_0x312841]['lastSample']), !_0x24a365['lastSample'] || Math['random']() < ENV['mutations']() ? (_0x5af7f4 = _0x5af7f4 + (-0xd38 + -0x157a * -0x1 + -0x841 * 0x1), !_0x497489 && (_0x24a365['lastSample'] = null), _0x32971e(_0x24a365, _0x497489, _0x5af7f4)) : _0x561868[_0x312841] = _0x9defb2[_0x312841];
        }
        return _0x659109 = ![], {
            'toArray': function () {
                return _0x561868;
            }
        };
    }
    var _0x3e03d3 = -0x1976 + 0x25f5 + -0xc7f + 0.5;
    function _0x5923b4(_0x1ac92f) {
        return _0x1ac92f ? (_0x3e03d3 = _0x1ac92f, _0x3e03d3) : _0x3e03d3;
    }
    var _0x4933ea = document['querySelector']('body'), _0x5356ef = _0x4933ea['firstChild'], _0x22e12e = document['createElement']('div');
    _0x22e12e['style']['cssText'] = 'display:\x20flex';
    var _0x4cb85f = document['createElement']('input'), _0x869564 = document['createElement']('label');
    return _0x869564['innerHTML'] = 'mutations\x20:\x20' + (_0x3e03d3 * (0x1022 + -0x1596 + 0x5d8))['toFixed'](-0x179c + -0x9f3 + 0x79 * 0x47) + '%', _0x869564['id'] = 'ratioval', _0x4cb85f['setAttribute']('type', 'range'), _0x4cb85f['style']['cssText'] = 'margin-bottom:\x2010px;\x20margin-top:\x205px', _0x4cb85f['addEventListener']('change', function (_0x4952a1) {
        ENV['mutations'](_0x4952a1['target']['value'] / (-0x1af8 + 0x5 * -0x409 + -0x2b * -0x11b)), document['querySelector']('#ratioval')['innerHTML'] = 'mutations\x20:\x20' + (ENV['mutations']() * (-0xa1c * -0x2 + -0x11 * 0x159 + 0x3 * 0x107))['toFixed'](0x16ef + 0xe1b + -0x250a) + '%';
    }), _0x22e12e['appendChild'](_0x869564), _0x22e12e['appendChild'](_0x4cb85f), _0x4933ea['insertBefore'](_0x22e12e, _0x5356ef), {
        'generateData': _0x4c2f04,
        'rows': 0x32,
        'timeout': 0x0,
        'mutations': _0x5923b4
    };
}();
