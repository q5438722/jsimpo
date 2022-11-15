import { compile } from '../../../packages/weex-template-compiler';
import { strToRegExp } from '../helpers/index';
describe('compile\x20style', () => {
    it('should\x20be\x20compiled', () => {
        const {
            render: _0x2a1efa,
            staticRenderFns: _0x444057,
            errors: _0x4e1e84
        } = compile('<div\x20style=\x22a:\x20x;\x20b:\x20y\x22></div>');
        expect(_0x2a1efa)['not']['toBeUndefined'](), expect(_0x444057)['not']['toBeUndefined'](), expect(_0x444057['length'])['toEqual'](-0x1abf * 0x1 + -0x1 * 0x1127 + 0x2be6), expect(_0x2a1efa)['toMatch'](strToRegExp('staticStyle:{a:\x22x\x22,b:\x22y\x22}')), expect(_0x4e1e84)['toEqual']([]);
    }), it('should\x20compile\x20empty\x20style\x20value', () => {
        const {
            render: _0x5d50ed,
            staticRenderFns: _0x57a0f1,
            errors: _0x5f2389
        } = compile('<div\x20style=\x22\x22></div>');
        expect(_0x5d50ed)['not']['toBeUndefined'](), expect(_0x57a0f1)['not']['toBeUndefined'](), expect(_0x57a0f1['length'])['toEqual'](-0x8 * -0x1a5 + -0x1938 + -0x2 * -0x608), expect(_0x5d50ed)['toMatch'](/[(^style|^staticStyle)]/), expect(_0x5f2389)['toEqual']([]);
    }), it('should\x20compile\x20style\x20value\x20with\x20trailing\x20semicolon', () => {
        const {
            render: _0x271139,
            staticRenderFns: _0x1fadec,
            errors: _0x11831f
        } = compile('<div\x20style=\x22a:\x20x;\x20b:\x20y;\x22></div>');
        expect(_0x271139)['not']['toBeUndefined'](), expect(_0x1fadec)['not']['toBeUndefined'](), expect(_0x1fadec['length'])['toEqual'](0x1775 + -0x1c7 + 0x3 * -0x73a), expect(_0x271139)['toMatch'](strToRegExp('staticStyle:{a:\x22x\x22,b:\x22y\x22}')), expect(_0x11831f)['toEqual']([]);
    }), it('should\x20compile\x20hyphenated\x20style\x20name\x20&\x20value', () => {
        const {
            render: _0xc97eed,
            staticRenderFns: _0x1cc582,
            errors: _0x15ee09
        } = compile('<div\x20style=\x22-abc-def:\x20x-y;\x20abc-def:\x20x-y\x22></div>');
        expect(_0xc97eed)['not']['toBeUndefined'](), expect(_0x1cc582)['not']['toBeUndefined'](), expect(_0x1cc582['length'])['toEqual'](0x1 * -0x1ee3 + -0x20ab * -0x1 + 0x1c8 * -0x1), expect(_0xc97eed)['toMatch'](strToRegExp('staticStyle:{AbcDef:\x22x-y\x22,abcDef:\x22x-y\x22}')), expect(_0x15ee09)['toEqual']([]);
    }), it('should\x20compile\x20dynamic\x20style', () => {
        const {
            render: _0x49c6e5,
            staticRenderFns: _0x511794,
            errors: _0x32a3e4
        } = compile('<div\x20style=\x22a:\x20x;\x20b:\x20{{y}}\x22></div>');
        expect(_0x49c6e5)['not']['toBeUndefined'](), expect(_0x511794)['toEqual']([]), expect(_0x49c6e5)['toMatch'](strToRegExp('style:{a:\x22x\x22,b:_s(y)}')), expect(_0x32a3e4)['not']['toBeUndefined'](), expect(_0x32a3e4['length'])['toEqual'](0x936 + 0x4 * -0x31a + 0x3f * 0xd), expect(_0x32a3e4[0x1725 + -0x70b + 0x2af * -0x6])['toMatch'](strToRegExp('b:\x20{{y}}')), expect(_0x32a3e4[0x13 * 0x108 + -0xb77 * -0x1 + -0x1f0f * 0x1])['toMatch'](strToRegExp('v-bind'));
    }), it('should\x20compile\x20style\x20binding\x20of\x20array', () => {
        const {
            render: _0xde44c0,
            staticRenderFns: _0x5aea27,
            errors: _0x37568d
        } = compile('<div\x20v-bind:style=\x22[a,\x20b,\x20c]\x22></div>');
        expect(_0xde44c0)['not']['toBeUndefined'](), expect(_0x5aea27)['toEqual']([]), expect(_0xde44c0)['toMatch'](strToRegExp('style:[a,\x20b,\x20c]')), expect(_0x37568d)['toEqual']([]);
    }), it('should\x20compile\x20style\x20binding\x20of\x20map', () => {
        const {
            render: _0x3d81b9,
            staticRenderFns: _0x168444,
            errors: _0x3c1422
        } = compile('<div\x20v-bind:style=\x22{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}\x22></div>');
        expect(_0x3d81b9)['not']['toBeUndefined'](), expect(_0x168444)['toEqual']([]), expect(_0x3d81b9)['toMatch'](strToRegExp('style:{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}')), expect(_0x3c1422)['toEqual']([]);
    }), it('should\x20compile\x20style\x20binding\x20of\x20a\x20variable', () => {
        const {
            render: _0x2f28fb,
            staticRenderFns: _0x341b53,
            errors: _0x3c73f6
        } = compile('<div\x20v-bind:style=\x22x\x22></div>');
        expect(_0x2f28fb)['not']['toBeUndefined'](), expect(_0x341b53)['toEqual']([]), expect(_0x2f28fb)['toMatch'](strToRegExp('style:x')), expect(_0x3c73f6)['toEqual']([]);
    }), it('should\x20compile\x20style\x20binding\x20by\x20shorthand', () => {
        const {
            render: _0x3f6cd4,
            staticRenderFns: _0x43aa05,
            errors: _0x33d5c1
        } = compile('<div\x20:style=\x22[a,\x20b,\x20c]\x22></div>');
        expect(_0x3f6cd4)['not']['toBeUndefined'](), expect(_0x43aa05)['toEqual']([]), expect(_0x3f6cd4)['toMatch'](strToRegExp('style:[a,\x20b,\x20c]')), expect(_0x33d5c1)['toEqual']([]);
    });
});
