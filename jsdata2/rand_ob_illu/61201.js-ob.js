const _0x6f37 = ['41333BIKhoa', '37lCJKTw', '1731562uofJyK', '1477009TAnJYC', '242851ieFgoH', '15375DKnmgU', '35MHerXo', '2260619YrStfm', 'prototype', 'Ford', 'jGmlR', 'call', 'defineProperties', 'LpaeD', 'copy', 'Meant to be overriden', '3|2|0|1|4', 'split', 'IaXco', 'Bugatti', 'make', 'Lambo', 'Shelby', '10532uMUWjv', '164mcOhWG'];
const _0x2c7a81 = _0x4361;

(function (_0x124668, _0x1d9737) {
    const _0x5cd4ba = _0x4361;

    while (true) {
        try {
            const _0x3fd95b = -parseInt(_0x5cd4ba(0x1a3)) * -parseInt(_0x5cd4ba(0x1a4)) + parseInt(_0x5cd4ba(0x1a5)) * parseInt(_0x5cd4ba(0x1a6)) + parseInt(_0x5cd4ba(0x1a7)) + -parseInt(_0x5cd4ba(0x1a8)) + parseInt(_0x5cd4ba(0x1a9)) + parseInt(_0x5cd4ba(0x1aa)) * -parseInt(_0x5cd4ba(0x1ab)) + -parseInt(_0x5cd4ba(0x1ac));

            if (_0x3fd95b === _0x1d9737) break;else _0x124668.push(_0x124668.shift());
        } catch (_0x4c1980) {
            _0x124668.push(_0x124668.shift());
        }
    }
})(_0x6f37, 955229);
function _0x4361(_0x3df114, _0x4971fd) {
    return _0x4361 = function (_0x406d25, _0x59491d) {
        _0x406d25 = _0x406d25 - 419;
        const _0x2f7ca5 = _0x6f37[_0x406d25];

        return _0x2f7ca5;
    }, _0x4361(_0x3df114, _0x4971fd);
}

const extend = function (_0x1d8bec, _0x463df5) {
    const _0x312aac = _0x4361;

    function _0x1055d4() {
        this['constructor'] = _0x1d8bec;
    }
    _0x1055d4[_0x312aac(0x1ad)] = _0x463df5[_0x312aac(0x1ad)], _0x1d8bec[_0x312aac(0x1ad)] = new _0x1055d4();
};

const Car = function (_0x395601) {
    const _0x4567b0 = _0x4361;
    const _0x3c7b8f = { 'jGmlR': _0x4567b0(0x1ae) };

    const _0x4b8937 = function () {
        const _0x3c97fb = _0x4567b0;
        const _0x33a989 = { 'LpaeD': _0x3c7b8f[_0x3c97fb(0x1af)] };

        const _0x3112e2 = this;

        return _0x395601[_0x3c97fb(0x1b0)](_0x3112e2), Object[_0x3c97fb(0x1b1)](_0x3112e2, {
            'make': {
                'enumerable': true,
                'configurable': true,
                'get': function () {
                    const _0x5045cc = _0x3c97fb;

                    return _0x33a989[_0x5045cc(0x1b2)];
                }
            }
        }), _0x3112e2[_0x3c97fb(0x1b3)] = function () {
            const _0x4f0c3a = _0x3c97fb;

            throw new Error(_0x4f0c3a(0x1b4));
        }, _0x3112e2;
    };

    return extend(_0x4b8937, _0x395601), _0x4b8937;
}(Object);

const SuperCar = function (_0x3fef69) {
    const _0x373585 = _0x4361;
    const _0x2a483b = {
        'YBWBc': _0x373585(0x1b5),
        'IaXco': function (_0x3d2c3e, _0x51e714, _0x3a17a8) {
            return _0x3d2c3e(_0x51e714, _0x3a17a8);
        }
    };

    const _0x52b342 = function (_0x505d9d) {
        const _0x245aa3 = _0x373585;

        const _0x52e03d = _0x2a483b.YBWBc[_0x245aa3(0x1b6)]('|');

        var _0x10d9df = 0;

        while (true) {
            switch (_0x52e03d[_0x10d9df++]) {
                case '0':
                    Object[_0x245aa3(0x1b1)](_0x340422, {
                        'make': {
                            'enumerable': true,
                            'configurable': true,
                            'get': function () {
                                return _0x505d9d;
                            }
                        }
                    });
                    continue;
                case '1':
                    _0x340422[_0x245aa3(0x1b3)] = function () {};
                    continue;
                case '2':
                    _0x3fef69.call(_0x340422);
                    continue;
                case '3':
                    const _0x340422 = this;

                    continue;
                case '4':
                    return _0x340422;
            }
            break;
        }
    };

    return _0x2a483b[_0x373585(0x1b7)](extend, _0x52b342, _0x3fef69), _0x52b342;
}(Car);

assertEquals(_0x2c7a81(0x1ae), new Car().make), assertEquals('Bugatti', new SuperCar(_0x2c7a81(0x1b8))[_0x2c7a81(0x1b9)]), assertEquals(_0x2c7a81(0x1ba), new SuperCar('Lambo')[_0x2c7a81(0x1b9)]), assertEquals(_0x2c7a81(0x1bb), new SuperCar(_0x2c7a81(0x1bb))[_0x2c7a81(0x1b9)]);
