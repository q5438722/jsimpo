function drawMousePoint(_0x1c60d0, _0x101094) {
    const _0x4c2ac7 = _0xa890;
    _0x1c60d0[_0x4c2ac7(224)](), _0x1c60d0[_0x4c2ac7(225)](_0x101094['x'], _0x101094['y'], 8, 0, Math['PI'] * 2), _0x1c60d0[_0x4c2ac7(226)] = _0x4c2ac7(227), _0x1c60d0['fill']();
}
const canvas = document['createElement'](_0xbfe210(228));
canvas['width'] = 512, canvas[_0xbfe210(229)] = 512;
const ctx = canvas[_0xbfe210(230)]('2d');
module[_0xbfe210(231)] = {
    'config': {
        'type': _0xbfe210(232),
        'data': {
            'datasets': [{
                    'backgroundColor': [
                        _0xbfe210(233),
                        _0xbfe210(234),
                        _0xbfe210(235)
                    ],
                    'hoverBackgroundColor': _0xbfe210(236),
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
        async 'run'(_0x3ece75) {
            const _0x201815 = _0xbfe210;
            ctx[_0x201815(237)](_0x3ece75[_0x201815(228)], 0, 0, 256, 256);
            const _0x23a84a = _0x3ece75[_0x201815(238)](0)['data'][0], _0x435788 = _0x23a84a[_0x201815(239)]();
            await jasmine[_0x201815(240)](_0x3ece75, _0x201815(241), _0x23a84a), drawMousePoint(_0x3ece75['ctx'], _0x435788), ctx[_0x201815(237)](_0x3ece75[_0x201815(228)], 256, 0, 256, 256), _0x3ece75[_0x201815(242)](0), _0x3ece75['update'](), drawMousePoint(_0x3ece75['ctx'], _0x435788), ctx[_0x201815(237)](_0x3ece75[_0x201815(228)], 0, 256, 256, 256), await jasmine[_0x201815(240)](_0x3ece75, _0x201815(243), _0x23a84a), ctx[_0x201815(237)](_0x3ece75[_0x201815(228)], 256, 256, 256, 256), Chart[_0x201815(244)][_0x201815(245)](_0x3ece75[_0x201815(228)]), _0x3ece75[_0x201815(246)][_0x201815(237)](canvas, 0, 0);
        }
    }
};