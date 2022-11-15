const _0x5901 = [
    '75435tKNEhN',
    '6uDIjDO',
    '114767lnzrzj',
    '261088ymZeUp',
    '1bVRoVd',
    '130593apynZP',
    '786hRCcny',
    '246desgiM',
    '10511tWwcxp',
    '35udueZM',
    '257PyTakD',
    '924VygCAG',
    'when\x20working\x20with\x20site\x20config',
    'baf',
    'should-not-be-allowed',
    'bar0',
    'should\x20set\x20site\x20config\x20and\x20config\x20properly',
    'should\x20set\x20reset\x20config\x20properly',
    'ggrUJ',
    'setSiteConfig',
    'zyRyn',
    'XtpGi',
    'getSiteConfig',
    'getConfig',
    'eOYhU',
    'foo',
    'toEqual',
    'degof',
    'defaultConfig',
    'secure',
    'lYZni',
    'updateCurrentConfig',
    'WoMIg',
    'bar',
    'IiyUC',
    'iPPnH',
    'reset',
    'should\x20set\x20global\x20reset\x20config\x20properly',
    'dKvky',
    'setConfig',
    'aRrKB',
    'foobar'
];
const _0x26967b = _0x1ab7;
function _0x1ab7(_0x1fea14, _0x3ed2dd) {
    return _0x1ab7 = function (_0x19e4f, _0x3dfbc6) {
        _0x19e4f = _0x19e4f - (-0x5 * -0x191 + 0xa03 * 0x3 + -0x24e9);
        let _0x36cc45 = _0x5901[_0x19e4f];
        return _0x36cc45;
    }, _0x1ab7(_0x1fea14, _0x3ed2dd);
}
(function (_0x47871f, _0x2bcf4c) {
    const _0x35e3db = _0x1ab7;
    while (!![]) {
        try {
            const _0x25f7ac = -parseInt(_0x35e3db(0xf5)) * -parseInt(_0x35e3db(0xf6)) + -parseInt(_0x35e3db(0xf7)) + -parseInt(_0x35e3db(0xf8)) + -parseInt(_0x35e3db(0xf9)) * -parseInt(_0x35e3db(0xfa)) + parseInt(_0x35e3db(0xfb)) * parseInt(_0x35e3db(0xfc)) + -parseInt(_0x35e3db(0xfd)) * parseInt(_0x35e3db(0xfe)) + -parseInt(_0x35e3db(0xff)) * -parseInt(_0x35e3db(0x100));
            if (_0x25f7ac === _0x2bcf4c)
                break;
            else
                _0x47871f['push'](_0x47871f['shift']());
        } catch (_0x552b16) {
            _0x47871f['push'](_0x47871f['shift']());
        }
    }
}(_0x5901, 0x5 * 0x5fe9 + 0x504dc + -0x2c49a));
import * as _0x56ae8e from './config';
describe(_0x26967b(0x101), function () {
    const _0x172ac4 = _0x26967b, _0x1df429 = {
            'XtpGi': 'bar',
            'eOYhU': function (_0x258230, _0x55660e) {
                return _0x258230(_0x55660e);
            },
            'ScnIR': 'cant-be-changed',
            'iPPnH': _0x172ac4(0x102),
            'lYZni': _0x172ac4(0x103),
            'WoMIg': function (_0x514f3d, _0x2f74e) {
                return _0x514f3d(_0x2f74e);
            },
            'dKvky': function (_0x4c8e0a, _0x4ccf79) {
                return _0x4c8e0a(_0x4ccf79);
            },
            'aRrKB': _0x172ac4(0x104),
            'ggrUJ': function (_0x3ead10, _0x39f34a) {
                return _0x3ead10(_0x39f34a);
            },
            'zyRyn': _0x172ac4(0x105),
            'degof': 'should\x20respect\x20secure\x20keys\x20when\x20applying\x20directives',
            'IiyUC': _0x172ac4(0x106)
        };
    _0x1df429[_0x172ac4(0x107)](beforeEach, () => {
        const _0x4b472b = _0x172ac4;
        _0x56ae8e[_0x4b472b(0x108)]({});
    }), it(_0x1df429[_0x172ac4(0x109)], function () {
        const _0x3067d5 = _0x172ac4;
        let _0x40bb8f = {
            'foo': _0x1df429[_0x3067d5(0x10a)],
            'bar': 0x0
        };
        _0x56ae8e[_0x3067d5(0x108)](_0x40bb8f);
        let _0x2937c4 = _0x56ae8e[_0x3067d5(0x10b)](), _0x4774a9 = _0x56ae8e[_0x3067d5(0x10c)]();
        _0x1df429[_0x3067d5(0x10d)](expect, _0x2937c4[_0x3067d5(0x10e)])['toEqual'](_0x40bb8f['foo']), _0x1df429['eOYhU'](expect, _0x2937c4['bar'])['toEqual'](_0x40bb8f['bar']), _0x1df429[_0x3067d5(0x10d)](expect, _0x2937c4)[_0x3067d5(0x10f)](_0x4774a9);
    }), it(_0x1df429[_0x172ac4(0x110)], function () {
        const _0x1010d4 = _0x172ac4;
        let _0x41d08f = {
            'foo': _0x1df429[_0x1010d4(0x10a)],
            'bar': _0x1df429['ScnIR'],
            'secure': [
                ..._0x56ae8e[_0x1010d4(0x111)][_0x1010d4(0x112)],
                _0x1df429[_0x1010d4(0x10a)]
            ]
        };
        _0x56ae8e['setSiteConfig'](_0x41d08f);
        const _0x5f4283 = {
                'foo': _0x1df429['iPPnH'],
                'bar': _0x1df429[_0x1010d4(0x113)]
            }, _0x3556b1 = _0x56ae8e[_0x1010d4(0x114)](_0x41d08f, [_0x5f4283]);
        _0x1df429[_0x1010d4(0x115)](expect, _0x3556b1[_0x1010d4(0x10e)])[_0x1010d4(0x10f)](_0x5f4283[_0x1010d4(0x10e)]), expect(_0x3556b1['bar'])['toBe'](_0x41d08f[_0x1010d4(0x116)]);
    }), it(_0x1df429[_0x172ac4(0x117)], function () {
        const _0x14695c = _0x172ac4;
        let _0x3365d9 = {
            'foo': _0x1df429['XtpGi'],
            'bar': 0x0
        };
        _0x56ae8e[_0x14695c(0x108)](_0x3365d9);
        let _0x26824f = { 'foo': _0x1df429[_0x14695c(0x118)] };
        _0x56ae8e['setConfig'](_0x26824f);
        let _0x2baae6 = _0x56ae8e[_0x14695c(0x10c)]();
        expect(_0x2baae6[_0x14695c(0x10e)])['toEqual'](_0x26824f[_0x14695c(0x10e)]), _0x56ae8e[_0x14695c(0x119)]();
        let _0x33c167 = _0x56ae8e[_0x14695c(0x10c)]();
        _0x1df429[_0x14695c(0x115)](expect, _0x33c167[_0x14695c(0x10e)])[_0x14695c(0x10f)](_0x3365d9['foo']);
        let _0x5e97cc = _0x56ae8e[_0x14695c(0x10b)]();
        expect(_0x5e97cc['foo'])[_0x14695c(0x10f)](_0x3365d9[_0x14695c(0x10e)]);
    }), it(_0x172ac4(0x11a), function () {
        const _0x55d1ec = _0x172ac4;
        let _0x3b7f00 = {
            'foo': _0x1df429[_0x55d1ec(0x10a)],
            'bar': 0x0
        };
        _0x56ae8e[_0x55d1ec(0x108)](_0x3b7f00);
        let _0x2bb83b = _0x56ae8e[_0x55d1ec(0x10b)]();
        _0x1df429[_0x55d1ec(0x11b)](expect, _0x2bb83b['foo'])[_0x55d1ec(0x10f)](_0x3b7f00[_0x55d1ec(0x10e)]);
        let _0xe85b62 = _0x56ae8e['getConfig']();
        _0x1df429[_0x55d1ec(0x11b)](expect, _0xe85b62['foo'])['toEqual'](_0x3b7f00['foo']), _0x56ae8e[_0x55d1ec(0x11c)]({ 'foobar': _0x1df429[_0x55d1ec(0x11d)] });
        let _0x56f7ef = _0x56ae8e[_0x55d1ec(0x10c)]();
        expect(_0x56f7ef[_0x55d1ec(0x11e)])[_0x55d1ec(0x10f)](_0x55d1ec(0x104)), _0x56ae8e[_0x55d1ec(0x119)]();
        let _0x59fddf = _0x56ae8e[_0x55d1ec(0x10c)]();
        _0x1df429[_0x55d1ec(0x107)](expect, _0x59fddf['foobar'])['toBeUndefined']();
    });
});
