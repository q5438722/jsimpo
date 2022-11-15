const {createElement, useLayoutEffect, useState} = React;
const {createRoot} = ReactDOM;
function App() {
    const [_0xb02e78, _0x47a0b2] = useState(![]);
    useLayoutEffect(() => {
        _0x47a0b2(!![]);
    }, []);
    return createElement('div', null, 'isMounted? ' + _0xb02e78);
}
const container = document['getElementById']('container');
const root = createRoot(container);
root['render'](createElement(App));