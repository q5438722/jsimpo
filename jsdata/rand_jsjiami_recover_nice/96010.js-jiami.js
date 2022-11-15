'use strict';
var domainName = "LanguageClientInfo";
var LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = ["languageTools", "LanguageClient", "LanguageClient"];
var FORWARD_SLASH = "/";
var BACKWARD_SLASH = "\\";
var CompletionItemKind = {};
var SymbolKind = {};
var defaultBracketsCapabilities = {
  "workspace" : {
    "workspaceFolders" : !![],
    "symbol" : {
      "dynamicRegistration" : ![],
      "symbolKind" : [SymbolKind["File"], SymbolKind["Module"], SymbolKind["Namespace"], SymbolKind["Package"], SymbolKind["Class"], SymbolKind["Method"], SymbolKind["Property"], SymbolKind["Field"], SymbolKind["Constructor"], SymbolKind["Enum"], SymbolKind["Interface"], SymbolKind["Function"], SymbolKind["Variable"], SymbolKind["Constant"], SymbolKind["String"], SymbolKind["Number"], SymbolKind["Boolean"], SymbolKind["Array"], SymbolKind["Object"], SymbolKind["Key"], SymbolKind["Null"], SymbolKind["EnumMember"], 
      SymbolKind["Struct"], SymbolKind["Event"], SymbolKind["Operator"], SymbolKind["TypeParameter"]]
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
        "valueSet" : [CompletionItemKind["Text"], CompletionItemKind["Method"], CompletionItemKind["Function"], CompletionItemKind["Constructor"], CompletionItemKind["Field"], CompletionItemKind["Variable"], CompletionItemKind["Class"], CompletionItemKind["Interface"], CompletionItemKind["Module"], CompletionItemKind["Property"], CompletionItemKind["Unit"], CompletionItemKind["Value"], CompletionItemKind["Enum"], CompletionItemKind["Keyword"], CompletionItemKind["Snippet"], CompletionItemKind["Color"], 
        CompletionItemKind["File"], CompletionItemKind["Reference"], CompletionItemKind["Folder"], CompletionItemKind["EnumMember"], CompletionItemKind["Constant"], CompletionItemKind["Struct"], CompletionItemKind["Event"], CompletionItemKind["Operator"], CompletionItemKind["TypeParameter"]]
      },
      "contextSupport" : !![]
    },
    "signatureHelp" : {
      "dynamicRegistration" : ![],
      "signatureInformation" : {
        "documentationFormat" : ["plaintext"]
      }
    },
    "references" : {
      "dynamicRegistration" : ![]
    },
    "documentSymbol" : {
      "dynamicRegistration" : ![],
      "symbolKind" : {
        "valueSet" : [SymbolKind["File"], SymbolKind["Module"], SymbolKind["Namespace"], SymbolKind["Package"], SymbolKind["Class"], SymbolKind["Method"], SymbolKind["Property"], SymbolKind["Field"], SymbolKind["Constructor"], SymbolKind["Enum"], SymbolKind["Interface"], SymbolKind["Function"], SymbolKind["Variable"], SymbolKind["Constant"], SymbolKind["String"], SymbolKind["Number"], SymbolKind["Boolean"], SymbolKind["Array"], SymbolKind["Object"], SymbolKind["Key"], SymbolKind["Null"], SymbolKind["EnumMember"], 
        SymbolKind["Struct"], SymbolKind["Event"], SymbolKind["Operator"], SymbolKind["TypeParameter"]]
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
  global["LanguageClientInfo"] = global["LanguageClientInfo"] || {};
  global["LanguageClientInfo"]["preferences"] = canCreateDiscussions || global["LanguageClientInfo"]["preferences"] || {};
}
function initialize(options, canvas, ringAtomCount) {
  if (!options || !canvas) {
    if (_0x8d8f59["HBNOn"] === "cQhTf") {
      ringAtomCount(!![], null);
    } else {
      global["LanguageClientInfo"] = global["LanguageClientInfo"] || {};
      global["LanguageClientInfo"]["preferences"] = prefs || global["LanguageClientInfo"]["preferences"] || {};
    }
  }
  var layoutSets = options["split"](BACKWARD_SLASH)["join"](FORWARD_SLASH);
  var B77 = layoutSets["split"](FORWARD_SLASH);
  var _0x409498 = B77["concat"](LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY)["join"](FORWARD_SLASH);
  global["LanguageClientInfo"] = global["LanguageClientInfo"] || {};
  global["LanguageClientInfo"]["languageClientPath"] = _0x409498;
  global["LanguageClientInfo"]["defaultBracketsCapabilities"] = defaultBracketsCapabilities;
  global["LanguageClientInfo"]["toolingInfo"] = canvas;
  global["LanguageClientInfo"]["preferences"] = {};
  ringAtomCount(null, !![]);
}
function init(flightPhase) {
  if (!flightPhase["hasDomain"](domainName)) {
    if ("AvjSV" !== _0xe23f8["mbKoQ"]) {
      flightPhase["registerDomain"](domainName, {
        "major" : 0,
        "minor" : 1
      });
    } else {
      flightPhase["registerDomain"](domainName, {
        "major" : 0,
        "minor" : 1
      });
    }
  }
  flightPhase["registerCommand"](domainName, _0xe23f8["XCPml"], initialize, !![], _0xe23f8["HkotS"], [{
    "name" : _0xe23f8["SwgaK"],
    "type" : _0xe23f8["vJLuT"],
    "description" : _0xe23f8["dMtdt"]
  }, {
    "name" : "toolingInfo",
    "type" : _0xe23f8["LiNxQ"],
    "description" : _0xe23f8["Udmks"]
  }], []);
  flightPhase["registerCommand"](domainName, "syncPreferences", syncPreferences, ![], "Sync language tools preferences for Language Client Module", [{
    "name" : _0xe23f8["ajaPa"],
    "type" : _0xe23f8["LiNxQ"],
    "description" : "Language tools preferences"
  }], []);
}
exports["init"] = init;

