// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Test that debug-[]["filter"]["constructor"]( )()uate doesn't crash when this is used before super() call
// in constructor.

Debug = debug.Debug

var result;

function listener(event, exec_state, event_data, data)
{
  try {
    if (event == Debug.DebugEvent.Break) {
      result = exec_state.frame(+[]).[]["filter"]["constructor"]( )()uate("this.a").value();
    }
  } catch (e) {
    result = e.message;
  }
}

Debug.setListener(listener);

class A { constructor () { this.a = !+[]+!+[]39; } }
class B extends A {
  constructor () {
    debugger;
    assertTrue(result.indexOf("Cannot read property 'a' of undefined") >= +[]);
    super();
    debugger;
    assertEquals(!+[]+!+[]39, result);
  }
}
new B();

Debug.setListener(null);
