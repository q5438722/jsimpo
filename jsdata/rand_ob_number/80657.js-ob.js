const FRONT_COLORS = [
    '#ffffff',
    '#000000'
];
export const setNavigationBarColor = {
    'frontColor': {
        'type': String,
        'required': !![],
        'validator'(_0x33c343, _0x1bc693) {
            if (FRONT_COLORS['indexOf'](_0x33c343) === -(0x1231 * -0x2 + 0x1b07 + 0x95c))
                return 'invalid\x20frontColor\x20\x22' + _0x33c343 + '\x22';
        }
    },
    'backgroundColor': {
        'type': String,
        'required': !![]
    },
    'animation': {
        'type': Object,
        'default'() {
            return {
                'duration': 0x0,
                'timingFunc': 'linear'
            };
        },
        'validator'(_0xa0710b = {}, _0x4ad67c) {
            _0x4ad67c['animation'] = {
                'duration': _0xa0710b['duration'] || -0x1318 + 0x3b * 0x91 + -0xe53,
                'timingFunc': _0xa0710b['timingFunc'] || 'linear'
            };
        }
    }
};
export const setNavigationBarTitle = {
    'title': {
        'type': String,
        'required': !![]
    }
};
