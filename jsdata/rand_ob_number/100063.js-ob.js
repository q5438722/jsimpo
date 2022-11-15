import _0x32faec from 'tape';
import { shallow } from '@vue/test-utils';
import _0x5baead from '../pages/index.vue';
_0x32faec('renders\x20Index.vue\x20correctly', _0x1af843 => {
    _0x1af843['plan'](-0x1 * 0x11c + -0x15a4 + 0xbc * 0x1f);
    const _0x53b300 = shallow(_0x5baead, { 'data': { 'name': 'nuxt' } }), _0x4541d7 = _0x53b300['find']('button');
    _0x1af843['equal'](_0x53b300['find']('h1')['text'](), 'Hello\x20nuxt!', 'renders\x20\x22Hello\x20nuxt!\x22\x20text'), _0x1af843['equal'](_0x53b300['find']('h1')['hasClass']('red'), !![], 'h1\x20has\x20a\x20red\x20class\x20[default]'), _0x4541d7['trigger']('click'), _0x1af843['equal'](_0x53b300['find']('h1')['hasClass']('blue'), !![], 'h1\x20class\x20changes\x20to\x20blue\x20[after\x201st\x20click]'), _0x4541d7['trigger']('click'), _0x1af843['equal'](_0x53b300['find']('h1')['hasClass']('green'), !![], 'h1\x20class\x20changes\x20to\x20green\x20[after\x202nd\x20click]');
});
