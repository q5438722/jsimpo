const gulp = require('gulp'), browserify = require('browserify'), streamify = require(_0x44b4aa(323)), rename = require(_0x44b4aa(324)), uglify = require(_0x44b4aa(325)), source = require(_0x44b4aa(326)), OUTPUT_PATH = _0x44b4aa(327), TMP_FILE_PREFIX = _0x44b4aa(328);
function _0x7564(_0xda3dfe, _0xf2d0ed) {
    return _0x7564 = function (_0x5416c8, _0x75643e) {
        _0x5416c8 = _0x5416c8 - 313;
        let _0x5e877c = _0x5416[_0x5416c8];
        return _0x5e877c;
    }, _0x7564(_0xda3dfe, _0xf2d0ed);
}
gulp[_0x44b4aa(329)](_0x44b4aa(330), function () {
    const _0x110fcf = _0x44b4aa;
    return browserify('main.js', { 'output': TMP_FILE_PREFIX + _0x110fcf(331) })['ignore'](require[_0x110fcf(332)](_0x110fcf(333)))[_0x110fcf(334)]()[_0x110fcf(335)](source(TMP_FILE_PREFIX + _0x110fcf(331)))[_0x110fcf(335)](streamify(uglify()))[_0x110fcf(335)](rename(_0x110fcf(336)))[_0x110fcf(335)](gulp['dest'](OUTPUT_PATH));
}), gulp[_0x44b4aa(329)](_0x44b4aa(337), function () {
    const _0x50a761 = _0x44b4aa, _0x539d61 = require[_0x50a761(332)](_0x50a761(338));
    return browserify(_0x539d61, { 'output': TMP_FILE_PREFIX + _0x50a761(339) })[_0x50a761(334)]()[_0x50a761(335)](source(TMP_FILE_PREFIX + 'worker.tmp'))[_0x50a761(335)](streamify(uglify({ 'compress': { 'sequences': ![] } })))[_0x50a761(335)](rename(_0x50a761(340)))[_0x50a761(335)](gulp[_0x50a761(341)](OUTPUT_PATH));
}), gulp[_0x44b4aa(329)]('build', gulp[_0x44b4aa(342)](_0x44b4aa(330), 'build-worker'));