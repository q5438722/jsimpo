'use strict';
module['exports'] = function generate_validate(_0x24b76a, _0x3eeaad, _0x58b8b6) {
    var _0xad3825 = '';
    var _0x52677d = _0x24b76a['schema']['$async'] === !![], _0x182abb = _0x24b76a['util']['schemaHasRulesExcept'](_0x24b76a['schema'], _0x24b76a['RULES']['all'], '$ref'), _0x385347 = _0x24b76a['self']['_getId'](_0x24b76a['schema']);
    if (_0x24b76a['opts']['strictKeywords']) {
        var _0x47e43e = _0x24b76a['util']['schemaUnknownRules'](_0x24b76a['schema'], _0x24b76a['RULES']['keywords']);
        if (_0x47e43e) {
            var _0x2b2b41 = 'unknown keyword: ' + _0x47e43e;
            if (_0x24b76a['opts']['strictKeywords'] === 'log')
                _0x24b76a['logger']['warn'](_0x2b2b41);
            else
                throw new Error(_0x2b2b41);
        }
    }
    if (_0x24b76a['isTop']) {
        _0xad3825 += ' var validate = ';
        if (_0x52677d) {
            _0x24b76a['async'] = !![];
            _0xad3825 += 'async ';
        }
        _0xad3825 += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
        if (_0x385347 && (_0x24b76a['opts']['sourceCode'] || _0x24b76a['opts']['processCode'])) {
            _0xad3825 += _0x4ed71d['SKmHR'](' ', _0x4ed71d['rUFSG']('/*# sourceURL=', _0x385347) + ' */') + ' ';
        }
    }
    if (typeof _0x24b76a['schema'] == 'boolean' || !(_0x182abb || _0x24b76a['schema']['$ref'])) {
        var _0x3eeaad = 'false schema';
        var _0x42f7da = _0x24b76a['level'];
        var _0x580c06 = _0x24b76a['dataLevel'];
        var _0x29ff9c = _0x24b76a['schema'][_0x3eeaad];
        var _0x4115a7 = _0x24b76a['schemaPath'] + _0x24b76a['util']['getProperty'](_0x3eeaad);
        var _0x5146bc = _0x24b76a['errSchemaPath'] + '/' + _0x3eeaad;
        var _0xf4cebf = !_0x24b76a['opts']['allErrors'];
        var _0x42a853;
        var _0x2b0a3b = 'data' + (_0x580c06 || '');
        var _0x180ea4 = 'valid' + _0x42f7da;
        if (_0x24b76a['schema'] === ![]) {
            if ('Iiksg' === 'Iiksg') {
                if (_0x24b76a['isTop']) {
                    if ('BXNBf' === 'BXNBf') {
                        _0xf4cebf = !![];
                    } else {
                        _0xad3825 += _0x4ed71d['QiVZQ'](' || ' + _0xf7e432, ' === null || ') + _0xf7e432 + ' === \'\' ';
                    }
                } else {
                    _0xad3825 += ' var ' + _0x180ea4 + ' = false; ';
                }
                var _0x195a66 = _0x195a66 || [];
                _0x195a66['push'](_0xad3825);
                _0xad3825 = '';
                if (_0x24b76a['createErrors'] !== ![]) {
                    _0xad3825 += _0x4ed71d['XIYWS'](_0x4ed71d['OjMGP'](' { keyword: \'', _0x42a853 || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + _0x24b76a['errorPath'] + ' , schemaPath: ', _0x24b76a['util']['toQuotedString'](_0x5146bc)) + ' , params: {} ';
                    if (_0x24b76a['opts']['messages'] !== ![]) {
                        _0xad3825 += ' , message: \'boolean schema is false\' ';
                    }
                    if (_0x24b76a['opts']['verbose']) {
                        if ('lDhaq' === 'lDhaq') {
                            _0xad3825 += ' , schema: false , parentSchema: validate.schema' + _0x24b76a['schemaPath'] + ' , data: ' + _0x2b0a3b + ' ';
                        } else {
                            _0xad3825 += ' }; return validate; ';
                        }
                    }
                    _0xad3825 += ' } ';
                } else {
                    if ('XUJxs' !== 'XUJxs') {
                        _0xad3825 += '0';
                    } else {
                        _0xad3825 += ' {} ';
                    }
                }
                var _0x490089 = _0xad3825;
                _0xad3825 = _0x195a66['pop']();
                if (!_0x24b76a['compositeRule'] && _0xf4cebf) {
                    if (_0x24b76a['async']) {
                        _0xad3825 += _0x4ed71d['dCcnV'](' throw new ValidationError([', _0x490089) + ']); ';
                    } else {
                        _0xad3825 += ' validate.errors = [' + _0x490089 + ']; return false; ';
                    }
                } else {
                    _0xad3825 += _0x4ed71d['KAOHi'](' var err = ', _0x490089) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
            } else {
                _0xad3825 += ' var ' + _0x180ea4 + ' = false; ';
            }
        } else {
            if ('GirfJ' !== 'qhOkX') {
                if (_0x24b76a['isTop']) {
                    if (_0x52677d) {
                        _0xad3825 += ' return data; ';
                    } else {
                        if ('bwGZX' !== 'HkHiZ') {
                            _0xad3825 += ' validate.errors = null; return true; ';
                        } else {
                            _0xad3825 += ' } if (errors === ';
                            if (_0x10dfb3) {
                                _0xad3825 += '0';
                            } else {
                                _0xad3825 += 'errs_' + _0x42f7da;
                            }
                            _0xad3825 += ') { ';
                            _0x1cbaec += '}';
                        }
                    }
                } else {
                    _0xad3825 += _0x4ed71d['KAOHi'](' var ', _0x180ea4) + ' = true; ';
                }
            } else {
                _0xad3825 += '' + _0x2e1d16;
            }
        }
        if (_0x24b76a['isTop']) {
            if ('GRJeY' === 'TyAYc') {
                _0xad3825 += ' ' + _0x24b76a['useDefault'](_0x599462['default']) + ' ';
            } else {
                _0xad3825 += ' }; return validate; ';
            }
        }
        return _0xad3825;
    }
    if (_0x24b76a['isTop']) {
        var _0x1cd947 = '5|2|1|8|4|3|6|7|0'['split']('|'), _0x319703 = 0;
        while (!![]) {
            switch (_0x1cd947[_0x319703++]) {
            case '0':
                _0xad3825 += ' if (rootData === undefined) rootData = data; ';
                continue;
            case '1':
                _0x24b76a['baseId'] = _0x24b76a['baseId'] || _0x24b76a['rootId'];
                continue;
            case '2':
                _0x24b76a['rootId'] = _0x24b76a['resolve']['fullPath'](_0x24b76a['self']['_getId'](_0x24b76a['root']['schema']));
                continue;
            case '3':
                if (_0x24b76a['schema']['default'] !== undefined && _0x24b76a['opts']['useDefaults'] && _0x24b76a['opts']['strictDefaults']) {
                    var _0x4671cf = 'default is ignored in the schema root';
                    if (_0x24b76a['opts']['strictDefaults'] === 'log')
                        _0x24b76a['logger']['warn'](_0x4671cf);
                    else
                        throw new Error(_0x4671cf);
                }
                continue;
            case '4':
                _0x24b76a['dataPathArr'] = [''];
                continue;
            case '5':
                var _0x10dfb3 = _0x24b76a['isTop'], _0x42f7da = _0x24b76a['level'] = 0, _0x580c06 = _0x24b76a['dataLevel'] = 0, _0x2b0a3b = 'data';
                continue;
            case '6':
                _0xad3825 += ' var vErrors = null; ';
                continue;
            case '7':
                _0xad3825 += ' var errors = 0;     ';
                continue;
            case '8':
                delete _0x24b76a['isTop'];
                continue;
            }
            break;
        }
    } else {
        if ('gspzg' !== 'qTvVd') {
            var _0x42f7da = _0x24b76a['level'], _0x580c06 = _0x24b76a['dataLevel'], _0x2b0a3b = 'data' + (_0x580c06 || '');
            if (_0x385347)
                _0x24b76a['baseId'] = _0x24b76a['resolve']['url'](_0x24b76a['baseId'], _0x385347);
            if (_0x52677d && !_0x24b76a['async'])
                throw new Error('async schema in sync schema');
            _0xad3825 += ' var errs_' + _0x42f7da + ' = errors;';
        } else {
            _0x24b76a['async'] = !![];
            _0xad3825 += 'async ';
        }
    }
    var _0x180ea4 = 'valid' + _0x42f7da, _0xf4cebf = !_0x24b76a['opts']['allErrors'], _0x4f2260 = '', _0x1cbaec = '';
    var _0x42a853;
    var _0x2e1d16 = _0x24b76a['schema']['type'], _0x1c118a = Array['isArray'](_0x2e1d16);
    if (_0x2e1d16 && _0x24b76a['opts']['nullable'] && _0x24b76a['schema']['nullable'] === !![]) {
        if (_0x1c118a) {
            if ('nABVe' === 'nABVe') {
                if (_0x2e1d16['indexOf']('null') == -1)
                    _0x2e1d16 = _0x2e1d16['concat']('null');
            } else {
                var _0x4a3682 = 'default is ignored for: ' + _0xf7e432;
                if (_0x24b76a['opts']['strictDefaults'] === 'log')
                    _0x24b76a['logger']['warn'](_0x4a3682);
                else
                    throw new Error(_0x4a3682);
            }
        } else if (_0x2e1d16 != 'null') {
            _0x2e1d16 = [
                _0x2e1d16,
                'null'
            ];
            _0x1c118a = !![];
        }
    }
    if (_0x1c118a && _0x2e1d16['length'] == 1) {
        if ('IRgHL' !== 'pnjuE') {
            _0x2e1d16 = _0x2e1d16[0];
            _0x1c118a = ![];
        } else {
            if (_0x52677d) {
                _0xad3825 += ' if (errors === 0) return data;           ';
                _0xad3825 += ' else throw new ValidationError(vErrors); ';
            } else {
                _0xad3825 += ' validate.errors = vErrors; ';
                _0xad3825 += ' return errors === 0;       ';
            }
            _0xad3825 += ' }; return validate;';
        }
    }
    if (_0x24b76a['schema']['$ref'] && _0x182abb) {
        if (_0x24b76a['opts']['extendRefs'] == 'fail') {
            throw new Error('$ref: validation keywords used in schema at path "' + _0x24b76a['errSchemaPath'] + '" (see option extendRefs)');
        } else if (_0x24b76a['opts']['extendRefs'] !== !![]) {
            if ('hJDoK' === 'pYwmN') {
                _0xad3825 += ' validate.errors = null; return true; ';
            } else {
                _0x182abb = ![];
                _0x24b76a['logger']['warn']('$ref: keywords ignored in schema at path "' + _0x24b76a['errSchemaPath'] + '"');
            }
        }
    }
    if (_0x24b76a['schema']['$comment'] && _0x24b76a['opts']['$comment']) {
        if ('lUXJx' === 'lUXJx') {
            _0xad3825 += ' ' + _0x24b76a['RULES']['all']['$comment']['code'](_0x24b76a, '$comment');
        } else {
            _0xad3825 += ' var err = ' + _0x490089 + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
    }
    if (_0x2e1d16) {
        if (_0x24b76a['opts']['coerceTypes']) {
            var _0x435e1f = _0x24b76a['util']['coerceToTypes'](_0x24b76a['opts']['coerceTypes'], _0x2e1d16);
        }
        var _0x2bc3b5 = _0x24b76a['RULES']['types'][_0x2e1d16];
        if (_0x435e1f || _0x1c118a || _0x2bc3b5 === !![] || _0x2bc3b5 && !_0x4897b7(_0x2bc3b5)) {
            var _0x4115a7 = _0x24b76a['schemaPath'] + '.type', _0x5146bc = _0x24b76a['errSchemaPath'] + '/type';
            var _0x4115a7 = _0x24b76a['schemaPath'] + '.type', _0x5146bc = _0x24b76a['errSchemaPath'] + '/type', _0x4cd0f8 = _0x1c118a ? 'checkDataTypes' : 'checkDataType';
            _0xad3825 += ' if (' + _0x24b76a['util'][_0x4cd0f8](_0x2e1d16, _0x2b0a3b, _0x24b76a['opts']['strictNumbers'], !![]) + ') { ';
            if (_0x435e1f) {
                var _0x16eba1 = 'dataType' + _0x42f7da, _0x48bfb1 = 'coerced' + _0x42f7da;
                _0xad3825 += _0x4ed71d['trkBf'](' var ' + _0x16eba1 + ' = typeof ' + _0x2b0a3b, '; var ') + _0x48bfb1 + ' = undefined; ';
                if (_0x24b76a['opts']['coerceTypes'] == 'array') {
                    _0xad3825 += _0x4ed71d['pETWc'](_0x4ed71d['CHvfX'](_0x4ed71d['CHvfX'](_0x4ed71d['xyPfX'](_0x4ed71d['xyPfX'](_0x4ed71d['XXmmn'](' if (' + _0x16eba1, ' == \'object\' && Array.isArray(') + _0x2b0a3b + ') && ' + _0x2b0a3b + '.length == 1) { ' + _0x2b0a3b + ' = ', _0x2b0a3b) + '[0]; ', _0x16eba1) + ' = typeof ' + _0x2b0a3b + '; if (', _0x24b76a['util']['checkDataType'](_0x24b76a['schema']['type'], _0x2b0a3b, _0x24b76a['opts']['strictNumbers'])) + ') ', _0x48bfb1) + ' = ', _0x2b0a3b) + '; } ';
                }
                _0xad3825 += _0x4ed71d['NcAwZ'](' if (', _0x48bfb1) + ' !== undefined) ; ';
                var _0x16edd2 = _0x435e1f;
                if (_0x16edd2) {
                    var _0x20246e, _0x201e5a = -1, _0x34da7f = _0x16edd2['length'] - 1;
                    while (_0x201e5a < _0x34da7f) {
                        _0x20246e = _0x16edd2[_0x201e5a += 1];
                        if (_0x20246e == 'string') {
                            _0xad3825 += _0x4ed71d['miciS'](_0x4ed71d['miciS'](_0x4ed71d['miciS'](_0x4ed71d['miciS'](' else if (' + _0x16eba1, ' == \'number\' || '), _0x16eba1), ' == \'boolean\') '), _0x48bfb1) + ' = \'\' + ' + _0x2b0a3b + '; else if (' + _0x2b0a3b + ' === null) ' + _0x48bfb1 + ' = \'\'; ';
                        } else if (_0x20246e == 'number' || _0x20246e == 'integer') {
                            if ('uJTmE' === 'uJTmE') {
                                _0xad3825 += _0x4ed71d['cQEQh'](' else if (' + _0x16eba1 + ' == \'boolean\' || ' + _0x2b0a3b + ' === null || (' + _0x16eba1 + ' == \'string\' && ' + _0x2b0a3b + ' && ' + _0x2b0a3b + ' == +', _0x2b0a3b) + ' ';
                                if (_0x20246e == 'integer') {
                                    _0xad3825 += _0x4ed71d['GWXmX'](' && !(', _0x2b0a3b) + ' % 1)';
                                }
                                _0xad3825 += _0x4ed71d['OAzFF'](')) ' + _0x48bfb1, ' = +') + _0x2b0a3b + '; ';
                            } else {
                                var _0x1f0015 = _0x24b76a['util']['coerceToTypes'](_0x24b76a['opts']['coerceTypes'], _0x2e1d16);
                            }
                        } else if (_0x20246e == 'boolean') {
                            if ('LIABX' === 'LIABX') {
                                _0xad3825 += _0x4ed71d['lqCoZ'](_0x4ed71d['Igbhu'](_0x4ed71d['Igbhu'](' else if (' + _0x2b0a3b + ' === \'false\' || ' + _0x2b0a3b, ' === 0 || '), _0x2b0a3b) + ' === null) ' + _0x48bfb1 + ' = false; else if (' + _0x2b0a3b + ' === \'true\' || ', _0x2b0a3b) + ' === 1) ' + _0x48bfb1 + ' = true; ';
                            } else {
                                _0xad3825 += ' var err = ' + _0x490089 + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                            }
                        } else if (_0x20246e == 'null') {
                            if ('Fyayp' !== 'IoptG') {
                                _0xad3825 += _0x4ed71d['JgftN'](_0x4ed71d['JgftN'](' else if (' + _0x2b0a3b + ' === \'\' || ', _0x2b0a3b) + ' === 0 || ', _0x2b0a3b) + ' === false) ' + _0x48bfb1 + ' = null; ';
                            } else {
                                var _0x4f680a = 'default is ignored for: ' + _0xf7e432;
                                if (_0x24b76a['opts']['strictDefaults'] === 'log')
                                    _0x24b76a['logger']['warn'](_0x4f680a);
                                else
                                    throw new Error(_0x4f680a);
                            }
                        } else if (_0x24b76a['opts']['coerceTypes'] == 'array' && _0x20246e == 'array') {
                            _0xad3825 += _0x4ed71d['jdUFH'](_0x4ed71d['ugkaY'](' else if (' + _0x16eba1, ' == \'string\' || ') + _0x16eba1 + ' == \'number\' || ' + _0x16eba1 + ' == \'boolean\' || ' + _0x2b0a3b, ' == null) ') + _0x48bfb1 + ' = [' + _0x2b0a3b + ']; ';
                        }
                    }
                }
                _0xad3825 += ' else {   ';
                var _0x195a66 = _0x195a66 || [];
                _0x195a66['push'](_0xad3825);
                _0xad3825 = '';
                if (_0x24b76a['createErrors'] !== ![]) {
                    if ('AGigO' === 'SPvDh') {
                        _0xad3825 += '0';
                    } else {
                        _0xad3825 += _0x4ed71d['ugkaY'](_0x4ed71d['ugkaY'](_0x4ed71d['ugkaY'](' { keyword: \'', _0x42a853 || 'type'), '\' , dataPath: (dataPath || \'\') + '), _0x24b76a['errorPath']) + ' , schemaPath: ' + _0x24b76a['util']['toQuotedString'](_0x5146bc) + ' , params: { type: \'';
                        if (_0x1c118a) {
                            if ('sECDb' !== 'YHqwl') {
                                _0xad3825 += '' + _0x2e1d16['join'](',');
                            } else {
                                if (_0x24b76a['async']) {
                                    _0xad3825 += _0x4ed71d['uubZZ'](' throw new ValidationError([', _0x490089) + ']); ';
                                } else {
                                    _0xad3825 += ' validate.errors = [' + _0x490089 + ']; return false; ';
                                }
                            }
                        } else {
                            _0xad3825 += '' + _0x2e1d16;
                        }
                        _0xad3825 += '\' } ';
                        if (_0x24b76a['opts']['messages'] !== ![]) {
                            _0xad3825 += ' , message: \'should be ';
                            if (_0x1c118a) {
                                if ('UnPBK' !== 'ffVsL') {
                                    _0xad3825 += '' + _0x2e1d16['join'](',');
                                } else {
                                    _0xad3825 += '' + _0x2e1d16['join'](',');
                                }
                            } else {
                                _0xad3825 += '' + _0x2e1d16;
                            }
                            _0xad3825 += '\' ';
                        }
                        if (_0x24b76a['opts']['verbose']) {
                            _0xad3825 += _0x4ed71d['eiRbi'](_0x4ed71d['eiRbi'](' , schema: validate.schema', _0x4115a7), ' , parentSchema: validate.schema') + _0x24b76a['schemaPath'] + ' , data: ' + _0x2b0a3b + ' ';
                        }
                        _0xad3825 += ' } ';
                    }
                } else {
                    _0xad3825 += ' {} ';
                }
                var _0x490089 = _0xad3825;
                _0xad3825 = _0x195a66['pop']();
                if (!_0x24b76a['compositeRule'] && _0xf4cebf) {
                    if (_0x24b76a['async']) {
                        if ('xvLcT' === 'xvLcT') {
                            _0xad3825 += ' throw new ValidationError([' + _0x490089 + ']); ';
                        } else {
                            _0xad3825 += ' , message: \'boolean schema is false\' ';
                        }
                    } else {
                        if ('aNsXL' !== 'aNsXL') {
                            var _0x52faae = _0x2bc3b5['rules'];
                            for (var _0x5d541a = 0; _0x5d541a < _0x52faae['length']; _0x5d541a++)
                                if (_0xa40fb8(_0x52faae[_0x5d541a]))
                                    return !![];
                        } else {
                            _0xad3825 += _0x4ed71d['IYQhm'](' validate.errors = [', _0x490089) + ']; return false; ';
                        }
                    }
                } else {
                    if ('rkjai' === 'ylTrX') {
                        _0xad3825 += _0x4ed71d['DMufB'](_0x4ed71d['XUfJT'](_0x4ed71d['ORLtG'](_0x4ed71d['ORLtG'](_0x4ed71d['ORLtG'](_0x4ed71d['ORLtG'](' else if (' + _0x2b0a3b + ' === \'false\' || ', _0x2b0a3b), ' === 0 || '), _0x2b0a3b), ' === null) ') + _0x48bfb1 + ' = false; else if (' + _0x2b0a3b, ' === \'true\' || ') + _0x2b0a3b + ' === 1) ', _0x48bfb1) + ' = true; ';
                    } else {
                        _0xad3825 += ' var err = ' + _0x490089 + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                    }
                }
                _0xad3825 += ' } if (' + _0x48bfb1 + ' !== undefined) {  ';
                var _0x387ac9 = _0x580c06 ? 'data' + (_0x580c06 - 1 || '') : 'parentData', _0xf4bc07 = _0x580c06 ? _0x24b76a['dataPathArr'][_0x580c06] : 'parentDataProperty';
                _0xad3825 += _0x4ed71d['PCRMR'](_0x4ed71d['PCRMR'](' ' + _0x2b0a3b, ' = '), _0x48bfb1) + '; ';
                if (!_0x580c06) {
                    _0xad3825 += 'if (' + _0x387ac9 + ' !== undefined)';
                }
                _0xad3825 += _0x4ed71d['VLIpx'](' ' + _0x387ac9 + '[' + _0xf4bc07 + '] = ', _0x48bfb1) + '; } ';
            } else {
                var _0x195a66 = _0x195a66 || [];
                _0x195a66['push'](_0xad3825);
                _0xad3825 = '';
                if (_0x24b76a['createErrors'] !== ![]) {
                    if ('lXDMx' !== 'YlJne') {
                        _0xad3825 += ' { keyword: \'' + (_0x42a853 || 'type') + '\' , dataPath: (dataPath || \'\') + ' + _0x24b76a['errorPath'] + ' , schemaPath: ' + _0x24b76a['util']['toQuotedString'](_0x5146bc) + ' , params: { type: \'';
                        if (_0x1c118a) {
                            _0xad3825 += '' + _0x2e1d16['join'](',');
                        } else {
                            _0xad3825 += '' + _0x2e1d16;
                        }
                        _0xad3825 += '\' } ';
                        if (_0x24b76a['opts']['messages'] !== ![]) {
                            if ('ENLYq' === 'ENLYq') {
                                _0xad3825 += ' , message: \'should be ';
                                if (_0x1c118a) {
                                    if ('cEKmZ' !== 'cEKmZ') {
                                        _0xad3825 += ' ' + _0x4f2260 + ' ';
                                        _0x4f2260 = '';
                                    } else {
                                        _0xad3825 += '' + _0x2e1d16['join'](',');
                                    }
                                } else {
                                    _0xad3825 += '' + _0x2e1d16;
                                }
                                _0xad3825 += '\' ';
                            } else {
                                _0xad3825 += ' ' + _0x24b76a['RULES']['all']['$ref']['code'](_0x24b76a, '$ref') + ' ';
                                if (_0xf4cebf) {
                                    _0xad3825 += ' } if (errors === ';
                                    if (_0x10dfb3) {
                                        _0xad3825 += '0';
                                    } else {
                                        _0xad3825 += 'errs_' + _0x42f7da;
                                    }
                                    _0xad3825 += ') { ';
                                    _0x1cbaec += '}';
                                }
                            }
                        }
                        if (_0x24b76a['opts']['verbose']) {
                            _0xad3825 += _0x4ed71d['jrVDE'](' , schema: validate.schema' + _0x4115a7 + ' , parentSchema: validate.schema' + _0x24b76a['schemaPath'], ' , data: ') + _0x2b0a3b + ' ';
                        }
                        _0xad3825 += ' } ';
                    } else {
                        if (_0x1c118a) {
                            if (_0x2e1d16['indexOf']('null') == -1)
                                _0x2e1d16 = _0x2e1d16['concat']('null');
                        } else if (_0x2e1d16 != 'null') {
                            _0x2e1d16 = [
                                _0x2e1d16,
                                'null'
                            ];
                            _0x1c118a = !![];
                        }
                    }
                } else {
                    if ('TKYtG' !== 'CbSdM') {
                        _0xad3825 += ' {} ';
                    } else {
                        _0xf4cebf = !![];
                    }
                }
                var _0x490089 = _0xad3825;
                _0xad3825 = _0x195a66['pop']();
                if (!_0x24b76a['compositeRule'] && _0xf4cebf) {
                    if (_0x24b76a['async']) {
                        _0xad3825 += ' throw new ValidationError([' + _0x490089 + ']); ';
                    } else {
                        _0xad3825 += ' validate.errors = [' + _0x490089 + ']; return false; ';
                    }
                } else {
                    _0xad3825 += ' var err = ' + _0x490089 + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
            }
            _0xad3825 += ' } ';
        }
    }
    if (_0x24b76a['schema']['$ref'] && !_0x182abb) {
        if ('hblNT' === 'hblNT') {
            _0xad3825 += ' ' + _0x24b76a['RULES']['all']['$ref']['code'](_0x24b76a, '$ref') + ' ';
            if (_0xf4cebf) {
                _0xad3825 += ' } if (errors === ';
                if (_0x10dfb3) {
                    _0xad3825 += '0';
                } else {
                    _0xad3825 += 'errs_' + _0x42f7da;
                }
                _0xad3825 += ') { ';
                _0x1cbaec += '}';
            }
        } else {
            _0xad3825 += _0x4ed71d['JmmCl'](' validate.errors = [', _0x490089) + ']; return false; ';
        }
    } else {
        var _0x1e2445 = _0x24b76a['RULES'];
        if (_0x1e2445) {
            if ('kOxWc' === 'PzeyA') {
                if (_0x24b76a['opts']['extendRefs'] == 'fail') {
                    throw new Error('$ref: validation keywords used in schema at path "' + _0x24b76a['errSchemaPath'] + '" (see option extendRefs)');
                } else if (_0x24b76a['opts']['extendRefs'] !== !![]) {
                    _0x182abb = ![];
                    _0x24b76a['logger']['warn']('$ref: keywords ignored in schema at path "' + _0x24b76a['errSchemaPath'] + '"');
                }
            } else {
                var _0x2bc3b5, _0xe86d0f = -1, _0x15e0ea = _0x1e2445['length'] - 1;
                while (_0xe86d0f < _0x15e0ea) {
                    if ('njtdE' === 'njtdE') {
                        _0x2bc3b5 = _0x1e2445[_0xe86d0f += 1];
                        if (_0x4897b7(_0x2bc3b5)) {
                            if (_0x2bc3b5['type']) {
                                if ('qRBGa' !== 'qRBGa') {
                                    _0xad3825 += ' if (errors === ';
                                    if (_0x10dfb3) {
                                        _0xad3825 += '0';
                                    } else {
                                        _0xad3825 += 'errs_' + _0x42f7da;
                                    }
                                    _0xad3825 += ') { ';
                                    _0x1cbaec += '}';
                                } else {
                                    _0xad3825 += ' if (' + _0x24b76a['util']['checkDataType'](_0x2bc3b5['type'], _0x2b0a3b, _0x24b76a['opts']['strictNumbers']) + ') { ';
                                }
                            }
                            if (_0x24b76a['opts']['useDefaults']) {
                                if (_0x2bc3b5['type'] == 'object' && _0x24b76a['schema']['properties']) {
                                    if ('khizg' === 'khizg') {
                                        var _0x29ff9c = _0x24b76a['schema']['properties'], _0x2ea9e0 = Object['keys'](_0x29ff9c);
                                        var _0x33ffaf = _0x2ea9e0;
                                        if (_0x33ffaf) {
                                            var _0x5e1145, _0x1e380a = -1, _0x175f09 = _0x33ffaf['length'] - 1;
                                            while (_0x1e380a < _0x175f09) {
                                                _0x5e1145 = _0x33ffaf[_0x1e380a += 1];
                                                var _0x599462 = _0x29ff9c[_0x5e1145];
                                                if (_0x599462['default'] !== undefined) {
                                                    if ('jEPSM' !== 'JAogj') {
                                                        var _0xf7e432 = _0x2b0a3b + _0x24b76a['util']['getProperty'](_0x5e1145);
                                                        if (_0x24b76a['compositeRule']) {
                                                            if ('jJXxJ' !== 'jJXxJ') {
                                                                _0x182abb = ![];
                                                                _0x24b76a['logger']['warn']('$ref: keywords ignored in schema at path "' + _0x24b76a['errSchemaPath'] + '"');
                                                            } else {
                                                                if (_0x24b76a['opts']['strictDefaults']) {
                                                                    var _0x4671cf = 'default is ignored for: ' + _0xf7e432;
                                                                    if (_0x24b76a['opts']['strictDefaults'] === 'log')
                                                                        _0x24b76a['logger']['warn'](_0x4671cf);
                                                                    else
                                                                        throw new Error(_0x4671cf);
                                                                }
                                                            }
                                                        } else {
                                                            _0xad3825 += _0x4ed71d['sRabL'](' if (', _0xf7e432) + ' === undefined ';
                                                            if (_0x24b76a['opts']['useDefaults'] == 'empty') {
                                                                _0xad3825 += _0x4ed71d['bCWWO'](' || ' + _0xf7e432 + ' === null || ', _0xf7e432) + ' === \'\' ';
                                                            }
                                                            _0xad3825 += ' ) ' + _0xf7e432 + ' = ';
                                                            if (_0x24b76a['opts']['useDefaults'] == 'shared') {
                                                                if ('TnqlX' === 'ybLkh') {
                                                                    _0xad3825 += '' + _0x2e1d16['join'](',');
                                                                } else {
                                                                    _0xad3825 += ' ' + _0x24b76a['useDefault'](_0x599462['default']) + ' ';
                                                                }
                                                            } else {
                                                                _0xad3825 += ' ' + JSON['stringify'](_0x599462['default']) + ' ';
                                                            }
                                                            _0xad3825 += '; ';
                                                        }
                                                    } else {
                                                        if (_0x24b76a['opts']['strictDefaults']) {
                                                            var _0x231fd0 = 'default is ignored for: ' + _0xf7e432;
                                                            if (_0x24b76a['opts']['strictDefaults'] === 'log')
                                                                _0x24b76a['logger']['warn'](_0x231fd0);
                                                            else
                                                                throw new Error(_0x231fd0);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        _0xad3825 += ' var err = ' + _0x490089 + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                                    }
                                } else if (_0x2bc3b5['type'] == 'array' && Array['isArray'](_0x24b76a['schema']['items'])) {
                                    var _0x457c47 = _0x24b76a['schema']['items'];
                                    if (_0x457c47) {
                                        var _0x599462, _0x201e5a = -1, _0xa87f31 = _0x457c47['length'] - 1;
                                        while (_0x201e5a < _0xa87f31) {
                                            _0x599462 = _0x457c47[_0x201e5a += 1];
                                            if (_0x599462['default'] !== undefined) {
                                                var _0xf7e432 = _0x2b0a3b + '[' + _0x201e5a + ']';
                                                if (_0x24b76a['compositeRule']) {
                                                    if (_0x24b76a['opts']['strictDefaults']) {
                                                        if ('MMeUl' === 'MCMEc') {
                                                            _0xad3825 += ' ' + JSON['stringify'](_0x599462['default']) + ' ';
                                                        } else {
                                                            var _0x4671cf = 'default is ignored for: ' + _0xf7e432;
                                                            if (_0x24b76a['opts']['strictDefaults'] === 'log')
                                                                _0x24b76a['logger']['warn'](_0x4671cf);
                                                            else
                                                                throw new Error(_0x4671cf);
                                                        }
                                                    }
                                                } else {
                                                    if ('YOTFr' === 'YxmTX') {
                                                        _0xad3825 += _0x4ed71d['prZND'](' { keyword: \'' + (_0x42a853 || 'false schema') + '\' , dataPath: (dataPath || \'\') + ', _0x24b76a['errorPath']) + ' , schemaPath: ' + _0x24b76a['util']['toQuotedString'](_0x5146bc) + ' , params: {} ';
                                                        if (_0x24b76a['opts']['messages'] !== ![]) {
                                                            _0xad3825 += ' , message: \'boolean schema is false\' ';
                                                        }
                                                        if (_0x24b76a['opts']['verbose']) {
                                                            _0xad3825 += _0x4ed71d['ZriQA'](' , schema: false , parentSchema: validate.schema' + _0x24b76a['schemaPath'], ' , data: ') + _0x2b0a3b + ' ';
                                                        }
                                                        _0xad3825 += ' } ';
                                                    } else {
                                                        _0xad3825 += ' if (' + _0xf7e432 + ' === undefined ';
                                                        if (_0x24b76a['opts']['useDefaults'] == 'empty') {
                                                            if ('fdaCW' !== 'IROZo') {
                                                                _0xad3825 += ' || ' + _0xf7e432 + ' === null || ' + _0xf7e432 + ' === \'\' ';
                                                            } else {
                                                                _0xad3825 += ' ' + _0x24b76a['RULES']['all']['$comment']['code'](_0x24b76a, '$comment');
                                                            }
                                                        }
                                                        _0xad3825 += ' ) ' + _0xf7e432 + ' = ';
                                                        if (_0x24b76a['opts']['useDefaults'] == 'shared') {
                                                            _0xad3825 += ' ' + _0x24b76a['useDefault'](_0x599462['default']) + ' ';
                                                        } else {
                                                            _0xad3825 += _0x4ed71d['XKhyT'](' ', JSON['stringify'](_0x599462['default'])) + ' ';
                                                        }
                                                        _0xad3825 += '; ';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            var _0x156c05 = _0x2bc3b5['rules'];
                            if (_0x156c05) {
                                if ('OaYsS' === 'OZZyN') {
                                    _0xad3825 += _0x4ed71d['VatyW'](' , schema: validate.schema' + _0x4115a7 + ' , parentSchema: validate.schema', _0x24b76a['schemaPath']) + ' , data: ' + _0x2b0a3b + ' ';
                                } else {
                                    var _0x5ce0fd, _0x1e9ce1 = -1, _0x4f0f41 = _0x156c05['length'] - 1;
                                    while (_0x1e9ce1 < _0x4f0f41) {
                                        _0x5ce0fd = _0x156c05[_0x1e9ce1 += 1];
                                        if (_0xa40fb8(_0x5ce0fd)) {
                                            var _0x44e215 = _0x5ce0fd['code'](_0x24b76a, _0x5ce0fd['keyword'], _0x2bc3b5['type']);
                                            if (_0x44e215) {
                                                _0xad3825 += ' ' + _0x44e215 + ' ';
                                                if (_0xf4cebf) {
                                                    _0x4f2260 += '}';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (_0xf4cebf) {
                                _0xad3825 += ' ' + _0x4f2260 + ' ';
                                _0x4f2260 = '';
                            }
                            if (_0x2bc3b5['type']) {
                                _0xad3825 += ' } ';
                                if (_0x2e1d16 && _0x2e1d16 === _0x2bc3b5['type'] && !_0x435e1f) {
                                    if ('gEcyp' !== 'nxxBJ') {
                                        _0xad3825 += ' else { ';
                                        var _0x4115a7 = _0x24b76a['schemaPath'] + '.type', _0x5146bc = _0x24b76a['errSchemaPath'] + '/type';
                                        var _0x195a66 = _0x195a66 || [];
                                        _0x195a66['push'](_0xad3825);
                                        _0xad3825 = '';
                                        if (_0x24b76a['createErrors'] !== ![]) {
                                            if ('gqcXL' === 'aBOph') {
                                                _0xad3825 += '' + _0x2e1d16['join'](',');
                                            } else {
                                                _0xad3825 += _0x4ed71d['tCrqs'](_0x4ed71d['tCrqs'](' { keyword: \'' + (_0x42a853 || 'type'), '\' , dataPath: (dataPath || \'\') + '), _0x24b76a['errorPath']) + ' , schemaPath: ' + _0x24b76a['util']['toQuotedString'](_0x5146bc) + ' , params: { type: \'';
                                                if (_0x1c118a) {
                                                    if ('hwQpj' !== 'AglYf') {
                                                        _0xad3825 += '' + _0x2e1d16['join'](',');
                                                    } else {
                                                        _0xad3825 += _0x4ed71d['bmlgX'](' if (', _0x24b76a['util']['checkDataType'](_0x2bc3b5['type'], _0x2b0a3b, _0x24b76a['opts']['strictNumbers'])) + ') { ';
                                                    }
                                                } else {
                                                    _0xad3825 += '' + _0x2e1d16;
                                                }
                                                _0xad3825 += '\' } ';
                                                if (_0x24b76a['opts']['messages'] !== ![]) {
                                                    _0xad3825 += ' , message: \'should be ';
                                                    if (_0x1c118a) {
                                                        _0xad3825 += '' + _0x2e1d16['join'](',');
                                                    } else {
                                                        _0xad3825 += '' + _0x2e1d16;
                                                    }
                                                    _0xad3825 += '\' ';
                                                }
                                                if (_0x24b76a['opts']['verbose']) {
                                                    if ('Osrue' === 'Osrue') {
                                                        _0xad3825 += _0x4ed71d['JEWCM'](_0x4ed71d['JEWCM'](_0x4ed71d['JEWCM'](' , schema: validate.schema' + _0x4115a7, ' , parentSchema: validate.schema'), _0x24b76a['schemaPath']), ' , data: ') + _0x2b0a3b + ' ';
                                                    } else {
                                                        _0xad3825 += _0x4ed71d['vnJQx'](' var ', _0x180ea4) + ' = errors === errs_' + _0x42f7da + ';';
                                                    }
                                                }
                                                _0xad3825 += ' } ';
                                            }
                                        } else {
                                            _0xad3825 += ' {} ';
                                        }
                                        var _0x490089 = _0xad3825;
                                        _0xad3825 = _0x195a66['pop']();
                                        if (!_0x24b76a['compositeRule'] && _0xf4cebf) {
                                            if (_0x24b76a['async']) {
                                                if ('QmwvN' !== 'QmwvN') {
                                                    _0x2e1d16 = _0x2e1d16[0];
                                                    _0x1c118a = ![];
                                                } else {
                                                    _0xad3825 += ' throw new ValidationError([' + _0x490089 + ']); ';
                                                }
                                            } else {
                                                _0xad3825 += ' validate.errors = [' + _0x490089 + ']; return false; ';
                                            }
                                        } else {
                                            _0xad3825 += _0x4ed71d['XwSWF'](' var err = ', _0x490089) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                                        }
                                        _0xad3825 += ' } ';
                                    } else {
                                        _0xad3825 += _0x4ed71d['vnJQx'](' ', _0x24b76a['useDefault'](_0x599462['default'])) + ' ';
                                    }
                                }
                            }
                            if (_0xf4cebf) {
                                if ('APecI' !== 'APecI') {
                                    _0xad3825 += ' {} ';
                                } else {
                                    _0xad3825 += ' if (errors === ';
                                    if (_0x10dfb3) {
                                        _0xad3825 += '0';
                                    } else {
                                        _0xad3825 += 'errs_' + _0x42f7da;
                                    }
                                    _0xad3825 += ') { ';
                                    _0x1cbaec += '}';
                                }
                            }
                        }
                    } else {
                        _0x4f2260 += '}';
                    }
                }
            }
        }
    }
    if (_0xf4cebf) {
        if ('jHybO' === 'CAiBh') {
            _0xad3825 += '' + _0x2e1d16['join'](',');
        } else {
            _0xad3825 += _0x4ed71d['XwSWF'](' ', _0x1cbaec) + ' ';
        }
    }
    if (_0x10dfb3) {
        if ('hXijg' !== 'ECexV') {
            if (_0x52677d) {
                _0xad3825 += ' if (errors === 0) return data;           ';
                _0xad3825 += ' else throw new ValidationError(vErrors); ';
            } else {
                _0xad3825 += ' validate.errors = vErrors; ';
                _0xad3825 += ' return errors === 0;       ';
            }
            _0xad3825 += ' }; return validate;';
        } else {
            _0xad3825 += '' + _0x2e1d16;
        }
    } else {
        _0xad3825 += ' var ' + _0x180ea4 + ' = errors === errs_' + _0x42f7da + ';';
    }
    function _0x4897b7(_0x2bc3b5) {
        if ('ueVwJ' === 'ueVwJ') {
            var _0x2f5958 = _0x2bc3b5['rules'];
            for (var _0x392b16 = 0; _0x392b16 < _0x2f5958['length']; _0x392b16++)
                if (_0xa40fb8(_0x2f5958[_0x392b16]))
                    return !![];
        } else {
            if (_0x24b76a['async']) {
                _0xad3825 += ' throw new ValidationError([' + _0x490089 + ']); ';
            } else {
                _0xad3825 += _0x4ed71d['nXmLx'](' validate.errors = [', _0x490089) + ']; return false; ';
            }
        }
    }
    function _0xa40fb8(_0x5ce0fd) {
        return _0x24b76a['schema'][_0x5ce0fd['keyword']] !== undefined || _0x5ce0fd['implements'] && _0x51ffee(_0x5ce0fd);
    }
    function _0x51ffee(_0x5ce0fd) {
        var _0x35ebc2 = _0x5ce0fd['implements'];
        for (var _0x3ac9d4 = 0; _0x3ac9d4 < _0x35ebc2['length']; _0x3ac9d4++)
            if (_0x24b76a['schema'][_0x35ebc2[_0x3ac9d4]] !== undefined)
                return !![];
    }
    return _0xad3825;
};