module['exports'] = function () {
    return {
        'visitor': {
            'FunctionDeclaration'(_0x1a6897) {
                _0x1a6897['scope']['rename']('a', 'z');
            }
        }
    };
};