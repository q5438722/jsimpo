'use strict';
const _0x4132 = [
    'output',
    'compile',
    'exports',
    '415315fkZJPb',
    '656959uOuiEf',
    '1HzTUhz',
    '677396hSiGxM',
    '1tJnifQ',
    '589843qkvXdb',
    '41ucyuZX',
    '16659qDzMar',
    '529078HoHZnQ',
    '1hPFaVg',
    '884201uCtTlE',
    'path',
    'bluebird',
    'string',
    'BWyyE',
    'yaZmW',
    'KzRmE',
    'startsWith',
    'slice',
    'store',
    'storeSync',
    'list',
    'get',
    'oLTup',
    'isRenderable',
    'broCH',
    'isRenderableSync',
    'sBgwk',
    'getOutput',
    'register',
    'name\x20is\x20required',
    'fn\x20must\x20be\x20a\x20function',
    'RwGNQ',
    'output\x20is\x20required',
    'bjcTb',
    'function',
    'mhwrV',
    'method',
    'length',
    'promisify'
];
const _0x500149 = _0x366e;
(function (_0x14c999, _0x703e94) {
    const _0x537e26 = _0x366e;
    while (!![]) {
        try {
            const _0x57a8a4 = -parseInt(_0x537e26(0x96)) + parseInt(_0x537e26(0x97)) * -parseInt(_0x537e26(0x98)) + -parseInt(_0x537e26(0x99)) * -parseInt(_0x537e26(0x9a)) + parseInt(_0x537e26(0x9b)) + -parseInt(_0x537e26(0x9c)) * parseInt(_0x537e26(0x9d)) + parseInt(_0x537e26(0x9e)) + parseInt(_0x537e26(0x9f)) * parseInt(_0x537e26(0xa0));
            if (_0x57a8a4 === _0x703e94)
                break;
            else
                _0x14c999['push'](_0x14c999['shift']());
        } catch (_0x1a3642) {
            _0x14c999['push'](_0x14c999['shift']());
        }
    }
}(_0x4132, 0x3 * 0x3cf21 + 0x6a * -0x100b + 0x95554));
const {extname} = require(_0x500149(0xa1)), Promise = require(_0x500149(0xa2)), getExtname = _0x91257c => {
        const _0xcbf07c = _0x500149, _0x149426 = {
                'BWyyE': function (_0x3a259c, _0x2ebb3f) {
                    return _0x3a259c !== _0x2ebb3f;
                },
                'yaZmW': _0xcbf07c(0xa3),
                'KzRmE': function (_0x508e67, _0x275751) {
                    return _0x508e67(_0x275751);
                }
            };
        if (_0x149426[_0xcbf07c(0xa4)](typeof _0x91257c, _0x149426[_0xcbf07c(0xa5)]))
            return '';
        const _0x2e61ac = _0x149426[_0xcbf07c(0xa6)](extname, _0x91257c) || _0x91257c;
        return _0x2e61ac[_0xcbf07c(0xa7)]('.') ? _0x2e61ac[_0xcbf07c(0xa8)](0x198 * -0xd + -0x26e + -0x1 * -0x1727) : _0x2e61ac;
    };
class Renderer {
    constructor() {
        const _0x343ce8 = _0x500149;
        this[_0x343ce8(0xa9)] = {}, this[_0x343ce8(0xaa)] = {};
    }
    [_0x500149(0xab)](_0x15b7e5) {
        const _0xf80a60 = _0x500149;
        return _0x15b7e5 ? this[_0xf80a60(0xaa)] : this[_0xf80a60(0xa9)];
    }
    [_0x500149(0xac)](_0x3868db, _0x53501a) {
        const _0x4f04ab = _0x500149, _0x5b21e5 = { 'oLTup': 'storeSync' }, _0x3aee66 = this[_0x53501a ? _0x5b21e5[_0x4f04ab(0xad)] : _0x4f04ab(0xa9)];
        return _0x3aee66[getExtname(_0x3868db)] || _0x3aee66[_0x3868db];
    }
    [_0x500149(0xae)](_0x50f1ec) {
        const _0x5c15ad = _0x500149, _0x56d628 = {
                'broCH': function (_0x39f735, _0x594669) {
                    return _0x39f735(_0x594669);
                }
            };
        return _0x56d628[_0x5c15ad(0xaf)](Boolean, this['get'](_0x50f1ec));
    }
    [_0x500149(0xb0)](_0x1b6cd1) {
        const _0x474433 = _0x500149, _0x4ae28d = {
                'sBgwk': function (_0xd41ac7, _0x364430) {
                    return _0xd41ac7(_0x364430);
                }
            };
        return _0x4ae28d[_0x474433(0xb1)](Boolean, this['get'](_0x1b6cd1, !![]));
    }
    [_0x500149(0xb2)](_0x5c5fc9) {
        const _0x4a6bf3 = this['get'](_0x5c5fc9);
        return _0x4a6bf3 ? _0x4a6bf3['output'] : '';
    }
    [_0x500149(0xb3)](_0x411147, _0x5c59e9, _0x2ac9b9, _0x1f6691) {
        const _0xef9d74 = _0x500149, _0x59a98c = {
                'RwGNQ': _0xef9d74(0xb4),
                'bjcTb': function (_0x2cbb64, _0x3855df) {
                    return _0x2cbb64 !== _0x3855df;
                },
                'hyzLe': _0xef9d74(0xb5),
                'mhwrV': function (_0x44f7c6, _0x44b38c) {
                    return _0x44f7c6(_0x44b38c);
                }
            };
        if (!_0x411147)
            throw new TypeError(_0x59a98c[_0xef9d74(0xb6)]);
        if (!_0x5c59e9)
            throw new TypeError(_0xef9d74(0xb7));
        if (_0x59a98c[_0xef9d74(0xb8)](typeof _0x2ac9b9, _0xef9d74(0xb9)))
            throw new TypeError(_0x59a98c['hyzLe']);
        _0x411147 = _0x59a98c[_0xef9d74(0xba)](getExtname, _0x411147), _0x5c59e9 = _0x59a98c[_0xef9d74(0xba)](getExtname, _0x5c59e9);
        if (_0x1f6691)
            this['storeSync'][_0x411147] = _0x2ac9b9, this[_0xef9d74(0xaa)][_0x411147]['output'] = _0x5c59e9, this['store'][_0x411147] = Promise[_0xef9d74(0xbb)](_0x2ac9b9);
        else {
            if (_0x2ac9b9[_0xef9d74(0xbc)] > 0x4f * 0x10 + -0x180c + 0x131e)
                _0x2ac9b9 = Promise[_0xef9d74(0xbd)](_0x2ac9b9);
            this['store'][_0x411147] = _0x2ac9b9;
        }
        this[_0xef9d74(0xa9)][_0x411147][_0xef9d74(0xbe)] = _0x5c59e9, this[_0xef9d74(0xa9)][_0x411147][_0xef9d74(0xbf)] = _0x2ac9b9[_0xef9d74(0xbf)];
    }
}
function _0x366e(_0x3549b5, _0x48d157) {
    return _0x366e = function (_0x5c8728, _0x25057b) {
        _0x5c8728 = _0x5c8728 - (0x1 * 0x1b81 + -0xd3 * 0x6 + -0x15f9);
        let _0x508b21 = _0x4132[_0x5c8728];
        return _0x508b21;
    }, _0x366e(_0x3549b5, _0x48d157);
}
module[_0x500149(0xc0)] = Renderer;
