var YAMLException = require('./exception'), TYPE_CONSTRUCTOR_OPTIONS = [
        _0x2416e0(152),
        _0x2416e0(153),
        _0x2416e0(154),
        _0x2416e0(155),
        _0x2416e0(156),
        _0x2416e0(157),
        _0x2416e0(158),
        _0x2416e0(159)
    ], YAML_NODE_KINDS = [
        _0x2416e0(160),
        _0x2416e0(161),
        _0x2416e0(162)
    ];
function _0x41bd(_0x3c6a77, _0x335ee8) {
    return _0x41bd = function (_0x179997, _0x41bd5a) {
        _0x179997 = _0x179997 - 141;
        var _0x41fe4b = _0x1799[_0x179997];
        return _0x41fe4b;
    }, _0x41bd(_0x3c6a77, _0x335ee8);
}
function compileStyleAliases(_0x128fbf) {
    var _0x241d29 = _0x2416e0, _0x60b6f6 = {};
    return _0x128fbf !== null && Object['keys'](_0x128fbf)[_0x241d29(163)](function (_0x46161d) {
        _0x128fbf[_0x46161d]['forEach'](function (_0x382136) {
            _0x60b6f6[String(_0x382136)] = _0x46161d;
        });
    }), _0x60b6f6;
}
function Type(_0x124674, _0x384bff) {
    var _0x7dcbb2 = _0x2416e0;
    _0x384bff = _0x384bff || {}, Object[_0x7dcbb2(164)](_0x384bff)[_0x7dcbb2(163)](function (_0x5d6212) {
        var _0x5eef89 = _0x7dcbb2;
        if (TYPE_CONSTRUCTOR_OPTIONS['indexOf'](_0x5d6212) === -1)
            throw new YAMLException(_0x5eef89(165) + _0x5d6212 + _0x5eef89(166) + _0x124674 + '" YAML type.');
    }), this[_0x7dcbb2(167)] = _0x124674, this[_0x7dcbb2(152)] = _0x384bff[_0x7dcbb2(152)] || null, this['resolve'] = _0x384bff[_0x7dcbb2(153)] || function () {
        return !![];
    }, this[_0x7dcbb2(154)] = _0x384bff[_0x7dcbb2(154)] || function (_0x356fbd) {
        return _0x356fbd;
    }, this[_0x7dcbb2(155)] = _0x384bff[_0x7dcbb2(155)] || null, this[_0x7dcbb2(156)] = _0x384bff['predicate'] || null, this[_0x7dcbb2(157)] = _0x384bff[_0x7dcbb2(157)] || null, this[_0x7dcbb2(158)] = _0x384bff[_0x7dcbb2(158)] || null, this[_0x7dcbb2(159)] = compileStyleAliases(_0x384bff['styleAliases'] || null);
    if (YAML_NODE_KINDS[_0x7dcbb2(168)](this[_0x7dcbb2(152)]) === -1)
        throw new YAMLException(_0x7dcbb2(169) + this[_0x7dcbb2(152)] + _0x7dcbb2(170) + _0x124674 + _0x7dcbb2(171));
}
module[_0x2416e0(172)] = Type;