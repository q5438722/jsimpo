const _0x33b8 = ['details', 'time', 'returns time as a number', 'should have logged 2 lines', 'DdEMT', '1600556ddPgmU', '151ijfPLW', '3257XunBpK', '825203DGQBLt', '2xpeUdv', '55355wcEHHF', '49886QExJsr', '2OBkkHC', '1634591RuxNmD', '1975526VXVnWX', 'tap', '../fixtures/mock-npm', 'test', 'pings', 'PING', 'should log a PING', 'should log the registry url', 'should log a PONG', 'should log the elapsed milliseconds', 'npm ping', 'https://registry.npmjs.org', '../../lib/ping.js', 'plan', 'sqZHj', 'qesTP', 'YnJqj', 'equal', 'GCbIS', 'jbEdx', 'jSQxY', 'match', 'SgcmF', 'exec', 'error', 'ZeWBN', 'rviPV', 'pings and logs details', 'passes flatOptions', 'PONG', 'should log JSON stringified details', 'should have logged 3 lines', 'should be able to ping', 'XYLDQ', 'data', 'mock', 'ZnTLn', 'registry', 'NgANn', 'HhCEd', 'BVMEI', 'mJAZe', 'akHtD', 'parse', 'DIaRo', 'ycHfs', 'jHgiY', 'pings and returns json', 'prints returned details', 'number', 'ZTNtO', 'pbPVy', 'dtgAi', 'CwazN', 'vicsG', 'SzSCh'];

function _0x2e50(_0x3119a4, _0x4bf50d) {
    return _0x2e50 = function (_0xbf3749, _0x1412c7) {
        _0xbf3749 = _0xbf3749 - 417;
        const _0x577912 = _0x33b8[_0xbf3749];

        return _0x577912;
    }, _0x2e50(_0x3119a4, _0x4bf50d);
}
const _0x57c688 = _0x2e50;

(function (_0x4d83f5, _0x4f2fc0) {
    const _0x4b6bec = _0x2e50;

    while (true) {
        try {
            const _0x1b8b52 = parseInt(_0x4b6bec(0x1a1)) + parseInt(_0x4b6bec(0x1a2)) * parseInt(_0x4b6bec(0x1a3)) + -parseInt(_0x4b6bec(0x1a4)) * parseInt(_0x4b6bec(0x1a5)) + -parseInt(_0x4b6bec(0x1a6)) + parseInt(_0x4b6bec(0x1a7)) * parseInt(_0x4b6bec(0x1a8)) + -parseInt(_0x4b6bec(0x1a9)) + parseInt(_0x4b6bec(0x1aa));

            if (_0x1b8b52 === _0x4f2fc0) break;else _0x4d83f5.push(_0x4d83f5.shift());
        } catch (_0x4fcd28) {
            _0x4d83f5.push(_0x4d83f5.shift());
        }
    }
})(_0x33b8, 827309);

const t = require(_0x57c688(0x1ab));

var { fake: mockNpm } = require(_0x57c688(0x1ac));

