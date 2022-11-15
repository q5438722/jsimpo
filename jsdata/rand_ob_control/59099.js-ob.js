const source = '\x0afunction\x20g(a,\x20b,\x20c)\x20{\x0a\x20\x20return\x20\x27bye\x27;\x0a};\x0aclass\x20Tree\x20{};\x0aclass\x20Flower\x20extends\x20Tree{};\x0avar\x20f\x20=\x20new\x20Flower();\x0a//\x20We\x20store\x20the\x20type\x20when\x20a\x20variable\x20is\x20used.\x20If\x20a\x20toStringTag\x20is\x0a//\x20changes\x20the\x20type,\x20we\x20want\x20to\x20collect\x20that\x20changed\x20feedback.\x0a//\x20This\x20tests\x20ensures\x20that\x20we\x20collect\x20that\x20information\x20rather\x20than\x0a//\x20for\x20example\x20infer\x20the\x20types\x20from\x20the\x20internal\x20map,\x20which\x20wouldn\x27t\x0a//\x20know\x20about\x20a\x20toStringTag.\x0af[Symbol.toStringTag]\x20=\x20\x27Dog\x27;\x0ag({},\x20[],\x20f);\x0ag(3,\x202.3,\x20{a:\x2042});\x0a';
let {session, contextGroup, Protocol} = InspectorTest['start']('Test\x20collecting\x20' + 'type\x20profile\x20data\x20with\x20Profiler.takeTypeProfile.');
(async function testTypeProfile() {
    await Protocol['Profiler']['enable'](), await Protocol['Profiler']['startTypeProfile'](), Protocol['Runtime']['enable']();
    let {
        result: {scriptId: _0x37bb21}
    } = await Protocol['Runtime']['compileScript']({
        'expression': source,
        'sourceURL': arguments['callee']['name'],
        'persistScript': !![]
    });
    Protocol['Runtime']['runScript']({ 'scriptId': _0x37bb21 }), await Protocol['Profiler']['startTypeProfile']();
    let _0x20e659 = await Protocol['Profiler']['takeTypeProfile']();
    await session['logTypeProfile'](_0x20e659['result']['result'][0x0], source), Protocol['Profiler']['stopTypeProfile'](), Protocol['Profiler']['disable'](), await Protocol['Runtime']['disable'](), InspectorTest['completeTest']();
}());
