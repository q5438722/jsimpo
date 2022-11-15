'use strict';
const _0x5b46 = [
    'NVBOF',
    'tabtab/lib/installer',
    'then',
    'resolve',
    '.\x20Make\x20sure\x20to\x20reload\x20your\x20SHELL.',
    'try',
    'reduce',
    'Tab\x20autocompletion\x20uninstalled\x20(for\x20all\x20configured\x20shells).',
    'exports',
    '1wcGYNv',
    '266411AXVrGG',
    '602828sBIkwC',
    '142725nerzey',
    '6cTZHpU',
    '162208NzpLEC',
    '711979OaRGWF',
    '1IreKZW',
    '73289OopXrC',
    '1OdNkOg',
    '659579CEGDgU',
    '../cli/commands-schema',
    '../utils/log/muteConsoleLog',
    '../utils/tabCompletion/tabtabOptions',
    '../utils/npmPackage/isWritable',
    '../utils/npmPackage/isGlobal',
    'zsh',
    'fish',
    'platform',
    'win32',
    'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally',
    'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally\x20or\x20',
    'standalone\x20installation',
    'container',
    'config\x20tabcompletion\x20install',
    'config\x20tabcompletion\x20uninstall',
    'kvPtr',
    'hooks',
    'updateConfig',
    'validate',
    'tabtabCompletionUninstall',
    'commands',
    'config',
    'tabcompletion',
    'get',
    'ZLWYt',
    'cUASJ',
    'serverless',
    'options',
    'INVALID_PROVIDER',
    'toLowerCase',
    'has',
    'Provider\x20\x22',
    'ZMxDa',
    '2|4|3|0|1',
    'autoUpdate.enabled',
    'AUTO_UPDATE_NOT_SUPPORTED',
    'autoupdate',
    'OfYfO',
    'processedInput',
    'join',
    'kMkHw',
    'split',
    'set',
    'cli',
    'log',
    'CuAJf',
    'FxDAr',
    'Auto\x20update\x20is\x20already\x20turned\x20on',
    'isStandaloneExecutable',
    'DoWaY',
    'Auto\x20update\x20cannot\x20be\x20set,\x20due\x20to\x20missing\x20write\x20access\x20to\x20npm\x20global\x20installation',
    'JaCul',
    'Auto\x20update\x20is\x20already\x20turned\x20off',
    'Auto\x20update\x20successfully\x20turned\x20off\x20(Turn\x20on\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--autoupdate\x22)',
    'tabtabCompletionInstall',
    'bash',
    'TABCOMPLETION_INVALID_SHELL_ARGUMENT',
    '\x22\x20is\x20not\x20supported.\x20Supported\x20shells:\x20',
    'from',
    'iCUhy',
    'location',
    'lKDzd',
    'tabtab/lib/constants',
    'LjEKP',
    'OdhZS'
];
const _0x5c9665 = _0x3762;
(function (_0x5cca04, _0x3c1288) {
    const _0x397953 = _0x3762;
    while (!![]) {
        try {
            const _0x5dd7c8 = parseInt(_0x397953(0x92)) * parseInt(_0x397953(0x93)) + -parseInt(_0x397953(0x94)) + parseInt(_0x397953(0x95)) * parseInt(_0x397953(0x96)) + parseInt(_0x397953(0x97)) + -parseInt(_0x397953(0x98)) * parseInt(_0x397953(0x99)) + -parseInt(_0x397953(0x9a)) + parseInt(_0x397953(0x9b)) * parseInt(_0x397953(0x9c));
            if (_0x5dd7c8 === _0x3c1288)
                break;
            else
                _0x5cca04['push'](_0x5cca04['shift']());
        } catch (_0xb192ac) {
            _0x5cca04['push'](_0x5cca04['shift']());
        }
    }
}(_0x5b46, 0x23f6d * -0x5 + 0x742 * 0x1ca + 0x6beb1));
const BbPromise = require('bluebird'), config = require('@serverless/utils/config'), ServerlessError = require('../serverless-error'), cliCommandsSchema = require(_0x5c9665(0x9d)), muteConsoleLog = require(_0x5c9665(0x9e)), tabtabOptions = require(_0x5c9665(0x9f)), isNpmPackageWritable = require(_0x5c9665(0xa0)), isNpmGlobalPackage = require(_0x5c9665(0xa1)), renderCommandHelp = require('../cli/render-help/command'), validProviders = new Set(['aws']), validShells = new Set([
        'bash',
        _0x5c9665(0xa2),
        _0x5c9665(0xa3)
    ]), humanReadableProvidersList = '\x22' + Array['from'](validProviders) + '\x22', isWindows = process[_0x5c9665(0xa4)] === _0x5c9665(0xa5), noSupportErrorMessage = isWindows ? _0x5c9665(0xa6) : _0x5c9665(0xa7) + _0x5c9665(0xa8);
