var _0x3779 = [
    '.toggle-all',
    'item',
    'input',
    '.new-todo',
    '.main',
    'listenTo',
    'todos',
    'add',
    'addOne',
    'reset',
    'addAll',
    'change:completed',
    'filterOne',
    'filter',
    'filterAll',
    'all',
    'render',
    'fetch',
    'completed',
    'length',
    'remaining',
    '[href=\x22#/',
    'main',
    'footer',
    'statsTemplate',
    'classList',
    'selected',
    'checked',
    'TodoView',
    'appendChild',
    'forEach',
    'trigger',
    'visible',
    'value',
    'trim',
    'nextOrder',
    'create',
    'newAttributes',
    'destroy',
    '8754aWmxuO',
    '69swlGrC',
    '448366WCkGcc',
    '1FPcyrk',
    '617717PGqqLV',
    '324199ivhCsv',
    '361126YRZtUL',
    '1XuBefh',
    '470971eamGzD',
    '5153qGmamU',
    '50mfjmNr',
    'display',
    'none',
    'call',
    'querySelectorAll',
    'AppView',
    'View',
    'extend',
    '.todoapp',
    'querySelector',
    '#stats-template',
    'innerHTML',
    'createOnEnter',
    'clearCompleted',
    'toggleAllComplete',
    'allCheckbox'
];
(function (_0x453ad2, _0x3e8e96) {
    var _0x133f22 = _0x18e3;
    while (!![]) {
        try {
            var _0x3471e4 = -parseInt(_0x133f22(0x149)) * -parseInt(_0x133f22(0x14a)) + parseInt(_0x133f22(0x14b)) + parseInt(_0x133f22(0x14c)) * -parseInt(_0x133f22(0x14d)) + parseInt(_0x133f22(0x14e)) + parseInt(_0x133f22(0x14f)) * parseInt(_0x133f22(0x150)) + -parseInt(_0x133f22(0x151)) + -parseInt(_0x133f22(0x152)) * parseInt(_0x133f22(0x153));
            if (_0x3471e4 === _0x3e8e96)
                break;
            else
                _0x453ad2['push'](_0x453ad2['shift']());
        } catch (_0x5cf1e7) {
            _0x453ad2['push'](_0x453ad2['shift']());
        }
    }
}(_0x3779, 0x5f8d3));
var app = app || {};
function _0x18e3(_0x53ef1f, _0x41954c) {
    return _0x18e3 = function (_0x377924, _0x18e3ac) {
        _0x377924 = _0x377924 - 0x149;
        var _0x1eacb3 = _0x3779[_0x377924];
        return _0x1eacb3;
    }, _0x18e3(_0x53ef1f, _0x41954c);
}
(function () {
    'use strict';
    var _0x110aec = _0x18e3;
    var _0x543c39 = function (_0x506ea, _0x2843ef) {
            var _0x3ca1d5 = _0x18e3;
            _0x506ea['style'][_0x3ca1d5(0x154)] = _0x2843ef ? '' : _0x3ca1d5(0x155);
        }, _0x5a0e0f = function (_0x242749, _0x27fc3e) {
            var _0x4a6d11 = _0x18e3;
            return []['some'][_0x4a6d11(0x156)](document[_0x4a6d11(0x157)](_0x27fc3e), function (_0x690453) {
                return _0x690453 === _0x242749;
            });
        };
    app[_0x110aec(0x158)] = Backbone[_0x110aec(0x159)][_0x110aec(0x15a)]({
        'el': _0x110aec(0x15b),
        'statsTemplate': microtemplate(document[_0x110aec(0x15c)](_0x110aec(0x15d))[_0x110aec(0x15e)]),
        'events': {
            'keypress\x20.new-todo': _0x110aec(0x15f),
            'click\x20.clear-completed': _0x110aec(0x160),
            'click\x20.toggle-all': _0x110aec(0x161)
        },
        'initialize': function () {
            var _0x2c5100 = _0x110aec;
            this[_0x2c5100(0x162)] = this['$'](_0x2c5100(0x163))[_0x2c5100(0x164)](0x0), this[_0x2c5100(0x165)] = this['$'](_0x2c5100(0x166))[_0x2c5100(0x164)](0x0), this['footer'] = this['$']('.footer')[_0x2c5100(0x164)](0x0), this['main'] = this['$'](_0x2c5100(0x167))[_0x2c5100(0x164)](0x0), this[_0x2c5100(0x168)](app[_0x2c5100(0x169)], _0x2c5100(0x16a), this[_0x2c5100(0x16b)]), this[_0x2c5100(0x168)](app[_0x2c5100(0x169)], _0x2c5100(0x16c), this[_0x2c5100(0x16d)]), this['listenTo'](app['todos'], _0x2c5100(0x16e), this[_0x2c5100(0x16f)]), this[_0x2c5100(0x168)](app['todos'], _0x2c5100(0x170), this[_0x2c5100(0x171)]), this[_0x2c5100(0x168)](app[_0x2c5100(0x169)], _0x2c5100(0x172), this[_0x2c5100(0x173)]), app[_0x2c5100(0x169)][_0x2c5100(0x174)]({ 'reset': !![] });
        },
        'render': function () {
            var _0x559344 = _0x110aec, _0x2ca05f = app[_0x559344(0x169)][_0x559344(0x175)]()[_0x559344(0x176)], _0xff756c = app[_0x559344(0x169)][_0x559344(0x177)]()[_0x559344(0x176)], _0x2a345f = _0x559344(0x178) + (app['TodoFilter'] || '') + '\x22]';
            app[_0x559344(0x169)][_0x559344(0x176)] ? (_0x543c39(this[_0x559344(0x179)], !![]), _0x543c39(this[_0x559344(0x17a)], !![]), this[_0x559344(0x17a)][_0x559344(0x15e)] = this[_0x559344(0x17b)]({
                'completed': _0x2ca05f,
                'remaining': _0xff756c
            }), []['forEach'][_0x559344(0x156)](this['$']('.filters\x20li\x20a'), function (_0x177729) {
                var _0x2ba8e8 = _0x559344;
                _0x177729[_0x2ba8e8(0x17c)]['remove'](_0x2ba8e8(0x17d)), _0x5a0e0f(_0x177729, _0x2a345f) && _0x177729[_0x2ba8e8(0x17c)]['add'](_0x2ba8e8(0x17d));
            })) : (_0x543c39(this[_0x559344(0x179)], ![]), _0x543c39(this[_0x559344(0x17a)], ![])), this[_0x559344(0x162)][_0x559344(0x17e)] = !_0xff756c;
        },
        'addOne': function (_0x3c5804) {
            var _0x4420f4 = _0x110aec, _0x3cf8e0 = new app[(_0x4420f4(0x17f))]({ 'model': _0x3c5804 });
            document[_0x4420f4(0x15c)]('.todo-list')[_0x4420f4(0x180)](_0x3cf8e0[_0x4420f4(0x173)]()['el']);
        },
        'addAll': function () {
            var _0x4fc5a5 = _0x110aec;
            this['$']('.todo-list')[_0x4fc5a5(0x164)](0x0)[_0x4fc5a5(0x15e)] = '', app[_0x4fc5a5(0x169)][_0x4fc5a5(0x181)](this[_0x4fc5a5(0x16b)], this);
        },
        'filterOne': function (_0xb3bb60) {
            var _0x1c8147 = _0x110aec;
            _0xb3bb60[_0x1c8147(0x182)](_0x1c8147(0x183));
        },
        'filterAll': function () {
            var _0x5e3d20 = _0x110aec;
            app[_0x5e3d20(0x169)]['forEach'](this['filterOne'], this);
        },
        'newAttributes': function () {
            var _0x5dd1e8 = _0x110aec;
            return {
                'title': this[_0x5dd1e8(0x165)][_0x5dd1e8(0x184)][_0x5dd1e8(0x185)](),
                'order': app[_0x5dd1e8(0x169)][_0x5dd1e8(0x186)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x42e941) {
            var _0x973af4 = _0x110aec;
            if (_0x42e941['which'] !== ENTER_KEY || !this['input'][_0x973af4(0x184)][_0x973af4(0x185)]())
                return;
            app[_0x973af4(0x169)][_0x973af4(0x187)](this[_0x973af4(0x188)]()), this['input']['value'] = '';
        },
        'clearCompleted': function () {
            var _0x167953 = _0x110aec;
            return app[_0x167953(0x169)][_0x167953(0x175)]()['forEach'](function (_0x1a580f) {
                var _0x1ec57c = _0x167953;
                _0x1a580f[_0x1ec57c(0x189)]();
            }), ![];
        },
        'toggleAllComplete': function () {
            var _0x23d9e3 = _0x110aec, _0x53a27a = this[_0x23d9e3(0x162)][_0x23d9e3(0x17e)];
            app[_0x23d9e3(0x169)]['forEach'](function (_0x35a9ea) {
                _0x35a9ea['save']({ 'completed': _0x53a27a });
            });
        }
    });
}());
