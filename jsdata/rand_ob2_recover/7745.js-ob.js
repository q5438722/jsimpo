const path = require(_0x517f43(254)), spawn = require('cross-spawn'), httpServer = require(_0x517f43(255)), server = httpServer[_0x517f43(256)]({ 'root': path[_0x517f43(257)](__dirname, _0x517f43(258)) });
server[_0x517f43(259)](8080);
let args = process[_0x517f43(260)][_0x517f43(261)](2);
args['indexOf'](_0x517f43(262)) === -1 && (args = args[_0x517f43(263)]([
    _0x517f43(262),
    _0x517f43(264)
]));
args[_0x517f43(265)](_0x517f43(266)) === -1 && (args = args['concat']([
    _0x517f43(266),
    _0x517f43(267)
]));
const i = args[_0x517f43(265)](_0x517f43(268));
i > -1 && (args[i + 1] = _0x517f43(269) + args[i + 1] + _0x517f43(270));
const runner = spawn(_0x517f43(271), args, { 'stdio': _0x517f43(272) });
runner['on'](_0x517f43(273), function (_0x202ede) {
    const _0x143861 = _0x517f43;
    server[_0x143861(274)](), process[_0x143861(273)](_0x202ede);
}), runner['on'](_0x517f43(275), function (_0x1cfe64) {
    server['close']();
    throw _0x1cfe64;
});