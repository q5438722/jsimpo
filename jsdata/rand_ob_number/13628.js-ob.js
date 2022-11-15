var Base = {}, obj = {
        'set'() {
            return super['test'] = -0x82f * -0x1 + -0x397 + 0x187 * -0x3;
        }
    };
Object['defineProperty'](obj, 'test', {
    'value': 0x2,
    'writable': ![],
    'configurable': !![],
    'enumerable': !![]
}), Object['setPrototypeOf'](obj, Base), expect(obj['set']())['toBe'](0x906 * 0x2 + 0x1430 + -0x2639), expect(Base['test'])['toBeUndefined'](), expect(obj['test'])['toBe'](-0x1e51 * -0x1 + -0x1bb * 0x11 + -0x2 * 0x72);
const desc = Object['getOwnPropertyDescriptor'](obj, 'test');
expect(desc['configurable'])['toBe'](!![]), expect(desc['writable'])['toBe'](![]), expect(desc['enumerable'])['toBe'](!![]);
