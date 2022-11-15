!function () {
    if (jQuery && jQuery['fn'] && jQuery['fn']['select2'] && jQuery['fn']['select2']['amd'])
        var _0x733d25 = jQuery['fn']['select2']['amd'];
    _0x733d25['define']('select2/i18n/af', [], function () {
        return {
            'errorLoading': function () {
                return 'Die\x20resultate\x20kon\x20nie\x20gelaai\x20word\x20nie.';
            },
            'inputTooLong': function (_0x5434d9) {
                var _0x2dedd0 = _0x5434d9['input']['length'] - _0x5434d9['maximum'], _0x457daa = 'Verwyders\x20asseblief\x20' + _0x2dedd0 + '\x20character';
                return 0x113d + 0x88c * -0x4 + -0x10f4 * -0x1 != _0x2dedd0 && (_0x457daa += 's'), _0x457daa;
            },
            'inputTooShort': function (_0x54f8ae) {
                return 'Voer\x20asseblief\x20' + (_0x54f8ae['minimum'] - _0x54f8ae['input']['length']) + '\x20of\x20meer\x20karakters';
            },
            'loadingMore': function () {
                return 'Meer\x20resultate\x20word\x20gelaai…';
            },
            'maximumSelected': function (_0x2950af) {
                var _0x400d2c = 'Kies\x20asseblief\x20net\x20' + _0x2950af['maximum'] + '\x20item';
                return -0x1a76 + 0x1999 + 0xde != _0x2950af['maximum'] && (_0x400d2c += 's'), _0x400d2c;
            },
            'noResults': function () {
                return 'Geen\x20resultate\x20gevind';
            },
            'searching': function () {
                return 'Besig…';
            },
            'removeAllItems': function () {
                return 'Verwyder\x20alle\x20items';
            }
        };
    }), _0x733d25['define'], _0x733d25['require'];
}();
