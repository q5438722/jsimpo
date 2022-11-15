import { findVmByVueId } from '../../../mp-weixin/runtime/wrapper/util';
export const mocks = [
    '__route__',
    '__webviewId__',
    '__nodeid__',
    '__nodeId__'
];
export function isPage() {
    const _0x509b1c = {
        'GLojk': function (_0x17d163, _0x215643) {
            return _0x17d163 === _0x215643;
        }
    };
    return _0x509b1c['GLojk'](this['__nodeid__'], 0x0) || _0x509b1c['GLojk'](this['__nodeId__'], 0x0);
}
export function initRefs(_0x393142) {
    const _0xcbb6b = {
            'aidwu': '.vue-ref',
            'hryvV': '.vue-ref-in-for',
            'Uqaji': function (_0x3cc4d1, _0x4b3dbe) {
                return _0x3cc4d1(_0x4b3dbe);
            },
            'eUsAC': function (_0xb460a7, _0x543c6d) {
                return _0xb460a7 > _0x543c6d;
            },
            'UVAud': '$refs'
        }, _0x551921 = _0x393142['$scope'], _0x541a95 = _0xcbb6b['Uqaji'](parseInt, tt['getSystemInfoSync']()['SDKVersion']['split']('.')[0x1]);
    _0xcbb6b['eUsAC'](_0x541a95, 0x10) ? Object['defineProperty'](_0x393142, _0xcbb6b['UVAud'], {
        'get'() {
            const _0x3eb4c1 = {}, _0x336f3a = _0x551921['selectAllComponents'](_0xcbb6b['aidwu']);
            _0x336f3a['forEach'](_0x3fae6f => {
                const _0x181a5b = _0x3fae6f['dataset']['ref'];
                _0x3eb4c1[_0x181a5b] = _0x3fae6f['$vm'] || _0x3fae6f;
            });
            const _0x597822 = _0x551921['selectAllComponents'](_0xcbb6b['hryvV']);
            return _0x597822['forEach'](_0x4869ff => {
                const _0x423bb7 = _0x4869ff['dataset']['ref'];
                !_0x3eb4c1[_0x423bb7] && (_0x3eb4c1[_0x423bb7] = []), _0x3eb4c1[_0x423bb7]['push'](_0x4869ff['$vm'] || _0x4869ff);
            }), _0x3eb4c1;
        }
    }) : (_0x551921['selectAllComponents'](_0xcbb6b['aidwu'], _0x4b91e5 => {
        _0x4b91e5['forEach'](_0x18b67e => {
            const _0x3846e6 = _0x18b67e['dataset']['ref'];
            _0x393142['$refs'][_0x3846e6] = _0x18b67e['$vm'] || _0x18b67e;
        });
    }), _0x551921['selectAllComponents'](_0xcbb6b['hryvV'], _0x3c876e => {
        _0x3c876e['forEach'](_0x5505fe => {
            const _0x43b0de = _0x5505fe['dataset']['ref'];
            !_0x393142['$refs'][_0x43b0de] && (_0x393142['$refs'][_0x43b0de] = []), _0x393142['$refs'][_0x43b0de]['push'](_0x5505fe['$vm'] || _0x5505fe);
        });
    }));
}
export const instances = Object['create'](null);
export function initRelation({
    vuePid: _0x129cca,
    mpInstance: _0x1cbe31
}) {
    const _0x33ed85 = {
            'XPEqW': function (_0x36f5f0, _0x127b27) {
                return _0x36f5f0 + _0x127b27;
            },
            'QXVNX': function (_0x143a6a, _0x69a2f1) {
                return _0x143a6a + _0x69a2f1;
            },
            'kUgSl': '__l'
        }, _0xd76e10 = _0x33ed85['XPEqW'](_0x1cbe31['__nodeId__'] || _0x1cbe31['__nodeid__'], ''), _0x97c187 = _0x33ed85['XPEqW'](_0x1cbe31['__webviewId__'], '');
    instances[_0x33ed85['XPEqW'](_0x33ed85['QXVNX'](_0x97c187, '_'), _0xd76e10)] = _0x1cbe31['$vm'], this['triggerEvent'](_0x33ed85['kUgSl'], {
        'vuePid': _0x129cca,
        'nodeId': _0xd76e10,
        'webviewId': _0x97c187
    });
}
export function handleLink({
    detail: {
        vuePid: _0x50b764,
        nodeId: _0x59c3dc,
        webviewId: _0x3dfaf4
    }
}) {
    const _0x3c7abe = {
            'BEfzM': function (_0x1c190f, _0x1aafb4) {
                return _0x1c190f + _0x1aafb4;
            },
            'TVQfQ': function (_0x16e775, _0x5867d7, _0x44a6b1) {
                return _0x16e775(_0x5867d7, _0x44a6b1);
            },
            'hpmoV': 'created',
            'VVkNz': 'beforeMount',
            'WrulP': 'mounted',
            'wBbzd': 'onReady'
        }, _0x3782ef = instances[_0x3c7abe['BEfzM'](_0x3c7abe['BEfzM'](_0x3dfaf4, '_'), _0x59c3dc)];
    if (!_0x3782ef)
        return;
    let _0x2525f9;
    _0x50b764 && (_0x2525f9 = _0x3c7abe['TVQfQ'](findVmByVueId, this['$vm'], _0x50b764)), !_0x2525f9 && (_0x2525f9 = this['$vm']), _0x3782ef['$parent'] = _0x2525f9, _0x3782ef['$root'] = _0x2525f9['$root'], _0x2525f9['$children']['push'](_0x3782ef), _0x3782ef['__call_hook'](_0x3c7abe['hpmoV']), _0x3782ef['__call_hook'](_0x3c7abe['VVkNz']), _0x3782ef['_isMounted'] = !![], _0x3782ef['__call_hook'](_0x3c7abe['WrulP']), _0x3782ef['__call_hook'](_0x3c7abe['wBbzd']);
}
