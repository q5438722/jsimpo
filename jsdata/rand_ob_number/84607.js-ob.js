import _0x5b8b28 from '../../src/offcanvas';
import _0x7fed88 from '../../src/dom/event-handler';
import {
    clearBodyAndDocument,
    clearFixture,
    createEvent,
    getFixture,
    jQueryMock
} from '../helpers/fixture';
import { isVisible } from '../../src/util';
import _0x441f3e from '../../src/util/scrollbar';
describe('Offcanvas', () => {
    let _0x1770e4;
    beforeAll(() => {
        _0x1770e4 = getFixture();
    }), afterEach(() => {
        clearFixture(), document['body']['classList']['remove']('offcanvas-open'), clearBodyAndDocument();
    }), beforeEach(() => {
        clearBodyAndDocument();
    }), describe('VERSION', () => {
        it('should\x20return\x20plugin\x20version', () => {
            expect(_0x5b8b28['VERSION'])['toEqual'](jasmine['any'](String));
        });
    }), describe('Default', () => {
        it('should\x20return\x20plugin\x20default\x20config', () => {
            expect(_0x5b8b28['Default'])['toEqual'](jasmine['any'](Object));
        });
    }), describe('DATA_KEY', () => {
        it('should\x20return\x20plugin\x20data\x20key', () => {
            expect(_0x5b8b28['DATA_KEY'])['toEqual']('bs.offcanvas');
        });
    }), describe('constructor', () => {
        it('should\x20call\x20hide\x20when\x20a\x20element\x20with\x20data-bs-dismiss=\x22offcanvas\x22\x20is\x20clicked', () => {
            _0x1770e4['innerHTML'] = [
                '<div\x20class=\x22offcanvas\x22>',
                '\x20\x20<a\x20href=\x22#\x22\x20data-bs-dismiss=\x22offcanvas\x22>Close</a>',
                '</div>'
            ]['join']('');
            const _0x420711 = _0x1770e4['querySelector']('.offcanvas'), _0x5a5a89 = _0x1770e4['querySelector']('a'), _0x2851d6 = new _0x5b8b28(_0x420711);
            spyOn(_0x2851d6, 'hide'), _0x5a5a89['click'](), expect(_0x2851d6['_config']['keyboard'])['toBe'](!![]), expect(_0x2851d6['hide'])['toHaveBeenCalled']();
        }), it('should\x20hide\x20if\x20esc\x20is\x20pressed', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x4ca295 = _0x1770e4['querySelector']('.offcanvas'), _0x160f75 = new _0x5b8b28(_0x4ca295), _0x176b30 = createEvent('keydown');
            _0x176b30['key'] = 'Escape', spyOn(_0x160f75, 'hide'), _0x4ca295['dispatchEvent'](_0x176b30), expect(_0x160f75['hide'])['toHaveBeenCalled']();
        }), it('should\x20not\x20hide\x20if\x20esc\x20is\x20not\x20pressed', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x98c722 = _0x1770e4['querySelector']('.offcanvas'), _0x40bb5e = new _0x5b8b28(_0x98c722), _0x390fb0 = createEvent('keydown');
            _0x390fb0['key'] = 'Tab', spyOn(_0x40bb5e, 'hide'), document['dispatchEvent'](_0x390fb0), expect(_0x40bb5e['hide'])['not']['toHaveBeenCalled']();
        }), it('should\x20not\x20hide\x20if\x20esc\x20is\x20pressed\x20but\x20with\x20keyboard\x20=\x20false', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x358e4b = _0x1770e4['querySelector']('.offcanvas'), _0x734704 = new _0x5b8b28(_0x358e4b, { 'keyboard': ![] }), _0x2039d2 = createEvent('keydown');
            _0x2039d2['key'] = 'Escape', spyOn(_0x734704, 'hide'), document['dispatchEvent'](_0x2039d2), expect(_0x734704['_config']['keyboard'])['toBe'](![]), expect(_0x734704['hide'])['not']['toHaveBeenCalled']();
        });
    }), describe('config', () => {
        it('should\x20have\x20default\x20values', () => {
            _0x1770e4['innerHTML'] = [
                '<div\x20class=\x22offcanvas\x22>',
                '</div>'
            ]['join']('');
            const _0x585541 = _0x1770e4['querySelector']('.offcanvas'), _0x3e2a49 = new _0x5b8b28(_0x585541);
            expect(_0x3e2a49['_config']['backdrop'])['toEqual'](!![]), expect(_0x3e2a49['_backdrop']['_config']['isVisible'])['toEqual'](!![]), expect(_0x3e2a49['_config']['keyboard'])['toEqual'](!![]), expect(_0x3e2a49['_config']['scroll'])['toEqual'](![]);
        }), it('should\x20read\x20data\x20attributes\x20and\x20override\x20default\x20config', () => {
            _0x1770e4['innerHTML'] = [
                '<div\x20class=\x22offcanvas\x22\x20data-bs-scroll=\x22true\x22\x20data-bs-backdrop=\x22false\x22\x20\x20data-bs-keyboard=\x22false\x22>',
                '</div>'
            ]['join']('');
            const _0x560a7e = _0x1770e4['querySelector']('.offcanvas'), _0x48e426 = new _0x5b8b28(_0x560a7e);
            expect(_0x48e426['_config']['backdrop'])['toEqual'](![]), expect(_0x48e426['_backdrop']['_config']['isVisible'])['toEqual'](![]), expect(_0x48e426['_config']['keyboard'])['toEqual'](![]), expect(_0x48e426['_config']['scroll'])['toEqual'](!![]);
        }), it('given\x20a\x20config\x20object\x20must\x20override\x20data\x20attributes', () => {
            _0x1770e4['innerHTML'] = [
                '<div\x20class=\x22offcanvas\x22\x20data-bs-scroll=\x22true\x22\x20data-bs-backdrop=\x22false\x22\x20\x20data-bs-keyboard=\x22false\x22>',
                '</div>'
            ]['join']('');
            const _0x324375 = _0x1770e4['querySelector']('.offcanvas'), _0x150e77 = new _0x5b8b28(_0x324375, {
                    'backdrop': !![],
                    'keyboard': !![],
                    'scroll': ![]
                });
            expect(_0x150e77['_config']['backdrop'])['toEqual'](!![]), expect(_0x150e77['_config']['keyboard'])['toEqual'](!![]), expect(_0x150e77['_config']['scroll'])['toEqual'](![]);
        });
    }), describe('options', () => {
        it('if\x20scroll\x20is\x20enabled,\x20should\x20allow\x20body\x20to\x20scroll\x20while\x20offcanvas\x20is\x20open', _0x29150c => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>', spyOn(_0x441f3e['prototype'], 'hide')['and']['callThrough'](), spyOn(_0x441f3e['prototype'], 'reset')['and']['callThrough']();
            const _0x5383a7 = _0x1770e4['querySelector']('.offcanvas'), _0x9403dd = new _0x5b8b28(_0x5383a7, { 'scroll': !![] });
            _0x5383a7['addEventListener']('shown.bs.offcanvas', () => {
                expect(_0x441f3e['prototype']['hide'])['not']['toHaveBeenCalled'](), _0x9403dd['hide']();
            }), _0x5383a7['addEventListener']('hidden.bs.offcanvas', () => {
                expect(_0x441f3e['prototype']['reset'])['not']['toHaveBeenCalled'](), _0x29150c();
            }), _0x9403dd['show']();
        }), it('if\x20scroll\x20is\x20disabled,\x20should\x20call\x20ScrollBarHelper\x20to\x20handle\x20scrollBar\x20on\x20body', _0x2f29af => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>', spyOn(_0x441f3e['prototype'], 'hide')['and']['callThrough'](), spyOn(_0x441f3e['prototype'], 'reset')['and']['callThrough']();
            const _0xcc2086 = _0x1770e4['querySelector']('.offcanvas'), _0x2581f5 = new _0x5b8b28(_0xcc2086, { 'scroll': ![] });
            _0xcc2086['addEventListener']('shown.bs.offcanvas', () => {
                expect(_0x441f3e['prototype']['hide'])['toHaveBeenCalled'](), _0x2581f5['hide']();
            }), _0xcc2086['addEventListener']('hidden.bs.offcanvas', () => {
                expect(_0x441f3e['prototype']['reset'])['toHaveBeenCalled'](), _0x2f29af();
            }), _0x2581f5['show']();
        }), it('should\x20hide\x20a\x20shown\x20element\x20if\x20user\x20click\x20on\x20backdrop', _0x30c842 => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0xa719c5 = _0x1770e4['querySelector']('div'), _0x1c2372 = new _0x5b8b28(_0xa719c5, { 'backdrop': !![] }), _0x4bc7ce = document['createEvent']('MouseEvents');
            _0x4bc7ce['initEvent']('mousedown', !![], !![]), spyOn(_0x1c2372['_backdrop']['_config'], 'clickCallback')['and']['callThrough'](), _0xa719c5['addEventListener']('shown.bs.offcanvas', () => {
                expect(typeof _0x1c2372['_backdrop']['_config']['clickCallback'])['toBe']('function'), _0x1c2372['_backdrop']['_getElement']()['dispatchEvent'](_0x4bc7ce);
            }), _0xa719c5['addEventListener']('hidden.bs.offcanvas', () => {
                expect(_0x1c2372['_backdrop']['_config']['clickCallback'])['toHaveBeenCalled'](), _0x30c842();
            }), _0x1c2372['show']();
        }), it('should\x20not\x20trap\x20focus\x20if\x20scroll\x20is\x20allowed', _0x52f3fb => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x2d0532 = _0x1770e4['querySelector']('.offcanvas'), _0x3c8aa7 = new _0x5b8b28(_0x2d0532, { 'scroll': !![] });
            spyOn(_0x3c8aa7['_focustrap'], 'activate')['and']['callThrough'](), _0x2d0532['addEventListener']('shown.bs.offcanvas', () => {
                expect(_0x3c8aa7['_focustrap']['activate'])['not']['toHaveBeenCalled'](), _0x52f3fb();
            }), _0x3c8aa7['show']();
        });
    }), describe('toggle', () => {
        it('should\x20call\x20show\x20method\x20if\x20show\x20class\x20is\x20not\x20present', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x5e279a = _0x1770e4['querySelector']('.offcanvas'), _0x2d31fa = new _0x5b8b28(_0x5e279a);
            spyOn(_0x2d31fa, 'show'), _0x2d31fa['toggle'](), expect(_0x2d31fa['show'])['toHaveBeenCalled']();
        }), it('should\x20call\x20hide\x20method\x20if\x20show\x20class\x20is\x20present', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0xdbc517 = _0x1770e4['querySelector']('.offcanvas'), _0x4cc7fc = new _0x5b8b28(_0xdbc517);
            _0x4cc7fc['show'](), expect(_0xdbc517['classList']['contains']('show'))['toBe'](!![]), spyOn(_0x4cc7fc, 'hide'), _0x4cc7fc['toggle'](), expect(_0x4cc7fc['hide'])['toHaveBeenCalled']();
        });
    }), describe('show', () => {
        it('should\x20do\x20nothing\x20if\x20already\x20shown', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x20show\x22></div>';
            const _0xac914f = _0x1770e4['querySelector']('div'), _0x506d36 = new _0x5b8b28(_0xac914f);
            _0x506d36['show'](), expect(_0xac914f['classList']['contains']('show'))['toBe'](!![]), spyOn(_0x506d36['_backdrop'], 'show')['and']['callThrough'](), spyOn(_0x7fed88, 'trigger')['and']['callThrough'](), _0x506d36['show'](), expect(_0x7fed88['trigger'])['not']['toHaveBeenCalled'](), expect(_0x506d36['_backdrop']['show'])['not']['toHaveBeenCalled']();
        }), it('should\x20show\x20a\x20hidden\x20element', _0x4930cd => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x120d22 = _0x1770e4['querySelector']('div'), _0x5cd481 = new _0x5b8b28(_0x120d22);
            spyOn(_0x5cd481['_backdrop'], 'show')['and']['callThrough'](), _0x120d22['addEventListener']('shown.bs.offcanvas', () => {
                expect(_0x120d22['classList']['contains']('show'))['toEqual'](!![]), expect(_0x5cd481['_backdrop']['show'])['toHaveBeenCalled'](), _0x4930cd();
            }), _0x5cd481['show']();
        }), it('should\x20not\x20fire\x20shown\x20when\x20show\x20is\x20prevented', _0x19064d => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x4ee23e = _0x1770e4['querySelector']('div'), _0x1e294a = new _0x5b8b28(_0x4ee23e);
            spyOn(_0x1e294a['_backdrop'], 'show')['and']['callThrough']();
            const _0x551632 = () => {
                setTimeout(() => {
                    expect(_0x1e294a['_backdrop']['show'])['not']['toHaveBeenCalled'](), _0x19064d();
                }, 0x3df * -0x3 + 0x1 * 0x4d9 + 0x2 * 0x367);
            };
            _0x4ee23e['addEventListener']('show.bs.offcanvas', _0x4bb852 => {
                _0x4bb852['preventDefault'](), _0x551632();
            }), _0x4ee23e['addEventListener']('shown.bs.offcanvas', () => {
                throw new Error('should\x20not\x20fire\x20shown\x20event');
            }), _0x1e294a['show']();
        }), it('on\x20window\x20load,\x20should\x20make\x20visible\x20an\x20offcanvas\x20element,\x20if\x20its\x20markup\x20contains\x20class\x20\x22show\x22', _0x14dea1 => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x20show\x22></div>';
            const _0x35931b = _0x1770e4['querySelector']('div');
            spyOn(_0x5b8b28['prototype'], 'show')['and']['callThrough'](), _0x35931b['addEventListener']('shown.bs.offcanvas', () => {
                _0x14dea1();
            }), window['dispatchEvent'](createEvent('load'));
            const _0x142df8 = _0x5b8b28['getInstance'](_0x35931b);
            expect(_0x142df8)['not']['toBeNull'](), expect(_0x5b8b28['prototype']['show'])['toHaveBeenCalled']();
        }), it('should\x20trap\x20focus', _0x50d799 => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x3ea66e = _0x1770e4['querySelector']('.offcanvas'), _0x29080c = new _0x5b8b28(_0x3ea66e);
            spyOn(_0x29080c['_focustrap'], 'activate')['and']['callThrough'](), _0x3ea66e['addEventListener']('shown.bs.offcanvas', () => {
                expect(_0x29080c['_focustrap']['activate'])['toHaveBeenCalled'](), _0x50d799();
            }), _0x29080c['show']();
        });
    }), describe('hide', () => {
        it('should\x20do\x20nothing\x20if\x20already\x20shown', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>', spyOn(_0x7fed88, 'trigger')['and']['callThrough']();
            const _0x484dc4 = _0x1770e4['querySelector']('div'), _0x2451bf = new _0x5b8b28(_0x484dc4);
            spyOn(_0x2451bf['_backdrop'], 'hide')['and']['callThrough'](), _0x2451bf['hide'](), expect(_0x2451bf['_backdrop']['hide'])['not']['toHaveBeenCalled'](), expect(_0x7fed88['trigger'])['not']['toHaveBeenCalled']();
        }), it('should\x20hide\x20a\x20shown\x20element', _0x23e07 => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x57afe8 = _0x1770e4['querySelector']('div'), _0x1046ca = new _0x5b8b28(_0x57afe8);
            spyOn(_0x1046ca['_backdrop'], 'hide')['and']['callThrough'](), _0x1046ca['show'](), _0x57afe8['addEventListener']('hidden.bs.offcanvas', () => {
                expect(_0x57afe8['classList']['contains']('show'))['toEqual'](![]), expect(_0x1046ca['_backdrop']['hide'])['toHaveBeenCalled'](), _0x23e07();
            }), _0x1046ca['hide']();
        }), it('should\x20not\x20fire\x20hidden\x20when\x20hide\x20is\x20prevented', _0x47d282 => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x215de5 = _0x1770e4['querySelector']('div'), _0x1a34a5 = new _0x5b8b28(_0x215de5);
            spyOn(_0x1a34a5['_backdrop'], 'hide')['and']['callThrough'](), _0x1a34a5['show']();
            const _0x27095a = () => {
                setTimeout(() => {
                    expect(_0x1a34a5['_backdrop']['hide'])['not']['toHaveBeenCalled'](), _0x47d282();
                }, 0xae2 * -0x2 + 0x2e1 + 0x12ed);
            };
            _0x215de5['addEventListener']('hide.bs.offcanvas', _0x33cc92 => {
                _0x33cc92['preventDefault'](), _0x27095a();
            }), _0x215de5['addEventListener']('hidden.bs.offcanvas', () => {
                throw new Error('should\x20not\x20fire\x20hidden\x20event');
            }), _0x1a34a5['hide']();
        }), it('should\x20release\x20focus\x20trap', _0x5ca099 => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x16499b = _0x1770e4['querySelector']('div'), _0x14a5af = new _0x5b8b28(_0x16499b);
            spyOn(_0x14a5af['_focustrap'], 'deactivate')['and']['callThrough'](), _0x14a5af['show'](), _0x16499b['addEventListener']('hidden.bs.offcanvas', () => {
                expect(_0x14a5af['_focustrap']['deactivate'])['toHaveBeenCalled'](), _0x5ca099();
            }), _0x14a5af['hide']();
        });
    }), describe('dispose', () => {
        it('should\x20dispose\x20an\x20offcanvas', () => {
            _0x1770e4['innerHTML'] = '<div\x20class=\x22offcanvas\x22></div>';
            const _0x541a8e = _0x1770e4['querySelector']('div'), _0x26ab74 = new _0x5b8b28(_0x541a8e), _0x2ae042 = _0x26ab74['_backdrop'];
            spyOn(_0x2ae042, 'dispose')['and']['callThrough']();
            const _0x2c78fb = _0x26ab74['_focustrap'];
            spyOn(_0x2c78fb, 'deactivate')['and']['callThrough'](), expect(_0x5b8b28['getInstance'](_0x541a8e))['toEqual'](_0x26ab74), spyOn(_0x7fed88, 'off'), _0x26ab74['dispose'](), expect(_0x2ae042['dispose'])['toHaveBeenCalled'](), expect(_0x26ab74['_backdrop'])['toBeNull'](), expect(_0x2c78fb['deactivate'])['toHaveBeenCalled'](), expect(_0x26ab74['_focustrap'])['toBeNull'](), expect(_0x5b8b28['getInstance'](_0x541a8e))['toEqual'](null);
        });
    }), describe('data-api', () => {
        it('should\x20not\x20prevent\x20event\x20for\x20input', _0x454944 => {
            _0x1770e4['innerHTML'] = [
                '<input\x20type=\x22checkbox\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvasdiv1\x22\x20/>',
                '<div\x20id=\x22offcanvasdiv1\x22\x20class=\x22offcanvas\x22></div>'
            ]['join']('');
            const _0x1a22af = _0x1770e4['querySelector']('input'), _0x214cff = _0x1770e4['querySelector']('#offcanvasdiv1');
            _0x214cff['addEventListener']('shown.bs.offcanvas', () => {
                expect(_0x214cff['classList']['contains']('show'))['toEqual'](!![]), expect(_0x1a22af['checked'])['toEqual'](!![]), _0x454944();
            }), _0x1a22af['click']();
        }), it('should\x20not\x20call\x20toggle\x20on\x20disabled\x20elements', () => {
            _0x1770e4['innerHTML'] = [
                '<a\x20href=\x22#\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvasdiv1\x22\x20class=\x22disabled\x22></a>',
                '<div\x20id=\x22offcanvasdiv1\x22\x20class=\x22offcanvas\x22></div>'
            ]['join']('');
            const _0x483f3d = _0x1770e4['querySelector']('a');
            spyOn(_0x5b8b28['prototype'], 'toggle'), _0x483f3d['click'](), expect(_0x5b8b28['prototype']['toggle'])['not']['toHaveBeenCalled']();
        }), it('should\x20call\x20hide\x20first,\x20if\x20another\x20offcanvas\x20is\x20open', _0x2a7111 => {
            _0x1770e4['innerHTML'] = [
                '<button\x20id=\x22btn2\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvas2\x22\x20></button>',
                '<div\x20id=\x22offcanvas1\x22\x20class=\x22offcanvas\x22></div>',
                '<div\x20id=\x22offcanvas2\x22\x20class=\x22offcanvas\x22></div>'
            ]['join']('');
            const _0xfb0bac = _0x1770e4['querySelector']('#btn2'), _0x4c629e = document['querySelector']('#offcanvas1'), _0x1df23d = document['querySelector']('#offcanvas2'), _0x51c08f = new _0x5b8b28(_0x4c629e);
            _0x4c629e['addEventListener']('shown.bs.offcanvas', () => {
                _0xfb0bac['click']();
            }), _0x4c629e['addEventListener']('hidden.bs.offcanvas', () => {
                expect(_0x5b8b28['getInstance'](_0x1df23d))['not']['toBeNull'](), _0x2a7111();
            }), _0x51c08f['show']();
        }), it('should\x20focus\x20on\x20trigger\x20element\x20after\x20closing\x20offcanvas', _0x54c1e3 => {
            _0x1770e4['innerHTML'] = [
                '<button\x20id=\x22btn\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvas\x22\x20></button>',
                '<div\x20id=\x22offcanvas\x22\x20class=\x22offcanvas\x22></div>'
            ]['join']('');
            const _0x42af0f = _0x1770e4['querySelector']('#btn'), _0x34a5c0 = _0x1770e4['querySelector']('#offcanvas'), _0x29dd1e = new _0x5b8b28(_0x34a5c0);
            spyOn(_0x42af0f, 'focus'), _0x34a5c0['addEventListener']('shown.bs.offcanvas', () => {
                _0x29dd1e['hide']();
            }), _0x34a5c0['addEventListener']('hidden.bs.offcanvas', () => {
                setTimeout(() => {
                    expect(_0x42af0f['focus'])['toHaveBeenCalled'](), _0x54c1e3();
                }, 0x98b + -0x85 * 0x46 + -0x8 * -0x35b);
            }), _0x42af0f['click']();
        }), it('should\x20not\x20focus\x20on\x20trigger\x20element\x20after\x20closing\x20offcanvas,\x20if\x20it\x20is\x20not\x20visible', _0x5a773d => {
            _0x1770e4['innerHTML'] = [
                '<button\x20id=\x22btn\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvas\x22\x20></button>',
                '<div\x20id=\x22offcanvas\x22\x20class=\x22offcanvas\x22></div>'
            ]['join']('');
            const _0x59f463 = _0x1770e4['querySelector']('#btn'), _0x56d14a = _0x1770e4['querySelector']('#offcanvas'), _0xb1a61e = new _0x5b8b28(_0x56d14a);
            spyOn(_0x59f463, 'focus'), _0x56d14a['addEventListener']('shown.bs.offcanvas', () => {
                _0x59f463['style']['display'] = 'none', _0xb1a61e['hide']();
            }), _0x56d14a['addEventListener']('hidden.bs.offcanvas', () => {
                setTimeout(() => {
                    expect(isVisible(_0x59f463))['toBe'](![]), expect(_0x59f463['focus'])['not']['toHaveBeenCalled'](), _0x5a773d();
                }, 0x801 + -0x1b * -0xdb + -0x1f15);
            }), _0x59f463['click']();
        });
    }), describe('jQueryInterface', () => {
        it('should\x20create\x20an\x20offcanvas', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x5ee4f0 = _0x1770e4['querySelector']('div');
            jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x5ee4f0], jQueryMock['fn']['offcanvas']['call'](jQueryMock), expect(_0x5b8b28['getInstance'](_0x5ee4f0))['not']['toBeNull']();
        }), it('should\x20not\x20re\x20create\x20an\x20offcanvas', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x43bb8f = _0x1770e4['querySelector']('div'), _0x2cf98e = new _0x5b8b28(_0x43bb8f);
            jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x43bb8f], jQueryMock['fn']['offcanvas']['call'](jQueryMock), expect(_0x5b8b28['getInstance'](_0x43bb8f))['toEqual'](_0x2cf98e);
        }), it('should\x20throw\x20error\x20on\x20undefined\x20method', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x1cad5a = _0x1770e4['querySelector']('div'), _0xb264e4 = 'undefinedMethod';
            jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x1cad5a], expect(() => {
                jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0xb264e4);
            })['toThrowError'](TypeError, 'No\x20method\x20named\x20\x22' + _0xb264e4 + '\x22');
        }), it('should\x20throw\x20error\x20on\x20protected\x20method', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x164988 = _0x1770e4['querySelector']('div'), _0x3454ff = '_getConfig';
            jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x164988], expect(() => {
                jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0x3454ff);
            })['toThrowError'](TypeError, 'No\x20method\x20named\x20\x22' + _0x3454ff + '\x22');
        }), it('should\x20throw\x20error\x20if\x20method\x20\x22constructor\x22\x20is\x20being\x20called', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x4fbdda = _0x1770e4['querySelector']('div'), _0x511b27 = 'constructor';
            jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x4fbdda], expect(() => {
                jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0x511b27);
            })['toThrowError'](TypeError, 'No\x20method\x20named\x20\x22' + _0x511b27 + '\x22');
        }), it('should\x20call\x20offcanvas\x20method', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x4c74ff = _0x1770e4['querySelector']('div');
            spyOn(_0x5b8b28['prototype'], 'show'), jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x4c74ff], jQueryMock['fn']['offcanvas']['call'](jQueryMock, 'show'), expect(_0x5b8b28['prototype']['show'])['toHaveBeenCalled']();
        }), it('should\x20create\x20a\x20offcanvas\x20with\x20given\x20config', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x1e55c1 = _0x1770e4['querySelector']('div');
            jQueryMock['fn']['offcanvas'] = _0x5b8b28['jQueryInterface'], jQueryMock['elements'] = [_0x1e55c1], jQueryMock['fn']['offcanvas']['call'](jQueryMock, { 'scroll': !![] });
            const _0x5310bd = _0x5b8b28['getInstance'](_0x1e55c1);
            expect(_0x5310bd)['not']['toBeNull'](), expect(_0x5310bd['_config']['scroll'])['toBe'](!![]);
        });
    }), describe('getInstance', () => {
        it('should\x20return\x20offcanvas\x20instance', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x47b3c7 = _0x1770e4['querySelector']('div'), _0x5cc50f = new _0x5b8b28(_0x47b3c7);
            expect(_0x5b8b28['getInstance'](_0x47b3c7))['toEqual'](_0x5cc50f), expect(_0x5b8b28['getInstance'](_0x47b3c7))['toBeInstanceOf'](_0x5b8b28);
        }), it('should\x20return\x20null\x20when\x20there\x20is\x20no\x20offcanvas\x20instance', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x33a9ce = _0x1770e4['querySelector']('div');
            expect(_0x5b8b28['getInstance'](_0x33a9ce))['toBeNull']();
        });
    }), describe('getOrCreateInstance', () => {
        it('should\x20return\x20offcanvas\x20instance', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x214c3e = _0x1770e4['querySelector']('div'), _0x297bde = new _0x5b8b28(_0x214c3e);
            expect(_0x5b8b28['getOrCreateInstance'](_0x214c3e))['toEqual'](_0x297bde), expect(_0x5b8b28['getInstance'](_0x214c3e))['toEqual'](_0x5b8b28['getOrCreateInstance'](_0x214c3e, {})), expect(_0x5b8b28['getOrCreateInstance'](_0x214c3e))['toBeInstanceOf'](_0x5b8b28);
        }), it('should\x20return\x20new\x20instance\x20when\x20there\x20is\x20no\x20Offcanvas\x20instance', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x244e91 = _0x1770e4['querySelector']('div');
            expect(_0x5b8b28['getInstance'](_0x244e91))['toEqual'](null), expect(_0x5b8b28['getOrCreateInstance'](_0x244e91))['toBeInstanceOf'](_0x5b8b28);
        }), it('should\x20return\x20new\x20instance\x20when\x20there\x20is\x20no\x20offcanvas\x20instance\x20with\x20given\x20configuration', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x44e9ce = _0x1770e4['querySelector']('div');
            expect(_0x5b8b28['getInstance'](_0x44e9ce))['toEqual'](null);
            const _0x4fae56 = _0x5b8b28['getOrCreateInstance'](_0x44e9ce, { 'scroll': !![] });
            expect(_0x4fae56)['toBeInstanceOf'](_0x5b8b28), expect(_0x4fae56['_config']['scroll'])['toEqual'](!![]);
        }), it('should\x20return\x20the\x20instance\x20when\x20exists\x20without\x20given\x20configuration', () => {
            _0x1770e4['innerHTML'] = '<div></div>';
            const _0x175006 = _0x1770e4['querySelector']('div'), _0x62e4a7 = new _0x5b8b28(_0x175006, { 'scroll': !![] });
            expect(_0x5b8b28['getInstance'](_0x175006))['toEqual'](_0x62e4a7);
            const _0x1b6468 = _0x5b8b28['getOrCreateInstance'](_0x175006, { 'scroll': ![] });
            expect(_0x62e4a7)['toBeInstanceOf'](_0x5b8b28), expect(_0x1b6468)['toEqual'](_0x62e4a7), expect(_0x1b6468['_config']['scroll'])['toEqual'](!![]);
        });
    });
});
