'use strict';
var _0x1799 = [
    'sequence',
    'mapping',
    'forEach',
    'keys',
    'Unknown\x20option\x20\x22',
    '\x22\x20is\x20met\x20in\x20definition\x20of\x20\x22',
    'tag',
    'indexOf',
    'Unknown\x20kind\x20\x22',
    '\x22\x20is\x20specified\x20for\x20\x22',
    '\x22\x20YAML\x20type.',
    'exports',
    '1075708jnFySV',
    '151273WOvYkC',
    '2kDbZwd',
    '486201AOlsbT',
    '2nYFQYP',
    '315554kacUOm',
    '1516345FGFFnJ',
    '41GDDLuM',
    '2321qjXcNE',
    '235DEnNZG',
    '8587zjqaWo',
    'kind',
    'resolve',
    'construct',
    'instanceOf',
    'predicate',
    'represent',
    'defaultStyle',
    'styleAliases',
    'scalar'
];
var _0x2416e0 = _0x41bd;
(function (_0x347aa2, _0x23e921) {
    var _0x50b89d = _0x41bd;
    while (!![]) {
        try {
            var _0x21f8dd = parseInt(_0x50b89d(0x8d)) + -parseInt(_0x50b89d(0x8e)) * -parseInt(_0x50b89d(0x8f)) + -parseInt(_0x50b89d(0x90)) + -parseInt(_0x50b89d(0x91)) * -parseInt(_0x50b89d(0x92)) + parseInt(_0x50b89d(0x93)) + -parseInt(_0x50b89d(0x94)) * parseInt(_0x50b89d(0x95)) + parseInt(_0x50b89d(0x96)) * -parseInt(_0x50b89d(0x97));
            if (_0x21f8dd === _0x23e921)
                break;
            else
                _0x347aa2['push'](_0x347aa2['shift']());
        } catch (_0x2020af) {
            _0x347aa2['push'](_0x347aa2['shift']());
        }
    }
}(_0x1799, 0xe22c0));
var YAMLException = require('./exception'), TYPE_CONSTRUCTOR_OPTIONS = [
        _0x2416e0(0x98),
        _0x2416e0(0x99),
        _0x2416e0(0x9a),
        _0x2416e0(0x9b),
        _0x2416e0(0x9c),
        _0x2416e0(0x9d),
        _0x2416e0(0x9e),
        _0x2416e0(0x9f)
    ], YAML_NODE_KINDS = [
        _0x2416e0(0xa0),
        _0x2416e0(0xa1),
        _0x2416e0(0xa2)
    ];
function _0x41bd(_0x3c6a77, _0x335ee8) {
    return _0x41bd = function (_0x179997, _0x41bd5a) {
        _0x179997 = _0x179997 - 0x8d;
        var _0x41fe4b = _0x1799[_0x179997];
        return _0x41fe4b;
    }, _0x41bd(_0x3c6a77, _0x335ee8);
}
function compileStyleAliases(_0x128fbf) {
    var _0x241d29 = _0x2416e0, _0x60b6f6 = {};
    return _0x128fbf !== null && Object['keys'](_0x128fbf)[_0x241d29(0xa3)](function (_0x46161d) {
        _0x128fbf[_0x46161d]['forEach'](function (_0x382136) {
            _0x60b6f6[String(_0x382136)] = _0x46161d;
        });
    }), _0x60b6f6;
}
function Type(_0x124674, _0x384bff) {
    var _0x7dcbb2 = _0x2416e0;
    _0x384bff = _0x384bff || {}, Object[_0x7dcbb2(0xa4)](_0x384bff)[_0x7dcbb2(0xa3)](function (_0x5d6212) {
        var _0x5eef89 = _0x7dcbb2;
        if (TYPE_CONSTRUCTOR_OPTIONS['indexOf'](_0x5d6212) === -0x1)
            throw new YAMLException(_0x5eef89(0xa5) + _0x5d6212 + _0x5eef89(0xa6) + _0x124674 + '\x22\x20YAML\x20type.');
    }), this[_0x7dcbb2(0xa7)] = _0x124674, this[_0x7dcbb2(0x98)] = _0x384bff[_0x7dcbb2(0x98)] || null, this['resolve'] = _0x384bff[_0x7dcbb2(0x99)] || function () {
        return !![];
    }, this[_0x7dcbb2(0x9a)] = _0x384bff[_0x7dcbb2(0x9a)] || function (_0x356fbd) {
        return _0x356fbd;
    }, this[_0x7dcbb2(0x9b)] = _0x384bff[_0x7dcbb2(0x9b)] || null, this[_0x7dcbb2(0x9c)] = _0x384bff['predicate'] || null, this[_0x7dcbb2(0x9d)] = _0x384bff[_0x7dcbb2(0x9d)] || null, this[_0x7dcbb2(0x9e)] = _0x384bff[_0x7dcbb2(0x9e)] || null, this[_0x7dcbb2(0x9f)] = compileStyleAliases(_0x384bff['styleAliases'] || null);
    if (YAML_NODE_KINDS[_0x7dcbb2(0xa8)](this[_0x7dcbb2(0x98)]) === -0x1)
        throw new YAMLException(_0x7dcbb2(0xa9) + this[_0x7dcbb2(0x98)] + _0x7dcbb2(0xaa) + _0x124674 + _0x7dcbb2(0xab));
}
module[_0x2416e0(0xac)] = Type;
