var CONST = require('../const');
var CounterClockwise = function (_0x286bfc) {
    if (_0x286bfc > Math['PI']) {
        _0x286bfc -= CONST['PI2'];
    }
    return Math['abs']((_0x35ad53['KCtAe'](_0x286bfc + CONST['TAU'], CONST['PI2']) - CONST['PI2']) % CONST['PI2']);
};
module['exports'] = CounterClockwise;