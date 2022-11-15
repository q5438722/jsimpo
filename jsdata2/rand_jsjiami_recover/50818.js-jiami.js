!function (_0x4cafa3) {
    'function' == typeof define && define['amd'] ? define([
        'jquery',
        '../jquery.validate.min'
    ], _0x4cafa3) : 'object' == typeof module && module['exports'] ? module['exports'] = _0x4cafa3(require('jquery')) : _0x4cafa3(jQuery);
}(function (_0x426edd) {
    return _0x426edd['extend'](_0x426edd['validator']['messages'], {
        'required': 'Povinné zadať.',
        'maxlength': _0x426edd['validator']['format']('Maximálne {0} znakov.'),
        'minlength': _0x426edd['validator']['format']('Minimálne {0} znakov.'),
        'rangelength': _0x426edd['validator']['format']('Minimálne {0} a maximálne {1} znakov.'),
        'email': 'E-mailová adresa musí byť platná.',
        'url': 'URL musí byť platná.',
        'date': 'Musí byť dátum.',
        'number': 'Musí byť číslo.',
        'digits': 'Môže obsahovať iba číslice.',
        'equalTo': 'Dve hodnoty sa musia rovnať.',
        'range': _0x426edd['validator']['format']('Musí byť medzi {0} a {1}.'),
        'max': _0x426edd['validator']['format']('Nemôže byť viac ako {0}.'),
        'min': _0x426edd['validator']['format']('Nemôže byť menej ako {0}.'),
        'creditcard': 'Číslo platobnej karty musí byť platné.',
        'step': _0x426edd['validator']['format']('Musí byť násobkom čísla {0}.')
    }), _0x426edd;
});