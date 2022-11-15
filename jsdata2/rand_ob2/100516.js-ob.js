const _0x5416 = [
    '3xecbKk',
    '378022BcWPFU',
    '1755141QNeqnB',
    '1wSRBBD',
    'gulp-streamify',
    'gulp-rename',
    'gulp-uglify',
    'vinyl-source-stream',
    '../../build/browserify',
    '../../build/browserify_',
    'task',
    'build-bundle',
    'main.tmp',
    'resolve',
    'pdfjs-dist/build/pdf.worker',
    'bundle',
    'pipe',
    'main.bundle.js',
    'build-worker',
    'pdfjs-dist/build/pdf.worker.entry',
    'worker.tmp',
    'pdf.worker.bundle.js',
    'dest',
    'series',
    '670975vBhSRn',
    '11244srmUvd',
    '97tYmcDM',
    '888873TjMBEJ',
    '113071qklTWA',
    '32188XzGGDf'
];
const _0x44b4aa = _0x7564;
(function (_0x364544, _0x38aef2) {
    const _0x377e6e = _0x7564;
    while (!![]) {
        try {
            const _0x1670b4 = -parseInt(_0x377e6e(0x139)) + -parseInt(_0x377e6e(0x13a)) * -parseInt(_0x377e6e(0x13b)) + -parseInt(_0x377e6e(0x13c)) + -parseInt(_0x377e6e(0x13d)) + parseInt(_0x377e6e(0x13e)) * -parseInt(_0x377e6e(0x13f)) + -parseInt(_0x377e6e(0x140)) + parseInt(_0x377e6e(0x141)) * parseInt(_0x377e6e(0x142));
            if (_0x1670b4 === _0x38aef2)
                break;
            else
                _0x364544['push'](_0x364544['shift']());
        } catch (_0x1e9aa9) {
            _0x364544['push'](_0x364544['shift']());
        }
    }
}(_0x5416, 0xaa7c0));
const gulp = require('gulp'), browserify = require('browserify'), streamify = require(_0x44b4aa(0x143)), rename = require(_0x44b4aa(0x144)), uglify = require(_0x44b4aa(0x145)), source = require(_0x44b4aa(0x146)), OUTPUT_PATH = _0x44b4aa(0x147), TMP_FILE_PREFIX = _0x44b4aa(0x148);
function _0x7564(_0xda3dfe, _0xf2d0ed) {
    return _0x7564 = function (_0x5416c8, _0x75643e) {
        _0x5416c8 = _0x5416c8 - 0x139;
        let _0x5e877c = _0x5416[_0x5416c8];
        return _0x5e877c;
    }, _0x7564(_0xda3dfe, _0xf2d0ed);
}
gulp[_0x44b4aa(0x149)](_0x44b4aa(0x14a), function () {
    const _0x110fcf = _0x44b4aa;
    return browserify('main.js', { 'output': TMP_FILE_PREFIX + _0x110fcf(0x14b) })['ignore'](require[_0x110fcf(0x14c)](_0x110fcf(0x14d)))[_0x110fcf(0x14e)]()[_0x110fcf(0x14f)](source(TMP_FILE_PREFIX + _0x110fcf(0x14b)))[_0x110fcf(0x14f)](streamify(uglify()))[_0x110fcf(0x14f)](rename(_0x110fcf(0x150)))[_0x110fcf(0x14f)](gulp['dest'](OUTPUT_PATH));
}), gulp[_0x44b4aa(0x149)](_0x44b4aa(0x151), function () {
    const _0x50a761 = _0x44b4aa, _0x539d61 = require[_0x50a761(0x14c)](_0x50a761(0x152));
    return browserify(_0x539d61, { 'output': TMP_FILE_PREFIX + _0x50a761(0x153) })[_0x50a761(0x14e)]()[_0x50a761(0x14f)](source(TMP_FILE_PREFIX + 'worker.tmp'))[_0x50a761(0x14f)](streamify(uglify({ 'compress': { 'sequences': ![] } })))[_0x50a761(0x14f)](rename(_0x50a761(0x154)))[_0x50a761(0x14f)](gulp[_0x50a761(0x155)](OUTPUT_PATH));
}), gulp[_0x44b4aa(0x149)]('build', gulp[_0x44b4aa(0x156)](_0x44b4aa(0x14a), 'build-worker'));
