'use strict';
require('../common');
const assert = require('assert'), util = require('util');
function findInGraph(_0x5bf2da, _0x1b9a74, _0x177c36) {
    const _0x38033f = {
        'WgbQA': function (_0x234725, _0x50ef71) {
            return _0x234725 < _0x50ef71;
        },
        'fZvaT': function (_0x10f88b, _0x2fd17a) {
            return _0x10f88b === _0x2fd17a;
        },
        'kHClv': function (_0x3da83a, _0x2d0559) {
            return _0x3da83a === _0x2d0559;
        }
    };
    let _0x2fbbe0 = 0x0;
    for (let _0x32c681 = 0x0; _0x38033f['WgbQA'](_0x32c681, _0x5bf2da['length']); _0x32c681++) {
        const _0x3b3ccc = _0x5bf2da[_0x32c681];
        if (_0x38033f['fZvaT'](_0x3b3ccc['type'], _0x1b9a74))
            _0x2fbbe0++;
        if (_0x38033f['kHClv'](_0x2fbbe0, _0x177c36))
            return _0x3b3ccc;
    }
}
function pruneTickObjects(_0x2c1680) {
    const _0x291a56 = {
            'kujdu': function (_0x41a000, _0xfa2504) {
                return _0x41a000 === _0xfa2504;
            },
            'QjBzw': function (_0x235f8c, _0xac791e) {
                return _0x235f8c < _0xac791e;
            },
            'PxPUY': function (_0x4cde54, _0x23a4c3) {
                return _0x4cde54 === _0x23a4c3;
            },
            'Qhrnc': 'TickObject',
            'wpuRK': function (_0x432260, _0xd0cbcd) {
                return _0x432260 >= _0xd0cbcd;
            },
            'NsEqg': function (_0x5143a3, _0x506ac3) {
                return _0x5143a3 + _0x506ac3;
            }
        }, _0x1e9d73 = {
            'found': !![],
            'index': null,
            'data': null
        };
    if (!Array['isArray'](_0x2c1680))
        return _0x2c1680;
    while (_0x1e9d73['found']) {
        for (let _0xcd041f = 0x0; _0x291a56['QjBzw'](_0xcd041f, _0x2c1680['length']); _0xcd041f++) {
            if (_0x291a56['PxPUY'](_0x2c1680[_0xcd041f]['type'], _0x291a56['Qhrnc'])) {
                _0x1e9d73['index'] = _0xcd041f;
                break;
            } else
                _0x291a56['wpuRK'](_0x291a56['NsEqg'](_0xcd041f, 0x1), _0x2c1680['length']) && (_0x1e9d73['found'] = ![]);
        }
        if (_0x1e9d73['found']) {
            _0x1e9d73['data'] = _0x2c1680[_0x1e9d73['index']];
            const _0x27c373 = {
                'new': _0x1e9d73['data']['triggerAsyncId'],
                'old': _0x1e9d73['data']['uid']
            };
            _0x2c1680['forEach'](function _0xd06437(_0x2a5c45) {
                if (_0x291a56['kujdu'](_0x2a5c45['triggerAsyncId'], _0x27c373['old']))
                    _0x2a5c45['triggerAsyncId'] = _0x27c373['new'];
            }), _0x2c1680['splice'](_0x1e9d73['index'], 0x1);
        }
    }
    return _0x2c1680;
}
module['exports'] = function verifyGraph(_0x54e290, _0x52af8f) {
    const _0x147c3a = {
        'KLPjk': function (_0x2df77f, _0x44f478, _0x1a035c, _0x2fd0f6) {
            return _0x2df77f(_0x44f478, _0x1a035c, _0x2fd0f6);
        },
        'TnILV': function (_0x30a1c5, _0x1e70ad) {
            return _0x30a1c5 == _0x1e70ad;
        },
        'jFOXK': function (_0x4ffee5, _0x4c6a49) {
            return _0x4ffee5 == _0x4c6a49;
        },
        'FchYJ': function (_0x98567e, _0x236f41) {
            return _0x98567e === _0x236f41;
        },
        'QGOfe': function (_0x9dbe01, _0x199777) {
            return _0x9dbe01(_0x199777);
        },
        'jgxZu': function (_0xecff4, _0x5d5fc1) {
            return _0xecff4(_0x5d5fc1);
        },
        'YiWjD': function (_0x525c55, _0x5c03bd) {
            return _0x525c55 < _0x5c03bd;
        },
        'iwVOD': function (_0x15e209, _0x5a13da) {
            return _0x15e209 >= _0x5a13da;
        },
        'mzAcC': function (_0x526e5f, _0x45b07c) {
            return _0x526e5f + _0x45b07c;
        }
    };
    _0x147c3a['QGOfe'](pruneTickObjects, _0x54e290);
    const _0x733fcb = {}, _0xa51ffd = {}, _0x48e84d = {}, _0x10bccd = [], _0x56b02d = _0x147c3a['jgxZu'](pruneTickObjects, _0x54e290['activities']);
    _0x56b02d['forEach'](_0x40c4f4);
    function _0x40c4f4(_0x33c898) {
        if (!_0x48e84d[_0x33c898['type']])
            _0x48e84d[_0x33c898['type']] = 0x0;
        _0x48e84d[_0x33c898['type']]++;
        const _0x4cf584 = _0x147c3a['KLPjk'](findInGraph, _0x52af8f, _0x33c898['type'], _0x48e84d[_0x33c898['type']]);
        if (_0x147c3a['TnILV'](_0x4cf584, null))
            return;
        _0x733fcb[_0x4cf584['id']] = _0x33c898['uid'], _0xa51ffd[_0x33c898['uid']] = _0x4cf584['id'];
        if (_0x147c3a['jFOXK'](_0x4cf584['triggerAsyncId'], null))
            return;
        const _0x33078e = _0x733fcb[_0x4cf584['triggerAsyncId']];
        if (_0x147c3a['FchYJ'](_0x33c898['triggerAsyncId'], _0x33078e))
            return;
        _0x10bccd['push']({
            'id': _0x4cf584['id'],
            'expectedTid': _0x4cf584['triggerAsyncId'],
            'actualTid': _0xa51ffd[_0x33c898['triggerAsyncId']]
        });
    }
    _0x10bccd['length'] && _0x10bccd['forEach'](_0x189c94 => console['error']('\x27' + _0x189c94['id'] + '\x27\x20expected\x20to\x20be\x20triggered\x20by\x20\x27' + _0x189c94['expectedTid'] + '\x27,\x20' + ('but\x20was\x20triggered\x20by\x20\x27' + _0x189c94['actualTid'] + '\x27\x20instead.')));
    assert['strictEqual'](_0x10bccd['length'], 0x0);
    const _0x7cf907 = Object['create'](null);
    for (let _0x213f57 = 0x0; _0x147c3a['YiWjD'](_0x213f57, _0x52af8f['length']); _0x213f57++) {
        if (_0x147c3a['jFOXK'](_0x7cf907[_0x52af8f[_0x213f57]['type']], null))
            _0x7cf907[_0x52af8f[_0x213f57]['type']] = 0x0;
        _0x7cf907[_0x52af8f[_0x213f57]['type']]++;
    }
    for (const _0x5972d6 in _0x7cf907) {
        assert['ok'](_0x147c3a['iwVOD'](_0x48e84d[_0x5972d6], _0x7cf907[_0x5972d6]), _0x147c3a['mzAcC']('Type\x20\x27' + _0x5972d6 + '\x27:\x20expecting:\x20' + _0x7cf907[_0x5972d6] + '\x20', 'found:\x20' + _0x48e84d[_0x5972d6]));
    }
};
function inspect(_0x432329, _0x24f748) {
    const _0x3f004f = {
        'ywYNU': function (_0x64b5e9, _0x433bfa) {
            return _0x64b5e9 || _0x433bfa;
        }
    };
    console['error'](util['inspect'](_0x432329, ![], _0x3f004f['ywYNU'](_0x24f748, 0x5), !![]));
}
module['exports']['printGraph'] = function printGraph(_0x27fc65) {
    const _0xc617c0 = {
            'JIcFd': function (_0x4c65e3, _0x9ea434) {
                return _0x4c65e3(_0x9ea434);
            },
            'KLNnO': function (_0x404c5c, _0x1de244) {
                return _0x404c5c(_0x1de244);
            }
        }, _0x53841d = {}, _0x295472 = {}, _0x35a6d9 = _0xc617c0['JIcFd'](pruneTickObjects, _0x27fc65['activities']), _0xaf103c = [];
    _0x35a6d9['forEach'](_0x5b0934);
    function _0x5b0934(_0x3fe923) {
        const _0x253d34 = _0x3fe923['type']['replace'](/WRAP/, '')['toLowerCase']();
        if (!_0x53841d[_0x253d34])
            _0x53841d[_0x253d34] = 0x1;
        const _0x3bb62f = _0x253d34 + ':' + _0x53841d[_0x253d34]++;
        _0x295472[_0x3fe923['uid']] = _0x3bb62f;
        const _0x1b3915 = _0x295472[_0x3fe923['triggerAsyncId']] || null;
        _0xaf103c['push']({
            'type': _0x3fe923['type'],
            'id': _0x3bb62f,
            'triggerAsyncId': _0x1b3915
        });
    }
    _0xc617c0['KLNnO'](inspect, _0xaf103c);
};
