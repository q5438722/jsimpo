var FillStyleCanvas = require('../FillStyleCanvas'), LineStyleCanvas = require(_0x2bf55d(198)), SetTransform = require(_0x2bf55d(199)), TriangleCanvasRenderer = function (_0x91bce6, _0x788219, _0x5d1570, _0xee3b7b) {
        var _0x3ebffa = _0x2bf55d, _0x252cb6 = {
                'cIJBe': function (_0x24dfe0, _0x5e3676, _0x4db87c, _0xe9243c, _0x4d5cc3, _0x6288da) {
                    return _0x24dfe0(_0x5e3676, _0x4db87c, _0xe9243c, _0x4d5cc3, _0x6288da);
                },
                'Jznjl': _0x3ebffa(200),
                'WFHqu': function (_0x37cffa, _0x37db1d) {
                    return _0x37cffa - _0x37db1d;
                },
                'KLDBr': function (_0x12aca1, _0x6e3d6c, _0x392d5d) {
                    return _0x12aca1(_0x6e3d6c, _0x392d5d);
                },
                'PgsLD': function (_0x5d1839, _0x29b72b) {
                    return _0x5d1839 - _0x29b72b;
                },
                'wQYss': function (_0x342dba, _0x4232e7) {
                    return _0x342dba - _0x4232e7;
                }
            };
        _0x5d1570[_0x3ebffa(201)](_0x788219);
        var _0xdbb3f5 = _0x91bce6[_0x3ebffa(202)];
        if (_0x252cb6[_0x3ebffa(203)](SetTransform, _0x91bce6, _0xdbb3f5, _0x788219, _0x5d1570, _0xee3b7b)) {
            var _0x14929f = _0x252cb6['Jznjl']['split']('|'), _0x302715 = 2095 + 1533 * 5 + -9760;
            while (!![]) {
                switch (_0x14929f[_0x302715++]) {
                case '0':
                    var _0x4c4703 = _0x252cb6[_0x3ebffa(204)](_0x788219['geom']['y3'], _0x5707cd);
                    continue;
                case '1':
                    var _0x144530 = _0x252cb6[_0x3ebffa(204)](_0x788219['geom']['y1'], _0x5707cd);
                    continue;
                case '2':
                    _0x788219[_0x3ebffa(205)] && (_0x252cb6['KLDBr'](LineStyleCanvas, _0xdbb3f5, _0x788219), _0xdbb3f5[_0x3ebffa(206)]());
                    continue;
                case '3':
                    _0xdbb3f5['closePath']();
                    continue;
                case '4':
                    _0xdbb3f5[_0x3ebffa(207)]();
                    continue;
                case '5':
                    var _0x5af509 = _0x252cb6[_0x3ebffa(208)](_0x788219[_0x3ebffa(209)]['x1'], _0x22eba4);
                    continue;
                case '6':
                    _0xdbb3f5[_0x3ebffa(210)](_0x542feb, _0x4c4703);
                    continue;
                case '7':
                    _0x788219[_0x3ebffa(211)] && (_0x252cb6['KLDBr'](FillStyleCanvas, _0xdbb3f5, _0x788219), _0xdbb3f5['fill']());
                    continue;
                case '8':
                    _0xdbb3f5[_0x3ebffa(212)]();
                    continue;
                case '9':
                    _0xdbb3f5['lineTo'](_0x2fc3c2, _0x17e386);
                    continue;
                case '10':
                    var _0x542feb = _0x252cb6[_0x3ebffa(208)](_0x788219[_0x3ebffa(209)]['x3'], _0x22eba4);
                    continue;
                case '11':
                    _0xdbb3f5[_0x3ebffa(213)](_0x5af509, _0x144530);
                    continue;
                case '12':
                    var _0x17e386 = _0x252cb6['PgsLD'](_0x788219['geom']['y2'], _0x5707cd);
                    continue;
                case '13':
                    var _0x2fc3c2 = _0x252cb6[_0x3ebffa(214)](_0x788219[_0x3ebffa(209)]['x2'], _0x22eba4);
                    continue;
                case '14':
                    var _0x22eba4 = _0x788219['_displayOriginX'];
                    continue;
                case '15':
                    var _0x5707cd = _0x788219[_0x3ebffa(215)];
                    continue;
                }
                break;
            }
        }
    };
module[_0x2bf55d(216)] = TriangleCanvasRenderer;