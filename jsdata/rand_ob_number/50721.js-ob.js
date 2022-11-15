!function () {
    if (jQuery && jQuery['fn'] && jQuery['fn']['select2'] && jQuery['fn']['select2']['amd'])
        var _0x506866 = jQuery['fn']['select2']['amd'];
    _0x506866['define']('select2/i18n/ru', [], function () {
        function _0x189003(_0x212615, _0x1436fd, _0x4f2e09, _0x495210) {
            return _0x212615 % (0x1892 + 0x76 * -0x4f + 0xbe2) < -0x215f + 0x39 * 0x85 + 0x3c7 * 0x1 && _0x212615 % (-0x1 * -0x1354 + 0x15dc * 0x1 + -0x2926 * 0x1) > 0x51e + -0x17cb + 0x7 * 0x2ab && _0x212615 % (-0xb1 * 0x16 + -0x1 * 0x7ab + 0x1745) < 0x1 * 0x1607 + 0x1ce3 + -0x12f * 0x2b || _0x212615 % (-0x155f * -0x1 + -0x47 * 0x34 + -0x49 * 0x17) > -0x65c + -0x19f0 * -0x1 + -0x60 * 0x34 ? _0x212615 % (0x6d2 + -0x26aa + 0x7 * 0x48e) > 0x24c6 + 0x73 * 0x24 + 0x34f1 * -0x1 ? _0x4f2e09 : _0x1436fd : _0x495210;
        }
        return {
            'errorLoading': function () {
                return 'Невозможно\x20загрузить\x20результаты';
            },
            'inputTooLong': function (_0x430c51) {
                var _0x23c020 = _0x430c51['input']['length'] - _0x430c51['maximum'], _0x1016a6 = 'Пожалуйста,\x20введите\x20на\x20' + _0x23c020 + '\x20символ';
                return _0x1016a6 += _0x189003(_0x23c020, '', 'a', 'ов'), _0x1016a6 += '\x20меньше';
            },
            'inputTooShort': function (_0x470356) {
                var _0x3c9aea = _0x470356['minimum'] - _0x470356['input']['length'], _0x9670b9 = 'Пожалуйста,\x20введите\x20ещё\x20хотя\x20бы\x20' + _0x3c9aea + '\x20символ';
                return _0x9670b9 += _0x189003(_0x3c9aea, '', 'a', 'ов');
            },
            'loadingMore': function () {
                return 'Загрузка\x20данных…';
            },
            'maximumSelected': function (_0x5c442a) {
                var _0x31be88 = 'Вы\x20можете\x20выбрать\x20не\x20более\x20' + _0x5c442a['maximum'] + '\x20элемент';
                return _0x31be88 += _0x189003(_0x5c442a['maximum'], '', 'a', 'ов');
            },
            'noResults': function () {
                return 'Совпадений\x20не\x20найдено';
            },
            'searching': function () {
                return 'Поиск…';
            },
            'removeAllItems': function () {
                return 'Удалить\x20все\x20элементы';
            }
        };
    }), _0x506866['define'], _0x506866['require'];
}();
