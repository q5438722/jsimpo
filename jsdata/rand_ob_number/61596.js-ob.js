const fast_regexp_result = /./g['exec']('a');
fast_regexp_result['length'] = 0x1479 + -0x2527 * -0x1 + -0x39a0;
class RegExpWithFastResult extends RegExp {
    constructor() {
        super('.', 'g'), this['number_of_runs'] = -0x129b * 0x1 + 0x1add + -0x2 * 0x421;
    }
    ['exec'](_0x44d42f) {
        return this['number_of_runs']++ == 0x16 * -0xfe + 0x218c + -0xbb8 ? fast_regexp_result : null;
    }
}
const slow_regexp_result = [];
class RegExpWithSlowResult extends RegExp {
    constructor() {
        super('.', 'g'), this['number_of_runs'] = 0x1 * 0x1046 + 0x2475 + 0x1 * -0x34bb;
    }
    ['exec'](_0x843c6) {
        return this['number_of_runs']++ == 0xa57 * -0x1 + 0x19 * -0x16b + -0x1 * -0x2dca ? slow_regexp_result : null;
    }
}
assertEquals(['undefined'], 'a'['match'](new RegExpWithFastResult())), assertEquals(['undefined'], 'a'['match'](new RegExpWithSlowResult()));
