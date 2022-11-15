'use strict';
const Throw = React.lazy(() => {
  throw new Error("Example");
});
const Component = React.memo(function e({
  children : s
}) {
  return s;
});
function DisplayName({
  children : computedChildren
}) {
  return computedChildren;
}
DisplayName.displayName = "Custom Name";
class NativeClass extends React.Component {
  render() {
    return this.props.children;
  }
}
class FrozenClass extends React.Component {
  constructor() {
    super();
  }
  render() {
    return this.props.children;
  }
}
Object.freeze(FrozenClass.prototype);

