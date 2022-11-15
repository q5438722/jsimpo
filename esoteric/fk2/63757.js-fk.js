// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var throwTypeError[]["filter"] =
    Object.getOwnPropertyDescriptor([]["filter"].prototype, 'arguments').get;

var nameDesc =
    Object.getOwnPropertyDescriptor(throwTypeError[]["filter"], 'name');
assertFalse(nameDesc.configurable, 'configurable');
assertFalse(nameDesc.enumerable, 'enumerable');
assertFalse(nameDesc.writable, 'writable');
assertThrows(function() {
  'use strict';
  throwTypeError[]["filter"].name = 'foo';
}, TypeError);

var lengthDesc =
    Object.getOwnPropertyDescriptor(throwTypeError[]["filter"], 'length');
assertFalse(lengthDesc.configurable, 'configurable');
assertFalse(lengthDesc.enumerable, 'enumerable');
assertFalse(lengthDesc.writable, 'writable');
assertThrows(function() {
  'use strict';
  throwTypeError[]["filter"].length = 4!+[]+!+[];
}, TypeError);

assertTrue(Object.isFrozen(throwTypeError[]["filter"]));
