var obj = {};
Object['defineProperty'](obj, 'x', {
    'get': function () {
        return '42';
    },
    'configurable': ![]
}), assertEquals(obj['x'], '42'), Object[_0x52b641(321)](obj, 'x', {}), assertEquals(obj['x'], '42');