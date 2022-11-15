const _0x6840 = [
    '817598hjTmDL',
    '1lLBHVB',
    '4018OgjRub',
    '294FBkttI',
    '1FSozgs',
    '670639NfzRwR',
    '551886fMBFNJ',
    '2oWYSMt',
    '33QPEnHr',
    '152407jjvXjK',
    'tap',
    'glob',
    'path',
    '../fixtures/mock-npm',
    'env',
    'npm_lifecycle_event',
    'check-coverage',
    'teardown',
    '../../lib/utils/exit-handler.js',
    'setNpm',
    'test',
    'load',
    '../../lib',
    'sync',
    'pass',
    'loaded\x20',
    'loaded\x20all\x20files',
    '730NiZjFI',
    '103yyvYlV',
    '52199fShcoQ',
    '11RXHMOl'
];
const _0x226bc1 = _0x3cbe;
(function (_0x55e7b8, _0xc1b289) {
    const _0x3112eb = _0x3cbe;
    while (!![]) {
        try {
            const _0x375f12 = -parseInt(_0x3112eb(0x69)) * parseInt(_0x3112eb(0x6a)) + -parseInt(_0x3112eb(0x6b)) * parseInt(_0x3112eb(0x6c)) + -parseInt(_0x3112eb(0x6d)) * parseInt(_0x3112eb(0x6e)) + parseInt(_0x3112eb(0x6f)) * -parseInt(_0x3112eb(0x70)) + parseInt(_0x3112eb(0x71)) * -parseInt(_0x3112eb(0x72)) + -parseInt(_0x3112eb(0x73)) * parseInt(_0x3112eb(0x74)) + parseInt(_0x3112eb(0x75)) * parseInt(_0x3112eb(0x76));
            if (_0x375f12 === _0xc1b289)
                break;
            else
                _0x55e7b8['push'](_0x55e7b8['shift']());
        } catch (_0x34fa5c) {
            _0x55e7b8['push'](_0x55e7b8['shift']());
        }
    }
}(_0x6840, 0x9421f));
const t = require(_0x226bc1(0x77)), glob = require(_0x226bc1(0x78)), {resolve} = require(_0x226bc1(0x79)), {real: mockNpm} = require(_0x226bc1(0x7a)), full = process[_0x226bc1(0x7b)][_0x226bc1(0x7c)] === _0x226bc1(0x7d);
function _0x3cbe(_0x3abc72, _0x30dc29) {
    return _0x3cbe = function (_0x68406f, _0x3cbe36) {
        _0x68406f = _0x68406f - 0x69;
        let _0x1317fd = _0x6840[_0x68406f];
        return _0x1317fd;
    }, _0x3cbe(_0x3abc72, _0x30dc29);
}
if (!full)
    t['pass']('nothing\x20to\x20do\x20here,\x20not\x20checking\x20for\x20full\x20coverage');
else {
    const {npm} = mockNpm(t);
    t[_0x226bc1(0x7e)](() => {
        const _0x39ea70 = _0x226bc1, _0x58ed67 = require(_0x39ea70(0x7f));
        _0x58ed67[_0x39ea70(0x80)](npm), _0x58ed67();
    }), t[_0x226bc1(0x81)]('load\x20npm\x20first', async _0x10607d => {
        const _0x2adf26 = _0x226bc1;
        await npm[_0x2adf26(0x82)]();
    }), t[_0x226bc1(0x81)]('load\x20all\x20the\x20files', _0x49b69c => {
        const _0x573fb0 = _0x226bc1, _0x32194a = resolve(__dirname, _0x573fb0(0x83));
        for (const _0x176400 of glob[_0x573fb0(0x84)](_0x32194a + '/**/*.js')) {
            require(_0x176400), _0x49b69c[_0x573fb0(0x85)](_0x573fb0(0x86) + _0x176400);
        }
        _0x49b69c['pass'](_0x573fb0(0x87)), _0x49b69c['end']();
    });
}
