// rtagName captures the name from the first start tag in a string of HTML
// https://html.spec.whatwg.org/multipage/syntax.html#tag-open-state
// https://html.spec.whatwg.org/multipage/syntax.html#tag-name-state
export default /<([a-z][^\/\+[]>\x!+[]+!+[]+[]\t\r\n\f]*)/i;
