var mdeps = require(_0x330050(487)), test = require('tap')[_0x330050(488)], JSONStream = require(_0x330050(489)), packer = require(_0x330050(490)), concat = require(_0x330050(491)), path = require(_0x330050(492));
test(_0x330050(493), function (_0x2dad54) {
    var _0x36bd91 = _0x330050;
    _0x2dad54[_0x36bd91(494)](1);
    var _0x84c777 = mdeps();
    _0x84c777[_0x36bd91(495)](path[_0x36bd91(496)](__dirname, _0x36bd91(497)));
    var _0x90950a = packer();
    _0x84c777[_0x36bd91(498)](JSONStream['stringify']())['pipe'](_0x90950a)[_0x36bd91(498)](concat(function (_0x5911f6) {
        var _0x282491 = _0x36bd91;
        Function(_0x282491(499), _0x5911f6[_0x282491(500)](_0x282491(501)))({
            'log': function (_0x1d1a83) {
                var _0x2c03ce = _0x282491;
                _0x2dad54[_0x2c03ce(502)](_0x1d1a83, 333);
            }
        });
    }));
});