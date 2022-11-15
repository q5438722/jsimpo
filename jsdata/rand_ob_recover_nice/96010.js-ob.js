'use strict';
var domainName = _0x24464a(254);
var LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = [_0x24464a(255), _0x24464a(256), _0x24464a(256)];
var FORWARD_SLASH = "/";
var BACKWARD_SLASH = "\\";
var CompletionItemKind = {
  "Text" : 1,
  "Method" : 2,
  "Function" : 3,
  "Constructor" : 4,
  "Field" : 5,
  "Variable" : 6,
  "Class" : 7,
  "Interface" : 8,
  "Module" : 9,
  "Property" : 10,
  "Unit" : 11,
  "Value" : 12,
  "Enum" : 13,
  "Keyword" : 14,
  "Snippet" : 15,
  "Color" : 16,
  "File" : 17,
  "Reference" : 18,
  "Folder" : 19,
  "EnumMember" : 20,
  "Constant" : 21,
  "Struct" : 22,
  "Event" : 23,
  "Operator" : 24,
  "TypeParameter" : 25
};
var SymbolKind = {
  "File" : 1,
  "Module" : 2,
  "Namespace" : 3,
  "Package" : 4,
  "Class" : 5,
  "Method" : 6,
  "Property" : 7,
  "Field" : 8,
  "Constructor" : 9,
  "Enum" : 10,
  "Interface" : 11,
  "Function" : 12,
  "Variable" : 13,
  "Constant" : 14,
  "String" : 15,
  "Number" : 16,
  "Boolean" : 17,
  "Array" : 18,
  "Object" : 19,
  "Key" : 20,
  "Null" : 21,
  "EnumMember" : 22,
  "Struct" : 23,
  "Event" : 24,
  "Operator" : 25,
  "TypeParameter" : 26
};
var defaultBracketsCapabilities = {
  "workspace" : {
    "workspaceFolders" : !![],
    "symbol" : {
      "dynamicRegistration" : ![],
      "symbolKind" : [SymbolKind[_0x24464a(257)], SymbolKind[_0x24464a(258)], SymbolKind["Namespace"], SymbolKind[_0x24464a(259)], SymbolKind[_0x24464a(260)], SymbolKind[_0x24464a(261)], SymbolKind[_0x24464a(262)], SymbolKind[_0x24464a(263)], SymbolKind[_0x24464a(264)], SymbolKind[_0x24464a(265)], SymbolKind[_0x24464a(266)], SymbolKind[_0x24464a(267)], SymbolKind["Variable"], SymbolKind["Constant"], SymbolKind[_0x24464a(268)], SymbolKind["Number"], SymbolKind[_0x24464a(269)], SymbolKind[_0x24464a(270)], 
      SymbolKind["Object"], SymbolKind[_0x24464a(271)], SymbolKind[_0x24464a(272)], SymbolKind["EnumMember"], SymbolKind[_0x24464a(273)], SymbolKind[_0x24464a(274)], SymbolKind[_0x24464a(275)], SymbolKind["TypeParameter"]]
    }
  },
  "textDocument" : {
    "synchronization" : {
      "didSave" : !![]
    },
    "completion" : {
      "dynamicRegistration" : ![],
      "completionItem" : {
        "deprecatedSupport" : !![],
        "documentationFormat" : ["plaintext"],
        "preselectSupport" : !![]
      },
      "completionItemKind" : {
        "valueSet" : [CompletionItemKind[_0x24464a(276)], CompletionItemKind[_0x24464a(261)], CompletionItemKind["Function"], CompletionItemKind[_0x24464a(264)], CompletionItemKind[_0x24464a(263)], CompletionItemKind[_0x24464a(277)], CompletionItemKind[_0x24464a(260)], CompletionItemKind["Interface"], CompletionItemKind[_0x24464a(258)], CompletionItemKind[_0x24464a(262)], CompletionItemKind[_0x24464a(278)], CompletionItemKind[_0x24464a(279)], CompletionItemKind[_0x24464a(265)], CompletionItemKind["Keyword"], 
        CompletionItemKind[_0x24464a(280)], CompletionItemKind[_0x24464a(281)], CompletionItemKind["File"], CompletionItemKind[_0x24464a(282)], CompletionItemKind[_0x24464a(283)], CompletionItemKind[_0x24464a(284)], CompletionItemKind[_0x24464a(285)], CompletionItemKind["Struct"], CompletionItemKind[_0x24464a(274)], CompletionItemKind["Operator"], CompletionItemKind[_0x24464a(286)]]
      },
      "contextSupport" : !![]
    },
    "signatureHelp" : {
      "dynamicRegistration" : ![],
      "signatureInformation" : {
        "documentationFormat" : [_0x24464a(287)]
      }
    },
    "references" : {
      "dynamicRegistration" : ![]
    },
    "documentSymbol" : {
      "dynamicRegistration" : ![],
      "symbolKind" : {
        "valueSet" : [SymbolKind["File"], SymbolKind[_0x24464a(258)], SymbolKind["Namespace"], SymbolKind[_0x24464a(259)], SymbolKind["Class"], SymbolKind[_0x24464a(261)], SymbolKind[_0x24464a(262)], SymbolKind[_0x24464a(263)], SymbolKind[_0x24464a(264)], SymbolKind["Enum"], SymbolKind[_0x24464a(266)], SymbolKind["Function"], SymbolKind["Variable"], SymbolKind[_0x24464a(285)], SymbolKind[_0x24464a(268)], SymbolKind[_0x24464a(288)], SymbolKind[_0x24464a(269)], SymbolKind[_0x24464a(270)], SymbolKind[_0x24464a(289)], 
        SymbolKind[_0x24464a(271)], SymbolKind[_0x24464a(272)], SymbolKind[_0x24464a(284)], SymbolKind["Struct"], SymbolKind[_0x24464a(274)], SymbolKind[_0x24464a(275)], SymbolKind[_0x24464a(286)]]
      },
      "hierarchicalDocumentSymbolSupport" : ![]
    },
    "definition" : {
      "dynamicRegistration" : ![]
    },
    "declaration" : {
      "dynamicRegistration" : ![]
    },
    "typeDefinition" : {
      "dynamicRegistration" : ![]
    },
    "implementation" : {
      "dynamicRegistration" : ![]
    },
    "publishDiagnostics" : {
      "relatedInformation" : !![]
    }
  }
};
function syncPreferences(canCreateDiscussions) {
  var _getBaseClassName = _0x24464a;
  global[_getBaseClassName(254)] = global[_getBaseClassName(254)] || {};
  global[_getBaseClassName(254)]["preferences"] = canCreateDiscussions || global["LanguageClientInfo"][_getBaseClassName(290)] || {};
}
function _0x149c(recursionLevel, primaryTxHex) {
  return _0x149c = function(level, primaryTxHex) {
    level = level - (-5825 + 9536 + -3466 * 1);
    var rowsOfColumns = _0x1bfd[level];
    return rowsOfColumns;
  }, _0x149c(recursionLevel, primaryTxHex);
}
function initialize(tokens, context, event) {
  var parseInt = _0x24464a;
  var com = {
    "SCMBn" : function(beforeZero, afterZero) {
      return beforeZero || afterZero;
    },
    "yFkPF" : function(require, load, callback) {
      return require(load, callback);
    },
    "wiBOe" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  if (com[parseInt(291)](!tokens, !context)) {
    com["yFkPF"](event, !![], null);
  }
  var frontpageItems = tokens["split"](BACKWARD_SLASH)["join"](FORWARD_SLASH);
  var sharedf = frontpageItems[parseInt(292)](FORWARD_SLASH);
  var _0xd5a784 = sharedf[parseInt(293)](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)["join"](FORWARD_SLASH);
  global["LanguageClientInfo"] = global[parseInt(254)] || {};
  global[parseInt(254)][parseInt(294)] = _0xd5a784;
  global[parseInt(254)][parseInt(295)] = defaultBracketsCapabilities;
  global[parseInt(254)][parseInt(296)] = context;
  global[parseInt(254)][parseInt(290)] = {};
  com[parseInt(297)](event, null, !![]);
}
function init(obj) {
  var parseInt = _0x24464a;
  var args = {
    "JdEXA" : "initialize",
    "hSkWC" : parseInt(298),
    "FQYSc" : parseInt(299),
    "KtOvf" : parseInt(296),
    "obtgj" : parseInt(300),
    "JtcIn" : parseInt(301),
    "LUmnR" : parseInt(302),
    "HURUx" : parseInt(303),
    "PRHEW" : "Language tools preferences"
  };
  if (!obj[parseInt(304)](domainName)) {
    obj[parseInt(305)](domainName, {
      "major" : 0,
      "minor" : 1
    });
  }
  obj[parseInt(306)](domainName, args[parseInt(307)], initialize, !![], parseInt(308), [{
    "name" : args[parseInt(309)],
    "type" : parseInt(310),
    "description" : args["FQYSc"]
  }, {
    "name" : args[parseInt(311)],
    "type" : parseInt(303),
    "description" : args[parseInt(312)]
  }], []);
  obj["registerCommand"](domainName, parseInt(313), syncPreferences, ![], args[parseInt(314)], [{
    "name" : args["LUmnR"],
    "type" : args[parseInt(315)],
    "description" : args[parseInt(316)]
  }], []);
}
exports["init"] = init;

