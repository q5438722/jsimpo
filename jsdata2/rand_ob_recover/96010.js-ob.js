var domainName = 'LanguageClientInfo', LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0xf7bcc(467),
        _0xf7bcc(468),
        'LanguageClient'
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
                    SymbolKind[_0xf7bcc(469)],
                    SymbolKind['Module'],
                    SymbolKind[_0xf7bcc(470)],
                    SymbolKind['Package'],
                    SymbolKind[_0xf7bcc(471)],
                    SymbolKind[_0xf7bcc(472)],
                    SymbolKind[_0xf7bcc(473)],
                    SymbolKind[_0xf7bcc(474)],
                    SymbolKind[_0xf7bcc(475)],
                    SymbolKind[_0xf7bcc(476)],
                    SymbolKind[_0xf7bcc(477)],
                    SymbolKind[_0xf7bcc(478)],
                    SymbolKind[_0xf7bcc(479)],
                    SymbolKind['Constant'],
                    SymbolKind[_0xf7bcc(480)],
                    SymbolKind[_0xf7bcc(481)],
                    SymbolKind[_0xf7bcc(482)],
                    SymbolKind['Array'],
                    SymbolKind[_0xf7bcc(483)],
                    SymbolKind[_0xf7bcc(484)],
                    SymbolKind['Null'],
                    SymbolKind[_0xf7bcc(485)],
                    SymbolKind[_0xf7bcc(486)],
                    SymbolKind[_0xf7bcc(487)],
                    SymbolKind[_0xf7bcc(488)],
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
                    'documentationFormat': [_0xf7bcc(489)],
                    'preselectSupport': !![]
                },
                'completionItemKind': {
                    'valueSet': [
                        CompletionItemKind[_0xf7bcc(490)],
                        CompletionItemKind[_0xf7bcc(472)],
                        CompletionItemKind[_0xf7bcc(478)],
                        CompletionItemKind[_0xf7bcc(475)],
                        CompletionItemKind[_0xf7bcc(474)],
                        CompletionItemKind['Variable'],
                        CompletionItemKind[_0xf7bcc(471)],
                        CompletionItemKind[_0xf7bcc(477)],
                        CompletionItemKind['Module'],
                        CompletionItemKind[_0xf7bcc(473)],
                        CompletionItemKind[_0xf7bcc(491)],
                        CompletionItemKind['Value'],
                        CompletionItemKind[_0xf7bcc(476)],
                        CompletionItemKind['Keyword'],
                        CompletionItemKind[_0xf7bcc(492)],
                        CompletionItemKind[_0xf7bcc(493)],
                        CompletionItemKind[_0xf7bcc(469)],
                        CompletionItemKind[_0xf7bcc(494)],
                        CompletionItemKind[_0xf7bcc(495)],
                        CompletionItemKind['EnumMember'],
                        CompletionItemKind[_0xf7bcc(496)],
                        CompletionItemKind['Struct'],
                        CompletionItemKind[_0xf7bcc(487)],
                        CompletionItemKind[_0xf7bcc(488)],
                        CompletionItemKind[_0xf7bcc(497)]
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
                        SymbolKind[_0xf7bcc(469)],
                        SymbolKind['Module'],
                        SymbolKind[_0xf7bcc(470)],
                        SymbolKind['Package'],
                        SymbolKind['Class'],
                        SymbolKind[_0xf7bcc(472)],
                        SymbolKind[_0xf7bcc(473)],
                        SymbolKind['Field'],
                        SymbolKind[_0xf7bcc(475)],
                        SymbolKind['Enum'],
                        SymbolKind[_0xf7bcc(477)],
                        SymbolKind[_0xf7bcc(478)],
                        SymbolKind[_0xf7bcc(479)],
                        SymbolKind[_0xf7bcc(496)],
                        SymbolKind[_0xf7bcc(480)],
                        SymbolKind[_0xf7bcc(481)],
                        SymbolKind[_0xf7bcc(482)],
                        SymbolKind[_0xf7bcc(498)],
                        SymbolKind[_0xf7bcc(483)],
                        SymbolKind[_0xf7bcc(484)],
                        SymbolKind[_0xf7bcc(499)],
                        SymbolKind[_0xf7bcc(485)],
                        SymbolKind[_0xf7bcc(486)],
                        SymbolKind[_0xf7bcc(487)],
                        SymbolKind[_0xf7bcc(488)],
                        SymbolKind[_0xf7bcc(497)]
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
function syncPreferences(_0x22f3db) {
    var _0x235828 = _0xf7bcc;
    global[_0x235828(500)] = global[_0x235828(500)] || {}, global['LanguageClientInfo'][_0x235828(501)] = _0x22f3db || global['LanguageClientInfo'][_0x235828(501)] || {};
}
function initialize(_0x28dfdb, _0x2bb28c, _0x4424c4) {
    var _0x4271b0 = _0xf7bcc, _0x2e044c = {
            'VXJMH': _0x4271b0(502),
            'dhEEO': function (_0x35cb98, _0x367473) {
                return _0x35cb98 || _0x367473;
            },
            'ZDKPU': function (_0x7baf6d, _0x43c2df, _0x35f929) {
                return _0x7baf6d(_0x43c2df, _0x35f929);
            }
        }, _0x111c71 = _0x2e044c[_0x4271b0(503)][_0x4271b0(504)]('|'), _0x320930 = 1 * -7177 + -7384 + 14561;
    while (!![]) {
        switch (_0x111c71[_0x320930++]) {
        case '0':
            global[_0x4271b0(500)][_0x4271b0(505)] = _0x3ca52a;
            continue;
        case '1':
            global[_0x4271b0(500)][_0x4271b0(501)] = {};
            continue;
        case '2':
            _0x2e044c[_0x4271b0(506)](!_0x28dfdb, !_0x2bb28c) && _0x2e044c[_0x4271b0(507)](_0x4424c4, !![], null);
            continue;
        case '3':
            global[_0x4271b0(500)][_0x4271b0(508)] = defaultBracketsCapabilities;
            continue;
        case '4':
            global['LanguageClientInfo'] = global[_0x4271b0(500)] || {};
            continue;
        case '5':
            _0x4424c4(null, !![]);
            continue;
        case '6':
            var _0x1f164d = _0x28dfdb[_0x4271b0(504)](BACKWARD_SLASH)[_0x4271b0(509)](FORWARD_SLASH), _0x2e87fe = _0x1f164d[_0x4271b0(504)](FORWARD_SLASH), _0x3ca52a = _0x2e87fe[_0x4271b0(510)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)[_0x4271b0(509)](FORWARD_SLASH);
            continue;
        case '7':
            global[_0x4271b0(500)][_0x4271b0(511)] = _0x2bb28c;
            continue;
        }
        break;
    }
}
function init(_0x35052d) {
    var _0x3836f9 = _0xf7bcc, _0x4438db = {
            'LmuVF': _0x3836f9(512),
            'ATBxH': _0x3836f9(513),
            'lxkWT': _0x3836f9(511),
            'quXWf': _0x3836f9(514),
            'xRaeH': _0x3836f9(515),
            'VRXoq': _0x3836f9(516)
        };
    !_0x35052d[_0x3836f9(517)](domainName) && _0x35052d['registerDomain'](domainName, {
        'major': 0,
        'minor': 1
    }), _0x35052d['registerCommand'](domainName, _0x4438db['LmuVF'], initialize, !![], _0x3836f9(518), [
        {
            'name': _0x3836f9(519),
            'type': _0x4438db['ATBxH'],
            'description': 'Absolute path to the brackets source'
        },
        {
            'name': _0x4438db[_0x3836f9(520)],
            'type': _0x3836f9(516),
            'description': _0x3836f9(521)
        }
    ], []), _0x35052d[_0x3836f9(522)](domainName, _0x3836f9(523), syncPreferences, ![], _0x4438db[_0x3836f9(524)], [{
            'name': _0x4438db[_0x3836f9(525)],
            'type': _0x4438db[_0x3836f9(526)],
            'description': 'Language tools preferences'
        }], []);
}
function _0x4e10(_0x2f617e, _0x2449d5) {
    return _0x4e10 = function (_0x31672c, _0x51e0a0) {
        _0x31672c = _0x31672c - (114 * -23 + -2934 + -6011 * -1);
        var _0x319ddb = _0x5e07[_0x31672c];
        return _0x319ddb;
    }, _0x4e10(_0x2f617e, _0x2449d5);
}
exports[_0xf7bcc(527)] = init;