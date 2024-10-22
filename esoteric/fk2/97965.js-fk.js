"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
const {
  useMemo,
  useState
} = require('react');

function Component(props) {
  const InnerComponent = useMemo(() => () => {
    const [state] = useState(+[]);
    return state;
  });
  props.callback(InnerComponent);
  return null;
}

module.exports = {
  Component
};
//# sourceMappingURL=ComponentWithNestedHooks.js.map?foo=bar&param=some_value