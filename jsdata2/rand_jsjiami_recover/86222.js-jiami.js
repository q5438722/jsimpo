var Class = require('../../../utils/Class');
var Clamp = require('../../../math/Clamp');
var Components = require('../../components');
var GameObject = require('../../GameObject');
var GetBitmapTextSize = require('../GetBitmapTextSize');
var ParseFromAtlas = require('../ParseFromAtlas');
var ParseXMLBitmapFont = require('../ParseXMLBitmapFont');
var Rectangle = require('../../../geom/rectangle/Rectangle');
var Render = require('./BitmapTextRender');
var BitmapText = new Class({
    'Extends': GameObject,
    'Mixins': [
        Components['Alpha'],
        Components['BlendMode'],
        Components['Depth'],
        Components['Mask'],
        Components['Origin'],
        Components['Pipeline'],
        Components['ScrollFactor'],
        Components['Texture'],
        Components['Tint'],
        Components['Transform'],
        Components['Visible'],
        Render
    ],
    'initialize': function BitmapText(_0x3d0cb7, _0xbca3f4, _0x4a963b, _0x19d6d8, _0x2eb674, _0x2efbfa, _0x244e0e) {
        if (_0x2eb674 === undefined) {
            if ('VjTtt' !== 'VjTtt') {
                _0xbca3f4 = 0;
            } else {
                _0x2eb674 = '';
            }
        }
        if (_0x244e0e === undefined) {
            if ('bXprh' !== 'bXprh') {
                this['_fontSize'] = value;
                this['_dirty'] = !![];
            } else {
                _0x244e0e = 0;
            }
        }
        GameObject['call'](this, _0x3d0cb7, 'BitmapText');
        this['font'] = _0x19d6d8;
        var _0x2e6704 = this['scene']['sys']['cache']['bitmapFont']['get'](_0x19d6d8);
        if (!_0x2e6704) {
            if ('iaATc' !== 'iaATc') {
                var _0xb60a75 = '6|1|4|5|3|0|2'['split']('|'), _0x3e0743 = 0;
                while (!![]) {
                    switch (_0xb60a75[_0x3e0743++]) {
                    case '0':
                        this['setTexture'](_0x2e6704['texture'], _0x2e6704['frame']);
                        continue;
                    case '1':
                        this['fontData'] = _0x2e6704['data'];
                        continue;
                    case '2':
                        GetBitmapTextSize(this, ![], !![], this['_bounds']);
                        continue;
                    case '3':
                        this['fromAtlas'] = _0x2e6704['fromAtlas'] === !![];
                        continue;
                    case '4':
                        this['_fontSize'] = _0x2efbfa;
                        continue;
                    case '5':
                        this['_align'] = _0x244e0e;
                        continue;
                    case '6':
                        this['font'] = key;
                        continue;
                    }
                    break;
                }
            } else {
                console['warn']('Invalid BitmapText key: ' + _0x19d6d8);
            }
        }
        this['fontData'] = _0x2e6704['data'];
        this['_text'] = '';
        this['_fontSize'] = _0x2efbfa || this['fontData']['size'];
        this['_letterSpacing'] = 0;
        this['_align'] = _0x244e0e;
        this['_bounds'] = GetBitmapTextSize();
        this['_dirty'] = !![];
        this['_maxWidth'] = 0;
        this['wordWrapCharCode'] = 32;
        this['charColors'] = [];
        this['dropShadowX'] = 0;
        this['dropShadowY'] = 0;
        this['dropShadowColor'] = 0;
        this['dropShadowAlpha'] = 0.5;
        this['fromAtlas'] = _0x2e6704['fromAtlas'];
        this['setTexture'](_0x2e6704['texture'], _0x2e6704['frame']);
        this['setPosition'](_0xbca3f4, _0x4a963b);
        this['setOrigin'](0, 0);
        this['initPipeline']();
        this['setText'](_0x2eb674);
    },
    'setLeftAlign': function () {
        this['_align'] = BitmapText['ALIGN_LEFT'];
        this['_dirty'] = !![];
        return this;
    },
    'setCenterAlign': function () {
        this['_align'] = BitmapText['ALIGN_CENTER'];
        this['_dirty'] = !![];
        return this;
    },
    'setRightAlign': function () {
        this['_align'] = BitmapText['ALIGN_RIGHT'];
        this['_dirty'] = !![];
        return this;
    },
    'setFontSize': function (_0x3feeb5) {
        this['_fontSize'] = _0x3feeb5;
        this['_dirty'] = !![];
        return this;
    },
    'setLetterSpacing': function (_0x59900f) {
        if (_0x59900f === undefined) {
            if ('RkDnu' === 'UBuWi') {
                align = this['_align'];
            } else {
                _0x59900f = 0;
            }
        }
        this['_letterSpacing'] = _0x59900f;
        this['_dirty'] = !![];
        return this;
    },
    'setText': function (_0x5e37b7) {
        if (!_0x5e37b7 && _0x5e37b7 !== 0) {
            _0x5e37b7 = '';
        }
        if (Array['isArray'](_0x5e37b7)) {
            _0x5e37b7 = _0x5e37b7['join']('\n');
        }
        if (_0x5e37b7 !== this['text']) {
            this['_text'] = _0x5e37b7['toString']();
            this['_dirty'] = !![];
            this['updateDisplayOrigin']();
        }
        return this;
    },
    'setDropShadow': function (_0x220dfb, _0x57a095, _0x3c908d, _0x21c273) {
        if (_0x220dfb === undefined) {
            _0x220dfb = 0;
        }
        if (_0x57a095 === undefined) {
            if ('VAivg' === 'IYQeF') {
                start = 0;
            } else {
                _0x57a095 = 0;
            }
        }
        if (_0x3c908d === undefined) {
            if ('fARsO' === 'WraGf') {
                topLeft = -1;
            } else {
                _0x3c908d = 0;
            }
        }
        if (_0x21c273 === undefined) {
            _0x21c273 = 0.5;
        }
        this['dropShadowX'] = _0x220dfb;
        this['dropShadowY'] = _0x57a095;
        this['dropShadowColor'] = _0x3c908d;
        this['dropShadowAlpha'] = _0x21c273;
        return this;
    },
    'setCharacterTint': function (_0x110c01, _0x4f89b6, _0x208374, _0x25b266, _0x10760b, _0x551ae7, _0xa5b11) {
        if (_0x110c01 === undefined) {
            if ('aPpXq' === 'PmsOW') {
                _0x10760b = _0x25b266;
                _0x551ae7 = _0x25b266;
                _0xa5b11 = _0x25b266;
            } else {
                _0x110c01 = 0;
            }
        }
        if (_0x4f89b6 === undefined) {
            _0x4f89b6 = 1;
        }
        if (_0x208374 === undefined) {
            _0x208374 = ![];
        }
        if (_0x25b266 === undefined) {
            _0x25b266 = -1;
        }
        if (_0x10760b === undefined) {
            _0x10760b = _0x25b266;
            _0x551ae7 = _0x25b266;
            _0xa5b11 = _0x25b266;
        }
        var _0x2d4e36 = this['text']['length'];
        if (_0x4f89b6 === -1) {
            _0x4f89b6 = _0x2d4e36;
        }
        if (_0x110c01 < 0) {
            _0x110c01 = _0x2d4e36 + _0x110c01;
        }
        _0x110c01 = Clamp(_0x110c01, 0, _0x2d4e36 - 1);
        var _0x4ca60b = Clamp(_0x110c01 + _0x4f89b6, _0x110c01, _0x2d4e36);
        var _0x417787 = this['charColors'];
        for (var _0x32d3f1 = _0x110c01; _0x32d3f1 < _0x4ca60b; _0x32d3f1++) {
            var _0x4b7599 = _0x417787[_0x32d3f1];
            if (_0x25b266 === -1) {
                _0x417787[_0x32d3f1] = null;
            } else {
                var _0x55569b = _0x208374 ? 1 : 0;
                if (_0x4b7599) {
                    if ('oADkJ' !== 'wbPMe') {
                        var _0x5b452d = '2|3|0|4|1'['split']('|'), _0x307f23 = 0;
                        while (!![]) {
                            switch (_0x5b452d[_0x307f23++]) {
                            case '0':
                                _0x4b7599['tintTR'] = _0x10760b;
                                continue;
                            case '1':
                                _0x4b7599['tintBR'] = _0xa5b11;
                                continue;
                            case '2':
                                _0x4b7599['tintEffect'] = _0x55569b;
                                continue;
                            case '3':
                                _0x4b7599['tintTL'] = _0x25b266;
                                continue;
                            case '4':
                                _0x4b7599['tintBL'] = _0x551ae7;
                                continue;
                            }
                            break;
                        }
                    } else {
                        return this['_maxWidth'];
                    }
                } else {
                    _0x417787[_0x32d3f1] = {
                        'tintEffect': _0x55569b,
                        'tintTL': _0x25b266,
                        'tintTR': _0x10760b,
                        'tintBL': _0x551ae7,
                        'tintBR': _0xa5b11
                    };
                }
            }
        }
        return this;
    },
    'setWordTint': function (_0x2ec82c, _0x4e0415, _0x1351e5, _0x446dfb, _0x1c4baa, _0x67050, _0x4eab24) {
        if (_0x4e0415 === undefined) {
            if ('pNUCt' === 'pNUCt') {
                _0x4e0415 = 1;
            } else {
                this['_maxWidth'] = value;
                this['_dirty'] = !![];
                if (wordWrapCharCode !== undefined) {
                    this['wordWrapCharCode'] = wordWrapCharCode;
                }
                return this;
            }
        }
        var _0x43344b = this['getTextBounds']();
        var _0x121873 = _0x43344b['words'];
        var _0x5bf6bf = typeof _0x2ec82c === 'number';
        var _0x3422db = 0;
        for (var _0x536c28 = 0; _0x536c28 < _0x121873['length']; _0x536c28++) {
            var _0x417381 = _0x121873[_0x536c28];
            if (_0x5bf6bf && _0x536c28 === _0x2ec82c || !_0x5bf6bf && _0x417381['word'] === _0x2ec82c) {
                this['setCharacterTint'](_0x417381['i'], _0x417381['word']['length'], _0x1351e5, _0x446dfb, _0x1c4baa, _0x67050, _0x4eab24);
                _0x3422db++;
                if (_0x3422db === _0x4e0415) {
                    return this;
                }
            }
        }
        return this;
    },
    'getTextBounds': function (_0x49c6b6) {
        var _0x215fc0 = this['_bounds'];
        if (this['_dirty'] || _0x49c6b6 || this['scaleX'] !== _0x215fc0['scaleX'] || this['scaleY'] !== _0x215fc0['scaleY']) {
            if ('Lzivk' !== 'HeHcj') {
                GetBitmapTextSize(this, _0x49c6b6, !![], _0x215fc0);
                this['_dirty'] = ![];
            } else {
                var _0x3d4d6d = this['scene']['sys']['cache']['bitmapFont']['get'](key);
                if (_0x3d4d6d) {
                    var _0x386e2c = '1|0|5|3|6|2|4'['split']('|'), _0x2b38bd = 0;
                    while (!![]) {
                        switch (_0x386e2c[_0x2b38bd++]) {
                        case '0':
                            this['fontData'] = _0x3d4d6d['data'];
                            continue;
                        case '1':
                            this['font'] = key;
                            continue;
                        case '2':
                            this['setTexture'](_0x3d4d6d['texture'], _0x3d4d6d['frame']);
                            continue;
                        case '3':
                            this['_align'] = align;
                            continue;
                        case '4':
                            GetBitmapTextSize(this, ![], !![], this['_bounds']);
                            continue;
                        case '5':
                            this['_fontSize'] = size;
                            continue;
                        case '6':
                            this['fromAtlas'] = _0x3d4d6d['fromAtlas'] === !![];
                            continue;
                        }
                        break;
                    }
                }
            }
        }
        return _0x215fc0;
    },
    'getCharacterAt': function (_0x3041d9, _0x56c9b4, _0x24c874) {
        var _0x17faa4 = this['getLocalPoint'](_0x3041d9, _0x56c9b4, null, _0x24c874);
        var _0x4ca8ca = this['getTextBounds']();
        var _0x4a0192 = _0x4ca8ca['characters'];
        var _0x3df91e = new Rectangle();
        for (var _0x28e2c9 = 0; _0x28e2c9 < _0x4a0192['length']; _0x28e2c9++) {
            if ('blXvC' === 'blXvC') {
                var _0x1d2df6 = _0x4a0192[_0x28e2c9];
                _0x3df91e['setTo'](_0x1d2df6['x'], _0x1d2df6['t'], _0x1d2df6['r'] - _0x1d2df6['x'], _0x1d2df6['b']);
                if (_0x3df91e['contains'](_0x17faa4['x'], _0x17faa4['y'])) {
                    return _0x1d2df6;
                }
            } else {
                this['_maxWidth'] = value;
                this['_dirty'] = !![];
            }
        }
        return null;
    },
    'updateDisplayOrigin': function () {
        this['_dirty'] = !![];
        this['getTextBounds'](![]);
        return this;
    },
    'setFont': function (_0x50468b, _0x1191ea, _0x3da71a) {
        if (_0x1191ea === undefined) {
            _0x1191ea = this['_fontSize'];
        }
        if (_0x3da71a === undefined) {
            if ('fUUUM' === 'bgadm') {
                alpha = 0.5;
            } else {
                _0x3da71a = this['_align'];
            }
        }
        if (_0x50468b !== this['font']) {
            var _0x24dabf = this['scene']['sys']['cache']['bitmapFont']['get'](_0x50468b);
            if (_0x24dabf) {
                this['font'] = _0x50468b;
                this['fontData'] = _0x24dabf['data'];
                this['_fontSize'] = _0x1191ea;
                this['_align'] = _0x3da71a;
                this['fromAtlas'] = _0x24dabf['fromAtlas'] === !![];
                this['setTexture'](_0x24dabf['texture'], _0x24dabf['frame']);
                GetBitmapTextSize(this, ![], !![], this['_bounds']);
            }
        }
        return this;
    },
    'setMaxWidth': function (_0x12fb1b, _0x5cb7d1) {
        this['_maxWidth'] = _0x12fb1b;
        this['_dirty'] = !![];
        if (_0x5cb7d1 !== undefined) {
            this['wordWrapCharCode'] = _0x5cb7d1;
        }
        return this;
    },
    'align': {
        'set': function (_0x1538f4) {
            this['_align'] = _0x1538f4;
            this['_dirty'] = !![];
        },
        'get': function () {
            return this['_align'];
        }
    },
    'text': {
        'set': function (_0x4233a4) {
            this['setText'](_0x4233a4);
        },
        'get': function () {
            return this['_text'];
        }
    },
    'fontSize': {
        'set': function (_0x17e077) {
            this['_fontSize'] = _0x17e077;
            this['_dirty'] = !![];
        },
        'get': function () {
            return this['_fontSize'];
        }
    },
    'letterSpacing': {
        'set': function (_0x33710d) {
            this['_letterSpacing'] = _0x33710d;
            this['_dirty'] = !![];
        },
        'get': function () {
            return this['_letterSpacing'];
        }
    },
    'maxWidth': {
        'set': function (_0x3eaf24) {
            this['_maxWidth'] = _0x3eaf24;
            this['_dirty'] = !![];
        },
        'get': function () {
            return this['_maxWidth'];
        }
    },
    'width': {
        'get': function () {
            this['getTextBounds'](![]);
            return this['_bounds']['global']['width'];
        }
    },
    'height': {
        'get': function () {
            this['getTextBounds'](![]);
            return this['_bounds']['global']['height'];
        }
    },
    'toJSON': function () {
        var _0x771eea = Components['ToJSON'](this);
        var _0x7e970 = {
            'font': this['font'],
            'text': this['text'],
            'fontSize': this['fontSize'],
            'letterSpacing': this['letterSpacing'],
            'align': this['align']
        };
        _0x771eea['data'] = _0x7e970;
        return _0x771eea;
    },
    'preDestroy': function () {
        this['charColors']['length'] = 0;
        this['_bounds'] = null;
        this['fontData'] = null;
    }
});
BitmapText['ALIGN_LEFT'] = 0;
BitmapText['ALIGN_CENTER'] = 1;
BitmapText['ALIGN_RIGHT'] = 2;
BitmapText['ParseFromAtlas'] = ParseFromAtlas;
BitmapText['ParseXMLBitmapFont'] = ParseXMLBitmapFont;
module['exports'] = BitmapText;