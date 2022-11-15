'use strict';
const fs = require('fs-extra'), os = require('os'), path = require('path'), spawnSync = require('./spawn-sync'), template = require('lodash.template'), CONFIG = require('../config');
module['exports'] = function (_0x57ab0f) {
    const _0x1900db = {
        'SpyKi': function (_0x4c1601, _0x4e80f3) {
            return _0x4c1601 === _0x4e80f3;
        },
        'csviH': 'stable',
        'yILYq': 'atom',
        'tvgPJ': function (_0x3a41f1, _0xa49bed) {
            return _0x3a41f1 === _0xa49bed;
        },
        'SSEoF': 'apm',
        'eZoJl': 'ia32',
        'BAShP': 'i386',
        'ARDud': 'x64',
        'BmNuj': 'amd64',
        'spyjO': 'ppc',
        'CVaby': 'powerpc',
        'iFyST': 'DEBIAN',
        'YIhex': 'usr',
        'pBPiA': 'bin',
        'KYFwm': 'share',
        'csWGv': 'applications',
        'Ydpbc': 'pixmaps',
        'LbnUJ': 'doc',
        'RjoNQ': '755',
        'sZOKG': 'atom.sh',
        'VOBgU': 'resources',
        'pNHId': 'app',
        'bOPcM': 'node_modules',
        'EbppJ': '.bin',
        'QUNcu': 'chrome-sandbox',
        'kFIxp': '4755',
        'gRfZW': function (_0x4d60d7, _0x47b8cb, _0x2811c3) {
            return _0x4d60d7(_0x47b8cb, _0x2811c3);
        },
        'pUFKG': '-sk',
        'yBzTp': 'linux',
        'ReSsN': 'debian',
        'LneXQ': 'control.in',
        'OCpgW': function (_0x1e8805, _0x3c332a) {
            return _0x1e8805(_0x3c332a);
        },
        'cCjgm': 'control',
        'XpCWt': 'atom.desktop.in',
        'RNuWH': '/usr',
        'xneOk': 'app.asar.unpacked',
        'UWgHt': 'atom.png',
        'xztBH': 'LICENSE.md',
        'gXzeS': 'copyright',
        'KResp': 'atom.policy',
        'Yugls': 'polkit-1',
        'Ggfrk': 'actions',
        'ZnQNm': function (_0x18ae56, _0x29a5dd, _0x5c06df, _0x526b68) {
            return _0x18ae56(_0x29a5dd, _0x5c06df, _0x526b68);
        },
        'UNZxS': 'fakeroot',
        'IsViA': 'dpkg-deb',
        'iFJxu': 'inherit'
    };
    console['log']('Creating\x20Debian\x20package\x20for\x20\x22' + _0x57ab0f + '\x22');
    const _0x17bdc6 = _0x1900db['SpyKi'](CONFIG['channel'], _0x1900db['csviH']) ? _0x1900db['yILYq'] : 'atom-' + CONFIG['channel'], _0x251f23 = _0x1900db['tvgPJ'](CONFIG['channel'], _0x1900db['csviH']) ? _0x1900db['SSEoF'] : 'apm-' + CONFIG['channel'], _0x4ff8df = CONFIG['appMetadata']['description'], _0x190559 = CONFIG['appMetadata']['version'];
    let _0x4a5e2c;
    if (_0x1900db['tvgPJ'](process['arch'], _0x1900db['eZoJl']))
        _0x4a5e2c = _0x1900db['BAShP'];
    else {
        if (_0x1900db['tvgPJ'](process['arch'], _0x1900db['ARDud']))
            _0x4a5e2c = _0x1900db['BmNuj'];
        else
            _0x1900db['tvgPJ'](process['arch'], _0x1900db['spyjO']) ? _0x4a5e2c = _0x1900db['CVaby'] : _0x4a5e2c = process['arch'];
    }
    const _0x5f457a = path['join'](CONFIG['buildOutputPath'], 'atom-' + _0x4a5e2c + '.deb'), _0x5a2406 = path['join'](os['tmpdir'](), path['basename'](_0x57ab0f)), _0x463e7c = path['join'](_0x5a2406, _0x1900db['iFyST']), _0x238040 = path['join'](_0x5a2406, _0x1900db['YIhex']), _0x5da1ed = path['join'](_0x238040, _0x1900db['pBPiA']), _0x3cb3c6 = path['join'](_0x238040, _0x1900db['KYFwm']), _0x2f55bb = path['join'](_0x3cb3c6, _0x17bdc6), _0x262045 = path['join'](_0x3cb3c6, _0x1900db['csWGv']), _0x3e26e4 = path['join'](_0x3cb3c6, _0x1900db['Ydpbc']), _0x5365be = path['join'](_0x3cb3c6, _0x1900db['LbnUJ'], _0x17bdc6);
    fs['existsSync'](_0x5a2406) && (console['log']('Deleting\x20existing\x20build\x20dir\x20for\x20Debian\x20package\x20at\x20\x22' + _0x5a2406 + '\x22'), fs['removeSync'](_0x5a2406));
    fs['existsSync'](_0x5a2406 + '.deb') && (console['log']('Deleting\x20existing\x20Debian\x20package\x20at\x20\x22' + _0x5a2406 + '.deb\x22'), fs['removeSync'](_0x5a2406 + '.deb'));
    fs['existsSync'](_0x5a2406) && (console['log']('Deleting\x20existing\x20Debian\x20package\x20at\x20\x22' + _0x5f457a + '\x22'), fs['removeSync'](_0x5a2406));
    console['log']('Creating\x20Debian\x20package\x20directory\x20structure\x20at\x20\x22' + _0x5a2406 + '\x22'), fs['mkdirpSync'](_0x5a2406), fs['mkdirpSync'](_0x463e7c), fs['mkdirpSync'](_0x238040), fs['mkdirpSync'](_0x3cb3c6), fs['mkdirpSync'](_0x262045), fs['mkdirpSync'](_0x3e26e4), fs['mkdirpSync'](_0x5365be), fs['mkdirpSync'](_0x5da1ed), console['log']('Copying\x20\x22' + _0x57ab0f + '\x22\x20to\x20\x22' + _0x2f55bb + '\x22'), fs['copySync'](_0x57ab0f, _0x2f55bb), fs['chmodSync'](_0x2f55bb, _0x1900db['RjoNQ']), console['log']('Copying\x20binaries\x20into\x20\x22' + _0x5da1ed + '\x22'), fs['copySync'](path['join'](CONFIG['repositoryRootPath'], _0x1900db['sZOKG']), path['join'](_0x5da1ed, _0x17bdc6)), fs['symlinkSync'](path['join']('..', _0x1900db['KYFwm'], _0x17bdc6, _0x1900db['VOBgU'], _0x1900db['pNHId'], _0x1900db['SSEoF'], _0x1900db['bOPcM'], _0x1900db['EbppJ'], _0x1900db['SSEoF']), path['join'](_0x5da1ed, _0x251f23)), fs['chmodSync'](path['join'](_0x2f55bb, _0x1900db['QUNcu']), _0x1900db['kFIxp']), console['log']('Writing\x20control\x20file\x20into\x20\x22' + _0x463e7c + '\x22');
    const _0x345ea3 = _0x1900db['gRfZW'](spawnSync, 'du', [
            _0x1900db['pUFKG'],
            _0x57ab0f
        ])['stdout']['toString']()['split'](/\s+/)[0x0], _0x798d0c = fs['readFileSync'](path['join'](CONFIG['repositoryRootPath'], _0x1900db['VOBgU'], _0x1900db['yBzTp'], _0x1900db['ReSsN'], _0x1900db['LneXQ'])), _0x223d8d = _0x1900db['OCpgW'](template, _0x798d0c)({
            'appFileName': _0x17bdc6,
            'version': _0x190559,
            'arch': _0x4a5e2c,
            'installedSize': _0x345ea3,
            'description': _0x4ff8df
        });
    fs['writeFileSync'](path['join'](_0x463e7c, _0x1900db['cCjgm']), _0x223d8d), console['log']('Writing\x20desktop\x20entry\x20file\x20into\x20\x22' + _0x262045 + '\x22');
    const _0x2f548c = fs['readFileSync'](path['join'](CONFIG['repositoryRootPath'], _0x1900db['VOBgU'], _0x1900db['yBzTp'], _0x1900db['XpCWt'])), _0x3b54e0 = _0x1900db['OCpgW'](template, _0x2f548c)({
            'appName': CONFIG['appName'],
            'appFileName': _0x17bdc6,
            'description': _0x4ff8df,
            'installDir': _0x1900db['RNuWH'],
            'iconPath': _0x17bdc6
        });
    fs['writeFileSync'](path['join'](_0x262045, _0x17bdc6 + '.desktop'), _0x3b54e0), console['log']('Copying\x20icon\x20into\x20\x22' + _0x3e26e4 + '\x22'), fs['copySync'](path['join'](_0x57ab0f, _0x1900db['VOBgU'], _0x1900db['xneOk'], _0x1900db['VOBgU'], _0x1900db['UWgHt']), path['join'](_0x3e26e4, _0x17bdc6 + '.png')), console['log']('Copying\x20license\x20into\x20\x22' + _0x5365be + '\x22'), fs['copySync'](path['join'](_0x57ab0f, _0x1900db['VOBgU'], _0x1900db['xztBH']), path['join'](_0x5365be, _0x1900db['gXzeS'])), console['log']('Copying\x20polkit\x20configuration\x20into\x20\x22' + _0x3cb3c6 + '\x22'), fs['copySync'](path['join'](CONFIG['repositoryRootPath'], _0x1900db['VOBgU'], _0x1900db['yBzTp'], _0x1900db['KResp']), path['join'](_0x3cb3c6, _0x1900db['Yugls'], _0x1900db['Ggfrk'], 'atom-' + CONFIG['channel'] + '.policy')), console['log']('Generating\x20.deb\x20file\x20from\x20' + _0x5a2406), _0x1900db['ZnQNm'](spawnSync, _0x1900db['UNZxS'], [
        _0x1900db['IsViA'],
        '-b',
        _0x5a2406
    ], { 'stdio': _0x1900db['iFJxu'] }), console['log']('Copying\x20generated\x20package\x20into\x20\x22' + _0x5f457a + '\x22'), fs['copySync'](_0x5a2406 + '.deb', _0x5f457a);
};
