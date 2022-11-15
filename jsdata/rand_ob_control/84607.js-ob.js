import _0x7188d7 from '../../src/offcanvas';
import _0x5344c5 from '../../src/dom/event-handler';
import {
    clearBodyAndDocument,
    clearFixture,
    createEvent,
    getFixture,
    jQueryMock
} from '../helpers/fixture';
import { isVisible } from '../../src/util';
import _0x205dfd from '../../src/util/scrollbar';
describe('Offcanvas', () => {
    const _0x2782b2 = {
        'AuHMl': function (_0xf9bada) {
            return _0xf9bada();
        },
        'twVPR': function (_0x25b6dd) {
            return _0x25b6dd();
        },
        'izbsQ': 'offcanvas-open',
        'JMiRS': function (_0x90a42d, _0x1e6f34) {
            return _0x90a42d(_0x1e6f34);
        },
        'PQpIB': function (_0xff89d3, _0x19d199, _0x58d6a9) {
            return _0xff89d3(_0x19d199, _0x58d6a9);
        },
        'DxabT': 'should\x20return\x20plugin\x20version',
        'uqUtm': 'should\x20return\x20plugin\x20default\x20config',
        'LxUku': function (_0x216919, _0x275648) {
            return _0x216919(_0x275648);
        },
        'ugDFW': 'bs.offcanvas',
        'BPqVy': 'should\x20return\x20plugin\x20data\x20key',
        'aVxXt': '<div\x20class=\x22offcanvas\x22></div>',
        'viwdV': '.offcanvas',
        'XqyRV': 'keydown',
        'GpWUv': 'Escape',
        'DEsHJ': function (_0xb269f5, _0x1f5431, _0x14ac07) {
            return _0xb269f5(_0x1f5431, _0x14ac07);
        },
        'GaDPi': 'hide',
        'WlMNh': function (_0x50ecaa, _0x51f5e2) {
            return _0x50ecaa(_0x51f5e2);
        },
        'cDxDl': 'Tab',
        'lJipc': function (_0x1e3653, _0x2f5bbb) {
            return _0x1e3653(_0x2f5bbb);
        },
        'ythmH': function (_0x27aac8, _0x5728e2) {
            return _0x27aac8(_0x5728e2);
        },
        'ClrCp': function (_0xb0b210, _0x4a1ec4) {
            return _0xb0b210(_0x4a1ec4);
        },
        'PqWad': '<div\x20class=\x22offcanvas\x22>',
        'WFzzD': '\x20\x20<a\x20href=\x22#\x22\x20data-bs-dismiss=\x22offcanvas\x22>Close</a>',
        'wGxaX': '</div>',
        'XwlUd': function (_0x4ee64a, _0x2e6a55, _0x373dec) {
            return _0x4ee64a(_0x2e6a55, _0x373dec);
        },
        'pdcdi': 'should\x20call\x20hide\x20when\x20a\x20element\x20with\x20data-bs-dismiss=\x22offcanvas\x22\x20is\x20clicked',
        'Lwpwn': 'should\x20hide\x20if\x20esc\x20is\x20pressed',
        'zuLeo': function (_0x2c2bdd, _0x59d088, _0x45e393) {
            return _0x2c2bdd(_0x59d088, _0x45e393);
        },
        'VRCXq': 'should\x20not\x20hide\x20if\x20esc\x20is\x20not\x20pressed',
        'SrQDJ': 'should\x20not\x20hide\x20if\x20esc\x20is\x20pressed\x20but\x20with\x20keyboard\x20=\x20false',
        'jukZA': '<div\x20class=\x22offcanvas\x22\x20data-bs-scroll=\x22true\x22\x20data-bs-backdrop=\x22false\x22\x20\x20data-bs-keyboard=\x22false\x22>',
        'cnTsI': function (_0x4cb3e9, _0x4953ca) {
            return _0x4cb3e9(_0x4953ca);
        },
        'DUGOV': function (_0x17291e, _0x5cf461) {
            return _0x17291e(_0x5cf461);
        },
        'orpko': function (_0x5de474, _0x4f3f08) {
            return _0x5de474(_0x4f3f08);
        },
        'OWGEZ': function (_0x27be1b, _0x501266) {
            return _0x27be1b(_0x501266);
        },
        'DFMOu': function (_0x5f25c5, _0x4b8345) {
            return _0x5f25c5(_0x4b8345);
        },
        'zvhvL': function (_0x33eabf, _0x3277db) {
            return _0x33eabf(_0x3277db);
        },
        'gcfrj': function (_0x81fc58, _0x22ba75) {
            return _0x81fc58(_0x22ba75);
        },
        'SEYrg': function (_0x41122f, _0x333cf2, _0x204fa4) {
            return _0x41122f(_0x333cf2, _0x204fa4);
        },
        'QRWLB': 'should\x20have\x20default\x20values',
        'Dlcmp': function (_0x3008f0, _0x563235, _0x415265) {
            return _0x3008f0(_0x563235, _0x415265);
        },
        'NAiwf': 'should\x20read\x20data\x20attributes\x20and\x20override\x20default\x20config',
        'gezff': function (_0x10922e, _0x421d10, _0x28615) {
            return _0x10922e(_0x421d10, _0x28615);
        },
        'onTLY': 'given\x20a\x20config\x20object\x20must\x20override\x20data\x20attributes',
        'hMJYf': function (_0x55dfca, _0x2c0e31, _0x15b09a) {
            return _0x55dfca(_0x2c0e31, _0x15b09a);
        },
        'XuwgS': function (_0x1b7742, _0x53e877, _0xc4670a) {
            return _0x1b7742(_0x53e877, _0xc4670a);
        },
        'JgEnU': 'reset',
        'tYQjg': 'shown.bs.offcanvas',
        'kVPsJ': 'hidden.bs.offcanvas',
        'oBZXN': function (_0x50f398, _0x3bc3d8) {
            return _0x50f398(_0x3bc3d8);
        },
        'HmTQf': 'function',
        'yDkYu': 'div',
        'ynKCH': 'MouseEvents',
        'WrDvj': 'mousedown',
        'OIDRy': function (_0x76ffb9, _0x141673, _0x50d234) {
            return _0x76ffb9(_0x141673, _0x50d234);
        },
        'emRkq': 'clickCallback',
        'WwbFz': function (_0x19deff, _0x4c9ac5) {
            return _0x19deff(_0x4c9ac5);
        },
        'FWoLA': function (_0x9ac1f2, _0x439bbc, _0x102f0d) {
            return _0x9ac1f2(_0x439bbc, _0x102f0d);
        },
        'OOLXX': function (_0x33dc1a, _0x27cb21) {
            return _0x33dc1a(_0x27cb21);
        },
        'CLZAQ': function (_0x297f6b) {
            return _0x297f6b();
        },
        'ofGBM': 'activate',
        'FtGPs': function (_0x579980, _0x3c34c6, _0x58b4b7) {
            return _0x579980(_0x3c34c6, _0x58b4b7);
        },
        'wYCRE': 'if\x20scroll\x20is\x20enabled,\x20should\x20allow\x20body\x20to\x20scroll\x20while\x20offcanvas\x20is\x20open',
        'bDeyk': 'if\x20scroll\x20is\x20disabled,\x20should\x20call\x20ScrollBarHelper\x20to\x20handle\x20scrollBar\x20on\x20body',
        'JPwvi': function (_0x2f46d2, _0x5e9f2b, _0x56404d) {
            return _0x2f46d2(_0x5e9f2b, _0x56404d);
        },
        'RRJaA': 'should\x20hide\x20a\x20shown\x20element\x20if\x20user\x20click\x20on\x20backdrop',
        'MgoBG': function (_0xad3a42, _0x3b7f7a, _0x26dbb3) {
            return _0xad3a42(_0x3b7f7a, _0x26dbb3);
        },
        'qVtFs': 'should\x20not\x20trap\x20focus\x20if\x20scroll\x20is\x20allowed',
        'Odllr': function (_0x42c38d, _0x4ca8f4) {
            return _0x42c38d(_0x4ca8f4);
        },
        'otETC': 'show',
        'uUXAT': function (_0x51d3c5, _0x515046) {
            return _0x51d3c5(_0x515046);
        },
        'aiNhz': function (_0x27e8db, _0x6795e, _0x3629e7) {
            return _0x27e8db(_0x6795e, _0x3629e7);
        },
        'mtoJx': function (_0x8ac2dd, _0x1271e2) {
            return _0x8ac2dd(_0x1271e2);
        },
        'EizmA': function (_0x2646a3, _0x1773be, _0x40dd0f) {
            return _0x2646a3(_0x1773be, _0x40dd0f);
        },
        'WQsvW': 'should\x20call\x20show\x20method\x20if\x20show\x20class\x20is\x20not\x20present',
        'MfLxz': function (_0x3d678d, _0x398b92, _0xf08cc1) {
            return _0x3d678d(_0x398b92, _0xf08cc1);
        },
        'STSNU': 'should\x20call\x20hide\x20method\x20if\x20show\x20class\x20is\x20present',
        'BMfmB': function (_0x515da1, _0x46dcca) {
            return _0x515da1(_0x46dcca);
        },
        'rIbgE': function (_0x4d0120, _0x4acaa5) {
            return _0x4d0120(_0x4acaa5);
        },
        'knrNU': function (_0x19f1e5) {
            return _0x19f1e5();
        },
        'nbivd': function (_0x4c3d44, _0x2ede45, _0x3ff51a) {
            return _0x4c3d44(_0x2ede45, _0x3ff51a);
        },
        'DhgGc': 'should\x20not\x20fire\x20shown\x20event',
        'AomZY': 'show.bs.offcanvas',
        'lmCRF': '<div\x20class=\x22offcanvas\x20show\x22></div>',
        'MjFVd': function (_0x53f87c, _0x5cff03, _0x1dbb66) {
            return _0x53f87c(_0x5cff03, _0x1dbb66);
        },
        'QCLiB': 'trigger',
        'STevW': function (_0x109c8b) {
            return _0x109c8b();
        },
        'wrWbh': 'load',
        'lyxJT': function (_0x16224c, _0x22904f, _0x147d6a) {
            return _0x16224c(_0x22904f, _0x147d6a);
        },
        'gfvik': 'should\x20do\x20nothing\x20if\x20already\x20shown',
        'HSNGX': 'should\x20show\x20a\x20hidden\x20element',
        'TkRqo': function (_0x25c783, _0x10d594, _0x2414e4) {
            return _0x25c783(_0x10d594, _0x2414e4);
        },
        'xHGpC': 'should\x20not\x20fire\x20shown\x20when\x20show\x20is\x20prevented',
        'VmbnC': function (_0x4e0ade, _0x2606cd, _0x173acd) {
            return _0x4e0ade(_0x2606cd, _0x173acd);
        },
        'hOgAR': 'on\x20window\x20load,\x20should\x20make\x20visible\x20an\x20offcanvas\x20element,\x20if\x20its\x20markup\x20contains\x20class\x20\x22show\x22',
        'rVfuT': 'should\x20trap\x20focus',
        'wQNjL': function (_0x9b79fd, _0x1bf0cc, _0x20246b) {
            return _0x9b79fd(_0x1bf0cc, _0x20246b);
        },
        'ZBzxf': function (_0x26cb1f, _0x317182) {
            return _0x26cb1f(_0x317182);
        },
        'IkhPI': function (_0x3ff836) {
            return _0x3ff836();
        },
        'tczjw': 'should\x20not\x20fire\x20hidden\x20event',
        'kCldH': function (_0x5154c0, _0x1288ca, _0x2bae81) {
            return _0x5154c0(_0x1288ca, _0x2bae81);
        },
        'woGen': 'hide.bs.offcanvas',
        'TeMTY': function (_0x22b4d8, _0x5ef70f) {
            return _0x22b4d8(_0x5ef70f);
        },
        'hfbBN': function (_0x13dde9, _0x2149e3) {
            return _0x13dde9(_0x2149e3);
        },
        'tJgmj': function (_0x255e2d) {
            return _0x255e2d();
        },
        'qNvPD': function (_0x52304d, _0x471cd7, _0x3ee534) {
            return _0x52304d(_0x471cd7, _0x3ee534);
        },
        'PfDRE': 'deactivate',
        'cpjjW': 'should\x20hide\x20a\x20shown\x20element',
        'SPNOH': 'should\x20not\x20fire\x20hidden\x20when\x20hide\x20is\x20prevented',
        'yMPYn': 'should\x20release\x20focus\x20trap',
        'ooCur': 'dispose',
        'IFGEb': function (_0x22f030, _0x3dc605, _0x2e49ba) {
            return _0x22f030(_0x3dc605, _0x2e49ba);
        },
        'UMqsj': function (_0x291407, _0x356407) {
            return _0x291407(_0x356407);
        },
        'jMNCs': function (_0x378753, _0x5c9e10, _0x326cc3) {
            return _0x378753(_0x5c9e10, _0x326cc3);
        },
        'Cqiqs': 'off',
        'bFybi': function (_0x52911c, _0x6428cd) {
            return _0x52911c(_0x6428cd);
        },
        'mzlTa': function (_0xc85b65, _0x43dea4) {
            return _0xc85b65(_0x43dea4);
        },
        'CXgsl': function (_0x4ae98a, _0x3097fe) {
            return _0x4ae98a(_0x3097fe);
        },
        'bFePv': function (_0x2f1eff, _0x57c73f, _0x1e5d57) {
            return _0x2f1eff(_0x57c73f, _0x1e5d57);
        },
        'OCSYR': 'should\x20dispose\x20an\x20offcanvas',
        'gzdAB': '<input\x20type=\x22checkbox\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvasdiv1\x22\x20/>',
        'kvGhb': '<div\x20id=\x22offcanvasdiv1\x22\x20class=\x22offcanvas\x22></div>',
        'ADYfx': 'input',
        'oQSWh': '#offcanvasdiv1',
        'JAfTD': '<a\x20href=\x22#\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvasdiv1\x22\x20class=\x22disabled\x22></a>',
        'wBsza': function (_0xea1382, _0x29563e, _0x168219) {
            return _0xea1382(_0x29563e, _0x168219);
        },
        'umFcs': 'toggle',
        'RXRgE': function (_0x501c06, _0x40f5df) {
            return _0x501c06(_0x40f5df);
        },
        'ZWWIx': function (_0x2170fe, _0x3376c0) {
            return _0x2170fe(_0x3376c0);
        },
        'kYPWj': function (_0x18fa37) {
            return _0x18fa37();
        },
        'GkHTk': '<button\x20id=\x22btn2\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvas2\x22\x20></button>',
        'FbaaH': '<div\x20id=\x22offcanvas1\x22\x20class=\x22offcanvas\x22></div>',
        'QrKYC': '<div\x20id=\x22offcanvas2\x22\x20class=\x22offcanvas\x22></div>',
        'TGoqG': '#btn2',
        'sEjYP': '#offcanvas1',
        'NvlCz': '#offcanvas2',
        'BKOMq': function (_0xdbb747) {
            return _0xdbb747();
        },
        'evzoU': '<button\x20id=\x22btn\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvas\x22\x20></button>',
        'iipUc': '<div\x20id=\x22offcanvas\x22\x20class=\x22offcanvas\x22></div>',
        'OJMov': '#btn',
        'HqTqD': '#offcanvas',
        'sHAum': 'focus',
        'LiEcp': 'none',
        'PrcJK': function (_0x3db1fb, _0xd2b704, _0x54aaf6) {
            return _0x3db1fb(_0xd2b704, _0x54aaf6);
        },
        'HZbtE': 'should\x20not\x20prevent\x20event\x20for\x20input',
        'saHXV': function (_0x3acaa7, _0x1882c0, _0x39fee1) {
            return _0x3acaa7(_0x1882c0, _0x39fee1);
        },
        'ZUyFc': 'should\x20not\x20call\x20toggle\x20on\x20disabled\x20elements',
        'LYdWv': 'should\x20call\x20hide\x20first,\x20if\x20another\x20offcanvas\x20is\x20open',
        'QfAzR': 'should\x20focus\x20on\x20trigger\x20element\x20after\x20closing\x20offcanvas',
        'hsCaT': 'should\x20not\x20focus\x20on\x20trigger\x20element\x20after\x20closing\x20offcanvas,\x20if\x20it\x20is\x20not\x20visible',
        'eeTXU': '<div></div>',
        'sRnpT': function (_0x461cda, _0x288d5c) {
            return _0x461cda(_0x288d5c);
        },
        'OykrX': 'undefinedMethod',
        'ibSsK': '_getConfig',
        'RuEYs': 'constructor',
        'apoJl': function (_0x30b1b6, _0x42ba7e, _0x286596) {
            return _0x30b1b6(_0x42ba7e, _0x286596);
        },
        'VjiRR': function (_0x5b43d1, _0x2afe0f) {
            return _0x5b43d1(_0x2afe0f);
        },
        'uJwxv': 'should\x20create\x20an\x20offcanvas',
        'bhVph': 'should\x20not\x20re\x20create\x20an\x20offcanvas',
        'dXyhc': 'should\x20throw\x20error\x20on\x20undefined\x20method',
        'nUvsb': 'should\x20throw\x20error\x20on\x20protected\x20method',
        'nINdL': 'should\x20throw\x20error\x20if\x20method\x20\x22constructor\x22\x20is\x20being\x20called',
        'oaDnq': function (_0x17800a, _0x13e79c, _0x3e02db) {
            return _0x17800a(_0x13e79c, _0x3e02db);
        },
        'zNwCy': 'should\x20call\x20offcanvas\x20method',
        'TvnhT': function (_0x5957db, _0x1d831b, _0x352645) {
            return _0x5957db(_0x1d831b, _0x352645);
        },
        'equIh': 'should\x20create\x20a\x20offcanvas\x20with\x20given\x20config',
        'cuQWw': function (_0x42ae09, _0x43778e) {
            return _0x42ae09(_0x43778e);
        },
        'GDrYo': 'should\x20return\x20offcanvas\x20instance',
        'hVQkg': 'should\x20return\x20null\x20when\x20there\x20is\x20no\x20offcanvas\x20instance',
        'KXgZM': function (_0x5ea41c, _0x50bccb) {
            return _0x5ea41c(_0x50bccb);
        },
        'ySMcG': function (_0x9243f, _0x15e27d) {
            return _0x9243f(_0x15e27d);
        },
        'jRCYN': function (_0x4a1b03, _0x308605) {
            return _0x4a1b03(_0x308605);
        },
        'bXCYq': function (_0xb4e15e, _0x2816e8, _0x4da9ee) {
            return _0xb4e15e(_0x2816e8, _0x4da9ee);
        },
        'hJsOh': 'should\x20return\x20new\x20instance\x20when\x20there\x20is\x20no\x20Offcanvas\x20instance',
        'feKxW': function (_0x144fe8, _0x505056, _0x2cbf45) {
            return _0x144fe8(_0x505056, _0x2cbf45);
        },
        'XFCgE': 'should\x20return\x20new\x20instance\x20when\x20there\x20is\x20no\x20offcanvas\x20instance\x20with\x20given\x20configuration',
        'wgyto': function (_0x5edb52, _0x47b727, _0x3564f2) {
            return _0x5edb52(_0x47b727, _0x3564f2);
        },
        'LVSzS': 'should\x20return\x20the\x20instance\x20when\x20exists\x20without\x20given\x20configuration',
        'fFfPC': function (_0x22cb09, _0x364ea8) {
            return _0x22cb09(_0x364ea8);
        },
        'JnhYg': 'VERSION',
        'ocYRl': function (_0x2f23f3, _0x1905ea, _0x390ed1) {
            return _0x2f23f3(_0x1905ea, _0x390ed1);
        },
        'wpcfD': 'Default',
        'xDtMx': function (_0x2e82a7, _0x2af53b, _0x4abcbe) {
            return _0x2e82a7(_0x2af53b, _0x4abcbe);
        },
        'xutuL': 'DATA_KEY',
        'QZBbj': function (_0x857b1b, _0x31d271, _0x546db0) {
            return _0x857b1b(_0x31d271, _0x546db0);
        },
        'mNuxz': 'config',
        'saJnn': 'options',
        'zyVgw': function (_0x37f1b, _0x301ac9, _0x2d7e1c) {
            return _0x37f1b(_0x301ac9, _0x2d7e1c);
        },
        'lRAgP': function (_0x329a79, _0x42ada0, _0x16a77d) {
            return _0x329a79(_0x42ada0, _0x16a77d);
        },
        'xQHUp': function (_0x4d47ac, _0xf1ee22, _0x199235) {
            return _0x4d47ac(_0xf1ee22, _0x199235);
        },
        'yYDVp': function (_0x24b1a6, _0x2b4f22, _0x2b8485) {
            return _0x24b1a6(_0x2b4f22, _0x2b8485);
        },
        'eHNIN': function (_0x46acdd, _0x26d78c, _0x401c69) {
            return _0x46acdd(_0x26d78c, _0x401c69);
        },
        'mLwmA': 'data-api',
        'QfkQJ': function (_0x5e1289, _0x2d9223, _0x1f61fb) {
            return _0x5e1289(_0x2d9223, _0x1f61fb);
        },
        'msGQZ': 'jQueryInterface',
        'Sgcvr': function (_0x15799d, _0x27b772, _0x317e29) {
            return _0x15799d(_0x27b772, _0x317e29);
        },
        'BHtoo': 'getInstance',
        'TEMcn': 'getOrCreateInstance'
    };
    let _0x19185f;
    _0x2782b2['fFfPC'](beforeAll, () => {
        _0x19185f = _0x2782b2['AuHMl'](getFixture);
    }), _0x2782b2['fFfPC'](afterEach, () => {
        _0x2782b2['twVPR'](clearFixture), document['body']['classList']['remove'](_0x2782b2['izbsQ']), _0x2782b2['twVPR'](clearBodyAndDocument);
    }), _0x2782b2['fFfPC'](beforeEach, () => {
        _0x2782b2['twVPR'](clearBodyAndDocument);
    }), _0x2782b2['wgyto'](describe, _0x2782b2['JnhYg'], () => {
        _0x2782b2['PQpIB'](it, _0x2782b2['DxabT'], () => {
            _0x2782b2['JMiRS'](expect, _0x7188d7['VERSION'])['toEqual'](jasmine['any'](String));
        });
    }), _0x2782b2['ocYRl'](describe, _0x2782b2['wpcfD'], () => {
        _0x2782b2['PQpIB'](it, _0x2782b2['uqUtm'], () => {
            _0x2782b2['JMiRS'](expect, _0x7188d7['Default'])['toEqual'](jasmine['any'](Object));
        });
    }), _0x2782b2['xDtMx'](describe, _0x2782b2['xutuL'], () => {
        _0x2782b2['PQpIB'](it, _0x2782b2['BPqVy'], () => {
            _0x2782b2['LxUku'](expect, _0x7188d7['DATA_KEY'])['toEqual'](_0x2782b2['ugDFW']);
        });
    }), _0x2782b2['QZBbj'](describe, _0x2782b2['RuEYs'], () => {
        const _0x26974b = {
            'rZBOA': _0x2782b2['PqWad'],
            'BynXp': _0x2782b2['WFzzD'],
            'UKRkx': _0x2782b2['wGxaX'],
            'gCNKt': _0x2782b2['viwdV'],
            'BxYgq': function (_0x5e6b1c, _0x34b48d, _0x58063e) {
                return _0x2782b2['XwlUd'](_0x5e6b1c, _0x34b48d, _0x58063e);
            },
            'mVZOL': _0x2782b2['GaDPi'],
            'ZkJTX': function (_0x383816, _0x23a447) {
                return _0x2782b2['ClrCp'](_0x383816, _0x23a447);
            },
            'dcSLO': function (_0x4d320e, _0x11c271) {
                return _0x2782b2['ClrCp'](_0x4d320e, _0x11c271);
            }
        };
        _0x2782b2['XwlUd'](it, _0x2782b2['pdcdi'], () => {
            _0x19185f['innerHTML'] = [
                _0x26974b['rZBOA'],
                _0x26974b['BynXp'],
                _0x26974b['UKRkx']
            ]['join']('');
            const _0x3ae74d = _0x19185f['querySelector'](_0x26974b['gCNKt']), _0x55b5d7 = _0x19185f['querySelector']('a'), _0x50519c = new _0x7188d7(_0x3ae74d);
            _0x26974b['BxYgq'](spyOn, _0x50519c, _0x26974b['mVZOL']), _0x55b5d7['click'](), _0x26974b['ZkJTX'](expect, _0x50519c['_config']['keyboard'])['toBe'](!![]), _0x26974b['dcSLO'](expect, _0x50519c['hide'])['toHaveBeenCalled']();
        }), _0x2782b2['XwlUd'](it, _0x2782b2['Lwpwn'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x141e1c = _0x19185f['querySelector'](_0x2782b2['viwdV']), _0x57c521 = new _0x7188d7(_0x141e1c), _0x3b83a2 = _0x2782b2['LxUku'](createEvent, _0x2782b2['XqyRV']);
            _0x3b83a2['key'] = _0x2782b2['GpWUv'], _0x2782b2['DEsHJ'](spyOn, _0x57c521, _0x2782b2['GaDPi']), _0x141e1c['dispatchEvent'](_0x3b83a2), _0x2782b2['WlMNh'](expect, _0x57c521['hide'])['toHaveBeenCalled']();
        }), _0x2782b2['zuLeo'](it, _0x2782b2['VRCXq'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x29978f = _0x19185f['querySelector'](_0x2782b2['viwdV']), _0x54bf5b = new _0x7188d7(_0x29978f), _0x50b8df = _0x2782b2['WlMNh'](createEvent, _0x2782b2['XqyRV']);
            _0x50b8df['key'] = _0x2782b2['cDxDl'], _0x2782b2['DEsHJ'](spyOn, _0x54bf5b, _0x2782b2['GaDPi']), document['dispatchEvent'](_0x50b8df), _0x2782b2['lJipc'](expect, _0x54bf5b['hide'])['not']['toHaveBeenCalled']();
        }), _0x2782b2['zuLeo'](it, _0x2782b2['SrQDJ'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x38e6a4 = _0x19185f['querySelector'](_0x2782b2['viwdV']), _0x4150b4 = new _0x7188d7(_0x38e6a4, { 'keyboard': ![] }), _0x3f73ad = _0x2782b2['ythmH'](createEvent, _0x2782b2['XqyRV']);
            _0x3f73ad['key'] = _0x2782b2['GpWUv'], _0x2782b2['DEsHJ'](spyOn, _0x4150b4, _0x2782b2['GaDPi']), document['dispatchEvent'](_0x3f73ad), _0x2782b2['ClrCp'](expect, _0x4150b4['_config']['keyboard'])['toBe'](![]), _0x2782b2['ClrCp'](expect, _0x4150b4['hide'])['not']['toHaveBeenCalled']();
        });
    }), _0x2782b2['QZBbj'](describe, _0x2782b2['mNuxz'], () => {
        const _0x157c6c = {
            'dTflQ': _0x2782b2['PqWad'],
            'ZlQdL': _0x2782b2['wGxaX'],
            'IntzH': _0x2782b2['viwdV'],
            'LaedN': function (_0x563b9a, _0x581abb) {
                return _0x2782b2['OWGEZ'](_0x563b9a, _0x581abb);
            },
            'UdtHh': function (_0xf9faa1, _0x4babf8) {
                return _0x2782b2['DFMOu'](_0xf9faa1, _0x4babf8);
            },
            'MEqYV': function (_0x2382fd, _0x494efe) {
                return _0x2782b2['DFMOu'](_0x2382fd, _0x494efe);
            },
            'Gwfbp': _0x2782b2['jukZA'],
            'lXzYf': function (_0x4c48c3, _0x5e4641) {
                return _0x2782b2['zvhvL'](_0x4c48c3, _0x5e4641);
            },
            'FUyeq': function (_0x2315b4, _0x75b8b6) {
                return _0x2782b2['gcfrj'](_0x2315b4, _0x75b8b6);
            },
            'CunGA': function (_0x16f365, _0x59139e) {
                return _0x2782b2['gcfrj'](_0x16f365, _0x59139e);
            },
            'glyxT': function (_0x530ac9, _0x52b127) {
                return _0x2782b2['gcfrj'](_0x530ac9, _0x52b127);
            }
        };
        _0x2782b2['SEYrg'](it, _0x2782b2['QRWLB'], () => {
            _0x19185f['innerHTML'] = [
                _0x157c6c['dTflQ'],
                _0x157c6c['ZlQdL']
            ]['join']('');
            const _0x5d1c52 = _0x19185f['querySelector'](_0x157c6c['IntzH']), _0x3f4dd8 = new _0x7188d7(_0x5d1c52);
            _0x157c6c['LaedN'](expect, _0x3f4dd8['_config']['backdrop'])['toEqual'](!![]), _0x157c6c['UdtHh'](expect, _0x3f4dd8['_backdrop']['_config']['isVisible'])['toEqual'](!![]), _0x157c6c['MEqYV'](expect, _0x3f4dd8['_config']['keyboard'])['toEqual'](!![]), _0x157c6c['MEqYV'](expect, _0x3f4dd8['_config']['scroll'])['toEqual'](![]);
        }), _0x2782b2['Dlcmp'](it, _0x2782b2['NAiwf'], () => {
            _0x19185f['innerHTML'] = [
                _0x157c6c['Gwfbp'],
                _0x157c6c['ZlQdL']
            ]['join']('');
            const _0x50165e = _0x19185f['querySelector'](_0x157c6c['IntzH']), _0x4ea8e4 = new _0x7188d7(_0x50165e);
            _0x157c6c['lXzYf'](expect, _0x4ea8e4['_config']['backdrop'])['toEqual'](![]), _0x157c6c['FUyeq'](expect, _0x4ea8e4['_backdrop']['_config']['isVisible'])['toEqual'](![]), _0x157c6c['CunGA'](expect, _0x4ea8e4['_config']['keyboard'])['toEqual'](![]), _0x157c6c['glyxT'](expect, _0x4ea8e4['_config']['scroll'])['toEqual'](!![]);
        }), _0x2782b2['gezff'](it, _0x2782b2['onTLY'], () => {
            _0x19185f['innerHTML'] = [
                _0x2782b2['jukZA'],
                _0x2782b2['wGxaX']
            ]['join']('');
            const _0x260813 = _0x19185f['querySelector'](_0x2782b2['viwdV']), _0x421e9b = new _0x7188d7(_0x260813, {
                    'backdrop': !![],
                    'keyboard': !![],
                    'scroll': ![]
                });
            _0x2782b2['cnTsI'](expect, _0x421e9b['_config']['backdrop'])['toEqual'](!![]), _0x2782b2['DUGOV'](expect, _0x421e9b['_config']['keyboard'])['toEqual'](!![]), _0x2782b2['orpko'](expect, _0x421e9b['_config']['scroll'])['toEqual'](![]);
        });
    }), _0x2782b2['QZBbj'](describe, _0x2782b2['saJnn'], () => {
        const _0xc49a5c = {
            'bxCyc': function (_0x11d2db, _0x349a6b) {
                return _0x2782b2['WwbFz'](_0x11d2db, _0x349a6b);
            },
            'ysXRH': function (_0x44765a) {
                return _0x2782b2['twVPR'](_0x44765a);
            },
            'tIyMk': _0x2782b2['aVxXt'],
            'lCAwh': function (_0x248e1e, _0x1f86d8, _0x531033) {
                return _0x2782b2['FWoLA'](_0x248e1e, _0x1f86d8, _0x531033);
            },
            'oFtnG': _0x2782b2['GaDPi'],
            'mbxWz': _0x2782b2['JgEnU'],
            'yFloh': _0x2782b2['viwdV'],
            'IXAYh': _0x2782b2['tYQjg'],
            'ZufmW': _0x2782b2['kVPsJ'],
            'WbZlt': function (_0x22732e, _0x12b981) {
                return _0x2782b2['OOLXX'](_0x22732e, _0x12b981);
            },
            'Egmkp': function (_0x34e807) {
                return _0x2782b2['CLZAQ'](_0x34e807);
            },
            'lhJFE': function (_0x1540ff) {
                return _0x2782b2['CLZAQ'](_0x1540ff);
            },
            'axFAX': _0x2782b2['ofGBM']
        };
        _0x2782b2['FtGPs'](it, _0x2782b2['wYCRE'], _0x540b81 => {
            const _0x37dc1f = {
                'YucTk': function (_0x207475, _0x57a253) {
                    return _0xc49a5c['bxCyc'](_0x207475, _0x57a253);
                },
                'iOlEH': function (_0x557ab9) {
                    return _0xc49a5c['ysXRH'](_0x557ab9);
                }
            };
            _0x19185f['innerHTML'] = _0xc49a5c['tIyMk'], _0xc49a5c['lCAwh'](spyOn, _0x205dfd['prototype'], _0xc49a5c['oFtnG'])['and']['callThrough'](), _0xc49a5c['lCAwh'](spyOn, _0x205dfd['prototype'], _0xc49a5c['mbxWz'])['and']['callThrough']();
            const _0x31b08e = _0x19185f['querySelector'](_0xc49a5c['yFloh']), _0x4bdedf = new _0x7188d7(_0x31b08e, { 'scroll': !![] });
            _0x31b08e['addEventListener'](_0xc49a5c['IXAYh'], () => {
                _0xc49a5c['bxCyc'](expect, _0x205dfd['prototype']['hide'])['not']['toHaveBeenCalled'](), _0x4bdedf['hide']();
            }), _0x31b08e['addEventListener'](_0xc49a5c['ZufmW'], () => {
                _0x37dc1f['YucTk'](expect, _0x205dfd['prototype']['reset'])['not']['toHaveBeenCalled'](), _0x37dc1f['iOlEH'](_0x540b81);
            }), _0x4bdedf['show']();
        }), _0x2782b2['FtGPs'](it, _0x2782b2['bDeyk'], _0x4b6ce9 => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'], _0x2782b2['hMJYf'](spyOn, _0x205dfd['prototype'], _0x2782b2['GaDPi'])['and']['callThrough'](), _0x2782b2['XuwgS'](spyOn, _0x205dfd['prototype'], _0x2782b2['JgEnU'])['and']['callThrough']();
            const _0x5b150e = _0x19185f['querySelector'](_0x2782b2['viwdV']), _0x2c933a = new _0x7188d7(_0x5b150e, { 'scroll': ![] });
            _0x5b150e['addEventListener'](_0x2782b2['tYQjg'], () => {
                _0xc49a5c['WbZlt'](expect, _0x205dfd['prototype']['hide'])['toHaveBeenCalled'](), _0x2c933a['hide']();
            }), _0x5b150e['addEventListener'](_0x2782b2['kVPsJ'], () => {
                _0xc49a5c['WbZlt'](expect, _0x205dfd['prototype']['reset'])['toHaveBeenCalled'](), _0xc49a5c['Egmkp'](_0x4b6ce9);
            }), _0x2c933a['show']();
        }), _0x2782b2['JPwvi'](it, _0x2782b2['RRJaA'], _0x959c8e => {
            const _0x16264c = {
                'FxRPg': function (_0x30115f, _0x285686) {
                    return _0x2782b2['oBZXN'](_0x30115f, _0x285686);
                },
                'XCzRh': _0x2782b2['HmTQf'],
                'HHLOK': function (_0x5d6f24) {
                    return _0x2782b2['twVPR'](_0x5d6f24);
                }
            };
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x55f33f = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0x42e2a8 = new _0x7188d7(_0x55f33f, { 'backdrop': !![] }), _0x2c2eda = document['createEvent'](_0x2782b2['ynKCH']);
            _0x2c2eda['initEvent'](_0x2782b2['WrDvj'], !![], !![]), _0x2782b2['OIDRy'](spyOn, _0x42e2a8['_backdrop']['_config'], _0x2782b2['emRkq'])['and']['callThrough'](), _0x55f33f['addEventListener'](_0x2782b2['tYQjg'], () => {
                _0x16264c['FxRPg'](expect, typeof _0x42e2a8['_backdrop']['_config']['clickCallback'])['toBe'](_0x16264c['XCzRh']), _0x42e2a8['_backdrop']['_getElement']()['dispatchEvent'](_0x2c2eda);
            }), _0x55f33f['addEventListener'](_0x2782b2['kVPsJ'], () => {
                _0x16264c['FxRPg'](expect, _0x42e2a8['_backdrop']['_config']['clickCallback'])['toHaveBeenCalled'](), _0x16264c['HHLOK'](_0x959c8e);
            }), _0x42e2a8['show']();
        }), _0x2782b2['MgoBG'](it, _0x2782b2['qVtFs'], _0x27e780 => {
            const _0x289bfd = {
                'TfIUH': function (_0x1d4588, _0x116a08) {
                    return _0xc49a5c['WbZlt'](_0x1d4588, _0x116a08);
                },
                'JGzwq': function (_0x4e44df) {
                    return _0xc49a5c['lhJFE'](_0x4e44df);
                }
            };
            _0x19185f['innerHTML'] = _0xc49a5c['tIyMk'];
            const _0x327123 = _0x19185f['querySelector'](_0xc49a5c['yFloh']), _0x3eb807 = new _0x7188d7(_0x327123, { 'scroll': !![] });
            _0xc49a5c['lCAwh'](spyOn, _0x3eb807['_focustrap'], _0xc49a5c['axFAX'])['and']['callThrough'](), _0x327123['addEventListener'](_0xc49a5c['IXAYh'], () => {
                _0x289bfd['TfIUH'](expect, _0x3eb807['_focustrap']['activate'])['not']['toHaveBeenCalled'](), _0x289bfd['JGzwq'](_0x27e780);
            }), _0x3eb807['show']();
        });
    }), _0x2782b2['zyVgw'](describe, _0x2782b2['umFcs'], () => {
        const _0x497b95 = {
            'lUbea': _0x2782b2['aVxXt'],
            'EhIfw': _0x2782b2['viwdV'],
            'RREfw': function (_0x7fdd87, _0x188cb1, _0x433773) {
                return _0x2782b2['aiNhz'](_0x7fdd87, _0x188cb1, _0x433773);
            },
            'FHIxu': _0x2782b2['otETC'],
            'UpHZc': function (_0x5db5fd, _0x104f7d) {
                return _0x2782b2['mtoJx'](_0x5db5fd, _0x104f7d);
            }
        };
        _0x2782b2['EizmA'](it, _0x2782b2['WQsvW'], () => {
            _0x19185f['innerHTML'] = _0x497b95['lUbea'];
            const _0x18c61e = _0x19185f['querySelector'](_0x497b95['EhIfw']), _0x2c8b8f = new _0x7188d7(_0x18c61e);
            _0x497b95['RREfw'](spyOn, _0x2c8b8f, _0x497b95['FHIxu']), _0x2c8b8f['toggle'](), _0x497b95['UpHZc'](expect, _0x2c8b8f['show'])['toHaveBeenCalled']();
        }), _0x2782b2['MfLxz'](it, _0x2782b2['STSNU'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x147e82 = _0x19185f['querySelector'](_0x2782b2['viwdV']), _0x58d86e = new _0x7188d7(_0x147e82);
            _0x58d86e['show'](), _0x2782b2['Odllr'](expect, _0x147e82['classList']['contains'](_0x2782b2['otETC']))['toBe'](!![]), _0x2782b2['MgoBG'](spyOn, _0x58d86e, _0x2782b2['GaDPi']), _0x58d86e['toggle'](), _0x2782b2['uUXAT'](expect, _0x58d86e['hide'])['toHaveBeenCalled']();
        });
    }), _0x2782b2['lRAgP'](describe, _0x2782b2['otETC'], () => {
        const _0xefd3cc = {
            'aiQiB': _0x2782b2['lmCRF'],
            'REoMg': _0x2782b2['yDkYu'],
            'IBDYJ': function (_0x378038, _0x373752) {
                return _0x2782b2['rIbgE'](_0x378038, _0x373752);
            },
            'KnjCo': _0x2782b2['otETC'],
            'jddZD': function (_0x3c45e5, _0x535ec7, _0x100ba0) {
                return _0x2782b2['MjFVd'](_0x3c45e5, _0x535ec7, _0x100ba0);
            },
            'gQyJu': _0x2782b2['QCLiB'],
            'tXOWV': function (_0x57920d, _0x5a5322) {
                return _0x2782b2['rIbgE'](_0x57920d, _0x5a5322);
            },
            'XNzpf': function (_0x35cb62) {
                return _0x2782b2['STevW'](_0x35cb62);
            },
            'jCTGx': function (_0x5152be, _0x501f96, _0x2f8102) {
                return _0x2782b2['MjFVd'](_0x5152be, _0x501f96, _0x2f8102);
            },
            'fjgsp': _0x2782b2['tYQjg'],
            'QgoKR': _0x2782b2['wrWbh'],
            'tWpBl': function (_0x22b690, _0x48e3c2) {
                return _0x2782b2['rIbgE'](_0x22b690, _0x48e3c2);
            },
            'MkIJl': function (_0x36fb88, _0x357741) {
                return _0x2782b2['rIbgE'](_0x36fb88, _0x357741);
            },
            'ZEIIy': _0x2782b2['aVxXt'],
            'UGESn': _0x2782b2['viwdV'],
            'FVlwe': _0x2782b2['ofGBM']
        };
        _0x2782b2['lyxJT'](it, _0x2782b2['gfvik'], () => {
            _0x19185f['innerHTML'] = _0xefd3cc['aiQiB'];
            const _0x312eea = _0x19185f['querySelector'](_0xefd3cc['REoMg']), _0x5c99d1 = new _0x7188d7(_0x312eea);
            _0x5c99d1['show'](), _0xefd3cc['IBDYJ'](expect, _0x312eea['classList']['contains'](_0xefd3cc['KnjCo']))['toBe'](!![]), _0xefd3cc['jddZD'](spyOn, _0x5c99d1['_backdrop'], _0xefd3cc['KnjCo'])['and']['callThrough'](), _0xefd3cc['jddZD'](spyOn, _0x5344c5, _0xefd3cc['gQyJu'])['and']['callThrough'](), _0x5c99d1['show'](), _0xefd3cc['tXOWV'](expect, _0x5344c5['trigger'])['not']['toHaveBeenCalled'](), _0xefd3cc['tXOWV'](expect, _0x5c99d1['_backdrop']['show'])['not']['toHaveBeenCalled']();
        }), _0x2782b2['lyxJT'](it, _0x2782b2['HSNGX'], _0x596735 => {
            const _0xd5d7c4 = {
                'wiHTQ': function (_0x3e33e9, _0x33320e) {
                    return _0x2782b2['BMfmB'](_0x3e33e9, _0x33320e);
                },
                'EkgOX': _0x2782b2['otETC'],
                'BYwVk': function (_0x524e1b) {
                    return _0x2782b2['CLZAQ'](_0x524e1b);
                }
            };
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x30f582 = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0x12a412 = new _0x7188d7(_0x30f582);
            _0x2782b2['MfLxz'](spyOn, _0x12a412['_backdrop'], _0x2782b2['otETC'])['and']['callThrough'](), _0x30f582['addEventListener'](_0x2782b2['tYQjg'], () => {
                _0xd5d7c4['wiHTQ'](expect, _0x30f582['classList']['contains'](_0xd5d7c4['EkgOX']))['toEqual'](!![]), _0xd5d7c4['wiHTQ'](expect, _0x12a412['_backdrop']['show'])['toHaveBeenCalled'](), _0xd5d7c4['BYwVk'](_0x596735);
            }), _0x12a412['show']();
        }), _0x2782b2['TkRqo'](it, _0x2782b2['xHGpC'], _0x41ee8d => {
            const _0x59d070 = {
                'SthxP': function (_0x3387f0, _0x36628e) {
                    return _0x2782b2['rIbgE'](_0x3387f0, _0x36628e);
                },
                'byrEw': function (_0x527c55) {
                    return _0x2782b2['knrNU'](_0x527c55);
                },
                'gVcph': function (_0x3c6b11, _0x40e328, _0x5622af) {
                    return _0x2782b2['nbivd'](_0x3c6b11, _0x40e328, _0x5622af);
                },
                'sMgHs': _0x2782b2['DhgGc']
            };
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x11d943 = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0x3a25df = new _0x7188d7(_0x11d943);
            _0x2782b2['nbivd'](spyOn, _0x3a25df['_backdrop'], _0x2782b2['otETC'])['and']['callThrough']();
            const _0x5df290 = () => {
                _0x59d070['gVcph'](setTimeout, () => {
                    _0x59d070['SthxP'](expect, _0x3a25df['_backdrop']['show'])['not']['toHaveBeenCalled'](), _0x59d070['byrEw'](_0x41ee8d);
                }, 0xa);
            };
            _0x11d943['addEventListener'](_0x2782b2['AomZY'], _0x10191e => {
                _0x10191e['preventDefault'](), _0x59d070['byrEw'](_0x5df290);
            }), _0x11d943['addEventListener'](_0x2782b2['tYQjg'], () => {
                throw new Error(_0x59d070['sMgHs']);
            }), _0x3a25df['show']();
        }), _0x2782b2['VmbnC'](it, _0x2782b2['hOgAR'], _0x161c2d => {
            _0x19185f['innerHTML'] = _0xefd3cc['aiQiB'];
            const _0x21324c = _0x19185f['querySelector'](_0xefd3cc['REoMg']);
            _0xefd3cc['jCTGx'](spyOn, _0x7188d7['prototype'], _0xefd3cc['KnjCo'])['and']['callThrough'](), _0x21324c['addEventListener'](_0xefd3cc['fjgsp'], () => {
                _0xefd3cc['XNzpf'](_0x161c2d);
            }), window['dispatchEvent'](_0xefd3cc['tXOWV'](createEvent, _0xefd3cc['QgoKR']));
            const _0x1395a1 = _0x7188d7['getInstance'](_0x21324c);
            _0xefd3cc['tWpBl'](expect, _0x1395a1)['not']['toBeNull'](), _0xefd3cc['tWpBl'](expect, _0x7188d7['prototype']['show'])['toHaveBeenCalled']();
        }), _0x2782b2['VmbnC'](it, _0x2782b2['rVfuT'], _0x22f39c => {
            const _0x12577a = {
                'sXgWq': function (_0x124d15, _0x5e5d3d) {
                    return _0xefd3cc['MkIJl'](_0x124d15, _0x5e5d3d);
                },
                'TgwGF': function (_0xa341ed) {
                    return _0xefd3cc['XNzpf'](_0xa341ed);
                }
            };
            _0x19185f['innerHTML'] = _0xefd3cc['ZEIIy'];
            const _0x1c7716 = _0x19185f['querySelector'](_0xefd3cc['UGESn']), _0x372eab = new _0x7188d7(_0x1c7716);
            _0xefd3cc['jCTGx'](spyOn, _0x372eab['_focustrap'], _0xefd3cc['FVlwe'])['and']['callThrough'](), _0x1c7716['addEventListener'](_0xefd3cc['fjgsp'], () => {
                _0x12577a['sXgWq'](expect, _0x372eab['_focustrap']['activate'])['toHaveBeenCalled'](), _0x12577a['TgwGF'](_0x22f39c);
            }), _0x372eab['show']();
        });
    }), _0x2782b2['xQHUp'](describe, _0x2782b2['GaDPi'], () => {
        const _0x4ce931 = {
            'UpzDV': _0x2782b2['aVxXt'],
            'uxxPv': function (_0x2590f9, _0x196674, _0x1aecbd) {
                return _0x2782b2['kCldH'](_0x2590f9, _0x196674, _0x1aecbd);
            },
            'RkUMV': _0x2782b2['QCLiB'],
            'BzMPR': _0x2782b2['yDkYu'],
            'zRTCm': _0x2782b2['GaDPi'],
            'EKNOn': function (_0x4616e6, _0x2f2d4c) {
                return _0x2782b2['TeMTY'](_0x4616e6, _0x2f2d4c);
            },
            'apcCh': function (_0x1907e, _0x364f13) {
                return _0x2782b2['hfbBN'](_0x1907e, _0x364f13);
            },
            'yNCQs': _0x2782b2['otETC'],
            'zPoUo': function (_0x4e373f) {
                return _0x2782b2['tJgmj'](_0x4e373f);
            },
            'nezJw': function (_0x2c9e89, _0x43fe6d) {
                return _0x2782b2['hfbBN'](_0x2c9e89, _0x43fe6d);
            },
            'hBoav': function (_0x25d609, _0x25eabc, _0x4d714f) {
                return _0x2782b2['qNvPD'](_0x25d609, _0x25eabc, _0x4d714f);
            },
            'milTg': _0x2782b2['PfDRE'],
            'xbtgi': _0x2782b2['kVPsJ']
        };
        _0x2782b2['qNvPD'](it, _0x2782b2['gfvik'], () => {
            _0x19185f['innerHTML'] = _0x4ce931['UpzDV'], _0x4ce931['uxxPv'](spyOn, _0x5344c5, _0x4ce931['RkUMV'])['and']['callThrough']();
            const _0x51a243 = _0x19185f['querySelector'](_0x4ce931['BzMPR']), _0x3d10c4 = new _0x7188d7(_0x51a243);
            _0x4ce931['uxxPv'](spyOn, _0x3d10c4['_backdrop'], _0x4ce931['zRTCm'])['and']['callThrough'](), _0x3d10c4['hide'](), _0x4ce931['EKNOn'](expect, _0x3d10c4['_backdrop']['hide'])['not']['toHaveBeenCalled'](), _0x4ce931['EKNOn'](expect, _0x5344c5['trigger'])['not']['toHaveBeenCalled']();
        }), _0x2782b2['qNvPD'](it, _0x2782b2['cpjjW'], _0x5751c7 => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x33f452 = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0x2716a8 = new _0x7188d7(_0x33f452);
            _0x2782b2['wQNjL'](spyOn, _0x2716a8['_backdrop'], _0x2782b2['GaDPi'])['and']['callThrough'](), _0x2716a8['show'](), _0x33f452['addEventListener'](_0x2782b2['kVPsJ'], () => {
                _0x4ce931['apcCh'](expect, _0x33f452['classList']['contains'](_0x4ce931['yNCQs']))['toEqual'](![]), _0x4ce931['apcCh'](expect, _0x2716a8['_backdrop']['hide'])['toHaveBeenCalled'](), _0x4ce931['zPoUo'](_0x5751c7);
            }), _0x2716a8['hide']();
        }), _0x2782b2['qNvPD'](it, _0x2782b2['SPNOH'], _0x16ac76 => {
            const _0x5ba945 = {
                'Pycme': function (_0x20bc74, _0x1d10c8) {
                    return _0x2782b2['ZBzxf'](_0x20bc74, _0x1d10c8);
                },
                'dtvrg': function (_0x3dfb2b) {
                    return _0x2782b2['IkhPI'](_0x3dfb2b);
                },
                'ZkNEv': function (_0x1218a0, _0xdb7f6a, _0x31dd15) {
                    return _0x2782b2['wQNjL'](_0x1218a0, _0xdb7f6a, _0x31dd15);
                },
                'bsixh': _0x2782b2['tczjw']
            };
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x101040 = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0x16ee54 = new _0x7188d7(_0x101040);
            _0x2782b2['kCldH'](spyOn, _0x16ee54['_backdrop'], _0x2782b2['GaDPi'])['and']['callThrough'](), _0x16ee54['show']();
            const _0x4af708 = () => {
                const _0x2a7018 = {
                    'dzQRH': function (_0x53910c, _0x275fa1) {
                        return _0x5ba945['Pycme'](_0x53910c, _0x275fa1);
                    },
                    'LAFet': function (_0x556777) {
                        return _0x5ba945['dtvrg'](_0x556777);
                    }
                };
                _0x5ba945['ZkNEv'](setTimeout, () => {
                    _0x2a7018['dzQRH'](expect, _0x16ee54['_backdrop']['hide'])['not']['toHaveBeenCalled'](), _0x2a7018['LAFet'](_0x16ac76);
                }, 0xa);
            };
            _0x101040['addEventListener'](_0x2782b2['woGen'], _0x18e2e9 => {
                _0x18e2e9['preventDefault'](), _0x4ce931['zPoUo'](_0x4af708);
            }), _0x101040['addEventListener'](_0x2782b2['kVPsJ'], () => {
                throw new Error(_0x5ba945['bsixh']);
            }), _0x16ee54['hide']();
        }), _0x2782b2['qNvPD'](it, _0x2782b2['yMPYn'], _0x371743 => {
            const _0x55040d = {
                'dknsU': function (_0x6910e, _0x47077c) {
                    return _0x4ce931['nezJw'](_0x6910e, _0x47077c);
                },
                'TkiMm': function (_0x4c8204) {
                    return _0x4ce931['zPoUo'](_0x4c8204);
                }
            };
            _0x19185f['innerHTML'] = _0x4ce931['UpzDV'];
            const _0x3f9465 = _0x19185f['querySelector'](_0x4ce931['BzMPR']), _0x3bd737 = new _0x7188d7(_0x3f9465);
            _0x4ce931['hBoav'](spyOn, _0x3bd737['_focustrap'], _0x4ce931['milTg'])['and']['callThrough'](), _0x3bd737['show'](), _0x3f9465['addEventListener'](_0x4ce931['xbtgi'], () => {
                _0x55040d['dknsU'](expect, _0x3bd737['_focustrap']['deactivate'])['toHaveBeenCalled'](), _0x55040d['TkiMm'](_0x371743);
            }), _0x3bd737['hide']();
        });
    }), _0x2782b2['yYDVp'](describe, _0x2782b2['ooCur'], () => {
        _0x2782b2['bFePv'](it, _0x2782b2['OCSYR'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['aVxXt'];
            const _0x11f359 = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0x212465 = new _0x7188d7(_0x11f359), _0x204154 = _0x212465['_backdrop'];
            _0x2782b2['qNvPD'](spyOn, _0x204154, _0x2782b2['ooCur'])['and']['callThrough']();
            const _0x379724 = _0x212465['_focustrap'];
            _0x2782b2['IFGEb'](spyOn, _0x379724, _0x2782b2['PfDRE'])['and']['callThrough'](), _0x2782b2['UMqsj'](expect, _0x7188d7['getInstance'](_0x11f359))['toEqual'](_0x212465), _0x2782b2['jMNCs'](spyOn, _0x5344c5, _0x2782b2['Cqiqs']), _0x212465['dispose'](), _0x2782b2['bFybi'](expect, _0x204154['dispose'])['toHaveBeenCalled'](), _0x2782b2['bFybi'](expect, _0x212465['_backdrop'])['toBeNull'](), _0x2782b2['mzlTa'](expect, _0x379724['deactivate'])['toHaveBeenCalled'](), _0x2782b2['CXgsl'](expect, _0x212465['_focustrap'])['toBeNull'](), _0x2782b2['CXgsl'](expect, _0x7188d7['getInstance'](_0x11f359))['toEqual'](null);
        });
    }), _0x2782b2['eHNIN'](describe, _0x2782b2['mLwmA'], () => {
        const _0x4bd2fd = {
            'uKQvp': function (_0x594661, _0x26703d) {
                return _0x2782b2['RXRgE'](_0x594661, _0x26703d);
            },
            'qqvyt': _0x2782b2['otETC'],
            'PWkLj': function (_0x47e22d, _0x5c14a4) {
                return _0x2782b2['ZWWIx'](_0x47e22d, _0x5c14a4);
            },
            'LVDfC': function (_0x8bdd44) {
                return _0x2782b2['kYPWj'](_0x8bdd44);
            },
            'Ljcob': function (_0x39e321) {
                return _0x2782b2['kYPWj'](_0x39e321);
            },
            'tvspp': _0x2782b2['GkHTk'],
            'ykcdf': _0x2782b2['FbaaH'],
            'wcIRA': _0x2782b2['QrKYC'],
            'nEPDC': _0x2782b2['TGoqG'],
            'dstPW': _0x2782b2['sEjYP'],
            'hXDIQ': _0x2782b2['NvlCz'],
            'fENEZ': _0x2782b2['tYQjg'],
            'zuBaE': _0x2782b2['kVPsJ'],
            'LyaQA': function (_0x52263d) {
                return _0x2782b2['BKOMq'](_0x52263d);
            },
            'ZNUQY': function (_0x39be22, _0x291d7a, _0x5106f3) {
                return _0x2782b2['wBsza'](_0x39be22, _0x291d7a, _0x5106f3);
            },
            'pWOfX': _0x2782b2['evzoU'],
            'kTIhy': _0x2782b2['iipUc'],
            'rquBe': _0x2782b2['OJMov'],
            'TGBCa': _0x2782b2['HqTqD'],
            'etNsz': _0x2782b2['sHAum'],
            'eoQqa': _0x2782b2['LiEcp'],
            'vXkBI': function (_0x5c9ede, _0x52cbd3) {
                return _0x2782b2['ZWWIx'](_0x5c9ede, _0x52cbd3);
            },
            'tAbWY': function (_0x22d5d3, _0x501d33) {
                return _0x2782b2['ZWWIx'](_0x22d5d3, _0x501d33);
            },
            'rItaQ': function (_0x7b9d44, _0x43b1d7, _0x1660e5) {
                return _0x2782b2['wBsza'](_0x7b9d44, _0x43b1d7, _0x1660e5);
            }
        };
        _0x2782b2['PrcJK'](it, _0x2782b2['HZbtE'], _0x8d2d47 => {
            _0x19185f['innerHTML'] = [
                _0x2782b2['gzdAB'],
                _0x2782b2['kvGhb']
            ]['join']('');
            const _0x31640e = _0x19185f['querySelector'](_0x2782b2['ADYfx']), _0x1e5c0f = _0x19185f['querySelector'](_0x2782b2['oQSWh']);
            _0x1e5c0f['addEventListener'](_0x2782b2['tYQjg'], () => {
                _0x4bd2fd['uKQvp'](expect, _0x1e5c0f['classList']['contains'](_0x4bd2fd['qqvyt']))['toEqual'](!![]), _0x4bd2fd['PWkLj'](expect, _0x31640e['checked'])['toEqual'](!![]), _0x4bd2fd['LVDfC'](_0x8d2d47);
            }), _0x31640e['click']();
        }), _0x2782b2['saHXV'](it, _0x2782b2['ZUyFc'], () => {
            _0x19185f['innerHTML'] = [
                _0x2782b2['JAfTD'],
                _0x2782b2['kvGhb']
            ]['join']('');
            const _0x63dd89 = _0x19185f['querySelector']('a');
            _0x2782b2['wBsza'](spyOn, _0x7188d7['prototype'], _0x2782b2['umFcs']), _0x63dd89['click'](), _0x2782b2['CXgsl'](expect, _0x7188d7['prototype']['toggle'])['not']['toHaveBeenCalled']();
        }), _0x2782b2['saHXV'](it, _0x2782b2['LYdWv'], _0x5badba => {
            const _0xa987d5 = {
                'EixxA': function (_0x4b3809, _0x6c411b) {
                    return _0x4bd2fd['PWkLj'](_0x4b3809, _0x6c411b);
                },
                'kpwMH': function (_0x3cd7b4) {
                    return _0x4bd2fd['Ljcob'](_0x3cd7b4);
                }
            };
            _0x19185f['innerHTML'] = [
                _0x4bd2fd['tvspp'],
                _0x4bd2fd['ykcdf'],
                _0x4bd2fd['wcIRA']
            ]['join']('');
            const _0x31a83d = _0x19185f['querySelector'](_0x4bd2fd['nEPDC']), _0x3f0594 = document['querySelector'](_0x4bd2fd['dstPW']), _0x35b86d = document['querySelector'](_0x4bd2fd['hXDIQ']), _0x4969fc = new _0x7188d7(_0x3f0594);
            _0x3f0594['addEventListener'](_0x4bd2fd['fENEZ'], () => {
                _0x31a83d['click']();
            }), _0x3f0594['addEventListener'](_0x4bd2fd['zuBaE'], () => {
                _0xa987d5['EixxA'](expect, _0x7188d7['getInstance'](_0x35b86d))['not']['toBeNull'](), _0xa987d5['kpwMH'](_0x5badba);
            }), _0x4969fc['show']();
        }), _0x2782b2['saHXV'](it, _0x2782b2['QfAzR'], _0x28060f => {
            const _0x56d772 = {
                'CdNFU': function (_0x4c4256, _0x1d6b6b) {
                    return _0x4bd2fd['PWkLj'](_0x4c4256, _0x1d6b6b);
                },
                'GcTwV': function (_0x969186) {
                    return _0x4bd2fd['LyaQA'](_0x969186);
                },
                'JjhAR': function (_0x486689, _0x5e2c54, _0x2dcbdf) {
                    return _0x4bd2fd['ZNUQY'](_0x486689, _0x5e2c54, _0x2dcbdf);
                }
            };
            _0x19185f['innerHTML'] = [
                _0x4bd2fd['pWOfX'],
                _0x4bd2fd['kTIhy']
            ]['join']('');
            const _0x177360 = _0x19185f['querySelector'](_0x4bd2fd['rquBe']), _0x11d477 = _0x19185f['querySelector'](_0x4bd2fd['TGBCa']), _0x11f325 = new _0x7188d7(_0x11d477);
            _0x4bd2fd['ZNUQY'](spyOn, _0x177360, _0x4bd2fd['etNsz']), _0x11d477['addEventListener'](_0x4bd2fd['fENEZ'], () => {
                _0x11f325['hide']();
            }), _0x11d477['addEventListener'](_0x4bd2fd['zuBaE'], () => {
                const _0x25c180 = {
                    'vyCxF': function (_0x42f4c3, _0x1975e5) {
                        return _0x56d772['CdNFU'](_0x42f4c3, _0x1975e5);
                    },
                    'nSqev': function (_0x421390) {
                        return _0x56d772['GcTwV'](_0x421390);
                    }
                };
                _0x56d772['JjhAR'](setTimeout, () => {
                    _0x25c180['vyCxF'](expect, _0x177360['focus'])['toHaveBeenCalled'](), _0x25c180['nSqev'](_0x28060f);
                }, 0x5);
            }), _0x177360['click']();
        }), _0x2782b2['saHXV'](it, _0x2782b2['hsCaT'], _0x17bd44 => {
            _0x19185f['innerHTML'] = [
                _0x4bd2fd['pWOfX'],
                _0x4bd2fd['kTIhy']
            ]['join']('');
            const _0x5b8651 = _0x19185f['querySelector'](_0x4bd2fd['rquBe']), _0x493381 = _0x19185f['querySelector'](_0x4bd2fd['TGBCa']), _0x5985cf = new _0x7188d7(_0x493381);
            _0x4bd2fd['rItaQ'](spyOn, _0x5b8651, _0x4bd2fd['etNsz']), _0x493381['addEventListener'](_0x4bd2fd['fENEZ'], () => {
                _0x5b8651['style']['display'] = _0x4bd2fd['eoQqa'], _0x5985cf['hide']();
            }), _0x493381['addEventListener'](_0x4bd2fd['zuBaE'], () => {
                const _0x53ec3f = {
                    'CCvbB': function (_0x2781f4, _0x430915) {
                        return _0x4bd2fd['vXkBI'](_0x2781f4, _0x430915);
                    },
                    'tZNSD': function (_0x341cf7, _0x2d6def) {
                        return _0x4bd2fd['vXkBI'](_0x341cf7, _0x2d6def);
                    },
                    'YTXIz': function (_0x5caf28, _0x4fd5ec) {
                        return _0x4bd2fd['tAbWY'](_0x5caf28, _0x4fd5ec);
                    },
                    'nJixn': function (_0x57c968) {
                        return _0x4bd2fd['LyaQA'](_0x57c968);
                    }
                };
                _0x4bd2fd['ZNUQY'](setTimeout, () => {
                    _0x53ec3f['CCvbB'](expect, _0x53ec3f['tZNSD'](isVisible, _0x5b8651))['toBe'](![]), _0x53ec3f['YTXIz'](expect, _0x5b8651['focus'])['not']['toHaveBeenCalled'](), _0x53ec3f['nJixn'](_0x17bd44);
                }, 0x5);
            }), _0x5b8651['click']();
        });
    }), _0x2782b2['QfkQJ'](describe, _0x2782b2['msGQZ'], () => {
        const _0x22f83e = {
            'ZILyS': _0x2782b2['eeTXU'],
            'EGxpv': _0x2782b2['yDkYu'],
            'BYbbZ': function (_0x38e06e, _0x3c5725) {
                return _0x2782b2['sRnpT'](_0x38e06e, _0x3c5725);
            },
            'CbUtg': _0x2782b2['OykrX'],
            'mvPIW': _0x2782b2['ibSsK'],
            'HsfBk': _0x2782b2['RuEYs'],
            'pdYXS': function (_0x31f798, _0x47957c) {
                return _0x2782b2['sRnpT'](_0x31f798, _0x47957c);
            },
            'hIOlf': function (_0x4a209c, _0x38f941, _0x53acf6) {
                return _0x2782b2['apoJl'](_0x4a209c, _0x38f941, _0x53acf6);
            },
            'uRypC': _0x2782b2['otETC'],
            'fpMqJ': function (_0x351188, _0x17f443) {
                return _0x2782b2['VjiRR'](_0x351188, _0x17f443);
            }
        };
        _0x2782b2['apoJl'](it, _0x2782b2['uJwxv'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['eeTXU'];
            const _0x2a230e = _0x19185f['querySelector'](_0x2782b2['yDkYu']);
            jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x2a230e], jQueryMock['fn']['offcanvas']['call'](jQueryMock), _0x2782b2['ZWWIx'](expect, _0x7188d7['getInstance'](_0x2a230e))['not']['toBeNull']();
        }), _0x2782b2['apoJl'](it, _0x2782b2['bhVph'], () => {
            _0x19185f['innerHTML'] = _0x22f83e['ZILyS'];
            const _0x2e1330 = _0x19185f['querySelector'](_0x22f83e['EGxpv']), _0xbdfac3 = new _0x7188d7(_0x2e1330);
            jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x2e1330], jQueryMock['fn']['offcanvas']['call'](jQueryMock), _0x22f83e['BYbbZ'](expect, _0x7188d7['getInstance'](_0x2e1330))['toEqual'](_0xbdfac3);
        }), _0x2782b2['apoJl'](it, _0x2782b2['dXyhc'], () => {
            _0x19185f['innerHTML'] = _0x22f83e['ZILyS'];
            const _0x1b2e9c = _0x19185f['querySelector'](_0x22f83e['EGxpv']), _0x486681 = _0x22f83e['CbUtg'];
            jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x1b2e9c], _0x22f83e['BYbbZ'](expect, () => {
                jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0x486681);
            })['toThrowError'](TypeError, 'No\x20method\x20named\x20\x22' + _0x486681 + '\x22');
        }), _0x2782b2['apoJl'](it, _0x2782b2['nUvsb'], () => {
            _0x19185f['innerHTML'] = _0x22f83e['ZILyS'];
            const _0x559c20 = _0x19185f['querySelector'](_0x22f83e['EGxpv']), _0x909262 = _0x22f83e['mvPIW'];
            jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x559c20], _0x22f83e['BYbbZ'](expect, () => {
                jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0x909262);
            })['toThrowError'](TypeError, 'No\x20method\x20named\x20\x22' + _0x909262 + '\x22');
        }), _0x2782b2['apoJl'](it, _0x2782b2['nINdL'], () => {
            _0x19185f['innerHTML'] = _0x22f83e['ZILyS'];
            const _0x353d9b = _0x19185f['querySelector'](_0x22f83e['EGxpv']), _0x27ae48 = _0x22f83e['HsfBk'];
            jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x353d9b], _0x22f83e['pdYXS'](expect, () => {
                jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0x27ae48);
            })['toThrowError'](TypeError, 'No\x20method\x20named\x20\x22' + _0x27ae48 + '\x22');
        }), _0x2782b2['oaDnq'](it, _0x2782b2['zNwCy'], () => {
            _0x19185f['innerHTML'] = _0x22f83e['ZILyS'];
            const _0x5834f0 = _0x19185f['querySelector'](_0x22f83e['EGxpv']);
            _0x22f83e['hIOlf'](spyOn, _0x7188d7['prototype'], _0x22f83e['uRypC']), jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x5834f0], jQueryMock['fn']['offcanvas']['call'](jQueryMock, _0x22f83e['uRypC']), _0x22f83e['fpMqJ'](expect, _0x7188d7['prototype']['show'])['toHaveBeenCalled']();
        }), _0x2782b2['TvnhT'](it, _0x2782b2['equIh'], () => {
            _0x19185f['innerHTML'] = _0x22f83e['ZILyS'];
            const _0x520bfc = _0x19185f['querySelector'](_0x22f83e['EGxpv']);
            jQueryMock['fn']['offcanvas'] = _0x7188d7['jQueryInterface'], jQueryMock['elements'] = [_0x520bfc], jQueryMock['fn']['offcanvas']['call'](jQueryMock, { 'scroll': !![] });
            const _0x47b736 = _0x7188d7['getInstance'](_0x520bfc);
            _0x22f83e['fpMqJ'](expect, _0x47b736)['not']['toBeNull'](), _0x22f83e['fpMqJ'](expect, _0x47b736['_config']['scroll'])['toBe'](!![]);
        });
    }), _0x2782b2['Sgcvr'](describe, _0x2782b2['BHtoo'], () => {
        const _0x1d6931 = {
            'xJIiF': _0x2782b2['eeTXU'],
            'xXOKE': _0x2782b2['yDkYu'],
            'HqYwb': function (_0x1e1082, _0x42bcd5) {
                return _0x2782b2['VjiRR'](_0x1e1082, _0x42bcd5);
            },
            'zZIsY': function (_0x55ef9b, _0x412005) {
                return _0x2782b2['cuQWw'](_0x55ef9b, _0x412005);
            }
        };
        _0x2782b2['TvnhT'](it, _0x2782b2['GDrYo'], () => {
            _0x19185f['innerHTML'] = _0x1d6931['xJIiF'];
            const _0x49d366 = _0x19185f['querySelector'](_0x1d6931['xXOKE']), _0x29237f = new _0x7188d7(_0x49d366);
            _0x1d6931['HqYwb'](expect, _0x7188d7['getInstance'](_0x49d366))['toEqual'](_0x29237f), _0x1d6931['zZIsY'](expect, _0x7188d7['getInstance'](_0x49d366))['toBeInstanceOf'](_0x7188d7);
        }), _0x2782b2['TvnhT'](it, _0x2782b2['hVQkg'], () => {
            _0x19185f['innerHTML'] = _0x1d6931['xJIiF'];
            const _0x132a62 = _0x19185f['querySelector'](_0x1d6931['xXOKE']);
            _0x1d6931['zZIsY'](expect, _0x7188d7['getInstance'](_0x132a62))['toBeNull']();
        });
    }), _0x2782b2['Sgcvr'](describe, _0x2782b2['TEMcn'], () => {
        const _0xf2a3e5 = {
            'lYjEc': _0x2782b2['eeTXU'],
            'FlNNu': _0x2782b2['yDkYu'],
            'TkdCP': function (_0xff7f04, _0x1ff3d6) {
                return _0x2782b2['jRCYN'](_0xff7f04, _0x1ff3d6);
            },
            'tloHj': function (_0x2eff57, _0x37055b) {
                return _0x2782b2['jRCYN'](_0x2eff57, _0x37055b);
            }
        };
        _0x2782b2['bXCYq'](it, _0x2782b2['GDrYo'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['eeTXU'];
            const _0x549c8d = _0x19185f['querySelector'](_0x2782b2['yDkYu']), _0xff97a3 = new _0x7188d7(_0x549c8d);
            _0x2782b2['cuQWw'](expect, _0x7188d7['getOrCreateInstance'](_0x549c8d))['toEqual'](_0xff97a3), _0x2782b2['KXgZM'](expect, _0x7188d7['getInstance'](_0x549c8d))['toEqual'](_0x7188d7['getOrCreateInstance'](_0x549c8d, {})), _0x2782b2['ySMcG'](expect, _0x7188d7['getOrCreateInstance'](_0x549c8d))['toBeInstanceOf'](_0x7188d7);
        }), _0x2782b2['bXCYq'](it, _0x2782b2['hJsOh'], () => {
            _0x19185f['innerHTML'] = _0x2782b2['eeTXU'];
            const _0x1ea406 = _0x19185f['querySelector'](_0x2782b2['yDkYu']);
            _0x2782b2['ySMcG'](expect, _0x7188d7['getInstance'](_0x1ea406))['toEqual'](null), _0x2782b2['ySMcG'](expect, _0x7188d7['getOrCreateInstance'](_0x1ea406))['toBeInstanceOf'](_0x7188d7);
        }), _0x2782b2['feKxW'](it, _0x2782b2['XFCgE'], () => {
            _0x19185f['innerHTML'] = _0xf2a3e5['lYjEc'];
            const _0x3297b0 = _0x19185f['querySelector'](_0xf2a3e5['FlNNu']);
            _0xf2a3e5['TkdCP'](expect, _0x7188d7['getInstance'](_0x3297b0))['toEqual'](null);
            const _0x4dc911 = _0x7188d7['getOrCreateInstance'](_0x3297b0, { 'scroll': !![] });
            _0xf2a3e5['TkdCP'](expect, _0x4dc911)['toBeInstanceOf'](_0x7188d7), _0xf2a3e5['TkdCP'](expect, _0x4dc911['_config']['scroll'])['toEqual'](!![]);
        }), _0x2782b2['wgyto'](it, _0x2782b2['LVSzS'], () => {
            _0x19185f['innerHTML'] = _0xf2a3e5['lYjEc'];
            const _0x51cfd6 = _0x19185f['querySelector'](_0xf2a3e5['FlNNu']), _0x1dd01d = new _0x7188d7(_0x51cfd6, { 'scroll': !![] });
            _0xf2a3e5['tloHj'](expect, _0x7188d7['getInstance'](_0x51cfd6))['toEqual'](_0x1dd01d);
            const _0x3986d7 = _0x7188d7['getOrCreateInstance'](_0x51cfd6, { 'scroll': ![] });
            _0xf2a3e5['tloHj'](expect, _0x1dd01d)['toBeInstanceOf'](_0x7188d7), _0xf2a3e5['tloHj'](expect, _0x3986d7)['toEqual'](_0x1dd01d), _0xf2a3e5['tloHj'](expect, _0x3986d7['_config']['scroll'])['toEqual'](!![]);
        });
    });
});
