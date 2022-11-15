'use strict';
var _0x28db = [
    'Object',
    'Key',
    'Struct',
    'TypeParameter',
    'plaintext',
    'Constructor',
    'Variable',
    'Interface',
    'Module',
    'Unit',
    'Value',
    'Snippet',
    'Color',
    'File',
    'Reference',
    'Folder',
    'EnumMember',
    'Event',
    'Operator',
    'Namespace',
    'Package',
    'Enum',
    'Constant',
    'Null',
    'LanguageClientInfo',
    'preferences',
    'join',
    'split',
    'concat',
    'languageClientPath',
    'hasDomain',
    'registerCommand',
    'initialize',
    'Initialize\x20node\x20environment\x20for\x20Language\x20Client\x20Module',
    'bracketsSourcePath',
    'Absolute\x20path\x20to\x20the\x20brackets\x20source',
    'toolingInfo',
    'Tooling\x20Info\x20json\x20to\x20be\x20used\x20by\x20Language\x20Client',
    'syncPreferences',
    'prefs',
    'object',
    'init',
    '20LfSWfC',
    '60433GmErvB',
    '23271QFfVrz',
    '2WNpzcX',
    '1440870XTOuNE',
    '1307512FuSEGe',
    '381677eKTlag',
    '1tDjzkr',
    '17359HeuiyC',
    '79BBlnyB',
    '1512152fjEqhx',
    'languageTools',
    'LanguageClient',
    'Class',
    'Method',
    'Property',
    'Field',
    'Function',
    'String',
    'Number',
    'Boolean',
    'Array'
];
var _0x5b3c8c = _0x5634;
(function (_0x3b1131, _0x2f349b) {
    var _0x273f39 = _0x5634;
    while (!![]) {
        try {
            var _0x2f09f7 = parseInt(_0x273f39(0x152)) * parseInt(_0x273f39(0x153)) + -parseInt(_0x273f39(0x154)) * -parseInt(_0x273f39(0x155)) + parseInt(_0x273f39(0x156)) + parseInt(_0x273f39(0x157)) + parseInt(_0x273f39(0x158)) * -parseInt(_0x273f39(0x159)) + -parseInt(_0x273f39(0x15a)) * parseInt(_0x273f39(0x15b)) + -parseInt(_0x273f39(0x15c));
            if (_0x2f09f7 === _0x2f349b)
                break;
            else
                _0x3b1131['push'](_0x3b1131['shift']());
        } catch (_0x22f87c) {
            _0x3b1131['push'](_0x3b1131['shift']());
        }
    }
}(_0x28db, 0xb445a));
var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0x5b3c8c(0x15d),
        _0x5b3c8c(0x15e),
        _0x5b3c8c(0x15e)
    ], FORWARD_SLASH = '/', BACKWARD_SLASH = '\x5c', CompletionItemKind = {
        'Text': 0x1,
        'Method': 0x2,
        'Function': 0x3,
        'Constructor': 0x4,
        'Field': 0x5,
        'Variable': 0x6,
        'Class': 0x7,
        'Interface': 0x8,
        'Module': 0x9,
        'Property': 0xa,
        'Unit': 0xb,
        'Value': 0xc,
        'Enum': 0xd,
        'Keyword': 0xe,
        'Snippet': 0xf,
        'Color': 0x10,
        'File': 0x11,
        'Reference': 0x12,
        'Folder': 0x13,
        'EnumMember': 0x14,
        'Constant': 0x15,
        'Struct': 0x16,
        'Event': 0x17,
        'Operator': 0x18,
        'TypeParameter': 0x19
    }, SymbolKind = {
        'File': 0x1,
        'Module': 0x2,
        'Namespace': 0x3,
        'Package': 0x4,
        'Class': 0x5,
        'Method': 0x6,
        'Property': 0x7,
        'Field': 0x8,
        'Constructor': 0x9,
        'Enum': 0xa,
        'Interface': 0xb,
        'Function': 0xc,
        'Variable': 0xd,
        'Constant': 0xe,
        'String': 0xf,
        'Number': 0x10,
        'Boolean': 0x11,
        'Array': 0x12,
        'Object': 0x13,
        'Key': 0x14,
        'Null': 0x15,
        'EnumMember': 0x16,
        'Struct': 0x17,
        'Event': 0x18,
        'Operator': 0x19,
        'TypeParameter': 0x1a
    }, defaultBracketsCapabilities = {
        'workspace': {
            'workspaceFolders': !![],
            'symbol': {
                'dynamicRegistration': ![],
                'symbolKind': [
                    SymbolKind['File'],
                    SymbolKind['Module'],
                    SymbolKind['Namespace'],
                    SymbolKind['Package'],
                    SymbolKind[_0x5b3c8c(0x15f)],
                    SymbolKind[_0x5b3c8c(0x160)],
                    SymbolKind[_0x5b3c8c(0x161)],
                    SymbolKind[_0x5b3c8c(0x162)],
                    SymbolKind['Constructor'],
                    SymbolKind['Enum'],
                    SymbolKind['Interface'],
                    SymbolKind[_0x5b3c8c(0x163)],
                    SymbolKind['Variable'],
                    SymbolKind['Constant'],
                    SymbolKind[_0x5b3c8c(0x164)],
                    SymbolKind[_0x5b3c8c(0x165)],
                    SymbolKind[_0x5b3c8c(0x166)],
                    SymbolKind[_0x5b3c8c(0x167)],
                    SymbolKind[_0x5b3c8c(0x168)],
                    SymbolKind[_0x5b3c8c(0x169)],
                    SymbolKind['Null'],
                    SymbolKind['EnumMember'],
                    SymbolKind[_0x5b3c8c(0x16a)],
                    SymbolKind['Event'],
                    SymbolKind['Operator'],
                    SymbolKind[_0x5b3c8c(0x16b)]
                ]
            }
        },
        'textDocument': {
            'synchronization': { 'didSave': !![] },
            'completion': {
                'dynamicRegistration': ![],
                'completionItem': {
                    'deprecatedSupport': !![],
                    'documentationFormat': [_0x5b3c8c(0x16c)],
                    'preselectSupport': !![]
                },
                'completionItemKind': {
                    'valueSet': [
                        CompletionItemKind['Text'],
                        CompletionItemKind[_0x5b3c8c(0x160)],
                        CompletionItemKind['Function'],
                        CompletionItemKind[_0x5b3c8c(0x16d)],
                        CompletionItemKind[_0x5b3c8c(0x162)],
                        CompletionItemKind[_0x5b3c8c(0x16e)],
                        CompletionItemKind[_0x5b3c8c(0x15f)],
                        CompletionItemKind[_0x5b3c8c(0x16f)],
                        CompletionItemKind[_0x5b3c8c(0x170)],
                        CompletionItemKind[_0x5b3c8c(0x161)],
                        CompletionItemKind[_0x5b3c8c(0x171)],
                        CompletionItemKind[_0x5b3c8c(0x172)],
                        CompletionItemKind['Enum'],
                        CompletionItemKind['Keyword'],
                        CompletionItemKind[_0x5b3c8c(0x173)],
                        CompletionItemKind[_0x5b3c8c(0x174)],
                        CompletionItemKind[_0x5b3c8c(0x175)],
                        CompletionItemKind[_0x5b3c8c(0x176)],
                        CompletionItemKind[_0x5b3c8c(0x177)],
                        CompletionItemKind[_0x5b3c8c(0x178)],
                        CompletionItemKind['Constant'],
                        CompletionItemKind['Struct'],
                        CompletionItemKind[_0x5b3c8c(0x179)],
                        CompletionItemKind[_0x5b3c8c(0x17a)],
                        CompletionItemKind[_0x5b3c8c(0x16b)]
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': [_0x5b3c8c(0x16c)] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind['File'],
                        SymbolKind[_0x5b3c8c(0x170)],
                        SymbolKind[_0x5b3c8c(0x17b)],
                        SymbolKind[_0x5b3c8c(0x17c)],
                        SymbolKind[_0x5b3c8c(0x15f)],
                        SymbolKind[_0x5b3c8c(0x160)],
                        SymbolKind['Property'],
                        SymbolKind[_0x5b3c8c(0x162)],
                        SymbolKind['Constructor'],
                        SymbolKind[_0x5b3c8c(0x17d)],
                        SymbolKind[_0x5b3c8c(0x16f)],
                        SymbolKind['Function'],
                        SymbolKind[_0x5b3c8c(0x16e)],
                        SymbolKind[_0x5b3c8c(0x17e)],
                        SymbolKind[_0x5b3c8c(0x164)],
                        SymbolKind[_0x5b3c8c(0x165)],
                        SymbolKind['Boolean'],
                        SymbolKind[_0x5b3c8c(0x167)],
                        SymbolKind[_0x5b3c8c(0x168)],
                        SymbolKind[_0x5b3c8c(0x169)],
                        SymbolKind[_0x5b3c8c(0x17f)],
                        SymbolKind['EnumMember'],
                        SymbolKind[_0x5b3c8c(0x16a)],
                        SymbolKind['Event'],
                        SymbolKind[_0x5b3c8c(0x17a)],
                        SymbolKind[_0x5b3c8c(0x16b)]
                    ]
                },
                'hierarchicalDocumentSymbolSupport': ![]
            },
            'definition': { 'dynamicRegistration': ![] },
            'declaration': { 'dynamicRegistration': ![] },
            'typeDefinition': { 'dynamicRegistration': ![] },
            'implementation': { 'dynamicRegistration': ![] },
            'publishDiagnostics': { 'relatedInformation': !![] }
        }
    };
