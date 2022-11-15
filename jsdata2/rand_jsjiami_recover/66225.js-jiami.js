'use strict';
const semver = require('semver');
const url = require('url');
const path = require('path');
const log = require('npmlog');
const headersTarballRange = '>= 3.0.0 || ~0.12.10 || ~0.10.42';
const bitsre = /\/win-(x86|x64|arm64)\//;
const bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(_0x4ee0b1, _0x241d35, _0x12937b, _0x146036) {
    var _0x50bc57 = semver['valid'](_0x4ee0b1[0]) && _0x4ee0b1[0] || _0x241d35['opts']['target'] || _0x12937b;
    var _0x2f91d4 = semver['parse'](_0x50bc57);
    var _0x221524 = _0x241d35['opts']['dist-url'] || _0x241d35['opts']['disturl'];
    var _0x47888a;
    var _0x3c0a5d;
    var _0x38fcd6;
    var _0x45d0bf;
    var _0x5b934d;
    var _0x2eb059;
    var _0x282155;
    var _0x20545c;
    var _0x4b360c;
    var _0x19ee0a;
    if (!_0x2f91d4) {
        return { 'version': _0x50bc57 };
    }
    _0x50bc57 = _0x2f91d4['version'];
    _0x47888a = _0x50bc57 === semver['parse'](_0x12937b)['version'];
    if (!_0x47888a) {
        if ('VcLOM' !== 'VcLOM') {
            _0x221524 = process['env']['NODEJS_ORG_MIRROR'];
        } else {
            _0x146036 = null;
        }
    }
    if (_0x146036) {
        _0x38fcd6 = _0x146036['name']['replace'](/io\.js/, 'iojs');
    } else {
        if ('MwOsd' === 'MwOsd') {
            _0x3c0a5d = _0x2f91d4['major'] >= 1 && _0x2f91d4['major'] < 4;
            _0x38fcd6 = _0x3c0a5d ? 'iojs' : 'node';
        } else {
            _0x45d0bf = 'https://nodejs.org/dist';
        }
    }
    if (!_0x221524 && process['env']['NODEJS_ORG_MIRROR']) {
        _0x221524 = process['env']['NODEJS_ORG_MIRROR'];
    }
    if (_0x221524) {
        if ('Rvhvg' === 'Rvhvg') {
            log['verbose']('download', 'using dist-url', _0x221524);
        } else {
            return { 'version': _0x50bc57 };
        }
    }
    if (_0x221524) {
        _0x45d0bf = _0x221524['replace'](/\/+$/, '');
    } else {
        if ('fiNVI' === 'fiNVI') {
            _0x45d0bf = 'https://nodejs.org/dist';
        } else {
            _0x38fcd6 = _0x146036['name']['replace'](/io\.js/, 'iojs');
        }
    }
    _0x45d0bf += '/v' + _0x50bc57 + '/';
    if (_0x146036 && _0x146036['headersUrl'] && !_0x221524) {
        var _0x4e8a17 = '3|2|1|0|4'['split']('|'), _0x501286 = 0;
        while (!![]) {
            switch (_0x4e8a17[_0x501286++]) {
            case '0':
                _0x20545c = resolveLibUrl(_0x38fcd6, _0x146036['libUrl'] || _0x5b934d || _0x45d0bf, 'arm64', _0x2f91d4['major']);
                continue;
            case '1':
                _0x282155 = resolveLibUrl(_0x38fcd6, _0x146036['libUrl'] || _0x5b934d || _0x45d0bf, 'x64', _0x2f91d4['major']);
                continue;
            case '2':
                _0x2eb059 = resolveLibUrl(_0x38fcd6, _0x146036['libUrl'] || _0x5b934d || _0x45d0bf, 'x86', _0x2f91d4['major']);
                continue;
            case '3':
                _0x5b934d = url['resolve'](_0x146036['headersUrl'], './');
                continue;
            case '4':
                _0x4b360c = _0x146036['headersUrl'];
                continue;
            }
            break;
        }
    } else {
        var _0x4c0136 = '3|2|5|1|0|4'['split']('|'), _0x4f4686 = 0;
        while (!![]) {
            switch (_0x4c0136[_0x4f4686++]) {
            case '0':
                _0x19ee0a = semver['satisfies'](_0x2f91d4, headersTarballRange);
                continue;
            case '1':
                _0x20545c = resolveLibUrl(_0x38fcd6, _0x5b934d, 'arm64', _0x2f91d4['major']);
                continue;
            case '2':
                _0x2eb059 = resolveLibUrl(_0x38fcd6, _0x5b934d, 'x86', _0x2f91d4['major']);
                continue;
            case '3':
                _0x5b934d = _0x45d0bf;
                continue;
            case '4':
                _0x4b360c = url['resolve'](_0x5b934d, _0x51fccd['FaEeH'](_0x38fcd6 + '-v', _0x50bc57) + (_0x19ee0a ? '-headers' : '') + '.tar.gz');
                continue;
            case '5':
                _0x282155 = resolveLibUrl(_0x38fcd6, _0x5b934d, 'x64', _0x2f91d4['major']);
                continue;
            }
            break;
        }
    }
    return {
        'version': _0x50bc57,
        'semver': _0x2f91d4,
        'name': _0x38fcd6,
        'baseUrl': _0x5b934d,
        'tarballUrl': _0x4b360c,
        'shasumsUrl': url['resolve'](_0x5b934d, 'SHASUMS256.txt'),
        'versionDir': (_0x38fcd6 !== 'node' ? _0x38fcd6 + '-' : '') + _0x50bc57,
        'ia32': {
            'libUrl': _0x2eb059,
            'libPath': normalizePath(path['relative'](url['parse'](_0x5b934d)['path'], url['parse'](_0x2eb059)['path']))
        },
        'x64': {
            'libUrl': _0x282155,
            'libPath': normalizePath(path['relative'](url['parse'](_0x5b934d)['path'], url['parse'](_0x282155)['path']))
        },
        'arm64': {
            'libUrl': _0x20545c,
            'libPath': normalizePath(path['relative'](url['parse'](_0x5b934d)['path'], url['parse'](_0x20545c)['path']))
        }
    };
}
function normalizePath(_0x6aecf8) {
    return path['normalize'](_0x6aecf8)['replace'](/\\/g, '/');
}
function resolveLibUrl(_0x4c9071, _0x45293c, _0x35172f, _0x246ec4) {
    var _0xd1a6f1 = url['resolve'](_0x45293c, './');
    var _0x23ea77 = bitsre['test'](_0x45293c) || _0x246ec4 === 3 && bitsreV3['test'](_0x45293c);
    if (!_0x23ea77) {
        if (_0x246ec4 >= 1) {
            return url['resolve'](_0xd1a6f1, _0x4e1f91['GIIFL']('win-', _0x35172f) + '/' + _0x4c9071 + '.lib');
        }
        return url['resolve'](_0xd1a6f1, _0x4e1f91['pFtXI'](_0x35172f === 'x86' ? '' : _0x35172f + '/', _0x4c9071) + '.lib');
    }
    return _0x45293c['replace'](_0x246ec4 === 3 ? bitsreV3 : bitsre, '/win-' + _0x35172f + '/');
}
module['exports'] = processRelease;