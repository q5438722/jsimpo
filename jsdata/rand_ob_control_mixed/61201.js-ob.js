var extend = function (_0x44c05d, _0x7dbb4f) {
        function _0x408e74() {
            this['constructor'] = _0x44c05d;
        }
        _0x408e74['prototype'] = _0x7dbb4f['prototype'], _0x44c05d['prototype'] = new _0x408e74();
    }, Car = function (_0x2bef55) {
        var _0x427d25 = {
                'kepMq': 'Ford',
                'BYFRT': 'Meant\x20to\x20be\x20overriden',
                'qEEZN': '2|3|1|0|4',
                'iWWZY': function (_0x5ca738, _0x395845, _0xbf8d64) {
                    return _0x5ca738(_0x395845, _0xbf8d64);
                }
            }, _0x382388 = function () {
                var _0x647de1 = _0x427d25['qEEZN']['split']('|'), _0x2a6630 = 0x0;
                while (!![]) {
                    switch (_0x647de1[_0x2a6630++]) {
                    case '0':
                        _0x287311['copy'] = function () {
                            throw new Error(_0x427d25['BYFRT']);
                        };
                        continue;
                    case '1':
                        Object['defineProperties'](_0x287311, {
                            'make': {
                                'enumerable': !![],
                                'configurable': !![],
                                'get': function () {
                                    return _0x427d25['kepMq'];
                                }
                            }
                        });
                        continue;
                    case '2':
                        var _0x287311 = this;
                        continue;
                    case '3':
                        _0x2bef55['call'](_0x287311);
                        continue;
                    case '4':
                        return _0x287311;
                    }
                    break;
                }
            };
        return _0x427d25['iWWZY'](extend, _0x382388, _0x2bef55), _0x382388;
    }(Object), SuperCar = function (_0xa4d19) {
        var _0x4d9a11 = {
                'CuuVd': '0|4|3|2|1',
                'DRouk': function (_0x16eaf3, _0x2458fb, _0x598cc5) {
                    return _0x16eaf3(_0x2458fb, _0x598cc5);
                }
            }, _0x38ad78 = function (_0x21b8fe) {
                var _0x2570b2 = _0x4d9a11['CuuVd']['split']('|'), _0x599bf2 = 0x0;
                while (!![]) {
                    switch (_0x2570b2[_0x599bf2++]) {
                    case '0':
                        var _0x8a98cf = this;
                        continue;
                    case '1':
                        return _0x8a98cf;
                    case '2':
                        _0x8a98cf['copy'] = function () {
                        };
                        continue;
                    case '3':
                        Object['defineProperties'](_0x8a98cf, {
                            'make': {
                                'enumerable': !![],
                                'configurable': !![],
                                'get': function () {
                                    return _0x21b8fe;
                                }
                            }
                        });
                        continue;
                    case '4':
                        _0xa4d19['call'](_0x8a98cf);
                        continue;
                    }
                    break;
                }
            };
        return _0x4d9a11['DRouk'](extend, _0x38ad78, _0xa4d19), _0x38ad78;
    }(Car);
assertEquals('Ford', new Car()['make']), assertEquals('Bugatti', new SuperCar('Bugatti')['make']), assertEquals('Lambo', new SuperCar('Lambo')['make']), assertEquals('Shelby', new SuperCar('Shelby')['make']);