function syncPreferences(_0x135c57) {
    var _0x46ce25 = _0x5b3c8c;
    global[_0x46ce25(0x180)] = global[_0x46ce25(0x180)] || {}, global[_0x46ce25(0x180)]['preferences'] = _0x135c57 || global[_0x46ce25(0x180)][_0x46ce25(0x181)] || {};
}
function initialize(_0x97d171, _0x1b7ed3, _0xe5fcee) {
    var _0x3330f5 = _0x5b3c8c;
    (!_0x97d171 || !_0x1b7ed3) && _0xe5fcee(!![], null);
    var _0x4b2073 = _0x97d171['split'](BACKWARD_SLASH)[_0x3330f5(0x182)](FORWARD_SLASH), _0xaea651 = _0x4b2073[_0x3330f5(0x183)](FORWARD_SLASH), _0x2e1de8 = _0xaea651[_0x3330f5(0x184)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)[_0x3330f5(0x182)](FORWARD_SLASH);
    global[_0x3330f5(0x180)] = global['LanguageClientInfo'] || {}, global['LanguageClientInfo'][_0x3330f5(0x185)] = _0x2e1de8, global[_0x3330f5(0x180)]['defaultBracketsCapabilities'] = defaultBracketsCapabilities, global[_0x3330f5(0x180)]['toolingInfo'] = _0x1b7ed3, global[_0x3330f5(0x180)][_0x3330f5(0x181)] = {}, _0xe5fcee(null, !![]);
}
function _0x5634(_0x404126, _0x19e389) {
    return _0x5634 = function (_0x28dbc6, _0x56348d) {
        _0x28dbc6 = _0x28dbc6 - 0x152;
        var _0x20fec9 = _0x28db[_0x28dbc6];
        return _0x20fec9;
    }, _0x5634(_0x404126, _0x19e389);
}
function init(_0x5e2ba4) {
    var _0x1cf91a = _0x5b3c8c;
    !_0x5e2ba4[_0x1cf91a(0x186)](domainName) && _0x5e2ba4['registerDomain'](domainName, {
        'major': 0x0,
        'minor': 0x1
    }), _0x5e2ba4[_0x1cf91a(0x187)](domainName, _0x1cf91a(0x188), initialize, !![], _0x1cf91a(0x189), [
        {
            'name': _0x1cf91a(0x18a),
            'type': 'string',
            'description': _0x1cf91a(0x18b)
        },
        {
            'name': _0x1cf91a(0x18c),
            'type': 'object',
            'description': _0x1cf91a(0x18d)
        }
    ], []), _0x5e2ba4[_0x1cf91a(0x187)](domainName, _0x1cf91a(0x18e), syncPreferences, ![], 'Sync\x20language\x20tools\x20preferences\x20for\x20Language\x20Client\x20Module', [{
            'name': _0x1cf91a(0x18f),
            'type': _0x1cf91a(0x190),
            'description': 'Language\x20tools\x20preferences'
        }], []);
}
exports[_0x5b3c8c(0x191)] = init;
