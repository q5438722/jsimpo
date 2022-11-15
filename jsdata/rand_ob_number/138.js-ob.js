'use strict';
const {extname} = require('path'), Promise = require('bluebird'), getExtname = _0xef4467 => {
        if (typeof _0xef4467 !== 'string')
            return '';
        const _0x452e12 = extname(_0xef4467) || _0xef4467;
        return _0x452e12['startsWith']('.') ? _0x452e12['slice'](-0x21 * -0x20 + -0x1778 + 0x1 * 0x1359) : _0x452e12;
    };
class Renderer {
    constructor() {
        this['store'] = {}, this['storeSync'] = {};
    }
    ['list'](_0x2c35d6) {
        return _0x2c35d6 ? this['storeSync'] : this['store'];
    }
    ['get'](_0x2b35da, _0x40caae) {
        const _0x21d5a2 = this[_0x40caae ? 'storeSync' : 'store'];
        return _0x21d5a2[getExtname(_0x2b35da)] || _0x21d5a2[_0x2b35da];
    }
    ['isRenderable'](_0x359e3f) {
        return Boolean(this['get'](_0x359e3f));
    }
    ['isRenderableSync'](_0x36414c) {
        return Boolean(this['get'](_0x36414c, !![]));
    }
    ['getOutput'](_0x3738f2) {
        const _0x39aaa2 = this['get'](_0x3738f2);
        return _0x39aaa2 ? _0x39aaa2['output'] : '';
    }
    ['register'](_0x52d404, _0xf5bbd, _0x4bace9, _0x43feac) {
        if (!_0x52d404)
            throw new TypeError('name\x20is\x20required');
        if (!_0xf5bbd)
            throw new TypeError('output\x20is\x20required');
        if (typeof _0x4bace9 !== 'function')
            throw new TypeError('fn\x20must\x20be\x20a\x20function');
        _0x52d404 = getExtname(_0x52d404), _0xf5bbd = getExtname(_0xf5bbd);
        if (_0x43feac)
            this['storeSync'][_0x52d404] = _0x4bace9, this['storeSync'][_0x52d404]['output'] = _0xf5bbd, this['store'][_0x52d404] = Promise['method'](_0x4bace9);
        else {
            if (_0x4bace9['length'] > 0xe63 + -0x76 * -0x2b + -0x2233)
                _0x4bace9 = Promise['promisify'](_0x4bace9);
            this['store'][_0x52d404] = _0x4bace9;
        }
        this['store'][_0x52d404]['output'] = _0xf5bbd, this['store'][_0x52d404]['compile'] = _0x4bace9['compile'];
    }
}
module['exports'] = Renderer;
