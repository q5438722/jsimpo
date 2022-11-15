var { createElement, useLayoutEffect, useState } = React;
var { createRoot } = ReactDOM;
function App() {
  var [e, t] = useState(false);
  useLayoutEffect(() => {
    t(true);
  }, []);return createElement("div", null, `isMounted? ${e}`);
}const container = document.getElementById("container");
const root = createRoot(container);
root.render(createElement(App));
