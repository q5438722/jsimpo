const Gutter = require(_0x256192(407)), GutterContainer = require('../src/gutter-container');
describe('GutterContainer', () => {
    const _0x36fb79 = _0x256192;
    let _0x23c58d = null;
    const _0x23c88b = {
        'scheduleComponentUpdate'() {
        }
    };
    beforeEach(() => {
        _0x23c58d = new GutterContainer(_0x23c88b);
    }), describe(_0x36fb79(408), () => it(_0x36fb79(409), () => {
        const _0x3870b0 = _0x36fb79;
        expect(_0x23c58d[_0x3870b0(410)]()['length'])[_0x3870b0(411)](0);
    })), describe(_0x36fb79(412), () => {
        const _0x46c741 = _0x36fb79;
        it('creates a new gutter', () => {
            const _0x4e3a22 = _0x5aea, _0x580d59 = _0x23c58d[_0x4e3a22(413)]({
                    'test-gutter': 'test-gutter',
                    'priority': 1
                });
            expect(_0x23c58d[_0x4e3a22(410)]())[_0x4e3a22(414)]([_0x580d59]), expect(_0x580d59[_0x4e3a22(415)])[_0x4e3a22(411)](1);
        }), it(_0x46c741(416), () => {
            const _0x3a617f = _0x46c741, _0x5a2efa = _0x3a617f(417);
            _0x23c58d['addGutter']({ 'name': _0x5a2efa }), expect(_0x23c58d[_0x3a617f(413)][_0x3a617f(418)](null, { 'name': _0x5a2efa }))[_0x3a617f(419)]();
        }), it(_0x46c741(420), () => {
            const _0xb7ee24 = _0x46c741, _0x44292e = _0x23c58d[_0xb7ee24(413)]({
                    'name': _0xb7ee24(421),
                    'priority': 1
                }), _0x4bd907 = _0x23c58d[_0xb7ee24(413)]({
                    'name': _0xb7ee24(422),
                    'priority': 3
                }), _0x4cb49a = _0x23c58d[_0xb7ee24(413)]({
                    'name': 'second',
                    'priority': 2
                });
            expect(_0x23c58d[_0xb7ee24(410)]())['toEqual']([
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
            _0x23c58d = new GutterContainer(_0x23c88b), _0x3362c0 = [], _0x23c58d[_0x2c8f54(423)](_0x38ee68 => _0x3362c0[_0x2c8f54(424)](_0x38ee68));
        }), it('removes the gutter if it is contained by this GutterContainer', () => {
            const _0x525294 = _0x5aea, _0x98a7a8 = _0x23c58d[_0x525294(413)]({ 'test-gutter': 'test-gutter' });
            expect(_0x23c58d[_0x525294(410)]())[_0x525294(414)]([_0x98a7a8]), _0x23c58d[_0x525294(425)](_0x98a7a8), expect(_0x23c58d['getGutters']()[_0x525294(426)])[_0x525294(411)](0), expect(_0x3362c0)[_0x525294(414)]([_0x98a7a8[_0x525294(427)]]);
        }), it(_0x220188(428), () => {
            const _0x4afa42 = {}, _0x5db9ed = new GutterContainer(_0x4afa42), _0x57123a = new Gutter('gutter-name', _0x5db9ed);
            expect(_0x23c58d['removeGutter']['bind'](null, _0x57123a))['toThrow']();
        });
    }), describe(_0x36fb79(429), () => it('clears its array of gutters and destroys custom gutters', () => {
        const _0x22c648 = _0x36fb79, _0x39b1d3 = _0x23c58d['addGutter']({
                'test-gutter': _0x22c648(417),
                'priority': 1
            }), _0x435fa2 = jasmine[_0x22c648(430)]();
        _0x39b1d3[_0x22c648(431)](_0x435fa2), _0x23c58d[_0x22c648(432)](), expect(_0x435fa2)[_0x22c648(433)](), expect(_0x23c58d['getGutters']())[_0x22c648(414)]([]);
    }));
});