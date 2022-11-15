const _0x1792 = [
    '60101MvgZEA',
    'path',
    'child_process',
    'Builds\x20cache-dir\x20with\x20minimal\x20config',
    'join',
    '--config-file',
    '--ignore',
    '**/__tests__',
    'spawn',
    'stderr',
    'data',
    'stdout',
    'close',
    'toEqual',
    'not',
    '461SIZlvO',
    '362XabBoI',
    '2xZZxVO',
    '62362ibXOfy',
    '55712hAMGie',
    '859tBYuRo',
    '10xhmZiV',
    '140022hjKKug',
    '275RvAewn',
    '29aMvcSY'
];
const _0x12c6aa = _0x2db8;
(function (_0x27fd7c, _0x1a2a23) {
    const _0x244244 = _0x2db8;
    while (!![]) {
        try {
            const _0x1468e3 = -parseInt(_0x244244(0x158)) * parseInt(_0x244244(0x159)) + parseInt(_0x244244(0x15a)) * parseInt(_0x244244(0x15b)) + -parseInt(_0x244244(0x15c)) + parseInt(_0x244244(0x15d)) * -parseInt(_0x244244(0x15e)) + parseInt(_0x244244(0x15f)) + -parseInt(_0x244244(0x160)) * -parseInt(_0x244244(0x161)) + parseInt(_0x244244(0x162));
            if (_0x1468e3 === _0x1a2a23)
                break;
            else
                _0x27fd7c['push'](_0x27fd7c['shift']());
        } catch (_0x2fd111) {
            _0x27fd7c['push'](_0x27fd7c['shift']());
        }
    }
}(_0x1792, 0x18d06));
function _0x2db8(_0x3ec1ba, _0x479591) {
    return _0x2db8 = function (_0x179225, _0x2db83e) {
        _0x179225 = _0x179225 - 0x158;
        let _0x34a57b = _0x1792[_0x179225];
        return _0x34a57b;
    }, _0x2db8(_0x3ec1ba, _0x479591);
}
const path = require(_0x12c6aa(0x163)), child = require(_0x12c6aa(0x164));
it(_0x12c6aa(0x165), _0x20a2a7 => {
    const _0x51db4c = _0x12c6aa, _0xaab682 = [
            require['resolve']('@babel/cli/bin/babel.js'),
            path[_0x51db4c(0x166)](__dirname, '..'),
            _0x51db4c(0x167),
            path['join'](__dirname, '.babelrc'),
            _0x51db4c(0x168),
            _0x51db4c(0x169)
        ], _0x57020b = child[_0x51db4c(0x16a)](process['execPath'], _0xaab682);
    let _0x465f44 = '', _0x406b92 = '';
    _0x57020b[_0x51db4c(0x16b)]['on'](_0x51db4c(0x16c), function (_0x99784b) {
        _0x465f44 += _0x99784b;
    }), _0x57020b[_0x51db4c(0x16d)]['on'](_0x51db4c(0x16c), function (_0x42d00d) {
        _0x406b92 += _0x42d00d;
    }), _0x57020b['on'](_0x51db4c(0x16e), function () {
        const _0x38198c = _0x51db4c;
        expect(_0x465f44)[_0x38198c(0x16f)](''), expect(_0x406b92)[_0x38198c(0x170)][_0x38198c(0x16f)](''), _0x20a2a7();
    });
}, 0x7530);
