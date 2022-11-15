module['exports'] = {
    'config': {
        'type': 'line',
        'data': {
            'datasets': [{
                    'data': [
                        0xa,
                        0x5,
                        0x0,
                        0x19,
                        0x4e,
                        -0xa
                    ]
                }],
            'labels': [
                'tick1',
                'tick2',
                'tick3',
                'tick4',
                'tick5',
                'tick6'
            ]
        },
        'options': {
            'layout': {
                'padding': function (_0x35fb9f) {
                    const _0x1b3697 = {
                            'kQORx': function (_0xda4f02, _0x2a061a) {
                                return _0xda4f02 * _0x2a061a;
                            },
                            'UAYTJ': function (_0x135775, _0x4c68cf) {
                                return _0x135775 * _0x4c68cf;
                            }
                        }, _0x51cbb5 = _0x1b3697['kQORx'](_0x35fb9f['chart']['width'], 0.1), _0x1b7c66 = _0x1b3697['UAYTJ'](_0x35fb9f['chart']['height'], 0.1);
                    return {
                        'top': _0x1b7c66,
                        'right': _0x51cbb5,
                        'bottom': _0x1b7c66,
                        'left': _0x51cbb5
                    };
                }
            },
            'plugins': { 'legend': ![] },
            'scales': {
                'x': {
                    'type': 'category',
                    'ticks': {
                        'maxRotation': 0x0,
                        'autoSkip': ![]
                    }
                },
                'y': {
                    'type': 'linear',
                    'position': 'right'
                }
            }
        }
    },
    'options': {
        'spriteText': !![],
        'canvas': {
            'height': 0x96,
            'width': 0x200
        }
    }
};
