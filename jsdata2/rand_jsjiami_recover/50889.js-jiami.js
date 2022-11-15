(function (_0x5d8028) {
    if (typeof define === 'function' && define['amd']) {
        if ('EIsJN' !== 'EIsJN') {
            define([
                'jquery',
                '../jquery.validate'
            ], _0x5d8028);
        } else {
            define([
                'jquery',
                '../jquery.validate'
            ], _0x5d8028);
        }
    } else if (typeof module === 'object' && module['exports']) {
        if ('GnWmN' === 'GnWmN') {
            module['exports'] = _0x5d8028(require('jquery'));
        } else {
            if (typeof define === 'function' && define['amd']) {
                define([
                    'jquery',
                    '../jquery.validate'
                ], _0x5d8028);
            } else if (typeof module === 'object' && module['exports']) {
                module['exports'] = _0x5d8028(require('jquery'));
            } else {
                _0x5d8028(jQuery);
            }
        }
    } else {
        _0x5d8028(jQuery);
    }
}(function (_0x56fc85) {
    _0x56fc85['extend'](_0x56fc85['validator']['messages'], {
        'required': 'Ворид кардани ин филд маҷбури аст.',
        'remote': 'Илтимос, маълумоти саҳеҳ ворид кунед.',
        'email': 'Илтимос, почтаи электронии саҳеҳ ворид кунед.',
        'url': 'Илтимос, URL адреси саҳеҳ ворид кунед.',
        'date': 'Илтимос, таърихи саҳеҳ ворид кунед.',
        'dateISO': 'Илтимос, таърихи саҳеҳи (ISO)ӣ ворид кунед.',
        'number': 'Илтимос, рақамҳои саҳеҳ ворид кунед.',
        'digits': 'Илтимос, танҳо рақам ворид кунед.',
        'creditcard': 'Илтимос, кредит карди саҳеҳ ворид кунед.',
        'equalTo': 'Илтимос, миқдори баробар ворид кунед.',
        'extension': 'Илтимос, қофияи файлро дуруст интихоб кунед',
        'maxlength': _0x56fc85['validator']['format']('Илтимос, бештар аз {0} рамз ворид накунед.'),
        'minlength': _0x56fc85['validator']['format']('Илтимос, камтар аз {0} рамз ворид накунед.'),
        'rangelength': _0x56fc85['validator']['format']('Илтимос, камтар аз {0} ва зиёда аз {1} рамз ворид кунед.'),
        'range': _0x56fc85['validator']['format']('Илтимос, аз {0} то {1} рақам зиёд ворид кунед.'),
        'max': _0x56fc85['validator']['format']('Илтимос, бештар аз {0} рақам ворид накунед.'),
        'min': _0x56fc85['validator']['format']('Илтимос, камтар аз {0} рақам ворид накунед.')
    });
    return _0x56fc85;
}));