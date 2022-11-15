'use strict';
const _0xc9c9 = [
    'Provider\x20\x22',
    '\x22\x20is\x20not\x20supported.',
    '\x20Supported\x20providers\x20are:\x20',
    'join',
    'INVALID_PROVIDER',
    'autoupdate',
    'serverless',
    'cli',
    'log',
    'Auto\x20update\x20is\x20already\x20turned\x20on',
    'win32',
    'AUTO_UPDATE_NOT_SUPPORTED',
    'Auto\x20update\x20cannot\x20be\x20set,\x20due\x20to\x20missing\x20write\x20access\x20to\x20npm\x20global\x20installation',
    'AUTO_UPDATE_NOT_SET_MISSING_WRITE_ACCESS',
    'set',
    'autoUpdate.enabled',
    'Auto\x20update\x20successfully\x20turned\x20on\x20(Turn\x20off\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--no-autoupdate\x22)',
    'Auto\x20update\x20is\x20already\x20turned\x20off',
    'Auto\x20update\x20successfully\x20turned\x20off\x20(Turn\x20on\x20at\x20any\x20time\x20with\x20\x22serverless\x20config\x20--autoupdate\x22)',
    'try',
    'processedInput',
    'Shell\x20\x22',
    '\x22\x20is\x20not\x20supported.\x20Supported\x20shells:\x20',
    'TABCOMPLETION_INVALID_SHELL_ARGUMENT',
    'location',
    'tabtab/lib/constants',
    'Unexpected\x20shell\x20choice',
    'reduce',
    'then',
    'assign',
    'resolve',
    'Tab\x20autocompletion\x20uninstalled\x20(for\x20all\x20configured\x20shells).',
    'exports',
    '478156zGIrdd',
    '1WnrOmR',
    '1469157pZdQqK',
    '639LaIorf',
    '2807MOtYWa',
    '752850HhqwbY',
    '1646438tNpFmL',
    '1132801aEhIUE',
    '5802106lknSqR',
    '@serverless/utils/config',
    '../serverless-error',
    '../cli/commands-schema',
    '../utils/log/muteConsoleLog',
    '../utils/tabCompletion/tabtabOptions',
    '../utils/npmPackage/isWritable',
    '../utils/npmPackage/isGlobal',
    '../cli/render-help/command',
    'bash',
    'zsh',
    'fish',
    'from',
    'platform',
    'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally',
    'Auto\x20update\x20can\x20only\x20be\x20set\x20for\x20\x22serverless\x22\x20installed\x20by\x20npm\x20globally\x20or\x20',
    'options',
    'get',
    'config',
    'commands',
    'tabcompletion',
    'container',
    'config\x20tabcompletion\x20install',
    'config\x20tabcompletion\x20uninstall',
    'updateConfig',
    'tabtabCompletionInstall',
    'tabtabCompletionUninstall',
    'validate',
    'provider',
    'has'
];
const _0x43fb3d = _0x569b;
(function (_0x1a3cee, _0x40f749) {
    const _0x9106be = _0x569b;
    while (!![]) {
        try {
            const _0x429ffe = parseInt(_0x9106be(0x162)) + -parseInt(_0x9106be(0x163)) * parseInt(_0x9106be(0x164)) + parseInt(_0x9106be(0x165)) * -parseInt(_0x9106be(0x166)) + parseInt(_0x9106be(0x167)) + -parseInt(_0x9106be(0x168)) + -parseInt(_0x9106be(0x169)) + parseInt(_0x9106be(0x16a));
            if (_0x429ffe === _0x40f749)
                break;
            else
                _0x1a3cee['push'](_0x1a3cee['shift']());
        } catch (_0x247aa4) {
            _0x1a3cee['push'](_0x1a3cee['shift']());
        }
    }
}(_0xc9c9, 0xf1f43));
const BbPromise = require('bluebird'), config = require(_0x43fb3d(0x16b)), ServerlessError = require(_0x43fb3d(0x16c)), cliCommandsSchema = require(_0x43fb3d(0x16d)), muteConsoleLog = require(_0x43fb3d(0x16e)), tabtabOptions = require(_0x43fb3d(0x16f)), isNpmPackageWritable = require(_0x43fb3d(0x170)), isNpmGlobalPackage = require(_0x43fb3d(0x171)), renderCommandHelp = require(_0x43fb3d(0x172)), validProviders = new Set(['aws']), validShells = new Set([
        _0x43fb3d(0x173),
        _0x43fb3d(0x174),
        _0x43fb3d(0x175)
    ]), humanReadableProvidersList = '\x22' + Array[_0x43fb3d(0x176)](validProviders) + '\x22', isWindows = process[_0x43fb3d(0x177)] === 'win32', noSupportErrorMessage = isWindows ? _0x43fb3d(0x178) : _0x43fb3d(0x179) + 'standalone\x20installation';
