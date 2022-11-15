var extend = function (_0x352911, _0x26847d) {
        function _0x10be26() {
            this['constructor'] = _0x352911;
        }
        _0x10be26['prototype'] = _0x26847d['prototype'], _0x352911['prototype'] = new _0x10be26();
    }, Car = function (_0x3f977a) {
        var _0x2cfaae = function () {
            var _0xb11065 = this;
            return _0x3f977a['call'](_0xb11065), Object['defineProperties'](_0xb11065, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        return 'Ford';
                    }
                }
            }), _0xb11065['copy'] = function () {
                throw new Error('Meant\x20to\x20be\x20overriden');
            }, _0xb11065;
        };
        return extend(_0x2cfaae, _0x3f977a), _0x2cfaae;
    }(Object), SuperCar = function (_0x102f9d) {
        var _0x516bd6 = function (_0x1b22bf) {
            var _0xf1e989 = this;
            return _0x102f9d['call'](_0xf1e989), Object['defineProperties'](_0xf1e989, {
                'make': {
                    'enumerable': !![],
                    'configurable': !![],
                    'get': function () {
                        return _0x1b22bf;
                    }
                }
            }), _0xf1e989['copy'] = function () {
            }, _0xf1e989;
        };
        return extend(_0x516bd6, _0x102f9d), _0x516bd6;
    }(Car);
assertEquals('Ford', new Car()['make']), assertEquals('Bugatti', new SuperCar('Bugatti')['make']), assertEquals('Lambo', new SuperCar('Lambo')['make']), assertEquals('Shelby', new SuperCar('Shelby')['make']);
