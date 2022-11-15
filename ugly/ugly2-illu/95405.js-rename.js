define(function (e, r, n) {
  "use strict";
  const t = e("utils/AppInit");
  const u = e("command/CommandManager");
  const a = e("view/MainViewManager");
  const f = e("language/LanguageManager");
  const c = e("document/DocumentManager");
  const g = e("command/Commands");
  const l = e("editor/EditorManager");
  const i = e("project/ProjectManager");
  const o = e("features/PriorityBasedRegistration").RegistrationHandler;
  const s = e("search/SearchResultsView").SearchResultsView;
  const d = e("search/SearchModel").SearchModel;
  const E = e("strings");
  const R = new o();
  const v = R.registerProvider.bind(R);
  const h = R.removeProvider.bind(R);
  const F = new d();
  var m;
  function L(e, r, n) {
    const t = new $.Deferred();
    if (!e) {
      return t.reject();
    }e.getReferences(r, n).done(function (e) {
      F.results = e.results;F.numFiles = e.numFiles;F.numMatches = e.numMatches;F.allResultsAvailable = true;F.setQueryInfo({ query: e.queryInfo, caseSensitive: true, isRegExp: false });t.resolve();
    }).fail(function () {
      t.reject();
    });return t.promise();
  }function P() {
    const n = l.getActiveEditor();
    const e = n ? n.getCursorPos() : null;
    var r;
    const t = new $.Deferred();
    const a = E.REFERENCES_NO_RESULTS;
    var i;
    const o = n.getLanguageForSelection();
    const s = R.getProvidersForLanguageId(o.getId());
    s.some(function (e, r) {
      if (e.provider.hasReferences(n)) {
        i = e.provider;return true;
      }
    });r = L(i, n, e);if (r) {
      r.done(function () {
        if (m) {
          m.open();
        }
      }).fail(function () {
        if (m) {
          m.close();
        }n.displayErrorMessageAtCursor(a);t.reject();
      });
    } else {
      if (m) {
        m.close();
      }n.displayErrorMessageAtCursor(a);t.reject();
    }return t.promise();
  }function C() {
    F.clear();
  }function _() {
    if (m) {
      m.close();
    }
  }function M(e) {
    u.get(g.CMD_FIND_ALL_REFERENCES).setEnabled(false);if (!e) {
      const r = l.getActiveEditor();
      if (r) {
        e = f.getLanguageForPath(r.document.file._path).getId();
      }
    }const n = R.getProvidersForLanguageId(e);
    var t;
    n.some(function (e, r) {
      if (e.provider.hasReferences()) {
        t = e.provider;return true;
      }
    });if (t) {
      u.get(g.CMD_FIND_ALL_REFERENCES).setEnabled(true);
    }
  }a.on("currentFileChange", function (e, r, n, t, a) {
    if (!r) {
      u.get(g.CMD_FIND_ALL_REFERENCES).setEnabled(false);return;
    }const i = r.fullPath;
    const o = f.getLanguageForPath(i).getId();
    M(o);c.getDocumentForPath(i).done(function (r) {
      r.on("languageChanged.reference-in-files", function () {
        const e = f.getLanguageForPath(r.file.fullPath).getId();
        M(e);
      });
    });if (!t) {
      return;
    }const s = t.fullPath;
    c.getDocumentForPath(s).done(function (e) {
      e.off("languageChanged.reference-in-files");
    });
  });t.htmlReady(function () {
    m = new s(F, "reference-in-files-results", "reference-in-files.results", "reference");if (m) {
      m.on("close", function () {
        F.clear();
      }).on("getNextPage", function () {
        if (F.hasResults()) {
          m.showNextPage();
        }
      }).on("getLastPage", function () {
        if (F.hasResults()) {
          m.showLastPage();
        }
      });
    }
  });i.on("beforeProjectClose", function () {
    if (m) {
      m.close();
    }
  });u.register(E.FIND_ALL_REFERENCES, g.CMD_FIND_ALL_REFERENCES, P);u.get(g.CMD_FIND_ALL_REFERENCES).setEnabled(false);r.registerFindReferencesProvider = v;r.removeFindReferencesProvider = h;r.setMenuItemStateForLanguage = M;r.closeReferencesPanel = _;
});
