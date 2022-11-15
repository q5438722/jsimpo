'use strict';
const fs = require('fs-extra'), os = require('os'), path = require('path'), spawnSync = require('./spawn-sync'), template = require('lodash.template'), CONFIG = require('../config');
module['exports'] = function (_0x537e95) {
    console['log']('Creating\x20Debian\x20package\x20for\x20\x22' + _0x537e95 + '\x22');
    const _0x2f10ba = CONFIG['channel'] === 'stable' ? 'atom' : 'atom-' + CONFIG['channel'], _0x57fb82 = CONFIG['channel'] === 'stable' ? 'apm' : 'apm-' + CONFIG['channel'], _0x465c1b = CONFIG['appMetadata']['description'], _0x1ce845 = CONFIG['appMetadata']['version'];
    let _0x17d7ec;
    if (process['arch'] === 'ia32')
        _0x17d7ec = 'i386';
    else {
        if (process['arch'] === 'x64')
            _0x17d7ec = 'amd64';
        else
            process['arch'] === 'ppc' ? _0x17d7ec = 'powerpc' : _0x17d7ec = process['arch'];
    }
    const _0x723fcd = path['join'](CONFIG['buildOutputPath'], 'atom-' + _0x17d7ec + '.deb'), _0x2881a0 = path['join'](os['tmpdir'](), path['basename'](_0x537e95)), _0x396cab = path['join'](_0x2881a0, 'DEBIAN'), _0x9abddb = path['join'](_0x2881a0, 'usr'), _0x34851a = path['join'](_0x9abddb, 'bin'), _0x5f54d7 = path['join'](_0x9abddb, 'share'), _0x59ff7e = path['join'](_0x5f54d7, _0x2f10ba), _0x153bc2 = path['join'](_0x5f54d7, 'applications'), _0x2f8715 = path['join'](_0x5f54d7, 'pixmaps'), _0x1180c9 = path['join'](_0x5f54d7, 'doc', _0x2f10ba);
    fs['existsSync'](_0x2881a0) && (console['log']('Deleting\x20existing\x20build\x20dir\x20for\x20Debian\x20package\x20at\x20\x22' + _0x2881a0 + '\x22'), fs['removeSync'](_0x2881a0));
    fs['existsSync'](_0x2881a0 + '.deb') && (console['log']('Deleting\x20existing\x20Debian\x20package\x20at\x20\x22' + _0x2881a0 + '.deb\x22'), fs['removeSync'](_0x2881a0 + '.deb'));
    fs['existsSync'](_0x2881a0) && (console['log']('Deleting\x20existing\x20Debian\x20package\x20at\x20\x22' + _0x723fcd + '\x22'), fs['removeSync'](_0x2881a0));
    console['log']('Creating\x20Debian\x20package\x20directory\x20structure\x20at\x20\x22' + _0x2881a0 + '\x22'), fs['mkdirpSync'](_0x2881a0), fs['mkdirpSync'](_0x396cab), fs['mkdirpSync'](_0x9abddb), fs['mkdirpSync'](_0x5f54d7), fs['mkdirpSync'](_0x153bc2), fs['mkdirpSync'](_0x2f8715), fs['mkdirpSync'](_0x1180c9), fs['mkdirpSync'](_0x34851a), console['log']('Copying\x20\x22' + _0x537e95 + '\x22\x20to\x20\x22' + _0x59ff7e + '\x22'), fs['copySync'](_0x537e95, _0x59ff7e), fs['chmodSync'](_0x59ff7e, '755'), console['log']('Copying\x20binaries\x20into\x20\x22' + _0x34851a + '\x22'), fs['copySync'](path['join'](CONFIG['repositoryRootPath'], 'atom.sh'), path['join'](_0x34851a, _0x2f10ba)), fs['symlinkSync'](path['join']('..', 'share', _0x2f10ba, 'resources', 'app', 'apm', 'node_modules', '.bin', 'apm'), path['join'](_0x34851a, _0x57fb82)), fs['chmodSync'](path['join'](_0x59ff7e, 'chrome-sandbox'), '4755'), console['log']('Writing\x20control\x20file\x20into\x20\x22' + _0x396cab + '\x22');
    const _0x597368 = spawnSync('du', [
            '-sk',
            _0x537e95
        ])['stdout']['toString']()['split'](/\s+/)[-0xbf3 + -0x1d36 + -0x2929 * -0x1], _0x1ebe96 = fs['readFileSync'](path['join'](CONFIG['repositoryRootPath'], 'resources', 'linux', 'debian', 'control.in')), _0x27d124 = template(_0x1ebe96)({
            'appFileName': _0x2f10ba,
            'version': _0x1ce845,
            'arch': _0x17d7ec,
            'installedSize': _0x597368,
            'description': _0x465c1b
        });
    fs['writeFileSync'](path['join'](_0x396cab, 'control'), _0x27d124), console['log']('Writing\x20desktop\x20entry\x20file\x20into\x20\x22' + _0x153bc2 + '\x22');
    const _0x110de9 = fs['readFileSync'](path['join'](CONFIG['repositoryRootPath'], 'resources', 'linux', 'atom.desktop.in')), _0x5a874b = template(_0x110de9)({
            'appName': CONFIG['appName'],
            'appFileName': _0x2f10ba,
            'description': _0x465c1b,
            'installDir': '/usr',
            'iconPath': _0x2f10ba
        });
    fs['writeFileSync'](path['join'](_0x153bc2, _0x2f10ba + '.desktop'), _0x5a874b), console['log']('Copying\x20icon\x20into\x20\x22' + _0x2f8715 + '\x22'), fs['copySync'](path['join'](_0x537e95, 'resources', 'app.asar.unpacked', 'resources', 'atom.png'), path['join'](_0x2f8715, _0x2f10ba + '.png')), console['log']('Copying\x20license\x20into\x20\x22' + _0x1180c9 + '\x22'), fs['copySync'](path['join'](_0x537e95, 'resources', 'LICENSE.md'), path['join'](_0x1180c9, 'copyright')), console['log']('Copying\x20polkit\x20configuration\x20into\x20\x22' + _0x5f54d7 + '\x22'), fs['copySync'](path['join'](CONFIG['repositoryRootPath'], 'resources', 'linux', 'atom.policy'), path['join'](_0x5f54d7, 'polkit-1', 'actions', 'atom-' + CONFIG['channel'] + '.policy')), console['log']('Generating\x20.deb\x20file\x20from\x20' + _0x2881a0), spawnSync('fakeroot', [
        'dpkg-deb',
        '-b',
        _0x2881a0
    ], { 'stdio': 'inherit' }), console['log']('Copying\x20generated\x20package\x20into\x20\x22' + _0x723fcd + '\x22'), fs['copySync'](_0x2881a0 + '.deb', _0x723fcd);
};
