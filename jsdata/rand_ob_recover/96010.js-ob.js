var domainName = _0x24464a(254), LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0x24464a(255),
        _0x24464a(256),
        _0x24464a(256)
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
                    SymbolKind[_0x24464a(257)],
                    SymbolKind[_0x24464a(258)],
                    SymbolKind['Namespace'],
                    SymbolKind[_0x24464a(259)],
                    SymbolKind[_0x24464a(260)],
                    SymbolKind[_0x24464a(261)],
                    SymbolKind[_0x24464a(262)],
                    SymbolKind[_0x24464a(263)],
                    SymbolKind[_0x24464a(264)],
                    SymbolKind[_0x24464a(265)],
                    SymbolKind[_0x24464a(266)],
                    SymbolKind[_0x24464a(267)],
                    SymbolKind['Variable'],
                    SymbolKind['Constant'],
                    SymbolKind[_0x24464a(268)],
                    SymbolKind['Number'],
                    SymbolKind[_0x24464a(269)],
                    SymbolKind[_0x24464a(270)],
                    SymbolKind['Object'],
                    SymbolKind[_0x24464a(271)],
                    SymbolKind[_0x24464a(272)],
                    SymbolKind['EnumMember'],
                    SymbolKind[_0x24464a(273)],
                    SymbolKind[_0x24464a(274)],
                    SymbolKind[_0x24464a(275)],
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
                        CompletionItemKind[_0x24464a(276)],
                        CompletionItemKind[_0x24464a(261)],
                        CompletionItemKind['Function'],
                        CompletionItemKind[_0x24464a(264)],
                        CompletionItemKind[_0x24464a(263)],
                        CompletionItemKind[_0x24464a(277)],
                        CompletionItemKind[_0x24464a(260)],
                        CompletionItemKind['Interface'],
                        CompletionItemKind[_0x24464a(258)],
                        CompletionItemKind[_0x24464a(262)],
                        CompletionItemKind[_0x24464a(278)],
                        CompletionItemKind[_0x24464a(279)],
                        CompletionItemKind[_0x24464a(265)],
                        CompletionItemKind['Keyword'],
                        CompletionItemKind[_0x24464a(280)],
                        CompletionItemKind[_0x24464a(281)],
                        CompletionItemKind['File'],
                        CompletionItemKind[_0x24464a(282)],
                        CompletionItemKind[_0x24464a(283)],
                        CompletionItemKind[_0x24464a(284)],
                        CompletionItemKind[_0x24464a(285)],
                        CompletionItemKind['Struct'],
                        CompletionItemKind[_0x24464a(274)],
                        CompletionItemKind['Operator'],
                        CompletionItemKind[_0x24464a(286)]
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': [_0x24464a(287)] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind['File'],
                        SymbolKind[_0x24464a(258)],
                        SymbolKind['Namespace'],
                        SymbolKind[_0x24464a(259)],
                        SymbolKind['Class'],
                        SymbolKind[_0x24464a(261)],
                        SymbolKind[_0x24464a(262)],
                        SymbolKind[_0x24464a(263)],
                        SymbolKind[_0x24464a(264)],
                        SymbolKind['Enum'],
                        SymbolKind[_0x24464a(266)],
                        SymbolKind['Function'],
                        SymbolKind['Variable'],
                        SymbolKind[_0x24464a(285)],
                        SymbolKind[_0x24464a(268)],
                        SymbolKind[_0x24464a(288)],
                        SymbolKind[_0x24464a(269)],
                        SymbolKind[_0x24464a(270)],
                        SymbolKind[_0x24464a(289)],
                        SymbolKind[_0x24464a(271)],
                        SymbolKind[_0x24464a(272)],
                        SymbolKind[_0x24464a(284)],
                        SymbolKind['Struct'],
                        SymbolKind[_0x24464a(274)],
                        SymbolKind[_0x24464a(275)],
                        SymbolKind[_0x24464a(286)]
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
function syncPreferences(_0x45d798) {
    var _0x25cb3b = _0x24464a;
    global[_0x25cb3b(254)] = global[_0x25cb3b(254)] || {}, global[_0x25cb3b(254)]['preferences'] = _0x45d798 || global['LanguageClientInfo'][_0x25cb3b(290)] || {};
}
function _0x149c(_0x4611b7, _0x1806cd) {
    return _0x149c = function (_0x5af9c2, _0x38e08c) {
        _0x5af9c2 = _0x5af9c2 - (-5825 + 9536 + -3466 * 1);
        var _0x5a6ade = _0x1bfd[_0x5af9c2];
        return _0x5a6ade;
    }, _0x149c(_0x4611b7, _0x1806cd);
}
function initialize(_0x263722, _0x4e091a, _0x2c6d30) {
    var _0x1aff58 = _0x24464a, _0x21e123 = {
            'SCMBn': function (_0x247e1a, _0x10d73b) {
                return _0x247e1a || _0x10d73b;
            },
            'yFkPF': function (_0x5c460c, _0x1692a9, _0x4ebd15) {
                return _0x5c460c(_0x1692a9, _0x4ebd15);
            },
            'wiBOe': function (_0x14fd40, _0x53ef7e, _0x3c3a91) {
                return _0x14fd40(_0x53ef7e, _0x3c3a91);
            }
        };
    _0x21e123[_0x1aff58(291)](!_0x263722, !_0x4e091a) && _0x21e123['yFkPF'](_0x2c6d30, !![], null);
    var _0x48e290 = _0x263722['split'](BACKWARD_SLASH)['join'](FORWARD_SLASH), _0x33df43 = _0x48e290[_0x1aff58(292)](FORWARD_SLASH), _0xd5a784 = _0x33df43[_0x1aff58(293)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)['join'](FORWARD_SLASH);
    global['LanguageClientInfo'] = global[_0x1aff58(254)] || {}, global[_0x1aff58(254)][_0x1aff58(294)] = _0xd5a784, global[_0x1aff58(254)][_0x1aff58(295)] = defaultBracketsCapabilities, global[_0x1aff58(254)][_0x1aff58(296)] = _0x4e091a, global[_0x1aff58(254)][_0x1aff58(290)] = {}, _0x21e123[_0x1aff58(297)](_0x2c6d30, null, !![]);
}
function init(_0x3f83f6) {
    var _0x541379 = _0x24464a, _0xa4647a = {
            'JdEXA': 'initialize',
            'hSkWC': _0x541379(298),
            'FQYSc': _0x541379(299),
            'KtOvf': _0x541379(296),
            'obtgj': _0x541379(300),
            'JtcIn': _0x541379(301),
            'LUmnR': _0x541379(302),
            'HURUx': _0x541379(303),
            'PRHEW': 'Language tools preferences'
        };
    !_0x3f83f6[_0x541379(304)](domainName) && _0x3f83f6[_0x541379(305)](domainName, {
        'major': 0,
        'minor': 1
    }), _0x3f83f6[_0x541379(306)](domainName, _0xa4647a[_0x541379(307)], initialize, !![], _0x541379(308), [
        {
            'name': _0xa4647a[_0x541379(309)],
            'type': _0x541379(310),
            'description': _0xa4647a['FQYSc']
        },
        {
            'name': _0xa4647a[_0x541379(311)],
            'type': _0x541379(303),
            'description': _0xa4647a[_0x541379(312)]
        }
    ], []), _0x3f83f6['registerCommand'](domainName, _0x541379(313), syncPreferences, ![], _0xa4647a[_0x541379(314)], [{
            'name': _0xa4647a['LUmnR'],
            'type': _0xa4647a[_0x541379(315)],
            'description': _0xa4647a[_0x541379(316)]
        }], []);
}
exports['init'] = init;