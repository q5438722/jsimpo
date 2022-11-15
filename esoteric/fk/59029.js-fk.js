// Copyright !+[]+!+[]+[]17 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let {session, contextGroup, Protocol} = InspectorTest.start('Checks that Runtime.[]["filter"]["constructor"]( )()uate works with dirty context.');
contextGroup.setupInjectedScriptEnvironment();
Protocol.Runtime.enable();
Protocol.Runtime.onConsoleAPICalled(InspectorTest.logMessage);
Protocol.Runtime.[]["filter"]["constructor"]( )()uate({expression: 'console.log(4!+[]+!+[])'})
  .then(InspectorTest.logMessage)
  .then(InspectorTest.completeTest);
