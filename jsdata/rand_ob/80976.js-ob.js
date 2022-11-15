'use strict';
const _0x3cc9 = [
    'npm-registry-fetch',
    'freeze',
    'latest',
    'mockImplementation',
    'resolve',
    'npmDistTag.add()',
    '@scope/some-pkg@1.0.1',
    '1.0.1',
    '/-/package/@scope%2fsome-pkg/dist-tags/added-tag',
    'PUT',
    'application/json',
    '1.0.0',
    '@scope/some-pkg@dupe-tag\x20already\x20set\x20to\x201.0.1',
    'adds\x20a\x20dist-tag\x20for\x20a\x20given\x20package@version',
    'supports\x20npm\x20v6\x20opts.tag\x20fallback',
    'OzgZp',
    'add',
    'MpDSa',
    'vhXMc',
    'WUOlO',
    'toEqual',
    'mxufo',
    'toHaveBeenLastCalledWith',
    'BnndG',
    'objectContaining',
    'TEVTw',
    'stringify',
    'does\x20not\x20attempt\x20to\x20add\x20duplicate\x20of\x20existing\x20tag',
    'json',
    'mockImplementationOnce',
    'dupe-tag',
    'oTObn',
    'not',
    'dKNNt',
    'warn',
    'ldoHn',
    'defaults\x20tag\x20argument\x20to\x20opts.defaultTag',
    'cdUxH',
    'xWPjb',
    'legacy',
    'npmDistTag.remove()',
    'removed-tag',
    '/-/package/@scope%2fsome-pkg/dist-tags/removed-tag',
    'dist-tag',
    'removes\x20an\x20existing\x20dist-tag\x20for\x20a\x20given\x20package',
    'ERBtA',
    'ifDjs',
    'toHaveProperty',
    'jqkgt',
    'IpFUM',
    'PXXgD',
    'hfRdn',
    'remove',
    'jMjtn',
    'yZgcn',
    'hfseo',
    'toHaveBeenCalled',
    'UYbTr',
    'npmDistTag.list()',
    '/-/package/@scope%2fsome-pkg/dist-tags',
    'returns\x20dictionary\x20of\x20dist-tags',
    'should-be-removed',
    '@scope/some-pkg',
    'gzCkm',
    'PtGrD',
    'VgzMJ',
    'jbAqS',
    'aVCNT',
    'hAIpH',
    'list',
    '35423BhCDAD',
    '17pWqRyw',
    '1obscGX',
    '453424PxcjiX',
    '286788MJugMK',
    '2232cbSHUz',
    '733391uHOVuM',
    '699290kdxxtr',
    '1wRjSXx',
    '273412hkTLaf',
    'mock',
    '@lerna/otplease'
];
function _0x3084(_0x4b8130, _0x4b75f0) {
    return _0x3084 = function (_0x20dc29, _0x379d24) {
        _0x20dc29 = _0x20dc29 - (0x1 * -0x1788 + 0x2 * 0x983 + 0x4fb);
        let _0x3410bd = _0x3cc9[_0x20dc29];
        return _0x3410bd;
    }, _0x3084(_0x4b8130, _0x4b75f0);
}
const _0x4efd9f = _0x3084;
(function (_0x15519d, _0x1491d0) {
    const _0x502c5f = _0x3084;
    while (!![]) {
        try {
            const _0x20c491 = parseInt(_0x502c5f(0x79)) * -parseInt(_0x502c5f(0x7a)) + -parseInt(_0x502c5f(0x7b)) * -parseInt(_0x502c5f(0x7c)) + parseInt(_0x502c5f(0x7d)) + parseInt(_0x502c5f(0x7e)) + -parseInt(_0x502c5f(0x7f)) + -parseInt(_0x502c5f(0x80)) * -parseInt(_0x502c5f(0x81)) + parseInt(_0x502c5f(0x82));
            if (_0x20c491 === _0x1491d0)
                break;
            else
                _0x15519d['push'](_0x15519d['shift']());
        } catch (_0x33fa8d) {
            _0x15519d['push'](_0x15519d['shift']());
        }
    }
}(_0x3cc9, -0x9f9b8 + 0xaa70f + -0x51d55 * -0x1));
jest[_0x4efd9f(0x83)]('npm-registry-fetch'), jest[_0x4efd9f(0x83)](_0x4efd9f(0x84), () => ({ 'otplease': (_0x2ab44f, _0x12fa33) => Promise['resolve'](_0x2ab44f(_0x12fa33)) }));
const fetch = require(_0x4efd9f(0x85)), npmDistTag = require('..'), stubLog = {
        'verbose': jest['fn'](),
        'info': jest['fn'](),
        'warn': jest['fn']()
    }, baseOptions = Object[_0x4efd9f(0x86)]({
        'log': stubLog,
        'defaultTag': _0x4efd9f(0x87)
    });
