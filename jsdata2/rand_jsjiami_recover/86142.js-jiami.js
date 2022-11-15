var BlitterRender = require('./BlitterRender');
var Bob = require('./Bob');
var Class = require('../../utils/Class');
var Components = require('../components');
var Frame = require('../../textures/Frame');
var GameObject = require('../GameObject');
var List = require('../../structs/List');
var Blitter = new Class({
    'Extends': GameObject,
    'Mixins': [
        Components['Alpha'],
        Components['BlendMode'],
        Components['Depth'],
        Components['Mask'],
        Components['Pipeline'],
        Components['ScrollFactor'],
        Components['Size'],
        Components['Texture'],
        Components['Transform'],
        Components['Visible'],
        BlitterRender
    ],
    'initialize': function Blitter(_0x3cbacc, _0x3a68b6, _0x4f03c3, _0x3980ae, _0x54fa7a) {
        GameObject['call'](this, _0x3cbacc, 'Blitter');
        this['setTexture'](_0x3980ae, _0x54fa7a);
        this['setPosition'](_0x3a68b6, _0x4f03c3);
        this['initPipeline']();
        this['children'] = new List();
        this['renderList'] = [];
        this['dirty'] = ![];
    },
    'create': function (_0x3bec8a, _0x54c063, _0x504256, _0x1327ea, _0x9c0fa1) {
        if (_0x1327ea === undefined) {
            if ('LXUmT' !== 'LXUmT') {
                _0x504256 = this['texture']['get'](_0x504256);
            } else {
                _0x1327ea = !![];
            }
        }
        if (_0x9c0fa1 === undefined) {
            if ('WFKui' === 'xidAP') {
                _0x1327ea = !![];
            } else {
                _0x9c0fa1 = this['children']['length'];
            }
        }
        if (_0x504256 === undefined) {
            _0x504256 = this['frame'];
        } else if (!(_0x504256 instanceof Frame)) {
            _0x504256 = this['texture']['get'](_0x504256);
        }
        var _0x21a384 = new Bob(this, _0x3bec8a, _0x54c063, _0x504256, _0x1327ea);
        this['children']['addAt'](_0x21a384, _0x9c0fa1, ![]);
        this['dirty'] = !![];
        return _0x21a384;
    },
    'createFromCallback': function (_0x5b95ab, _0x957f7d, _0x212a22, _0x1fe86a) {
        var _0x4bb03d = this['createMultiple'](_0x957f7d, _0x212a22, _0x1fe86a);
        for (var _0x2fd565 = 0; _0x2fd565 < _0x4bb03d['length']; _0x2fd565++) {
            var _0x35328e = _0x4bb03d[_0x2fd565];
            _0x5b95ab['call'](this, _0x35328e, _0x2fd565);
        }
        return _0x4bb03d;
    },
    'createMultiple': function (_0x50f471, _0x31cda0, _0x23cc6f) {
        if (_0x31cda0 === undefined) {
            _0x31cda0 = this['frame']['name'];
        }
        if (_0x23cc6f === undefined) {
            _0x23cc6f = !![];
        }
        if (!Array['isArray'](_0x31cda0)) {
            if ('Qggoq' !== 'HGyjT') {
                _0x31cda0 = [_0x31cda0];
            } else {
                var _0x4fb7a7 = _0x390984[i];
                callback['call'](this, _0x4fb7a7, i);
            }
        }
        var _0x390984 = [];
        var _0x7f455b = this;
        _0x31cda0['forEach'](function (_0x4445c6) {
            if ('MZFiD' !== 'MZFiD') {
                _0x31cda0 = [_0x31cda0];
            } else {
                for (var _0x1199f6 = 0; _0x1199f6 < _0x50f471; _0x1199f6++) {
                    _0x390984['push'](_0x7f455b['create'](0, 0, _0x4445c6, _0x23cc6f));
                }
            }
        });
        return _0x390984;
    },
    'childCanRender': function (_0x2b883a) {
        return _0x2b883a['visible'] && _0x2b883a['alpha'] > 0;
    },
    'getRenderList': function () {
        if (this['dirty']) {
            if ('lydwB' !== 'lydwB') {
                this['children']['destroy']();
                this['renderList'] = [];
            } else {
                this['renderList'] = this['children']['list']['filter'](this['childCanRender'], this);
                this['dirty'] = ![];
            }
        }
        return this['renderList'];
    },
    'clear': function () {
        this['children']['removeAll']();
        this['dirty'] = !![];
    },
    'preDestroy': function () {
        this['children']['destroy']();
        this['renderList'] = [];
    }
});
module['exports'] = Blitter;