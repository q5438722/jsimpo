Tinytest['add']('reload - migrate', function (_0x2e6b95) {
    Reload['_withFreshProvidersForTest'](function () {
        let _0x11a328 = ![];
        Reload['_onMigrate']('reload test data 1', function (_0x17b5e3, _0x59a4e6) {
            return [
                _0x11a328,
                { 'foo': 'bar' }
            ];
        });
        Reload['_onMigrate']('reload test data 2', function (_0x4857b0, _0x1f0f9a) {
            return [
                !![],
                { 'baz': 'bar' }
            ];
        });
        _0x2e6b95['isFalse'](Reload['_migrate'](function () {
        }));
        _0x2e6b95['isFalse'](Reload['_getData']());
        _0x2e6b95['isTrue'](Reload['_migrate'](function () {
        }, { 'immediateMigration': !![] }));
        var _0x17d846 = JSON['parse'](Reload['_getData']());
        _0x2e6b95['equal'](_0x17d846['data']['reload test data 1'], { 'foo': 'bar' });
        _0x2e6b95['equal'](_0x17d846['data']['reload test data 2'], { 'baz': 'bar' });
        _0x2e6b95['equal'](_0x17d846['reload'], !![]);
        _0x11a328 = !![];
        _0x2e6b95['isTrue'](Reload['_migrate'](function () {
        }));
        _0x17d846 = JSON['parse'](Reload['_getData']());
        _0x2e6b95['equal'](_0x17d846['data']['reload test data 1'], { 'foo': 'bar' });
        _0x2e6b95['equal'](_0x17d846['data']['reload test data 2'], { 'baz': 'bar' });
        _0x2e6b95['equal'](_0x17d846['reload'], !![]);
    });
});