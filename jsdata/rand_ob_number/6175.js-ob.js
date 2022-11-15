var app = app || {};
(function () {
    'use strict';
    var _0x2f0c7b = function (_0x39a4f8, _0x4801f2) {
            _0x39a4f8['style']['display'] = _0x4801f2 ? '' : 'none';
        }, _0x5903d6 = function (_0x4db6c9, _0x2b5b45) {
            return []['some']['call'](document['querySelectorAll'](_0x2b5b45), function (_0x169d37) {
                return _0x169d37 === _0x4db6c9;
            });
        };
    app['AppView'] = Backbone['View']['extend']({
        'el': '.todoapp',
        'statsTemplate': microtemplate(document['querySelector']('#stats-template')['innerHTML']),
        'events': {
            'keypress\x20.new-todo': 'createOnEnter',
            'click\x20.clear-completed': 'clearCompleted',
            'click\x20.toggle-all': 'toggleAllComplete'
        },
        'initialize': function () {
            this['allCheckbox'] = this['$']('.toggle-all')['item'](0x74b * -0x2 + 0xba3 * -0x2 + -0x12ee * -0x2), this['input'] = this['$']('.new-todo')['item'](-0xf * 0x6d + -0x24aa + -0x1 * -0x2b0d), this['footer'] = this['$']('.footer')['item'](-0x39 * -0x9f + 0x2706 + 0x1 * -0x4a6d), this['main'] = this['$']('.main')['item'](-0xaf * -0x5 + 0x8 * -0x33b + -0x1 * -0x166d), this['listenTo'](app['todos'], 'add', this['addOne']), this['listenTo'](app['todos'], 'reset', this['addAll']), this['listenTo'](app['todos'], 'change:completed', this['filterOne']), this['listenTo'](app['todos'], 'filter', this['filterAll']), this['listenTo'](app['todos'], 'all', this['render']), app['todos']['fetch']({ 'reset': !![] });
        },
        'render': function () {
            var _0x2aca96 = app['todos']['completed']()['length'], _0x2ef1c4 = app['todos']['remaining']()['length'], _0x54fb5a = '[href=\x22#/' + (app['TodoFilter'] || '') + '\x22]';
            app['todos']['length'] ? (_0x2f0c7b(this['main'], !![]), _0x2f0c7b(this['footer'], !![]), this['footer']['innerHTML'] = this['statsTemplate']({
                'completed': _0x2aca96,
                'remaining': _0x2ef1c4
            }), []['forEach']['call'](this['$']('.filters\x20li\x20a'), function (_0x2c910e) {
                _0x2c910e['classList']['remove']('selected'), _0x5903d6(_0x2c910e, _0x54fb5a) && _0x2c910e['classList']['add']('selected');
            })) : (_0x2f0c7b(this['main'], ![]), _0x2f0c7b(this['footer'], ![])), this['allCheckbox']['checked'] = !_0x2ef1c4;
        },
        'addOne': function (_0x2b3b90) {
            var _0x1a13bc = new app['TodoView']({ 'model': _0x2b3b90 });
            document['querySelector']('.todo-list')['appendChild'](_0x1a13bc['render']()['el']);
        },
        'addAll': function () {
            this['$']('.todo-list')['item'](-0x90 * 0xa + -0x1302 + -0x41b * -0x6)['innerHTML'] = '', app['todos']['forEach'](this['addOne'], this);
        },
        'filterOne': function (_0x3f3c52) {
            _0x3f3c52['trigger']('visible');
        },
        'filterAll': function () {
            app['todos']['forEach'](this['filterOne'], this);
        },
        'newAttributes': function () {
            return {
                'title': this['input']['value']['trim'](),
                'order': app['todos']['nextOrder'](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x3d0c5f) {
            if (_0x3d0c5f['which'] !== ENTER_KEY || !this['input']['value']['trim']())
                return;
            app['todos']['create'](this['newAttributes']()), this['input']['value'] = '';
        },
        'clearCompleted': function () {
            return app['todos']['completed']()['forEach'](function (_0x129b72) {
                _0x129b72['destroy']();
            }), ![];
        },
        'toggleAllComplete': function () {
            var _0x34cc4e = this['allCheckbox']['checked'];
            app['todos']['forEach'](function (_0xa0e064) {
                _0xa0e064['save']({ 'completed': _0x34cc4e });
            });
        }
    });
}());
