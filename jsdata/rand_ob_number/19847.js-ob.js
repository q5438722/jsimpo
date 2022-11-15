'use strict';
class Base {
}
class Obj extends Base {
    ['get']() {
        return super['test'];
    }
}
Object['defineProperty'](Obj['prototype'], 'test', {
    'value': 0x2,
    'writable': !![],
    'configurable': !![]
});
const obj = new Obj();
expect(obj['test'])['toBe'](-0x1da2 + -0x652 * -0x1 + -0x1e * -0xc7), expect(obj['get']())['toBeUndefined']();
