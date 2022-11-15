const _ = require('lodash'), Promise = require('bluebird'), $errUtils = require('../../cypress/error_utils');
module['exports'] = (_0x41e2df, _0x432578, _0x2664e4) => {
    _0x41e2df['addAll']({
        'readFile'(_0x20dacb, _0x54b232, _0x33d3a3 = {}) {
            let _0x5a8dea = _0x33d3a3;
            _['isObject'](_0x54b232) && (_0x5a8dea = _0x54b232, _0x54b232 = null);
            _0x33d3a3 = _['defaults']({}, _0x5a8dea, {
                'encoding': _0x54b232 != null ? _0x54b232 : 'utf8',
                'log': !![]
            });
            const _0xf3619c = {};
            _0x33d3a3['log'] && (_0x33d3a3['_log'] = _0x432578['log']({
                'message': _0x20dacb,
                'timeout': _0x33d3a3['timeout'],
                'consoleProps'() {
                    return _0xf3619c;
                }
            }));
            (!_0x20dacb || !_['isString'](_0x20dacb)) && $errUtils['throwErrByPath']('files.invalid_argument', {
                'onFail': _0x33d3a3['_log'],
                'args': {
                    'cmd': 'readFile',
                    'file': _0x20dacb
                }
            });
            const _0x5563e4 = () => {
                return _0x432578['backend']('read:file', _0x20dacb, _['pick'](_0x33d3a3, 'encoding'))['catch'](_0x7982f => {
                    if (_0x7982f['code'] === 'ENOENT')
                        return {
                            'contents': null,
                            'filePath': _0x7982f['filePath']
                        };
                    return $errUtils['throwErrByPath']('files.unexpected_error', {
                        'onFail': _0x33d3a3['_log'],
                        'args': {
                            'cmd': 'readFile',
                            'action': 'read',
                            'file': _0x20dacb,
                            'filePath': _0x7982f['filePath'],
                            'error': _0x7982f['message']
                        }
                    });
                })['then'](({
                    contents: _0x152b28,
                    filePath: _0x3334ac
                }) => {
                    return _0xf3619c['File\x20Path'] = _0x3334ac, _0xf3619c['Contents'] = _0x152b28, _0x2664e4['verifyUpcomingAssertions'](_0x152b28, _0x33d3a3, {
                        'ensureExistenceFor': 'subject',
                        'onFail'(_0x5191b1) {
                            if (_0x5191b1['type'] !== 'existence')
                                return;
                            const _0x2f7a7b = _0x152b28 ? 'files.existent' : 'files.nonexistent', {
                                    message: _0x27f53c,
                                    docsUrl: _0x5ad88e
                                } = $errUtils['cypressErrByPath'](_0x2f7a7b, {
                                    'args': {
                                        'file': _0x20dacb,
                                        'filePath': _0x3334ac
                                    }
                                });
                            _0x5191b1['message'] = _0x27f53c, _0x5191b1['docsUrl'] = _0x5ad88e;
                        },
                        'onRetry': _0x5563e4
                    });
                });
            };
            return _0x5563e4();
        },
        'writeFile'(_0x60c66e, _0x88b1e0, _0x2f13a4, _0x223705 = {}) {
            let _0x5436e3 = _0x223705;
            _['isObject'](_0x2f13a4) && (_0x5436e3 = _0x2f13a4, _0x2f13a4 = null);
            _0x223705 = _['defaults']({}, _0x5436e3, {
                'encoding': _0x2f13a4 ? _0x2f13a4 : 'utf8',
                'flag': _0x5436e3['flag'] ? _0x5436e3['flag'] : 'w',
                'log': !![]
            });
            const _0x22814b = {};
            return _0x223705['log'] && (_0x223705['_log'] = _0x432578['log']({
                'message': _0x60c66e,
                'timeout': 0x0,
                'consoleProps'() {
                    return _0x22814b;
                }
            })), (!_0x60c66e || !_['isString'](_0x60c66e)) && $errUtils['throwErrByPath']('files.invalid_argument', {
                'onFail': _0x223705['_log'],
                'args': {
                    'cmd': 'writeFile',
                    'file': _0x60c66e
                }
            }), !(_['isString'](_0x88b1e0) || _['isObject'](_0x88b1e0)) && $errUtils['throwErrByPath']('files.invalid_contents', {
                'onFail': _0x223705['_log'],
                'args': { 'contents': _0x88b1e0 }
            }), _['isObject'](_0x88b1e0) && (_0x88b1e0 = JSON['stringify'](_0x88b1e0, null, -0x1 * -0x3df + -0x1818 + 0x143b)), _0x432578['backend']('write:file', _0x60c66e, _0x88b1e0, _['pick'](_0x223705, [
                'encoding',
                'flag'
            ]))['then'](({
                contents: _0x52304a,
                filePath: _0x3dc85d
            }) => {
                return _0x22814b['File\x20Path'] = _0x3dc85d, _0x22814b['Contents'] = _0x52304a, null;
            })['catch'](Promise['TimeoutError'], () => {
                return $errUtils['throwErrByPath']('files.timed_out', {
                    'onFail': _0x223705['_log'],
                    'args': {
                        'cmd': 'writeFile',
                        'file': _0x60c66e,
                        'timeout': _0x223705['timeout']
                    }
                });
            })['catch'](_0x466641 => {
                return $errUtils['throwErrByPath']('files.unexpected_error', {
                    'onFail': _0x223705['_log'],
                    'args': {
                        'cmd': 'writeFile',
                        'action': 'write',
                        'file': _0x60c66e,
                        'filePath': _0x466641['filePath'],
                        'error': _0x466641['message']
                    }
                });
            });
        }
    });
};
