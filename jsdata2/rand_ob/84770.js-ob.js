var _0x48f0 = [
    'fQpFD',
    'requestFullscreen',
    'registerComponent',
    'FullscreenToggle',
    '123659FgIVif',
    '1ElAXrb',
    '1WzuDqs',
    '89977PvtBVn',
    '16gkuZcW',
    '36469TiUXKy',
    '341119YOKnMx',
    '395107AMLalM',
    '2UVZXjU',
    '56PbgUbK',
    '1974iVmaCu',
    '1556986XLanhT',
    'fullscreenchange',
    'bNvkt',
    'fsApi_',
    'fullscreenEnabled',
    'disable',
    'buildCSSClass',
    'vjs-fullscreen-control\x20',
    'handleFullscreenChange',
    'Fullscreen',
    'player_',
    'isFullscreen',
    'YiDoG',
    'controlText'
];
var _0x202051 = _0x2fbc;
function _0x2fbc(_0x394e69, _0x5e5708) {
    return _0x2fbc = function (_0x4ba4d6, _0xbbc502) {
        _0x4ba4d6 = _0x4ba4d6 - (0x1 * 0x215f + 0x1195 + -0x1 * 0x31e9);
        var _0x33ed5f = _0x48f0[_0x4ba4d6];
        return _0x33ed5f;
    }, _0x2fbc(_0x394e69, _0x5e5708);
}
(function (_0x26189f, _0x3deb48) {
    var _0xe4a652 = _0x2fbc;
    while (!![]) {
        try {
            var _0xe3e4c = parseInt(_0xe4a652(0x10b)) * -parseInt(_0xe4a652(0x10c)) + parseInt(_0xe4a652(0x10d)) * -parseInt(_0xe4a652(0x10e)) + -parseInt(_0xe4a652(0x10f)) * parseInt(_0xe4a652(0x110)) + parseInt(_0xe4a652(0x111)) + -parseInt(_0xe4a652(0x112)) * parseInt(_0xe4a652(0x113)) + parseInt(_0xe4a652(0x114)) * parseInt(_0xe4a652(0x115)) + parseInt(_0xe4a652(0x116));
            if (_0xe3e4c === _0x3deb48)
                break;
            else
                _0x26189f['push'](_0x26189f['shift']());
        } catch (_0x2d4f1e) {
            _0x26189f['push'](_0x26189f['shift']());
        }
    }
}(_0x48f0, -0x9a007 + 0x52786 + 0xae630));
import _0x1faf9b from '../button.js';
import _0x12b775 from '../component.js';
import _0xa5d29f from 'global/document';
class FullscreenToggle extends _0x1faf9b {
    constructor(_0x21b2dc, _0xb72317) {
        var _0x7b912 = _0x2fbc, _0x3ebcfb = {
                'btUiq': _0x7b912(0x117),
                'bNvkt': function (_0x43180e, _0x3fd87c) {
                    return _0x43180e === _0x3fd87c;
                }
            };
        super(_0x21b2dc, _0xb72317), this['on'](_0x21b2dc, _0x3ebcfb['btUiq'], _0x1bedc4 => this['handleFullscreenChange'](_0x1bedc4)), _0x3ebcfb[_0x7b912(0x118)](_0xa5d29f[_0x21b2dc[_0x7b912(0x119)][_0x7b912(0x11a)]], ![]) && this[_0x7b912(0x11b)]();
    }
    [_0x202051(0x11c)]() {
        var _0x45ed94 = _0x202051;
        return _0x45ed94(0x11d) + super[_0x45ed94(0x11c)]();
    }
    [_0x202051(0x11e)](_0x16fae7) {
        var _0x44bea8 = _0x202051, _0x5b0d31 = {
                'YiDoG': 'Non-Fullscreen',
                'fQpFD': _0x44bea8(0x11f)
            };
        this[_0x44bea8(0x120)][_0x44bea8(0x121)]() ? this['controlText'](_0x5b0d31[_0x44bea8(0x122)]) : this[_0x44bea8(0x123)](_0x5b0d31[_0x44bea8(0x124)]);
    }
    ['handleClick'](_0x36963c) {
        var _0x54fc89 = _0x202051;
        !this[_0x54fc89(0x120)]['isFullscreen']() ? this[_0x54fc89(0x120)][_0x54fc89(0x125)]() : this[_0x54fc89(0x120)]['exitFullscreen']();
    }
}
FullscreenToggle['prototype']['controlText_'] = _0x202051(0x11f), _0x12b775[_0x202051(0x126)](_0x202051(0x127), FullscreenToggle);
export default FullscreenToggle;
