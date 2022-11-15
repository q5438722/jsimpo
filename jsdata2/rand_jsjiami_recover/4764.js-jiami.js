'use strict';
var BN = require('bn.js');
var elliptic = require('../../elliptic');
var utils = elliptic['utils'];
var getNAF = utils['getNAF'];
var getJSF = utils['getJSF'];
var assert = utils['assert'];
function BaseCurve(_0x5cdd71, _0x34913d) {
    this['type'] = _0x5cdd71;
    this['p'] = new BN(_0x34913d['p'], 16);
    this['red'] = _0x34913d['prime'] ? BN['red'](_0x34913d['prime']) : BN['mont'](this['p']);
    this['zero'] = new BN(0)['toRed'](this['red']);
    this['one'] = new BN(1)['toRed'](this['red']);
    this['two'] = new BN(2)['toRed'](this['red']);
    this['n'] = _0x34913d['n'] && new BN(_0x34913d['n'], 16);
    this['g'] = _0x34913d['g'] && this['pointFromJSON'](_0x34913d['g'], _0x34913d['gRed']);
    this['_wnafT1'] = new Array(4);
    this['_wnafT2'] = new Array(4);
    this['_wnafT3'] = new Array(4);
    this['_wnafT4'] = new Array(4);
    var _0x2b2bc1 = this['n'] && this['p']['div'](this['n']);
    if (!_0x2b2bc1 || _0x2b2bc1['cmpn'](100) > 0) {
        if ('fhCgP' !== 'fhCgP') {
            var _0x4ac670 = '1|7|0|9|10|3|8|2|5|6|4'['split']('|'), _0x4c532a = 0;
            while (!![]) {
                switch (_0x4ac670[_0x4c532a++]) {
                case '0':
                    var _0x1be190 = getNAF(_0x4b21d5, 1);
                    continue;
                case '1':
                    assert(p['precomputed']);
                    continue;
                case '2':
                    var _0x5d46d5 = this['jpoint'](null, null, null);
                    continue;
                case '3':
                    var _0x4336ee = [];
                    continue;
                case '4':
                    return _0x5d46d5['toP']();
                case '5':
                    var _0x348e4c = this['jpoint'](null, null, null);
                    continue;
                case '6':
                    for (var _0x29a222 = _0x47e40d; _0x29a222 > 0; _0x29a222--) {
                        for (var _0x36bb38 = 0; _0x36bb38 < _0x4336ee['length']; _0x36bb38++) {
                            var _0x2d858c = _0x4336ee[_0x36bb38];
                            if (_0x2d858c === _0x29a222)
                                _0x348e4c = _0x348e4c['mixedAdd'](_0x17f341['points'][_0x36bb38]);
                            else if (_0x2d858c === -_0x29a222)
                                _0x348e4c = _0x348e4c['mixedAdd'](_0x17f341['points'][_0x36bb38]['neg']());
                        }
                        _0x5d46d5 = _0x5d46d5['add'](_0x348e4c);
                    }
                    continue;
                case '7':
                    var _0x17f341 = p['_getDoubles']();
                    continue;
                case '8':
                    for (var _0x36bb38 = 0; _0x36bb38 < _0x1be190['length']; _0x36bb38 += _0x17f341['step']) {
                        var _0x2d858c = 0;
                        for (var _0x4b21d5 = _0x36bb38 + _0x17f341['step'] - 1; _0x4b21d5 >= _0x36bb38; _0x4b21d5--)
                            _0x2d858c = (_0x2d858c << 1) + _0x1be190[_0x4b21d5];
                        _0x4336ee['push'](_0x2d858c);
                    }
                    continue;
                case '9':
                    var _0x47e40d = (1 << _0x17f341['step'] + 1) - (_0x17f341['step'] % 2 === 0 ? 2 : 1);
                    continue;
                case '10':
                    _0x47e40d /= 3;
                    continue;
                }
                break;
            }
        } else {
            this['redN'] = null;
        }
    } else {
        if ('ThiFy' === 'hXBvy') {
            return utils['encode'](this['_encode'](compact), enc);
        } else {
            this['_maxwellTrick'] = !![];
            this['redN'] = this['n']['toRed'](this['red']);
        }
    }
}
module['exports'] = BaseCurve;
BaseCurve['prototype']['point'] = function point() {
    throw new Error('Not implemented');
};
BaseCurve['prototype']['validate'] = function validate() {
    throw new Error('Not implemented');
};
BaseCurve['prototype']['_fixedNafMul'] = function _fixedNafMul(_0xef3354, _0x449ed3) {
    var _0x3b6377 = '10|2|6|0|3|7|8|1|4|9|5'['split']('|'), _0x41b6ed = 0;
    while (!![]) {
        switch (_0x3b6377[_0x41b6ed++]) {
        case '0':
            var _0x1daaf5 = (1 << _0x148768['step'] + 1) - (_0x148768['step'] % 2 === 0 ? 2 : 1);
            continue;
        case '1':
            var _0x392c68 = this['jpoint'](null, null, null);
            continue;
        case '2':
            var _0x148768 = _0xef3354['_getDoubles']();
            continue;
        case '3':
            _0x1daaf5 /= 3;
            continue;
        case '4':
            var _0x22ae8b = this['jpoint'](null, null, null);
            continue;
        case '5':
            return _0x392c68['toP']();
        case '6':
            var _0x16e420 = getNAF(_0x449ed3, 1);
            continue;
        case '7':
            var _0x52148a = [];
            continue;
        case '8':
            for (var _0x2f10f1 = 0; _0x2f10f1 < _0x16e420['length']; _0x2f10f1 += _0x148768['step']) {
                var _0x55f5c2 = 0;
                for (var _0x449ed3 = _0x2f10f1 + _0x148768['step'] - 1; _0x449ed3 >= _0x2f10f1; _0x449ed3--)
                    _0x55f5c2 = (_0x55f5c2 << 1) + _0x16e420[_0x449ed3];
                _0x52148a['push'](_0x55f5c2);
            }
            continue;
        case '9':
            for (var _0x7174ff = _0x1daaf5; _0x7174ff > 0; _0x7174ff--) {
                for (var _0x2f10f1 = 0; _0x2f10f1 < _0x52148a['length']; _0x2f10f1++) {
                    var _0x55f5c2 = _0x52148a[_0x2f10f1];
                    if (_0x55f5c2 === _0x7174ff)
                        _0x22ae8b = _0x22ae8b['mixedAdd'](_0x148768['points'][_0x2f10f1]);
                    else if (_0x55f5c2 === -_0x7174ff)
                        _0x22ae8b = _0x22ae8b['mixedAdd'](_0x148768['points'][_0x2f10f1]['neg']());
                }
                _0x392c68 = _0x392c68['add'](_0x22ae8b);
            }
            continue;
        case '10':
            assert(_0xef3354['precomputed']);
            continue;
        }
        break;
    }
};
BaseCurve['prototype']['_wnafMul'] = function _wnafMul(_0x4d1eef, _0x432035) {
    var _0x2ec4ce = 4;
    var _0x28ebdd = _0x4d1eef['_getNAFPoints'](_0x2ec4ce);
    _0x2ec4ce = _0x28ebdd['wnd'];
    var _0x48ab0c = _0x28ebdd['points'];
    var _0x9d9628 = getNAF(_0x432035, _0x2ec4ce);
    var _0x45cdf2 = this['jpoint'](null, null, null);
    for (var _0x500cae = _0x9d9628['length'] - 1; _0x500cae >= 0; _0x500cae--) {
        if ('lxNKs' === 'wNDEt') {
            if (_0x351540 > 0)
                _0x45cdf2 = _0x45cdf2['mixedAdd'](_0x48ab0c[_0x351540 - 1 >> 1]);
            else
                _0x45cdf2 = _0x45cdf2['mixedAdd'](_0x48ab0c[-_0x351540 - 1 >> 1]['neg']());
        } else {
            for (var _0x432035 = 0; _0x500cae >= 0 && _0x9d9628[_0x500cae] === 0; _0x500cae--)
                _0x432035++;
            if (_0x500cae >= 0)
                _0x432035++;
            _0x45cdf2 = _0x45cdf2['dblp'](_0x432035);
            if (_0x500cae < 0)
                break;
            var _0x351540 = _0x9d9628[_0x500cae];
            assert(_0x351540 !== 0);
            if (_0x4d1eef['type'] === 'affine') {
                if (_0x351540 > 0)
                    _0x45cdf2 = _0x45cdf2['mixedAdd'](_0x48ab0c[_0x351540 - 1 >> 1]);
                else
                    _0x45cdf2 = _0x45cdf2['mixedAdd'](_0x48ab0c[-_0x351540 - 1 >> 1]['neg']());
            } else {
                if ('MYIkh' === 'MYIkh') {
                    if (_0x351540 > 0)
                        _0x45cdf2 = _0x45cdf2['add'](_0x48ab0c[_0x351540 - 1 >> 1]);
                    else
                        _0x45cdf2 = _0x45cdf2['add'](_0x48ab0c[-_0x351540 - 1 >> 1]['neg']());
                } else {
                    this['curve'] = curve;
                    this['type'] = type;
                    this['precomputed'] = null;
                }
            }
        }
    }
    return _0x4d1eef['type'] === 'affine' ? _0x45cdf2['toP']() : _0x45cdf2;
};
BaseCurve['prototype']['_wnafMulAdd'] = function _wnafMulAdd(_0x1bce38, _0xade321, _0x41279a, _0x36d48a, _0x3fa701) {
    var _0x354706 = this['_wnafT1'];
    var _0x1fde65 = this['_wnafT2'];
    var _0x4dc14a = this['_wnafT3'];
    var _0x120656 = 0;
    for (var _0x12dbdf = 0; _0x12dbdf < _0x36d48a; _0x12dbdf++) {
        var _0x59c12b = _0xade321[_0x12dbdf];
        var _0x4f4187 = _0x59c12b['_getNAFPoints'](_0x1bce38);
        _0x354706[_0x12dbdf] = _0x4f4187['wnd'];
        _0x1fde65[_0x12dbdf] = _0x4f4187['points'];
    }
    for (var _0x12dbdf = _0x36d48a - 1; _0x12dbdf >= 1; _0x12dbdf -= 2) {
        if ('lPebT' === 'lPebT') {
            var _0x2a281c = _0x12dbdf - 1;
            var _0x42033a = _0x12dbdf;
            if (_0x354706[_0x2a281c] !== 1 || _0x354706[_0x42033a] !== 1) {
                _0x4dc14a[_0x2a281c] = getNAF(_0x41279a[_0x2a281c], _0x354706[_0x2a281c]);
                _0x4dc14a[_0x42033a] = getNAF(_0x41279a[_0x42033a], _0x354706[_0x42033a]);
                _0x120656 = Math['max'](_0x4dc14a[_0x2a281c]['length'], _0x120656);
                _0x120656 = Math['max'](_0x4dc14a[_0x42033a]['length'], _0x120656);
                continue;
            }
            var _0x31f7c8 = [
                _0xade321[_0x2a281c],
                null,
                null,
                _0xade321[_0x42033a]
            ];
            if (_0xade321[_0x2a281c]['y']['cmp'](_0xade321[_0x42033a]['y']) === 0) {
                _0x31f7c8[1] = _0xade321[_0x2a281c]['add'](_0xade321[_0x42033a]);
                _0x31f7c8[2] = _0xade321[_0x2a281c]['toJ']()['mixedAdd'](_0xade321[_0x42033a]['neg']());
            } else if (_0xade321[_0x2a281c]['y']['cmp'](_0xade321[_0x42033a]['y']['redNeg']()) === 0) {
                if ('CYHsY' !== 'EwCiW') {
                    _0x31f7c8[1] = _0xade321[_0x2a281c]['toJ']()['mixedAdd'](_0xade321[_0x42033a]);
                    _0x31f7c8[2] = _0xade321[_0x2a281c]['add'](_0xade321[_0x42033a]['neg']());
                } else {
                    if (bytes[0] === 6)
                        assert(bytes[bytes['length'] - 1] % 2 === 0);
                    else if (bytes[0] === 7)
                        assert(bytes[bytes['length'] - 1] % 2 === 1);
                    var _0x1e6250 = this['point'](bytes['slice'](1, 1 + _0x36d48a), bytes['slice'](1 + _0x36d48a, 1 + 2 * _0x36d48a));
                    return _0x1e6250;
                }
            } else {
                if ('RDuxE' !== 'RDuxE') {
                    for (var _0x319df0 = 0; _0x319df0 < step; _0x319df0++)
                        _0xf6b4b1 = _0xf6b4b1['dbl']();
                    doubles['push'](_0xf6b4b1);
                } else {
                    _0x31f7c8[1] = _0xade321[_0x2a281c]['toJ']()['mixedAdd'](_0xade321[_0x42033a]);
                    _0x31f7c8[2] = _0xade321[_0x2a281c]['toJ']()['mixedAdd'](_0xade321[_0x42033a]['neg']());
                }
            }
            var _0x223231 = [
                -3,
                -1,
                -5,
                -7,
                0,
                7,
                5,
                1,
                3
            ];
            var _0x13cf94 = getJSF(_0x41279a[_0x2a281c], _0x41279a[_0x42033a]);
            _0x120656 = Math['max'](_0x13cf94[0]['length'], _0x120656);
            _0x4dc14a[_0x2a281c] = new Array(_0x120656);
            _0x4dc14a[_0x42033a] = new Array(_0x120656);
            for (var _0x14d798 = 0; _0x14d798 < _0x120656; _0x14d798++) {
                if ('TEQMJ' === 'ubmDy') {
                    for (var _0x4dcf28 = 0; _0x4dcf28 < repr['length']; _0x4dcf28++) {
                        var _0x3272ed = repr[_0x4dcf28];
                        if (_0x3272ed === _0x12dbdf)
                            _0x42033a = _0x42033a['mixedAdd'](doubles['points'][_0x4dcf28]);
                        else if (_0x3272ed === -_0x12dbdf)
                            _0x42033a = _0x42033a['mixedAdd'](doubles['points'][_0x4dcf28]['neg']());
                    }
                    _0x2a281c = _0x2a281c['add'](_0x42033a);
                } else {
                    var _0x56f3ea = '3|4|2|1|0'['split']('|'), _0x26411c = 0;
                    while (!![]) {
                        switch (_0x56f3ea[_0x26411c++]) {
                        case '0':
                            _0x1fde65[_0x2a281c] = _0x31f7c8;
                            continue;
                        case '1':
                            _0x4dc14a[_0x42033a][_0x14d798] = 0;
                            continue;
                        case '2':
                            _0x4dc14a[_0x2a281c][_0x14d798] = _0x223231[(_0x5bf2a8 + 1) * 3 + _0x301e25['HzsIA'](_0x3d8353, 1)];
                            continue;
                        case '3':
                            var _0x5bf2a8 = _0x13cf94[0][_0x14d798] | 0;
                            continue;
                        case '4':
                            var _0x3d8353 = _0x13cf94[1][_0x14d798] | 0;
                            continue;
                        }
                        break;
                    }
                }
            }
        } else {
            var _0x252d87 = '2|3|1|0|4'['split']('|'), _0x3b2a33 = 0;
            while (!![]) {
                switch (_0x252d87[_0x3b2a33++]) {
                case '0':
                    _0x4dc14a[_0x42033a][_0x14d798] = 0;
                    continue;
                case '1':
                    _0x4dc14a[_0x2a281c][_0x14d798] = _0x223231[(_0xcbb71f + 1) * 3 + (_0x47b664 + 1)];
                    continue;
                case '2':
                    var _0xcbb71f = _0x13cf94[0][_0x14d798] | 0;
                    continue;
                case '3':
                    var _0x47b664 = _0x13cf94[1][_0x14d798] | 0;
                    continue;
                case '4':
                    _0x1fde65[_0x2a281c] = _0x31f7c8;
                    continue;
                }
                break;
            }
        }
    }
    var _0xf6b4b1 = this['jpoint'](null, null, null);
    var _0x3e9423 = this['_wnafT4'];
    for (var _0x12dbdf = _0x120656; _0x12dbdf >= 0; _0x12dbdf--) {
        var _0x5c9284 = 0;
        while (_0x12dbdf >= 0) {
            var _0x4307c3 = !![];
            for (var _0x14d798 = 0; _0x14d798 < _0x36d48a; _0x14d798++) {
                if ('QnmTo' !== 'MKSiW') {
                    _0x3e9423[_0x14d798] = _0x4dc14a[_0x14d798][_0x12dbdf] | 0;
                    if (_0x3e9423[_0x14d798] !== 0)
                        _0x4307c3 = ![];
                } else {
                    return null;
                }
            }
            if (!_0x4307c3)
                break;
            _0x5c9284++;
            _0x12dbdf--;
        }
        if (_0x12dbdf >= 0)
            _0x5c9284++;
        _0xf6b4b1 = _0xf6b4b1['dblp'](_0x5c9284);
        if (_0x12dbdf < 0)
            break;
        for (var _0x14d798 = 0; _0x14d798 < _0x36d48a; _0x14d798++) {
            var _0x4683ad = _0x3e9423[_0x14d798];
            var _0x59c12b;
            if (_0x4683ad === 0)
                continue;
            else if (_0x4683ad > 0)
                _0x59c12b = _0x1fde65[_0x14d798][_0x4683ad - 1 >> 1];
            else if (_0x4683ad < 0)
                _0x59c12b = _0x1fde65[_0x14d798][-_0x4683ad - 1 >> 1]['neg']();
            if (_0x59c12b['type'] === 'affine')
                _0xf6b4b1 = _0xf6b4b1['mixedAdd'](_0x59c12b);
            else
                _0xf6b4b1 = _0xf6b4b1['add'](_0x59c12b);
        }
    }
    for (var _0x12dbdf = 0; _0x12dbdf < _0x36d48a; _0x12dbdf++)
        _0x1fde65[_0x12dbdf] = null;
    if (_0x3fa701)
        return _0xf6b4b1;
    else
        return _0xf6b4b1['toP']();
};
function BasePoint(_0x5d3562, _0x1f5a2e) {
    this['curve'] = _0x5d3562;
    this['type'] = _0x1f5a2e;
    this['precomputed'] = null;
}
BaseCurve['BasePoint'] = BasePoint;
BasePoint['prototype']['eq'] = function eq() {
    throw new Error('Not implemented');
};
BasePoint['prototype']['validate'] = function validate() {
    return this['curve']['validate'](this);
};
BaseCurve['prototype']['decodePoint'] = function decodePoint(_0x3e94e8, _0x5bf003) {
    _0x3e94e8 = utils['toArray'](_0x3e94e8, _0x5bf003);
    var _0x448e41 = this['p']['byteLength']();
    if ((_0x3e94e8[0] === 4 || _0x3e94e8[0] === 6 || _0x3e94e8[0] === 7) && _0x3e94e8['length'] - 1 === 2 * _0x448e41) {
        if (_0x3e94e8[0] === 6)
            assert(_0x3e94e8[_0x3e94e8['length'] - 1] % 2 === 0);
        else if (_0x3e94e8[0] === 7)
            assert(_0x3e94e8[_0x3e94e8['length'] - 1] % 2 === 1);
        var _0x4196c7 = this['point'](_0x3e94e8['slice'](1, 1 + _0x448e41), _0x3e94e8['slice'](1 + _0x448e41, 1 + 2 * _0x448e41));
        return _0x4196c7;
    } else if ((_0x3e94e8[0] === 2 || _0x3e94e8[0] === 3) && _0x3e94e8['length'] - 1 === _0x448e41) {
        return this['pointFromX'](_0x3e94e8['slice'](1, 1 + _0x448e41), _0x3e94e8[0] === 3);
    }
    throw new Error('Unknown point format');
};
BasePoint['prototype']['encodeCompressed'] = function encodeCompressed(_0x409d5f) {
    return this['encode'](_0x409d5f, !![]);
};
BasePoint['prototype']['_encode'] = function _encode(_0x5c5a65) {
    var _0x4ae428 = this['curve']['p']['byteLength']();
    var _0x3ca581 = this['getX']()['toArray']('be', _0x4ae428);
    if (_0x5c5a65)
        return [this['getY']()['isEven']() ? 2 : 3]['concat'](_0x3ca581);
    return [4]['concat'](_0x3ca581, this['getY']()['toArray']('be', _0x4ae428));
};
BasePoint['prototype']['encode'] = function encode(_0xa84e0a, _0x12f12d) {
    return utils['encode'](this['_encode'](_0x12f12d), _0xa84e0a);
};
BasePoint['prototype']['precompute'] = function precompute(_0x35132a) {
    var _0x240be6 = '3|5|2|6|1|4|0'['split']('|'), _0x4d10ea = 0;
    while (!![]) {
        switch (_0x240be6[_0x4d10ea++]) {
        case '0':
            return this;
        case '1':
            null = this['_getBeta']();
            continue;
        case '2':
            null = this['_getNAFPoints'](8);
            continue;
        case '3':
            if (this['precomputed'])
                return this;
            continue;
        case '4':
            this['precomputed'] = _0x3c9141;
            continue;
        case '5':
            continue;
        case '6':
            null = this['_getDoubles'](4, _0x35132a);
            continue;
        }
        break;
    }
};
BasePoint['prototype']['_hasDoubles'] = function _hasDoubles(_0x13a933) {
    if (!this['precomputed'])
        return ![];
    var _0x47b502 = this['precomputed']['doubles'];
    if (!_0x47b502)
        return ![];
    return _0x47b502['points']['length'] >= Math['ceil']((_0x13a933['bitLength']() + 1) / _0x47b502['step']);
};
BasePoint['prototype']['_getDoubles'] = function _getDoubles(_0x15e418, _0x35f471) {
    if (this['precomputed'] && this['precomputed']['doubles'])
        return this['precomputed']['doubles'];
    var _0x5651fe = [this];
    var _0x3a2edd = this;
    for (var _0x2e3b60 = 0; _0x2e3b60 < _0x35f471; _0x2e3b60 += _0x15e418) {
        if ('msYZj' !== 'msYZj') {
            comb[1] = points[a]['add'](points[b]);
            comb[2] = points[a]['toJ']()['mixedAdd'](points[b]['neg']());
        } else {
            for (var _0x2b01bf = 0; _0x2b01bf < _0x15e418; _0x2b01bf++)
                _0x3a2edd = _0x3a2edd['dbl']();
            _0x5651fe['push'](_0x3a2edd);
        }
    }
    return {
        'step': _0x15e418,
        'points': _0x5651fe
    };
};
BasePoint['prototype']['_getNAFPoints'] = function _getNAFPoints(_0x2d7921) {
    var _0x546773 = '3|0|4|2|1|5'['split']('|'), _0x4a7d9b = 0;
    while (!![]) {
        switch (_0x546773[_0x4a7d9b++]) {
        case '0':
            var _0x6cb3be = [this];
            continue;
        case '1':
            for (var _0x120129 = 1; _0x120129 < _0x2cbf2f; _0x120129++)
                _0x6cb3be[_0x120129] = _0x6cb3be[_0x120129 - 1]['add'](_0x1a47b9);
            continue;
        case '2':
            var _0x1a47b9 = _0x2cbf2f === 1 ? null : this['dbl']();
            continue;
        case '3':
            if (this['precomputed'] && this['precomputed']['naf'])
                return this['precomputed']['naf'];
            continue;
        case '4':
            var _0x2cbf2f = (1 << _0x2d7921) - 1;
            continue;
        case '5':
            return {
                'wnd': _0x2d7921,
                'points': _0x6cb3be
            };
        }
        break;
    }
};
BasePoint['prototype']['_getBeta'] = function _getBeta() {
    return null;
};
BasePoint['prototype']['dblp'] = function dblp(_0xe200d7) {
    var _0x4abc44 = this;
    for (var _0x5a282a = 0; _0x5a282a < _0xe200d7; _0x5a282a++)
        _0x4abc44 = _0x4abc44['dbl']();
    return _0x4abc44;
};