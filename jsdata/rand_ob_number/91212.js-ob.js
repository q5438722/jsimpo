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
jest['mock']('web-vitals/base', () => {
    function _0x411efa(_0x3e7b63, _0x167604, _0x2cd5a6) {
        return {
            'name': _0x3e7b63,
            'id': _0x167604,
            'value': _0x2cd5a6
        };
    }
    return {
        'getLCP': jest['fn'](_0x8187f3 => {
            _0x8187f3(_0x411efa('LCP', '1', '300'));
        }),
        'getFID': jest['fn'](_0x2d24ef => {
            _0x2d24ef(_0x411efa('FID', '2', '150'));
        }),
        'getCLS': jest['fn'](_0x2aa611 => {
            _0x2aa611(_0x411efa('CLS', '3', '0.10'));
        })
    };
}), describe('gatsby-plugin-google-analytics', () => {
    describe('gatsby-browser', () => {
        describe('onRouteUpdate', () => {
            describe('in\x20non-production\x20env', () => {
                it('does\x20not\x20send\x20page\x20view', () => {
                    window['ga'] = jest['fn'](), onRouteUpdate({}), expect(window['ga'])['not']['toHaveBeenCalled']();
                });
            }), describe('in\x20production\x20env', () => {
                let _0x4f4c8a;
                beforeAll(() => {
                    _0x4f4c8a = process['env']['NODE_ENV'], process['env']['NODE_ENV'] = 'production';
                }), afterAll(() => {
                    process['env']['NODE_ENV'] = _0x4f4c8a;
                }), beforeEach(() => {
                    jest['useFakeTimers'](), jest['clearAllMocks'](), window['ga'] = jest['fn']();
                }), afterEach(() => {
                    jest['useRealTimers']();
                }), it('does\x20not\x20send\x20page\x20view\x20when\x20ga\x20is\x20undefined', () => {
                    delete window['ga'], onRouteUpdate({}), jest['runAllTimers'](), expect(setTimeout)['not']['toHaveBeenCalled']();
                }), it('does\x20not\x20send\x20page\x20view\x20when\x20path\x20is\x20excluded', () => {
                    const _0x4f4906 = new Minimatch('/test-pages/**');
                    window['excludeGAPaths'] = [_0x4f4906['makeRe']()], onRouteUpdate({ 'location': { 'pathname': '/test-pages/example' } }), jest['runAllTimers'](), expect(window['ga'])['not']['toHaveBeenCalled']();
                }), it('sends\x20page\x20view', () => {
                    onRouteUpdate({}), jest['runAllTimers'](), expect(window['ga'])['toHaveBeenCalledTimes'](-0x1e8 * 0xb + 0x58a * -0x3 + 0x18 * 0x191);
                }), it('uses\x20setTimeout\x20with\x20a\x20minimum\x20delay\x20of\x2032ms', () => {
                    onRouteUpdate({}), jest['runAllTimers'](), expect(setTimeout)['toHaveBeenCalledWith'](expect['any'](Function), -0x1869 + -0x4b1 * -0x1 + 0x5 * 0x3f8), expect(window['ga'])['toHaveBeenCalledTimes'](0x2627 + 0x2328 + 0x186f * -0x3);
                }), it('uses\x20setTimeout\x20with\x20the\x20provided\x20pageTransitionDelay\x20value', () => {
                    onRouteUpdate({}, { 'pageTransitionDelay': 0x3e8 }), jest['runAllTimers'](), expect(setTimeout)['toHaveBeenCalledWith'](expect['any'](Function), -0x33f * -0x5 + 0x25cd + -0x3220), expect(window['ga'])['toHaveBeenCalledTimes'](-0x70 * 0x3c + -0x1739 + 0x317b);
                }), it('sends\x20core\x20web\x20vitals\x20when\x20enabled', async () => {
                    onInitialClientRender({}, { 'enableWebVitalsTracking': !![] }), await Promise['resolve'](), await Promise['resolve'](), jest['runAllTimers'](), expect(window['ga'])['toBeCalledTimes'](-0x3 * -0xc17 + -0x1 * 0x1a57 + -0x9eb), expect(window['ga'])['toBeCalledWith']('send', 'event', expect['objectContaining']({
                        'eventAction': 'LCP',
                        'eventCategory': 'Web\x20Vitals',
                        'eventLabel': '1',
                        'eventValue': 0x12c
                    })), expect(window['ga'])['toBeCalledWith']('send', 'event', expect['objectContaining']({
                        'eventAction': 'FID',
                        'eventCategory': 'Web\x20Vitals',
                        'eventLabel': '2',
                        'eventValue': 0x96
                    })), expect(window['ga'])['toBeCalledWith']('send', 'event', expect['objectContaining']({
                        'eventAction': 'CLS',
                        'eventCategory': 'Web\x20Vitals',
                        'eventLabel': '3',
                        'eventValue': 0x64
                    }));
                }), it('sends\x20nothing\x20when\x20web\x20vitals\x20tracking\x20is\x20disabled', async () => {
                    onInitialClientRender({}, { 'enableWebVitalsTracking': ![] }), await Promise['resolve'](), await Promise['resolve'](), jest['runAllTimers'](), expect(getLCP)['not']['toBeCalled'](), expect(getFID)['not']['toBeCalled'](), expect(getCLS)['not']['toBeCalled']();
                });
            });
        });
    });
});
