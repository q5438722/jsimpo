function _0x2db8(_0x3ec1ba, _0x479591) {
    return _0x2db8 = function (_0x179225, _0x2db83e) {
        _0x179225 = _0x179225 - 344;
        let _0x34a57b = _0x1792[_0x179225];
        return _0x34a57b;
    }, _0x2db8(_0x3ec1ba, _0x479591);
}
const path = require(_0x12c6aa(355)), child = require(_0x12c6aa(356));
it(_0x12c6aa(357), _0x20a2a7 => {
    const _0x51db4c = _0x12c6aa, _0xaab682 = [
            require['resolve']('@babel/cli/bin/babel.js'),
            path[_0x51db4c(358)](__dirname, '..'),
            _0x51db4c(359),
            path['join'](__dirname, '.babelrc'),
            _0x51db4c(360),
            _0x51db4c(361)
        ], _0x57020b = child[_0x51db4c(362)](process['execPath'], _0xaab682);
    let _0x465f44 = '', _0x406b92 = '';
    _0x57020b[_0x51db4c(363)]['on'](_0x51db4c(364), function (_0x99784b) {
        _0x465f44 += _0x99784b;
    }), _0x57020b[_0x51db4c(365)]['on'](_0x51db4c(364), function (_0x42d00d) {
        _0x406b92 += _0x42d00d;
    }), _0x57020b['on'](_0x51db4c(366), function () {
        const _0x38198c = _0x51db4c;
        expect(_0x465f44)[_0x38198c(367)](''), expect(_0x406b92)[_0x38198c(368)][_0x38198c(367)](''), _0x20a2a7();
    });
}, 30000);