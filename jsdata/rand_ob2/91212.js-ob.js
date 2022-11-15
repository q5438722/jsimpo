const _0xf54a = [
    'toHaveBeenCalledTimes',
    'uses\x20setTimeout\x20with\x20a\x20minimum\x20delay\x20of\x2032ms',
    'toHaveBeenCalledWith',
    'any',
    'sends\x20core\x20web\x20vitals\x20when\x20enabled',
    'toBeCalledWith',
    'send',
    'event',
    'objectContaining',
    'LCP',
    'Web\x20Vitals',
    'CLS',
    'sends\x20nothing\x20when\x20web\x20vitals\x20tracking\x20is\x20disabled',
    'resolve',
    'toBeCalled',
    '76269gqfWzG',
    '1JxHCTi',
    '424493fvzuYv',
    '56JnZvSU',
    '7851lJChfT',
    '38221Bioobq',
    '2DEAZBf',
    '479103kYcKiv',
    '181473aKSfPQ',
    '485510HoCZWw',
    'mock',
    'web-vitals/base',
    '300',
    'FID',
    '150',
    '0.10',
    'gatsby-plugin-google-analytics',
    'gatsby-browser',
    'onRouteUpdate',
    'in\x20non-production\x20env',
    'does\x20not\x20send\x20page\x20view',
    'not',
    'in\x20production\x20env',
    'env',
    'NODE_ENV',
    'production',
    'useRealTimers',
    'runAllTimers',
    'toHaveBeenCalled',
    'does\x20not\x20send\x20page\x20view\x20when\x20path\x20is\x20excluded',
    '/test-pages/**',
    'excludeGAPaths',
    'makeRe',
    '/test-pages/example',
    'sends\x20page\x20view'
];
const _0x192101 = _0x824c;
(function (_0x53c125, _0x4279e6) {
    const _0x4df381 = _0x824c;
    while (!![]) {
        try {
            const _0x2f7eee = parseInt(_0x4df381(0x155)) + parseInt(_0x4df381(0x156)) * parseInt(_0x4df381(0x157)) + -parseInt(_0x4df381(0x158)) * parseInt(_0x4df381(0x159)) + parseInt(_0x4df381(0x15a)) * parseInt(_0x4df381(0x15b)) + parseInt(_0x4df381(0x15c)) + parseInt(_0x4df381(0x15d)) + -parseInt(_0x4df381(0x15e));
            if (_0x2f7eee === _0x4279e6)
                break;
            else
                _0x53c125['push'](_0x53c125['shift']());
        } catch (_0x138684) {
            _0x53c125['push'](_0x53c125['shift']());
        }
    }
}(_0xf54a, 0x4c526));
import {
    onInitialClientRender,
    onRouteUpdate
} from '../gatsby-browser';
import { Minimatch } from 'minimatch';
function _0x824c(_0x38d2f5, _0x3cd8d7) {
    return _0x824c = function (_0xf54a79, _0x824c2f) {
        _0xf54a79 = _0xf54a79 - 0x155;
        let _0x3df87c = _0xf54a[_0xf54a79];
        return _0x3df87c;
    }, _0x824c(_0x38d2f5, _0x3cd8d7);
}
import {
    getLCP,
    getFID,
    getCLS
} from 'web-vitals/base';
jest[_0x192101(0x15f)](_0x192101(0x160), () => {
    function _0x4f0587(_0x237e8c, _0x508e94, _0x20fb35) {
        return {
            'name': _0x237e8c,
            'id': _0x508e94,
            'value': _0x20fb35
        };
    }
    return {
        'getLCP': jest['fn'](_0xf13e1c => {
            const _0x2e0748 = _0x824c;
            _0xf13e1c(_0x4f0587('LCP', '1', _0x2e0748(0x161)));
        }),
        'getFID': jest['fn'](_0x312cdd => {
            const _0x893b95 = _0x824c;
            _0x312cdd(_0x4f0587(_0x893b95(0x162), '2', _0x893b95(0x163)));
        }),
        'getCLS': jest['fn'](_0x2188dc => {
            const _0x4f3b1b = _0x824c;
            _0x2188dc(_0x4f0587('CLS', '3', _0x4f3b1b(0x164)));
        })
    };
}), describe(_0x192101(0x165), () => {
    const _0x3b307b = _0x192101;
    describe(_0x3b307b(0x166), () => {
        const _0x579d33 = _0x3b307b;
        describe(_0x579d33(0x167), () => {
            const _0x3f83fc = _0x579d33;
            describe(_0x3f83fc(0x168), () => {
                const _0x155e8d = _0x3f83fc;
                it(_0x155e8d(0x169), () => {
                    const _0xcdae89 = _0x155e8d;
                    window['ga'] = jest['fn'](), onRouteUpdate({}), expect(window['ga'])[_0xcdae89(0x16a)]['toHaveBeenCalled']();
                });
            }), describe(_0x3f83fc(0x16b), () => {
                const _0x369e2c = _0x3f83fc;
                let _0x46a9ec;
                beforeAll(() => {
                    const _0x47a144 = _0x824c;
                    _0x46a9ec = process[_0x47a144(0x16c)][_0x47a144(0x16d)], process[_0x47a144(0x16c)][_0x47a144(0x16d)] = _0x47a144(0x16e);
                }), afterAll(() => {
                    const _0x331c9f = _0x824c;
                    process[_0x331c9f(0x16c)][_0x331c9f(0x16d)] = _0x46a9ec;
                }), beforeEach(() => {
                    jest['useFakeTimers'](), jest['clearAllMocks'](), window['ga'] = jest['fn']();
                }), afterEach(() => {
                    const _0x5b46bc = _0x824c;
                    jest[_0x5b46bc(0x16f)]();
                }), it('does\x20not\x20send\x20page\x20view\x20when\x20ga\x20is\x20undefined', () => {
                    const _0x312e3e = _0x824c;
                    delete window['ga'], onRouteUpdate({}), jest[_0x312e3e(0x170)](), expect(setTimeout)[_0x312e3e(0x16a)][_0x312e3e(0x171)]();
                }), it(_0x369e2c(0x172), () => {
                    const _0x471ed8 = _0x369e2c, _0x1685de = new Minimatch(_0x471ed8(0x173));
                    window[_0x471ed8(0x174)] = [_0x1685de[_0x471ed8(0x175)]()], onRouteUpdate({ 'location': { 'pathname': _0x471ed8(0x176) } }), jest[_0x471ed8(0x170)](), expect(window['ga'])[_0x471ed8(0x16a)][_0x471ed8(0x171)]();
                }), it(_0x369e2c(0x177), () => {
                    const _0x194950 = _0x369e2c;
                    onRouteUpdate({}), jest['runAllTimers'](), expect(window['ga'])[_0x194950(0x178)](0x2);
                }), it(_0x369e2c(0x179), () => {
                    const _0x3ace4f = _0x369e2c;
                    onRouteUpdate({}), jest['runAllTimers'](), expect(setTimeout)[_0x3ace4f(0x17a)](expect['any'](Function), 0x20), expect(window['ga'])[_0x3ace4f(0x178)](0x2);
                }), it('uses\x20setTimeout\x20with\x20the\x20provided\x20pageTransitionDelay\x20value', () => {
                    const _0x429dd3 = _0x369e2c;
                    onRouteUpdate({}, { 'pageTransitionDelay': 0x3e8 }), jest[_0x429dd3(0x170)](), expect(setTimeout)['toHaveBeenCalledWith'](expect[_0x429dd3(0x17b)](Function), 0x3e8), expect(window['ga'])['toHaveBeenCalledTimes'](0x2);
                }), it(_0x369e2c(0x17c), async () => {
                    const _0x27357f = _0x369e2c;
                    onInitialClientRender({}, { 'enableWebVitalsTracking': !![] }), await Promise['resolve'](), await Promise['resolve'](), jest['runAllTimers'](), expect(window['ga'])['toBeCalledTimes'](0x3), expect(window['ga'])[_0x27357f(0x17d)](_0x27357f(0x17e), _0x27357f(0x17f), expect[_0x27357f(0x180)]({
                        'eventAction': _0x27357f(0x181),
                        'eventCategory': _0x27357f(0x182),
                        'eventLabel': '1',
                        'eventValue': 0x12c
                    })), expect(window['ga'])['toBeCalledWith']('send', 'event', expect[_0x27357f(0x180)]({
                        'eventAction': 'FID',
                        'eventCategory': 'Web\x20Vitals',
                        'eventLabel': '2',
                        'eventValue': 0x96
                    })), expect(window['ga'])[_0x27357f(0x17d)]('send', _0x27357f(0x17f), expect['objectContaining']({
                        'eventAction': _0x27357f(0x183),
                        'eventCategory': _0x27357f(0x182),
                        'eventLabel': '3',
                        'eventValue': 0x64
                    }));
                }), it(_0x369e2c(0x184), async () => {
                    const _0x4e0e26 = _0x369e2c;
                    onInitialClientRender({}, { 'enableWebVitalsTracking': ![] }), await Promise[_0x4e0e26(0x185)](), await Promise[_0x4e0e26(0x185)](), jest[_0x4e0e26(0x170)](), expect(getLCP)[_0x4e0e26(0x16a)][_0x4e0e26(0x186)](), expect(getFID)[_0x4e0e26(0x16a)][_0x4e0e26(0x186)](), expect(getCLS)[_0x4e0e26(0x16a)][_0x4e0e26(0x186)]();
                });
            });
        });
    });
});
