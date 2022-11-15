define([
    _0x2c3f12(169),
    _0x2c3f12(170),
    _0x2c3f12(171),
    'collections/todos',
    _0x2c3f12(172),
    'text!templates/stats.html',
    _0x2c3f12(173)
], function (_0xbdebb1, _0x3299b4, _0x24660c, _0x13d216, _0x3d55f2, _0x43b1de, _0x179e43) {
    'use strict';
    var _0x1d4ad5 = _0x2c3f12;
    var _0x352ac7 = _0x24660c[_0x1d4ad5(174)][_0x1d4ad5(175)]({
        'el': _0x1d4ad5(176),
        'template': _0x3299b4['template'](_0x43b1de),
        'events': {
            'keypress .new-todo': _0x1d4ad5(177),
            'click .clear-completed': _0x1d4ad5(178),
            'click .toggle-all': _0x1d4ad5(179)
        },
        'initialize': function () {
            var _0x511725 = _0x1d4ad5;
            this[_0x511725(180)] = this['$'](_0x511725(181))[0], this[_0x511725(182)] = this['$'](_0x511725(183)), this[_0x511725(184)] = this['$'](_0x511725(185)), this[_0x511725(186)] = this['$']('.main'), this[_0x511725(187)] = this['$']('.todo-list'), this[_0x511725(188)](_0x13d216, 'add', this[_0x511725(189)]), this[_0x511725(188)](_0x13d216, 'reset', this['addAll']), this[_0x511725(188)](_0x13d216, _0x511725(190), this[_0x511725(191)]), this[_0x511725(188)](_0x13d216, _0x511725(192), this['filterAll']), this[_0x511725(188)](_0x13d216, _0x511725(193), _0x3299b4[_0x511725(194)](this[_0x511725(195)], 0)), _0x13d216['fetch']({ 'reset': !![] });
        },
        'render': function () {
            var _0x323676 = _0x1d4ad5, _0x2387eb = _0x13d216['completed']()[_0x323676(196)], _0x381339 = _0x13d216[_0x323676(197)]()['length'];
            _0x13d216[_0x323676(196)] ? (this[_0x323676(186)][_0x323676(198)](), this[_0x323676(184)][_0x323676(198)](), this['$footer'][_0x323676(199)](this[_0x323676(200)]({
                'completed': _0x2387eb,
                'remaining': _0x381339
            })), this['$'](_0x323676(201))[_0x323676(202)](_0x323676(203))[_0x323676(192)](_0x323676(204) + (_0x179e43['TodoFilter'] || '') + '"]')[_0x323676(205)]('selected')) : (this[_0x323676(186)][_0x323676(206)](), this[_0x323676(184)][_0x323676(206)]()), this['allCheckbox']['checked'] = !_0x381339;
        },
        'addOne': function (_0x1ce7f8) {
            var _0x10ecea = _0x1d4ad5, _0x4eaae3 = new _0x3d55f2({ 'model': _0x1ce7f8 });
            this[_0x10ecea(187)]['append'](_0x4eaae3[_0x10ecea(195)]()['el']);
        },
        'addAll': function () {
            var _0x2d185a = _0x1d4ad5;
            this[_0x2d185a(187)]['empty'](), _0x13d216[_0x2d185a(207)](this[_0x2d185a(189)], this);
        },
        'filterOne': function (_0x2f31e2) {
            var _0x206f61 = _0x1d4ad5;
            _0x2f31e2[_0x206f61(208)](_0x206f61(209));
        },
        'filterAll': function () {
            var _0x195252 = _0x1d4ad5;
            _0x13d216[_0x195252(207)](this['filterOne'], this);
        },
        'newAttributes': function () {
            var _0x3d4023 = _0x1d4ad5;
            return {
                'title': this[_0x3d4023(182)][_0x3d4023(210)]()[_0x3d4023(211)](),
                'order': _0x13d216[_0x3d4023(212)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x24fb44) {
            var _0x5b3a43 = _0x1d4ad5;
            if (_0x24fb44[_0x5b3a43(213)] !== _0x179e43['ENTER_KEY'] || !this['$input'][_0x5b3a43(210)]()[_0x5b3a43(211)]())
                return;
            _0x13d216[_0x5b3a43(214)](this['newAttributes']()), this[_0x5b3a43(182)]['val']('');
        },
        'clearCompleted': function () {
            var _0x244bbf = _0x1d4ad5;
            return _0x3299b4['invoke'](_0x13d216[_0x244bbf(215)](), _0x244bbf(216)), ![];
        },
        'toggleAllComplete': function () {
            var _0x1df7e3 = _0x1d4ad5, _0x3819a5 = this[_0x1df7e3(180)][_0x1df7e3(217)];
            _0x13d216[_0x1df7e3(207)](function (_0x45498a) {
                var _0xdf5368 = _0x1df7e3;
                _0x45498a[_0xdf5368(218)]({ 'completed': _0x3819a5 });
            });
        }
    });
    return _0x352ac7;
});