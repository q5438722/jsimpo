var EventEmitter = require('events')['EventEmitter'];
var spawn = require('child_process')['spawn'];
var readlink = require('graceful-readlink')['readlinkSync'];
var path = require('path');
var dirname = path['dirname'];
var basename = path['basename'];
var fs = require('fs');
exports = module['exports'] = new Command();
exports['Command'] = Command;
exports['Option'] = Option;
function Option(_0x4dfcae, _0x506710) {
    var _0x59df45 = '4|7|3|1|5|6|2|0'['split']('|'), _0x76b57f = 0;
    while (!![]) {
        switch (_0x59df45[_0x76b57f++]) {
        case '0':
            this['description'] = _0x506710 || '';
            continue;
        case '1':
            this['bool'] = !~_0x4dfcae['indexOf']('-no-');
            continue;
        case '2':
            this['long'] = _0x4dfcae['shift']();
            continue;
        case '3':
            this['optional'] = ~_0x4dfcae['indexOf']('[');
            continue;
        case '4':
            this['flags'] = _0x4dfcae;
            continue;
        case '5':
            _0x4dfcae = _0x4dfcae['split'](/[ ,|]+/);
            continue;
        case '6':
            if (_0x4dfcae['length'] > 1 && !/^[[<]/['test'](_0x4dfcae[1]))
                this['short'] = _0x4dfcae['shift']();
            continue;
        case '7':
            this['required'] = ~_0x4dfcae['indexOf']('<');
            continue;
        }
        break;
    }
}
Option['prototype']['name'] = function () {
    return this['long']['replace']('--', '')['replace']('no-', '');
};
Option['prototype']['is'] = function (_0x134e7b) {
    return _0x134e7b == this['short'] || _0x134e7b == this['long'];
};
function Command(_0x4a0cfa) {
    var _0x49217d = '0|1|4|3|2|5'['split']('|'), _0x2b1c01 = 0;
    while (!![]) {
        switch (_0x49217d[_0x2b1c01++]) {
        case '0':
            this['commands'] = [];
            continue;
        case '1':
            this['options'] = [];
            continue;
        case '2':
            this['_args'] = [];
            continue;
        case '3':
            this['_allowUnknownOption'] = ![];
            continue;
        case '4':
            this['_execs'] = {};
            continue;
        case '5':
            this['_name'] = _0x4a0cfa || '';
            continue;
        }
        break;
    }
}
Command['prototype']['__proto__'] = EventEmitter['prototype'];
Command['prototype']['command'] = function (_0x115490, _0x3d5339, _0x8329fc) {
    _0x8329fc = _0x8329fc || {};
    var _0x376823 = _0x115490['split'](/ +/);
    var _0x404bc0 = new Command(_0x376823['shift']());
    if (_0x3d5339) {
        if ('iIKRJ' === 'iTFzQ') {
            if (isExplicitJS) {
                _0x376823['unshift'](localBin);
                _0x376823 = (process['execArgv'] || [])['concat'](_0x376823);
                proc = spawn('node', _0x376823, {
                    'stdio': 'inherit',
                    'customFds': [
                        0,
                        1,
                        2
                    ]
                });
            } else {
                proc = spawn(bin, _0x376823, {
                    'stdio': 'inherit',
                    'customFds': [
                        0,
                        1,
                        2
                    ]
                });
            }
        } else {
            _0x404bc0['description'](_0x3d5339);
            this['executables'] = !![];
            this['_execs'][_0x404bc0['_name']] = !![];
            if (_0x8329fc['isDefault'])
                this['defaultExecutable'] = _0x404bc0['_name'];
        }
    }
    _0x404bc0['_noHelp'] = !!_0x8329fc['noHelp'];
    this['commands']['push'](_0x404bc0);
    _0x404bc0['parseExpectedArgs'](_0x376823);
    _0x404bc0['parent'] = this;
    if (_0x3d5339)
        return this;
    return _0x404bc0;
};
Command['prototype']['arguments'] = function (_0xf22e04) {
    return this['parseExpectedArgs'](_0xf22e04['split'](/ +/));
};
Command['prototype']['addImplicitHelpCommand'] = function () {
    this['command']('help [cmd]', 'display help for [cmd]');
};
Command['prototype']['parseExpectedArgs'] = function (_0x3a122e) {
    if (!_0x3a122e['length'])
        return;
    var _0x23377e = this;
    _0x3a122e['forEach'](function (_0x2776a9) {
        var _0x2a069c = {
            'vlBmM': '2|4|3|0|1',
            'qwbai': '[options]',
            'RgNuN': ' [command]'
        };
        if ('GdeZp' !== 'pfqCh') {
            var _0x32a6ea = {
                'required': ![],
                'variadic': ![]
            };
            switch (_0x2776a9[0]) {
            case '<':
                _0x32a6ea['required'] = !![];
                '' = _0x2776a9['slice'](1, -1);
                break;
            case '[':
                '' = _0x2776a9['slice'](1, -1);
                break;
            }
            if (''['length'] > 3 && ''['slice'](-3) === '...') {
                if ('weGqv' === 'bXoIJ') {
                    console['error']();
                    console['error']('  error: missing required argument `%s\'', name);
                    console['error']();
                    process['exit'](1);
                } else {
                    _0x32a6ea['variadic'] = !![];
                    '' = ''['slice'](0, -3);
                }
            }
            if ('') {
                _0x23377e['_args']['push'](_0x32a6ea);
            }
        } else {
            var _0x1a9e07 = _0x2a069c['vlBmM']['split']('|'), _0x556485 = 0;
            while (!![]) {
                switch (_0x1a9e07[_0x556485++]) {
                case '0':
                    this['_usage'] = str;
                    continue;
                case '1':
                    return this;
                case '2':
                    var _0x587876 = this['_args']['map'](function (_0x168645) {
                        return humanReadableArgName(_0x168645);
                    });
                    continue;
                case '3':
                    if (0 == arguments['length'])
                        return this['_usage'] || _0x4898f6;
                    continue;
                case '4':
                    var _0x4898f6 = _0x2a069c['qwbai'] + (this['commands']['length'] ? _0x2a069c['RgNuN'] : '') + (this['_args']['length'] ? ' ' + _0x587876['join'](' ') : '');
                    continue;
                }
                break;
            }
        }
    });
    return this;
};
Command['prototype']['action'] = function (_0x247174) {
    var _0x48a5ce = this;
    var _0x179ead = function (_0x412f03, _0x2ddbcd) {
        _0x412f03 = _0x412f03 || [];
        _0x2ddbcd = _0x2ddbcd || [];
        var _0x4a301d = _0x48a5ce['parseOptions'](_0x2ddbcd);
        outputHelpIfNecessary(_0x48a5ce, _0x4a301d['unknown']);
        if (_0x4a301d['unknown']['length'] > 0) {
            if ('oqHVk' !== 'SyoGg') {
                _0x48a5ce['unknownOption'](_0x4a301d['unknown'][0]);
            } else {
                var _0x4c2fab = {}, _0x299974 = this['options']['length'];
                for (var _0x2deb5e = 0; _0x2deb5e < _0x299974; _0x2deb5e++) {
                    var _0x3c360a = camelcase(this['options'][_0x2deb5e]['name']());
                    _0x4c2fab[_0x3c360a] = _0x3c360a === 'version' ? this['_version'] : this[_0x3c360a];
                }
                return _0x4c2fab;
            }
        }
        if (_0x4a301d['args']['length'])
            _0x412f03 = _0x4a301d['args']['concat'](_0x412f03);
        _0x48a5ce['_args']['forEach'](function (_0x256764, _0x22f305) {
            if ('Hinzb' !== 'Seons') {
                if (_0x256764['required'] && null == _0x412f03[_0x22f305]) {
                    _0x48a5ce['missingArgument'](_0x256764['name']);
                } else if (_0x256764['variadic']) {
                    if ('KBVVu' === 'KBVVu') {
                        if (_0x22f305 !== _0x48a5ce['_args']['length'] - 1) {
                            if ('xfoTf' !== 'xfoTf') {
                                if (_0x247174 instanceof RegExp) {
                                    var _0x28f3e5 = _0x247174;
                                    _0x247174 = function (_0x4016d0, _0x567b3d) {
                                        var _0x1fac93 = _0x28f3e5['exec'](_0x4016d0);
                                        return _0x1fac93 ? _0x1fac93[0] : _0x567b3d;
                                    };
                                } else {
                                    defaultValue = _0x247174;
                                    _0x247174 = null;
                                }
                            } else {
                                _0x48a5ce['variadicArgNotLast'](_0x256764['name']);
                            }
                        }
                        _0x412f03[_0x22f305] = _0x412f03['splice'](_0x22f305);
                    } else {
                        console['error']('\n  %s(1) not executable. try chmod or run with root\n', bin);
                    }
                }
            } else {
                var _0x1fb6f7 = regex['exec'](val);
                return _0x1fb6f7 ? _0x1fb6f7[0] : def;
            }
        });
        if (_0x48a5ce['_args']['length']) {
            _0x412f03[_0x48a5ce['_args']['length']] = _0x48a5ce;
        } else {
            if ('OluZH' === 'zQWew') {
                cb = function (_0x2304da) {
                    return _0x2304da;
                };
            } else {
                _0x412f03['push'](_0x48a5ce);
            }
        }
        _0x247174['apply'](_0x48a5ce, _0x412f03);
    };
    var _0x2f55a0 = this['parent'] || this;
    var _0x431a39 = _0x2f55a0 === this ? '*' : this['_name'];
    _0x2f55a0['on'](_0x431a39, _0x179ead);
    if (this['_alias'])
        _0x2f55a0['on'](this['_alias'], _0x179ead);
    return this;
};
Command['prototype']['option'] = function (_0x4c9920, _0x3842f2, _0x14049a, _0x4c11a9) {
    var _0x20a18a = this, _0x2be6b8 = new Option(_0x4c9920, _0x3842f2), _0x4f2822 = _0x2be6b8['name'](), _0x1fe05c = camelcase(_0x4f2822);
    if (typeof _0x14049a != 'function') {
        if ('yKwwE' === 'DdZtm') {
            var _0x29bd1e = [];
            if (this['_description']) {
                _0x29bd1e = [
                    '  ' + this['_description'],
                    ''
                ];
            }
            var _0x4d28ec = this['_name'];
            if (this['_alias']) {
                _0x4d28ec = _0x4d28ec + '|' + this['_alias'];
            }
            var _0x36eb22 = [
                '',
                '  Usage: ' + _0x4d28ec + ' ' + this['usage'](),
                ''
            ];
            var _0x47d4b6 = [];
            var _0x2afc0a = this['commandHelp']();
            if (_0x2afc0a)
                _0x47d4b6 = [_0x2afc0a];
            var _0x3cad6e = [
                '  Options:',
                '',
                '' + this['optionHelp']()['replace'](/^/gm, '    '),
                '',
                ''
            ];
            return _0x36eb22['concat'](_0x47d4b6)['concat'](_0x29bd1e)['concat'](_0x3cad6e)['join']('\n');
        } else {
            if (_0x14049a instanceof RegExp) {
                var _0x567c41 = _0x14049a;
                _0x14049a = function (_0x4c3289, _0x3032dd) {
                    var _0x2d946b = _0x567c41['exec'](_0x4c3289);
                    return _0x2d946b ? _0x2d946b[0] : _0x3032dd;
                };
            } else {
                if ('oJAoi' !== 'bhCkS') {
                    _0x4c11a9 = _0x14049a;
                    _0x14049a = null;
                } else {
                    return this['long']['replace']('--', '')['replace']('no-', '');
                }
            }
        }
    }
    if (![] == _0x2be6b8['bool'] || _0x2be6b8['optional'] || _0x2be6b8['required']) {
        if (![] == _0x2be6b8['bool'])
            _0x4c11a9 = !![];
        if (undefined !== _0x4c11a9)
            _0x20a18a[_0x1fe05c] = _0x4c11a9;
    }
    this['options']['push'](_0x2be6b8);
    this['on'](_0x4f2822, function (_0x4e0137) {
        if (null !== _0x4e0137 && _0x14049a)
            _0x4e0137 = _0x14049a(_0x4e0137, undefined === _0x20a18a[_0x1fe05c] ? _0x4c11a9 : _0x20a18a[_0x1fe05c]);
        if ('boolean' == typeof _0x20a18a[_0x1fe05c] || 'undefined' == typeof _0x20a18a[_0x1fe05c]) {
            if ('gVYLA' === 'SHXae') {
                return Math['max'](max, _0x2be6b8['flags']['length']);
            } else {
                if (null == _0x4e0137) {
                    _0x20a18a[_0x1fe05c] = _0x2be6b8['bool'] ? _0x4c11a9 || !![] : ![];
                } else {
                    _0x20a18a[_0x1fe05c] = _0x4e0137;
                }
            }
        } else if (null !== _0x4e0137) {
            if ('mBmEk' === 'usBTr') {
                return this['options'][i];
            } else {
                _0x20a18a[_0x1fe05c] = _0x4e0137;
            }
        }
    });
    return this;
};
Command['prototype']['allowUnknownOption'] = function (_0x52b9d1) {
    this['_allowUnknownOption'] = arguments['length'] === 0 || _0x52b9d1;
    return this;
};
Command['prototype']['parse'] = function (_0x385000) {
    if (this['executables'])
        this['addImplicitHelpCommand']();
    this['rawArgs'] = _0x385000;
    this['_name'] = this['_name'] || basename(_0x385000[1], '.js');
    if (this['executables'] && _0x385000['length'] < 3 && !this['defaultExecutable']) {
        _0x385000['push']('--help');
    }
    var _0x3b45fe = this['parseOptions'](this['normalize'](_0x385000['slice'](2)));
    var _0x2f4257 = this['args'] = _0x3b45fe['args'];
    var _0x4ca65b = this['parseArgs'](this['args'], _0x3b45fe['unknown']);
    var _0x1cb0da = _0x4ca65b['args'][0];
    if (this['_execs'][_0x1cb0da] && typeof this['_execs'][_0x1cb0da] != 'function') {
        return this['executeSubCommand'](_0x385000, _0x2f4257, _0x3b45fe['unknown']);
    } else if (this['defaultExecutable']) {
        if ('ByAev' !== 'COCPu') {
            _0x2f4257['unshift'](_0x1cb0da = this['defaultExecutable']);
            return this['executeSubCommand'](_0x385000, _0x2f4257, _0x3b45fe['unknown']);
        } else {
            _0x2f4257['push'](self);
        }
    }
    return _0x4ca65b;
};
Command['prototype']['executeSubCommand'] = function (_0xfcc0b2, _0xaa4398, _0x124560) {
    _0xaa4398 = _0xaa4398['concat'](_0x124560);
    if (!_0xaa4398['length'])
        this['help']();
    if ('help' == _0xaa4398[0] && 1 == _0xaa4398['length'])
        this['help']();
    if ('help' == _0xaa4398[0]) {
        _0xaa4398[0] = _0xaa4398[1];
        _0xaa4398[1] = '--help';
    }
    var _0x1d60ac = _0xfcc0b2[1];
    var _0x31b9b5 = basename(_0x1d60ac, '.js') + '-' + _0xaa4398[0];
    var _0x376d7f, _0x5f12f7 = readlink(_0x1d60ac);
    if (_0x5f12f7 !== _0x1d60ac && _0x5f12f7['charAt'](0) !== '/') {
        _0x5f12f7 = path['join'](dirname(_0x1d60ac), _0x5f12f7);
    }
    _0x376d7f = dirname(_0x5f12f7);
    var _0x172fae = path['join'](_0x376d7f, _0x31b9b5);
    var _0x49919a = ![];
    if (exists(_0x172fae + '.js')) {
        if ('bGpBM' === 'lfJKV') {
            this['outputHelp'](cb);
            process['exit']();
        } else {
            _0x31b9b5 = _0x172fae + '.js';
            _0x49919a = !![];
        }
    } else if (exists(_0x172fae)) {
        if ('RulfS' !== 'RulfS') {
            console['error']();
            console['error']('  error: variadic arguments must be last `%s\'', name);
            console['error']();
            process['exit'](1);
        } else {
            _0x31b9b5 = _0x172fae;
        }
    }
    _0xaa4398 = _0xaa4398['slice'](1);
    var _0x47775c;
    if (process['platform'] !== 'win32') {
        if (_0x49919a) {
            _0xaa4398['unshift'](_0x172fae);
            _0xaa4398 = (process['execArgv'] || [])['concat'](_0xaa4398);
            _0x47775c = spawn('node', _0xaa4398, {
                'stdio': 'inherit',
                'customFds': [
                    0,
                    1,
                    2
                ]
            });
        } else {
            if ('HaWao' !== 'HaWao') {
                unknownOptions['push'](_0xfcc0b2[++i]);
            } else {
                _0x47775c = spawn(_0x31b9b5, _0xaa4398, {
                    'stdio': 'inherit',
                    'customFds': [
                        0,
                        1,
                        2
                    ]
                });
            }
        }
    } else {
        if ('uQSHt' !== 'ZLwIU') {
            _0xaa4398['unshift'](_0x172fae);
            _0x47775c = spawn(process['execPath'], _0xaa4398, { 'stdio': 'inherit' });
        } else {
            return this['_name'];
        }
    }
    _0x47775c['on']('close', process['exit']['bind'](process));
    _0x47775c['on']('error', function (_0x3d673c) {
        if (_0x3d673c['code'] == 'ENOENT') {
            if ('bIxju' !== 'HqPSX') {
                console['error']('\n  %s(1) does not exist, try --help\n', _0x31b9b5);
            } else {
                ret['push']('-' + c);
            }
        } else if (_0x3d673c['code'] == 'EACCES') {
            console['error']('\n  %s(1) not executable. try chmod or run with root\n', _0x31b9b5);
        }
        process['exit'](1);
    });
    this['runningCommand'] = _0x47775c;
};
Command['prototype']['normalize'] = function (_0x17acb2) {
    var _0x5cc1ce = [], _0x216a06, _0x4dc044, _0x34c161;
    for (var _0x52838e = 0, _0x34c162 = _0x17acb2['length']; _0x52838e < _0x34c162; ++_0x52838e) {
        _0x216a06 = _0x17acb2[_0x52838e];
        if (_0x52838e > 0) {
            if ('KLWhJ' === 'tZJYA') {
                this['unknownOption'](unknown[0]);
            } else {
                _0x4dc044 = this['optionFor'](_0x17acb2[_0x52838e - 1]);
            }
        }
        if (_0x216a06 === '--') {
            if ('CTima' === 'NTQmf') {
                _0x4dc044 = this['optionFor'](_0x17acb2[_0x52838e - 1]);
            } else {
                _0x5cc1ce = _0x5cc1ce['concat'](_0x17acb2['slice'](_0x52838e));
                break;
            }
        } else if (_0x4dc044 && _0x4dc044['required']) {
            if ('xVEUq' === 'kNyxL') {
                this['emit'](option['name']());
            } else {
                _0x5cc1ce['push'](_0x216a06);
            }
        } else if (_0x216a06['length'] > 1 && '-' == _0x216a06[0] && '-' != _0x216a06[1]) {
            _0x216a06['slice'](1)['split']('')['forEach'](function (_0x50642c) {
                _0x5cc1ce['push']('-' + _0x50642c);
            });
        } else if (/^--/['test'](_0x216a06) && ~(_0x34c161 = _0x216a06['indexOf']('='))) {
            _0x5cc1ce['push'](_0x216a06['slice'](0, _0x34c161), _0x216a06['slice'](_0x34c161 + 1));
        } else {
            if ('HDrNM' !== 'HDrNM') {
                var _0x57c9bc = '0|1|3|2|4'['split']('|'), _0x4bc9d4 = 0;
                while (!![]) {
                    switch (_0x57c9bc[_0x4bc9d4++]) {
                    case '0':
                        if (this['_allowUnknownOption'])
                            return;
                        continue;
                    case '1':
                        console['error']();
                        continue;
                    case '2':
                        console['error']();
                        continue;
                    case '3':
                        console['error']('  error: unknown option `%s\'', flag);
                        continue;
                    case '4':
                        process['exit'](1);
                        continue;
                    }
                    break;
                }
            } else {
                _0x5cc1ce['push'](_0x216a06);
            }
        }
    }
    return _0x5cc1ce;
};
Command['prototype']['parseArgs'] = function (_0x3b4c77, _0x348ddc) {
    var _0x10acb2;
    if (_0x3b4c77['length']) {
        _0x10acb2 = _0x3b4c77[0];
        if (this['listeners'](_0x10acb2)['length']) {
            this['emit'](_0x3b4c77['shift'](), _0x3b4c77, _0x348ddc);
        } else {
            if ('XDCbm' === 'XDCbm') {
                this['emit']('*', _0x3b4c77);
            } else {
                var _0x5e272d = camelcase(this['options'][i]['name']());
                result[_0x5e272d] = _0x5e272d === 'version' ? this['_version'] : this[_0x5e272d];
            }
        }
    } else {
        if ('xNdgR' !== 'iKcwQ') {
            outputHelpIfNecessary(this, _0x348ddc);
            if (_0x348ddc['length'] > 0) {
                if ('ZjXZi' === 'mNUdf') {
                    if (null == val) {
                        self[_0x10acb2] = option['bool'] ? defaultValue || !![] : ![];
                    } else {
                        self[_0x10acb2] = val;
                    }
                } else {
                    this['unknownOption'](_0x348ddc[0]);
                }
            }
        } else {
            return humanReadableArgName(arg);
        }
    }
    return this;
};
Command['prototype']['optionFor'] = function (_0x3ef35f) {
    for (var _0x53f124 = 0, _0x214da5 = this['options']['length']; _0x53f124 < _0x214da5; ++_0x53f124) {
        if (this['options'][_0x53f124]['is'](_0x3ef35f)) {
            return this['options'][_0x53f124];
        }
    }
};
Command['prototype']['parseOptions'] = function (_0x25a119) {
    var _0x495e8c = [], _0x1bb0b2 = _0x25a119['length'], _0x1679a4, _0x13acdb, _0x5fa264;
    var _0x544553 = [];
    for (var _0x40ec43 = 0; _0x40ec43 < _0x1bb0b2; ++_0x40ec43) {
        _0x5fa264 = _0x25a119[_0x40ec43];
        if ('--' == _0x5fa264) {
            if ('NgevR' === 'NgevR') {
                _0x1679a4 = !![];
                continue;
            } else {
                console['error']();
                if (flag) {
                    console['error']('  error: option `%s\' argument missing, got `%s\'', _0x13acdb['flags'], flag);
                } else {
                    console['error']('  error: option `%s\' argument missing', _0x13acdb['flags']);
                }
                console['error']();
                process['exit'](1);
            }
        }
        if (_0x1679a4) {
            _0x495e8c['push'](_0x5fa264);
            continue;
        }
        _0x13acdb = this['optionFor'](_0x5fa264);
        if (_0x13acdb) {
            if (_0x13acdb['required']) {
                if ('zhNMZ' === 'zhNMZ') {
                    _0x5fa264 = _0x25a119[++_0x40ec43];
                    if (null == _0x5fa264)
                        return this['optionMissingArgument'](_0x13acdb);
                    this['emit'](_0x13acdb['name'](), _0x5fa264);
                } else {
                    return humanReadableArgName(_0x5fa264);
                }
            } else if (_0x13acdb['optional']) {
                _0x5fa264 = _0x25a119[_0x40ec43 + 1];
                if (null == _0x5fa264 || '-' == _0x5fa264[0] && '-' != _0x5fa264) {
                    _0x5fa264 = null;
                } else {
                    if ('bQmeE' !== 'bQmeE') {
                        _0x495e8c[0] = _0x495e8c[1];
                        _0x495e8c[1] = '--help';
                    } else {
                        ++_0x40ec43;
                    }
                }
                this['emit'](_0x13acdb['name'](), _0x5fa264);
            } else {
                if ('uHZhE' === 'SLACy') {
                    return Math['max'](max, command[0]['length']);
                } else {
                    this['emit'](_0x13acdb['name']());
                }
            }
            continue;
        }
        if (_0x5fa264['length'] > 1 && '-' == _0x5fa264[0]) {
            _0x544553['push'](_0x5fa264);
            if (_0x25a119[_0x40ec43 + 1] && '-' != _0x25a119[_0x40ec43 + 1][0]) {
                if ('lBFWM' !== 'lBFWM') {
                    try {
                        if (fs['statSync'](file)['isFile']()) {
                            return !![];
                        }
                    } catch (_0x4ebca9) {
                        return ![];
                    }
                } else {
                    _0x544553['push'](_0x25a119[++_0x40ec43]);
                }
            }
            continue;
        }
        _0x495e8c['push'](_0x5fa264);
    }
    return {
        'args': _0x495e8c,
        'unknown': _0x544553
    };
};
Command['prototype']['opts'] = function () {
    var _0x4ee0c5 = {}, _0x35d0b8 = this['options']['length'];
    for (var _0x3c5f1f = 0; _0x3c5f1f < _0x35d0b8; _0x3c5f1f++) {
        var _0xabcf3a = camelcase(this['options'][_0x3c5f1f]['name']());
        _0x4ee0c5[_0xabcf3a] = _0xabcf3a === 'version' ? this['_version'] : this[_0xabcf3a];
    }
    return _0x4ee0c5;
};
Command['prototype']['missingArgument'] = function (_0x2be164) {
    console['error']();
    console['error']('  error: missing required argument `%s\'', _0x2be164);
    console['error']();
    process['exit'](1);
};
Command['prototype']['optionMissingArgument'] = function (_0x12a45d, _0x397ad4) {
    console['error']();
    if (_0x397ad4) {
        console['error']('  error: option `%s\' argument missing, got `%s\'', _0x12a45d['flags'], _0x397ad4);
    } else {
        console['error']('  error: option `%s\' argument missing', _0x12a45d['flags']);
    }
    console['error']();
    process['exit'](1);
};
Command['prototype']['unknownOption'] = function (_0x206a1c) {
    var _0x21dea2 = '3|0|4|2|1'['split']('|'), _0x28f215 = 0;
    while (!![]) {
        switch (_0x21dea2[_0x28f215++]) {
        case '0':
            console['error']();
            continue;
        case '1':
            process['exit'](1);
            continue;
        case '2':
            console['error']();
            continue;
        case '3':
            if (this['_allowUnknownOption'])
                return;
            continue;
        case '4':
            console['error']('  error: unknown option `%s\'', _0x206a1c);
            continue;
        }
        break;
    }
};
Command['prototype']['variadicArgNotLast'] = function (_0x1a7be6) {
    console['error']();
    console['error']('  error: variadic arguments must be last `%s\'', _0x1a7be6);
    console['error']();
    process['exit'](1);
};
Command['prototype']['version'] = function (_0x2497f7, _0x156dd7) {
    var _0x562fa6 = '4|2|1|0|5|3'['split']('|'), _0x4e74eb = 0;
    while (!![]) {
        switch (_0x562fa6[_0x4e74eb++]) {
        case '0':
            this['option'](_0x156dd7, 'output the version number');
            continue;
        case '1':
            _0x156dd7 = _0x156dd7 || '-V, --version';
            continue;
        case '2':
            this['_version'] = _0x2497f7;
            continue;
        case '3':
            return this;
        case '4':
            if (0 == arguments['length'])
                return this['_version'];
            continue;
        case '5':
            this['on']('version', function () {
                process['stdout']['write'](_0x2497f7 + '\n');
                process['exit'](0);
            });
            continue;
        }
        break;
    }
};
Command['prototype']['description'] = function (_0x5b419f) {
    if (0 === arguments['length'])
        return this['_description'];
    this['_description'] = _0x5b419f;
    return this;
};
Command['prototype']['alias'] = function (_0x5ef1bc) {
    if (0 == arguments['length'])
        return this['_alias'];
    this['_alias'] = _0x5ef1bc;
    return this;
};
Command['prototype']['usage'] = function (_0x1e2d0c) {
    var _0x52bc56 = this['_args']['map'](function (_0x4f3442) {
        return humanReadableArgName(_0x4f3442);
    });
    var _0x4cbd1a = '[options]' + (this['commands']['length'] ? ' [command]' : '') + (this['_args']['length'] ? ' ' + _0x52bc56['join'](' ') : '');
    if (0 == arguments['length'])
        return this['_usage'] || _0x4cbd1a;
    this['_usage'] = _0x1e2d0c;
    return this;
};
Command['prototype']['name'] = function () {
    return this['_name'];
};
Command['prototype']['largestOptionLength'] = function () {
    return this['options']['reduce'](function (_0xfe6d97, _0x59072a) {
        if ('pOGYF' !== 'pOGYF') {
            defaultValue = fn;
            fn = null;
        } else {
            return Math['max'](_0xfe6d97, _0x59072a['flags']['length']);
        }
    }, 0);
};
Command['prototype']['optionHelp'] = function () {
    var _0x6a45bc = this['largestOptionLength']();
    return [pad('-h, --help', _0x6a45bc) + '  ' + 'output usage information']['concat'](this['options']['map'](function (_0x4e1f69) {
        return pad(_0x4e1f69['flags'], _0x6a45bc) + '  ' + _0x4e1f69['description'];
    }))['join']('\n');
};
Command['prototype']['commandHelp'] = function () {
    if (!this['commands']['length'])
        return '';
    var _0x2f3dd7 = this['commands']['filter'](function (_0x51cd25) {
        if ('DAssI' === 'TAiLr') {
            console['error']('  error: option `%s\' argument missing, got `%s\'', option['flags'], flag);
        } else {
            return !_0x51cd25['_noHelp'];
        }
    })['map'](function (_0x328e42) {
        var _0x4f5a47 = _0x328e42['_args']['map'](function (_0x2a0339) {
            return humanReadableArgName(_0x2a0339);
        })['join'](' ');
        return [
            _0x328e42['_name'] + (_0x328e42['_alias'] ? _0x3dfee8['shPFu']('|', _0x328e42['_alias']) : '') + (_0x328e42['options']['length'] ? ' [options]' : '') + ' ' + _0x4f5a47,
            _0x328e42['description']()
        ];
    });
    var _0x292a40 = _0x2f3dd7['reduce'](function (_0x7aebb, _0x58be7f) {
        return Math['max'](_0x7aebb, _0x58be7f[0]['length']);
    }, 0);
    return [
        '',
        '  Commands:',
        '',
        _0x2f3dd7['map'](function (_0x341629) {
            if ('sMTsR' !== 'sMTsR') {
                return ![];
            } else {
                var _0x3f2e87 = _0x341629[1] ? '  ' + _0x341629[1] : '';
                return pad(_0x341629[0], _0x292a40) + _0x3f2e87;
            }
        })['join']('\n')['replace'](/^/gm, '    '),
        ''
    ]['join']('\n');
};
Command['prototype']['helpInformation'] = function () {
    var _0x20fd39 = [];
    if (this['_description']) {
        _0x20fd39 = [
            '  ' + this['_description'],
            ''
        ];
    }
    var _0x2336c6 = this['_name'];
    if (this['_alias']) {
        if ('uoSZn' !== 'uoSZn') {
            this['emit']('*', args);
        } else {
            _0x2336c6 = _0x2336c6 + '|' + this['_alias'];
        }
    }
    var _0x474b13 = [
        '',
        '  Usage: ' + _0x2336c6 + ' ' + this['usage'](),
        ''
    ];
    var _0x112e74 = [];
    var _0x28f14b = this['commandHelp']();
    if (_0x28f14b)
        _0x112e74 = [_0x28f14b];
    var _0x37e5c1 = [
        '  Options:',
        '',
        '' + this['optionHelp']()['replace'](/^/gm, '    '),
        '',
        ''
    ];
    return _0x474b13['concat'](_0x112e74)['concat'](_0x20fd39)['concat'](_0x37e5c1)['join']('\n');
};
Command['prototype']['outputHelp'] = function (_0x1883e6) {
    if (!_0x1883e6) {
        _0x1883e6 = function (_0x233ed5) {
            return _0x233ed5;
        };
    }
    process['stdout']['write'](_0x1883e6(this['helpInformation']()));
    this['emit']('--help');
};
Command['prototype']['help'] = function (_0x5f41c9) {
    this['outputHelp'](_0x5f41c9);
    process['exit']();
};
function camelcase(_0x486a33) {
    return _0x486a33['split']('-')['reduce'](function (_0x2db391, _0x8da33f) {
        if ('OQXSw' === 'BtwLK') {
            options = options || [];
            for (var _0x32d2b8 = 0; _0x32d2b8 < options['length']; _0x32d2b8++) {
                if (options[_0x32d2b8] == '--help' || options[_0x32d2b8] == '-h') {
                    cmd['outputHelp']();
                    process['exit'](0);
                }
            }
        } else {
            return _0x2db391 + _0x8da33f[0]['toUpperCase']() + _0x8da33f['slice'](1);
        }
    });
}
function pad(_0x38c1bf, _0x545c5b) {
    var _0x57da0c = Math['max'](0, _0x545c5b - _0x38c1bf['length']);
    return _0x38c1bf + Array(_0x57da0c + 1)['join'](' ');
}
function outputHelpIfNecessary(_0x21ab03, _0x2f1f73) {
    _0x2f1f73 = _0x2f1f73 || [];
    for (var _0x3df47e = 0; _0x3df47e < _0x2f1f73['length']; _0x3df47e++) {
        if ('mVHNP' === 'mVHNP') {
            if (_0x2f1f73[_0x3df47e] == '--help' || _0x2f1f73[_0x3df47e] == '-h') {
                if ('OkUjd' === 'OkUjd') {
                    _0x21ab03['outputHelp']();
                    process['exit'](0);
                } else {
                    arg = null;
                }
            }
        } else {
            proc = spawn(bin, args, {
                'stdio': 'inherit',
                'customFds': [
                    0,
                    1,
                    2
                ]
            });
        }
    }
}
function humanReadableArgName(_0x1277a6) {
    var _0x5c0a3c = _0x1277a6['name'] + (_0x1277a6['variadic'] === !![] ? '...' : '');
    return _0x1277a6['required'] ? '<' + _0x5c0a3c + '>' : _0x15e77e['tTaSW']('[', _0x5c0a3c) + ']';
}
function exists(_0x5b82b7) {
    try {
        if ('AZINB' === 'ZcyeM') {
            return this['options']['reduce'](function (_0x4d6bf5, _0x1039d8) {
                return Math['max'](_0x4d6bf5, _0x1039d8['flags']['length']);
            }, 0);
        } else {
            if (fs['statSync'](_0x5b82b7)['isFile']()) {
                return !![];
            }
        }
    } catch (_0x2e7b8f) {
        return ![];
    }
}