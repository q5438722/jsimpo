const _0x160a = [
    'arrowMarkerAbsolute',
    'git',
    'freeze',
    'log',
    'setSiteConfig',
    'keys',
    'forEach',
    'setConfig',
    'secure',
    'undefined',
    'Denied\x20attempt\x20to\x20modify\x20a\x20secure\x20key\x20',
    'reset',
    '1PJLECa',
    '1233101ONEvhl',
    '56513jPqqyW',
    '1JvLYLu',
    '1NjqsCX',
    '1430317PcqxMz',
    '1ZIgDsx',
    '1201667CBmiIK',
    '47717UeJLkQ',
    '5zwVyxd',
    '7sBXPLT',
    '92259pVBoAK',
    '10yROFkG',
    '44288XKkoFF',
    'getThemeVariables',
    'class'
];
const _0xe1aa56 = _0x5b75;
(function (_0x4d86fa, _0x4efc98) {
    const _0x3935a3 = _0x5b75;
    while (!![]) {
        try {
            const _0x5443d2 = parseInt(_0x3935a3(0x166)) * parseInt(_0x3935a3(0x167)) + parseInt(_0x3935a3(0x168)) * -parseInt(_0x3935a3(0x169)) + parseInt(_0x3935a3(0x16a)) * parseInt(_0x3935a3(0x16b)) + parseInt(_0x3935a3(0x16c)) * -parseInt(_0x3935a3(0x16d)) + parseInt(_0x3935a3(0x16e)) * -parseInt(_0x3935a3(0x16f)) + -parseInt(_0x3935a3(0x170)) * parseInt(_0x3935a3(0x171)) + -parseInt(_0x3935a3(0x172)) * -parseInt(_0x3935a3(0x173));
            if (_0x5443d2 === _0x4efc98)
                break;
            else
                _0x4d86fa['push'](_0x4d86fa['shift']());
        } catch (_0x497ca4) {
            _0x4d86fa['push'](_0x4d86fa['shift']());
        }
    }
}(_0x160a, 0xeb488));
function _0x5b75(_0x5ba135, _0x2889a4) {
    return _0x5b75 = function (_0x160a28, _0x5b7553) {
        _0x160a28 = _0x160a28 - 0x166;
        let _0x52a4e6 = _0x160a[_0x160a28];
        return _0x52a4e6;
    }, _0x5b75(_0x5ba135, _0x2889a4);
}
import { assignWithDepth } from './utils';
import { log } from './logger';
import _0x30b738 from './themes';
import _0x161fa9 from './defaultConfig';
const handleThemeVariables = _0x6fae37 => {
        const _0x5eada8 = _0x5b75;
        return _0x30b738[_0x6fae37] ? _0x30b738[_0x6fae37][_0x5eada8(0x174)]() : _0x30b738['default'][_0x5eada8(0x174)]();
    }, manipulators = { 'themeVariables': handleThemeVariables };
_0x161fa9[_0xe1aa56(0x175)][_0xe1aa56(0x176)] = _0x161fa9[_0xe1aa56(0x176)], _0x161fa9[_0xe1aa56(0x177)][_0xe1aa56(0x176)] = _0x161fa9[_0xe1aa56(0x176)];
export const defaultConfig = Object[_0xe1aa56(0x178)](_0x161fa9);
const siteConfig = assignWithDepth({}, defaultConfig), currentConfig = assignWithDepth({}, defaultConfig);
export const setSiteConfig = _0x432a99 => {
    const _0x47f30f = _0xe1aa56;
    return console[_0x47f30f(0x179)](_0x47f30f(0x17a)), Object[_0x47f30f(0x17b)](_0x432a99)[_0x47f30f(0x17c)](_0x345e02 => {
        const _0x1ff5e8 = manipulators[_0x345e02];
        _0x432a99[_0x345e02] = _0x1ff5e8 ? _0x1ff5e8(_0x432a99[_0x345e02]) : _0x432a99[_0x345e02];
    }), assignWithDepth(currentConfig, _0x432a99, { 'clobber': !![] }), assignWithDepth(siteConfig, _0x432a99), getSiteConfig();
};
export const getSiteConfig = () => {
    return assignWithDepth({}, siteConfig);
};
export const setConfig = _0x1c16b3 => {
    const _0x4c0307 = _0xe1aa56;
    return console[_0x4c0307(0x179)](_0x4c0307(0x17d)), sanitize(_0x1c16b3), Object['keys'](_0x1c16b3)['forEach'](_0x1e2f62 => {
        const _0x355c50 = manipulators[_0x1e2f62];
        _0x1c16b3[_0x1e2f62] = _0x355c50 ? _0x355c50(_0x1c16b3[_0x1e2f62]) : _0x1c16b3[_0x1e2f62];
    }), assignWithDepth(currentConfig, _0x1c16b3), getConfig();
};
export const getConfig = () => {
    return assignWithDepth({}, currentConfig);
};
export const sanitize = _0x138630 => {
    const _0x11f7ce = _0xe1aa56;
    Object[_0x11f7ce(0x17b)](siteConfig[_0x11f7ce(0x17e)])['forEach'](_0x3b3f03 => {
        const _0x10cf79 = _0x11f7ce;
        typeof _0x138630[siteConfig[_0x10cf79(0x17e)][_0x3b3f03]] !== _0x10cf79(0x17f) && (log['trace'](_0x10cf79(0x180) + siteConfig[_0x10cf79(0x17e)][_0x3b3f03], _0x138630[siteConfig[_0x10cf79(0x17e)][_0x3b3f03]]), delete _0x138630[siteConfig[_0x10cf79(0x17e)][_0x3b3f03]]);
    });
};
export const reset = (_0xa17ab7 = getSiteConfig()) => {
    const _0x4cba4f = _0xe1aa56;
    console['warn'](_0x4cba4f(0x181)), Object[_0x4cba4f(0x17b)](siteConfig)[_0x4cba4f(0x17c)](_0x1ba66b => delete siteConfig[_0x1ba66b]), Object[_0x4cba4f(0x17b)](currentConfig)['forEach'](_0x22f030 => delete currentConfig[_0x22f030]), assignWithDepth(siteConfig, _0xa17ab7, { 'clobber': !![] }), assignWithDepth(currentConfig, _0xa17ab7, { 'clobber': !![] });
};
const configApi = Object[_0xe1aa56(0x178)]({
    'sanitize': sanitize,
    'setSiteConfig': setSiteConfig,
    'getSiteConfig': getSiteConfig,
    'setConfig': setConfig,
    'getConfig': getConfig,
    'reset': reset,
    'defaultConfig': defaultConfig
});
export default configApi;
