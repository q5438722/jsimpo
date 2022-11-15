var Base = {};
var obj = {};
Object['defineProperty'](obj, 'test', {
    'value': 2,
    'writable': ![],
    'configurable': !![],
    'enumerable': !![]
});
Object['setPrototypeOf'](obj, Base);
expect(obj['set']())['toBe'](3);
expect(Base['test'])['toBeUndefined']();
expect(obj['test'])['toBe'](2);
const desc = Object['getOwnPropertyDescriptor'](obj, 'test');
expect(desc['configurable'])['toBe'](!![]);
expect(desc['writable'])['toBe'](![]);
expect(desc['enumerable'])['toBe'](!![]);