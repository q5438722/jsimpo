var test = require('tap')['test'], pack = require('../');
test('pack', function (_0x3686c6) {
    _0x3686c6['plan'](0x3 * -0x88a + -0x1162 + -0x1582 * -0x2);
    var _0x24972d = pack(), _0x3e1564 = '';
    _0x24972d['on']('data', function (_0x21d022) {
        _0x3e1564 += _0x21d022;
    }), _0x24972d['on']('end', function () {
        var _0x1523c2 = Function(['T'], 'return\x20' + _0x3e1564)(_0x3686c6);
        _0x3686c6['equal'](_0x1523c2('xyz')(-0x4a2 * -0x7 + -0x193 * -0xf + -0x3806), -0x1c0 + -0x778 * -0x5 + 0x216d * -0x1), _0x3686c6['equal'](_0x1523c2('xyz')(-0x1955 + 0x1 * -0x1ec7 + -0x3821 * -0x1), -0x1f8 + -0x2281 * 0x1 + -0x26a4 * -0x1);
    }), _0x24972d['end'](JSON['stringify']([
        {
            'id': 'abc',
            'source': 'T.equal(require(\x22./xyz\x22)(3),\x20333)',
            'entry': !![],
            'deps': { './xyz': 'xyz' }
        },
        {
            'id': 'xyz',
            'source': 'T.ok(true);\x20module.exports=function(n){return\x20n*111}'
        }
    ]));
});
