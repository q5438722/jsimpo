'use strict';
const BbPromise = require('bluebird'), config = require('@serverless/utils/config'), ServerlessError = require('../serverless-error'), cliCommandsSchema = require('../cli/commands-schema'), muteConsoleLog = require('../utils/log/muteConsoleLog'), tabtabOptions = require('../utils/tabCompletion/tabtabOptions'), isNpmPackageWritable = require('../utils/npmPackage/isWritable'), isNpmGlobalPackage = require('../utils/npmPackage/isGlobal'), renderCommandHelp = require('../cli/render-help/command'), validProviders = new Set(['aws']), validShells = new Set([
        'bash',
        'zsh',
        'fish'
    ]), humanReadableProvidersList = '\x22' + Array['from'](validProviders) + '\x22', isWindows = process['platform'] === 'win32', noSupportErrorMessage = isWindows ? 'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally' : 'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally\x20or\x20' + 'standalone\x20installation';
class Config {
    constructor(_0x1549aa, _0x1bdd90) {
        this['serverless'] = _0x1549aa, this['options'] = _0x1bdd90, this['commands'] = {
            'config': {
                ...cliCommandsSchema['get']('config'),
                'commands': { 'credentials': { 'validProviders': validProviders } }
            }
        }, this['commands']['config']['commands']['tabcompletion'] = {
            'type': 'container',
            'commands': {
                'install': { ...cliCommandsSchema['get']('config\x20tabcompletion\x20install') },
                'uninstall': { ...cliCommandsSchema['get']('config\x20tabcompletion\x20uninstall') }
            }
        }, this['hooks'] = {
            'config:config': async () => this['updateConfig'](),
            'before:config:credentials:config': () => this['validate'](),
            'config:tabcompletion:install:install': async () => this['tabtabCompletionInstall'](),
            'config:tabcompletion:uninstall:uninstall': async () => this['tabtabCompletionUninstall']()
        };
    }
    ['validate']() {
        const _0x511660 = this['options']['provider']['toLowerCase']();
        if (!validProviders['has'](_0x511660)) {
            const _0x2726bf = [
                'Provider\x20\x22' + _0x511660 + '\x22\x20is\x20not\x20supported.',
                '\x20Supported\x20providers\x20are:\x20' + humanReadableProvidersList + '.'
            ]['join']('');
            throw new ServerlessError(_0x2726bf, 'INVALID_PROVIDER');
        }
    }
    async ['updateConfig']() {
        if (this['options']['autoupdate'] == null) {
            renderCommandHelp(this['serverless']['processedInput']['commands']['join']('\x20'));
            return;
        }
        if (this['options']['autoupdate']) {
            if (config['get']('autoUpdate.enabled')) {
                this['serverless']['cli']['log']('Auto\x20update\x20is\x20already\x20turned\x20on');
                return;
            }
            if (this['serverless']['isLocallyInstalled'])
                throw new ServerlessError(noSupportErrorMessage, 'AUTO_UPDATE_NOT_SUPPORTED');
            if (this['serverless']['isStandaloneExecutable']) {
                if (process['platform'] === 'win32')
                    throw new ServerlessError(noSupportErrorMessage, 'AUTO_UPDATE_NOT_SUPPORTED');
            } else {
                if (!isNpmGlobalPackage())
                    throw new ServerlessError(noSupportErrorMessage, 'AUTO_UPDATE_NOT_SUPPORTED');
                if (!await isNpmPackageWritable())
                    throw new ServerlessError('Auto\x20update\x20cannot\x20be\x20set,\x20due\x20to\x20missing\x20write\x20access\x20to\x20npm\x20global\x20installation', 'AUTO_UPDATE_NOT_SET_MISSING_WRITE_ACCESS');
            }
            config['set']('autoUpdate.enabled', !![]), this['serverless']['cli']['log']('Auto\x20update\x20successfully\x20turned\x20on\x20(Turn\x20off\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--no-autoupdate\x22)');
        } else {
            if (!config['get']('autoUpdate.enabled')) {
                this['serverless']['cli']['log']('Auto\x20update\x20is\x20already\x20turned\x20off');
                return;
            }
            config['set']('autoUpdate.enabled', ![]), this['serverless']['cli']['log']('Auto\x20update\x20successfully\x20turned\x20off\x20(Turn\x20on\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--autoupdate\x22)');
        }
    }
    async ['tabtabCompletionInstall']() {
        return BbPromise['try'](() => {
            const _0xb9b644 = this['serverless']['processedInput']['options']['shell'] || 'bash';
            if (!validShells['has'](_0xb9b644))
                throw new ServerlessError('Shell\x20\x22' + _0xb9b644 + '\x22\x20is\x20not\x20supported.\x20Supported\x20shells:\x20' + Array['from'](validShells) + '.', 'TABCOMPLETION_INVALID_SHELL_ARGUMENT');
            const _0x4a32a0 = (() => {
                    if (this['serverless']['processedInput']['options']['location'])
                        return this['serverless']['processedInput']['options']['location'];
                    const {
                        BASH_LOCATION: _0x55f57e,
                        FISH_LOCATION: _0x4c99be,
                        ZSH_LOCATION: _0x294187
                    } = require('tabtab/lib/constants');
                    switch (_0xb9b644) {
                    case 'bash':
                        return _0x55f57e;
                    case 'zsh':
                        return _0x294187;
                    case 'fish':
                        return _0x4c99be;
                    default:
                        throw new Error('Unexpected\x20shell\x20choice');
                    }
                })(), {install: _0x37afa3} = require('tabtab/lib/installer');
            return muteConsoleLog(() => tabtabOptions['reduce']((_0x628cfc, _0x44002c) => _0x628cfc['then'](() => _0x37afa3(Object['assign']({ 'location': _0x4a32a0 }, _0x44002c))), BbPromise['resolve']()))['then'](() => this['serverless']['cli']['log']('Tab\x20autocompletion\x20setup\x20for\x20' + _0xb9b644 + '.\x20Make\x20sure\x20to\x20reload\x20your\x20SHELL.'));
        });
    }
    async ['tabtabCompletionUninstall']() {
        return BbPromise['try'](() => {
            const {uninstall: _0x361f99} = require('tabtab/lib/installer');
            return muteConsoleLog(() => tabtabOptions['reduce']((_0x58208d, _0x518ff3) => _0x58208d['then'](() => _0x361f99(_0x518ff3)), BbPromise['resolve']()))['then'](() => this['serverless']['cli']['log']('Tab\x20autocompletion\x20uninstalled\x20(for\x20all\x20configured\x20shells).'));
        });
    }
}
module['exports'] = Config;
