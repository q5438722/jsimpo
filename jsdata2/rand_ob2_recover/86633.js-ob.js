var Class = require(_0x577195(163)), FileTypesManager = require(_0x577195(164)), GetFastValue = require(_0x577195(165)), ImageFile = require(_0x577195(166)), IsPlainObject = require('../../utils/object/IsPlainObject'), JSONFile = require(_0x577195(167)), MultiFile = require(_0x577195(168)), MultiAtlasFile = new Class({
        'Extends': MultiFile,
        'initialize': function MultiAtlasFile(_0x5b511d, _0x1a6e17, _0x3faf18, _0x5915cf, _0x4a817f, _0x3e7724, _0x124bdc) {
            var _0x2003dd = _0x577195;
            if (IsPlainObject(_0x1a6e17)) {
                var _0x380e22 = _0x1a6e17;
                _0x1a6e17 = GetFastValue(_0x380e22, _0x2003dd(169)), GetFastValue(_0x380e22, _0x2003dd(170), ![]) ? _0x3faf18 = GetFastValue(_0x380e22, _0x2003dd(170)) : _0x3faf18 = GetFastValue(_0x380e22, _0x2003dd(171)), _0x3e7724 = GetFastValue(_0x380e22, _0x2003dd(172)), _0x5915cf = GetFastValue(_0x380e22, _0x2003dd(173)), _0x4a817f = GetFastValue(_0x380e22, 'baseURL'), _0x124bdc = GetFastValue(_0x380e22, 'textureXhrSettings');
            }
            var _0x3cc30e = new JSONFile(_0x5b511d, _0x1a6e17, _0x3faf18, _0x3e7724);
            MultiFile[_0x2003dd(174)](this, _0x5b511d, 'multiatlas', _0x1a6e17, [_0x3cc30e]), this[_0x2003dd(175)][_0x2003dd(173)] = _0x5915cf, this['config']['baseURL'] = _0x4a817f, this[_0x2003dd(175)][_0x2003dd(176)] = _0x124bdc;
        },
        'onFileComplete': function (_0x44043c) {
            var _0x26157b = _0x577195, _0x26a280 = this[_0x26157b(177)][_0x26157b(178)](_0x44043c);
            if (_0x26a280 !== -1) {
                this[_0x26157b(179)]--;
                if (_0x44043c[_0x26157b(180)] === 'json' && _0x44043c[_0x26157b(181)]['hasOwnProperty'](_0x26157b(182))) {
                    var _0x46007d = _0x44043c[_0x26157b(181)][_0x26157b(182)], _0x12de99 = this['config'], _0x1500fb = this[_0x26157b(183)], _0xe54be7 = _0x1500fb[_0x26157b(184)], _0x196590 = _0x1500fb['path'], _0x1604af = _0x1500fb[_0x26157b(185)], _0x8d6879 = GetFastValue(_0x12de99, _0x26157b(184), this[_0x26157b(184)]), _0x1af0af = GetFastValue(_0x12de99, 'path', this[_0x26157b(173)]), _0x2fbbcf = GetFastValue(_0x12de99, _0x26157b(185), this['prefix']), _0x1b0fbb = GetFastValue(_0x12de99, _0x26157b(176));
                    _0x1500fb[_0x26157b(186)](_0x8d6879), _0x1500fb[_0x26157b(187)](_0x1af0af), _0x1500fb[_0x26157b(188)](_0x2fbbcf);
                    for (var _0x3dc15a = 0; _0x3dc15a < _0x46007d['length']; _0x3dc15a++) {
                        var _0x272eac = _0x46007d[_0x3dc15a][_0x26157b(189)], _0x3a878a = 'MA' + this[_0x26157b(190)] + '_' + _0x272eac, _0x5cc798 = new ImageFile(_0x1500fb, _0x3a878a, _0x272eac, _0x1b0fbb);
                        this[_0x26157b(191)](_0x5cc798), _0x1500fb[_0x26157b(192)](_0x5cc798);
                        if (_0x46007d[_0x3dc15a]['normalMap']) {
                            var _0x33427a = new ImageFile(_0x1500fb, _0x3a878a, _0x46007d[_0x3dc15a][_0x26157b(193)], _0x1b0fbb);
                            _0x33427a['type'] = 'normalMap', _0x5cc798[_0x26157b(194)](_0x33427a), this[_0x26157b(191)](_0x33427a), _0x1500fb[_0x26157b(192)](_0x33427a);
                        }
                    }
                    _0x1500fb[_0x26157b(186)](_0xe54be7), _0x1500fb[_0x26157b(187)](_0x196590), _0x1500fb[_0x26157b(188)](_0x1604af);
                }
            }
        },
        'addToCache': function () {
            var _0x3d4801 = _0x577195;
            if (this[_0x3d4801(195)]()) {
                var _0x58c2fd = this[_0x3d4801(177)][0], _0x41dea7 = [], _0x2f07a4 = [], _0x449863 = [];
                for (var _0x487096 = 1; _0x487096 < this['files'][_0x3d4801(196)]; _0x487096++) {
                    var _0x26dbf9 = this['files'][_0x487096];
                    if (_0x26dbf9[_0x3d4801(180)] === _0x3d4801(193))
                        continue;
                    var _0x24ab7d = _0x26dbf9[_0x3d4801(169)][_0x3d4801(178)]('_'), _0x2c9350 = _0x26dbf9[_0x3d4801(169)][_0x3d4801(197)](_0x24ab7d + 1), _0x9695b9 = _0x26dbf9[_0x3d4801(181)];
                    for (var _0x22a917 = 0; _0x22a917 < _0x58c2fd[_0x3d4801(181)]['textures'][_0x3d4801(196)]; _0x22a917++) {
                        var _0x2699da = _0x58c2fd[_0x3d4801(181)][_0x3d4801(182)][_0x22a917];
                        if (_0x2699da[_0x3d4801(189)] === _0x2c9350) {
                            _0x2f07a4[_0x3d4801(198)](_0x9695b9), _0x41dea7[_0x3d4801(198)](_0x2699da);
                            _0x26dbf9[_0x3d4801(199)] && _0x449863[_0x3d4801(198)](_0x26dbf9['linkFile'][_0x3d4801(181)]);
                            break;
                        }
                    }
                }
                _0x449863[_0x3d4801(196)] === 0 && (_0x449863 = undefined);
                this[_0x3d4801(183)][_0x3d4801(200)][_0x3d4801(201)](this['key'], _0x2f07a4, _0x41dea7, _0x449863), this[_0x3d4801(202)] = !![];
                for (_0x487096 = 0; _0x487096 < this[_0x3d4801(177)]['length']; _0x487096++) {
                    this[_0x3d4801(177)][_0x487096]['pendingDestroy']();
                }
            }
        }
    });
function _0x3f30(_0x3b45b7, _0x4202c8) {
    return _0x3f30 = function (_0x65feef, _0x3f3087) {
        _0x65feef = _0x65feef - 154;
        var _0x3757e8 = _0x65fe[_0x65feef];
        return _0x3757e8;
    }, _0x3f30(_0x3b45b7, _0x4202c8);
}
FileTypesManager[_0x577195(203)](_0x577195(204), function (_0x1ae4e2, _0x597176, _0x53d896, _0x5a5e51, _0x40920c) {
    var _0x93b574 = _0x577195, _0x320d7f;
    if (Array[_0x93b574(205)](_0x1ae4e2))
        for (var _0x7a4b71 = 0; _0x7a4b71 < _0x1ae4e2['length']; _0x7a4b71++) {
            _0x320d7f = new MultiAtlasFile(this, _0x1ae4e2[_0x7a4b71]), this[_0x93b574(192)](_0x320d7f['files']);
        }
    else
        _0x320d7f = new MultiAtlasFile(this, _0x1ae4e2, _0x597176, _0x53d896, _0x5a5e51, _0x40920c), this[_0x93b574(192)](_0x320d7f['files']);
    return this;
}), module[_0x577195(206)] = MultiAtlasFile;