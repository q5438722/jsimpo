var FillStyleCanvas = require('../FillStyleCanvas');
var LineStyleCanvas = require('../LineStyleCanvas');
var SetTransform = require('../../../renderer/canvas/utils/SetTransform');
var TriangleCanvasRenderer = function (_0x324ebc, _0x3a43aa, _0x356b92, _0x128a28) {
    _0x356b92['addToRenderList'](_0x3a43aa);
    var _0x9b35a0 = _0x324ebc['currentContext'];
    if (SetTransform(_0x324ebc, _0x9b35a0, _0x3a43aa, _0x356b92, _0x128a28)) {
        var _0x11aefb = '10|0|1|5|3|2|12|15|7|6|8|4|9|14|13|11'['split']('|'), _0x401ffb = 0;
        while (!![]) {
            switch (_0x11aefb[_0x401ffb++]) {
            case '0':
                var _0x524e83 = _0x3a43aa['_displayOriginY'];
                continue;
            case '1':
                var _0xd11c49 = _0x3a43aa['geom']['x1'] - _0x520424;
                continue;
            case '2':
                var _0x36683b = _0x3a43aa['geom']['y2'] - _0x524e83;
                continue;
            case '3':
                var _0x1d4731 = _0x3a43aa['geom']['x2'] - _0x520424;
                continue;
            case '4':
                _0x9b35a0['lineTo'](_0x467e89, _0x57191f);
                continue;
            case '5':
                var _0x3a2c3f = _0x3a43aa['geom']['y1'] - _0x524e83;
                continue;
            case '6':
                _0x9b35a0['moveTo'](_0xd11c49, _0x3a2c3f);
                continue;
            case '7':
                _0x9b35a0['beginPath']();
                continue;
            case '8':
                _0x9b35a0['lineTo'](_0x1d4731, _0x36683b);
                continue;
            case '9':
                _0x9b35a0['closePath']();
                continue;
            case '10':
                var _0x520424 = _0x3a43aa['_displayOriginX'];
                continue;
            case '11':
                _0x9b35a0['restore']();
                continue;
            case '12':
                var _0x467e89 = _0x3a43aa['geom']['x3'] - _0x520424;
                continue;
            case '13':
                if (_0x3a43aa['isStroked']) {
                    LineStyleCanvas(_0x9b35a0, _0x3a43aa);
                    _0x9b35a0['stroke']();
                }
                continue;
            case '14':
                if (_0x3a43aa['isFilled']) {
                    FillStyleCanvas(_0x9b35a0, _0x3a43aa);
                    _0x9b35a0['fill']();
                }
                continue;
            case '15':
                var _0x57191f = _0x3a43aa['geom']['y3'] - _0x524e83;
                continue;
            }
            break;
        }
    }
};
module['exports'] = TriangleCanvasRenderer;