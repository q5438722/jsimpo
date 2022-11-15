'use strict';
const {extname} = require('path');
const Promise = require('bluebird');
const getExtname = _0x32a73a => {
    if (typeof _0x32a73a !== 'string')
        return '';
    const _0x441bb2 = extname(_0x32a73a) || _0x32a73a;
    return _0x441bb2['startsWith']('.') ? _0x441bb2['slice'](1) : _0x441bb2;
};
class Renderer {
    constructor() {
        this['store'] = {};
        this['storeSync'] = {};
    }
    ['list'](_0x2c8683) {
        return _0x2c8683 ? this['storeSync'] : this['store'];
    }
    ['get'](_0x18c8c0, _0x256a33) {
        const _0x3a9990 = this[_0x256a33 ? 'storeSync' : 'store'];
        return _0x3a9990[getExtname(_0x18c8c0)] || _0x3a9990[_0x18c8c0];
    }
    ['isRenderable'](_0x4cdbd5) {
        return Boolean(this['get'](_0x4cdbd5));
    }
    ['isRenderableSync'](_0x820723) {
        return Boolean(this['get'](_0x820723, !![]));
    }
    ['getOutput'](_0x275f3c) {
        const _0x11adf9 = this['get'](_0x275f3c);
        return _0x11adf9 ? _0x11adf9['output'] : '';
    }
    ['register'](_0x5b9b88, _0x472468, _0xcf4439, _0x4c7128) {
        if (!_0x5b9b88)
            throw new TypeError('name is required');
        if (!_0x472468)
            throw new TypeError('output is required');
        if (typeof _0xcf4439 !== 'function')
            throw new TypeError('fn must be a function');
        _0x5b9b88 = getExtname(_0x5b9b88);
        _0x472468 = getExtname(_0x472468);
        if (_0x4c7128) {
            if ('EMWvV' !== 'EMWvV') {
                if (_0xcf4439['length'] > 2)
                    _0xcf4439 = Promise['promisify'](_0xcf4439);
                this['store'][_0x5b9b88] = _0xcf4439;
            } else {
                this['storeSync'][_0x5b9b88] = _0xcf4439;
                this['storeSync'][_0x5b9b88]['output'] = _0x472468;
                this['store'][_0x5b9b88] = Promise['method'](_0xcf4439);
            }
        } else {
            if (_0xcf4439['length'] > 2)
                _0xcf4439 = Promise['promisify'](_0xcf4439);
            this['store'][_0x5b9b88] = _0xcf4439;
        }
        this['store'][_0x5b9b88]['output'] = _0x472468;
        this['store'][_0x5b9b88]['compile'] = _0xcf4439['compile'];
    }
}
module['exports'] = Renderer;