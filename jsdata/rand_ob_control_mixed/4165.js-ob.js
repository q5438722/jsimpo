define([
    'jquery',
    'underscore',
    'backbone',
    'collections/todos',
    'views/todos',
    'text!templates/stats.html',
    'common'
], function (_0x5df0c2, _0x48113b, _0x231e98, _0x334fe1, _0x4a0afc, _0x577911, _0x4bd14a) {
    'use strict';
    var _0x85bfbe = {
        'oOUtZ': '0|7|10|1|4|3|9|6|5|8|2',
        'hVihI': '.toggle-all',
        'tRNqv': '.main',
        'VjtdJ': 'add',
        'BCqUN': '.todo-list',
        'pOYkl': 'filter',
        'LSzcD': 'change:completed',
        'fQgxA': '.new-todo',
        'EEYRf': 'all',
        'TXqNU': 'reset',
        'ZzGre': '.footer',
        'elygx': '.filters\x20li\x20a',
        'BqLkN': 'selected',
        'AXjVg': function (_0x36f9a9, _0x5f14da) {
            return _0x36f9a9 + _0x5f14da;
        },
        'iYJOp': function (_0x354306, _0x51a9f1) {
            return _0x354306 + _0x51a9f1;
        },
        'tLAYC': '[href=\x22#/',
        'IqgsH': 'visible',
        'PrMng': function (_0x5a79f6, _0x4ca96c) {
            return _0x5a79f6 !== _0x4ca96c;
        },
        'pZiuV': 'destroy',
        'nFBPP': '.todoapp',
        'CMSma': 'createOnEnter',
        'VKcEW': 'clearCompleted',
        'NBcgA': 'toggleAllComplete'
    };
    var _0x3efc7f = _0x231e98['View']['extend']({
        'el': _0x85bfbe['nFBPP'],
        'template': _0x48113b['template'](_0x577911),
        'events': {
            'keypress\x20.new-todo': _0x85bfbe['CMSma'],
            'click\x20.clear-completed': _0x85bfbe['VKcEW'],
            'click\x20.toggle-all': _0x85bfbe['NBcgA']
        },
        'initialize': function () {
            var _0x29f807 = _0x85bfbe['oOUtZ']['split']('|'), _0x31dc37 = 0x0;
            while (!![]) {
                switch (_0x29f807[_0x31dc37++]) {
                case '0':
                    this['allCheckbox'] = this['$'](_0x85bfbe['hVihI'])[0x0];
                    continue;
                case '1':
                    this['$main'] = this['$'](_0x85bfbe['tRNqv']);
                    continue;
                case '2':
                    _0x334fe1['fetch']({ 'reset': !![] });
                    continue;
                case '3':
                    this['listenTo'](_0x334fe1, _0x85bfbe['VjtdJ'], this['addOne']);
                    continue;
                case '4':
                    this['$todoList'] = this['$'](_0x85bfbe['BCqUN']);
                    continue;
                case '5':
                    this['listenTo'](_0x334fe1, _0x85bfbe['pOYkl'], this['filterAll']);
                    continue;
                case '6':
                    this['listenTo'](_0x334fe1, _0x85bfbe['LSzcD'], this['filterOne']);
                    continue;
                case '7':
                    this['$input'] = this['$'](_0x85bfbe['fQgxA']);
                    continue;
                case '8':
                    this['listenTo'](_0x334fe1, _0x85bfbe['EEYRf'], _0x48113b['debounce'](this['render'], 0x0));
                    continue;
                case '9':
                    this['listenTo'](_0x334fe1, _0x85bfbe['TXqNU'], this['addAll']);
                    continue;
                case '10':
                    this['$footer'] = this['$'](_0x85bfbe['ZzGre']);
                    continue;
                }
                break;
            }
        },
        'render': function () {
            var _0x2b531e = _0x334fe1['completed']()['length'], _0x474237 = _0x334fe1['remaining']()['length'];
            _0x334fe1['length'] ? (this['$main']['show'](), this['$footer']['show'](), this['$footer']['html'](this['template']({
                'completed': _0x2b531e,
                'remaining': _0x474237
            })), this['$'](_0x85bfbe['elygx'])['removeClass'](_0x85bfbe['BqLkN'])['filter'](_0x85bfbe['AXjVg'](_0x85bfbe['iYJOp'](_0x85bfbe['tLAYC'], _0x4bd14a['TodoFilter'] || ''), '\x22]'))['addClass'](_0x85bfbe['BqLkN'])) : (this['$main']['hide'](), this['$footer']['hide']()), this['allCheckbox']['checked'] = !_0x474237;
        },
        'addOne': function (_0x1be02b) {
            var _0x2ea268 = new _0x4a0afc({ 'model': _0x1be02b });
            this['$todoList']['append'](_0x2ea268['render']()['el']);
        },
        'addAll': function () {
            this['$todoList']['empty'](), _0x334fe1['each'](this['addOne'], this);
        },
        'filterOne': function (_0x1127b8) {
            _0x1127b8['trigger'](_0x85bfbe['IqgsH']);
        },
        'filterAll': function () {
            _0x334fe1['each'](this['filterOne'], this);
        },
        'newAttributes': function () {
            return {
                'title': this['$input']['val']()['trim'](),
                'order': _0x334fe1['nextOrder'](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0xf01420) {
            if (_0x85bfbe['PrMng'](_0xf01420['which'], _0x4bd14a['ENTER_KEY']) || !this['$input']['val']()['trim']())
                return;
            _0x334fe1['create'](this['newAttributes']()), this['$input']['val']('');
        },
        'clearCompleted': function () {
            return _0x48113b['invoke'](_0x334fe1['completed'](), _0x85bfbe['pZiuV']), ![];
        },
        'toggleAllComplete': function () {
            var _0x5639f0 = this['allCheckbox']['checked'];
            _0x334fe1['each'](function (_0x332e51) {
                _0x332e51['save']({ 'completed': _0x5639f0 });
            });
        }
    });
    return _0x3efc7f;
});
