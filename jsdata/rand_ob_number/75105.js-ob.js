export const Tokenpass = {
    'validateAccess'(_0x16ebeb, _0x4967c4) {
        const _0x520a4a = _0x16ebeb['require'] === 'any' ? 'some' : 'every';
        return _0x16ebeb['tokens'][_0x520a4a](_0x358ace => _0x4967c4['some'](_0x1ee426 => _0x358ace['token'] === _0x1ee426['asset'] && parseFloat(_0x358ace['balance']) <= parseFloat(_0x1ee426['balance'])));
    }
};
