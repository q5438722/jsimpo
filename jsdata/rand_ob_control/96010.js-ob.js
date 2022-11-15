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
function syncPreferences(_0x46c420) {
    global['LanguageClientInfo'] = global['LanguageClientInfo'] || {}, global['LanguageClientInfo']['preferences'] = _0x46c420 || global['LanguageClientInfo']['preferences'] || {};
}
function initialize(_0xf290c3, _0x53ef94, _0x12f618) {
    var _0x55ff4b = {
            'cshqT': '5|0|1|2|7|6|3|4',
            'fcPFB': function (_0x230fb8, _0x5ecf48, _0x1e5950) {
                return _0x230fb8(_0x5ecf48, _0x1e5950);
            },
            'sMRTk': function (_0x5e9b61, _0x3a4a41) {
                return _0x5e9b61 || _0x3a4a41;
            },
            'nHZKp': function (_0x45d47f, _0x43ab9d, _0x319d51) {
                return _0x45d47f(_0x43ab9d, _0x319d51);
            }
        }, _0x5381d6 = _0x55ff4b['cshqT']['split']('|'), _0x119cb3 = 0x0;
    while (!![]) {
        switch (_0x5381d6[_0x119cb3++]) {
        case '0':
            var _0x53cf6d = _0xf290c3['split'](BACKWARD_SLASH)['join'](FORWARD_SLASH), _0x544825 = _0x53cf6d['split'](FORWARD_SLASH), _0x512e0a = _0x544825['concat'](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)['join'](FORWARD_SLASH);
            continue;
        case '1':
            global['LanguageClientInfo'] = global['LanguageClientInfo'] || {};
            continue;
        case '2':
            global['LanguageClientInfo']['languageClientPath'] = _0x512e0a;
            continue;
        case '3':
            global['LanguageClientInfo']['preferences'] = {};
            continue;
        case '4':
            _0x55ff4b['fcPFB'](_0x12f618, null, !![]);
            continue;
        case '5':
            _0x55ff4b['sMRTk'](!_0xf290c3, !_0x53ef94) && _0x55ff4b['nHZKp'](_0x12f618, !![], null);
            continue;
        case '6':
            global['LanguageClientInfo']['toolingInfo'] = _0x53ef94;
            continue;
        case '7':
            global['LanguageClientInfo']['defaultBracketsCapabilities'] = defaultBracketsCapabilities;
            continue;
        }
        break;
    }
}
function init(_0x2133ff) {
    var _0x23245c = {
        'bPaMW': 'initialize',
        'qbLGq': 'Initialize\x20node\x20environment\x20for\x20Language\x20Client\x20Module',
        'xrKeG': 'bracketsSourcePath',
        'lXATu': 'string',
        'MMuNh': 'Absolute\x20path\x20to\x20the\x20brackets\x20source',
        'uRfWu': 'toolingInfo',
        'JnoEl': 'object',
        'LrYWy': 'Tooling\x20Info\x20json\x20to\x20be\x20used\x20by\x20Language\x20Client',
        'zWzGY': 'syncPreferences',
        'jKzbA': 'Sync\x20language\x20tools\x20preferences\x20for\x20Language\x20Client\x20Module',
        'asEZD': 'prefs',
        'TOJil': 'Language\x20tools\x20preferences'
    };
    !_0x2133ff['hasDomain'](domainName) && _0x2133ff['registerDomain'](domainName, {
        'major': 0x0,
        'minor': 0x1
    }), _0x2133ff['registerCommand'](domainName, _0x23245c['bPaMW'], initialize, !![], _0x23245c['qbLGq'], [
        {
            'name': _0x23245c['xrKeG'],
            'type': _0x23245c['lXATu'],
            'description': _0x23245c['MMuNh']
        },
        {
            'name': _0x23245c['uRfWu'],
            'type': _0x23245c['JnoEl'],
            'description': _0x23245c['LrYWy']
        }
    ], []), _0x2133ff['registerCommand'](domainName, _0x23245c['zWzGY'], syncPreferences, ![], _0x23245c['jKzbA'], [{
            'name': _0x23245c['asEZD'],
            'type': _0x23245c['JnoEl'],
            'description': _0x23245c['TOJil']
        }], []);
}
exports['init'] = init;
