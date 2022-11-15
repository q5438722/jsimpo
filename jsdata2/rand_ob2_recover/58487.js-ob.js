description(_0x28d41b(225));
var result = undefined, p1 = new Promise(function (_0x5d26e7) {
        _0x5d26e7('p1');
    }), p2 = new Promise(function (_0x4e58de) {
        _0x4e58de('p2');
    }), p3 = new Promise(function (_0x3fb106) {
        _0x3fb106('p3');
    }), p4 = new Promise(function () {
    }), p5 = new Promise(function () {
    }), p6 = new Promise(function (_0x4258d7, _0x26d722) {
        _0x26d722('p6');
    }), p7 = new Promise(function (_0x5a6602, _0x3febba) {
        _0x3febba('p7');
    }), p8 = new Promise(function (_0x2a9bf1, _0x49f5b8) {
        _0x49f5b8('p8');
    }), p9 = new Promise(function (_0x3ce66b) {
        _0x3ce66b(p2);
    });
function _0x59fa(_0x1e1226, _0x3f12ef) {
    return _0x59fa = function (_0xe4914e, _0x59fa73) {
        _0xe4914e = _0xe4914e - 214;
        var _0x928052 = _0xe491[_0xe4914e];
        return _0x928052;
    }, _0x59fa(_0x1e1226, _0x3f12ef);
}
Promise[_0x28d41b(226)]([
    p1,
    p2,
    p5
])[_0x28d41b(227)](function (_0x4d1810) {
    var _0x335729 = _0x28d41b;
    testFailed(_0x335729(228));
}, function () {
    var _0x3811ae = _0x28d41b;
    testFailed(_0x3811ae(229));
}), Promise[_0x28d41b(226)]()[_0x28d41b(227)](function () {
    var _0x59f405 = _0x28d41b;
    testFailed(_0x59f405(230));
}, function () {
    var _0x41785d = _0x28d41b;
    return testPassed('Promise.all() is rejected.'), Promise['all']([])[_0x41785d(227)](function (_0x319b41) {
        testPassed('Promise.all([]) is fulfilled.'), result = _0x319b41, shouldBe('result.length', '0');
    }, function () {
        var _0x280fa3 = _0x41785d;
        testFailed(_0x280fa3(231));
    });
})['then'](function () {
    var _0x67c1c7 = _0x28d41b;
    return Promise[_0x67c1c7(226)]([
        p1,
        p2,
        p3
    ])['then'](function (_0x577e07) {
        var _0x51d299 = _0x67c1c7;
        testPassed(_0x51d299(232)), result = _0x577e07, shouldBe(_0x51d299(233), '3'), shouldBeEqualToString('result[0]', 'p1'), shouldBeEqualToString(_0x51d299(234), 'p2'), shouldBeEqualToString(_0x51d299(235), 'p3');
    }, function () {
        var _0x4cb735 = _0x67c1c7;
        testFailed(_0x4cb735(236));
    });
})[_0x28d41b(227)](function () {
    var _0x5429e5 = _0x28d41b;
    return Promise[_0x5429e5(226)]([
        p1,
        p6,
        p5
    ])['then'](function (_0x2f207f) {
        var _0x1a8e75 = _0x5429e5;
        testFailed(_0x1a8e75(237));
    }, function (_0x473d9f) {
        var _0x5274b3 = _0x5429e5;
        testPassed(_0x5274b3(238)), result = _0x473d9f, shouldBeEqualToString(_0x5274b3(239), 'p6');
    });
})['then'](function () {
    var _0x2dfaac = _0x28d41b;
    return Promise[_0x2dfaac(226)]([p9])[_0x2dfaac(227)](function (_0x36c362) {
        var _0x5b1b89 = _0x2dfaac;
        testPassed(_0x5b1b89(240)), result = _0x36c362, shouldBe(_0x5b1b89(233), '1'), shouldBeEqualToString(_0x5b1b89(241), 'p2');
    }, function (_0x1bdb6e) {
        var _0x55ed96 = _0x2dfaac;
        testFailed(_0x55ed96(242));
    });
})[_0x28d41b(227)](function () {
    var _0x5dc49e = _0x28d41b;
    return Promise[_0x5dc49e(226)]([
        p9,
        ,
        ,
    ])[_0x5dc49e(227)](function (_0x4a6c99) {
        var _0x28672d = _0x5dc49e;
        testPassed(_0x28672d(243)), result = _0x4a6c99, shouldBe(_0x28672d(233), '3'), shouldBeEqualToString('result[0]', 'p2'), shouldBe(_0x28672d(234), _0x28672d(244)), shouldBe(_0x28672d(235), _0x28672d(244));
    }, function (_0x4462ae) {
        var _0x513c81 = _0x5dc49e;
        testFailed(_0x513c81(245));
    });
})[_0x28d41b(227)](function () {
    var _0x511536 = _0x28d41b;
    return Promise[_0x511536(226)]([
        p9,
        42
    ])['then'](function (_0x506a8b) {
        var _0x28554a = _0x511536;
        testPassed(_0x28554a(246)), result = _0x506a8b, shouldBe(_0x28554a(233), '2'), shouldBeEqualToString(_0x28554a(241), 'p2'), shouldBe(_0x28554a(234), '42');
    }, function (_0x35094b) {
        testFailed('Promise.all([p9,42]) is rejected.');
    });
})[_0x28d41b(227)](function () {
    var _0x29e387 = _0x28d41b;
    return Promise[_0x29e387(226)]({})[_0x29e387(227)](function (_0x5a8e48) {
        testFailed('Promise.all({}) is fulfilled.');
    }, function (_0x40c5f9) {
        var _0x5ecc96 = _0x29e387;
        testPassed(_0x5ecc96(247));
    });
})[_0x28d41b(227)](finishJSTest, finishJSTest), shouldBe(_0x28d41b(239), _0x28d41b(244));