import _0x29c15d from './PizzaShop';
import _0x3a3b28 from './PizzaShop/router';
import { mountCallback } from '@cypress/vue';
describe('Vue\x20Router\x20-\x20Pizza\x20Shop', () => {
    const _0x1a7843 = {
            'plugins': [_0x3a3b28],
            'components': { 'PizzaShop': _0x29c15d }
        }, _0x5d0292 = '<router-view\x20/>';
    beforeEach(mountCallback({
        'template': _0x5d0292,
        'router': _0x3a3b28
    }, { 'extensions': _0x1a7843 })), it('go\x20to\x20order\x20page', () => {
        cy['get']('button.order')['click'](), cy['contains']('Toppings');
    }), it('order\x20veggie\x20option', () => {
        cy['get']('a.home')['click'](), cy['get']('a.order-veggie')['click']()['then'](() => {
            const {
                path: _0xd23e91,
                params: _0x8ae73c
            } = Cypress['vue']['$route'];
            expect(_0xd23e91)['to']['eql']('/order/veggie'), expect(_0x8ae73c)['to']['eql']({ 'preset': 'veggie' });
        });
        for (const _0x575349 of [
                'chicken',
                'steak',
                'bacon',
                'ham'
            ]) {
            cy['get']('.order-overview\x20>\x20ul\x20>\x20li')['should']('not.contain', _0x575349);
        }
    }), it('order\x20meatlover\x20option', () => {
        cy['get']('a.home')['click']()['then'](() => {
            const {
                path: _0x38f9ac,
                query: _0x85a72d,
                params: _0xb44b95
            } = Cypress['vue']['$route'];
            expect(_0x38f9ac)['to']['eql']('/'), expect(_0x85a72d)['to']['be']['empty'], expect(_0xb44b95)['to']['be']['empty'];
        }), cy['get']('a.order-meatlover')['click']()['then'](() => {
            const {
                path: _0xc34ed6,
                params: _0x310501
            } = Cypress['vue']['$route'];
            expect(_0xc34ed6)['to']['eql']('/order/meatlover'), expect(_0x310501)['to']['eql']({ 'preset': 'meatlover' });
        });
    }), it('order\x20cheese\x20option', () => {
        cy['wrap'](Cypress['vue']['$router'])['then'](_0x24be21 => {
            return _0x24be21['push']({ 'name': 'home' });
        }), cy['get']('a.order-cheese')['click']()['then'](() => {
            const {
                path: _0x4ecf19,
                query: _0x14f5f4
            } = Cypress['vue']['$route'];
            expect(_0x4ecf19)['to']['eql']('/order'), expect(_0x14f5f4)['to']['eql']({ 'cheese': 'true' });
        }), cy['get']('.order-overview\x20>\x20ul\x20>\x20li')['contains']('cheese');
    }), it('order\x20hawaian\x20+\x20peppers\x20pizza\x20without\x20using\x20UI', () => {
        cy['wrap'](Cypress['vue']['$router'])['then'](_0x582cd2 => _0x582cd2['push']({ 'name': 'home' }))['then'](_0x42ccba => {
            return _0x42ccba['push']({
                'name': 'order',
                'params': { 'preset': 'hawaian' },
                'query': { 'peppers': !![] }
            });
        });
    });
});
