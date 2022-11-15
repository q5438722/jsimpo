(function (_0x48e3a4) {
    var _0x236174 = _0x25d6;
    define([_0x236174(398)], function (_0x2f3a8f) {
        var _0x83f750 = _0x236174, _0x4aff63, _0x40cd42;
        _0x4aff63 = {}, _0x40cd42 = function () {
            var _0x25ed5d = _0x25d6, _0x3c020a, _0x554cbc, _0x58b934;
            _0x3c020a = 1, _0x554cbc = {}, _0x58b934 = ![];
            function _0x1b904c(_0x362eff, _0x2761ce) {
                var _0x237e22 = _0x25d6;
                this[_0x237e22(399)] = _0x362eff, this['args'] = Array[_0x237e22(400)][_0x237e22(401)]['call'](_0x2761ce);
            }
            return _0x1b904c['prototype'][_0x25ed5d(402)] = function () {
                var _0x3e0143 = _0x25ed5d;
                if (_0x2f3a8f['isFunction'](this['handler']))
                    this[_0x3e0143(399)]['apply'](undefined, this[_0x3e0143(403)]);
                else {
                    var _0xeb803 = '' + this[_0x3e0143(399)];
                    eval(_0xeb803);
                }
            }, {
                'addFromSetImmediateArguments': function (_0x56889c) {
                    var _0x2e888d = _0x25ed5d, _0x5c93f2, _0x9f8e66, _0x18a1e4, _0x2705f9;
                    return _0x5c93f2 = _0x56889c[0], _0x9f8e66 = Array[_0x2e888d(400)]['slice'][_0x2e888d(404)](_0x56889c, 1), _0x18a1e4 = new _0x1b904c(_0x5c93f2, _0x9f8e66), _0x2705f9 = _0x3c020a++, _0x554cbc[_0x2705f9] = _0x18a1e4, _0x2705f9;
                },
                'runIfPresent': function (_0x5ad4b8) {
                    var _0x497d5d = _0x25ed5d;
                    if (!_0x58b934) {
                        var _0x493bf8 = _0x554cbc[_0x5ad4b8];
                        if (_0x493bf8) {
                            _0x58b934 = !![];
                            try {
                                _0x493bf8['run']();
                            } finally {
                                delete _0x554cbc[_0x5ad4b8], _0x58b934 = ![];
                            }
                        }
                    } else
                        _0x48e3a4[_0x497d5d(405)](function () {
                            var _0x419bef = _0x497d5d;
                            _0x40cd42[_0x419bef(406)](_0x5ad4b8);
                        }, 0);
                },
                'remove': function (_0xee880b) {
                    delete _0x554cbc[_0xee880b];
                }
            };
        }();
        function _0x3b8ccc(_0x2e7fc4) {
            var _0x2a7502 = _0x25d6;
            return _0x2f3a8f[_0x2a7502(407)](_0x4aff63[_0x2e7fc4]) && (_0x4aff63[_0x2e7fc4] = _0x4aff63[_0x2e7fc4](_0x48e3a4)), _0x4aff63[_0x2e7fc4];
        }
        function _0x2e8376(_0x23fa79, _0x26daeb, _0x275b74) {
            _0x4aff63[_0x23fa79] = _0x275b74 ? _0x26daeb(_0x48e3a4, d, el) : _0x26daeb;
        }
        function _0x5b8254(_0x4046cb) {
            var _0x226ded = _0x25d6;
            _0x4046cb[_0x226ded(408)] = _0x48e3a4['msSetImmediate'], _0x4046cb[_0x226ded(409)] = _0x48e3a4[_0x226ded(410)];
        }
        function _0x5947ac(_0x451e1c) {
            var _0x58a8f8 = _0x25d6, _0x5f531d = 'cujojs/poly.setImmediate' + Math[_0x58a8f8(411)]();
            function _0x15728f(_0x26940d, _0x1e614e) {
                var _0x5d7747 = _0x58a8f8;
                return typeof _0x26940d === _0x5d7747(412) && _0x26940d[_0x5d7747(413)](0, _0x1e614e['length']) === _0x1e614e;
            }
            function _0x2b4125(_0x905628) {
                var _0x4c8a9d = _0x58a8f8;
                if (_0x905628['source'] === _0x48e3a4 && _0x15728f(_0x905628[_0x4c8a9d(414)], _0x5f531d)) {
                    var _0x52ff74 = _0x905628[_0x4c8a9d(414)][_0x4c8a9d(413)](_0x5f531d[_0x4c8a9d(415)]);
                    _0x40cd42['runIfPresent'](_0x52ff74);
                }
            }
            _0x48e3a4['addEventListener'](_0x58a8f8(416), _0x2b4125, ![]), _0x451e1c[_0x58a8f8(408)] = function () {
                var _0x1ed860 = _0x58a8f8, _0x34dbf5 = _0x40cd42['addFromSetImmediateArguments'](arguments);
                return _0x48e3a4[_0x1ed860(417)](_0x5f531d + _0x34dbf5, '*'), _0x34dbf5;
            };
        }
        function _0x5b8181(_0xcb22ab) {
            _0xcb22ab['setImmediate'] = function () {
                var _0x29bf64 = _0x25d6, _0x78b337 = _0x40cd42[_0x29bf64(418)](arguments), _0x9bef3c = _0x48e3a4['document'][_0x29bf64(419)](_0x29bf64(420));
                return _0x9bef3c['onreadystatechange'] = function () {
                    var _0x26c29d = _0x29bf64;
                    _0x40cd42[_0x26c29d(406)](_0x78b337), _0x9bef3c[_0x26c29d(421)] = null, _0x9bef3c[_0x26c29d(422)][_0x26c29d(423)](_0x9bef3c), _0x9bef3c = null;
                }, _0x48e3a4[_0x29bf64(424)][_0x29bf64(425)][_0x29bf64(426)](_0x9bef3c), _0x78b337;
            };
        }
        function _0x302ea6(_0x6f50c6) {
            var _0x46528f = _0x25d6;
            _0x6f50c6[_0x46528f(408)] = function () {
                var _0x1791fd = _0x46528f, _0x908767 = _0x40cd42[_0x1791fd(418)](arguments);
                return _0x48e3a4['setTimeout'](function () {
                    var _0x28ecbf = _0x1791fd;
                    _0x40cd42[_0x28ecbf(406)](_0x908767);
                }, 0), _0x908767;
            };
        }
        _0x2e8376(_0x83f750(427), function (_0x270313) {
            var _0x3ab789 = _0x83f750;
            return _0x2f3a8f['isFunction'](_0x270313[_0x3ab789(408)]);
        }), _0x2e8376(_0x83f750(428), function (_0x28473e) {
            var _0x37f81d = _0x83f750;
            return _0x2f3a8f[_0x37f81d(407)](_0x28473e['msSetImmediate']);
        }), _0x2e8376(_0x83f750(429), function (_0x5564ad) {
            var _0x581a56 = _0x83f750, _0x18997b, _0x5f1558;
            _0x18997b = !![], _0x5f1558 = _0x5564ad[_0x581a56(430)];
            if (!_0x5564ad[_0x581a56(417)])
                return ![];
            return _0x5564ad[_0x581a56(430)] = function () {
                _0x18997b = ![];
            }, _0x5564ad[_0x581a56(417)]('', '*'), _0x5564ad[_0x581a56(430)] = _0x5f1558, _0x18997b;
        }), _0x2e8376(_0x83f750(431), function (_0x2c5d99) {
            var _0xfa18d5 = _0x83f750;
            return _0xfa18d5(424) in _0x2c5d99 && 'onreadystatechange' in _0x2c5d99[_0xfa18d5(424)][_0xfa18d5(419)](_0xfa18d5(420));
        });
        if (!_0x3b8ccc(_0x83f750(427))) {
            if (_0x3b8ccc(_0x83f750(428)))
                _0x5b8254(_0x48e3a4);
            else {
                if (_0x3b8ccc(_0x83f750(429)))
                    _0x5947ac(_0x48e3a4);
                else
                    _0x3b8ccc('script-onreadystatechange') ? _0x5b8181(_0x48e3a4) : _0x302ea6(_0x48e3a4);
                _0x48e3a4[_0x83f750(409)] = _0x40cd42['remove'];
            }
        }
    });
}(this['global'] || this));