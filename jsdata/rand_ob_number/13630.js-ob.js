'use strict';
var _obj;
const Base = {}, obj = _obj = {
        'set'() {
            return babelHelpers['set'](babelHelpers['getPrototypeOf'](_obj), 'test', -0x1cc0 + 0x1d3a + -0x1 * 0x77, this, !![]);
        }
    };
Object['defineProperty'](obj, 'test', {
    'value': 0x2,
    'writable': !![],
    'configurable': ![],
    'enumerable': !![]
}), Object['setPrototypeOf'](obj, Base), expect(obj['set']())['toBe'](-0x71 * -0x57 + 0x212f + -0xfb * 0x49), expect(Base['test'])['toBeUndefined'](), expect(obj['test'])['toBe'](-0x60a * -0x5 + 0x1c68 + -0x3a97);
const desc = Object['getOwnPropertyDescriptor'](obj, 'test');
expect(desc['configurable'])['toBe'](![]), expect(desc['writable'])['toBe'](!![]), expect(desc['enumerable'])['toBe'](!![]);
