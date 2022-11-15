var FillStyleCanvas = require(_0x16a5a9(402)), LineStyleCanvas = require('../LineStyleCanvas'), SetTransform = require('../../../renderer/canvas/utils/SetTransform'), TriangleCanvasRenderer = function (_0x270ca7, _0x44f8de, _0x2e265d, _0x432abb) {
        var _0x42fa86 = _0x16a5a9, _0x1ae54d = {
                'EFXAO': function (_0x5e06d0, _0x164430, _0x4688a9, _0x28e621, _0x5c9ba7, _0xdeb4a5) {
                    return _0x5e06d0(_0x164430, _0x4688a9, _0x28e621, _0x5c9ba7, _0xdeb4a5);
                },
                'VqhIP': '10|2|11|8|7|6|14|3|9|13|1|5|0|15|4|12',
                'nybGa': function (_0x529319, _0x552219) {
                    return _0x529319 - _0x552219;
                },
                'URMKG': function (_0x5c1fb8, _0x5be8e4) {
                    return _0x5c1fb8 - _0x5be8e4;
                },
                'lEpHA': function (_0x2b39c0, _0x539295) {
                    return _0x2b39c0 - _0x539295;
                },
                'EIPGx': function (_0x13b787, _0x2b3136) {
                    return _0x13b787 - _0x2b3136;
                },
                'uqkUJ': function (_0x4c96f7, _0x32d15d, _0x8aaf0c) {
                    return _0x4c96f7(_0x32d15d, _0x8aaf0c);
                }
            };
        _0x2e265d[_0x42fa86(403)](_0x44f8de);
        var _0x2a82de = _0x270ca7[_0x42fa86(404)];
        if (_0x1ae54d[_0x42fa86(405)](SetTransform, _0x270ca7, _0x2a82de, _0x44f8de, _0x2e265d, _0x432abb)) {
            var _0x15f223 = _0x1ae54d[_0x42fa86(406)][_0x42fa86(407)]('|'), _0x38a44e = -9116 + -4 * -572 + 6828;
            while (!![]) {
                switch (_0x15f223[_0x38a44e++]) {
                case '0':
                    _0x2a82de[_0x42fa86(408)]();
                    continue;
                case '1':
                    _0x2a82de[_0x42fa86(409)](_0x21d6d7, _0x16f264);
                    continue;
                case '2':
                    var _0x29c8a8 = _0x44f8de['_displayOriginY'];
                    continue;
                case '3':
                    var _0x4a84cf = _0x1ae54d['nybGa'](_0x44f8de[_0x42fa86(410)]['y3'], _0x29c8a8);
                    continue;
                case '4':
                    _0x44f8de[_0x42fa86(411)] && (LineStyleCanvas(_0x2a82de, _0x44f8de), _0x2a82de[_0x42fa86(412)]());
                    continue;
                case '5':
                    _0x2a82de[_0x42fa86(409)](_0x3647ef, _0x4a84cf);
                    continue;
                case '6':
                    var _0x16f264 = _0x44f8de[_0x42fa86(410)]['y2'] - _0x29c8a8;
                    continue;
                case '7':
                    var _0x21d6d7 = _0x1ae54d[_0x42fa86(413)](_0x44f8de[_0x42fa86(410)]['x2'], _0x172324);
                    continue;
                case '8':
                    var _0x31150d = _0x1ae54d[_0x42fa86(414)](_0x44f8de[_0x42fa86(410)]['y1'], _0x29c8a8);
                    continue;
                case '9':
                    _0x2a82de['beginPath']();
                    continue;
                case '10':
                    var _0x172324 = _0x44f8de[_0x42fa86(415)];
                    continue;
                case '11':
                    var _0x23be27 = _0x1ae54d[_0x42fa86(416)](_0x44f8de[_0x42fa86(410)]['x1'], _0x172324);
                    continue;
                case '12':
                    _0x2a82de[_0x42fa86(417)]();
                    continue;
                case '13':
                    _0x2a82de['moveTo'](_0x23be27, _0x31150d);
                    continue;
                case '14':
                    var _0x3647ef = _0x1ae54d[_0x42fa86(416)](_0x44f8de[_0x42fa86(410)]['x3'], _0x172324);
                    continue;
                case '15':
                    _0x44f8de[_0x42fa86(418)] && (_0x1ae54d[_0x42fa86(419)](FillStyleCanvas, _0x2a82de, _0x44f8de), _0x2a82de['fill']());
                    continue;
                }
                break;
            }
        }
    };
module[_0x16a5a9(420)] = TriangleCanvasRenderer;