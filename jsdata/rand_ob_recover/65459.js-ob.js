const t = require('tap'), glob = require(_0x2dd3f2(428)), {resolve} = require(_0x2dd3f2(429)), {real: mockNpm} = require(_0x2dd3f2(430)), full = process[_0x2dd3f2(431)]['npm_lifecycle_event'] === _0x2dd3f2(432);
if (!full)
    t[_0x2dd3f2(433)](_0x2dd3f2(434));
else {
    const {npm} = mockNpm(t);
    t['teardown'](() => {
        const _0x59a9f8 = _0x2dd3f2, _0x4172eb = {
                'UqrmE': _0x59a9f8(435),
                'rrdDQ': function (_0x185dcd) {
                    return _0x185dcd();
                }
            }, _0x5d1bf5 = require(_0x4172eb[_0x59a9f8(436)]);
        _0x5d1bf5[_0x59a9f8(437)](npm), _0x4172eb[_0x59a9f8(438)](_0x5d1bf5);
    }), t[_0x2dd3f2(439)]('load npm first', async _0x9db04c => {
        const _0x179475 = _0x2dd3f2;
        await npm[_0x179475(440)]();
    }), t[_0x2dd3f2(439)](_0x2dd3f2(441), _0x1cbec3 => {
        const _0x121aba = _0x2dd3f2, _0x32c1df = {
                'HHide': function (_0x26fd45, _0x2311a1, _0x4dd374) {
                    return _0x26fd45(_0x2311a1, _0x4dd374);
                },
                'DjfEK': '../../lib',
                'DhgiH': function (_0x529bf5, _0x56fe63) {
                    return _0x529bf5(_0x56fe63);
                },
                'LQnmZ': _0x121aba(442),
                'cpMxi': _0x121aba(443)
            }, _0x2e59ef = _0x32c1df[_0x121aba(444)](resolve, __dirname, _0x32c1df['DjfEK']);
        for (const _0x47ab0f of glob[_0x121aba(445)](_0x2e59ef + _0x121aba(446))) {
            _0x32c1df['DhgiH'](require, _0x47ab0f), _0x1cbec3[_0x121aba(433)](_0x32c1df[_0x121aba(447)] + _0x47ab0f);
        }
        _0x1cbec3[_0x121aba(433)](_0x32c1df[_0x121aba(448)]), _0x1cbec3['end']();
    });
}