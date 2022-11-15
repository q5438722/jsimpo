'use strict';
var util = require('util');
var Action = require('../action');
var c = require('../const');
var ActionAppend = module['exports'] = function ActionAppend(_0x3608bd) {
    _0x3608bd = _0x3608bd || {};
    if (this['nargs'] <= 0) {
        throw new Error('nargs for append actions must be > 0; if arg ' + 'strings are not supplying the value to append, ' + 'the append const action may be more appropriate');
    }
    if (!!this['constant'] && this['nargs'] !== c['OPTIONAL']) {
        throw new Error('nargs must be OPTIONAL to supply const');
    }
    Action['call'](this, _0x3608bd);
};
util['inherits'](ActionAppend, Action);
ActionAppend['prototype']['call'] = function (_0x5004cd, _0x2c1e73, _0x1b7ab8) {
    var _0x3b067a = (_0x2c1e73[this['dest']] || [])['slice']();
    _0x3b067a['push'](_0x1b7ab8);
    _0x2c1e73['set'](this['dest'], _0x3b067a);
};