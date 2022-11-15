define([
    _0x278c13(498),
    'underscore',
    _0x278c13(499),
    _0x278c13(500),
    _0x278c13(501),
    _0x278c13(502),
    _0x278c13(503)
], function (_0x2268c5, _0x36a95a, _0xcc8ee0, _0x1129db, _0x4180e6, _0x541bc0, _0x35e6a8) {
    'use strict';
    var _0x2c482c = _0x278c13;
    var _0x8d176c = _0xcc8ee0[_0x2c482c(504)][_0x2c482c(505)]({
        'el': '.todoapp',
        'template': _0x36a95a[_0x2c482c(506)](_0x541bc0),
        'events': {
            'keypress .new-todo': _0x2c482c(507),
            'click .clear-completed': 'clearCompleted',
            'click .toggle-all': 'toggleAllComplete'
        },
        'initialize': function () {
            var _0x876a49 = _0x2c482c;
            this[_0x876a49(508)] = this['$'](_0x876a49(509))[0], this['$input'] = this['$'](_0x876a49(510)), this[_0x876a49(511)] = this['$']('.footer'), this['$main'] = this['$'](_0x876a49(512)), this[_0x876a49(513)] = this['$'](_0x876a49(514)), this[_0x876a49(515)](_0x1129db, _0x876a49(516), this[_0x876a49(517)]), this[_0x876a49(515)](_0x1129db, _0x876a49(518), this[_0x876a49(519)]), this['listenTo'](_0x1129db, _0x876a49(520), this['filterOne']), this[_0x876a49(515)](_0x1129db, _0x876a49(521), this[_0x876a49(522)]), this[_0x876a49(515)](_0x1129db, _0x876a49(523), _0x36a95a[_0x876a49(524)](this[_0x876a49(525)], 0)), _0x1129db[_0x876a49(526)]({ 'reset': !![] });
        },
        'render': function () {
            var _0xf92ba6 = _0x2c482c, _0x46c208 = _0x1129db[_0xf92ba6(527)]()['length'], _0x472e80 = _0x1129db[_0xf92ba6(528)]()['length'];
            _0x1129db[_0xf92ba6(529)] ? (this['$main'][_0xf92ba6(530)](), this[_0xf92ba6(511)][_0xf92ba6(530)](), this['$footer'][_0xf92ba6(531)](this['template']({
                'completed': _0x46c208,
                'remaining': _0x472e80
            })), this['$'](_0xf92ba6(532))[_0xf92ba6(533)]('selected')[_0xf92ba6(521)](_0xf92ba6(534) + (_0x35e6a8[_0xf92ba6(535)] || '') + '"]')[_0xf92ba6(536)](_0xf92ba6(537))) : (this[_0xf92ba6(538)][_0xf92ba6(539)](), this['$footer'][_0xf92ba6(539)]()), this[_0xf92ba6(508)][_0xf92ba6(540)] = !_0x472e80;
        },
        'addOne': function (_0x26f0e0) {
            var _0x283c3a = _0x2c482c, _0x12c31d = new _0x4180e6({ 'model': _0x26f0e0 });
            this[_0x283c3a(513)][_0x283c3a(541)](_0x12c31d[_0x283c3a(525)]()['el']);
        },
        'addAll': function () {
            var _0xe24a4d = _0x2c482c;
            this[_0xe24a4d(513)][_0xe24a4d(542)](), _0x1129db[_0xe24a4d(543)](this['addOne'], this);
        },
        'filterOne': function (_0x4161cb) {
            var _0x46314a = _0x2c482c;
            _0x4161cb[_0x46314a(544)](_0x46314a(545));
        },
        'filterAll': function () {
            var _0x58bb4a = _0x2c482c;
            _0x1129db[_0x58bb4a(543)](this[_0x58bb4a(546)], this);
        },
        'newAttributes': function () {
            var _0x47ae19 = _0x2c482c;
            return {
                'title': this[_0x47ae19(547)][_0x47ae19(548)]()['trim'](),
                'order': _0x1129db[_0x47ae19(549)](),
                'completed': ![]
            };
        },
        'createOnEnter': function (_0x4a7625) {
            var _0x168432 = _0x2c482c;
            if (_0x4a7625[_0x168432(550)] !== _0x35e6a8[_0x168432(551)] || !this[_0x168432(547)]['val']()[_0x168432(552)]())
                return;
            _0x1129db[_0x168432(553)](this[_0x168432(554)]()), this[_0x168432(547)]['val']('');
        },
        'clearCompleted': function () {
            var _0x762be0 = _0x2c482c;
            return _0x36a95a[_0x762be0(555)](_0x1129db['completed'](), _0x762be0(556)), ![];
        },
        'toggleAllComplete': function () {
            var _0x4f4ca5 = _0x2c482c, _0x48b0b3 = this[_0x4f4ca5(508)][_0x4f4ca5(540)];
            _0x1129db[_0x4f4ca5(543)](function (_0x2ab013) {
                var _0x2c3f56 = _0x4f4ca5;
                _0x2ab013[_0x2c3f56(557)]({ 'completed': _0x48b0b3 });
            });
        }
    });
    return _0x8d176c;
});