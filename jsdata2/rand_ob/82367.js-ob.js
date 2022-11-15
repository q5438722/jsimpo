const _0x30de = [
    'rBGIB',
    'restore',
    'oPiQC',
    'xXCEF',
    'equal',
    'ZcHqm',
    'registry',
    'calledWith',
    '132716cGFKPS',
    '1lyCGKE',
    '58000dYqwoO',
    '53659nZxFTL',
    '13bDUZWW',
    '290lhiicm',
    '3525lyBXIH',
    '24ruGJvl',
    '5699qxWOwu',
    '414272rykNUA',
    '1633257zGVrkP',
    'should',
    'sinon',
    '../../../core/frontend/services/routing',
    '../../../core/frontend/meta/rss-url',
    'getRssUrl',
    '/rss/',
    'should\x20return\x20rss\x20url',
    'stub',
    'BMGvV',
    'returns',
    'wtxrJ'
];
const _0x5787c1 = _0x1e65;
(function (_0x486a6f, _0x18c138) {
    const _0x29c944 = _0x1e65;
    while (!![]) {
        try {
            const _0x43ad35 = parseInt(_0x29c944(0xd4)) * parseInt(_0x29c944(0xd5)) + -parseInt(_0x29c944(0xd6)) + -parseInt(_0x29c944(0xd7)) * parseInt(_0x29c944(0xd8)) + parseInt(_0x29c944(0xd9)) * -parseInt(_0x29c944(0xda)) + parseInt(_0x29c944(0xdb)) * parseInt(_0x29c944(0xdc)) + parseInt(_0x29c944(0xdd)) + parseInt(_0x29c944(0xde));
            if (_0x43ad35 === _0x18c138)
                break;
            else
                _0x486a6f['push'](_0x486a6f['shift']());
        } catch (_0x5d100a) {
            _0x486a6f['push'](_0x486a6f['shift']());
        }
    }
}(_0x30de, 0x25 * -0x3698 + -0x23 * 0xe77 + 0x121881));
const should = require(_0x5787c1(0xdf)), sinon = require(_0x5787c1(0xe0)), routing = require(_0x5787c1(0xe1)), getRssUrl = require(_0x5787c1(0xe2));
function _0x1e65(_0x251d54, _0x557c17) {
    return _0x1e65 = function (_0x160e06, _0x1da783) {
        _0x160e06 = _0x160e06 - (-0x1f * -0x129 + -0x1 * 0x1ff3 + -0x22 * 0x18);
        let _0x31051f = _0x30de[_0x160e06];
        return _0x31051f;
    }, _0x1e65(_0x251d54, _0x557c17);
}
describe(_0x5787c1(0xe3), function () {
    const _0x454594 = _0x5787c1, _0x125c13 = {
            'BMGvV': 'getRssUrl',
            'wtxrJ': _0x454594(0xe4),
            'fucTT': function (_0x384814, _0x317c4a) {
                return _0x384814(_0x317c4a);
            },
            'ZcHqm': function (_0x4df69a, _0x58ff24, _0x2af1e0) {
                return _0x4df69a(_0x58ff24, _0x2af1e0);
            },
            'KATvl': function (_0x3165e5, _0x130704) {
                return _0x3165e5(_0x130704);
            },
            'rBGIB': function (_0x577938, _0x1dbb2c) {
                return _0x577938(_0x1dbb2c);
            },
            'oPiQC': function (_0x4b1fb8, _0x2c4917, _0x5d31f9) {
                return _0x4b1fb8(_0x2c4917, _0x5d31f9);
            },
            'xXCEF': _0x454594(0xe5)
        };
    _0x125c13['KATvl'](beforeEach, function () {
        const _0x476d24 = _0x454594;
        sinon[_0x476d24(0xe6)](routing['registry'], _0x125c13[_0x476d24(0xe7)])[_0x476d24(0xe8)](_0x125c13[_0x476d24(0xe9)]);
    }), _0x125c13[_0x454594(0xea)](afterEach, function () {
        const _0x1c9e8b = _0x454594;
        sinon[_0x1c9e8b(0xeb)]();
    }), _0x125c13[_0x454594(0xec)](it, _0x125c13[_0x454594(0xed)], function () {
        const _0x3d4fd0 = _0x454594, _0x59e9de = _0x125c13['fucTT'](getRssUrl, { 'secure': ![] });
        should[_0x3d4fd0(0xee)](_0x59e9de, _0x125c13[_0x3d4fd0(0xe9)]);
    }), _0x125c13[_0x454594(0xec)](it, 'forwards\x20absolute/secure\x20flags', function () {
        const _0x3ca5e3 = _0x454594, _0x3d2f8d = _0x125c13[_0x3ca5e3(0xef)](getRssUrl, { 'secure': ![] }, !![]);
        routing[_0x3ca5e3(0xf0)][_0x3ca5e3(0xe3)][_0x3ca5e3(0xf1)]({
            'secure': ![],
            'absolute': !![]
        })['should']['be']['true']();
    });
});
