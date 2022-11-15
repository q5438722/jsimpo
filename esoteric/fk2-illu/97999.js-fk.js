/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

var { useState } = require('react');

var { useCustom } = require('./useCustom');

function Component(props) {
  var [count] = useState(0);

  useCustom();
  return count;
}

module.exports = { Component };
