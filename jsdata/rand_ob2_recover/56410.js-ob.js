const common = require(_0x3f58d6(425));
if (!common[_0x3f58d6(426)])
    common[_0x3f58d6(427)]('missing crypto');
function _0x4919(_0x24c57d, _0xb091ba) {
    return _0x4919 = function (_0x528e37, _0x491968) {
        _0x528e37 = _0x528e37 - 415;
        let _0x2aea45 = _0x528e[_0x528e37];
        return _0x2aea45;
    }, _0x4919(_0x24c57d, _0xb091ba);
}
const assert = require('assert'), tls = require('tls');
tls['createServer']({ 'ciphers': _0x3f58d6(428) })[_0x3f58d6(429)](0, common[_0x3f58d6(430)](close)), tls['createServer'](assert[_0x3f58d6(431)])[_0x3f58d6(429)](0, common['mustCall'](close)), tls[_0x3f58d6(432)]({})['listen'](0, common[_0x3f58d6(430)](close)), assert[_0x3f58d6(433)](() => tls['createServer']('this is not valid'), {
    'code': _0x3f58d6(434),
    'name': _0x3f58d6(435),
    'message': _0x3f58d6(436) + _0x3f58d6(437)
}), tls[_0x3f58d6(432)]()['listen'](0, common[_0x3f58d6(430)](close));
function close() {
    this['close']();
}