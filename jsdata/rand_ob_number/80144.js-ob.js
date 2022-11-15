import { findVmByVueId } from '../../../mp-weixin/runtime/wrapper/util';
export const mocks = [
    '__route__',
    '__webviewId__',
    '__nodeid__',
    '__nodeId__'
];
export function isPage() {
    return this['__nodeid__'] === 0x15c * 0x4 + -0x1 * 0x4de + -0x2 * 0x49 || this['__nodeId__'] === -0x1 * 0x1887 + 0x719 + 0x116e;
}
export function initRefs(_0x5596a5) {
    const _0x3a37b3 = _0x5596a5['$scope'], _0x7eb04a = parseInt(tt['getSystemInfoSync']()['SDKVersion']['split']('.')[0x1e62 + 0x3 * -0x29f + -0x1684]);
    _0x7eb04a > 0xbf0 + 0xbcb + -0x17ab ? Object['defineProperty'](_0x5596a5, '$refs', {
        'get'() {
            const _0x300241 = {}, _0x1f0f12 = _0x3a37b3['selectAllComponents']('.vue-ref');
            _0x1f0f12['forEach'](_0x32359e => {
                const _0x34587e = _0x32359e['dataset']['ref'];
                _0x300241[_0x34587e] = _0x32359e['$vm'] || _0x32359e;
            });
            const _0x3f6f69 = _0x3a37b3['selectAllComponents']('.vue-ref-in-for');
            return _0x3f6f69['forEach'](_0x13658f => {
                const _0x4b1e50 = _0x13658f['dataset']['ref'];
                !_0x300241[_0x4b1e50] && (_0x300241[_0x4b1e50] = []), _0x300241[_0x4b1e50]['push'](_0x13658f['$vm'] || _0x13658f);
            }), _0x300241;
        }
    }) : (_0x3a37b3['selectAllComponents']('.vue-ref', _0x43fd0a => {
        _0x43fd0a['forEach'](_0xdcd22b => {
            const _0x2e3c03 = _0xdcd22b['dataset']['ref'];
            _0x5596a5['$refs'][_0x2e3c03] = _0xdcd22b['$vm'] || _0xdcd22b;
        });
    }), _0x3a37b3['selectAllComponents']('.vue-ref-in-for', _0x4807ac => {
        _0x4807ac['forEach'](_0x458b89 => {
            const _0x46fdda = _0x458b89['dataset']['ref'];
            !_0x5596a5['$refs'][_0x46fdda] && (_0x5596a5['$refs'][_0x46fdda] = []), _0x5596a5['$refs'][_0x46fdda]['push'](_0x458b89['$vm'] || _0x458b89);
        });
    }));
}
export const instances = Object['create'](null);
export function initRelation({
    vuePid: _0x444181,
    mpInstance: _0x252de4
}) {
    const _0x421038 = (_0x252de4['__nodeId__'] || _0x252de4['__nodeid__']) + '', _0x4926af = _0x252de4['__webviewId__'] + '';
    instances[_0x4926af + '_' + _0x421038] = _0x252de4['$vm'], this['triggerEvent']('__l', {
        'vuePid': _0x444181,
        'nodeId': _0x421038,
        'webviewId': _0x4926af
    });
}
export function handleLink({
    detail: {
        vuePid: _0x2be3e7,
        nodeId: _0x5cb50b,
        webviewId: _0x6c9ed
    }
}) {
    const _0x5b3082 = instances[_0x6c9ed + '_' + _0x5cb50b];
    if (!_0x5b3082)
        return;
    let _0x3e4925;
    _0x2be3e7 && (_0x3e4925 = findVmByVueId(this['$vm'], _0x2be3e7)), !_0x3e4925 && (_0x3e4925 = this['$vm']), _0x5b3082['$parent'] = _0x3e4925, _0x5b3082['$root'] = _0x3e4925['$root'], _0x3e4925['$children']['push'](_0x5b3082), _0x5b3082['__call_hook']('created'), _0x5b3082['__call_hook']('beforeMount'), _0x5b3082['_isMounted'] = !![], _0x5b3082['__call_hook']('mounted'), _0x5b3082['__call_hook']('onReady');
}
