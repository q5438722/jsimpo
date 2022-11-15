/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x13a2 = [
    '2ewMEBF',
    '303449HqzaZp',
    '100kBPhQQ',
    '1843whbaRV',
    '517wUyoLS',
    '1151kkYIoy',
    '3445048UlbqWh',
    '../../../utils/Class',
    '../events',
    '../../../utils/object/GetFastValue',
    'length',
    'manager',
    'keyCodes',
    'string',
    'push',
    'toUpperCase',
    'charCodeAt',
    'number',
    'keyCode',
    'current',
    'index',
    'timeLastMatched',
    'matched',
    'timeMatched',
    'resetOnWrongKey',
    'maxKeyDelay',
    'deleteOnMatch',
    'emit',
    'resetOnMatch',
    'onKeyDown',
    'off',
    'ANY_KEY_DOWN',
    'exports',
    '928629bOlsog',
    '1112111ucDgFZ',
    '189613kflUpY',
    '5VEACKP'
];
var _0x50cfcb = _0x89f7;
function _0x89f7(_0x2837df, _0x2b2900) {
    return _0x89f7 = function (_0x13a2a4, _0x89f79e) {
        _0x13a2a4 = _0x13a2a4 - 0x88;
        var _0x1eb13c = _0x13a2[_0x13a2a4];
        return _0x1eb13c;
    }, _0x89f7(_0x2837df, _0x2b2900);
}
(function (_0x479e12, _0x23757d) {
    var _0x2fcdb8 = _0x89f7;
    while (!![]) {
        try {
            var _0x1aadca = -parseInt(_0x2fcdb8(0x88)) + -parseInt(_0x2fcdb8(0x89)) + parseInt(_0x2fcdb8(0x8a)) * -parseInt(_0x2fcdb8(0x8b)) + parseInt(_0x2fcdb8(0x8c)) * parseInt(_0x2fcdb8(0x8d)) + parseInt(_0x2fcdb8(0x8e)) * parseInt(_0x2fcdb8(0x8f)) + parseInt(_0x2fcdb8(0x90)) * -parseInt(_0x2fcdb8(0x91)) + parseInt(_0x2fcdb8(0x92));
            if (_0x1aadca === _0x23757d)
                break;
            else
                _0x479e12['push'](_0x479e12['shift']());
        } catch (_0x4fbedf) {
            _0x479e12['push'](_0x479e12['shift']());
        }
    }
}(_0x13a2, 0x9f456));
var Class = require(_0x50cfcb(0x93)), Events = require(_0x50cfcb(0x94)), GetFastValue = require(_0x50cfcb(0x95)), ProcessKeyCombo = require('./ProcessKeyCombo'), ResetKeyCombo = require('./ResetKeyCombo'), KeyCombo = new Class({
        'initialize': function KeyCombo(_0x1f9144, _0x422412, _0x17999c) {
            var _0x2b3c7e = _0x50cfcb;
            _0x17999c === undefined && (_0x17999c = {});
            if (_0x422412[_0x2b3c7e(0x96)] < 0x2)
                return ![];
            this[_0x2b3c7e(0x97)] = _0x1f9144, this['enabled'] = !![], this[_0x2b3c7e(0x98)] = [];
            for (var _0x4bcfd5 = 0x0; _0x4bcfd5 < _0x422412['length']; _0x4bcfd5++) {
                var _0x565e42 = _0x422412[_0x4bcfd5];
                if (typeof _0x565e42 === _0x2b3c7e(0x99))
                    this[_0x2b3c7e(0x98)][_0x2b3c7e(0x9a)](_0x565e42[_0x2b3c7e(0x9b)]()[_0x2b3c7e(0x9c)](0x0));
                else {
                    if (typeof _0x565e42 === _0x2b3c7e(0x9d))
                        this['keyCodes'][_0x2b3c7e(0x9a)](_0x565e42);
                    else
                        _0x565e42['hasOwnProperty']('keyCode') && this['keyCodes']['push'](_0x565e42[_0x2b3c7e(0x9e)]);
                }
            }
            this[_0x2b3c7e(0x9f)] = this['keyCodes'][0x0], this[_0x2b3c7e(0xa0)] = 0x0, this['size'] = this[_0x2b3c7e(0x98)]['length'], this[_0x2b3c7e(0xa1)] = 0x0, this[_0x2b3c7e(0xa2)] = ![], this[_0x2b3c7e(0xa3)] = 0x0, this[_0x2b3c7e(0xa4)] = GetFastValue(_0x17999c, _0x2b3c7e(0xa4), !![]), this['maxKeyDelay'] = GetFastValue(_0x17999c, _0x2b3c7e(0xa5), 0x0), this['resetOnMatch'] = GetFastValue(_0x17999c, 'resetOnMatch', ![]), this[_0x2b3c7e(0xa6)] = GetFastValue(_0x17999c, 'deleteOnMatch', ![]);
            var _0xe017d7 = this, _0x1ec2ad = function (_0xeaba53) {
                    var _0x430461 = _0x2b3c7e;
                    if (_0xe017d7[_0x430461(0xa2)] || !_0xe017d7['enabled'])
                        return;
                    var _0x48c98f = ProcessKeyCombo(_0xeaba53, _0xe017d7);
                    if (_0x48c98f) {
                        _0xe017d7['manager'][_0x430461(0xa7)](Events['COMBO_MATCH'], _0xe017d7, _0xeaba53);
                        if (_0xe017d7[_0x430461(0xa8)])
                            ResetKeyCombo(_0xe017d7);
                        else
                            _0xe017d7['deleteOnMatch'] && _0xe017d7['destroy']();
                    }
                };
            this[_0x2b3c7e(0xa9)] = _0x1ec2ad, this[_0x2b3c7e(0x97)]['on'](Events['ANY_KEY_DOWN'], this[_0x2b3c7e(0xa9)]);
        },
        'progress': {
            'get': function () {
                var _0x3ab1b9 = _0x50cfcb;
                return this[_0x3ab1b9(0xa0)] / this['size'];
            }
        },
        'destroy': function () {
            var _0x177ce8 = _0x50cfcb;
            this['enabled'] = ![], this[_0x177ce8(0x98)] = [], this['manager'][_0x177ce8(0xaa)](Events[_0x177ce8(0xab)], this[_0x177ce8(0xa9)]), this['manager'] = null;
        }
    });
module[_0x50cfcb(0xac)] = KeyCombo;
