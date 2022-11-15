const _0x3ce6 = [
    '24567FhkkbQ',
    '1LeomCh',
    '81806ylDwfe',
    '137917iRPWnU',
    '18TYfwIs',
    'should',
    '../../../core/frontend/services/routing',
    '../../../core/frontend/meta/rss-url',
    'getRssUrl',
    'stub',
    'registry',
    'returns',
    '/rss/',
    'restore',
    '1648907wBJkLi',
    '759715XBePUH',
    '1JjGafr',
    '495747GJCczX',
    '186526bdBnSS',
    '2SmhDze'
];
const _0xd849b6 = _0x17f3;
(function (_0x13b1c1, _0x3bd2dc) {
    const _0x52e137 = _0x17f3;
    while (!![]) {
        try {
            const _0x84bbec = -parseInt(_0x52e137(0xcd)) + -parseInt(_0x52e137(0xce)) + parseInt(_0x52e137(0xcf)) * parseInt(_0x52e137(0xd0)) + -parseInt(_0x52e137(0xd1)) * -parseInt(_0x52e137(0xd2)) + -parseInt(_0x52e137(0xd3)) * -parseInt(_0x52e137(0xd4)) + -parseInt(_0x52e137(0xd5)) + parseInt(_0x52e137(0xd6)) * parseInt(_0x52e137(0xd7));
            if (_0x84bbec === _0x3bd2dc)
                break;
            else
                _0x13b1c1['push'](_0x13b1c1['shift']());
        } catch (_0x8deba7) {
            _0x13b1c1['push'](_0x13b1c1['shift']());
        }
    }
}(_0x3ce6, 0xd82c4));
function _0x17f3(_0x9dbece, _0x45bbae) {
    return _0x17f3 = function (_0x3ce6bc, _0x17f38a) {
        _0x3ce6bc = _0x3ce6bc - 0xcd;
        let _0x2af8dc = _0x3ce6[_0x3ce6bc];
        return _0x2af8dc;
    }, _0x17f3(_0x9dbece, _0x45bbae);
}
const should = require(_0xd849b6(0xd8)), sinon = require('sinon'), routing = require(_0xd849b6(0xd9)), getRssUrl = require(_0xd849b6(0xda));
describe(_0xd849b6(0xdb), function () {
    beforeEach(function () {
        const _0x52d018 = _0x17f3;
        sinon[_0x52d018(0xdc)](routing[_0x52d018(0xdd)], 'getRssUrl')[_0x52d018(0xde)](_0x52d018(0xdf));
    }), afterEach(function () {
        const _0x423cda = _0x17f3;
        sinon[_0x423cda(0xe0)]();
    }), it('should\x20return\x20rss\x20url', function () {
        const _0x1f40b0 = getRssUrl({ 'secure': ![] });
        should['equal'](_0x1f40b0, '/rss/');
    }), it('forwards\x20absolute/secure\x20flags', function () {
        const _0x290926 = _0x17f3, _0x3a11f1 = getRssUrl({ 'secure': ![] }, !![]);
        routing['registry'][_0x290926(0xdb)]['calledWith']({
            'secure': ![],
            'absolute': !![]
        })[_0x290926(0xd8)]['be']['true']();
    });
});
