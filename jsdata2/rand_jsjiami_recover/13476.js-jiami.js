module['exports'] = function () {
    return {
        'visitor': {
            'CatchClause'(_0x204951) {
                _0x204951['scope']['rename']('a', 'z');
            }
        }
    };
};