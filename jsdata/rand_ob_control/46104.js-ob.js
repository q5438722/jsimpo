import _0x530ee3 from 'os';
import _0x53b80d from 'glob';
import _0x37f21f from 'fs-extra';
import _0x25f887 from 'execa';
import _0x121137 from 'cheerio';
import {
    join,
    dirname,
    relative
} from 'path';
import { version } from 'next/package';
import { recursiveReadDir } from 'next/dist/lib/recursive-readdir';
import {
    fetchViaHTTP,
    findPort,
    initNextServerScript,
    killApp,
    renderViaHTTP
} from 'next-test-utils';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '../app'), workDir = join(_0x530ee3['tmpdir'](), 'required-server-files-' + Date['now']());
let server, nextApp, appPort, buildId, requiredFilesManifest, errors = [];
describe('Required\x20Server\x20Files', () => {
    const _0x286a18 = {
        'XIjHb': 'top-level',
        'TxBPk': 'error',
        'yJRSC': function (_0x48ff80, _0x9a9ce5) {
            return _0x48ff80(_0x9a9ce5);
        },
        'dFtCe': 'http',
        'nmJky': 'next/dist/server/next-server',
        'spONB': function (_0x325203, _0x5b86e1) {
            return _0x325203 + _0x5b86e1;
        },
        'UscYO': '.nft.json',
        'yBjgG': 'next/package.json',
        'vDuzj': function (_0x4ddfd1, _0x4d9a29, _0x279b34, _0x4f0daa) {
            return _0x4ddfd1(_0x4d9a29, _0x279b34, _0x4f0daa);
        },
        'ByInh': 'yarn',
        'mnfab': 'pack',
        'gZpfI': function (_0x2872f6, _0x5bab1a, _0x3965be) {
            return _0x2872f6(_0x5bab1a, _0x3965be);
        },
        'UThRV': 'package.json',
        'tuEDb': 'latest',
        'JSXri': function (_0x21c07e, _0x3e87fb, _0xa04cff, _0x462ac7) {
            return _0x21c07e(_0x3e87fb, _0xa04cff, _0x462ac7);
        },
        'Yunpy': 'install',
        'gqPen': 'ignore',
        'dOeMv': 'inherit',
        'CEIUz': function (_0x39aa6a, _0x9659bb, _0x4e9a85) {
            return _0x39aa6a(_0x9659bb, _0x4e9a85);
        },
        'CQsxm': '.yarn-cache',
        'BgtPF': 'next',
        'qcAez': 'build',
        'uhOOP': 'production',
        'guyjs': function (_0xe393c4, _0x31ca79, _0x38e497) {
            return _0xe393c4(_0x31ca79, _0x38e497);
        },
        'SUplT': '.next/BUILD_ID',
        'wHuEd': 'utf8',
        'krdej': function (_0x10eac1, _0x4ad3b9, _0x2e09ea) {
            return _0x10eac1(_0x4ad3b9, _0x2e09ea);
        },
        'GlZnu': '.next/required-server-files.json',
        'mULhR': '.yarn',
        'AXuwR': function (_0xed0e01, _0x172162, _0x25fbf3) {
            return _0xed0e01(_0x172162, _0x25fbf3);
        },
        'KHqTW': '**/*.nft.json',
        'qJivd': function (_0x364736, _0x586b8f, _0x42af2a) {
            return _0x364736(_0x586b8f, _0x42af2a);
        },
        'xUBqw': '.next/server/pages',
        'gGqUz': function (_0x7615ff, _0x8ad354, _0xffb84d, _0x32a60e) {
            return _0x7615ff(_0x8ad354, _0xffb84d, _0x32a60e);
        },
        'BjURE': function (_0x879ed2, _0x594b08, _0x291b4d) {
            return _0x879ed2(_0x594b08, _0x291b4d);
        },
        'RgEHC': function (_0x23f75b, _0x424b10) {
            return _0x23f75b !== _0x424b10;
        },
        'RGnAd': '/node_modules/next/dist/server/next-server.js',
        'ZingB': '.next/server',
        'icCic': function (_0x218adb, _0x2e1307) {
            return _0x218adb !== _0x2e1307;
        },
        'FmmTw': function (_0x2b4b19, _0x121ddb, _0x11b856) {
            return _0x2b4b19(_0x121ddb, _0x11b856);
        },
        'QeNCP': 'node_modules',
        'TtEde': 'server.js',
        'VFRlI': function (_0x144513, _0x582b11) {
            return _0x144513 + _0x582b11;
        },
        'szRZZ': function (_0x16e242, _0x55a345) {
            return _0x16e242 + _0x55a345;
        },
        'dvfdt': function (_0x38ba96, _0x23e5da) {
            return _0x38ba96 + _0x23e5da;
        },
        'YLZfK': function (_0x1ce7ef, _0x5e3c47) {
            return _0x1ce7ef + _0x5e3c47;
        },
        'dLIsi': 'global.nextConfig\x20=\x20',
        'XlNFb': function (_0x57514d) {
            return _0x57514d();
        },
        'ieCZm': function (_0x22233e, _0x41606e, _0x5a13c1, _0x1d1e7a, _0x38ef64, _0x15dea8) {
            return _0x22233e(_0x41606e, _0x5a13c1, _0x1d1e7a, _0x38ef64, _0x15dea8);
        },
        'Ycahd': function (_0x538595, _0x1241ae) {
            return _0x538595(_0x1241ae);
        },
        'PuStd': function (_0x52f5da, _0x480868) {
            return _0x52f5da(_0x480868);
        },
        'eXOCI': function (_0x4df7d2, _0xaa4eb4) {
            return _0x4df7d2(_0xaa4eb4);
        },
        'YjazG': 'undefined',
        'JlsRs': function (_0x5ad465, _0x44c3d5) {
            return _0x5ad465(_0x44c3d5);
        },
        'rrikl': 'boolean',
        'QAXyY': 'string',
        'PqLXI': function (_0x3f4518, _0x5a6993) {
            return _0x3f4518(_0x5a6993);
        },
        'DUBLo': function (_0x2c7b61, _0x5d3f0e, _0x70b00d) {
            return _0x2c7b61(_0x5d3f0e, _0x70b00d);
        },
        'EDaXr': '#props',
        'XTXWr': '#index',
        'wlwED': 'index\x20page',
        'OgstY': 'world',
        'GZSUw': function (_0x494879, _0xcf1e51) {
            return _0x494879(_0xcf1e51);
        },
        'hMjtE': function (_0x1a1a77, _0x1798cd, _0x1a2a5b) {
            return _0x1a1a77(_0x1798cd, _0x1a2a5b);
        },
        'FLRRO': '/dynamic/first',
        'rkCjk': function (_0xad0d7c, _0x3c47f0) {
            return _0xad0d7c(_0x3c47f0);
        },
        'yUnTe': function (_0x185cd3, _0x5b1d17) {
            return _0x185cd3(_0x5b1d17);
        },
        'pqfIl': '#dynamic',
        'UyczO': 'dynamic\x20page',
        'wjWtB': function (_0x18b1e0, _0x2621a9) {
            return _0x18b1e0(_0x2621a9);
        },
        'jLmAN': '#slug',
        'iKSQh': 'first',
        'YLUpY': function (_0x1f4cf1, _0x3bcadc, _0x558636) {
            return _0x1f4cf1(_0x3bcadc, _0x558636);
        },
        'EqPLG': '/dynamic/second',
        'KXtHC': function (_0x5587b1, _0x5c726d) {
            return _0x5587b1(_0x5c726d);
        },
        'uQAGw': function (_0x471e2b, _0x253d44) {
            return _0x471e2b(_0x253d44);
        },
        'KtGII': function (_0x10a0d3, _0x2b5c02) {
            return _0x10a0d3(_0x2b5c02);
        },
        'kJZGw': function (_0x3a485e, _0x3301b2) {
            return _0x3a485e(_0x3301b2);
        },
        'IvgXQ': 'second',
        'vjpBF': function (_0x38cf98, _0x5f19ab) {
            return _0x38cf98(_0x5f19ab);
        },
        'sHdqw': function (_0x3afb78, _0x3af425) {
            return _0x3afb78(_0x3af425);
        },
        'uvRPn': '/fallback/first',
        'blLzA': function (_0x5910bc, _0x26631a) {
            return _0x5910bc(_0x26631a);
        },
        'UdTeM': '#fallback',
        'HqteJ': 'fallback\x20page',
        'qORtH': function (_0x57c373, _0x1ca4f8) {
            return _0x57c373(_0x1ca4f8);
        },
        'OHchP': function (_0x3d4ad4, _0x2cdcbd) {
            return _0x3d4ad4(_0x2cdcbd);
        },
        'uvLaM': function (_0x8a3f48, _0x35ffcf) {
            return _0x8a3f48(_0x35ffcf);
        },
        'eVJZl': function (_0xe0bd1b, _0xc7c8d7) {
            return _0xe0bd1b(_0xc7c8d7);
        },
        'smyaZ': function (_0x139c26, _0x565de6) {
            return _0x139c26(_0x565de6);
        },
        'ZyKjy': function (_0x45f84c, _0x10487f) {
            return _0x45f84c(_0x10487f);
        },
        'AAlud': function (_0xf70a1a, _0x205f4e) {
            return _0xf70a1a(_0x205f4e);
        },
        'CPmsa': function (_0xdd2bd2, _0x67caba) {
            return _0xdd2bd2(_0x67caba);
        },
        'eMcxF': '/fallback/second',
        'dKcsg': function (_0x3ec2f4, _0x52e576) {
            return _0x3ec2f4(_0x52e576);
        },
        'fWKIK': function (_0x24087e, _0x180c6d) {
            return _0x24087e(_0x180c6d);
        },
        'wvEYx': function (_0x23c1b5, _0x545dee) {
            return _0x23c1b5(_0x545dee);
        },
        'nvcsU': function (_0x348d81, _0x2802a4) {
            return _0x348d81(_0x2802a4);
        },
        'prBIU': 'third',
        'Ncgyo': function (_0x5c46cb, _0x308cd5, _0x5c3a25, _0x3614d7, _0x5b481c) {
            return _0x5c46cb(_0x308cd5, _0x5c3a25, _0x3614d7, _0x5b481c);
        },
        'Rtmch': '/some-other-path',
        'bMYvG': function (_0x2fa355, _0x11d514) {
            return _0x2fa355(_0x11d514);
        },
        'fIKgz': function (_0x4ccfe3, _0x58a49f) {
            return _0x4ccfe3(_0x58a49f);
        },
        'fTcAS': function (_0x56a735, _0xb9bcdc) {
            return _0x56a735(_0xb9bcdc);
        },
        'YOeYy': function (_0x19bc47, _0x1d9c43) {
            return _0x19bc47(_0x1d9c43);
        },
        'kvkqT': function (_0x373863, _0x2174ea, _0x38478f, _0x2d9d47, _0x55a634) {
            return _0x373863(_0x2174ea, _0x38478f, _0x2d9d47, _0x55a634);
        },
        'PwUoJ': function (_0x118d0a, _0x379cb9) {
            return _0x118d0a(_0x379cb9);
        },
        'RJwzW': function (_0x5c8d73, _0x443a91) {
            return _0x5c8d73(_0x443a91);
        },
        'DyGwB': function (_0x35ff7f, _0xe4c018) {
            return _0x35ff7f(_0xe4c018);
        },
        'mfPgC': function (_0x4829d9, _0x5bed99) {
            return _0x4829d9(_0x5bed99);
        },
        'slQbU': function (_0x58117c, _0x3fe2ad, _0x12f119, _0x625bd0, _0x76d5a1) {
            return _0x58117c(_0x3fe2ad, _0x12f119, _0x625bd0, _0x76d5a1);
        },
        'YgUWC': '/dynamic/[slug]?slug=first',
        'AlSto': function (_0xff3ff, _0x70f1b9) {
            return _0xff3ff(_0x70f1b9);
        },
        'seGOD': function (_0xc18a6a, _0x39c3b3) {
            return _0xc18a6a(_0x39c3b3);
        },
        'XUxnY': function (_0x3f1b46, _0x51b25b) {
            return _0x3f1b46(_0x51b25b);
        },
        'PNtpT': function (_0x19f72e, _0x315364) {
            return _0x19f72e(_0x315364);
        },
        'nPkdP': '/dynamic/[slug]?slug=second',
        'lHyeg': function (_0x4d0e8a, _0x526a21) {
            return _0x4d0e8a(_0x526a21);
        },
        'iahsL': function (_0xe30a3, _0xd85b61) {
            return _0xe30a3(_0xd85b61);
        },
        'ExeVx': function (_0x40ac9c, _0x4959bf) {
            return _0x40ac9c(_0x4959bf);
        },
        'rGpFR': function (_0xd49dd7, _0x275373) {
            return _0xd49dd7(_0x275373);
        },
        'tjptu': function (_0x2e6e69, _0x52fca0) {
            return _0x2e6e69(_0x52fca0);
        },
        'cjUVT': '/dynamic/[slug]?slug=%5Bslug%5D.json',
        'irYSn': '1=second&slug=second',
        'wnljP': function (_0x54b4ac, _0x3af231) {
            return _0x54b4ac(_0x3af231);
        },
        'dFPGH': function (_0x2a41ac, _0x41f09d) {
            return _0x2a41ac(_0x41f09d);
        },
        'UmAyl': function (_0x44b3f6, _0x5a5c7c) {
            return _0x44b3f6(_0x5a5c7c);
        },
        'MOePL': '1=first',
        'RFzUp': function (_0x189de0, _0x9a430b) {
            return _0x189de0(_0x9a430b);
        },
        'dzagy': function (_0x3387f0, _0x4066b7) {
            return _0x3387f0(_0x4066b7);
        },
        'NtJLZ': function (_0x36059b, _0x48798e) {
            return _0x36059b(_0x48798e);
        },
        'QiRaM': function (_0x203ebb, _0x5adc07) {
            return _0x203ebb(_0x5adc07);
        },
        'LuJQA': function (_0x2dc13a, _0x1bed06, _0x56883f, _0x5954c0, _0x4a8f7a) {
            return _0x2dc13a(_0x1bed06, _0x56883f, _0x5954c0, _0x4a8f7a);
        },
        'spBoH': '/fallback/[slug]',
        'biezh': '1=second',
        'zGKmG': function (_0x2c2512, _0x35faa4) {
            return _0x2c2512(_0x35faa4);
        },
        'SCDeR': function (_0x37bbda, _0xf10c99) {
            return _0x37bbda(_0xf10c99);
        },
        'rQZGp': function (_0x46d7ec, _0x11dcd9) {
            return _0x46d7ec(_0x11dcd9);
        },
        'EOTBh': function (_0x427d7f, _0x113140) {
            return _0x427d7f(_0x113140);
        },
        'tVmUZ': function (_0x4c705b, _0x466ba1) {
            return _0x4c705b(_0x466ba1);
        },
        'aVIAu': '/catch-all/[[...rest]]',
        'lWbQh': function (_0x510f72, _0x4efab1) {
            return _0x510f72(_0x4efab1);
        },
        'SFlrx': '#catch-all',
        'FCcxq': 'optional\x20catch-all\x20page',
        'XkbAO': '1=hello&catchAll=hello',
        'ugfCC': function (_0x55e94c, _0x7d33c1) {
            return _0x55e94c(_0x7d33c1);
        },
        'vcHfU': function (_0x4d0504, _0x5e9b16) {
            return _0x4d0504(_0x5e9b16);
        },
        'dhvly': 'hello',
        'CdNgG': function (_0x418045, _0x219423) {
            return _0x418045(_0x219423);
        },
        'DAXmZ': function (_0x1d75c1, _0x21f1b5, _0x126f95, _0x3ae7fa, _0x164bdc) {
            return _0x1d75c1(_0x21f1b5, _0x126f95, _0x3ae7fa, _0x164bdc);
        },
        'SbbvP': '/catch-all/[[..rest]]',
        'HfGby': '1=hello/world&catchAll=hello/world',
        'nqfMG': function (_0x221ea0, _0x2ced7e) {
            return _0x221ea0(_0x2ced7e);
        },
        'QdRWO': function (_0x68f597, _0x437f29) {
            return _0x68f597(_0x437f29);
        },
        'JozvU': function (_0x49c6f1, _0x2632d9) {
            return _0x49c6f1(_0x2632d9);
        },
        'EOECl': function (_0x1d9eb6, _0x5ecf97) {
            return _0x1d9eb6(_0x5ecf97);
        },
        'HSuSu': function (_0x366050, _0x4f5d28) {
            return _0x366050(_0x4f5d28);
        },
        'BPawj': function (_0x424518, _0x125175) {
            return _0x424518(_0x125175);
        },
        'rGRMa': function (_0x4f1ba8, _0x12ca1) {
            return _0x4f1ba8(_0x12ca1);
        },
        'JfPIa': function (_0x5dcc89, _0x539c20) {
            return _0x5dcc89(_0x539c20);
        },
        'OamSC': '1=hello&rest=hello',
        'rfqFX': function (_0x1b478d, _0x5800ff) {
            return _0x1b478d(_0x5800ff);
        },
        'EsTNI': '1=hello/world&rest=hello/world',
        'tVfCV': function (_0x498250, _0x3987ba) {
            return _0x498250(_0x3987ba);
        },
        'rOVMl': '/dynamic/another/',
        'oXjAc': '/dynamic/another',
        'noKnz': '/fallback/first/',
        'nGXCX': '/fallback/another/',
        'vcqIx': '/fallback/another',
        'cgMtc': 'manual',
        'GbAvB': '/some-catch-all/hello/world',
        'KFtfO': 'hello/world',
        'EBBWc': '#router',
        'qnICk': '/errors/gip',
        'JVaQc': function (_0x412f03, _0x3ab782) {
            return _0x412f03(_0x3ab782);
        },
        'FKUgi': function (_0x22961f, _0x5bcb67) {
            return _0x22961f(_0x5bcb67);
        },
        'vPtQb': 'gip\x20hit\x20an\x20oops',
        'zEaWT': function (_0x5a585f, _0x217e4, _0x206279, _0x112b2c) {
            return _0x5a585f(_0x217e4, _0x206279, _0x112b2c);
        },
        'DNfyw': '/errors/gssp',
        'IZvBi': function (_0x3616e0, _0x49fc39) {
            return _0x3616e0(_0x49fc39);
        },
        'oelSm': function (_0x3847b6, _0x447151) {
            return _0x3847b6(_0x447151);
        },
        'cTYfS': function (_0x486919, _0x37deff) {
            return _0x486919(_0x37deff);
        },
        'QYLLU': 'gssp\x20hit\x20an\x20oops',
        'OJxcx': '/errors/gsp/crash',
        'pwEeL': function (_0x34a09a, _0x393eb5) {
            return _0x34a09a(_0x393eb5);
        },
        'ULPPP': function (_0x50f319, _0x50cd96) {
            return _0x50f319(_0x50cd96);
        },
        'OnmXS': function (_0x2cf059, _0x33a9d9) {
            return _0x2cf059(_0x33a9d9);
        },
        'OwQLV': 'gsp\x20hit\x20an\x20oops',
        'LyjzZ': '/api/error',
        'EeALg': function (_0x17867e, _0x3244f2) {
            return _0x17867e(_0x3244f2);
        },
        'ZkdrV': function (_0x4529db, _0x558843) {
            return _0x4529db(_0x558843);
        },
        'uJasW': 'some\x20error\x20from\x20/api/error',
        'LpiAO': function (_0x578d9c, _0x540ac6, _0xc44f32, _0x5b8fcd, _0x9296b6) {
            return _0x578d9c(_0x540ac6, _0xc44f32, _0x5b8fcd, _0x9296b6);
        },
        'LLCuN': '/optional-ssp',
        'XhaDP': 'value',
        'rCQct': '/optional-ssp/[[...rest]]',
        'rpNat': function (_0x15ba4f, _0x3f1ddb) {
            return _0x15ba4f(_0x3f1ddb);
        },
        'oPhha': function (_0x5522a7, _0x42b073, _0x2ed480, _0x34aa56, _0x4256d7) {
            return _0x5522a7(_0x42b073, _0x2ed480, _0x34aa56, _0x4256d7);
        },
        'CsNPt': '/optional-ssg',
        'LgKlQ': '/optional-ssg/[[...rest]]',
        'ZWmev': '1=en%2Fes%2Fhello%252Fworld&rest=en%2Fes%2Fhello%252Fworld',
        'ZUnHn': function (_0x4de441, _0x14eba2) {
            return _0x4de441(_0x14eba2);
        },
        'bgEeZ': function (_0x479d54, _0x1bebfd, _0x14d4a2, _0x465e79, _0x6749f9) {
            return _0x479d54(_0x1bebfd, _0x14d4a2, _0x465e79, _0x6749f9);
        },
        'AXKRM': '/api/optional',
        'szesz': '/api/optional/[[...rest]]',
        'MJAuN': function (_0x24fa07, _0x4d5360) {
            return _0x24fa07(_0x4d5360);
        },
        'lMNLc': function (_0x3bae33, _0x2596fa) {
            return _0x3bae33(_0x2596fa);
        },
        'viTRn': '/api/optional?another=value',
        'plRhT': '/index',
        'Tygsw': function (_0x47c4be, _0x51d220) {
            return _0x47c4be(_0x51d220);
        },
        'IFOLd': '/[slug]',
        'YoKhy': '#slug-page',
        'cgFGb': '[slug]\x20page',
        'DiGXb': function (_0x2943fe, _0x3a310d, _0x30798b) {
            return _0x2943fe(_0x3a310d, _0x30798b);
        },
        'qfUYJ': 'should\x20output\x20required-server-files\x20manifest\x20correctly',
        'MJHVP': 'should\x20render\x20SSR\x20page\x20correctly',
        'ypDVc': 'should\x20render\x20dynamic\x20SSR\x20page\x20correctly',
        'OpXYz': 'should\x20render\x20fallback\x20page\x20correctly',
        'Mnsow': function (_0x4991da, _0x4dd594, _0x3dff38) {
            return _0x4991da(_0x4dd594, _0x3dff38);
        },
        'dqnzg': 'should\x20render\x20SSR\x20page\x20correctly\x20with\x20x-matched-path',
        'gJBJw': 'should\x20render\x20dynamic\x20SSR\x20page\x20correctly\x20with\x20x-matched-path',
        'iReMp': 'should\x20render\x20fallback\x20page\x20correctly\x20with\x20x-matched-path\x20and\x20routes-matches',
        'EOvCP': function (_0x40cf30, _0x4aa42f, _0x4e6769) {
            return _0x40cf30(_0x4aa42f, _0x4e6769);
        },
        'FznYf': 'should\x20return\x20data\x20correctly\x20with\x20x-matched-path',
        'oHbrM': 'should\x20render\x20fallback\x20optional\x20catch-all\x20route\x20correctly\x20with\x20x-matched-path\x20and\x20routes-matches',
        'mQsVU': function (_0x27eb58, _0x2b9232, _0x4ad2c5) {
            return _0x27eb58(_0x2b9232, _0x4ad2c5);
        },
        'uBKQV': 'should\x20return\x20data\x20correctly\x20with\x20x-matched-path\x20for\x20optional\x20catch-all\x20route',
        'RPdBC': function (_0x4de0eb, _0x872692, _0xe53292) {
            return _0x4de0eb(_0x872692, _0xe53292);
        },
        'pBvfq': 'should\x20not\x20apply\x20trailingSlash\x20redirect',
        'aOsuS': 'should\x20normalize\x20catch-all\x20rewrite\x20query\x20values\x20correctly',
        'WVWxx': 'should\x20bubble\x20error\x20correctly\x20for\x20gip\x20page',
        'OPGIc': function (_0x27dd49, _0x55c2cf, _0x3b058e) {
            return _0x27dd49(_0x55c2cf, _0x3b058e);
        },
        'JacNR': 'should\x20bubble\x20error\x20correctly\x20for\x20gssp\x20page',
        'WQzyE': function (_0x501235, _0x42e38d, _0x1d3f12) {
            return _0x501235(_0x42e38d, _0x1d3f12);
        },
        'wUQKx': 'should\x20bubble\x20error\x20correctly\x20for\x20gsp\x20page',
        'oAfym': 'should\x20bubble\x20error\x20correctly\x20for\x20API\x20page',
        'giWOR': 'should\x20normalize\x20optional\x20values\x20correctly\x20for\x20SSP\x20page',
        'SxSJd': 'should\x20normalize\x20optional\x20values\x20correctly\x20for\x20SSG\x20page',
        'XODUt': function (_0xf8647, _0x2efa9e, _0x3e897e) {
            return _0xf8647(_0x2efa9e, _0x3e897e);
        },
        'wkbaw': 'should\x20normalize\x20optional\x20values\x20correctly\x20for\x20SSG\x20page\x20with\x20encoded\x20slash',
        'QelZN': function (_0x1a033e, _0x22fff8, _0x2bcc18) {
            return _0x1a033e(_0x22fff8, _0x2bcc18);
        },
        'TzXye': 'should\x20normalize\x20optional\x20values\x20correctly\x20for\x20API\x20page',
        'ePxEB': 'should\x20match\x20the\x20index\x20page\x20correctly',
        'KmKFl': 'should\x20match\x20the\x20root\x20dyanmic\x20page\x20correctly'
    };
    _0x286a18['Tygsw'](beforeAll, async () => {
        const _0x1d9523 = {
                'lRggL': _0x286a18['XIjHb'],
                'xnUUh': _0x286a18['TxBPk'],
                'fRVwG': function (_0x4aab19, _0x36a272) {
                    return _0x286a18['yJRSC'](_0x4aab19, _0x36a272);
                },
                'hPBtO': _0x286a18['dFtCe'],
                'xfGcP': _0x286a18['nmJky']
            }, _0x51474b = await _0x37f21f['readJSON'](_0x286a18['spONB'](require['resolve'](_0x286a18['nmJky']), _0x286a18['UscYO'])), _0x552cf8 = _0x286a18['yJRSC'](dirname, require['resolve'](_0x286a18['yBjgG']));
        await _0x286a18['vDuzj'](_0x25f887, _0x286a18['ByInh'], [_0x286a18['mnfab']], { 'cwd': _0x552cf8 });
        const _0x374499 = _0x286a18['gZpfI'](join, _0x552cf8, 'next-v' + version + '.tgz');
        await _0x37f21f['ensureDir'](workDir), await _0x37f21f['writeFile'](_0x286a18['gZpfI'](join, workDir, _0x286a18['UThRV']), JSON['stringify']({
            'dependencies': {
                'next': _0x374499,
                'react': _0x286a18['tuEDb'],
                'react-dom': _0x286a18['tuEDb']
            }
        })), await _0x37f21f['copy'](appDir, workDir), await _0x286a18['JSXri'](_0x25f887, _0x286a18['ByInh'], [_0x286a18['Yunpy']], {
            'cwd': workDir,
            'stdio': [
                _0x286a18['gqPen'],
                _0x286a18['dOeMv'],
                _0x286a18['dOeMv']
            ],
            'env': {
                ...process['env'],
                'YARN_CACHE_FOLDER': _0x286a18['CEIUz'](join, workDir, _0x286a18['CQsxm'])
            }
        }), await _0x286a18['JSXri'](_0x25f887, _0x286a18['ByInh'], [
            _0x286a18['BgtPF'],
            _0x286a18['qcAez']
        ], {
            'cwd': workDir,
            'stdio': [
                _0x286a18['gqPen'],
                _0x286a18['dOeMv'],
                _0x286a18['dOeMv']
            ],
            'env': {
                ...process['env'],
                'NODE_ENV': _0x286a18['uhOOP'],
                'NOW_BUILDER': '1'
            }
        }), buildId = await _0x37f21f['readFile'](_0x286a18['guyjs'](join, workDir, _0x286a18['SUplT']), _0x286a18['wHuEd']), requiredFilesManifest = await _0x37f21f['readJSON'](_0x286a18['krdej'](join, workDir, _0x286a18['GlZnu'])), await _0x37f21f['ensureDir'](workDir + '-react'), await _0x37f21f['writeFile'](_0x286a18['yJRSC'](join, workDir + '-react/package.json'), JSON['stringify']({
            'dependencies': {
                'react': _0x286a18['tuEDb'],
                'react-dom': _0x286a18['tuEDb']
            }
        })), await _0x286a18['JSXri'](_0x25f887, _0x286a18['ByInh'], [_0x286a18['Yunpy']], {
            'cwd': workDir + '-react',
            'stdio': [
                _0x286a18['gqPen'],
                _0x286a18['dOeMv'],
                _0x286a18['dOeMv']
            ],
            'env': {
                ...process['env'],
                'YARN_CACHE_FOLDER': _0x286a18['krdej'](join, workDir, _0x286a18['mULhR'])
            }
        }), await _0x37f21f['remove'](_0x374499);
        const _0x12a411 = await _0x286a18['AXuwR'](recursiveReadDir, workDir, /.*/), _0x531c5b = await _0x53b80d['sync'](_0x286a18['KHqTW'], { 'cwd': _0x286a18['qJivd'](join, workDir, _0x286a18['xUBqw']) }), _0x3d7735 = new Set();
        for (const _0x3ae24e of _0x531c5b) {
            const _0x385a01 = _0x286a18['gGqUz'](join, workDir, _0x286a18['xUBqw'], _0x3ae24e), _0x9fba3d = await _0x37f21f['readJSON'](_0x385a01);
            _0x9fba3d['files']['forEach'](_0x15bddd => _0x3d7735['add'](relative(workDir, join(dirname(_0x385a01), _0x15bddd))));
        }
        for (const _0x91e7a of _0x12a411) {
            const _0x1d63a0 = _0x286a18['BjURE'](join, './', _0x91e7a);
            !_0x51474b['files']['includes'](_0x1d63a0) && _0x286a18['RgEHC'](_0x91e7a, _0x286a18['RGnAd']) && !_0x3d7735['has'](_0x1d63a0) && !requiredFilesManifest['files']['includes'](_0x1d63a0) && !_0x1d63a0['startsWith'](_0x286a18['ZingB']) && _0x286a18['icCic'](_0x1d63a0, _0x286a18['GlZnu']) && await _0x37f21f['remove'](_0x286a18['BjURE'](join, workDir, _0x91e7a));
        }
        for (const _0x3a6fa9 of await _0x37f21f['readdir'](workDir + '-react/node_modules')) {
            await _0x37f21f['copy'](_0x286a18['FmmTw'](join, workDir + '-react/node_modules', _0x3a6fa9), _0x286a18['gGqUz'](join, workDir, _0x286a18['QeNCP'], _0x3a6fa9));
        }
        await _0x37f21f['remove'](workDir + '-react');
        async function _0x4c756c() {
            const _0x3f5e26 = _0x1d9523['fRVwG'](require, _0x1d9523['hPBtO']), _0xfa9e28 = _0x1d9523['fRVwG'](require, _0x1d9523['xfGcP'])['default'], _0xe83580 = process['env']['PORT'];
            nextApp = new _0xfa9e28({
                'conf': global['nextConfig'],
                'dir': process['env']['APP_DIR'],
                'quiet': ![],
                'minimalMode': !![]
            }), server = _0x3f5e26['createServer'](async (_0xb81b00, _0x2a3f96) => {
                try {
                    await nextApp['getRequestHandler']()(_0xb81b00, _0x2a3f96);
                } catch (_0x5db12c) {
                    console['error'](_0x1d9523['lRggL'], _0x5db12c), _0x2a3f96['statusCode'] = 0x1f4, _0x2a3f96['end'](_0x1d9523['xnUUh']);
                }
            }), await new Promise((_0x301b54, _0x243843) => {
                server['listen'](_0xe83580, _0x5e8a05 => _0x5e8a05 ? _0x243843(_0x5e8a05) : _0x301b54());
            }), console['log']('Listening\x20at\x20::' + _0xe83580);
        }
        const _0x50d19c = _0x286a18['FmmTw'](join, workDir, _0x286a18['TtEde']);
        await _0x37f21f['writeFile'](_0x50d19c, _0x286a18['spONB'](_0x286a18['VFRlI'](_0x286a18['szRZZ'](_0x286a18['dvfdt'](_0x286a18['YLZfK'](_0x286a18['dLIsi'], JSON['stringify'](requiredFilesManifest['config'])), ';\x0a'), _0x4c756c['toString']()), ';\x0a'), 'startServer().catch(console.error)')), appPort = await _0x286a18['XlNFb'](findPort), server = await _0x286a18['ieCZm'](initNextServerScript, _0x50d19c, /Listening at/, {
            ...process['env'],
            'NODE_ENV': _0x286a18['uhOOP'],
            'PORT': appPort,
            'APP_DIR': workDir
        }, undefined, {
            'cwd': workDir,
            'onStderr'(_0x33f8f4) {
                _0x33f8f4['includes'](_0x1d9523['lRggL']) && errors['push'](_0x33f8f4);
            }
        });
    }), _0x286a18['Tygsw'](afterAll, async () => {
        if (server)
            _0x286a18['yJRSC'](killApp, server);
        await _0x37f21f['remove'](workDir);
    }), _0x286a18['DiGXb'](it, _0x286a18['qfUYJ'], async () => {
        _0x286a18['Ycahd'](expect, requiredFilesManifest['version'])['toBe'](0x1), _0x286a18['Ycahd'](expect, Array['isArray'](requiredFilesManifest['files']))['toBe'](!![]), _0x286a18['Ycahd'](expect, Array['isArray'](requiredFilesManifest['ignore']))['toBe'](!![]), _0x286a18['PuStd'](expect, requiredFilesManifest['files']['length'])['toBeGreaterThan'](0x0), _0x286a18['PuStd'](expect, requiredFilesManifest['ignore']['length'])['toBeGreaterThan'](0x0), _0x286a18['eXOCI'](expect, typeof requiredFilesManifest['config']['configFile'])['toBe'](_0x286a18['YjazG']), _0x286a18['JlsRs'](expect, typeof requiredFilesManifest['config']['trailingSlash'])['toBe'](_0x286a18['rrikl']), _0x286a18['JlsRs'](expect, typeof requiredFilesManifest['appDir'])['toBe'](_0x286a18['QAXyY']);
        for (const _0x48fa68 of requiredFilesManifest['files']) {
            _0x286a18['PqLXI'](expect, await _0x37f21f['exists'](_0x286a18['FmmTw'](join, workDir, _0x48fa68)))['toBe'](!![]);
        }
        _0x286a18['PqLXI'](expect, await _0x37f21f['exists'](_0x286a18['DUBLo'](join, workDir, _0x286a18['ZingB'])))['toBe'](!![]);
    }), _0x286a18['DiGXb'](it, _0x286a18['MJHVP'], async () => {
        const _0x557262 = await _0x286a18['DUBLo'](renderViaHTTP, appPort, '/'), _0xd70bb5 = _0x121137['load'](_0x557262), _0xb8cb0d = JSON['parse'](_0x286a18['PqLXI'](_0xd70bb5, _0x286a18['EDaXr'])['text']());
        _0x286a18['PqLXI'](expect, _0x286a18['PqLXI'](_0xd70bb5, _0x286a18['XTXWr'])['text']())['toBe'](_0x286a18['wlwED']), _0x286a18['PqLXI'](expect, _0xb8cb0d['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x4a351e = await _0x286a18['DUBLo'](renderViaHTTP, appPort, '/'), _0x4f8df2 = _0x121137['load'](_0x4a351e), _0x1a91be = JSON['parse'](_0x286a18['PqLXI'](_0x4f8df2, _0x286a18['EDaXr'])['text']());
        _0x286a18['GZSUw'](expect, _0x286a18['GZSUw'](_0x4f8df2, _0x286a18['XTXWr'])['text']())['toBe'](_0x286a18['wlwED']), _0x286a18['GZSUw'](expect, _0x286a18['GZSUw'](isNaN, _0x1a91be['random']))['toBe'](![]), _0x286a18['GZSUw'](expect, _0x1a91be['random'])['not']['toBe'](_0xb8cb0d['random']);
    }), _0x286a18['DiGXb'](it, _0x286a18['ypDVc'], async () => {
        const _0x5cf076 = await _0x286a18['hMjtE'](renderViaHTTP, appPort, _0x286a18['FLRRO']), _0x475ed7 = _0x121137['load'](_0x5cf076), _0x1c5341 = JSON['parse'](_0x286a18['rkCjk'](_0x475ed7, _0x286a18['EDaXr'])['text']());
        _0x286a18['yUnTe'](expect, _0x286a18['yUnTe'](_0x475ed7, _0x286a18['pqfIl'])['text']())['toBe'](_0x286a18['UyczO']), _0x286a18['yUnTe'](expect, _0x286a18['wjWtB'](_0x475ed7, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['iKSQh']), _0x286a18['wjWtB'](expect, _0x1c5341['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x577263 = await _0x286a18['YLUpY'](renderViaHTTP, appPort, _0x286a18['EqPLG']), _0x76180b = _0x121137['load'](_0x577263), _0xf1aa8c = JSON['parse'](_0x286a18['KXtHC'](_0x76180b, _0x286a18['EDaXr'])['text']());
        _0x286a18['uQAGw'](expect, _0x286a18['uQAGw'](_0x76180b, _0x286a18['pqfIl'])['text']())['toBe'](_0x286a18['UyczO']), _0x286a18['KtGII'](expect, _0x286a18['kJZGw'](_0x76180b, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['IvgXQ']), _0x286a18['vjpBF'](expect, _0x286a18['sHdqw'](isNaN, _0xf1aa8c['random']))['toBe'](![]), _0x286a18['sHdqw'](expect, _0xf1aa8c['random'])['not']['toBe'](_0x1c5341['random']);
    }), _0x286a18['DiGXb'](it, _0x286a18['OpXYz'], async () => {
        const _0x171dbf = await _0x286a18['YLUpY'](renderViaHTTP, appPort, _0x286a18['uvRPn']), _0x185843 = _0x121137['load'](_0x171dbf), _0x57a69f = JSON['parse'](_0x286a18['sHdqw'](_0x185843, _0x286a18['EDaXr'])['text']());
        _0x286a18['sHdqw'](expect, _0x286a18['blLzA'](_0x185843, _0x286a18['UdTeM'])['text']())['toBe'](_0x286a18['HqteJ']), _0x286a18['qORtH'](expect, _0x286a18['OHchP'](_0x185843, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['iKSQh']), _0x286a18['OHchP'](expect, _0x57a69f['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x511d3d = await _0x286a18['YLUpY'](renderViaHTTP, appPort, _0x286a18['uvRPn']), _0x14d3f4 = _0x121137['load'](_0x511d3d), _0x9aeae4 = JSON['parse'](_0x286a18['uvLaM'](_0x14d3f4, _0x286a18['EDaXr'])['text']());
        _0x286a18['eVJZl'](expect, _0x286a18['eVJZl'](_0x14d3f4, _0x286a18['UdTeM'])['text']())['toBe'](_0x286a18['HqteJ']), _0x286a18['smyaZ'](expect, _0x286a18['smyaZ'](_0x14d3f4, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['iKSQh']), _0x286a18['ZyKjy'](expect, _0x286a18['AAlud'](isNaN, _0x9aeae4['random']))['toBe'](![]), _0x286a18['CPmsa'](expect, _0x9aeae4['random'])['not']['toBe'](_0x57a69f['random']);
        const _0x55ff9c = await _0x286a18['YLUpY'](renderViaHTTP, appPort, _0x286a18['eMcxF']), _0x10888d = _0x121137['load'](_0x55ff9c), _0x885fe = JSON['parse'](_0x286a18['CPmsa'](_0x10888d, _0x286a18['EDaXr'])['text']());
        _0x286a18['CPmsa'](expect, _0x286a18['CPmsa'](_0x10888d, _0x286a18['UdTeM'])['text']())['toBe'](_0x286a18['HqteJ']), _0x286a18['dKcsg'](expect, _0x286a18['fWKIK'](_0x10888d, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['IvgXQ']), _0x286a18['fWKIK'](expect, _0x286a18['wvEYx'](isNaN, _0x885fe['random']))['toBe'](![]);
        const {pageProps: _0xd4c8bf} = JSON['parse'](await _0x286a18['YLUpY'](renderViaHTTP, appPort, '/_next/data/' + buildId + '/fallback/third.json'));
        _0x286a18['nvcsU'](expect, _0xd4c8bf['hello'])['toBe'](_0x286a18['OgstY']), _0x286a18['nvcsU'](expect, _0xd4c8bf['slug'])['toBe'](_0x286a18['prBIU']);
    }), _0x286a18['Mnsow'](it, _0x286a18['dqnzg'], async () => {
        const _0x1481ed = await _0x286a18['Ncgyo'](renderViaHTTP, appPort, _0x286a18['Rtmch'], undefined, { 'headers': { 'x-matched-path': '/' } }), _0x486357 = _0x121137['load'](_0x1481ed), _0x4cda25 = JSON['parse'](_0x286a18['bMYvG'](_0x486357, _0x286a18['EDaXr'])['text']());
        _0x286a18['fIKgz'](expect, _0x286a18['fTcAS'](_0x486357, _0x286a18['XTXWr'])['text']())['toBe'](_0x286a18['wlwED']), _0x286a18['YOeYy'](expect, _0x4cda25['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x1f4aae = await _0x286a18['kvkqT'](renderViaHTTP, appPort, _0x286a18['Rtmch'], undefined, { 'headers': { 'x-matched-path': '/' } }), _0x4da909 = _0x121137['load'](_0x1f4aae), _0x26fcc4 = JSON['parse'](_0x286a18['PwUoJ'](_0x4da909, _0x286a18['EDaXr'])['text']());
        _0x286a18['RJwzW'](expect, _0x286a18['DyGwB'](_0x4da909, _0x286a18['XTXWr'])['text']())['toBe'](_0x286a18['wlwED']), _0x286a18['mfPgC'](expect, _0x286a18['mfPgC'](isNaN, _0x26fcc4['random']))['toBe'](![]), _0x286a18['mfPgC'](expect, _0x26fcc4['random'])['not']['toBe'](_0x4cda25['random']);
    }), _0x286a18['Mnsow'](it, _0x286a18['gJBJw'], async () => {
        const _0x3cfc5b = await _0x286a18['slQbU'](renderViaHTTP, appPort, _0x286a18['Rtmch'], undefined, { 'headers': { 'x-matched-path': _0x286a18['YgUWC'] } }), _0x461994 = _0x121137['load'](_0x3cfc5b), _0x7beee6 = JSON['parse'](_0x286a18['mfPgC'](_0x461994, _0x286a18['EDaXr'])['text']());
        _0x286a18['AlSto'](expect, _0x286a18['seGOD'](_0x461994, _0x286a18['pqfIl'])['text']())['toBe'](_0x286a18['UyczO']), _0x286a18['seGOD'](expect, _0x286a18['XUxnY'](_0x461994, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['iKSQh']), _0x286a18['PNtpT'](expect, _0x7beee6['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x4a2d9b = await _0x286a18['slQbU'](renderViaHTTP, appPort, _0x286a18['Rtmch'], undefined, { 'headers': { 'x-matched-path': _0x286a18['nPkdP'] } }), _0x531f1c = _0x121137['load'](_0x4a2d9b), _0x784ccd = JSON['parse'](_0x286a18['PNtpT'](_0x531f1c, _0x286a18['EDaXr'])['text']());
        _0x286a18['PNtpT'](expect, _0x286a18['lHyeg'](_0x531f1c, _0x286a18['pqfIl'])['text']())['toBe'](_0x286a18['UyczO']), _0x286a18['iahsL'](expect, _0x286a18['ExeVx'](_0x531f1c, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['IvgXQ']), _0x286a18['ExeVx'](expect, _0x286a18['rGpFR'](isNaN, _0x784ccd['random']))['toBe'](![]), _0x286a18['tjptu'](expect, _0x784ccd['random'])['not']['toBe'](_0x7beee6['random']);
        const _0x3a305b = await _0x286a18['slQbU'](renderViaHTTP, appPort, _0x286a18['Rtmch'], undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['cjUVT'],
                    'x-now-route-matches': _0x286a18['irYSn']
                }
            }), _0x49101f = _0x121137['load'](_0x3a305b), _0x3112fa = JSON['parse'](_0x286a18['tjptu'](_0x49101f, _0x286a18['EDaXr'])['text']());
        _0x286a18['tjptu'](expect, _0x286a18['wnljP'](_0x49101f, _0x286a18['pqfIl'])['text']())['toBe'](_0x286a18['UyczO']), _0x286a18['wnljP'](expect, _0x286a18['dFPGH'](_0x49101f, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['IvgXQ']), _0x286a18['dFPGH'](expect, _0x286a18['UmAyl'](isNaN, _0x3112fa['random']))['toBe'](![]), _0x286a18['UmAyl'](expect, _0x3112fa['random'])['not']['toBe'](_0x7beee6['random']);
    }), _0x286a18['Mnsow'](it, _0x286a18['iReMp'], async () => {
        const _0x47e1d0 = await _0x286a18['slQbU'](renderViaHTTP, appPort, _0x286a18['uvRPn'], undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['uvRPn'],
                    'x-now-route-matches': _0x286a18['MOePL']
                }
            }), _0x4b82a9 = _0x121137['load'](_0x47e1d0), _0xd9d2bf = JSON['parse'](_0x286a18['UmAyl'](_0x4b82a9, _0x286a18['EDaXr'])['text']());
        _0x286a18['RFzUp'](expect, _0x286a18['dzagy'](_0x4b82a9, _0x286a18['UdTeM'])['text']())['toBe'](_0x286a18['HqteJ']), _0x286a18['dzagy'](expect, _0x286a18['NtJLZ'](_0x4b82a9, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['iKSQh']), _0x286a18['QiRaM'](expect, _0xd9d2bf['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x4e49f0 = await _0x286a18['LuJQA'](renderViaHTTP, appPort, '/fallback/[slug]', undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['spBoH'],
                    'x-now-route-matches': _0x286a18['biezh']
                }
            }), _0x388479 = _0x121137['load'](_0x4e49f0), _0x1d0291 = JSON['parse'](_0x286a18['QiRaM'](_0x388479, _0x286a18['EDaXr'])['text']());
        _0x286a18['zGKmG'](expect, _0x286a18['zGKmG'](_0x388479, _0x286a18['UdTeM'])['text']())['toBe'](_0x286a18['HqteJ']), _0x286a18['zGKmG'](expect, _0x286a18['zGKmG'](_0x388479, _0x286a18['jLmAN'])['text']())['toBe'](_0x286a18['IvgXQ']), _0x286a18['zGKmG'](expect, _0x286a18['zGKmG'](isNaN, _0x1d0291['random']))['toBe'](![]), _0x286a18['zGKmG'](expect, _0x1d0291['random'])['not']['toBe'](_0xd9d2bf['random']);
    }), _0x286a18['EOvCP'](it, _0x286a18['FznYf'], async () => {
        const _0x2c5b57 = await _0x286a18['LuJQA'](fetchViaHTTP, appPort, '/_next/data/' + buildId + '/dynamic/first.json', undefined, { 'headers': { 'x-matched-path': _0x286a18['YgUWC'] } }), {pageProps: _0xeecbdd} = await _0x2c5b57['json']();
        _0x286a18['SCDeR'](expect, _0xeecbdd['slug'])['toBe'](_0x286a18['iKSQh']), _0x286a18['rQZGp'](expect, _0xeecbdd['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x3846aa = await _0x286a18['LuJQA'](fetchViaHTTP, appPort, '/_next/data/' + buildId + '/fallback/[slug].json', undefined, {
                'headers': {
                    'x-matched-path': '/_next/data/' + buildId + '/fallback/[slug].json',
                    'x-now-route-matches': _0x286a18['biezh']
                }
            }), {pageProps: _0x370d75} = await _0x3846aa['json']();
        _0x286a18['EOTBh'](expect, _0x370d75['slug'])['toBe'](_0x286a18['IvgXQ']), _0x286a18['tVmUZ'](expect, _0x370d75['hello'])['toBe'](_0x286a18['OgstY']);
    }), _0x286a18['EOvCP'](it, _0x286a18['oHbrM'], async () => {
        const _0x5c01fc = await _0x286a18['LuJQA'](renderViaHTTP, appPort, _0x286a18['aVIAu'], undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['aVIAu'],
                    'x-now-route-matches': ''
                }
            }), _0x245108 = _0x121137['load'](_0x5c01fc), _0x14557b = JSON['parse'](_0x286a18['lWbQh'](_0x245108, _0x286a18['EDaXr'])['text']());
        _0x286a18['lWbQh'](expect, _0x286a18['lWbQh'](_0x245108, _0x286a18['SFlrx'])['text']())['toBe'](_0x286a18['FCcxq']), _0x286a18['lWbQh'](expect, _0x14557b['params'])['toEqual']({}), _0x286a18['lWbQh'](expect, _0x14557b['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x1a9404 = await _0x286a18['LuJQA'](renderViaHTTP, appPort, _0x286a18['aVIAu'], undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['aVIAu'],
                    'x-now-route-matches': _0x286a18['XkbAO']
                }
            }), _0x1778d6 = _0x121137['load'](_0x1a9404), _0x2d8a24 = JSON['parse'](_0x286a18['ugfCC'](_0x1778d6, _0x286a18['EDaXr'])['text']());
        _0x286a18['ugfCC'](expect, _0x286a18['ugfCC'](_0x1778d6, _0x286a18['SFlrx'])['text']())['toBe'](_0x286a18['FCcxq']), _0x286a18['vcHfU'](expect, _0x2d8a24['params'])['toEqual']({ 'rest': [_0x286a18['dhvly']] }), _0x286a18['vcHfU'](expect, _0x286a18['vcHfU'](isNaN, _0x2d8a24['random']))['toBe'](![]), _0x286a18['CdNgG'](expect, _0x2d8a24['random'])['not']['toBe'](_0x14557b['random']);
        const _0x400d7f = await _0x286a18['DAXmZ'](renderViaHTTP, appPort, _0x286a18['SbbvP'], undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['aVIAu'],
                    'x-now-route-matches': _0x286a18['HfGby']
                }
            }), _0x52faa0 = _0x121137['load'](_0x400d7f), _0x1061cc = JSON['parse'](_0x286a18['nqfMG'](_0x52faa0, _0x286a18['EDaXr'])['text']());
        _0x286a18['QdRWO'](expect, _0x286a18['JozvU'](_0x52faa0, _0x286a18['SFlrx'])['text']())['toBe'](_0x286a18['FCcxq']), _0x286a18['EOECl'](expect, _0x1061cc['params'])['toEqual']({
            'rest': [
                _0x286a18['dhvly'],
                _0x286a18['OgstY']
            ]
        }), _0x286a18['HSuSu'](expect, _0x286a18['HSuSu'](isNaN, _0x1061cc['random']))['toBe'](![]), _0x286a18['BPawj'](expect, _0x1061cc['random'])['not']['toBe'](_0x14557b['random']);
    }), _0x286a18['mQsVU'](it, _0x286a18['uBKQV'], async () => {
        const _0x34fd9 = await _0x286a18['DAXmZ'](fetchViaHTTP, appPort, '/_next/data/' + buildId + '/catch-all.json', undefined, { 'headers': { 'x-matched-path': _0x286a18['aVIAu'] } }), {pageProps: _0x2cff4e} = await _0x34fd9['json']();
        _0x286a18['rGRMa'](expect, _0x2cff4e['params'])['toEqual']({}), _0x286a18['JfPIa'](expect, _0x2cff4e['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x190bb8 = await _0x286a18['DAXmZ'](fetchViaHTTP, appPort, '/_next/data/' + buildId + '/catch-all/[[...rest]].json', undefined, {
                'headers': {
                    'x-matched-path': '/_next/data/' + buildId + '/catch-all/[[...rest]].json',
                    'x-now-route-matches': _0x286a18['OamSC']
                }
            }), {pageProps: _0x202ac1} = await _0x190bb8['json']();
        _0x286a18['rfqFX'](expect, _0x202ac1['params'])['toEqual']({ 'rest': [_0x286a18['dhvly']] }), _0x286a18['rfqFX'](expect, _0x202ac1['hello'])['toBe'](_0x286a18['OgstY']);
        const _0x4f029c = await _0x286a18['DAXmZ'](fetchViaHTTP, appPort, '/_next/data/' + buildId + '/catch-all/[[...rest]].json', undefined, {
                'headers': {
                    'x-matched-path': '/_next/data/' + buildId + '/catch-all/[[...rest]].json',
                    'x-now-route-matches': _0x286a18['EsTNI']
                }
            }), {pageProps: _0x1076ae} = await _0x4f029c['json']();
        _0x286a18['rfqFX'](expect, _0x1076ae['params'])['toEqual']({
            'rest': [
                _0x286a18['dhvly'],
                _0x286a18['OgstY']
            ]
        }), _0x286a18['tVfCV'](expect, _0x1076ae['hello'])['toBe'](_0x286a18['OgstY']);
    }), _0x286a18['RPdBC'](it, _0x286a18['pBvfq'], async () => {
        for (const _0x3d8c44 of [
                '/',
                _0x286a18['rOVMl'],
                _0x286a18['oXjAc'],
                _0x286a18['noKnz'],
                _0x286a18['uvRPn'],
                _0x286a18['nGXCX'],
                _0x286a18['vcqIx']
            ]) {
            const _0x9588d0 = await _0x286a18['DAXmZ'](fetchViaHTTP, appPort, _0x3d8c44, undefined, { 'redirect': _0x286a18['cgMtc'] });
            _0x286a18['tVfCV'](expect, _0x9588d0['status'])['toBe'](0xc8);
        }
    }), _0x286a18['RPdBC'](it, _0x286a18['aOsuS'], async () => {
        const _0x42e774 = await _0x286a18['DAXmZ'](renderViaHTTP, appPort, _0x286a18['GbAvB'], { 'path': _0x286a18['KFtfO'] }, { 'headers': { 'x-matched-path': '/' } }), _0x30cdf2 = _0x121137['load'](_0x42e774);
        _0x286a18['tVfCV'](expect, JSON['parse'](_0x286a18['tVfCV'](_0x30cdf2, _0x286a18['EBBWc'])['text']())['query'])['toEqual']({
            'path': [
                _0x286a18['dhvly'],
                _0x286a18['OgstY']
            ]
        });
    }), _0x286a18['RPdBC'](it, _0x286a18['WVWxx'], async () => {
        errors = [];
        const _0x4ca415 = await _0x286a18['gGqUz'](fetchViaHTTP, appPort, _0x286a18['qnICk'], { 'crash': '1' });
        _0x286a18['tVfCV'](expect, _0x4ca415['status'])['toBe'](0x1f4), _0x286a18['tVfCV'](expect, await _0x4ca415['text']())['toBe'](_0x286a18['TxBPk']), _0x286a18['JVaQc'](expect, errors['length'])['toBe'](0x1), _0x286a18['FKUgi'](expect, errors[0x0])['toContain'](_0x286a18['vPtQb']);
    }), _0x286a18['OPGIc'](it, _0x286a18['JacNR'], async () => {
        errors = [];
        const _0x36ae62 = await _0x286a18['zEaWT'](fetchViaHTTP, appPort, _0x286a18['DNfyw'], { 'crash': '1' });
        _0x286a18['IZvBi'](expect, _0x36ae62['status'])['toBe'](0x1f4), _0x286a18['IZvBi'](expect, await _0x36ae62['text']())['toBe'](_0x286a18['TxBPk']), _0x286a18['oelSm'](expect, errors['length'])['toBe'](0x1), _0x286a18['cTYfS'](expect, errors[0x0])['toContain'](_0x286a18['QYLLU']);
    }), _0x286a18['WQzyE'](it, _0x286a18['wUQKx'], async () => {
        errors = [];
        const _0x3cf021 = await _0x286a18['YLUpY'](fetchViaHTTP, appPort, _0x286a18['OJxcx']);
        _0x286a18['pwEeL'](expect, _0x3cf021['status'])['toBe'](0x1f4), _0x286a18['ULPPP'](expect, await _0x3cf021['text']())['toBe'](_0x286a18['TxBPk']), _0x286a18['ULPPP'](expect, errors['length'])['toBe'](0x1), _0x286a18['OnmXS'](expect, errors[0x0])['toContain'](_0x286a18['OwQLV']);
    }), _0x286a18['WQzyE'](it, _0x286a18['oAfym'], async () => {
        errors = [];
        const _0xbd8606 = await _0x286a18['YLUpY'](fetchViaHTTP, appPort, _0x286a18['LyjzZ']);
        _0x286a18['OnmXS'](expect, _0xbd8606['status'])['toBe'](0x1f4), _0x286a18['OnmXS'](expect, await _0xbd8606['text']())['toBe'](_0x286a18['TxBPk']), _0x286a18['EeALg'](expect, errors['length'])['toBe'](0x1), _0x286a18['ZkdrV'](expect, errors[0x0])['toContain'](_0x286a18['uJasW']);
    }), _0x286a18['WQzyE'](it, _0x286a18['giWOR'], async () => {
        const _0x3e1e18 = await _0x286a18['LpiAO'](fetchViaHTTP, appPort, _0x286a18['LLCuN'], {
                'rest': '',
                'another': _0x286a18['XhaDP']
            }, { 'headers': { 'x-matched-path': _0x286a18['rCQct'] } }), _0x58c368 = await _0x3e1e18['text'](), _0x216951 = _0x121137['load'](_0x58c368), _0x735d5 = JSON['parse'](_0x286a18['ZkdrV'](_0x216951, _0x286a18['EDaXr'])['text']());
        _0x286a18['ZkdrV'](expect, _0x735d5['params'])['toEqual']({}), _0x286a18['rpNat'](expect, _0x735d5['query'])['toEqual']({ 'another': _0x286a18['XhaDP'] });
    }), _0x286a18['WQzyE'](it, _0x286a18['SxSJd'], async () => {
        const _0x3db398 = await _0x286a18['oPhha'](fetchViaHTTP, appPort, _0x286a18['CsNPt'], {
                'rest': '',
                'another': _0x286a18['XhaDP']
            }, { 'headers': { 'x-matched-path': _0x286a18['LgKlQ'] } }), _0x4ed6be = await _0x3db398['text'](), _0x45703d = _0x121137['load'](_0x4ed6be), _0x393ff3 = JSON['parse'](_0x286a18['rpNat'](_0x45703d, _0x286a18['EDaXr'])['text']());
        _0x286a18['rpNat'](expect, _0x393ff3['params'])['toEqual']({});
    }), _0x286a18['XODUt'](it, _0x286a18['wkbaw'], async () => {
        const _0x4f0579 = await _0x286a18['oPhha'](fetchViaHTTP, appPort, _0x286a18['LgKlQ'], undefined, {
                'headers': {
                    'x-matched-path': _0x286a18['LgKlQ'],
                    'x-now-route-matches': _0x286a18['ZWmev']
                }
            }), _0x9a47e9 = await _0x4f0579['text'](), _0x33b10a = _0x121137['load'](_0x9a47e9), _0x209582 = JSON['parse'](_0x286a18['ZUnHn'](_0x33b10a, _0x286a18['EDaXr'])['text']());
        _0x286a18['ZUnHn'](expect, _0x209582['params'])['toEqual']({
            'rest': [
                'en',
                'es',
                _0x286a18['KFtfO']
            ]
        });
    }), _0x286a18['QelZN'](it, _0x286a18['TzXye'], async () => {
        const _0x219740 = await _0x286a18['bgEeZ'](fetchViaHTTP, appPort, _0x286a18['AXKRM'], {
                'rest': '',
                'another': _0x286a18['XhaDP']
            }, { 'headers': { 'x-matched-path': _0x286a18['szesz'] } }), _0x1a2511 = await _0x219740['json']();
        _0x286a18['MJAuN'](expect, _0x1a2511['query'])['toEqual']({ 'another': _0x286a18['XhaDP'] }), _0x286a18['lMNLc'](expect, _0x1a2511['url'])['toBe'](_0x286a18['viTRn']);
    }), _0x286a18['QelZN'](it, _0x286a18['ePxEB'], async () => {
        const _0x1cba31 = await _0x286a18['bgEeZ'](fetchViaHTTP, appPort, '/', undefined, {
                'headers': { 'x-matched-path': _0x286a18['plRhT'] },
                'redirect': _0x286a18['cgMtc']
            }), _0x56950c = await _0x1cba31['text'](), _0x38e969 = _0x121137['load'](_0x56950c);
        _0x286a18['lMNLc'](expect, _0x286a18['Tygsw'](_0x38e969, _0x286a18['XTXWr'])['text']())['toBe'](_0x286a18['wlwED']);
    }), _0x286a18['QelZN'](it, _0x286a18['KmKFl'], async () => {
        const _0x3feca7 = await _0x286a18['bgEeZ'](fetchViaHTTP, appPort, _0x286a18['plRhT'], undefined, {
                'headers': { 'x-matched-path': _0x286a18['IFOLd'] },
                'redirect': _0x286a18['cgMtc']
            }), _0xe19ac7 = await _0x3feca7['text'](), _0x259682 = _0x121137['load'](_0xe19ac7);
        _0x286a18['Tygsw'](expect, _0x286a18['Tygsw'](_0x259682, _0x286a18['YoKhy'])['text']())['toBe'](_0x286a18['cgFGb']);
    });
});
