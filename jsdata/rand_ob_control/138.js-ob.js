'use strict';
const {extname} = require('path'), Promise = require('bluebird'), getExtname = _0x5440d4 => {
        const _0x108d4d = {
            'EoogZ': function (_0x1e761a, _0x3b5a14) {
                return _0x1e761a !== _0x3b5a14;
            },
            'cQvbI': 'string',
            'CTKmV': function (_0x288375, _0x120960) {
                return _0x288375(_0x120960);
            }
        };
        if (_0x108d4d['EoogZ'](typeof _0x5440d4, _0x108d4d['cQvbI']))
            return '';
        const _0x2fec1c = _0x108d4d['CTKmV'](extname, _0x5440d4) || _0x5440d4;
        return _0x2fec1c['startsWith']('.') ? _0x2fec1c['slice'](0x1) : _0x2fec1c;
    };
class Renderer {
    constructor() {
        this['store'] = {}, this['storeSync'] = {};
    }
    ['list'](_0x16c90d) {
        return _0x16c90d ? this['storeSync'] : this['store'];
    }
    ['get'](_0x3fbfb2, _0x225093) {
        const _0x12b9a4 = {
                'qBBnp': 'storeSync',
                'pfqOZ': 'store',
                'rEnwl': function (_0x3b2aae, _0x38836c) {
                    return _0x3b2aae(_0x38836c);
                }
            }, _0x787672 = this[_0x225093 ? _0x12b9a4['qBBnp'] : _0x12b9a4['pfqOZ']];
        return _0x787672[_0x12b9a4['rEnwl'](getExtname, _0x3fbfb2)] || _0x787672[_0x3fbfb2];
    }
    ['isRenderable'](_0x3ebf56) {
        const _0xa6005b = {
            'JzXGU': function (_0x5639f8, _0x29b6c2) {
                return _0x5639f8(_0x29b6c2);
            }
        };
        return _0xa6005b['JzXGU'](Boolean, this['get'](_0x3ebf56));
    }
    ['isRenderableSync'](_0x2b753f) {
        const _0x155cb7 = {
            'grtyB': function (_0x38b083, _0x41220d) {
                return _0x38b083(_0x41220d);
            }
        };
        return _0x155cb7['grtyB'](Boolean, this['get'](_0x2b753f, !![]));
    }
    ['getOutput'](_0xd92c64) {
        const _0x426925 = this['get'](_0xd92c64);
        return _0x426925 ? _0x426925['output'] : '';
    }
    ['register'](_0x1e4540, _0x372504, _0x54a888, _0x26550c) {
        const _0x1bfe99 = {
                'QbqTL': '0|3|1|4|6|2|7|5',
                'AMkKV': 'name\x20is\x20required',
                'SDOdZ': function (_0x1a1502, _0x3619ee) {
                    return _0x1a1502 !== _0x3619ee;
                },
                'aiIfy': 'function',
                'MtBhY': 'fn\x20must\x20be\x20a\x20function',
                'zEpql': function (_0x21dcd3, _0x529a13) {
                    return _0x21dcd3 > _0x529a13;
                },
                'DiHBM': 'output\x20is\x20required',
                'yTDGU': function (_0x3b8c26, _0x51ea3b) {
                    return _0x3b8c26(_0x51ea3b);
                }
            }, _0x51b7d3 = _0x1bfe99['QbqTL']['split']('|');
        let _0x4493f8 = 0x0;
        while (!![]) {
            switch (_0x51b7d3[_0x4493f8++]) {
            case '0':
                if (!_0x1e4540)
                    throw new TypeError(_0x1bfe99['AMkKV']);
                continue;
            case '1':
                if (_0x1bfe99['SDOdZ'](typeof _0x54a888, _0x1bfe99['aiIfy']))
                    throw new TypeError(_0x1bfe99['MtBhY']);
                continue;
            case '2':
                if (_0x26550c)
                    this['storeSync'][_0x1e4540] = _0x54a888, this['storeSync'][_0x1e4540]['output'] = _0x372504, this['store'][_0x1e4540] = Promise['method'](_0x54a888);
                else {
                    if (_0x1bfe99['zEpql'](_0x54a888['length'], 0x2))
                        _0x54a888 = Promise['promisify'](_0x54a888);
                    this['store'][_0x1e4540] = _0x54a888;
                }
                continue;
            case '3':
                if (!_0x372504)
                    throw new TypeError(_0x1bfe99['DiHBM']);
                continue;
            case '4':
                _0x1e4540 = _0x1bfe99['yTDGU'](getExtname, _0x1e4540);
                continue;
            case '5':
                this['store'][_0x1e4540]['compile'] = _0x54a888['compile'];
                continue;
            case '6':
                _0x372504 = _0x1bfe99['yTDGU'](getExtname, _0x372504);
                continue;
            case '7':
                this['store'][_0x1e4540]['output'] = _0x372504;
                continue;
            }
            break;
        }
    }
}
module['exports'] = Renderer;
