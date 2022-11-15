'use strict';
var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        'languageTools',
        'LanguageClient',
        'LanguageClient'
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
                    SymbolKind['Class'],
                    SymbolKind['Method'],
                    SymbolKind['Property'],
                    SymbolKind['Field'],
                    SymbolKind['Constructor'],
                    SymbolKind['Enum'],
                    SymbolKind['Interface'],
                    SymbolKind['Function'],
                    SymbolKind['Variable'],
                    SymbolKind['Constant'],
                    SymbolKind['String'],
                    SymbolKind['Number'],
                    SymbolKind['Boolean'],
                    SymbolKind['Array'],
                    SymbolKind['Object'],
                    SymbolKind['Key'],
                    SymbolKind['Null'],
                    SymbolKind['EnumMember'],
                    SymbolKind['Struct'],
                    SymbolKind['Event'],
                    SymbolKind['Operator'],
                    SymbolKind['TypeParameter']
                ]
            }
        },
        'textDocument': {
            'synchronization': { 'didSave': !![] },
            'completion': {
                'dynamicRegistration': ![],
                'completionItem': {
                    'deprecatedSupport': !![],
                    'documentationFormat': ['plaintext'],
                    'preselectSupport': !![]
                },
                'completionItemKind': {
                    'valueSet': [
                        CompletionItemKind['Text'],
                        CompletionItemKind['Method'],
                        CompletionItemKind['Function'],
                        CompletionItemKind['Constructor'],
                        CompletionItemKind['Field'],
                        CompletionItemKind['Variable'],
                        CompletionItemKind['Class'],
                        CompletionItemKind['Interface'],
                        CompletionItemKind['Module'],
                        CompletionItemKind['Property'],
                        CompletionItemKind['Unit'],
                        CompletionItemKind['Value'],
                        CompletionItemKind['Enum'],
                        CompletionItemKind['Keyword'],
                        CompletionItemKind['Snippet'],
                        CompletionItemKind['Color'],
                        CompletionItemKind['File'],
                        CompletionItemKind['Reference'],
                        CompletionItemKind['Folder'],
                        CompletionItemKind['EnumMember'],
                        CompletionItemKind['Constant'],
                        CompletionItemKind['Struct'],
                        CompletionItemKind['Event'],
                        CompletionItemKind['Operator'],
                        CompletionItemKind['TypeParameter']
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': ['plaintext'] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind['File'],
                        SymbolKind['Module'],
                        SymbolKind['Namespace'],
                        SymbolKind['Package'],
                        SymbolKind['Class'],
                        SymbolKind['Method'],
                        SymbolKind['Property'],
                        SymbolKind['Field'],
                        SymbolKind['Constructor'],
                        SymbolKind['Enum'],
                        SymbolKind['Interface'],
                        SymbolKind['Function'],
                        SymbolKind['Variable'],
                        SymbolKind['Constant'],
                        SymbolKind['String'],
                        SymbolKind['Number'],
                        SymbolKind['Boolean'],
                        SymbolKind['Array'],
                        SymbolKind['Object'],
                        SymbolKind['Key'],
                        SymbolKind['Null'],
                        SymbolKind['EnumMember'],
                        SymbolKind['Struct'],
                        SymbolKind['Event'],
                        SymbolKind['Operator'],
                        SymbolKind['TypeParameter']
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
function syncPreferences(_0x4cda73) {
    global['LanguageClientInfo'] = global['LanguageClientInfo'] || {}, global['LanguageClientInfo']['preferences'] = _0x4cda73 || global['LanguageClientInfo']['preferences'] || {};
}
function initialize(_0x539a35, _0x5b648c, _0x54d0f5) {
    (!_0x539a35 || !_0x5b648c) && _0x54d0f5(!![], null);
    var _0xe03d7c = _0x539a35['split'](BACKWARD_SLASH)['join'](FORWARD_SLASH), _0x46a93a = _0xe03d7c['split'](FORWARD_SLASH), _0x33f675 = _0x46a93a['concat'](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)['join'](FORWARD_SLASH);
    global['LanguageClientInfo'] = global['LanguageClientInfo'] || {}, global['LanguageClientInfo']['languageClientPath'] = _0x33f675, global['LanguageClientInfo']['defaultBracketsCapabilities'] = defaultBracketsCapabilities, global['LanguageClientInfo']['toolingInfo'] = _0x5b648c, global['LanguageClientInfo']['preferences'] = {}, _0x54d0f5(null, !![]);
}
function init(_0x2ba26b) {
    !_0x2ba26b['hasDomain'](domainName) && _0x2ba26b['registerDomain'](domainName, {
        'major': 0x0,
        'minor': 0x1
    }), _0x2ba26b['registerCommand'](domainName, 'initialize', initialize, !![], 'Initialize\x20node\x20environment\x20for\x20Language\x20Client\x20Module', [
        {
            'name': 'bracketsSourcePath',
            'type': 'string',
            'description': 'Absolute\x20path\x20to\x20the\x20brackets\x20source'
        },
        {
            'name': 'toolingInfo',
            'type': 'object',
            'description': 'Tooling\x20Info\x20json\x20to\x20be\x20used\x20by\x20Language\x20Client'
        }
    ], []), _0x2ba26b['registerCommand'](domainName, 'syncPreferences', syncPreferences, ![], 'Sync\x20language\x20tools\x20preferences\x20for\x20Language\x20Client\x20Module', [{
            'name': 'prefs',
            'type': 'object',
            'description': 'Language\x20tools\x20preferences'
        }], []);
}
exports['init'] = init;
