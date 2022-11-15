function _0x19ec(_0x2a72a9, _0x17232c) {
    return _0x19ec = function (_0x23937a, _0x19ec3b) {
        _0x23937a = _0x23937a - 459;
        let _0x48f38f = _0x2393[_0x23937a];
        return _0x48f38f;
    }, _0x19ec(_0x2a72a9, _0x17232c);
}
const urls = [
    _0x24534d(470),
    _0x24534d(471),
    _0x24534d(472)
];
function incrState(_0x462166) {
    const _0x423fa9 = _0x24534d;
    cy[_0x423fa9(473)](_0x462166), cy[_0x423fa9(474)](_0x423fa9(475), _0x462166);
}
describe(_0x24534d(476), () => {
    const _0x4063bd = _0x24534d;
    let _0xae2020 = null;
    before(() => {
        const _0x2e7072 = _0x19ec;
        _0xae2020 = !![], incrState(_0x2e7072(477));
    }), it(_0x4063bd(478), () => {
        const _0x1676b3 = _0x4063bd;
        incrState('t1.0.1'), cy[_0x1676b3(479)](urls[0])[_0x1676b3(480)](() => {
            expect(_0xae2020)['eq'](!![]);
        });
    }), it(_0x4063bd(481), () => {
        const _0x144ed9 = _0x4063bd;
        expect(_0xae2020)['eq'](!![]), incrState(_0x144ed9(482));
    }), it('test 1.0.3', () => {
        const _0x3ba582 = _0x4063bd;
        incrState(_0x3ba582(483)), cy['visit'](urls[1])[_0x3ba582(480)](() => {
            expect(_0xae2020)['eq'](!![]);
        });
    }), after(() => {
        const _0x2fbd1e = _0x4063bd;
        incrState(_0x2fbd1e(484));
    });
}), describe(_0x24534d(485), () => {
    const _0x5c7640 = _0x24534d;
    before(() => {
        incrState('b1.1.1'), cy['visit'](urls[0]);
    }), before(() => {
        const _0x2f6afb = _0x19ec;
        incrState(_0x2f6afb(486));
    }), it(_0x5c7640(487), () => {
        const _0x140b9a = _0x5c7640;
        incrState(_0x140b9a(488));
    }), it(_0x5c7640(489), () => {
        const _0x556f30 = _0x5c7640;
        incrState(_0x556f30(490));
    });
}), describe('suite 1.2', () => {
    const _0x4725f5 = _0x24534d;
    before(() => {
        const _0x17084a = _0x19ec;
        incrState(_0x17084a(491));
    }), beforeEach(() => {
        const _0x551dd3 = _0x19ec;
        incrState(_0x551dd3(492)), cy[_0x551dd3(479)](urls[1]);
    }), beforeEach(() => {
        const _0x1bab90 = _0x19ec;
        incrState(_0x1bab90(493));
    }), it(_0x4725f5(494), () => {
        const _0x14941f = _0x4725f5;
        incrState(_0x14941f(495));
    }), it(_0x4725f5(496), () => {
        const _0x289d11 = _0x4725f5;
        incrState(_0x289d11(497));
    }), after(() => {
        const _0x4e3ad6 = _0x4725f5;
        incrState(_0x4e3ad6(498));
    });
}), after(() => {
    const _0x5566be = _0x24534d;
    cy['task'](_0x5566be(499))[_0x5566be(480)](_0x89d3a1 => {
        const _0x252cf3 = _0x5566be;
        expect(_0x89d3a1)[_0x252cf3(500)]['eq']({
            'b1.0.1': 3,
            't1.0.1': 2,
            't1.0.2': 1,
            't1.0.3': 2,
            'a1.0.1': 1,
            'b1.1.1': 2,
            'b1.1.2': 1,
            't1.1.1': 1,
            't1.1.2': 1,
            'b1.2.1': 2,
            'b1.2.2': 3,
            'b1.2.3': 2,
            't1.2.1': 1,
            't1.2.2': 1,
            'a1.2.1': 1
        });
    });
});