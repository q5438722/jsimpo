const _0x5918 = [
    '35379mKYtIC',
    '46KcjPvX',
    '293366kqJKXP',
    '1cxoobj',
    '1657oMPkLV',
    '871rKedun',
    '37TcSZfA',
    '134661tULaGA',
    'fakeDir',
    'directory\x20resource',
    'directory',
    'directory1',
    'join',
    'path',
    'plan',
    'toMatchInlineSnapshot',
    '\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'create',
    'validate',
    'schema',
    'toBeNull',
    'ensureDir',
    '\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22_message\x22:\x20\x22Created\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22id\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22path\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'read',
    'mockReset',
    'update',
    'toHaveBeenCalledWith',
    'destroy',
    'rmdir',
    '501462UjQEkc',
    '1155189KBUucy',
    '1340674LhbvnR'
];
const _0x516cc2 = _0x39fa;
(function (_0x2886ae, _0x28afca) {
    const _0x2788f8 = _0x39fa;
    while (!![]) {
        try {
            const _0xfc6fc3 = -parseInt(_0x2788f8(0xe6)) + parseInt(_0x2788f8(0xe7)) + -parseInt(_0x2788f8(0xe8)) + -parseInt(_0x2788f8(0xe9)) * parseInt(_0x2788f8(0xea)) + -parseInt(_0x2788f8(0xeb)) * parseInt(_0x2788f8(0xec)) + -parseInt(_0x2788f8(0xed)) * parseInt(_0x2788f8(0xee)) + parseInt(_0x2788f8(0xef)) * parseInt(_0x2788f8(0xf0));
            if (_0xfc6fc3 === _0x28afca)
                break;
            else
                _0x2886ae['push'](_0x2886ae['shift']());
        } catch (_0x1f7c5c) {
            _0x2886ae['push'](_0x2886ae['shift']());
        }
    }
}(_0x5918, 0xe3687));
import * as _0x4400c1 from './directory';
function _0x39fa(_0x4ca6b5, _0x36758f) {
    return _0x39fa = function (_0x591874, _0x39fa75) {
        _0x591874 = _0x591874 - 0xe6;
        let _0x2860e0 = _0x5918[_0x591874];
        return _0x2860e0;
    }, _0x39fa(_0x4ca6b5, _0x36758f);
}
import _0x44067e from '../resource-schema';
import _0x244512 from '@hapi/joi';
import _0x4f7901 from 'fs-extra';
import _0x44f3e0 from 'path';
jest['mock']('fs-extra');
const root = _0x516cc2(0xf1);
describe(_0x516cc2(0xf2), () => {
    test('e2e\x20directory\x20resource\x20test', async () => {
        const _0xeaf99a = _0x39fa, _0xf7fca7 = { 'root': root }, _0x1f70e8 = { 'path': _0xeaf99a(0xf3) }, _0x50ae96 = { 'path': _0xeaf99a(0xf4) }, _0x1c1789 = _0x44f3e0[_0xeaf99a(0xf5)](root, _0x1f70e8[_0xeaf99a(0xf6)]), _0xdd5b8c = await _0x4400c1[_0xeaf99a(0xf7)](_0xf7fca7, _0x1f70e8);
        expect(_0xdd5b8c)['toBeTruthy'](), expect(_0xdd5b8c)[_0xeaf99a(0xf8)](_0xeaf99a(0xf9));
        const _0x49d53d = await _0x4400c1[_0xeaf99a(0xfa)](_0xf7fca7, _0x1f70e8), _0x52e1d6 = _0x244512[_0xeaf99a(0xfb)](_0x49d53d, {
                ..._0x4400c1[_0xeaf99a(0xfc)],
                ..._0x44067e
            });
        expect(_0x52e1d6['error'])[_0xeaf99a(0xfd)](), expect(_0x4f7901[_0xeaf99a(0xfe)])['toHaveBeenCalledWith'](_0x1c1789), expect(_0x49d53d)['toMatchInlineSnapshot'](_0xeaf99a(0xff));
        const _0x228de2 = await _0x4400c1[_0xeaf99a(0x100)](_0xf7fca7, _0x49d53d['id']);
        expect(_0x228de2)['toEqual'](_0x49d53d);
        const _0x4b21db = {
                ..._0x228de2,
                ..._0x50ae96
            }, _0x2c7064 = await _0x4400c1[_0xeaf99a(0xf7)](_0xf7fca7, _0x4b21db);
        expect(_0x2c7064)[_0xeaf99a(0xf8)]('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory1\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'), _0x4f7901[_0xeaf99a(0xfe)][_0xeaf99a(0x101)]();
        const _0x3db7e3 = await _0x4400c1[_0xeaf99a(0x102)](_0xf7fca7, _0x4b21db);
        expect(_0x4f7901[_0xeaf99a(0xfe)])[_0xeaf99a(0x103)](_0x1c1789), await _0x4400c1[_0xeaf99a(0x104)](_0xf7fca7, _0x3db7e3), expect(_0x4f7901[_0xeaf99a(0x105)])[_0xeaf99a(0x103)](_0x1c1789);
    });
});
