'use strict';
var _0x1bfd = [
    'Folder',
    'EnumMember',
    'Constant',
    'TypeParameter',
    'plaintext',
    'Number',
    'Object',
    'preferences',
    'SCMBn',
    'split',
    'concat',
    'languageClientPath',
    'defaultBracketsCapabilities',
    'toolingInfo',
    'wiBOe',
    'bracketsSourcePath',
    'Absolute\x20path\x20to\x20the\x20brackets\x20source',
    'Tooling\x20Info\x20json\x20to\x20be\x20used\x20by\x20Language\x20Client',
    'Sync\x20language\x20tools\x20preferences\x20for\x20Language\x20Client\x20Module',
    'prefs',
    'object',
    'hasDomain',
    'registerDomain',
    'registerCommand',
    'JdEXA',
    'Initialize\x20node\x20environment\x20for\x20Language\x20Client\x20Module',
    'hSkWC',
    'string',
    'KtOvf',
    'obtgj',
    'syncPreferences',
    'JtcIn',
    'HURUx',
    'PRHEW',
    '193517jXIJnn',
    '1PGHOUC',
    '485441nTTAhC',
    '1mUBwTD',
    '545404ulNEfv',
    '234636DGwrPM',
    '889241IispGS',
    '675532nxhvoz',
    '245733wuTeuE',
    'LanguageClientInfo',
    'languageTools',
    'LanguageClient',
    'File',
    'Module',
    'Package',
    'Class',
    'Method',
    'Property',
    'Field',
    'Constructor',
    'Enum',
    'Interface',
    'Function',
    'String',
    'Boolean',
    'Array',
    'Key',
    'Null',
    'Struct',
    'Event',
    'Operator',
    'Text',
    'Variable',
    'Unit',
    'Value',
    'Snippet',
    'Color',
    'Reference'
];
var _0x24464a = _0x149c;
(function (_0x972b75, _0x1934aa) {
    var _0x3fca0 = _0x149c;
    while (!![]) {
        try {
            var _0x5dc1d3 = parseInt(_0x3fca0(0xf5)) * parseInt(_0x3fca0(0xf6)) + -parseInt(_0x3fca0(0xf7)) * parseInt(_0x3fca0(0xf8)) + parseInt(_0x3fca0(0xf9)) + parseInt(_0x3fca0(0xfa)) + parseInt(_0x3fca0(0xfb)) + -parseInt(_0x3fca0(0xfc)) + -parseInt(_0x3fca0(0xfd));
            if (_0x5dc1d3 === _0x1934aa)
                break;
            else
                _0x972b75['push'](_0x972b75['shift']());
        } catch (_0x40ddb4) {
            _0x972b75['push'](_0x972b75['shift']());
        }
    }
}(_0x1bfd, -0x7 * 0x13a62 + -0x20b9f * 0x4 + 0x17bcc6));
var domainName = _0x24464a(0xfe), LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [
        _0x24464a(0xff),
        _0x24464a(0x100),
        _0x24464a(0x100)
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
                    SymbolKind[_0x24464a(0x101)],
                    SymbolKind[_0x24464a(0x102)],
                    SymbolKind['Namespace'],
                    SymbolKind[_0x24464a(0x103)],
                    SymbolKind[_0x24464a(0x104)],
                    SymbolKind[_0x24464a(0x105)],
                    SymbolKind[_0x24464a(0x106)],
                    SymbolKind[_0x24464a(0x107)],
                    SymbolKind[_0x24464a(0x108)],
                    SymbolKind[_0x24464a(0x109)],
                    SymbolKind[_0x24464a(0x10a)],
                    SymbolKind[_0x24464a(0x10b)],
                    SymbolKind['Variable'],
                    SymbolKind['Constant'],
                    SymbolKind[_0x24464a(0x10c)],
                    SymbolKind['Number'],
                    SymbolKind[_0x24464a(0x10d)],
                    SymbolKind[_0x24464a(0x10e)],
                    SymbolKind['Object'],
                    SymbolKind[_0x24464a(0x10f)],
                    SymbolKind[_0x24464a(0x110)],
                    SymbolKind['EnumMember'],
                    SymbolKind[_0x24464a(0x111)],
                    SymbolKind[_0x24464a(0x112)],
                    SymbolKind[_0x24464a(0x113)],
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
                        CompletionItemKind[_0x24464a(0x114)],
                        CompletionItemKind[_0x24464a(0x105)],
                        CompletionItemKind['Function'],
                        CompletionItemKind[_0x24464a(0x108)],
                        CompletionItemKind[_0x24464a(0x107)],
                        CompletionItemKind[_0x24464a(0x115)],
                        CompletionItemKind[_0x24464a(0x104)],
                        CompletionItemKind['Interface'],
                        CompletionItemKind[_0x24464a(0x102)],
                        CompletionItemKind[_0x24464a(0x106)],
                        CompletionItemKind[_0x24464a(0x116)],
                        CompletionItemKind[_0x24464a(0x117)],
                        CompletionItemKind[_0x24464a(0x109)],
                        CompletionItemKind['Keyword'],
                        CompletionItemKind[_0x24464a(0x118)],
                        CompletionItemKind[_0x24464a(0x119)],
                        CompletionItemKind['File'],
                        CompletionItemKind[_0x24464a(0x11a)],
                        CompletionItemKind[_0x24464a(0x11b)],
                        CompletionItemKind[_0x24464a(0x11c)],
                        CompletionItemKind[_0x24464a(0x11d)],
                        CompletionItemKind['Struct'],
                        CompletionItemKind[_0x24464a(0x112)],
                        CompletionItemKind['Operator'],
                        CompletionItemKind[_0x24464a(0x11e)]
                    ]
                },
                'contextSupport': !![]
            },
            'signatureHelp': {
                'dynamicRegistration': ![],
                'signatureInformation': { 'documentationFormat': [_0x24464a(0x11f)] }
            },
            'references': { 'dynamicRegistration': ![] },
            'documentSymbol': {
                'dynamicRegistration': ![],
                'symbolKind': {
                    'valueSet': [
                        SymbolKind['File'],
                        SymbolKind[_0x24464a(0x102)],
                        SymbolKind['Namespace'],
                        SymbolKind[_0x24464a(0x103)],
                        SymbolKind['Class'],
                        SymbolKind[_0x24464a(0x105)],
                        SymbolKind[_0x24464a(0x106)],
                        SymbolKind[_0x24464a(0x107)],
                        SymbolKind[_0x24464a(0x108)],
                        SymbolKind['Enum'],
                        SymbolKind[_0x24464a(0x10a)],
                        SymbolKind['Function'],
                        SymbolKind['Variable'],
                        SymbolKind[_0x24464a(0x11d)],
                        SymbolKind[_0x24464a(0x10c)],
                        SymbolKind[_0x24464a(0x120)],
                        SymbolKind[_0x24464a(0x10d)],
                        SymbolKind[_0x24464a(0x10e)],
                        SymbolKind[_0x24464a(0x121)],
                        SymbolKind[_0x24464a(0x10f)],
                        SymbolKind[_0x24464a(0x110)],
                        SymbolKind[_0x24464a(0x11c)],
                        SymbolKind['Struct'],
                        SymbolKind[_0x24464a(0x112)],
                        SymbolKind[_0x24464a(0x113)],
                        SymbolKind[_0x24464a(0x11e)]
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
    global[_0x25cb3b(0xfe)] = global[_0x25cb3b(0xfe)] || {}, global[_0x25cb3b(0xfe)]['preferences'] = _0x45d798 || global['LanguageClientInfo'][_0x25cb3b(0x122)] || {};
}
function _0x149c(_0x4611b7, _0x1806cd) {
    return _0x149c = function (_0x5af9c2, _0x38e08c) {
        _0x5af9c2 = _0x5af9c2 - (-0x16c1 + 0x2540 + -0xd8a * 0x1);
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
    _0x21e123[_0x1aff58(0x123)](!_0x263722, !_0x4e091a) && _0x21e123['yFkPF'](_0x2c6d30, !![], null);
    var _0x48e290 = _0x263722['split'](BACKWARD_SLASH)['join'](FORWARD_SLASH), _0x33df43 = _0x48e290[_0x1aff58(0x124)](FORWARD_SLASH), _0xd5a784 = _0x33df43[_0x1aff58(0x125)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)['join'](FORWARD_SLASH);
    global['LanguageClientInfo'] = global[_0x1aff58(0xfe)] || {}, global[_0x1aff58(0xfe)][_0x1aff58(0x126)] = _0xd5a784, global[_0x1aff58(0xfe)][_0x1aff58(0x127)] = defaultBracketsCapabilities, global[_0x1aff58(0xfe)][_0x1aff58(0x128)] = _0x4e091a, global[_0x1aff58(0xfe)][_0x1aff58(0x122)] = {}, _0x21e123[_0x1aff58(0x129)](_0x2c6d30, null, !![]);
}
function init(_0x3f83f6) {
    var _0x541379 = _0x24464a, _0xa4647a = {
            'JdEXA': 'initialize',
            'hSkWC': _0x541379(0x12a),
            'FQYSc': _0x541379(0x12b),
            'KtOvf': _0x541379(0x128),
            'obtgj': _0x541379(0x12c),
            'JtcIn': _0x541379(0x12d),
            'LUmnR': _0x541379(0x12e),
            'HURUx': _0x541379(0x12f),
            'PRHEW': 'Language\x20tools\x20preferences'
        };
    !_0x3f83f6[_0x541379(0x130)](domainName) && _0x3f83f6[_0x541379(0x131)](domainName, {
        'major': 0x0,
        'minor': 0x1
    }), _0x3f83f6[_0x541379(0x132)](domainName, _0xa4647a[_0x541379(0x133)], initialize, !![], _0x541379(0x134), [
        {
            'name': _0xa4647a[_0x541379(0x135)],
            'type': _0x541379(0x136),
            'description': _0xa4647a['FQYSc']
        },
        {
            'name': _0xa4647a[_0x541379(0x137)],
            'type': _0x541379(0x12f),
            'description': _0xa4647a[_0x541379(0x138)]
        }
    ], []), _0x3f83f6['registerCommand'](domainName, _0x541379(0x139), syncPreferences, ![], _0xa4647a[_0x541379(0x13a)], [{
            'name': _0xa4647a['LUmnR'],
            'type': _0xa4647a[_0x541379(0x13b)],
            'description': _0xa4647a[_0x541379(0x13c)]
        }], []);
}
exports['init'] = init;
