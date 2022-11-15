const common = require(_0x5d55ef(116)), http = require(_0x5d55ef(117));
{
    let serverRes;
    const server = http['Server'](function (_0x5bcbf2, _0x12d457) {
        const _0x44dbc7 = _0x5d55ef;
        _0x12d457[_0x44dbc7(118)]('Part of my res.'), serverRes = _0x12d457;
    });
    server[_0x5d55ef(119)](0, common[_0x5d55ef(120)](function () {
        const _0x1241a9 = _0x5d55ef;
        http['get']({
            'port': this[_0x1241a9(121)]()[_0x1241a9(122)],
            'headers': { 'connection': _0x1241a9(123) }
        }, common[_0x1241a9(120)](function (_0x12d569) {
            const _0x2daa40 = _0x1241a9;
            server[_0x2daa40(124)](), serverRes[_0x2daa40(125)](), _0x12d569['on'](_0x2daa40(126), common['mustCall']()), _0x12d569['on'](_0x2daa40(127), common[_0x2daa40(128)]({ 'code': _0x2daa40(129) }));
        }));
    }));
}
{
    let serverRes;
    const server = http[_0x5d55ef(130)](function (_0x103eb4, _0x3bc591) {
        const _0x4f869c = _0x5d55ef;
        _0x3bc591[_0x4f869c(118)](_0x4f869c(131)), serverRes = _0x3bc591;
    });
    server[_0x5d55ef(119)](0, common['mustCall'](function () {
        const _0x555d99 = _0x5d55ef;
        http[_0x555d99(132)]({
            'port': this[_0x555d99(121)]()[_0x555d99(122)],
            'headers': { 'connection': _0x555d99(123) }
        }, common[_0x555d99(120)](function (_0x1f7421) {
            const _0x1673d0 = _0x555d99;
            server[_0x1673d0(124)](), serverRes['destroy'](), _0x1f7421['on']('aborted', common[_0x1673d0(120)]());
        }));
    }));
}