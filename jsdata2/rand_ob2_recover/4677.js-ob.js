var test = require('tap')['test'], pack = require(_0x1b8d58(417));
test('raw', function (_0xe686e2) {
    var _0x3d8e60 = _0x1b8d58;
    _0xe686e2['plan'](5);
    var _0x3d57d3 = pack({ 'raw': !![] }), _0x5c41ce = '';
    _0x3d57d3['on']('data', function (_0xe584f6) {
        _0x5c41ce += _0xe584f6;
    }), _0x3d57d3['on'](_0x3d8e60(418), function () {
        var _0x38637e = _0x3d8e60, _0x562227 = Function(['T'], _0x38637e(419) + _0x5c41ce)(_0xe686e2);
        _0xe686e2[_0x38637e(420)](_0x562227('xyz')(5), 555), _0xe686e2['equal'](_0x562227('xyz')(5), 555), _0xe686e2['throws'](function () {
            var _0x2a2af2 = _0x38637e;
            _0x562227(_0x2a2af2(421));
        }, /Cannot find module 'zzz'/);
    }), _0x3d57d3[_0x3d8e60(422)]({
        'id': _0x3d8e60(423),
        'source': _0x3d8e60(424),
        'entry': !![],
        'deps': { './xyz': _0x3d8e60(425) }
    }), _0x3d57d3[_0x3d8e60(422)]({
        'id': 'xyz',
        'source': _0x3d8e60(426)
    }), _0x3d57d3['end']();
});