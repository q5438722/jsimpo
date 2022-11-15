var extend = function (_0x31fadc, _0x3f0162) {
    function _0x1b5ad6() {
        this['constructor'] = _0x31fadc;
    }
    _0x1b5ad6['prototype'] = _0x3f0162['prototype'];
    _0x31fadc['prototype'] = new _0x1b5ad6();
};
var Car = function (_0x1baa60) {
    var _0x35e674 = function () {
        var _0x1804b4 = {
            'XbeSS': 'eNZAQ',
            'JSWxL': 'Meant to be overriden'
        };
        var _0x612bbc = this;
        _0x1baa60['call'](_0x612bbc);
        Object['defineProperties'](_0x612bbc, {
            'make': {
                'enumerable': !![],
                'configurable': !![],
                'get': function () {
                    if ('HssXv' === _0x1804b4['XbeSS']) {
                        return make;
                    } else {
                        return 'Ford';
                    }
                }
            }
        });
        _0x612bbc['copy'] = function () {
            if ('tqXxA' !== 'mMocn') {
                throw new Error(_0x1804b4['JSWxL']);
            } else {
                var _0x5a4016 = this;
                _0x1baa60['call'](_0x5a4016);
                Object['defineProperties'](_0x5a4016, {
                    'make': {
                        'enumerable': !![],
                        'configurable': !![],
                        'get': function () {
                            return 'Ford';
                        }
                    }
                });
                _0x5a4016['copy'] = function () {
                    throw new Error('Meant to be overriden');
                };
                return _0x5a4016;
            }
        };
        return _0x612bbc;
    };
    extend(_0x35e674, _0x1baa60);
    return _0x35e674;
}(Object);
var SuperCar = function (_0x4b2103) {
    var _0xd7ace6 = function (_0x495749) {
        var _0x4ec8b7 = '2|1|3|4|0'['split']('|'), _0xc38863 = 0;
        while (!![]) {
            switch (_0x4ec8b7[_0xc38863++]) {
            case '0':
                return _0xc9737b;
            case '1':
                _0x4b2103['call'](_0xc9737b);
                continue;
            case '2':
                var _0xc9737b = this;
                continue;
            case '3':
                Object['defineProperties'](_0xc9737b, {
                    'make': {
                        'enumerable': !![],
                        'configurable': !![],
                        'get': function () {
                            return _0x495749;
                        }
                    }
                });
                continue;
            case '4':
                _0xc9737b['copy'] = function () {
                };
                continue;
            }
            break;
        }
    };
    extend(_0xd7ace6, _0x4b2103);
    return _0xd7ace6;
}(Car);
assertEquals('Ford', new Car()['make']);
assertEquals('Bugatti', new SuperCar('Bugatti')['make']);
assertEquals('Lambo', new SuperCar('Lambo')['make']);
assertEquals('Shelby', new SuperCar('Shelby')['make']);