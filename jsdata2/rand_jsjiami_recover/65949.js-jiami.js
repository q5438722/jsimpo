const typeDefs = require('./type-defs.js');
const typeDescription = _0x363be4 => {
    if (!_0x363be4 || typeof _0x363be4 !== 'function' && typeof _0x363be4 !== 'object')
        return _0x363be4;
    if (Array['isArray'](_0x363be4))
        return _0x363be4['map'](_0x363be4 => typeDescription(_0x363be4));
    for (const {type, description} of Object['values'](typeDefs)) {
        if (type === _0x363be4)
            return description || type;
    }
    return _0x363be4;
};
module['exports'] = _0x5d631c => []['concat'](typeDescription(_0x5d631c))['filter'](_0x5d631c => _0x5d631c !== undefined);