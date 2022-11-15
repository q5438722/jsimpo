const _0x282e = ['232650MwuLBm', '635869fQmQmA', '1050525tGVGdb', 'construct', 'toBe', '46091YkobXU', '5gZrNek', '1nJBamD', '876563mUZzAe', '495275iVezqn', '9KxThHN', '33279vfszQZ'];
const _0x3aa2b3 = _0x25cb;

(function (_0x20bf5e, _0x36b5cc) {
    const _0x39f9e2 = _0x25cb;

    while (true) {
        try {
            const _0x2e4dbe = parseInt(_0x39f9e2(0x6d)) * parseInt(_0x39f9e2(0x6e)) + -parseInt(_0x39f9e2(0x6f)) * parseInt(_0x39f9e2(0x70)) + -parseInt(_0x39f9e2(0x71)) + parseInt(_0x39f9e2(0x72)) * -parseInt(_0x39f9e2(0x73)) + parseInt(_0x39f9e2(0x74)) + parseInt(_0x39f9e2(0x75)) + parseInt(_0x39f9e2(0x76));

            if (_0x2e4dbe === _0x36b5cc) break;else _0x20bf5e.push(_0x20bf5e.shift());
        } catch (_0x48fbdd) {
            _0x20bf5e.push(_0x20bf5e.shift());
        }
    }
})(_0x282e, 478150);
function _0x25cb(_0x5a5735, _0x1bb6eb) {
    return _0x25cb = function (_0x5bb453, _0x1c9edd) {
        _0x5bb453 = _0x5bb453 - 109;
        const _0x4a1c3f = _0x282e[_0x5bb453];

        return _0x4a1c3f;
    }, _0x25cb(_0x5a5735, _0x1bb6eb);
}
const targets = [];

class Foo {
    constructor() {
        targets.push(new.target);
    }
}
class Bar extends Foo {}
class Baz {}
Reflect[_0x3aa2b3(0x77)](Foo, []), Reflect[_0x3aa2b3(0x77)](Foo, [], Bar), Reflect[_0x3aa2b3(0x77)](Bar, []), Reflect.construct(Bar, [], Baz), Reflect.construct(Foo, [], Baz), expect(targets[0])[_0x3aa2b3(0x78)](Foo), expect(targets[1]).toBe(Bar), expect(targets[2])[_0x3aa2b3(0x78)](Bar), expect(targets[3])[_0x3aa2b3(0x78)](Baz), expect(targets[4])[_0x3aa2b3(0x78)](Baz);
