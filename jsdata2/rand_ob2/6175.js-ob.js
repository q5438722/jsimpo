var _0x5d56 = [
    '31WkfVir',
    '257557lDQEFJ',
    '1Svlgxe',
    '359129HsiwsM',
    '306640NoAvpr',
    'style',
    'display',
    'none',
    'call',
    'querySelectorAll',
    'View',
    'querySelector',
    '#stats-template',
    'innerHTML',
    'createOnEnter',
    'clearCompleted',
    'toggleAllComplete',
    'allCheckbox',
    '.toggle-all',
    'item',
    'input',
    '.new-todo',
    'footer',
    '.footer',
    'main',
    'listenTo',
    'todos',
    'add',
    'change:completed',
    'filterOne',
    'filter',
    'filterAll',
    'all',
    'render',
    'fetch',
    'completed',
    'length',
    'TodoFilter',
    '.filters\x20li\x20a',
    'classList',
    'remove',
    'selected',
    'checked',
    'TodoView',
    '.todo-list',
    'appendChild',
    'forEach',
    'addOne',
    'trigger',
    'visible',
    'value',
    'nextOrder',
    'which',
    'create',
    'newAttributes',
    'save',
    '124867JMxcTp',
    '6301VIImJl',
    '52zfWPSh',
    '25643mSlZrX',
    '2eQCxaO',
    '1576EmuZOl'
];
(function (_0x5f6af7, _0x5615fe) {
    var _0x8b42ea = _0x5954;
    while (!![]) {
        try {
            var _0x53aacf = parseInt(_0x8b42ea(0x110)) + -parseInt(_0x8b42ea(0x111)) * parseInt(_0x8b42ea(0x112)) + -parseInt(_0x8b42ea(0x113)) * parseInt(_0x8b42ea(0x114)) + parseInt(_0x8b42ea(0x115)) * parseInt(_0x8b42ea(0x116)) + -parseInt(_0x8b42ea(0x117)) + parseInt(_0x8b42ea(0x118)) * parseInt(_0x8b42ea(0x119)) + parseInt(_0x8b42ea(0x11a));
            if (_0x53aacf === _0x5615fe)
                break;
            else
                _0x5f6af7['push'](_0x5f6af7['shift']());
        } catch (_0x9a6895) {
            _0x5f6af7['push'](_0x5f6af7['shift']());
        }
    }
}(_0x5d56, 0x318f5));
var app = app || {};
function _0x5954(_0x39cf72, _0xae6e33) {
    return _0x5954 = function (_0x5d569c, _0x5954bd) {
        _0x5d569c = _0x5d569c - 0x110;
        var _0x5cb444 = _0x5d56[_0x5d569c];
        return _0x5cb444;
    }, _0x5954(_0x39cf72, _0xae6e33);
}
(function () {
    'use strict';
    var _0xb87371 = _0x5954;
    var _0x1933a4 = function (_0x50a627, _0x502812) {
            var _0x3eab3a = _0x5954;
            _0x50a627[_0x3eab3a(0x11b)][_0x3eab3a(0x11c)] = _0x502812 ? '' : _0x3eab3a(0x11d);
        }, _0x4e97bc = function (_0x28538e, _0x25a15f) {
            var _0x9babec = _0x5954;
            return []['some'][_0x9babec(0x11e)](document[_0x9babec(0x11f)](_0x25a15f), function (_0x553943) {
                return _0x553943 === _0x28538e;
            });
        };
    app['AppView'] = Backbone[_0xb87371(0x120)]['extend']({
        'el': '.todoapp',
        'statsTemplate': microtemplate(document[_0xb87371(0x121)](_0xb87371(0x122))[_0xb87371(0x123)]),
        'events': {
            'keypress\x20.new-todo': _0xb87371(0x124),
            'click\x20.clear-completed': _0xb87371(0x125),
            'click\x20.toggle-all': _0xb87371(0x126)
        },
        'initialize': function () {
            var _0x4edd96 = _0xb87371;
            this[_0x4edd96(0x127)] = this['$'](_0x4edd96(0x128))[_0x4edd96(0x129)](0x0), this[_0x4edd96(0x12a)] = this['$'](_0x4edd96(0x12b))[_0x4edd96(0x129)](0x0), this[_0x4edd96(0x12c)] = this['$'](_0x4edd96(0x12d))[_0x4edd96(0x129)](0x0), this[_0x4edd96(0x12e)] = this['$']('.main')[_0x4edd96(0x129)](0x0), this[_0x4edd96(0x12f)](app[_0x4edd96(0x130)], _0x4edd96(0x131), this['addOne']), this[_0x4edd96(0x12f)](app[_0x4edd96(0x130)], 'reset', this['addAll']), this[_0x4edd96(0x12f)](app[_0x4edd96(0x130)], _0x4edd96(0x132), this[_0x4edd96(0x133)]), this[_0x4edd96(0x12f)](app[_0x4edd96(0x130)], _0x4edd96(0x134), this[_0x4edd96(0x135)]), this[_0x4edd96(0x12f)](app['todos'], _0x4edd96(0x136), this[_0x4edd96(0x137)]), app[_0x4edd96(0x130)][_0x4edd96(0x138)]({ 'reset': !![] });
        },
        'render': function () {
            var _0x4e530d = _0xb87371, _0x223e8e = app[_0x4e530d(0x130)][_0x4e530d(0x139)]()[_0x4e530d(0x13a)], _0x1b1dd6 = app[_0x4e530d(0x130)]['remaining']()[_0x4e530d(0x13a)], _0x339b4b = '[href=\x22#/' + (app[_0x4e530d(0x13b)] || '') + '\x22]';
            app['todos'][_0x4e530d(0x13a)] ? (_0x1933a4(this['main'], !![]), _0x1933a4(this[_0x4e530d(0x12c)], !![]), this[_0x4e530d(0x12c)]['innerHTML'] = this['statsTemplate']({
                'completed': _0x223e8e,
                'remaining': _0x1b1dd6
            }), []['forEach'][_0x4e530d(0x11e)](this['$'](_0x4e530d(0x13c)), function (_0xf38824) {
                var _0x415b02 = _0x4e530d;
                _0xf38824[_0x415b02(0x13d)][_0x415b02(0x13e)](_0x415b02(0x13f)), _0x4e97bc(_0xf38824, _0x339b4b) && _0xf38824[_0x415b02(0x13d)][_0x415b02(0x131)](_0x415b02(0x13f));
            })) : (_0x1933a4(this[_0x4e530d(0x12e)], ![]), _0x1933a4(this[_0x4e530d(0x12c)], ![])), this[_0x4e530d(0x127)][_0x4e530d(0x140)] = !_0x1b1dd6;
        },
        'addOne': function (_0x55d7aa) {
            var _0x527849 = _0xb87371, _0x584e48 = new app[(_0x527849(0x141))]({ 'model': _0x55d7aa });
            document['querySelector'](_0x527849(0x142))[_0x527849(0x143)](_0x584e48['render']()['el']);
        },
        'addAll': function () {
            var _0x4de700 = _0xb87371;
            this['$']('.todo-list')[_0x4de700(0x129)](0x0)[_0x4de700(0x123)] = '', app[_0x4de700(0x130)][_0x4de700(0x144)](this[_0x4de700(0x145)], this);
        },
        'filterOne': function (_0x4bcc4b) {
            var _0x4db29b = _0xb87371;
            _0x4bcc4b[_0x4db29b(0x146)](_0x4db29b(0x147));
        },
        'filterAll': function () {
            var _0x1fd896 = _0xb87371;
            app[_0x1fd896(0x130)][_0x1fd896(0x144)](this[_0x1fd896(0x133)], this);
        },
        'newAttributes': function () {
            var _0x4ab684 = _0xb87371;
            return {
                'title': this['input'][_0x4ab684(0x148)]['trim'](),
                'order': app[_0x4ab684(0x130)][_0x4ab684(0x149)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x252189) {
            var _0x1b9472 = _0xb87371;
            if (_0x252189[_0x1b9472(0x14a)] !== ENTER_KEY || !this['input'][_0x1b9472(0x148)]['trim']())
                return;
            app[_0x1b9472(0x130)][_0x1b9472(0x14b)](this[_0x1b9472(0x14c)]()), this[_0x1b9472(0x12a)]['value'] = '';
        },
        'clearCompleted': function () {
            var _0x1a6bed = _0xb87371;
            return app['todos'][_0x1a6bed(0x139)]()[_0x1a6bed(0x144)](function (_0x3fec68) {
                _0x3fec68['destroy']();
            }), ![];
        },
        'toggleAllComplete': function () {
            var _0x30b453 = _0xb87371, _0x191529 = this[_0x30b453(0x127)]['checked'];
            app[_0x30b453(0x130)][_0x30b453(0x144)](function (_0x2b098e) {
                var _0xe9cd90 = _0x30b453;
                _0x2b098e[_0xe9cd90(0x14d)]({ 'completed': _0x191529 });
            });
        }
    });
}());
