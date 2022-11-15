/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var FillStyleCanvas = require('../FillStyleCanvas'), LineStyleCanvas = require('../LineStyleCanvas'), SetTransform = require('../../../renderer/canvas/utils/SetTransform'), TriangleCanvasRenderer = function (_0x48fcc3, _0x580f35, _0x17dd54, _0x32f04e) {
        var _0x2e6b19 = {
            'PNDUh': function (_0x378f0e, _0x12a0a3, _0x14f310, _0x52dd25, _0xaa72e8, _0x567728) {
                return _0x378f0e(_0x12a0a3, _0x14f310, _0x52dd25, _0xaa72e8, _0x567728);
            },
            'FPsMt': '8|14|5|12|7|15|3|10|6|4|11|0|13|1|2|9',
            'gmAmC': function (_0x24d9a0, _0x28216f, _0x4e1cb9) {
                return _0x24d9a0(_0x28216f, _0x4e1cb9);
            },
            'BrWcm': function (_0x4bf273, _0x35ba98, _0x1b79b1) {
                return _0x4bf273(_0x35ba98, _0x1b79b1);
            },
            'dfymY': function (_0x5a646f, _0x148e6e) {
                return _0x5a646f - _0x148e6e;
            },
            'jqCCR': function (_0x16a674, _0x313836) {
                return _0x16a674 - _0x313836;
            },
            'xUJGy': function (_0x1f89f1, _0x14b06a) {
                return _0x1f89f1 - _0x14b06a;
            }
        };
        _0x17dd54['addToRenderList'](_0x580f35);
        var _0x1f0470 = _0x48fcc3['currentContext'];
        if (_0x2e6b19['PNDUh'](SetTransform, _0x48fcc3, _0x1f0470, _0x580f35, _0x17dd54, _0x32f04e)) {
            var _0x210abb = _0x2e6b19['FPsMt']['split']('|'), _0x14aa95 = 0x0;
            while (!![]) {
                switch (_0x210abb[_0x14aa95++]) {
                case '0':
                    _0x1f0470['lineTo'](_0xdc9280, _0x1c5850);
                    continue;
                case '1':
                    _0x580f35['isFilled'] && (_0x2e6b19['gmAmC'](FillStyleCanvas, _0x1f0470, _0x580f35), _0x1f0470['fill']());
                    continue;
                case '2':
                    _0x580f35['isStroked'] && (_0x2e6b19['BrWcm'](LineStyleCanvas, _0x1f0470, _0x580f35), _0x1f0470['stroke']());
                    continue;
                case '3':
                    var _0xdc9280 = _0x2e6b19['dfymY'](_0x580f35['geom']['x3'], _0x57a9de);
                    continue;
                case '4':
                    _0x1f0470['moveTo'](_0x4da95d, _0x11b9c6);
                    continue;
                case '5':
                    var _0x4da95d = _0x2e6b19['jqCCR'](_0x580f35['geom']['x1'], _0x57a9de);
                    continue;
                case '6':
                    _0x1f0470['beginPath']();
                    continue;
                case '7':
                    var _0x412473 = _0x2e6b19['jqCCR'](_0x580f35['geom']['x2'], _0x57a9de);
                    continue;
                case '8':
                    var _0x57a9de = _0x580f35['_displayOriginX'];
                    continue;
                case '9':
                    _0x1f0470['restore']();
                    continue;
                case '10':
                    var _0x1c5850 = _0x2e6b19['jqCCR'](_0x580f35['geom']['y3'], _0x400619);
                    continue;
                case '11':
                    _0x1f0470['lineTo'](_0x412473, _0x22d7a7);
                    continue;
                case '12':
                    var _0x11b9c6 = _0x2e6b19['jqCCR'](_0x580f35['geom']['y1'], _0x400619);
                    continue;
                case '13':
                    _0x1f0470['closePath']();
                    continue;
                case '14':
                    var _0x400619 = _0x580f35['_displayOriginY'];
                    continue;
                case '15':
                    var _0x22d7a7 = _0x2e6b19['xUJGy'](_0x580f35['geom']['y2'], _0x400619);
                    continue;
                }
                break;
            }
        }
    };
module['exports'] = TriangleCanvasRenderer;
