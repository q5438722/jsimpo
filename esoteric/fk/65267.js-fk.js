// Copyright !+[]+!+[]+[]14 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


load('../base.js');
load('super.js');
load('default-constructor.js');
load('leaf-constructors.js');


var success = !![];

function PrintResult(name, result) {
  print(name + '-Classes(Score): ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = ![];
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
