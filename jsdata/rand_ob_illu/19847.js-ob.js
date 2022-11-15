'use strict';

const _0x27fc = ['909529xvpXsh', '883940pJzWkQ', '116670NZxFGR', 'get', 'defineProperty', 'test', '385424iRHwdI', '747652AYiLPw', '1aSPUXi', '518878vndaaW', '415181UCXlfx'];
const _0x20a2cc = _0x27e1;

(function (_0x19625c, _0x3c6afe) {
    const _0x35688a = _0x27e1;

    while (true) {
        try {
            const _0x1b1c64 = parseInt(_0x35688a(0x9a)) + -parseInt(_0x35688a(0x9b)) + parseInt(_0x35688a(0x9c)) * parseInt(_0x35688a(0x9d)) + parseInt(_0x35688a(0x9e)) + parseInt(_0x35688a(0x9f)) + -parseInt(_0x35688a(0xa0)) + -parseInt(_0x35688a(0xa1));

            if (_0x1b1c64 === _0x3c6afe) break;else _0x19625c.push(_0x19625c.shift());
        } catch (_0x1e50f0) {
            _0x19625c.push(_0x19625c.shift());
        }
    }
})(_0x27fc, 480750);
class Base {}
class Obj extends Base {
    [_0x20a2cc(0xa2)]() {
        return super.test;
    }
}
function _0x27e1(_0x235416, _0x18c992) {
    return _0x27e1 = function (_0x1cfc36, _0x1db98a) {
        _0x1cfc36 = _0x1cfc36 - 154;
        const _0x299e08 = _0x27fc[_0x1cfc36];

        return _0x299e08;
    }, _0x27e1(_0x235416, _0x18c992);
}
Object[_0x20a2cc(0xa3)](Obj.prototype, 'test', {
    'value': 0x2,
    'writable': true,
    'configurable': true
});
const obj = new Obj();

expect(obj[_0x20a2cc(0xa4)]).toBe(2), expect(obj.get()).toBeUndefined();
