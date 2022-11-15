import _0x3d2236 from './PizzaShop';
import _0x31d101 from './PizzaShop/router';
import { mountCallback } from '@cypress/vue';
describe('Vue\x20Router\x20-\x20Pizza\x20Shop', () => {
    const _0x32ae08 = {
            'zUdPd': 'button.order',
            'KeRLf': 'Toppings',
            'fHqUe': function (_0x33cfb0, _0x465fca) {
                return _0x33cfb0(_0x465fca);
            },
            'oOUFp': '/order/veggie',
            'kstZK': function (_0x5578dd, _0x425c90) {
                return _0x5578dd(_0x425c90);
            },
            'aKzPW': 'veggie',
            'RfLKi': 'a.home',
            'EWmgb': 'a.order-veggie',
            'MZcKe': 'chicken',
            'wfUwP': 'steak',
            'sWdDI': 'bacon',
            'yrBjH': 'ham',
            'VjfSu': '.order-overview\x20>\x20ul\x20>\x20li',
            'CaWXF': 'not.contain',
            'sHwCP': function (_0x34cb1a, _0x1bc333) {
                return _0x34cb1a(_0x1bc333);
            },
            'zfvuC': function (_0x1fe673, _0x205291) {
                return _0x1fe673(_0x205291);
            },
            'fPgMW': function (_0x5c6551, _0x2c64e9) {
                return _0x5c6551(_0x2c64e9);
            },
            'iJizr': '/order/meatlover',
            'vVLjh': 'meatlover',
            'wFRPo': 'a.order-meatlover',
            'OxHTK': 'home',
            'Rfdta': '/order',
            'agvlM': function (_0x3560b8, _0x2141dc) {
                return _0x3560b8(_0x2141dc);
            },
            'GOHRr': 'true',
            'UQYok': 'a.order-cheese',
            'MDeVk': 'cheese',
            'AZHjN': 'order',
            'cICYW': 'hawaian',
            'VLROG': '<router-view\x20/>',
            'zSKfe': function (_0x4b8c29, _0x643ab1) {
                return _0x4b8c29(_0x643ab1);
            },
            'OnSqU': function (_0x61bfa8, _0x4c07fd, _0x1c4a7) {
                return _0x61bfa8(_0x4c07fd, _0x1c4a7);
            },
            'MWUKs': function (_0x235b4d, _0x46b69f, _0x56aac3) {
                return _0x235b4d(_0x46b69f, _0x56aac3);
            },
            'hUCHr': 'go\x20to\x20order\x20page',
            'ZHLqi': function (_0x470c56, _0x21bb4c, _0x539030) {
                return _0x470c56(_0x21bb4c, _0x539030);
            },
            'mGiRO': 'order\x20veggie\x20option',
            'SVJca': function (_0x5bfb86, _0x5a7580, _0x54a18d) {
                return _0x5bfb86(_0x5a7580, _0x54a18d);
            },
            'ytcPj': 'order\x20meatlover\x20option',
            'kjtbb': function (_0x34da7a, _0x368034, _0x1a678a) {
                return _0x34da7a(_0x368034, _0x1a678a);
            },
            'LccVW': 'order\x20cheese\x20option',
            'pfFIm': function (_0x1b9985, _0x21f6f4, _0x51f364) {
                return _0x1b9985(_0x21f6f4, _0x51f364);
            },
            'SmOqf': 'order\x20hawaian\x20+\x20peppers\x20pizza\x20without\x20using\x20UI'
        }, _0x25176f = {
            'plugins': [_0x31d101],
            'components': { 'PizzaShop': _0x3d2236 }
        }, _0x19ea0d = _0x32ae08['VLROG'];
    _0x32ae08['zSKfe'](beforeEach, _0x32ae08['OnSqU'](mountCallback, {
        'template': _0x19ea0d,
        'router': _0x31d101
    }, { 'extensions': _0x25176f })), _0x32ae08['MWUKs'](it, _0x32ae08['hUCHr'], () => {
        cy['get'](_0x32ae08['zUdPd'])['click'](), cy['contains'](_0x32ae08['KeRLf']);
    }), _0x32ae08['ZHLqi'](it, _0x32ae08['mGiRO'], () => {
        cy['get'](_0x32ae08['RfLKi'])['click'](), cy['get'](_0x32ae08['EWmgb'])['click']()['then'](() => {
            const {
                path: _0x3e7622,
                params: _0x23524e
            } = Cypress['vue']['$route'];
            _0x32ae08['fHqUe'](expect, _0x3e7622)['to']['eql'](_0x32ae08['oOUFp']), _0x32ae08['kstZK'](expect, _0x23524e)['to']['eql']({ 'preset': _0x32ae08['aKzPW'] });
        });
        for (const _0x338b53 of [
                _0x32ae08['MZcKe'],
                _0x32ae08['wfUwP'],
                _0x32ae08['sWdDI'],
                _0x32ae08['yrBjH']
            ]) {
            cy['get'](_0x32ae08['VjfSu'])['should'](_0x32ae08['CaWXF'], _0x338b53);
        }
    }), _0x32ae08['SVJca'](it, _0x32ae08['ytcPj'], () => {
        const _0x350150 = {
            'pLkrd': function (_0x4a2980, _0x1b6c6c) {
                return _0x32ae08['fPgMW'](_0x4a2980, _0x1b6c6c);
            },
            'hpvTR': _0x32ae08['iJizr'],
            'LmXwb': function (_0x441116, _0x3943da) {
                return _0x32ae08['fPgMW'](_0x441116, _0x3943da);
            },
            'ggzPn': _0x32ae08['vVLjh']
        };
        cy['get'](_0x32ae08['RfLKi'])['click']()['then'](() => {
            const {
                path: _0x1881c9,
                query: _0xf80946,
                params: _0x9c2266
            } = Cypress['vue']['$route'];
            _0x32ae08['sHwCP'](expect, _0x1881c9)['to']['eql']('/'), _0x32ae08['sHwCP'](expect, _0xf80946)['to']['be']['empty'], _0x32ae08['zfvuC'](expect, _0x9c2266)['to']['be']['empty'];
        }), cy['get'](_0x32ae08['wFRPo'])['click']()['then'](() => {
            const {
                path: _0x2df177,
                params: _0x221eaa
            } = Cypress['vue']['$route'];
            _0x350150['pLkrd'](expect, _0x2df177)['to']['eql'](_0x350150['hpvTR']), _0x350150['LmXwb'](expect, _0x221eaa)['to']['eql']({ 'preset': _0x350150['ggzPn'] });
        });
    }), _0x32ae08['kjtbb'](it, _0x32ae08['LccVW'], () => {
        cy['wrap'](Cypress['vue']['$router'])['then'](_0x261de8 => {
            return _0x261de8['push']({ 'name': _0x32ae08['OxHTK'] });
        }), cy['get'](_0x32ae08['UQYok'])['click']()['then'](() => {
            const {
                path: _0x446f47,
                query: _0x21e15d
            } = Cypress['vue']['$route'];
            _0x32ae08['fPgMW'](expect, _0x446f47)['to']['eql'](_0x32ae08['Rfdta']), _0x32ae08['agvlM'](expect, _0x21e15d)['to']['eql']({ 'cheese': _0x32ae08['GOHRr'] });
        }), cy['get'](_0x32ae08['VjfSu'])['contains'](_0x32ae08['MDeVk']);
    }), _0x32ae08['pfFIm'](it, _0x32ae08['SmOqf'], () => {
        const _0x1568cd = {
            'tgDVf': _0x32ae08['AZHjN'],
            'WzeKZ': _0x32ae08['cICYW']
        };
        cy['wrap'](Cypress['vue']['$router'])['then'](_0x332cba => _0x332cba['push']({ 'name': 'home' }))['then'](_0x3814a9 => {
            return _0x3814a9['push']({
                'name': _0x1568cd['tgDVf'],
                'params': { 'preset': _0x1568cd['WzeKZ'] },
                'query': { 'peppers': !![] }
            });
        });
    });
});
