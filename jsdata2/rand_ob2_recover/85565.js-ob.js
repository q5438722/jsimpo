var Class = require(_0x50cfcb(147)), Events = require(_0x50cfcb(148)), GetFastValue = require(_0x50cfcb(149)), ProcessKeyCombo = require('./ProcessKeyCombo'), ResetKeyCombo = require('./ResetKeyCombo'), KeyCombo = new Class({
        'initialize': function KeyCombo(_0x1f9144, _0x422412, _0x17999c) {
            var _0x2b3c7e = _0x50cfcb;
            _0x17999c === undefined && (_0x17999c = {});
            if (_0x422412[_0x2b3c7e(150)] < 2)
                return ![];
            this[_0x2b3c7e(151)] = _0x1f9144, this['enabled'] = !![], this[_0x2b3c7e(152)] = [];
            for (var _0x4bcfd5 = 0; _0x4bcfd5 < _0x422412['length']; _0x4bcfd5++) {
                var _0x565e42 = _0x422412[_0x4bcfd5];
                if (typeof _0x565e42 === _0x2b3c7e(153))
                    this[_0x2b3c7e(152)][_0x2b3c7e(154)](_0x565e42[_0x2b3c7e(155)]()[_0x2b3c7e(156)](0));
                else {
                    if (typeof _0x565e42 === _0x2b3c7e(157))
                        this['keyCodes'][_0x2b3c7e(154)](_0x565e42);
                    else
                        _0x565e42['hasOwnProperty']('keyCode') && this['keyCodes']['push'](_0x565e42[_0x2b3c7e(158)]);
                }
            }
            this[_0x2b3c7e(159)] = this['keyCodes'][0], this[_0x2b3c7e(160)] = 0, this['size'] = this[_0x2b3c7e(152)]['length'], this[_0x2b3c7e(161)] = 0, this[_0x2b3c7e(162)] = ![], this[_0x2b3c7e(163)] = 0, this[_0x2b3c7e(164)] = GetFastValue(_0x17999c, _0x2b3c7e(164), !![]), this['maxKeyDelay'] = GetFastValue(_0x17999c, _0x2b3c7e(165), 0), this['resetOnMatch'] = GetFastValue(_0x17999c, 'resetOnMatch', ![]), this[_0x2b3c7e(166)] = GetFastValue(_0x17999c, 'deleteOnMatch', ![]);
            var _0xe017d7 = this, _0x1ec2ad = function (_0xeaba53) {
                    var _0x430461 = _0x2b3c7e;
                    if (_0xe017d7[_0x430461(162)] || !_0xe017d7['enabled'])
                        return;
                    var _0x48c98f = ProcessKeyCombo(_0xeaba53, _0xe017d7);
                    if (_0x48c98f) {
                        _0xe017d7['manager'][_0x430461(167)](Events['COMBO_MATCH'], _0xe017d7, _0xeaba53);
                        if (_0xe017d7[_0x430461(168)])
                            ResetKeyCombo(_0xe017d7);
                        else
                            _0xe017d7['deleteOnMatch'] && _0xe017d7['destroy']();
                    }
                };
            this[_0x2b3c7e(169)] = _0x1ec2ad, this[_0x2b3c7e(151)]['on'](Events['ANY_KEY_DOWN'], this[_0x2b3c7e(169)]);
        },
        'progress': {
            'get': function () {
                var _0x3ab1b9 = _0x50cfcb;
                return this[_0x3ab1b9(160)] / this['size'];
            }
        },
        'destroy': function () {
            var _0x177ce8 = _0x50cfcb;
            this['enabled'] = ![], this[_0x177ce8(152)] = [], this['manager'][_0x177ce8(170)](Events[_0x177ce8(171)], this[_0x177ce8(169)]), this['manager'] = null;
        }
    });
module[_0x50cfcb(172)] = KeyCombo;