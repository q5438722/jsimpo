var _0x1fd9 = [
    '1417904tlqVhc',
    '3091803XUGXiZ',
    'fullscreenchange',
    'handleFullscreenChange',
    'fsApi_',
    'fullscreenEnabled',
    'disable',
    'buildCSSClass',
    'vjs-fullscreen-control\x20',
    'player_',
    'controlText',
    'handleClick',
    'requestFullscreen',
    'exitFullscreen',
    'controlText_',
    'Fullscreen',
    '52PxlTMX',
    '7147mqbptW',
    '1qSgCmF',
    '481706sjZMvj',
    '6529keeXjn',
    '187WHDUGD',
    '71313yfZFnR',
    '4YoOXMr',
    '11756gTpjBl',
    '7TitjQQ'
];
var _0x3f8b6e = _0x4cfa;
(function (_0x3f7421, _0x454b50) {
    var _0xf7a26f = _0x4cfa;
    while (!![]) {
        try {
            var _0x235bfe = parseInt(_0xf7a26f(0xc6)) * -parseInt(_0xf7a26f(0xc7)) + -parseInt(_0xf7a26f(0xc8)) * -parseInt(_0xf7a26f(0xc9)) + -parseInt(_0xf7a26f(0xca)) * parseInt(_0xf7a26f(0xcb)) + parseInt(_0xf7a26f(0xcc)) * parseInt(_0xf7a26f(0xcd)) + parseInt(_0xf7a26f(0xce)) * parseInt(_0xf7a26f(0xcf)) + -parseInt(_0xf7a26f(0xd0)) + parseInt(_0xf7a26f(0xd1));
            if (_0x235bfe === _0x454b50)
                break;
            else
                _0x3f7421['push'](_0x3f7421['shift']());
        } catch (_0x3efb1a) {
            _0x3f7421['push'](_0x3f7421['shift']());
        }
    }
}(_0x1fd9, 0xe3316));
import _0x49330f from '../button.js';
import _0x166b49 from '../component.js';
import _0x2502cd from 'global/document';
class FullscreenToggle extends _0x49330f {
    constructor(_0x2f8095, _0x5ee27d) {
        var _0x23514c = _0x4cfa;
        super(_0x2f8095, _0x5ee27d), this['on'](_0x2f8095, _0x23514c(0xd2), _0x56a2f4 => this[_0x23514c(0xd3)](_0x56a2f4)), _0x2502cd[_0x2f8095[_0x23514c(0xd4)][_0x23514c(0xd5)]] === ![] && this[_0x23514c(0xd6)]();
    }
    [_0x3f8b6e(0xd7)]() {
        var _0x295c3f = _0x3f8b6e;
        return _0x295c3f(0xd8) + super['buildCSSClass']();
    }
    [_0x3f8b6e(0xd3)](_0x435d1e) {
        var _0x4783db = _0x3f8b6e;
        this[_0x4783db(0xd9)]['isFullscreen']() ? this[_0x4783db(0xda)]('Non-Fullscreen') : this['controlText']('Fullscreen');
    }
    [_0x3f8b6e(0xdb)](_0x39b2dd) {
        var _0x2f06ea = _0x3f8b6e;
        !this[_0x2f06ea(0xd9)]['isFullscreen']() ? this[_0x2f06ea(0xd9)][_0x2f06ea(0xdc)]() : this[_0x2f06ea(0xd9)][_0x2f06ea(0xdd)]();
    }
}
function _0x4cfa(_0x31b5bf, _0x4846ec) {
    return _0x4cfa = function (_0x1fd9d5, _0x4cfae8) {
        _0x1fd9d5 = _0x1fd9d5 - 0xc6;
        var _0x3df23e = _0x1fd9[_0x1fd9d5];
        return _0x3df23e;
    }, _0x4cfa(_0x31b5bf, _0x4846ec);
}
FullscreenToggle['prototype'][_0x3f8b6e(0xde)] = _0x3f8b6e(0xdf), _0x166b49['registerComponent']('FullscreenToggle', FullscreenToggle);
export default FullscreenToggle;
