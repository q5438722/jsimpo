(function (_0x3346d9, _0x4b1c56) {
    var _0x1790a8 = _0x4f1c;
    if (typeof exports === _0x1790a8(121) && typeof require === _0x1790a8(122))
        module[_0x1790a8(123)] = _0x4b1c56(require(_0x1790a8(124)));
    else
        typeof define === 'function' && define['amd'] ? define([_0x1790a8(124)], function (_0x12f112) {
            var _0x560597 = _0x1790a8;
            return _0x4b1c56(_0x12f112 || _0x3346d9[_0x560597(125)]);
        }) : _0x4b1c56(Backbone);
}(this, function (_0x19c10c) {
    var _0x2e6c37 = _0x4f1c;
    function _0x54f4f8() {
        var _0xc895d1 = _0x4f1c;
        return ((1 + Math[_0xc895d1(126)]()) * 65536 | 0)[_0xc895d1(127)](16)[_0xc895d1(128)](1);
    }
    ;
    function _0x32f2ac() {
        return _0x54f4f8() + _0x54f4f8() + '-' + _0x54f4f8() + '-' + _0x54f4f8() + '-' + _0x54f4f8() + '-' + _0x54f4f8() + _0x54f4f8() + _0x54f4f8();
    }
    ;
    function _0x7aa254(_0x573d7f) {
        return _0x573d7f === Object(_0x573d7f);
    }
    function _0x2d2686(_0x1c2014, _0x494228) {
        var _0x416e68 = _0x4f1c, _0x4d4dd0 = _0x1c2014[_0x416e68(129)];
        while (_0x4d4dd0--)
            if (_0x1c2014[_0x4d4dd0] === _0x494228)
                return !![];
        return ![];
    }
    function _0x537cb8(_0x30ead3, _0x499ad9) {
        for (var _0x5ba3df in _0x499ad9)
            _0x30ead3[_0x5ba3df] = _0x499ad9[_0x5ba3df];
        return _0x30ead3;
    }
    function _0x2fe7be(_0x4a93ba, _0x1c335b) {
        var _0x41ae78 = _0x4f1c;
        if (_0x4a93ba == null)
            return void 0;
        var _0x1a2c4f = _0x4a93ba[_0x1c335b];
        return typeof _0x1a2c4f === _0x41ae78(122) ? _0x4a93ba[_0x1c335b]() : _0x1a2c4f;
    }
    return _0x19c10c[_0x2e6c37(130)] = window[_0x2e6c37(131)] = function (_0x322884, _0x37a856) {
        var _0x2135cc = _0x2e6c37;
        if (!this['localStorage'])
            throw _0x2135cc(132);
        this[_0x2135cc(133)] = _0x322884, this[_0x2135cc(134)] = _0x37a856 || {
            'serialize': function (_0x589e01) {
                var _0x464acb = _0x2135cc;
                return _0x7aa254(_0x589e01) ? JSON[_0x464acb(135)](_0x589e01) : _0x589e01;
            },
            'deserialize': function (_0x292033) {
                var _0x4cd36d = _0x2135cc;
                return _0x292033 && JSON[_0x4cd36d(136)](_0x292033);
            }
        };
        var _0x3c1456 = this[_0x2135cc(137)]()['getItem'](this[_0x2135cc(133)]);
        this[_0x2135cc(138)] = _0x3c1456 && _0x3c1456[_0x2135cc(139)](',') || [];
    }, _0x537cb8(_0x19c10c[_0x2e6c37(130)][_0x2e6c37(140)], {
        'save': function () {
            var _0xf22fd8 = _0x2e6c37;
            this['localStorage']()['setItem'](this[_0xf22fd8(133)], this['records'][_0xf22fd8(141)](','));
        },
        'create': function (_0x32c709) {
            var _0x4185be = _0x2e6c37;
            return !_0x32c709['id'] && _0x32c709['id'] !== 0 && (_0x32c709['id'] = _0x32f2ac(), _0x32c709[_0x4185be(142)](_0x32c709['idAttribute'], _0x32c709['id'])), this[_0x4185be(137)]()[_0x4185be(143)](this[_0x4185be(144)](_0x32c709['id']), this[_0x4185be(134)]['serialize'](_0x32c709)), this[_0x4185be(138)]['push'](_0x32c709['id']['toString']()), this[_0x4185be(145)](), this[_0x4185be(146)](_0x32c709);
        },
        'update': function (_0x3979fb) {
            var _0xd5d154 = _0x2e6c37;
            this[_0xd5d154(137)]()[_0xd5d154(143)](this['_itemName'](_0x3979fb['id']), this[_0xd5d154(134)][_0xd5d154(147)](_0x3979fb));
            var _0x5eacce = _0x3979fb['id'][_0xd5d154(127)]();
            return !_0x2d2686(this[_0xd5d154(138)], _0x5eacce) && (this[_0xd5d154(138)]['push'](_0x5eacce), this[_0xd5d154(145)]()), this[_0xd5d154(146)](_0x3979fb);
        },
        'find': function (_0x243642) {
            var _0x2ac76e = _0x2e6c37;
            return this[_0x2ac76e(134)][_0x2ac76e(148)](this['localStorage']()[_0x2ac76e(149)](this['_itemName'](_0x243642['id'])));
        },
        'findAll': function () {
            var _0x7ee936 = _0x2e6c37, _0x355bbf = [];
            for (var _0x14f82e = 0, _0x2b6d45, _0x37c691; _0x14f82e < this[_0x7ee936(138)][_0x7ee936(129)]; _0x14f82e++) {
                _0x2b6d45 = this[_0x7ee936(138)][_0x14f82e], _0x37c691 = this[_0x7ee936(134)][_0x7ee936(148)](this[_0x7ee936(137)]()[_0x7ee936(149)](this[_0x7ee936(144)](_0x2b6d45)));
                if (_0x37c691 != null)
                    _0x355bbf[_0x7ee936(150)](_0x37c691);
            }
            return _0x355bbf;
        },
        'destroy': function (_0x5a461d) {
            var _0x25a835 = _0x2e6c37;
            this[_0x25a835(137)]()[_0x25a835(151)](this[_0x25a835(144)](_0x5a461d['id']));
            var _0x5ebe1a = _0x5a461d['id'][_0x25a835(127)]();
            for (var _0x1a2f3d = 0, _0x2032eb; _0x1a2f3d < this[_0x25a835(138)][_0x25a835(129)]; _0x1a2f3d++) {
                this[_0x25a835(138)][_0x1a2f3d] === _0x5ebe1a && this[_0x25a835(138)][_0x25a835(152)](_0x1a2f3d, 1);
            }
            return this['save'](), _0x5a461d;
        },
        'localStorage': function () {
            return localStorage;
        },
        '_clear': function () {
            var _0x1addb1 = _0x2e6c37, _0x382c50 = this[_0x1addb1(137)](), _0x2fcfa1 = new RegExp('^' + this[_0x1addb1(133)] + '-');
            _0x382c50[_0x1addb1(151)](this[_0x1addb1(133)]);
            for (var _0x38a7dd in _0x382c50) {
                _0x2fcfa1[_0x1addb1(153)](_0x38a7dd) && _0x382c50[_0x1addb1(151)](_0x38a7dd);
            }
            this[_0x1addb1(138)][_0x1addb1(129)] = 0;
        },
        '_storageSize': function () {
            var _0x55d8c7 = _0x2e6c37;
            return this[_0x55d8c7(137)]()['length'];
        },
        '_itemName': function (_0x2963ab) {
            return this['name'] + '-' + _0x2963ab;
        }
    }), _0x19c10c[_0x2e6c37(130)][_0x2e6c37(154)] = window[_0x2e6c37(131)][_0x2e6c37(154)] = _0x19c10c[_0x2e6c37(155)] = function (_0x510946, _0x1d2c95, _0x3708cf) {
        var _0x128bd0 = _0x2e6c37, _0x40a1b0 = _0x2fe7be(_0x1d2c95, 'localStorage') || _0x2fe7be(_0x1d2c95[_0x128bd0(156)], _0x128bd0(137)), _0x22fd5b, _0x535f29, _0x21f13b = _0x19c10c['$'] ? _0x19c10c['$']['Deferred'] && _0x19c10c['$']['Deferred']() : _0x19c10c['Deferred'] && _0x19c10c[_0x128bd0(157)]();
        try {
            switch (_0x510946) {
            case 'read':
                _0x22fd5b = _0x1d2c95['id'] != undefined ? _0x40a1b0[_0x128bd0(146)](_0x1d2c95) : _0x40a1b0[_0x128bd0(158)]();
                break;
            case _0x128bd0(159):
                _0x22fd5b = _0x40a1b0[_0x128bd0(159)](_0x1d2c95);
                break;
            case _0x128bd0(160):
                _0x22fd5b = _0x40a1b0[_0x128bd0(160)](_0x1d2c95);
                break;
            case _0x128bd0(161):
                _0x22fd5b = _0x40a1b0['destroy'](_0x1d2c95);
                break;
            }
        } catch (_0x4aac9e) {
            if (_0x4aac9e[_0x128bd0(162)] === 22 && _0x40a1b0[_0x128bd0(163)]() === 0)
                _0x535f29 = _0x128bd0(164);
            else
                _0x535f29 = _0x4aac9e['message'];
        }
        if (_0x22fd5b)
            _0x3708cf && _0x3708cf[_0x128bd0(165)] && (_0x19c10c[_0x128bd0(166)] === _0x128bd0(167) ? _0x3708cf[_0x128bd0(165)](_0x1d2c95, _0x22fd5b, _0x3708cf) : _0x3708cf[_0x128bd0(165)](_0x22fd5b)), _0x21f13b && _0x21f13b['resolve'](_0x22fd5b);
        else {
            _0x535f29 = _0x535f29 ? _0x535f29 : _0x128bd0(168);
            if (_0x3708cf && _0x3708cf[_0x128bd0(169)])
                _0x19c10c[_0x128bd0(166)] === _0x128bd0(167) ? _0x3708cf['error'](_0x1d2c95, _0x535f29, _0x3708cf) : _0x3708cf[_0x128bd0(169)](_0x535f29);
            if (_0x21f13b)
                _0x21f13b[_0x128bd0(170)](_0x535f29);
        }
        if (_0x3708cf && _0x3708cf[_0x128bd0(171)])
            _0x3708cf[_0x128bd0(171)](_0x22fd5b);
        return _0x21f13b && _0x21f13b['promise']();
    }, _0x19c10c[_0x2e6c37(172)] = _0x19c10c['sync'], _0x19c10c[_0x2e6c37(173)] = function (_0x1c11a5, _0x35bb5e) {
        var _0x24851a = _0x2e6c37, _0xd9c90c = _0x35bb5e && _0x35bb5e['ajaxSync'];
        if (!_0xd9c90c && (_0x2fe7be(_0x1c11a5, _0x24851a(137)) || _0x2fe7be(_0x1c11a5[_0x24851a(156)], _0x24851a(137))))
            return _0x19c10c[_0x24851a(155)];
        return _0x19c10c[_0x24851a(172)];
    }, _0x19c10c['sync'] = function (_0x1e7db8, _0x2968b5, _0x23c0bc) {
        var _0xbcc37e = _0x2e6c37;
        return _0x19c10c[_0xbcc37e(173)](_0x2968b5, _0x23c0bc)[_0xbcc37e(174)](this, [
            _0x1e7db8,
            _0x2968b5,
            _0x23c0bc
        ]);
    }, _0x19c10c[_0x2e6c37(130)];
}));