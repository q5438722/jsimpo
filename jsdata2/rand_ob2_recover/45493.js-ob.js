var async = require('../lib'), {expect} = require('chai'), assert = require(_0x4b988f(309));
describe('whilst', () => {
    var _0x3beca6 = _0x4b988f;
    it(_0x3beca6(310), _0x2b4236 => {
        var _0x2ed872 = [], _0x252448 = 0;
        async['whilst'](_0x247712 => {
            var _0x5dfb26 = _0x29c1;
            return expect(_0x247712)['to']['be']['a']('function'), _0x2ed872[_0x5dfb26(311)]([
                _0x5dfb26(312),
                _0x252448
            ]), _0x247712(null, _0x252448 < 5);
        }, _0x394a23 => {
            var _0x483719 = _0x29c1;
            _0x2ed872['push']([
                _0x483719(313),
                _0x252448
            ]), _0x252448++, _0x394a23(null, _0x252448);
        }, (_0x158bfa, _0x4aa43c) => {
            var _0x2ff851 = _0x29c1;
            assert(_0x158bfa === null, _0x158bfa + _0x2ff851(314)), expect(_0x4aa43c)['to']['equal'](5, 'last result passed through'), expect(_0x2ed872)['to']['eql']([
                [
                    'test',
                    0
                ],
                [
                    _0x2ff851(313),
                    0
                ],
                [
                    'test',
                    1
                ],
                [
                    _0x2ff851(313),
                    1
                ],
                [
                    _0x2ff851(312),
                    2
                ],
                [
                    _0x2ff851(313),
                    2
                ],
                [
                    _0x2ff851(312),
                    3
                ],
                [
                    _0x2ff851(313),
                    3
                ],
                [
                    _0x2ff851(312),
                    4
                ],
                [
                    'iteratee',
                    4
                ],
                [
                    _0x2ff851(312),
                    5
                ]
            ]), expect(_0x252448)['to'][_0x2ff851(315)](5), _0x2b4236();
        });
    }), it(_0x3beca6(316), _0x4a3e87 => {
        var _0x4f8ab9 = _0x3beca6;
        async[_0x4f8ab9(310)](_0x1b0fe8 => _0x1b0fe8(new Error(_0x4f8ab9(317))), _0x4699f1 => _0x4699f1(), _0x3183fe => {
            var _0x242f92 = _0x4f8ab9;
            expect(_0x3183fe[_0x242f92(318)])['to'][_0x242f92(315)](_0x242f92(317)), _0x4a3e87();
        });
    }), it(_0x3beca6(319), _0x3249e2 => {
        var _0x3c1195 = _0x3beca6;
        async[_0x3c1195(310)](_0x2fe367 => _0x2fe367(null, !![]), _0x75c041 => _0x75c041(new Error(_0x3c1195(320))), _0x21d8ce => {
            var _0x477d45 = _0x3c1195;
            expect(_0x21d8ce[_0x477d45(318)])['to'][_0x477d45(315)](_0x477d45(320)), _0x3249e2();
        });
    }), it(_0x3beca6(321), _0x47de5d => {
        var _0x3459ea = _0x3beca6, _0x53e7ed = 0;
        async[_0x3459ea(310)](_0x24aec1 => _0x24aec1(null, _0x53e7ed < 2), _0x55eca7 => {
            _0x53e7ed++, _0x55eca7();
        }), expect(_0x53e7ed)['to'][_0x3459ea(315)](2), _0x47de5d();
    }), it(_0x3beca6(322), _0x2dd4ae => {
        var _0x5a6554 = _0x3beca6, _0x29bf21 = 0;
        async[_0x5a6554(310)](_0x2ccc44 => _0x2ccc44(null, _0x29bf21 < 3), _0x369362 => {
            _0x29bf21++, _0x369362(_0x29bf21 === 2 ? ![] : null);
        }, () => {
            var _0x5496a2 = _0x5a6554;
            throw new Error(_0x5496a2(323));
        }), setTimeout(() => {
            var _0x530e69 = _0x5a6554;
            expect(_0x29bf21)['to'][_0x530e69(315)](2), _0x2dd4ae();
        }, 10);
    }), it(_0x3beca6(324), _0xbb7717 => {
        var _0x57e24a = _0x3beca6, _0x56593b = 0;
        async[_0x57e24a(310)](_0x4c8184 => _0x4c8184(null, ![]), _0x2b834a => {
            _0x56593b++, _0x2b834a(null);
        }, (_0x47896e, _0x52e1aa) => {
            var _0x1451d3 = _0x57e24a;
            expect(_0x47896e)['to']['eql'](null), expect(_0x52e1aa)['to']['be']['undefined'], expect(_0x56593b)['to'][_0x1451d3(315)](0), _0xbb7717();
        });
    }), it(_0x3beca6(325), _0x9c697f => {
        var _0x4e0692 = _0x3beca6, _0x1ca233 = [], _0x449683 = 0;
        async[_0x4e0692(325)](_0x5cc022 => {
            var _0x3045a2 = _0x4e0692;
            _0x1ca233[_0x3045a2(311)]([
                _0x3045a2(313),
                _0x449683
            ]), _0x449683++, _0x5cc022(null, _0x449683);
        }, (_0x485365, _0x223f0c) => {
            var _0x590aa6 = _0x4e0692;
            return expect(_0x485365)['to'][_0x590aa6(315)](_0x449683), _0x1ca233[_0x590aa6(311)]([
                _0x590aa6(312),
                _0x449683
            ]), _0x223f0c(null, _0x449683 < 5);
        }, (_0x51ec34, _0x25f83a) => {
            var _0x646324 = _0x4e0692;
            assert(_0x51ec34 === null, _0x51ec34 + _0x646324(314)), expect(_0x25f83a)['to']['equal'](5, _0x646324(326)), expect(_0x1ca233)['to'][_0x646324(327)]([
                [
                    'iteratee',
                    0
                ],
                [
                    'test',
                    1
                ],
                [
                    _0x646324(313),
                    1
                ],
                [
                    _0x646324(312),
                    2
                ],
                [
                    _0x646324(313),
                    2
                ],
                [
                    'test',
                    3
                ],
                [
                    'iteratee',
                    3
                ],
                [
                    'test',
                    4
                ],
                [
                    'iteratee',
                    4
                ],
                [
                    _0x646324(312),
                    5
                ]
            ]), expect(_0x449683)['to'][_0x646324(315)](5), _0x9c697f();
        });
    }), it(_0x3beca6(328), _0x13039c => {
        var _0x1b06b5 = [], _0x2bb82c = 0;
        async['doWhilst'](_0x4810f7 => {
            var _0x240a1f = _0x29c1;
            _0x1b06b5['push']([
                _0x240a1f(313),
                _0x2bb82c
            ]), _0x2bb82c++, _0x4810f7(null, _0x2bb82c);
        }, (_0xf6cb9b, _0xb0de4d) => {
            return _0x1b06b5['push']([
                'test',
                _0xf6cb9b
            ]), _0xb0de4d(null, _0xf6cb9b < 5);
        }, (_0x55aba0, _0x3e1d8a) => {
            var _0x320b3d = _0x29c1;
            if (_0x55aba0)
                throw _0x55aba0;
            expect(_0x3e1d8a)['to']['equal'](5, 'last result passed through'), expect(_0x1b06b5)['to'][_0x320b3d(327)]([
                [
                    _0x320b3d(313),
                    0
                ],
                [
                    _0x320b3d(312),
                    1
                ],
                [
                    _0x320b3d(313),
                    1
                ],
                [
                    _0x320b3d(312),
                    2
                ],
                [
                    _0x320b3d(313),
                    2
                ],
                [
                    _0x320b3d(312),
                    3
                ],
                [
                    _0x320b3d(313),
                    3
                ],
                [
                    _0x320b3d(312),
                    4
                ],
                [
                    _0x320b3d(313),
                    4
                ],
                [
                    _0x320b3d(312),
                    5
                ]
            ]), expect(_0x2bb82c)['to'][_0x320b3d(315)](5), _0x13039c();
        });
    }), it(_0x3beca6(329), _0x4311f1 => {
        var _0x367501 = _0x3beca6, _0x190c06 = new Error(_0x367501(330));
        async['doWhilst'](_0x2bbd1b => {
            _0x2bbd1b(_0x190c06);
        }, () => {
        }, _0x5cf2f4 => {
            var _0xe1519c = _0x367501;
            expect(_0x5cf2f4)['to'][_0xe1519c(315)](_0x190c06), _0x4311f1();
        });
    }), it('doWhilst canceling', _0x219fe6 => {
        var _0x504c3b = _0x3beca6;
        let _0x54db0b = 0;
        async[_0x504c3b(325)](_0xc04bd6 => {
            _0x54db0b++, _0xc04bd6(_0x54db0b === 2 ? ![] : null);
        }, _0x3418d0 => _0x3418d0(null, !![]), () => {
            var _0x5669e6 = _0x504c3b;
            throw new Error(_0x5669e6(323));
        }), setTimeout(() => {
            var _0x22ee12 = _0x504c3b;
            expect(_0x54db0b)['to'][_0x22ee12(315)](2), _0x219fe6();
        }, 10);
    });
});