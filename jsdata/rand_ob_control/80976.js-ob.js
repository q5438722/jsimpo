'use strict';
jest['mock']('npm-registry-fetch'), jest['mock']('@lerna/otplease', () => ({ 'otplease': (_0x5cbd43, _0x45dd65) => Promise['resolve'](_0x5cbd43(_0x45dd65)) }));
const fetch = require('npm-registry-fetch'), npmDistTag = require('..'), stubLog = {
        'verbose': jest['fn'](),
        'info': jest['fn'](),
        'warn': jest['fn']()
    }, baseOptions = Object['freeze']({
        'log': stubLog,
        'defaultTag': 'latest'
    });
fetch['mockImplementation'](() => Promise['resolve']()), fetch['json']['mockImplementation'](() => Promise['resolve']({})), describe('npmDistTag.add()', () => {
    const _0x459a5d = {
        'RWGaH': '@scope/some-pkg@1.0.1',
        'SPDDZ': 'added-tag',
        'DRFOu': function (_0x2faf5c, _0x4f4852) {
            return _0x2faf5c(_0x4f4852);
        },
        'KerSs': '1.0.1',
        'HOmjw': '/-/package/@scope%2fsome-pkg/dist-tags/added-tag',
        'FiBLc': 'PUT',
        'bfDYs': 'application/json',
        'edFwf': 'dupe-tag',
        'VyEzn': '1.0.0',
        'AoOAF': function (_0x1d5e5e, _0x4f097b) {
            return _0x1d5e5e(_0x4f097b);
        },
        'deJQG': 'dist-tag',
        'QpmaU': '@scope/some-pkg@dupe-tag\x20already\x20set\x20to\x201.0.1',
        'fMmEO': function (_0x536648, _0x116944) {
            return _0x536648(_0x116944);
        },
        'hTvTm': 'legacy',
        'DKeNL': function (_0x24005e, _0x477786, _0xa77b18) {
            return _0x24005e(_0x477786, _0xa77b18);
        },
        'AOWHC': 'adds\x20a\x20dist-tag\x20for\x20a\x20given\x20package@version',
        'RRdIP': 'does\x20not\x20attempt\x20to\x20add\x20duplicate\x20of\x20existing\x20tag',
        'MHbLV': 'defaults\x20tag\x20argument\x20to\x20opts.defaultTag',
        'oWEbh': 'supports\x20npm\x20v6\x20opts.tag\x20fallback'
    };
    _0x459a5d['DKeNL'](it, _0x459a5d['AOWHC'], async () => {
        const _0x24cbc7 = { ...baseOptions }, _0x2d85d2 = await npmDistTag['add'](_0x459a5d['RWGaH'], _0x459a5d['SPDDZ'], _0x24cbc7);
        _0x459a5d['DRFOu'](expect, _0x2d85d2)['toEqual']({ 'added-tag': _0x459a5d['KerSs'] }), _0x459a5d['DRFOu'](expect, fetch)['toHaveBeenLastCalledWith'](_0x459a5d['HOmjw'], expect['objectContaining']({
            'method': _0x459a5d['FiBLc'],
            'body': JSON['stringify'](_0x459a5d['KerSs']),
            'headers': { 'content-type': _0x459a5d['bfDYs'] }
        }));
    }), _0x459a5d['DKeNL'](it, _0x459a5d['RRdIP'], async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': '1.0.0',
            'dupe-tag': '1.0.1'
        }));
        const _0x172009 = { ...baseOptions }, _0x10192c = await npmDistTag['add'](_0x459a5d['RWGaH'], _0x459a5d['edFwf'], _0x172009);
        _0x459a5d['DRFOu'](expect, _0x10192c)['toEqual']({
            'latest': _0x459a5d['VyEzn'],
            'dupe-tag': _0x459a5d['KerSs']
        }), _0x459a5d['DRFOu'](expect, fetch)['not']['toHaveBeenCalled'](), _0x459a5d['AoOAF'](expect, stubLog['warn'])['toHaveBeenLastCalledWith'](_0x459a5d['deJQG'], _0x459a5d['QpmaU']);
    }), _0x459a5d['DKeNL'](it, _0x459a5d['MHbLV'], async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({ 'latest': '1.0.0' }));
        const _0x810d6 = { ...baseOptions }, _0x54585c = await npmDistTag['add'](_0x459a5d['RWGaH'], undefined, _0x810d6);
        _0x459a5d['fMmEO'](expect, _0x54585c)['toEqual']({ 'latest': _0x459a5d['KerSs'] });
    }), _0x459a5d['DKeNL'](it, _0x459a5d['oWEbh'], async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({ 'legacy': '1.0.0' }));
        const _0x5e5eae = {
                'log': stubLog,
                'tag': _0x459a5d['hTvTm']
            }, _0x5326a6 = await npmDistTag['add'](_0x459a5d['RWGaH'], undefined, _0x5e5eae);
        _0x459a5d['fMmEO'](expect, _0x5326a6)['toEqual']({ 'legacy': _0x459a5d['KerSs'] });
    });
}), describe('npmDistTag.remove()', () => {
    const _0x5be7bb = {
        'qdqqI': '@scope/some-pkg@1.0.1',
        'dsnRY': 'removed-tag',
        'mDkYi': function (_0x156387, _0x53bdac) {
            return _0x156387(_0x53bdac);
        },
        'jNbur': function (_0x53e5d0, _0x5c8385) {
            return _0x53e5d0(_0x5c8385);
        },
        'SacwL': '/-/package/@scope%2fsome-pkg/dist-tags/removed-tag',
        'hHcdg': 'DELETE',
        'xUxCm': 'missing-tag',
        'xFjCB': function (_0x624b47, _0x10299b) {
            return _0x624b47(_0x10299b);
        },
        'dqfqR': 'dist-tag',
        'DXHGj': '\x22missing-tag\x22\x20is\x20not\x20a\x20dist-tag\x20on\x20@scope/some-pkg',
        'vxBnD': function (_0x5116f4, _0x3b1b92, _0x2969f0) {
            return _0x5116f4(_0x3b1b92, _0x2969f0);
        },
        'rDeWL': 'removes\x20an\x20existing\x20dist-tag\x20for\x20a\x20given\x20package',
        'Wmqzr': 'does\x20not\x20attempt\x20removal\x20of\x20nonexistent\x20tag'
    };
    _0x5be7bb['vxBnD'](it, _0x5be7bb['rDeWL'], async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': '1.0.0',
            'removed-tag': '1.0.1'
        }));
        const _0x24a89a = { ...baseOptions }, _0x4ca4a7 = await npmDistTag['remove'](_0x5be7bb['qdqqI'], _0x5be7bb['dsnRY'], _0x24a89a);
        _0x5be7bb['mDkYi'](expect, _0x4ca4a7)['not']['toHaveProperty'](_0x5be7bb['dsnRY']), _0x5be7bb['jNbur'](expect, fetch)['toHaveBeenLastCalledWith'](_0x5be7bb['SacwL'], expect['objectContaining']({ 'method': _0x5be7bb['hHcdg'] }));
    }), _0x5be7bb['vxBnD'](it, _0x5be7bb['Wmqzr'], async () => {
        const _0x317078 = { ...baseOptions }, _0x2d21ac = await npmDistTag['remove'](_0x5be7bb['qdqqI'], _0x5be7bb['xUxCm'], _0x317078);
        _0x5be7bb['jNbur'](expect, _0x2d21ac)['toEqual']({}), _0x5be7bb['xFjCB'](expect, fetch)['not']['toHaveBeenCalled'](), _0x5be7bb['xFjCB'](expect, stubLog['info'])['toHaveBeenLastCalledWith'](_0x5be7bb['dqfqR'], _0x5be7bb['DXHGj']);
    });
}), describe('npmDistTag.list()', () => {
    const _0x194001 = {
        'Kcrpj': '@scope/some-pkg',
        'QurDL': function (_0x21aa54, _0x28f593) {
            return _0x21aa54(_0x28f593);
        },
        'VuvCH': '1.0.0',
        'JrFXj': '1.0.1',
        'DPizQ': function (_0x461ee1, _0xd5688b) {
            return _0x461ee1(_0xd5688b);
        },
        'qtamb': '/-/package/@scope%2fsome-pkg/dist-tags',
        'jVgjV': function (_0x16c558, _0x1ae203, _0x485fb9) {
            return _0x16c558(_0x1ae203, _0x485fb9);
        },
        'CoAul': 'returns\x20dictionary\x20of\x20dist-tags',
        'QCHfI': function (_0x38e3ff, _0x1b6ca7, _0xb2dcbd) {
            return _0x38e3ff(_0x1b6ca7, _0xb2dcbd);
        },
        'HEtbD': 'handles\x20disastrous\x20results\x20gracefully'
    };
    _0x194001['jVgjV'](it, _0x194001['CoAul'], async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve']({
            'latest': '1.0.0',
            'other-tag': '1.0.1',
            '_etag': 'should-be-removed'
        }));
        const _0x55846d = { ...baseOptions }, _0x9bd3a0 = await npmDistTag['list'](_0x194001['Kcrpj'], _0x55846d);
        _0x194001['QurDL'](expect, _0x9bd3a0)['toEqual']({
            'latest': _0x194001['VuvCH'],
            'other-tag': _0x194001['JrFXj']
        }), _0x194001['DPizQ'](expect, fetch['json'])['toHaveBeenLastCalledWith'](_0x194001['qtamb'], expect['objectContaining']({
            'preferOnline': !![],
            'spec': expect['objectContaining']({ 'name': _0x194001['Kcrpj'] })
        }));
    }), _0x194001['QCHfI'](it, _0x194001['HEtbD'], async () => {
        fetch['json']['mockImplementationOnce'](() => Promise['resolve'](null));
        const _0x4b8758 = { ...baseOptions }, _0x53227f = await npmDistTag['list'](_0x194001['Kcrpj'], _0x4b8758);
        _0x194001['DPizQ'](expect, _0x53227f)['toEqual']({});
    });
});
