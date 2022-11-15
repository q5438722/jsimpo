'use strict';
var _0x2593 = [
    '746539fNNGCd',
    '2689081lgBKGO',
    './exception',
    'kind',
    'predicate',
    'represent',
    'defaultStyle',
    'styleAliases',
    'scalar',
    'sequence',
    'keys',
    'forEach',
    'indexOf',
    'Unknown\x20option\x20\x22',
    '\x22\x20is\x20met\x20in\x20definition\x20of\x20\x22',
    '\x22\x20YAML\x20type.',
    'tag',
    'resolve',
    'instanceOf',
    '\x22\x20is\x20specified\x20for\x20\x22',
    'exports',
    '914096ThiwHK',
    '1425962kYWMiS',
    '554463bpvgPl',
    '1717339CdOVjK',
    '875894TvhFKt'
];
var _0x1723f7 = _0x21bb;
function _0x21bb(_0x2c3b6f, _0x438c22) {
    return _0x21bb = function (_0x2593f9, _0x21bb9f) {
        _0x2593f9 = _0x2593f9 - 0x83;
        var _0x4f5c77 = _0x2593[_0x2593f9];
        return _0x4f5c77;
    }, _0x21bb(_0x2c3b6f, _0x438c22);
}
(function (_0x408d81, _0x3b452c) {
    var _0x7a4cb = _0x21bb;
    while (!![]) {
        try {
            var _0x35d5e7 = parseInt(_0x7a4cb(0x83)) + -parseInt(_0x7a4cb(0x84)) + parseInt(_0x7a4cb(0x85)) + -parseInt(_0x7a4cb(0x86)) + -parseInt(_0x7a4cb(0x87)) + parseInt(_0x7a4cb(0x88)) + parseInt(_0x7a4cb(0x89));
            if (_0x35d5e7 === _0x3b452c)
                break;
            else
                _0x408d81['push'](_0x408d81['shift']());
        } catch (_0x41fce1) {
            _0x408d81['push'](_0x408d81['shift']());
        }
    }
}(_0x2593, 0xd80f8));
var YAMLException = require(_0x1723f7(0x8a)), TYPE_CONSTRUCTOR_OPTIONS = [
        _0x1723f7(0x8b),
        'resolve',
        'construct',
        'instanceOf',
        _0x1723f7(0x8c),
        _0x1723f7(0x8d),
        _0x1723f7(0x8e),
        _0x1723f7(0x8f)
    ], YAML_NODE_KINDS = [
        _0x1723f7(0x90),
        _0x1723f7(0x91),
        'mapping'
    ];
function compileStyleAliases(_0x19a30f) {
    var _0xb76f79 = _0x1723f7, _0x352621 = {};
    return _0x19a30f !== null && Object[_0xb76f79(0x92)](_0x19a30f)[_0xb76f79(0x93)](function (_0x11b259) {
        var _0x27c51d = _0xb76f79;
        _0x19a30f[_0x11b259][_0x27c51d(0x93)](function (_0x1c043e) {
            _0x352621[String(_0x1c043e)] = _0x11b259;
        });
    }), _0x352621;
}
function Type(_0x1c7e17, _0x5b0d08) {
    var _0x5aa516 = _0x1723f7;
    _0x5b0d08 = _0x5b0d08 || {}, Object[_0x5aa516(0x92)](_0x5b0d08)[_0x5aa516(0x93)](function (_0x29f734) {
        var _0x2c6c8c = _0x5aa516;
        if (TYPE_CONSTRUCTOR_OPTIONS[_0x2c6c8c(0x94)](_0x29f734) === -0x1)
            throw new YAMLException(_0x2c6c8c(0x95) + _0x29f734 + _0x2c6c8c(0x96) + _0x1c7e17 + _0x2c6c8c(0x97));
    }), this[_0x5aa516(0x98)] = _0x1c7e17, this['kind'] = _0x5b0d08[_0x5aa516(0x8b)] || null, this[_0x5aa516(0x99)] = _0x5b0d08[_0x5aa516(0x99)] || function () {
        return !![];
    }, this['construct'] = _0x5b0d08['construct'] || function (_0x189ea2) {
        return _0x189ea2;
    }, this[_0x5aa516(0x9a)] = _0x5b0d08[_0x5aa516(0x9a)] || null, this['predicate'] = _0x5b0d08['predicate'] || null, this[_0x5aa516(0x8d)] = _0x5b0d08[_0x5aa516(0x8d)] || null, this[_0x5aa516(0x8e)] = _0x5b0d08[_0x5aa516(0x8e)] || null, this['styleAliases'] = compileStyleAliases(_0x5b0d08[_0x5aa516(0x8f)] || null);
    if (YAML_NODE_KINDS['indexOf'](this[_0x5aa516(0x8b)]) === -0x1)
        throw new YAMLException('Unknown\x20kind\x20\x22' + this[_0x5aa516(0x8b)] + _0x5aa516(0x9b) + _0x1c7e17 + _0x5aa516(0x97));
}
module[_0x1723f7(0x9c)] = Type;
