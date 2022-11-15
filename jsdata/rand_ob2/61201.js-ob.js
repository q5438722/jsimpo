var _0x3f34 = [
    '1567472unocyJ',
    'constructor',
    'prototype',
    'call',
    'Ford',
    'Meant\x20to\x20be\x20overriden',
    'defineProperties',
    'copy',
    'make',
    'Bugatti',
    'Lambo',
    'Shelby',
    '31925syOITJ',
    '2zEAvtl',
    '226111RucfBz',
    '3457VuHHtw',
    '119mprQdg',
    '156620lMgMdm',
    '1949MSOaJI',
    '69ySlYlI',
    '397487qbpEZr'
];
var _0x3a4b62 = _0x4735;
function _0x4735(_0x4c2e48, _0x1cff8d) {
    return _0x4735 = function (_0x3f34c8, _0x47355b) {
        _0x3f34c8 = _0x3f34c8 - 0x1d6;
        var _0x50cdb8 = _0x3f34[_0x3f34c8];
        return _0x50cdb8;
    }, _0x4735(_0x4c2e48, _0x1cff8d);
}
(function (_0xdefc77, _0x52634d) {
    var _0x3fe9c7 = _0x4735;
    while (!![]) {
        try {
            var _0x5eb04f = -parseInt(_0x3fe9c7(0x1d6)) + -parseInt(_0x3fe9c7(0x1d7)) * parseInt(_0x3fe9c7(0x1d8)) + parseInt(_0x3fe9c7(0x1d9)) * -parseInt(_0x3fe9c7(0x1da)) + -parseInt(_0x3fe9c7(0x1db)) + -parseInt(_0x3fe9c7(0x1dc)) * -parseInt(_0x3fe9c7(0x1dd)) + -parseInt(_0x3fe9c7(0x1de)) + parseInt(_0x3fe9c7(0x1df));
            if (_0x5eb04f === _0x52634d)
                break;
            else
                _0xdefc77['push'](_0xdefc77['shift']());
        } catch (_0x4218a8) {
            _0xdefc77['push'](_0xdefc77['shift']());
        }
    }
}(_0x3f34, 0x3d99c));
var extend = function (_0x5b91bf, _0x4b2303) {
        var _0x43af46 = _0x4735;
        function _0x25cb01() {
            var _0x390fa4 = _0x4735;
            this[_0x390fa4(0x1e0)] = _0x5b91bf;
        }
        _0x25cb01[_0x43af46(0x1e1)] = _0x4b2303['prototype'], _0x5b91bf['prototype'] = new _0x25cb01();
    }, Car = function (_0x3b8b85) {
        var _0x5962bd = function () {
            var _0x23f417 = _0x4735, _0x48de61 = this;
            return _0x3b8b85[_0x23f417(0x1e2)](_0x48de61), Object['defineProperties'](_0x48de61, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        var _0x1818d5 = _0x23f417;
                        return _0x1818d5(0x1e3);
                    }
                }
            }), _0x48de61['copy'] = function () {
                var _0x488dfb = _0x23f417;
                throw new Error(_0x488dfb(0x1e4));
            }, _0x48de61;
        };
        return extend(_0x5962bd, _0x3b8b85), _0x5962bd;
    }(Object), SuperCar = function (_0x2fce8e) {
        var _0x1f6aa5 = function (_0x30939c) {
            var _0x5b67ca = _0x4735, _0xdbe200 = this;
            return _0x2fce8e[_0x5b67ca(0x1e2)](_0xdbe200), Object[_0x5b67ca(0x1e5)](_0xdbe200, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        return _0x30939c;
                    }
                }
            }), _0xdbe200[_0x5b67ca(0x1e6)] = function () {
            }, _0xdbe200;
        };
        return extend(_0x1f6aa5, _0x2fce8e), _0x1f6aa5;
    }(Car);
assertEquals(_0x3a4b62(0x1e3), new Car()[_0x3a4b62(0x1e7)]), assertEquals(_0x3a4b62(0x1e8), new SuperCar('Bugatti')['make']), assertEquals(_0x3a4b62(0x1e9), new SuperCar(_0x3a4b62(0x1e9))[_0x3a4b62(0x1e7)]), assertEquals(_0x3a4b62(0x1ea), new SuperCar(_0x3a4b62(0x1ea))[_0x3a4b62(0x1e7)]);
