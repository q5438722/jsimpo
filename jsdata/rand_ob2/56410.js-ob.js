'use strict';
const _0x528e = [
    'Received\x20type\x20string\x20(\x27this\x20is\x20not\x20valid\x27)',
    '22dLJSag',
    '5531RFdViP',
    '1PYRzfm',
    '398377EWeDDk',
    '387973ZPECXd',
    '154238UnTweY',
    '184864TtZZxX',
    '803vnDezF',
    '445WCgjxy',
    '1259688XtMBhl',
    '../common',
    'hasCrypto',
    'skip',
    'AECDH-NULL-SHA',
    'listen',
    'mustCall',
    'fail',
    'createServer',
    'throws',
    'ERR_INVALID_ARG_TYPE',
    'TypeError',
    'The\x20\x22options\x22\x20argument\x20must\x20be\x20of\x20type\x20object.\x20'
];
const _0x3f58d6 = _0x4919;
(function (_0x10c10f, _0x41a744) {
    const _0x1dac1b = _0x4919;
    while (!![]) {
        try {
            const _0x206ecc = parseInt(_0x1dac1b(0x19f)) * parseInt(_0x1dac1b(0x1a0)) + parseInt(_0x1dac1b(0x1a1)) * -parseInt(_0x1dac1b(0x1a2)) + -parseInt(_0x1dac1b(0x1a3)) + parseInt(_0x1dac1b(0x1a4)) + -parseInt(_0x1dac1b(0x1a5)) + parseInt(_0x1dac1b(0x1a6)) * -parseInt(_0x1dac1b(0x1a7)) + parseInt(_0x1dac1b(0x1a8));
            if (_0x206ecc === _0x41a744)
                break;
            else
                _0x10c10f['push'](_0x10c10f['shift']());
        } catch (_0x1c9fcf) {
            _0x10c10f['push'](_0x10c10f['shift']());
        }
    }
}(_0x528e, 0x328d3));
const common = require(_0x3f58d6(0x1a9));
if (!common[_0x3f58d6(0x1aa)])
    common[_0x3f58d6(0x1ab)]('missing\x20crypto');
function _0x4919(_0x24c57d, _0xb091ba) {
    return _0x4919 = function (_0x528e37, _0x491968) {
        _0x528e37 = _0x528e37 - 0x19f;
        let _0x2aea45 = _0x528e[_0x528e37];
        return _0x2aea45;
    }, _0x4919(_0x24c57d, _0xb091ba);
}
const assert = require('assert'), tls = require('tls');
tls['createServer']({ 'ciphers': _0x3f58d6(0x1ac) })[_0x3f58d6(0x1ad)](0x0, common[_0x3f58d6(0x1ae)](close)), tls['createServer'](assert[_0x3f58d6(0x1af)])[_0x3f58d6(0x1ad)](0x0, common['mustCall'](close)), tls[_0x3f58d6(0x1b0)]({})['listen'](0x0, common[_0x3f58d6(0x1ae)](close)), assert[_0x3f58d6(0x1b1)](() => tls['createServer']('this\x20is\x20not\x20valid'), {
    'code': _0x3f58d6(0x1b2),
    'name': _0x3f58d6(0x1b3),
    'message': _0x3f58d6(0x1b4) + _0x3f58d6(0x1b5)
}), tls[_0x3f58d6(0x1b0)]()['listen'](0x0, common[_0x3f58d6(0x1ae)](close));
function close() {
    this['close']();
}
