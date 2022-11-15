export const reservedWords = {
    0x3: 'abstract\x20boolean\x20byte\x20char\x20class\x20double\x20enum\x20export\x20extends\x20final\x20float\x20goto\x20implements\x20import\x20int\x20interface\x20long\x20native\x20package\x20private\x20protected\x20public\x20short\x20static\x20super\x20synchronized\x20throws\x20transient\x20volatile',
    0x5: 'class\x20enum\x20extends\x20super\x20const\x20export\x20import',
    0x6: 'enum',
    'strict': 'implements\x20interface\x20let\x20package\x20private\x20protected\x20public\x20static\x20yield',
    'strictBind': 'eval\x20arguments'
};
var ecma5AndLessKeywords = 'break\x20case\x20catch\x20continue\x20debugger\x20default\x20do\x20else\x20finally\x20for\x20function\x20if\x20return\x20switch\x20throw\x20try\x20var\x20while\x20with\x20null\x20true\x20false\x20instanceof\x20typeof\x20void\x20delete\x20new\x20in\x20this';
export const keywords = {
    0x5: ecma5AndLessKeywords,
    0x6: ecma5AndLessKeywords + '\x20const\x20class\x20extends\x20export\x20import\x20super'
};
let nonASCIIidentifierStartChars = 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ', nonASCIIidentifierChars = '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿';
const nonASCIIidentifierStart = new RegExp('[' + nonASCIIidentifierStartChars + ']'), nonASCIIidentifier = new RegExp('[' + nonASCIIidentifierStartChars + nonASCIIidentifierChars + ']');
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [
        0x0,
        0xb,
        0x2,
        0x19,
        0x2,
        0x12,
        0x2,
        0x1,
        0x2,
        0xe,
        0x3,
        0xd,
        0x23,
        0x7a,
        0x46,
        0x34,
        0x10c,
        0x1c,
        0x4,
        0x30,
        0x30,
        0x1f,
        0x11,
        0x1a,
        0x6,
        0x25,
        0xb,
        0x1d,
        0x3,
        0x23,
        0x5,
        0x7,
        0x2,
        0x4,
        0x2b,
        0x9d,
        0x13,
        0x23,
        0x5,
        0x23,
        0x5,
        0x27,
        0x9,
        0x33,
        0x9d,
        0x136,
        0xa,
        0x15,
        0xb,
        0x7,
        0x99,
        0x5,
        0x3,
        0x0,
        0x2,
        0x2b,
        0x2,
        0x1,
        0x4,
        0x0,
        0x3,
        0x16,
        0xb,
        0x16,
        0xa,
        0x1e,
        0x42,
        0x12,
        0x2,
        0x1,
        0xb,
        0x15,
        0xb,
        0x19,
        0x47,
        0x37,
        0x7,
        0x1,
        0x41,
        0x0,
        0x10,
        0x3,
        0x2,
        0x2,
        0x2,
        0x1a,
        0x2d,
        0x1c,
        0x4,
        0x1c,
        0x24,
        0x7,
        0x2,
        0x1b,
        0x1c,
        0x35,
        0xb,
        0x15,
        0xb,
        0x12,
        0xe,
        0x11,
        0x6f,
        0x48,
        0x38,
        0x32,
        0xe,
        0x32,
        0x311,
        0x34,
        0x4c,
        0x2c,
        0x21,
        0x18,
        0x1b,
        0x23,
        0x2a,
        0x22,
        0x4,
        0x0,
        0xd,
        0x2f,
        0xf,
        0x3,
        0x16,
        0x0,
        0x2,
        0x0,
        0x24,
        0x11,
        0x2,
        0x18,
        0x55,
        0x6,
        0x2,
        0x0,
        0x2,
        0x3,
        0x2,
        0xe,
        0x2,
        0x9,
        0x8,
        0x2e,
        0x27,
        0x7,
        0x3,
        0x1,
        0x3,
        0x15,
        0x2,
        0x6,
        0x2,
        0x1,
        0x2,
        0x4,
        0x4,
        0x0,
        0x13,
        0x0,
        0xd,
        0x4,
        0x9f,
        0x34,
        0x13,
        0x3,
        0x36,
        0x2f,
        0x15,
        0x1,
        0x2,
        0x0,
        0xb9,
        0x2e,
        0x2a,
        0x3,
        0x25,
        0x2f,
        0x15,
        0x0,
        0x3c,
        0x2a,
        0x56,
        0x19,
        0x187,
        0x3f,
        0x20,
        0x0,
        0x1c1,
        0x38,
        0x108,
        0x8,
        0x2,
        0x24,
        0x12,
        0x0,
        0x32,
        0x1d,
        0x371,
        0x399,
        0x67,
        0x6e,
        0x12,
        0xc3,
        0xabd,
        0x42e,
        0xfd2,
        0x246,
        0x21ba,
        0x238,
        0x8,
        0x1e,
        0x72,
        0x1d,
        0x13,
        0x2f,
        0x11,
        0x3,
        0x20,
        0x14,
        0x6,
        0x12,
        0x371,
        0x44,
        0xc,
        0x0,
        0x43,
        0xc,
        0x41,
        0x0,
        0x20,
        0x17ec,
        0x14,
        0x2f2,
        0x250e,
        0x1,
        0xbff,
        0x6a,
        0x6,
        0xc,
        0x4,
        0x8,
        0x8,
        0x9,
        0x1767,
        0x54,
        0x2,
        0x46,
        0x2,
        0x1,
        0x3,
        0x0,
        0x3,
        0x1,
        0x3,
        0x3,
        0x2,
        0xb,
        0x2,
        0x0,
        0x2,
        0x6,
        0x2,
        0x40,
        0x2,
        0x3,
        0x3,
        0x7,
        0x2,
        0x6,
        0x2,
        0x1b,
        0x2,
        0x3,
        0x2,
        0x4,
        0x2,
        0x0,
        0x4,
        0x6,
        0x2,
        0x153,
        0x3,
        0x18,
        0x2,
        0x18,
        0x2,
        0x1e,
        0x2,
        0x18,
        0x2,
        0x1e,
        0x2,
        0x18,
        0x2,
        0x1e,
        0x2,
        0x18,
        0x2,
        0x1e,
        0x2,
        0x18,
        0x2,
        0x7,
        0x1035,
        0xc4,
        0x3c,
        0x43,
        0x4bd,
        0x3,
        0x2,
        0x1a,
        0x2,
        0x1,
        0x2,
        0x0,
        0x3,
        0x0,
        0x2,
        0x9,
        0x2,
        0x3,
        0x2,
        0x0,
        0x2,
        0x0,
        0x7,
        0x0,
        0x5,
        0x0,
        0x2,
        0x0,
        0x2,
        0x0,
        0x2,
        0x2,
        0x2,
        0x1,
        0x2,
        0x0,
        0x3,
        0x0,
        0x2,
        0x0,
        0x2,
        0x0,
        0x2,
        0x0,
        0x2,
        0x0,
        0x2,
        0x1,
        0x2,
        0x0,
        0x3,
        0x3,
        0x2,
        0x6,
        0x2,
        0x3,
        0x2,
        0x3,
        0x2,
        0x0,
        0x2,
        0x9,
        0x2,
        0x10,
        0x6,
        0x2,
        0x2,
        0x4,
        0x2,
        0x10,
        0x1145,
        0xa6d6,
        0x2a,
        0x1034,
        0xc,
        0xdd,
        0x3,
        0x1681,
        0x295f,
        0x21d
    ], astralIdentifierCodes = [
        0x1fd,
        0x0,
        0xe3,
        0x0,
        0x96,
        0x4,
        0x126,
        0x9,
        0x558,
        0x2,
        0x2,
        0x1,
        0x6,
        0x3,
        0x29,
        0x2,
        0x5,
        0x0,
        0xa6,
        0x1,
        0x51a,
        0x2,
        0x36,
        0xe,
        0x20,
        0x9,
        0x10,
        0x3,
        0x2e,
        0xa,
        0x36,
        0x9,
        0x7,
        0x2,
        0x25,
        0xd,
        0x2,
        0x9,
        0x34,
        0x0,
        0xd,
        0x2,
        0x31,
        0xd,
        0xa,
        0x2,
        0x4,
        0x9,
        0x53,
        0xb,
        0x7,
        0x0,
        0xa1,
        0xb,
        0x6,
        0x9,
        0x7,
        0x3,
        0x39,
        0x0,
        0x2,
        0x6,
        0x3,
        0x1,
        0x3,
        0x2,
        0xa,
        0x0,
        0xb,
        0x1,
        0x3,
        0x6,
        0x4,
        0x4,
        0xc1,
        0x11,
        0xa,
        0x9,
        0x57,
        0x13,
        0xd,
        0x9,
        0xd6,
        0x6,
        0x3,
        0x8,
        0x1c,
        0x1,
        0x53,
        0x10,
        0x10,
        0x9,
        0x52,
        0xc,
        0x9,
        0x9,
        0x54,
        0xe,
        0x5,
        0x9,
        0x1a7,
        0x9,
        0x346,
        0x7,
        0x2,
        0x7,
        0x11,
        0x9,
        0x39,
        0x15,
        0x2,
        0xd,
        0x4daa,
        0x9,
        0x87,
        0x4,
        0x3c,
        0x6,
        0x1a,
        0x9,
        0x3f8,
        0x2d,
        0x11,
        0x3,
        0x4d0b,
        0x1,
        0x14c7,
        0x4,
        0x4,
        0x5,
        0x9,
        0x7,
        0x3,
        0x6,
        0x1f,
        0x3,
        0x95,
        0x2,
        0x58a,
        0x31,
        0x201,
        0x36,
        0x5,
        0x31,
        0x9,
        0x0,
        0xf,
        0x0,
        0x17,
        0x4,
        0x2,
        0xe,
        0x551,
        0x6,
        0x2,
        0x10,
        0x3,
        0x6,
        0x2,
        0x1,
        0x2,
        0x4,
        0x8a6,
        0x6,
        0x6e,
        0x6,
        0x6,
        0x9,
        0xc17a7,
        0xef
    ];
