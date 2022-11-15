const _0x16e5 = [
    'dvQHh',
    'ADxDK',
    'Rkdki',
    'xMuRC',
    'setConfig',
    'KNSls',
    'RZJBu',
    'xiabP',
    'secure',
    'undefined',
    'trace',
    'Denied\x20attempt\x20to\x20modify\x20a\x20secure\x20key\x20',
    'split',
    'warn',
    'NIulC',
    'NAVJA',
    '1VkptMU',
    '1000999xtZnNv',
    '1053945ZItPYg',
    '509EWEGnv',
    '477nWcdIv',
    '82842tejKSN',
    '377555tkRqKg',
    '1810865LFySuS',
    '1031333kWjLOb',
    '3YPzUGv',
    'getThemeVariables',
    'default',
    'arrowMarkerAbsolute',
    'freeze',
    'setSiteConfig',
    'log',
    'keys',
    'forEach'
];
const _0x5b4128 = _0x4a4e;
function _0x4a4e(_0x5d5b34, _0x196611) {
    return _0x4a4e = function (_0x186778, _0x4c8b0c) {
        _0x186778 = _0x186778 - (-0x23f + -0x9d * 0x13 + 0xe71 * 0x1);
        let _0x34567c = _0x16e5[_0x186778];
        return _0x34567c;
    }, _0x4a4e(_0x5d5b34, _0x196611);
}
(function (_0x4737e6, _0x3b10d7) {
    const _0x478c25 = _0x4a4e;
    while (!![]) {
        try {
            const _0x23f534 = -parseInt(_0x478c25(0x8b)) * -parseInt(_0x478c25(0x8c)) + parseInt(_0x478c25(0x8d)) + -parseInt(_0x478c25(0x8e)) * parseInt(_0x478c25(0x8f)) + parseInt(_0x478c25(0x90)) + parseInt(_0x478c25(0x91)) + parseInt(_0x478c25(0x92)) + -parseInt(_0x478c25(0x93)) * parseInt(_0x478c25(0x94));
            if (_0x23f534 === _0x3b10d7)
                break;
            else
                _0x4737e6['push'](_0x4737e6['shift']());
        } catch (_0x13e4bc) {
            _0x4737e6['push'](_0x4737e6['shift']());
        }
    }
}(_0x16e5, -0x29d * 0x337 + -0x12c87c + 0x1 * 0x2a481d));
import { assignWithDepth } from './utils';
import { log } from './logger';
import _0x4fb87d from './themes';
import _0x2195e0 from './defaultConfig';
const handleThemeVariables = _0x165ef8 => {
        const _0xd4de3c = _0x4a4e;
        return _0x4fb87d[_0x165ef8] ? _0x4fb87d[_0x165ef8][_0xd4de3c(0x95)]() : _0x4fb87d[_0xd4de3c(0x96)][_0xd4de3c(0x95)]();
    }, manipulators = { 'themeVariables': handleThemeVariables };
