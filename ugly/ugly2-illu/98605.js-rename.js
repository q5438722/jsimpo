const Throw = React.lazy(() => {
  throw new Error("Example");
});
const Component = React.memo(function e({ children: r }) {
  return r;
});
function DisplayName({ children: e }) {
  return e;
}DisplayName.displayName = "Custom Name";class NativeClass extends React.Component {
  render() {
    return this.props.children;
  }
}class FrozenClass extends React.Component {
  constructor() {
    super();
  }render() {
    return this.props.children;
  }
}Object.freeze(FrozenClass.prototype);
