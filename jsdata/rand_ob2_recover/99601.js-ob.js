const request = require('../../test-helpers/context')[_0x1b1315(304)], assert = require(_0x1b1315(305));
describe(_0x1b1315(306), () => {
    const _0x4bfcae = _0x1b1315;
    describe(_0x4bfcae(307), () => {
        const _0x32101c = _0x4bfcae;
        it(_0x32101c(308), () => {
            const _0x53ada3 = _0x32101c, _0x34e377 = request();
            assert(_0x34e377[_0x53ada3(309)] === '');
        });
    }), describe(_0x4bfcae(310), () => {
        const _0x53d4dc = _0x4bfcae;
        it(_0x53d4dc(308), () => {
            const _0x1d4ef6 = _0x53d4dc, _0x57ccff = request();
            _0x57ccff[_0x1d4ef6(311)][_0x1d4ef6(312)] = _0x1d4ef6(313), assert(_0x57ccff[_0x1d4ef6(309)] === '');
        });
    }), describe(_0x4bfcae(314), () => {
        const _0x1e9ce3 = _0x4bfcae;
        it(_0x1e9ce3(315), () => {
            const _0x5c6cd0 = _0x1e9ce3, _0x373392 = request();
            _0x373392[_0x5c6cd0(311)][_0x5c6cd0(312)] = 'text/plain; charset=utf-8', assert[_0x5c6cd0(316)](_0x373392[_0x5c6cd0(309)], _0x5c6cd0(317));
        }), it(_0x1e9ce3(318), () => {
            const _0xebf2a4 = _0x1e9ce3, _0x356f20 = request();
            _0x356f20[_0xebf2a4(311)]['content-type'] = _0xebf2a4(319), assert['strictEqual'](_0x356f20['charset'], '');
        });
    });
});