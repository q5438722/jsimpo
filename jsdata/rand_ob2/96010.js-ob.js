'use strict';
var _0x14de = [
    'Text',
    'Field',
    'Class',
    'Module',
    'Unit',
    'Value',
    'Keyword',
    'Snippet',
    'Reference',
    'Folder',
    'File',
    'Interface',
    'LanguageClientInfo',
    'preferences',
    'join',
    'split',
    'concat',
    'defaultBracketsCapabilities',
    'toolingInfo',
    'registerDomain',
    'initialize',
    'Initialize\x20node\x20environment\x20for\x20Language\x20Client\x20Module',
    'bracketsSourcePath',
    'string',
    'registerCommand',
    'syncPreferences',
    'Sync\x20language\x20tools\x20preferences\x20for\x20Language\x20Client\x20Module',
    'object',
    '23324jRFiKW',
    '61pjxDzF',
    '3029xlboFr',
    '128964XPiWPi',
    '872XCUHMj',
    '325WTjOFU',
    '347318kVsXrU',
    '17PyeZdj',
    '8133sVmxSO',
    '1012587ecPHBJ',
    'languageTools',
    'LanguageClient',
    'Namespace',
    'Package',
    'Method',
    'Property',
    'Constructor',
    'Enum',
    'Function',
    'Variable',
    'Constant',
    'Number',
    'Boolean',
    'Null',
    'EnumMember',
    'Struct',
    'Event',
    'Operator',
    'TypeParameter',
    'plaintext'
];
var _0x127bb9 = _0x2210;
(function (_0x19049d, _0x18d4d9) {
    var _0x5b6083 = _0x2210;
    while (!![]) {
        try {
            var _0x38187e = -parseInt(_0x5b6083(0x144)) + -parseInt(_0x5b6083(0x145)) * parseInt(_0x5b6083(0x146)) + -parseInt(_0x5b6083(0x147)) + parseInt(_0x5b6083(0x148)) * -parseInt(_0x5b6083(0x149)) + -parseInt(_0x5b6083(0x14a)) + -parseInt(_0x5b6083(0x14b)) * -parseInt(_0x5b6083(0x14c)) + parseInt(_0x5b6083(0x14d));
            if (_0x38187e === _0x18d4d9)
                break;
            else
                _0x19049d['push'](_0x19049d['shift']());
        } catch (_0x473d67) {
            _0x19049d['push'](_0x19049d['shift']());
        }
    }
}(_0x14de, 0x2cb21));
var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0x127bb9(0x14e),
        _0x127bb9(0x14f),
        _0x127bb9(0x14f)
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
                    SymbolKind[_0x127bb9(0x150)],
                    SymbolKind[_0x127bb9(0x151)],
                    SymbolKind['Class'],
                    SymbolKind[_0x127bb9(0x152)],
                    SymbolKind[_0x127bb9(0x153)],
                    SymbolKind['Field'],
                    SymbolKind[_0x127bb9(0x154)],
                    SymbolKind[_0x127bb9(0x155)],
                    SymbolKind['Interface'],
                    SymbolKind[_0x127bb9(0x156)],
                    SymbolKind[_0x127bb9(0x157)],
                    SymbolKind[_0x127bb9(0x158)],
                    SymbolKind['String'],
                    SymbolKind[_0x127bb9(0x159)],
                    SymbolKind[_0x127bb9(0x15a)],
                    SymbolKind['Array'],
                    SymbolKind['Object'],
                    SymbolKind['Key'],
                    SymbolKind[_0x127bb9(0x15b)],
                    SymbolKind[_0x127bb9(0x15c)],
                    SymbolKind[_0x127bb9(0x15d)],
                    SymbolKind[_0x127bb9(0x15e)],
                    SymbolKind[_0x127bb9(0x15f)],
                    SymbolKind[_0x127bb9(0x160)]
                ]
            }
        },
        'textDocument': {
            'synchronization': { 'didSave': !![] },
            'completion': {
                'dynamicRegistration': ![],
                'completionItem': {
                    'deprecatedSupport': !![],
                    'documentationFormat': [_0x127bb9(0x161)],
                    'preselectSupport': !![]
                },
                'completionItemKind': {
                    'valueSet': [
                        CompletionItemKind[_0x127bb9(0x162)],
                        CompletionItemKind[_0x127bb9(0x152)],
                        CompletionItemKind[_0x127bb9(0x156)],
                        CompletionItemKind[_0x127bb9(0x154)],
                        CompletionItemKind[_0x127bb9(0x163)],
                        CompletionItemKind['Variable'],
                        CompletionItemKind[_0x127bb9(0x164)],
                        CompletionItemKind['Interface'],
                        CompletionItemKind[_0x127bb9(0x165)],
                        CompletionItemKind[_0x127bb9(0x153)],
                        CompletionItemKind[_0x127bb9(0x166)],
                        CompletionItemKind[_0x127bb9(0x167)],
                        CompletionItemKind[_0x127bb9(0x155)],
                        CompletionItemKind[_0x127bb9(0x168)],
                        CompletionItemKind[_0x127bb9(0x169)],
                        CompletionItemKind['Color'],
                        CompletionItemKind['File'],
                        CompletionItemKind[_0x127bb9(0x16a)],
                        CompletionItemKind[_0x127bb9(0x16b)],
                        CompletionItemKind[_0x127bb9(0x15c)],
                        CompletionItemKind[_0x127bb9(0x158)],
                        CompletionItemKind[_0x127bb9(0x15d)],
                        CompletionItemKind[_0x127bb9(0x15e)],
                        CompletionItemKind[_0x127bb9(0x15f)],
                        CompletionItemKind[_0x127bb9(0x160)]
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': [_0x127bb9(0x161)] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind[_0x127bb9(0x16c)],
                        SymbolKind['Module'],
                        SymbolKind[_0x127bb9(0x150)],
                        SymbolKind[_0x127bb9(0x151)],
                        SymbolKind[_0x127bb9(0x164)],
                        SymbolKind[_0x127bb9(0x152)],
                        SymbolKind[_0x127bb9(0x153)],
                        SymbolKind['Field'],
                        SymbolKind[_0x127bb9(0x154)],
                        SymbolKind['Enum'],
                        SymbolKind[_0x127bb9(0x16d)],
                        SymbolKind[_0x127bb9(0x156)],
                        SymbolKind[_0x127bb9(0x157)],
                        SymbolKind[_0x127bb9(0x158)],
                        SymbolKind['String'],
                        SymbolKind['Number'],
                        SymbolKind[_0x127bb9(0x15a)],
                        SymbolKind['Array'],
                        SymbolKind['Object'],
                        SymbolKind['Key'],
                        SymbolKind['Null'],
                        SymbolKind[_0x127bb9(0x15c)],
                        SymbolKind[_0x127bb9(0x15d)],
                        SymbolKind[_0x127bb9(0x15e)],
                        SymbolKind[_0x127bb9(0x15f)],
                        SymbolKind[_0x127bb9(0x160)]
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
function _0x2210(_0xf7e669, _0x194b6a) {
    return _0x2210 = function (_0x14de0f, _0x2210ad) {
        _0x14de0f = _0x14de0f - 0x144;
        var _0x537a03 = _0x14de[_0x14de0f];
        return _0x537a03;
    }, _0x2210(_0xf7e669, _0x194b6a);
}
function syncPreferences(_0x40f30d) {
    var _0x2f3654 = _0x127bb9;
    global['LanguageClientInfo'] = global[_0x2f3654(0x16e)] || {}, global[_0x2f3654(0x16e)]['preferences'] = _0x40f30d || global[_0x2f3654(0x16e)][_0x2f3654(0x16f)] || {};
}
function initialize(_0x331f47, _0x575679, _0x287b15) {
    var _0x1d0b02 = _0x127bb9;
    (!_0x331f47 || !_0x575679) && _0x287b15(!![], null);
    var _0x29e142 = _0x331f47['split'](BACKWARD_SLASH)[_0x1d0b02(0x170)](FORWARD_SLASH), _0x1d99ef = _0x29e142[_0x1d0b02(0x171)](FORWARD_SLASH), _0x3f8b9a = _0x1d99ef[_0x1d0b02(0x172)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)[_0x1d0b02(0x170)](FORWARD_SLASH);
    global['LanguageClientInfo'] = global[_0x1d0b02(0x16e)] || {}, global['LanguageClientInfo']['languageClientPath'] = _0x3f8b9a, global[_0x1d0b02(0x16e)][_0x1d0b02(0x173)] = defaultBracketsCapabilities, global[_0x1d0b02(0x16e)][_0x1d0b02(0x174)] = _0x575679, global[_0x1d0b02(0x16e)][_0x1d0b02(0x16f)] = {}, _0x287b15(null, !![]);
}
function init(_0x3d4ac9) {
    var _0x110963 = _0x127bb9;
    !_0x3d4ac9['hasDomain'](domainName) && _0x3d4ac9[_0x110963(0x175)](domainName, {
        'major': 0x0,
        'minor': 0x1
    }), _0x3d4ac9['registerCommand'](domainName, _0x110963(0x176), initialize, !![], _0x110963(0x177), [
        {
            'name': _0x110963(0x178),
            'type': _0x110963(0x179),
            'description': 'Absolute\x20path\x20to\x20the\x20brackets\x20source'
        },
        {
            'name': 'toolingInfo',
            'type': 'object',
            'description': 'Tooling\x20Info\x20json\x20to\x20be\x20used\x20by\x20Language\x20Client'
        }
    ], []), _0x3d4ac9[_0x110963(0x17a)](domainName, _0x110963(0x17b), syncPreferences, ![], _0x110963(0x17c), [{
            'name': 'prefs',
            'type': _0x110963(0x17d),
            'description': 'Language\x20tools\x20preferences'
        }], []);
}
exports['init'] = init;
