const io = require('socket.io')();
io['on']('connection', _0x3891ef => {
    const _0x58d16e = _0x2253;
    console[_0x58d16e(439)]('connect: ' + _0x3891ef['id']), _0x3891ef['on'](_0x58d16e(440), () => {
        console['log']('disconnect: ' + _0x3891ef['id']);
    });
}), io[_0x917404(441)](3000, { 'cors': { 'origin': [_0x917404(442)] } }), setInterval(() => {
    const _0x4b8f10 = _0x917404;
    io[_0x4b8f10(443)](_0x4b8f10(444), new Date()[_0x4b8f10(445)]());
}, 1000);