_0x2195e0['class']['arrowMarkerAbsolute'] = _0x2195e0[_0x5b4128(0x97)], _0x2195e0['git'][_0x5b4128(0x97)] = _0x2195e0[_0x5b4128(0x97)];
export const defaultConfig = Object[_0x5b4128(0x98)](_0x2195e0);
const siteConfig = assignWithDepth({}, defaultConfig), currentConfig = assignWithDepth({}, defaultConfig);
export const setSiteConfig = _0x463baf => {
    const _0x4dd3de = _0x5b4128, _0x35b382 = {
            'dvQHh': function (_0x32ece2, _0x872cfa) {
                return _0x32ece2(_0x872cfa);
            },
            'upNAJ': _0x4dd3de(0x99),
            'ADxDK': function (_0x158ed4, _0x42915b, _0x3df875, _0x1f893e) {
                return _0x158ed4(_0x42915b, _0x3df875, _0x1f893e);
            },
            'Rkdki': function (_0x3f73d9) {
                return _0x3f73d9();
            }
        };
    return console[_0x4dd3de(0x9a)](_0x35b382['upNAJ']), Object[_0x4dd3de(0x9b)](_0x463baf)[_0x4dd3de(0x9c)](_0x98d752 => {
        const _0x37d3a6 = _0x4dd3de, _0x13183e = manipulators[_0x98d752];
        _0x463baf[_0x98d752] = _0x13183e ? _0x35b382[_0x37d3a6(0x9d)](_0x13183e, _0x463baf[_0x98d752]) : _0x463baf[_0x98d752];
    }), _0x35b382[_0x4dd3de(0x9e)](assignWithDepth, currentConfig, _0x463baf, { 'clobber': !![] }), assignWithDepth(siteConfig, _0x463baf), _0x35b382[_0x4dd3de(0x9f)](getSiteConfig);
};
export const getSiteConfig = () => {
    const _0x2ccc55 = _0x5b4128, _0x25282b = {
            'xMuRC': function (_0x567d55, _0x2de66f, _0x4a85e4) {
                return _0x567d55(_0x2de66f, _0x4a85e4);
            }
        };
    return _0x25282b[_0x2ccc55(0xa0)](assignWithDepth, {}, siteConfig);
};
export const setConfig = _0x39c757 => {
    const _0x2f2f8e = _0x5b4128, _0x1fef70 = {
            'RZJBu': function (_0x3b198b, _0x16992a) {
                return _0x3b198b(_0x16992a);
            },
            'KNSls': _0x2f2f8e(0xa1),
            'xiabP': function (_0x1958a1, _0x45c854, _0x38b540) {
                return _0x1958a1(_0x45c854, _0x38b540);
            },
            'zqoAQ': function (_0x59cbd5) {
                return _0x59cbd5();
            }
        };
    return console[_0x2f2f8e(0x9a)](_0x1fef70[_0x2f2f8e(0xa2)]), sanitize(_0x39c757), Object[_0x2f2f8e(0x9b)](_0x39c757)[_0x2f2f8e(0x9c)](_0x33818d => {
        const _0x589e9b = _0x2f2f8e, _0x3bb3ee = manipulators[_0x33818d];
        _0x39c757[_0x33818d] = _0x3bb3ee ? _0x1fef70[_0x589e9b(0xa3)](_0x3bb3ee, _0x39c757[_0x33818d]) : _0x39c757[_0x33818d];
    }), _0x1fef70[_0x2f2f8e(0xa4)](assignWithDepth, currentConfig, _0x39c757), _0x1fef70['zqoAQ'](getConfig);
};
export const getConfig = () => {
    const _0x849334 = {
        'WpMyO': function (_0x54a4db, _0xaef76e, _0x18805a) {
            return _0x54a4db(_0xaef76e, _0x18805a);
        }
    };
    return _0x849334['WpMyO'](assignWithDepth, {}, currentConfig);
};
export const sanitize = _0xdb9954 => {
    const _0x3774c2 = _0x5b4128;
    Object[_0x3774c2(0x9b)](siteConfig[_0x3774c2(0xa5)])[_0x3774c2(0x9c)](_0x344460 => {
        const _0x28bb96 = _0x3774c2;
        typeof _0xdb9954[siteConfig[_0x28bb96(0xa5)][_0x344460]] !== _0x28bb96(0xa6) && (log[_0x28bb96(0xa7)](_0x28bb96(0xa8) + siteConfig[_0x28bb96(0xa5)][_0x344460], _0xdb9954[siteConfig['secure'][_0x344460]]), delete _0xdb9954[siteConfig['secure'][_0x344460]]);
    });
};
export const reset = (_0x38e132 = getSiteConfig()) => {
    const _0x7f30f1 = _0x5b4128, _0x4ea284 = {
            'jedqQ': 'reset',
            'NIulC': function (_0x1abc67, _0x5df05f, _0x5a62cf, _0x522232) {
                return _0x1abc67(_0x5df05f, _0x5a62cf, _0x522232);
            },
            'NAVJA': function (_0xe7f1be, _0x53068f, _0x3ec469, _0x5031cc) {
                return _0xe7f1be(_0x53068f, _0x3ec469, _0x5031cc);
            }
        }, _0x3c17ed = '0|4|2|1|3'[_0x7f30f1(0xa9)]('|');
    let _0x358c6e = 0x118 * 0x3 + -0x103b + 0xcf3;
    while (!![]) {
        switch (_0x3c17ed[_0x358c6e++]) {
        case '0':
            console[_0x7f30f1(0xaa)](_0x4ea284['jedqQ']);
            continue;
        case '1':
            _0x4ea284[_0x7f30f1(0xab)](assignWithDepth, siteConfig, _0x38e132, { 'clobber': !![] });
            continue;
        case '2':
            Object[_0x7f30f1(0x9b)](currentConfig)[_0x7f30f1(0x9c)](_0x47e352 => delete currentConfig[_0x47e352]);
            continue;
        case '3':
            _0x4ea284[_0x7f30f1(0xac)](assignWithDepth, currentConfig, _0x38e132, { 'clobber': !![] });
            continue;
        case '4':
            Object['keys'](siteConfig)[_0x7f30f1(0x9c)](_0xd72398 => delete siteConfig[_0xd72398]);
            continue;
        }
        break;
    }
};
const configApi = Object[_0x5b4128(0x98)]({
    'sanitize': sanitize,
    'setSiteConfig': setSiteConfig,
    'getSiteConfig': getSiteConfig,
    'setConfig': setConfig,
    'getConfig': getConfig,
    'reset': reset,
    'defaultConfig': defaultConfig
});
export default configApi;
