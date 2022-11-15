var _foo = babelHelpers['classPrivateFieldLooseKey']('foo');
let Foo = function () {
    'use strict';
    function _0x2b0169() {
        babelHelpers['classCallCheck'](this, _0x2b0169);
    }
    babelHelpers['createClass'](_0x2b0169, [{
            'key': 'test',
            'value': function test(_0x54863b) {
                return Object['prototype']['hasOwnProperty']['call'](_0x54863b, _foo);
            }
        }]);
    return _0x2b0169;
}();
Object['defineProperty'](Foo, _foo, {
    'writable': !![],
    'value': 1
});