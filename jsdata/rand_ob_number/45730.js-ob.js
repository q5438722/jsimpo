import _0x4d5409 from 'mockdate';
import _0x1793c5 from 'moment';
import _0x2bf75a from '../../src';
import '../../src/locale/fr';
import '../../src/locale/ru';
import '../../src/locale/zh-cn';
import _0x297b60 from '../../src/plugin/localeData';
import _0x37c537 from '../../src/plugin/localizedFormat';
_0x2bf75a['extend'](_0x37c537), _0x2bf75a['extend'](_0x297b60), beforeEach(() => {
    _0x4d5409['set'](new Date());
}), afterEach(() => {
    _0x4d5409['reset']();
}), describe('Instance\x20localeData', () => {
    [
        'zh-cn',
        'en',
        'fr'
    ]['forEach'](_0x248f3f => {
        it('Locale:\x20' + _0x248f3f, () => {
            _0x2bf75a['locale'](_0x248f3f), _0x1793c5['locale'](_0x248f3f);
            const _0x5bdc42 = _0x2bf75a(), _0x449544 = _0x1793c5(), _0x262e4b = _0x2bf75a()['localeData'](), _0x43821e = _0x1793c5()['localeData']();
            expect(_0x262e4b['firstDayOfWeek']())['toBe'](_0x43821e['firstDayOfWeek']()), expect(_0x262e4b['months'](_0x5bdc42))['toBe'](_0x43821e['months'](_0x449544)), expect(_0x262e4b['months']())['toEqual'](_0x43821e['months']()), expect(_0x262e4b['monthsShort'](_0x5bdc42))['toBe'](_0x43821e['monthsShort'](_0x449544)), expect(_0x262e4b['monthsShort']())['toEqual'](_0x43821e['monthsShort']()), expect(_0x262e4b['weekdays'](_0x5bdc42))['toBe'](_0x43821e['weekdays'](_0x449544)), expect(_0x262e4b['weekdays']())['toEqual'](_0x43821e['weekdays']()), expect(_0x262e4b['weekdaysMin'](_0x5bdc42))['toBe'](_0x43821e['weekdaysMin'](_0x449544)), expect(_0x262e4b['weekdaysMin']())['toEqual'](_0x43821e['weekdaysMin']()), expect(_0x262e4b['weekdaysShort'](_0x5bdc42))['toBe'](_0x43821e['weekdaysShort'](_0x449544)), expect(_0x262e4b['weekdaysShort']())['toEqual'](_0x43821e['weekdaysShort']());
            const _0x46f991 = [
                'LT',
                'LTS',
                'L',
                'LL',
                'LLL',
                'LLLL',
                'l',
                'll',
                'lll',
                'llll'
            ];
            _0x46f991['forEach'](_0x549d79 => {
                expect(_0x262e4b['longDateFormat'](_0x549d79))['toEqual'](_0x43821e['longDateFormat'](_0x549d79));
            });
        });
    }), _0x2bf75a['locale']('en'), _0x1793c5['locale']('en');
}), it('Global\x20localeData', () => {
    [
        'zh-cn',
        'en',
        'fr'
    ]['forEach'](_0xa6d7a2 => {
        _0x2bf75a['locale'](_0xa6d7a2), _0x1793c5['locale'](_0xa6d7a2);
        const _0x49811a = _0x2bf75a['localeData'](), _0x27775b = _0x1793c5['localeData']();
        expect(_0x49811a['firstDayOfWeek']())['toBe'](_0x27775b['firstDayOfWeek']()), expect(_0x49811a['months']())['toEqual'](_0x27775b['months']()), expect(_0x49811a['monthsShort']())['toEqual'](_0x27775b['monthsShort']()), expect(_0x49811a['weekdays']())['toEqual'](_0x27775b['weekdays']()), expect(_0x49811a['weekdaysShort']())['toEqual'](_0x27775b['weekdaysShort']()), expect(_0x49811a['weekdaysMin']())['toEqual'](_0x27775b['weekdaysMin']());
        const _0x39e8e3 = [
            'LT',
            'LTS',
            'L',
            'LL',
            'LLL',
            'LLLL',
            'l',
            'll',
            'lll',
            'llll'
        ];
        _0x39e8e3['forEach'](_0x1c98f8 => {
            expect(_0x49811a['longDateFormat'](_0x1c98f8))['toEqual'](_0x27775b['longDateFormat'](_0x1c98f8));
        });
    });
}), it('Listing\x20the\x20months\x20and\x20weekdays', () => {
    [
        'zh-cn',
        'en',
        'fr'
    ]['forEach'](_0x364c3c => {
        _0x2bf75a['locale'](_0x364c3c), _0x1793c5['locale'](_0x364c3c), expect(_0x2bf75a['months']())['toEqual'](_0x1793c5['months']()), expect(_0x2bf75a['monthsShort']())['toEqual'](_0x1793c5['monthsShort']()), expect(_0x2bf75a['weekdays']())['toEqual'](_0x1793c5['weekdays']()), expect(_0x2bf75a['weekdaysShort']())['toEqual'](_0x1793c5['weekdaysShort']()), expect(_0x2bf75a['weekdaysMin']())['toEqual'](_0x1793c5['weekdaysMin']());
    });
}), it('Month\x20function', () => {
    const _0x36174c = _0x2bf75a()['locale']('ru')['localeData'](), _0x2b5284 = _0x1793c5()['locale']('ru')['localeData']();
    expect(_0x36174c['months']())['toEqual'](_0x2b5284['months']()), expect(_0x36174c['monthsShort']())['toEqual'](_0x2b5284['monthsShort']()), _0x2bf75a['locale']('ru'), _0x1793c5['locale']('ru'), expect(_0x2bf75a['months']())['toEqual'](_0x1793c5['months']()), expect(_0x2bf75a['monthsShort']())['toEqual'](_0x1793c5['monthsShort']());
}), it('Locale\x20order', () => {
    _0x2bf75a['locale']('fr'), _0x1793c5['locale']('fr'), expect(_0x2bf75a['weekdays'](!![]))['toEqual'](_0x1793c5['weekdays'](!![])), expect(_0x2bf75a['weekdaysShort'](!![]))['toEqual'](_0x1793c5['weekdaysShort'](!![])), expect(_0x2bf75a['weekdaysMin'](!![]))['toEqual'](_0x1793c5['weekdaysMin'](!![])), expect(_0x2bf75a['weekdays']())['not']['toEqual'](_0x2bf75a['weekdays'](!![])), _0x2bf75a['locale']('en'), _0x1793c5['locale']('en'), expect(_0x2bf75a['weekdays'](!![]))['toEqual'](_0x1793c5['weekdays'](!![]));
}), it('meridiem', () => {
    _0x2bf75a['locale']('zh-cn'), expect(typeof _0x2bf75a['localeData']()['meridiem'])['toEqual']('function'), expect(typeof _0x2bf75a()['localeData']()['meridiem'])['toEqual']('function'), _0x2bf75a['locale']('en');
}), it('ordinal', () => {
    _0x2bf75a['locale']('zh-cn'), expect(typeof _0x2bf75a['localeData']()['ordinal'])['toEqual']('function'), expect(typeof _0x2bf75a()['localeData']()['ordinal'])['toEqual']('function'), _0x2bf75a['locale']('en');
});
