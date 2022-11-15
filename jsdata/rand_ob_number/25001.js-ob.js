const Plugin = {
    'id': 'zoom',
    'init': function (_0x458ef5) {
        _0x458ef5['getRevealElement']()['addEventListener']('mousedown', function (_0x2852b9) {
            var _0x1be7d7 = /Linux/['test'](window['navigator']['platform']) ? 'ctrl' : 'alt', _0x4720ac = (_0x458ef5['getConfig']()['zoomKey'] ? _0x458ef5['getConfig']()['zoomKey'] : _0x1be7d7) + 'Key', _0x3fcbf6 = _0x458ef5['getConfig']()['zoomLevel'] ? _0x458ef5['getConfig']()['zoomLevel'] : 0x207b + 0x1 * 0x1989 + -0x2d * 0x14a;
            _0x2852b9[_0x4720ac] && !_0x458ef5['isOverview']() && (_0x2852b9['preventDefault'](), zoom['to']({
                'x': _0x2852b9['clientX'],
                'y': _0x2852b9['clientY'],
                'scale': _0x3fcbf6,
                'pan': ![]
            }));
        });
    }
};
export default () => Plugin;
var zoom = function () {
    var _0x3bec33 = -0xeef + -0xacc + 0x19bc, _0x1fe1ad = -0x38c * -0xb + -0x2 * 0x92f + -0x14a6, _0x3775a0 = 0x15a8 + -0x68e + 0x1 * -0xf1a, _0x1aa1d8 = -(-0x7f8 + 0x23 * 0xa2 + -0xbf * 0x13), _0x4f25ea = -(-0x2383 + -0x21d7 + 0x455b), _0x221365 = 'WebkitTransform' in document['body']['style'] || 'MozTransform' in document['body']['style'] || 'msTransform' in document['body']['style'] || 'OTransform' in document['body']['style'] || 'transform' in document['body']['style'];
    _0x221365 && (document['body']['style']['transition'] = 'transform\x200.8s\x20ease', document['body']['style']['OTransition'] = '-o-transform\x200.8s\x20ease', document['body']['style']['msTransition'] = '-ms-transform\x200.8s\x20ease', document['body']['style']['MozTransition'] = '-moz-transform\x200.8s\x20ease', document['body']['style']['WebkitTransition'] = '-webkit-transform\x200.8s\x20ease');
    document['addEventListener']('keyup', function (_0xcab903) {
        _0x3bec33 !== 0x4f6 + -0x177e + 0x1289 && _0xcab903['keyCode'] === 0x1 * -0x50 + -0x17 * 0x83 + -0xc3 * -0x10 && zoom['out']();
    }), document['addEventListener']('mousemove', function (_0x4c19c0) {
        _0x3bec33 !== -0xb2 * -0x22 + 0x12af * -0x1 + -0x4f4 * 0x1 && (_0x1fe1ad = _0x4c19c0['clientX'], _0x3775a0 = _0x4c19c0['clientY']);
    });
    function _0x243c1b(_0xe23b58, _0x3e0963) {
        var _0x45eede = _0x8ac010();
        _0xe23b58['width'] = _0xe23b58['width'] || -0x6f * 0x38 + 0xb75 + -0x66a * -0x2, _0xe23b58['height'] = _0xe23b58['height'] || -0x1 * 0xb99 + 0x6 * 0x4ad + 0x1074 * -0x1, _0xe23b58['x'] -= (window['innerWidth'] - _0xe23b58['width'] * _0x3e0963) / (-0x30d * -0x4 + 0x1 * -0x1741 + -0x1 * -0xb0f), _0xe23b58['y'] -= (window['innerHeight'] - _0xe23b58['height'] * _0x3e0963) / (0xa9 * -0x11 + -0x2585 + 0x270 * 0x14);
        if (_0x221365) {
            if (_0x3e0963 === 0xb49 * -0x1 + 0x21a * -0x1 + 0xd64)
                document['body']['style']['transform'] = '', document['body']['style']['OTransform'] = '', document['body']['style']['msTransform'] = '', document['body']['style']['MozTransform'] = '', document['body']['style']['WebkitTransform'] = '';
            else {
                var _0x36e283 = _0x45eede['x'] + 'px\x20' + _0x45eede['y'] + 'px', _0x5439ee = 'translate(' + -_0xe23b58['x'] + 'px,' + -_0xe23b58['y'] + 'px)\x20scale(' + _0x3e0963 + ')';
                document['body']['style']['transformOrigin'] = _0x36e283, document['body']['style']['OTransformOrigin'] = _0x36e283, document['body']['style']['msTransformOrigin'] = _0x36e283, document['body']['style']['MozTransformOrigin'] = _0x36e283, document['body']['style']['WebkitTransformOrigin'] = _0x36e283, document['body']['style']['transform'] = _0x5439ee, document['body']['style']['OTransform'] = _0x5439ee, document['body']['style']['msTransform'] = _0x5439ee, document['body']['style']['MozTransform'] = _0x5439ee, document['body']['style']['WebkitTransform'] = _0x5439ee;
            }
        } else
            _0x3e0963 === -0x1 * -0x2054 + -0x84 + 0x1fcf * -0x1 ? (document['body']['style']['position'] = '', document['body']['style']['left'] = '', document['body']['style']['top'] = '', document['body']['style']['width'] = '', document['body']['style']['height'] = '', document['body']['style']['zoom'] = '') : (document['body']['style']['position'] = 'relative', document['body']['style']['left'] = -(_0x45eede['x'] + _0xe23b58['x']) / _0x3e0963 + 'px', document['body']['style']['top'] = -(_0x45eede['y'] + _0xe23b58['y']) / _0x3e0963 + 'px', document['body']['style']['width'] = _0x3e0963 * (-0xd * 0x20d + -0x1189 + 0x2c96) + '%', document['body']['style']['height'] = _0x3e0963 * (0x3a9 * 0x7 + 0x1b * 0x50 + 0xb39 * -0x3) + '%', document['body']['style']['zoom'] = _0x3e0963);
        _0x3bec33 = _0x3e0963, document['documentElement']['classList'] && (_0x3bec33 !== -0xdd5 * 0x1 + -0x23a9 + 0x317f ? document['documentElement']['classList']['add']('zoomed') : document['documentElement']['classList']['remove']('zoomed'));
    }
    function _0x54162a() {
        var _0x1e72f0 = 0x1741 + -0x1687 * 0x1 + 0x3e * -0x3 + 0.12, _0x4d9dfb = window['innerWidth'] * _0x1e72f0, _0x12334f = window['innerHeight'] * _0x1e72f0, _0x8df289 = _0x8ac010();
        if (_0x3775a0 < _0x12334f)
            window['scroll'](_0x8df289['x'], _0x8df289['y'] - (0x4ff + 0x159f + -0x1a9d * 0x1 - _0x3775a0 / _0x12334f) * ((0x5dd * 0x2 + 0x1688 + -0x88d * 0x4) / _0x3bec33));
        else
            _0x3775a0 > window['innerHeight'] - _0x12334f && window['scroll'](_0x8df289['x'], _0x8df289['y'] + (-0x3f3 * 0x6 + -0x81 * -0x2b + 0x208 - (window['innerHeight'] - _0x3775a0) / _0x12334f) * ((0x1 * 0xa11 + 0x153 * 0x1d + -0x306a) / _0x3bec33));
        if (_0x1fe1ad < _0x4d9dfb)
            window['scroll'](_0x8df289['x'] - (0xa * 0x125 + 0x35 * 0x58 + -0x1da9 - _0x1fe1ad / _0x4d9dfb) * ((0x1 * 0x268c + -0x20c0 + -0x5be) / _0x3bec33), _0x8df289['y']);
        else
            _0x1fe1ad > window['innerWidth'] - _0x4d9dfb && window['scroll'](_0x8df289['x'] + (0xd2b * -0x1 + -0x1fd5 + -0x29 * -0x119 - (window['innerWidth'] - _0x1fe1ad) / _0x4d9dfb) * ((0x8 * -0xa8 + -0x1 * -0x2482 + -0x1f34) / _0x3bec33), _0x8df289['y']);
    }
    function _0x8ac010() {
        return {
            'x': window['scrollX'] !== undefined ? window['scrollX'] : window['pageXOffset'],
            'y': window['scrollY'] !== undefined ? window['scrollY'] : window['pageYOffset']
        };
    }
    return {
        'to': function (_0x244c86) {
            if (_0x3bec33 !== 0x2ba + -0x20 * -0x83 + 0x1319 * -0x1)
                zoom['out']();
            else {
                _0x244c86['x'] = _0x244c86['x'] || 0x1aa8 + 0x1d15 + -0x37bd, _0x244c86['y'] = _0x244c86['y'] || 0x111d + -0x1 * 0x19e5 + -0x8 * -0x119;
                if (!!_0x244c86['element']) {
                    var _0x276f74 = -0x1 * 0x12b + 0xb5 * 0x23 + -0x1780, _0x3011fb = _0x244c86['element']['getBoundingClientRect']();
                    _0x244c86['x'] = _0x3011fb['left'] - _0x276f74, _0x244c86['y'] = _0x3011fb['top'] - _0x276f74, _0x244c86['width'] = _0x3011fb['width'] + _0x276f74 * (0x1 * -0xa34 + -0x1 * -0x18b9 + -0x5 * 0x2e7), _0x244c86['height'] = _0x3011fb['height'] + _0x276f74 * (0x2f5 * 0x5 + -0xeeb + -0x4 * -0x9);
                }
                _0x244c86['width'] !== undefined && _0x244c86['height'] !== undefined && (_0x244c86['scale'] = Math['max'](Math['min'](window['innerWidth'] / _0x244c86['width'], window['innerHeight'] / _0x244c86['height']), 0x232 * -0x11 + 0xc3b * -0x3 + 0x4a04)), _0x244c86['scale'] > 0x1 * 0x1c49 + -0x3 * -0x338 + -0x1 * 0x25f0 && (_0x244c86['x'] *= _0x244c86['scale'], _0x244c86['y'] *= _0x244c86['scale'], _0x243c1b(_0x244c86, _0x244c86['scale']), _0x244c86['pan'] !== ![] && (_0x1aa1d8 = setTimeout(function () {
                    _0x4f25ea = setInterval(_0x54162a, (-0x7 * 0x3ef + 0x2 * -0xd85 + 0x3a7b) / (0x12b9 + -0x1926 + 0x6a9));
                }, -0x196e + -0x33 * 0xbb + 0x41cf)));
            }
        },
        'out': function () {
            clearTimeout(_0x1aa1d8), clearInterval(_0x4f25ea), _0x243c1b({
                'x': 0x0,
                'y': 0x0
            }, -0x10e + -0x21a6 + -0x1 * -0x22b5), _0x3bec33 = 0x14b * -0x1b + 0x1ee3 * -0x1 + 0x41cd;
        },
        'magnify': function (_0x23bcbd) {
            this['to'](_0x23bcbd);
        },
        'reset': function () {
            this['out']();
        },
        'zoomLevel': function () {
            return _0x3bec33;
        }
    };
}();
