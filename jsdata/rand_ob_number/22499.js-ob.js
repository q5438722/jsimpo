var _x = babelHelpers['classPrivateFieldLooseKey']('x'), C = function C() {
        'use strict';
        babelHelpers['classCallCheck'](this, C), this['y'] = babelHelpers['classPrivateFieldLooseBase'](this, _x)[_x], Object['defineProperty'](this, _x, {
            'writable': !![],
            'value': void (-0xcae + -0x1f08 + 0x2bb6)
        });
    };
expect(() => {
    new C();
})['toThrow']();
