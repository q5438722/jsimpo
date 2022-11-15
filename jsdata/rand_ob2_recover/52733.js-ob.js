var YAMLException = require(_0x1723f7(138)), TYPE_CONSTRUCTOR_OPTIONS = [
        _0x1723f7(139),
        'resolve',
        'construct',
        'instanceOf',
        _0x1723f7(140),
        _0x1723f7(141),
        _0x1723f7(142),
        _0x1723f7(143)
    ], YAML_NODE_KINDS = [
        _0x1723f7(144),
        _0x1723f7(145),
        'mapping'
    ];
function compileStyleAliases(_0x19a30f) {
    var _0xb76f79 = _0x1723f7, _0x352621 = {};
    return _0x19a30f !== null && Object[_0xb76f79(146)](_0x19a30f)[_0xb76f79(147)](function (_0x11b259) {
        var _0x27c51d = _0xb76f79;
        _0x19a30f[_0x11b259][_0x27c51d(147)](function (_0x1c043e) {
            _0x352621[String(_0x1c043e)] = _0x11b259;
        });
    }), _0x352621;
}
function Type(_0x1c7e17, _0x5b0d08) {
    var _0x5aa516 = _0x1723f7;
    _0x5b0d08 = _0x5b0d08 || {}, Object[_0x5aa516(146)](_0x5b0d08)[_0x5aa516(147)](function (_0x29f734) {
        var _0x2c6c8c = _0x5aa516;
        if (TYPE_CONSTRUCTOR_OPTIONS[_0x2c6c8c(148)](_0x29f734) === -1)
            throw new YAMLException(_0x2c6c8c(149) + _0x29f734 + _0x2c6c8c(150) + _0x1c7e17 + _0x2c6c8c(151));
    }), this[_0x5aa516(152)] = _0x1c7e17, this['kind'] = _0x5b0d08[_0x5aa516(139)] || null, this[_0x5aa516(153)] = _0x5b0d08[_0x5aa516(153)] || function () {
        return !![];
    }, this['construct'] = _0x5b0d08['construct'] || function (_0x189ea2) {
        return _0x189ea2;
    }, this[_0x5aa516(154)] = _0x5b0d08[_0x5aa516(154)] || null, this['predicate'] = _0x5b0d08['predicate'] || null, this[_0x5aa516(141)] = _0x5b0d08[_0x5aa516(141)] || null, this[_0x5aa516(142)] = _0x5b0d08[_0x5aa516(142)] || null, this['styleAliases'] = compileStyleAliases(_0x5b0d08[_0x5aa516(143)] || null);
    if (YAML_NODE_KINDS['indexOf'](this[_0x5aa516(139)]) === -1)
        throw new YAMLException('Unknown kind "' + this[_0x5aa516(139)] + _0x5aa516(155) + _0x1c7e17 + _0x5aa516(151));
}
module[_0x1723f7(156)] = Type;