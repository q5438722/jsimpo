var ArrayRemove = require('../../utils/array/Remove');
var CameraEvents = require('../../cameras/2d/events');
var Class = require('../../utils/Class');
var CONST = require('../../const');
var EventEmitter = require('eventemitter3');
var Events = require('../events');
var GameEvents = require('../../core/events');
var IsSizePowerOfTwo = require('../../math/pow2/IsSizePowerOfTwo');
var Matrix4 = require('../../math/Matrix4');
var NOOP = require('../../utils/NOOP');
var PipelineManager = require('./PipelineManager');
var RenderTarget = require('./RenderTarget');
var ScaleEvents = require('../../scale/events');
var TextureEvents = require('../../textures/events');
var Utils = require('./Utils');
var WebGLSnapshot = require('../snapshot/WebGLSnapshot');
var WebGLRenderer = new Class({
    'Extends': EventEmitter,
    'initialize': function WebGLRenderer(_0x3c79b1) {
        var _0x3429fa = '6|8|16|54|0|18|23|20|3|32|7|47|42|53|49|22|15|11|13|28|24|36|19|29|39|10|40|4|57|5|48|26|35|41|50|45|43|1|46|14|12|31|30|34|21|33|2|27|44|38|25|37|55|51|56|9|17|52'['split']('|'), _0x47a4a5 = 0;
        while (!![]) {
            switch (_0x3429fa[_0x47a4a5++]) {
            case '0':
                this['game'] = _0x3c79b1;
                continue;
            case '1':
                this['blankTexture'] = null;
                continue;
            case '2':
                this['nextTypeMatch'] = ![];
                continue;
            case '3':
                this['height'] = 0;
                continue;
            case '4':
                this['contextLostHandler'] = NOOP;
                continue;
            case '5':
                this['gl'] = null;
                continue;
            case '6':
                EventEmitter['call'](this);
                continue;
            case '7':
                this['blendModes'] = [];
                continue;
            case '8':
                var _0x202e84 = _0x3c79b1['config'];
                continue;
            case '9':
                this['projectionWidth'] = 0;
                continue;
            case '10':
                this['currentScissor'] = null;
                continue;
            case '11':
                this['tempTextures'];
                continue;
            case '12':
                this['maskStack'] = [];
                continue;
            case '13':
                this['textureZero'];
                continue;
            case '14':
                this['maskCount'] = 0;
                continue;
            case '15':
                this['textureIndexes'];
                continue;
            case '16':
                var _0x580b47 = {
                    'alpha': _0x202e84['transparent'],
                    'desynchronized': _0x202e84['desynchronized'],
                    'depth': ![],
                    'antialias': _0x202e84['antialiasGL'],
                    'premultipliedAlpha': _0x202e84['premultipliedAlpha'],
                    'stencil': !![],
                    'failIfMajorPerformanceCaveat': _0x202e84['failIfMajorPerformanceCaveat'],
                    'powerPreference': _0x202e84['powerPreference'],
                    'preserveDrawingBuffer': _0x202e84['preserveDrawingBuffer']
                };
                continue;
            case '17':
                this['projectionHeight'] = 0;
                continue;
            case '18':
                this['type'] = CONST['WEBGL'];
                continue;
            case '19':
                this['currentProgram'] = null;
                continue;
            case '20':
                this['width'] = 0;
                continue;
            case '21':
                this['currentType'] = '';
                continue;
            case '22':
                this['maxTextures'] = 0;
                continue;
            case '23':
                this['pipelines'] = null;
                continue;
            case '24':
                this['currentFramebuffer'] = null;
                continue;
            case '25':
                this['isTextureClean'] = ![];
                continue;
            case '26':
                this['instancedArraysExtension'] = null;
                continue;
            case '27':
                this['finalType'] = ![];
                continue;
            case '28':
                this['normalTexture'];
                continue;
            case '29':
                this['currentBlendMode'] = Infinity;
                continue;
            case '30':
                this['currentCameraMask'] = {
                    'mask': null,
                    'camera': null
                };
                continue;
            case '31':
                this['currentMask'] = {
                    'mask': null,
                    'camera': null
                };
                continue;
            case '32':
                this['canvas'] = _0x3c79b1['canvas'];
                continue;
            case '33':
                this['newType'] = ![];
                continue;
            case '34':
                this['glFuncMap'] = null;
                continue;
            case '35':
                this['vaoExtension'] = null;
                continue;
            case '36':
                this['fboStack'] = [];
                continue;
            case '37':
                this['defaultScissor'] = [
                    0,
                    0,
                    0,
                    0
                ];
                continue;
            case '38':
                this['textureFlush'] = 0;
                continue;
            case '39':
                this['currentScissorEnabled'] = ![];
                continue;
            case '40':
                this['scissorStack'] = [];
                continue;
            case '41':
                this['extensions'] = {};
                continue;
            case '42':
                this['snapshotState'] = {
                    'x': 0,
                    'y': 0,
                    'width': 1,
                    'height': 1,
                    'getPixel': ![],
                    'callback': null,
                    'type': 'image/png',
                    'encoder': 0.92,
                    'isFramebuffer': ![],
                    'bufferWidth': 0,
                    'bufferHeight': 0
                };
                continue;
            case '43':
                this['drawingBufferHeight'] = 0;
                continue;
            case '44':
                this['mipmapFilter'] = null;
                continue;
            case '45':
                this['compression'] = {
                    'ETC1': ![],
                    'PVRTC': ![],
                    'S3TC': ![]
                };
                continue;
            case '46':
                this['whiteTexture'] = null;
                continue;
            case '47':
                this['contextLost'] = ![];
                continue;
            case '48':
                this['supportedExtensions'] = null;
                continue;
            case '49':
                this['startActiveTexture'] = 0;
                continue;
            case '50':
                this['glFormats'] = [];
                continue;
            case '51':
                this['renderTarget'] = null;
                continue;
            case '52':
                this['init'](this['config']);
                continue;
            case '53':
                this['currentActiveTexture'] = 0;
                continue;
            case '54':
                this['config'] = {
                    'clearBeforeRender': _0x202e84['clearBeforeRender'],
                    'antialias': _0x202e84['antialias'],
                    'backgroundColor': _0x202e84['backgroundColor'],
                    'contextCreation': _0x580b47,
                    'roundPixels': _0x202e84['roundPixels'],
                    'maxTextures': _0x202e84['maxTextures'],
                    'maxTextureSize': _0x202e84['maxTextureSize'],
                    'batchSize': _0x202e84['batchSize'],
                    'maxLights': _0x202e84['maxLights'],
                    'mipmapFilter': _0x202e84['mipmapFilter']
                };
                continue;
            case '55':
                this['isBooted'] = ![];
                continue;
            case '56':
                this['projectionMatrix'];
                continue;
            case '57':
                this['contextRestoredHandler'] = NOOP;
                continue;
            }
            break;
        }
    },
    'init': function (_0x2bb93e) {
        var _0x112d96;
        var _0x3c9192 = this['game'];
        var _0x38a319 = this['canvas'];
        var _0x3c9ddc = _0x2bb93e['backgroundColor'];
        if (_0x3c9192['config']['context']) {
            if ('zdozw' === 'zdozw') {
                _0x112d96 = _0x3c9192['config']['context'];
            } else {
                var _0x490e4c = '2|0|1|3|4|5'['split']('|'), _0x27f085 = 0;
                while (!![]) {
                    switch (_0x490e4c[_0x27f085++]) {
                    case '0':
                        _0x112d96['activeTexture'](_0x112d96['TEXTURE0'] + _0x7350e1);
                        continue;
                    case '1':
                        _0x112d96['bindTexture'](_0x112d96['TEXTURE_2D'], _0x401362);
                        continue;
                    case '2':
                        var _0x401362 = _0x112d96['createTexture']();
                        continue;
                    case '3':
                        _0x112d96['texImage2D'](_0x112d96['TEXTURE_2D'], 0, _0x112d96['RGBA'], 1, 1, 0, _0x112d96['RGBA'], _0x112d96['UNSIGNED_BYTE'], new Uint8Array([
                            0,
                            0,
                            255,
                            255
                        ]));
                        continue;
                    case '4':
                        _0x50bc39[_0x7350e1] = _0x401362;
                        continue;
                    case '5':
                        this['textureIndexes']['push'](_0x7350e1);
                        continue;
                    }
                    break;
                }
            }
        } else {
            if ('ZRdpz' !== 'ZRdpz') {
                _0x112d96['scissor'](0, this['drawingBufferHeight'] - this['height'], this['width'], this['height']);
            } else {
                _0x112d96 = _0x38a319['getContext']('webgl', _0x2bb93e['contextCreation']) || _0x38a319['getContext']('experimental-webgl', _0x2bb93e['contextCreation']);
            }
        }
        if (!_0x112d96 || _0x112d96['isContextLost']()) {
            if ('dfUHj' !== 'PTSPv') {
                this['contextLost'] = !![];
                throw new Error('WebGL unsupported');
            } else {
                _0x112d96['bindTexture'](_0x112d96['TEXTURE_2D'], currentTexture);
            }
        }
        this['gl'] = _0x112d96;
        var _0x112c3e = this;
        this['contextLostHandler'] = function (_0x303920) {
            _0x112c3e['contextLost'] = !![];
            _0x112c3e['game']['events']['emit'](GameEvents['CONTEXT_LOST'], _0x112c3e);
            _0x303920['preventDefault']();
        };
        this['contextRestoredHandler'] = function () {
            _0x112c3e['contextLost'] = ![];
            _0x112c3e['init'](_0x112c3e['config']);
            _0x112c3e['game']['events']['emit'](GameEvents['CONTEXT_RESTORED'], _0x112c3e);
        };
        _0x38a319['addEventListener']('webglcontextlost', this['contextLostHandler'], ![]);
        _0x38a319['addEventListener']('webglcontextrestored', this['contextRestoredHandler'], ![]);
        _0x3c9192['context'] = _0x112d96;
        for (var _0x39abb7 = 0; _0x39abb7 <= 27; _0x39abb7++) {
            if ('ldlWq' === 'ldlWq') {
                this['blendModes']['push']({
                    'func': [
                        _0x112d96['ONE'],
                        _0x112d96['ONE_MINUS_SRC_ALPHA']
                    ],
                    'equation': _0x112d96['FUNC_ADD']
                });
            } else {
                var _0x2d8fd9 = this['gl'];
                _0x2d8fd9['viewport'](0, 0, this['width'], this['height']);
                this['drawingBufferHeight'] = _0x2d8fd9['drawingBufferHeight'];
            }
        }
        this['blendModes'][1]['func'] = [
            _0x112d96['ONE'],
            _0x112d96['DST_ALPHA']
        ];
        this['blendModes'][2]['func'] = [
            _0x112d96['DST_COLOR'],
            _0x112d96['ONE_MINUS_SRC_ALPHA']
        ];
        this['blendModes'][3]['func'] = [
            _0x112d96['ONE'],
            _0x112d96['ONE_MINUS_SRC_COLOR']
        ];
        this['blendModes'][17] = {
            'func': [
                _0x112d96['ZERO'],
                _0x112d96['ONE_MINUS_SRC_ALPHA']
            ],
            'equation': _0x112d96['FUNC_REVERSE_SUBTRACT']
        };
        this['glFormats'][0] = _0x112d96['BYTE'];
        this['glFormats'][1] = _0x112d96['SHORT'];
        this['glFormats'][2] = _0x112d96['UNSIGNED_BYTE'];
        this['glFormats'][3] = _0x112d96['UNSIGNED_SHORT'];
        this['glFormats'][4] = _0x112d96['FLOAT'];
        this['glFuncMap'] = {
            'mat2': {
                'func': _0x112d96['uniformMatrix2fv'],
                'length': 1,
                'matrix': !![]
            },
            'mat3': {
                'func': _0x112d96['uniformMatrix3fv'],
                'length': 1,
                'matrix': !![]
            },
            'mat4': {
                'func': _0x112d96['uniformMatrix4fv'],
                'length': 1,
                'matrix': !![]
            },
            '1f': {
                'func': _0x112d96['uniform1f'],
                'length': 1
            },
            '1fv': {
                'func': _0x112d96['uniform1fv'],
                'length': 1
            },
            '1i': {
                'func': _0x112d96['uniform1i'],
                'length': 1
            },
            '1iv': {
                'func': _0x112d96['uniform1iv'],
                'length': 1
            },
            '2f': {
                'func': _0x112d96['uniform2f'],
                'length': 2
            },
            '2fv': {
                'func': _0x112d96['uniform2fv'],
                'length': 1
            },
            '2i': {
                'func': _0x112d96['uniform2i'],
                'length': 2
            },
            '2iv': {
                'func': _0x112d96['uniform2iv'],
                'length': 1
            },
            '3f': {
                'func': _0x112d96['uniform3f'],
                'length': 3
            },
            '3fv': {
                'func': _0x112d96['uniform3fv'],
                'length': 1
            },
            '3i': {
                'func': _0x112d96['uniform3i'],
                'length': 3
            },
            '3iv': {
                'func': _0x112d96['uniform3iv'],
                'length': 1
            },
            '4f': {
                'func': _0x112d96['uniform4f'],
                'length': 4
            },
            '4fv': {
                'func': _0x112d96['uniform4fv'],
                'length': 1
            },
            '4i': {
                'func': _0x112d96['uniform4i'],
                'length': 4
            },
            '4iv': {
                'func': _0x112d96['uniform4iv'],
                'length': 1
            }
        };
        var _0x3c7bda = _0x112d96['getSupportedExtensions']();
        if (!_0x2bb93e['maxTextures'] || _0x2bb93e['maxTextures'] === -1) {
            _0x2bb93e['maxTextures'] = _0x112d96['getParameter'](_0x112d96['MAX_TEXTURE_IMAGE_UNITS']);
        }
        if (!_0x2bb93e['maxTextureSize']) {
            _0x2bb93e['maxTextureSize'] = _0x112d96['getParameter'](_0x112d96['MAX_TEXTURE_SIZE']);
        }
        var _0x1849e7 = 'WEBGL_compressed_texture_';
        var _0x36bdc1 = 'WEBKIT_' + _0x1849e7;
        this['compression']['ETC1'] = _0x112d96['getExtension'](_0x1849e7 + 'etc1') || _0x112d96['getExtension'](_0x36bdc1 + 'etc1');
        this['compression']['PVRTC'] = _0x112d96['getExtension'](_0x1849e7 + 'pvrtc') || _0x112d96['getExtension'](_0x36bdc1 + 'pvrtc');
        this['compression']['S3TC'] = _0x112d96['getExtension'](_0x1849e7 + 's3tc') || _0x112d96['getExtension'](_0x36bdc1 + 's3tc');
        this['supportedExtensions'] = _0x3c7bda;
        var _0x25b5ac = 'ANGLE_instanced_arrays';
        this['instancedArraysExtension'] = _0x3c7bda['indexOf'](_0x25b5ac) > -1 ? _0x112d96['getExtension'](_0x25b5ac) : null;
        var _0x5c5470 = 'OES_vertex_array_object';
        this['vaoExtension'] = _0x3c7bda['indexOf'](_0x5c5470) > -1 ? _0x112d96['getExtension'](_0x5c5470) : null;
        _0x112d96['disable'](_0x112d96['DEPTH_TEST']);
        _0x112d96['disable'](_0x112d96['CULL_FACE']);
        _0x112d96['enable'](_0x112d96['BLEND']);
        _0x112d96['clearColor'](_0x3c9ddc['redGL'], _0x3c9ddc['greenGL'], _0x3c9ddc['blueGL'], _0x3c9ddc['alphaGL']);
        this['mipmapFilter'] = _0x112d96[_0x2bb93e['mipmapFilter']];
        this['maxTextures'] = Utils['checkShaderMax'](_0x112d96, _0x2bb93e['maxTextures']);
        this['textureIndexes'] = [];
        var _0x50bc39 = this['tempTextures'];
        if (Array['isArray'](_0x50bc39)) {
            for (var _0x4fe30b = 0; _0x39abb7 < this['maxTextures']; _0x4fe30b++) {
                _0x112d96['deleteTexture'](_0x50bc39[_0x4fe30b]);
            }
        } else {
            if ('vBCkr' === 'iHQMx') {
                var _0x128699 = '0|5|1|4|2|3'['split']('|'), _0x500778 = 0;
                while (!![]) {
                    switch (_0x128699[_0x500778++]) {
                    case '0':
                        if (this['contextLost']) {
                            return;
                        }
                        continue;
                    case '1':
                        this['emit'](Events['POST_RENDER']);
                        continue;
                    case '2':
                        if (_0xb972db['callback']) {
                            WebGLSnapshot(this['canvas'], _0xb972db);
                            _0xb972db['callback'] = null;
                        }
                        continue;
                    case '3':
                        if (this['textureFlush'] > 0) {
                            this['startActiveTexture']++;
                            this['currentActiveTexture'] = 1;
                        }
                        continue;
                    case '4':
                        var _0xb972db = this['snapshotState'];
                        continue;
                    case '5':
                        this['flush']();
                        continue;
                    }
                    break;
                }
            } else {
                _0x50bc39 = new Array(this['maxTextures']);
            }
        }
        for (var _0x7350e1 = 0; _0x7350e1 < this['maxTextures']; _0x7350e1++) {
            var _0x49a48c = _0x112d96['createTexture']();
            _0x112d96['activeTexture'](_0x112d96['TEXTURE0'] + _0x7350e1);
            _0x112d96['bindTexture'](_0x112d96['TEXTURE_2D'], _0x49a48c);
            _0x112d96['texImage2D'](_0x112d96['TEXTURE_2D'], 0, _0x112d96['RGBA'], 1, 1, 0, _0x112d96['RGBA'], _0x112d96['UNSIGNED_BYTE'], new Uint8Array([
                0,
                0,
                255,
                255
            ]));
            _0x50bc39[_0x7350e1] = _0x49a48c;
            this['textureIndexes']['push'](_0x7350e1);
        }
        this['tempTextures'] = _0x50bc39;
        this['currentActiveTexture'] = 1;
        this['startActiveTexture']++;
        _0x112d96['activeTexture'](_0x112d96['TEXTURE1']);
        this['pipelines'] = new PipelineManager(this);
        this['setBlendMode'](CONST['BlendModes']['NORMAL']);
        this['projectionMatrix'] = new Matrix4()['identity']();
        _0x3c9192['textures']['once'](TextureEvents['READY'], this['boot'], this);
        return this;
    },
    'boot': function () {
        var _0x3bdaae = '2|6|10|11|3|9|12|8|1|14|13|4|0|7|5'['split']('|'), _0x59a009 = 0;
        while (!![]) {
            switch (_0x3bdaae[_0x59a009++]) {
            case '0':
                _0x3be987['enable'](_0x3be987['SCISSOR_TEST']);
                continue;
            case '1':
                this['blankTexture'] = _0x26473e['textures']['getFrame']('__DEFAULT');
                continue;
            case '2':
                var _0x26473e = this['game'];
                continue;
            case '3':
                this['height'] = _0x454c00['height'];
                continue;
            case '4':
                _0x3be987['bindFramebuffer'](_0x3be987['FRAMEBUFFER'], null);
                continue;
            case '5':
                this['resize'](_0x454c00['width'], _0x454c00['height']);
                continue;
            case '6':
                var _0x55de70 = this['pipelines'];
                continue;
            case '7':
                _0x26473e['scale']['on'](ScaleEvents['RESIZE'], this['onResize'], this);
                continue;
            case '8':
                _0x55de70['boot'](_0x26473e['config']['pipeline']);
                continue;
            case '9':
                this['isBooted'] = !![];
                continue;
            case '10':
                var _0x454c00 = _0x26473e['scale']['baseSize'];
                continue;
            case '11':
                this['width'] = _0x454c00['width'];
                continue;
            case '12':
                this['renderTarget'] = new RenderTarget(this, this['width'], this['height'], 1, 0, !![], !![]);
                continue;
            case '13':
                var _0x3be987 = this['gl'];
                continue;
            case '14':
                this['whiteTexture'] = _0x26473e['textures']['getFrame']('__WHITE');
                continue;
            }
            break;
        }
    },
    'onResize': function (_0x5e25f1, _0x48be65) {
        if (_0x48be65['width'] !== this['width'] || _0x48be65['height'] !== this['height']) {
            if ('PkPcn' !== 'kluGd') {
                this['resize'](_0x48be65['width'], _0x48be65['height']);
            } else {
                if (reset) {
                    this['resetTextures'](!![]);
                }
                if (texture) {
                    this['gl']['deleteTexture'](texture);
                }
                return this;
            }
        }
    },
    'beginCapture': function (_0x3f70a5, _0x3c357d) {
        if (_0x3f70a5 === undefined) {
            _0x3f70a5 = this['width'];
        }
        if (_0x3c357d === undefined) {
            if ('bksUk' === 'DgZUD') {
                var _0x250166 = {
                    36054: 'Incomplete Attachment',
                    36057: 'Incomplete Dimensions',
                    36061: 'Framebuffer Unsupported'
                };
                throw new Error('Framebuffer status: ' + _0x250166[complete]);
            } else {
                _0x3c357d = this['height'];
            }
        }
        this['renderTarget']['bind'](!![], _0x3f70a5, _0x3c357d);
        this['setProjectionMatrix'](_0x3f70a5, _0x3c357d);
        this['resetTextures']();
    },
    'endCapture': function () {
        this['renderTarget']['unbind'](!![]);
        this['resetProjectionMatrix']();
        return this['renderTarget'];
    },
    'resize': function (_0x3482fb, _0x476bc3) {
        var _0x551709 = this['gl'];
        this['width'] = _0x3482fb;
        this['height'] = _0x476bc3;
        this['setProjectionMatrix'](_0x3482fb, _0x476bc3);
        _0x551709['viewport'](0, 0, _0x3482fb, _0x476bc3);
        this['drawingBufferHeight'] = _0x551709['drawingBufferHeight'];
        _0x551709['scissor'](0, _0x551709['drawingBufferHeight'] - _0x476bc3, _0x3482fb, _0x476bc3);
        this['defaultScissor'][2] = _0x3482fb;
        this['defaultScissor'][3] = _0x476bc3;
        this['emit'](Events['RESIZE'], _0x3482fb, _0x476bc3);
        return this;
    },
    'getAspectRatio': function () {
        return this['width'] / this['height'];
    },
    'setProjectionMatrix': function (_0xb73cfe, _0x312a8a) {
        if (_0xb73cfe !== this['projectionWidth'] || _0x312a8a !== this['projectionHeight']) {
            this['projectionWidth'] = _0xb73cfe;
            this['projectionHeight'] = _0x312a8a;
            this['projectionMatrix']['ortho'](0, _0xb73cfe, _0x312a8a, 0, -1000, 1000);
        }
        return this;
    },
    'resetProjectionMatrix': function () {
        this['projectionWidth'] = this['width'];
        this['projectionHeight'] = this['height'];
        this['projectionMatrix']['ortho'](0, this['width'], this['height'], 0, -1000, 1000);
    },
    'hasExtension': function (_0x199120) {
        return this['supportedExtensions'] ? this['supportedExtensions']['indexOf'](_0x199120) : ![];
    },
    'getExtension': function (_0x580374) {
        if (!this['hasExtension'](_0x580374)) {
            return null;
        }
        if (!(_0x580374 in this['extensions'])) {
            if ('SIXPH' === 'KXENF') {
                resetTextures = ![];
            } else {
                this['extensions'][_0x580374] = this['gl']['getExtension'](_0x580374);
            }
        }
        return this['extensions'][_0x580374];
    },
    'flush': function () {
        this['pipelines']['flush']();
    },
    'pushScissor': function (_0x2bbd3b, _0x3b8758, _0x4a0ffb, _0x2287c3, _0x34e070) {
        var _0x38b8d2 = '2|0|6|5|3|1|4'['split']('|'), _0x2c07ff = 0;
        while (!![]) {
            switch (_0x38b8d2[_0x2c07ff++]) {
            case '0':
                var _0x1e53bd = this['scissorStack'];
                continue;
            case '1':
                this['currentScissor'] = _0x1d94c1;
                continue;
            case '2':
                if (_0x34e070 === undefined) {
                    _0x34e070 = this['drawingBufferHeight'];
                }
                continue;
            case '3':
                this['setScissor'](_0x2bbd3b, _0x3b8758, _0x4a0ffb, _0x2287c3, _0x34e070);
                continue;
            case '4':
                return _0x1d94c1;
            case '5':
                _0x1e53bd['push'](_0x1d94c1);
                continue;
            case '6':
                var _0x1d94c1 = [
                    _0x2bbd3b,
                    _0x3b8758,
                    _0x4a0ffb,
                    _0x2287c3
                ];
                continue;
            }
            break;
        }
    },
    'setScissor': function (_0x5d6dc5, _0x597100, _0x995a62, _0xa651f2, _0x388667) {
        if (_0x388667 === undefined) {
            _0x388667 = this['drawingBufferHeight'];
        }
        var _0x15d6b3 = this['gl'];
        var _0x511908 = this['currentScissor'];
        var _0x5840cb = _0x995a62 > 0 && _0xa651f2 > 0;
        if (_0x511908 && _0x5840cb) {
            var _0x1ed22b = '0|4|2|3|1'['split']('|'), _0x37e946 = 0;
            while (!![]) {
                switch (_0x1ed22b[_0x37e946++]) {
                case '0':
                    var _0x29a295 = _0x511908[0];
                    continue;
                case '1':
                    _0x5840cb = _0x29a295 !== _0x5d6dc5 || _0x4bc0bf !== _0x597100 || _0xf661bc !== _0x995a62 || _0x2c912a !== _0xa651f2;
                    continue;
                case '2':
                    var _0xf661bc = _0x511908[2];
                    continue;
                case '3':
                    var _0x2c912a = _0x511908[3];
                    continue;
                case '4':
                    var _0x4bc0bf = _0x511908[1];
                    continue;
                }
                break;
            }
        }
        if (_0x5840cb) {
            if ('LnKjc' !== 'LnKjc') {
                this['nextTypeMatch'] = ![];
            } else {
                this['flush']();
                _0x15d6b3['scissor'](_0x5d6dc5, _0x388667 - _0x597100 - _0xa651f2, _0x995a62, _0xa651f2);
            }
        }
    },
    'resetScissor': function () {
        var _0x26d26c = this['gl'];
        _0x26d26c['enable'](_0x26d26c['SCISSOR_TEST']);
        var _0x5596cb = this['currentScissor'];
        if (_0x5596cb) {
            var _0x56ef6a = '3|2|0|4|1'['split']('|'), _0x5efff0 = 0;
            while (!![]) {
                switch (_0x56ef6a[_0x5efff0++]) {
                case '0':
                    var _0x435bbb = _0x5596cb[2];
                    continue;
                case '1':
                    if (_0x435bbb > 0 && _0x4c3f50 > 0) {
                        _0x26d26c['scissor'](_0x57553d, _0x30e744['jQiyO'](this['drawingBufferHeight'], _0x2be195) - _0x4c3f50, _0x435bbb, _0x4c3f50);
                    }
                    continue;
                case '2':
                    var _0x2be195 = _0x5596cb[1];
                    continue;
                case '3':
                    var _0x57553d = _0x5596cb[0];
                    continue;
                case '4':
                    var _0x4c3f50 = _0x5596cb[3];
                    continue;
                }
                break;
            }
        }
    },
    'popScissor': function () {
        var _0x51289b = '1|4|2|3|0'['split']('|'), _0x453b33 = 0;
        while (!![]) {
            switch (_0x51289b[_0x453b33++]) {
            case '0':
                this['currentScissor'] = _0x205a63;
                continue;
            case '1':
                var _0x515326 = this['scissorStack'];
                continue;
            case '2':
                var _0x205a63 = _0x515326[_0x515326['length'] - 1];
                continue;
            case '3':
                if (_0x205a63) {
                    this['setScissor'](_0x205a63[0], _0x205a63[1], _0x205a63[2], _0x205a63[3]);
                }
                continue;
            case '4':
                _0x515326['pop']();
                continue;
            }
            break;
        }
    },
    'hasActiveStencilMask': function () {
        var _0x146c48 = this['currentMask']['mask'];
        var _0x1c652a = this['currentCameraMask']['mask'];
        return _0x146c48 && _0x146c48['isStencil'] || _0x1c652a && _0x1c652a['isStencil'];
    },
    'resetViewport': function () {
        var _0x22241a = this['gl'];
        _0x22241a['viewport'](0, 0, this['width'], this['height']);
        this['drawingBufferHeight'] = _0x22241a['drawingBufferHeight'];
    },
    'setBlendMode': function (_0x4faffa, _0x5ccac5) {
        if (_0x5ccac5 === undefined) {
            _0x5ccac5 = ![];
        }
        var _0x5a4f9b = this['gl'];
        var _0x47f004 = this['blendModes'][_0x4faffa];
        if (_0x5ccac5 || _0x4faffa !== CONST['BlendModes']['SKIP_CHECK'] && this['currentBlendMode'] !== _0x4faffa) {
            this['flush']();
            _0x5a4f9b['enable'](_0x5a4f9b['BLEND']);
            _0x5a4f9b['blendEquation'](_0x47f004['equation']);
            if (_0x47f004['func']['length'] > 2) {
                _0x5a4f9b['blendFuncSeparate'](_0x47f004['func'][0], _0x47f004['func'][1], _0x47f004['func'][2], _0x47f004['func'][3]);
            } else {
                if ('iDklL' !== 'VpxWr') {
                    _0x5a4f9b['blendFunc'](_0x47f004['func'][0], _0x47f004['func'][1]);
                } else {
                    return this;
                }
            }
            this['currentBlendMode'] = _0x4faffa;
            return !![];
        }
        return ![];
    },
    'addBlendMode': function (_0x1a41d8, _0x5d1127) {
        var _0xf4426d = this['blendModes']['push']({
            'func': _0x1a41d8,
            'equation': _0x5d1127
        });
        return _0xf4426d - 1;
    },
    'updateBlendMode': function (_0x5738a5, _0x4b78b7, _0x1428ed) {
        if (this['blendModes'][_0x5738a5]) {
            if ('ApBKT' === 'ApBKT') {
                this['blendModes'][_0x5738a5]['func'] = _0x4b78b7;
                if (_0x1428ed) {
                    this['blendModes'][_0x5738a5]['equation'] = _0x1428ed;
                }
            } else {
                if (framebuffer === this['currentFramebuffer']) {
                    return this;
                }
                this['fboStack']['push'](framebuffer);
                return this['setFramebuffer'](framebuffer, updateScissor, resetTextures, setViewport);
            }
        }
        return this;
    },
    'removeBlendMode': function (_0x45782f) {
        if (_0x45782f > 17 && this['blendModes'][_0x45782f]) {
            this['blendModes']['splice'](_0x45782f, 1);
        }
        return this;
    },
    'setBlankTexture': function () {
        this['setTexture2D'](this['blankTexture']['glTexture']);
    },
    'setTextureSource': function (_0x23d86c) {
        var _0x404e41 = '4|1|0|2|5|3'['split']('|'), _0x4921ab = 0;
        while (!![]) {
            switch (_0x404e41[_0x4921ab++]) {
            case '0':
                var _0xb3c436 = this['currentActiveTexture'];
                continue;
            case '1':
                var _0x16e34b = this['gl'];
                continue;
            case '2':
                if (_0x23d86c['glIndexCounter'] < this['startActiveTexture']) {
                    _0x23d86c['glIndexCounter'] = this['startActiveTexture'];
                    if (_0xb3c436 < this['maxTextures']) {
                        _0x23d86c['glIndex'] = _0xb3c436;
                        _0x16e34b['activeTexture'](_0x16e34b['TEXTURE0'] + _0xb3c436);
                        _0x16e34b['bindTexture'](_0x16e34b['TEXTURE_2D'], _0x23d86c['glTexture']);
                        this['currentActiveTexture']++;
                    } else {
                        var _0x5f0f2c = '7|5|1|0|2|6|3|4'['split']('|'), _0x20b489 = 0;
                        while (!![]) {
                            switch (_0x5f0f2c[_0x20b489++]) {
                            case '0':
                                _0x23d86c['glIndexCounter'] = this['startActiveTexture'];
                                continue;
                            case '1':
                                this['textureFlush']++;
                                continue;
                            case '2':
                                _0x23d86c['glIndex'] = 1;
                                continue;
                            case '3':
                                _0x16e34b['bindTexture'](_0x16e34b['TEXTURE_2D'], _0x23d86c['glTexture']);
                                continue;
                            case '4':
                                this['currentActiveTexture'] = 2;
                                continue;
                            case '5':
                                this['startActiveTexture']++;
                                continue;
                            case '6':
                                _0x16e34b['activeTexture'](_0x16e34b['TEXTURE1']);
                                continue;
                            case '7':
                                this['flush']();
                                continue;
                            }
                            break;
                        }
                    }
                }
                continue;
            case '3':
                return _0x23d86c['glIndex'];
            case '4':
                if (this['pipelines']['forceZero']()) {
                    this['setTextureZero'](_0x23d86c['glTexture'], !![]);
                    return 0;
                }
                continue;
            case '5':
                this['isTextureClean'] = ![];
                continue;
            }
            break;
        }
    },
    'isNewNormalMap': function (_0x576380, _0x1c0a4f) {
        return this['textureZero'] !== _0x576380 || this['normalTexture'] !== _0x1c0a4f;
    },
    'setTextureZero': function (_0x27ace6, _0x4c606b) {
        if (this['textureZero'] !== _0x27ace6) {
            if (_0x4c606b) {
                if ('tvZkv' === 'tvZkv') {
                    this['flush']();
                } else {
                    flipY = ![];
                }
            }
            var _0x4e5a37 = this['gl'];
            _0x4e5a37['activeTexture'](_0x4e5a37['TEXTURE0']);
            _0x4e5a37['bindTexture'](_0x4e5a37['TEXTURE_2D'], _0x27ace6);
            this['textureZero'] = _0x27ace6;
        }
    },
    'clearTextureZero': function () {
        this['textureZero'] = null;
    },
    'setNormalMap': function (_0x3da67e) {
        if (this['normalTexture'] !== _0x3da67e) {
            var _0x129756 = '2|0|4|1|3'['split']('|'), _0xa3074d = 0;
            while (!![]) {
                switch (_0x129756[_0xa3074d++]) {
                case '0':
                    _0x443e8a['activeTexture'](_0x443e8a['TEXTURE1']);
                    continue;
                case '1':
                    this['normalTexture'] = _0x3da67e;
                    continue;
                case '2':
                    var _0x443e8a = this['gl'];
                    continue;
                case '3':
                    if (this['currentActiveTexture'] === 1) {
                        this['currentActiveTexture'] = 2;
                    }
                    continue;
                case '4':
                    _0x443e8a['bindTexture'](_0x443e8a['TEXTURE_2D'], _0x3da67e);
                    continue;
                }
                break;
            }
        }
    },
    'clearNormalMap': function () {
        this['normalTexture'] = null;
        this['startActiveTexture']++;
        this['currentActiveTexture'] = 1;
        this['textureFlush']++;
    },
    'unbindTextures': function () {
        var _0x3762e4 = this['gl'];
        var _0x82f997 = this['tempTextures'];
        for (var _0x3ccac3 = 0; _0x3ccac3 < _0x82f997['length']; _0x3ccac3++) {
            if ('HcrCT' !== 'HcrCT') {
                var _0xdbe35f = '1|3|2|0|4'['split']('|'), _0x21699f = 0;
                while (!![]) {
                    switch (_0xdbe35f[_0x21699f++]) {
                    case '0':
                        if (_0x54a4ff) {
                            this['setScissor'](_0x54a4ff[0], _0x54a4ff[1], _0x54a4ff[2], _0x54a4ff[3]);
                        }
                        continue;
                    case '1':
                        var _0x418a2c = this['scissorStack'];
                        continue;
                    case '2':
                        var _0x54a4ff = _0x418a2c[_0x418a2c['length'] - 1];
                        continue;
                    case '3':
                        _0x418a2c['pop']();
                        continue;
                    case '4':
                        this['currentScissor'] = _0x54a4ff;
                        continue;
                    }
                    break;
                }
            } else {
                _0x3762e4['activeTexture'](_0x3762e4['TEXTURE0'] + _0x3ccac3);
                _0x3762e4['bindTexture'](_0x3762e4['TEXTURE_2D'], null);
            }
        }
        this['normalTexture'] = null;
        this['textureZero'] = null;
        this['currentActiveTexture'] = 1;
        this['startActiveTexture']++;
        this['textureFlush']++;
    },
    'resetTextures': function (_0x1b8b2e) {
        if (_0x1b8b2e === undefined) {
            _0x1b8b2e = ![];
        }
        if (this['isTextureClean']) {
            if ('OtPLI' !== 'OtPLI') {
                this['setTextureZero'](textureSource['glTexture'], !![]);
                return 0;
            } else {
                return;
            }
        }
        this['flush']();
        var _0x3b0a0e = this['gl'];
        var _0x52499e = this['tempTextures'];
        if (_0x1b8b2e) {
            for (var _0x2d79cc = 0; _0x2d79cc < _0x52499e['length']; _0x2d79cc++) {
                if ('mwrJG' === 'XhmHn') {
                    var _0x482610 = '0|4|1|5|3|8|7|9|6|2'['split']('|'), _0x498ed5 = 0;
                    while (!![]) {
                        switch (_0x482610[_0x498ed5++]) {
                        case '0':
                            var _0x5bab40 = this['snapshotState'];
                            continue;
                        case '1':
                            _0x5bab40['type'] = type;
                            continue;
                        case '2':
                            return this;
                        case '3':
                            _0x5bab40['getPixel'] = ![];
                            continue;
                        case '4':
                            _0x5bab40['callback'] = callback;
                            continue;
                        case '5':
                            _0x5bab40['encoder'] = encoderOptions;
                            continue;
                        case '6':
                            _0x5bab40['height'] = Math['min'](height, this['gl']['drawingBufferHeight']);
                            continue;
                        case '7':
                            _0x5bab40['y'] = y;
                            continue;
                        case '8':
                            _0x5bab40['x'] = x;
                            continue;
                        case '9':
                            _0x5bab40['width'] = Math['min'](width, this['gl']['drawingBufferWidth']);
                            continue;
                        }
                        break;
                    }
                } else {
                    _0x3b0a0e['activeTexture'](_0x3b0a0e['TEXTURE0'] + _0x2d79cc);
                    _0x3b0a0e['bindTexture'](_0x3b0a0e['TEXTURE_2D'], _0x52499e[_0x2d79cc]);
                }
            }
            _0x3b0a0e['activeTexture'](_0x3b0a0e['TEXTURE1']);
            _0x3b0a0e['bindTexture'](_0x3b0a0e['TEXTURE_2D'], _0x52499e[1]);
            this['isTextureClean'] = !![];
        } else {
            if ('aUOlK' !== 'tXHBQ') {
                _0x3b0a0e['activeTexture'](_0x3b0a0e['TEXTURE0']);
                _0x3b0a0e['bindTexture'](_0x3b0a0e['TEXTURE_2D'], _0x52499e[0]);
                _0x3b0a0e['activeTexture'](_0x3b0a0e['TEXTURE1']);
                _0x3b0a0e['bindTexture'](_0x3b0a0e['TEXTURE_2D'], _0x52499e[1]);
            } else {
                _0x3b0a0e['scissor'](x, this['drawingBufferHeight'] - y - height, width, height);
            }
        }
        this['normalTexture'] = null;
        this['textureZero'] = null;
        this['currentActiveTexture'] = 1;
        this['startActiveTexture']++;
        this['textureFlush']++;
    },
    'setTexture2D': function (_0x21f7a2) {
        if (this['pipelines']['forceZero']()) {
            this['setTextureZero'](_0x21f7a2, !![]);
            return 0;
        }
        var _0x265878 = this['gl'];
        var _0x1a7993 = this['currentActiveTexture'];
        if (_0x21f7a2['glIndexCounter'] < this['startActiveTexture']) {
            if ('MEJzC' === 'MEJzC') {
                _0x21f7a2['glIndexCounter'] = this['startActiveTexture'];
                if (_0x1a7993 < this['maxTextures']) {
                    _0x21f7a2['glIndex'] = _0x1a7993;
                    _0x265878['activeTexture'](_0x265878['TEXTURE0'] + _0x1a7993);
                    _0x265878['bindTexture'](_0x265878['TEXTURE_2D'], _0x21f7a2);
                    this['currentActiveTexture']++;
                } else {
                    if ('OIzzT' === 'OIzzT') {
                        var _0x2102bb = '0|6|5|3|2|7|4|1'['split']('|'), _0x7ac1b3 = 0;
                        while (!![]) {
                            switch (_0x2102bb[_0x7ac1b3++]) {
                            case '0':
                                this['flush']();
                                continue;
                            case '1':
                                this['currentActiveTexture'] = 2;
                                continue;
                            case '2':
                                _0x21f7a2['glIndex'] = 1;
                                continue;
                            case '3':
                                _0x21f7a2['glIndexCounter'] = this['startActiveTexture'];
                                continue;
                            case '4':
                                _0x265878['bindTexture'](_0x265878['TEXTURE_2D'], _0x21f7a2);
                                continue;
                            case '5':
                                this['textureFlush']++;
                                continue;
                            case '6':
                                this['startActiveTexture']++;
                                continue;
                            case '7':
                                _0x265878['activeTexture'](_0x265878['TEXTURE1']);
                                continue;
                            }
                            break;
                        }
                    } else {
                        if (baseSize['width'] !== this['width'] || baseSize['height'] !== this['height']) {
                            this['resize'](baseSize['width'], baseSize['height']);
                        }
                    }
                }
            } else {
                var _0xad21eb = '1|2|0|3|4'['split']('|'), _0x2abf3d = 0;
                while (!![]) {
                    switch (_0xad21eb[_0x2abf3d++]) {
                    case '0':
                        _0x5b0a5f['bindTexture'](_0x5b0a5f['TEXTURE_2D'], _0x21f7a2);
                        continue;
                    case '1':
                        var _0x5b0a5f = this['gl'];
                        continue;
                    case '2':
                        _0x5b0a5f['activeTexture'](_0x5b0a5f['TEXTURE1']);
                        continue;
                    case '3':
                        this['normalTexture'] = _0x21f7a2;
                        continue;
                    case '4':
                        if (this['currentActiveTexture'] === 1) {
                            this['currentActiveTexture'] = 2;
                        }
                        continue;
                    }
                    break;
                }
            }
        }
        this['isTextureClean'] = ![];
        return _0x21f7a2['glIndex'];
    },
    'pushFramebuffer': function (_0x2cef4e, _0x30d0c6, _0x48c9a6, _0x246fb2) {
        if (_0x2cef4e === this['currentFramebuffer']) {
            return this;
        }
        this['fboStack']['push'](_0x2cef4e);
        return this['setFramebuffer'](_0x2cef4e, _0x30d0c6, _0x48c9a6, _0x246fb2);
    },
    'setFramebuffer': function (_0x368b06, _0x184511, _0x405c1f, _0x3fb667) {
        if (_0x184511 === undefined) {
            _0x184511 = ![];
        }
        if (_0x405c1f === undefined) {
            _0x405c1f = ![];
        }
        if (_0x3fb667 === undefined) {
            _0x3fb667 = !![];
        }
        if (_0x368b06 === this['currentFramebuffer']) {
            return this;
        }
        var _0x3063fc = this['gl'];
        var _0xd9b1aa = this['width'];
        var _0xc79f97 = this['height'];
        if (_0x368b06 && _0x368b06['renderTexture'] && _0x3fb667) {
            _0xd9b1aa = _0x368b06['renderTexture']['width'];
            _0xc79f97 = _0x368b06['renderTexture']['height'];
        } else {
            if ('ktArS' === 'ktArS') {
                this['flush']();
            } else {
                this['currentCameraMask']['mask'] = camera['mask'];
                this['currentCameraMask']['camera'] = camera['_maskCamera'];
                camera['mask']['preRenderWebGL'](this, camera, camera['_maskCamera']);
            }
        }
        _0x3063fc['bindFramebuffer'](_0x3063fc['FRAMEBUFFER'], _0x368b06);
        if (_0x3fb667) {
            if ('xCXXR' !== 'VXmDk') {
                _0x3063fc['viewport'](0, 0, _0xd9b1aa, _0xc79f97);
            } else {
                mask['preRenderWebGL'](this, child, camera);
            }
        }
        if (_0x184511) {
            if (_0x368b06) {
                this['drawingBufferHeight'] = _0xc79f97;
                this['pushScissor'](0, 0, _0xd9b1aa, _0xc79f97);
            } else {
                this['drawingBufferHeight'] = this['height'];
                this['popScissor']();
            }
        }
        this['currentFramebuffer'] = _0x368b06;
        if (_0x405c1f) {
            this['resetTextures']();
        }
        return this;
    },
    'popFramebuffer': function (_0x4328ae, _0x375b98, _0x2d23de) {
        if (_0x4328ae === undefined) {
            if ('BNagF' === 'kOQZx') {
                tempTextures = new Array(this['maxTextures']);
            } else {
                _0x4328ae = ![];
            }
        }
        if (_0x375b98 === undefined) {
            if ('stXFz' === 'WeOJF') {
                x = 0;
            } else {
                _0x375b98 = ![];
            }
        }
        if (_0x2d23de === undefined) {
            _0x2d23de = !![];
        }
        var _0xb4748 = this['fboStack'];
        _0xb4748['pop']();
        var _0x2dc1e5 = _0xb4748[_0xb4748['length'] - 1];
        if (!_0x2dc1e5) {
            if ('LkHzM' === 'LkHzM') {
                _0x2dc1e5 = null;
            } else {
                gl['viewport'](0, 0, width, height);
            }
        }
        this['setFramebuffer'](_0x2dc1e5, _0x4328ae, _0x375b98, _0x2d23de);
        return _0x2dc1e5;
    },
    'setProgram': function (_0xd99cf0) {
        if (_0xd99cf0 !== this['currentProgram']) {
            this['flush']();
            this['gl']['useProgram'](_0xd99cf0);
            this['currentProgram'] = _0xd99cf0;
            return !![];
        }
        return ![];
    },
    'resetProgram': function () {
        this['gl']['useProgram'](this['currentProgram']);
        return this;
    },
    'createTextureFromSource': function (_0x5d28de, _0x575b9f, _0x152045, _0x43b199) {
        var _0x53a3f0 = this['gl'];
        var _0x5300a5 = _0x53a3f0['NEAREST'];
        var _0xcd848 = _0x53a3f0['NEAREST'];
        var _0x2ba409 = _0x53a3f0['CLAMP_TO_EDGE'];
        var _0x406258 = null;
        _0x575b9f = _0x5d28de ? _0x5d28de['width'] : _0x575b9f;
        _0x152045 = _0x5d28de ? _0x5d28de['height'] : _0x152045;
        var _0x728394 = IsSizePowerOfTwo(_0x575b9f, _0x152045);
        if (_0x728394) {
            _0x2ba409 = _0x53a3f0['REPEAT'];
        }
        if (_0x43b199 === CONST['ScaleModes']['LINEAR'] && this['config']['antialias']) {
            _0x5300a5 = _0x728394 ? this['mipmapFilter'] : _0x53a3f0['LINEAR'];
            _0xcd848 = _0x53a3f0['LINEAR'];
        }
        if (!_0x5d28de && typeof _0x575b9f === 'number' && typeof _0x152045 === 'number') {
            if ('vexSy' !== 'GiNjx') {
                _0x406258 = this['createTexture2D'](0, _0x5300a5, _0xcd848, _0x2ba409, _0x2ba409, _0x53a3f0['RGBA'], null, _0x575b9f, _0x152045);
            } else {
                if (!this['hasExtension'](extensionName)) {
                    return null;
                }
                if (!(extensionName in this['extensions'])) {
                    this['extensions'][extensionName] = this['gl']['getExtension'](extensionName);
                }
                return this['extensions'][extensionName];
            }
        } else {
            if ('soafi' === 'soafi') {
                _0x406258 = this['createTexture2D'](0, _0x5300a5, _0xcd848, _0x2ba409, _0x2ba409, _0x53a3f0['RGBA'], _0x5d28de);
            } else {
                this['flush']();
                _0x53a3f0['scissor'](x, drawingBufferHeight - y - _0x152045, _0x575b9f, _0x152045);
            }
        }
        return _0x406258;
    },
    'createTexture2D': function (_0x44c6a3, _0x2f48d0, _0x3c484a, _0x34b182, _0x1dd8f9, _0x91d3fe, _0x162f70, _0x271888, _0x5bdefd, _0x5b610b, _0x138e76, _0x40bcc8) {
        _0x5b610b = _0x5b610b === undefined || _0x5b610b === null ? !![] : _0x5b610b;
        if (_0x138e76 === undefined) {
            _0x138e76 = ![];
        }
        if (_0x40bcc8 === undefined) {
            _0x40bcc8 = ![];
        }
        var _0x2f0fdf = this['gl'];
        var _0x5bb322 = _0x2f0fdf['createTexture']();
        _0x2f0fdf['activeTexture'](_0x2f0fdf['TEXTURE0']);
        var _0xd22247 = _0x2f0fdf['getParameter'](_0x2f0fdf['TEXTURE_BINDING_2D']);
        _0x2f0fdf['bindTexture'](_0x2f0fdf['TEXTURE_2D'], _0x5bb322);
        _0x2f0fdf['texParameteri'](_0x2f0fdf['TEXTURE_2D'], _0x2f0fdf['TEXTURE_MIN_FILTER'], _0x2f48d0);
        _0x2f0fdf['texParameteri'](_0x2f0fdf['TEXTURE_2D'], _0x2f0fdf['TEXTURE_MAG_FILTER'], _0x3c484a);
        _0x2f0fdf['texParameteri'](_0x2f0fdf['TEXTURE_2D'], _0x2f0fdf['TEXTURE_WRAP_S'], _0x1dd8f9);
        _0x2f0fdf['texParameteri'](_0x2f0fdf['TEXTURE_2D'], _0x2f0fdf['TEXTURE_WRAP_T'], _0x34b182);
        _0x2f0fdf['pixelStorei'](_0x2f0fdf['UNPACK_PREMULTIPLY_ALPHA_WEBGL'], _0x5b610b);
        _0x2f0fdf['pixelStorei'](_0x2f0fdf['UNPACK_FLIP_Y_WEBGL'], _0x40bcc8);
        if (_0x162f70 === null || _0x162f70 === undefined) {
            if ('UgDWO' !== 'UgDWO') {
                this['blendModes'][index]['equation'] = equation;
            } else {
                _0x2f0fdf['texImage2D'](_0x2f0fdf['TEXTURE_2D'], _0x44c6a3, _0x91d3fe, _0x271888, _0x5bdefd, 0, _0x91d3fe, _0x2f0fdf['UNSIGNED_BYTE'], null);
            }
        } else {
            if (!_0x138e76) {
                if ('nmUfB' !== 'nmUfB') {
                    this['startActiveTexture']++;
                    this['currentActiveTexture'] = 1;
                } else {
                    _0x271888 = _0x162f70['width'];
                    _0x5bdefd = _0x162f70['height'];
                }
            }
            _0x2f0fdf['texImage2D'](_0x2f0fdf['TEXTURE_2D'], _0x44c6a3, _0x91d3fe, _0x91d3fe, _0x2f0fdf['UNSIGNED_BYTE'], _0x162f70);
        }
        if (IsSizePowerOfTwo(_0x271888, _0x5bdefd)) {
            _0x2f0fdf['generateMipmap'](_0x2f0fdf['TEXTURE_2D']);
        }
        if (_0xd22247) {
            _0x2f0fdf['bindTexture'](_0x2f0fdf['TEXTURE_2D'], _0xd22247);
        }
        _0x5bb322['isAlphaPremultiplied'] = _0x5b610b;
        _0x5bb322['isRenderTexture'] = ![];
        _0x5bb322['width'] = _0x271888;
        _0x5bb322['height'] = _0x5bdefd;
        _0x5bb322['glIndex'] = 0;
        _0x5bb322['glIndexCounter'] = -1;
        return _0x5bb322;
    },
    'createFramebuffer': function (_0x5d40b1, _0x19b5f9, _0x1e7122, _0x32505d) {
        var _0x179bcf = '6|11|3|5|9|13|8|7|12|0|10|2|1|4'['split']('|'), _0x1ac470 = 0;
        while (!![]) {
            switch (_0x179bcf[_0x1ac470++]) {
            case '0':
                if (_0x3f48c9 !== _0x2782f0['FRAMEBUFFER_COMPLETE']) {
                    var _0x2b0813 = {
                        36054: 'Incomplete Attachment',
                        36061: 'Framebuffer Unsupported'
                    };
                    throw new Error('Framebuffer status: ' + _0x2b0813[_0x3f48c9]);
                }
                continue;
            case '1':
                this['resetTextures']();
                continue;
            case '2':
                this['setFramebuffer'](null);
                continue;
            case '3':
                var _0x3f48c9 = 0;
                continue;
            case '4':
                return _0x4420e2;
            case '5':
                this['setFramebuffer'](_0x4420e2);
                continue;
            case '6':
                var _0x2782f0 = this['gl'];
                continue;
            case '7':
                _0x2782f0['framebufferTexture2D'](_0x2782f0['FRAMEBUFFER'], _0x2782f0['COLOR_ATTACHMENT0'], _0x2782f0['TEXTURE_2D'], _0x1e7122, 0);
                continue;
            case '8':
                _0x1e7122['isAlphaPremultiplied'] = ![];
                continue;
            case '9':
                if (_0x32505d) {
                    var _0x10b77b = _0x2782f0['createRenderbuffer']();
                    _0x2782f0['bindRenderbuffer'](_0x2782f0['RENDERBUFFER'], _0x10b77b);
                    _0x2782f0['renderbufferStorage'](_0x2782f0['RENDERBUFFER'], _0x2782f0['DEPTH_STENCIL'], _0x5d40b1, _0x19b5f9);
                    _0x2782f0['framebufferRenderbuffer'](_0x2782f0['FRAMEBUFFER'], _0x2782f0['DEPTH_STENCIL_ATTACHMENT'], _0x2782f0['RENDERBUFFER'], _0x10b77b);
                }
                continue;
            case '10':
                _0x4420e2['renderTexture'] = _0x1e7122;
                continue;
            case '11':
                var _0x4420e2 = _0x2782f0['createFramebuffer']();
                continue;
            case '12':
                _0x3f48c9 = _0x2782f0['checkFramebufferStatus'](_0x2782f0['FRAMEBUFFER']);
                continue;
            case '13':
                _0x1e7122['isRenderTexture'] = !![];
                continue;
            }
            break;
        }
    },
    'createProgram': function (_0x21dedd, _0x29b055) {
        var _0x1f2b97 = this['gl'];
        var _0x4efed1 = _0x1f2b97['createProgram']();
        var _0x3f9a8c = _0x1f2b97['createShader'](_0x1f2b97['VERTEX_SHADER']);
        var _0x391357 = _0x1f2b97['createShader'](_0x1f2b97['FRAGMENT_SHADER']);
        _0x1f2b97['shaderSource'](_0x3f9a8c, _0x21dedd);
        _0x1f2b97['shaderSource'](_0x391357, _0x29b055);
        _0x1f2b97['compileShader'](_0x3f9a8c);
        _0x1f2b97['compileShader'](_0x391357);
        if (!_0x1f2b97['getShaderParameter'](_0x3f9a8c, _0x1f2b97['COMPILE_STATUS'])) {
            throw new Error('Vertex Shader failed:\n' + _0x1f2b97['getShaderInfoLog'](_0x3f9a8c));
        }
        if (!_0x1f2b97['getShaderParameter'](_0x391357, _0x1f2b97['COMPILE_STATUS'])) {
            if ('fyFYq' !== 'fyFYq') {
                this['flush']();
                this['gl']['useProgram'](_0x4efed1);
                this['currentProgram'] = _0x4efed1;
                return !![];
            } else {
                throw new Error('Fragment Shader failed:\n' + _0x1f2b97['getShaderInfoLog'](_0x391357));
            }
        }
        _0x1f2b97['attachShader'](_0x4efed1, _0x3f9a8c);
        _0x1f2b97['attachShader'](_0x4efed1, _0x391357);
        _0x1f2b97['linkProgram'](_0x4efed1);
        if (!_0x1f2b97['getProgramParameter'](_0x4efed1, _0x1f2b97['LINK_STATUS'])) {
            if ('Ewljb' === 'iVPCi') {
                return this['createCanvasTexture'](srcCanvas, noRepeat, flipY);
            } else {
                throw new Error('Link Program failed:\n' + _0x1f2b97['getProgramInfoLog'](_0x4efed1));
            }
        }
        _0x1f2b97['useProgram'](_0x4efed1);
        return _0x4efed1;
    },
    'createVertexBuffer': function (_0x29ead4, _0x4e80e8) {
        var _0x2f9c7d = this['gl'];
        var _0xf9d409 = _0x2f9c7d['createBuffer']();
        _0x2f9c7d['bindBuffer'](_0x2f9c7d['ARRAY_BUFFER'], _0xf9d409);
        _0x2f9c7d['bufferData'](_0x2f9c7d['ARRAY_BUFFER'], _0x29ead4, _0x4e80e8);
        _0x2f9c7d['bindBuffer'](_0x2f9c7d['ARRAY_BUFFER'], null);
        return _0xf9d409;
    },
    'createIndexBuffer': function (_0x1c83c5, _0x38ff78) {
        var _0x456cdb = '2|1|0|5|4|3'['split']('|'), _0x28df72 = 0;
        while (!![]) {
            switch (_0x456cdb[_0x28df72++]) {
            case '0':
                _0x491067['bindBuffer'](_0x491067['ELEMENT_ARRAY_BUFFER'], _0x5b9457);
                continue;
            case '1':
                var _0x5b9457 = _0x491067['createBuffer']();
                continue;
            case '2':
                var _0x491067 = this['gl'];
                continue;
            case '3':
                return _0x5b9457;
            case '4':
                _0x491067['bindBuffer'](_0x491067['ELEMENT_ARRAY_BUFFER'], null);
                continue;
            case '5':
                _0x491067['bufferData'](_0x491067['ELEMENT_ARRAY_BUFFER'], _0x1c83c5, _0x38ff78);
                continue;
            }
            break;
        }
    },
    'deleteTexture': function (_0x41ee04, _0x5ac027) {
        if (_0x5ac027) {
            if ('upHZC' !== 'upHZC') {
                this['resetTextures']();
            } else {
                this['resetTextures'](!![]);
            }
        }
        if (_0x41ee04) {
            this['gl']['deleteTexture'](_0x41ee04);
        }
        return this;
    },
    'deleteFramebuffer': function (_0x3a450b) {
        if (_0x3a450b) {
            this['gl']['deleteFramebuffer'](_0x3a450b);
            ArrayRemove(this['fboStack'], _0x3a450b);
            if (this['currentFramebuffer'] === _0x3a450b) {
                if ('azQvR' !== 'azQvR') {
                    y = 0;
                } else {
                    this['currentFramebuffer'] = null;
                }
            }
        }
        return this;
    },
    'deleteProgram': function (_0x2be90d) {
        if (_0x2be90d) {
            this['gl']['deleteProgram'](_0x2be90d);
        }
        return this;
    },
    'deleteBuffer': function (_0x235b87) {
        this['gl']['deleteBuffer'](_0x235b87);
        return this;
    },
    'preRenderCamera': function (_0x3e008a) {
        var _0x23aac3 = _0x3e008a['x'];
        var _0x54f2fc = _0x3e008a['y'];
        var _0x562a6c = _0x3e008a['width'];
        var _0x372324 = _0x3e008a['height'];
        var _0x5453ff = _0x3e008a['backgroundColor'];
        _0x3e008a['emit'](CameraEvents['PRE_RENDER'], _0x3e008a);
        this['pipelines']['preBatchCamera'](_0x3e008a);
        this['pushScissor'](_0x23aac3, _0x54f2fc, _0x562a6c, _0x372324);
        if (_0x3e008a['mask']) {
            if ('cPHdi' === 'cPHdi') {
                this['currentCameraMask']['mask'] = _0x3e008a['mask'];
                this['currentCameraMask']['camera'] = _0x3e008a['_maskCamera'];
                _0x3e008a['mask']['preRenderWebGL'](this, _0x3e008a, _0x3e008a['_maskCamera']);
            } else {
                this['nextTypeMatch'] = children[i + 1]['type'] === this['currentType'];
            }
        }
        if (_0x5453ff['alphaGL'] > 0) {
            var _0x28f2bb = this['pipelines']['setMulti']();
            _0x28f2bb['drawFillRect'](_0x23aac3, _0x54f2fc, _0x562a6c, _0x372324, Utils['getTintFromFloats'](_0x5453ff['blueGL'], _0x5453ff['greenGL'], _0x5453ff['redGL'], 1), _0x5453ff['alphaGL']);
        }
    },
    'getCurrentStencilMask': function () {
        var _0x54a5d5 = null;
        var _0x48834a = this['maskStack'];
        var _0xbc8dad = this['currentCameraMask'];
        if (_0x48834a['length'] > 0) {
            _0x54a5d5 = _0x48834a[_0x48834a['length'] - 1];
        } else if (_0xbc8dad['mask'] && _0xbc8dad['mask']['isStencil']) {
            if ('uMbAr' !== 'uMbAr') {
                for (var _0x3a4097 = 0; i < this['maxTextures']; _0x3a4097++) {
                    gl['deleteTexture'](tempTextures[_0x3a4097]);
                }
            } else {
                _0x54a5d5 = _0xbc8dad;
            }
        }
        return _0x54a5d5;
    },
    'postRenderCamera': function (_0x5e1337) {
        var _0x222010 = _0x5e1337['flashEffect'];
        var _0x5577ae = _0x5e1337['fadeEffect'];
        if (_0x222010['isRunning'] || (_0x5577ae['isRunning'] || _0x5577ae['isComplete'])) {
            if ('MYABw' !== 'MYABw') {
                textureSource['glIndex'] = currentActiveTexture;
                gl['activeTexture'](gl['TEXTURE0'] + currentActiveTexture);
                gl['bindTexture'](gl['TEXTURE_2D'], textureSource['glTexture']);
                this['currentActiveTexture']++;
            } else {
                var _0x14dcbc = this['pipelines']['setMulti']();
                _0x222010['postRenderWebGL'](_0x14dcbc, Utils['getTintFromFloats']);
                _0x5577ae['postRenderWebGL'](_0x14dcbc, Utils['getTintFromFloats']);
            }
        }
        _0x5e1337['dirty'] = ![];
        this['popScissor']();
        if (_0x5e1337['mask']) {
            this['currentCameraMask']['mask'] = null;
            _0x5e1337['mask']['postRenderWebGL'](this, _0x5e1337['_maskCamera']);
        }
        this['pipelines']['postBatchCamera'](_0x5e1337);
        _0x5e1337['emit'](CameraEvents['POST_RENDER'], _0x5e1337);
    },
    'preRender': function () {
        if (this['contextLost']) {
            return;
        }
        var _0x1ff5ea = this['gl'];
        _0x1ff5ea['bindFramebuffer'](_0x1ff5ea['FRAMEBUFFER'], null);
        if (this['config']['clearBeforeRender']) {
            if ('LvwOG' === 'LvwOG') {
                var _0x86b8c8 = this['config']['backgroundColor'];
                _0x1ff5ea['clearColor'](_0x86b8c8['redGL'], _0x86b8c8['greenGL'], _0x86b8c8['blueGL'], _0x86b8c8['alphaGL']);
                _0x1ff5ea['clear'](_0xb67261['cFlXC'](_0x1ff5ea['COLOR_BUFFER_BIT'], _0x1ff5ea['DEPTH_BUFFER_BIT']) | _0x1ff5ea['STENCIL_BUFFER_BIT']);
            } else {
                force = ![];
            }
        }
        _0x1ff5ea['enable'](_0x1ff5ea['SCISSOR_TEST']);
        this['currentScissor'] = this['defaultScissor'];
        this['scissorStack']['length'] = 0;
        this['scissorStack']['push'](this['currentScissor']);
        if (this['game']['scene']['customViewports']) {
            _0x1ff5ea['scissor'](0, this['drawingBufferHeight'] - this['height'], this['width'], this['height']);
        }
        this['currentMask']['mask'] = null;
        this['currentCameraMask']['mask'] = null;
        this['maskStack']['length'] = 0;
        this['textureFlush'] = 0;
        this['emit'](Events['PRE_RENDER']);
    },
    'render': function (_0x55642a, _0x3ca84c, _0x107f4e) {
        if (this['contextLost']) {
            return;
        }
        var _0x5f85b6 = _0x3ca84c['length'];
        this['emit'](Events['RENDER'], _0x55642a, _0x107f4e);
        this['preRenderCamera'](_0x107f4e);
        if (_0x5f85b6 === 0) {
            this['setBlendMode'](CONST['BlendModes']['NORMAL']);
            this['postRenderCamera'](_0x107f4e);
            return;
        }
        this['currentType'] = '';
        var _0x1069fb = this['currentMask'];
        for (var _0x3d7133 = 0; _0x3d7133 < _0x5f85b6; _0x3d7133++) {
            this['finalType'] = _0x3d7133 === _0x5f85b6 - 1;
            var _0x1c7456 = _0x3ca84c[_0x3d7133];
            var _0xb5652b = _0x1c7456['mask'];
            _0x1069fb = this['currentMask'];
            if (_0x1069fb['mask'] && _0x1069fb['mask'] !== _0xb5652b) {
                _0x1069fb['mask']['postRenderWebGL'](this, _0x1069fb['camera']);
            }
            if (_0xb5652b && _0x1069fb['mask'] !== _0xb5652b) {
                _0xb5652b['preRenderWebGL'](this, _0x1c7456, _0x107f4e);
            }
            if (_0x1c7456['blendMode'] !== this['currentBlendMode']) {
                this['setBlendMode'](_0x1c7456['blendMode']);
            }
            var _0x331645 = _0x1c7456['type'];
            if (_0x331645 !== this['currentType']) {
                this['newType'] = !![];
                this['currentType'] = _0x331645;
            }
            if (!this['finalType']) {
                if ('lcRuM' !== 'lcRuM') {
                    width = pixels['width'];
                    height = pixels['height'];
                } else {
                    this['nextTypeMatch'] = _0x3ca84c[_0x3d7133 + 1]['type'] === this['currentType'];
                }
            } else {
                this['nextTypeMatch'] = ![];
            }
            _0x1c7456['renderWebGL'](this, _0x1c7456, _0x107f4e);
            this['newType'] = ![];
        }
        _0x1069fb = this['currentMask'];
        if (_0x1069fb['mask']) {
            _0x1069fb['mask']['postRenderWebGL'](this, _0x1069fb['camera']);
        }
        this['setBlendMode'](CONST['BlendModes']['NORMAL']);
        this['postRenderCamera'](_0x107f4e);
    },
    'postRender': function () {
        if (this['contextLost']) {
            if ('aCEtH' === 'WVTfs') {
                var _0x252d8d = null;
                var _0x4dc3e8 = this['maskStack'];
                var _0x43b02f = this['currentCameraMask'];
                if (_0x4dc3e8['length'] > 0) {
                    _0x252d8d = _0x4dc3e8[_0x4dc3e8['length'] - 1];
                } else if (_0x43b02f['mask'] && _0x43b02f['mask']['isStencil']) {
                    _0x252d8d = _0x43b02f;
                }
                return _0x252d8d;
            } else {
                return;
            }
        }
        this['flush']();
        this['emit'](Events['POST_RENDER']);
        var _0x47ed37 = this['snapshotState'];
        if (_0x47ed37['callback']) {
            WebGLSnapshot(this['canvas'], _0x47ed37);
            _0x47ed37['callback'] = null;
        }
        if (this['textureFlush'] > 0) {
            this['startActiveTexture']++;
            this['currentActiveTexture'] = 1;
        }
    },
    'snapshot': function (_0x44e7c5, _0x503343, _0x5647c4) {
        return this['snapshotArea'](0, 0, this['gl']['drawingBufferWidth'], this['gl']['drawingBufferHeight'], _0x44e7c5, _0x503343, _0x5647c4);
    },
    'snapshotArea': function (_0x3277e4, _0x219b3f, _0x2aff32, _0x5a7d70, _0x188cbb, _0x251fc2, _0x1b8e8b) {
        var _0x3e7de5 = '7|2|0|9|1|4|6|3|5|8'['split']('|'), _0xdf6b73 = 0;
        while (!![]) {
            switch (_0x3e7de5[_0xdf6b73++]) {
            case '0':
                _0xd56d79['type'] = _0x251fc2;
                continue;
            case '1':
                _0xd56d79['getPixel'] = ![];
                continue;
            case '2':
                _0xd56d79['callback'] = _0x188cbb;
                continue;
            case '3':
                _0xd56d79['width'] = Math['min'](_0x2aff32, this['gl']['drawingBufferWidth']);
                continue;
            case '4':
                _0xd56d79['x'] = _0x3277e4;
                continue;
            case '5':
                _0xd56d79['height'] = Math['min'](_0x5a7d70, this['gl']['drawingBufferHeight']);
                continue;
            case '6':
                _0xd56d79['y'] = _0x219b3f;
                continue;
            case '7':
                var _0xd56d79 = this['snapshotState'];
                continue;
            case '8':
                return this;
            case '9':
                _0xd56d79['encoder'] = _0x1b8e8b;
                continue;
            }
            break;
        }
    },
    'snapshotPixel': function (_0x5b6fb8, _0x3f63ae, _0x192420) {
        this['snapshotArea'](_0x5b6fb8, _0x3f63ae, 1, 1, _0x192420);
        this['snapshotState']['getPixel'] = !![];
        return this;
    },
    'snapshotFramebuffer': function (_0x2469d9, _0x286790, _0x45b1e2, _0x2ebe74, _0x887f74, _0x140692, _0x5953c8, _0x1822a8, _0x23246e, _0x64efe1, _0x30025a) {
        if (_0x887f74 === undefined) {
            if ('fZnjM' !== 'fZnjM') {
                noRepeat = ![];
            } else {
                _0x887f74 = ![];
            }
        }
        if (_0x140692 === undefined) {
            _0x140692 = 0;
        }
        if (_0x5953c8 === undefined) {
            if ('tiWmy' !== 'uukPB') {
                _0x5953c8 = 0;
            } else {
                minFilter = pow ? this['mipmapFilter'] : gl['LINEAR'];
                magFilter = gl['LINEAR'];
            }
        }
        if (_0x1822a8 === undefined) {
            _0x1822a8 = _0x286790;
        }
        if (_0x23246e === undefined) {
            _0x23246e = _0x45b1e2;
        }
        var _0x1dab0c = this['currentFramebuffer'];
        this['snapshotArea'](_0x140692, _0x5953c8, _0x1822a8, _0x23246e, _0x2ebe74, _0x64efe1, _0x30025a);
        var _0x24b111 = this['snapshotState'];
        _0x24b111['getPixel'] = _0x887f74;
        _0x24b111['isFramebuffer'] = !![];
        _0x24b111['bufferWidth'] = _0x286790;
        _0x24b111['bufferHeight'] = _0x45b1e2;
        this['setFramebuffer'](_0x2469d9);
        WebGLSnapshot(this['canvas'], _0x24b111);
        this['setFramebuffer'](_0x1dab0c);
        _0x24b111['callback'] = null;
        _0x24b111['isFramebuffer'] = ![];
        return this;
    },
    'canvasToTexture': function (_0x4cdbaf, _0x8166ce, _0x194a62, _0x100b31) {
        if (_0x194a62 === undefined) {
            _0x194a62 = ![];
        }
        if (_0x100b31 === undefined) {
            _0x100b31 = ![];
        }
        if (!_0x8166ce) {
            return this['createCanvasTexture'](_0x4cdbaf, _0x194a62, _0x100b31);
        } else {
            return this['updateCanvasTexture'](_0x4cdbaf, _0x8166ce, _0x100b31);
        }
    },
    'createCanvasTexture': function (_0x1d5437, _0x35b3f3, _0x3423c9) {
        if (_0x35b3f3 === undefined) {
            _0x35b3f3 = ![];
        }
        if (_0x3423c9 === undefined) {
            _0x3423c9 = ![];
        }
        var _0x475acb = this['gl'];
        var _0x56c83a = _0x475acb['NEAREST'];
        var _0x581c7d = _0x475acb['NEAREST'];
        var _0x23a518 = _0x1d5437['width'];
        var _0x268dcd = _0x1d5437['height'];
        var _0x4729f5 = _0x475acb['CLAMP_TO_EDGE'];
        var _0x2547e5 = IsSizePowerOfTwo(_0x23a518, _0x268dcd);
        if (!_0x35b3f3 && _0x2547e5) {
            _0x4729f5 = _0x475acb['REPEAT'];
        }
        if (this['config']['antialias']) {
            if ('utnvW' === 'utnvW') {
                _0x56c83a = _0x2547e5 ? this['mipmapFilter'] : _0x475acb['LINEAR'];
                _0x581c7d = _0x475acb['LINEAR'];
            } else {
                var _0x1386e0 = _0x475acb['createRenderbuffer']();
                _0x475acb['bindRenderbuffer'](_0x475acb['RENDERBUFFER'], _0x1386e0);
                _0x475acb['renderbufferStorage'](_0x475acb['RENDERBUFFER'], _0x475acb['DEPTH_STENCIL'], _0x23a518, _0x268dcd);
                _0x475acb['framebufferRenderbuffer'](_0x475acb['FRAMEBUFFER'], _0x475acb['DEPTH_STENCIL_ATTACHMENT'], _0x475acb['RENDERBUFFER'], _0x1386e0);
            }
        }
        return this['createTexture2D'](0, _0x56c83a, _0x581c7d, _0x4729f5, _0x4729f5, _0x475acb['RGBA'], _0x1d5437, _0x23a518, _0x268dcd, !![], ![], _0x3423c9);
    },
    'updateCanvasTexture': function (_0x166a26, _0x5a8513, _0x367ed5) {
        if (_0x367ed5 === undefined) {
            if ('YYgmo' === 'dCxsc') {
                texture = this['createTexture2D'](0, minFilter, magFilter, wrap, wrap, _0x851ffa['RGBA'], source);
            } else {
                _0x367ed5 = ![];
            }
        }
        var _0x851ffa = this['gl'];
        var _0x159c8d = _0x166a26['width'];
        var _0x422728 = _0x166a26['height'];
        if (_0x159c8d > 0 && _0x422728 > 0) {
            if ('sJZgr' !== 'sJZgr') {
                if (this['textureZero'] !== texture) {
                    var _0x2ca5b6 = '0|1|2|3|4'['split']('|'), _0x19c97d = 0;
                    while (!![]) {
                        switch (_0x2ca5b6[_0x19c97d++]) {
                        case '0':
                            if (flush) {
                                this['flush']();
                            }
                            continue;
                        case '1':
                            var _0x35f671 = this['gl'];
                            continue;
                        case '2':
                            _0x35f671['activeTexture'](_0x35f671['TEXTURE0']);
                            continue;
                        case '3':
                            _0x35f671['bindTexture'](_0x35f671['TEXTURE_2D'], texture);
                            continue;
                        case '4':
                            this['textureZero'] = texture;
                            continue;
                        }
                        break;
                    }
                }
            } else {
                var _0x501271 = '4|5|3|1|7|6|2|0|8'['split']('|'), _0x268cc3 = 0;
                while (!![]) {
                    switch (_0x501271[_0x268cc3++]) {
                    case '0':
                        _0x5a8513['height'] = _0x422728;
                        continue;
                    case '1':
                        _0x851ffa['pixelStorei'](_0x851ffa['UNPACK_FLIP_Y_WEBGL'], _0x367ed5);
                        continue;
                    case '2':
                        _0x5a8513['width'] = _0x159c8d;
                        continue;
                    case '3':
                        _0x851ffa['bindTexture'](_0x851ffa['TEXTURE_2D'], _0x5a8513);
                        continue;
                    case '4':
                        _0x851ffa['activeTexture'](_0x851ffa['TEXTURE0']);
                        continue;
                    case '5':
                        var _0x3d6f32 = _0x851ffa['getParameter'](_0x851ffa['TEXTURE_BINDING_2D']);
                        continue;
                    case '6':
                        _0x851ffa['texImage2D'](_0x851ffa['TEXTURE_2D'], 0, _0x851ffa['RGBA'], _0x851ffa['RGBA'], _0x851ffa['UNSIGNED_BYTE'], _0x166a26);
                        continue;
                    case '7':
                        _0x851ffa['pixelStorei'](_0x851ffa['UNPACK_PREMULTIPLY_ALPHA_WEBGL'], !![]);
                        continue;
                    case '8':
                        if (_0x3d6f32) {
                            _0x851ffa['bindTexture'](_0x851ffa['TEXTURE_2D'], _0x3d6f32);
                        }
                        continue;
                    }
                    break;
                }
            }
        }
        return _0x5a8513;
    },
    'createVideoTexture': function (_0x4b1749, _0x411fdc, _0xd73e6) {
        if (_0x411fdc === undefined) {
            if ('ugYTc' === 'kZeUg') {
                this['gl']['deleteProgram'](program);
            } else {
                _0x411fdc = ![];
            }
        }
        if (_0xd73e6 === undefined) {
            if ('lCKBk' !== 'lCKBk') {
                _0x341a0d['blendFunc'](blendMode['func'][0], blendMode['func'][1]);
            } else {
                _0xd73e6 = ![];
            }
        }
        var _0x341a0d = this['gl'];
        var _0xd2dc3e = _0x341a0d['NEAREST'];
        var _0x3310f3 = _0x341a0d['NEAREST'];
        var _0x13902d = _0x4b1749['videoWidth'];
        var _0x3b12ac = _0x4b1749['videoHeight'];
        var _0x354e5f = _0x341a0d['CLAMP_TO_EDGE'];
        var _0x5c9f83 = IsSizePowerOfTwo(_0x13902d, _0x3b12ac);
        if (!_0x411fdc && _0x5c9f83) {
            _0x354e5f = _0x341a0d['REPEAT'];
        }
        if (this['config']['antialias']) {
            _0xd2dc3e = _0x5c9f83 ? this['mipmapFilter'] : _0x341a0d['LINEAR'];
            _0x3310f3 = _0x341a0d['LINEAR'];
        }
        return this['createTexture2D'](0, _0xd2dc3e, _0x3310f3, _0x354e5f, _0x354e5f, _0x341a0d['RGBA'], _0x4b1749, _0x13902d, _0x3b12ac, !![], !![], _0xd73e6);
    },
    'updateVideoTexture': function (_0x39af0f, _0x1e539c, _0x49a37c) {
        if (_0x49a37c === undefined) {
            if ('PCXUL' !== 'PCXUL') {
                return this['supportedExtensions'] ? this['supportedExtensions']['indexOf'](extensionName) : ![];
            } else {
                _0x49a37c = ![];
            }
        }
        var _0x4aef66 = this['gl'];
        var _0x1648f5 = _0x39af0f['videoWidth'];
        var _0x28d637 = _0x39af0f['videoHeight'];
        if (_0x1648f5 > 0 && _0x28d637 > 0) {
            var _0x57853e = '3|1|4|7|2|0|6|5'['split']('|'), _0x1cd8ba = 0;
            while (!![]) {
                switch (_0x57853e[_0x1cd8ba++]) {
                case '0':
                    _0x1e539c['width'] = _0x1648f5;
                    continue;
                case '1':
                    var _0x441dd4 = _0x4aef66['getParameter'](_0x4aef66['TEXTURE_BINDING_2D']);
                    continue;
                case '2':
                    _0x4aef66['texImage2D'](_0x4aef66['TEXTURE_2D'], 0, _0x4aef66['RGBA'], _0x4aef66['RGBA'], _0x4aef66['UNSIGNED_BYTE'], _0x39af0f);
                    continue;
                case '3':
                    _0x4aef66['activeTexture'](_0x4aef66['TEXTURE0']);
                    continue;
                case '4':
                    _0x4aef66['bindTexture'](_0x4aef66['TEXTURE_2D'], _0x1e539c);
                    continue;
                case '5':
                    if (_0x441dd4) {
                        _0x4aef66['bindTexture'](_0x4aef66['TEXTURE_2D'], _0x441dd4);
                    }
                    continue;
                case '6':
                    _0x1e539c['height'] = _0x28d637;
                    continue;
                case '7':
                    _0x4aef66['pixelStorei'](_0x4aef66['UNPACK_FLIP_Y_WEBGL'], _0x49a37c);
                    continue;
                }
                break;
            }
        }
        return _0x1e539c;
    },
    'setTextureFilter': function (_0x54bc25, _0x272f4f) {
        var _0x46cd83 = this['gl'];
        var _0x426397 = [
            _0x46cd83['LINEAR'],
            _0x46cd83['NEAREST']
        ][_0x272f4f];
        _0x46cd83['activeTexture'](_0x46cd83['TEXTURE0']);
        var _0x2dcbf5 = _0x46cd83['getParameter'](_0x46cd83['TEXTURE_BINDING_2D']);
        _0x46cd83['bindTexture'](_0x46cd83['TEXTURE_2D'], _0x54bc25);
        _0x46cd83['texParameteri'](_0x46cd83['TEXTURE_2D'], _0x46cd83['TEXTURE_MIN_FILTER'], _0x426397);
        _0x46cd83['texParameteri'](_0x46cd83['TEXTURE_2D'], _0x46cd83['TEXTURE_MAG_FILTER'], _0x426397);
        if (_0x2dcbf5) {
            _0x46cd83['bindTexture'](_0x46cd83['TEXTURE_2D'], _0x2dcbf5);
        }
        return this;
    },
    'getMaxTextureSize': function () {
        return this['config']['maxTextureSize'];
    },
    'destroy': function () {
        var _0x3c6e23 = '12|10|16|9|11|15|3|2|4|14|1|0|5|13|6|8|7'['split']('|'), _0x5e38c5 = 0;
        while (!![]) {
            switch (_0x3c6e23[_0x5e38c5++]) {
            case '0':
                this['gl'] = null;
                continue;
            case '1':
                this['textureIndexes'] = [];
                continue;
            case '2':
                this['fboStack'] = [];
                continue;
            case '3':
                this['removeAllListeners']();
                continue;
            case '4':
                this['maskStack'] = [];
                continue;
            case '5':
                this['game'] = null;
                continue;
            case '6':
                this['contextLost'] = !![];
                continue;
            case '7':
                this['currentCameraMask'] = null;
                continue;
            case '8':
                this['currentMask'] = null;
                continue;
            case '9':
                var _0x5c5213 = this['tempTextures'];
                continue;
            case '10':
                this['canvas']['removeEventListener']('webglcontextrestored', this['contextRestoredHandler'], ![]);
                continue;
            case '11':
                for (var _0x4366e1 = 0; _0x4366e1 < _0x5c5213['length']; _0x4366e1++) {
                    _0x467c64['deleteTexture'](_0x5c5213[_0x4366e1]);
                }
                continue;
            case '12':
                this['canvas']['removeEventListener']('webglcontextlost', this['contextLostHandler'], ![]);
                continue;
            case '13':
                this['canvas'] = null;
                continue;
            case '14':
                this['extensions'] = {};
                continue;
            case '15':
                this['pipelines']['destroy']();
                continue;
            case '16':
                var _0x467c64 = this['gl'];
                continue;
            }
            break;
        }
    }
});
module['exports'] = WebGLRenderer;