it(_0x4d91f0(465), function () {
    var _0x3ed3e5 = _0x4d91f0;
    (_0x3ed3e5(466) == typeof define && define[_0x3ed3e5(467)] ? define : (_0x38b1b5, _0xab2869) => {
        return _0xab2869();
    })([_0x3ed3e5(468)], _0x3de3e9 => {
        return new _0x3de3e9(1324);
    }), expect(module[_0x3ed3e5(469)])['toHaveProperty'](_0x3ed3e5(470), 1324), ('function' == typeof define && define[_0x3ed3e5(467)] ? define : (_0x2c6210, _0x270417) => {
        return _0x270417();
    })([_0x3ed3e5(468)], _0x15a90a => {
        return new _0x15a90a(4231);
    }), expect(module[_0x3ed3e5(469)])[_0x3ed3e5(471)](_0x3ed3e5(470), 4231);
}), it('should parse fancy AMD calls with arrow functions', function () {
    var _0x470010 = _0x4d91f0;
    require(_0x470010(472)[_0x470010(473)](' ')), require(_0x470010(474)[_0x470010(475)](_0x470010(476), _0x470010(477))[_0x470010(478)](3)[_0x470010(475)](/\*/g, './')[_0x470010(473)](' '), (_0x1accd8, _0x5c9635, _0x366165, _0x3a70f2, _0x429f5d) => {
        var _0x2780b4 = _0x470010;
        expect(typeof _0x1accd8)[_0x2780b4(479)](_0x2780b4(466)), expect(typeof _0x5c9635)['toBe'](_0x2780b4(480)), expect(typeof _0x366165)[_0x2780b4(479)](_0x2780b4(480)), expect(typeof _0x1accd8(_0x2780b4(468)))[_0x2780b4(479)](_0x2780b4(466)), expect(typeof _0x3a70f2)[_0x2780b4(479)](_0x2780b4(466)), expect(_0x429f5d)['toBe']('a');
    }), define(_0x470010(474)['replace']('module', _0x470010(477))[_0x470010(478)](3)[_0x470010(475)](/\*/g, './')[_0x470010(473)](' '), (_0x427622, _0x37b416, _0xdc53ce, _0x55b522, _0x49e495) => {
        var _0x25ba40 = _0x470010;
        expect(typeof _0x427622)[_0x25ba40(479)](_0x25ba40(466)), expect(typeof _0x37b416)[_0x25ba40(479)]('object'), expect(typeof _0xdc53ce)[_0x25ba40(479)]('object'), expect(typeof _0x427622(_0x25ba40(468)))['toBe'](_0x25ba40(466)), expect(typeof _0x55b522)[_0x25ba40(479)](_0x25ba40(466)), expect(_0x49e495)[_0x25ba40(479)]('a');
    });
}), it(_0x4d91f0(481), function (_0x1cdd63) {
    var _0x450b6e = _0x4d91f0, _0x2e865b = 'b';
    require([
        _0x450b6e(482),
        _0x450b6e(483) + _0x2e865b,
        !![] ? _0x450b6e(482) : 'fail'
    ], (_0x1f3b61, _0x3a9e36, _0x32876c) => {
        var _0x56b1de = _0x450b6e;
        expect(_0x1f3b61)[_0x56b1de(479)](1), expect(_0x32876c)[_0x56b1de(479)](1), expect(_0x3a9e36)[_0x56b1de(479)]('b'), _0x1cdd63();
    });
}), it(_0x4d91f0(484), function (_0x108526) {
    var _0x1b39bc = _0x4d91f0;
    define(_0x1b39bc(485), [_0x1b39bc(482)], _0x41a603 => {
        var _0x4edf0d = _0x1b39bc;
        expect(_0x41a603)[_0x4edf0d(479)](1), _0x108526();
    });
}), it(_0x4d91f0(486), function (_0x5ddb72) {
    var _0x841cfe = _0x4d91f0;
    define(_0x841cfe(485), [_0x841cfe(487)], _0x1af708 => {
        var _0x19bc60 = _0x841cfe;
        expect(_0x1af708['b'])[_0x19bc60(488)](), _0x5ddb72();
    });
}), it(_0x4d91f0(489), function (_0x2fa66b) {
    var _0x16f183 = _0x4d91f0;
    define([_0x16f183(477)], _0xe1528a => {
        var _0xef78da = _0x16f183;
        expect(_0xe1528a(_0xef78da(482)))['toBe'](1), _0x2fa66b();
    });
}), it('should be able to use require.js-style define, without name, with arrow function', function (_0x297fcf) {
    !![] && define(['./circular'], _0x3d216c => {
        var _0x17eb24 = _0x1eb6;
        expect(_0x3d216c)[_0x17eb24(479)](1), _0x297fcf();
    });
}), it('should be able to use require.js-style define, with empty dependencies, with arrow function', function (_0x4ff98e) {
    var _0x225264 = _0x4d91f0;
    define(_0x225264(485), [], () => {
        _0x4ff98e();
    });
}), it(_0x4d91f0(490), function (_0x139f5f) {
    !![] && define('name', () => {
        _0x139f5f();
    });
}), it(_0x4d91f0(491), function (_0x50b870) {
    var _0x540719 = exports, _0xef4eeb = module;
    define((_0xfb2edb, _0x5682d9, _0x416931) => {
        var _0x8294f5 = _0x1eb6;
        expect(typeof _0xfb2edb)[_0x8294f5(479)](_0x8294f5(466)), expect(_0x5682d9)[_0x8294f5(479)](_0x540719), expect(_0x416931)['toBe'](_0xef4eeb), expect(_0xfb2edb('./circular'))[_0x8294f5(479)](1), _0x50b870();
    });
}), it('should pull in all dependencies of an AMD module with arrow function', function (_0x50fd27) {
    define(_0x14cb14 => {
        var _0x13dde9 = _0x1eb6;
        expect(_0x14cb14('./amdmodule'))[_0x13dde9(479)]('a'), _0x50fd27();
    });
}), it('should create a chunk for require.js require, with arrow function', function (_0x5bc73a) {
    var _0x5630ab = !![];
    require(['./c'], _0x211d38 => {
        var _0x43d6d0 = _0x1eb6;
        expect(_0x5630ab)[_0x43d6d0(479)](![]), expect(_0x211d38)[_0x43d6d0(479)]('c'), expect(require(_0x43d6d0(492)))[_0x43d6d0(479)]('d'), _0x5bc73a();
    }), _0x5630ab = ![];
});