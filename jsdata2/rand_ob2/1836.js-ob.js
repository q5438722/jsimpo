const _0x4bbd = [
    '1MNCIvK',
    '150641QPvPnC',
    '347XgFjmO',
    '1232pztEIP',
    '1MGAnfe',
    '646377lcnjFY',
    'imagesToLoad',
    'find',
    'img',
    'undefined',
    'destroyed',
    'imagesLoaded',
    'length',
    'params',
    'updateOnImagesReady',
    'update',
    'imagesReady',
    'loadImage',
    'getAttribute',
    'src',
    'srcset',
    'sizes',
    '382539HqVqLP',
    '86785zVcdIy',
    '1IZmFtw',
    '181936grYDSr',
    '14QLbRgc',
    '15599VSGLzY'
];
(function (_0x5a8aff, _0x460123) {
    const _0x356d88 = _0x20f6;
    while (!![]) {
        try {
            const _0x22f890 = -parseInt(_0x356d88(0x19b)) + -parseInt(_0x356d88(0x19c)) + parseInt(_0x356d88(0x19d)) * parseInt(_0x356d88(0x19e)) + parseInt(_0x356d88(0x19f)) * parseInt(_0x356d88(0x1a0)) + -parseInt(_0x356d88(0x1a1)) * -parseInt(_0x356d88(0x1a2)) + parseInt(_0x356d88(0x1a3)) * -parseInt(_0x356d88(0x1a4)) + parseInt(_0x356d88(0x1a5)) * parseInt(_0x356d88(0x1a6));
            if (_0x22f890 === _0x460123)
                break;
            else
                _0x5a8aff['push'](_0x5a8aff['shift']());
        } catch (_0x50d31b) {
            _0x5a8aff['push'](_0x5a8aff['shift']());
        }
    }
}(_0x4bbd, 0x495e0));
function _0x20f6(_0x1d33a3, _0x5339bc) {
    return _0x20f6 = function (_0x4bbd99, _0x20f6f3) {
        _0x4bbd99 = _0x4bbd99 - 0x19b;
        let _0xdee32f = _0x4bbd[_0x4bbd99];
        return _0xdee32f;
    }, _0x20f6(_0x1d33a3, _0x5339bc);
}
export default function preloadImages() {
    const _0x5760f1 = _0x20f6, _0x37899e = this;
    _0x37899e[_0x5760f1(0x1a7)] = _0x37899e['$el'][_0x5760f1(0x1a8)](_0x5760f1(0x1a9));
    function _0x2291df() {
        const _0x597889 = _0x5760f1;
        if (typeof _0x37899e === _0x597889(0x1aa) || _0x37899e === null || !_0x37899e || _0x37899e[_0x597889(0x1ab)])
            return;
        if (_0x37899e[_0x597889(0x1ac)] !== undefined)
            _0x37899e['imagesLoaded'] += 0x1;
        if (_0x37899e['imagesLoaded'] === _0x37899e[_0x597889(0x1a7)][_0x597889(0x1ad)]) {
            if (_0x37899e[_0x597889(0x1ae)][_0x597889(0x1af)])
                _0x37899e[_0x597889(0x1b0)]();
            _0x37899e['emit'](_0x597889(0x1b1));
        }
    }
    for (let _0x1ee2fa = 0x0; _0x1ee2fa < _0x37899e[_0x5760f1(0x1a7)][_0x5760f1(0x1ad)]; _0x1ee2fa += 0x1) {
        const _0x4a67a5 = _0x37899e[_0x5760f1(0x1a7)][_0x1ee2fa];
        _0x37899e[_0x5760f1(0x1b2)](_0x4a67a5, _0x4a67a5['currentSrc'] || _0x4a67a5[_0x5760f1(0x1b3)](_0x5760f1(0x1b4)), _0x4a67a5[_0x5760f1(0x1b5)] || _0x4a67a5['getAttribute'](_0x5760f1(0x1b5)), _0x4a67a5['sizes'] || _0x4a67a5['getAttribute'](_0x5760f1(0x1b6)), !![], _0x2291df);
    }
}
