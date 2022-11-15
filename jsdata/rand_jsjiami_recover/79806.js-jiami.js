'use strict';
exports['__esModule'] = !![];
var _node = require('./node');
var _node2 = _interopRequireDefault(_node);
var _types = require('./types');
function _interopRequireDefault(_0x145583) {
    return _0x145583 && _0x145583['__esModule'] ? _0x145583 : { 'default': _0x145583 };
}
function _classCallCheck(_0x2bccde, _0x12111e) {
    if (!(_0x2bccde instanceof _0x12111e)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(_0x37dcb3, _0x4df7c2) {
    if (!_0x37dcb3) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return _0x4df7c2 && (typeof _0x4df7c2 === 'object' || typeof _0x4df7c2 === 'function') ? _0x4df7c2 : _0x37dcb3;
}
function _inherits(_0x5281ee, _0xaa5381) {
    if (typeof _0xaa5381 !== 'function' && _0xaa5381 !== null) {
        if ('HLVDB' !== 'HLVDB') {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        } else {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof _0xaa5381);
        }
    }
    _0x5281ee['prototype'] = Object['create'](_0xaa5381 && _0xaa5381['prototype'], {
        'constructor': {
            'value': _0x5281ee,
            'enumerable': ![],
            'writable': !![],
            'configurable': !![]
        }
    });
    if (_0xaa5381)
        Object['setPrototypeOf'] ? Object['setPrototypeOf'](_0x5281ee, _0xaa5381) : _0x5281ee['__proto__'] = _0xaa5381;
}
var Comment = function (_0x5b9ddd) {
    _inherits(_0x2031f5, _0x5b9ddd);
    function _0x2031f5(_0x5986a9) {
        _classCallCheck(this, _0x2031f5);
        var _0x2e7fc1 = _possibleConstructorReturn(this, _0x5b9ddd['call'](this, _0x5986a9));
        _0x2e7fc1['type'] = _types['COMMENT'];
        return _0x2e7fc1;
    }
    return _0x2031f5;
}(_node2['default']);
exports['default'] = Comment;
module['exports'] = exports['default'];