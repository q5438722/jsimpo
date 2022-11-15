const _0xf1e1 = [
    'isObject',
    'log',
    '_log',
    'timeout',
    'isString',
    'throwErrByPath',
    'readFile',
    'backend',
    'read:file',
    'pick',
    'encoding',
    'catch',
    'code',
    'ENOENT',
    'filePath',
    'files.unexpected_error',
    'read',
    'File\x20Path',
    'Contents',
    'verifyUpcomingAssertions',
    'type',
    'files.existent',
    'files.nonexistent',
    'cypressErrByPath',
    'message',
    'docsUrl',
    'defaults',
    'utf8',
    'flag',
    'files.invalid_argument',
    'writeFile',
    'files.invalid_contents',
    'stringify',
    'write:file',
    'then',
    'TimeoutError',
    'files.timed_out',
    'write',
    '49578TCPjFU',
    '98178DqWQcN',
    '68821yYenuH',
    '292313ehCjxW',
    '2XhtMBI',
    '22323gSWEAl',
    '1ohQZMU',
    '317123nbyXbf',
    '564268TMIknz',
    'lodash',
    'bluebird',
    'addAll'
];
const _0x2d2fe2 = _0x5b02;
function _0x5b02(_0x2566c3, _0x4c4d5f) {
    return _0x5b02 = function (_0xf1e162, _0x5b0227) {
        _0xf1e162 = _0xf1e162 - 0x1e8;
        let _0x20e06b = _0xf1e1[_0xf1e162];
        return _0x20e06b;
    }, _0x5b02(_0x2566c3, _0x4c4d5f);
}
(function (_0x5f074c, _0x27dfba) {
    const _0xe3a72 = _0x5b02;
    while (!![]) {
        try {
            const _0x417655 = -parseInt(_0xe3a72(0x1e8)) + -parseInt(_0xe3a72(0x1e9)) + -parseInt(_0xe3a72(0x1ea)) + parseInt(_0xe3a72(0x1eb)) + -parseInt(_0xe3a72(0x1ec)) * parseInt(_0xe3a72(0x1ed)) + -parseInt(_0xe3a72(0x1ee)) * parseInt(_0xe3a72(0x1ef)) + parseInt(_0xe3a72(0x1f0));
            if (_0x417655 === _0x27dfba)
                break;
            else
                _0x5f074c['push'](_0x5f074c['shift']());
        } catch (_0x48858f) {
            _0x5f074c['push'](_0x5f074c['shift']());
        }
    }
}(_0xf1e1, 0x43edb));
const _ = require(_0x2d2fe2(0x1f1)), Promise = require(_0x2d2fe2(0x1f2)), $errUtils = require('../../cypress/error_utils');
module['exports'] = (_0x58f4ab, _0x228adc, _0x4b4397) => {
    const _0x12d26a = _0x2d2fe2;
    _0x58f4ab[_0x12d26a(0x1f3)]({
        'readFile'(_0x1e99a4, _0x2d25da, _0x48e03c = {}) {
            const _0xf8cf4e = _0x12d26a;
            let _0x3c3c1d = _0x48e03c;
            _[_0xf8cf4e(0x1f4)](_0x2d25da) && (_0x3c3c1d = _0x2d25da, _0x2d25da = null);
            _0x48e03c = _['defaults']({}, _0x3c3c1d, {
                'encoding': _0x2d25da != null ? _0x2d25da : 'utf8',
                'log': !![]
            });
            const _0xcf8dd3 = {};
            _0x48e03c[_0xf8cf4e(0x1f5)] && (_0x48e03c[_0xf8cf4e(0x1f6)] = _0x228adc[_0xf8cf4e(0x1f5)]({
                'message': _0x1e99a4,
                'timeout': _0x48e03c[_0xf8cf4e(0x1f7)],
                'consoleProps'() {
                    return _0xcf8dd3;
                }
            }));
            (!_0x1e99a4 || !_[_0xf8cf4e(0x1f8)](_0x1e99a4)) && $errUtils[_0xf8cf4e(0x1f9)]('files.invalid_argument', {
                'onFail': _0x48e03c[_0xf8cf4e(0x1f6)],
                'args': {
                    'cmd': _0xf8cf4e(0x1fa),
                    'file': _0x1e99a4
                }
            });
            const _0x47e94a = () => {
                const _0x200aa0 = _0xf8cf4e;
                return _0x228adc[_0x200aa0(0x1fb)](_0x200aa0(0x1fc), _0x1e99a4, _[_0x200aa0(0x1fd)](_0x48e03c, _0x200aa0(0x1fe)))[_0x200aa0(0x1ff)](_0x416f2a => {
                    const _0x31e314 = _0x200aa0;
                    if (_0x416f2a[_0x31e314(0x200)] === _0x31e314(0x201))
                        return {
                            'contents': null,
                            'filePath': _0x416f2a[_0x31e314(0x202)]
                        };
                    return $errUtils['throwErrByPath'](_0x31e314(0x203), {
                        'onFail': _0x48e03c[_0x31e314(0x1f6)],
                        'args': {
                            'cmd': _0x31e314(0x1fa),
                            'action': _0x31e314(0x204),
                            'file': _0x1e99a4,
                            'filePath': _0x416f2a[_0x31e314(0x202)],
                            'error': _0x416f2a['message']
                        }
                    });
                })['then'](({
                    contents: _0x1cfab8,
                    filePath: _0x2c2d81
                }) => {
                    const _0x2edc59 = _0x200aa0;
                    return _0xcf8dd3[_0x2edc59(0x205)] = _0x2c2d81, _0xcf8dd3[_0x2edc59(0x206)] = _0x1cfab8, _0x4b4397[_0x2edc59(0x207)](_0x1cfab8, _0x48e03c, {
                        'ensureExistenceFor': 'subject',
                        'onFail'(_0x5cb704) {
                            const _0x46199f = _0x2edc59;
                            if (_0x5cb704[_0x46199f(0x208)] !== 'existence')
                                return;
                            const _0x2ba73c = _0x1cfab8 ? _0x46199f(0x209) : _0x46199f(0x20a), {
                                    message: _0x5179f2,
                                    docsUrl: _0x1efcb7
                                } = $errUtils[_0x46199f(0x20b)](_0x2ba73c, {
                                    'args': {
                                        'file': _0x1e99a4,
                                        'filePath': _0x2c2d81
                                    }
                                });
                            _0x5cb704[_0x46199f(0x20c)] = _0x5179f2, _0x5cb704[_0x46199f(0x20d)] = _0x1efcb7;
                        },
                        'onRetry': _0x47e94a
                    });
                });
            };
            return _0x47e94a();
        },
        'writeFile'(_0x46b16a, _0x5c6cfb, _0x256910, _0x596646 = {}) {
            const _0x711370 = _0x12d26a;
            let _0x301452 = _0x596646;
            _[_0x711370(0x1f4)](_0x256910) && (_0x301452 = _0x256910, _0x256910 = null);
            _0x596646 = _[_0x711370(0x20e)]({}, _0x301452, {
                'encoding': _0x256910 ? _0x256910 : _0x711370(0x20f),
                'flag': _0x301452[_0x711370(0x210)] ? _0x301452[_0x711370(0x210)] : 'w',
                'log': !![]
            });
            const _0x371037 = {};
            return _0x596646[_0x711370(0x1f5)] && (_0x596646[_0x711370(0x1f6)] = _0x228adc[_0x711370(0x1f5)]({
                'message': _0x46b16a,
                'timeout': 0x0,
                'consoleProps'() {
                    return _0x371037;
                }
            })), (!_0x46b16a || !_['isString'](_0x46b16a)) && $errUtils[_0x711370(0x1f9)](_0x711370(0x211), {
                'onFail': _0x596646['_log'],
                'args': {
                    'cmd': _0x711370(0x212),
                    'file': _0x46b16a
                }
            }), !(_[_0x711370(0x1f8)](_0x5c6cfb) || _[_0x711370(0x1f4)](_0x5c6cfb)) && $errUtils[_0x711370(0x1f9)](_0x711370(0x213), {
                'onFail': _0x596646[_0x711370(0x1f6)],
                'args': { 'contents': _0x5c6cfb }
            }), _[_0x711370(0x1f4)](_0x5c6cfb) && (_0x5c6cfb = JSON[_0x711370(0x214)](_0x5c6cfb, null, 0x2)), _0x228adc[_0x711370(0x1fb)](_0x711370(0x215), _0x46b16a, _0x5c6cfb, _[_0x711370(0x1fd)](_0x596646, [
                'encoding',
                'flag'
            ]))[_0x711370(0x216)](({
                contents: _0xc562ee,
                filePath: _0xf9d0bd
            }) => {
                const _0x216c3f = _0x711370;
                return _0x371037[_0x216c3f(0x205)] = _0xf9d0bd, _0x371037['Contents'] = _0xc562ee, null;
            })[_0x711370(0x1ff)](Promise[_0x711370(0x217)], () => {
                const _0x2d0672 = _0x711370;
                return $errUtils['throwErrByPath'](_0x2d0672(0x218), {
                    'onFail': _0x596646['_log'],
                    'args': {
                        'cmd': _0x2d0672(0x212),
                        'file': _0x46b16a,
                        'timeout': _0x596646[_0x2d0672(0x1f7)]
                    }
                });
            })['catch'](_0x51961d => {
                const _0x5d49ea = _0x711370;
                return $errUtils[_0x5d49ea(0x1f9)](_0x5d49ea(0x203), {
                    'onFail': _0x596646[_0x5d49ea(0x1f6)],
                    'args': {
                        'cmd': 'writeFile',
                        'action': _0x5d49ea(0x219),
                        'file': _0x46b16a,
                        'filePath': _0x51961d[_0x5d49ea(0x202)],
                        'error': _0x51961d[_0x5d49ea(0x20c)]
                    }
                });
            });
        }
    });
};
