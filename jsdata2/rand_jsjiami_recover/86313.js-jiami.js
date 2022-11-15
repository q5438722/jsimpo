var AddToDOM = require('../../dom/AddToDOM');
var CanvasPool = require('../../display/canvas/CanvasPool');
var Class = require('../../utils/Class');
var Components = require('../components');
var GameEvents = require('../../core/events');
var GameObject = require('../GameObject');
var GetTextSize = require('./GetTextSize');
var GetValue = require('../../utils/object/GetValue');
var RemoveFromDOM = require('../../dom/RemoveFromDOM');
var TextRender = require('./TextRender');
var TextStyle = require('./TextStyle');
var Text = new Class({
    'Extends': GameObject,
    'Mixins': [
        Components['Alpha'],
        Components['BlendMode'],
        Components['ComputedSize'],
        Components['Crop'],
        Components['Depth'],
        Components['Flip'],
        Components['GetBounds'],
        Components['Mask'],
        Components['Origin'],
        Components['Pipeline'],
        Components['ScrollFactor'],
        Components['Tint'],
        Components['Transform'],
        Components['Visible'],
        TextRender
    ],
    'initialize': function Text(_0x17b13b, _0x437289, _0x2ce192, _0x350e7c, _0x269da5) {
        if (_0x437289 === undefined) {
            _0x437289 = 0;
        }
        if (_0x2ce192 === undefined) {
            if ('kiokP' !== 'szDOn') {
                _0x2ce192 = 0;
            } else {
                this['_text'] = value['toString']();
                this['updateText']();
            }
        }
        GameObject['call'](this, _0x17b13b, 'Text');
        this['renderer'] = _0x17b13b['sys']['renderer'];
        this['setPosition'](_0x437289, _0x2ce192);
        this['setOrigin'](0, 0);
        this['initPipeline']();
        this['canvas'] = CanvasPool['create'](this);
        this['context'] = this['canvas']['getContext']('2d');
        this['style'] = new TextStyle(this, _0x269da5);
        this['autoRound'] = !![];
        this['splitRegExp'] = /(?:\r\n|\r|\n)/;
        this['_text'] = undefined;
        this['padding'] = {
            'left': 0,
            'right': 0,
            'top': 0,
            'bottom': 0
        };
        this['width'] = 1;
        this['height'] = 1;
        this['lineSpacing'] = 0;
        this['dirty'] = ![];
        if (this['style']['resolution'] === 0) {
            this['style']['resolution'] = 1;
        }
        this['_crop'] = this['resetCropObject']();
        this['texture'] = _0x17b13b['sys']['textures']['addCanvas'](null, this['canvas'], !![]);
        this['frame'] = this['texture']['get']();
        this['frame']['source']['resolution'] = this['style']['resolution'];
        if (this['renderer'] && this['renderer']['gl']) {
            this['renderer']['deleteTexture'](this['frame']['source']['glTexture']);
            this['frame']['source']['glTexture'] = null;
        }
        this['initRTL']();
        this['setText'](_0x350e7c);
        if (_0x269da5 && _0x269da5['padding']) {
            this['setPadding'](_0x269da5['padding']);
        }
        if (_0x269da5 && _0x269da5['lineSpacing']) {
            this['setLineSpacing'](_0x269da5['lineSpacing']);
        }
        _0x17b13b['sys']['game']['events']['on'](GameEvents['CONTEXT_RESTORED'], function () {
            this['dirty'] = !![];
        }, this);
    },
    'initRTL': function () {
        if (!this['style']['rtl']) {
            if ('uyGaA' === 'jrelY') {
                this['style']['resolution'] = 1;
            } else {
                return;
            }
        }
        this['canvas']['dir'] = 'rtl';
        this['context']['direction'] = 'rtl';
        this['canvas']['style']['display'] = 'none';
        AddToDOM(this['canvas'], this['scene']['sys']['canvas']);
        this['originX'] = 1;
    },
    'runWordWrap': function (_0x5e3868) {
        var _0x43548d = this['style'];
        if (_0x43548d['wordWrapCallback']) {
            var _0xed82c9 = _0x43548d['wordWrapCallback']['call'](_0x43548d['wordWrapCallbackScope'], _0x5e3868, this);
            if (Array['isArray'](_0xed82c9)) {
                _0xed82c9 = _0xed82c9['join']('\n');
            }
            return _0xed82c9;
        } else if (_0x43548d['wordWrapWidth']) {
            if (_0x43548d['wordWrapUseAdvanced']) {
                if ('iEnuL' === 'iEnuL') {
                    return this['advancedWordWrap'](_0x5e3868, this['context'], this['style']['wordWrapWidth']);
                } else {
                    left = 0;
                }
            } else {
                if ('KYpZe' === 'sPEsK') {
                    value = value['join']('\n');
                } else {
                    return this['basicWordWrap'](_0x5e3868, this['context'], this['style']['wordWrapWidth']);
                }
            }
        } else {
            return _0x5e3868;
        }
    },
    'advancedWordWrap': function (_0x30eb7d, _0x42f706, _0x305623) {
        var _0x5a21c0 = '';
        var _0x2621f3 = _0x30eb7d['replace'](/ +/gi, ' ')['split'](this['splitRegExp']);
        var _0x579a1b = _0x2621f3['length'];
        for (var _0x16deea = 0; _0x16deea < _0x579a1b; _0x16deea++) {
            var _0x1d27dc = _0x2621f3[_0x16deea];
            var _0x9fc861 = '';
            _0x1d27dc = _0x1d27dc['replace'](/^ *|\s*$/gi, '');
            var _0x13fd49 = _0x42f706['measureText'](_0x1d27dc)['width'];
            if (_0x13fd49 < _0x305623) {
                if ('PNvrF' !== 'IZMcU') {
                    _0x5a21c0 += _0x1d27dc + '\n';
                    continue;
                } else {
                    top = left;
                }
            }
            var _0x28f7f6 = _0x305623;
            var _0x226944 = _0x1d27dc['split'](' ');
            for (var _0x1be0ef = 0; _0x1be0ef < _0x226944['length']; _0x1be0ef++) {
                if ('WSRMt' === 'WSRMt') {
                    var _0x356d9a = _0x226944[_0x1be0ef];
                    var _0x1eaf35 = _0x356d9a + ' ';
                    var _0x5d40ab = _0x42f706['measureText'](_0x1eaf35)['width'];
                    if (_0x5d40ab > _0x28f7f6) {
                        if (_0x1be0ef === 0) {
                            if ('nfZDK' === 'nfZDK') {
                                var _0x48c860 = _0x1eaf35;
                                while (_0x48c860['length']) {
                                    _0x48c860 = _0x48c860['slice'](0, -1);
                                    _0x5d40ab = _0x42f706['measureText'](_0x48c860)['width'];
                                    if (_0x5d40ab <= _0x28f7f6) {
                                        break;
                                    }
                                }
                                if (!_0x48c860['length']) {
                                    throw new Error('This text\'s wordWrapWidth setting is less than a single character!');
                                }
                                var _0x5a5d4e = _0x356d9a['substr'](_0x48c860['length']);
                                _0x226944[_0x1be0ef] = _0x5a5d4e;
                                _0x9fc861 += _0x48c860;
                            } else {
                                if (_0x1be0ef > 0) {
                                    result += '\n';
                                    spaceLeft = _0x305623;
                                }
                            }
                        }
                        var _0x4ac921 = _0x226944[_0x1be0ef]['length'] ? _0x1be0ef : _0x1be0ef + 1;
                        var _0x25fb29 = _0x226944['slice'](_0x4ac921)['join'](' ')['replace'](/[ \n]*$/gi, '');
                        _0x2621f3[_0x16deea + 1] = _0x2d5a83['DNKUC'](_0x25fb29, ' ') + (_0x2621f3[_0x16deea + 1] || '');
                        _0x579a1b = _0x2621f3['length'];
                        break;
                    } else {
                        _0x9fc861 += _0x1eaf35;
                        _0x28f7f6 -= _0x5d40ab;
                    }
                } else {
                    _0x42f706['fillStyle'] = style['backgroundColor'];
                    _0x42f706['fillRect'](0, 0, w, h);
                }
            }
            _0x5a21c0 += _0x9fc861['replace'](/[ \n]*$/gi, '') + '\n';
        }
        _0x5a21c0 = _0x5a21c0['replace'](/[\s|\n]*$/gi, '');
        return _0x5a21c0;
    },
    'basicWordWrap': function (_0x19da60, _0x40a56c, _0x394c01) {
        var _0x4da1c6 = '';
        var _0x1309e0 = _0x19da60['split'](this['splitRegExp']);
        var _0xae907 = _0x1309e0['length'] - 1;
        var _0x4d0ce9 = _0x40a56c['measureText'](' ')['width'];
        for (var _0x571d57 = 0; _0x571d57 <= _0xae907; _0x571d57++) {
            var _0x5040e9 = _0x394c01;
            var _0x81384d = _0x1309e0[_0x571d57]['split'](' ');
            var _0x30a40c = _0x81384d['length'] - 1;
            for (var _0x265b8d = 0; _0x265b8d <= _0x30a40c; _0x265b8d++) {
                if ('hgDNy' === 'iksLm') {
                    this['renderer']['deleteTexture'](this['frame']['source']['glTexture']);
                    this['frame']['source']['glTexture'] = null;
                } else {
                    var _0x127cbc = _0x81384d[_0x265b8d];
                    var _0x591550 = _0x40a56c['measureText'](_0x127cbc)['width'];
                    var _0x540ec3 = _0x591550;
                    if (_0x265b8d < _0x30a40c) {
                        _0x540ec3 += _0x4d0ce9;
                    }
                    if (_0x540ec3 > _0x5040e9) {
                        if (_0x265b8d > 0) {
                            _0x4da1c6 += '\n';
                            _0x5040e9 = _0x394c01;
                        }
                    }
                    _0x4da1c6 += _0x127cbc;
                    if (_0x265b8d < _0x30a40c) {
                        if ('ZEqTO' === 'jKYdM') {
                            RemoveFromDOM(this['canvas']);
                        } else {
                            _0x4da1c6 += ' ';
                            _0x5040e9 -= _0x540ec3;
                        }
                    } else {
                        _0x5040e9 -= _0x591550;
                    }
                }
            }
            if (_0x571d57 < _0xae907) {
                _0x4da1c6 += '\n';
            }
        }
        return _0x4da1c6;
    },
    'getWrappedText': function (_0x128cab) {
        if (_0x128cab === undefined) {
            _0x128cab = this['_text'];
        }
        this['style']['syncFont'](this['canvas'], this['context']);
        var _0x89f2be = this['runWordWrap'](_0x128cab);
        return _0x89f2be['split'](this['splitRegExp']);
    },
    'setText': function (_0x1a30d2) {
        if (!_0x1a30d2 && _0x1a30d2 !== 0) {
            _0x1a30d2 = '';
        }
        if (Array['isArray'](_0x1a30d2)) {
            _0x1a30d2 = _0x1a30d2['join']('\n');
        }
        if (_0x1a30d2 !== this['_text']) {
            this['_text'] = _0x1a30d2['toString']();
            this['updateText']();
        }
        return this;
    },
    'setStyle': function (_0x2bee8c) {
        return this['style']['setStyle'](_0x2bee8c);
    },
    'setFont': function (_0x419933) {
        return this['style']['setFont'](_0x419933);
    },
    'setFontFamily': function (_0x436483) {
        return this['style']['setFontFamily'](_0x436483);
    },
    'setFontSize': function (_0x2ae020) {
        return this['style']['setFontSize'](_0x2ae020);
    },
    'setFontStyle': function (_0x28f34c) {
        return this['style']['setFontStyle'](_0x28f34c);
    },
    'setFixedSize': function (_0x4759ba, _0x46147c) {
        return this['style']['setFixedSize'](_0x4759ba, _0x46147c);
    },
    'setBackgroundColor': function (_0x122e25) {
        return this['style']['setBackgroundColor'](_0x122e25);
    },
    'setFill': function (_0x54b6ac) {
        return this['style']['setFill'](_0x54b6ac);
    },
    'setColor': function (_0x5ec996) {
        return this['style']['setColor'](_0x5ec996);
    },
    'setStroke': function (_0x4aac97, _0x22fe43) {
        return this['style']['setStroke'](_0x4aac97, _0x22fe43);
    },
    'setShadow': function (_0x5b2e80, _0x8bf30c, _0x481da6, _0x13ba7a, _0x5e0680, _0x2dc855) {
        return this['style']['setShadow'](_0x5b2e80, _0x8bf30c, _0x481da6, _0x13ba7a, _0x5e0680, _0x2dc855);
    },
    'setShadowOffset': function (_0x44f6ec, _0x4789a3) {
        return this['style']['setShadowOffset'](_0x44f6ec, _0x4789a3);
    },
    'setShadowColor': function (_0x12ee13) {
        return this['style']['setShadowColor'](_0x12ee13);
    },
    'setShadowBlur': function (_0x20edb1) {
        return this['style']['setShadowBlur'](_0x20edb1);
    },
    'setShadowStroke': function (_0x3e5129) {
        return this['style']['setShadowStroke'](_0x3e5129);
    },
    'setShadowFill': function (_0x34da91) {
        return this['style']['setShadowFill'](_0x34da91);
    },
    'setWordWrapWidth': function (_0x32d855, _0x456f17) {
        return this['style']['setWordWrapWidth'](_0x32d855, _0x456f17);
    },
    'setWordWrapCallback': function (_0x295ecd, _0x2421f0) {
        return this['style']['setWordWrapCallback'](_0x295ecd, _0x2421f0);
    },
    'setAlign': function (_0x47304f) {
        return this['style']['setAlign'](_0x47304f);
    },
    'setResolution': function (_0x28e89b) {
        return this['style']['setResolution'](_0x28e89b);
    },
    'setLineSpacing': function (_0x55a364) {
        this['lineSpacing'] = _0x55a364;
        return this['updateText']();
    },
    'setPadding': function (_0x17159d, _0x318dbb, _0x5c9f6a, _0x383621) {
        if (typeof _0x17159d === 'object') {
            var _0x425828 = _0x17159d;
            var _0x23103b = GetValue(_0x425828, 'x', null);
            if (_0x23103b !== null) {
                if ('KxeNy' === 'XWKlm') {
                    return this['style']['setFontStyle'](style);
                } else {
                    _0x17159d = _0x23103b;
                    _0x5c9f6a = _0x23103b;
                }
            } else {
                _0x17159d = GetValue(_0x425828, 'left', 0);
                _0x5c9f6a = GetValue(_0x425828, 'right', _0x17159d);
            }
            var _0x2fa587 = GetValue(_0x425828, 'y', null);
            if (_0x2fa587 !== null) {
                if ('gPxhB' === 'nxRus') {
                    throw new Error('This text\'s wordWrapWidth setting is less than a single character!');
                } else {
                    _0x318dbb = _0x2fa587;
                    _0x383621 = _0x2fa587;
                }
            } else {
                _0x318dbb = GetValue(_0x425828, 'top', 0);
                _0x383621 = GetValue(_0x425828, 'bottom', _0x318dbb);
            }
        } else {
            if (_0x17159d === undefined) {
                if ('Ufbyz' !== 'rcqqa') {
                    _0x17159d = 0;
                } else {
                    this['setLineSpacing'](style['lineSpacing']);
                }
            }
            if (_0x318dbb === undefined) {
                _0x318dbb = _0x17159d;
            }
            if (_0x5c9f6a === undefined) {
                _0x5c9f6a = _0x17159d;
            }
            if (_0x383621 === undefined) {
                if ('IUbaK' === 'IUbaK') {
                    _0x383621 = _0x318dbb;
                } else {
                    textWidth = textSize['width'];
                }
            }
        }
        this['padding']['left'] = _0x17159d;
        this['padding']['top'] = _0x318dbb;
        this['padding']['right'] = _0x5c9f6a;
        this['padding']['bottom'] = _0x383621;
        return this['updateText']();
    },
    'setMaxLines': function (_0x17b142) {
        return this['style']['setMaxLines'](_0x17b142);
    },
    'updateText': function () {
        var _0x112f90 = this['canvas'];
        var _0x3720d7 = this['context'];
        var _0x316bb9 = this['style'];
        var _0x1390b4 = _0x316bb9['resolution'];
        var _0x715b63 = _0x316bb9['metrics'];
        _0x316bb9['syncFont'](_0x112f90, _0x3720d7);
        var _0x6b1d63 = this['_text'];
        if (_0x316bb9['wordWrapWidth'] || _0x316bb9['wordWrapCallback']) {
            _0x6b1d63 = this['runWordWrap'](this['_text']);
        }
        var _0x4925ce = _0x6b1d63['split'](this['splitRegExp']);
        var _0x33f236 = GetTextSize(this, _0x715b63, _0x4925ce);
        var _0xed94b2 = this['padding'];
        var _0x267d6a;
        if (_0x316bb9['fixedWidth'] === 0) {
            this['width'] = _0x33f236['width'] + _0xed94b2['left'] + _0xed94b2['right'];
            _0x267d6a = _0x33f236['width'];
        } else {
            this['width'] = _0x316bb9['fixedWidth'];
            _0x267d6a = this['width'] - _0xed94b2['left'] - _0xed94b2['right'];
            if (_0x267d6a < _0x33f236['width']) {
                if ('JhmvX' === 'QgEVx') {
                    bottom = top;
                } else {
                    _0x267d6a = _0x33f236['width'];
                }
            }
        }
        if (_0x316bb9['fixedHeight'] === 0) {
            this['height'] = _0x2a87f5['YSwpw'](_0x33f236['height'], _0xed94b2['top']) + _0xed94b2['bottom'];
        } else {
            this['height'] = _0x316bb9['fixedHeight'];
        }
        var _0x1e1aed = this['width'];
        var _0x527d1f = this['height'];
        this['updateDisplayOrigin']();
        _0x1e1aed *= _0x1390b4;
        _0x527d1f *= _0x1390b4;
        _0x1e1aed = Math['max'](_0x1e1aed, 1);
        _0x527d1f = Math['max'](_0x527d1f, 1);
        if (_0x112f90['width'] !== _0x1e1aed || _0x112f90['height'] !== _0x527d1f) {
            if ('Ewgkh' !== 'kntGj') {
                _0x112f90['width'] = _0x1e1aed;
                _0x112f90['height'] = _0x527d1f;
                this['frame']['setSize'](_0x1e1aed, _0x527d1f);
                _0x316bb9['syncFont'](_0x112f90, _0x3720d7);
            } else {
                return this['style']['setWordWrapWidth'](width, useAdvancedWrap);
            }
        } else {
            if ('tncqn' === 'tncqn') {
                _0x3720d7['clearRect'](0, 0, _0x1e1aed, _0x527d1f);
            } else {
                return this['style']['setStroke'](color, thickness);
            }
        }
        _0x3720d7['save']();
        _0x3720d7['scale'](_0x1390b4, _0x1390b4);
        if (_0x316bb9['backgroundColor']) {
            _0x3720d7['fillStyle'] = _0x316bb9['backgroundColor'];
            _0x3720d7['fillRect'](0, 0, _0x1e1aed, _0x527d1f);
        }
        _0x316bb9['syncStyle'](_0x112f90, _0x3720d7);
        _0x3720d7['textBaseline'] = 'alphabetic';
        _0x3720d7['translate'](_0xed94b2['left'], _0xed94b2['top']);
        var _0x13a37b;
        var _0x49883b;
        for (var _0x5271e2 = 0; _0x5271e2 < _0x33f236['lines']; _0x5271e2++) {
            if ('Lqxcf' !== 'Leqgs') {
                var _0x572d69 = '0|5|2|4|6|3|1'['split']('|'), _0x14ddf8 = 0;
                while (!![]) {
                    switch (_0x572d69[_0x14ddf8++]) {
                    case '0':
                        _0x13a37b = _0x316bb9['strokeThickness'] / 2;
                        continue;
                    case '1':
                        if (_0x316bb9['color']) {
                            this['style']['syncShadow'](_0x3720d7, _0x316bb9['shadowFill']);
                            _0x3720d7['fillText'](_0x4925ce[_0x5271e2], _0x13a37b, _0x49883b);
                        }
                        continue;
                    case '2':
                        if (_0x5271e2 > 0) {
                            _0x49883b += _0x33f236['lineSpacing'] * _0x5271e2;
                        }
                        continue;
                    case '3':
                        if (_0x316bb9['strokeThickness']) {
                            this['style']['syncShadow'](_0x3720d7, _0x316bb9['shadowStroke']);
                            _0x3720d7['strokeText'](_0x4925ce[_0x5271e2], _0x13a37b, _0x49883b);
                        }
                        continue;
                    case '4':
                        if (_0x316bb9['rtl']) {
                            _0x13a37b = _0x1e1aed - _0x13a37b;
                        } else if (_0x316bb9['align'] === 'right') {
                            _0x13a37b += _0x267d6a - _0x33f236['lineWidths'][_0x5271e2];
                        } else if (_0x316bb9['align'] === 'center') {
                            _0x13a37b += (_0x267d6a - _0x33f236['lineWidths'][_0x5271e2]) / 2;
                        } else if (_0x316bb9['align'] === 'justify') {
                            var _0x105414 = 0.85;
                            if (_0x33f236['lineWidths'][_0x5271e2] / _0x33f236['width'] >= _0x105414) {
                                var _0x1b082a = _0x33f236['width'] - _0x33f236['lineWidths'][_0x5271e2];
                                var _0x63b705 = _0x3720d7['measureText'](' ')['width'];
                                var _0x59bc5b = _0x4925ce[_0x5271e2]['trim']();
                                var _0x3b377d = _0x59bc5b['split'](' ');
                                _0x1b082a += (_0x4925ce[_0x5271e2]['length'] - _0x59bc5b['length']) * _0x63b705;
                                var _0x333ca0 = Math['floor'](_0x1b082a / _0x63b705);
                                var _0x5cbde8 = 0;
                                while (_0x333ca0 > 0) {
                                    _0x3b377d[_0x5cbde8] += ' ';
                                    _0x5cbde8 = (_0x5cbde8 + 1) % (_0x3b377d['length'] - 1 || 1);
                                    --_0x333ca0;
                                }
                                _0x4925ce[_0x5271e2] = _0x3b377d['join'](' ');
                            }
                        }
                        continue;
                    case '5':
                        _0x49883b = _0x316bb9['strokeThickness'] / 2 + _0x5271e2 * _0x33f236['lineHeight'] + _0x715b63['ascent'];
                        continue;
                    case '6':
                        if (this['autoRound']) {
                            _0x13a37b = Math['round'](_0x13a37b);
                            _0x49883b = Math['round'](_0x49883b);
                        }
                        continue;
                    }
                    break;
                }
            } else {
                _0x3b377d[_0x5cbde8] += ' ';
                _0x5cbde8 = (_0x5cbde8 + 1) % (_0x3b377d['length'] - 1 || 1);
                --_0x333ca0;
            }
        }
        _0x3720d7['restore']();
        if (this['renderer'] && this['renderer']['gl']) {
            this['frame']['source']['glTexture'] = this['renderer']['canvasToTexture'](_0x112f90, this['frame']['source']['glTexture'], !![]);
            this['frame']['glTexture'] = this['frame']['source']['glTexture'];
        }
        this['dirty'] = !![];
        var _0x19d9cc = this['input'];
        if (_0x19d9cc && !_0x19d9cc['customHitArea']) {
            _0x19d9cc['hitArea']['width'] = this['width'];
            _0x19d9cc['hitArea']['height'] = this['height'];
        }
        return this;
    },
    'getTextMetrics': function () {
        return this['style']['getTextMetrics']();
    },
    'text': {
        'get': function () {
            return this['_text'];
        },
        'set': function (_0x1573d1) {
            this['setText'](_0x1573d1);
        }
    },
    'toJSON': function () {
        var _0x2e62e0 = Components['ToJSON'](this);
        var _0x5042a4 = {
            'autoRound': this['autoRound'],
            'text': this['_text'],
            'style': this['style']['toJSON'](),
            'padding': {
                'left': this['padding']['left'],
                'right': this['padding']['right'],
                'top': this['padding']['top'],
                'bottom': this['padding']['bottom']
            }
        };
        _0x2e62e0['data'] = _0x5042a4;
        return _0x2e62e0;
    },
    'preDestroy': function () {
        if (this['style']['rtl']) {
            if ('dgHiy' === 'YNqJq') {
                this['width'] = textSize['width'] + padding['left'] + padding['right'];
                textWidth = textSize['width'];
            } else {
                RemoveFromDOM(this['canvas']);
            }
        }
        CanvasPool['remove'](this['canvas']);
        this['texture']['destroy']();
    }
});
module['exports'] = Text;