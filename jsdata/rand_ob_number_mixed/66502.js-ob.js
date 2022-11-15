'use strict';
module['exports'] = function generate_validate(_0x35cf7f, _0x8b5675, _0x43e85f) {
    var _0x47be8d = '', _0x44aec8 = _0x35cf7f['schema']['$async'] === !![], _0x226dd6 = _0x35cf7f['util']['schemaHasRulesExcept'](_0x35cf7f['schema'], _0x35cf7f['RULES']['all'], '$ref'), _0x21a868 = _0x35cf7f['self']['_getId'](_0x35cf7f['schema']);
    if (_0x35cf7f['opts']['strictKeywords']) {
        var _0x160938 = _0x35cf7f['util']['schemaUnknownRules'](_0x35cf7f['schema'], _0x35cf7f['RULES']['keywords']);
        if (_0x160938) {
            var _0x1b1219 = 'unknown\x20keyword:\x20' + _0x160938;
            if (_0x35cf7f['opts']['strictKeywords'] === 'log')
                _0x35cf7f['logger']['warn'](_0x1b1219);
            else
                throw new Error(_0x1b1219);
        }
    }
    _0x35cf7f['isTop'] && (_0x47be8d += '\x20var\x20validate\x20=\x20', _0x44aec8 && (_0x35cf7f['async'] = !![], _0x47be8d += 'async\x20'), _0x47be8d += 'function(data,\x20dataPath,\x20parentData,\x20parentDataProperty,\x20rootData)\x20{\x20\x27use\x20strict\x27;\x20', _0x21a868 && (_0x35cf7f['opts']['sourceCode'] || _0x35cf7f['opts']['processCode']) && (_0x47be8d += '\x20' + ('/*#\x20sourceURL=' + _0x21a868 + '\x20*/') + '\x20'));
    if (typeof _0x35cf7f['schema'] == 'boolean' || !(_0x226dd6 || _0x35cf7f['schema']['$ref'])) {
        var _0x8b5675 = 'false\x20schema', _0x31062e = _0x35cf7f['level'], _0x4b3a7b = _0x35cf7f['dataLevel'], _0x4200da = _0x35cf7f['schema'][_0x8b5675], _0x4aa150 = _0x35cf7f['schemaPath'] + _0x35cf7f['util']['getProperty'](_0x8b5675), _0x5ab3eb = _0x35cf7f['errSchemaPath'] + '/' + _0x8b5675, _0x5d098a = !_0x35cf7f['opts']['allErrors'], _0x9f4436, _0x2944e8 = 'data' + (_0x4b3a7b || ''), _0x58f87c = 'valid' + _0x31062e;
        if (_0x35cf7f['schema'] === ![]) {
            _0x35cf7f['isTop'] ? _0x5d098a = !![] : _0x47be8d += '\x20var\x20' + _0x58f87c + '\x20=\x20false;\x20';
            var _0x124e0b = _0x124e0b || [];
            _0x124e0b['push'](_0x47be8d), _0x47be8d = '';
            _0x35cf7f['createErrors'] !== ![] ? (_0x47be8d += '\x20{\x20keyword:\x20\x27' + (_0x9f4436 || 'false\x20schema') + '\x27\x20,\x20dataPath:\x20(dataPath\x20||\x20\x27\x27)\x20+\x20' + _0x35cf7f['errorPath'] + '\x20,\x20schemaPath:\x20' + _0x35cf7f['util']['toQuotedString'](_0x5ab3eb) + '\x20,\x20params:\x20{}\x20', _0x35cf7f['opts']['messages'] !== ![] && (_0x47be8d += '\x20,\x20message:\x20\x27boolean\x20schema\x20is\x20false\x27\x20'), _0x35cf7f['opts']['verbose'] && (_0x47be8d += '\x20,\x20schema:\x20false\x20,\x20parentSchema:\x20validate.schema' + _0x35cf7f['schemaPath'] + '\x20,\x20data:\x20' + _0x2944e8 + '\x20'), _0x47be8d += '\x20}\x20') : _0x47be8d += '\x20{}\x20';
            var _0x315695 = _0x47be8d;
            _0x47be8d = _0x124e0b['pop'](), !_0x35cf7f['compositeRule'] && _0x5d098a ? _0x35cf7f['async'] ? _0x47be8d += '\x20throw\x20new\x20ValidationError([' + _0x315695 + ']);\x20' : _0x47be8d += '\x20validate.errors\x20=\x20[' + _0x315695 + '];\x20return\x20false;\x20' : _0x47be8d += '\x20var\x20err\x20=\x20' + _0x315695 + ';\x20\x20if\x20(vErrors\x20===\x20null)\x20vErrors\x20=\x20[err];\x20else\x20vErrors.push(err);\x20errors++;\x20';
        } else
            _0x35cf7f['isTop'] ? _0x44aec8 ? _0x47be8d += '\x20return\x20data;\x20' : _0x47be8d += '\x20validate.errors\x20=\x20null;\x20return\x20true;\x20' : _0x47be8d += '\x20var\x20' + _0x58f87c + '\x20=\x20true;\x20';
        return _0x35cf7f['isTop'] && (_0x47be8d += '\x20};\x20return\x20validate;\x20'), _0x47be8d;
    }
    if (_0x35cf7f['isTop']) {
        var _0x4a011e = _0x35cf7f['isTop'], _0x31062e = _0x35cf7f['level'] = 0x1902 + -0x7a9 + -0x1159, _0x4b3a7b = _0x35cf7f['dataLevel'] = -0x42a * 0x4 + -0x607 + 0x16af * 0x1, _0x2944e8 = 'data';
        _0x35cf7f['rootId'] = _0x35cf7f['resolve']['fullPath'](_0x35cf7f['self']['_getId'](_0x35cf7f['root']['schema'])), _0x35cf7f['baseId'] = _0x35cf7f['baseId'] || _0x35cf7f['rootId'], delete _0x35cf7f['isTop'], _0x35cf7f['dataPathArr'] = [''];
        if (_0x35cf7f['schema']['default'] !== undefined && _0x35cf7f['opts']['useDefaults'] && _0x35cf7f['opts']['strictDefaults']) {
            var _0x5d46e2 = 'default\x20is\x20ignored\x20in\x20the\x20schema\x20root';
            if (_0x35cf7f['opts']['strictDefaults'] === 'log')
                _0x35cf7f['logger']['warn'](_0x5d46e2);
            else
                throw new Error(_0x5d46e2);
        }
        _0x47be8d += '\x20var\x20vErrors\x20=\x20null;\x20', _0x47be8d += '\x20var\x20errors\x20=\x200;\x20\x20\x20\x20\x20', _0x47be8d += '\x20if\x20(rootData\x20===\x20undefined)\x20rootData\x20=\x20data;\x20';
    } else {
        var _0x31062e = _0x35cf7f['level'], _0x4b3a7b = _0x35cf7f['dataLevel'], _0x2944e8 = 'data' + (_0x4b3a7b || '');
        if (_0x21a868)
            _0x35cf7f['baseId'] = _0x35cf7f['resolve']['url'](_0x35cf7f['baseId'], _0x21a868);
        if (_0x44aec8 && !_0x35cf7f['async'])
            throw new Error('async\x20schema\x20in\x20sync\x20schema');
        _0x47be8d += '\x20var\x20errs_' + _0x31062e + '\x20=\x20errors;';
    }
    var _0x58f87c = 'valid' + _0x31062e, _0x5d098a = !_0x35cf7f['opts']['allErrors'], _0x18c36c = '', _0x1ed43f = '', _0x9f4436, _0x164be3 = _0x35cf7f['schema']['type'], _0x5635a9 = Array['isArray'](_0x164be3);
    if (_0x164be3 && _0x35cf7f['opts']['nullable'] && _0x35cf7f['schema']['nullable'] === !![]) {
        if (_0x5635a9) {
            if (_0x164be3['indexOf']('null') == -(0x1f98 + 0x568 + 0x1 * -0x24ff))
                _0x164be3 = _0x164be3['concat']('null');
        } else
            _0x164be3 != 'null' && (_0x164be3 = [
                _0x164be3,
                'null'
            ], _0x5635a9 = !![]);
    }
    _0x5635a9 && _0x164be3['length'] == 0x261 * -0xb + -0xbc * 0x2f + 0x3cb0 && (_0x164be3 = _0x164be3[-0x233a + 0x724 + -0xa * -0x2cf], _0x5635a9 = ![]);
    if (_0x35cf7f['schema']['$ref'] && _0x226dd6) {
        if (_0x35cf7f['opts']['extendRefs'] == 'fail')
            throw new Error('$ref:\x20validation\x20keywords\x20used\x20in\x20schema\x20at\x20path\x20\x22' + _0x35cf7f['errSchemaPath'] + '\x22\x20(see\x20option\x20extendRefs)');
        else
            _0x35cf7f['opts']['extendRefs'] !== !![] && (_0x226dd6 = ![], _0x35cf7f['logger']['warn']('$ref:\x20keywords\x20ignored\x20in\x20schema\x20at\x20path\x20\x22' + _0x35cf7f['errSchemaPath'] + '\x22'));
    }
    _0x35cf7f['schema']['$comment'] && _0x35cf7f['opts']['$comment'] && (_0x47be8d += '\x20' + _0x35cf7f['RULES']['all']['$comment']['code'](_0x35cf7f, '$comment'));
    if (_0x164be3) {
        if (_0x35cf7f['opts']['coerceTypes'])
            var _0x50c89e = _0x35cf7f['util']['coerceToTypes'](_0x35cf7f['opts']['coerceTypes'], _0x164be3);
        var _0x5526fa = _0x35cf7f['RULES']['types'][_0x164be3];
        if (_0x50c89e || _0x5635a9 || _0x5526fa === !![] || _0x5526fa && !_0x57207d(_0x5526fa)) {
            var _0x4aa150 = _0x35cf7f['schemaPath'] + '.type', _0x5ab3eb = _0x35cf7f['errSchemaPath'] + '/type', _0x4aa150 = _0x35cf7f['schemaPath'] + '.type', _0x5ab3eb = _0x35cf7f['errSchemaPath'] + '/type', _0x21a686 = _0x5635a9 ? 'checkDataTypes' : 'checkDataType';
            _0x47be8d += '\x20if\x20(' + _0x35cf7f['util'][_0x21a686](_0x164be3, _0x2944e8, _0x35cf7f['opts']['strictNumbers'], !![]) + ')\x20{\x20';
            if (_0x50c89e) {
                var _0x155086 = 'dataType' + _0x31062e, _0x59127c = 'coerced' + _0x31062e;
                _0x47be8d += '\x20var\x20' + _0x155086 + '\x20=\x20typeof\x20' + _0x2944e8 + ';\x20var\x20' + _0x59127c + '\x20=\x20undefined;\x20';
                _0x35cf7f['opts']['coerceTypes'] == 'array' && (_0x47be8d += '\x20if\x20(' + _0x155086 + '\x20==\x20\x27object\x27\x20&&\x20Array.isArray(' + _0x2944e8 + ')\x20&&\x20' + _0x2944e8 + '.length\x20==\x201)\x20{\x20' + _0x2944e8 + '\x20=\x20' + _0x2944e8 + '[0];\x20' + _0x155086 + '\x20=\x20typeof\x20' + _0x2944e8 + ';\x20if\x20(' + _0x35cf7f['util']['checkDataType'](_0x35cf7f['schema']['type'], _0x2944e8, _0x35cf7f['opts']['strictNumbers']) + ')\x20' + _0x59127c + '\x20=\x20' + _0x2944e8 + ';\x20}\x20');
                _0x47be8d += '\x20if\x20(' + _0x59127c + '\x20!==\x20undefined)\x20;\x20';
                var _0x3f9f48 = _0x50c89e;
                if (_0x3f9f48) {
                    var _0x42183b, _0x82e3ee = -(-0x3 * 0xb89 + -0x9a7 + 0x2c43), _0x5231a7 = _0x3f9f48['length'] - (-0x779 + -0x1b4c + 0x22c6);
                    while (_0x82e3ee < _0x5231a7) {
                        _0x42183b = _0x3f9f48[_0x82e3ee += -0x15f6 + 0xde3 + -0x5e * -0x16];
                        if (_0x42183b == 'string')
                            _0x47be8d += '\x20else\x20if\x20(' + _0x155086 + '\x20==\x20\x27number\x27\x20||\x20' + _0x155086 + '\x20==\x20\x27boolean\x27)\x20' + _0x59127c + '\x20=\x20\x27\x27\x20+\x20' + _0x2944e8 + ';\x20else\x20if\x20(' + _0x2944e8 + '\x20===\x20null)\x20' + _0x59127c + '\x20=\x20\x27\x27;\x20';
                        else {
                            if (_0x42183b == 'number' || _0x42183b == 'integer')
                                _0x47be8d += '\x20else\x20if\x20(' + _0x155086 + '\x20==\x20\x27boolean\x27\x20||\x20' + _0x2944e8 + '\x20===\x20null\x20||\x20(' + _0x155086 + '\x20==\x20\x27string\x27\x20&&\x20' + _0x2944e8 + '\x20&&\x20' + _0x2944e8 + '\x20==\x20+' + _0x2944e8 + '\x20', _0x42183b == 'integer' && (_0x47be8d += '\x20&&\x20!(' + _0x2944e8 + '\x20%\x201)'), _0x47be8d += '))\x20' + _0x59127c + '\x20=\x20+' + _0x2944e8 + ';\x20';
                            else {
                                if (_0x42183b == 'boolean')
                                    _0x47be8d += '\x20else\x20if\x20(' + _0x2944e8 + '\x20===\x20\x27false\x27\x20||\x20' + _0x2944e8 + '\x20===\x200\x20||\x20' + _0x2944e8 + '\x20===\x20null)\x20' + _0x59127c + '\x20=\x20false;\x20else\x20if\x20(' + _0x2944e8 + '\x20===\x20\x27true\x27\x20||\x20' + _0x2944e8 + '\x20===\x201)\x20' + _0x59127c + '\x20=\x20true;\x20';
                                else {
                                    if (_0x42183b == 'null')
                                        _0x47be8d += '\x20else\x20if\x20(' + _0x2944e8 + '\x20===\x20\x27\x27\x20||\x20' + _0x2944e8 + '\x20===\x200\x20||\x20' + _0x2944e8 + '\x20===\x20false)\x20' + _0x59127c + '\x20=\x20null;\x20';
                                    else
                                        _0x35cf7f['opts']['coerceTypes'] == 'array' && _0x42183b == 'array' && (_0x47be8d += '\x20else\x20if\x20(' + _0x155086 + '\x20==\x20\x27string\x27\x20||\x20' + _0x155086 + '\x20==\x20\x27number\x27\x20||\x20' + _0x155086 + '\x20==\x20\x27boolean\x27\x20||\x20' + _0x2944e8 + '\x20==\x20null)\x20' + _0x59127c + '\x20=\x20[' + _0x2944e8 + '];\x20');
                                }
                            }
                        }
                    }
                }
                _0x47be8d += '\x20else\x20{\x20\x20\x20';
                var _0x124e0b = _0x124e0b || [];
                _0x124e0b['push'](_0x47be8d), _0x47be8d = '';
                _0x35cf7f['createErrors'] !== ![] ? (_0x47be8d += '\x20{\x20keyword:\x20\x27' + (_0x9f4436 || 'type') + '\x27\x20,\x20dataPath:\x20(dataPath\x20||\x20\x27\x27)\x20+\x20' + _0x35cf7f['errorPath'] + '\x20,\x20schemaPath:\x20' + _0x35cf7f['util']['toQuotedString'](_0x5ab3eb) + '\x20,\x20params:\x20{\x20type:\x20\x27', _0x5635a9 ? _0x47be8d += '' + _0x164be3['join'](',') : _0x47be8d += '' + _0x164be3, _0x47be8d += '\x27\x20}\x20', _0x35cf7f['opts']['messages'] !== ![] && (_0x47be8d += '\x20,\x20message:\x20\x27should\x20be\x20', _0x5635a9 ? _0x47be8d += '' + _0x164be3['join'](',') : _0x47be8d += '' + _0x164be3, _0x47be8d += '\x27\x20'), _0x35cf7f['opts']['verbose'] && (_0x47be8d += '\x20,\x20schema:\x20validate.schema' + _0x4aa150 + '\x20,\x20parentSchema:\x20validate.schema' + _0x35cf7f['schemaPath'] + '\x20,\x20data:\x20' + _0x2944e8 + '\x20'), _0x47be8d += '\x20}\x20') : _0x47be8d += '\x20{}\x20';
                var _0x315695 = _0x47be8d;
                _0x47be8d = _0x124e0b['pop']();
                !_0x35cf7f['compositeRule'] && _0x5d098a ? _0x35cf7f['async'] ? _0x47be8d += '\x20throw\x20new\x20ValidationError([' + _0x315695 + ']);\x20' : _0x47be8d += '\x20validate.errors\x20=\x20[' + _0x315695 + '];\x20return\x20false;\x20' : _0x47be8d += '\x20var\x20err\x20=\x20' + _0x315695 + ';\x20\x20if\x20(vErrors\x20===\x20null)\x20vErrors\x20=\x20[err];\x20else\x20vErrors.push(err);\x20errors++;\x20';
                _0x47be8d += '\x20}\x20if\x20(' + _0x59127c + '\x20!==\x20undefined)\x20{\x20\x20';
                var _0x1acb75 = _0x4b3a7b ? 'data' + (_0x4b3a7b - (0x65 * 0xb + -0x11 * -0x1ab + -0x20b1) || '') : 'parentData', _0x540957 = _0x4b3a7b ? _0x35cf7f['dataPathArr'][_0x4b3a7b] : 'parentDataProperty';
                _0x47be8d += '\x20' + _0x2944e8 + '\x20=\x20' + _0x59127c + ';\x20', !_0x4b3a7b && (_0x47be8d += 'if\x20(' + _0x1acb75 + '\x20!==\x20undefined)'), _0x47be8d += '\x20' + _0x1acb75 + '[' + _0x540957 + ']\x20=\x20' + _0x59127c + ';\x20}\x20';
            } else {
                var _0x124e0b = _0x124e0b || [];
                _0x124e0b['push'](_0x47be8d), _0x47be8d = '';
                _0x35cf7f['createErrors'] !== ![] ? (_0x47be8d += '\x20{\x20keyword:\x20\x27' + (_0x9f4436 || 'type') + '\x27\x20,\x20dataPath:\x20(dataPath\x20||\x20\x27\x27)\x20+\x20' + _0x35cf7f['errorPath'] + '\x20,\x20schemaPath:\x20' + _0x35cf7f['util']['toQuotedString'](_0x5ab3eb) + '\x20,\x20params:\x20{\x20type:\x20\x27', _0x5635a9 ? _0x47be8d += '' + _0x164be3['join'](',') : _0x47be8d += '' + _0x164be3, _0x47be8d += '\x27\x20}\x20', _0x35cf7f['opts']['messages'] !== ![] && (_0x47be8d += '\x20,\x20message:\x20\x27should\x20be\x20', _0x5635a9 ? _0x47be8d += '' + _0x164be3['join'](',') : _0x47be8d += '' + _0x164be3, _0x47be8d += '\x27\x20'), _0x35cf7f['opts']['verbose'] && (_0x47be8d += '\x20,\x20schema:\x20validate.schema' + _0x4aa150 + '\x20,\x20parentSchema:\x20validate.schema' + _0x35cf7f['schemaPath'] + '\x20,\x20data:\x20' + _0x2944e8 + '\x20'), _0x47be8d += '\x20}\x20') : _0x47be8d += '\x20{}\x20';
                var _0x315695 = _0x47be8d;
                _0x47be8d = _0x124e0b['pop'](), !_0x35cf7f['compositeRule'] && _0x5d098a ? _0x35cf7f['async'] ? _0x47be8d += '\x20throw\x20new\x20ValidationError([' + _0x315695 + ']);\x20' : _0x47be8d += '\x20validate.errors\x20=\x20[' + _0x315695 + '];\x20return\x20false;\x20' : _0x47be8d += '\x20var\x20err\x20=\x20' + _0x315695 + ';\x20\x20if\x20(vErrors\x20===\x20null)\x20vErrors\x20=\x20[err];\x20else\x20vErrors.push(err);\x20errors++;\x20';
            }
            _0x47be8d += '\x20}\x20';
        }
    }
    if (_0x35cf7f['schema']['$ref'] && !_0x226dd6)
        _0x47be8d += '\x20' + _0x35cf7f['RULES']['all']['$ref']['code'](_0x35cf7f, '$ref') + '\x20', _0x5d098a && (_0x47be8d += '\x20}\x20if\x20(errors\x20===\x20', _0x4a011e ? _0x47be8d += '0' : _0x47be8d += 'errs_' + _0x31062e, _0x47be8d += ')\x20{\x20', _0x1ed43f += '}');
    else {
        var _0x19c613 = _0x35cf7f['RULES'];
        if (_0x19c613) {
            var _0x5526fa, _0x34b3e7 = -(0x237 * -0xa + -0x1d05 + -0xccb * -0x4), _0x4e8643 = _0x19c613['length'] - (-0x193 + -0x1c8c + 0x1e20);
            while (_0x34b3e7 < _0x4e8643) {
                _0x5526fa = _0x19c613[_0x34b3e7 += -0x15c9 + -0xd6a * -0x2 + -0x1e * 0x2b];
                if (_0x57207d(_0x5526fa)) {
                    _0x5526fa['type'] && (_0x47be8d += '\x20if\x20(' + _0x35cf7f['util']['checkDataType'](_0x5526fa['type'], _0x2944e8, _0x35cf7f['opts']['strictNumbers']) + ')\x20{\x20');
                    if (_0x35cf7f['opts']['useDefaults']) {
                        if (_0x5526fa['type'] == 'object' && _0x35cf7f['schema']['properties']) {
                            var _0x4200da = _0x35cf7f['schema']['properties'], _0x58a41c = Object['keys'](_0x4200da), _0x535476 = _0x58a41c;
                            if (_0x535476) {
                                var _0x38a1ba, _0x8685dc = -(-0xe32 + 0x1af2 + -0x1 * 0xcbf), _0x1228cb = _0x535476['length'] - (0x1dc3 + -0x10 * 0x187 + 0x6 * -0xe3);
                                while (_0x8685dc < _0x1228cb) {
                                    _0x38a1ba = _0x535476[_0x8685dc += -0x4d0 + 0x57b + -0xaa];
                                    var _0x35023d = _0x4200da[_0x38a1ba];
                                    if (_0x35023d['default'] !== undefined) {
                                        var _0x47c9f1 = _0x2944e8 + _0x35cf7f['util']['getProperty'](_0x38a1ba);
                                        if (_0x35cf7f['compositeRule']) {
                                            if (_0x35cf7f['opts']['strictDefaults']) {
                                                var _0x5d46e2 = 'default\x20is\x20ignored\x20for:\x20' + _0x47c9f1;
                                                if (_0x35cf7f['opts']['strictDefaults'] === 'log')
                                                    _0x35cf7f['logger']['warn'](_0x5d46e2);
                                                else
                                                    throw new Error(_0x5d46e2);
                                            }
                                        } else
                                            _0x47be8d += '\x20if\x20(' + _0x47c9f1 + '\x20===\x20undefined\x20', _0x35cf7f['opts']['useDefaults'] == 'empty' && (_0x47be8d += '\x20||\x20' + _0x47c9f1 + '\x20===\x20null\x20||\x20' + _0x47c9f1 + '\x20===\x20\x27\x27\x20'), _0x47be8d += '\x20)\x20' + _0x47c9f1 + '\x20=\x20', _0x35cf7f['opts']['useDefaults'] == 'shared' ? _0x47be8d += '\x20' + _0x35cf7f['useDefault'](_0x35023d['default']) + '\x20' : _0x47be8d += '\x20' + JSON['stringify'](_0x35023d['default']) + '\x20', _0x47be8d += ';\x20';
                                    }
                                }
                            }
                        } else {
                            if (_0x5526fa['type'] == 'array' && Array['isArray'](_0x35cf7f['schema']['items'])) {
                                var _0x33ca22 = _0x35cf7f['schema']['items'];
                                if (_0x33ca22) {
                                    var _0x35023d, _0x82e3ee = -(-0x128d + -0xcb * -0x6 + -0x4 * -0x373), _0x309f3d = _0x33ca22['length'] - (-0x84d + -0x21cb * 0x1 + -0xd * -0x33d);
                                    while (_0x82e3ee < _0x309f3d) {
                                        _0x35023d = _0x33ca22[_0x82e3ee += 0x75f + -0x4a * 0x3 + 0x680 * -0x1];
                                        if (_0x35023d['default'] !== undefined) {
                                            var _0x47c9f1 = _0x2944e8 + '[' + _0x82e3ee + ']';
                                            if (_0x35cf7f['compositeRule']) {
                                                if (_0x35cf7f['opts']['strictDefaults']) {
                                                    var _0x5d46e2 = 'default\x20is\x20ignored\x20for:\x20' + _0x47c9f1;
                                                    if (_0x35cf7f['opts']['strictDefaults'] === 'log')
                                                        _0x35cf7f['logger']['warn'](_0x5d46e2);
                                                    else
                                                        throw new Error(_0x5d46e2);
                                                }
                                            } else
                                                _0x47be8d += '\x20if\x20(' + _0x47c9f1 + '\x20===\x20undefined\x20', _0x35cf7f['opts']['useDefaults'] == 'empty' && (_0x47be8d += '\x20||\x20' + _0x47c9f1 + '\x20===\x20null\x20||\x20' + _0x47c9f1 + '\x20===\x20\x27\x27\x20'), _0x47be8d += '\x20)\x20' + _0x47c9f1 + '\x20=\x20', _0x35cf7f['opts']['useDefaults'] == 'shared' ? _0x47be8d += '\x20' + _0x35cf7f['useDefault'](_0x35023d['default']) + '\x20' : _0x47be8d += '\x20' + JSON['stringify'](_0x35023d['default']) + '\x20', _0x47be8d += ';\x20';
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var _0x273f45 = _0x5526fa['rules'];
                    if (_0x273f45) {
                        var _0x45cfa3, _0x4986b5 = -(-0x62e + 0x1614 + -0xfe5), _0x55f1d1 = _0x273f45['length'] - (0x85c + 0x23da + -0x2c35);
                        while (_0x4986b5 < _0x55f1d1) {
                            _0x45cfa3 = _0x273f45[_0x4986b5 += -0x1e5e * -0x1 + 0x1f7f + -0x3ddc];
                            if (_0x119a95(_0x45cfa3)) {
                                var _0x54609b = _0x45cfa3['code'](_0x35cf7f, _0x45cfa3['keyword'], _0x5526fa['type']);
                                _0x54609b && (_0x47be8d += '\x20' + _0x54609b + '\x20', _0x5d098a && (_0x18c36c += '}'));
                            }
                        }
                    }
                    _0x5d098a && (_0x47be8d += '\x20' + _0x18c36c + '\x20', _0x18c36c = '');
                    if (_0x5526fa['type']) {
                        _0x47be8d += '\x20}\x20';
                        if (_0x164be3 && _0x164be3 === _0x5526fa['type'] && !_0x50c89e) {
                            _0x47be8d += '\x20else\x20{\x20';
                            var _0x4aa150 = _0x35cf7f['schemaPath'] + '.type', _0x5ab3eb = _0x35cf7f['errSchemaPath'] + '/type', _0x124e0b = _0x124e0b || [];
                            _0x124e0b['push'](_0x47be8d), _0x47be8d = '';
                            _0x35cf7f['createErrors'] !== ![] ? (_0x47be8d += '\x20{\x20keyword:\x20\x27' + (_0x9f4436 || 'type') + '\x27\x20,\x20dataPath:\x20(dataPath\x20||\x20\x27\x27)\x20+\x20' + _0x35cf7f['errorPath'] + '\x20,\x20schemaPath:\x20' + _0x35cf7f['util']['toQuotedString'](_0x5ab3eb) + '\x20,\x20params:\x20{\x20type:\x20\x27', _0x5635a9 ? _0x47be8d += '' + _0x164be3['join'](',') : _0x47be8d += '' + _0x164be3, _0x47be8d += '\x27\x20}\x20', _0x35cf7f['opts']['messages'] !== ![] && (_0x47be8d += '\x20,\x20message:\x20\x27should\x20be\x20', _0x5635a9 ? _0x47be8d += '' + _0x164be3['join'](',') : _0x47be8d += '' + _0x164be3, _0x47be8d += '\x27\x20'), _0x35cf7f['opts']['verbose'] && (_0x47be8d += '\x20,\x20schema:\x20validate.schema' + _0x4aa150 + '\x20,\x20parentSchema:\x20validate.schema' + _0x35cf7f['schemaPath'] + '\x20,\x20data:\x20' + _0x2944e8 + '\x20'), _0x47be8d += '\x20}\x20') : _0x47be8d += '\x20{}\x20';
                            var _0x315695 = _0x47be8d;
                            _0x47be8d = _0x124e0b['pop'](), !_0x35cf7f['compositeRule'] && _0x5d098a ? _0x35cf7f['async'] ? _0x47be8d += '\x20throw\x20new\x20ValidationError([' + _0x315695 + ']);\x20' : _0x47be8d += '\x20validate.errors\x20=\x20[' + _0x315695 + '];\x20return\x20false;\x20' : _0x47be8d += '\x20var\x20err\x20=\x20' + _0x315695 + ';\x20\x20if\x20(vErrors\x20===\x20null)\x20vErrors\x20=\x20[err];\x20else\x20vErrors.push(err);\x20errors++;\x20', _0x47be8d += '\x20}\x20';
                        }
                    }
                    _0x5d098a && (_0x47be8d += '\x20if\x20(errors\x20===\x20', _0x4a011e ? _0x47be8d += '0' : _0x47be8d += 'errs_' + _0x31062e, _0x47be8d += ')\x20{\x20', _0x1ed43f += '}');
                }
            }
        }
    }
    _0x5d098a && (_0x47be8d += '\x20' + _0x1ed43f + '\x20');
    _0x4a011e ? (_0x44aec8 ? (_0x47be8d += '\x20if\x20(errors\x20===\x200)\x20return\x20data;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x47be8d += '\x20else\x20throw\x20new\x20ValidationError(vErrors);\x20') : (_0x47be8d += '\x20validate.errors\x20=\x20vErrors;\x20', _0x47be8d += '\x20return\x20errors\x20===\x200;\x20\x20\x20\x20\x20\x20\x20'), _0x47be8d += '\x20};\x20return\x20validate;') : _0x47be8d += '\x20var\x20' + _0x58f87c + '\x20=\x20errors\x20===\x20errs_' + _0x31062e + ';';
    function _0x57207d(_0xdbc0a1) {
        var _0x249920 = _0xdbc0a1['rules'];
        for (var _0x4d291c = 0x20af * -0x1 + 0x1 * -0xd0d + -0x4 * -0xb6f; _0x4d291c < _0x249920['length']; _0x4d291c++)
            if (_0x119a95(_0x249920[_0x4d291c]))
                return !![];
    }
    function _0x119a95(_0x51fa5f) {
        return _0x35cf7f['schema'][_0x51fa5f['keyword']] !== undefined || _0x51fa5f['implements'] && _0x2e26f3(_0x51fa5f);
    }
    function _0x2e26f3(_0x51ebb5) {
        var _0x222d21 = _0x51ebb5['implements'];
        for (var _0x52399b = 0x3 * -0xae7 + 0x1 * -0x6af + 0x2764; _0x52399b < _0x222d21['length']; _0x52399b++)
            if (_0x35cf7f['schema'][_0x222d21[_0x52399b]] !== undefined)
                return !![];
    }
    return _0x47be8d;
};
