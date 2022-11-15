const _0x3edd = ['2bjkYob', '68631kqGJJC', '#282c34', '#D8DEE9', '#c5a5c5', '#14161a', '#5a9bcf', '#8dc891', '#d7deea', '#ff8b50', '#5FB3B3', '#fc929e', '#79b6f2', '#FAC863', '#6699CC', 'dark', 'lineHighlight', 'keyword', 'punctuation', 'char', 'function', 'variable', 'string', '2vniXgb', '1454QtJfwI', '833ESwEqn', '179XDJPZM', '226108rtyCwG', '4630GTNMMs', '2RUaBYK', '10963MoiHrA', '93985SoyCUC'];
const _0x8fa721 = _0xbfda;

(function (_0x50c3d7, _0x49eb3e) {
  const _0x563110 = _0xbfda;

  while (true) {
    try {
      const _0x443908 = parseInt(_0x563110(0xcf)) * parseInt(_0x563110(0xd0)) + parseInt(_0x563110(0xd1)) * parseInt(_0x563110(0xd2)) + parseInt(_0x563110(0xd3)) + -parseInt(_0x563110(0xd4)) * parseInt(_0x563110(0xd5)) + -parseInt(_0x563110(0xd6)) + -parseInt(_0x563110(0xd7)) + -parseInt(_0x563110(0xd8)) * parseInt(_0x563110(0xd9));

      if (_0x443908 === _0x49eb3e) break;else _0x50c3d7.push(_0x50c3d7.shift());
    } catch (_0x2c8c08) {
      _0x50c3d7.push(_0x50c3d7.shift());
    }
  }
})(_0x3edd, 126653);
import { injectGlobal } from '@emotion/css';
const colors = {
  'dark': _0x8fa721(0xda),
  'white': '#ffffff'
};
const prismColors = {
  'char': _0x8fa721(0xdb),
  'comment': '#999999',
  'keyword': _0x8fa721(0xdc),
  'lineHighlight': _0x8fa721(0xdd),
  'primitive': _0x8fa721(0xde),
  'string': _0x8fa721(0xdf),
  'variable': _0x8fa721(0xe0),
  'boolean': _0x8fa721(0xe1),
  'punctuation': _0x8fa721(0xe2),
  'tag': _0x8fa721(0xe3),
  'function': _0x8fa721(0xe4),
  'className': _0x8fa721(0xe5),
  'method': _0x8fa721(0xe6),
  'operator': _0x8fa721(0xe3)
};

function _0xbfda(_0x3c8b17, _0x1affdd) {
  return _0xbfda = function (_0x2d565b, _0x303c5b) {
    _0x2d565b = _0x2d565b - 207;
    const _0x4bc11f = _0x3edd[_0x2d565b];

    return _0x4bc11f;
  }, _0xbfda(_0x3c8b17, _0x1affdd);
}
injectGlobal`
  .gatsby-highlight {
    background: ${colors[_0x8fa721(0xe7)]};
    color: ${colors.white};
    border-radius: 1em;
    overflow: auto;
    tab-size: 1.5em;
    padding: 1em;
    margin: 1em 0;
  }
  .gatsby-highlight code[class*="language-"],
  .gatsby-highlight pre[class*="language-"]
  {
    height: auto !important;
    margin: 1rem;
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    word-break: break-word;
  }
  code {
  font-size: 1em;
  font-family: 'Source Code Pro',
  ;
  }
  .gatsby-highlight + .gatsby-highlight {
    margin-top: 1.250em;
  }
  .gatsby-highlight-code-line {
    background-color: ${prismColors[_0x8fa721(0xe8)]};
    display: block;
    margin: -0.125rem calc(-1rem - 15px);
    padding: 0.125rem calc(1rem + 15px);
  }
  .token.attr-name {
    color: ${prismColors[_0x8fa721(0xe9)]};
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata
  {
    color: ${prismColors.comment};
  }
  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted
  {
    color: ${prismColors.primitive};
  }
  .token.boolean {
    color: ${prismColors.boolean};
  }
  span.token.tag {
    color: ${prismColors.tag};
  }
  .token.string {
    color: ${prismColors.string};
  }
  .token.punctuation {
    color: ${prismColors[_0x8fa721(0xea)]};
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted
  {
    color: ${prismColors[_0x8fa721(0xeb)]};
  }
  .token.function {
    color: ${prismColors[_0x8fa721(0xec)]};
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable
  {
    color: ${prismColors[_0x8fa721(0xed)]};
  }
  .token.attr-value {
    color: ${prismColors[_0x8fa721(0xee)]};
  }
  .token.keyword {
    color: ${prismColors[_0x8fa721(0xe9)]};
  }
  .token.atrule,
  .token.class-name
  {
    color: ${prismColors.className};
  }
  .token.important {
    font-weight: 400;
  }
  .token.bold {
    font-weight: 700;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }
`;
