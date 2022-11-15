'use strict';
var util = require('util'), Action = require('../action'), c = require('../const'), ActionAppend = module['exports'] = function ActionAppend(_0x4f429d) {
        var _0x2b299a = {
            'UozXm': function (_0x590c29, _0x1d7c3c) {
                return _0x590c29 || _0x1d7c3c;
            },
            'wmGHY': function (_0x4a76a2, _0x6f76d0) {
                return _0x4a76a2 <= _0x6f76d0;
            },
            'wlMqF': function (_0x5431a7, _0x3600d7) {
                return _0x5431a7 + _0x3600d7;
            },
            'ipFCB': 'nargs\x20for\x20append\x20actions\x20must\x20be\x20>\x200;\x20if\x20arg\x20',
            'lNOyq': 'strings\x20are\x20not\x20supplying\x20the\x20value\x20to\x20append,\x20',
            'pMJsa': 'the\x20append\x20const\x20action\x20may\x20be\x20more\x20appropriate',
            'hFbNu': function (_0x12c3f8, _0x1c89b5) {
                return _0x12c3f8 !== _0x1c89b5;
            },
            'hJfYK': 'nargs\x20must\x20be\x20OPTIONAL\x20to\x20supply\x20const'
        };
        _0x4f429d = _0x2b299a['UozXm'](_0x4f429d, {});
        if (_0x2b299a['wmGHY'](this['nargs'], 0x0))
            throw new Error(_0x2b299a['wlMqF'](_0x2b299a['wlMqF'](_0x2b299a['ipFCB'], _0x2b299a['lNOyq']), _0x2b299a['pMJsa']));
        if (!!this['constant'] && _0x2b299a['hFbNu'](this['nargs'], c['OPTIONAL']))
            throw new Error(_0x2b299a['hJfYK']);
        Action['call'](this, _0x4f429d);
    };
util['inherits'](ActionAppend, Action), ActionAppend['prototype']['call'] = function (_0x5411cd, _0xb809c8, _0x2ade16) {
    var _0x3799cb = (_0xb809c8[this['dest']] || [])['slice']();
    _0x3799cb['push'](_0x2ade16), _0xb809c8['set'](this['dest'], _0x3799cb);
};
