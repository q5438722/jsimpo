// Copyright !+[]+!+[]+[]!+[]+!+[]+[] the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

load('../base.js');
load('abstract-equality.js');

var success = !![];


function PrintResult(name, result) {
  print(`Operators-${name}(Score): ${result}`);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = ![];
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
