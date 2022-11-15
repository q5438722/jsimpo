import * as _0x41ae77 from './directory';
import _0x363e68 from '../resource-schema';
import _0x42aa24 from '@hapi/joi';
import _0x323f04 from 'fs-extra';
import _0x4d914a from 'path';
jest['mock']('fs-extra');
const root = 'fakeDir';
describe('directory\x20resource', () => {
    const _0x3c7ed0 = {
        'uFrSm': function (_0x145391, _0x502224) {
            return _0x145391(_0x502224);
        },
        'wskRi': function (_0x4c211e, _0x20fc6f) {
            return _0x4c211e(_0x20fc6f);
        },
        'LORXs': function (_0x1c2474, _0x44cd25) {
            return _0x1c2474(_0x44cd25);
        },
        'vmgTm': function (_0x432e18, _0x1d2b11) {
            return _0x432e18(_0x1d2b11);
        },
        'OBMst': function (_0x1ef8b2, _0x2d2e0b) {
            return _0x1ef8b2(_0x2d2e0b);
        },
        'oYKGD': function (_0x304d25, _0x1f7f78) {
            return _0x304d25(_0x1f7f78);
        },
        'eegQs': function (_0x40f6df, _0x55c1d7) {
            return _0x40f6df(_0x55c1d7);
        },
        'LZGwV': function (_0x470207, _0x4964a0, _0x505874) {
            return _0x470207(_0x4964a0, _0x505874);
        }
    };
    _0x3c7ed0['LZGwV'](test, 'e2e\x20directory\x20resource\x20test', async () => {
        const _0x50a81b = { 'root': root }, _0x46f28a = { 'path': 'directory' }, _0xf37c28 = { 'path': 'directory1' }, _0x45157f = _0x4d914a['join'](root, _0x46f28a['path']), _0x181cdd = await _0x41ae77['plan'](_0x50a81b, _0x46f28a);
        _0x3c7ed0['uFrSm'](expect, _0x181cdd)['toBeTruthy'](), _0x3c7ed0['wskRi'](expect, _0x181cdd)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
        const _0x2f73ce = await _0x41ae77['create'](_0x50a81b, _0x46f28a), _0x418368 = _0x42aa24['validate'](_0x2f73ce, {
                ..._0x41ae77['schema'],
                ..._0x363e68
            });
        _0x3c7ed0['LORXs'](expect, _0x418368['error'])['toBeNull'](), _0x3c7ed0['vmgTm'](expect, _0x323f04['ensureDir'])['toHaveBeenCalledWith'](_0x45157f), _0x3c7ed0['OBMst'](expect, _0x2f73ce)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22_message\x22:\x20\x22Created\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22id\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22path\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
        const _0x3fb8be = await _0x41ae77['read'](_0x50a81b, _0x2f73ce['id']);
        _0x3c7ed0['oYKGD'](expect, _0x3fb8be)['toEqual'](_0x2f73ce);
        const _0x1efba6 = {
                ..._0x3fb8be,
                ..._0xf37c28
            }, _0x590470 = await _0x41ae77['plan'](_0x50a81b, _0x1efba6);
        _0x3c7ed0['oYKGD'](expect, _0x590470)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory1\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'), _0x323f04['ensureDir']['mockReset']();
        const _0x38f06c = await _0x41ae77['update'](_0x50a81b, _0x1efba6);
        _0x3c7ed0['oYKGD'](expect, _0x323f04['ensureDir'])['toHaveBeenCalledWith'](_0x45157f), await _0x41ae77['destroy'](_0x50a81b, _0x38f06c), _0x3c7ed0['eegQs'](expect, _0x323f04['rmdir'])['toHaveBeenCalledWith'](_0x45157f);
    });
});
