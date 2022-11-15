function mandatory(_0x441f5d) {
    throw new Error('Missing parameter: ' + _0x441f5d);
}
function foo(_0x2510ff) {
    return _foo['apply'](this, arguments);
}
function _foo() {
    _foo = babelHelpers['asyncToGenerator'](function* (_0x2e512d) {
        let {a, b = mandatory('b')} = _0x2e512d;
        return Promise['resolve'](b);
    });
    return _foo['apply'](this, arguments);
}