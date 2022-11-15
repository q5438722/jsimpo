var _0x1d70 = [
    '703rJHKFD',
    '180716itMjbK',
    '43678OMvklh',
    '2MNQXPk',
    '264283IjdbnQ',
    '34989sBdpZC',
    '7bxggMj',
    '1qeLojy',
    '781131ULhObD',
    '462095WYQlxh',
    'fullscreenchange',
    'handleFullscreenChange',
    'fsApi_',
    'disable',
    'vjs-fullscreen-control\x20',
    'buildCSSClass',
    'player_',
    'isFullscreen',
    'controlText',
    'Non-Fullscreen',
    'requestFullscreen',
    'exitFullscreen',
    'controlText_',
    'Fullscreen',
    'registerComponent',
    'FullscreenToggle',
    '855zsTHIJ'
];
var _0x250cd4 = _0x2cc7;
function _0x2cc7(_0x2fa3df, _0x1b837e) {
    return _0x2cc7 = function (_0x1d7012, _0x2cc756) {
        _0x1d7012 = _0x1d7012 - 0x172;
        var _0x1a96e2 = _0x1d70[_0x1d7012];
        return _0x1a96e2;
    }, _0x2cc7(_0x2fa3df, _0x1b837e);
}
(function (_0x5e1bd4, _0x366790) {
    var _0x5da156 = _0x2cc7;
    while (!![]) {
        try {
            var _0x409a5f = -parseInt(_0x5da156(0x172)) * parseInt(_0x5da156(0x173)) + -parseInt(_0x5da156(0x174)) + parseInt(_0x5da156(0x175)) * parseInt(_0x5da156(0x176)) + -parseInt(_0x5da156(0x177)) + parseInt(_0x5da156(0x178)) * parseInt(_0x5da156(0x179)) + -parseInt(_0x5da156(0x17a)) * -parseInt(_0x5da156(0x17b)) + parseInt(_0x5da156(0x17c));
            if (_0x409a5f === _0x366790)
                break;
            else
                _0x5e1bd4['push'](_0x5e1bd4['shift']());
        } catch (_0x42e206) {
            _0x5e1bd4['push'](_0x5e1bd4['shift']());
        }
    }
}(_0x1d70, 0x81421));
import _0x10a7f0 from '../button.js';
import _0x45f378 from '../component.js';
import _0xb4e96c from 'global/document';
class FullscreenToggle extends _0x10a7f0 {
    constructor(_0x162b60, _0x2034e5) {
        var _0x328636 = _0x2cc7;
        super(_0x162b60, _0x2034e5), this['on'](_0x162b60, _0x328636(0x17d), _0x509c83 => this[_0x328636(0x17e)](_0x509c83)), _0xb4e96c[_0x162b60[_0x328636(0x17f)]['fullscreenEnabled']] === ![] && this[_0x328636(0x180)]();
    }
    ['buildCSSClass']() {
        var _0x2c2e41 = _0x2cc7;
        return _0x2c2e41(0x181) + super[_0x2c2e41(0x182)]();
    }
    [_0x250cd4(0x17e)](_0x32ff3a) {
        var _0x2029cb = _0x250cd4;
        this[_0x2029cb(0x183)][_0x2029cb(0x184)]() ? this[_0x2029cb(0x185)](_0x2029cb(0x186)) : this['controlText']('Fullscreen');
    }
    ['handleClick'](_0x162fbc) {
        var _0x2dda9e = _0x250cd4;
        !this[_0x2dda9e(0x183)][_0x2dda9e(0x184)]() ? this[_0x2dda9e(0x183)][_0x2dda9e(0x187)]() : this[_0x2dda9e(0x183)][_0x2dda9e(0x188)]();
    }
}
FullscreenToggle['prototype'][_0x250cd4(0x189)] = _0x250cd4(0x18a), _0x45f378[_0x250cd4(0x18b)](_0x250cd4(0x18c), FullscreenToggle);
export default FullscreenToggle;
