(function (_0x4d2017, _0xbeb1ef) {
    var _0x475d92 = _0x4a89;
    if (typeof exports === 'object' && typeof require === _0x475d92(408))
        module[_0x475d92(409)] = _0xbeb1ef(require(_0x475d92(410)));
    else
        typeof define === _0x475d92(408) && define[_0x475d92(411)] ? define(['backbone'], function (_0x29ef63) {
            var _0x1575af = _0x475d92;
            return _0xbeb1ef(_0x29ef63 || _0x4d2017[_0x1575af(412)]);
        }) : _0xbeb1ef(Backbone);
}(this, function (_0x26626a) {
    var _0x18c7f2 = _0x4a89;
    function _0x5c6ba1() {
        var _0x1cc701 = _0x4a89;
        return ((1 + Math[_0x1cc701(413)]()) * 65536 | 0)[_0x1cc701(414)](16)[_0x1cc701(415)](1);
    }
    ;
    function _0x294635() {
        return _0x5c6ba1() + _0x5c6ba1() + '-' + _0x5c6ba1() + '-' + _0x5c6ba1() + '-' + _0x5c6ba1() + '-' + _0x5c6ba1() + _0x5c6ba1() + _0x5c6ba1();
    }
    ;
    function _0x47433a(_0x460636) {
        return _0x460636 === Object(_0x460636);
    }
    function _0x1480d7(_0x1381ca, _0x799026) {
        var _0x168cba = _0x4a89, _0x2488d1 = _0x1381ca[_0x168cba(416)];
        while (_0x2488d1--)
            if (_0x1381ca[_0x2488d1] === _0x799026)
                return !![];
        return ![];
    }
    function _0x3cb112(_0x2d4586, _0x1713a4) {
        for (var _0x3bd214 in _0x1713a4)
            _0x2d4586[_0x3bd214] = _0x1713a4[_0x3bd214];
        return _0x2d4586;
    }
    function _0x36bae4(_0x4586d2, _0x47b204) {
        var _0xbadf57 = _0x4a89;
        if (_0x4586d2 == null)
            return void 0;
        var _0x34b47c = _0x4586d2[_0x47b204];
        return typeof _0x34b47c === _0xbadf57(408) ? _0x4586d2[_0x47b204]() : _0x34b47c;
    }
    return _0x26626a[_0x18c7f2(417)] = window['Store'] = function (_0xb0895, _0x4592d5) {
        var _0x257b8f = _0x18c7f2;
        if (!this[_0x257b8f(418)])
            throw 'Backbone.localStorage: Environment does not support localStorage.';
        this[_0x257b8f(419)] = _0xb0895, this['serializer'] = _0x4592d5 || {
            'serialize': function (_0x5bdf5b) {
                var _0x2d99eb = _0x257b8f;
                return _0x47433a(_0x5bdf5b) ? JSON[_0x2d99eb(420)](_0x5bdf5b) : _0x5bdf5b;
            },
            'deserialize': function (_0x132171) {
                var _0x413a27 = _0x257b8f;
                return _0x132171 && JSON[_0x413a27(421)](_0x132171);
            }
        };
        var _0x56ffc8 = this[_0x257b8f(418)]()['getItem'](this[_0x257b8f(419)]);
        this[_0x257b8f(422)] = _0x56ffc8 && _0x56ffc8[_0x257b8f(423)](',') || [];
    }, _0x3cb112(_0x26626a[_0x18c7f2(417)][_0x18c7f2(424)], {
        'save': function () {
            var _0x26bf18 = _0x18c7f2;
            this[_0x26bf18(418)]()['setItem'](this[_0x26bf18(419)], this[_0x26bf18(422)]['join'](','));
        },
        'create': function (_0x50756b) {
            var _0x4b776d = _0x18c7f2;
            return !_0x50756b['id'] && _0x50756b['id'] !== 0 && (_0x50756b['id'] = _0x294635(), _0x50756b['set'](_0x50756b[_0x4b776d(425)], _0x50756b['id'])), this[_0x4b776d(418)]()[_0x4b776d(426)](this['_itemName'](_0x50756b['id']), this['serializer'][_0x4b776d(427)](_0x50756b)), this['records']['push'](_0x50756b['id'][_0x4b776d(414)]()), this[_0x4b776d(428)](), this[_0x4b776d(429)](_0x50756b);
        },
        'update': function (_0x1b77b1) {
            var _0x29d00b = _0x18c7f2;
            this[_0x29d00b(418)]()[_0x29d00b(426)](this[_0x29d00b(430)](_0x1b77b1['id']), this[_0x29d00b(431)][_0x29d00b(427)](_0x1b77b1));
            var _0x16b3ac = _0x1b77b1['id']['toString']();
            return !_0x1480d7(this['records'], _0x16b3ac) && (this[_0x29d00b(422)]['push'](_0x16b3ac), this[_0x29d00b(428)]()), this[_0x29d00b(429)](_0x1b77b1);
        },
        'find': function (_0x1d657a) {
            var _0xf1a3d9 = _0x18c7f2;
            return this['serializer'][_0xf1a3d9(432)](this[_0xf1a3d9(418)]()[_0xf1a3d9(433)](this[_0xf1a3d9(430)](_0x1d657a['id'])));
        },
        'findAll': function () {
            var _0x2168f9 = _0x18c7f2, _0x33dcbd = [];
            for (var _0xb964f9 = 0, _0x29613f, _0x2c9113; _0xb964f9 < this[_0x2168f9(422)][_0x2168f9(416)]; _0xb964f9++) {
                _0x29613f = this[_0x2168f9(422)][_0xb964f9], _0x2c9113 = this[_0x2168f9(431)][_0x2168f9(432)](this[_0x2168f9(418)]()[_0x2168f9(433)](this['_itemName'](_0x29613f)));
                if (_0x2c9113 != null)
                    _0x33dcbd[_0x2168f9(434)](_0x2c9113);
            }
            return _0x33dcbd;
        },
        'destroy': function (_0x12ff70) {
            var _0x16aaef = _0x18c7f2;
            this[_0x16aaef(418)]()[_0x16aaef(435)](this[_0x16aaef(430)](_0x12ff70['id']));
            var _0x156723 = _0x12ff70['id'][_0x16aaef(414)]();
            for (var _0x5c2038 = 0, _0x1426e8; _0x5c2038 < this['records'][_0x16aaef(416)]; _0x5c2038++) {
                this[_0x16aaef(422)][_0x5c2038] === _0x156723 && this[_0x16aaef(422)][_0x16aaef(436)](_0x5c2038, 1);
            }
            return this[_0x16aaef(428)](), _0x12ff70;
        },
        'localStorage': function () {
            return localStorage;
        },
        '_clear': function () {
            var _0x224395 = _0x18c7f2, _0x2700fb = this[_0x224395(418)](), _0x494df8 = new RegExp('^' + this[_0x224395(419)] + '-');
            _0x2700fb['removeItem'](this[_0x224395(419)]);
            for (var _0x364f12 in _0x2700fb) {
                _0x494df8[_0x224395(437)](_0x364f12) && _0x2700fb['removeItem'](_0x364f12);
            }
            this[_0x224395(422)][_0x224395(416)] = 0;
        },
        '_storageSize': function () {
            var _0xfa0d4d = _0x18c7f2;
            return this[_0xfa0d4d(418)]()[_0xfa0d4d(416)];
        },
        '_itemName': function (_0x39a18b) {
            var _0x159b3d = _0x18c7f2;
            return this[_0x159b3d(419)] + '-' + _0x39a18b;
        }
    }), _0x26626a['LocalStorage'][_0x18c7f2(438)] = window[_0x18c7f2(439)][_0x18c7f2(438)] = _0x26626a[_0x18c7f2(440)] = function (_0xd13bf3, _0x18b4ca, _0x2dd644) {
        var _0x473663 = _0x18c7f2, _0x851704 = _0x36bae4(_0x18b4ca, _0x473663(418)) || _0x36bae4(_0x18b4ca[_0x473663(441)], 'localStorage'), _0x26ca04, _0x454ccf, _0x3b5cff = _0x26626a['$'] ? _0x26626a['$'][_0x473663(442)] && _0x26626a['$'][_0x473663(442)]() : _0x26626a['Deferred'] && _0x26626a[_0x473663(442)]();
        try {
            switch (_0xd13bf3) {
            case _0x473663(443):
                _0x26ca04 = _0x18b4ca['id'] != undefined ? _0x851704[_0x473663(429)](_0x18b4ca) : _0x851704[_0x473663(444)]();
                break;
            case _0x473663(445):
                _0x26ca04 = _0x851704[_0x473663(445)](_0x18b4ca);
                break;
            case _0x473663(446):
                _0x26ca04 = _0x851704[_0x473663(446)](_0x18b4ca);
                break;
            case _0x473663(447):
                _0x26ca04 = _0x851704[_0x473663(448)](_0x18b4ca);
                break;
            }
        } catch (_0x434c6f) {
            if (_0x434c6f['code'] === 22 && _0x851704[_0x473663(449)]() === 0)
                _0x454ccf = _0x473663(450);
            else
                _0x454ccf = _0x434c6f[_0x473663(451)];
        }
        if (_0x26ca04)
            _0x2dd644 && _0x2dd644[_0x473663(452)] && (_0x26626a[_0x473663(453)] === _0x473663(454) ? _0x2dd644[_0x473663(452)](_0x18b4ca, _0x26ca04, _0x2dd644) : _0x2dd644[_0x473663(452)](_0x26ca04)), _0x3b5cff && _0x3b5cff[_0x473663(455)](_0x26ca04);
        else {
            _0x454ccf = _0x454ccf ? _0x454ccf : _0x473663(456);
            if (_0x2dd644 && _0x2dd644[_0x473663(457)])
                _0x26626a[_0x473663(453)] === _0x473663(454) ? _0x2dd644[_0x473663(457)](_0x18b4ca, _0x454ccf, _0x2dd644) : _0x2dd644[_0x473663(457)](_0x454ccf);
            if (_0x3b5cff)
                _0x3b5cff[_0x473663(458)](_0x454ccf);
        }
        if (_0x2dd644 && _0x2dd644[_0x473663(459)])
            _0x2dd644['complete'](_0x26ca04);
        return _0x3b5cff && _0x3b5cff[_0x473663(460)]();
    }, _0x26626a['ajaxSync'] = _0x26626a[_0x18c7f2(438)], _0x26626a['getSyncMethod'] = function (_0x3d0e98, _0xa382a6) {
        var _0x53095d = _0x18c7f2, _0x1d400b = _0xa382a6 && _0xa382a6[_0x53095d(461)];
        if (!_0x1d400b && (_0x36bae4(_0x3d0e98, 'localStorage') || _0x36bae4(_0x3d0e98[_0x53095d(441)], _0x53095d(418))))
            return _0x26626a['localSync'];
        return _0x26626a[_0x53095d(461)];
    }, _0x26626a[_0x18c7f2(438)] = function (_0x5baf91, _0x409f46, _0x2ccc5f) {
        var _0x3fa50c = _0x18c7f2;
        return _0x26626a[_0x3fa50c(462)](_0x409f46, _0x2ccc5f)[_0x3fa50c(463)](this, [
            _0x5baf91,
            _0x409f46,
            _0x2ccc5f
        ]);
    }, _0x26626a[_0x18c7f2(417)];
}));