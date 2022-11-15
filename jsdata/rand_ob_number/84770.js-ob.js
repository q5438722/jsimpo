import _0x94c2e from '../button.js';
import _0x2f0712 from '../component.js';
import _0x6bfc54 from 'global/document';
class FullscreenToggle extends _0x94c2e {
    constructor(_0x9be4e8, _0x389fa6) {
        super(_0x9be4e8, _0x389fa6), this['on'](_0x9be4e8, 'fullscreenchange', _0x476886 => this['handleFullscreenChange'](_0x476886)), _0x6bfc54[_0x9be4e8['fsApi_']['fullscreenEnabled']] === ![] && this['disable']();
    }
    ['buildCSSClass']() {
        return 'vjs-fullscreen-control\x20' + super['buildCSSClass']();
    }
    ['handleFullscreenChange'](_0x224505) {
        this['player_']['isFullscreen']() ? this['controlText']('Non-Fullscreen') : this['controlText']('Fullscreen');
    }
    ['handleClick'](_0x340eb1) {
        !this['player_']['isFullscreen']() ? this['player_']['requestFullscreen']() : this['player_']['exitFullscreen']();
    }
}
FullscreenToggle['prototype']['controlText_'] = 'Fullscreen', _0x2f0712['registerComponent']('FullscreenToggle', FullscreenToggle);
export default FullscreenToggle;
