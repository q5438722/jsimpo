it('should\x20find\x20var\x20declaration\x20in\x20control\x20statements', function () {
    var _0x178798 = function (_0x1b7f8a) {
        expect(_0x1b7f8a)['toBe']('fail');
    };
    (function () {
        with ({ 'a': 0x1 }) {
            var _0x268692 = _0x178798;
        }
        _0x268692('fail');
    }());
}), it('should\x20find\x20var\x20declaration\x20in\x20control\x20statements\x20after\x20usage', function () {
    var _0x1a1bb0 = function (_0x97ff6c) {
        expect(_0x97ff6c)['toBe']('fail');
    };
    (function () {
        var _0x564a4d = function () {
            _0x18604e('fail');
        };
        with ({ 'a': 0x1 }) {
            var _0x18604e = _0x1a1bb0;
        }
        _0x564a4d();
    }());
});
