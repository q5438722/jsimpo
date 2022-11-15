var fuse = 1;
var handler = {
    'getOwnPropertyDescriptor': function () {
        if (fuse-- == 0)
            throw 'please die';
        return {
            'value': function () {
            },
            'configurable': !![]
        };
    }
};
var p = new Proxy({}, handler);
var o = Object['create'](p);
with (o) {
    f();
}