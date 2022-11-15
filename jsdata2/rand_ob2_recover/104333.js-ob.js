var settle = require(_0xebb4e6(435));
function _0x3e4c(_0x544b92, _0x7ff165) {
    return _0x3e4c = function (_0x7d8006, _0x3e4c03) {
        _0x7d8006 = _0x7d8006 - 425;
        var _0x402226 = _0x7d80[_0x7d8006];
        return _0x402226;
    }, _0x3e4c(_0x544b92, _0x7ff165);
}
describe(_0xebb4e6(436), function () {
    var _0x1fa08f = _0xebb4e6, _0x4e1005, _0x790d5a;
    beforeEach(function () {
        var _0x31b831 = _0x3e4c;
        _0x4e1005 = jasmine[_0x31b831(437)](_0x31b831(438)), _0x790d5a = jasmine[_0x31b831(437)](_0x31b831(439));
    }), it(_0x1fa08f(440), function () {
        var _0x1b4232 = _0x1fa08f, _0x26f38c = {
                'config': {
                    'validateStatus': function () {
                        return !![];
                    }
                }
            };
        settle(_0x4e1005, _0x790d5a, _0x26f38c), expect(_0x4e1005)[_0x1b4232(441)](_0x26f38c), expect(_0x790d5a)[_0x1b4232(442)][_0x1b4232(443)]();
    }), it('should resolve promise if validateStatus is not set', function () {
        var _0x2ab23c = _0x1fa08f, _0x58c858 = {
                'status': 500,
                'config': {}
            };
        settle(_0x4e1005, _0x790d5a, _0x58c858), expect(_0x4e1005)[_0x2ab23c(441)](_0x58c858), expect(_0x790d5a)[_0x2ab23c(442)][_0x2ab23c(443)]();
    }), it(_0x1fa08f(444), function () {
        var _0x3a5f8d = _0x1fa08f, _0x11613a = {
                'status': 500,
                'config': {
                    'validateStatus': function () {
                        return !![];
                    }
                }
            };
        settle(_0x4e1005, _0x790d5a, _0x11613a), expect(_0x4e1005)[_0x3a5f8d(441)](_0x11613a), expect(_0x790d5a)[_0x3a5f8d(442)][_0x3a5f8d(443)]();
    }), it('should reject promise if validateStatus returns false', function () {
        var _0x27394c = _0x1fa08f, _0x4c9a1f = { 'path': _0x27394c(445) }, _0x3fd6a0 = {
                'status': 500,
                'config': {
                    'validateStatus': function () {
                        return ![];
                    }
                },
                'request': _0x4c9a1f
            };
        settle(_0x4e1005, _0x790d5a, _0x3fd6a0), expect(_0x4e1005)[_0x27394c(442)][_0x27394c(443)](), expect(_0x790d5a)[_0x27394c(443)]();
        var _0x2a78c7 = _0x790d5a[_0x27394c(446)][_0x27394c(447)]()[_0x27394c(448)][0];
        expect(_0x2a78c7 instanceof Error)[_0x27394c(449)](!![]), expect(_0x2a78c7[_0x27394c(450)])['toBe'](_0x27394c(451)), expect(_0x2a78c7['config'])[_0x27394c(449)](_0x3fd6a0['config']), expect(_0x2a78c7[_0x27394c(452)])[_0x27394c(449)](_0x4c9a1f), expect(_0x2a78c7[_0x27394c(453)])['toBe'](_0x3fd6a0);
    }), it(_0x1fa08f(454), function () {
        var _0x45afe9 = jasmine['createSpy']('validateStatus'), _0x4cd91a = {
                'status': 500,
                'config': { 'validateStatus': _0x45afe9 }
            };
        settle(_0x4e1005, _0x790d5a, _0x4cd91a), expect(_0x45afe9)['toHaveBeenCalledWith'](500);
    });
});