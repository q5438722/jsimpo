var renderWebGL = require(_0x19d9bf(146)), renderCanvas = require(_0x19d9bf(146));
typeof WEBGL_RENDERER && (renderWebGL = require('./VideoWebGLRenderer'));
typeof CANVAS_RENDERER && (renderCanvas = require('./VideoCanvasRenderer'));
function _0x56f9(_0x173e5e, _0x92c8e9) {
    return _0x56f9 = function (_0x1dc24d, _0x56f9f2) {
        _0x1dc24d = _0x1dc24d - 136;
        var _0x4c77aa = _0x1dc2[_0x1dc24d];
        return _0x4c77aa;
    }, _0x56f9(_0x173e5e, _0x92c8e9);
}
module[_0x19d9bf(147)] = {
    'renderWebGL': renderWebGL,
    'renderCanvas': renderCanvas
};