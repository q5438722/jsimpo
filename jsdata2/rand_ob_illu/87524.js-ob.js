const _0x7dc7 = ['161970EtOwWh', '590730ZLnCvT', '66325foGWxr', '460185EuUdGD', '260017xHfPdr', '827SUQZEq', '1489wukjpM', 'yellow', 'arc', 'vIrEW', 'fillStyle', 'WPHIz', 'fill', 'createElement', 'canvas', 'width', 'height', 'getContext', 'exports', 'red', 'blue', 'black', 'mousemove', 'mouseout', 'drawImage', 'data', 'getCenterPoint', 'triggerMouseEvent', 'ctx', 'toggleDataVisibility', 'update', 'AncmY', 'uHdkF', '139fuzlln', '338DeVVsi'];

function _0x5822(_0x4b53aa, _0x337ae6) {
    return _0x5822 = function (_0xef3dd4, _0x2c100a) {
        _0xef3dd4 = _0xef3dd4 - 386;
        const _0x4e7cf4 = _0x7dc7[_0xef3dd4];

        return _0x4e7cf4;
    }, _0x5822(_0x4b53aa, _0x337ae6);
}
const _0x4a4798 = _0x5822;

(function (_0x4c12d9, _0x1d0aa1) {
    const _0x517bf9 = _0x5822;

    while (true) {
        try {
            const _0x1608a2 = -parseInt(_0x517bf9(0x182)) * parseInt(_0x517bf9(0x183)) + -parseInt(_0x517bf9(0x184)) + -parseInt(_0x517bf9(0x185)) + parseInt(_0x517bf9(0x186)) + -parseInt(_0x517bf9(0x187)) + parseInt(_0x517bf9(0x188)) + parseInt(_0x517bf9(0x189)) * parseInt(_0x517bf9(0x18a));

            if (_0x1608a2 === _0x1d0aa1) break;else _0x4c12d9.push(_0x4c12d9.shift());
        } catch (_0x4ff83d) {
            _0x4c12d9.push(_0x4c12d9.shift());
        }
    }
})(_0x7dc7, 297878);
function drawMousePoint(_0x354cb4, _0x48bd37) {
    const _0x4d34b7 = _0x5822;
    const _0xee98c5 = {
        'vIrEW': function (_0x382f21, _0x584cf4) {
            return _0x382f21 * _0x584cf4;
        },
        'WPHIz': _0x4d34b7(0x18b)
    };

    _0x354cb4.beginPath(), _0x354cb4[_0x4d34b7(0x18c)](_0x48bd37.x, _0x48bd37.y, 8, 0, _0xee98c5[_0x4d34b7(0x18d)](Math.PI, 2)), _0x354cb4[_0x4d34b7(0x18e)] = _0xee98c5[_0x4d34b7(0x18f)], _0x354cb4[_0x4d34b7(0x190)]();
}

const canvas = document[_0x4a4798(0x191)](_0x4a4798(0x192));

canvas[_0x4a4798(0x193)] = 512, canvas[_0x4a4798(0x194)] = 512;

const ctx = canvas[_0x4a4798(0x195)]('2d');

module[_0x4a4798(0x196)] = {
    'config': {
        'type': 'pie',
        'data': {
            'datasets': [{
                'backgroundColor': [_0x4a4798(0x197), 'green', _0x4a4798(0x198)],
                'hoverBackgroundColor': _0x4a4798(0x199),
                'data': [1, 1, 1]
            }]
        }
    },
    'options': {
        'canvas': {
            'width': 0x200,
            'height': 0x200
        },
        async 'run'(_0x3b24d4) {
            const _0x51acc6 = _0x4a4798;
            const _0xd23b63 = {
                'EeIFZ': _0x51acc6(0x19a),
                'AncmY': function (_0x44af1a, _0x233470, _0x551fa0) {
                    return _0x44af1a(_0x233470, _0x551fa0);
                },
                'uHdkF': _0x51acc6(0x19b)
            };

            ctx[_0x51acc6(0x19c)](_0x3b24d4[_0x51acc6(0x192)], 0, 0, 256, 256);

            const _0x3b986e = _0x3b24d4.getDatasetMeta(0)[_0x51acc6(0x19d)][0];

            const _0x20bdb8 = _0x3b986e[_0x51acc6(0x19e)]();

            await jasmine[_0x51acc6(0x19f)](_0x3b24d4, _0xd23b63.EeIFZ, _0x3b986e), _0xd23b63.AncmY(drawMousePoint, _0x3b24d4[_0x51acc6(0x1a0)], _0x20bdb8), ctx[_0x51acc6(0x19c)](_0x3b24d4[_0x51acc6(0x192)], 256, 0, 256, 256), _0x3b24d4[_0x51acc6(0x1a1)](0), _0x3b24d4[_0x51acc6(0x1a2)](), _0xd23b63[_0x51acc6(0x1a3)](drawMousePoint, _0x3b24d4[_0x51acc6(0x1a0)], _0x20bdb8), ctx[_0x51acc6(0x19c)](_0x3b24d4[_0x51acc6(0x192)], 0, 256, 256, 256), await jasmine.triggerMouseEvent(_0x3b24d4, _0xd23b63[_0x51acc6(0x1a4)], _0x3b986e), ctx[_0x51acc6(0x19c)](_0x3b24d4[_0x51acc6(0x192)], 256, 256, 256, 256), Chart.helpers.clearCanvas(_0x3b24d4[_0x51acc6(0x192)]), _0x3b24d4[_0x51acc6(0x1a0)][_0x51acc6(0x19c)](canvas, 0, 0);
        }
    }
};
