'use strict';
exports['__esModule'] = !![];
var _node = require('./node'), _node2 = _interopRequireDefault(_node), _types = require('./types');
function _interopRequireDefault(_0x4352e9) {
    return _0x4352e9 && _0x4352e9['__esModule'] ? _0x4352e9 : { 'default': _0x4352e9 };
}
function _classCallCheck(_0x1a13ea, _0x51cb25) {
    if (!(_0x1a13ea instanceof _0x51cb25))
        throw new TypeError('Cannot\x20call\x20a\x20class\x20as\x20a\x20function');
}
function _possibleConstructorReturn(_0x37b7d5, _0x3135c4) {
    if (!_0x37b7d5)
        throw new ReferenceError('this\x20hasn\x27t\x20been\x20initialised\x20-\x20super()\x20hasn\x27t\x20been\x20called');
    return _0x3135c4 && (typeof _0x3135c4 === 'object' || typeof _0x3135c4 === 'function') ? _0x3135c4 : _0x37b7d5;
}
function _inherits(_0x94837c, _0x12625e) {
    if (typeof _0x12625e !== 'function' && _0x12625e !== null)
        throw new TypeError('Super\x20expression\x20must\x20either\x20be\x20null\x20or\x20a\x20function,\x20not\x20' + typeof _0x12625e);
    _0x94837c['prototype'] = Object['create'](_0x12625e && _0x12625e['prototype'], {
        'constructor': {
            'value': _0x94837c,
            'enumerable': ![],
            'writable': !![],
            'configurable': !![]
        }
    });
    if (_0x12625e)
        Object['setPrototypeOf'] ? Object['setPrototypeOf'](_0x94837c, _0x12625e) : _0x94837c['__proto__'] = _0x12625e;
}
var Comment = function (_0x4dd5d1) {
    _inherits(_0x4aac92, _0x4dd5d1);
    function _0x4aac92(_0x2dbfe9) {
        _classCallCheck(this, _0x4aac92);
        var _0x1c9952 = _possibleConstructorReturn(this, _0x4dd5d1['call'](this, _0x2dbfe9));
        return _0x1c9952['type'] = _types['COMMENT'], _0x1c9952;
    }
    return _0x4aac92;
}(_node2['default']);
exports['default'] = Comment, module['exports'] = exports['default'];
