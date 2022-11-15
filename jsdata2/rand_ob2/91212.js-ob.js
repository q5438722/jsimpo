const _0x446b = [
    'does\x20not\x20send\x20page\x20view\x20when\x20ga\x20is\x20undefined',
    'runAllTimers',
    'toHaveBeenCalled',
    '/test-pages/**',
    'excludeGAPaths',
    'makeRe',
    '/test-pages/example',
    'toHaveBeenCalledTimes',
    'uses\x20setTimeout\x20with\x20a\x20minimum\x20delay\x20of\x2032ms',
    'toHaveBeenCalledWith',
    'any',
    'uses\x20setTimeout\x20with\x20the\x20provided\x20pageTransitionDelay\x20value',
    'sends\x20core\x20web\x20vitals\x20when\x20enabled',
    'resolve',
    'toBeCalledWith',
    'send',
    'event',
    'objectContaining',
    'Web\x20Vitals',
    'sends\x20nothing\x20when\x20web\x20vitals\x20tracking\x20is\x20disabled',
    'toBeCalled',
    '489YinmkX',
    '1037TmMFVB',
    '58449jSMTsP',
    '18QYCFxk',
    '407LruQou',
    '947gkhCFK',
    '805211WegIWW',
    '1259855JNejFI',
    '1PFbgth',
    '130770btINnM',
    '2423385FtVACt',
    'mock',
    'web-vitals/base',
    'LCP',
    '300',
    'FID',
    'CLS',
    '0.10',
    'gatsby-plugin-google-analytics',
    'gatsby-browser',
    'onRouteUpdate',
    'in\x20non-production\x20env',
    'does\x20not\x20send\x20page\x20view',
    'not',
    'in\x20production\x20env',
    'NODE_ENV',
    'env',
    'useFakeTimers',
    'clearAllMocks',
    'useRealTimers'
];
const _0x422355 = _0x533d;
(function (_0x5095e0, _0x1ec739) {
    const _0x229718 = _0x533d;
    while (!![]) {
        try {
            const _0x169d41 = -parseInt(_0x229718(0x80)) * parseInt(_0x229718(0x81)) + parseInt(_0x229718(0x82)) * parseInt(_0x229718(0x83)) + -parseInt(_0x229718(0x84)) * parseInt(_0x229718(0x85)) + -parseInt(_0x229718(0x86)) + parseInt(_0x229718(0x87)) * -parseInt(_0x229718(0x88)) + parseInt(_0x229718(0x89)) + parseInt(_0x229718(0x8a));
            if (_0x169d41 === _0x1ec739)
                break;
            else
                _0x5095e0['push'](_0x5095e0['shift']());
        } catch (_0x4e8ad2) {
            _0x5095e0['push'](_0x5095e0['shift']());
        }
    }
}(_0x446b, 0x9e5c9));
import {
    onInitialClientRender,
    onRouteUpdate
} from '../gatsby-browser';
import { Minimatch } from 'minimatch';
import {
    getLCP,
    getFID,
    getCLS
} from 'web-vitals/base';
function _0x533d(_0x5a6961, _0x1db75b) {
    return _0x533d = function (_0x446b83, _0x533d89) {
        _0x446b83 = _0x446b83 - 0x80;
        let _0x3f7a9d = _0x446b[_0x446b83];
        return _0x3f7a9d;
    }, _0x533d(_0x5a6961, _0x1db75b);
}
jest[_0x422355(0x8b)](_0x422355(0x8c), () => {
    function _0x36184f(_0x3cf472, _0x586f35, _0x21893a) {
        return {
            'name': _0x3cf472,
            'id': _0x586f35,
            'value': _0x21893a
        };
    }
    return {
        'getLCP': jest['fn'](_0x372a5f => {
            const _0x774162 = _0x533d;
            _0x372a5f(_0x36184f(_0x774162(0x8d), '1', _0x774162(0x8e)));
        }),
        'getFID': jest['fn'](_0x5d4039 => {
            const _0x5a7a78 = _0x533d;
            _0x5d4039(_0x36184f(_0x5a7a78(0x8f), '2', '150'));
        }),
        'getCLS': jest['fn'](_0x2aa799 => {
            const _0x4de2f5 = _0x533d;
            _0x2aa799(_0x36184f(_0x4de2f5(0x90), '3', _0x4de2f5(0x91)));
        })
    };
}), describe(_0x422355(0x92), () => {
    const _0xae20f0 = _0x422355;
    describe(_0xae20f0(0x93), () => {
        const _0x5270e2 = _0xae20f0;
        describe(_0x5270e2(0x94), () => {
            const _0x367779 = _0x5270e2;
            describe(_0x367779(0x95), () => {
                const _0x5ef4d0 = _0x367779;
                it(_0x5ef4d0(0x96), () => {
                    const _0xa33c32 = _0x5ef4d0;
                    window['ga'] = jest['fn'](), onRouteUpdate({}), expect(window['ga'])[_0xa33c32(0x97)]['toHaveBeenCalled']();
                });
            }), describe(_0x367779(0x98), () => {
                const _0x5397c0 = _0x367779;
                let _0x48308d;
                beforeAll(() => {
                    const _0x1e7e90 = _0x533d;
                    _0x48308d = process['env'][_0x1e7e90(0x99)], process['env'][_0x1e7e90(0x99)] = 'production';
                }), afterAll(() => {
                    const _0x56652a = _0x533d;
                    process[_0x56652a(0x9a)][_0x56652a(0x99)] = _0x48308d;
                }), beforeEach(() => {
                    const _0x2c2b9d = _0x533d;
                    jest[_0x2c2b9d(0x9b)](), jest[_0x2c2b9d(0x9c)](), window['ga'] = jest['fn']();
                }), afterEach(() => {
                    const _0x34ab32 = _0x533d;
                    jest[_0x34ab32(0x9d)]();
                }), it(_0x5397c0(0x9e), () => {
                    const _0x469219 = _0x5397c0;
                    delete window['ga'], onRouteUpdate({}), jest[_0x469219(0x9f)](), expect(setTimeout)[_0x469219(0x97)][_0x469219(0xa0)]();
                }), it('does\x20not\x20send\x20page\x20view\x20when\x20path\x20is\x20excluded', () => {
                    const _0x4bb757 = _0x5397c0, _0x286c09 = new Minimatch(_0x4bb757(0xa1));
                    window[_0x4bb757(0xa2)] = [_0x286c09[_0x4bb757(0xa3)]()], onRouteUpdate({ 'location': { 'pathname': _0x4bb757(0xa4) } }), jest[_0x4bb757(0x9f)](), expect(window['ga'])[_0x4bb757(0x97)]['toHaveBeenCalled']();
                }), it('sends\x20page\x20view', () => {
                    const _0x18d16c = _0x5397c0;
                    onRouteUpdate({}), jest[_0x18d16c(0x9f)](), expect(window['ga'])[_0x18d16c(0xa5)](0x2);
                }), it(_0x5397c0(0xa6), () => {
                    const _0x2eef4e = _0x5397c0;
                    onRouteUpdate({}), jest[_0x2eef4e(0x9f)](), expect(setTimeout)[_0x2eef4e(0xa7)](expect[_0x2eef4e(0xa8)](Function), 0x20), expect(window['ga'])[_0x2eef4e(0xa5)](0x2);
                }), it(_0x5397c0(0xa9), () => {
                    const _0x46e83e = _0x5397c0;
                    onRouteUpdate({}, { 'pageTransitionDelay': 0x3e8 }), jest[_0x46e83e(0x9f)](), expect(setTimeout)['toHaveBeenCalledWith'](expect[_0x46e83e(0xa8)](Function), 0x3e8), expect(window['ga'])[_0x46e83e(0xa5)](0x2);
                }), it(_0x5397c0(0xaa), async () => {
                    const _0x1a0638 = _0x5397c0;
                    onInitialClientRender({}, { 'enableWebVitalsTracking': !![] }), await Promise[_0x1a0638(0xab)](), await Promise[_0x1a0638(0xab)](), jest[_0x1a0638(0x9f)](), expect(window['ga'])['toBeCalledTimes'](0x3), expect(window['ga'])[_0x1a0638(0xac)](_0x1a0638(0xad), _0x1a0638(0xae), expect[_0x1a0638(0xaf)]({
                        'eventAction': _0x1a0638(0x8d),
                        'eventCategory': _0x1a0638(0xb0),
                        'eventLabel': '1',
                        'eventValue': 0x12c
                    })), expect(window['ga'])[_0x1a0638(0xac)](_0x1a0638(0xad), _0x1a0638(0xae), expect[_0x1a0638(0xaf)]({
                        'eventAction': _0x1a0638(0x8f),
                        'eventCategory': _0x1a0638(0xb0),
                        'eventLabel': '2',
                        'eventValue': 0x96
                    })), expect(window['ga'])[_0x1a0638(0xac)]('send', _0x1a0638(0xae), expect[_0x1a0638(0xaf)]({
                        'eventAction': 'CLS',
                        'eventCategory': _0x1a0638(0xb0),
                        'eventLabel': '3',
                        'eventValue': 0x64
                    }));
                }), it(_0x5397c0(0xb1), async () => {
                    const _0x1e4949 = _0x5397c0;
                    onInitialClientRender({}, { 'enableWebVitalsTracking': ![] }), await Promise[_0x1e4949(0xab)](), await Promise[_0x1e4949(0xab)](), jest[_0x1e4949(0x9f)](), expect(getLCP)[_0x1e4949(0x97)][_0x1e4949(0xb2)](), expect(getFID)['not']['toBeCalled'](), expect(getCLS)[_0x1e4949(0x97)][_0x1e4949(0xb2)]();
                });
            });
        });
    });
});
