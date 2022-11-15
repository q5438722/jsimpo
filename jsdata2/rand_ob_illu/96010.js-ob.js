'use strict';

const _0x5e07 = ['Array', 'Null', 'LanguageClientInfo', 'preferences', '2|6|4|0|3|7|1|5', 'VXJMH', 'split', 'languageClientPath', 'dhEEO', 'ZDKPU', 'defaultBracketsCapabilities', 'join', 'concat', 'toolingInfo', 'initialize', 'string', 'Sync language tools preferences for Language Client Module', 'prefs', 'object', 'hasDomain', 'Initialize node environment for Language Client Module', 'bracketsSourcePath', 'lxkWT', 'Tooling Info json to be used by Language Client', 'registerCommand', 'syncPreferences', 'quXWf', 'xRaeH', 'VRXoq', 'init', '1TCVYUB', '217580YjXrPj', '104271rsDavW', '212948GfJCmd', '1CXLmtb', '139675SkrtjV', '3fxRxRJ', '364092OVkRQV', '1pxDATA', '188379Szgxts', '63670cycpcc', '5xXyKfi', 'languageTools', 'LanguageClient', 'File', 'Namespace', 'Class', 'Method', 'Property', 'Field', 'Constructor', 'Enum', 'Interface', 'Function', 'Variable', 'String', 'Number', 'Boolean', 'Object', 'Key', 'EnumMember', 'Struct', 'Event', 'Operator', 'plaintext', 'Text', 'Unit', 'Snippet', 'Color', 'Reference', 'Folder', 'Constant', 'TypeParameter'];
const _0xf7bcc = _0x4e10;

