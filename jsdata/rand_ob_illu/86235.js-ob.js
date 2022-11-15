/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x531f = ['1BFoqEl', '1894259qMAFqi', '297661AplASd', '429032bGuQUx', '164846ZupkTb', '912100eorsnl', '../../utils/NOOP', '1083246UEuNlc', '1641347SmTUYm'];
const _0x3a6a20 = _0x4f7b;

function _0x4f7b(_0x116c58, _0x529a76) {
    return _0x4f7b = function (_0x39b7db, _0x5d1484) {
        _0x39b7db = _0x39b7db - 470;
        const _0x154b73 = _0x531f[_0x39b7db];

        return _0x154b73;
    }, _0x4f7b(_0x116c58, _0x529a76);
}
(function (_0x3c236d, _0x5ae549) {
    const _0x474bd4 = _0x4f7b;

    while (true) {
        try {
            const _0x2ddd57 = -parseInt(_0x474bd4(0x1d6)) + parseInt(_0x474bd4(0x1d7)) + -parseInt(_0x474bd4(0x1d8)) * -parseInt(_0x474bd4(0x1d9)) + -parseInt(_0x474bd4(0x1da)) + -parseInt(_0x474bd4(0x1db)) + parseInt(_0x474bd4(0x1dc)) + -parseInt(_0x474bd4(0x1dd));

            if (_0x2ddd57 === _0x5ae549) break;else _0x3c236d.push(_0x3c236d.shift());
        } catch (_0x48491b) {
            _0x3c236d.push(_0x3c236d.shift());
        }
    }
})(_0x531f, 978413);

var renderWebGL = require('../../utils/NOOP');

const renderCanvas = require(_0x3a6a20(0x1de));

typeof WEBGL_RENDERER && (renderWebGL = require('./PointLightWebGLRenderer'));
module['exports'] = {
    'renderWebGL': renderWebGL,
    'renderCanvas': renderCanvas
};
