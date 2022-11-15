const _0x2e50 = [
    'length',
    'map',
    'resolve',
    'File',
    '11vNTCfU',
    '33869GcFGpy',
    '121999kfuxmR',
    '750732LdHqAK',
    '559359HxeWxQ',
    '525669SllkVQ',
    '1PnRmud',
    '36996PTnIGF',
    '1395050nQvbhw',
    './interop-default',
    'replace',
    'exports',
    'link',
    'definition',
    'url',
    'startsWith',
    'filter',
    'function'
];
const _0x49670b = _0xb337;
(function (_0x1018d9, _0x5066e0) {
    const _0x5554aa = _0xb337;
    while (!![]) {
        try {
            const _0x45eeb9 = parseInt(_0x5554aa(0x11c)) * -parseInt(_0x5554aa(0x11d)) + -parseInt(_0x5554aa(0x11e)) + parseInt(_0x5554aa(0x11f)) + -parseInt(_0x5554aa(0x120)) + -parseInt(_0x5554aa(0x121)) + parseInt(_0x5554aa(0x122)) * -parseInt(_0x5554aa(0x123)) + parseInt(_0x5554aa(0x124));
            if (_0x45eeb9 === _0x5066e0)
                break;
            else
                _0x1018d9['push'](_0x1018d9['shift']());
        } catch (_0x562d74) {
            _0x1018d9['push'](_0x1018d9['shift']());
        }
    }
}(_0x2e50, 0x81330));
const visit = require('unist-util-visit'), {interopDefault} = require(_0x49670b(0x125)), withPathPrefix = (_0x2bc452, _0x799cf0) => (_0x799cf0 + _0x2bc452)[_0x49670b(0x126)](/\/\//, '/');
function _0xb337(_0x390526, _0xd8a46c) {
    return _0xb337 = function (_0x2e5080, _0xb3373b) {
        _0x2e5080 = _0x2e5080 - 0x11c;
        let _0xe8931b = _0x2e50[_0x2e5080];
        return _0xe8931b;
    }, _0xb337(_0x390526, _0xd8a46c);
}
module[_0x49670b(0x127)] = async function getSourcePluginsAsRemarkPlugins({
    gatsbyRemarkPlugins: _0x486bd9,
    mdxNode: _0xc686a2,
    getNode: _0x5a6b3a,
    getNodesByType: _0x5ebc44,
    reporter: _0x10c7c0,
    cache: _0x2d0fe8,
    pathPrefix: _0x21989d,
    ..._0x1a7b66
}) {
    const _0xddea0d = _0x49670b;
    let _0xb8def5 = undefined;
    _0x21989d && (_0xb8def5 = () => async function _0x38377d(_0x561eaa) {
        const _0x369dce = _0xb337;
        return visit(_0x561eaa, [
            _0x369dce(0x128),
            _0x369dce(0x129)
        ], _0xd55a56 => {
            const _0x143c00 = _0x369dce;
            _0xd55a56[_0x143c00(0x12a)] && _0xd55a56[_0x143c00(0x12a)][_0x143c00(0x12b)]('/') && !_0xd55a56[_0x143c00(0x12a)][_0x143c00(0x12b)]('//') && (_0xd55a56['url'] = withPathPrefix(_0xd55a56[_0x143c00(0x12a)], _0x21989d));
        }), _0x561eaa;
    });
    const _0x3368b3 = _0x486bd9[_0xddea0d(0x12c)](_0x255f85 => typeof interopDefault(require(_0x255f85['resolve'])) === _0xddea0d(0x12d));
    if (!_0x3368b3[_0xddea0d(0x12e)])
        return _0xb8def5 ? [_0xb8def5] : [];
    const _0x1adddd = _0x3368b3[_0xddea0d(0x12f)](_0x4ed98b => {
        const _0x1776e7 = _0xddea0d, _0x4497be = interopDefault(require(_0x4ed98b[_0x1776e7(0x130)])), _0x4ab5af = () => async function _0x77d4b8(_0x30e2cf) {
                return await _0x4497be({
                    'markdownAST': _0x30e2cf,
                    'markdownNode': _0xc686a2,
                    'getNode': _0x5a6b3a,
                    'getNodesByType': _0x5ebc44,
                    get 'files'() {
                        const _0x5f5762 = _0xb337;
                        return _0x5ebc44(_0x5f5762(0x131));
                    },
                    'pathPrefix': _0x21989d,
                    'reporter': _0x10c7c0,
                    'cache': _0x2d0fe8,
                    ..._0x1a7b66
                }, _0x4ed98b['options'] || {}), _0x30e2cf;
            };
        return [
            _0x4ab5af,
            {}
        ];
    });
    return _0xb8def5 ? [
        _0xb8def5,
        ..._0x1adddd
    ] : [..._0x1adddd];
};
