const _0x3bd1 = ['chunk-with-var-inject', '4OhzZwx', '58769MqXbeT', '4PtYOaX', '127296cDSbiG', '1UmJIYg', '614665wizgQS', '539503pVSMhq', '1LYlLpJ', '431896ulAxOX', '1FVRaZZ', '308071bYReEN', '236972rBNNWN', '2mXunzy', 'ensure', 'ENOIW', './empty'];

function _0x1a05(_0x27150b, _0x5d67c7) {
    return _0x1a05 = function (_0x1ff4e2, _0x33bdc7) {
        _0x1ff4e2 = _0x1ff4e2 - 452;
        const _0x5a5d91 = _0x3bd1[_0x1ff4e2];

        return _0x5a5d91;
    }, _0x1a05(_0x27150b, _0x5d67c7);
}
(function (_0x2f1521, _0x31eb45) {
    const _0x34d02d = _0x1a05;

    while (true) {
        try {
            const _0x444a5e = parseInt(_0x34d02d(0x1c4)) * -parseInt(_0x34d02d(0x1c5)) + parseInt(_0x34d02d(0x1c6)) * parseInt(_0x34d02d(0x1c7)) + parseInt(_0x34d02d(0x1c8)) * parseInt(_0x34d02d(0x1c9)) + -parseInt(_0x34d02d(0x1ca)) * parseInt(_0x34d02d(0x1cb)) + parseInt(_0x34d02d(0x1cc)) * parseInt(_0x34d02d(0x1cd)) + parseInt(_0x34d02d(0x1ce)) + -parseInt(_0x34d02d(0x1cf)) * parseInt(_0x34d02d(0x1d0));

            if (_0x444a5e === _0x31eb45) break;else _0x2f1521.push(_0x2f1521.shift());
        } catch (_0x4a7cac) {
            _0x2f1521.push(_0x2f1521.shift());
        }
    }
})(_0x3bd1, 615293), it('should handle var injection in require.ensure with error callback', function (_0x467889) {
    const _0x614f9d = _0x1a05;
    const _0x5d6fbf = {
        'ENOIW': function (_0x3acd2f, _0x201311) {
            return _0x3acd2f(_0x201311);
        }
    };

    require[_0x614f9d(0x1d1)]([], function (_0x218cac) {
        const _0x14924b = _0x614f9d;

        _0x5d6fbf[_0x14924b(0x1d2)](_0x218cac, _0x14924b(0x1d3));
        const _0x27f3e1 = module.x;

        _0x467889();
    }, function (_0x16ccbf) {}, _0x614f9d(0x1d4));
});