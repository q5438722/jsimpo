const _0x45a5 = [
    'should\x20set\x20site\x20config\x20and\x20config\x20properly',
    'getConfig',
    'foo',
    'toEqual',
    'bar',
    'should\x20respect\x20secure\x20keys\x20when\x20applying\x20directives',
    'cant-be-changed',
    'defaultConfig',
    'secure',
    'baf',
    'updateCurrentConfig',
    'toBe',
    'should\x20set\x20reset\x20config\x20properly',
    'setConfig',
    'reset',
    'getSiteConfig',
    'bar0',
    'foobar',
    'toBeUndefined',
    '25wlWmHO',
    '10569kOaHsU',
    '2ccovMY',
    '296146NFOaKI',
    '181vdFwQi',
    '769nRbWrD',
    '148FEdiml',
    '6393lSBeWS',
    '119098hhIksp',
    '39339utGCGi',
    '188bUDNSQ',
    '473wIHHGI',
    'when\x20working\x20with\x20site\x20config',
    'setSiteConfig'
];
const _0x549e72 = _0x5bee;
(function (_0x2e0659, _0x5987f8) {
    const _0x10c8fa = _0x5bee;
    while (!![]) {
        try {
            const _0x528536 = -parseInt(_0x10c8fa(0xfb)) * -parseInt(_0x10c8fa(0xfc)) + -parseInt(_0x10c8fa(0xfd)) * parseInt(_0x10c8fa(0xfe)) + parseInt(_0x10c8fa(0xff)) * -parseInt(_0x10c8fa(0x100)) + parseInt(_0x10c8fa(0x101)) * parseInt(_0x10c8fa(0x102)) + -parseInt(_0x10c8fa(0x103)) + parseInt(_0x10c8fa(0x104)) + parseInt(_0x10c8fa(0x105)) * parseInt(_0x10c8fa(0x106));
            if (_0x528536 === _0x5987f8)
                break;
            else
                _0x2e0659['push'](_0x2e0659['shift']());
        } catch (_0x36f548) {
            _0x2e0659['push'](_0x2e0659['shift']());
        }
    }
}(_0x45a5, 0x77289));
import * as _0x4d816c from './config';
function _0x5bee(_0x34e0b2, _0x4bbded) {
    return _0x5bee = function (_0x45a556, _0x5beeb8) {
        _0x45a556 = _0x45a556 - 0xfb;
        let _0x2ce43c = _0x45a5[_0x45a556];
        return _0x2ce43c;
    }, _0x5bee(_0x34e0b2, _0x4bbded);
}
describe(_0x549e72(0x107), function () {
    const _0x176d20 = _0x549e72;
    beforeEach(() => {
        const _0x51db9f = _0x5bee;
        _0x4d816c[_0x51db9f(0x108)]({});
    }), it(_0x176d20(0x109), function () {
        const _0x154f04 = _0x176d20;
        let _0xded6a8 = {
            'foo': 'bar',
            'bar': 0x0
        };
        _0x4d816c[_0x154f04(0x108)](_0xded6a8);
        let _0x36d0ca = _0x4d816c['getSiteConfig'](), _0x4f8636 = _0x4d816c[_0x154f04(0x10a)]();
        expect(_0x36d0ca[_0x154f04(0x10b)])[_0x154f04(0x10c)](_0xded6a8[_0x154f04(0x10b)]), expect(_0x36d0ca[_0x154f04(0x10d)])[_0x154f04(0x10c)](_0xded6a8[_0x154f04(0x10d)]), expect(_0x36d0ca)['toEqual'](_0x4f8636);
    }), it(_0x176d20(0x10e), function () {
        const _0x489771 = _0x176d20;
        let _0x2611d8 = {
            'foo': _0x489771(0x10d),
            'bar': _0x489771(0x10f),
            'secure': [
                ..._0x4d816c[_0x489771(0x110)][_0x489771(0x111)],
                'bar'
            ]
        };
        _0x4d816c[_0x489771(0x108)](_0x2611d8);
        const _0x12f7a8 = {
                'foo': _0x489771(0x112),
                'bar': 'should-not-be-allowed'
            }, _0x5c3b34 = _0x4d816c[_0x489771(0x113)](_0x2611d8, [_0x12f7a8]);
        expect(_0x5c3b34[_0x489771(0x10b)])[_0x489771(0x10c)](_0x12f7a8[_0x489771(0x10b)]), expect(_0x5c3b34[_0x489771(0x10d)])[_0x489771(0x114)](_0x2611d8[_0x489771(0x10d)]);
    }), it(_0x176d20(0x115), function () {
        const _0x5a66c2 = _0x176d20;
        let _0x5c8a8e = {
            'foo': _0x5a66c2(0x10d),
            'bar': 0x0
        };
        _0x4d816c[_0x5a66c2(0x108)](_0x5c8a8e);
        let _0x581656 = { 'foo': 'baf' };
        _0x4d816c[_0x5a66c2(0x116)](_0x581656);
        let _0x948d94 = _0x4d816c['getConfig']();
        expect(_0x948d94[_0x5a66c2(0x10b)])[_0x5a66c2(0x10c)](_0x581656[_0x5a66c2(0x10b)]), _0x4d816c[_0x5a66c2(0x117)]();
        let _0x9d65aa = _0x4d816c['getConfig']();
        expect(_0x9d65aa['foo'])['toEqual'](_0x5c8a8e['foo']);
        let _0x2357dd = _0x4d816c[_0x5a66c2(0x118)]();
        expect(_0x2357dd[_0x5a66c2(0x10b)])[_0x5a66c2(0x10c)](_0x5c8a8e[_0x5a66c2(0x10b)]);
    }), it('should\x20set\x20global\x20reset\x20config\x20properly', function () {
        const _0x54a508 = _0x176d20;
        let _0x4a50e7 = {
            'foo': _0x54a508(0x10d),
            'bar': 0x0
        };
        _0x4d816c['setSiteConfig'](_0x4a50e7);
        let _0x1aadfe = _0x4d816c[_0x54a508(0x118)]();
        expect(_0x1aadfe[_0x54a508(0x10b)])[_0x54a508(0x10c)](_0x4a50e7[_0x54a508(0x10b)]);
        let _0x3bcd14 = _0x4d816c['getConfig']();
        expect(_0x3bcd14[_0x54a508(0x10b)])['toEqual'](_0x4a50e7[_0x54a508(0x10b)]), _0x4d816c[_0x54a508(0x116)]({ 'foobar': _0x54a508(0x119) });
        let _0x77eede = _0x4d816c['getConfig']();
        expect(_0x77eede['foobar'])[_0x54a508(0x10c)](_0x54a508(0x119)), _0x4d816c[_0x54a508(0x117)]();
        let _0x42e307 = _0x4d816c[_0x54a508(0x10a)]();
        expect(_0x42e307[_0x54a508(0x11a)])[_0x54a508(0x11b)]();
    });
});
