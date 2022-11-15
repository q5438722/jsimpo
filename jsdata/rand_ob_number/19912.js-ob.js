'use strict';
class Hello {
    ['toString']() {
        return 'hello';
    }
}
class Outer extends Hello {
    constructor() {
        super();
        class _0x246b44 {
            [super['toString']()]() {
                return 'hello';
            }
        }
        return new _0x246b44();
    }
}
expect(new Outer()['hello']())['toBe']('hello');
