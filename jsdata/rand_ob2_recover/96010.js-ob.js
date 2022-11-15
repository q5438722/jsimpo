var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0x127bb9(334),
        _0x127bb9(335),
        _0x127bb9(335)
    ], FORWARD_SLASH = '/', BACKWARD_SLASH = '\\', CompletionItemKind = {
        'Text': 1,
        'Method': 2,
        'Function': 3,
        'Constructor': 4,
        'Field': 5,
        'Variable': 6,
        'Class': 7,
        'Interface': 8,
        'Module': 9,
        'Property': 10,
        'Unit': 11,
        'Value': 12,
        'Enum': 13,
        'Keyword': 14,
        'Snippet': 15,
        'Color': 16,
        'File': 17,
        'Reference': 18,
        'Folder': 19,
        'EnumMember': 20,
        'Constant': 21,
        'Struct': 22,
        'Event': 23,
        'Operator': 24,
        'TypeParameter': 25
    }, SymbolKind = {
        'File': 1,
        'Module': 2,
        'Namespace': 3,
        'Package': 4,
        'Class': 5,
        'Method': 6,
        'Property': 7,
        'Field': 8,
        'Constructor': 9,
        'Enum': 10,
        'Interface': 11,
        'Function': 12,
        'Variable': 13,
        'Constant': 14,
        'String': 15,
        'Number': 16,
        'Boolean': 17,
        'Array': 18,
        'Object': 19,
        'Key': 20,
        'Null': 21,
        'EnumMember': 22,
        'Struct': 23,
        'Event': 24,
        'Operator': 25,
        'TypeParameter': 26
    }, defaultBracketsCapabilities = {
        'workspace': {
            'workspaceFolders': !![],
            'symbol': {
                'dynamicRegistration': ![],
                'symbolKind': [
                    SymbolKind['File'],
                    SymbolKind['Module'],
                    SymbolKind[_0x127bb9(336)],
                    SymbolKind[_0x127bb9(337)],
                    SymbolKind['Class'],
                    SymbolKind[_0x127bb9(338)],
                    SymbolKind[_0x127bb9(339)],
                    SymbolKind['Field'],
                    SymbolKind[_0x127bb9(340)],
                    SymbolKind[_0x127bb9(341)],
                    SymbolKind['Interface'],
                    SymbolKind[_0x127bb9(342)],
                    SymbolKind[_0x127bb9(343)],
                    SymbolKind[_0x127bb9(344)],
                    SymbolKind['String'],
                    SymbolKind[_0x127bb9(345)],
                    SymbolKind[_0x127bb9(346)],
                    SymbolKind['Array'],
                    SymbolKind['Object'],
                    SymbolKind['Key'],
                    SymbolKind[_0x127bb9(347)],
                    SymbolKind[_0x127bb9(348)],
                    SymbolKind[_0x127bb9(349)],
                    SymbolKind[_0x127bb9(350)],
                    SymbolKind[_0x127bb9(351)],
                    SymbolKind[_0x127bb9(352)]
                ]
            }
        },
        'textDocument': {
            'synchronization': { 'didSave': !![] },
            'completion': {
                'dynamicRegistration': ![],
                'completionItem': {
                    'deprecatedSupport': !![],
                    'documentationFormat': [_0x127bb9(353)],
                    'preselectSupport': !![]
                },
                'completionItemKind': {
                    'valueSet': [
                        CompletionItemKind[_0x127bb9(354)],
                        CompletionItemKind[_0x127bb9(338)],
                        CompletionItemKind[_0x127bb9(342)],
                        CompletionItemKind[_0x127bb9(340)],
                        CompletionItemKind[_0x127bb9(355)],
                        CompletionItemKind['Variable'],
                        CompletionItemKind[_0x127bb9(356)],
                        CompletionItemKind['Interface'],
                        CompletionItemKind[_0x127bb9(357)],
                        CompletionItemKind[_0x127bb9(339)],
                        CompletionItemKind[_0x127bb9(358)],
                        CompletionItemKind[_0x127bb9(359)],
                        CompletionItemKind[_0x127bb9(341)],
                        CompletionItemKind[_0x127bb9(360)],
                        CompletionItemKind[_0x127bb9(361)],
                        CompletionItemKind['Color'],
                        CompletionItemKind['File'],
                        CompletionItemKind[_0x127bb9(362)],
                        CompletionItemKind[_0x127bb9(363)],
                        CompletionItemKind[_0x127bb9(348)],
                        CompletionItemKind[_0x127bb9(344)],
                        CompletionItemKind[_0x127bb9(349)],
                        CompletionItemKind[_0x127bb9(350)],
                        CompletionItemKind[_0x127bb9(351)],
                        CompletionItemKind[_0x127bb9(352)]
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': [_0x127bb9(353)] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind[_0x127bb9(364)],
                        SymbolKind['Module'],
                        SymbolKind[_0x127bb9(336)],
                        SymbolKind[_0x127bb9(337)],
                        SymbolKind[_0x127bb9(356)],
                        SymbolKind[_0x127bb9(338)],
                        SymbolKind[_0x127bb9(339)],
                        SymbolKind['Field'],
                        SymbolKind[_0x127bb9(340)],
                        SymbolKind['Enum'],
                        SymbolKind[_0x127bb9(365)],
                        SymbolKind[_0x127bb9(342)],
                        SymbolKind[_0x127bb9(343)],
                        SymbolKind[_0x127bb9(344)],
                        SymbolKind['String'],
                        SymbolKind['Number'],
                        SymbolKind[_0x127bb9(346)],
                        SymbolKind['Array'],
                        SymbolKind['Object'],
                        SymbolKind['Key'],
                        SymbolKind['Null'],
                        SymbolKind[_0x127bb9(348)],
                        SymbolKind[_0x127bb9(349)],
                        SymbolKind[_0x127bb9(350)],
                        SymbolKind[_0x127bb9(351)],
                        SymbolKind[_0x127bb9(352)]
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
        _0x14de0f = _0x14de0f - 324;
        var _0x537a03 = _0x14de[_0x14de0f];
        return _0x537a03;
    }, _0x2210(_0xf7e669, _0x194b6a);
}
function syncPreferences(_0x40f30d) {
    var _0x2f3654 = _0x127bb9;
    global['LanguageClientInfo'] = global[_0x2f3654(366)] || {}, global[_0x2f3654(366)]['preferences'] = _0x40f30d || global[_0x2f3654(366)][_0x2f3654(367)] || {};
}
function initialize(_0x331f47, _0x575679, _0x287b15) {
    var _0x1d0b02 = _0x127bb9;
    (!_0x331f47 || !_0x575679) && _0x287b15(!![], null);
    var _0x29e142 = _0x331f47['split'](BACKWARD_SLASH)[_0x1d0b02(368)](FORWARD_SLASH), _0x1d99ef = _0x29e142[_0x1d0b02(369)](FORWARD_SLASH), _0x3f8b9a = _0x1d99ef[_0x1d0b02(370)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)[_0x1d0b02(368)](FORWARD_SLASH);
    global['LanguageClientInfo'] = global[_0x1d0b02(366)] || {}, global['LanguageClientInfo']['languageClientPath'] = _0x3f8b9a, global[_0x1d0b02(366)][_0x1d0b02(371)] = defaultBracketsCapabilities, global[_0x1d0b02(366)][_0x1d0b02(372)] = _0x575679, global[_0x1d0b02(366)][_0x1d0b02(367)] = {}, _0x287b15(null, !![]);
}
function init(_0x3d4ac9) {
    var _0x110963 = _0x127bb9;
    !_0x3d4ac9['hasDomain'](domainName) && _0x3d4ac9[_0x110963(373)](domainName, {
        'major': 0,
        'minor': 1
    }), _0x3d4ac9['registerCommand'](domainName, _0x110963(374), initialize, !![], _0x110963(375), [
        {
            'name': _0x110963(376),
            'type': _0x110963(377),
            'description': 'Absolute path to the brackets source'
        },
        {
            'name': 'toolingInfo',
            'type': 'object',
            'description': 'Tooling Info json to be used by Language Client'
        }
    ], []), _0x3d4ac9[_0x110963(378)](domainName, _0x110963(379), syncPreferences, ![], _0x110963(380), [{
            'name': 'prefs',
            'type': _0x110963(381),
            'description': 'Language tools preferences'
        }], []);
}
exports['init'] = init;