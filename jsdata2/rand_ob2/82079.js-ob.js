const _0xd276 = [
    'transacting',
    'subscribers',
    'select',
    'then',
    'length',
    'info',
    'Adding\x20',
    'map',
    'reduce',
    'assign',
    'members',
    'insert',
    'Skipping\x20populating\x20members\x20table:\x20found\x200\x20subscribers',
    'resolve',
    'down',
    'reject',
    '145AjBBZF',
    '3581koFMJq',
    '663851lTArjF',
    '7712lXUUat',
    '73QKGPaj',
    '316607zAwMuv',
    '1rirBdh',
    '407248kBqYtY',
    '51137luKITh',
    '7NjyThy',
    '506853UZLulC',
    'bluebird',
    'bson-objectid',
    '@tryghost/logging',
    'exports',
    'config',
    'merge',
    'name',
    'email',
    'created_at',
    'created_by',
    'updated_at',
    'updated_by'
];
const _0x1f2209 = _0x50e7;
(function (_0x586e17, _0x59c47c) {
    const _0x3d3162 = _0x50e7;
    while (!![]) {
        try {
            const _0x4e535d = parseInt(_0x3d3162(0x10d)) * parseInt(_0x3d3162(0x10e)) + -parseInt(_0x3d3162(0x10f)) + parseInt(_0x3d3162(0x110)) * parseInt(_0x3d3162(0x111)) + -parseInt(_0x3d3162(0x112)) * parseInt(_0x3d3162(0x113)) + parseInt(_0x3d3162(0x114)) + parseInt(_0x3d3162(0x115)) * parseInt(_0x3d3162(0x116)) + -parseInt(_0x3d3162(0x117));
            if (_0x4e535d === _0x59c47c)
                break;
            else
                _0x586e17['push'](_0x586e17['shift']());
        } catch (_0x2e1161) {
            _0x586e17['push'](_0x586e17['shift']());
        }
    }
}(_0xd276, 0x57eb5));
const Promise = require(_0x1f2209(0x118)), ObjectId = require(_0x1f2209(0x119)), _ = require('lodash'), logging = require(_0x1f2209(0x11a));
function _0x50e7(_0x4d2178, _0x157666) {
    return _0x50e7 = function (_0xd276f0, _0x50e7ff) {
        _0xd276f0 = _0xd276f0 - 0x10d;
        let _0x1d6370 = _0xd276[_0xd276f0];
        return _0x1d6370;
    }, _0x50e7(_0x4d2178, _0x157666);
}
module[_0x1f2209(0x11b)][_0x1f2209(0x11c)] = {
    'transaction': !![],
    'irreversible': !![]
}, module[_0x1f2209(0x11b)]['up'] = _0xb9199b => {
    const _0x5d8ec7 = _0x1f2209, _0x372607 = _[_0x5d8ec7(0x11d)]({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0xb9199b), _0x1f9394 = [
            _0x5d8ec7(0x11e),
            _0x5d8ec7(0x11f),
            _0x5d8ec7(0x120),
            _0x5d8ec7(0x121),
            _0x5d8ec7(0x122),
            _0x5d8ec7(0x123)
        ];
    return _0x372607[_0x5d8ec7(0x124)](_0x5d8ec7(0x125))[_0x5d8ec7(0x126)]()[_0x5d8ec7(0x127)](_0x259d26 => {
        const _0x3b4ed9 = _0x5d8ec7;
        if (_0x259d26 && _0x259d26[_0x3b4ed9(0x128)] > 0x0) {
            logging[_0x3b4ed9(0x129)](_0x3b4ed9(0x12a) + _0x259d26[_0x3b4ed9(0x128)] + '\x20entries\x20to\x20members');
            let _0x7c054b = _[_0x3b4ed9(0x12b)](_0x259d26, _0x58f204 => {
                const _0x1adc9e = _0x3b4ed9;
                let _0x16a13c = _0x1f9394[_0x1adc9e(0x12c)](function (_0x2e51c8, _0x36ca11) {
                    const _0x2fe9a3 = _0x1adc9e;
                    return Object[_0x2fe9a3(0x12d)](_0x2e51c8, { [_0x36ca11]: _0x58f204[_0x36ca11] });
                }, {});
                return _0x16a13c['id'] = ObjectId()['toHexString'](), _0x16a13c;
            });
            return Promise['map'](_0x7c054b, _0x200422 => {
                const _0x417d00 = _0x3b4ed9;
                return _0x372607['transacting'](_0x417d00(0x12e))[_0x417d00(0x12f)](_0x200422);
            });
        } else
            return logging['info'](_0x3b4ed9(0x130)), Promise[_0x3b4ed9(0x131)]();
    });
}, module['exports'][_0x1f2209(0x132)] = () => {
    const _0x187ad5 = _0x1f2209;
    return Promise[_0x187ad5(0x133)]();
};
