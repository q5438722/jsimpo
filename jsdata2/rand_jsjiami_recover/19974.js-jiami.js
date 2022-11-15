var Test = function () {
    'use strict';
    function _0x22dccb() {
        babelHelpers['classCallCheck'](this, _0x22dccb);
        return babelHelpers['get'](babelHelpers['getPrototypeOf'](_0x22dccb['prototype']), 'constructor', this);
    }
    babelHelpers['createClass'](_0x22dccb, null, [{
            'key': 'test',
            'value': function test() {
                return babelHelpers['get'](babelHelpers['getPrototypeOf'](_0x22dccb), 'constructor', this);
            }
        }]);
    return _0x22dccb;
}();
expect(Object['getPrototypeOf'](Test['prototype']))['toBe'](Object['prototype']);
expect(new Test())['toBe'](Object);
expect(Object['getPrototypeOf'](Test))['toBe'](Function['prototype']);
expect(Test['test']())['toBe'](Function);