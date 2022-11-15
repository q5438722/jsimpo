const _0x1b33 = [
    'bundle',
    'PgsnM',
    'DQRHM',
    'QtEHC',
    'zOhKe',
    'series',
    '206737GtBZIF',
    '1bmLWqy',
    '423029jbBkeR',
    '16FYNEcw',
    '13450dqFYHX',
    '1qJikgy',
    '366523xSZBcJ',
    '40572LVWXjC',
    '143PyJDhY',
    '907WwLfnz',
    '975669GiNsqX',
    'gulp',
    'browserify',
    'gulp-streamify',
    'gulp-uglify',
    'vinyl-source-stream',
    '../../build/browserify',
    'build-bundle',
    'main.js',
    'main.tmp',
    'JQNTG',
    'JxgqS',
    'accxC',
    'eZFHJ',
    'resolve',
    'pipe',
    'TnPuS',
    'main.bundle.js',
    'dest',
    'task',
    'build-worker',
    'pdfjs-dist/build/pdf.worker.entry',
    'worker.tmp',
    'pdf.worker.bundle.js',
    'JVinx',
    'cZims'
];
const _0x1c91ce = _0x4082;
(function (_0x40f647, _0x2ddf07) {
    const _0x264673 = _0x4082;
    while (!![]) {
        try {
            const _0x52a19b = parseInt(_0x264673(0x17c)) + parseInt(_0x264673(0x17d)) * parseInt(_0x264673(0x17e)) + parseInt(_0x264673(0x17f)) * parseInt(_0x264673(0x180)) + -parseInt(_0x264673(0x181)) * -parseInt(_0x264673(0x182)) + -parseInt(_0x264673(0x183)) + -parseInt(_0x264673(0x184)) * -parseInt(_0x264673(0x185)) + -parseInt(_0x264673(0x186));
            if (_0x52a19b === _0x2ddf07)
                break;
            else
                _0x40f647['push'](_0x40f647['shift']());
        } catch (_0x3d4834) {
            _0x40f647['push'](_0x40f647['shift']());
        }
    }
}(_0x1b33, -0x121c5 + -0xfe64 + -0x38abf * -0x2));
function _0x4082(_0x1f0888, _0x18ff3f) {
    return _0x4082 = function (_0xd5abb2, _0x480643) {
        _0xd5abb2 = _0xd5abb2 - (0x19c7 + -0xb * 0xd3 + -0x2 * 0x79d);
        let _0x4f0b1c = _0x1b33[_0xd5abb2];
        return _0x4f0b1c;
    }, _0x4082(_0x1f0888, _0x18ff3f);
}
const gulp = require(_0x1c91ce(0x187)), browserify = require(_0x1c91ce(0x188)), streamify = require(_0x1c91ce(0x189)), rename = require('gulp-rename'), uglify = require(_0x1c91ce(0x18a)), source = require(_0x1c91ce(0x18b)), OUTPUT_PATH = _0x1c91ce(0x18c), TMP_FILE_PREFIX = '../../build/browserify_';
gulp['task'](_0x1c91ce(0x18d), function () {
    const _0xbf10ac = _0x1c91ce, _0x171796 = {
            'JQNTG': function (_0x3e252e, _0x5aadd3, _0x5686ca) {
                return _0x3e252e(_0x5aadd3, _0x5686ca);
            },
            'JxgqS': _0xbf10ac(0x18e),
            'accxC': function (_0x1076ca, _0x368a33) {
                return _0x1076ca + _0x368a33;
            },
            'eZFHJ': _0xbf10ac(0x18f),
            'TnPuS': function (_0x42cd04, _0x41bddf) {
                return _0x42cd04(_0x41bddf);
            }
        };
    return _0x171796[_0xbf10ac(0x190)](browserify, _0x171796[_0xbf10ac(0x191)], { 'output': _0x171796[_0xbf10ac(0x192)](TMP_FILE_PREFIX, _0x171796[_0xbf10ac(0x193)]) })['ignore'](require[_0xbf10ac(0x194)]('pdfjs-dist/build/pdf.worker'))['bundle']()[_0xbf10ac(0x195)](source(TMP_FILE_PREFIX + _0xbf10ac(0x18f)))[_0xbf10ac(0x195)](streamify(uglify()))[_0xbf10ac(0x195)](_0x171796[_0xbf10ac(0x196)](rename, _0xbf10ac(0x197)))[_0xbf10ac(0x195)](gulp[_0xbf10ac(0x198)](OUTPUT_PATH));
}), gulp[_0x1c91ce(0x199)](_0x1c91ce(0x19a), function () {
    const _0x387e0d = _0x1c91ce, _0x55df74 = {
            'JVinx': _0x387e0d(0x19b),
            'cZims': function (_0x221ac1, _0x32d2b7, _0x5e741a) {
                return _0x221ac1(_0x32d2b7, _0x5e741a);
            },
            'OtWeB': function (_0x4dc1e1, _0x18a4b8) {
                return _0x4dc1e1 + _0x18a4b8;
            },
            'PgsnM': function (_0x2dd0f4, _0x45d924) {
                return _0x2dd0f4 + _0x45d924;
            },
            'DQRHM': _0x387e0d(0x19c),
            'QtEHC': function (_0x3cad96, _0x96d8cc) {
                return _0x3cad96(_0x96d8cc);
            },
            'zOhKe': _0x387e0d(0x19d)
        }, _0x455fde = require[_0x387e0d(0x194)](_0x55df74[_0x387e0d(0x19e)]);
    return _0x55df74[_0x387e0d(0x19f)](browserify, _0x455fde, { 'output': _0x55df74['OtWeB'](TMP_FILE_PREFIX, _0x387e0d(0x19c)) })[_0x387e0d(0x1a0)]()[_0x387e0d(0x195)](source(_0x55df74[_0x387e0d(0x1a1)](TMP_FILE_PREFIX, _0x55df74[_0x387e0d(0x1a2)])))[_0x387e0d(0x195)](_0x55df74[_0x387e0d(0x1a3)](streamify, _0x55df74[_0x387e0d(0x1a3)](uglify, { 'compress': { 'sequences': ![] } })))[_0x387e0d(0x195)](_0x55df74['QtEHC'](rename, _0x55df74[_0x387e0d(0x1a4)]))[_0x387e0d(0x195)](gulp[_0x387e0d(0x198)](OUTPUT_PATH));
}), gulp[_0x1c91ce(0x199)]('build', gulp[_0x1c91ce(0x1a5)](_0x1c91ce(0x18d), _0x1c91ce(0x19a)));
