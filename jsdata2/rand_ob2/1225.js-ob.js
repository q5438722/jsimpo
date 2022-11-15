const _0x55fa = [
    'destroy',
    'toHaveBeenCalled',
    '435362MVWVWx',
    '1133456gHfDns',
    '52418gSJIBL',
    '9WvxnBI',
    '287799fmaZhQ',
    '374158MbZmYA',
    '558175hnMpXu',
    '1DHpIPQ',
    '336WMmwpv',
    '1844nsmnju',
    '../src/gutter',
    'when\x20initialized',
    'it\x20has\x20no\x20gutters',
    'getGutters',
    'toBe',
    '::addGutter',
    'addGutter',
    'toEqual',
    'priority',
    'throws\x20an\x20error\x20if\x20the\x20provided\x20gutter\x20name\x20is\x20already\x20in\x20use',
    'test-gutter',
    'bind',
    'toThrow',
    'keeps\x20added\x20gutters\x20sorted\x20by\x20ascending\x20priority',
    'first',
    'third',
    'onDidRemoveGutter',
    'push',
    'removeGutter',
    'length',
    'name',
    'throws\x20an\x20error\x20if\x20the\x20gutter\x20is\x20not\x20within\x20this\x20GutterContainer',
    '::destroy',
    'createSpy',
    'onDidDestroy'
];
const _0x256192 = _0x5aea;
function _0x5aea(_0x55a4f4, _0x5c028d) {
    return _0x5aea = function (_0x55faf5, _0x5aea59) {
        _0x55faf5 = _0x55faf5 - 0x18d;
        let _0x7646d8 = _0x55fa[_0x55faf5];
        return _0x7646d8;
    }, _0x5aea(_0x55a4f4, _0x5c028d);
}
(function (_0x11b7f4, _0x581856) {
    const _0x2b67ff = _0x5aea;
    while (!![]) {
        try {
            const _0xa06a01 = -parseInt(_0x2b67ff(0x18d)) + parseInt(_0x2b67ff(0x18e)) + -parseInt(_0x2b67ff(0x18f)) * -parseInt(_0x2b67ff(0x190)) + -parseInt(_0x2b67ff(0x191)) + -parseInt(_0x2b67ff(0x192)) + -parseInt(_0x2b67ff(0x193)) * parseInt(_0x2b67ff(0x194)) + -parseInt(_0x2b67ff(0x195)) * -parseInt(_0x2b67ff(0x196));
            if (_0xa06a01 === _0x581856)
                break;
            else
                _0x11b7f4['push'](_0x11b7f4['shift']());
        } catch (_0x22b9c9) {
            _0x11b7f4['push'](_0x11b7f4['shift']());
        }
    }
}(_0x55fa, 0x8afdc));
const Gutter = require(_0x256192(0x197)), GutterContainer = require('../src/gutter-container');
describe('GutterContainer', () => {
    const _0x36fb79 = _0x256192;
    let _0x23c58d = null;
    const _0x23c88b = {
        'scheduleComponentUpdate'() {
        }
    };
    beforeEach(() => {
        _0x23c58d = new GutterContainer(_0x23c88b);
    }), describe(_0x36fb79(0x198), () => it(_0x36fb79(0x199), () => {
        const _0x3870b0 = _0x36fb79;
        expect(_0x23c58d[_0x3870b0(0x19a)]()['length'])[_0x3870b0(0x19b)](0x0);
    })), describe(_0x36fb79(0x19c), () => {
        const _0x46c741 = _0x36fb79;
        it('creates\x20a\x20new\x20gutter', () => {
            const _0x4e3a22 = _0x5aea, _0x580d59 = _0x23c58d[_0x4e3a22(0x19d)]({
                    'test-gutter': 'test-gutter',
                    'priority': 0x1
                });
            expect(_0x23c58d[_0x4e3a22(0x19a)]())[_0x4e3a22(0x19e)]([_0x580d59]), expect(_0x580d59[_0x4e3a22(0x19f)])[_0x4e3a22(0x19b)](0x1);
        }), it(_0x46c741(0x1a0), () => {
            const _0x3a617f = _0x46c741, _0x5a2efa = _0x3a617f(0x1a1);
            _0x23c58d['addGutter']({ 'name': _0x5a2efa }), expect(_0x23c58d[_0x3a617f(0x19d)][_0x3a617f(0x1a2)](null, { 'name': _0x5a2efa }))[_0x3a617f(0x1a3)]();
        }), it(_0x46c741(0x1a4), () => {
            const _0xb7ee24 = _0x46c741, _0x44292e = _0x23c58d[_0xb7ee24(0x19d)]({
                    'name': _0xb7ee24(0x1a5),
                    'priority': 0x1
                }), _0x4bd907 = _0x23c58d[_0xb7ee24(0x19d)]({
                    'name': _0xb7ee24(0x1a6),
                    'priority': 0x3
                }), _0x4cb49a = _0x23c58d[_0xb7ee24(0x19d)]({
                    'name': 'second',
                    'priority': 0x2
                });
            expect(_0x23c58d[_0xb7ee24(0x19a)]())['toEqual']([
                _0x44292e,
                _0x4cb49a,
                _0x4bd907
            ]);
        });
    }), describe('::removeGutter', () => {
        const _0x220188 = _0x36fb79;
        let _0x3362c0;
        beforeEach(function () {
            const _0x2c8f54 = _0x5aea;
            _0x23c58d = new GutterContainer(_0x23c88b), _0x3362c0 = [], _0x23c58d[_0x2c8f54(0x1a7)](_0x38ee68 => _0x3362c0[_0x2c8f54(0x1a8)](_0x38ee68));
        }), it('removes\x20the\x20gutter\x20if\x20it\x20is\x20contained\x20by\x20this\x20GutterContainer', () => {
            const _0x525294 = _0x5aea, _0x98a7a8 = _0x23c58d[_0x525294(0x19d)]({ 'test-gutter': 'test-gutter' });
            expect(_0x23c58d[_0x525294(0x19a)]())[_0x525294(0x19e)]([_0x98a7a8]), _0x23c58d[_0x525294(0x1a9)](_0x98a7a8), expect(_0x23c58d['getGutters']()[_0x525294(0x1aa)])[_0x525294(0x19b)](0x0), expect(_0x3362c0)[_0x525294(0x19e)]([_0x98a7a8[_0x525294(0x1ab)]]);
        }), it(_0x220188(0x1ac), () => {
            const _0x4afa42 = {}, _0x5db9ed = new GutterContainer(_0x4afa42), _0x57123a = new Gutter('gutter-name', _0x5db9ed);
            expect(_0x23c58d['removeGutter']['bind'](null, _0x57123a))['toThrow']();
        });
    }), describe(_0x36fb79(0x1ad), () => it('clears\x20its\x20array\x20of\x20gutters\x20and\x20destroys\x20custom\x20gutters', () => {
        const _0x22c648 = _0x36fb79, _0x39b1d3 = _0x23c58d['addGutter']({
                'test-gutter': _0x22c648(0x1a1),
                'priority': 0x1
            }), _0x435fa2 = jasmine[_0x22c648(0x1ae)]();
        _0x39b1d3[_0x22c648(0x1af)](_0x435fa2), _0x23c58d[_0x22c648(0x1b0)](), expect(_0x435fa2)[_0x22c648(0x1b1)](), expect(_0x23c58d['getGutters']())[_0x22c648(0x19e)]([]);
    }));
});
