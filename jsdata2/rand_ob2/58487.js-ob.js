'use strict';
var _0xe491 = [
    '6451hAXIKA',
    '1152501DsBBib',
    '1GikCgy',
    '13KQOWhE',
    '66919TbLAil',
    '258730umnZEk',
    '6757WtMtGG',
    '827IpJqiS',
    'Test\x20Promise.all',
    'all',
    'then',
    'Promise.all([p1,\x20p2,\x20p5])\x20is\x20fulfilled.',
    'Promise.all([p1,\x20p2,\x20p5])\x20is\x20rejected.',
    'Promise.all()\x20is\x20fulfilled.',
    'Promise.all([])\x20is\x20rejected.',
    'Promise.all([p1,\x20p2,\x20p3])\x20is\x20fulfilled.',
    'result.length',
    'result[1]',
    'result[2]',
    'Promise.all([p1,\x20p2,\x20p3])\x20is\x20rejected.',
    'Promise.all([p1,\x20p6,\x20p5])\x20is\x20fulfilled.',
    'Promise.all([p1,\x20p6,\x20p5])\x20is\x20rejected.',
    'result',
    'Promise.all([p9])\x20is\x20fulfilled.',
    'result[0]',
    'Promise.all([p9])\x20is\x20rejected.',
    'Promise.all([p9,,,])\x20is\x20fulfilled.',
    'undefined',
    'Promise.all([p9,,,])\x20is\x20rejected.',
    'Promise.all([p9,42])\x20is\x20fulfilled.',
    'Promise.all({})\x20is\x20rejected.',
    '747356QyvqPu',
    '1614788dcJNCB',
    '238hBqevx'
];
var _0x28d41b = _0x59fa;
(function (_0x4f9b95, _0x26bc5b) {
    var _0x7f377e = _0x59fa;
    while (!![]) {
        try {
            var _0x1eb29d = parseInt(_0x7f377e(0xd6)) + -parseInt(_0x7f377e(0xd7)) + parseInt(_0x7f377e(0xd8)) * -parseInt(_0x7f377e(0xd9)) + parseInt(_0x7f377e(0xda)) * -parseInt(_0x7f377e(0xdb)) + -parseInt(_0x7f377e(0xdc)) * parseInt(_0x7f377e(0xdd)) + -parseInt(_0x7f377e(0xde)) + -parseInt(_0x7f377e(0xdf)) * -parseInt(_0x7f377e(0xe0));
            if (_0x1eb29d === _0x26bc5b)
                break;
            else
                _0x4f9b95['push'](_0x4f9b95['shift']());
        } catch (_0x3be76a) {
            _0x4f9b95['push'](_0x4f9b95['shift']());
        }
    }
}(_0xe491, 0xdcb9b));
description(_0x28d41b(0xe1));
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
        _0xe4914e = _0xe4914e - 0xd6;
        var _0x928052 = _0xe491[_0xe4914e];
        return _0x928052;
    }, _0x59fa(_0x1e1226, _0x3f12ef);
}
Promise[_0x28d41b(0xe2)]([
    p1,
    p2,
    p5
])[_0x28d41b(0xe3)](function (_0x4d1810) {
    var _0x335729 = _0x28d41b;
    testFailed(_0x335729(0xe4));
}, function () {
    var _0x3811ae = _0x28d41b;
    testFailed(_0x3811ae(0xe5));
}), Promise[_0x28d41b(0xe2)]()[_0x28d41b(0xe3)](function () {
    var _0x59f405 = _0x28d41b;
    testFailed(_0x59f405(0xe6));
}, function () {
    var _0x41785d = _0x28d41b;
    return testPassed('Promise.all()\x20is\x20rejected.'), Promise['all']([])[_0x41785d(0xe3)](function (_0x319b41) {
        testPassed('Promise.all([])\x20is\x20fulfilled.'), result = _0x319b41, shouldBe('result.length', '0');
    }, function () {
        var _0x280fa3 = _0x41785d;
        testFailed(_0x280fa3(0xe7));
    });
})['then'](function () {
    var _0x67c1c7 = _0x28d41b;
    return Promise[_0x67c1c7(0xe2)]([
        p1,
        p2,
        p3
    ])['then'](function (_0x577e07) {
        var _0x51d299 = _0x67c1c7;
        testPassed(_0x51d299(0xe8)), result = _0x577e07, shouldBe(_0x51d299(0xe9), '3'), shouldBeEqualToString('result[0]', 'p1'), shouldBeEqualToString(_0x51d299(0xea), 'p2'), shouldBeEqualToString(_0x51d299(0xeb), 'p3');
    }, function () {
        var _0x4cb735 = _0x67c1c7;
        testFailed(_0x4cb735(0xec));
    });
})[_0x28d41b(0xe3)](function () {
    var _0x5429e5 = _0x28d41b;
    return Promise[_0x5429e5(0xe2)]([
        p1,
        p6,
        p5
    ])['then'](function (_0x2f207f) {
        var _0x1a8e75 = _0x5429e5;
        testFailed(_0x1a8e75(0xed));
    }, function (_0x473d9f) {
        var _0x5274b3 = _0x5429e5;
        testPassed(_0x5274b3(0xee)), result = _0x473d9f, shouldBeEqualToString(_0x5274b3(0xef), 'p6');
    });
})['then'](function () {
    var _0x2dfaac = _0x28d41b;
    return Promise[_0x2dfaac(0xe2)]([p9])[_0x2dfaac(0xe3)](function (_0x36c362) {
        var _0x5b1b89 = _0x2dfaac;
        testPassed(_0x5b1b89(0xf0)), result = _0x36c362, shouldBe(_0x5b1b89(0xe9), '1'), shouldBeEqualToString(_0x5b1b89(0xf1), 'p2');
    }, function (_0x1bdb6e) {
        var _0x55ed96 = _0x2dfaac;
        testFailed(_0x55ed96(0xf2));
    });
})[_0x28d41b(0xe3)](function () {
    var _0x5dc49e = _0x28d41b;
    return Promise[_0x5dc49e(0xe2)]([
        p9,
        ,
        ,
    ])[_0x5dc49e(0xe3)](function (_0x4a6c99) {
        var _0x28672d = _0x5dc49e;
        testPassed(_0x28672d(0xf3)), result = _0x4a6c99, shouldBe(_0x28672d(0xe9), '3'), shouldBeEqualToString('result[0]', 'p2'), shouldBe(_0x28672d(0xea), _0x28672d(0xf4)), shouldBe(_0x28672d(0xeb), _0x28672d(0xf4));
    }, function (_0x4462ae) {
        var _0x513c81 = _0x5dc49e;
        testFailed(_0x513c81(0xf5));
    });
})[_0x28d41b(0xe3)](function () {
    var _0x511536 = _0x28d41b;
    return Promise[_0x511536(0xe2)]([
        p9,
        0x2a
    ])['then'](function (_0x506a8b) {
        var _0x28554a = _0x511536;
        testPassed(_0x28554a(0xf6)), result = _0x506a8b, shouldBe(_0x28554a(0xe9), '2'), shouldBeEqualToString(_0x28554a(0xf1), 'p2'), shouldBe(_0x28554a(0xea), '42');
    }, function (_0x35094b) {
        testFailed('Promise.all([p9,42])\x20is\x20rejected.');
    });
})[_0x28d41b(0xe3)](function () {
    var _0x29e387 = _0x28d41b;
    return Promise[_0x29e387(0xe2)]({})[_0x29e387(0xe3)](function (_0x5a8e48) {
        testFailed('Promise.all({})\x20is\x20fulfilled.');
    }, function (_0x40c5f9) {
        var _0x5ecc96 = _0x29e387;
        testPassed(_0x5ecc96(0xf7));
    });
})[_0x28d41b(0xe3)](finishJSTest, finishJSTest), shouldBe(_0x28d41b(0xef), _0x28d41b(0xf4));
