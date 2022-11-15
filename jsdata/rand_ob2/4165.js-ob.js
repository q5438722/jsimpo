var _0x88b3 = [
    '13367lBwcIV',
    '1009063RpRADH',
    'jquery',
    'underscore',
    'backbone',
    'views/todos',
    'common',
    'View',
    'extend',
    '.todoapp',
    'createOnEnter',
    'clearCompleted',
    'toggleAllComplete',
    'allCheckbox',
    '.toggle-all',
    '$input',
    '.new-todo',
    '$footer',
    '.footer',
    '$main',
    '$todoList',
    'listenTo',
    'addOne',
    'change:completed',
    'filterOne',
    'filter',
    'all',
    'debounce',
    'render',
    'length',
    'remaining',
    'show',
    'html',
    'template',
    '.filters\x20li\x20a',
    'removeClass',
    'selected',
    '[href=\x22#/',
    'addClass',
    'hide',
    'each',
    'trigger',
    'visible',
    'val',
    'trim',
    'nextOrder',
    'which',
    'create',
    'completed',
    'destroy',
    'checked',
    'save',
    '503771wFhYeP',
    '1gdJtjR',
    '685843rRzkDA',
    '1AoNLuR',
    '906943UfYRSJ',
    '29AKXYpR',
    '26374JESLzQ',
    '12661UhhryC',
    '5WzWXuZ',
    '3SqXIaj'
];
function _0x4327(_0x375a5d, _0x7de051) {
    return _0x4327 = function (_0x88b39f, _0x43279d) {
        _0x88b39f = _0x88b39f - 0x9d;
        var _0x3f608b = _0x88b3[_0x88b39f];
        return _0x3f608b;
    }, _0x4327(_0x375a5d, _0x7de051);
}
var _0x2c3f12 = _0x4327;
(function (_0x2862a0, _0x5dec01) {
    var _0x59c98e = _0x4327;
    while (!![]) {
        try {
            var _0x4a0b06 = parseInt(_0x59c98e(0x9d)) + parseInt(_0x59c98e(0x9e)) * -parseInt(_0x59c98e(0x9f)) + parseInt(_0x59c98e(0xa0)) * parseInt(_0x59c98e(0xa1)) + -parseInt(_0x59c98e(0xa2)) * -parseInt(_0x59c98e(0xa3)) + parseInt(_0x59c98e(0xa4)) * -parseInt(_0x59c98e(0xa5)) + parseInt(_0x59c98e(0xa6)) * parseInt(_0x59c98e(0xa7)) + -parseInt(_0x59c98e(0xa8));
            if (_0x4a0b06 === _0x5dec01)
                break;
            else
                _0x2862a0['push'](_0x2862a0['shift']());
        } catch (_0x4a9d67) {
            _0x2862a0['push'](_0x2862a0['shift']());
        }
    }
}(_0x88b3, 0x6faea), define([
    _0x2c3f12(0xa9),
    _0x2c3f12(0xaa),
    _0x2c3f12(0xab),
    'collections/todos',
    _0x2c3f12(0xac),
    'text!templates/stats.html',
    _0x2c3f12(0xad)
], function (_0xbdebb1, _0x3299b4, _0x24660c, _0x13d216, _0x3d55f2, _0x43b1de, _0x179e43) {
    'use strict';
    var _0x1d4ad5 = _0x2c3f12;
    var _0x352ac7 = _0x24660c[_0x1d4ad5(0xae)][_0x1d4ad5(0xaf)]({
        'el': _0x1d4ad5(0xb0),
        'template': _0x3299b4['template'](_0x43b1de),
        'events': {
            'keypress\x20.new-todo': _0x1d4ad5(0xb1),
            'click\x20.clear-completed': _0x1d4ad5(0xb2),
            'click\x20.toggle-all': _0x1d4ad5(0xb3)
        },
        'initialize': function () {
            var _0x511725 = _0x1d4ad5;
            this[_0x511725(0xb4)] = this['$'](_0x511725(0xb5))[0x0], this[_0x511725(0xb6)] = this['$'](_0x511725(0xb7)), this[_0x511725(0xb8)] = this['$'](_0x511725(0xb9)), this[_0x511725(0xba)] = this['$']('.main'), this[_0x511725(0xbb)] = this['$']('.todo-list'), this[_0x511725(0xbc)](_0x13d216, 'add', this[_0x511725(0xbd)]), this[_0x511725(0xbc)](_0x13d216, 'reset', this['addAll']), this[_0x511725(0xbc)](_0x13d216, _0x511725(0xbe), this[_0x511725(0xbf)]), this[_0x511725(0xbc)](_0x13d216, _0x511725(0xc0), this['filterAll']), this[_0x511725(0xbc)](_0x13d216, _0x511725(0xc1), _0x3299b4[_0x511725(0xc2)](this[_0x511725(0xc3)], 0x0)), _0x13d216['fetch']({ 'reset': !![] });
        },
        'render': function () {
            var _0x323676 = _0x1d4ad5, _0x2387eb = _0x13d216['completed']()[_0x323676(0xc4)], _0x381339 = _0x13d216[_0x323676(0xc5)]()['length'];
            _0x13d216[_0x323676(0xc4)] ? (this[_0x323676(0xba)][_0x323676(0xc6)](), this[_0x323676(0xb8)][_0x323676(0xc6)](), this['$footer'][_0x323676(0xc7)](this[_0x323676(0xc8)]({
                'completed': _0x2387eb,
                'remaining': _0x381339
            })), this['$'](_0x323676(0xc9))[_0x323676(0xca)](_0x323676(0xcb))[_0x323676(0xc0)](_0x323676(0xcc) + (_0x179e43['TodoFilter'] || '') + '\x22]')[_0x323676(0xcd)]('selected')) : (this[_0x323676(0xba)][_0x323676(0xce)](), this[_0x323676(0xb8)][_0x323676(0xce)]()), this['allCheckbox']['checked'] = !_0x381339;
        },
        'addOne': function (_0x1ce7f8) {
            var _0x10ecea = _0x1d4ad5, _0x4eaae3 = new _0x3d55f2({ 'model': _0x1ce7f8 });
            this[_0x10ecea(0xbb)]['append'](_0x4eaae3[_0x10ecea(0xc3)]()['el']);
        },
        'addAll': function () {
            var _0x2d185a = _0x1d4ad5;
            this[_0x2d185a(0xbb)]['empty'](), _0x13d216[_0x2d185a(0xcf)](this[_0x2d185a(0xbd)], this);
        },
        'filterOne': function (_0x2f31e2) {
            var _0x206f61 = _0x1d4ad5;
            _0x2f31e2[_0x206f61(0xd0)](_0x206f61(0xd1));
        },
        'filterAll': function () {
            var _0x195252 = _0x1d4ad5;
            _0x13d216[_0x195252(0xcf)](this['filterOne'], this);
        },
        'newAttributes': function () {
            var _0x3d4023 = _0x1d4ad5;
            return {
                'title': this[_0x3d4023(0xb6)][_0x3d4023(0xd2)]()[_0x3d4023(0xd3)](),
                'order': _0x13d216[_0x3d4023(0xd4)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x24fb44) {
            var _0x5b3a43 = _0x1d4ad5;
            if (_0x24fb44[_0x5b3a43(0xd5)] !== _0x179e43['ENTER_KEY'] || !this['$input'][_0x5b3a43(0xd2)]()[_0x5b3a43(0xd3)]())
                return;
            _0x13d216[_0x5b3a43(0xd6)](this['newAttributes']()), this[_0x5b3a43(0xb6)]['val']('');
        },
        'clearCompleted': function () {
            var _0x244bbf = _0x1d4ad5;
            return _0x3299b4['invoke'](_0x13d216[_0x244bbf(0xd7)](), _0x244bbf(0xd8)), ![];
        },
        'toggleAllComplete': function () {
            var _0x1df7e3 = _0x1d4ad5, _0x3819a5 = this[_0x1df7e3(0xb4)][_0x1df7e3(0xd9)];
            _0x13d216[_0x1df7e3(0xcf)](function (_0x45498a) {
                var _0xdf5368 = _0x1df7e3;
                _0x45498a[_0xdf5368(0xda)]({ 'completed': _0x3819a5 });
            });
        }
    });
    return _0x352ac7;
}));
