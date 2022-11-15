/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x14d7 = [
    '1btrVgL',
    'height',
    'width',
    'index',
    'data',
    '133437lPueHx',
    '2iWQaiC',
    '166004WqHixn',
    '208237qoZwFK',
    '1TnBtQa',
    '952855dupSwJ',
    '87251JdHSwn',
    '8QzOGFT',
    '1Dmraum',
    '345775ZZWSAY',
    '2747019oZFDmM'
];
(function (_0x4aff07, _0xcf0227) {
    var _0x50ee05 = _0x5772;
    while (!![]) {
        try {
            var _0x217bfe = -parseInt(_0x50ee05(0xd5)) * parseInt(_0x50ee05(0xd6)) + -parseInt(_0x50ee05(0xd7)) + parseInt(_0x50ee05(0xd8)) + parseInt(_0x50ee05(0xd9)) * -parseInt(_0x50ee05(0xda)) + -parseInt(_0x50ee05(0xdb)) * parseInt(_0x50ee05(0xdc)) + -parseInt(_0x50ee05(0xdd)) * parseInt(_0x50ee05(0xde)) + parseInt(_0x50ee05(0xdf)) * parseInt(_0x50ee05(0xe0));
            if (_0x217bfe === _0xcf0227)
                break;
            else
                _0x4aff07['push'](_0x4aff07['shift']());
        } catch (_0x5198a7) {
            _0x4aff07['push'](_0x4aff07['shift']());
        }
    }
}(_0x14d7, 0x805ac));
var FindByIndex = function (_0x6c4fdd, _0x2b3672, _0x538383, _0x2bef30) {
    var _0x1d97a7 = _0x5772;
    _0x2b3672 === undefined && (_0x2b3672 = 0x0);
    _0x538383 === undefined && (_0x538383 = ![]);
    var _0x1b83b2 = 0x0, _0x57f340, _0x3d3c88, _0x4dc4fd;
    if (_0x538383)
        for (_0x3d3c88 = _0x2bef30[_0x1d97a7(0xe1)] - 0x1; _0x3d3c88 >= 0x0; _0x3d3c88--) {
            for (_0x57f340 = _0x2bef30[_0x1d97a7(0xe2)] - 0x1; _0x57f340 >= 0x0; _0x57f340--) {
                _0x4dc4fd = _0x2bef30['data'][_0x3d3c88][_0x57f340];
                if (_0x4dc4fd && _0x4dc4fd[_0x1d97a7(0xe3)] === _0x6c4fdd) {
                    if (_0x1b83b2 === _0x2b3672)
                        return _0x4dc4fd;
                    else
                        _0x1b83b2 += 0x1;
                }
            }
        }
    else
        for (_0x3d3c88 = 0x0; _0x3d3c88 < _0x2bef30[_0x1d97a7(0xe1)]; _0x3d3c88++) {
            for (_0x57f340 = 0x0; _0x57f340 < _0x2bef30[_0x1d97a7(0xe2)]; _0x57f340++) {
                _0x4dc4fd = _0x2bef30[_0x1d97a7(0xe4)][_0x3d3c88][_0x57f340];
                if (_0x4dc4fd && _0x4dc4fd[_0x1d97a7(0xe3)] === _0x6c4fdd) {
                    if (_0x1b83b2 === _0x2b3672)
                        return _0x4dc4fd;
                    else
                        _0x1b83b2 += 0x1;
                }
            }
        }
    return null;
};
function _0x5772(_0xf155e8, _0x339bd0) {
    return _0x5772 = function (_0x14d71d, _0x5772a5) {
        _0x14d71d = _0x14d71d - 0xd5;
        var _0x164e93 = _0x14d7[_0x14d71d];
        return _0x164e93;
    }, _0x5772(_0xf155e8, _0x339bd0);
}
module['exports'] = FindByIndex;
