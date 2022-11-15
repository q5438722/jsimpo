const _0x3f4b = ['ESPAA', 'foo', 'bar', 'bMadf', 'util.inspect -  exceptions should print the error message, not \'{}\'', '[Error]', 'FAIL', '[Error: FAIL]', '[TypeError: FAIL]', 'xnqnS', 'AFmFy', '[SyntaxError: FAIL]', '1180844MdUmhQ', '1078924dTRCFy', '53FEAovM', '14598iioHOG', '1jAKXmI', '648097UWFVmI', '701720eSfWgG', '154769JdLfNQ', '1ZcqSsK', '609763zUnWqN', 'assert', '../../', 'inspect', 'util.inspect - test for sparse array', '5|3|0|4|2|1', '[ \'foo\', , \'baz\', [length]: 3 ]', '[ \'foo\', \'bar\', \'baz\' ]', 'baz', 'VSWDA', 'split', 'equal', '[ , , , ,  ]'];
const _0x3c377e = _0x9c68;

function _0x9c68(_0x392d54, _0x1f57a8) {
    return _0x9c68 = function (_0x1b235b, _0x2f7fc1) {
        _0x1b235b = _0x1b235b - 342;
        const _0xca0473 = _0x3f4b[_0x1b235b];

        return _0xca0473;
    }, _0x9c68(_0x392d54, _0x1f57a8);
}
(function (_0x166017, _0x5cdc2e) {
    const _0xef9f3a = _0x9c68;

    while (true) {
        try {
            const _0x23109f = parseInt(_0xef9f3a(0x156)) + parseInt(_0xef9f3a(0x157)) + parseInt(_0xef9f3a(0x158)) * -parseInt(_0xef9f3a(0x159)) + -parseInt(_0xef9f3a(0x15a)) * parseInt(_0xef9f3a(0x15b)) + -parseInt(_0xef9f3a(0x15c)) + -parseInt(_0xef9f3a(0x15d)) * parseInt(_0xef9f3a(0x15e)) + parseInt(_0xef9f3a(0x15f));

            if (_0x23109f === _0x5cdc2e) break;else _0x166017.push(_0x166017.shift());
        } catch (_0x31b127) {
            _0x166017.push(_0x166017.shift());
        }
    }
})(_0x3f4b, 591251);

const assert = require(_0x3c377e(0x160));

const util = require(_0x3c377e(0x161));

suite(_0x3c377e(0x162)), test(_0x3c377e(0x163), function () {
    const _0xfc967d = _0x3c377e;
    const _0x1a36cf = {
        'VSWDA': _0xfc967d(0x164),
        'koIxa': _0xfc967d(0x165),
        'ESPAA': _0xfc967d(0x166),
        'bMadf': _0xfc967d(0x167)
    };

    const _0x442200 = _0x1a36cf[_0xfc967d(0x168)][_0xfc967d(0x169)]('|');

    var _0x5c3b32 = 0;

    while (true) {
        switch (_0x442200[_0x5c3b32++]) {
            case '0':
                delete _0x5888f3[1];
                continue;
            case '1':
                assert[_0xfc967d(0x16a)](util.inspect(new Array(5)), _0xfc967d(0x16b));
                continue;
            case '2':
                assert[_0xfc967d(0x16a)](util[_0xfc967d(0x162)](_0x5888f3, true), _0x1a36cf.koIxa);
                continue;
            case '3':
                assert[_0xfc967d(0x16a)](util[_0xfc967d(0x162)](_0x5888f3), _0x1a36cf[_0xfc967d(0x16c)]);
                continue;
            case '4':
                assert.equal(util.inspect(_0x5888f3), '[ \'foo\', , \'baz\' ]');
                continue;
            case '5':
                const _0x5888f3 = [_0xfc967d(0x16d), _0xfc967d(0x16e), _0x1a36cf[_0xfc967d(0x16f)]];

                continue;
        }
        break;
    }
}), test(_0x3c377e(0x170), function () {
    const _0x29d18e = _0x3c377e;
    const _0x29a4ec = {
        'IyiXo': _0x29d18e(0x171),
        'xnqnS': _0x29d18e(0x172),
        'AFmFy': _0x29d18e(0x173),
        'aRWBe': _0x29d18e(0x174)
    };

    assert[_0x29d18e(0x16a)](util[_0x29d18e(0x162)](new Error()), _0x29a4ec.IyiXo), assert[_0x29d18e(0x16a)](util[_0x29d18e(0x162)](new Error(_0x29a4ec[_0x29d18e(0x175)])), _0x29a4ec[_0x29d18e(0x176)]), assert[_0x29d18e(0x16a)](util[_0x29d18e(0x162)](new TypeError(_0x29d18e(0x172))), _0x29a4ec.aRWBe), assert[_0x29d18e(0x16a)](util.inspect(new SyntaxError(_0x29a4ec[_0x29d18e(0x175)])), _0x29d18e(0x177));
});
