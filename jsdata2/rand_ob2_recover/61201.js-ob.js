var extend = function (_0x3eadf8, _0x7876cb) {
        var _0x1e2160 = _0x44bf;
        function _0x5247c9() {
            var _0x494a49 = _0x44bf;
            this[_0x494a49(206)] = _0x3eadf8;
        }
        _0x5247c9[_0x1e2160(207)] = _0x7876cb[_0x1e2160(207)], _0x3eadf8[_0x1e2160(207)] = new _0x5247c9();
    }, Car = function (_0x5ca7c9) {
        var _0x47a221 = function () {
            var _0xc5cc5c = _0x44bf, _0x2c7278 = this;
            return _0x5ca7c9[_0xc5cc5c(208)](_0x2c7278), Object['defineProperties'](_0x2c7278, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        var _0x4f07cd = _0xc5cc5c;
                        return _0x4f07cd(209);
                    }
                }
            }), _0x2c7278['copy'] = function () {
                var _0x2c20a2 = _0xc5cc5c;
                throw new Error(_0x2c20a2(210));
            }, _0x2c7278;
        };
        return extend(_0x47a221, _0x5ca7c9), _0x47a221;
    }(Object), SuperCar = function (_0x2afe56) {
        var _0x2b6a88 = function (_0x3be1ed) {
            var _0x543fa5 = _0x44bf, _0x7c86bf = this;
            return _0x2afe56['call'](_0x7c86bf), Object[_0x543fa5(211)](_0x7c86bf, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        return _0x3be1ed;
                    }
                }
            }), _0x7c86bf[_0x543fa5(212)] = function () {
            }, _0x7c86bf;
        };
        return extend(_0x2b6a88, _0x2afe56), _0x2b6a88;
    }(Car);
function _0x44bf(_0x182b35, _0x27a163) {
    return _0x44bf = function (_0x59f5e5, _0x44bfe6) {
        _0x59f5e5 = _0x59f5e5 - 197;
        var _0x1fa2a2 = _0x59f5[_0x59f5e5];
        return _0x1fa2a2;
    }, _0x44bf(_0x182b35, _0x27a163);
}
assertEquals(_0x1465d2(209), new Car()[_0x1465d2(213)]), assertEquals(_0x1465d2(214), new SuperCar(_0x1465d2(214))[_0x1465d2(213)]), assertEquals(_0x1465d2(215), new SuperCar(_0x1465d2(215))[_0x1465d2(213)]), assertEquals(_0x1465d2(216), new SuperCar(_0x1465d2(216))[_0x1465d2(213)]);