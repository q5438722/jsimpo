var _0x454b = [
    '1eKnZPR',
    '24ufEKyR',
    '47799adCoEH',
    '24053KWNJdx',
    '10MbHlDz',
    '736032rlYRDH',
    '../',
    'end',
    'return\x20',
    'equal',
    'zzz',
    'write',
    'abc',
    'T.equal(require(\x22./xyz\x22)(3),\x20333)',
    'xyz',
    'T.ok(true);\x20module.exports=function(n){return\x20n*111}',
    '779834TnGtAh',
    '59472bVYKeS',
    '1GyZfXD',
    '83063kOMGqF',
    '1385749pcKJhG'
];
var _0x1b8d58 = _0x5d89;
function _0x5d89(_0x4b4165, _0x2f2b3a) {
    return _0x5d89 = function (_0x454b3f, _0x5d8927) {
        _0x454b3f = _0x454b3f - 0x196;
        var _0x4cb531 = _0x454b[_0x454b3f];
        return _0x4cb531;
    }, _0x5d89(_0x4b4165, _0x2f2b3a);
}
(function (_0x7e8365, _0x204ba8) {
    var _0x2a0c82 = _0x5d89;
    while (!![]) {
        try {
            var _0x3fd42f = -parseInt(_0x2a0c82(0x196)) + parseInt(_0x2a0c82(0x197)) + parseInt(_0x2a0c82(0x198)) * -parseInt(_0x2a0c82(0x199)) + -parseInt(_0x2a0c82(0x19a)) * -parseInt(_0x2a0c82(0x19b)) + parseInt(_0x2a0c82(0x19c)) * parseInt(_0x2a0c82(0x19d)) + -parseInt(_0x2a0c82(0x19e)) * parseInt(_0x2a0c82(0x19f)) + -parseInt(_0x2a0c82(0x1a0));
            if (_0x3fd42f === _0x204ba8)
                break;
            else
                _0x7e8365['push'](_0x7e8365['shift']());
        } catch (_0xf00ab) {
            _0x7e8365['push'](_0x7e8365['shift']());
        }
    }
}(_0x454b, 0xb7d2a));
var test = require('tap')['test'], pack = require(_0x1b8d58(0x1a1));
test('raw', function (_0xe686e2) {
    var _0x3d8e60 = _0x1b8d58;
    _0xe686e2['plan'](0x5);
    var _0x3d57d3 = pack({ 'raw': !![] }), _0x5c41ce = '';
    _0x3d57d3['on']('data', function (_0xe584f6) {
        _0x5c41ce += _0xe584f6;
    }), _0x3d57d3['on'](_0x3d8e60(0x1a2), function () {
        var _0x38637e = _0x3d8e60, _0x562227 = Function(['T'], _0x38637e(0x1a3) + _0x5c41ce)(_0xe686e2);
        _0xe686e2[_0x38637e(0x1a4)](_0x562227('xyz')(0x5), 0x22b), _0xe686e2['equal'](_0x562227('xyz')(0x5), 0x22b), _0xe686e2['throws'](function () {
            var _0x2a2af2 = _0x38637e;
            _0x562227(_0x2a2af2(0x1a5));
        }, /Cannot find module 'zzz'/);
    }), _0x3d57d3[_0x3d8e60(0x1a6)]({
        'id': _0x3d8e60(0x1a7),
        'source': _0x3d8e60(0x1a8),
        'entry': !![],
        'deps': { './xyz': _0x3d8e60(0x1a9) }
    }), _0x3d57d3[_0x3d8e60(0x1a6)]({
        'id': 'xyz',
        'source': _0x3d8e60(0x1aa)
    }), _0x3d57d3['end']();
});
