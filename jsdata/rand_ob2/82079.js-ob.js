const _0x74c4 = [
    'map',
    'reduce',
    'members',
    'insert',
    'Skipping\x20populating\x20members\x20table:\x20found\x200\x20subscribers',
    'resolve',
    'reject',
    '432008vdvIqR',
    '335207pGVRTh',
    '238836MuTZPb',
    '103389YOxROI',
    '193641NgNfza',
    '219503ghFtmD',
    '10077wnUbud',
    '1WukCDR',
    'bluebird',
    'lodash',
    '@tryghost/logging',
    'exports',
    'config',
    'merge',
    'name',
    'created_at',
    'created_by',
    'updated_by',
    'transacting',
    'subscribers',
    'select',
    'length',
    'info',
    '\x20entries\x20to\x20members'
];
function _0x5804(_0xa8d35d, _0x219259) {
    return _0x5804 = function (_0x74c493, _0x580403) {
        _0x74c493 = _0x74c493 - 0x181;
        let _0x5e4ff2 = _0x74c4[_0x74c493];
        return _0x5e4ff2;
    }, _0x5804(_0xa8d35d, _0x219259);
}
const _0x1aa1ec = _0x5804;
(function (_0x396d99, _0x3ecd1e) {
    const _0x565dce = _0x5804;
    while (!![]) {
        try {
            const _0x1d8dc9 = parseInt(_0x565dce(0x181)) + -parseInt(_0x565dce(0x182)) + parseInt(_0x565dce(0x183)) + -parseInt(_0x565dce(0x184)) + parseInt(_0x565dce(0x185)) + -parseInt(_0x565dce(0x186)) + -parseInt(_0x565dce(0x187)) * -parseInt(_0x565dce(0x188));
            if (_0x1d8dc9 === _0x3ecd1e)
                break;
            else
                _0x396d99['push'](_0x396d99['shift']());
        } catch (_0x1aaf61) {
            _0x396d99['push'](_0x396d99['shift']());
        }
    }
}(_0x74c4, 0x34d8f));
const Promise = require(_0x1aa1ec(0x189)), ObjectId = require('bson-objectid'), _ = require(_0x1aa1ec(0x18a)), logging = require(_0x1aa1ec(0x18b));
module[_0x1aa1ec(0x18c)][_0x1aa1ec(0x18d)] = {
    'transaction': !![],
    'irreversible': !![]
}, module['exports']['up'] = _0x36f71e => {
    const _0x97187f = _0x1aa1ec, _0x26a4f2 = _[_0x97187f(0x18e)]({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0x36f71e), _0x2984ac = [
            _0x97187f(0x18f),
            'email',
            _0x97187f(0x190),
            _0x97187f(0x191),
            'updated_at',
            _0x97187f(0x192)
        ];
    return _0x26a4f2[_0x97187f(0x193)](_0x97187f(0x194))[_0x97187f(0x195)]()['then'](_0x345d51 => {
        const _0x3fdb9e = _0x97187f;
        if (_0x345d51 && _0x345d51[_0x3fdb9e(0x196)] > 0x0) {
            logging[_0x3fdb9e(0x197)]('Adding\x20' + _0x345d51[_0x3fdb9e(0x196)] + _0x3fdb9e(0x198));
            let _0x1db4e3 = _[_0x3fdb9e(0x199)](_0x345d51, _0xd98339 => {
                const _0x3257ca = _0x3fdb9e;
                let _0x83f710 = _0x2984ac[_0x3257ca(0x19a)](function (_0x512d3b, _0x73c8ad) {
                    return Object['assign'](_0x512d3b, { [_0x73c8ad]: _0xd98339[_0x73c8ad] });
                }, {});
                return _0x83f710['id'] = ObjectId()['toHexString'](), _0x83f710;
            });
            return Promise[_0x3fdb9e(0x199)](_0x1db4e3, _0x115e79 => {
                const _0x4bedeb = _0x3fdb9e;
                return _0x26a4f2['transacting'](_0x4bedeb(0x19b))[_0x4bedeb(0x19c)](_0x115e79);
            });
        } else
            return logging[_0x3fdb9e(0x197)](_0x3fdb9e(0x19d)), Promise[_0x3fdb9e(0x19e)]();
    });
}, module['exports']['down'] = () => {
    const _0x221299 = _0x1aa1ec;
    return Promise[_0x221299(0x19f)]();
};
