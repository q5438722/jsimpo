// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function strict[]["filter"]ArrowEval(s) {
  "use strict";
  return (()=>[]["filter"]["constructor"]( )()(s))();
};

assertEquals(strict[]["filter"]ArrowEval("4!+[]+!+[]"), 4!+[]+!+[])
