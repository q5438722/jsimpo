import * as _0x3fed33 from './directory';
import _0x32d7b4 from '../resource-schema';
import _0x17afc1 from '@hapi/joi';
import _0x286840 from 'fs-extra';
import _0x2958c6 from 'path';
jest['mock']('fs-extra');
const root = 'fakeDir';
describe('directory\x20resource', () => {
    test('e2e\x20directory\x20resource\x20test', async () => {
        const _0x34c142 = { 'root': root }, _0x13b720 = { 'path': 'directory' }, _0x3fa22f = { 'path': 'directory1' }, _0x20c65b = _0x2958c6['join'](root, _0x13b720['path']), _0x1dc34e = await _0x3fed33['plan'](_0x34c142, _0x13b720);
        expect(_0x1dc34e)['toBeTruthy'](), expect(_0x1dc34e)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
        const _0x2b4289 = await _0x3fed33['create'](_0x34c142, _0x13b720), _0x2c493a = _0x17afc1['validate'](_0x2b4289, {
                ..._0x3fed33['schema'],
                ..._0x32d7b4
            });
        expect(_0x2c493a['error'])['toBeNull'](), expect(_0x286840['ensureDir'])['toHaveBeenCalledWith'](_0x20c65b), expect(_0x2b4289)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22_message\x22:\x20\x22Created\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22id\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22path\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
        const _0x2835d5 = await _0x3fed33['read'](_0x34c142, _0x2b4289['id']);
        expect(_0x2835d5)['toEqual'](_0x2b4289);
        const _0x1fb010 = {
                ..._0x2835d5,
                ..._0x3fa22f
            }, _0x5064ec = await _0x3fed33['plan'](_0x34c142, _0x1fb010);
        expect(_0x5064ec)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory1\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'), _0x286840['ensureDir']['mockReset']();
        const _0x419aca = await _0x3fed33['update'](_0x34c142, _0x1fb010);
        expect(_0x286840['ensureDir'])['toHaveBeenCalledWith'](_0x20c65b), await _0x3fed33['destroy'](_0x34c142, _0x419aca), expect(_0x286840['rmdir'])['toHaveBeenCalledWith'](_0x20c65b);
    });
});