t[_0x57c688(0x1ad)](_0x57c688(0x1ae), _0x45eec3 => {
    const _0x26af2b = _0x57c688;
    const _0x1dd033 = {
        'YnJqj': function (_0x469140, _0x281e51) {
            return _0x469140 === _0x281e51;
        },
        'VvsLO': _0x26af2b(0x1af),
        'udFyj': _0x26af2b(0x1b0),
        'GCbIS': _0x26af2b(0x1b1),
        'jbEdx': 'PONG',
        'jSQxY': _0x26af2b(0x1b2),
        'SgcmF': _0x26af2b(0x1b3),
        'huxZv': 'should have logged 2 lines',
        'ZeWBN': _0x26af2b(0x1b4),
        'rviPV': 'should be able to ping',
        'sqZHj': _0x26af2b(0x1b5),
        'qesTP': _0x26af2b(0x1b6)
    };

    _0x45eec3[_0x26af2b(0x1b7)](8);

    const _0x588d5b = _0x1dd033[_0x26af2b(0x1b8)];

    var _0x507fc1 = 0;

    const _0x3e4d55 = _0x45eec3.mock(_0x1dd033[_0x26af2b(0x1b9)], {
        '../../lib/utils/ping.js': function (_0x55e19d) {
            return _0x45eec3.equal(_0x55e19d.registry, _0x588d5b, 'passes flatOptions'), {};
        },
        'npmlog': {
            'notice': (_0x5c2cad, _0x4ce27e) => {
                const _0x1be503 = _0x26af2b;

                ++_0x507fc1, _0x1dd033[_0x1be503(0x1ba)](_0x507fc1, 1) ? (_0x45eec3[_0x1be503(0x1bb)](_0x5c2cad, _0x1dd033.VvsLO, _0x1dd033.udFyj), _0x45eec3[_0x1be503(0x1bb)](_0x4ce27e, _0x588d5b, _0x1dd033[_0x1be503(0x1bc)])) : (_0x45eec3.equal(_0x5c2cad, _0x1dd033[_0x1be503(0x1bd)], _0x1dd033[_0x1be503(0x1be)]), _0x45eec3[_0x1be503(0x1bf)](_0x4ce27e, /\d+ms/, _0x1dd033[_0x1be503(0x1c0)]));
            }
        }
    });

    const _0x190871 = mockNpm({
        'config': { 'registry': _0x588d5b },
        'flatOptions': { 'registry': _0x588d5b }
    });

    const _0x4a8412 = new _0x3e4d55(_0x190871);

    _0x4a8412[_0x26af2b(0x1c1)]([], _0x18fe2b => {
        const _0x3d4b74 = _0x26af2b;

        _0x45eec3[_0x3d4b74(0x1bb)](_0x507fc1, 2, _0x1dd033.huxZv), _0x45eec3[_0x3d4b74(0x1c2)](_0x18fe2b, _0x1dd033[_0x3d4b74(0x1c3)]), _0x45eec3.ok(_0x1dd033[_0x3d4b74(0x1c4)]);
    });
}), t[_0x57c688(0x1ad)](_0x57c688(0x1c5), _0x3c2bf => {
    const _0x176a91 = _0x57c688;
    const _0x51557a = {
        'pUUUr': _0x176a91(0x1c6),
        'XSBkl': _0x176a91(0x1af),
        'NgANn': _0x176a91(0x1b0),
        'HhCEd': 'should log the registry url',
        'BVMEI': function (_0x1b0015, _0x24f5c4) {
            return _0x1b0015 === _0x24f5c4;
        },
        'mJAZe': _0x176a91(0x1c7),
        'akHtD': _0x176a91(0x1b2),
        'ggOpQ': _0x176a91(0x1c8),
        'DIaRo': _0x176a91(0x1c9),
        'ycHfs': _0x176a91(0x1b4),
        'jHgiY': _0x176a91(0x1ca),
        'XYLDQ': 'https://registry.npmjs.org',
        'ZnTLn': _0x176a91(0x1b6),
        'bsiLQ': function (_0xe5f811, _0x3c62b4) {
            return _0xe5f811(_0x3c62b4);
        }
    };

    _0x3c2bf[_0x176a91(0x1b7)](10);

    const _0xe813a0 = _0x51557a[_0x176a91(0x1cb)];

    const _0x3fd0d2 = { 'extra': _0x176a91(0x1cc) };
    var _0x55fa13 = 0;

    const _0xe1ac78 = _0x3c2bf[_0x176a91(0x1cd)](_0x51557a[_0x176a91(0x1ce)], {
        '../../lib/utils/ping.js': function (_0x139ad8) {
            const _0x334ca1 = _0x176a91;

            return _0x3c2bf[_0x334ca1(0x1bb)](_0x139ad8[_0x334ca1(0x1cf)], _0xe813a0, _0x51557a.pUUUr), _0x3fd0d2;
        },
        'npmlog': {
            'notice': (_0x433d13, _0x12222c) => {
                const _0x1a4798 = _0x176a91;

                ++_0x55fa13;
                if (_0x55fa13 === 1) _0x3c2bf[_0x1a4798(0x1bb)](_0x433d13, _0x51557a.XSBkl, _0x51557a[_0x1a4798(0x1d0)]), _0x3c2bf[_0x1a4798(0x1bb)](_0x12222c, _0xe813a0, _0x51557a[_0x1a4798(0x1d1)]);else {
                    if (_0x51557a[_0x1a4798(0x1d2)](_0x55fa13, 2)) _0x3c2bf[_0x1a4798(0x1bb)](_0x433d13, _0x51557a[_0x1a4798(0x1d3)], _0x51557a[_0x1a4798(0x1d4)]), _0x3c2bf.match(_0x12222c, /\d+ms/, _0x1a4798(0x1b3));else {
                        _0x3c2bf[_0x1a4798(0x1bb)](_0x433d13, _0x51557a[_0x1a4798(0x1d3)], _0x1a4798(0x1b2));

                        const _0x5a8f1b = JSON[_0x1a4798(0x1d5)](_0x12222c);

                        _0x3c2bf[_0x1a4798(0x1bf)](_0x5a8f1b, _0x3fd0d2, _0x51557a.ggOpQ);
                    }
                }
            }
        }
    });

    const _0x386a5f = _0x51557a.bsiLQ(mockNpm, {
        'config': { 'registry': _0xe813a0 },
        'flatOptions': { 'registry': _0xe813a0 }
    });

    const _0x54c7dc = new _0xe1ac78(_0x386a5f);

    _0x54c7dc[_0x176a91(0x1c1)]([], _0x15fe98 => {
        const _0x536220 = _0x176a91;

        _0x3c2bf[_0x536220(0x1bb)](_0x55fa13, 3, _0x51557a[_0x536220(0x1d6)]), _0x3c2bf[_0x536220(0x1c2)](_0x15fe98, _0x51557a[_0x536220(0x1d7)]), _0x3c2bf.ok(_0x51557a[_0x536220(0x1d8)]);
    });
}), t[_0x57c688(0x1ad)](_0x57c688(0x1d9), _0x5843de => {
    const _0x52ad0f = _0x57c688;
    const _0x2876bf = {
        'dtgAi': 'passes flatOptions',
        'iJjsO': function (_0x2da221, _0x417d0a) {
            return _0x2da221 === _0x417d0a;
        },
        'nGVHj': _0x52ad0f(0x1af),
        'CwazN': _0x52ad0f(0x1b1),
        'vicsG': 'should log a PONG',
        'SzSCh': 'should log the elapsed milliseconds',
        'QiBVF': _0x52ad0f(0x1da),
        'eKGNK': _0x52ad0f(0x1db),
        'DdEMT': 'should be able to ping',
        'ZTNtO': 'data',
        'pbPVy': _0x52ad0f(0x1b6)
    };

    _0x5843de[_0x52ad0f(0x1b7)](11);

    const _0x27ed6d = _0x52ad0f(0x1b5);

    const _0x1f7388 = { 'extra': _0x2876bf[_0x52ad0f(0x1dc)] };
    var _0xc5ae65 = 0;

    const _0x301ebc = _0x5843de[_0x52ad0f(0x1cd)](_0x2876bf[_0x52ad0f(0x1dd)], {
        '../../lib/utils/ping.js': function (_0x53abd2) {
            const _0x221a42 = _0x52ad0f;

            return _0x5843de[_0x221a42(0x1bb)](_0x53abd2.registry, _0x27ed6d, _0x2876bf[_0x221a42(0x1de)]), _0x1f7388;
        },
        'npmlog': {
            'notice': (_0xa407a0, _0x15691d) => {
                const _0x21cc0c = _0x52ad0f;

                ++_0xc5ae65, _0x2876bf.iJjsO(_0xc5ae65, 1) ? (_0x5843de.equal(_0xa407a0, _0x2876bf.nGVHj, _0x21cc0c(0x1b0)), _0x5843de[_0x21cc0c(0x1bb)](_0x15691d, _0x27ed6d, _0x2876bf[_0x21cc0c(0x1df)])) : (_0x5843de.equal(_0xa407a0, 'PONG', _0x2876bf[_0x21cc0c(0x1e0)]), _0x5843de[_0x21cc0c(0x1bf)](_0x15691d, /\d+ms/, _0x2876bf[_0x21cc0c(0x1e1)]));
            }
        }
    });

    const _0x128c71 = mockNpm({
        'config': {
            'registry': _0x27ed6d,
            'json': true
        },
        'flatOptions': { 'registry': _0x27ed6d },
        'output': function (_0x2e3149) {
            const _0x37e209 = _0x52ad0f;

            const _0x2cc3f1 = JSON.parse(_0x2e3149);

            _0x5843de.equal(_0x2cc3f1[_0x37e209(0x1cf)], _0x27ed6d, 'returns the correct registry url'), _0x5843de.match(_0x2cc3f1[_0x37e209(0x1e2)], _0x1f7388, _0x2876bf.QiBVF), _0x5843de.type(_0x2cc3f1[_0x37e209(0x1e3)], _0x2876bf.eKGNK, _0x37e209(0x1e4));
        }
    });

    const _0xff99c0 = new _0x301ebc(_0x128c71);

    _0xff99c0.exec([], _0x537b63 => {
        const _0x5b516e = _0x52ad0f;

        _0x5843de[_0x5b516e(0x1bb)](_0xc5ae65, 2, _0x5b516e(0x1e5)), _0x5843de[_0x5b516e(0x1c2)](_0x537b63, _0x5b516e(0x1b4)), _0x5843de.ok(_0x2876bf[_0x5b516e(0x1e6)]);
    });
});
