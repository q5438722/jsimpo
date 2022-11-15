'use strict';
var util = require('util'), Action = require('../action'), c = require('../const'), ActionAppend = module['exports'] = function ActionAppend(_0x33a6bb) {
        _0x33a6bb = _0x33a6bb || {};
        if (this['nargs'] <= -0x14e8 + -0xa * -0x31 + 0x12fe)
            throw new Error('nargs\x20for\x20append\x20actions\x20must\x20be\x20>\x200;\x20if\x20arg\x20' + 'strings\x20are\x20not\x20supplying\x20the\x20value\x20to\x20append,\x20' + 'the\x20append\x20const\x20action\x20may\x20be\x20more\x20appropriate');
        if (!!this['constant'] && this['nargs'] !== c['OPTIONAL'])
            throw new Error('nargs\x20must\x20be\x20OPTIONAL\x20to\x20supply\x20const');
        Action['call'](this, _0x33a6bb);
    };
util['inherits'](ActionAppend, Action), ActionAppend['prototype']['call'] = function (_0x3b3948, _0x14ac24, _0x45006c) {
    var _0x16e0c0 = (_0x14ac24[this['dest']] || [])['slice']();
    _0x16e0c0['push'](_0x45006c), _0x14ac24['set'](this['dest'], _0x16e0c0);
};
