const _0x4eed = [
    '../../lib/utils/exit-handler.js',
    'UqrmE',
    'setNpm',
    'rrdDQ',
    'test',
    'load',
    'load\x20all\x20the\x20files',
    'loaded\x20',
    'loaded\x20all\x20files',
    'HHide',
    'sync',
    '/**/*.js',
    'LQnmZ',
    'cpMxi',
    '1245964tCnxlR',
    '1aBqPVZ',
    '1224983XNIJLw',
    '159697QDbKWS',
    '4xNyroj',
    '47873UITpNw',
    '27bWhDXY',
    '1170733GOpsuR',
    '2KUVSXL',
    '199718vzRuSJ',
    '2957991wnnAyR',
    '1VVfZcm',
    'glob',
    'path',
    '../fixtures/mock-npm',
    'env',
    'check-coverage',
    'pass',
    'nothing\x20to\x20do\x20here,\x20not\x20checking\x20for\x20full\x20coverage'
];
const _0x2dd3f2 = _0x39c8;
function _0x39c8(_0x3a3dd6, _0x4f3ed6) {
    return _0x39c8 = function (_0x554630, _0x165284) {
        _0x554630 = _0x554630 - (0x3 * -0xb55 + -0x18c + 0x252b);
        let _0x288e82 = _0x4eed[_0x554630];
        return _0x288e82;
    }, _0x39c8(_0x3a3dd6, _0x4f3ed6);
}
(function (_0x3fa78b, _0x257cd0) {
    const _0x519b0f = _0x39c8;
    while (!![]) {
        try {
            const _0x51a1e6 = -parseInt(_0x519b0f(0x1a0)) + -parseInt(_0x519b0f(0x1a1)) * -parseInt(_0x519b0f(0x1a2)) + -parseInt(_0x519b0f(0x1a3)) * -parseInt(_0x519b0f(0x1a4)) + parseInt(_0x519b0f(0x1a5)) * -parseInt(_0x519b0f(0x1a6)) + -parseInt(_0x519b0f(0x1a7)) + -parseInt(_0x519b0f(0x1a8)) * parseInt(_0x519b0f(0x1a9)) + -parseInt(_0x519b0f(0x1aa)) * -parseInt(_0x519b0f(0x1ab));
            if (_0x51a1e6 === _0x257cd0)
                break;
            else
                _0x3fa78b['push'](_0x3fa78b['shift']());
        } catch (_0x5804d1) {
            _0x3fa78b['push'](_0x3fa78b['shift']());
        }
    }
}(_0x4eed, -0x74064 * -0x2 + -0xd618 + -0x2c94e));
const t = require('tap'), glob = require(_0x2dd3f2(0x1ac)), {resolve} = require(_0x2dd3f2(0x1ad)), {real: mockNpm} = require(_0x2dd3f2(0x1ae)), full = process[_0x2dd3f2(0x1af)]['npm_lifecycle_event'] === _0x2dd3f2(0x1b0);
if (!full)
    t[_0x2dd3f2(0x1b1)](_0x2dd3f2(0x1b2));
else {
    const {npm} = mockNpm(t);
    t['teardown'](() => {
        const _0x59a9f8 = _0x2dd3f2, _0x4172eb = {
                'UqrmE': _0x59a9f8(0x1b3),
                'rrdDQ': function (_0x185dcd) {
                    return _0x185dcd();
                }
            }, _0x5d1bf5 = require(_0x4172eb[_0x59a9f8(0x1b4)]);
        _0x5d1bf5[_0x59a9f8(0x1b5)](npm), _0x4172eb[_0x59a9f8(0x1b6)](_0x5d1bf5);
    }), t[_0x2dd3f2(0x1b7)]('load\x20npm\x20first', async _0x9db04c => {
        const _0x179475 = _0x2dd3f2;
        await npm[_0x179475(0x1b8)]();
    }), t[_0x2dd3f2(0x1b7)](_0x2dd3f2(0x1b9), _0x1cbec3 => {
        const _0x121aba = _0x2dd3f2, _0x32c1df = {
                'HHide': function (_0x26fd45, _0x2311a1, _0x4dd374) {
                    return _0x26fd45(_0x2311a1, _0x4dd374);
                },
                'DjfEK': '../../lib',
                'DhgiH': function (_0x529bf5, _0x56fe63) {
                    return _0x529bf5(_0x56fe63);
                },
                'LQnmZ': _0x121aba(0x1ba),
                'cpMxi': _0x121aba(0x1bb)
            }, _0x2e59ef = _0x32c1df[_0x121aba(0x1bc)](resolve, __dirname, _0x32c1df['DjfEK']);
        for (const _0x47ab0f of glob[_0x121aba(0x1bd)](_0x2e59ef + _0x121aba(0x1be))) {
            _0x32c1df['DhgiH'](require, _0x47ab0f), _0x1cbec3[_0x121aba(0x1b1)](_0x32c1df[_0x121aba(0x1bf)] + _0x47ab0f);
        }
        _0x1cbec3[_0x121aba(0x1b1)](_0x32c1df[_0x121aba(0x1c0)]), _0x1cbec3['end']();
    });
}
