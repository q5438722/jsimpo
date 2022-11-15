const _0x2307 = [
    'fakeDir',
    'directory\x20resource',
    'qEpfi',
    'e2e\x20directory\x20resource\x20test',
    'directory1',
    'join',
    'plan',
    'toBeTruthy',
    'toMatchInlineSnapshot',
    '\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'validate',
    'schema',
    'error',
    'toBeNull',
    'ensureDir',
    'toHaveBeenCalledWith',
    '\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22_message\x22:\x20\x22Created\x20directory\x20\x5c\x22directory\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22id\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22path\x22:\x20\x22directory\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'read',
    'toEqual',
    'SLtuj',
    'mockReset',
    'update',
    'destroy',
    'XanJb',
    'rmdir',
    '1zjecYZ',
    '83161XwFOPk',
    '77933TnzzgE',
    '2HDrKNQ',
    '367072ROMngw',
    '171123NQGKqU',
    '1bNgFky',
    '213857xFHFTE',
    '306772xIJTme',
    '4FXyGlX',
    '192520AiLJrR',
    'mock'
];
const _0x351203 = _0x4119;
(function (_0x59b51d, _0x5422c9) {
    const _0x478ff4 = _0x4119;
    while (!![]) {
        try {
            const _0x3bffa9 = parseInt(_0x478ff4(0x192)) * parseInt(_0x478ff4(0x193)) + parseInt(_0x478ff4(0x194)) * -parseInt(_0x478ff4(0x195)) + -parseInt(_0x478ff4(0x196)) + parseInt(_0x478ff4(0x197)) * -parseInt(_0x478ff4(0x198)) + -parseInt(_0x478ff4(0x199)) + parseInt(_0x478ff4(0x19a)) + parseInt(_0x478ff4(0x19b)) * parseInt(_0x478ff4(0x19c));
            if (_0x3bffa9 === _0x5422c9)
                break;
            else
                _0x59b51d['push'](_0x59b51d['shift']());
        } catch (_0x142d9d) {
            _0x59b51d['push'](_0x59b51d['shift']());
        }
    }
}(_0x2307, -0x8c2b * -0x3 + 0x107b9 * -0x7 + -0x907 * -0x10b));
import * as _0x12e6c6 from './directory';
import _0x210b94 from '../resource-schema';
import _0x40b6ca from '@hapi/joi';
import _0x4d61b7 from 'fs-extra';
import _0x503557 from 'path';
jest[_0x351203(0x19d)]('fs-extra');
const root = _0x351203(0x19e);
function _0x4119(_0x260485, _0x1d8c44) {
    return _0x4119 = function (_0x448e66, _0x2afab8) {
        _0x448e66 = _0x448e66 - (-0x20b5 + 0x384 * -0x9 + 0x41eb);
        let _0x193460 = _0x2307[_0x448e66];
        return _0x193460;
    }, _0x4119(_0x260485, _0x1d8c44);
}
describe(_0x351203(0x19f), () => {
    const _0x43f919 = _0x351203, _0x36ed70 = {
            'znYoF': function (_0x5f49bf, _0xbac90b) {
                return _0x5f49bf(_0xbac90b);
            },
            'IdzXi': function (_0x5d3216, _0x19cf2b) {
                return _0x5d3216(_0x19cf2b);
            },
            'SLtuj': function (_0x58882e, _0x2a2a6c) {
                return _0x58882e(_0x2a2a6c);
            },
            'XanJb': function (_0x2e7383, _0x1a2733) {
                return _0x2e7383(_0x1a2733);
            },
            'qEpfi': function (_0x42f7c9, _0x1c3c26, _0x387fb7) {
                return _0x42f7c9(_0x1c3c26, _0x387fb7);
            }
        };
    _0x36ed70[_0x43f919(0x1a0)](test, _0x43f919(0x1a1), async () => {
        const _0x3310c5 = _0x43f919, _0x4acdf4 = { 'root': root }, _0x3947d1 = { 'path': 'directory' }, _0x4f34c8 = { 'path': _0x3310c5(0x1a2) }, _0x23f537 = _0x503557[_0x3310c5(0x1a3)](root, _0x3947d1['path']), _0x42a680 = await _0x12e6c6[_0x3310c5(0x1a4)](_0x4acdf4, _0x3947d1);
        expect(_0x42a680)[_0x3310c5(0x1a5)](), _0x36ed70['znYoF'](expect, _0x42a680)[_0x3310c5(0x1a6)](_0x3310c5(0x1a7));
        const _0x47f202 = await _0x12e6c6['create'](_0x4acdf4, _0x3947d1), _0x2c99d1 = _0x40b6ca[_0x3310c5(0x1a8)](_0x47f202, {
                ..._0x12e6c6[_0x3310c5(0x1a9)],
                ..._0x210b94
            });
        _0x36ed70['IdzXi'](expect, _0x2c99d1[_0x3310c5(0x1aa)])[_0x3310c5(0x1ab)](), expect(_0x4d61b7[_0x3310c5(0x1ac)])[_0x3310c5(0x1ad)](_0x23f537), _0x36ed70['SLtuj'](expect, _0x47f202)[_0x3310c5(0x1a6)](_0x3310c5(0x1ae));
        const _0x2de112 = await _0x12e6c6[_0x3310c5(0x1af)](_0x4acdf4, _0x47f202['id']);
        expect(_0x2de112)[_0x3310c5(0x1b0)](_0x47f202);
        const _0xce93a7 = {
                ..._0x2de112,
                ..._0x4f34c8
            }, _0x598f1b = await _0x12e6c6['plan'](_0x4acdf4, _0xce93a7);
        _0x36ed70[_0x3310c5(0x1b1)](expect, _0x598f1b)['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22describe\x22:\x20\x22Create\x20directory\x20\x5c\x22directory1\x5c\x22\x22,\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'), _0x4d61b7[_0x3310c5(0x1ac)][_0x3310c5(0x1b2)]();
        const _0x2b6f6e = await _0x12e6c6[_0x3310c5(0x1b3)](_0x4acdf4, _0xce93a7);
        _0x36ed70[_0x3310c5(0x1b1)](expect, _0x4d61b7[_0x3310c5(0x1ac)])[_0x3310c5(0x1ad)](_0x23f537), await _0x12e6c6[_0x3310c5(0x1b4)](_0x4acdf4, _0x2b6f6e), _0x36ed70[_0x3310c5(0x1b5)](expect, _0x4d61b7[_0x3310c5(0x1b6)])[_0x3310c5(0x1ad)](_0x23f537);
    });
});
