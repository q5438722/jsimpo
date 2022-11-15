var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0x5b3c8c(349),
        _0x5b3c8c(350),
        _0x5b3c8c(350)
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
                    SymbolKind['Namespace'],
                    SymbolKind['Package'],
                    SymbolKind[_0x5b3c8c(351)],
                    SymbolKind[_0x5b3c8c(352)],
                    SymbolKind[_0x5b3c8c(353)],
                    SymbolKind[_0x5b3c8c(354)],
                    SymbolKind['Constructor'],
                    SymbolKind['Enum'],
                    SymbolKind['Interface'],
                    SymbolKind[_0x5b3c8c(355)],
                    SymbolKind['Variable'],
                    SymbolKind['Constant'],
                    SymbolKind[_0x5b3c8c(356)],
                    SymbolKind[_0x5b3c8c(357)],
                    SymbolKind[_0x5b3c8c(358)],
                    SymbolKind[_0x5b3c8c(359)],
                    SymbolKind[_0x5b3c8c(360)],
                    SymbolKind[_0x5b3c8c(361)],
                    SymbolKind['Null'],
                    SymbolKind['EnumMember'],
                    SymbolKind[_0x5b3c8c(362)],
                    SymbolKind['Event'],
                    SymbolKind['Operator'],
                    SymbolKind[_0x5b3c8c(363)]
                ]
            }
        },
        'textDocument': {
            'synchronization': { 'didSave': !![] },
            'completion': {
                'dynamicRegistration': ![],
                'completionItem': {
                    'deprecatedSupport': !![],
                    'documentationFormat': [_0x5b3c8c(364)],
                    'preselectSupport': !![]
                },
                'completionItemKind': {
                    'valueSet': [
                        CompletionItemKind['Text'],
                        CompletionItemKind[_0x5b3c8c(352)],
                        CompletionItemKind['Function'],
                        CompletionItemKind[_0x5b3c8c(365)],
                        CompletionItemKind[_0x5b3c8c(354)],
                        CompletionItemKind[_0x5b3c8c(366)],
                        CompletionItemKind[_0x5b3c8c(351)],
                        CompletionItemKind[_0x5b3c8c(367)],
                        CompletionItemKind[_0x5b3c8c(368)],
                        CompletionItemKind[_0x5b3c8c(353)],
                        CompletionItemKind[_0x5b3c8c(369)],
                        CompletionItemKind[_0x5b3c8c(370)],
                        CompletionItemKind['Enum'],
                        CompletionItemKind['Keyword'],
                        CompletionItemKind[_0x5b3c8c(371)],
                        CompletionItemKind[_0x5b3c8c(372)],
                        CompletionItemKind[_0x5b3c8c(373)],
                        CompletionItemKind[_0x5b3c8c(374)],
                        CompletionItemKind[_0x5b3c8c(375)],
                        CompletionItemKind[_0x5b3c8c(376)],
                        CompletionItemKind['Constant'],
                        CompletionItemKind['Struct'],
                        CompletionItemKind[_0x5b3c8c(377)],
                        CompletionItemKind[_0x5b3c8c(378)],
                        CompletionItemKind[_0x5b3c8c(363)]
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': [_0x5b3c8c(364)] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind['File'],
                        SymbolKind[_0x5b3c8c(368)],
                        SymbolKind[_0x5b3c8c(379)],
                        SymbolKind[_0x5b3c8c(380)],
                        SymbolKind[_0x5b3c8c(351)],
                        SymbolKind[_0x5b3c8c(352)],
                        SymbolKind['Property'],
                        SymbolKind[_0x5b3c8c(354)],
                        SymbolKind['Constructor'],
                        SymbolKind[_0x5b3c8c(381)],
                        SymbolKind[_0x5b3c8c(367)],
                        SymbolKind['Function'],
                        SymbolKind[_0x5b3c8c(366)],
                        SymbolKind[_0x5b3c8c(382)],
                        SymbolKind[_0x5b3c8c(356)],
                        SymbolKind[_0x5b3c8c(357)],
                        SymbolKind['Boolean'],
                        SymbolKind[_0x5b3c8c(359)],
                        SymbolKind[_0x5b3c8c(360)],
                        SymbolKind[_0x5b3c8c(361)],
                        SymbolKind[_0x5b3c8c(383)],
                        SymbolKind['EnumMember'],
                        SymbolKind[_0x5b3c8c(362)],
                        SymbolKind['Event'],
                        SymbolKind[_0x5b3c8c(378)],
                        SymbolKind[_0x5b3c8c(363)]
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
    global[_0x46ce25(384)] = global[_0x46ce25(384)] || {}, global[_0x46ce25(384)]['preferences'] = _0x135c57 || global[_0x46ce25(384)][_0x46ce25(385)] || {};
}
function initialize(_0x97d171, _0x1b7ed3, _0xe5fcee) {
    var _0x3330f5 = _0x5b3c8c;
    (!_0x97d171 || !_0x1b7ed3) && _0xe5fcee(!![], null);
    var _0x4b2073 = _0x97d171['split'](BACKWARD_SLASH)[_0x3330f5(386)](FORWARD_SLASH), _0xaea651 = _0x4b2073[_0x3330f5(387)](FORWARD_SLASH), _0x2e1de8 = _0xaea651[_0x3330f5(388)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)[_0x3330f5(386)](FORWARD_SLASH);
    global[_0x3330f5(384)] = global['LanguageClientInfo'] || {}, global['LanguageClientInfo'][_0x3330f5(389)] = _0x2e1de8, global[_0x3330f5(384)]['defaultBracketsCapabilities'] = defaultBracketsCapabilities, global[_0x3330f5(384)]['toolingInfo'] = _0x1b7ed3, global[_0x3330f5(384)][_0x3330f5(385)] = {}, _0xe5fcee(null, !![]);
}
function _0x5634(_0x404126, _0x19e389) {
    return _0x5634 = function (_0x28dbc6, _0x56348d) {
        _0x28dbc6 = _0x28dbc6 - 338;
        var _0x20fec9 = _0x28db[_0x28dbc6];
        return _0x20fec9;
    }, _0x5634(_0x404126, _0x19e389);
}
function init(_0x5e2ba4) {
    var _0x1cf91a = _0x5b3c8c;
    !_0x5e2ba4[_0x1cf91a(390)](domainName) && _0x5e2ba4['registerDomain'](domainName, {
        'major': 0,
        'minor': 1
    }), _0x5e2ba4[_0x1cf91a(391)](domainName, _0x1cf91a(392), initialize, !![], _0x1cf91a(393), [
        {
            'name': _0x1cf91a(394),
            'type': 'string',
            'description': _0x1cf91a(395)
        },
        {
            'name': _0x1cf91a(396),
            'type': 'object',
            'description': _0x1cf91a(397)
        }
    ], []), _0x5e2ba4[_0x1cf91a(391)](domainName, _0x1cf91a(398), syncPreferences, ![], 'Sync language tools preferences for Language Client Module', [{
            'name': _0x1cf91a(399),
            'type': _0x1cf91a(400),
            'description': 'Language tools preferences'
        }], []);
}
exports[_0x5b3c8c(401)] = init;