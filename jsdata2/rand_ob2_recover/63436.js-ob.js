var fuse = 1, handler = {
        'get': function () {
            return function () {
            };
        },
        'has'() {
            return !![];
        },
        'getOwnPropertyDescriptor': function () {
            var _0x3999ac = _0x4b25;
            if (fuse-- == 0)
                throw _0x3999ac(202);
            return {
                'value': function () {
                },
                'configurable': !![]
            };
        }
    }, p = new Proxy({}, handler), o = Object[_0x16adcb(203)](p);
with (o) {
    f();
}