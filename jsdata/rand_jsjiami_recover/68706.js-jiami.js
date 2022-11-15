it('should find var declaration in control statements', function () {
    var _0x2ee017 = function (_0x5d2888) {
        expect(_0x5d2888)['toBe']('fail');
    };
    (function () {
        with ({ 'a': 1 }) {
            var _0x4db642 = _0x2ee017;
        }
        _0x4db642('fail');
    }());
});
it('should find var declaration in control statements after usage', function () {
    var _0x242c9f = function (_0x3522de) {
        expect(_0x3522de)['toBe']('fail');
    };
    (function () {
        var _0x21bc95 = function () {
            var _0x53d822 = { 'BnEVZ': 'fail' };
            if ('wODOg' === 'wODOg') {
                _0x1dd05e('fail');
            } else {
                expect(x)['toBe'](_0x53d822['BnEVZ']);
            }
        };
        with ({ 'a': 1 }) {
            var _0x1dd05e = _0x242c9f;
        }
        _0x21bc95();
    }());
});