(function (_0x1658f8, _0x25f2b9) {
    const _0x3a51cd = _0x4e10;

    while (true) {
        try {
            const _0x39a872 = parseInt(_0x3a51cd(0x1c7)) * -parseInt(_0x3a51cd(0x1c8)) + parseInt(_0x3a51cd(0x1c9)) + -parseInt(_0x3a51cd(0x1ca)) * parseInt(_0x3a51cd(0x1cb)) + -parseInt(_0x3a51cd(0x1cc)) * -parseInt(_0x3a51cd(0x1cd)) + -parseInt(_0x3a51cd(0x1ce)) + -parseInt(_0x3a51cd(0x1cf)) * -parseInt(_0x3a51cd(0x1d0)) + parseInt(_0x3a51cd(0x1d1)) * parseInt(_0x3a51cd(0x1d2));

            if (_0x39a872 === _0x25f2b9) break;else _0x1658f8.push(_0x1658f8.shift());
        } catch (_0xa82981) {
            _0x1658f8.push(_0x1658f8.shift());
        }
    }
})(_0x5e07, 235405);
const domainName = 'LanguageClientInfo';
const LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [_0xf7bcc(0x1d3), _0xf7bcc(0x1d4), 'LanguageClient'];
const FORWARD_SLASH = '/';
const BACKWARD_SLASH = '\\';
const CompletionItemKind = {
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
};
const SymbolKind = {
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
};
const defaultBracketsCapabilities = {
    'workspace': {
        'workspaceFolders': true,
        'symbol': {
            'dynamicRegistration': false,
            'symbolKind': [SymbolKind[_0xf7bcc(0x1d5)], SymbolKind.Module, SymbolKind[_0xf7bcc(0x1d6)], SymbolKind.Package, SymbolKind[_0xf7bcc(0x1d7)], SymbolKind[_0xf7bcc(0x1d8)], SymbolKind[_0xf7bcc(0x1d9)], SymbolKind[_0xf7bcc(0x1da)], SymbolKind[_0xf7bcc(0x1db)], SymbolKind[_0xf7bcc(0x1dc)], SymbolKind[_0xf7bcc(0x1dd)], SymbolKind[_0xf7bcc(0x1de)], SymbolKind[_0xf7bcc(0x1df)], SymbolKind.Constant, SymbolKind[_0xf7bcc(0x1e0)], SymbolKind[_0xf7bcc(0x1e1)], SymbolKind[_0xf7bcc(0x1e2)], SymbolKind.Array, SymbolKind[_0xf7bcc(0x1e3)], SymbolKind[_0xf7bcc(0x1e4)], SymbolKind.Null, SymbolKind[_0xf7bcc(0x1e5)], SymbolKind[_0xf7bcc(0x1e6)], SymbolKind[_0xf7bcc(0x1e7)], SymbolKind[_0xf7bcc(0x1e8)], SymbolKind.TypeParameter]
        }
    },
    'textDocument': {
        'synchronization': { 'didSave': true },
        'completion': {
            'dynamicRegistration': false,
            'completionItem': {
                'deprecatedSupport': true,
                'documentationFormat': [_0xf7bcc(0x1e9)],
                'preselectSupport': true
            },
            'completionItemKind': {
                'valueSet': [CompletionItemKind[_0xf7bcc(0x1ea)], CompletionItemKind[_0xf7bcc(0x1d8)], CompletionItemKind[_0xf7bcc(0x1de)], CompletionItemKind[_0xf7bcc(0x1db)], CompletionItemKind[_0xf7bcc(0x1da)], CompletionItemKind.Variable, CompletionItemKind[_0xf7bcc(0x1d7)], CompletionItemKind[_0xf7bcc(0x1dd)], CompletionItemKind.Module, CompletionItemKind[_0xf7bcc(0x1d9)], CompletionItemKind[_0xf7bcc(0x1eb)], CompletionItemKind.Value, CompletionItemKind[_0xf7bcc(0x1dc)], CompletionItemKind.Keyword, CompletionItemKind[_0xf7bcc(0x1ec)], CompletionItemKind[_0xf7bcc(0x1ed)], CompletionItemKind[_0xf7bcc(0x1d5)], CompletionItemKind[_0xf7bcc(0x1ee)], CompletionItemKind[_0xf7bcc(0x1ef)], CompletionItemKind.EnumMember, CompletionItemKind[_0xf7bcc(0x1f0)], CompletionItemKind.Struct, CompletionItemKind[_0xf7bcc(0x1e7)], CompletionItemKind[_0xf7bcc(0x1e8)], CompletionItemKind[_0xf7bcc(0x1f1)]]
            },
            'contextSupport': true
        },
        'signatureHelp': {
            'dynamicRegistration': false,
            'signatureInformation': { 'documentationFormat': ['plaintext'] }
        },
        'references': { 'dynamicRegistration': false },
        'documentSymbol': {
            'dynamicRegistration': false,
            'symbolKind': {
                'valueSet': [SymbolKind[_0xf7bcc(0x1d5)], SymbolKind.Module, SymbolKind[_0xf7bcc(0x1d6)], SymbolKind.Package, SymbolKind.Class, SymbolKind[_0xf7bcc(0x1d8)], SymbolKind[_0xf7bcc(0x1d9)], SymbolKind.Field, SymbolKind[_0xf7bcc(0x1db)], SymbolKind.Enum, SymbolKind[_0xf7bcc(0x1dd)], SymbolKind[_0xf7bcc(0x1de)], SymbolKind[_0xf7bcc(0x1df)], SymbolKind[_0xf7bcc(0x1f0)], SymbolKind[_0xf7bcc(0x1e0)], SymbolKind[_0xf7bcc(0x1e1)], SymbolKind[_0xf7bcc(0x1e2)], SymbolKind[_0xf7bcc(0x1f2)], SymbolKind[_0xf7bcc(0x1e3)], SymbolKind[_0xf7bcc(0x1e4)], SymbolKind[_0xf7bcc(0x1f3)], SymbolKind[_0xf7bcc(0x1e5)], SymbolKind[_0xf7bcc(0x1e6)], SymbolKind[_0xf7bcc(0x1e7)], SymbolKind[_0xf7bcc(0x1e8)], SymbolKind[_0xf7bcc(0x1f1)]]
            },
            'hierarchicalDocumentSymbolSupport': false
        },
        'definition': { 'dynamicRegistration': false },
        'declaration': { 'dynamicRegistration': false },
        'typeDefinition': { 'dynamicRegistration': false },
        'implementation': { 'dynamicRegistration': false },
        'publishDiagnostics': { 'relatedInformation': true }
    }
};

