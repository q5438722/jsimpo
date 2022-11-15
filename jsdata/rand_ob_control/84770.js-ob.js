import _0x1c7bcd from '../button.js';
import _0x861147 from '../component.js';
import _0x234bea from 'global/document';
class FullscreenToggle extends _0x1c7bcd {
    constructor(_0x4cacec, _0xe9f707) {
        var _0xe352a9 = {
            'aKTIO': 'fullscreenchange',
            'PIHkj': function (_0xc22cbd, _0x2c0d2b) {
                return _0xc22cbd === _0x2c0d2b;
            }
        };
        super(_0x4cacec, _0xe9f707), this['on'](_0x4cacec, _0xe352a9['aKTIO'], _0x3d6476 => this['handleFullscreenChange'](_0x3d6476)), _0xe352a9['PIHkj'](_0x234bea[_0x4cacec['fsApi_']['fullscreenEnabled']], ![]) && this['disable']();
    }
    ['buildCSSClass']() {
        return 'vjs-fullscreen-control\x20' + super['buildCSSClass']();
    }
    ['handleFullscreenChange'](_0x454f9e) {
        var _0x4410e3 = {
            'iUCfs': 'Non-Fullscreen',
            'lQVIa': 'Fullscreen'
        };
        this['player_']['isFullscreen']() ? this['controlText'](_0x4410e3['iUCfs']) : this['controlText'](_0x4410e3['lQVIa']);
    }
    ['handleClick'](_0x2dfab7) {
        !this['player_']['isFullscreen']() ? this['player_']['requestFullscreen']() : this['player_']['exitFullscreen']();
    }
}
FullscreenToggle['prototype']['controlText_'] = 'Fullscreen', _0x861147['registerComponent']('FullscreenToggle', FullscreenToggle);
export default FullscreenToggle;
