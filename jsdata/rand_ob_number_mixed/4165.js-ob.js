define([
    'jquery',
    'underscore',
    'backbone',
    'collections/todos',
    'views/todos',
    'text!templates/stats.html',
    'common'
], function (_0x5bda54, _0x1e711f, _0x2d8c06, _0x34a869, _0x19a79e, _0x4d5684, _0x2b867e) {
    'use strict';
    var _0x12fdd3 = _0x2d8c06['View']['extend']({
        'el': '.todoapp',
        'template': _0x1e711f['template'](_0x4d5684),
        'events': {
            'keypress\x20.new-todo': 'createOnEnter',
            'click\x20.clear-completed': 'clearCompleted',
            'click\x20.toggle-all': 'toggleAllComplete'
        },
        'initialize': function () {
            this['allCheckbox'] = this['$']('.toggle-all')[-0x5fe + -0x243 * 0x3 + 0xcc7], this['$input'] = this['$']('.new-todo'), this['$footer'] = this['$']('.footer'), this['$main'] = this['$']('.main'), this['$todoList'] = this['$']('.todo-list'), this['listenTo'](_0x34a869, 'add', this['addOne']), this['listenTo'](_0x34a869, 'reset', this['addAll']), this['listenTo'](_0x34a869, 'change:completed', this['filterOne']), this['listenTo'](_0x34a869, 'filter', this['filterAll']), this['listenTo'](_0x34a869, 'all', _0x1e711f['debounce'](this['render'], -0x1bce + -0x1 * -0xaf4 + 0x10da)), _0x34a869['fetch']({ 'reset': !![] });
        },
        'render': function () {
            var _0x31038b = _0x34a869['completed']()['length'], _0x484d38 = _0x34a869['remaining']()['length'];
            _0x34a869['length'] ? (this['$main']['show'](), this['$footer']['show'](), this['$footer']['html'](this['template']({
                'completed': _0x31038b,
                'remaining': _0x484d38
            })), this['$']('.filters\x20li\x20a')['removeClass']('selected')['filter']('[href=\x22#/' + (_0x2b867e['TodoFilter'] || '') + '\x22]')['addClass']('selected')) : (this['$main']['hide'](), this['$footer']['hide']()), this['allCheckbox']['checked'] = !_0x484d38;
        },
        'addOne': function (_0x318513) {
            var _0x321f39 = new _0x19a79e({ 'model': _0x318513 });
            this['$todoList']['append'](_0x321f39['render']()['el']);
        },
        'addAll': function () {
            this['$todoList']['empty'](), _0x34a869['each'](this['addOne'], this);
        },
        'filterOne': function (_0x5e888b) {
            _0x5e888b['trigger']('visible');
        },
        'filterAll': function () {
            _0x34a869['each'](this['filterOne'], this);
        },
        'newAttributes': function () {
            return {
                'title': this['$input']['val']()['trim'](),
                'order': _0x34a869['nextOrder'](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x3c4a20) {
            if (_0x3c4a20['which'] !== _0x2b867e['ENTER_KEY'] || !this['$input']['val']()['trim']())
                return;
            _0x34a869['create'](this['newAttributes']()), this['$input']['val']('');
        },
        'clearCompleted': function () {
            return _0x1e711f['invoke'](_0x34a869['completed'](), 'destroy'), ![];
        },
        'toggleAllComplete': function () {
            var _0x319fe0 = this['allCheckbox']['checked'];
            _0x34a869['each'](function (_0x4653e0) {
                _0x4653e0['save']({ 'completed': _0x319fe0 });
            });
        }
    });
    return _0x12fdd3;
});
