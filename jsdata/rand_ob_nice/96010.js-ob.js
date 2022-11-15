'use strict';
var _0x1bfd = ["Folder", "EnumMember", "Constant", "TypeParameter", "plaintext", "Number", "Object", "preferences", "SCMBn", "split", "concat", "languageClientPath", "defaultBracketsCapabilities", "toolingInfo", "wiBOe", "bracketsSourcePath", "Absolute path to the brackets source", "Tooling Info json to be used by Language Client", "Sync language tools preferences for Language Client Module", "prefs", "object", "hasDomain", "registerDomain", "registerCommand", "JdEXA", "Initialize node environment for Language Client Module", 
"hSkWC", "string", "KtOvf", "obtgj", "syncPreferences", "JtcIn", "HURUx", "PRHEW", "193517jXIJnn", "1PGHOUC", "485441nTTAhC", "1mUBwTD", "545404ulNEfv", "234636DGwrPM", "889241IispGS", "675532nxhvoz", "245733wuTeuE", "LanguageClientInfo", "languageTools", "LanguageClient", "File", "Module", "Package", "Class", "Method", "Property", "Field", "Constructor", "Enum", "Interface", "Function", "String", "Boolean", "Array", "Key", "Null", "Struct", "Event", "Operator", "Text", "Variable", "Unit", "Value", 
"Snippet", "Color", "Reference"];
var _0x24464a = _0x149c;
(function(data, val) {
  var toMonths = _0x149c;
  for (; !![];) {
    try {
      var nodeval = parseInt(toMonths(245)) * parseInt(toMonths(246)) + -parseInt(toMonths(247)) * parseInt(toMonths(248)) + parseInt(toMonths(249)) + parseInt(toMonths(250)) + parseInt(toMonths(251)) + -parseInt(toMonths(252)) + -parseInt(toMonths(253));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x40ddb4) {
      data["push"](data["shift"]());
    }
  }
})(_0x1bfd, -7 * 80482 + -134047 * 4 + 1555654);
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
function _0x149c(totalExpectedResults, entrySelector) {
  return _0x149c = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-5825 + 9536 + -3466 * 1);
    var _0x5a6ade = _0x1bfd[hashOrKey];
    return _0x5a6ade;
  }, _0x149c(totalExpectedResults, entrySelector);
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

