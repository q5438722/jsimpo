const _0x2393 = [
    'a1.2.1',
    'getState',
    'deep',
    '901711wuLrtx',
    '1vEqRwS',
    '226540BDGdpZ',
    '1MlrIIh',
    '591457yEyFGP',
    '1Wlrlcq',
    '968260hIYACv',
    '369906lmaxMe',
    '1iRsRaw',
    '132603AEQjVz',
    '7600HUBROr',
    'http://localhost:3434',
    'http://localhost:4545',
    'http://localhost:5656',
    'log',
    'task',
    'incrState',
    'suite\x201.0',
    'b1.0.1',
    'test\x201.0.1',
    'visit',
    'then',
    'test\x201.0.2',
    't1.0.2',
    't1.0.3',
    'a1.0.1',
    'suite\x201.1',
    'b1.1.2',
    'test\x201.1.1',
    't1.1.1',
    'test\x201.1.2',
    't1.1.2',
    'b1.2.1',
    'b1.2.2',
    'b1.2.3',
    'test\x201.2.1',
    't1.2.1',
    'test\x201.2.2',
    't1.2.2'
];
const _0x24534d = _0x19ec;
(function (_0x19a57a, _0x368280) {
    const _0x5d22d9 = _0x19ec;
    while (!![]) {
        try {
            const _0x589072 = parseInt(_0x5d22d9(0x1cb)) * parseInt(_0x5d22d9(0x1cc)) + -parseInt(_0x5d22d9(0x1cd)) + parseInt(_0x5d22d9(0x1ce)) * parseInt(_0x5d22d9(0x1cf)) + parseInt(_0x5d22d9(0x1d0)) * -parseInt(_0x5d22d9(0x1d1)) + -parseInt(_0x5d22d9(0x1d2)) * -parseInt(_0x5d22d9(0x1d3)) + parseInt(_0x5d22d9(0x1d4)) + parseInt(_0x5d22d9(0x1d5));
            if (_0x589072 === _0x368280)
                break;
            else
                _0x19a57a['push'](_0x19a57a['shift']());
        } catch (_0xd9a04b) {
            _0x19a57a['push'](_0x19a57a['shift']());
        }
    }
}(_0x2393, 0xc561d));
function _0x19ec(_0x2a72a9, _0x17232c) {
    return _0x19ec = function (_0x23937a, _0x19ec3b) {
        _0x23937a = _0x23937a - 0x1cb;
        let _0x48f38f = _0x2393[_0x23937a];
        return _0x48f38f;
    }, _0x19ec(_0x2a72a9, _0x17232c);
}
const urls = [
    _0x24534d(0x1d6),
    _0x24534d(0x1d7),
    _0x24534d(0x1d8)
];
function incrState(_0x462166) {
    const _0x423fa9 = _0x24534d;
    cy[_0x423fa9(0x1d9)](_0x462166), cy[_0x423fa9(0x1da)](_0x423fa9(0x1db), _0x462166);
}
describe(_0x24534d(0x1dc), () => {
    const _0x4063bd = _0x24534d;
    let _0xae2020 = null;
    before(() => {
        const _0x2e7072 = _0x19ec;
        _0xae2020 = !![], incrState(_0x2e7072(0x1dd));
    }), it(_0x4063bd(0x1de), () => {
        const _0x1676b3 = _0x4063bd;
        incrState('t1.0.1'), cy[_0x1676b3(0x1df)](urls[0x0])[_0x1676b3(0x1e0)](() => {
            expect(_0xae2020)['eq'](!![]);
        });
    }), it(_0x4063bd(0x1e1), () => {
        const _0x144ed9 = _0x4063bd;
        expect(_0xae2020)['eq'](!![]), incrState(_0x144ed9(0x1e2));
    }), it('test\x201.0.3', () => {
        const _0x3ba582 = _0x4063bd;
        incrState(_0x3ba582(0x1e3)), cy['visit'](urls[0x1])[_0x3ba582(0x1e0)](() => {
            expect(_0xae2020)['eq'](!![]);
        });
    }), after(() => {
        const _0x2fbd1e = _0x4063bd;
        incrState(_0x2fbd1e(0x1e4));
    });
}), describe(_0x24534d(0x1e5), () => {
    const _0x5c7640 = _0x24534d;
    before(() => {
        incrState('b1.1.1'), cy['visit'](urls[0x0]);
    }), before(() => {
        const _0x2f6afb = _0x19ec;
        incrState(_0x2f6afb(0x1e6));
    }), it(_0x5c7640(0x1e7), () => {
        const _0x140b9a = _0x5c7640;
        incrState(_0x140b9a(0x1e8));
    }), it(_0x5c7640(0x1e9), () => {
        const _0x556f30 = _0x5c7640;
        incrState(_0x556f30(0x1ea));
    });
}), describe('suite\x201.2', () => {
    const _0x4725f5 = _0x24534d;
    before(() => {
        const _0x17084a = _0x19ec;
        incrState(_0x17084a(0x1eb));
    }), beforeEach(() => {
        const _0x551dd3 = _0x19ec;
        incrState(_0x551dd3(0x1ec)), cy[_0x551dd3(0x1df)](urls[0x1]);
    }), beforeEach(() => {
        const _0x1bab90 = _0x19ec;
        incrState(_0x1bab90(0x1ed));
    }), it(_0x4725f5(0x1ee), () => {
        const _0x14941f = _0x4725f5;
        incrState(_0x14941f(0x1ef));
    }), it(_0x4725f5(0x1f0), () => {
        const _0x289d11 = _0x4725f5;
        incrState(_0x289d11(0x1f1));
    }), after(() => {
        const _0x4e3ad6 = _0x4725f5;
        incrState(_0x4e3ad6(0x1f2));
    });
}), after(() => {
    const _0x5566be = _0x24534d;
    cy['task'](_0x5566be(0x1f3))[_0x5566be(0x1e0)](_0x89d3a1 => {
        const _0x252cf3 = _0x5566be;
        expect(_0x89d3a1)[_0x252cf3(0x1f4)]['eq']({
            'b1.0.1': 0x3,
            't1.0.1': 0x2,
            't1.0.2': 0x1,
            't1.0.3': 0x2,
            'a1.0.1': 0x1,
            'b1.1.1': 0x2,
            'b1.1.2': 0x1,
            't1.1.1': 0x1,
            't1.1.2': 0x1,
            'b1.2.1': 0x2,
            'b1.2.2': 0x3,
            'b1.2.3': 0x2,
            't1.2.1': 0x1,
            't1.2.2': 0x1,
            'a1.2.1': 0x1
        });
    });
});
