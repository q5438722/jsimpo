const _0xd19b = [
    '211943hEAnra',
    '178275feqqdm',
    '1873CEiMga',
    '3NinISd',
    '79633NArDnC',
    '1cRLCHO',
    '320759rJsDTj',
    '1irsPYd',
    'extend',
    'set',
    'reset',
    'Instance\x20localeData',
    'Locale:\x20',
    'locale',
    'localeData',
    'toBe',
    'firstDayOfWeek',
    'months',
    'toEqual',
    'monthsShort',
    'weekdays',
    'weekdaysMin',
    'weekdaysShort',
    'LTS',
    'LLLL',
    'lll',
    'forEach',
    'Global\x20localeData',
    'LLL',
    'llll',
    'longDateFormat',
    'Listing\x20the\x20months\x20and\x20weekdays',
    'zh-cn',
    'Locale\x20order',
    'not',
    'meridiem',
    'ordinal',
    'function',
    '7KanGLm',
    '17957mixihz',
    '135387LcXTSd'
];
const _0x441513 = _0x7c63;
(function (_0x272b4e, _0x39fe04) {
    const _0x5084e1 = _0x7c63;
    while (!![]) {
        try {
            const _0x3a3f29 = parseInt(_0x5084e1(0x83)) * -parseInt(_0x5084e1(0x84)) + -parseInt(_0x5084e1(0x85)) + -parseInt(_0x5084e1(0x86)) + parseInt(_0x5084e1(0x87)) + -parseInt(_0x5084e1(0x88)) * -parseInt(_0x5084e1(0x89)) + -parseInt(_0x5084e1(0x8a)) * -parseInt(_0x5084e1(0x8b)) + parseInt(_0x5084e1(0x8c)) * parseInt(_0x5084e1(0x8d));
            if (_0x3a3f29 === _0x39fe04)
                break;
            else
                _0x272b4e['push'](_0x272b4e['shift']());
        } catch (_0x45818a) {
            _0x272b4e['push'](_0x272b4e['shift']());
        }
    }
}(_0xd19b, 0x1b299));
import _0x4fe8a2 from 'mockdate';
import _0x4756a9 from 'moment';
import _0x3b976a from '../../src';
import '../../src/locale/fr';
import '../../src/locale/ru';
import '../../src/locale/zh-cn';
function _0x7c63(_0x5d2d64, _0x352832) {
    return _0x7c63 = function (_0xd19be1, _0x7c6379) {
        _0xd19be1 = _0xd19be1 - 0x83;
        let _0x3bcbc3 = _0xd19b[_0xd19be1];
        return _0x3bcbc3;
    }, _0x7c63(_0x5d2d64, _0x352832);
}
import _0x56c9eb from '../../src/plugin/localeData';
import _0x1a691e from '../../src/plugin/localizedFormat';
_0x3b976a[_0x441513(0x8e)](_0x1a691e), _0x3b976a[_0x441513(0x8e)](_0x56c9eb), beforeEach(() => {
    const _0x48f2c0 = _0x441513;
    _0x4fe8a2[_0x48f2c0(0x8f)](new Date());
}), afterEach(() => {
    const _0x21cfce = _0x441513;
    _0x4fe8a2[_0x21cfce(0x90)]();
}), describe(_0x441513(0x91), () => {
    const _0x17417d = _0x441513;
    [
        'zh-cn',
        'en',
        'fr'
    ]['forEach'](_0x2496cf => {
        const _0x207828 = _0x7c63;
        it(_0x207828(0x92) + _0x2496cf, () => {
            const _0xa300e1 = _0x207828;
            _0x3b976a['locale'](_0x2496cf), _0x4756a9[_0xa300e1(0x93)](_0x2496cf);
            const _0x42ab23 = _0x3b976a(), _0x352991 = _0x4756a9(), _0x1119fb = _0x3b976a()[_0xa300e1(0x94)](), _0x3185dd = _0x4756a9()[_0xa300e1(0x94)]();
            expect(_0x1119fb['firstDayOfWeek']())[_0xa300e1(0x95)](_0x3185dd[_0xa300e1(0x96)]()), expect(_0x1119fb['months'](_0x42ab23))[_0xa300e1(0x95)](_0x3185dd[_0xa300e1(0x97)](_0x352991)), expect(_0x1119fb['months']())[_0xa300e1(0x98)](_0x3185dd['months']()), expect(_0x1119fb[_0xa300e1(0x99)](_0x42ab23))['toBe'](_0x3185dd[_0xa300e1(0x99)](_0x352991)), expect(_0x1119fb['monthsShort']())[_0xa300e1(0x98)](_0x3185dd[_0xa300e1(0x99)]()), expect(_0x1119fb[_0xa300e1(0x9a)](_0x42ab23))[_0xa300e1(0x95)](_0x3185dd[_0xa300e1(0x9a)](_0x352991)), expect(_0x1119fb[_0xa300e1(0x9a)]())[_0xa300e1(0x98)](_0x3185dd['weekdays']()), expect(_0x1119fb['weekdaysMin'](_0x42ab23))['toBe'](_0x3185dd[_0xa300e1(0x9b)](_0x352991)), expect(_0x1119fb[_0xa300e1(0x9b)]())[_0xa300e1(0x98)](_0x3185dd[_0xa300e1(0x9b)]()), expect(_0x1119fb[_0xa300e1(0x9c)](_0x42ab23))[_0xa300e1(0x95)](_0x3185dd['weekdaysShort'](_0x352991)), expect(_0x1119fb[_0xa300e1(0x9c)]())['toEqual'](_0x3185dd['weekdaysShort']());
            const _0x50245d = [
                'LT',
                _0xa300e1(0x9d),
                'L',
                'LL',
                'LLL',
                _0xa300e1(0x9e),
                'l',
                'll',
                _0xa300e1(0x9f),
                'llll'
            ];
            _0x50245d[_0xa300e1(0xa0)](_0x45b0a2 => {
                expect(_0x1119fb['longDateFormat'](_0x45b0a2))['toEqual'](_0x3185dd['longDateFormat'](_0x45b0a2));
            });
        });
    }), _0x3b976a[_0x17417d(0x93)]('en'), _0x4756a9['locale']('en');
}), it(_0x441513(0xa1), () => {
    [
        'zh-cn',
        'en',
        'fr'
    ]['forEach'](_0x46495d => {
        const _0x3d667e = _0x7c63;
        _0x3b976a[_0x3d667e(0x93)](_0x46495d), _0x4756a9['locale'](_0x46495d);
        const _0x4fed79 = _0x3b976a[_0x3d667e(0x94)](), _0x24767a = _0x4756a9[_0x3d667e(0x94)]();
        expect(_0x4fed79[_0x3d667e(0x96)]())[_0x3d667e(0x95)](_0x24767a[_0x3d667e(0x96)]()), expect(_0x4fed79['months']())[_0x3d667e(0x98)](_0x24767a['months']()), expect(_0x4fed79[_0x3d667e(0x99)]())[_0x3d667e(0x98)](_0x24767a[_0x3d667e(0x99)]()), expect(_0x4fed79[_0x3d667e(0x9a)]())[_0x3d667e(0x98)](_0x24767a[_0x3d667e(0x9a)]()), expect(_0x4fed79[_0x3d667e(0x9c)]())[_0x3d667e(0x98)](_0x24767a[_0x3d667e(0x9c)]()), expect(_0x4fed79[_0x3d667e(0x9b)]())[_0x3d667e(0x98)](_0x24767a['weekdaysMin']());
        const _0x3963e0 = [
            'LT',
            _0x3d667e(0x9d),
            'L',
            'LL',
            _0x3d667e(0xa2),
            'LLLL',
            'l',
            'll',
            _0x3d667e(0x9f),
            _0x3d667e(0xa3)
        ];
        _0x3963e0[_0x3d667e(0xa0)](_0x370837 => {
            const _0x6d1ea3 = _0x3d667e;
            expect(_0x4fed79[_0x6d1ea3(0xa4)](_0x370837))[_0x6d1ea3(0x98)](_0x24767a[_0x6d1ea3(0xa4)](_0x370837));
        });
    });
}), it(_0x441513(0xa5), () => {
    const _0x23bb4d = _0x441513;
    [
        _0x23bb4d(0xa6),
        'en',
        'fr'
    ][_0x23bb4d(0xa0)](_0x27cab0 => {
        const _0x255830 = _0x23bb4d;
        _0x3b976a[_0x255830(0x93)](_0x27cab0), _0x4756a9['locale'](_0x27cab0), expect(_0x3b976a[_0x255830(0x97)]())['toEqual'](_0x4756a9[_0x255830(0x97)]()), expect(_0x3b976a['monthsShort']())[_0x255830(0x98)](_0x4756a9[_0x255830(0x99)]()), expect(_0x3b976a[_0x255830(0x9a)]())[_0x255830(0x98)](_0x4756a9['weekdays']()), expect(_0x3b976a[_0x255830(0x9c)]())[_0x255830(0x98)](_0x4756a9[_0x255830(0x9c)]()), expect(_0x3b976a[_0x255830(0x9b)]())[_0x255830(0x98)](_0x4756a9[_0x255830(0x9b)]());
    });
}), it('Month\x20function', () => {
    const _0x314b42 = _0x441513, _0x472b06 = _0x3b976a()[_0x314b42(0x93)]('ru')['localeData'](), _0x430691 = _0x4756a9()['locale']('ru')[_0x314b42(0x94)]();
    expect(_0x472b06[_0x314b42(0x97)]())[_0x314b42(0x98)](_0x430691['months']()), expect(_0x472b06[_0x314b42(0x99)]())[_0x314b42(0x98)](_0x430691['monthsShort']()), _0x3b976a[_0x314b42(0x93)]('ru'), _0x4756a9[_0x314b42(0x93)]('ru'), expect(_0x3b976a[_0x314b42(0x97)]())[_0x314b42(0x98)](_0x4756a9[_0x314b42(0x97)]()), expect(_0x3b976a[_0x314b42(0x99)]())[_0x314b42(0x98)](_0x4756a9[_0x314b42(0x99)]());
}), it(_0x441513(0xa7), () => {
    const _0x5d66c4 = _0x441513;
    _0x3b976a['locale']('fr'), _0x4756a9[_0x5d66c4(0x93)]('fr'), expect(_0x3b976a[_0x5d66c4(0x9a)](!![]))[_0x5d66c4(0x98)](_0x4756a9[_0x5d66c4(0x9a)](!![])), expect(_0x3b976a[_0x5d66c4(0x9c)](!![]))[_0x5d66c4(0x98)](_0x4756a9[_0x5d66c4(0x9c)](!![])), expect(_0x3b976a[_0x5d66c4(0x9b)](!![]))[_0x5d66c4(0x98)](_0x4756a9['weekdaysMin'](!![])), expect(_0x3b976a['weekdays']())[_0x5d66c4(0xa8)][_0x5d66c4(0x98)](_0x3b976a[_0x5d66c4(0x9a)](!![])), _0x3b976a[_0x5d66c4(0x93)]('en'), _0x4756a9[_0x5d66c4(0x93)]('en'), expect(_0x3b976a[_0x5d66c4(0x9a)](!![]))[_0x5d66c4(0x98)](_0x4756a9['weekdays'](!![]));
}), it(_0x441513(0xa9), () => {
    const _0x360fbe = _0x441513;
    _0x3b976a[_0x360fbe(0x93)](_0x360fbe(0xa6)), expect(typeof _0x3b976a['localeData']()['meridiem'])[_0x360fbe(0x98)]('function'), expect(typeof _0x3b976a()['localeData']()[_0x360fbe(0xa9)])[_0x360fbe(0x98)]('function'), _0x3b976a[_0x360fbe(0x93)]('en');
}), it(_0x441513(0xaa), () => {
    const _0x333c2e = _0x441513;
    _0x3b976a[_0x333c2e(0x93)](_0x333c2e(0xa6)), expect(typeof _0x3b976a[_0x333c2e(0x94)]()[_0x333c2e(0xaa)])[_0x333c2e(0x98)]('function'), expect(typeof _0x3b976a()[_0x333c2e(0x94)]()[_0x333c2e(0xaa)])[_0x333c2e(0x98)](_0x333c2e(0xab)), _0x3b976a[_0x333c2e(0x93)]('en');
});