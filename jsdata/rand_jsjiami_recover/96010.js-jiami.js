'use strict';
var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        'languageTools',
        'LanguageClient',
        'LanguageClient'
    ], FORWARD_SLASH = '/', BACKWARD_SLASH = '\\', CompletionItemKind = {}, SymbolKind = {}, defaultBracketsCapabilities = {
        'workspace': {
            'workspaceFolders': !![],
            'symbol': {
                'dynamicRegistration': ![],
                'symbolKind': [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26
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
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25
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
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26
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
function syncPreferences(_0x3fb267) {
    global['LanguageClientInfo'] = global['LanguageClientInfo'] || {};
    global['LanguageClientInfo']['preferences'] = _0x3fb267 || global['LanguageClientInfo']['preferences'] || {};
}
function initialize(_0x18baa4, _0x5ba625, _0x4f1dcc) {
    if (!_0x18baa4 || !_0x5ba625) {
        if ('cQhTf' === 'cQhTf') {
            _0x4f1dcc(!![], null);
        } else {
            global['LanguageClientInfo'] = global['LanguageClientInfo'] || {};
            global['LanguageClientInfo']['preferences'] = prefs || global['LanguageClientInfo']['preferences'] || {};
        }
    }
    var _0x2bba77 = _0x18baa4['split'](BACKWARD_SLASH)['join'](FORWARD_SLASH), _0x5c901f = _0x2bba77['split'](FORWARD_SLASH), _0x409498 = _0x5c901f['concat'](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)['join'](FORWARD_SLASH);
    global['LanguageClientInfo'] = global['LanguageClientInfo'] || {};
    global['LanguageClientInfo']['languageClientPath'] = _0x409498;
    global['LanguageClientInfo']['defaultBracketsCapabilities'] = defaultBracketsCapabilities;
    global['LanguageClientInfo']['toolingInfo'] = _0x5ba625;
    global['LanguageClientInfo']['preferences'] = {};
    _0x4f1dcc(null, !![]);
}
function init(_0x29b32c) {
    if (!_0x29b32c['hasDomain'](domainName)) {
        if ('AvjSV' !== 'AvjSV') {
            _0x29b32c['registerDomain'](domainName, {
                'major': 0,
                'minor': 1
            });
        } else {
            _0x29b32c['registerDomain'](domainName, {
                'major': 0,
                'minor': 1
            });
        }
    }
    _0x29b32c['registerCommand'](domainName, 'initialize', initialize, !![], 'Initialize node environment for Language Client Module', [
        {
            'name': 'bracketsSourcePath',
            'type': 'string',
            'description': 'Absolute path to the brackets source'
        },
        {
            'name': 'toolingInfo',
            'type': 'object',
            'description': 'Tooling Info json to be used by Language Client'
        }
    ], []);
    _0x29b32c['registerCommand'](domainName, 'syncPreferences', syncPreferences, ![], 'Sync language tools preferences for Language Client Module', [{
            'name': 'prefs',
            'type': 'object',
            'description': 'Language tools preferences'
        }], []);
}
exports['init'] = init;