function syncPreferences(_0x22f3db) {
    const _0x235828 = _0xf7bcc;

    global[_0x235828(0x1f4)] = global[_0x235828(0x1f4)] || {}, global.LanguageClientInfo[_0x235828(0x1f5)] = _0x22f3db || global.LanguageClientInfo[_0x235828(0x1f5)] || {};
}
function initialize(_0x28dfdb, _0x2bb28c, _0x4424c4) {
    const _0x4271b0 = _0xf7bcc;
    const _0x2e044c = {
        'VXJMH': _0x4271b0(0x1f6),
        'dhEEO': function (_0x35cb98, _0x367473) {
            return _0x35cb98 || _0x367473;
        },
        'ZDKPU': function (_0x7baf6d, _0x43c2df, _0x35f929) {
            return _0x7baf6d(_0x43c2df, _0x35f929);
        }
    };

    const _0x111c71 = _0x2e044c[_0x4271b0(0x1f7)][_0x4271b0(0x1f8)]('|');

    var _0x320930 = 0;

    while (true) {
        switch (_0x111c71[_0x320930++]) {
            case '0':
                global[_0x4271b0(0x1f4)][_0x4271b0(0x1f9)] = _0x3ca52a;
                continue;
            case '1':
                global[_0x4271b0(0x1f4)][_0x4271b0(0x1f5)] = {};
                continue;
            case '2':
                _0x2e044c[_0x4271b0(0x1fa)](!_0x28dfdb, !_0x2bb28c) && _0x2e044c[_0x4271b0(0x1fb)](_0x4424c4, true, null);
                continue;
            case '3':
                global[_0x4271b0(0x1f4)][_0x4271b0(0x1fc)] = defaultBracketsCapabilities;
                continue;
            case '4':
                global['LanguageClientInfo'] = global[_0x4271b0(0x1f4)] || {};
                continue;
            case '5':
                _0x4424c4(null, true);
                continue;
            case '6':
                const _0x1f164d = _0x28dfdb[_0x4271b0(0x1f8)](BACKWARD_SLASH)[_0x4271b0(0x1fd)](FORWARD_SLASH);

                const _0x2e87fe = _0x1f164d[_0x4271b0(0x1f8)](FORWARD_SLASH);

                const _0x3ca52a = _0x2e87fe[_0x4271b0(0x1fe)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)[_0x4271b0(0x1fd)](FORWARD_SLASH);

                continue;
            case '7':
                global[_0x4271b0(0x1f4)][_0x4271b0(0x1ff)] = _0x2bb28c;
                continue;
        }
        break;
    }
}
function init(_0x35052d) {
    const _0x3836f9 = _0xf7bcc;
    const _0x4438db = {
        'LmuVF': _0x3836f9(0x200),
        'ATBxH': _0x3836f9(0x201),
        'lxkWT': _0x3836f9(0x1ff),
        'quXWf': _0x3836f9(0x202),
        'xRaeH': _0x3836f9(0x203),
        'VRXoq': _0x3836f9(0x204)
    };

    !_0x35052d[_0x3836f9(0x205)](domainName) && _0x35052d.registerDomain(domainName, {
        'major': 0x0,
        'minor': 0x1
    }), _0x35052d.registerCommand(domainName, _0x4438db.LmuVF, initialize, true, _0x3836f9(0x206), [{
        'name': _0x3836f9(0x207),
        'type': _0x4438db.ATBxH,
        'description': 'Absolute path to the brackets source'
    }, {
        'name': _0x4438db[_0x3836f9(0x208)],
        'type': _0x3836f9(0x204),
        'description': _0x3836f9(0x209)
    }], []), _0x35052d[_0x3836f9(0x20a)](domainName, _0x3836f9(0x20b), syncPreferences, false, _0x4438db[_0x3836f9(0x20c)], [{
        'name': _0x4438db[_0x3836f9(0x20d)],
        'type': _0x4438db[_0x3836f9(0x20e)],
        'description': 'Language tools preferences'
    }], []);
}
function _0x4e10(_0x2f617e, _0x2449d5) {
    return _0x4e10 = function (_0x31672c, _0x51e0a0) {
        _0x31672c = _0x31672c - 455;
        const _0x319ddb = _0x5e07[_0x31672c];

        return _0x319ddb;
    }, _0x4e10(_0x2f617e, _0x2449d5);
}
exports[_0xf7bcc(0x20f)] = init;
