(function (_0x5f25bf, _0x262c41) {
    if (typeof exports === 'object' && typeof require === 'function')
        module['exports'] = _0x262c41(require('backbone'));
    else
        typeof define === 'function' && define['amd'] ? define(['backbone'], function (_0x1f3f1d) {
            return _0x262c41(_0x1f3f1d || _0x5f25bf['Backbone']);
        }) : _0x262c41(Backbone);
}(this, function (_0x5832d7) {
    function _0xdee44e() {
        return ((0x60f + -0x10 * 0x92 + 0x6 * 0x83 + Math['random']()) * (0x119 * -0x13 + 0x1 * -0x35dd + 0x4 * 0x52ae) | 0x2a5 * -0xa + 0x1 * -0x773 + -0x21e5 * -0x1)['toString'](-0x1ebc + -0x772 + -0x1bd * -0x16)['substring'](-0x17c + -0x18d * 0x1 + 0x30a);
    }
    ;
    function _0x3bacea() {
        return _0xdee44e() + _0xdee44e() + '-' + _0xdee44e() + '-' + _0xdee44e() + '-' + _0xdee44e() + '-' + _0xdee44e() + _0xdee44e() + _0xdee44e();
    }
    ;
    function _0x549ff4(_0x5d6b7b) {
        return _0x5d6b7b === Object(_0x5d6b7b);
    }
    function _0x46ef1f(_0x449c1d, _0x4d1211) {
        var _0xcaddf8 = _0x449c1d['length'];
        while (_0xcaddf8--)
            if (_0x449c1d[_0xcaddf8] === _0x4d1211)
                return !![];
        return ![];
    }
    function _0x28beef(_0xf74bf0, _0x305f7c) {
        for (var _0x50c135 in _0x305f7c)
            _0xf74bf0[_0x50c135] = _0x305f7c[_0x50c135];
        return _0xf74bf0;
    }
    function _0x48c508(_0x16d237, _0x17eb58) {
        if (_0x16d237 == null)
            return void (-0xabd + -0x291 + 0xd4e);
        var _0x556578 = _0x16d237[_0x17eb58];
        return typeof _0x556578 === 'function' ? _0x16d237[_0x17eb58]() : _0x556578;
    }
    return _0x5832d7['LocalStorage'] = window['Store'] = function (_0x51b32a, _0x4499a7) {
        if (!this['localStorage'])
            throw 'Backbone.localStorage:\x20Environment\x20does\x20not\x20support\x20localStorage.';
        this['name'] = _0x51b32a, this['serializer'] = _0x4499a7 || {
            'serialize': function (_0x12bf71) {
                return _0x549ff4(_0x12bf71) ? JSON['stringify'](_0x12bf71) : _0x12bf71;
            },
            'deserialize': function (_0x261898) {
                return _0x261898 && JSON['parse'](_0x261898);
            }
        };
        var _0x1e98d5 = this['localStorage']()['getItem'](this['name']);
        this['records'] = _0x1e98d5 && _0x1e98d5['split'](',') || [];
    }, _0x28beef(_0x5832d7['LocalStorage']['prototype'], {
        'save': function () {
            this['localStorage']()['setItem'](this['name'], this['records']['join'](','));
        },
        'create': function (_0x1bef20) {
            return !_0x1bef20['id'] && _0x1bef20['id'] !== -0x1421 * 0x1 + 0x3 * -0x35d + 0x1e38 && (_0x1bef20['id'] = _0x3bacea(), _0x1bef20['set'](_0x1bef20['idAttribute'], _0x1bef20['id'])), this['localStorage']()['setItem'](this['_itemName'](_0x1bef20['id']), this['serializer']['serialize'](_0x1bef20)), this['records']['push'](_0x1bef20['id']['toString']()), this['save'](), this['find'](_0x1bef20);
        },
        'update': function (_0x44c081) {
            this['localStorage']()['setItem'](this['_itemName'](_0x44c081['id']), this['serializer']['serialize'](_0x44c081));
            var _0x49497f = _0x44c081['id']['toString']();
            return !_0x46ef1f(this['records'], _0x49497f) && (this['records']['push'](_0x49497f), this['save']()), this['find'](_0x44c081);
        },
        'find': function (_0x480fb6) {
            return this['serializer']['deserialize'](this['localStorage']()['getItem'](this['_itemName'](_0x480fb6['id'])));
        },
        'findAll': function () {
            var _0x4fa0f4 = [];
            for (var _0x319ee8 = -0x35 * -0x13 + 0x180 + 0x56f * -0x1, _0x290f7c, _0x167a4f; _0x319ee8 < this['records']['length']; _0x319ee8++) {
                _0x290f7c = this['records'][_0x319ee8], _0x167a4f = this['serializer']['deserialize'](this['localStorage']()['getItem'](this['_itemName'](_0x290f7c)));
                if (_0x167a4f != null)
                    _0x4fa0f4['push'](_0x167a4f);
            }
            return _0x4fa0f4;
        },
        'destroy': function (_0x55a17e) {
            this['localStorage']()['removeItem'](this['_itemName'](_0x55a17e['id']));
            var _0x267d41 = _0x55a17e['id']['toString']();
            for (var _0x136747 = -0x3a9 * 0x8 + 0xd3a + 0x100e, _0x57c057; _0x136747 < this['records']['length']; _0x136747++) {
                this['records'][_0x136747] === _0x267d41 && this['records']['splice'](_0x136747, -0x1a5e + 0xf3 * -0xe + 0x27a9 * 0x1);
            }
            return this['save'](), _0x55a17e;
        },
        'localStorage': function () {
            return localStorage;
        },
        '_clear': function () {
            var _0x3b809d = this['localStorage'](), _0x293b09 = new RegExp('^' + this['name'] + '-');
            _0x3b809d['removeItem'](this['name']);
            for (var _0x140071 in _0x3b809d) {
                _0x293b09['test'](_0x140071) && _0x3b809d['removeItem'](_0x140071);
            }
            this['records']['length'] = -0x995 + -0x80c + -0x11a1 * -0x1;
        },
        '_storageSize': function () {
            return this['localStorage']()['length'];
        },
        '_itemName': function (_0x196477) {
            return this['name'] + '-' + _0x196477;
        }
    }), _0x5832d7['LocalStorage']['sync'] = window['Store']['sync'] = _0x5832d7['localSync'] = function (_0x2cb704, _0x11c4c4, _0x256602) {
        var _0xe3fdaf = _0x48c508(_0x11c4c4, 'localStorage') || _0x48c508(_0x11c4c4['collection'], 'localStorage'), _0x4149bf, _0x12bbd6, _0x5c4c3c = _0x5832d7['$'] ? _0x5832d7['$']['Deferred'] && _0x5832d7['$']['Deferred']() : _0x5832d7['Deferred'] && _0x5832d7['Deferred']();
        try {
            switch (_0x2cb704) {
            case 'read':
                _0x4149bf = _0x11c4c4['id'] != undefined ? _0xe3fdaf['find'](_0x11c4c4) : _0xe3fdaf['findAll']();
                break;
            case 'create':
                _0x4149bf = _0xe3fdaf['create'](_0x11c4c4);
                break;
            case 'update':
                _0x4149bf = _0xe3fdaf['update'](_0x11c4c4);
                break;
            case 'delete':
                _0x4149bf = _0xe3fdaf['destroy'](_0x11c4c4);
                break;
            }
        } catch (_0x25176b) {
            if (_0x25176b['code'] === -0x1341 + 0x1c * -0xf7 + 0x2e5b * 0x1 && _0xe3fdaf['_storageSize']() === -0x49 * -0x35 + 0x26 * -0x36 + -0x719)
                _0x12bbd6 = 'Private\x20browsing\x20is\x20unsupported';
            else
                _0x12bbd6 = _0x25176b['message'];
        }
        if (_0x4149bf)
            _0x256602 && _0x256602['success'] && (_0x5832d7['VERSION'] === '0.9.10' ? _0x256602['success'](_0x11c4c4, _0x4149bf, _0x256602) : _0x256602['success'](_0x4149bf)), _0x5c4c3c && _0x5c4c3c['resolve'](_0x4149bf);
        else {
            _0x12bbd6 = _0x12bbd6 ? _0x12bbd6 : 'Record\x20Not\x20Found';
            if (_0x256602 && _0x256602['error'])
                _0x5832d7['VERSION'] === '0.9.10' ? _0x256602['error'](_0x11c4c4, _0x12bbd6, _0x256602) : _0x256602['error'](_0x12bbd6);
            if (_0x5c4c3c)
                _0x5c4c3c['reject'](_0x12bbd6);
        }
        if (_0x256602 && _0x256602['complete'])
            _0x256602['complete'](_0x4149bf);
        return _0x5c4c3c && _0x5c4c3c['promise']();
    }, _0x5832d7['ajaxSync'] = _0x5832d7['sync'], _0x5832d7['getSyncMethod'] = function (_0x3fce27, _0x2c7c50) {
        var _0x177f00 = _0x2c7c50 && _0x2c7c50['ajaxSync'];
        if (!_0x177f00 && (_0x48c508(_0x3fce27, 'localStorage') || _0x48c508(_0x3fce27['collection'], 'localStorage')))
            return _0x5832d7['localSync'];
        return _0x5832d7['ajaxSync'];
    }, _0x5832d7['sync'] = function (_0x344560, _0x38a449, _0x284a6d) {
        return _0x5832d7['getSyncMethod'](_0x38a449, _0x284a6d)['apply'](this, [
            _0x344560,
            _0x38a449,
            _0x284a6d
        ]);
    }, _0x5832d7['LocalStorage'];
}));
