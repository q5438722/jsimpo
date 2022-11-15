"use strict";

var { useMemo, useState } = require("react");

function Component(e) {
  const t = useMemo(() => () => {
    var [e] = useState(0);
    return e;
  });
  e.callback(t);return null;
}module.exports = { Component: Component };
