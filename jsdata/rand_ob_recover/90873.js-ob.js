const {writeFileSync} = require('fs'), yargs = require('yargs'), {getPackages} = require(_0x56df9f(252)), PackageGraph = require('@lerna/package-graph'), semver = require(_0x56df9f(253));
function _0x568a(_0x4171cf, _0x244d86) {
    return _0x568a = function (_0x1cf2f0, _0x3b06d6) {
        _0x1cf2f0 = _0x1cf2f0 - (4735 * 1 + 2432 * 1 + -6924);
        let _0x10d730 = _0x49f8[_0x1cf2f0];
        return _0x10d730;
    }, _0x568a(_0x4171cf, _0x244d86);
}
let warned = ![];
const argv = yargs['option']('fix', {
    'default': ![],
    'describe': _0x56df9f(254)
})['option'](_0x56df9f(255), {
    'default': ![],
    'describe': _0x56df9f(256)
})[_0x56df9f(257)];
getPackages(process[_0x56df9f(258)]())['then'](_0x32820d => {
    const _0x57c0ea = _0x56df9f, _0x4ee3a7 = {
            'pIoiE': function (_0x5395da, _0x54dadc, _0x9c22d1) {
                return _0x5395da(_0x54dadc, _0x9c22d1);
            }
        }, _0x37b699 = new PackageGraph(_0x32820d, _0x57c0ea(259), !![]);
    _0x37b699['forEach']((_0x34ee73, _0x36cc20) => {
        const _0x21e8f1 = _0x57c0ea;
        let _0x1127de = Array[_0x21e8f1(260)](_0x34ee73[_0x21e8f1(261)][_0x21e8f1(262)]())[_0x21e8f1(263)](_0x462b8d => !semver[_0x21e8f1(264)](_0x37b699[_0x21e8f1(265)](_0x462b8d[_0x21e8f1(266)])[_0x21e8f1(267)], _0x462b8d[_0x21e8f1(268)]));
        argv[_0x21e8f1(255)] && (_0x1127de = _0x1127de[_0x21e8f1(263)](_0x1ae61a => _0x1ae61a[_0x21e8f1(268)] !== _0x21e8f1(269)));
        if (!_0x1127de[_0x21e8f1(270)])
            return;
        const _0x482e2d = _0x1127de['map'](_0x3319ff => _0x21e8f1(271) + _0x3319ff[_0x21e8f1(266)] + '@' + _0x3319ff['fetchSpec'] + _0x21e8f1(272) + (_0x21e8f1(273) + _0x3319ff[_0x21e8f1(266)] + '@' + _0x37b699[_0x21e8f1(265)](_0x3319ff[_0x21e8f1(266)])['version'] + _0x21e8f1(274)))['join']('\n');
        console[_0x21e8f1(275)](_0x34ee73['name'] + ': \n' + _0x482e2d), warned = !![];
        if (argv[_0x21e8f1(276)]) {
            const _0x1ae74d = _0x34ee73[_0x21e8f1(277)], _0x30afb7 = _0x1ae74d[_0x21e8f1(278)](), _0x172602 = [
                    _0x21e8f1(279),
                    _0x21e8f1(280),
                    _0x21e8f1(281)
                ];
            _0x1127de['forEach'](_0x38c5ba => {
                const _0x4c98b3 = _0x21e8f1;
                _0x172602[_0x4c98b3(282)](_0xd23a73 => {
                    const _0x45a5d1 = _0x4c98b3;
                    _0x1ae74d[_0xd23a73] && _0x1ae74d[_0xd23a73][_0x38c5ba[_0x45a5d1(266)]] && (_0x30afb7[_0xd23a73][_0x38c5ba[_0x45a5d1(266)]] = '^' + _0x37b699[_0x45a5d1(265)](_0x38c5ba['name'])['version']);
                });
            }), _0x4ee3a7[_0x21e8f1(283)](writeFileSync, _0x1ae74d['location'] + '/package.json', JSON[_0x21e8f1(284)](_0x30afb7, null, 5 * 164 + -62 * 65 + -73 * -44));
        }
    }), warned && process['exit'](7872 + 1 * 8234 + -16105);
});