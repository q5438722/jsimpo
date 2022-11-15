+function (_0x404360) {
    'use strict';
    var _0x1d85e1 = _0x3643;
    var _0x2a1697 = function (_0x12e678, _0x1b4afe) {
        var _0x158694 = _0x3643;
        this[_0x158694(321)] = _0x404360(_0x12e678), this[_0x158694(322)] = _0x404360['extend']({}, _0x2a1697[_0x158694(323)], _0x1b4afe), this[_0x158694(324)] = ![];
    };
    _0x2a1697[_0x1d85e1(325)] = '3.2.0', _0x2a1697[_0x1d85e1(323)] = { 'loadingText': _0x1d85e1(326) }, _0x2a1697['prototype'][_0x1d85e1(327)] = function (_0x331266) {
        var _0x325a80 = _0x1d85e1, _0x22cafa = _0x325a80(328), _0x19c7fd = this['$element'], _0x398f83 = _0x19c7fd['is'](_0x325a80(329)) ? _0x325a80(330) : _0x325a80(331), _0x5b6567 = _0x19c7fd[_0x325a80(332)]();
        _0x331266 = _0x331266 + _0x325a80(333);
        if (_0x5b6567[_0x325a80(334)] == null)
            _0x19c7fd[_0x325a80(332)](_0x325a80(334), _0x19c7fd[_0x398f83]());
        _0x19c7fd[_0x398f83](_0x5b6567[_0x331266] == null ? this[_0x325a80(322)][_0x331266] : _0x5b6567[_0x331266]), setTimeout(_0x404360[_0x325a80(335)](function () {
            var _0x3f3cd4 = _0x325a80;
            if (_0x331266 == _0x3f3cd4(336))
                this[_0x3f3cd4(324)] = !![], _0x19c7fd[_0x3f3cd4(337)](_0x22cafa)[_0x3f3cd4(338)](_0x22cafa, _0x22cafa);
            else
                this[_0x3f3cd4(324)] && (this[_0x3f3cd4(324)] = ![], _0x19c7fd['removeClass'](_0x22cafa)[_0x3f3cd4(339)](_0x22cafa));
        }, this), 0);
    }, _0x2a1697[_0x1d85e1(340)][_0x1d85e1(341)] = function () {
        var _0x45dd5d = _0x1d85e1, _0x32dc8a = !![], _0x1784d3 = this[_0x45dd5d(321)][_0x45dd5d(342)](_0x45dd5d(343));
        if (_0x1784d3['length']) {
            var _0x423ced = this[_0x45dd5d(321)]['find']('input');
            if (_0x423ced[_0x45dd5d(344)](_0x45dd5d(345)) == _0x45dd5d(346)) {
                if (_0x423ced[_0x45dd5d(344)](_0x45dd5d(347)) && this['$element'][_0x45dd5d(348)](_0x45dd5d(349)))
                    _0x32dc8a = ![];
                else
                    _0x1784d3[_0x45dd5d(350)](_0x45dd5d(351))['removeClass'](_0x45dd5d(349));
            }
            if (_0x32dc8a)
                _0x423ced['prop']('checked', !this[_0x45dd5d(321)]['hasClass']('active'))['trigger'](_0x45dd5d(352));
        }
        if (_0x32dc8a)
            this[_0x45dd5d(321)]['toggleClass'](_0x45dd5d(349));
    };
    function _0x329da0(_0x126026) {
        return this['each'](function () {
            var _0x18dc44 = _0x3643, _0x4d28a3 = _0x404360(this), _0x5a689a = _0x4d28a3[_0x18dc44(332)](_0x18dc44(353)), _0xbfc287 = typeof _0x126026 == 'object' && _0x126026;
            if (!_0x5a689a)
                _0x4d28a3['data']('bs.button', _0x5a689a = new _0x2a1697(this, _0xbfc287));
            if (_0x126026 == _0x18dc44(341))
                _0x5a689a[_0x18dc44(341)]();
            else {
                if (_0x126026)
                    _0x5a689a['setState'](_0x126026);
            }
        });
    }
    var _0x55a9fa = _0x404360['fn'][_0x1d85e1(354)];
    _0x404360['fn']['button'] = _0x329da0, _0x404360['fn']['button'][_0x1d85e1(355)] = _0x2a1697, _0x404360['fn'][_0x1d85e1(354)]['noConflict'] = function () {
        var _0x2b759d = _0x1d85e1;
        return _0x404360['fn'][_0x2b759d(354)] = _0x55a9fa, this;
    }, _0x404360(document)['on'](_0x1d85e1(356), _0x1d85e1(357), function (_0xc4068a) {
        var _0x5214f2 = _0x1d85e1, _0x3f69b8 = _0x404360(_0xc4068a[_0x5214f2(358)]);
        if (!_0x3f69b8[_0x5214f2(348)](_0x5214f2(359)))
            _0x3f69b8 = _0x3f69b8['closest'](_0x5214f2(360));
        _0x329da0['call'](_0x3f69b8, _0x5214f2(341)), _0xc4068a[_0x5214f2(361)]();
    });
}(jQuery);