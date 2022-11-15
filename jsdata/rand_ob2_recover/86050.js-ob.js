var BuildGameObject = require(_0x1318a6(249)), GameObjectCreator = require(_0x1318a6(250)), GetAdvancedValue = require(_0x1318a6(251)), Video = require('./Video');
function _0x5980(_0x2ba7e5, _0x7b0baa) {
    return _0x5980 = function (_0x268703, _0x5980d6) {
        _0x268703 = _0x268703 - 237;
        var _0x561625 = _0x2687[_0x268703];
        return _0x561625;
    }, _0x5980(_0x2ba7e5, _0x7b0baa);
}
GameObjectCreator[_0x1318a6(252)](_0x1318a6(253), function (_0xc05e4a, _0x2a51b8) {
    var _0x83a691 = _0x1318a6;
    _0xc05e4a === undefined && (_0xc05e4a = {});
    var _0xb93d7f = GetAdvancedValue(_0xc05e4a, _0x83a691(254), null), _0x370a43 = new Video(this['scene'], 0, 0, _0xb93d7f);
    return _0x2a51b8 !== undefined && (_0xc05e4a[_0x83a691(255)] = _0x2a51b8), BuildGameObject(this['scene'], _0x370a43, _0xc05e4a), !_0xc05e4a[_0x83a691(255)] && this[_0x83a691(256)][_0x83a691(255)](_0x370a43), _0x370a43;
});