const io = require('socket.io')();
io['on']('connection', _0x25b73 => {
    console['log']('connect:\x20' + _0x25b73['id']), _0x25b73['on']('disconnect', () => {
        console['log']('disconnect:\x20' + _0x25b73['id']);
    });
}), io['listen'](-0xc1 * 0x1 + -0x4 * -0x6f1 + -0xf4b, { 'cors': { 'origin': ['http://localhost:19006'] } }), setInterval(() => {
    io['emit']('message', new Date()['toISOString']());
}, 0x49 * 0x11 + -0x863 + 0x772);
