var extend = function (_0x5b91bf, _0x4b2303) {
        var _0x43af46 = _0x4735;
        function _0x25cb01() {
            var _0x390fa4 = _0x4735;
            this[_0x390fa4(480)] = _0x5b91bf;
        }
        _0x25cb01[_0x43af46(481)] = _0x4b2303['prototype'], _0x5b91bf['prototype'] = new _0x25cb01();
    }, Car = function (_0x3b8b85) {
        var _0x5962bd = function () {
            var _0x23f417 = _0x4735, _0x48de61 = this;
            return _0x3b8b85[_0x23f417(482)](_0x48de61), Object['defineProperties'](_0x48de61, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        var _0x1818d5 = _0x23f417;
                        return _0x1818d5(483);
                    }
                }
            }), _0x48de61['copy'] = function () {
                var _0x488dfb = _0x23f417;
                throw new Error(_0x488dfb(484));
            }, _0x48de61;
        };
        return extend(_0x5962bd, _0x3b8b85), _0x5962bd;
    }(Object), SuperCar = function (_0x2fce8e) {
        var _0x1f6aa5 = function (_0x30939c) {
            var _0x5b67ca = _0x4735, _0xdbe200 = this;
            return _0x2fce8e[_0x5b67ca(482)](_0xdbe200), Object[_0x5b67ca(485)](_0xdbe200, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        return _0x30939c;
                    }
                }
            }), _0xdbe200[_0x5b67ca(486)] = function () {
            }, _0xdbe200;
        };
        return extend(_0x1f6aa5, _0x2fce8e), _0x1f6aa5;
    }(Car);
assertEquals(_0x3a4b62(483), new Car()[_0x3a4b62(487)]), assertEquals(_0x3a4b62(488), new SuperCar('Bugatti')['make']), assertEquals(_0x3a4b62(489), new SuperCar(_0x3a4b62(489))[_0x3a4b62(487)]), assertEquals(_0x3a4b62(490), new SuperCar(_0x3a4b62(490))[_0x3a4b62(487)]);