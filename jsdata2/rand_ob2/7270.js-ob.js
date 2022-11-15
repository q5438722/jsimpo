const _0x54de = [
    '6nRUTID',
    'mbps',
    'rtt',
    'abs',
    'keys',
    'reduce',
    'slice',
    'length',
    'map',
    'size',
    'name',
    'test',
    'sort',
    'secondary',
    '499277tAtEJE',
    '3szdjOi',
    '1674248hoiZai',
    '76630yFtTNj',
    '1388068EzSqis',
    '1UmDmgh',
    '283985dnAuUQ',
    '2EUdCOU',
    '1235465saBXQg',
    '929557EOQWtn'
];
function _0x5ee0(_0x4eae60, _0x5afcb5) {
    return _0x5ee0 = function (_0x54de89, _0x5ee009) {
        _0x54de89 = _0x54de89 - 0x117;
        let _0x57dfba = _0x54de[_0x54de89];
        return _0x57dfba;
    }, _0x5ee0(_0x4eae60, _0x5afcb5);
}
(function (_0x493027, _0x45e3f7) {
    const _0x48aa12 = _0x5ee0;
    while (!![]) {
        try {
            const _0x76e9ee = parseInt(_0x48aa12(0x117)) * parseInt(_0x48aa12(0x118)) + parseInt(_0x48aa12(0x119)) + parseInt(_0x48aa12(0x11a)) + -parseInt(_0x48aa12(0x11b)) * -parseInt(_0x48aa12(0x11c)) + -parseInt(_0x48aa12(0x11d)) * -parseInt(_0x48aa12(0x11e)) + parseInt(_0x48aa12(0x11f)) + parseInt(_0x48aa12(0x120)) * -parseInt(_0x48aa12(0x121));
            if (_0x76e9ee === _0x45e3f7)
                break;
            else
                _0x493027['push'](_0x493027['shift']());
        } catch (_0x2c7aea) {
            _0x493027['push'](_0x493027['shift']());
        }
    }
}(_0x54de, 0xd2a96));
import _0x48eaf9 from '../assets/speeds.json';
const DOWNLOAD_TIME_THRESHOLD_SECONDS = 0x5;
export function getSpeedData(_0x432086, _0x3e0617) {
    const _0x3b9469 = _0x5ee0, _0x544a89 = _0x3e0617 / 0x400 / 0x400, _0x1c4609 = _0x432086[_0x3b9469(0x122)], _0x3b8d22 = _0x1c4609 / 0x8, _0xa70321 = _0x432086[_0x3b9469(0x123)] / 0x3e8, _0xe54de4 = _0x544a89 / _0x3b8d22 + _0xa70321, _0x1b1745 = _0xe54de4 > DOWNLOAD_TIME_THRESHOLD_SECONDS, _0x4b81b0 = (_0x1b1745 ? '+' : '-') + Math[_0x3b9469(0x124)](_0xe54de4 - DOWNLOAD_TIME_THRESHOLD_SECONDS)['toFixed'](0x2) + 's';
    return {
        'totalDownloadTime': _0xe54de4,
        'isDownloadTimeOverThreshold': _0x1b1745,
        'timeDifferenceToThreshold': _0x4b81b0
    };
}
export function getSpeeds(_0x2ab148) {
    const _0x57bf0d = _0x5ee0;
    return Object[_0x57bf0d(0x125)](_0x48eaf9)[_0x57bf0d(0x126)]((_0x1283a1, _0x47c159) => {
        return _0x1283a1[_0x47c159] = {
            ...getSpeedData(_0x48eaf9[_0x47c159], _0x2ab148),
            ..._0x48eaf9[_0x47c159]
        }, _0x1283a1;
    }, {});
}
export function buildSortedAssets(_0x2fd9fa, _0x4fe466) {
    const _0x2a5b61 = _0x5ee0;
    let _0x3c3381 = _0x2fd9fa[_0x2a5b61(0x127)]();
    if (_0x3c3381[_0x2a5b61(0x128)]) {
        const _0x7aa6e6 = _0x3c3381[0x0]['size'];
        _0x3c3381 = _0x3c3381[_0x2a5b61(0x129)](_0xc131e0 => {
            const _0x2e4571 = _0x2a5b61, _0x44bce5 = _0xc131e0[_0x2e4571(0x12a)][_0x4fe466];
            return {
                'name': _0xc131e0[_0x2e4571(0x12b)],
                'size': _0x44bce5,
                'big': _0x44bce5 > 0x3d090,
                'ratio': _0x44bce5 / _0x7aa6e6,
                'secondary': /\.map$/[_0x2e4571(0x12c)](_0xc131e0['name']),
                'speeds': getSpeeds(_0x44bce5)
            };
        }), _0x3c3381[_0x2a5b61(0x12d)]((_0x29934d, _0x35ca1d) => {
            const _0x20e572 = _0x2a5b61;
            if (_0x29934d[_0x20e572(0x12e)] === _0x35ca1d[_0x20e572(0x12e)])
                return _0x35ca1d[_0x20e572(0x12a)] - _0x29934d[_0x20e572(0x12a)];
            else
                return _0x29934d[_0x20e572(0x12e)] && !_0x35ca1d[_0x20e572(0x12e)] ? 0x1 : -0x1;
        });
    }
    return _0x3c3381;
}
