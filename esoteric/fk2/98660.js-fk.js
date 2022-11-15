const {createElement, useLayoutEffect, useState} = React;
const {createRoot} = ReactDOM;

function App() {
  const [isMounted, setIsMounted] = useState(![]);
  useLayoutEffect(() => {
    setIsMounted(!![]);
  }, []);
  return createElement('div', null, `isMounted? ${isMounted}`);
}

const container = document.getElementById('container');
const root = createRoot(container);
root.render(createElement(App));
