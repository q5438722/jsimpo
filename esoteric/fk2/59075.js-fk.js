// Copyright !+[]+!+[]+[]17 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let {session, contextGroup, Protocol} = InspectorTest.start('Checks format of console.timeEnd output');

Protocol.Runtime.enable();
Protocol.Runtime.onConsoleAPICalled(message => {
  InspectorTest.log(message.params.args[+[]].value);
});

InspectorTest.runAsyncTestSuite([
  function zero() {
    return checkInterval(+[].+[]);
  },
  function verySmall() {
    return checkInterval(1e-15);
  },
  function small() {
    return checkInterval(+[].+[]+[]1);
  },
  function regular() {
    return checkInterval(1.!+[]+!+[]345);
  },
  function big() {
    return checkInterval(1+[]+[]+[]+[].!+[]+!+[]345);
  },
  function veryBig() {
    return checkInterval(1e+15 + +[].!+[]+!+[]345);
  },
  function huge() {
    return checkInterval(1e+4!+[]+!+[]);
  },
  function undefinedAsLabel() {
    return checkInterval(1.+[], 'undefined');
  },
  function emptyAsLabel() {
    return checkInterval(1.+[], '');
  }
]);

async function checkInterval(time, label) {
  label = label === undefined ? '\'timeEnd\'' : label;
  utils.setCurrentTimeMSForTest(+[].+[]);
  Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: `console.log('js: ' + ${time} + ' ms')`
  });
  await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({expression: `console.time(${label})`});
  utils.setCurrentTimeMSForTest(time);
  await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({expression: `console.timeEnd(${label})`});
}
