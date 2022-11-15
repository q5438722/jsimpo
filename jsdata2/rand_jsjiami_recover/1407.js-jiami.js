'use strict';
const fs = require('fs-extra');
const os = require('os');
const path = require('path');
const spawnSync = require('./spawn-sync');
const template = require('lodash.template');
const CONFIG = require('../config');
module['exports'] = function (_0x3097c8) {
    console['log']('Creating Debian package for "' + _0x3097c8 + '"');
    const _0x273e0f = CONFIG['channel'] === 'stable' ? 'atom' : 'atom-' + CONFIG['channel'];
    const _0x2069eb = CONFIG['channel'] === 'stable' ? 'apm' : 'apm-' + CONFIG['channel'];
    const _0x11b6d6 = CONFIG['appMetadata']['description'];
    const _0x1b8434 = CONFIG['appMetadata']['version'];
    let _0x283ca1;
    if (process['arch'] === 'ia32') {
        _0x283ca1 = 'i386';
    } else if (process['arch'] === 'x64') {
        _0x283ca1 = 'amd64';
    } else if (process['arch'] === 'ppc') {
        if ('TYNJZ' !== 'TYNJZ') {
            _0x283ca1 = process['arch'];
        } else {
            _0x283ca1 = 'powerpc';
        }
    } else {
        _0x283ca1 = process['arch'];
    }
    const _0x3743b3 = path['join'](CONFIG['buildOutputPath'], 'atom-' + _0x283ca1 + '.deb');
    const _0x75e4f1 = path['join'](os['tmpdir'](), path['basename'](_0x3097c8));
    const _0x5eea4f = path['join'](_0x75e4f1, 'DEBIAN');
    const _0x456269 = path['join'](_0x75e4f1, 'usr');
    const _0x520516 = path['join'](_0x456269, 'bin');
    const _0xf5d5c6 = path['join'](_0x456269, 'share');
    const _0x3733df = path['join'](_0xf5d5c6, _0x273e0f);
    const _0x339d2f = path['join'](_0xf5d5c6, 'applications');
    const _0x4ce983 = path['join'](_0xf5d5c6, 'pixmaps');
    const _0x10e677 = path['join'](_0xf5d5c6, 'doc', _0x273e0f);
    if (fs['existsSync'](_0x75e4f1)) {
        if ('bdaqg' === 'PTXWu') {
            console['log']('Deleting existing Debian package at "' + _0x75e4f1 + '.deb"');
            fs['removeSync'](_0x75e4f1 + '.deb');
        } else {
            console['log']('Deleting existing build dir for Debian package at "' + _0x75e4f1 + '"');
            fs['removeSync'](_0x75e4f1);
        }
    }
    if (fs['existsSync'](_0x75e4f1 + '.deb')) {
        console['log']('Deleting existing Debian package at "' + _0x75e4f1 + '.deb"');
        fs['removeSync'](_0x75e4f1 + '.deb');
    }
    if (fs['existsSync'](_0x75e4f1)) {
        console['log']('Deleting existing Debian package at "' + _0x3743b3 + '"');
        fs['removeSync'](_0x75e4f1);
    }
    console['log']('Creating Debian package directory structure at "' + _0x75e4f1 + '"');
    fs['mkdirpSync'](_0x75e4f1);
    fs['mkdirpSync'](_0x5eea4f);
    fs['mkdirpSync'](_0x456269);
    fs['mkdirpSync'](_0xf5d5c6);
    fs['mkdirpSync'](_0x339d2f);
    fs['mkdirpSync'](_0x4ce983);
    fs['mkdirpSync'](_0x10e677);
    fs['mkdirpSync'](_0x520516);
    console['log']('Copying "' + _0x3097c8 + '" to "' + _0x3733df + '"');
    fs['copySync'](_0x3097c8, _0x3733df);
    fs['chmodSync'](_0x3733df, '755');
    console['log']('Copying binaries into "' + _0x520516 + '"');
    fs['copySync'](path['join'](CONFIG['repositoryRootPath'], 'atom.sh'), path['join'](_0x520516, _0x273e0f));
    fs['symlinkSync'](path['join']('..', 'share', _0x273e0f, 'resources', 'app', 'apm', 'node_modules', '.bin', 'apm'), path['join'](_0x520516, _0x2069eb));
    fs['chmodSync'](path['join'](_0x3733df, 'chrome-sandbox'), '4755');
    console['log']('Writing control file into "' + _0x5eea4f + '"');
    const _0x38ea8b = spawnSync('du', [
        '-sk',
        _0x3097c8
    ])['stdout']['toString']()['split'](/\s+/)[0];
    const _0x473294 = fs['readFileSync'](path['join'](CONFIG['repositoryRootPath'], 'resources', 'linux', 'debian', 'control.in'));
    const _0x216608 = template(_0x473294)({
        'appFileName': _0x273e0f,
        'version': _0x1b8434,
        'arch': _0x283ca1,
        'installedSize': _0x38ea8b,
        'description': _0x11b6d6
    });
    fs['writeFileSync'](path['join'](_0x5eea4f, 'control'), _0x216608);
    console['log']('Writing desktop entry file into "' + _0x339d2f + '"');
    const _0x40c9a6 = fs['readFileSync'](path['join'](CONFIG['repositoryRootPath'], 'resources', 'linux', 'atom.desktop.in'));
    const _0x4e63bc = template(_0x40c9a6)({
        'appName': CONFIG['appName'],
        'appFileName': _0x273e0f,
        'description': _0x11b6d6,
        'installDir': '/usr',
        'iconPath': _0x273e0f
    });
    fs['writeFileSync'](path['join'](_0x339d2f, _0x273e0f + '.desktop'), _0x4e63bc);
    console['log']('Copying icon into "' + _0x4ce983 + '"');
    fs['copySync'](path['join'](_0x3097c8, 'resources', 'app.asar.unpacked', 'resources', 'atom.png'), path['join'](_0x4ce983, _0x273e0f + '.png'));
    console['log']('Copying license into "' + _0x10e677 + '"');
    fs['copySync'](path['join'](_0x3097c8, 'resources', 'LICENSE.md'), path['join'](_0x10e677, 'copyright'));
    console['log']('Copying polkit configuration into "' + _0xf5d5c6 + '"');
    fs['copySync'](path['join'](CONFIG['repositoryRootPath'], 'resources', 'linux', 'atom.policy'), path['join'](_0xf5d5c6, 'polkit-1', 'actions', 'atom-' + CONFIG['channel'] + '.policy'));
    console['log']('Generating .deb file from ' + _0x75e4f1);
    spawnSync('fakeroot', [
        'dpkg-deb',
        '-b',
        _0x75e4f1
    ], { 'stdio': 'inherit' });
    console['log']('Copying generated package into "' + _0x3743b3 + '"');
    fs['copySync'](_0x75e4f1 + '.deb', _0x3743b3);
};