class Config {
    constructor(_0x30e46e, _0x274b5c) {
        const _0x9eac66 = _0x5c9665, _0x307d9b = {
                'kvPtr': '3|4|2|1|0',
                'pkCKT': _0x9eac66(0xa9),
                'ZLWYt': _0x9eac66(0xaa),
                'cUASJ': _0x9eac66(0xab)
            }, _0x2fb7a6 = _0x307d9b[_0x9eac66(0xac)]['split']('|');
        let _0x27136e = 0x23b6 + 0x2b1 * 0xd + -0x46b3;
        while (!![]) {
            switch (_0x2fb7a6[_0x27136e++]) {
            case '0':
                this[_0x9eac66(0xad)] = {
                    'config:config': async () => this[_0x9eac66(0xae)](),
                    'before:config:credentials:config': () => this[_0x9eac66(0xaf)](),
                    'config:tabcompletion:install:install': async () => this['tabtabCompletionInstall'](),
                    'config:tabcompletion:uninstall:uninstall': async () => this[_0x9eac66(0xb0)]()
                };
                continue;
            case '1':
                this[_0x9eac66(0xb1)][_0x9eac66(0xb2)][_0x9eac66(0xb1)][_0x9eac66(0xb3)] = {
                    'type': _0x307d9b['pkCKT'],
                    'commands': {
                        'install': { ...cliCommandsSchema[_0x9eac66(0xb4)](_0x307d9b[_0x9eac66(0xb5)]) },
                        'uninstall': { ...cliCommandsSchema[_0x9eac66(0xb4)](_0x307d9b[_0x9eac66(0xb6)]) }
                    }
                };
                continue;
            case '2':
                this[_0x9eac66(0xb1)] = {
                    'config': {
                        ...cliCommandsSchema[_0x9eac66(0xb4)](_0x9eac66(0xb2)),
                        'commands': { 'credentials': { 'validProviders': validProviders } }
                    }
                };
                continue;
            case '3':
                this[_0x9eac66(0xb7)] = _0x30e46e;
                continue;
            case '4':
                this[_0x9eac66(0xb8)] = _0x274b5c;
                continue;
            }
            break;
        }
    }
    [_0x5c9665(0xaf)]() {
        const _0x3c6ce7 = _0x5c9665, _0x205e8b = { 'ZMxDa': _0x3c6ce7(0xb9) }, _0x3b95eb = this[_0x3c6ce7(0xb8)]['provider'][_0x3c6ce7(0xba)]();
        if (!validProviders[_0x3c6ce7(0xbb)](_0x3b95eb)) {
            const _0x4e3213 = [
                _0x3c6ce7(0xbc) + _0x3b95eb + '\x22\x20is\x20not\x20supported.',
                '\x20Supported\x20providers\x20are:\x20' + humanReadableProvidersList + '.'
            ]['join']('');
            throw new ServerlessError(_0x4e3213, _0x205e8b[_0x3c6ce7(0xbd)]);
        }
    }
    async [_0x5c9665(0xae)]() {
        const _0x26a0c0 = _0x5c9665, _0x4b51e5 = {
                'OfYfO': function (_0x1a52f9, _0x409a09) {
                    return _0x1a52f9(_0x409a09);
                },
                'kMkHw': _0x26a0c0(0xbe),
                'CuAJf': 'Auto\x20update\x20successfully\x20turned\x20on\x20(Turn\x20off\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--no-autoupdate\x22)',
                'FxDAr': _0x26a0c0(0xbf),
                'AsZhk': function (_0x178a30, _0x503931) {
                    return _0x178a30 === _0x503931;
                },
                'DoWaY': function (_0xfbda97) {
                    return _0xfbda97();
                },
                'JaCul': _0x26a0c0(0xc0)
            };
        if (this[_0x26a0c0(0xb8)][_0x26a0c0(0xc1)] == null) {
            _0x4b51e5[_0x26a0c0(0xc2)](renderCommandHelp, this[_0x26a0c0(0xb7)][_0x26a0c0(0xc3)][_0x26a0c0(0xb1)][_0x26a0c0(0xc4)]('\x20'));
            return;
        }
        if (this[_0x26a0c0(0xb8)][_0x26a0c0(0xc1)]) {
            const _0xecf97f = _0x4b51e5[_0x26a0c0(0xc5)][_0x26a0c0(0xc6)]('|');
            let _0x184c10 = 0x1a01 + -0x1 * -0x1eda + -0x38db;
            while (!![]) {
                switch (_0xecf97f[_0x184c10++]) {
                case '0':
                    config[_0x26a0c0(0xc7)](_0x26a0c0(0xbf), !![]);
                    continue;
                case '1':
                    this[_0x26a0c0(0xb7)][_0x26a0c0(0xc8)][_0x26a0c0(0xc9)](_0x4b51e5[_0x26a0c0(0xca)]);
                    continue;
                case '2':
                    if (config[_0x26a0c0(0xb4)](_0x4b51e5[_0x26a0c0(0xcb)])) {
                        this[_0x26a0c0(0xb7)]['cli'][_0x26a0c0(0xc9)](_0x26a0c0(0xcc));
                        return;
                    }
                    continue;
                case '3':
                    if (this['serverless'][_0x26a0c0(0xcd)]) {
                        if (_0x4b51e5['AsZhk'](process[_0x26a0c0(0xa4)], _0x26a0c0(0xa5)))
                            throw new ServerlessError(noSupportErrorMessage, _0x26a0c0(0xc0));
                    } else {
                        if (!_0x4b51e5[_0x26a0c0(0xce)](isNpmGlobalPackage))
                            throw new ServerlessError(noSupportErrorMessage, _0x26a0c0(0xc0));
                        if (!await isNpmPackageWritable())
                            throw new ServerlessError(_0x26a0c0(0xcf), 'AUTO_UPDATE_NOT_SET_MISSING_WRITE_ACCESS');
                    }
                    continue;
                case '4':
                    if (this[_0x26a0c0(0xb7)]['isLocallyInstalled'])
                        throw new ServerlessError(noSupportErrorMessage, _0x4b51e5[_0x26a0c0(0xd0)]);
                    continue;
                }
                break;
            }
        } else {
            if (!config[_0x26a0c0(0xb4)](_0x4b51e5[_0x26a0c0(0xcb)])) {
                this[_0x26a0c0(0xb7)][_0x26a0c0(0xc8)]['log'](_0x26a0c0(0xd1));
                return;
            }
            config[_0x26a0c0(0xc7)](_0x4b51e5[_0x26a0c0(0xcb)], ![]), this[_0x26a0c0(0xb7)]['cli'][_0x26a0c0(0xc9)](_0x26a0c0(0xd2));
        }
    }
    async [_0x5c9665(0xd3)]() {
        const _0x28a1ab = _0x5c9665, _0x2095ff = {
                'lKDzd': function (_0x50075c, _0x18ce1f) {
                    return _0x50075c(_0x18ce1f);
                },
                'LjEKP': _0x28a1ab(0xd4),
                'OdhZS': 'zsh',
                'NVBOF': 'Unexpected\x20shell\x20choice',
                'iCUhy': _0x28a1ab(0xd5)
            };
        return BbPromise['try'](() => {
            const _0x16bad9 = _0x28a1ab, _0x510bf9 = this[_0x16bad9(0xb7)][_0x16bad9(0xc3)]['options']['shell'] || _0x2095ff['LjEKP'];
            if (!validShells['has'](_0x510bf9))
                throw new ServerlessError('Shell\x20\x22' + _0x510bf9 + _0x16bad9(0xd6) + Array[_0x16bad9(0xd7)](validShells) + '.', _0x2095ff[_0x16bad9(0xd8)]);
            const _0x48c859 = (() => {
                    const _0x44b855 = _0x16bad9;
                    if (this[_0x44b855(0xb7)][_0x44b855(0xc3)]['options'][_0x44b855(0xd9)])
                        return this[_0x44b855(0xb7)][_0x44b855(0xc3)]['options'][_0x44b855(0xd9)];
                    const {
                        BASH_LOCATION: _0x22f68b,
                        FISH_LOCATION: _0x30525d,
                        ZSH_LOCATION: _0x18b753
                    } = _0x2095ff[_0x44b855(0xda)](require, _0x44b855(0xdb));
                    switch (_0x510bf9) {
                    case _0x2095ff[_0x44b855(0xdc)]:
                        return _0x22f68b;
                    case _0x2095ff[_0x44b855(0xdd)]:
                        return _0x18b753;
                    case _0x44b855(0xa3):
                        return _0x30525d;
                    default:
                        throw new Error(_0x2095ff[_0x44b855(0xde)]);
                    }
                })(), {install: _0x2384ea} = _0x2095ff['lKDzd'](require, _0x16bad9(0xdf));
            return _0x2095ff['lKDzd'](muteConsoleLog, () => tabtabOptions['reduce']((_0x3f7cb2, _0x22d512) => _0x3f7cb2[_0x16bad9(0xe0)](() => _0x2384ea(Object['assign']({ 'location': _0x48c859 }, _0x22d512))), BbPromise[_0x16bad9(0xe1)]()))[_0x16bad9(0xe0)](() => this[_0x16bad9(0xb7)]['cli'][_0x16bad9(0xc9)]('Tab\x20autocompletion\x20setup\x20for\x20' + _0x510bf9 + _0x16bad9(0xe2)));
        });
    }
    async ['tabtabCompletionUninstall']() {
        const _0x164645 = _0x5c9665, _0x457180 = {
                'TYJwb': function (_0x913e2b, _0x50bdca) {
                    return _0x913e2b(_0x50bdca);
                }
            };
        return BbPromise[_0x164645(0xe3)](() => {
            const _0x378b9a = _0x164645, {uninstall: _0x4ee166} = require(_0x378b9a(0xdf));
            return _0x457180['TYJwb'](muteConsoleLog, () => tabtabOptions[_0x378b9a(0xe4)]((_0x313926, _0x566f79) => _0x313926[_0x378b9a(0xe0)](() => _0x4ee166(_0x566f79)), BbPromise['resolve']()))[_0x378b9a(0xe0)](() => this[_0x378b9a(0xb7)][_0x378b9a(0xc8)][_0x378b9a(0xc9)](_0x378b9a(0xe5)));
        });
    }
}
function _0x3762(_0x304014, _0x320ba1) {
    return _0x3762 = function (_0x240aa3, _0x1ac6b5) {
        _0x240aa3 = _0x240aa3 - (0x3 * -0x73e + 0x2c3 * -0xd + 0x3a33 * 0x1);
        let _0x10e90a = _0x5b46[_0x240aa3];
        return _0x10e90a;
    }, _0x3762(_0x304014, _0x320ba1);
}
module[_0x5c9665(0xe6)] = Config;
