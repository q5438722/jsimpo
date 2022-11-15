var { useState } = require("react");

var { useCustom } = require("./useCustom");

function Component(e) {
  var [t] = useState(0);
  useCustom();return t;
}module.exports = { Component: Component };
