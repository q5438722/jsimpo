const _0x4267 = [
    'dunPu',
    'args',
    'VZWTw',
    'push',
    'AqAWh',
    '19029cRUWkI',
    '444069ESBrTd',
    '4aQLhFS',
    '1014597KjCQXF',
    '7ONJmWG',
    '147508TywKIM',
    '1520641QdQtEw',
    '682732npAzHO',
    '1nLKToS',
    '2079403FnoOoa',
    'success',
    'fail',
    'cancel',
    'complete',
    'lzIjB',
    'gwaGt',
    'The\x20\x27',
    '\x27\x20method\x20of\x20platform\x20\x27__PLATFORM_TITLE__\x27\x20does\x20not\x20support\x20option\x20\x27',
    'JkeUy',
    'name',
    'value',
    'raCSz',
    'JYccW',
    'zdcOU',
    'returnValue',
    'uLHDl',
    'error',
    'Platform\x20\x27__PLATFORM_TITLE__\x27\x20does\x20not\x20support\x20\x27',
    'VwsWt'
];
const _0x41c199 = _0x5e75;
(function (_0x917fb3, _0x488d33) {
    const _0x22e1e8 = _0x5e75;
    while (!![]) {
        try {
            const _0x3e2259 = parseInt(_0x22e1e8(0x1ad)) + parseInt(_0x22e1e8(0x1ae)) * parseInt(_0x22e1e8(0x1af)) + parseInt(_0x22e1e8(0x1b0)) + -parseInt(_0x22e1e8(0x1b1)) * -parseInt(_0x22e1e8(0x1b2)) + -parseInt(_0x22e1e8(0x1b3)) + parseInt(_0x22e1e8(0x1b4)) + parseInt(_0x22e1e8(0x1b5)) * -parseInt(_0x22e1e8(0x1b6));
            if (_0x3e2259 === _0x488d33)
                break;
            else
                _0x917fb3['push'](_0x917fb3['shift']());
        } catch (_0x1ccbc1) {
            _0x917fb3['push'](_0x917fb3['shift']());
        }
    }
}(_0x4267, 0x1af * -0xad1 + 0x14524f + 0xc016a));
import {
    isFn,
    isStr,
    hasOwn,
    isPlainObject
} from 'uni-shared';
import {
    isSyncApi,
    isContextApi
} from '../helpers/promise';
import { protocols } from 'uni-platform/runtime/api/protocols';
const CALLBACKS = [
    _0x41c199(0x1b7),
    _0x41c199(0x1b8),
    _0x41c199(0x1b9),
    _0x41c199(0x1ba)
];
function processCallback(_0x4fa20c, _0xf049e7, _0x55170f) {
    const _0x34ed37 = {
        'rsEWE': function (_0x340c96, _0x2a2532, _0xdcb0df, _0x26eb06) {
            return _0x340c96(_0x2a2532, _0xdcb0df, _0x26eb06);
        }
    };
    return function (_0x24580b) {
        return _0xf049e7(_0x34ed37['rsEWE'](processReturnValue, _0x4fa20c, _0x24580b, _0x55170f));
    };
}
function _0x5e75(_0x4b7545, _0x3da50d) {
    return _0x5e75 = function (_0x16cb27, _0x12ecae) {
        _0x16cb27 = _0x16cb27 - (0x15a6 * 0x1 + -0x63b + 0x1 * -0xdbe);
        let _0x26c795 = _0x4267[_0x16cb27];
        return _0x26c795;
    }, _0x5e75(_0x4b7545, _0x3da50d);
}
function processArgs(_0x825cb4, _0x547edd, _0x551176 = {}, _0x449bf2 = {}, _0x1dbb9c = ![]) {
    const _0x542249 = _0x41c199, _0x1175bb = {
            'lzIjB': function (_0x5b931e, _0x7466b7) {
                return _0x5b931e(_0x7466b7);
            },
            'gwaGt': function (_0x39e4a9, _0x39befc) {
                return _0x39e4a9 === _0x39befc;
            },
            'chZbe': function (_0x358491, _0x32f0e5, _0x36e63b) {
                return _0x358491(_0x32f0e5, _0x36e63b);
            },
            'JkeUy': function (_0x384378, _0x1a0fe6) {
                return _0x384378(_0x1a0fe6);
            },
            'raCSz': function (_0x45fc66, _0xa66fc0) {
                return _0x45fc66(_0xa66fc0);
            },
            'JYccW': function (_0x4ecfd1, _0x53669a, _0x405003, _0x305b6b) {
                return _0x4ecfd1(_0x53669a, _0x405003, _0x305b6b);
            },
            'zdcOU': function (_0x16a2e2, _0x12cf81, _0x2c04ed, _0x9f8d37) {
                return _0x16a2e2(_0x12cf81, _0x2c04ed, _0x9f8d37);
            }
        };
    if (_0x1175bb[_0x542249(0x1bb)](isPlainObject, _0x547edd)) {
        const _0x493b9f = _0x1175bb[_0x542249(0x1bc)](_0x1dbb9c, !![]) ? _0x547edd : {};
        isFn(_0x551176) && (_0x551176 = _0x1175bb['chZbe'](_0x551176, _0x547edd, _0x493b9f) || {});
        for (const _0x4a24a3 in _0x547edd) {
            if (hasOwn(_0x551176, _0x4a24a3)) {
                let _0x9ac4b5 = _0x551176[_0x4a24a3];
                isFn(_0x9ac4b5) && (_0x9ac4b5 = _0x9ac4b5(_0x547edd[_0x4a24a3], _0x547edd, _0x493b9f));
                if (!_0x9ac4b5)
                    console['warn'](_0x542249(0x1bd) + _0x825cb4 + _0x542249(0x1be) + _0x4a24a3 + '\x27');
                else {
                    if (_0x1175bb[_0x542249(0x1bf)](isStr, _0x9ac4b5))
                        _0x493b9f[_0x9ac4b5] = _0x547edd[_0x4a24a3];
                    else
                        _0x1175bb[_0x542249(0x1bf)](isPlainObject, _0x9ac4b5) && (_0x493b9f[_0x9ac4b5['name'] ? _0x9ac4b5[_0x542249(0x1c0)] : _0x4a24a3] = _0x9ac4b5[_0x542249(0x1c1)]);
                }
            } else
                CALLBACKS['indexOf'](_0x4a24a3) !== -(-0x30e * 0xb + -0xd47 + 0x2ee2) ? _0x1175bb[_0x542249(0x1c2)](isFn, _0x547edd[_0x4a24a3]) && (_0x493b9f[_0x4a24a3] = _0x1175bb[_0x542249(0x1c3)](processCallback, _0x825cb4, _0x547edd[_0x4a24a3], _0x449bf2)) : !_0x1dbb9c && (_0x493b9f[_0x4a24a3] = _0x547edd[_0x4a24a3]);
        }
        return _0x493b9f;
    } else
        _0x1175bb['raCSz'](isFn, _0x547edd) && (_0x547edd = _0x1175bb[_0x542249(0x1c4)](processCallback, _0x825cb4, _0x547edd, _0x449bf2));
    return _0x547edd;
}
function processReturnValue(_0x33c684, _0x36689a, _0x418a56, _0x51abb5 = ![]) {
    const _0x4f5327 = _0x41c199, _0x2f100b = {
            'hZkwP': function (_0x4074e4, _0x482a01) {
                return _0x4074e4(_0x482a01);
            },
            'DFOma': function (_0x775fd5, _0x5728bc, _0x260b83, _0x42e7e7, _0x2f636a, _0x2d0689) {
                return _0x775fd5(_0x5728bc, _0x260b83, _0x42e7e7, _0x2f636a, _0x2d0689);
            }
        };
    return _0x2f100b['hZkwP'](isFn, protocols['returnValue']) && (_0x36689a = protocols[_0x4f5327(0x1c5)](_0x33c684, _0x36689a)), _0x2f100b['DFOma'](processArgs, _0x33c684, _0x36689a, _0x418a56, {}, _0x51abb5);
}
export default function wrapper(_0x11609f, _0x14fa45) {
    const _0x419b59 = _0x41c199, _0x563b9e = {
            'VwsWt': function (_0x247b6b, _0x33047f) {
                return _0x247b6b(_0x33047f);
            },
            'dunPu': function (_0xf965c0, _0x3d956c, _0x1abed9, _0x2e2744, _0x1bb3e2) {
                return _0xf965c0(_0x3d956c, _0x1abed9, _0x2e2744, _0x1bb3e2);
            },
            'QLHQq': function (_0x3fc0b1, _0x575006) {
                return _0x3fc0b1 !== _0x575006;
            },
            'VZWTw': 'undefined',
            'AqAWh': function (_0x1fbe2a, _0x930dee) {
                return _0x1fbe2a(_0x930dee);
            },
            'bZqul': function (_0x412ae1, _0x5cd07c) {
                return _0x412ae1(_0x5cd07c);
            },
            'uLHDl': function (_0x4424c6, _0x4a172d, _0x1866e5) {
                return _0x4424c6(_0x4a172d, _0x1866e5);
            }
        };
    if (_0x563b9e[_0x419b59(0x1c6)](hasOwn, protocols, _0x11609f)) {
        const _0x2c16d6 = protocols[_0x11609f];
        if (!_0x2c16d6)
            return function () {
                const _0x2d043b = _0x419b59;
                console[_0x2d043b(0x1c7)](_0x2d043b(0x1c8) + _0x11609f + '\x27.');
            };
        return function (_0x48db96, _0x40f2fd) {
            const _0x53a17e = _0x419b59;
            let _0x1a460d = _0x2c16d6;
            _0x563b9e[_0x53a17e(0x1c9)](isFn, _0x2c16d6) && (_0x1a460d = _0x2c16d6(_0x48db96));
            _0x48db96 = _0x563b9e[_0x53a17e(0x1ca)](processArgs, _0x11609f, _0x48db96, _0x1a460d[_0x53a17e(0x1cb)], _0x1a460d['returnValue']);
            const _0x31ead2 = [_0x48db96];
            _0x563b9e['QLHQq'](typeof _0x40f2fd, _0x563b9e[_0x53a17e(0x1cc)]) && _0x31ead2[_0x53a17e(0x1cd)](_0x40f2fd);
            if (isFn(_0x1a460d[_0x53a17e(0x1c0)]))
                _0x11609f = _0x1a460d[_0x53a17e(0x1c0)](_0x48db96);
            else
                _0x563b9e[_0x53a17e(0x1ce)](isStr, _0x1a460d['name']) && (_0x11609f = _0x1a460d[_0x53a17e(0x1c0)]);
            const _0x4f3461 = __GLOBAL__[_0x11609f]['apply'](__GLOBAL__, _0x31ead2);
            if (isSyncApi(_0x11609f))
                return processReturnValue(_0x11609f, _0x4f3461, _0x1a460d[_0x53a17e(0x1c5)], _0x563b9e['bZqul'](isContextApi, _0x11609f));
            return _0x4f3461;
        };
    }
    return _0x14fa45;
}
