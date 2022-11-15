'use strict';
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions || {
    quote : "single"
  };
  const inventoryKeys = ["FilterOptionsState", "createFilterOptions", "CreateFilterOptionsConfig", "AutocompleteFreeSoloValueMapping", "Value", "UseAutocompleteProps", "AutocompleteHighlightChangeReason", "AutocompleteInputChangeReason", "AutocompleteChangeReason", "AutocompleteCloseReason", "useAutocomplete"];
  let node;
  root.find(j.ImportDeclaration).filter((e) => {
    return e.node.source.value.match(/^@material-ui\/lab\/?(useAutocomplete)?$/);
  }).forEach((path) => {
    const specifiers = [];
    path.node.specifiers.forEach((spec, i) => {
      if (inventoryKeys.includes(spec.imported ? spec.imported.name : spec.local.name)) {
        if (spec.local.name === "useAutocomplete") {
          specifiers.push(j.importDefaultSpecifier(j.identifier("useAutocomplete")));
        } else {
          specifiers.push(spec);
        }
        delete path.node.specifiers[i];
      }
    });
    if (specifiers.length) {
      if (!node) {
        node = j.importDeclaration(specifiers, j.literal("@material-ui/core/useAutocomplete"));
        path.insertAfter(node);
      } else {
        node.specifiers.push(...specifiers);
      }
    }
  }).filter((p) => {
    return !Object.keys(p.node.specifiers).length;
  }).remove();
  return root.toSource(printOptions);
}
;
