var Class = require('../../../utils/Class');
var Events = require('../events');
var GetFastValue = require('../../../utils/object/GetFastValue');
var ProcessKeyCombo = require('./ProcessKeyCombo');
var ResetKeyCombo = require('./ResetKeyCombo');
var KeyCombo = new Class({
    'initialize': function KeyCombo(_0x6094d5, _0x2bb82d, _0x1f2680) {
        if (_0x1f2680 === undefined) {
            _0x1f2680 = {};
        }
        if (_0x2bb82d['length'] < 2) {
            return ![];
        }
        this['manager'] = _0x6094d5;
        this['enabled'] = !![];
        this['keyCodes'] = [];
        for (var _0x5415aa = 0; _0x5415aa < _0x2bb82d['length']; _0x5415aa++) {
            if ('MUJUk' === 'lZiIt') {
                return;
            } else {
                var _0x238f3f = _0x2bb82d[_0x5415aa];
                if (typeof _0x238f3f === 'string') {
                    this['keyCodes']['push'](_0x238f3f['toUpperCase']()['charCodeAt'](0));
                } else if (typeof _0x238f3f === 'number') {
                    this['keyCodes']['push'](_0x238f3f);
                } else if (_0x238f3f['hasOwnProperty']('keyCode')) {
                    this['keyCodes']['push'](_0x238f3f['keyCode']);
                }
            }
        }
        this['current'] = this['keyCodes'][0];
        this['index'] = 0;
        this['size'] = this['keyCodes']['length'];
        this['timeLastMatched'] = 0;
        this['matched'] = ![];
        this['timeMatched'] = 0;
        this['resetOnWrongKey'] = GetFastValue(_0x1f2680, 'resetOnWrongKey', !![]);
        this['maxKeyDelay'] = GetFastValue(_0x1f2680, 'maxKeyDelay', 0);
        this['resetOnMatch'] = GetFastValue(_0x1f2680, 'resetOnMatch', ![]);
        this['deleteOnMatch'] = GetFastValue(_0x1f2680, 'deleteOnMatch', ![]);
        var _0x4936ec = this;
        var _0x3c5518 = function (_0x3587fb) {
            if ('bJrEt' !== 'bJrEt') {
                var _0xd2ef1f = _0x2bb82d[_0x5415aa];
                if (typeof _0xd2ef1f === 'string') {
                    this['keyCodes']['push'](_0xd2ef1f['toUpperCase']()['charCodeAt'](0));
                } else if (typeof _0xd2ef1f === 'number') {
                    this['keyCodes']['push'](_0xd2ef1f);
                } else if (_0xd2ef1f['hasOwnProperty']('keyCode')) {
                    this['keyCodes']['push'](_0xd2ef1f['keyCode']);
                }
            } else {
                if (_0x4936ec['matched'] || !_0x4936ec['enabled']) {
                    return;
                }
                var _0x4c38ff = ProcessKeyCombo(_0x3587fb, _0x4936ec);
                if (_0x4c38ff) {
                    _0x4936ec['manager']['emit'](Events['COMBO_MATCH'], _0x4936ec, _0x3587fb);
                    if (_0x4936ec['resetOnMatch']) {
                        ResetKeyCombo(_0x4936ec);
                    } else if (_0x4936ec['deleteOnMatch']) {
                        if ('Djeqa' === 'Djeqa') {
                            _0x4936ec['destroy']();
                        } else {
                            this['keyCodes']['push'](_0x238f3f);
                        }
                    }
                }
            }
        };
        this['onKeyDown'] = _0x3c5518;
        this['manager']['on'](Events['ANY_KEY_DOWN'], this['onKeyDown']);
    },
    'progress': {
        'get': function () {
            return this['index'] / this['size'];
        }
    },
    'destroy': function () {
        this['enabled'] = ![];
        this['keyCodes'] = [];
        this['manager']['off'](Events['ANY_KEY_DOWN'], this['onKeyDown']);
        this['manager'] = null;
    }
});
module['exports'] = KeyCombo;