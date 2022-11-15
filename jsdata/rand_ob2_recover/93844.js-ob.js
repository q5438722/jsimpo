const _ = require(_0x2d2fe2(497)), Promise = require(_0x2d2fe2(498)), $errUtils = require('../../cypress/error_utils');
module['exports'] = (_0x58f4ab, _0x228adc, _0x4b4397) => {
    const _0x12d26a = _0x2d2fe2;
    _0x58f4ab[_0x12d26a(499)]({
        'readFile'(_0x1e99a4, _0x2d25da, _0x48e03c = {}) {
            const _0xf8cf4e = _0x12d26a;
            let _0x3c3c1d = _0x48e03c;
            _[_0xf8cf4e(500)](_0x2d25da) && (_0x3c3c1d = _0x2d25da, _0x2d25da = null);
            _0x48e03c = _['defaults']({}, _0x3c3c1d, {
                'encoding': _0x2d25da != null ? _0x2d25da : 'utf8',
                'log': !![]
            });
            const _0xcf8dd3 = {};
            _0x48e03c[_0xf8cf4e(501)] && (_0x48e03c[_0xf8cf4e(502)] = _0x228adc[_0xf8cf4e(501)]({
                'message': _0x1e99a4,
                'timeout': _0x48e03c[_0xf8cf4e(503)],
                'consoleProps'() {
                    return _0xcf8dd3;
                }
            }));
            (!_0x1e99a4 || !_[_0xf8cf4e(504)](_0x1e99a4)) && $errUtils[_0xf8cf4e(505)]('files.invalid_argument', {
                'onFail': _0x48e03c[_0xf8cf4e(502)],
                'args': {
                    'cmd': _0xf8cf4e(506),
                    'file': _0x1e99a4
                }
            });
            const _0x47e94a = () => {
                const _0x200aa0 = _0xf8cf4e;
                return _0x228adc[_0x200aa0(507)](_0x200aa0(508), _0x1e99a4, _[_0x200aa0(509)](_0x48e03c, _0x200aa0(510)))[_0x200aa0(511)](_0x416f2a => {
                    const _0x31e314 = _0x200aa0;
                    if (_0x416f2a[_0x31e314(512)] === _0x31e314(513))
                        return {
                            'contents': null,
                            'filePath': _0x416f2a[_0x31e314(514)]
                        };
                    return $errUtils['throwErrByPath'](_0x31e314(515), {
                        'onFail': _0x48e03c[_0x31e314(502)],
                        'args': {
                            'cmd': _0x31e314(506),
                            'action': _0x31e314(516),
                            'file': _0x1e99a4,
                            'filePath': _0x416f2a[_0x31e314(514)],
                            'error': _0x416f2a['message']
                        }
                    });
                })['then'](({
                    contents: _0x1cfab8,
                    filePath: _0x2c2d81
                }) => {
                    const _0x2edc59 = _0x200aa0;
                    return _0xcf8dd3[_0x2edc59(517)] = _0x2c2d81, _0xcf8dd3[_0x2edc59(518)] = _0x1cfab8, _0x4b4397[_0x2edc59(519)](_0x1cfab8, _0x48e03c, {
                        'ensureExistenceFor': 'subject',
                        'onFail'(_0x5cb704) {
                            const _0x46199f = _0x2edc59;
                            if (_0x5cb704[_0x46199f(520)] !== 'existence')
                                return;
                            const _0x2ba73c = _0x1cfab8 ? _0x46199f(521) : _0x46199f(522), {
                                    message: _0x5179f2,
                                    docsUrl: _0x1efcb7
                                } = $errUtils[_0x46199f(523)](_0x2ba73c, {
                                    'args': {
                                        'file': _0x1e99a4,
                                        'filePath': _0x2c2d81
                                    }
                                });
                            _0x5cb704[_0x46199f(524)] = _0x5179f2, _0x5cb704[_0x46199f(525)] = _0x1efcb7;
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
            _[_0x711370(500)](_0x256910) && (_0x301452 = _0x256910, _0x256910 = null);
            _0x596646 = _[_0x711370(526)]({}, _0x301452, {
                'encoding': _0x256910 ? _0x256910 : _0x711370(527),
                'flag': _0x301452[_0x711370(528)] ? _0x301452[_0x711370(528)] : 'w',
                'log': !![]
            });
            const _0x371037 = {};
            return _0x596646[_0x711370(501)] && (_0x596646[_0x711370(502)] = _0x228adc[_0x711370(501)]({
                'message': _0x46b16a,
                'timeout': 0,
                'consoleProps'() {
                    return _0x371037;
                }
            })), (!_0x46b16a || !_['isString'](_0x46b16a)) && $errUtils[_0x711370(505)](_0x711370(529), {
                'onFail': _0x596646['_log'],
                'args': {
                    'cmd': _0x711370(530),
                    'file': _0x46b16a
                }
            }), !(_[_0x711370(504)](_0x5c6cfb) || _[_0x711370(500)](_0x5c6cfb)) && $errUtils[_0x711370(505)](_0x711370(531), {
                'onFail': _0x596646[_0x711370(502)],
                'args': { 'contents': _0x5c6cfb }
            }), _[_0x711370(500)](_0x5c6cfb) && (_0x5c6cfb = JSON[_0x711370(532)](_0x5c6cfb, null, 2)), _0x228adc[_0x711370(507)](_0x711370(533), _0x46b16a, _0x5c6cfb, _[_0x711370(509)](_0x596646, [
                'encoding',
                'flag'
            ]))[_0x711370(534)](({
                contents: _0xc562ee,
                filePath: _0xf9d0bd
            }) => {
                const _0x216c3f = _0x711370;
                return _0x371037[_0x216c3f(517)] = _0xf9d0bd, _0x371037['Contents'] = _0xc562ee, null;
            })[_0x711370(511)](Promise[_0x711370(535)], () => {
                const _0x2d0672 = _0x711370;
                return $errUtils['throwErrByPath'](_0x2d0672(536), {
                    'onFail': _0x596646['_log'],
                    'args': {
                        'cmd': _0x2d0672(530),
                        'file': _0x46b16a,
                        'timeout': _0x596646[_0x2d0672(503)]
                    }
                });
            })['catch'](_0x51961d => {
                const _0x5d49ea = _0x711370;
                return $errUtils[_0x5d49ea(505)](_0x5d49ea(515), {
                    'onFail': _0x596646[_0x5d49ea(502)],
                    'args': {
                        'cmd': 'writeFile',
                        'action': _0x5d49ea(537),
                        'file': _0x46b16a,
                        'filePath': _0x51961d[_0x5d49ea(514)],
                        'error': _0x51961d[_0x5d49ea(524)]
                    }
                });
            });
        }
    });
};