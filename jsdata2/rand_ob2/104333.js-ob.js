var _0x7d80 = [
    'should\x20resolve\x20promise\x20if\x20status\x20is\x20not\x20set',
    'toHaveBeenCalledWith',
    'not',
    'toHaveBeenCalled',
    'should\x20resolve\x20promise\x20if\x20validateStatus\x20returns\x20true',
    '/foo',
    'calls',
    'first',
    'args',
    'toBe',
    'message',
    'Request\x20failed\x20with\x20status\x20code\x20500',
    'request',
    'response',
    'should\x20pass\x20status\x20to\x20validateStatus',
    '417774PykdYs',
    '922215ZkQjfJ',
    '2pljmjY',
    '272912GGtNMv',
    '19585VdkzNE',
    '55TLIKFT',
    '561055YvElfz',
    '575840pdyfno',
    '29764DFexRj',
    '6MagpeG',
    '../../../lib/core/settle',
    'core::settle',
    'createSpy',
    'resolve',
    'reject'
];
var _0xebb4e6 = _0x3e4c;
(function (_0x32771d, _0x11dce4) {
    var _0x201e7b = _0x3e4c;
    while (!![]) {
        try {
            var _0x59e105 = parseInt(_0x201e7b(0x1a9)) + parseInt(_0x201e7b(0x1aa)) + -parseInt(_0x201e7b(0x1ab)) * -parseInt(_0x201e7b(0x1ac)) + -parseInt(_0x201e7b(0x1ad)) * parseInt(_0x201e7b(0x1ae)) + parseInt(_0x201e7b(0x1af)) + -parseInt(_0x201e7b(0x1b0)) + parseInt(_0x201e7b(0x1b1)) * parseInt(_0x201e7b(0x1b2));
            if (_0x59e105 === _0x11dce4)
                break;
            else
                _0x32771d['push'](_0x32771d['shift']());
        } catch (_0x3b5768) {
            _0x32771d['push'](_0x32771d['shift']());
        }
    }
}(_0x7d80, 0xed695));
var settle = require(_0xebb4e6(0x1b3));
function _0x3e4c(_0x544b92, _0x7ff165) {
    return _0x3e4c = function (_0x7d8006, _0x3e4c03) {
        _0x7d8006 = _0x7d8006 - 0x1a9;
        var _0x402226 = _0x7d80[_0x7d8006];
        return _0x402226;
    }, _0x3e4c(_0x544b92, _0x7ff165);
}
describe(_0xebb4e6(0x1b4), function () {
    var _0x1fa08f = _0xebb4e6, _0x4e1005, _0x790d5a;
    beforeEach(function () {
        var _0x31b831 = _0x3e4c;
        _0x4e1005 = jasmine[_0x31b831(0x1b5)](_0x31b831(0x1b6)), _0x790d5a = jasmine[_0x31b831(0x1b5)](_0x31b831(0x1b7));
    }), it(_0x1fa08f(0x1b8), function () {
        var _0x1b4232 = _0x1fa08f, _0x26f38c = {
                'config': {
                    'validateStatus': function () {
                        return !![];
                    }
                }
            };
        settle(_0x4e1005, _0x790d5a, _0x26f38c), expect(_0x4e1005)[_0x1b4232(0x1b9)](_0x26f38c), expect(_0x790d5a)[_0x1b4232(0x1ba)][_0x1b4232(0x1bb)]();
    }), it('should\x20resolve\x20promise\x20if\x20validateStatus\x20is\x20not\x20set', function () {
        var _0x2ab23c = _0x1fa08f, _0x58c858 = {
                'status': 0x1f4,
                'config': {}
            };
        settle(_0x4e1005, _0x790d5a, _0x58c858), expect(_0x4e1005)[_0x2ab23c(0x1b9)](_0x58c858), expect(_0x790d5a)[_0x2ab23c(0x1ba)][_0x2ab23c(0x1bb)]();
    }), it(_0x1fa08f(0x1bc), function () {
        var _0x3a5f8d = _0x1fa08f, _0x11613a = {
                'status': 0x1f4,
                'config': {
                    'validateStatus': function () {
                        return !![];
                    }
                }
            };
        settle(_0x4e1005, _0x790d5a, _0x11613a), expect(_0x4e1005)[_0x3a5f8d(0x1b9)](_0x11613a), expect(_0x790d5a)[_0x3a5f8d(0x1ba)][_0x3a5f8d(0x1bb)]();
    }), it('should\x20reject\x20promise\x20if\x20validateStatus\x20returns\x20false', function () {
        var _0x27394c = _0x1fa08f, _0x4c9a1f = { 'path': _0x27394c(0x1bd) }, _0x3fd6a0 = {
                'status': 0x1f4,
                'config': {
                    'validateStatus': function () {
                        return ![];
                    }
                },
                'request': _0x4c9a1f
            };
        settle(_0x4e1005, _0x790d5a, _0x3fd6a0), expect(_0x4e1005)[_0x27394c(0x1ba)][_0x27394c(0x1bb)](), expect(_0x790d5a)[_0x27394c(0x1bb)]();
        var _0x2a78c7 = _0x790d5a[_0x27394c(0x1be)][_0x27394c(0x1bf)]()[_0x27394c(0x1c0)][0x0];
        expect(_0x2a78c7 instanceof Error)[_0x27394c(0x1c1)](!![]), expect(_0x2a78c7[_0x27394c(0x1c2)])['toBe'](_0x27394c(0x1c3)), expect(_0x2a78c7['config'])[_0x27394c(0x1c1)](_0x3fd6a0['config']), expect(_0x2a78c7[_0x27394c(0x1c4)])[_0x27394c(0x1c1)](_0x4c9a1f), expect(_0x2a78c7[_0x27394c(0x1c5)])['toBe'](_0x3fd6a0);
    }), it(_0x1fa08f(0x1c6), function () {
        var _0x45afe9 = jasmine['createSpy']('validateStatus'), _0x4cd91a = {
                'status': 0x1f4,
                'config': { 'validateStatus': _0x45afe9 }
            };
        settle(_0x4e1005, _0x790d5a, _0x4cd91a), expect(_0x45afe9)['toHaveBeenCalledWith'](0x1f4);
    });
});
