module['exports'] = {
    'config': {
        'type': 'line',
        'data': {
            'datasets': [{
                    'data': [
                        10,
                        5,
                        0,
                        25,
                        78,
                        -10
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
                'padding': function (_0x4cd3f9) {
                    const _0x21b7db = _0x4cd3f9['chart']['width'] * 0.1;
                    const _0x247c8c = _0x4cd3f9['chart']['height'] * 0.1;
                    return {
                        'top': _0x247c8c,
                        'right': _0x21b7db,
                        'bottom': _0x247c8c,
                        'left': _0x21b7db
                    };
                }
            },
            'plugins': { 'legend': ![] },
            'scales': {
                'x': {
                    'type': 'category',
                    'ticks': {
                        'maxRotation': 0,
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
            'height': 150,
            'width': 512
        }
    }
};