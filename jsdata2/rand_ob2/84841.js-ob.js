const _0x42cd = [
    '23937KZjSFg',
    'isArray',
    'string',
    'src',
    'trim',
    'type',
    '104140bhYBMp',
    '2waqcfZ',
    '1zOaAqe',
    '5591lOuXkU',
    '103726cbmyJL',
    '98144EopnBb',
    '1hWPbYj',
    '1YJidrT',
    '195140cPgpAZ',
    '126388bBVzGO'
];
(function (_0x1eabc9, _0x5e0087) {
    const _0x1a28c4 = _0x405b;
    while (!![]) {
        try {
            const _0x370819 = -parseInt(_0x1a28c4(0x96)) * -parseInt(_0x1a28c4(0x97)) + parseInt(_0x1a28c4(0x98)) * -parseInt(_0x1a28c4(0x99)) + parseInt(_0x1a28c4(0x9a)) + parseInt(_0x1a28c4(0x9b)) * parseInt(_0x1a28c4(0x9c)) + -parseInt(_0x1a28c4(0x9d)) * parseInt(_0x1a28c4(0x9e)) + -parseInt(_0x1a28c4(0x9f)) + parseInt(_0x1a28c4(0xa0));
            if (_0x370819 === _0x5e0087)
                break;
            else
                _0x1eabc9['push'](_0x1eabc9['shift']());
        } catch (_0x146fcf) {
            _0x1eabc9['push'](_0x1eabc9['shift']());
        }
    }
}(_0x42cd, 0x1a1d8));
import { isObject } from './obj';
function _0x405b(_0x540f2a, _0x20f570) {
    return _0x405b = function (_0x42cddf, _0x405b51) {
        _0x42cddf = _0x42cddf - 0x96;
        let _0x33d922 = _0x42cd[_0x42cddf];
        return _0x33d922;
    }, _0x405b(_0x540f2a, _0x20f570);
}
import { getMimetype } from './mimetypes';
const filterSource = function (_0x38c2a9) {
    const _0x9d9385 = _0x405b;
    if (Array['isArray'](_0x38c2a9)) {
        let _0x48e5ce = [];
        _0x38c2a9['forEach'](function (_0x17d829) {
            const _0x3d245c = _0x405b;
            _0x17d829 = filterSource(_0x17d829);
            if (Array[_0x3d245c(0xa1)](_0x17d829))
                _0x48e5ce = _0x48e5ce['concat'](_0x17d829);
            else
                isObject(_0x17d829) && _0x48e5ce['push'](_0x17d829);
        }), _0x38c2a9 = _0x48e5ce;
    } else {
        if (typeof _0x38c2a9 === _0x9d9385(0xa2) && _0x38c2a9['trim']())
            _0x38c2a9 = [fixSource({ 'src': _0x38c2a9 })];
        else
            isObject(_0x38c2a9) && typeof _0x38c2a9[_0x9d9385(0xa3)] === _0x9d9385(0xa2) && _0x38c2a9[_0x9d9385(0xa3)] && _0x38c2a9['src'][_0x9d9385(0xa4)]() ? _0x38c2a9 = [fixSource(_0x38c2a9)] : _0x38c2a9 = [];
    }
    return _0x38c2a9;
};
function fixSource(_0x13570f) {
    const _0x173222 = _0x405b;
    if (!_0x13570f[_0x173222(0xa5)]) {
        const _0xf968c9 = getMimetype(_0x13570f['src']);
        _0xf968c9 && (_0x13570f['type'] = _0xf968c9);
    }
    return _0x13570f;
}
export default filterSource;
