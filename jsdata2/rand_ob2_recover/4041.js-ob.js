+function (_0x40333f) {
    'use strict';
    var _0x4e149c = _0x30c1;
    var _0x5b5cee = function (_0x2cd8a1, _0xd8f3f2) {
        var _0x1af526 = _0x30c1;
        this[_0x1af526(388)] = _0x40333f(_0x2cd8a1), this['options'] = _0x40333f[_0x1af526(389)]({}, _0x5b5cee[_0x1af526(390)], _0xd8f3f2), this['isLoading'] = ![];
    };
    _0x5b5cee[_0x4e149c(391)] = _0x4e149c(392), _0x5b5cee[_0x4e149c(390)] = { 'loadingText': _0x4e149c(393) }, _0x5b5cee[_0x4e149c(394)][_0x4e149c(395)] = function (_0x524029) {
        var _0xe95eb = _0x4e149c, _0x111f85 = _0xe95eb(396), _0x57c488 = this[_0xe95eb(388)], _0x3b130d = _0x57c488['is'](_0xe95eb(397)) ? _0xe95eb(398) : _0xe95eb(399), _0x285c28 = _0x57c488[_0xe95eb(400)]();
        _0x524029 = _0x524029 + _0xe95eb(401);
        if (_0x285c28[_0xe95eb(402)] == null)
            _0x57c488['data'](_0xe95eb(402), _0x57c488[_0x3b130d]());
        _0x57c488[_0x3b130d](_0x285c28[_0x524029] == null ? this[_0xe95eb(403)][_0x524029] : _0x285c28[_0x524029]), setTimeout(_0x40333f[_0xe95eb(404)](function () {
            var _0x191145 = _0xe95eb;
            if (_0x524029 == 'loadingText')
                this[_0x191145(405)] = !![], _0x57c488[_0x191145(406)](_0x111f85)[_0x191145(407)](_0x111f85, _0x111f85);
            else
                this[_0x191145(405)] && (this[_0x191145(405)] = ![], _0x57c488['removeClass'](_0x111f85)[_0x191145(408)](_0x111f85));
        }, this), 0);
    }, _0x5b5cee['prototype']['toggle'] = function () {
        var _0xb82837 = _0x4e149c, _0x40c4a0 = !![], _0x46fff1 = this[_0xb82837(388)][_0xb82837(409)](_0xb82837(410));
        if (_0x46fff1['length']) {
            var _0x426d3a = this[_0xb82837(388)][_0xb82837(411)](_0xb82837(397));
            if (_0x426d3a['prop'](_0xb82837(412)) == _0xb82837(413)) {
                if (_0x426d3a[_0xb82837(414)](_0xb82837(415)) && this[_0xb82837(388)][_0xb82837(416)](_0xb82837(417)))
                    _0x40c4a0 = ![];
                else
                    _0x46fff1[_0xb82837(411)](_0xb82837(418))[_0xb82837(419)]('active');
            }
            if (_0x40c4a0)
                _0x426d3a['prop'](_0xb82837(415), !this['$element'][_0xb82837(416)](_0xb82837(417)))['trigger'](_0xb82837(420));
        }
        if (_0x40c4a0)
            this[_0xb82837(388)][_0xb82837(421)]('active');
    };
    function _0xceeec5(_0x22cc44) {
        var _0x5bf23a = _0x4e149c;
        return this[_0x5bf23a(422)](function () {
            var _0x57c405 = _0x5bf23a, _0x3d26af = _0x40333f(this), _0x273fe2 = _0x3d26af[_0x57c405(400)](_0x57c405(423)), _0x4503ee = typeof _0x22cc44 == _0x57c405(424) && _0x22cc44;
            if (!_0x273fe2)
                _0x3d26af[_0x57c405(400)](_0x57c405(423), _0x273fe2 = new _0x5b5cee(this, _0x4503ee));
            if (_0x22cc44 == _0x57c405(425))
                _0x273fe2[_0x57c405(425)]();
            else {
                if (_0x22cc44)
                    _0x273fe2[_0x57c405(395)](_0x22cc44);
            }
        });
    }
    var _0x14e49b = _0x40333f['fn'][_0x4e149c(426)];
    _0x40333f['fn']['button'] = _0xceeec5, _0x40333f['fn'][_0x4e149c(426)]['Constructor'] = _0x5b5cee, _0x40333f['fn'][_0x4e149c(426)]['noConflict'] = function () {
        var _0x171c9e = _0x4e149c;
        return _0x40333f['fn'][_0x171c9e(426)] = _0x14e49b, this;
    }, _0x40333f(document)['on']('click.bs.button.data-api', '[data-toggle^="button"]', function (_0x38e2d9) {
        var _0x46aad8 = _0x4e149c, _0x354d55 = _0x40333f(_0x38e2d9[_0x46aad8(427)]);
        if (!_0x354d55[_0x46aad8(416)](_0x46aad8(428)))
            _0x354d55 = _0x354d55[_0x46aad8(409)]('.btn');
        _0xceeec5[_0x46aad8(429)](_0x354d55, _0x46aad8(425)), _0x38e2d9[_0x46aad8(430)]();
    });
}(jQuery);