function _0x569b(_0x46d28c, _0x3ee327) {
    return _0x569b = function (_0xc9c987, _0x569b65) {
        _0xc9c987 = _0xc9c987 - 0x162;
        let _0xb3a959 = _0xc9c9[_0xc9c987];
        return _0xb3a959;
    }, _0x569b(_0x46d28c, _0x3ee327);
}
class Config {
    constructor(_0x54b895, _0x3af1e6) {
        const _0x324e3b = _0x43fb3d;
        this['serverless'] = _0x54b895, this[_0x324e3b(0x17a)] = _0x3af1e6, this['commands'] = {
            'config': {
                ...cliCommandsSchema[_0x324e3b(0x17b)](_0x324e3b(0x17c)),
                'commands': { 'credentials': { 'validProviders': validProviders } }
            }
        }, this[_0x324e3b(0x17d)][_0x324e3b(0x17c)][_0x324e3b(0x17d)][_0x324e3b(0x17e)] = {
            'type': _0x324e3b(0x17f),
            'commands': {
                'install': { ...cliCommandsSchema[_0x324e3b(0x17b)](_0x324e3b(0x180)) },
                'uninstall': { ...cliCommandsSchema[_0x324e3b(0x17b)](_0x324e3b(0x181)) }
            }
        }, this['hooks'] = {
            'config:config': async () => this[_0x324e3b(0x182)](),
            'before:config:credentials:config': () => this['validate'](),
            'config:tabcompletion:install:install': async () => this[_0x324e3b(0x183)](),
            'config:tabcompletion:uninstall:uninstall': async () => this[_0x324e3b(0x184)]()
        };
    }
    [_0x43fb3d(0x185)]() {
        const _0x2889bd = _0x43fb3d, _0x54544f = this[_0x2889bd(0x17a)][_0x2889bd(0x186)]['toLowerCase']();
        if (!validProviders[_0x2889bd(0x187)](_0x54544f)) {
            const _0x211701 = [
                _0x2889bd(0x188) + _0x54544f + _0x2889bd(0x189),
                _0x2889bd(0x18a) + humanReadableProvidersList + '.'
            ][_0x2889bd(0x18b)]('');
            throw new ServerlessError(_0x211701, _0x2889bd(0x18c));
        }
    }
    async [_0x43fb3d(0x182)]() {
        const _0x3b5cad = _0x43fb3d;
        if (this[_0x3b5cad(0x17a)][_0x3b5cad(0x18d)] == null) {
            renderCommandHelp(this[_0x3b5cad(0x18e)]['processedInput'][_0x3b5cad(0x17d)][_0x3b5cad(0x18b)]('\x20'));
            return;
        }
        if (this[_0x3b5cad(0x17a)][_0x3b5cad(0x18d)]) {
            if (config[_0x3b5cad(0x17b)]('autoUpdate.enabled')) {
                this[_0x3b5cad(0x18e)][_0x3b5cad(0x18f)][_0x3b5cad(0x190)](_0x3b5cad(0x191));
                return;
            }
            if (this['serverless']['isLocallyInstalled'])
                throw new ServerlessError(noSupportErrorMessage, 'AUTO_UPDATE_NOT_SUPPORTED');
            if (this[_0x3b5cad(0x18e)]['isStandaloneExecutable']) {
                if (process[_0x3b5cad(0x177)] === _0x3b5cad(0x192))
                    throw new ServerlessError(noSupportErrorMessage, _0x3b5cad(0x193));
            } else {
                if (!isNpmGlobalPackage())
                    throw new ServerlessError(noSupportErrorMessage, _0x3b5cad(0x193));
                if (!await isNpmPackageWritable())
                    throw new ServerlessError(_0x3b5cad(0x194), _0x3b5cad(0x195));
            }
            config[_0x3b5cad(0x196)](_0x3b5cad(0x197), !![]), this[_0x3b5cad(0x18e)][_0x3b5cad(0x18f)][_0x3b5cad(0x190)](_0x3b5cad(0x198));
        } else {
            if (!config[_0x3b5cad(0x17b)]('autoUpdate.enabled')) {
                this[_0x3b5cad(0x18e)][_0x3b5cad(0x18f)][_0x3b5cad(0x190)](_0x3b5cad(0x199));
                return;
            }
            config[_0x3b5cad(0x196)]('autoUpdate.enabled', ![]), this['serverless'][_0x3b5cad(0x18f)][_0x3b5cad(0x190)](_0x3b5cad(0x19a));
        }
    }
    async [_0x43fb3d(0x183)]() {
        const _0x3a92d8 = _0x43fb3d;
        return BbPromise[_0x3a92d8(0x19b)](() => {
            const _0x2aae01 = _0x3a92d8, _0x54c950 = this['serverless'][_0x2aae01(0x19c)][_0x2aae01(0x17a)]['shell'] || _0x2aae01(0x173);
            if (!validShells[_0x2aae01(0x187)](_0x54c950))
                throw new ServerlessError(_0x2aae01(0x19d) + _0x54c950 + _0x2aae01(0x19e) + Array['from'](validShells) + '.', _0x2aae01(0x19f));
            const _0x2a63a9 = (() => {
                    const _0x14fc5d = _0x2aae01;
                    if (this[_0x14fc5d(0x18e)][_0x14fc5d(0x19c)]['options'][_0x14fc5d(0x1a0)])
                        return this['serverless'][_0x14fc5d(0x19c)]['options'][_0x14fc5d(0x1a0)];
                    const {
                        BASH_LOCATION: _0x3b4a28,
                        FISH_LOCATION: _0x5448dd,
                        ZSH_LOCATION: _0x3f051b
                    } = require(_0x14fc5d(0x1a1));
                    switch (_0x54c950) {
                    case _0x14fc5d(0x173):
                        return _0x3b4a28;
                    case 'zsh':
                        return _0x3f051b;
                    case 'fish':
                        return _0x5448dd;
                    default:
                        throw new Error(_0x14fc5d(0x1a2));
                    }
                })(), {install: _0x6e3e92} = require('tabtab/lib/installer');
            return muteConsoleLog(() => tabtabOptions[_0x2aae01(0x1a3)]((_0x4f71e7, _0x136c50) => _0x4f71e7[_0x2aae01(0x1a4)](() => _0x6e3e92(Object[_0x2aae01(0x1a5)]({ 'location': _0x2a63a9 }, _0x136c50))), BbPromise[_0x2aae01(0x1a6)]()))['then'](() => this[_0x2aae01(0x18e)][_0x2aae01(0x18f)]['log']('Tab\x20autocompletion\x20setup\x20for\x20' + _0x54c950 + '.\x20Make\x20sure\x20to\x20reload\x20your\x20SHELL.'));
        });
    }
    async [_0x43fb3d(0x184)]() {
        const _0x5c7687 = _0x43fb3d;
        return BbPromise[_0x5c7687(0x19b)](() => {
            const _0x4b50ff = _0x5c7687, {uninstall: _0x17eed1} = require('tabtab/lib/installer');
            return muteConsoleLog(() => tabtabOptions[_0x4b50ff(0x1a3)]((_0xbc37eb, _0x7e9c3) => _0xbc37eb[_0x4b50ff(0x1a4)](() => _0x17eed1(_0x7e9c3)), BbPromise[_0x4b50ff(0x1a6)]()))[_0x4b50ff(0x1a4)](() => this[_0x4b50ff(0x18e)][_0x4b50ff(0x18f)][_0x4b50ff(0x190)](_0x4b50ff(0x1a7)));
        });
    }
}
module[_0x43fb3d(0x1a8)] = Config;
