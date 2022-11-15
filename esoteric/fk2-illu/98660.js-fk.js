var { createElement, useLayoutEffect, useState } = React;
var { createRoot } = ReactDOM;


function App() {
  var [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);
  return createElement('div', null, `isMounted? ${isMounted}`);
}

const container = document.getElementById('container');
const root = createRoot(container);

root.render(createElement(App));
