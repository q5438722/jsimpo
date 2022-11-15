const _0x3fa6 = [
    '282586MPmiOu',
    '1150778aZjExn',
    '604658KuwlOV',
    '1261091OovxbL',
    'trackElements_',
    'length',
    'addTrackElement_',
    'defineProperty',
    'indexOf',
    'push',
    'getTrackElementByTrack_',
    'track',
    'removeTrackElement_',
    'off',
    'function',
    'splice',
    '680343kPzBiW',
    '1NkbSDq',
    '9FnmMSz',
    '96899jRKLXr',
    '4109KNwnCj',
    '237peNSAQ',
    '2qiOAbh'
];
function _0x4c7e(_0x161c46, _0x5d7e64) {
    return _0x4c7e = function (_0x3fa63f, _0x4c7e5f) {
        _0x3fa63f = _0x3fa63f - 0xb6;
        let _0x670eb3 = _0x3fa6[_0x3fa63f];
        return _0x670eb3;
    }, _0x4c7e(_0x161c46, _0x5d7e64);
}
const _0x4e285f = _0x4c7e;
(function (_0x4dfd13, _0x28a980) {
    const _0x1d2daf = _0x4c7e;
    while (!![]) {
        try {
            const _0x2ffd77 = -parseInt(_0x1d2daf(0xb6)) * -parseInt(_0x1d2daf(0xb7)) + parseInt(_0x1d2daf(0xb8)) * -parseInt(_0x1d2daf(0xb9)) + -parseInt(_0x1d2daf(0xba)) * -parseInt(_0x1d2daf(0xbb)) + parseInt(_0x1d2daf(0xbc)) * parseInt(_0x1d2daf(0xbd)) + parseInt(_0x1d2daf(0xbe)) + -parseInt(_0x1d2daf(0xbf)) + -parseInt(_0x1d2daf(0xc0));
            if (_0x2ffd77 === _0x28a980)
                break;
            else
                _0x4dfd13['push'](_0x4dfd13['shift']());
        } catch (_0x5c82ae) {
            _0x4dfd13['push'](_0x4dfd13['shift']());
        }
    }
}(_0x3fa6, 0x9a5de));
class HtmlTrackElementList {
    constructor(_0x376b54 = []) {
        const _0x43e247 = _0x4c7e;
        this[_0x43e247(0xc1)] = [], Object['defineProperty'](this, _0x43e247(0xc2), {
            'get'() {
                const _0x108c0b = _0x43e247;
                return this[_0x108c0b(0xc1)][_0x108c0b(0xc2)];
            }
        });
        for (let _0x140cd7 = 0x0, _0x1ef1e3 = _0x376b54['length']; _0x140cd7 < _0x1ef1e3; _0x140cd7++) {
            this[_0x43e247(0xc3)](_0x376b54[_0x140cd7]);
        }
    }
    [_0x4e285f(0xc3)](_0x2f27c1) {
        const _0x2b74c7 = _0x4e285f, _0x5ad72d = this[_0x2b74c7(0xc1)][_0x2b74c7(0xc2)];
        !('' + _0x5ad72d in this) && Object[_0x2b74c7(0xc4)](this, _0x5ad72d, {
            'get'() {
                return this['trackElements_'][_0x5ad72d];
            }
        }), this['trackElements_'][_0x2b74c7(0xc5)](_0x2f27c1) === -0x1 && this[_0x2b74c7(0xc1)][_0x2b74c7(0xc6)](_0x2f27c1);
    }
    [_0x4e285f(0xc7)](_0x1fc909) {
        const _0x53d557 = _0x4e285f;
        let _0x5e5741;
        for (let _0x136428 = 0x0, _0x377320 = this[_0x53d557(0xc1)][_0x53d557(0xc2)]; _0x136428 < _0x377320; _0x136428++) {
            if (_0x1fc909 === this[_0x53d557(0xc1)][_0x136428][_0x53d557(0xc8)]) {
                _0x5e5741 = this[_0x53d557(0xc1)][_0x136428];
                break;
            }
        }
        return _0x5e5741;
    }
    [_0x4e285f(0xc9)](_0x212cde) {
        const _0x2d6dbf = _0x4e285f;
        for (let _0x49ced5 = 0x0, _0x2deb61 = this[_0x2d6dbf(0xc1)][_0x2d6dbf(0xc2)]; _0x49ced5 < _0x2deb61; _0x49ced5++) {
            if (_0x212cde === this[_0x2d6dbf(0xc1)][_0x49ced5]) {
                this[_0x2d6dbf(0xc1)][_0x49ced5]['track'] && typeof this['trackElements_'][_0x49ced5][_0x2d6dbf(0xc8)][_0x2d6dbf(0xca)] === _0x2d6dbf(0xcb) && this[_0x2d6dbf(0xc1)][_0x49ced5][_0x2d6dbf(0xc8)][_0x2d6dbf(0xca)]();
                typeof this[_0x2d6dbf(0xc1)][_0x49ced5][_0x2d6dbf(0xca)] === _0x2d6dbf(0xcb) && this[_0x2d6dbf(0xc1)][_0x49ced5]['off']();
                this['trackElements_'][_0x2d6dbf(0xcc)](_0x49ced5, 0x1);
                break;
            }
        }
    }
}
export default HtmlTrackElementList;
