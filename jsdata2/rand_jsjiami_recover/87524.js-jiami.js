function drawMousePoint(_0x165cc2, _0x31dd45) {
    _0x165cc2['beginPath']();
    _0x165cc2['arc'](_0x31dd45['x'], _0x31dd45['y'], 8, 0, Math['PI'] * 2);
    _0x165cc2['fillStyle'] = 'yellow';
    _0x165cc2['fill']();
}
const canvas = document['createElement']('canvas');
canvas['width'] = 512;
canvas['height'] = 512;
const ctx = canvas['getContext']('2d');
module['exports'] = {
    'config': {
        'type': 'pie',
        'data': {
            'datasets': [{
                    'backgroundColor': [
                        'red',
                        'green',
                        'blue'
                    ],
                    'hoverBackgroundColor': 'black',
                    'data': [
                        1,
                        1,
                        1
                    ]
                }]
        }
    },
    'options': {
        'canvas': {
            'width': 512,
            'height': 512
        },
        async 'run'(_0x42940e) {
            ctx['drawImage'](_0x42940e['canvas'], 0, 0, 256, 256);
            const _0x560e6a = _0x42940e['getDatasetMeta'](0)['data'][0];
            const _0x159938 = _0x560e6a['getCenterPoint']();
            await jasmine['triggerMouseEvent'](_0x42940e, 'mousemove', _0x560e6a);
            drawMousePoint(_0x42940e['ctx'], _0x159938);
            ctx['drawImage'](_0x42940e['canvas'], 256, 0, 256, 256);
            _0x42940e['toggleDataVisibility'](0);
            _0x42940e['update']();
            drawMousePoint(_0x42940e['ctx'], _0x159938);
            ctx['drawImage'](_0x42940e['canvas'], 0, 256, 256, 256);
            await jasmine['triggerMouseEvent'](_0x42940e, 'mouseout', _0x560e6a);
            ctx['drawImage'](_0x42940e['canvas'], 256, 256, 256, 256);
            Chart['helpers']['clearCanvas'](_0x42940e['canvas']);
            _0x42940e['ctx']['drawImage'](canvas, 0, 0);
        }
    }
};