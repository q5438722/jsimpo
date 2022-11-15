const _ = require('lodash'), Promise = require('bluebird'), $errUtils = require('../../cypress/error_utils');
module['exports'] = (_0x585541, _0x349362, _0x4318c7) => {
    const _0x68e258 = {
        'oXbCE': function (_0x41e52d, _0xf0140b) {
            return _0x41e52d !== _0xf0140b;
        },
        'iKifj': 'existence',
        'hjAMe': 'files.existent',
        'SDKXc': 'files.nonexistent',
        'kPNEQ': 'read:file',
        'xXjuF': 'encoding',
        'VvRNI': function (_0x44b4a7, _0x164b04) {
            return _0x44b4a7 === _0x164b04;
        },
        'OWrtD': 'ENOENT',
        'AKaim': 'files.unexpected_error',
        'BEbWs': 'readFile',
        'nfWCy': 'read',
        'uvaPm': 'File\x20Path',
        'WcNfz': 'Contents',
        'RMkmi': 'subject',
        'JgNFP': function (_0x61ae97, _0x304d74) {
            return _0x61ae97 != _0x304d74;
        },
        'IEZCJ': 'utf8',
        'kxejv': 'files.invalid_argument',
        'lWtcJ': function (_0x2ae61b) {
            return _0x2ae61b();
        },
        'hNaBu': 'files.timed_out',
        'gneiP': 'writeFile',
        'ElIuh': 'write',
        'zdQQe': 'files.invalid_contents',
        'EvwMq': 'write:file',
        'FQsHz': 'flag'
    };
    _0x585541['addAll']({
        'readFile'(_0x35b0d2, _0x267ec7, _0x599205 = {}) {
            const _0x442871 = {
                'OXOAg': function (_0x19fbde, _0x1b5e18) {
                    return _0x68e258['VvRNI'](_0x19fbde, _0x1b5e18);
                },
                'uuBwC': _0x68e258['OWrtD'],
                'MaxhV': _0x68e258['AKaim'],
                'YSnew': _0x68e258['BEbWs'],
                'gGlZe': _0x68e258['nfWCy'],
                'CafzK': _0x68e258['uvaPm'],
                'VqqVE': _0x68e258['WcNfz'],
                'zbgGj': _0x68e258['RMkmi']
            };
            let _0x4eb64a = _0x599205;
            _['isObject'](_0x267ec7) && (_0x4eb64a = _0x267ec7, _0x267ec7 = null);
            _0x599205 = _['defaults']({}, _0x4eb64a, {
                'encoding': _0x68e258['JgNFP'](_0x267ec7, null) ? _0x267ec7 : _0x68e258['IEZCJ'],
                'log': !![]
            });
            const _0x4747b5 = {};
            _0x599205['log'] && (_0x599205['_log'] = _0x349362['log']({
                'message': _0x35b0d2,
                'timeout': _0x599205['timeout'],
                'consoleProps'() {
                    return _0x4747b5;
                }
            }));
            (!_0x35b0d2 || !_['isString'](_0x35b0d2)) && $errUtils['throwErrByPath'](_0x68e258['kxejv'], {
                'onFail': _0x599205['_log'],
                'args': {
                    'cmd': _0x68e258['BEbWs'],
                    'file': _0x35b0d2
                }
            });
            const _0x43f044 = () => {
                const _0x6d3b9 = {
                    'ZUpkJ': function (_0x3314d1, _0x3abe8b) {
                        return _0x68e258['oXbCE'](_0x3314d1, _0x3abe8b);
                    },
                    'wKIvk': _0x68e258['iKifj'],
                    'TlKWo': _0x68e258['hjAMe'],
                    'imOvr': _0x68e258['SDKXc']
                };
                return _0x349362['backend'](_0x68e258['kPNEQ'], _0x35b0d2, _['pick'](_0x599205, _0x68e258['xXjuF']))['catch'](_0xa26a5 => {
                    if (_0x442871['OXOAg'](_0xa26a5['code'], _0x442871['uuBwC']))
                        return {
                            'contents': null,
                            'filePath': _0xa26a5['filePath']
                        };
                    return $errUtils['throwErrByPath'](_0x442871['MaxhV'], {
                        'onFail': _0x599205['_log'],
                        'args': {
                            'cmd': _0x442871['YSnew'],
                            'action': _0x442871['gGlZe'],
                            'file': _0x35b0d2,
                            'filePath': _0xa26a5['filePath'],
                            'error': _0xa26a5['message']
                        }
                    });
                })['then'](({
                    contents: _0x46696e,
                    filePath: _0x3c72b4
                }) => {
                    return _0x4747b5[_0x442871['CafzK']] = _0x3c72b4, _0x4747b5[_0x442871['VqqVE']] = _0x46696e, _0x4318c7['verifyUpcomingAssertions'](_0x46696e, _0x599205, {
                        'ensureExistenceFor': _0x442871['zbgGj'],
                        'onFail'(_0x859276) {
                            if (_0x6d3b9['ZUpkJ'](_0x859276['type'], _0x6d3b9['wKIvk']))
                                return;
                            const _0x435f7d = _0x46696e ? _0x6d3b9['TlKWo'] : _0x6d3b9['imOvr'], {
                                    message: _0x4cea7a,
                                    docsUrl: _0x44c2e7
                                } = $errUtils['cypressErrByPath'](_0x435f7d, {
                                    'args': {
                                        'file': _0x35b0d2,
                                        'filePath': _0x3c72b4
                                    }
                                });
                            _0x859276['message'] = _0x4cea7a, _0x859276['docsUrl'] = _0x44c2e7;
                        },
                        'onRetry': _0x43f044
                    });
                });
            };
            return _0x68e258['lWtcJ'](_0x43f044);
        },
        'writeFile'(_0x4d3e63, _0x20a9b2, _0x3331da, _0x512d62 = {}) {
            const _0x39d031 = {
                'DYiKy': _0x68e258['AKaim'],
                'BxZgE': _0x68e258['gneiP'],
                'kpnwk': _0x68e258['ElIuh']
            };
            let _0x3fb4c5 = _0x512d62;
            _['isObject'](_0x3331da) && (_0x3fb4c5 = _0x3331da, _0x3331da = null);
            _0x512d62 = _['defaults']({}, _0x3fb4c5, {
                'encoding': _0x3331da ? _0x3331da : _0x68e258['IEZCJ'],
                'flag': _0x3fb4c5['flag'] ? _0x3fb4c5['flag'] : 'w',
                'log': !![]
            });
            const _0x1df0f3 = {};
            return _0x512d62['log'] && (_0x512d62['_log'] = _0x349362['log']({
                'message': _0x4d3e63,
                'timeout': 0x0,
                'consoleProps'() {
                    return _0x1df0f3;
                }
            })), (!_0x4d3e63 || !_['isString'](_0x4d3e63)) && $errUtils['throwErrByPath'](_0x68e258['kxejv'], {
                'onFail': _0x512d62['_log'],
                'args': {
                    'cmd': _0x68e258['gneiP'],
                    'file': _0x4d3e63
                }
            }), !(_['isString'](_0x20a9b2) || _['isObject'](_0x20a9b2)) && $errUtils['throwErrByPath'](_0x68e258['zdQQe'], {
                'onFail': _0x512d62['_log'],
                'args': { 'contents': _0x20a9b2 }
            }), _['isObject'](_0x20a9b2) && (_0x20a9b2 = JSON['stringify'](_0x20a9b2, null, 0x2)), _0x349362['backend'](_0x68e258['EvwMq'], _0x4d3e63, _0x20a9b2, _['pick'](_0x512d62, [
                _0x68e258['xXjuF'],
                _0x68e258['FQsHz']
            ]))['then'](({
                contents: _0x382890,
                filePath: _0x1ec9bc
            }) => {
                return _0x1df0f3[_0x68e258['uvaPm']] = _0x1ec9bc, _0x1df0f3[_0x68e258['WcNfz']] = _0x382890, null;
            })['catch'](Promise['TimeoutError'], () => {
                return $errUtils['throwErrByPath'](_0x68e258['hNaBu'], {
                    'onFail': _0x512d62['_log'],
                    'args': {
                        'cmd': _0x68e258['gneiP'],
                        'file': _0x4d3e63,
                        'timeout': _0x512d62['timeout']
                    }
                });
            })['catch'](_0x466831 => {
                return $errUtils['throwErrByPath'](_0x39d031['DYiKy'], {
                    'onFail': _0x512d62['_log'],
                    'args': {
                        'cmd': _0x39d031['BxZgE'],
                        'action': _0x39d031['kpnwk'],
                        'file': _0x4d3e63,
                        'filePath': _0x466831['filePath'],
                        'error': _0x466831['message']
                    }
                });
            });
        }
    });
};
