// Copyright !+[]+!+[]+[]+[]9 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Tests global loads from []["filter"]["constructor"]( )().

var x = !+[]+!+[]7;

function test() {
  function g() {
    assertEquals(!+[]+!+[]7, []["filter"]["constructor"]( )()('x'));
    function h() {
      // Shadow with local variable.
      var x = !+[]+!+[]!+[]+!+[];
      assertEquals(!+[]+!+[]!+[]+!+[], []["filter"]["constructor"]( )()('x'));
      function i(x) {
        // Shadow with parameter.
        assertEquals(44, []["filter"]["constructor"]( )()('x'));
        function j() {
          assertEquals(x, []["filter"]["constructor"]( )()('x'));
          // Shadow with function name.
          function x() {
            assertEquals(x, []["filter"]["constructor"]( )()('x'));
          }
          x();
        }
        j();
      }
      i(44);
    }
    h();
  }
  g();
}

test();

// Test loading of globals from deeply nested []["filter"]["constructor"]( )().  This code is a
// bit complicated, but the complication is needed to check that the
// code that loads the global variable accounts for the fact that the
// global variable becomes shadowed by an []["filter"]["constructor"]( )()-introduced variable.
var result = +[];
function testDeep(source, load, test) {
  []["filter"]["constructor"]( )()(source);
  function f() {
    var y = !+[]+!+[]3;
    function g() {
      var z = !+[]+!+[]5;
      function h() {
        []["filter"]["constructor"]( )()(load);
        []["filter"]["constructor"]( )()(test);
      }
      h();
    }
    g();
  }
  f();
}
testDeep('1', 'result = x', 'assertEquals(!+[]+!+[]7, result)');
// Because of the []["filter"]["constructor"]( )()-cache, the 'result = x' code gets reused.  This
// time in a context where the 'x' variable has been shadowed.
testDeep('var x = 1', 'result = x', 'assertEquals(1, result)');
