var Class = require('../../utils/Class');
var FileTypesManager = require('../FileTypesManager');
var GetFastValue = require('../../utils/object/GetFastValue');
var ImageFile = require('./ImageFile.js');
var IsPlainObject = require('../../utils/object/IsPlainObject');
var JSONFile = require('./JSONFile.js');
var MultiFile = require('../MultiFile.js');
var MultiAtlasFile = new Class({
    'Extends': MultiFile,
    'initialize': function MultiAtlasFile(_0x5460b9, _0x45b0ad, _0x5dbf6e, _0x3188ce, _0x1ef554, _0x167b34, _0x514ddf) {
        if (IsPlainObject(_0x45b0ad)) {
            if ('KmpKn' === 'KmpKn') {
                var _0x862412 = _0x45b0ad;
                _0x45b0ad = GetFastValue(_0x862412, 'key');
                if (GetFastValue(_0x862412, 'url', ![])) {
                    if ('TxjCP' !== 'JBXHK') {
                        _0x5dbf6e = GetFastValue(_0x862412, 'url');
                    } else {
                        this['files'][i]['pendingDestroy']();
                    }
                } else {
                    _0x5dbf6e = GetFastValue(_0x862412, 'atlasURL');
                }
                _0x167b34 = GetFastValue(_0x862412, 'xhrSettings');
                _0x3188ce = GetFastValue(_0x862412, 'path');
                _0x1ef554 = GetFastValue(_0x862412, 'baseURL');
                _0x514ddf = GetFastValue(_0x862412, 'textureXhrSettings');
            } else {
                var _0x11c972 = '4|8|0|3|2|5|10|13|11|16|6|14|9|1|12|7|15'['split']('|'), _0x204c9c = 0;
                while (!![]) {
                    switch (_0x11c972[_0x204c9c++]) {
                    case '0':
                        var _0xddecca = this['loader'];
                        continue;
                    case '1':
                        for (var _0x2064ec = 0; _0x2064ec < _0x43812b['length']; _0x2064ec++) {
                            var _0x11816b = '2|5|4|0|1|3'['split']('|'), _0x556027 = 0;
                            while (!![]) {
                                switch (_0x11816b[_0x556027++]) {
                                case '0':
                                    this['addToMultiFile'](_0x4dc920);
                                    continue;
                                case '1':
                                    _0xddecca['addFile'](_0x4dc920);
                                    continue;
                                case '2':
                                    var _0x48fb19 = _0x43812b[_0x2064ec]['image'];
                                    continue;
                                case '3':
                                    if (_0x43812b[_0x2064ec]['normalMap']) {
                                        var _0x3fb8ca = new ImageFile(_0xddecca, _0x31d638, _0x43812b[_0x2064ec]['normalMap'], _0x397542);
                                        _0x3fb8ca['type'] = 'normalMap';
                                        _0x4dc920['setLink'](_0x3fb8ca);
                                        this['addToMultiFile'](_0x3fb8ca);
                                        _0xddecca['addFile'](_0x3fb8ca);
                                    }
                                    continue;
                                case '4':
                                    var _0x4dc920 = new ImageFile(_0xddecca, _0x31d638, _0x48fb19, _0x397542);
                                    continue;
                                case '5':
                                    var _0x31d638 = _0x5b7c48['CkuQJ']('MA', this['multiKeyIndex']) + '_' + _0x48fb19;
                                    continue;
                                }
                                break;
                            }
                        }
                        continue;
                    case '2':
                        var _0x4ffba3 = _0xddecca['path'];
                        continue;
                    case '3':
                        var _0x1043fd = _0xddecca['baseURL'];
                        continue;
                    case '4':
                        var _0x43812b = file['data']['textures'];
                        continue;
                    case '5':
                        var _0x59e7b0 = _0xddecca['prefix'];
                        continue;
                    case '6':
                        _0xddecca['setBaseURL'](_0x1d3fa0);
                        continue;
                    case '7':
                        _0xddecca['setPath'](_0x4ffba3);
                        continue;
                    case '8':
                        var _0x41632a = this['config'];
                        continue;
                    case '9':
                        _0xddecca['setPrefix'](_0x390abb);
                        continue;
                    case '10':
                        var _0x1d3fa0 = GetFastValue(_0x41632a, 'baseURL', this['baseURL']);
                        continue;
                    case '11':
                        var _0x390abb = GetFastValue(_0x41632a, 'prefix', this['prefix']);
                        continue;
                    case '12':
                        _0xddecca['setBaseURL'](_0x1043fd);
                        continue;
                    case '13':
                        var _0x5f0214 = GetFastValue(_0x41632a, 'path', this['path']);
                        continue;
                    case '14':
                        _0xddecca['setPath'](_0x5f0214);
                        continue;
                    case '15':
                        _0xddecca['setPrefix'](_0x59e7b0);
                        continue;
                    case '16':
                        var _0x397542 = GetFastValue(_0x41632a, 'textureXhrSettings');
                        continue;
                    }
                    break;
                }
            }
        }
        var _0x208789 = new JSONFile(_0x5460b9, _0x45b0ad, _0x5dbf6e, _0x167b34);
        MultiFile['call'](this, _0x5460b9, 'multiatlas', _0x45b0ad, [_0x208789]);
        this['config']['path'] = _0x3188ce;
        this['config']['baseURL'] = _0x1ef554;
        this['config']['textureXhrSettings'] = _0x514ddf;
    },
    'onFileComplete': function (_0x2dadd5) {
        var _0x9520c8 = this['files']['indexOf'](_0x2dadd5);
        if (_0x9520c8 !== -1) {
            if ('GOKpG' === 'GOKpG') {
                this['pending']--;
                if (_0x2dadd5['type'] === 'json' && _0x2dadd5['data']['hasOwnProperty']('textures')) {
                    var _0x3dd38a = _0x2dadd5['data']['textures'];
                    var _0xa6123 = this['config'];
                    var _0x221bd9 = this['loader'];
                    var _0x34d3d9 = _0x221bd9['baseURL'];
                    var _0x18e902 = _0x221bd9['path'];
                    var _0x3a703f = _0x221bd9['prefix'];
                    var _0x17b505 = GetFastValue(_0xa6123, 'baseURL', this['baseURL']);
                    var _0x5956f6 = GetFastValue(_0xa6123, 'path', this['path']);
                    var _0x3a70c1 = GetFastValue(_0xa6123, 'prefix', this['prefix']);
                    var _0x2af7f0 = GetFastValue(_0xa6123, 'textureXhrSettings');
                    _0x221bd9['setBaseURL'](_0x17b505);
                    _0x221bd9['setPath'](_0x5956f6);
                    _0x221bd9['setPrefix'](_0x3a70c1);
                    for (var _0x11a169 = 0; _0x11a169 < _0x3dd38a['length']; _0x11a169++) {
                        var _0x567066 = _0x3dd38a[_0x11a169]['image'];
                        var _0x352143 = 'MA' + this['multiKeyIndex'] + '_' + _0x567066;
                        var _0x1c5c0c = new ImageFile(_0x221bd9, _0x352143, _0x567066, _0x2af7f0);
                        this['addToMultiFile'](_0x1c5c0c);
                        _0x221bd9['addFile'](_0x1c5c0c);
                        if (_0x3dd38a[_0x11a169]['normalMap']) {
                            if ('whgmv' !== 'wuahD') {
                                var _0x3ec537 = '4|2|0|1|3'['split']('|'), _0x44b1b8 = 0;
                                while (!![]) {
                                    switch (_0x3ec537[_0x44b1b8++]) {
                                    case '0':
                                        _0x1c5c0c['setLink'](_0x2d6eab);
                                        continue;
                                    case '1':
                                        this['addToMultiFile'](_0x2d6eab);
                                        continue;
                                    case '2':
                                        _0x2d6eab['type'] = 'normalMap';
                                        continue;
                                    case '3':
                                        _0x221bd9['addFile'](_0x2d6eab);
                                        continue;
                                    case '4':
                                        var _0x2d6eab = new ImageFile(_0x221bd9, _0x352143, _0x3dd38a[_0x11a169]['normalMap'], _0x2af7f0);
                                        continue;
                                    }
                                    break;
                                }
                            } else {
                                normalMaps['push'](_0x2dadd5['linkFile']['data']);
                            }
                        }
                    }
                    _0x221bd9['setBaseURL'](_0x34d3d9);
                    _0x221bd9['setPath'](_0x18e902);
                    _0x221bd9['setPrefix'](_0x3a703f);
                }
            } else {
                normalMaps = undefined;
            }
        }
    },
    'addToCache': function () {
        if (this['isReadyToProcess']()) {
            var _0x56d18e = this['files'][0];
            var _0xd5872c = [];
            var _0x3624a4 = [];
            var _0x14f86c = [];
            for (var _0xbf7ce1 = 1; _0xbf7ce1 < this['files']['length']; _0xbf7ce1++) {
                var _0x3246ae = this['files'][_0xbf7ce1];
                if (_0x3246ae['type'] === 'normalMap') {
                    continue;
                }
                var _0x323b21 = _0x3246ae['key']['indexOf']('_');
                var _0xa9b1e4 = _0x3246ae['key']['substr'](_0x323b21 + 1);
                var _0x4ba20f = _0x3246ae['data'];
                for (var _0x212984 = 0; _0x212984 < _0x56d18e['data']['textures']['length']; _0x212984++) {
                    var _0x131c0e = _0x56d18e['data']['textures'][_0x212984];
                    if (_0x131c0e['image'] === _0xa9b1e4) {
                        _0x3624a4['push'](_0x4ba20f);
                        _0xd5872c['push'](_0x131c0e);
                        if (_0x3246ae['linkFile']) {
                            _0x14f86c['push'](_0x3246ae['linkFile']['data']);
                        }
                        break;
                    }
                }
            }
            if (_0x14f86c['length'] === 0) {
                if ('McWtC' !== 'McWtC') {
                    for (var _0x25335e = 0; _0x25335e < _0xa9b1e4['length']; _0x25335e++) {
                        multifile = new MultiAtlasFile(this, _0xa9b1e4[_0x25335e]);
                        this['addFile'](multifile['files']);
                    }
                } else {
                    _0x14f86c = undefined;
                }
            }
            this['loader']['textureManager']['addAtlasJSONArray'](this['key'], _0x3624a4, _0xd5872c, _0x14f86c);
            this['complete'] = !![];
            for (_0xbf7ce1 = 0; _0xbf7ce1 < this['files']['length']; _0xbf7ce1++) {
                if ('iMFaH' === 'UDmej') {
                    if (IsPlainObject(_0xa9b1e4)) {
                        var _0x3bdfa9 = '4|1|3|5|2|0|6'['split']('|'), _0x25f6b6 = 0;
                        while (!![]) {
                            switch (_0x3bdfa9[_0x25f6b6++]) {
                            case '0':
                                baseURL = GetFastValue(_0x286f69, 'baseURL');
                                continue;
                            case '1':
                                _0xa9b1e4 = GetFastValue(_0x286f69, 'key');
                                continue;
                            case '2':
                                path = GetFastValue(_0x286f69, 'path');
                                continue;
                            case '3':
                                if (GetFastValue(_0x286f69, 'url', ![])) {
                                    atlasURL = GetFastValue(_0x286f69, 'url');
                                } else {
                                    atlasURL = GetFastValue(_0x286f69, 'atlasURL');
                                }
                                continue;
                            case '4':
                                var _0x286f69 = _0xa9b1e4;
                                continue;
                            case '5':
                                atlasXhrSettings = GetFastValue(_0x286f69, 'xhrSettings');
                                continue;
                            case '6':
                                textureXhrSettings = GetFastValue(_0x286f69, 'textureXhrSettings');
                                continue;
                            }
                            break;
                        }
                    }
                    var _0x47310e = new JSONFile(loader, _0xa9b1e4, atlasURL, atlasXhrSettings);
                    MultiFile['call'](this, loader, 'multiatlas', _0xa9b1e4, [_0x47310e]);
                    this['config']['path'] = path;
                    this['config']['baseURL'] = baseURL;
                    this['config']['textureXhrSettings'] = textureXhrSettings;
                } else {
                    this['files'][_0xbf7ce1]['pendingDestroy']();
                }
            }
        }
    }
});
FileTypesManager['register']('multiatlas', function (_0x3dae66, _0x2ff765, _0x3aa6e8, _0x24fda6, _0x4aa21b) {
    var _0x471847;
    if (Array['isArray'](_0x3dae66)) {
        if ('UJPiW' !== 'UJPiW') {
            _0x2ff765 = GetFastValue(config, 'url');
        } else {
            for (var _0x323c7c = 0; _0x323c7c < _0x3dae66['length']; _0x323c7c++) {
                _0x471847 = new MultiAtlasFile(this, _0x3dae66[_0x323c7c]);
                this['addFile'](_0x471847['files']);
            }
        }
    } else {
        _0x471847 = new MultiAtlasFile(this, _0x3dae66, _0x2ff765, _0x3aa6e8, _0x24fda6, _0x4aa21b);
        this['addFile'](_0x471847['files']);
    }
    return this;
});
module['exports'] = MultiAtlasFile;