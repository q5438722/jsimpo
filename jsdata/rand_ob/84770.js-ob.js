var _0x2f9c = [
    '9FYtaao',
    '99351dzqeoZ',
    'fullscreenchange',
    'handleFullscreenChange',
    'fsApi_',
    'fullscreenEnabled',
    'vjs-fullscreen-control\x20',
    'buildCSSClass',
    'Non-Fullscreen',
    'player_',
    'isFullscreen',
    'controlText',
    'zRtxP',
    'fMOJN',
    'handleClick',
    'requestFullscreen',
    'exitFullscreen',
    'controlText_',
    'FullscreenToggle',
    '578674RusRby',
    '469908bqfpNn',
    '712931sJTctk',
    '129kBsJaT',
    '2762zDlbXP',
    '290023oXDOHf',
    '58227Sfzoyl'
];
var _0x4c91e5 = _0x2493;
(function (_0x2177b1, _0x46d2de) {
    var _0x34e7aa = _0x2493;
    while (!![]) {
        try {
            var _0x50332e = parseInt(_0x34e7aa(0x16a)) + -parseInt(_0x34e7aa(0x16b)) + -parseInt(_0x34e7aa(0x16c)) + -parseInt(_0x34e7aa(0x16d)) * -parseInt(_0x34e7aa(0x16e)) + -parseInt(_0x34e7aa(0x16f)) + parseInt(_0x34e7aa(0x170)) + parseInt(_0x34e7aa(0x171)) * parseInt(_0x34e7aa(0x172));
            if (_0x50332e === _0x46d2de)
                break;
            else
                _0x2177b1['push'](_0x2177b1['shift']());
        } catch (_0x2c8a47) {
            _0x2177b1['push'](_0x2177b1['shift']());
        }
    }
}(_0x2f9c, 0x306fd * -0x2 + -0x5c2c6 + -0x911f * -0x20));
import _0x3b0629 from '../button.js';
import _0x51f3a2 from '../component.js';
import _0x2028db from 'global/document';
class FullscreenToggle extends _0x3b0629 {
    constructor(_0x217175, _0x2a36b9) {
        var _0x88eb81 = _0x2493, _0x1ef7b8 = { 'JbQtm': _0x88eb81(0x173) };
        super(_0x217175, _0x2a36b9), this['on'](_0x217175, _0x1ef7b8['JbQtm'], _0x28912e => this[_0x88eb81(0x174)](_0x28912e)), _0x2028db[_0x217175[_0x88eb81(0x175)][_0x88eb81(0x176)]] === ![] && this['disable']();
    }
    ['buildCSSClass']() {
        var _0x2aa0df = _0x2493;
        return _0x2aa0df(0x177) + super[_0x2aa0df(0x178)]();
    }
    ['handleFullscreenChange'](_0x5daecc) {
        var _0x169d64 = _0x2493, _0x497523 = {
                'zRtxP': _0x169d64(0x179),
                'fMOJN': 'Fullscreen'
            };
        this[_0x169d64(0x17a)][_0x169d64(0x17b)]() ? this[_0x169d64(0x17c)](_0x497523[_0x169d64(0x17d)]) : this[_0x169d64(0x17c)](_0x497523[_0x169d64(0x17e)]);
    }
    [_0x4c91e5(0x17f)](_0x3438e5) {
        var _0x25ee72 = _0x4c91e5;
        !this[_0x25ee72(0x17a)]['isFullscreen']() ? this['player_'][_0x25ee72(0x180)]() : this[_0x25ee72(0x17a)][_0x25ee72(0x181)]();
    }
}
function _0x2493(_0x5eed1a, _0x1f581f) {
    return _0x2493 = function (_0x3316c5, _0x436744) {
        _0x3316c5 = _0x3316c5 - (-0x74d + 0x5e8 + 0x2cf);
        var _0x4fc77e = _0x2f9c[_0x3316c5];
        return _0x4fc77e;
    }, _0x2493(_0x5eed1a, _0x1f581f);
}
FullscreenToggle['prototype'][_0x4c91e5(0x182)] = 'Fullscreen', _0x51f3a2['registerComponent'](_0x4c91e5(0x183), FullscreenToggle);
export default FullscreenToggle;
