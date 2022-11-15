const _0x1c72 = [
    'dark',
    'white',
    'keyword',
    'comment',
    'primitive',
    'boolean',
    'tag',
    'punctuation',
    'char',
    'function',
    'variable',
    'string',
    'className',
    '277091DUVYUp',
    '115123mybyWV',
    '326974QxAzfy',
    '132696PZIDBC',
    '76MwCdRJ',
    '40exRcsp',
    '107744zyUcbs',
    '77239CDjzgm',
    '4blegqq',
    '#282c34',
    '#c5a5c5',
    '#14161a',
    '#5a9bcf',
    '#8dc891',
    '#d7deea',
    '#fc929e',
    '#79b6f2',
    '#FAC863',
    '#6699CC'
];
const _0x2c3df1 = _0x72e4;
(function (_0x37c18a, _0x4f8bad) {
    const _0x143612 = _0x72e4;
    while (!![]) {
        try {
            const _0x2b4f07 = -parseInt(_0x143612(0xd7)) + -parseInt(_0x143612(0xd8)) + parseInt(_0x143612(0xd9)) + -parseInt(_0x143612(0xda)) + parseInt(_0x143612(0xdb)) * parseInt(_0x143612(0xdc)) + parseInt(_0x143612(0xdd)) + parseInt(_0x143612(0xde)) * parseInt(_0x143612(0xdf));
            if (_0x2b4f07 === _0x4f8bad)
                break;
            else
                _0x37c18a['push'](_0x37c18a['shift']());
        } catch (_0xbffb1) {
            _0x37c18a['push'](_0x37c18a['shift']());
        }
    }
}(_0x1c72, 0x3626c));
import { injectGlobal } from '@emotion/css';
const colors = {
        'dark': _0x2c3df1(0xe0),
        'white': '#ffffff'
    }, prismColors = {
        'char': '#D8DEE9',
        'comment': '#999999',
        'keyword': _0x2c3df1(0xe1),
        'lineHighlight': _0x2c3df1(0xe2),
        'primitive': _0x2c3df1(0xe3),
        'string': _0x2c3df1(0xe4),
        'variable': _0x2c3df1(0xe5),
        'boolean': '#ff8b50',
        'punctuation': '#5FB3B3',
        'tag': _0x2c3df1(0xe6),
        'function': _0x2c3df1(0xe7),
        'className': _0x2c3df1(0xe8),
        'method': _0x2c3df1(0xe9),
        'operator': '#fc929e'
    };
function _0x72e4(_0x332139, _0x8530f3) {
    return _0x72e4 = function (_0x1c724d, _0x72e4d) {
        _0x1c724d = _0x1c724d - 0xd7;
        let _0x2a8423 = _0x1c72[_0x1c724d];
        return _0x2a8423;
    }, _0x72e4(_0x332139, _0x8530f3);
}
injectGlobal`
  .gatsby-highlight {
    background: ${ colors[_0x2c3df1(0xea)] };
    color: ${ colors[_0x2c3df1(0xeb)] };
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
    background-color: ${ prismColors['lineHighlight'] };
    display: block;
    margin: -0.125rem calc(-1rem - 15px);
    padding: 0.125rem calc(1rem + 15px);
  }
  .token.attr-name {
    color: ${ prismColors[_0x2c3df1(0xec)] };
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata
  {
    color: ${ prismColors[_0x2c3df1(0xed)] };
  }
  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted
  {
    color: ${ prismColors[_0x2c3df1(0xee)] };
  }
  .token.boolean {
    color: ${ prismColors[_0x2c3df1(0xef)] };
  }
  span.token.tag {
    color: ${ prismColors[_0x2c3df1(0xf0)] };
  }
  .token.string {
    color: ${ prismColors['string'] };
  }
  .token.punctuation {
    color: ${ prismColors[_0x2c3df1(0xf1)] };
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted
  {
    color: ${ prismColors[_0x2c3df1(0xf2)] };
  }
  .token.function {
    color: ${ prismColors[_0x2c3df1(0xf3)] };
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable
  {
    color: ${ prismColors[_0x2c3df1(0xf4)] };
  }
  .token.attr-value {
    color: ${ prismColors[_0x2c3df1(0xf5)] };
  }
  .token.keyword {
    color: ${ prismColors[_0x2c3df1(0xec)] };
  }
  .token.atrule,
  .token.class-name
  {
    color: ${ prismColors[_0x2c3df1(0xf6)] };
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