fetch[_0x4efd9f(0x88)](() => Promise[_0x4efd9f(0x89)]()), fetch['json'][_0x4efd9f(0x88)](() => Promise[_0x4efd9f(0x89)]({})), describe(_0x4efd9f(0x8a), () => {
    const _0x35fea4 = _0x4efd9f, _0x8ffdfa = {
            'MpDSa': _0x35fea4(0x8b),
            'vhXMc': 'added-tag',
            'WUOlO': function (_0x1cfc6d, _0x2e20cf) {
                return _0x1cfc6d(_0x2e20cf);
            },
            'mxufo': _0x35fea4(0x8c),
            'BnndG': _0x35fea4(0x8d),
            'TEVTw': _0x35fea4(0x8e),
            'ZdUew': _0x35fea4(0x8f),
            'oTObn': function (_0x30d025, _0x488bb3) {
                return _0x30d025(_0x488bb3);
            },
            'TTgMt': _0x35fea4(0x90),
            'dKNNt': function (_0x519a3d, _0x400c6a) {
                return _0x519a3d(_0x400c6a);
            },
            'DJiCS': 'dist-tag',
            'ldoHn': _0x35fea4(0x91),
            'OzgZp': _0x35fea4(0x92),
            'cdUxH': function (_0x252315, _0x17c4e0, _0x144f11) {
                return _0x252315(_0x17c4e0, _0x144f11);
            },
            'xWPjb': _0x35fea4(0x93)
        };
    it(_0x8ffdfa[_0x35fea4(0x94)], async () => {
        const _0x3073da = _0x35fea4, _0x3e12ea = { ...baseOptions }, _0xc19119 = await npmDistTag[_0x3073da(0x95)](_0x8ffdfa[_0x3073da(0x96)], _0x8ffdfa[_0x3073da(0x97)], _0x3e12ea);
        _0x8ffdfa[_0x3073da(0x98)](expect, _0xc19119)[_0x3073da(0x99)]({ 'added-tag': _0x8ffdfa[_0x3073da(0x9a)] }), _0x8ffdfa[_0x3073da(0x98)](expect, fetch)[_0x3073da(0x9b)](_0x8ffdfa[_0x3073da(0x9c)], expect[_0x3073da(0x9d)]({
            'method': _0x8ffdfa[_0x3073da(0x9e)],
            'body': JSON[_0x3073da(0x9f)](_0x8ffdfa[_0x3073da(0x9a)]),
            'headers': { 'content-type': _0x8ffdfa['ZdUew'] }
        }));
    }), it(_0x35fea4(0xa0), async () => {
        const _0x1fd11f = _0x35fea4;
        fetch[_0x1fd11f(0xa1)][_0x1fd11f(0xa2)](() => Promise[_0x1fd11f(0x89)]({
            'latest': _0x1fd11f(0x90),
            'dupe-tag': '1.0.1'
        }));
        const _0xdbf77a = { ...baseOptions }, _0x478788 = await npmDistTag[_0x1fd11f(0x95)](_0x8ffdfa[_0x1fd11f(0x96)], _0x1fd11f(0xa3), _0xdbf77a);
        _0x8ffdfa[_0x1fd11f(0xa4)](expect, _0x478788)[_0x1fd11f(0x99)]({
            'latest': _0x8ffdfa['TTgMt'],
            'dupe-tag': _0x1fd11f(0x8c)
        }), expect(fetch)[_0x1fd11f(0xa5)]['toHaveBeenCalled'](), _0x8ffdfa[_0x1fd11f(0xa6)](expect, stubLog[_0x1fd11f(0xa7)])[_0x1fd11f(0x9b)](_0x8ffdfa['DJiCS'], _0x8ffdfa[_0x1fd11f(0xa8)]);
    }), it(_0x35fea4(0xa9), async () => {
        const _0x508778 = _0x35fea4;
        fetch[_0x508778(0xa1)][_0x508778(0xa2)](() => Promise[_0x508778(0x89)]({ 'latest': _0x508778(0x90) }));
        const _0x52fe17 = { ...baseOptions }, _0x148dc0 = await npmDistTag[_0x508778(0x95)](_0x8ffdfa[_0x508778(0x96)], undefined, _0x52fe17);
        expect(_0x148dc0)[_0x508778(0x99)]({ 'latest': _0x8ffdfa[_0x508778(0x9a)] });
    }), _0x8ffdfa[_0x35fea4(0xaa)](it, _0x8ffdfa[_0x35fea4(0xab)], async () => {
        const _0x1ef755 = _0x35fea4;
        fetch[_0x1ef755(0xa1)]['mockImplementationOnce'](() => Promise[_0x1ef755(0x89)]({ 'legacy': '1.0.0' }));
        const _0x4e8a2c = {
                'log': stubLog,
                'tag': _0x1ef755(0xac)
            }, _0x4074d7 = await npmDistTag['add'](_0x1ef755(0x8b), undefined, _0x4e8a2c);
        expect(_0x4074d7)[_0x1ef755(0x99)]({ 'legacy': _0x8ffdfa['mxufo'] });
    });
}), describe(_0x4efd9f(0xad), () => {
    const _0x292ec7 = _0x4efd9f, _0x1c4270 = {
            'jqkgt': _0x292ec7(0xae),
            'Rccox': function (_0x2bf0b8, _0x55bd5f) {
                return _0x2bf0b8(_0x55bd5f);
            },
            'IpFUM': function (_0x92f810, _0x556e2b) {
                return _0x92f810(_0x556e2b);
            },
            'PXXgD': _0x292ec7(0xaf),
            'hfRdn': 'DELETE',
            'jMjtn': _0x292ec7(0x8b),
            'yZgcn': 'missing-tag',
            'hfseo': function (_0x2c4977, _0x2728aa) {
                return _0x2c4977(_0x2728aa);
            },
            'Zsvyy': _0x292ec7(0xb0),
            'UYbTr': '\x22missing-tag\x22\x20is\x20not\x20a\x20dist-tag\x20on\x20@scope/some-pkg',
            'ERBtA': function (_0x349bfe, _0x500729, _0x474ff9) {
                return _0x349bfe(_0x500729, _0x474ff9);
            },
            'ifDjs': _0x292ec7(0xb1)
        };
    _0x1c4270[_0x292ec7(0xb2)](it, _0x1c4270[_0x292ec7(0xb3)], async () => {
        const _0x2c989c = _0x292ec7;
        fetch[_0x2c989c(0xa1)]['mockImplementationOnce'](() => Promise[_0x2c989c(0x89)]({
            'latest': '1.0.0',
            'removed-tag': _0x2c989c(0x8c)
        }));
        const _0x253520 = { ...baseOptions }, _0x2b0ce8 = await npmDistTag['remove'](_0x2c989c(0x8b), _0x1c4270['jqkgt'], _0x253520);
        _0x1c4270['Rccox'](expect, _0x2b0ce8)[_0x2c989c(0xa5)][_0x2c989c(0xb4)](_0x1c4270[_0x2c989c(0xb5)]), _0x1c4270[_0x2c989c(0xb6)](expect, fetch)['toHaveBeenLastCalledWith'](_0x1c4270[_0x2c989c(0xb7)], expect[_0x2c989c(0x9d)]({ 'method': _0x1c4270[_0x2c989c(0xb8)] }));
    }), _0x1c4270[_0x292ec7(0xb2)](it, 'does\x20not\x20attempt\x20removal\x20of\x20nonexistent\x20tag', async () => {
        const _0x830fcc = _0x292ec7, _0x3aeb52 = { ...baseOptions }, _0x25cb2d = await npmDistTag[_0x830fcc(0xb9)](_0x1c4270[_0x830fcc(0xba)], _0x1c4270[_0x830fcc(0xbb)], _0x3aeb52);
        _0x1c4270[_0x830fcc(0xbc)](expect, _0x25cb2d)[_0x830fcc(0x99)]({}), expect(fetch)[_0x830fcc(0xa5)][_0x830fcc(0xbd)](), _0x1c4270[_0x830fcc(0xbc)](expect, stubLog['info'])[_0x830fcc(0x9b)](_0x1c4270['Zsvyy'], _0x1c4270[_0x830fcc(0xbe)]);
    });
}), describe(_0x4efd9f(0xbf), () => {
    const _0x6bf92b = _0x4efd9f, _0xc55b7d = {
            'gzCkm': function (_0x3f11fc, _0x40ec1e) {
                return _0x3f11fc(_0x40ec1e);
            },
            'PtGrD': _0x6bf92b(0x90),
            'VgzMJ': _0x6bf92b(0xc0),
            'jbAqS': '@scope/some-pkg',
            'qYUTt': _0x6bf92b(0xc1),
            'aVCNT': function (_0x4b73be, _0x2eeb5b, _0x11349d) {
                return _0x4b73be(_0x2eeb5b, _0x11349d);
            },
            'hAIpH': 'handles\x20disastrous\x20results\x20gracefully'
        };
    it(_0xc55b7d['qYUTt'], async () => {
        const _0xf1a3f = _0x6bf92b;
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': _0xf1a3f(0x90),
            'other-tag': _0xf1a3f(0x8c),
            '_etag': _0xf1a3f(0xc2)
        }));
        const _0x529f7f = { ...baseOptions }, _0x1d5766 = await npmDistTag['list'](_0xf1a3f(0xc3), _0x529f7f);
        _0xc55b7d[_0xf1a3f(0xc4)](expect, _0x1d5766)[_0xf1a3f(0x99)]({
            'latest': _0xc55b7d[_0xf1a3f(0xc5)],
            'other-tag': '1.0.1'
        }), expect(fetch[_0xf1a3f(0xa1)])['toHaveBeenLastCalledWith'](_0xc55b7d[_0xf1a3f(0xc6)], expect[_0xf1a3f(0x9d)]({
            'preferOnline': !![],
            'spec': expect['objectContaining']({ 'name': _0xc55b7d[_0xf1a3f(0xc7)] })
        }));
    }), _0xc55b7d[_0x6bf92b(0xc8)](it, _0xc55b7d[_0x6bf92b(0xc9)], async () => {
        const _0x229ec1 = _0x6bf92b;
        fetch[_0x229ec1(0xa1)][_0x229ec1(0xa2)](() => Promise[_0x229ec1(0x89)](null));
        const _0x15fa52 = { ...baseOptions }, _0x154473 = await npmDistTag[_0x229ec1(0xca)]('@scope/some-pkg', _0x15fa52);
        _0xc55b7d['gzCkm'](expect, _0x154473)[_0x229ec1(0x99)]({});
    });
});
