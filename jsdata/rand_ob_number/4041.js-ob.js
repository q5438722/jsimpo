+function (_0x3377cc) {
    'use strict';
    var _0x525354 = function (_0x23fadf, _0x535c2e) {
        this['$element'] = _0x3377cc(_0x23fadf), this['options'] = _0x3377cc['extend']({}, _0x525354['DEFAULTS'], _0x535c2e), this['isLoading'] = ![];
    };
    _0x525354['VERSION'] = '3.2.0', _0x525354['DEFAULTS'] = { 'loadingText': 'loading...' }, _0x525354['prototype']['setState'] = function (_0x385115) {
        var _0x1eb1ad = 'disabled', _0x4e91f6 = this['$element'], _0x1a8a9e = _0x4e91f6['is']('input') ? 'val' : 'html', _0x15218b = _0x4e91f6['data']();
        _0x385115 = _0x385115 + 'Text';
        if (_0x15218b['resetText'] == null)
            _0x4e91f6['data']('resetText', _0x4e91f6[_0x1a8a9e]());
        _0x4e91f6[_0x1a8a9e](_0x15218b[_0x385115] == null ? this['options'][_0x385115] : _0x15218b[_0x385115]), setTimeout(_0x3377cc['proxy'](function () {
            if (_0x385115 == 'loadingText')
                this['isLoading'] = !![], _0x4e91f6['addClass'](_0x1eb1ad)['attr'](_0x1eb1ad, _0x1eb1ad);
            else
                this['isLoading'] && (this['isLoading'] = ![], _0x4e91f6['removeClass'](_0x1eb1ad)['removeAttr'](_0x1eb1ad));
        }, this), 0x26a * 0xc + -0xc9 * 0x26 + -0xde * -0x1);
    }, _0x525354['prototype']['toggle'] = function () {
        var _0x3e48c8 = !![], _0x568e8d = this['$element']['closest']('[data-toggle=\x22buttons\x22]');
        if (_0x568e8d['length']) {
            var _0x55a6da = this['$element']['find']('input');
            if (_0x55a6da['prop']('type') == 'radio') {
                if (_0x55a6da['prop']('checked') && this['$element']['hasClass']('active'))
                    _0x3e48c8 = ![];
                else
                    _0x568e8d['find']('.active')['removeClass']('active');
            }
            if (_0x3e48c8)
                _0x55a6da['prop']('checked', !this['$element']['hasClass']('active'))['trigger']('change');
        }
        if (_0x3e48c8)
            this['$element']['toggleClass']('active');
    };
    function _0x14f4df(_0x432d56) {
        return this['each'](function () {
            var _0x228adf = _0x3377cc(this), _0x1542b8 = _0x228adf['data']('bs.button'), _0x139f5e = typeof _0x432d56 == 'object' && _0x432d56;
            if (!_0x1542b8)
                _0x228adf['data']('bs.button', _0x1542b8 = new _0x525354(this, _0x139f5e));
            if (_0x432d56 == 'toggle')
                _0x1542b8['toggle']();
            else {
                if (_0x432d56)
                    _0x1542b8['setState'](_0x432d56);
            }
        });
    }
    var _0x1eb150 = _0x3377cc['fn']['button'];
    _0x3377cc['fn']['button'] = _0x14f4df, _0x3377cc['fn']['button']['Constructor'] = _0x525354, _0x3377cc['fn']['button']['noConflict'] = function () {
        return _0x3377cc['fn']['button'] = _0x1eb150, this;
    }, _0x3377cc(document)['on']('click.bs.button.data-api', '[data-toggle^=\x22button\x22]', function (_0x1dcce2) {
        var _0x40ddd4 = _0x3377cc(_0x1dcce2['target']);
        if (!_0x40ddd4['hasClass']('btn'))
            _0x40ddd4 = _0x40ddd4['closest']('.btn');
        _0x14f4df['call'](_0x40ddd4, 'toggle'), _0x1dcce2['preventDefault']();
    });
}(jQuery);
