import _0x4c7276 from './Repeater.vue';
import { mount } from '@cypress/vue';
describe('Repeater', () => {
    it('User\x20can\x20type\x20and\x20see\x20output\x20on\x20the\x20screen', () => {
        mount(_0x4c7276), cy['get']('#item')['type']('Cypress'), cy['contains']('You\x20typed:\x20Cypress');
    });
});
