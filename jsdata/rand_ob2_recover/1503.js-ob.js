const dalek = require(_0x4d4ac7(438)), Grim = require(_0x4d4ac7(439));
module['exports'] = {
    'activate'() {
        const _0x1956a2 = _0x4d4ac7;
        atom[_0x1956a2(440)]['onDidActivateInitialPackages'](async () => {
            const _0x2bf49f = _0x1956a2, _0x270c93 = await dalek['enumerate']();
            for (let _0x35e7d8 = 0; _0x35e7d8 < _0x270c93['length']; _0x35e7d8++) {
                const _0x180f29 = _0x270c93[_0x35e7d8];
                Grim[_0x2bf49f(441)](_0x2bf49f(442) + _0x180f29 + _0x2bf49f(443), { 'packageName': _0x180f29 });
            }
        });
    }
};