'use strict';
var YAMLException = require('./exception'), TYPE_CONSTRUCTOR_OPTIONS = [
        'kind',
        'resolve',
        'construct',
        'instanceOf',
        'predicate',
        'represent',
        'defaultStyle',
        'styleAliases'
    ], YAML_NODE_KINDS = [
        'scalar',
        'sequence',
        'mapping'
    ];
function compileStyleAliases(_0x291e2d) {
    var _0x42eb77 = {};
    return _0x291e2d !== null && Object['keys'](_0x291e2d)['forEach'](function (_0xb25553) {
        _0x291e2d[_0xb25553]['forEach'](function (_0x4a8ccb) {
            _0x42eb77[String(_0x4a8ccb)] = _0xb25553;
        });
    }), _0x42eb77;
}
function Type(_0x3b0cde, _0x1e0628) {
    _0x1e0628 = _0x1e0628 || {}, Object['keys'](_0x1e0628)['forEach'](function (_0x197b7b) {
        if (TYPE_CONSTRUCTOR_OPTIONS['indexOf'](_0x197b7b) === -(0x2149 + 0x22e4 + 0x2 * -0x2216))
            throw new YAMLException('Unknown\x20option\x20\x22' + _0x197b7b + '\x22\x20is\x20met\x20in\x20definition\x20of\x20\x22' + _0x3b0cde + '\x22\x20YAML\x20type.');
    }), this['tag'] = _0x3b0cde, this['kind'] = _0x1e0628['kind'] || null, this['resolve'] = _0x1e0628['resolve'] || function () {
        return !![];
    }, this['construct'] = _0x1e0628['construct'] || function (_0x2a227f) {
        return _0x2a227f;
    }, this['instanceOf'] = _0x1e0628['instanceOf'] || null, this['predicate'] = _0x1e0628['predicate'] || null, this['represent'] = _0x1e0628['represent'] || null, this['defaultStyle'] = _0x1e0628['defaultStyle'] || null, this['styleAliases'] = compileStyleAliases(_0x1e0628['styleAliases'] || null);
    if (YAML_NODE_KINDS['indexOf'](this['kind']) === -(-0x17ff + 0x2 * -0x9c8 + 0x572 * 0x8))
        throw new YAMLException('Unknown\x20kind\x20\x22' + this['kind'] + '\x22\x20is\x20specified\x20for\x20\x22' + _0x3b0cde + '\x22\x20YAML\x20type.');
}
module['exports'] = Type;
