const _0x23f3 = [
    '1384rRgPYW',
    'tap',
    '../fixtures/mock-npm',
    'test',
    'pings',
    '../../lib/ping.js',
    'equal',
    'registry',
    'passes\x20flatOptions',
    'PING',
    'should\x20log\x20a\x20PING',
    'should\x20log\x20a\x20PONG',
    'match',
    'should\x20log\x20the\x20elapsed\x20milliseconds',
    'exec',
    'error',
    'npm\x20ping',
    'should\x20be\x20able\x20to\x20ping',
    'pings\x20and\x20logs\x20details',
    'plan',
    'https://registry.npmjs.org',
    'data',
    'mock',
    'PONG',
    'should\x20log\x20the\x20registry\x20url',
    'returns\x20the\x20correct\x20registry\x20url',
    'details',
    'prints\x20returned\x20details',
    'time',
    'number',
    'returns\x20time\x20as\x20a\x20number',
    '373185nPJMjb',
    '411973WFcgxk',
    '11VuNkoA',
    '15088IaIglG',
    '211619QMUTkO',
    '279968lOTszR',
    '1nbUnBe',
    '748897XNBNmw',
    '347TxmVSH'
];
const _0x150388 = _0x3276;
(function (_0x487631, _0x44f467) {
    const _0x109119 = _0x3276;
    while (!![]) {
        try {
            const _0x31ea90 = parseInt(_0x109119(0x12f)) + parseInt(_0x109119(0x130)) + parseInt(_0x109119(0x131)) * -parseInt(_0x109119(0x132)) + -parseInt(_0x109119(0x133)) + -parseInt(_0x109119(0x134)) + -parseInt(_0x109119(0x135)) * -parseInt(_0x109119(0x136)) + -parseInt(_0x109119(0x137)) * parseInt(_0x109119(0x138));
            if (_0x31ea90 === _0x44f467)
                break;
            else
                _0x487631['push'](_0x487631['shift']());
        } catch (_0x415269) {
            _0x487631['push'](_0x487631['shift']());
        }
    }
}(_0x23f3, 0x60bdc));
const t = require(_0x150388(0x139)), {fake: mockNpm} = require(_0x150388(0x13a));
function _0x3276(_0x1f783c, _0x118020) {
    return _0x3276 = function (_0x23f363, _0x3276d2) {
        _0x23f363 = _0x23f363 - 0x12f;
        let _0x12423b = _0x23f3[_0x23f363];
        return _0x12423b;
    }, _0x3276(_0x1f783c, _0x118020);
}
t[_0x150388(0x13b)](_0x150388(0x13c), _0x4d0c9c => {
    const _0x2cb479 = _0x150388;
    _0x4d0c9c['plan'](0x8);
    const _0x2ea0a7 = 'https://registry.npmjs.org';
    let _0x4d997e = 0x0;
    const _0x4495a3 = _0x4d0c9c['mock'](_0x2cb479(0x13d), {
            '../../lib/utils/ping.js': function (_0x461eba) {
                const _0x1c1b77 = _0x2cb479;
                return _0x4d0c9c[_0x1c1b77(0x13e)](_0x461eba[_0x1c1b77(0x13f)], _0x2ea0a7, _0x1c1b77(0x140)), {};
            },
            'npmlog': {
                'notice': (_0x31e94a, _0xaf1376) => {
                    const _0x430219 = _0x2cb479;
                    ++_0x4d997e, _0x4d997e === 0x1 ? (_0x4d0c9c[_0x430219(0x13e)](_0x31e94a, _0x430219(0x141), _0x430219(0x142)), _0x4d0c9c[_0x430219(0x13e)](_0xaf1376, _0x2ea0a7, 'should\x20log\x20the\x20registry\x20url')) : (_0x4d0c9c[_0x430219(0x13e)](_0x31e94a, 'PONG', _0x430219(0x143)), _0x4d0c9c[_0x430219(0x144)](_0xaf1376, /\d+ms/, _0x430219(0x145)));
                }
            }
        }), _0x1688fd = mockNpm({
            'config': { 'registry': _0x2ea0a7 },
            'flatOptions': { 'registry': _0x2ea0a7 }
        }), _0x5d88ee = new _0x4495a3(_0x1688fd);
    _0x5d88ee[_0x2cb479(0x146)]([], _0x33995e => {
        const _0x246d44 = _0x2cb479;
        _0x4d0c9c[_0x246d44(0x13e)](_0x4d997e, 0x2, 'should\x20have\x20logged\x202\x20lines'), _0x4d0c9c[_0x246d44(0x147)](_0x33995e, _0x246d44(0x148)), _0x4d0c9c['ok'](_0x246d44(0x149));
    });
}), t[_0x150388(0x13b)](_0x150388(0x14a), _0x251794 => {
    const _0x53f900 = _0x150388;
    _0x251794[_0x53f900(0x14b)](0xa);
    const _0xcef05 = _0x53f900(0x14c), _0xe92658 = { 'extra': _0x53f900(0x14d) };
    let _0x2ea9a9 = 0x0;
    const _0xb387ec = _0x251794[_0x53f900(0x14e)](_0x53f900(0x13d), {
            '../../lib/utils/ping.js': function (_0x375819) {
                const _0x2a459f = _0x53f900;
                return _0x251794[_0x2a459f(0x13e)](_0x375819['registry'], _0xcef05, 'passes\x20flatOptions'), _0xe92658;
            },
            'npmlog': {
                'notice': (_0x55978a, _0x297177) => {
                    const _0x40e445 = _0x53f900;
                    ++_0x2ea9a9;
                    if (_0x2ea9a9 === 0x1)
                        _0x251794['equal'](_0x55978a, _0x40e445(0x141), _0x40e445(0x142)), _0x251794[_0x40e445(0x13e)](_0x297177, _0xcef05, 'should\x20log\x20the\x20registry\x20url');
                    else {
                        if (_0x2ea9a9 === 0x2)
                            _0x251794[_0x40e445(0x13e)](_0x55978a, _0x40e445(0x14f), _0x40e445(0x143)), _0x251794[_0x40e445(0x144)](_0x297177, /\d+ms/, 'should\x20log\x20the\x20elapsed\x20milliseconds');
                        else {
                            _0x251794[_0x40e445(0x13e)](_0x55978a, _0x40e445(0x14f), 'should\x20log\x20a\x20PONG');
                            const _0x4b84db = JSON['parse'](_0x297177);
                            _0x251794[_0x40e445(0x144)](_0x4b84db, _0xe92658, 'should\x20log\x20JSON\x20stringified\x20details');
                        }
                    }
                }
            }
        }), _0x2f0af6 = mockNpm({
            'config': { 'registry': _0xcef05 },
            'flatOptions': { 'registry': _0xcef05 }
        }), _0x258c84 = new _0xb387ec(_0x2f0af6);
    _0x258c84[_0x53f900(0x146)]([], _0x38996b => {
        const _0x2b4ea4 = _0x53f900;
        _0x251794['equal'](_0x2ea9a9, 0x3, 'should\x20have\x20logged\x203\x20lines'), _0x251794[_0x2b4ea4(0x147)](_0x38996b, _0x2b4ea4(0x148)), _0x251794['ok'](_0x2b4ea4(0x149));
    });
}), t[_0x150388(0x13b)]('pings\x20and\x20returns\x20json', _0x1259ce => {
    const _0x4d4c95 = _0x150388;
    _0x1259ce[_0x4d4c95(0x14b)](0xb);
    const _0x54d181 = _0x4d4c95(0x14c), _0xafbe55 = { 'extra': _0x4d4c95(0x14d) };
    let _0x88361b = 0x0;
    const _0x3ecfd1 = _0x1259ce[_0x4d4c95(0x14e)](_0x4d4c95(0x13d), {
            '../../lib/utils/ping.js': function (_0x5c09e2) {
                const _0x1e873a = _0x4d4c95;
                return _0x1259ce[_0x1e873a(0x13e)](_0x5c09e2[_0x1e873a(0x13f)], _0x54d181, _0x1e873a(0x140)), _0xafbe55;
            },
            'npmlog': {
                'notice': (_0x34645c, _0xcce9e3) => {
                    const _0x2e0bbb = _0x4d4c95;
                    ++_0x88361b, _0x88361b === 0x1 ? (_0x1259ce[_0x2e0bbb(0x13e)](_0x34645c, _0x2e0bbb(0x141), _0x2e0bbb(0x142)), _0x1259ce[_0x2e0bbb(0x13e)](_0xcce9e3, _0x54d181, _0x2e0bbb(0x150))) : (_0x1259ce['equal'](_0x34645c, _0x2e0bbb(0x14f), _0x2e0bbb(0x143)), _0x1259ce[_0x2e0bbb(0x144)](_0xcce9e3, /\d+ms/, _0x2e0bbb(0x145)));
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
                _0x1259ce[_0x4bf38c(0x13e)](_0x44898d[_0x4bf38c(0x13f)], _0x54d181, _0x4bf38c(0x151)), _0x1259ce[_0x4bf38c(0x144)](_0x44898d[_0x4bf38c(0x152)], _0xafbe55, _0x4bf38c(0x153)), _0x1259ce['type'](_0x44898d[_0x4bf38c(0x154)], _0x4bf38c(0x155), _0x4bf38c(0x156));
            }
        }), _0x5f4cc2 = new _0x3ecfd1(_0x301b77);
    _0x5f4cc2[_0x4d4c95(0x146)]([], _0x4ce3bc => {
        const _0x20af97 = _0x4d4c95;
        _0x1259ce['equal'](_0x88361b, 0x2, 'should\x20have\x20logged\x202\x20lines'), _0x1259ce[_0x20af97(0x147)](_0x4ce3bc, _0x20af97(0x148)), _0x1259ce['ok']('should\x20be\x20able\x20to\x20ping');
    });
});