function isInAstralSet(_0xac18c3, _0x2b4d48) {
    const _0x4ae4fc = {
        'vSAiN': function (_0x317d12, _0x575e26) {
            return _0x317d12 < _0x575e26;
        },
        'PqRDE': function (_0x35b591, _0x3c84a5) {
            return _0x35b591 > _0x3c84a5;
        },
        'PoXHm': function (_0x21a4c9, _0x2b2974) {
            return _0x21a4c9 + _0x2b2974;
        },
        'xLsEB': function (_0x2b3523, _0x49d2bf) {
            return _0x2b3523 >= _0x49d2bf;
        }
    };
    let _0x36102a = 0x10000;
    for (let _0x281ee6 = 0x0; _0x4ae4fc['vSAiN'](_0x281ee6, _0x2b4d48['length']); _0x281ee6 += 0x2) {
        _0x36102a += _0x2b4d48[_0x281ee6];
        if (_0x4ae4fc['PqRDE'](_0x36102a, _0xac18c3))
            return ![];
        _0x36102a += _0x2b4d48[_0x4ae4fc['PoXHm'](_0x281ee6, 0x1)];
        if (_0x4ae4fc['xLsEB'](_0x36102a, _0xac18c3))
            return !![];
    }
}
export function isIdentifierStart(_0x463994, _0x584c53) {
    const _0x329865 = {
            'jCwcy': '4|5|0|2|6|3|1',
            'zIIci': function (_0xa52e7c, _0x376f68) {
                return _0xa52e7c < _0x376f68;
            },
            'NIVEN': function (_0x3ad37d, _0x42eb68) {
                return _0x3ad37d === _0x42eb68;
            },
            'fuxgM': function (_0x1dde8a, _0x1fa092, _0x5846cc) {
                return _0x1dde8a(_0x1fa092, _0x5846cc);
            },
            'IWJwc': function (_0x37af3f, _0x400af6) {
                return _0x37af3f === _0x400af6;
            },
            'CXAVw': function (_0x37116f, _0x3582cb) {
                return _0x37116f === _0x3582cb;
            },
            'eIcDA': function (_0x218f19, _0x1dc3b7) {
                return _0x218f19 < _0x1dc3b7;
            },
            'HzXeC': function (_0x2041c8, _0x4dc463) {
                return _0x2041c8 <= _0x4dc463;
            },
            'kTXhX': function (_0x2144a6, _0x1d30d1) {
                return _0x2144a6 >= _0x1d30d1;
            }
        }, _0x2b3e37 = _0x329865['jCwcy']['split']('|');
    let _0x2e2de8 = 0x0;
    while (!![]) {
        switch (_0x2b3e37[_0x2e2de8++]) {
        case '0':
            if (_0x329865['zIIci'](_0x463994, 0x61))
                return _0x329865['NIVEN'](_0x463994, 0x5f);
            continue;
        case '1':
            return _0x329865['fuxgM'](isInAstralSet, _0x463994, astralIdentifierStartCodes);
        case '2':
            if (_0x329865['zIIci'](_0x463994, 0x7b))
                return !![];
            continue;
        case '3':
            if (_0x329865['IWJwc'](_0x584c53, ![]))
                return ![];
            continue;
        case '4':
            if (_0x329865['zIIci'](_0x463994, 0x41))
                return _0x329865['CXAVw'](_0x463994, 0x24);
            continue;
        case '5':
            if (_0x329865['eIcDA'](_0x463994, 0x5b))
                return !![];
            continue;
        case '6':
            if (_0x329865['HzXeC'](_0x463994, 0xffff))
                return _0x329865['kTXhX'](_0x463994, 0xaa) && nonASCIIidentifierStart['test'](String['fromCharCode'](_0x463994));
            continue;
        }
        break;
    }
}
export function isIdentifierChar(_0x362c8e, _0x800bf) {
    const _0x4b6de6 = {
            'MUVRx': '4|6|2|8|3|0|1|7|5',
            'ofWLn': function (_0x4d1946, _0x2c13b7) {
                return _0x4d1946 < _0x2c13b7;
            },
            'thkEF': function (_0x13bffa, _0x4f01c2) {
                return _0x13bffa <= _0x4f01c2;
            },
            'KeBSi': function (_0x5291f4, _0x48c2c7) {
                return _0x5291f4 >= _0x48c2c7;
            },
            'khcWK': function (_0x4a24b4, _0x256609) {
                return _0x4a24b4 < _0x256609;
            },
            'JGyep': function (_0x36f202, _0x55646c) {
                return _0x36f202 === _0x55646c;
            },
            'mQArb': function (_0xf853f, _0x56de4b) {
                return _0xf853f < _0x56de4b;
            },
            'XGZCL': function (_0x4c5e1e, _0x585642, _0x3e79d1) {
                return _0x4c5e1e(_0x585642, _0x3e79d1);
            },
            'EwWyv': function (_0xcf024c, _0x366dc0) {
                return _0xcf024c === _0x366dc0;
            }
        }, _0x4e0a78 = _0x4b6de6['MUVRx']['split']('|');
    let _0x3d0e3d = 0x0;
    while (!![]) {
        switch (_0x4e0a78[_0x3d0e3d++]) {
        case '0':
            if (_0x4b6de6['ofWLn'](_0x362c8e, 0x7b))
                return !![];
            continue;
        case '1':
            if (_0x4b6de6['thkEF'](_0x362c8e, 0xffff))
                return _0x4b6de6['KeBSi'](_0x362c8e, 0xaa) && nonASCIIidentifier['test'](String['fromCharCode'](_0x362c8e));
            continue;
        case '2':
            if (_0x4b6de6['ofWLn'](_0x362c8e, 0x41))
                return ![];
            continue;
        case '3':
            if (_0x4b6de6['khcWK'](_0x362c8e, 0x61))
                return _0x4b6de6['JGyep'](_0x362c8e, 0x5f);
            continue;
        case '4':
            if (_0x4b6de6['mQArb'](_0x362c8e, 0x30))
                return _0x4b6de6['JGyep'](_0x362c8e, 0x24);
            continue;
        case '5':
            return _0x4b6de6['XGZCL'](isInAstralSet, _0x362c8e, astralIdentifierStartCodes) || _0x4b6de6['XGZCL'](isInAstralSet, _0x362c8e, astralIdentifierCodes);
        case '6':
            if (_0x4b6de6['mQArb'](_0x362c8e, 0x3a))
                return !![];
            continue;
        case '7':
            if (_0x4b6de6['EwWyv'](_0x800bf, ![]))
                return ![];
            continue;
        case '8':
            if (_0x4b6de6['mQArb'](_0x362c8e, 0x5b))
                return !![];
            continue;
        }
        break;
    }
}
