let {session, contextGroup, Protocol} = InspectorTest['start']('Checks\x20that\x20Runtime.evaluate\x20works\x20with\x20dirty\x20context.');
contextGroup['setupInjectedScriptEnvironment'](), Protocol['Runtime']['enable'](), Protocol['Runtime']['onConsoleAPICalled'](InspectorTest['logMessage']), Protocol['Runtime']['evaluate']({ 'expression': 'console.log(42)' })['then'](InspectorTest['logMessage'])['then'](InspectorTest['completeTest']);