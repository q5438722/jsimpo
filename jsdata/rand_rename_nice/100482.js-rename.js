'use strict';
const new_attrs = {
  Document : null,
  DocumentFragment : null,
  Part : "group",
  Sect : "group",
  Div : "group",
  Aside : "note",
  NonStruct : "none",
  P : null,
  H : "heading",
  Title : null,
  FENote : "note",
  Sub : "group",
  Lbl : null,
  Span : null,
  Em : null,
  Strong : null,
  Link : "link",
  Annot : "note",
  Form : "form",
  Ruby : null,
  RB : null,
  RT : null,
  RP : null,
  Warichu : null,
  WT : null,
  WP : null,
  L : "list",
  LI : "listitem",
  LBody : null,
  Table : "table",
  TR : "row",
  TH : "columnheader",
  TD : "cell",
  THead : "columnheader",
  TBody : null,
  TFoot : null,
  Caption : null,
  Figure : "figure",
  Formula : null,
  Artifact : null
};
const gitRegExp = /^H(\d+)$/;
class Parser {
  constructor({
    pdfPage : pdfPage
  }) {
    this.pdfPage = pdfPage;
  }
  render(callback) {
    return this._walk(callback);
  }
  _setAttributes(node, el) {
    if (node.alt !== undefined) {
      el.setAttribute("aria-label", node.alt);
    }
    if (node.id !== undefined) {
      el.setAttribute("aria-owns", node.id);
    }
  }
  _walk(ast) {
    if (!ast) {
      return null;
    }
    const element = document.createElement("span");
    if ("role" in ast) {
      const {
        role : i
      } = ast;
      const properties = i.match(gitRegExp);
      if (properties) {
        element.setAttribute("role", "heading");
        element.setAttribute("aria-level", properties[1]);
      } else {
        if (new_attrs[i]) {
          element.setAttribute("role", new_attrs[i]);
        }
      }
    }
    this._setAttributes(ast, element);
    if (ast.children) {
      if (ast.children.length === 1 && "id" in ast.children[0]) {
        this._setAttributes(ast.children[0], element);
      } else {
        for (const node of ast.children) {
          element.appendChild(this._walk(node));
        }
      }
    }
    return element;
  }
}
class QuickBase {
  createStructTreeLayerBuilder(options) {
    return new Parser({
      pdfPage : options
    });
  }
}
export{
  QuickBase as DefaultStructTreeLayerFactory,
  Parser as StructTreeLayerBuilder
};

