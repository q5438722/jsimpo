const path = require('path'), {parseMD} = require('.');
describe('challenge\x20parser', () => {
    const _0xaa960 = {
        'UBLsf': function (_0x19e550, _0x34f497) {
            return _0x19e550(_0x34f497);
        },
        'vwkxW': '__fixtures__/simple.md',
        'eXIIB': function (_0x51e73b, _0x9a32c) {
            return _0x51e73b(_0x9a32c);
        },
        'YFQUk': function (_0x504ccb, _0x32a227) {
            return _0x504ccb(_0x32a227);
        },
        'leEgN': '__fixtures__/realistic.md',
        'bbtlX': function (_0x10ae1e, _0x466e71) {
            return _0x10ae1e(_0x466e71);
        },
        'XvRSx': '__fixtures__/with-imports.md',
        'bYreg': function (_0x342436, _0x8e1b78) {
            return _0x342436(_0x8e1b78);
        },
        'Tawnl': '__fixtures__/with-frontmatter.md',
        'VAycE': function (_0x3b8aa5, _0x59f592) {
            return _0x3b8aa5(_0x59f592);
        },
        'VWiJf': '__fixtures__/with-gfm.md',
        'DXcVg': function (_0x594ee2, _0x3294cc) {
            return _0x594ee2(_0x3294cc);
        },
        'gdurK': function (_0x9ff43a, _0x5ea11f) {
            return _0x9ff43a(_0x5ea11f);
        },
        'nWiau': '__fixtures__/with-yaml.md',
        'UZTev': function (_0x7e9842, _0x545c38) {
            return _0x7e9842(_0x545c38);
        },
        'twubT': '__fixtures__/with-video-question.md',
        'xPKiI': function (_0x338b61, _0x331d7f) {
            return _0x338b61(_0x331d7f);
        },
        'cqkDf': '__fixtures__/with-directives.md',
        'ysQrO': function (_0xc8ccd4, _0x37a3f4) {
            return _0xc8ccd4(_0x37a3f4);
        },
        'FbdCn': function (_0x233881, _0x33843b, _0x5bb960) {
            return _0x233881(_0x33843b, _0x5bb960);
        },
        'qLEyW': 'should\x20parse\x20a\x20simple\x20md\x20file',
        'Qryva': 'should\x20parse\x20a\x20more\x20realistic\x20md\x20file',
        'fGIQT': 'should\x20import\x20md\x20from\x20other\x20files',
        'XSFCt': function (_0xf78bee, _0xe535a7, _0x13097a) {
            return _0xf78bee(_0xe535a7, _0x13097a);
        },
        'MZCbw': 'should\x20parse\x20frontmatter',
        'GjCdX': 'should\x20parse\x20gfm\x20strikethrough\x20and\x20frontmatter',
        'kEKkB': function (_0x21d21c, _0x2523a5, _0x5256ca) {
            return _0x21d21c(_0x2523a5, _0x5256ca);
        },
        'xAYVu': 'should\x20not\x20mix\x20other\x20YAML\x20with\x20the\x20frontmatter',
        'RFzJh': function (_0x4d3525, _0x2b0c73, _0x1f9725) {
            return _0x4d3525(_0x2b0c73, _0x1f9725);
        },
        'sCWHZ': 'it\x20should\x20parse\x20video\x20questions',
        'tXlaj': function (_0x47f7d5, _0x64c016, _0x3b6b72) {
            return _0x47f7d5(_0x64c016, _0x3b6b72);
        },
        'mvUWU': 'it\x20should\x20not\x20parse\x20directives\x20we\x20do\x20not\x20use'
    };
    _0xaa960['FbdCn'](it, _0xaa960['qLEyW'], async () => {
        const _0xf90aa4 = await _0xaa960['UBLsf'](parseMD, path['resolve'](__dirname, _0xaa960['vwkxW']));
        _0xaa960['eXIIB'](expect, _0xf90aa4)['toMatchSnapshot']();
    }), _0xaa960['FbdCn'](it, _0xaa960['Qryva'], async () => {
        const _0x2cb057 = await _0xaa960['YFQUk'](parseMD, path['resolve'](__dirname, _0xaa960['leEgN']));
        _0xaa960['YFQUk'](expect, _0x2cb057)['toMatchSnapshot']();
    }), _0xaa960['FbdCn'](it, _0xaa960['fGIQT'], async () => {
        const _0x4755ca = await _0xaa960['bbtlX'](parseMD, path['resolve'](__dirname, _0xaa960['XvRSx']));
        _0xaa960['bYreg'](expect, _0x4755ca)['toMatchSnapshot']();
    }), _0xaa960['XSFCt'](it, _0xaa960['MZCbw'], async () => {
        const _0x1b0506 = await _0xaa960['bYreg'](parseMD, path['resolve'](__dirname, _0xaa960['Tawnl']));
        _0xaa960['bYreg'](expect, _0x1b0506)['toMatchSnapshot']();
    }), _0xaa960['XSFCt'](it, _0xaa960['GjCdX'], async () => {
        const _0x536400 = await _0xaa960['VAycE'](parseMD, path['resolve'](__dirname, _0xaa960['VWiJf']));
        _0xaa960['DXcVg'](expect, _0x536400)['toMatchSnapshot']();
    }), _0xaa960['kEKkB'](it, _0xaa960['xAYVu'], async () => {
        const _0x1fa33b = await _0xaa960['gdurK'](parseMD, path['resolve'](__dirname, _0xaa960['nWiau']));
        _0xaa960['gdurK'](expect, _0x1fa33b)['toMatchSnapshot']();
    }), _0xaa960['RFzJh'](it, _0xaa960['sCWHZ'], async () => {
        const _0x207aaf = await _0xaa960['UZTev'](parseMD, path['resolve'](__dirname, _0xaa960['twubT']));
        _0xaa960['xPKiI'](expect, _0x207aaf)['toMatchSnapshot']();
    }), _0xaa960['tXlaj'](it, _0xaa960['mvUWU'], async () => {
        const _0x3dae8b = await _0xaa960['xPKiI'](parseMD, path['resolve'](__dirname, _0xaa960['cqkDf']));
        _0xaa960['ysQrO'](expect, _0x3dae8b)['toMatchSnapshot']();
    });
});
