function target() {
}
;
var proxy = new Proxy(target, {
    'get'() {
        target['prototype'] = 0x572 + -0x25f8 + -0x1f1 * -0x11;
    }
});
new proxy();
