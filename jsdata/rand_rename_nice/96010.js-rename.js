'use strict';
var domainName = "LanguageClientInfo";
var LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY = ["languageTools", "LanguageClient", "LanguageClient"];
var FORWARD_SLASH = "/";
var BACKWARD_SLASH = "\\";
var CompletionItemKind = {
  Text : 1,
  Method : 2,
  Function : 3,
  Constructor : 4,
  Field : 5,
  Variable : 6,
  Class : 7,
  Interface : 8,
  Module : 9,
  Property : 10,
  Unit : 11,
  Value : 12,
  Enum : 13,
  Keyword : 14,
  Snippet : 15,
  Color : 16,
  File : 17,
  Reference : 18,
  Folder : 19,
  EnumMember : 20,
  Constant : 21,
  Struct : 22,
  Event : 23,
  Operator : 24,
  TypeParameter : 25
};
var SymbolKind = {
  File : 1,
  Module : 2,
  Namespace : 3,
  Package : 4,
  Class : 5,
  Method : 6,
  Property : 7,
  Field : 8,
  Constructor : 9,
  Enum : 10,
  Interface : 11,
  Function : 12,
  Variable : 13,
  Constant : 14,
  String : 15,
  Number : 16,
  Boolean : 17,
  Array : 18,
  Object : 19,
  Key : 20,
  Null : 21,
  EnumMember : 22,
  Struct : 23,
  Event : 24,
  Operator : 25,
  TypeParameter : 26
};
var defaultBracketsCapabilities = {
  workspace : {
    workspaceFolders : true,
    symbol : {
      dynamicRegistration : false,
      symbolKind : [SymbolKind.File, SymbolKind.Module, SymbolKind.Namespace, SymbolKind.Package, SymbolKind.Class, SymbolKind.Method, SymbolKind.Property, SymbolKind.Field, SymbolKind.Constructor, SymbolKind.Enum, SymbolKind.Interface, SymbolKind.Function, SymbolKind.Variable, SymbolKind.Constant, SymbolKind.String, SymbolKind.Number, SymbolKind.Boolean, SymbolKind.Array, SymbolKind.Object, SymbolKind.Key, SymbolKind.Null, SymbolKind.EnumMember, SymbolKind.Struct, SymbolKind.Event, SymbolKind.Operator, 
      SymbolKind.TypeParameter]
    }
  },
  textDocument : {
    synchronization : {
      didSave : true
    },
    completion : {
      dynamicRegistration : false,
      completionItem : {
        deprecatedSupport : true,
        documentationFormat : ["plaintext"],
        preselectSupport : true
      },
      completionItemKind : {
        valueSet : [CompletionItemKind.Text, CompletionItemKind.Method, CompletionItemKind.Function, CompletionItemKind.Constructor, CompletionItemKind.Field, CompletionItemKind.Variable, CompletionItemKind.Class, CompletionItemKind.Interface, CompletionItemKind.Module, CompletionItemKind.Property, CompletionItemKind.Unit, CompletionItemKind.Value, CompletionItemKind.Enum, CompletionItemKind.Keyword, CompletionItemKind.Snippet, CompletionItemKind.Color, CompletionItemKind.File, CompletionItemKind.Reference, 
        CompletionItemKind.Folder, CompletionItemKind.EnumMember, CompletionItemKind.Constant, CompletionItemKind.Struct, CompletionItemKind.Event, CompletionItemKind.Operator, CompletionItemKind.TypeParameter]
      },
      contextSupport : true
    },
    signatureHelp : {
      dynamicRegistration : false,
      signatureInformation : {
        documentationFormat : ["plaintext"]
      }
    },
    references : {
      dynamicRegistration : false
    },
    documentSymbol : {
      dynamicRegistration : false,
      symbolKind : {
        valueSet : [SymbolKind.File, SymbolKind.Module, SymbolKind.Namespace, SymbolKind.Package, SymbolKind.Class, SymbolKind.Method, SymbolKind.Property, SymbolKind.Field, SymbolKind.Constructor, SymbolKind.Enum, SymbolKind.Interface, SymbolKind.Function, SymbolKind.Variable, SymbolKind.Constant, SymbolKind.String, SymbolKind.Number, SymbolKind.Boolean, SymbolKind.Array, SymbolKind.Object, SymbolKind.Key, SymbolKind.Null, SymbolKind.EnumMember, SymbolKind.Struct, SymbolKind.Event, SymbolKind.Operator, 
        SymbolKind.TypeParameter]
      },
      hierarchicalDocumentSymbolSupport : false
    },
    definition : {
      dynamicRegistration : false
    },
    declaration : {
      dynamicRegistration : false
    },
    typeDefinition : {
      dynamicRegistration : false
    },
    implementation : {
      dynamicRegistration : false
    },
    publishDiagnostics : {
      relatedInformation : true
    }
  }
};
function syncPreferences(canCreateDiscussions) {
  global.LanguageClientInfo = global.LanguageClientInfo || {};
  global.LanguageClientInfo.preferences = canCreateDiscussions || global.LanguageClientInfo.preferences || {};
}
function initialize(term, tag, o) {
  if (!term || !tag) {
    o(true, null);
  }
  var componentsStr = term.split(BACKWARD_SLASH).join(FORWARD_SLASH);
  var listToFind = componentsStr.split(FORWARD_SLASH);
  var l = listToFind.concat(LANGUAGE_CLIENT_RELATIVE_PATH_ARRAY).join(FORWARD_SLASH);
  global.LanguageClientInfo = global.LanguageClientInfo || {};
  global.LanguageClientInfo.languageClientPath = l;
  global.LanguageClientInfo.defaultBracketsCapabilities = defaultBracketsCapabilities;
  global.LanguageClientInfo.toolingInfo = tag;
  global.LanguageClientInfo.preferences = {};
  o(null, true);
}
function init(DomainManager) {
  if (!DomainManager.hasDomain(domainName)) {
    DomainManager.registerDomain(domainName, {
      major : 0,
      minor : 1
    });
  }
  DomainManager.registerCommand(domainName, "initialize", initialize, true, "Initialize node environment for Language Client Module", [{
    name : "bracketsSourcePath",
    type : "string",
    description : "Absolute path to the brackets source"
  }, {
    name : "toolingInfo",
    type : "object",
    description : "Tooling Info json to be used by Language Client"
  }], []);
  DomainManager.registerCommand(domainName, "syncPreferences", syncPreferences, false, "Sync language tools preferences for Language Client Module", [{
    name : "prefs",
    type : "object",
    description : "Language tools preferences"
  }], []);
}
exports.init = init;

