'use strict';
const _0xe5cd = [
    'message',
    'disconnect',
    'EADDRINUSE',
    'argv',
    'env',
    'PIPE_NAME',
    'createServer',
    'send',
    'PIPE\x20should\x20have\x20been\x20in\x20use.',
    'error',
    'end',
    'listen',
    'listening',
    'once',
    'close',
    'Impossible\x20state',
    '784323QpwAvI',
    '777206vdDXCP',
    '40939XWSGeU',
    '1UZCnZZ',
    '1pJHaZi',
    '1622624TWTbEq',
    '1443678ESrhNC',
    '5GUyAOb',
    '58299WzcIep',
    '1vFnpeD',
    '2550307rvtdTz',
    'assert',
    'cluster',
    'fork',
    'net',
    'isPrimary',
    'length',
    'refresh',
    'mustCall',
    'online'
];
const _0x4409ae = _0x4a6c;
(function (_0x46721e, _0x9cf139) {
    const _0x57cd23 = _0x4a6c;
    while (!![]) {
        try {
            const _0x1a4787 = -parseInt(_0x57cd23(0x12d)) + -parseInt(_0x57cd23(0x12e)) + -parseInt(_0x57cd23(0x12f)) * -parseInt(_0x57cd23(0x130)) + parseInt(_0x57cd23(0x131)) * parseInt(_0x57cd23(0x132)) + -parseInt(_0x57cd23(0x133)) + parseInt(_0x57cd23(0x134)) * -parseInt(_0x57cd23(0x135)) + parseInt(_0x57cd23(0x136)) * parseInt(_0x57cd23(0x137));
            if (_0x1a4787 === _0x9cf139)
                break;
            else
                _0x46721e['push'](_0x46721e['shift']());
        } catch (_0x38fe36) {
            _0x46721e['push'](_0x46721e['shift']());
        }
    }
}(_0xe5cd, 0xdfeb0));
const common = require('../common'), assert = require(_0x4409ae(0x138)), cluster = require(_0x4409ae(0x139)), fork = require('child_process')[_0x4409ae(0x13a)], net = require(_0x4409ae(0x13b));
function _0x4a6c(_0x2bb513, _0x391ff1) {
    return _0x4a6c = function (_0xe5cdc2, _0x4a6ca1) {
        _0xe5cdc2 = _0xe5cdc2 - 0x12d;
        let _0x52cfc2 = _0xe5cd[_0xe5cdc2];
        return _0x52cfc2;
    }, _0x4a6c(_0x2bb513, _0x391ff1);
}
if (cluster[_0x4409ae(0x13c)] && process['argv'][_0x4409ae(0x13d)] !== 0x3) {
    const tmpdir = require('../common/tmpdir');
    tmpdir[_0x4409ae(0x13e)]();
    const PIPE_NAME = common['PIPE'], worker = cluster[_0x4409ae(0x13a)]({ 'PIPE_NAME': PIPE_NAME });
    cluster['on'](_0x4409ae(0x13a), common[_0x4409ae(0x13f)]()), worker['on'](_0x4409ae(0x140), common[_0x4409ae(0x13f)]()), worker['on'](_0x4409ae(0x141), common[_0x4409ae(0x13f)](function (_0x503ebb) {
        const _0x4f42aa = _0x4409ae;
        worker[_0x4f42aa(0x142)](), assert['strictEqual'](_0x503ebb['code'], _0x4f42aa(0x143));
    }));
} else {
    if (process[_0x4409ae(0x144)][_0x4409ae(0x13d)] !== 0x3) {
        const PIPE_NAME = process[_0x4409ae(0x145)][_0x4409ae(0x146)], cp = fork(__filename, [PIPE_NAME], { 'stdio': 'inherit' });
        cp['on'](_0x4409ae(0x141), common['mustCall'](function () {
            const _0x1baa9 = _0x4409ae, _0x370b4e = net[_0x1baa9(0x147)]()['listen'](PIPE_NAME, function () {
                    const _0x2d7f42 = _0x1baa9;
                    cp[_0x2d7f42(0x148)]('end'), process[_0x2d7f42(0x148)](_0x2d7f42(0x149));
                });
            _0x370b4e['on'](_0x1baa9(0x14a), function (_0x21fdcb) {
                const _0x4bee80 = _0x1baa9;
                cp[_0x4bee80(0x148)](_0x4bee80(0x14b)), process[_0x4bee80(0x148)](_0x21fdcb);
            });
        }));
    } else {
        if (process[_0x4409ae(0x144)][_0x4409ae(0x13d)] === 0x3) {
            const PIPE_NAME = process[_0x4409ae(0x144)][0x2], server = net[_0x4409ae(0x147)]()[_0x4409ae(0x14c)](PIPE_NAME, common[_0x4409ae(0x13f)](() => {
                    const _0x4a5a2a = _0x4409ae;
                    process[_0x4a5a2a(0x148)](_0x4a5a2a(0x14d));
                }));
            process[_0x4409ae(0x14e)]('message', common[_0x4409ae(0x13f)](() => server[_0x4409ae(0x14f)]()));
        } else
            assert['fail'](_0x4409ae(0x150));
    }
}
