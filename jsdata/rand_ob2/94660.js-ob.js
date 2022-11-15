const _0x306f = [
    '/order/meatlover',
    'meatlover',
    'order\x20cheese\x20option',
    'wrap',
    'home',
    'a.order-cheese',
    '/order',
    'true',
    'contains',
    'cheese',
    'push',
    'order',
    'hawaian',
    '32cWbHlk',
    '23015allKWX',
    '746862glhVNl',
    '44632ZkBjKz',
    '350980jJvDFX',
    '347945UFEjNd',
    '24RDXSRb',
    '34669jBlhaM',
    '596656mRnkXs',
    'Vue\x20Router\x20-\x20Pizza\x20Shop',
    'go\x20to\x20order\x20page',
    'get',
    'button.order',
    'click',
    'order\x20veggie\x20option',
    'a.home',
    'a.order-veggie',
    'vue',
    '$route',
    'eql',
    'veggie',
    'chicken',
    'steak',
    '.order-overview\x20>\x20ul\x20>\x20li',
    'should',
    'not.contain',
    'order\x20meatlover\x20option',
    'then',
    'empty',
    'a.order-meatlover'
];
function _0x1adf(_0x383be4, _0x325a4d) {
    return _0x1adf = function (_0x306f9e, _0x1adf7b) {
        _0x306f9e = _0x306f9e - 0x10a;
        let _0x404070 = _0x306f[_0x306f9e];
        return _0x404070;
    }, _0x1adf(_0x383be4, _0x325a4d);
}
const _0x115cb2 = _0x1adf;
(function (_0x3f2b74, _0x4b8f89) {
    const _0x2d0fc1 = _0x1adf;
    while (!![]) {
        try {
            const _0x25788a = parseInt(_0x2d0fc1(0x10a)) * parseInt(_0x2d0fc1(0x10b)) + parseInt(_0x2d0fc1(0x10c)) + parseInt(_0x2d0fc1(0x10d)) + parseInt(_0x2d0fc1(0x10e)) + parseInt(_0x2d0fc1(0x10f)) + -parseInt(_0x2d0fc1(0x110)) * parseInt(_0x2d0fc1(0x111)) + -parseInt(_0x2d0fc1(0x112));
            if (_0x25788a === _0x4b8f89)
                break;
            else
                _0x3f2b74['push'](_0x3f2b74['shift']());
        } catch (_0x1b5444) {
            _0x3f2b74['push'](_0x3f2b74['shift']());
        }
    }
}(_0x306f, 0xc2deb));
import _0x434e8d from './PizzaShop';
import _0x177f8a from './PizzaShop/router';
import { mountCallback } from '@cypress/vue';
describe(_0x115cb2(0x113), () => {
    const _0xa74547 = _0x115cb2, _0x16b11f = {
            'plugins': [_0x177f8a],
            'components': { 'PizzaShop': _0x434e8d }
        }, _0x28cf4a = '<router-view\x20/>';
    beforeEach(mountCallback({
        'template': _0x28cf4a,
        'router': _0x177f8a
    }, { 'extensions': _0x16b11f })), it(_0xa74547(0x114), () => {
        const _0xbd4098 = _0xa74547;
        cy[_0xbd4098(0x115)](_0xbd4098(0x116))[_0xbd4098(0x117)](), cy['contains']('Toppings');
    }), it(_0xa74547(0x118), () => {
        const _0xb3811a = _0xa74547;
        cy[_0xb3811a(0x115)](_0xb3811a(0x119))['click'](), cy[_0xb3811a(0x115)](_0xb3811a(0x11a))[_0xb3811a(0x117)]()['then'](() => {
            const _0x14a1e1 = _0xb3811a, {
                    path: _0x14d0f5,
                    params: _0x1523ad
                } = Cypress[_0x14a1e1(0x11b)][_0x14a1e1(0x11c)];
            expect(_0x14d0f5)['to'][_0x14a1e1(0x11d)]('/order/veggie'), expect(_0x1523ad)['to'][_0x14a1e1(0x11d)]({ 'preset': _0x14a1e1(0x11e) });
        });
        for (const _0x5818a2 of [
                _0xb3811a(0x11f),
                _0xb3811a(0x120),
                'bacon',
                'ham'
            ]) {
            cy[_0xb3811a(0x115)](_0xb3811a(0x121))[_0xb3811a(0x122)](_0xb3811a(0x123), _0x5818a2);
        }
    }), it(_0xa74547(0x124), () => {
        const _0x486cfc = _0xa74547;
        cy[_0x486cfc(0x115)](_0x486cfc(0x119))[_0x486cfc(0x117)]()[_0x486cfc(0x125)](() => {
            const _0x5e7f0c = _0x486cfc, {
                    path: _0x52bc36,
                    query: _0x233ab6,
                    params: _0xa1b969
                } = Cypress[_0x5e7f0c(0x11b)][_0x5e7f0c(0x11c)];
            expect(_0x52bc36)['to'][_0x5e7f0c(0x11d)]('/'), expect(_0x233ab6)['to']['be']['empty'], expect(_0xa1b969)['to']['be'][_0x5e7f0c(0x126)];
        }), cy[_0x486cfc(0x115)](_0x486cfc(0x127))[_0x486cfc(0x117)]()[_0x486cfc(0x125)](() => {
            const _0x250f24 = _0x486cfc, {
                    path: _0x227f62,
                    params: _0x4d83e3
                } = Cypress[_0x250f24(0x11b)]['$route'];
            expect(_0x227f62)['to'][_0x250f24(0x11d)](_0x250f24(0x128)), expect(_0x4d83e3)['to'][_0x250f24(0x11d)]({ 'preset': _0x250f24(0x129) });
        });
    }), it(_0xa74547(0x12a), () => {
        const _0x4e420e = _0xa74547;
        cy[_0x4e420e(0x12b)](Cypress[_0x4e420e(0x11b)]['$router'])[_0x4e420e(0x125)](_0x1bd272 => {
            const _0x3be57d = _0x4e420e;
            return _0x1bd272['push']({ 'name': _0x3be57d(0x12c) });
        }), cy[_0x4e420e(0x115)](_0x4e420e(0x12d))[_0x4e420e(0x117)]()[_0x4e420e(0x125)](() => {
            const _0x18aef2 = _0x4e420e, {
                    path: _0x2b6ebb,
                    query: _0x338fea
                } = Cypress[_0x18aef2(0x11b)][_0x18aef2(0x11c)];
            expect(_0x2b6ebb)['to'][_0x18aef2(0x11d)](_0x18aef2(0x12e)), expect(_0x338fea)['to'][_0x18aef2(0x11d)]({ 'cheese': _0x18aef2(0x12f) });
        }), cy[_0x4e420e(0x115)]('.order-overview\x20>\x20ul\x20>\x20li')[_0x4e420e(0x130)](_0x4e420e(0x131));
    }), it('order\x20hawaian\x20+\x20peppers\x20pizza\x20without\x20using\x20UI', () => {
        const _0x4c9a3c = _0xa74547;
        cy['wrap'](Cypress[_0x4c9a3c(0x11b)]['$router'])[_0x4c9a3c(0x125)](_0x59f794 => _0x59f794[_0x4c9a3c(0x132)]({ 'name': _0x4c9a3c(0x12c) }))[_0x4c9a3c(0x125)](_0x59ffd2 => {
            const _0x16c18a = _0x4c9a3c;
            return _0x59ffd2[_0x16c18a(0x132)]({
                'name': _0x16c18a(0x133),
                'params': { 'preset': _0x16c18a(0x134) },
                'query': { 'peppers': !![] }
            });
        });
    });
});
