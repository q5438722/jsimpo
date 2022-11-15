function _0x4082(_0x1f0888, _0x18ff3f) {
    return _0x4082 = function (_0xd5abb2, _0x480643) {
        _0xd5abb2 = _0xd5abb2 - (6599 + -11 * 211 + -2 * 1949);
        let _0x4f0b1c = _0x1b33[_0xd5abb2];
        return _0x4f0b1c;
    }, _0x4082(_0x1f0888, _0x18ff3f);
}
const gulp = require(_0x1c91ce(391)), browserify = require(_0x1c91ce(392)), streamify = require(_0x1c91ce(393)), rename = require('gulp-rename'), uglify = require(_0x1c91ce(394)), source = require(_0x1c91ce(395)), OUTPUT_PATH = _0x1c91ce(396), TMP_FILE_PREFIX = '../../build/browserify_';
gulp['task'](_0x1c91ce(397), function () {
    const _0xbf10ac = _0x1c91ce, _0x171796 = {
            'JQNTG': function (_0x3e252e, _0x5aadd3, _0x5686ca) {
                return _0x3e252e(_0x5aadd3, _0x5686ca);
            },
            'JxgqS': _0xbf10ac(398),
            'accxC': function (_0x1076ca, _0x368a33) {
                return _0x1076ca + _0x368a33;
            },
            'eZFHJ': _0xbf10ac(399),
            'TnPuS': function (_0x42cd04, _0x41bddf) {
                return _0x42cd04(_0x41bddf);
            }
        };
    return _0x171796[_0xbf10ac(400)](browserify, _0x171796[_0xbf10ac(401)], { 'output': _0x171796[_0xbf10ac(402)](TMP_FILE_PREFIX, _0x171796[_0xbf10ac(403)]) })['ignore'](require[_0xbf10ac(404)]('pdfjs-dist/build/pdf.worker'))['bundle']()[_0xbf10ac(405)](source(TMP_FILE_PREFIX + _0xbf10ac(399)))[_0xbf10ac(405)](streamify(uglify()))[_0xbf10ac(405)](_0x171796[_0xbf10ac(406)](rename, _0xbf10ac(407)))[_0xbf10ac(405)](gulp[_0xbf10ac(408)](OUTPUT_PATH));
}), gulp[_0x1c91ce(409)](_0x1c91ce(410), function () {
    const _0x387e0d = _0x1c91ce, _0x55df74 = {
            'JVinx': _0x387e0d(411),
            'cZims': function (_0x221ac1, _0x32d2b7, _0x5e741a) {
                return _0x221ac1(_0x32d2b7, _0x5e741a);
            },
            'OtWeB': function (_0x4dc1e1, _0x18a4b8) {
                return _0x4dc1e1 + _0x18a4b8;
            },
            'PgsnM': function (_0x2dd0f4, _0x45d924) {
                return _0x2dd0f4 + _0x45d924;
            },
            'DQRHM': _0x387e0d(412),
            'QtEHC': function (_0x3cad96, _0x96d8cc) {
                return _0x3cad96(_0x96d8cc);
            },
            'zOhKe': _0x387e0d(413)
        }, _0x455fde = require[_0x387e0d(404)](_0x55df74[_0x387e0d(414)]);
    return _0x55df74[_0x387e0d(415)](browserify, _0x455fde, { 'output': _0x55df74['OtWeB'](TMP_FILE_PREFIX, _0x387e0d(412)) })[_0x387e0d(416)]()[_0x387e0d(405)](source(_0x55df74[_0x387e0d(417)](TMP_FILE_PREFIX, _0x55df74[_0x387e0d(418)])))[_0x387e0d(405)](_0x55df74[_0x387e0d(419)](streamify, _0x55df74[_0x387e0d(419)](uglify, { 'compress': { 'sequences': ![] } })))[_0x387e0d(405)](_0x55df74['QtEHC'](rename, _0x55df74[_0x387e0d(420)]))[_0x387e0d(405)](gulp[_0x387e0d(408)](OUTPUT_PATH));
}), gulp[_0x1c91ce(409)]('build', gulp[_0x1c91ce(421)](_0x1c91ce(397), _0x1c91ce(410)));