import * as _0x5be9a2 from './config';
describe('when\x20working\x20with\x20site\x20config', function () {
    const _0x12a9cd = {
        'cORII': 'bar',
        'pugDM': function (_0x4a19be, _0xf34889) {
            return _0x4a19be(_0xf34889);
        },
        'LSyxC': function (_0x1e6837, _0x4c6f07) {
            return _0x1e6837(_0x4c6f07);
        },
        'vTQfC': 'cant-be-changed',
        'hlxsJ': 'baf',
        'qLDJz': 'should-not-be-allowed',
        'NGoUd': function (_0x223a54, _0x3155a4) {
            return _0x223a54(_0x3155a4);
        },
        'kcsBc': function (_0x1b79af, _0x551e23) {
            return _0x1b79af(_0x551e23);
        },
        'iFyzH': 'bar0',
        'OUjpH': function (_0x55ddd4, _0x367bbe, _0x5f317e) {
            return _0x55ddd4(_0x367bbe, _0x5f317e);
        },
        'cAZAY': 'should\x20set\x20site\x20config\x20and\x20config\x20properly',
        'NNDXU': 'should\x20respect\x20secure\x20keys\x20when\x20applying\x20directives',
        'FdjFS': function (_0x429cbd, _0x2109ec, _0x39e283) {
            return _0x429cbd(_0x2109ec, _0x39e283);
        },
        'fdyFM': 'should\x20set\x20reset\x20config\x20properly',
        'JbeIY': function (_0x54336c, _0x259485, _0x3c3319) {
            return _0x54336c(_0x259485, _0x3c3319);
        },
        'gNctb': 'should\x20set\x20global\x20reset\x20config\x20properly'
    };
    _0x12a9cd['kcsBc'](beforeEach, () => {
        _0x5be9a2['setSiteConfig']({});
    }), _0x12a9cd['OUjpH'](it, _0x12a9cd['cAZAY'], function () {
        let _0x17649c = {
            'foo': _0x12a9cd['cORII'],
            'bar': 0x0
        };
        _0x5be9a2['setSiteConfig'](_0x17649c);
        let _0x27b6fb = _0x5be9a2['getSiteConfig'](), _0x4ace31 = _0x5be9a2['getConfig']();
        _0x12a9cd['pugDM'](expect, _0x27b6fb['foo'])['toEqual'](_0x17649c['foo']), _0x12a9cd['LSyxC'](expect, _0x27b6fb['bar'])['toEqual'](_0x17649c['bar']), _0x12a9cd['LSyxC'](expect, _0x27b6fb)['toEqual'](_0x4ace31);
    }), _0x12a9cd['OUjpH'](it, _0x12a9cd['NNDXU'], function () {
        let _0x3e88ae = {
            'foo': _0x12a9cd['cORII'],
            'bar': _0x12a9cd['vTQfC'],
            'secure': [
                ..._0x5be9a2['defaultConfig']['secure'],
                _0x12a9cd['cORII']
            ]
        };
        _0x5be9a2['setSiteConfig'](_0x3e88ae);
        const _0x46bca1 = {
                'foo': _0x12a9cd['hlxsJ'],
                'bar': _0x12a9cd['qLDJz']
            }, _0x27900e = _0x5be9a2['updateCurrentConfig'](_0x3e88ae, [_0x46bca1]);
        _0x12a9cd['NGoUd'](expect, _0x27900e['foo'])['toEqual'](_0x46bca1['foo']), _0x12a9cd['NGoUd'](expect, _0x27900e['bar'])['toBe'](_0x3e88ae['bar']);
    }), _0x12a9cd['FdjFS'](it, _0x12a9cd['fdyFM'], function () {
        let _0x23ffa5 = {
            'foo': _0x12a9cd['cORII'],
            'bar': 0x0
        };
        _0x5be9a2['setSiteConfig'](_0x23ffa5);
        let _0x2b7982 = { 'foo': _0x12a9cd['hlxsJ'] };
        _0x5be9a2['setConfig'](_0x2b7982);
        let _0x5347a0 = _0x5be9a2['getConfig']();
        _0x12a9cd['kcsBc'](expect, _0x5347a0['foo'])['toEqual'](_0x2b7982['foo']), _0x5be9a2['reset']();
        let _0x5e4fd6 = _0x5be9a2['getConfig']();
        _0x12a9cd['kcsBc'](expect, _0x5e4fd6['foo'])['toEqual'](_0x23ffa5['foo']);
        let _0x434f50 = _0x5be9a2['getSiteConfig']();
        _0x12a9cd['kcsBc'](expect, _0x434f50['foo'])['toEqual'](_0x23ffa5['foo']);
    }), _0x12a9cd['JbeIY'](it, _0x12a9cd['gNctb'], function () {
        let _0x2018f7 = {
            'foo': _0x12a9cd['cORII'],
            'bar': 0x0
        };
        _0x5be9a2['setSiteConfig'](_0x2018f7);
        let _0x1c8802 = _0x5be9a2['getSiteConfig']();
        _0x12a9cd['kcsBc'](expect, _0x1c8802['foo'])['toEqual'](_0x2018f7['foo']);
        let _0x520301 = _0x5be9a2['getConfig']();
        _0x12a9cd['kcsBc'](expect, _0x520301['foo'])['toEqual'](_0x2018f7['foo']), _0x5be9a2['setConfig']({ 'foobar': _0x12a9cd['iFyzH'] });
        let _0x8f8186 = _0x5be9a2['getConfig']();
        _0x12a9cd['kcsBc'](expect, _0x8f8186['foobar'])['toEqual'](_0x12a9cd['iFyzH']), _0x5be9a2['reset']();
        let _0x449638 = _0x5be9a2['getConfig']();
        _0x12a9cd['kcsBc'](expect, _0x449638['foobar'])['toBeUndefined']();
    });
});
