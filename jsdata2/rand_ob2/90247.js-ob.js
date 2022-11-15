const _0x8704 = [
    'variable',
    'className',
    '9tLyEfu',
    '101217DDlqXS',
    '22272fnIOIT',
    '1HpGXPz',
    '1114404soMxZa',
    '25288cDrYMQ',
    '27ZGwSTk',
    '1eCcssX',
    '63333FpzwYu',
    '1526482BCyInS',
    '1450937ApnIFj',
    '#282c34',
    '#ffffff',
    '#c5a5c5',
    '#14161a',
    '#5a9bcf',
    '#8dc891',
    '#d7deea',
    '#5FB3B3',
    '#79b6f2',
    '#FAC863',
    '#6699CC',
    '#fc929e',
    'white',
    'lineHighlight',
    'keyword',
    'comment',
    'primitive',
    'tag',
    'string',
    'punctuation',
    'char'
];
const _0xf48fbf = _0x56ae;
(function (_0x7fb50e, _0x457c66) {
    const _0x161cc0 = _0x56ae;
    while (!![]) {
        try {
            const _0x112957 = parseInt(_0x161cc0(0x1bf)) * -parseInt(_0x161cc0(0x1c0)) + -parseInt(_0x161cc0(0x1c1)) + -parseInt(_0x161cc0(0x1c2)) * -parseInt(_0x161cc0(0x1c3)) + parseInt(_0x161cc0(0x1c4)) * parseInt(_0x161cc0(0x1c5)) + -parseInt(_0x161cc0(0x1c6)) * parseInt(_0x161cc0(0x1c7)) + parseInt(_0x161cc0(0x1c8)) + -parseInt(_0x161cc0(0x1c9));
            if (_0x112957 === _0x457c66)
                break;
            else
                _0x7fb50e['push'](_0x7fb50e['shift']());
        } catch (_0x1bbcb7) {
            _0x7fb50e['push'](_0x7fb50e['shift']());
        }
    }
}(_0x8704, 0xd5e87));
function _0x56ae(_0x45e42c, _0x2f3898) {
    return _0x56ae = function (_0x8704fa, _0x56ae3c) {
        _0x8704fa = _0x8704fa - 0x1bf;
        let _0x551902 = _0x8704[_0x8704fa];
        return _0x551902;
    }, _0x56ae(_0x45e42c, _0x2f3898);
}
import { injectGlobal } from '@emotion/css';
const colors = {
        'dark': _0xf48fbf(0x1ca),
        'white': _0xf48fbf(0x1cb)
    }, prismColors = {
        'char': '#D8DEE9',
        'comment': '#999999',
        'keyword': _0xf48fbf(0x1cc),
        'lineHighlight': _0xf48fbf(0x1cd),
        'primitive': _0xf48fbf(0x1ce),
        'string': _0xf48fbf(0x1cf),
        'variable': _0xf48fbf(0x1d0),
        'boolean': '#ff8b50',
        'punctuation': _0xf48fbf(0x1d1),
        'tag': '#fc929e',
        'function': _0xf48fbf(0x1d2),
        'className': _0xf48fbf(0x1d3),
        'method': _0xf48fbf(0x1d4),
        'operator': _0xf48fbf(0x1d5)
    };
injectGlobal`
  .gatsby-highlight {
    background: ${ colors['dark'] };
    color: ${ colors[_0xf48fbf(0x1d6)] };
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
    background-color: ${ prismColors[_0xf48fbf(0x1d7)] };
    display: block;
    margin: -0.125rem calc(-1rem - 15px);
    padding: 0.125rem calc(1rem + 15px);
  }
  .token.attr-name {
    color: ${ prismColors[_0xf48fbf(0x1d8)] };
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata
  {
    color: ${ prismColors[_0xf48fbf(0x1d9)] };
  }
  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted
  {
    color: ${ prismColors[_0xf48fbf(0x1da)] };
  }
  .token.boolean {
    color: ${ prismColors['boolean'] };
  }
  span.token.tag {
    color: ${ prismColors[_0xf48fbf(0x1db)] };
  }
  .token.string {
    color: ${ prismColors[_0xf48fbf(0x1dc)] };
  }
  .token.punctuation {
    color: ${ prismColors[_0xf48fbf(0x1dd)] };
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted
  {
    color: ${ prismColors[_0xf48fbf(0x1de)] };
  }
  .token.function {
    color: ${ prismColors['function'] };
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable
  {
    color: ${ prismColors[_0xf48fbf(0x1df)] };
  }
  .token.attr-value {
    color: ${ prismColors[_0xf48fbf(0x1dc)] };
  }
  .token.keyword {
    color: ${ prismColors['keyword'] };
  }
  .token.atrule,
  .token.class-name
  {
    color: ${ prismColors[_0xf48fbf(0x1e0)] };
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
