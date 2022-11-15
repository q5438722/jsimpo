const testSetup = require('../__shared__/test-setup');
testSetup['isLocal'] ? test('skipped\x20locally', () => {
}) : (test('builds\x20in\x20development', async () => {
    const {fulfilled: _0x9e6626} = await testSetup['scripts']['start']({ 'smoke': !![] });
    expect(_0x9e6626)['toBe'](!![]);
}), test('builds\x20in\x20production', async () => {
    const {fulfilled: _0x265199} = await testSetup['scripts']['build']();
    expect(_0x265199)['toBe'](!![]);
}));
