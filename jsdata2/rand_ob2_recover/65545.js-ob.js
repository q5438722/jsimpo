const t = require(_0x150388(313)), {fake: mockNpm} = require(_0x150388(314));
function _0x3276(_0x1f783c, _0x118020) {
    return _0x3276 = function (_0x23f363, _0x3276d2) {
        _0x23f363 = _0x23f363 - 303;
        let _0x12423b = _0x23f3[_0x23f363];
        return _0x12423b;
    }, _0x3276(_0x1f783c, _0x118020);
}
t[_0x150388(315)](_0x150388(316), _0x4d0c9c => {
    const _0x2cb479 = _0x150388;
    _0x4d0c9c['plan'](8);
    const _0x2ea0a7 = 'https://registry.npmjs.org';
    let _0x4d997e = 0;
    const _0x4495a3 = _0x4d0c9c['mock'](_0x2cb479(317), {
            '../../lib/utils/ping.js': function (_0x461eba) {
                const _0x1c1b77 = _0x2cb479;
                return _0x4d0c9c[_0x1c1b77(318)](_0x461eba[_0x1c1b77(319)], _0x2ea0a7, _0x1c1b77(320)), {};
            },
            'npmlog': {
                'notice': (_0x31e94a, _0xaf1376) => {
                    const _0x430219 = _0x2cb479;
                    ++_0x4d997e, _0x4d997e === 1 ? (_0x4d0c9c[_0x430219(318)](_0x31e94a, _0x430219(321), _0x430219(322)), _0x4d0c9c[_0x430219(318)](_0xaf1376, _0x2ea0a7, 'should log the registry url')) : (_0x4d0c9c[_0x430219(318)](_0x31e94a, 'PONG', _0x430219(323)), _0x4d0c9c[_0x430219(324)](_0xaf1376, /\d+ms/, _0x430219(325)));
                }
            }
        }), _0x1688fd = mockNpm({
            'config': { 'registry': _0x2ea0a7 },
            'flatOptions': { 'registry': _0x2ea0a7 }
        }), _0x5d88ee = new _0x4495a3(_0x1688fd);
    _0x5d88ee[_0x2cb479(326)]([], _0x33995e => {
        const _0x246d44 = _0x2cb479;
        _0x4d0c9c[_0x246d44(318)](_0x4d997e, 2, 'should have logged 2 lines'), _0x4d0c9c[_0x246d44(327)](_0x33995e, _0x246d44(328)), _0x4d0c9c['ok'](_0x246d44(329));
    });
}), t[_0x150388(315)](_0x150388(330), _0x251794 => {
    const _0x53f900 = _0x150388;
    _0x251794[_0x53f900(331)](10);
    const _0xcef05 = _0x53f900(332), _0xe92658 = { 'extra': _0x53f900(333) };
    let _0x2ea9a9 = 0;
    const _0xb387ec = _0x251794[_0x53f900(334)](_0x53f900(317), {
            '../../lib/utils/ping.js': function (_0x375819) {
                const _0x2a459f = _0x53f900;
                return _0x251794[_0x2a459f(318)](_0x375819['registry'], _0xcef05, 'passes flatOptions'), _0xe92658;
            },
            'npmlog': {
                'notice': (_0x55978a, _0x297177) => {
                    const _0x40e445 = _0x53f900;
                    ++_0x2ea9a9;
                    if (_0x2ea9a9 === 1)
                        _0x251794['equal'](_0x55978a, _0x40e445(321), _0x40e445(322)), _0x251794[_0x40e445(318)](_0x297177, _0xcef05, 'should log the registry url');
                    else {
                        if (_0x2ea9a9 === 2)
                            _0x251794[_0x40e445(318)](_0x55978a, _0x40e445(335), _0x40e445(323)), _0x251794[_0x40e445(324)](_0x297177, /\d+ms/, 'should log the elapsed milliseconds');
                        else {
                            _0x251794[_0x40e445(318)](_0x55978a, _0x40e445(335), 'should log a PONG');
                            const _0x4b84db = JSON['parse'](_0x297177);
                            _0x251794[_0x40e445(324)](_0x4b84db, _0xe92658, 'should log JSON stringified details');
                        }
                    }
                }
            }
        }), _0x2f0af6 = mockNpm({
            'config': { 'registry': _0xcef05 },
            'flatOptions': { 'registry': _0xcef05 }
        }), _0x258c84 = new _0xb387ec(_0x2f0af6);
    _0x258c84[_0x53f900(326)]([], _0x38996b => {
        const _0x2b4ea4 = _0x53f900;
        _0x251794['equal'](_0x2ea9a9, 3, 'should have logged 3 lines'), _0x251794[_0x2b4ea4(327)](_0x38996b, _0x2b4ea4(328)), _0x251794['ok'](_0x2b4ea4(329));
    });
}), t[_0x150388(315)]('pings and returns json', _0x1259ce => {
    const _0x4d4c95 = _0x150388;
    _0x1259ce[_0x4d4c95(331)](11);
    const _0x54d181 = _0x4d4c95(332), _0xafbe55 = { 'extra': _0x4d4c95(333) };
    let _0x88361b = 0;
    const _0x3ecfd1 = _0x1259ce[_0x4d4c95(334)](_0x4d4c95(317), {
            '../../lib/utils/ping.js': function (_0x5c09e2) {
                const _0x1e873a = _0x4d4c95;
                return _0x1259ce[_0x1e873a(318)](_0x5c09e2[_0x1e873a(319)], _0x54d181, _0x1e873a(320)), _0xafbe55;
            },
            'npmlog': {
                'notice': (_0x34645c, _0xcce9e3) => {
                    const _0x2e0bbb = _0x4d4c95;
                    ++_0x88361b, _0x88361b === 1 ? (_0x1259ce[_0x2e0bbb(318)](_0x34645c, _0x2e0bbb(321), _0x2e0bbb(322)), _0x1259ce[_0x2e0bbb(318)](_0xcce9e3, _0x54d181, _0x2e0bbb(336))) : (_0x1259ce['equal'](_0x34645c, _0x2e0bbb(335), _0x2e0bbb(323)), _0x1259ce[_0x2e0bbb(324)](_0xcce9e3, /\d+ms/, _0x2e0bbb(325)));
                }
            }
        }), _0x301b77 = mockNpm({
            'config': {
                'registry': _0x54d181,
                'json': !![]
            },
            'flatOptions': { 'registry': _0x54d181 },
            'output': function (_0x53df8d) {
                const _0x4bf38c = _0x4d4c95, _0x44898d = JSON['parse'](_0x53df8d);
                _0x1259ce[_0x4bf38c(318)](_0x44898d[_0x4bf38c(319)], _0x54d181, _0x4bf38c(337)), _0x1259ce[_0x4bf38c(324)](_0x44898d[_0x4bf38c(338)], _0xafbe55, _0x4bf38c(339)), _0x1259ce['type'](_0x44898d[_0x4bf38c(340)], _0x4bf38c(341), _0x4bf38c(342));
            }
        }), _0x5f4cc2 = new _0x3ecfd1(_0x301b77);
    _0x5f4cc2[_0x4d4c95(326)]([], _0x4ce3bc => {
        const _0x20af97 = _0x4d4c95;
        _0x1259ce['equal'](_0x88361b, 2, 'should have logged 2 lines'), _0x1259ce[_0x20af97(327)](_0x4ce3bc, _0x20af97(328)), _0x1259ce['ok']('should be able to ping');
    });
});