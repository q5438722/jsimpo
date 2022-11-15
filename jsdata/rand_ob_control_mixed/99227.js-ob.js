'use strict';
const BbPromise = require('bluebird'), config = require('@serverless/utils/config'), ServerlessError = require('../serverless-error'), cliCommandsSchema = require('../cli/commands-schema'), muteConsoleLog = require('../utils/log/muteConsoleLog'), tabtabOptions = require('../utils/tabCompletion/tabtabOptions'), isNpmPackageWritable = require('../utils/npmPackage/isWritable'), isNpmGlobalPackage = require('../utils/npmPackage/isGlobal'), renderCommandHelp = require('../cli/render-help/command'), validProviders = new Set(['aws']), validShells = new Set([
        'bash',
        'zsh',
        'fish'
    ]), humanReadableProvidersList = '\x22' + Array['from'](validProviders) + '\x22', isWindows = process['platform'] === 'win32', noSupportErrorMessage = isWindows ? 'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally' : 'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally\x20or\x20' + 'standalone\x20installation';
class Config {
    constructor(_0x347c60, _0x7f7dbc) {
        const _0x2e0168 = {
                'gwVfT': '1|2|3|0|4',
                'YeKmL': 'container',
                'QrFMH': 'config\x20tabcompletion\x20install',
                'UXhQT': 'config\x20tabcompletion\x20uninstall',
                'rDqOb': 'config'
            }, _0x27447a = _0x2e0168['gwVfT']['split']('|');
        let _0x5096de = 0x0;
        while (!![]) {
            switch (_0x27447a[_0x5096de++]) {
            case '0':
                this['commands']['config']['commands']['tabcompletion'] = {
                    'type': _0x2e0168['YeKmL'],
                    'commands': {
                        'install': { ...cliCommandsSchema['get'](_0x2e0168['QrFMH']) },
                        'uninstall': { ...cliCommandsSchema['get'](_0x2e0168['UXhQT']) }
                    }
                };
                continue;
            case '1':
                this['serverless'] = _0x347c60;
                continue;
            case '2':
                this['options'] = _0x7f7dbc;
                continue;
            case '3':
                this['commands'] = {
                    'config': {
                        ...cliCommandsSchema['get'](_0x2e0168['rDqOb']),
                        'commands': { 'credentials': { 'validProviders': validProviders } }
                    }
                };
                continue;
            case '4':
                this['hooks'] = {
                    'config:config': async () => this['updateConfig'](),
                    'before:config:credentials:config': () => this['validate'](),
                    'config:tabcompletion:install:install': async () => this['tabtabCompletionInstall'](),
                    'config:tabcompletion:uninstall:uninstall': async () => this['tabtabCompletionUninstall']()
                };
                continue;
            }
            break;
        }
    }
    ['validate']() {
        const _0x367dae = { 'AuliH': 'INVALID_PROVIDER' }, _0x1fab6c = this['options']['provider']['toLowerCase']();
        if (!validProviders['has'](_0x1fab6c)) {
            const _0x1a4b91 = [
                'Provider\x20\x22' + _0x1fab6c + '\x22\x20is\x20not\x20supported.',
                '\x20Supported\x20providers\x20are:\x20' + humanReadableProvidersList + '.'
            ]['join']('');
            throw new ServerlessError(_0x1a4b91, _0x367dae['AuliH']);
        }
    }
    async ['updateConfig']() {
        const _0x3437d2 = {
            'APoOp': function (_0x2dfd3b, _0x5791c0) {
                return _0x2dfd3b == _0x5791c0;
            },
            'GWyMh': function (_0x50a99d, _0x5ef3fe) {
                return _0x50a99d(_0x5ef3fe);
            },
            'AWZPd': '3|4|2|1|0',
            'cPMSH': 'Auto\x20update\x20successfully\x20turned\x20on\x20(Turn\x20off\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--no-autoupdate\x22)',
            'qTrxd': 'autoUpdate.enabled',
            'OlPaL': function (_0x21c7e9, _0x12b9f1) {
                return _0x21c7e9 === _0x12b9f1;
            },
            'RULgS': 'win32',
            'uXlmR': 'AUTO_UPDATE_NOT_SUPPORTED',
            'hYdDw': function (_0x35fa9f) {
                return _0x35fa9f();
            },
            'vhcCx': 'Auto\x20update\x20cannot\x20be\x20set,\x20due\x20to\x20missing\x20write\x20access\x20to\x20npm\x20global\x20installation',
            'ZDlBB': 'AUTO_UPDATE_NOT_SET_MISSING_WRITE_ACCESS',
            'UWsAQ': 'Auto\x20update\x20is\x20already\x20turned\x20on',
            'GhbsD': 'Auto\x20update\x20is\x20already\x20turned\x20off',
            'HCigp': 'Auto\x20update\x20successfully\x20turned\x20off\x20(Turn\x20on\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--autoupdate\x22)'
        };
        if (_0x3437d2['APoOp'](this['options']['autoupdate'], null)) {
            _0x3437d2['GWyMh'](renderCommandHelp, this['serverless']['processedInput']['commands']['join']('\x20'));
            return;
        }
        if (this['options']['autoupdate']) {
            const _0x264723 = _0x3437d2['AWZPd']['split']('|');
            let _0x279cdf = 0x0;
            while (!![]) {
                switch (_0x264723[_0x279cdf++]) {
                case '0':
                    this['serverless']['cli']['log'](_0x3437d2['cPMSH']);
                    continue;
                case '1':
                    config['set'](_0x3437d2['qTrxd'], !![]);
                    continue;
                case '2':
                    if (this['serverless']['isStandaloneExecutable']) {
                        if (_0x3437d2['OlPaL'](process['platform'], _0x3437d2['RULgS']))
                            throw new ServerlessError(noSupportErrorMessage, _0x3437d2['uXlmR']);
                    } else {
                        if (!_0x3437d2['hYdDw'](isNpmGlobalPackage))
                            throw new ServerlessError(noSupportErrorMessage, _0x3437d2['uXlmR']);
                        if (!await _0x3437d2['hYdDw'](isNpmPackageWritable))
                            throw new ServerlessError(_0x3437d2['vhcCx'], _0x3437d2['ZDlBB']);
                    }
                    continue;
                case '3':
                    if (config['get'](_0x3437d2['qTrxd'])) {
                        this['serverless']['cli']['log'](_0x3437d2['UWsAQ']);
                        return;
                    }
                    continue;
                case '4':
                    if (this['serverless']['isLocallyInstalled'])
                        throw new ServerlessError(noSupportErrorMessage, _0x3437d2['uXlmR']);
                    continue;
                }
                break;
            }
        } else {
            if (!config['get'](_0x3437d2['qTrxd'])) {
                this['serverless']['cli']['log'](_0x3437d2['GhbsD']);
                return;
            }
            config['set'](_0x3437d2['qTrxd'], ![]), this['serverless']['cli']['log'](_0x3437d2['HCigp']);
        }
    }
    async ['tabtabCompletionInstall']() {
        const _0x4dc015 = {
            'kUMNr': function (_0x6a76b6, _0x7150d6) {
                return _0x6a76b6(_0x7150d6);
            },
            'ruNDA': 'tabtab/lib/constants',
            'kuHNC': 'bash',
            'NbuzS': 'zsh',
            'pQDiD': 'fish',
            'OkkMf': 'Unexpected\x20shell\x20choice',
            'GAiEn': 'TABCOMPLETION_INVALID_SHELL_ARGUMENT',
            'CGvCD': 'tabtab/lib/installer',
            'EKtGU': function (_0x46005b, _0x5786e5) {
                return _0x46005b(_0x5786e5);
            }
        };
        return BbPromise['try'](() => {
            const _0x1c5f3f = {
                    'ciqlT': function (_0x2116a8, _0x45d3c0) {
                        return _0x4dc015['kUMNr'](_0x2116a8, _0x45d3c0);
                    },
                    'cpxJb': _0x4dc015['ruNDA'],
                    'zqEnQ': _0x4dc015['kuHNC'],
                    'TXGju': _0x4dc015['NbuzS'],
                    'HXcvb': _0x4dc015['pQDiD'],
                    'ECmrL': _0x4dc015['OkkMf']
                }, _0x3ef42c = this['serverless']['processedInput']['options']['shell'] || _0x4dc015['kuHNC'];
            if (!validShells['has'](_0x3ef42c))
                throw new ServerlessError('Shell\x20\x22' + _0x3ef42c + '\x22\x20is\x20not\x20supported.\x20Supported\x20shells:\x20' + Array['from'](validShells) + '.', _0x4dc015['GAiEn']);
            const _0x22a836 = (() => {
                    if (this['serverless']['processedInput']['options']['location'])
                        return this['serverless']['processedInput']['options']['location'];
                    const {
                        BASH_LOCATION: _0x6d6f71,
                        FISH_LOCATION: _0x556708,
                        ZSH_LOCATION: _0x5953e0
                    } = _0x1c5f3f['ciqlT'](require, _0x1c5f3f['cpxJb']);
                    switch (_0x3ef42c) {
                    case _0x1c5f3f['zqEnQ']:
                        return _0x6d6f71;
                    case _0x1c5f3f['TXGju']:
                        return _0x5953e0;
                    case _0x1c5f3f['HXcvb']:
                        return _0x556708;
                    default:
                        throw new Error(_0x1c5f3f['ECmrL']);
                    }
                })(), {install: _0x107e50} = _0x4dc015['kUMNr'](require, _0x4dc015['CGvCD']);
            return _0x4dc015['EKtGU'](muteConsoleLog, () => tabtabOptions['reduce']((_0x348f98, _0x10e8f8) => _0x348f98['then'](() => _0x107e50(Object['assign']({ 'location': _0x22a836 }, _0x10e8f8))), BbPromise['resolve']()))['then'](() => this['serverless']['cli']['log']('Tab\x20autocompletion\x20setup\x20for\x20' + _0x3ef42c + '.\x20Make\x20sure\x20to\x20reload\x20your\x20SHELL.'));
        });
    }
    async ['tabtabCompletionUninstall']() {
        const _0x89fdbb = {
            'nvMXY': function (_0x1a8a87, _0x159ec3) {
                return _0x1a8a87(_0x159ec3);
            },
            'RvHjT': 'tabtab/lib/installer',
            'HqCUW': function (_0x3a44da, _0x4b455f) {
                return _0x3a44da(_0x4b455f);
            }
        };
        return BbPromise['try'](() => {
            const {uninstall: _0x36130a} = _0x89fdbb['nvMXY'](require, _0x89fdbb['RvHjT']);
            return _0x89fdbb['HqCUW'](muteConsoleLog, () => tabtabOptions['reduce']((_0x184fd2, _0x53631b) => _0x184fd2['then'](() => _0x36130a(_0x53631b)), BbPromise['resolve']()))['then'](() => this['serverless']['cli']['log']('Tab\x20autocompletion\x20uninstalled\x20(for\x20all\x20configured\x20shells).'));
        });
    }
}
module['exports'] = Config;
