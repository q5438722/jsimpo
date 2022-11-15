it(_0x46ed31(345), function () {
    var _0x5ef4d9 = function (_0x63eb61) {
        var _0x5dece7 = _0x4831;
        expect(_0x63eb61)[_0x5dece7(346)](_0x5dece7(347));
    };
    (function () {
        var _0x4f8c93 = _0x4831;
        with ({ 'a': 1 }) {
            var _0x243f23 = _0x5ef4d9;
        }
        _0x243f23(_0x4f8c93(347));
    }());
}), it('should find var declaration in control statements after usage', function () {
    var _0x346c59 = function (_0x4e6fa1) {
        var _0x130b96 = _0x4831;
        expect(_0x4e6fa1)[_0x130b96(346)]('fail');
    };
    (function () {
        var _0x44e93e = function () {
            _0x569f2a('fail');
        };
        with ({ 'a': 1 }) {
            var _0x569f2a = _0x346c59;
        }
        _0x44e93e();
    }());
});