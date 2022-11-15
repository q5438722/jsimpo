const _0x13ea = [
    'scrollOffset',
    'fields',
    '321040jNUfIB',
    '1205775LImQhe',
    '4yAxnFD',
    '237784hPLORH',
    '9897qrlAOu',
    '13jJtQru',
    '25739yQQGNJ',
    '2bFdREH',
    '817143DrGjWS',
    '3537934vSQfYV',
    'forEach',
    'parentNode',
    'querySelectorAll',
    'length',
    'querySelector',
    'push',
    'map',
    'html',
    'dataset',
    'assign',
    'left',
    'right',
    'bottom',
    'width',
    'height',
    'clientWidth',
    'clientHeight',
    'scrollLeft',
    'scrollTop',
    'getAttribute',
    '_defaultWebviewId',
    '_webviewId',
    '_queue',
    '_queueCb',
    '_component',
    'select',
    'string',
    '>>>',
    'selectViewport',
    'exec',
    'function',
    'call',
    '_selector',
    '_selectorQuery',
    '_single',
    'boundingClientRect',
    '_push'
];
const _0x4da90a = _0x5888;
(function (_0x477018, _0x40e057) {
    const _0x3179f3 = _0x5888;
    while (!![]) {
        try {
            const _0xb6ad71 = parseInt(_0x3179f3(0x149)) + -parseInt(_0x3179f3(0x14a)) + parseInt(_0x3179f3(0x14b)) * -parseInt(_0x3179f3(0x14c)) + parseInt(_0x3179f3(0x14d)) * -parseInt(_0x3179f3(0x14e)) + parseInt(_0x3179f3(0x14f)) * -parseInt(_0x3179f3(0x150)) + -parseInt(_0x3179f3(0x151)) + parseInt(_0x3179f3(0x152));
            if (_0xb6ad71 === _0x40e057)
                break;
            else
                _0x477018['push'](_0x477018['shift']());
        } catch (_0x131e24) {
            _0x477018['push'](_0x477018['shift']());
        }
    }
}(_0x13ea, 0xac10d));
import { findDOM } from '../utils';
function queryBat(_0xb946f6, _0x34c323) {
    const _0x10dc11 = _0x5888, _0x5109d9 = [];
    _0xb946f6[_0x10dc11(0x153)](_0x1cd0af => {
        const _0x5035c7 = _0x10dc11, {
                selector: _0x142328,
                single: _0x55a382,
                fields: _0x2c81b5,
                component: _0x1f762f
            } = _0x1cd0af, _0xba2eb1 = _0x1f762f !== null ? findDOM(_0x1f762f) || document : document;
        let _0x292605 = ![];
        if (_0xba2eb1 !== document) {
            const _0x418280 = _0xba2eb1[_0x5035c7(0x154)][_0x5035c7(0x155)](_0x142328);
            for (let _0x45ca93 = 0x0, _0x397871 = _0x418280[_0x5035c7(0x156)]; _0x45ca93 < _0x397871; ++_0x45ca93) {
                if (_0xba2eb1 === _0x418280[_0x45ca93]) {
                    _0x292605 = !![];
                    break;
                }
            }
        }
        if (_0x55a382) {
            const _0x5cf45a = _0x292605 === !![] ? _0xba2eb1 : _0xba2eb1[_0x5035c7(0x157)](_0x142328);
            _0x5109d9[_0x5035c7(0x158)](filter(_0x2c81b5, _0x5cf45a, _0x142328));
        } else {
            const _0xc9fa = _0xba2eb1['querySelectorAll'](_0x142328), _0x8df8f5 = [];
            _0x292605 === !![] && _0x8df8f5['push'](_0xba2eb1);
            for (let _0x18b531 = 0x0, _0x255a7c = _0xc9fa[_0x5035c7(0x156)]; _0x18b531 < _0x255a7c; ++_0x18b531) {
                _0x8df8f5[_0x5035c7(0x158)](_0xc9fa[_0x18b531]);
            }
            _0x5109d9['push'](_0x8df8f5[_0x5035c7(0x159)](_0x59e022 => filter(_0x2c81b5, _0x59e022)));
        }
    }), _0x34c323(_0x5109d9);
}
function filter(_0x52d25e, _0x4660dd, _0x104328) {
    const _0x2daba8 = _0x5888;
    if (!_0x4660dd)
        return null;
    const {
            id: _0x181ccf,
            dataset: _0x4e7b2b,
            rect: _0x299dfa,
            size: _0x25d087,
            scrollOffset: _0x47eacf,
            properties: properties = [],
            computedStyle: computedStyle = []
        } = _0x52d25e, {
            left: _0x2b1c54,
            right: _0xe657ff,
            top: _0xd96636,
            bottom: _0x208c64,
            width: _0x40e0ef,
            height: _0x16c78a
        } = _0x4660dd['getBoundingClientRect'](), _0x5f0e0d = _0x104328 === _0x2daba8(0x15a), _0x3b4739 = {};
    if (_0x181ccf)
        _0x3b4739['id'] = _0x4660dd['id'];
    if (_0x4e7b2b)
        _0x3b4739[_0x2daba8(0x15b)] = Object[_0x2daba8(0x15c)]({}, _0x4660dd['dataset']);
    _0x299dfa && (!_0x5f0e0d ? (_0x3b4739[_0x2daba8(0x15d)] = _0x2b1c54, _0x3b4739[_0x2daba8(0x15e)] = _0xe657ff, _0x3b4739['top'] = _0xd96636, _0x3b4739['bottom'] = _0x208c64) : (_0x3b4739[_0x2daba8(0x15d)] = 0x0, _0x3b4739[_0x2daba8(0x15e)] = 0x0, _0x3b4739['top'] = 0x0, _0x3b4739[_0x2daba8(0x15f)] = 0x0));
    _0x25d087 && (!_0x5f0e0d ? (_0x3b4739[_0x2daba8(0x160)] = _0x40e0ef, _0x3b4739[_0x2daba8(0x161)] = _0x16c78a) : (_0x3b4739[_0x2daba8(0x160)] = _0x4660dd[_0x2daba8(0x162)], _0x3b4739['height'] = _0x4660dd[_0x2daba8(0x163)]));
    _0x47eacf && (_0x3b4739['scrollLeft'] = _0x4660dd[_0x2daba8(0x164)], _0x3b4739[_0x2daba8(0x165)] = _0x4660dd[_0x2daba8(0x165)]);
    properties[_0x2daba8(0x156)] && properties[_0x2daba8(0x153)](_0x437878 => {
        const _0x25bd2b = _0x2daba8, _0x452cfb = _0x4660dd[_0x25bd2b(0x166)](_0x437878);
        if (_0x452cfb)
            _0x3b4739[_0x437878] = _0x452cfb;
    });
    if (computedStyle['length']) {
        const _0xd24245 = window['getComputedStyle'](_0x4660dd);
        computedStyle[_0x2daba8(0x153)](_0x271cba => {
            const _0x1f42b0 = _0xd24245['getPropertyValue'](_0x271cba) || _0xd24245[_0x271cba];
            if (_0x1f42b0)
                _0x3b4739[_0x271cba] = _0x1f42b0;
        });
    }
    return _0x3b4739;
}
function _0x5888(_0x5a69ae, _0x13228f) {
    return _0x5888 = function (_0x13ea29, _0x588853) {
        _0x13ea29 = _0x13ea29 - 0x149;
        let _0x17edbc = _0x13ea[_0x13ea29];
        return _0x17edbc;
    }, _0x5888(_0x5a69ae, _0x13228f);
}
class Query {
    constructor() {
        const _0x5d635e = _0x5888;
        this[_0x5d635e(0x167)] = null, this[_0x5d635e(0x168)] = null, this[_0x5d635e(0x169)] = [], this[_0x5d635e(0x16a)] = [], this[_0x5d635e(0x16b)] = null;
    }
    ['in'](_0x2629ac) {
        const _0xee5904 = _0x5888;
        return this[_0xee5904(0x16b)] = _0x2629ac, this;
    }
    [_0x4da90a(0x16c)](_0x2f2737) {
        const _0x7465c = _0x4da90a;
        if (typeof _0x2f2737 === _0x7465c(0x16d))
            _0x2f2737 = _0x2f2737['replace'](_0x7465c(0x16e), '>');
        return new NodesRef(_0x2f2737, this, !![]);
    }
    ['selectAll'](_0x3924bb) {
        const _0x290c72 = _0x4da90a;
        if (typeof _0x3924bb === 'string')
            _0x3924bb = _0x3924bb['replace'](_0x290c72(0x16e), '>');
        return new NodesRef(_0x3924bb, this, ![]);
    }
    [_0x4da90a(0x16f)]() {
        return new NodesRef('html', this, !![]);
    }
    [_0x4da90a(0x170)](_0x4afac8) {
        queryBat(this['_queue'], _0x19e2c6 => {
            const _0x9e1115 = _0x5888, _0x2584aa = this[_0x9e1115(0x16a)];
            _0x19e2c6[_0x9e1115(0x153)]((_0x144aae, _0x2ec39e) => {
                typeof _0x2584aa[_0x2ec39e] === 'function' && _0x2584aa[_0x2ec39e]['call'](this, _0x144aae);
            }), typeof _0x4afac8 === _0x9e1115(0x171) && _0x4afac8[_0x9e1115(0x172)](this, _0x19e2c6);
        });
    }
    ['_push'](_0x472f54, _0x6eb713, _0x116442, _0x5d83fa, _0x45632e = null) {
        const _0x183f36 = _0x4da90a;
        this[_0x183f36(0x169)]['push']({
            'component': _0x6eb713,
            'selector': _0x472f54,
            'single': _0x116442,
            'fields': _0x5d83fa
        }), this[_0x183f36(0x16a)]['push'](_0x45632e);
    }
}
class NodesRef {
    constructor(_0x1239da, _0x95ceac, _0x10f5cb) {
        const _0x55adc8 = _0x4da90a;
        this['_component'] = _0x95ceac[_0x55adc8(0x16b)], this[_0x55adc8(0x173)] = _0x1239da, this[_0x55adc8(0x174)] = _0x95ceac, this[_0x55adc8(0x175)] = _0x10f5cb;
    }
    [_0x4da90a(0x176)](_0x40e2dd) {
        const _0x52a8ee = _0x4da90a, {
                _selector: _0x2ecce3,
                _component: _0x2d160e,
                _single: _0x106e61,
                _selectorQuery: _0x3369c6
            } = this;
        return _0x3369c6[_0x52a8ee(0x177)](_0x2ecce3, _0x2d160e, _0x106e61, {
            'id': !0x0,
            'dataset': !0x0,
            'rect': !0x0,
            'size': !0x0
        }, _0x40e2dd), _0x3369c6;
    }
    [_0x4da90a(0x178)](_0x3afd77) {
        const _0x213c89 = _0x4da90a, {
                _selector: _0x1ad95d,
                _component: _0x3fc841,
                _single: _0x28aff2,
                _selectorQuery: _0x2d4585
            } = this;
        return _0x2d4585[_0x213c89(0x177)](_0x1ad95d, _0x3fc841, _0x28aff2, {
            'id': !0x0,
            'dataset': !0x0,
            'scrollOffset': !0x0
        }, _0x3afd77), _0x2d4585;
    }
    [_0x4da90a(0x179)](_0x11f777, _0x4ade73) {
        const _0x263d77 = _0x4da90a, {
                _selector: _0x3e78a4,
                _component: _0x10a007,
                _single: _0x51a0f1,
                _selectorQuery: _0x4d80d9
            } = this, {
                id: _0x1d0f09,
                dataset: _0x536e76,
                rect: _0x45fcd1,
                size: _0x371ae3,
                scrollOffset: _0x3812e3,
                properties: properties = [],
                computedStyle: computedStyle = []
            } = _0x11f777;
        return _0x4d80d9[_0x263d77(0x177)](_0x3e78a4, _0x10a007, _0x51a0f1, {
            'id': _0x1d0f09,
            'dataset': _0x536e76,
            'rect': _0x45fcd1,
            'size': _0x371ae3,
            'scrollOffset': _0x3812e3,
            'properties': properties,
            'computedStyle': computedStyle
        }, _0x4ade73), _0x4d80d9;
    }
}
export function createSelectorQuery() {
    return new Query();
}
