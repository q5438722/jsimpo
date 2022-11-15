'use strict';
const Throw = React["lazy"](() => {
  var ret = {};
  throw new Error(ret["Nohyt"]);
});
const Component = React["memo"](function getChildrenUids({
  children : children
}) {
  return children;
});
function DisplayName({
  children : children
}) {
  return children;
}
DisplayName["displayName"] = "Custom Name";
class NativeClass extends React["Component"] {
  ["render"]() {
    return this["props"]["children"];
  }
}
class FrozenClass extends React["Component"] {
  constructor() {
    super();
  }
  ["render"]() {
    return this["props"]["children"];
  }
}
Object["freeze"](FrozenClass["prototype"]);

