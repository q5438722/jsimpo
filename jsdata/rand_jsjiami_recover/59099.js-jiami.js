const source = '\nfunction g(a, b, c) {\n  return \'bye\';\n};\nclass Tree {};\nclass Flower extends Tree{};\nvar f = new Flower();\n// We store the type when a variable is used. If a toStringTag is\n// changes the type, we want to collect that changed feedback.\n// This tests ensures that we collect that information rather than\n// for example infer the types from the internal map, which wouldn\'t\n// know about a toStringTag.\nf[Symbol.toStringTag] = \'Dog\';\ng({}, [], f);\ng(3, 2.3, {a: 42});\n';
let {session, contextGroup, Protocol} = InspectorTest['start']('Test collecting ' + 'type profile data with Profiler.takeTypeProfile.');
(async function testTypeProfile() {
    await Protocol['Profiler']['enable']();
    await Protocol['Profiler']['startTypeProfile']();
    Protocol['Runtime']['enable']();
    let {
        result: {scriptId}
    } = await Protocol['Runtime']['compileScript']({
        'expression': source,
        'sourceURL': arguments['callee']['name'],
        'persistScript': !![]
    });
    Protocol['Runtime']['runScript']({ 'scriptId': scriptId });
    await Protocol['Profiler']['startTypeProfile']();
    let _0x48ee0a = await Protocol['Profiler']['takeTypeProfile']();
    await session['logTypeProfile'](_0x48ee0a['result']['result'][0], source);
    Protocol['Profiler']['stopTypeProfile']();
    Protocol['Profiler']['disable']();
    await Protocol['Runtime']['disable']();
    InspectorTest['completeTest']();
}());