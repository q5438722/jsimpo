const _0x5a0e = [
    '#ff8b50',
    '#5FB3B3',
    '#fc929e',
    '#79b6f2',
    '#FAC863',
    '#6699CC',
    'dark',
    'white',
    'keyword',
    'comment',
    'primitive',
    'boolean',
    'tag',
    'string',
    'char',
    'className',
    '57642Jovdzn',
    '9TyvITx',
    '9HUXkSR',
    '43987IIAMfc',
    '19645mBzgrD',
    '769626bCELdV',
    '280754AGsVZk',
    '137598pvIlCC',
    '1523318GAuEbI',
    '#282c34',
    '#ffffff',
    '#D8DEE9',
    '#c5a5c5',
    '#14161a',
    '#8dc891'
];
const _0x249aab = _0x10eb;
(function (_0xb1fcc9, _0x37c637) {
    const _0x119554 = _0x10eb;
    while (!![]) {
        try {
            const _0x505494 = -parseInt(_0x119554(0x1f1)) * -parseInt(_0x119554(0x1f2)) + parseInt(_0x119554(0x1f3)) * -parseInt(_0x119554(0x1f4)) + -parseInt(_0x119554(0x1f5)) + -parseInt(_0x119554(0x1f6)) + -parseInt(_0x119554(0x1f7)) + -parseInt(_0x119554(0x1f8)) + parseInt(_0x119554(0x1f9));
            if (_0x505494 === _0x37c637)
                break;
            else
                _0xb1fcc9['push'](_0xb1fcc9['shift']());
        } catch (_0x235bf7) {
            _0xb1fcc9['push'](_0xb1fcc9['shift']());
        }
    }
}(_0x5a0e, -0x3c1b6 + -0xc6875 + 0x16db69));
function _0x10eb(_0x56cf02, _0x24c476) {
    return _0x10eb = function (_0x1fa977, _0x2018b6) {
        _0x1fa977 = _0x1fa977 - (-0xb8 * 0x1c + 0x752 + 0xebf);
        let _0x23e261 = _0x5a0e[_0x1fa977];
        return _0x23e261;
    }, _0x10eb(_0x56cf02, _0x24c476);
}
import { injectGlobal } from '@emotion/css';
const colors = {
        'dark': _0x249aab(0x1fa),
        'white': _0x249aab(0x1fb)
    }, prismColors = {
        'char': _0x249aab(0x1fc),
        'comment': '#999999',
        'keyword': _0x249aab(0x1fd),
        'lineHighlight': _0x249aab(0x1fe),
        'primitive': '#5a9bcf',
        'string': _0x249aab(0x1ff),
        'variable': '#d7deea',
        'boolean': _0x249aab(0x200),
        'punctuation': _0x249aab(0x201),
        'tag': _0x249aab(0x202),
        'function': _0x249aab(0x203),
        'className': _0x249aab(0x204),
        'method': _0x249aab(0x205),
        'operator': _0x249aab(0x202)
    };
injectGlobal`
  .gatsby-highlight {
    background: ${ colors[_0x249aab(0x206)] };
    color: ${ colors[_0x249aab(0x207)] };
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
    color: ${ prismColors[_0x249aab(0x208)] };
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata
  {
    color: ${ prismColors[_0x249aab(0x209)] };
  }
  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted
  {
    color: ${ prismColors[_0x249aab(0x20a)] };
  }
  .token.boolean {
    color: ${ prismColors[_0x249aab(0x20b)] };
  }
  span.token.tag {
    color: ${ prismColors[_0x249aab(0x20c)] };
  }
  .token.string {
    color: ${ prismColors[_0x249aab(0x20d)] };
  }
  .token.punctuation {
    color: ${ prismColors['punctuation'] };
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted
  {
    color: ${ prismColors[_0x249aab(0x20e)] };
  }
  .token.function {
    color: ${ prismColors['function'] };
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable
  {
    color: ${ prismColors['variable'] };
  }
  .token.attr-value {
    color: ${ prismColors[_0x249aab(0x20d)] };
  }
  .token.keyword {
    color: ${ prismColors['keyword'] };
  }
  .token.atrule,
  .token.class-name
  {
    color: ${ prismColors[_0x249aab(0x20f)] };
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
