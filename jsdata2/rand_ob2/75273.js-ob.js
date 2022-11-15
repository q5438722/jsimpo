const _0x5a59 = [
    'function',
    'rid',
    'Error',
    'invalid-command-usage',
    'Executing\x20a\x20command\x20requires\x20at\x20least\x20a\x20message\x20with\x20a\x20room\x20id.',
    'previewer',
    'object',
    'isArray',
    'items',
    'length',
    'executePreview',
    'previewCallback',
    'type',
    'value',
    'error-invalid-preview',
    'Preview\x20Item\x20must\x20have\x20an\x20id,\x20type,\x20and\x20value.',
    'methods',
    'userId',
    'error-invalid-user',
    'Invalid\x20user',
    'slashCommand',
    'cmd',
    'error-invalid-command',
    'Invalid\x20Command\x20Provided',
    'executeSlashCommandPreview',
    'params',
    'msg',
    '2TfBzQi',
    '48085eOezKx',
    '2023zWxLEP',
    '17939onetLX',
    '11LUkuXY',
    '80180EqCrET',
    '37MtfLKG',
    '4254eaxuTy',
    '120946ROPYMB',
    '96021xLSGGZ',
    'add',
    'commands',
    'description',
    'permission',
    'run'
];
const _0x28a4b6 = _0x5457;
function _0x5457(_0x541e69, _0x5a4e73) {
    return _0x5457 = function (_0x5a59a2, _0x5457e1) {
        _0x5a59a2 = _0x5a59a2 - 0x16a;
        let _0x266c15 = _0x5a59[_0x5a59a2];
        return _0x266c15;
    }, _0x5457(_0x541e69, _0x5a4e73);
}
(function (_0x5e30da, _0x22c696) {
    const _0x359e44 = _0x5457;
    while (!![]) {
        try {
            const _0xfeae9a = -parseInt(_0x359e44(0x16a)) * -parseInt(_0x359e44(0x16b)) + parseInt(_0x359e44(0x16c)) + -parseInt(_0x359e44(0x16d)) * parseInt(_0x359e44(0x16e)) + parseInt(_0x359e44(0x16f)) + -parseInt(_0x359e44(0x170)) * -parseInt(_0x359e44(0x171)) + -parseInt(_0x359e44(0x172)) + parseInt(_0x359e44(0x173));
            if (_0xfeae9a === _0x22c696)
                break;
            else
                _0x5e30da['push'](_0x5e30da['shift']());
        } catch (_0x3f9154) {
            _0x5e30da['push'](_0x5e30da['shift']());
        }
    }
}(_0x5a59, 0x1bb6d));
import { Meteor } from 'meteor/meteor';
export const slashCommands = { 'commands': {} };
slashCommands[_0x28a4b6(0x174)] = function _addingSlashCommand(_0x328f6e, _0x2eb10d, _0x47f411 = {}, _0x4c62c0, _0x5528cd = ![], _0xa1e7d1, _0x90649c) {
    const _0x224266 = _0x28a4b6;
    slashCommands[_0x224266(0x175)][_0x328f6e] = {
        'command': _0x328f6e,
        'callback': _0x2eb10d,
        'params': _0x47f411['params'],
        'description': _0x47f411[_0x224266(0x176)],
        'permission': _0x47f411[_0x224266(0x177)],
        'clientOnly': _0x47f411['clientOnly'] || ![],
        'result': _0x4c62c0,
        'providesPreview': _0x5528cd,
        'previewer': _0xa1e7d1,
        'previewCallback': _0x90649c
    };
}, slashCommands[_0x28a4b6(0x178)] = function _runningSlashCommand(_0x37e90f, _0xbb1b86, _0x5836f8, _0x19bb72) {
    const _0x4d2a15 = _0x28a4b6;
    if (slashCommands[_0x4d2a15(0x175)][_0x37e90f] && typeof slashCommands[_0x4d2a15(0x175)][_0x37e90f]['callback'] === _0x4d2a15(0x179)) {
        if (!_0x5836f8 || !_0x5836f8[_0x4d2a15(0x17a)])
            throw new Meteor[(_0x4d2a15(0x17b))](_0x4d2a15(0x17c), _0x4d2a15(0x17d));
        return slashCommands[_0x4d2a15(0x175)][_0x37e90f]['callback'](_0x37e90f, _0xbb1b86, _0x5836f8, _0x19bb72);
    }
}, slashCommands['getPreviews'] = function _gettingSlashCommandPreviews(_0x98388c, _0x1e1adb, _0x312c34) {
    const _0x544426 = _0x28a4b6;
    if (slashCommands['commands'][_0x98388c] && typeof slashCommands[_0x544426(0x175)][_0x98388c][_0x544426(0x17e)] === _0x544426(0x179)) {
        if (!_0x312c34 || !_0x312c34[_0x544426(0x17a)])
            throw new Meteor['Error'](_0x544426(0x17c), _0x544426(0x17d));
        const _0x3dda17 = slashCommands[_0x544426(0x175)][_0x98388c][_0x544426(0x17e)](_0x98388c, _0x1e1adb, _0x312c34);
        if (typeof _0x3dda17 !== _0x544426(0x17f) || !Array[_0x544426(0x180)](_0x3dda17[_0x544426(0x181)]) || _0x3dda17['items'][_0x544426(0x182)] === 0x0)
            return;
        return _0x3dda17['items'][_0x544426(0x182)] >= 0xa && (_0x3dda17['items'] = _0x3dda17[_0x544426(0x181)]['slice'](0x0, 0xa)), _0x3dda17;
    }
}, slashCommands[_0x28a4b6(0x183)] = function _executeSlashCommandPreview(_0x412b3b, _0x128979, _0x2ab2a3, _0x5ee991, _0x58ee77) {
    const _0x11d9dc = _0x28a4b6;
    if (slashCommands[_0x11d9dc(0x175)][_0x412b3b] && typeof slashCommands[_0x11d9dc(0x175)][_0x412b3b][_0x11d9dc(0x184)] === _0x11d9dc(0x179)) {
        if (!_0x2ab2a3 || !_0x2ab2a3[_0x11d9dc(0x17a)])
            throw new Meteor['Error'](_0x11d9dc(0x17c), 'Executing\x20a\x20command\x20requires\x20at\x20least\x20a\x20message\x20with\x20a\x20room\x20id.');
        if (!_0x5ee991['id'] || !_0x5ee991[_0x11d9dc(0x185)] || !_0x5ee991[_0x11d9dc(0x186)])
            throw new Meteor['Error'](_0x11d9dc(0x187), _0x11d9dc(0x188));
        return slashCommands[_0x11d9dc(0x175)][_0x412b3b][_0x11d9dc(0x184)](_0x412b3b, _0x128979, _0x2ab2a3, _0x5ee991, _0x58ee77);
    }
}, Meteor[_0x28a4b6(0x189)]({
    'slashCommand'(_0x6f0807) {
        const _0x391bca = _0x28a4b6;
        if (!Meteor[_0x391bca(0x18a)]())
            throw new Meteor['Error'](_0x391bca(0x18b), _0x391bca(0x18c), { 'method': _0x391bca(0x18d) });
        if (!_0x6f0807 || !_0x6f0807[_0x391bca(0x18e)] || !slashCommands[_0x391bca(0x175)][_0x6f0807['cmd']])
            throw new Meteor[(_0x391bca(0x17b))](_0x391bca(0x18f), _0x391bca(0x190), { 'method': _0x391bca(0x191) });
        return slashCommands[_0x391bca(0x178)](_0x6f0807[_0x391bca(0x18e)], _0x6f0807[_0x391bca(0x192)], _0x6f0807[_0x391bca(0x193)], _0x6f0807['triggerId']);
    }
});
