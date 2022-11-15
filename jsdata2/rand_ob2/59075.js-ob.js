const _0xb4e3 = [
    '11963ENvDnh',
    '31tReMAM',
    '4KdjXfY',
    '156719gEVWNq',
    '19YrXGTE',
    '41359XTawWo',
    'start',
    'Checks\x20format\x20of\x20console.timeEnd\x20output',
    'Runtime',
    'enable',
    'onConsoleAPICalled',
    'log',
    'params',
    'args',
    'value',
    'undefined',
    '\x27timeEnd\x27',
    'setCurrentTimeMSForTest',
    'evaluate',
    'console.log(\x27js:\x20\x27\x20+\x20',
    '\x20+\x20\x27\x20ms\x27)',
    'console.time(',
    '347273NnwqbR',
    '221896SnQkzk',
    '181XOQlpf',
    '617UXlgmR',
    '157358cjNMxc'
];
const _0x5d8e5e = _0xc95c;
function _0xc95c(_0x1a492e, _0x34335b) {
    return _0xc95c = function (_0xb4e3b0, _0xc95c40) {
        _0xb4e3b0 = _0xb4e3b0 - 0x1a7;
        let _0x446d7e = _0xb4e3[_0xb4e3b0];
        return _0x446d7e;
    }, _0xc95c(_0x1a492e, _0x34335b);
}
(function (_0x46688c, _0x34a341) {
    const _0x25979d = _0xc95c;
    while (!![]) {
        try {
            const _0x29888a = parseInt(_0x25979d(0x1a7)) + -parseInt(_0x25979d(0x1a8)) + -parseInt(_0x25979d(0x1a9)) * parseInt(_0x25979d(0x1aa)) + -parseInt(_0x25979d(0x1ab)) + parseInt(_0x25979d(0x1ac)) * parseInt(_0x25979d(0x1ad)) + -parseInt(_0x25979d(0x1ae)) * parseInt(_0x25979d(0x1af)) + parseInt(_0x25979d(0x1b0)) * parseInt(_0x25979d(0x1b1));
            if (_0x29888a === _0x34a341)
                break;
            else
                _0x46688c['push'](_0x46688c['shift']());
        } catch (_0x7de814) {
            _0x46688c['push'](_0x46688c['shift']());
        }
    }
}(_0xb4e3, 0x5e45c));
let {session, contextGroup, Protocol} = InspectorTest[_0x5d8e5e(0x1b2)](_0x5d8e5e(0x1b3));
Protocol[_0x5d8e5e(0x1b4)][_0x5d8e5e(0x1b5)](), Protocol['Runtime'][_0x5d8e5e(0x1b6)](_0x225199 => {
    const _0xbeb051 = _0x5d8e5e;
    InspectorTest[_0xbeb051(0x1b7)](_0x225199[_0xbeb051(0x1b8)][_0xbeb051(0x1b9)][0x0][_0xbeb051(0x1ba)]);
}), InspectorTest['runAsyncTestSuite']([
    function zero() {
        return checkInterval(0x0);
    },
    function verySmall() {
        return checkInterval(1e-15);
    },
    function small() {
        return checkInterval(0.001);
    },
    function regular() {
        return checkInterval(1.2345);
    },
    function big() {
        return checkInterval(10000.2345);
    },
    function veryBig() {
        return checkInterval(0x38d7ea4c68000 + 0.2345);
    },
    function huge() {
        return checkInterval(0xb7abc627050308000000000000000000000);
    },
    function undefinedAsLabel() {
        const _0x20dbad = _0x5d8e5e;
        return checkInterval(0x1, _0x20dbad(0x1bb));
    },
    function emptyAsLabel() {
        return checkInterval(0x1, '');
    }
]);
async function checkInterval(_0x5ba758, _0x45c3dc) {
    const _0x1a0eac = _0x5d8e5e;
    _0x45c3dc = _0x45c3dc === undefined ? _0x1a0eac(0x1bc) : _0x45c3dc, utils[_0x1a0eac(0x1bd)](0x0), Protocol['Runtime'][_0x1a0eac(0x1be)]({ 'expression': _0x1a0eac(0x1bf) + _0x5ba758 + _0x1a0eac(0x1c0) }), await Protocol[_0x1a0eac(0x1b4)][_0x1a0eac(0x1be)]({ 'expression': _0x1a0eac(0x1c1) + _0x45c3dc + ')' }), utils[_0x1a0eac(0x1bd)](_0x5ba758), await Protocol['Runtime'][_0x1a0eac(0x1be)]({ 'expression': 'console.timeEnd(' + _0x45c3dc + ')' });
}
