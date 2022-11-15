'use strict';
"use babel";
import SelectListView from "atom-select-list";
import repositoryForPath from "./helpers";
export default class DiffListView {
  constructor() {
    this.selectListView = new SelectListView({
      emptyMessage : "No diffs in file",
      items : [],
      filterKeyForItem : (item) => {
        return item.lineText;
      },
      elementForItem : (hunk) => {
        const li = document.createElement("li");
        li.classList.add("two-lines");
        const i = document.createElement("div");
        i.classList.add("primary-line");
        i.textContent = hunk.lineText;
        li.appendChild(i);
        const msg = document.createElement("div");
        msg.classList.add("secondary-line");
        msg.textContent = `-${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines}`;
        li.appendChild(msg);
        return li;
      },
      didConfirmSelection : (result) => {
        this.cancel();
        const nextRow = result.newStart > 0 ? result.newStart - 1 : result.newStart;
        this.editor.setCursorBufferPosition([nextRow, 0], {
          autoscroll : true
        });
        this.editor.moveToFirstCharacterOfLine();
      },
      didCancelSelection : () => {
        this.cancel();
      }
    });
    this.selectListView.element.classList.add("diff-list-view");
    this.panel = atom.workspace.addModalPanel({
      item : this.selectListView,
      visible : false
    });
  }
  attach() {
    this.previouslyFocusedElement = document.activeElement;
    this.selectListView.reset();
    this.panel.show();
    this.selectListView.focus();
  }
  cancel() {
    this.panel.hide();
    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
      this.previouslyFocusedElement = null;
    }
  }
  destroy() {
    this.cancel();
    this.panel.destroy();
    return this.selectListView.destroy();
  }
  async toggle() {
    const editor = atom.workspace.getActiveTextEditor();
    if (this.panel.isVisible()) {
      this.cancel();
    } else {
      if (editor) {
        this.editor = editor;
        const i = await repositoryForPath(this.editor.getPath());
        let results = i ? i.getLineDiffs(this.editor.getPath(), this.editor.getText()) : [];
        if (!results) {
          results = [];
        }
        for (let result of results) {
          const row = result.newStart > 0 ? result.newStart - 1 : result.newStart;
          const o = this.editor.lineTextForBufferRow(row);
          result.lineText = o ? o.trim() : "";
        }
        await this.selectListView.update({
          items : results
        });
        this.attach();
      }
    }
  }
}
;
