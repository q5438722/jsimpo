var _0x40e0 = [
    '1WyYAXH',
    '77502PBgYBL',
    '938590OdIJZz',
    '681291mkZsPv',
    '1001001xqdLHU',
    '1lEzgNq',
    '2984165YLRlAq',
    'assert',
    'whilst',
    'push',
    'test',
    'iteratee',
    '\x20passed\x20instead\x20of\x20\x27null\x27',
    'equal',
    'errors',
    'bad\x20test',
    'message',
    'errors\x20(iteratee)',
    'bad\x20iter',
    'whilst\x20optional\x20callback',
    'whilst\x20canceling',
    'should\x20not\x20get\x20here',
    'should\x20not\x20error\x20when\x20test\x20is\x20false\x20on\x20first\x20iteration',
    'doWhilst',
    'last\x20result\x20passed\x20through',
    'eql',
    'doWhilst\x20callback\x20params',
    'doWhilst\x20-\x20error',
    'asdas',
    '698262juUGxl',
    '463efhWLa',
    '1027OGMKCE'
];
function _0x29c1(_0xd7b739, _0x322f45) {
    return _0x29c1 = function (_0x40e065, _0x29c159) {
        _0x40e065 = _0x40e065 - 0x12b;
        var _0x3745ba = _0x40e0[_0x40e065];
        return _0x3745ba;
    }, _0x29c1(_0xd7b739, _0x322f45);
}
var _0x4b988f = _0x29c1;
(function (_0x4fa045, _0x2513ba) {
    var _0x488f5c = _0x29c1;
    while (!![]) {
        try {
            var _0xaca0bb = parseInt(_0x488f5c(0x12b)) + -parseInt(_0x488f5c(0x12c)) * parseInt(_0x488f5c(0x12d)) + -parseInt(_0x488f5c(0x12e)) * parseInt(_0x488f5c(0x12f)) + -parseInt(_0x488f5c(0x130)) + -parseInt(_0x488f5c(0x131)) + -parseInt(_0x488f5c(0x132)) + parseInt(_0x488f5c(0x133)) * parseInt(_0x488f5c(0x134));
            if (_0xaca0bb === _0x2513ba)
                break;
            else
                _0x4fa045['push'](_0x4fa045['shift']());
        } catch (_0x56eb35) {
            _0x4fa045['push'](_0x4fa045['shift']());
        }
    }
}(_0x40e0, 0x7c27e));
var async = require('../lib'), {expect} = require('chai'), assert = require(_0x4b988f(0x135));
describe('whilst', () => {
    var _0x3beca6 = _0x4b988f;
    it(_0x3beca6(0x136), _0x2b4236 => {
        var _0x2ed872 = [], _0x252448 = 0x0;
        async['whilst'](_0x247712 => {
            var _0x5dfb26 = _0x29c1;
            return expect(_0x247712)['to']['be']['a']('function'), _0x2ed872[_0x5dfb26(0x137)]([
                _0x5dfb26(0x138),
                _0x252448
            ]), _0x247712(null, _0x252448 < 0x5);
        }, _0x394a23 => {
            var _0x483719 = _0x29c1;
            _0x2ed872['push']([
                _0x483719(0x139),
                _0x252448
            ]), _0x252448++, _0x394a23(null, _0x252448);
        }, (_0x158bfa, _0x4aa43c) => {
            var _0x2ff851 = _0x29c1;
            assert(_0x158bfa === null, _0x158bfa + _0x2ff851(0x13a)), expect(_0x4aa43c)['to']['equal'](0x5, 'last\x20result\x20passed\x20through'), expect(_0x2ed872)['to']['eql']([
                [
                    'test',
                    0x0
                ],
                [
                    _0x2ff851(0x139),
                    0x0
                ],
                [
                    'test',
                    0x1
                ],
                [
                    _0x2ff851(0x139),
                    0x1
                ],
                [
                    _0x2ff851(0x138),
                    0x2
                ],
                [
                    _0x2ff851(0x139),
                    0x2
                ],
                [
                    _0x2ff851(0x138),
                    0x3
                ],
                [
                    _0x2ff851(0x139),
                    0x3
                ],
                [
                    _0x2ff851(0x138),
                    0x4
                ],
                [
                    'iteratee',
                    0x4
                ],
                [
                    _0x2ff851(0x138),
                    0x5
                ]
            ]), expect(_0x252448)['to'][_0x2ff851(0x13b)](0x5), _0x2b4236();
        });
    }), it(_0x3beca6(0x13c), _0x4a3e87 => {
        var _0x4f8ab9 = _0x3beca6;
        async[_0x4f8ab9(0x136)](_0x1b0fe8 => _0x1b0fe8(new Error(_0x4f8ab9(0x13d))), _0x4699f1 => _0x4699f1(), _0x3183fe => {
            var _0x242f92 = _0x4f8ab9;
            expect(_0x3183fe[_0x242f92(0x13e)])['to'][_0x242f92(0x13b)](_0x242f92(0x13d)), _0x4a3e87();
        });
    }), it(_0x3beca6(0x13f), _0x3249e2 => {
        var _0x3c1195 = _0x3beca6;
        async[_0x3c1195(0x136)](_0x2fe367 => _0x2fe367(null, !![]), _0x75c041 => _0x75c041(new Error(_0x3c1195(0x140))), _0x21d8ce => {
            var _0x477d45 = _0x3c1195;
            expect(_0x21d8ce[_0x477d45(0x13e)])['to'][_0x477d45(0x13b)](_0x477d45(0x140)), _0x3249e2();
        });
    }), it(_0x3beca6(0x141), _0x47de5d => {
        var _0x3459ea = _0x3beca6, _0x53e7ed = 0x0;
        async[_0x3459ea(0x136)](_0x24aec1 => _0x24aec1(null, _0x53e7ed < 0x2), _0x55eca7 => {
            _0x53e7ed++, _0x55eca7();
        }), expect(_0x53e7ed)['to'][_0x3459ea(0x13b)](0x2), _0x47de5d();
    }), it(_0x3beca6(0x142), _0x2dd4ae => {
        var _0x5a6554 = _0x3beca6, _0x29bf21 = 0x0;
        async[_0x5a6554(0x136)](_0x2ccc44 => _0x2ccc44(null, _0x29bf21 < 0x3), _0x369362 => {
            _0x29bf21++, _0x369362(_0x29bf21 === 0x2 ? ![] : null);
        }, () => {
            var _0x5496a2 = _0x5a6554;
            throw new Error(_0x5496a2(0x143));
        }), setTimeout(() => {
            var _0x530e69 = _0x5a6554;
            expect(_0x29bf21)['to'][_0x530e69(0x13b)](0x2), _0x2dd4ae();
        }, 0xa);
    }), it(_0x3beca6(0x144), _0xbb7717 => {
        var _0x57e24a = _0x3beca6, _0x56593b = 0x0;
        async[_0x57e24a(0x136)](_0x4c8184 => _0x4c8184(null, ![]), _0x2b834a => {
            _0x56593b++, _0x2b834a(null);
        }, (_0x47896e, _0x52e1aa) => {
            var _0x1451d3 = _0x57e24a;
            expect(_0x47896e)['to']['eql'](null), expect(_0x52e1aa)['to']['be']['undefined'], expect(_0x56593b)['to'][_0x1451d3(0x13b)](0x0), _0xbb7717();
        });
    }), it(_0x3beca6(0x145), _0x9c697f => {
        var _0x4e0692 = _0x3beca6, _0x1ca233 = [], _0x449683 = 0x0;
        async[_0x4e0692(0x145)](_0x5cc022 => {
            var _0x3045a2 = _0x4e0692;
            _0x1ca233[_0x3045a2(0x137)]([
                _0x3045a2(0x139),
                _0x449683
            ]), _0x449683++, _0x5cc022(null, _0x449683);
        }, (_0x485365, _0x223f0c) => {
            var _0x590aa6 = _0x4e0692;
            return expect(_0x485365)['to'][_0x590aa6(0x13b)](_0x449683), _0x1ca233[_0x590aa6(0x137)]([
                _0x590aa6(0x138),
                _0x449683
            ]), _0x223f0c(null, _0x449683 < 0x5);
        }, (_0x51ec34, _0x25f83a) => {
            var _0x646324 = _0x4e0692;
            assert(_0x51ec34 === null, _0x51ec34 + _0x646324(0x13a)), expect(_0x25f83a)['to']['equal'](0x5, _0x646324(0x146)), expect(_0x1ca233)['to'][_0x646324(0x147)]([
                [
                    'iteratee',
                    0x0
                ],
                [
                    'test',
                    0x1
                ],
                [
                    _0x646324(0x139),
                    0x1
                ],
                [
                    _0x646324(0x138),
                    0x2
                ],
                [
                    _0x646324(0x139),
                    0x2
                ],
                [
                    'test',
                    0x3
                ],
                [
                    'iteratee',
                    0x3
                ],
                [
                    'test',
                    0x4
                ],
                [
                    'iteratee',
                    0x4
                ],
                [
                    _0x646324(0x138),
                    0x5
                ]
            ]), expect(_0x449683)['to'][_0x646324(0x13b)](0x5), _0x9c697f();
        });
    }), it(_0x3beca6(0x148), _0x13039c => {
        var _0x1b06b5 = [], _0x2bb82c = 0x0;
        async['doWhilst'](_0x4810f7 => {
            var _0x240a1f = _0x29c1;
            _0x1b06b5['push']([
                _0x240a1f(0x139),
                _0x2bb82c
            ]), _0x2bb82c++, _0x4810f7(null, _0x2bb82c);
        }, (_0xf6cb9b, _0xb0de4d) => {
            return _0x1b06b5['push']([
                'test',
                _0xf6cb9b
            ]), _0xb0de4d(null, _0xf6cb9b < 0x5);
        }, (_0x55aba0, _0x3e1d8a) => {
            var _0x320b3d = _0x29c1;
            if (_0x55aba0)
                throw _0x55aba0;
            expect(_0x3e1d8a)['to']['equal'](0x5, 'last\x20result\x20passed\x20through'), expect(_0x1b06b5)['to'][_0x320b3d(0x147)]([
                [
                    _0x320b3d(0x139),
                    0x0
                ],
                [
                    _0x320b3d(0x138),
                    0x1
                ],
                [
                    _0x320b3d(0x139),
                    0x1
                ],
                [
                    _0x320b3d(0x138),
                    0x2
                ],
                [
                    _0x320b3d(0x139),
                    0x2
                ],
                [
                    _0x320b3d(0x138),
                    0x3
                ],
                [
                    _0x320b3d(0x139),
                    0x3
                ],
                [
                    _0x320b3d(0x138),
                    0x4
                ],
                [
                    _0x320b3d(0x139),
                    0x4
                ],
                [
                    _0x320b3d(0x138),
                    0x5
                ]
            ]), expect(_0x2bb82c)['to'][_0x320b3d(0x13b)](0x5), _0x13039c();
        });
    }), it(_0x3beca6(0x149), _0x4311f1 => {
        var _0x367501 = _0x3beca6, _0x190c06 = new Error(_0x367501(0x14a));
        async['doWhilst'](_0x2bbd1b => {
            _0x2bbd1b(_0x190c06);
        }, () => {
        }, _0x5cf2f4 => {
            var _0xe1519c = _0x367501;
            expect(_0x5cf2f4)['to'][_0xe1519c(0x13b)](_0x190c06), _0x4311f1();
        });
    }), it('doWhilst\x20canceling', _0x219fe6 => {
        var _0x504c3b = _0x3beca6;
        let _0x54db0b = 0x0;
        async[_0x504c3b(0x145)](_0xc04bd6 => {
            _0x54db0b++, _0xc04bd6(_0x54db0b === 0x2 ? ![] : null);
        }, _0x3418d0 => _0x3418d0(null, !![]), () => {
            var _0x5669e6 = _0x504c3b;
            throw new Error(_0x5669e6(0x143));
        }), setTimeout(() => {
            var _0x22ee12 = _0x504c3b;
            expect(_0x54db0b)['to'][_0x22ee12(0x13b)](0x2), _0x219fe6();
        }, 0xa);
    });
});
