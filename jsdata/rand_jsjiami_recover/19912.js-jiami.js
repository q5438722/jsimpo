'use strict';
class Hello {
    ['toString']() {
        return 'hello';
    }
}
class Outer extends Hello {
    constructor() {
        super();
        class _0x565142 {
            [super['toString']()]() {
                return 'hello';
            }
        }
        return new _0x565142();
    }
}
expect(new Outer()['hello']())['toBe']('hello');