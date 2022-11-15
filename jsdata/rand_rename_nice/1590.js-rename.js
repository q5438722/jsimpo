'use strict';
const _ = require("underscore-plus");
const url = require("url");
const path = require("path");
const {
  Emitter : Emitter,
  Disposable : Disposable,
  CompositeDisposable : CompositeDisposable
} = require("event-kit");
const fs = require("fs-plus");
const {
  Directory : Directory
} = require("pathwatcher");
const Grim = require("grim");
const DefaultDirectorySearcher = require("./default-directory-searcher");
const RipgrepDirectorySearcher = require("./ripgrep-directory-searcher");
const Dock = require("./dock");
const Model = require("./model");
const StateStore = require("./state-store");
const TextEditor = require("./text-editor");
const Panel = require("./panel");
const PanelContainer = require("./panel-container");
const Task = require("./task");
const WorkspaceCenter = require("./workspace-center");
const {
  createWorkspaceElement : createWorkspaceElement
} = require("./workspace-element");
const STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY = 100;
const ALL_LOCATIONS = ["center", "left", "right", "bottom"];
module.exports = class Client extends Model {
  constructor(options) {
    super(...arguments);
    this.updateWindowTitle = this.updateWindowTitle.bind(this);
    this.updateDocumentEdited = this.updateDocumentEdited.bind(this);
    this.didDestroyPaneItem = this.didDestroyPaneItem.bind(this);
    this.didChangeActivePaneOnPaneContainer = this.didChangeActivePaneOnPaneContainer.bind(this);
    this.didChangeActivePaneItemOnPaneContainer = this.didChangeActivePaneItemOnPaneContainer.bind(this);
    this.didActivatePaneContainer = this.didActivatePaneContainer.bind(this);
    this.enablePersistence = options.enablePersistence;
    this.packageManager = options.packageManager;
    this.config = options.config;
    this.project = options.project;
    this.notificationManager = options.notificationManager;
    this.viewRegistry = options.viewRegistry;
    this.grammarRegistry = options.grammarRegistry;
    this.applicationDelegate = options.applicationDelegate;
    this.assert = options.assert;
    this.deserializerManager = options.deserializerManager;
    this.textEditorRegistry = options.textEditorRegistry;
    this.styleManager = options.styleManager;
    this.draggingItem = false;
    this.itemLocationStore = new StateStore("AtomPreviousItemLocations", 1);
    this.emitter = new Emitter;
    this.openers = [];
    this.destroyedItemURIs = [];
    this.stoppedChangingActivePaneItemTimeout = null;
    this.scandalDirectorySearcher = new DefaultDirectorySearcher;
    this.ripgrepDirectorySearcher = new RipgrepDirectorySearcher;
    this.consumeServices(this.packageManager);
    this.paneContainers = {
      center : this.createCenter(),
      left : this.createDock("left"),
      right : this.createDock("right"),
      bottom : this.createDock("bottom")
    };
    this.activePaneContainer = this.paneContainers.center;
    this.hasActiveTextEditor = false;
    this.panelContainers = {
      top : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "top"
      }),
      left : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "left",
        dock : this.paneContainers.left
      }),
      right : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "right",
        dock : this.paneContainers.right
      }),
      bottom : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "bottom",
        dock : this.paneContainers.bottom
      }),
      header : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "header"
      }),
      footer : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "footer"
      }),
      modal : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "modal"
      })
    };
    this.incoming = new Map;
  }
  get paneContainer() {
    Grim.deprecate("`atom.workspace.paneContainer` has always been private, but it is now gone. Please use `atom.workspace.getCenter()` instead and consult the workspace API docs for public methods.");
    return this.paneContainers.center.paneContainer;
  }
  getElement() {
    if (!this.element) {
      this.element = createWorkspaceElement().initialize(this, {
        config : this.config,
        project : this.project,
        viewRegistry : this.viewRegistry,
        styleManager : this.styleManager
      });
    }
    return this.element;
  }
  createCenter() {
    return new WorkspaceCenter({
      config : this.config,
      applicationDelegate : this.applicationDelegate,
      notificationManager : this.notificationManager,
      deserializerManager : this.deserializerManager,
      viewRegistry : this.viewRegistry,
      didActivate : this.didActivatePaneContainer,
      didChangeActivePane : this.didChangeActivePaneOnPaneContainer,
      didChangeActivePaneItem : this.didChangeActivePaneItemOnPaneContainer,
      didDestroyPaneItem : this.didDestroyPaneItem
    });
  }
  createDock(value) {
    return new Dock({
      location : value,
      config : this.config,
      applicationDelegate : this.applicationDelegate,
      deserializerManager : this.deserializerManager,
      notificationManager : this.notificationManager,
      viewRegistry : this.viewRegistry,
      didActivate : this.didActivatePaneContainer,
      didChangeActivePane : this.didChangeActivePaneOnPaneContainer,
      didChangeActivePaneItem : this.didChangeActivePaneItemOnPaneContainer,
      didDestroyPaneItem : this.didDestroyPaneItem
    });
  }
  reset(value) {
    this.packageManager = value;
    this.emitter.dispose();
    this.emitter = new Emitter;
    this.paneContainers.center.destroy();
    this.paneContainers.left.destroy();
    this.paneContainers.right.destroy();
    this.paneContainers.bottom.destroy();
    _.values(this.panelContainers).forEach((anAlertDialog) => {
      anAlertDialog.destroy();
    });
    this.paneContainers = {
      center : this.createCenter(),
      left : this.createDock("left"),
      right : this.createDock("right"),
      bottom : this.createDock("bottom")
    };
    this.activePaneContainer = this.paneContainers.center;
    this.hasActiveTextEditor = false;
    this.panelContainers = {
      top : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "top"
      }),
      left : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "left",
        dock : this.paneContainers.left
      }),
      right : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "right",
        dock : this.paneContainers.right
      }),
      bottom : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "bottom",
        dock : this.paneContainers.bottom
      }),
      header : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "header"
      }),
      footer : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "footer"
      }),
      modal : new PanelContainer({
        viewRegistry : this.viewRegistry,
        location : "modal"
      })
    };
    this.openers = [];
    this.destroyedItemURIs = [];
    if (this.element) {
      this.element.destroy();
      this.element = null;
    }
    this.consumeServices(this.packageManager);
  }
  initialize() {
    this.originalFontSize = this.config.get("defaultFontSize");
    this.project.onDidChangePaths(this.updateWindowTitle);
    this.subscribeToAddedItems();
    this.subscribeToMovedItems();
    this.subscribeToDockToggling();
  }
  consumeServices({
    serviceHub : lastFrom
  }) {
    this.directorySearchers = [];
    lastFrom.consume("atom.directory-searcher", "^0.1.0", (systemsPath) => {
      return this.directorySearchers.unshift(systemsPath);
    });
  }
  serialize() {
    return {
      deserializer : "Workspace",
      packagesWithActiveGrammars : this.getPackageNamesWithActiveGrammars(),
      destroyedItemURIs : this.destroyedItemURIs.slice(),
      paneContainer : {
        version : 2
      },
      paneContainers : {
        center : this.paneContainers.center.serialize(),
        left : this.paneContainers.left.serialize(),
        right : this.paneContainers.right.serialize(),
        bottom : this.paneContainers.bottom.serialize()
      }
    };
  }
  deserialize(options, callback) {
    const packages = options.packagesWithActiveGrammars != null ? options.packagesWithActiveGrammars : [];
    for (let pkg of packages) {
      const n = this.packageManager.getLoadedPackage(pkg);
      if (n != null) {
        n.loadGrammarsSync();
      }
    }
    if (options.destroyedItemURIs != null) {
      this.destroyedItemURIs = options.destroyedItemURIs;
    }
    if (options.paneContainers) {
      this.paneContainers.center.deserialize(options.paneContainers.center, callback);
      this.paneContainers.left.deserialize(options.paneContainers.left, callback);
      this.paneContainers.right.deserialize(options.paneContainers.right, callback);
      this.paneContainers.bottom.deserialize(options.paneContainers.bottom, callback);
    } else {
      if (options.paneContainer) {
        this.paneContainers.center.deserialize(options.paneContainer, callback);
      }
    }
    this.hasActiveTextEditor = this.getActiveTextEditor() != null;
    this.updateWindowTitle();
  }
  getPackageNamesWithActiveGrammars() {
    const _clickedProvinces = [];
    const n = ({
      includedGrammarScopes : type,
      packageName : id
    } = {}) => {
      if (!id) {
        return;
      }
      if (_clickedProvinces.indexOf(id) !== -1) {
        return;
      }
      _clickedProvinces.push(id);
      for (let preload of type != null ? type : []) {
        n(this.grammarRegistry.grammarForScopeName(preload));
      }
    };
    const collectedUrls = this.getTextEditors();
    for (let e of collectedUrls) {
      n(e.getGrammar());
    }
    if (collectedUrls.length > 0) {
      for (let ERR_INVALID_AUTH of this.grammarRegistry.getGrammars()) {
        if (ERR_INVALID_AUTH.injectionSelector) {
          n(ERR_INVALID_AUTH);
        }
      }
    }
    return _.uniq(_clickedProvinces);
  }
  didActivatePaneContainer(withCounts) {
    if (withCounts !== this.getActivePaneContainer()) {
      this.activePaneContainer = withCounts;
      this.didChangeActivePaneItem(this.activePaneContainer.getActivePaneItem());
      this.emitter.emit("did-change-active-pane-container", this.activePaneContainer);
      this.emitter.emit("did-change-active-pane", this.activePaneContainer.getActivePane());
      this.emitter.emit("did-change-active-pane-item", this.activePaneContainer.getActivePaneItem());
    }
  }
  didChangeActivePaneOnPaneContainer(handler, data) {
    if (handler === this.getActivePaneContainer()) {
      this.emitter.emit("did-change-active-pane", data);
    }
  }
  didChangeActivePaneItemOnPaneContainer(contentType, name) {
    if (contentType === this.getActivePaneContainer()) {
      this.didChangeActivePaneItem(name);
      this.emitter.emit("did-change-active-pane-item", name);
    }
    if (contentType === this.getCenter()) {
      const i = this.hasActiveTextEditor;
      this.hasActiveTextEditor = name instanceof TextEditor;
      if (this.hasActiveTextEditor || i) {
        const testObject1 = this.hasActiveTextEditor ? name : undefined;
        this.emitter.emit("did-change-active-text-editor", testObject1);
      }
    }
  }
  didChangeActivePaneItem(value) {
    this.updateWindowTitle();
    this.updateDocumentEdited();
    if (this.activeItemSubscriptions) {
      this.activeItemSubscriptions.dispose();
    }
    this.activeItemSubscriptions = new CompositeDisposable;
    let options;
    let activityIndicator;
    if (value != null && typeof value.onDidChangeTitle === "function") {
      activityIndicator = value.onDidChangeTitle(this.updateWindowTitle);
    } else {
      if (value != null && typeof value.on === "function") {
        activityIndicator = value.on("title-changed", this.updateWindowTitle);
        if (activityIndicator == null || typeof activityIndicator.dispose !== "function") {
          activityIndicator = new Disposable(() => {
            value.off("title-changed", this.updateWindowTitle);
          });
        }
      }
    }
    if (value != null && typeof value.onDidChangeModified === "function") {
      options = value.onDidChangeModified(this.updateDocumentEdited);
    } else {
      if (value != null && typeof value.on === "function") {
        options = value.on("modified-status-changed", this.updateDocumentEdited);
        if (options == null || typeof options.dispose !== "function") {
          options = new Disposable(() => {
            value.off("modified-status-changed", this.updateDocumentEdited);
          });
        }
      }
    }
    if (activityIndicator != null) {
      this.activeItemSubscriptions.add(activityIndicator);
    }
    if (options != null) {
      this.activeItemSubscriptions.add(options);
    }
    this.cancelStoppedChangingActivePaneItemTimeout();
    this.stoppedChangingActivePaneItemTimeout = setTimeout(() => {
      this.stoppedChangingActivePaneItemTimeout = null;
      this.emitter.emit("did-stop-changing-active-pane-item", value);
    }, STOPPED_CHANGING_ACTIVE_PANE_ITEM_DELAY);
  }
  cancelStoppedChangingActivePaneItemTimeout() {
    if (this.stoppedChangingActivePaneItemTimeout != null) {
      clearTimeout(this.stoppedChangingActivePaneItemTimeout);
    }
  }
  setDraggingItem(type) {
    _.values(this.paneContainers).forEach((aExpectedTarget) => {
      aExpectedTarget.setDraggingItem(type);
    });
  }
  subscribeToAddedItems() {
    this.onDidAddPaneItem(({
      item : item,
      pane : pane,
      index : index
    }) => {
      if (item instanceof TextEditor) {
        const editorHandlers = new CompositeDisposable(this.textEditorRegistry.add(item), this.textEditorRegistry.maintainConfig(item));
        if (!this.project.findBufferForId(item.buffer.id)) {
          this.project.addBuffer(item.buffer);
        }
        item.onDidDestroy(() => {
          editorHandlers.dispose();
        });
        this.emitter.emit("did-add-text-editor", {
          textEditor : item,
          pane : pane,
          index : index
        });
        if (!item.isDestroyed()) {
          editorHandlers.add(item.observeGrammar(this.handleGrammarUsed.bind(this)));
        }
      }
    });
  }
  subscribeToDockToggling() {
    const pipelets = [this.getLeftDock(), this.getRightDock(), this.getBottomDock()];
    pipelets.forEach((elementOrDialog) => {
      elementOrDialog.onDidChangeVisible((canCreateDiscussions) => {
        if (canCreateDiscussions) {
          return;
        }
        const {
          activeElement : target
        } = document;
        const confirmButton = elementOrDialog.getElement();
        if (confirmButton === target || confirmButton.contains(target)) {
          this.getCenter().activate();
        }
      });
    });
  }
  subscribeToMovedItems() {
    for (const paramOrRef of this.getPaneContainers()) {
      paramOrRef.observePanes((canCreateDiscussions) => {
        canCreateDiscussions.onDidAddItem(({
          item : item
        }) => {
          if (typeof item.getURI === "function" && this.enablePersistence) {
            const e = item.getURI();
            if (e) {
              const converted_value = paramOrRef.getLocation();
              let cusX;
              if (typeof item.getDefaultLocation === "function") {
                cusX = item.getDefaultLocation();
              }
              cusX = cusX || "center";
              if (converted_value === cusX) {
                this.itemLocationStore.delete(item.getURI());
              } else {
                this.itemLocationStore.save(item.getURI(), converted_value);
              }
            }
          }
        });
      });
    }
  }
  updateWindowTitle() {
    let key;
    let filename;
    let value;
    let result;
    const a = atom.getAppName();
    const count = this.project.getPaths();
    const array = count != null ? count : [];
    const item = this.getActivePaneItem();
    if (item) {
      key = typeof item.getPath === "function" ? item.getPath() : undefined;
      const modelID = typeof item.getLongTitle === "function" ? item.getLongTitle() : undefined;
      filename = modelID == null ? typeof item.getTitle === "function" ? item.getTitle() : undefined : modelID;
      value = _.find(array, (prefix) => {
        return key === prefix || (key != null ? key.startsWith(prefix + path.sep) : undefined);
      });
    }
    if (filename == null) {
      filename = "untitled";
    }
    if (value == null) {
      value = key ? path.dirname(key) : array[0];
    }
    if (value != null) {
      value = fs.tildify(value);
    }
    const parser = [];
    if (item != null && value != null) {
      parser.push(filename, value);
      result = key != null ? key : value;
    } else {
      if (value != null) {
        parser.push(value);
        result = value;
      } else {
        parser.push(filename);
        result = "";
      }
    }
    if (process.platform !== "darwin") {
      parser.push(a);
    }
    document.title = parser.join(" \u2014 ");
    this.applicationDelegate.setRepresentedFilename(result);
    this.emitter.emit("did-change-window-title");
  }
  updateDocumentEdited() {
    const object = this.getActivePaneItem();
    const artistTrack = object != null && typeof object.isModified === "function" ? object.isModified() || false : false;
    this.applicationDelegate.setWindowDocumentEdited(artistTrack);
  }
  onDidChangeActivePaneContainer(message) {
    return this.emitter.on("did-change-active-pane-container", message);
  }
  observeTextEditors(cb) {
    for (let iconCtx of this.getTextEditors()) {
      cb(iconCtx);
    }
    return this.onDidAddTextEditor(({
      textEditor : editor
    }) => {
      return cb(editor);
    });
  }
  observePaneItems(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.observePaneItems(type);
    }));
  }
  onDidChangeActivePaneItem(message) {
    return this.emitter.on("did-change-active-pane-item", message);
  }
  onDidStopChangingActivePaneItem(message) {
    return this.emitter.on("did-stop-changing-active-pane-item", message);
  }
  onDidChangeActiveTextEditor(message) {
    return this.emitter.on("did-change-active-text-editor", message);
  }
  observeActivePaneItem(editor) {
    editor(this.getActivePaneItem());
    return this.onDidChangeActivePaneItem(editor);
  }
  observeActiveTextEditor(race) {
    race(this.getActiveTextEditor());
    return this.onDidChangeActiveTextEditor(race);
  }
  onDidOpen(message) {
    return this.emitter.on("did-open", message);
  }
  onDidAddPane(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.onDidAddPane(type);
    }));
  }
  onWillDestroyPane(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.onWillDestroyPane(type);
    }));
  }
  onDidDestroyPane(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.onDidDestroyPane(type);
    }));
  }
  observePanes(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.observePanes(type);
    }));
  }
  onDidChangeActivePane(message) {
    return this.emitter.on("did-change-active-pane", message);
  }
  observeActivePane(race) {
    race(this.getActivePane());
    return this.onDidChangeActivePane(race);
  }
  onDidAddPaneItem(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.onDidAddPaneItem(type);
    }));
  }
  onWillDestroyPaneItem(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.onWillDestroyPaneItem(type);
    }));
  }
  onDidDestroyPaneItem(type) {
    return new CompositeDisposable(...this.getPaneContainers().map((aExpectedTarget) => {
      return aExpectedTarget.onDidDestroyPaneItem(type);
    }));
  }
  onDidAddTextEditor(message) {
    return this.emitter.on("did-add-text-editor", message);
  }
  onDidChangeWindowTitle(message) {
    return this.emitter.on("did-change-window-title", message);
  }
  async open(id, options = {}) {
    let path;
    let editor;
    if (typeof id === "string") {
      path = this.project.resolvePath(id);
    } else {
      if (id) {
        editor = id;
        if (typeof editor.getURI === "function") {
          path = editor.getURI();
        }
      }
    }
    let morpho = () => {
    };
    if (path) {
      const i = this.incoming.get(path);
      if (!i) {
        this.incoming.set(path, new Promise((canCreateDiscussions) => {
          morpho = canCreateDiscussions;
        }));
      } else {
        await i;
      }
    }
    try {
      if (!atom.config.get("core.allowPendingPaneItems")) {
        options.pending = false;
      }
      if (path && (!url.parse(path).protocol || process.platform === "win32")) {
        this.applicationDelegate.addRecentDocument(path);
      }
      let pane;
      let selectedLangElement;
      if (editor || path) {
        if (options.pane) {
          pane = options.pane;
        } else {
          if (options.searchAllPanes) {
            pane = editor ? this.paneForItem(editor) : this.paneForURI(path);
          } else {
            let dock;
            if (path) {
              dock = this.paneContainerForURI(path);
            }
            if (!dock) {
              dock = this.getActivePaneContainer();
            }
            pane = dock.getActivePane();
            switch(options.split) {
              case "left":
                pane = pane.findLeftmostSibling();
                break;
              case "right":
                pane = pane.findRightmostSibling();
                break;
              case "up":
                pane = pane.findTopmostSibling();
                break;
              case "down":
                pane = pane.findBottommostSibling();
                break;
            }
          }
        }
        if (pane) {
          if (editor) {
            selectedLangElement = pane.getItems().includes(editor);
          } else {
            editor = pane.itemForURI(path);
            selectedLangElement = editor != null;
          }
        }
      }
      if (editor) {
        await Promise.resolve();
      }
      if (!selectedLangElement) {
        editor = editor || await this.createItemForURI(path, options);
        if (!editor) {
          return;
        }
        if (options.pane) {
          pane = options.pane;
        } else {
          let err = options.location;
          if (!err && !options.split && path && this.enablePersistence) {
            err = await this.itemLocationStore.load(path);
          }
          if (!err && typeof editor.getDefaultLocation === "function") {
            err = editor.getDefaultLocation();
          }
          const ono = typeof editor.getAllowedLocations === "function" ? editor.getAllowedLocations() : ALL_LOCATIONS;
          err = ono.includes(err) ? err : ono[0];
          const dock = this.paneContainers[err] || this.getCenter();
          pane = dock.getActivePane();
          switch(options.split) {
            case "left":
              pane = pane.findLeftmostSibling();
              break;
            case "right":
              pane = pane.findOrCreateRightmostSibling();
              break;
            case "up":
              pane = pane.findTopmostSibling();
              break;
            case "down":
              pane = pane.findOrCreateBottommostSibling();
              break;
          }
        }
      }
      if (!options.pending && pane.getPendingItem() === editor) {
        pane.clearPendingItem();
      }
      this.itemOpened(editor);
      if (options.activateItem === false) {
        pane.addItem(editor, {
          pending : options.pending
        });
      } else {
        pane.activateItem(editor, {
          pending : options.pending
        });
      }
      if (options.activatePane !== false) {
        pane.activate();
      }
      let column = 0;
      let row = 0;
      if (!Number.isNaN(options.initialLine)) {
        row = options.initialLine;
      }
      if (!Number.isNaN(options.initialColumn)) {
        column = options.initialColumn;
      }
      if (row >= 0 || column >= 0) {
        if (typeof editor.setCursorBufferPosition === "function") {
          editor.setCursorBufferPosition([row, column]);
        }
        if (typeof editor.unfoldBufferRow === "function") {
          editor.unfoldBufferRow(row);
        }
        if (typeof editor.scrollToBufferPosition === "function") {
          editor.scrollToBufferPosition([row, column], {
            center : true
          });
        }
      }
      const elasticIndex = pane.getActiveItemIndex();
      this.emitter.emit("did-open", {
        uri : path,
        pane : pane,
        item : editor,
        index : elasticIndex
      });
      if (path) {
        this.incoming.delete(path);
      }
    } finally {
      morpho();
    }
    return editor;
  }
  hide(value) {
    let self = false;
    for (const overlay of this.getPaneContainers()) {
      const n = overlay === this.getCenter();
      if (n || overlay.isVisible()) {
        for (const pane of overlay.getPanes()) {
          const item = pane.getActiveItem();
          const o = item != null && (item === value || typeof item.getURI === "function" && item.getURI() === value);
          if (o) {
            self = true;
            if (n) {
              pane.destroyItem(item);
            } else {
              overlay.hide();
            }
          }
        }
      }
    }
    return self;
  }
  toggle(type) {
    if (this.hide(type)) {
      return Promise.resolve();
    } else {
      return this.open(type, {
        searchAllPanes : true
      });
    }
  }
  openLicense() {
    return this.open(path.join(process.resourcesPath, "LICENSE.md"));
  }
  openSync(id = "", activeItem = {}) {
    const {
      initialLine : line,
      initialColumn : char
    } = activeItem;
    const a = activeItem.activatePane != null ? activeItem.activatePane : true;
    const s = activeItem.activateItem != null ? activeItem.activateItem : true;
    const path = this.project.resolvePath(id);
    let item = this.getActivePane().itemForURI(path);
    if (path && item == null) {
      for (const $ of this.getOpeners()) {
        item = $(path, activeItem);
        if (item) {
          break;
        }
      }
    }
    if (item == null) {
      item = this.project.openSync(path, {
        initialLine : line,
        initialColumn : char
      });
    }
    if (s) {
      this.getActivePane().activateItem(item);
    }
    this.itemOpened(item);
    if (a) {
      this.getActivePane().activate();
    }
    return item;
  }
  openURIInPane(mode, name) {
    return this.open(mode, {
      pane : name
    });
  }
  async createItemForURI(input, size) {
    if (input != null) {
      for (const googleImageSize of this.getOpeners()) {
        const n = googleImageSize(input, size);
        if (n != null) {
          return n;
        }
      }
    }
    try {
      const n = await this.openTextFile(input, size);
      return n;
    } catch (e) {
      switch(e.code) {
        case "CANCELLED":
          return Promise.resolve();
        case "EACCES":
          this.notificationManager.addWarning(`Permission denied '${e.path}'`);
          return Promise.resolve();
        case "EPERM":
        case "EBUSY":
        case "ENXIO":
        case "EIO":
        case "ENOTCONN":
        case "UNKNOWN":
        case "ECONNRESET":
        case "EINVAL":
        case "EMFILE":
        case "ENOTDIR":
        case "EAGAIN":
          this.notificationManager.addWarning(`Unable to open '${e.path != null ? e.path : input}'`, {
            detail : e.message
          });
          return Promise.resolve();
        default:
          throw e;
      }
    }
  }
  async openTextFile(id, args) {
    const filePath = this.project.resolvePath(id);
    if (filePath != null) {
      try {
        fs.closeSync(fs.openSync(filePath, "r"));
      } catch (e) {
        if (e.code !== "ENOENT") {
          throw e;
        }
      }
    }
    const n = fs.getSizeSync(filePath);
    if (n >= this.config.get("core.warnOnLargeFileLimit") * 1048576) {
      await new Promise((saveNotifs, disassociate) => {
        this.applicationDelegate.confirm({
          message : "Atom will be unresponsive during the loading of very large files.",
          detail : "Do you still want to load this file?",
          buttons : ["Proceed", "Cancel"]
        }, (canCreateDiscussions) => {
          if (canCreateDiscussions === 1) {
            const effect = new Error;
            effect.code = "CANCELLED";
            disassociate(effect);
          } else {
            saveNotifs();
          }
        });
      });
    }
    const positionBuffer = await this.project.bufferForPath(filePath, args);
    return this.textEditorRegistry.build(Object.assign({
      buffer : positionBuffer,
      autoHeight : false
    }, args));
  }
  handleGrammarUsed(e) {
    if (e == null) {
      return;
    }
    this.packageManager.triggerActivationHook(`${e.scopeName}:root-scope-used`);
    this.packageManager.triggerActivationHook(`${e.packageName}:grammar-used`);
  }
  isTextEditor(editor) {
    return editor instanceof TextEditor;
  }
  buildTextEditor(opts) {
    const pane = this.textEditorRegistry.build(opts);
    const noiseSynth = this.textEditorRegistry.maintainConfig(pane);
    pane.onDidDestroy(() => {
      return noiseSynth.dispose();
    });
    return pane;
  }
  reopenItem() {
    const internalOpenCallback = this.destroyedItemURIs.pop();
    if (internalOpenCallback) {
      return this.open(internalOpenCallback);
    } else {
      return Promise.resolve();
    }
  }
  addOpener(channel) {
    this.openers.push(channel);
    return new Disposable(() => {
      _.remove(this.openers, channel);
    });
  }
  getOpeners() {
    return this.openers;
  }
  getPaneItems() {
    return _.flatten(this.getPaneContainers().map((canCreateDiscussions) => {
      return canCreateDiscussions.getPaneItems();
    }));
  }
  getActivePaneItem() {
    return this.getActivePaneContainer().getActivePaneItem();
  }
  getTextEditors() {
    return this.getPaneItems().filter((editor) => {
      return editor instanceof TextEditor;
    });
  }
  getActiveTextEditor() {
    const editor = this.getCenter().getActivePaneItem();
    if (editor instanceof TextEditor) {
      return editor;
    }
  }
  saveAll() {
    this.getPaneContainers().forEach((configurator) => {
      configurator.saveAll();
    });
  }
  confirmClose(event) {
    return Promise.all(this.getPaneContainers().map((options) => {
      return options.confirmClose(event);
    })).then((fileListAccumulator) => {
      return !fileListAccumulator.includes(false);
    });
  }
  saveActivePaneItem() {
    return this.getCenter().getActivePane().saveActiveItem();
  }
  saveActivePaneItemAs() {
    this.getCenter().getActivePane().saveActiveItemAs();
  }
  destroyActivePaneItem() {
    return this.getActivePane().destroyActiveItem();
  }
  getActivePaneContainer() {
    return this.activePaneContainer;
  }
  getPanes() {
    return _.flatten(this.getPaneContainers().map((mPaneFactory) => {
      return mPaneFactory.getPanes();
    }));
  }
  getVisiblePanes() {
    return _.flatten(this.getVisiblePaneContainers().map((mPaneFactory) => {
      return mPaneFactory.getPanes();
    }));
  }
  getActivePane() {
    return this.getActivePaneContainer().getActivePane();
  }
  activateNextPane() {
    return this.getActivePaneContainer().activateNextPane();
  }
  activatePreviousPane() {
    return this.getActivePaneContainer().activatePreviousPane();
  }
  paneContainerForURI(uri) {
    return this.getPaneContainers().find((authenticatorProvider) => {
      return authenticatorProvider.paneForURI(uri);
    });
  }
  paneContainerForItem(type) {
    return this.getPaneContainers().find((aExpectedTarget) => {
      return aExpectedTarget.paneForItem(type);
    });
  }
  paneForURI(uri) {
    for (let zpm of this.getPaneContainers()) {
      const i = zpm.paneForURI(uri);
      if (i != null) {
        return i;
      }
    }
  }
  paneForItem(length) {
    for (let removedRelations of this.getPaneContainers()) {
      const i = removedRelations.paneForItem(length);
      if (i != null) {
        return i;
      }
    }
  }
  destroyActivePane() {
    const barMenuParentTop = this.getActivePane();
    if (barMenuParentTop != null) {
      barMenuParentTop.destroy();
    }
  }
  closeActivePaneItemOrEmptyPaneOrWindow() {
    if (this.getCenter().getActivePaneItem() != null) {
      this.getCenter().getActivePane().destroyActiveItem();
    } else {
      if (this.getCenter().getPanes().length > 1) {
        this.getCenter().destroyActivePane();
      } else {
        if (this.config.get("core.closeEmptyWindows")) {
          atom.close();
        }
      }
    }
  }
  increaseFontSize() {
    this.config.set("editor.fontSize", this.config.get("editor.fontSize") + 1);
  }
  decreaseFontSize() {
    const me7 = this.config.get("editor.fontSize");
    if (me7 > 1) {
      this.config.set("editor.fontSize", me7 - 1);
    }
  }
  resetFontSize() {
    this.config.set("editor.fontSize", this.config.get("editor.defaultFontSize"));
  }
  itemOpened(request) {
    let decrementAndRemove;
    if (typeof request.getURI === "function") {
      decrementAndRemove = request.getURI();
    } else {
      if (typeof request.getUri === "function") {
        decrementAndRemove = request.getUri();
      }
    }
    if (decrementAndRemove != null) {
      _.remove(this.destroyedItemURIs, decrementAndRemove);
    }
  }
  didDestroyPaneItem({
    item : item
  }) {
    let falseySection;
    if (typeof item.getURI === "function") {
      falseySection = item.getURI();
    } else {
      if (typeof item.getUri === "function") {
        falseySection = item.getUri();
      }
    }
    if (falseySection != null) {
      this.destroyedItemURIs.push(falseySection);
    }
  }
  destroyed() {
    this.paneContainers.center.destroy();
    this.paneContainers.left.destroy();
    this.paneContainers.right.destroy();
    this.paneContainers.bottom.destroy();
    this.cancelStoppedChangingActivePaneItemTimeout();
    if (this.activeItemSubscriptions != null) {
      this.activeItemSubscriptions.dispose();
    }
    if (this.element) {
      this.element.destroy();
    }
  }
  getCenter() {
    return this.paneContainers.center;
  }
  getLeftDock() {
    return this.paneContainers.left;
  }
  getRightDock() {
    return this.paneContainers.right;
  }
  getBottomDock() {
    return this.paneContainers.bottom;
  }
  getPaneContainers() {
    return [this.paneContainers.center, this.paneContainers.left, this.paneContainers.right, this.paneContainers.bottom];
  }
  getVisiblePaneContainers() {
    const prop2 = this.getCenter();
    return atom.workspace.getPaneContainers().filter((p) => {
      return p === prop2 || p.isVisible();
    });
  }
  getBottomPanels() {
    return this.getPanels("bottom");
  }
  addBottomPanel(mxcUrl) {
    return this.addPanel("bottom", mxcUrl);
  }
  getLeftPanels() {
    return this.getPanels("left");
  }
  addLeftPanel(index) {
    return this.addPanel("left", index);
  }
  getRightPanels() {
    return this.getPanels("right");
  }
  addRightPanel(name) {
    return this.addPanel("right", name);
  }
  getTopPanels() {
    return this.getPanels("top");
  }
  addTopPanel(mxcUrl) {
    return this.addPanel("top", mxcUrl);
  }
  getHeaderPanels() {
    return this.getPanels("header");
  }
  addHeaderPanel(mxcUrl) {
    return this.addPanel("header", mxcUrl);
  }
  getFooterPanels() {
    return this.getPanels("footer");
  }
  addFooterPanel(mxcUrl) {
    return this.addPanel("footer", mxcUrl);
  }
  getModalPanels() {
    return this.getPanels("modal");
  }
  addModalPanel(addType = {}) {
    return this.addPanel("modal", addType);
  }
  panelForItem(length) {
    for (let indexLookupKey in this.panelContainers) {
      const removedRelations = this.panelContainers[indexLookupKey];
      const itemPanel = removedRelations.panelForItem(length);
      if (itemPanel != null) {
        return itemPanel;
      }
    }
    return null;
  }
  getPanels(editor) {
    return this.panelContainers[editor].getPanels();
  }
  addPanel(options, name) {
    if (name == null) {
      name = {};
    }
    return this.panelContainers[options].addPanel(new Panel(name, this.viewRegistry));
  }
  scan(start, s = {}, cb) {
    if (_.isFunction(s)) {
      cb = s;
      s = {};
    }
    const d = new Map;
    for (const data of this.project.getDirectories()) {
      let e = s.ripgrep ? this.ripgrepDirectorySearcher : this.scandalDirectorySearcher;
      for (const s of this.directorySearchers) {
        if (s.canSearchDirectory(data)) {
          e = s;
          break;
        }
      }
      let hours = d.get(e);
      if (!hours) {
        hours = [];
        d.set(e, hours);
      }
      hours.push(data);
    }
    let f;
    if (_.isFunction(s.onPathsSearched)) {
      const ko_unwrap = s.onPathsSearched;
      let value = 0;
      const row = new Map;
      f = function(token, key) {
        const paddingFromBottomOfGraph = row.get(token);
        if (paddingFromBottomOfGraph) {
          value = value - paddingFromBottomOfGraph;
        }
        row.set(token, key);
        value = value + key;
        return ko_unwrap(value);
      };
    } else {
      f = function() {
      };
    }
    const a = [];
    d.forEach((session, d) => {
      const value = {
        inclusions : s.paths || [],
        includeHidden : true,
        excludeVcsIgnores : this.config.get("core.excludeVcsIgnoredPaths"),
        exclusions : this.config.get("core.ignoredNames"),
        follow : this.config.get("core.followSymlinks"),
        leadingContextLineCount : s.leadingContextLineCount || 0,
        trailingContextLineCount : s.trailingContextLineCount || 0,
        PCRE2 : s.PCRE2,
        didMatch : (module) => {
          if (!this.project.isPathModified(module.filePath)) {
            return cb(module);
          }
        },
        didError(error) {
          return cb(null, error);
        },
        didSearchPaths(proto) {
          return f(d, proto);
        }
      };
      const COMPAT_ARG = d.search(session, start, value);
      a.push(COMPAT_ARG);
    });
    const string = Promise.all(a);
    for (let textEditor of this.project.getBuffers()) {
      if (textEditor.isModified()) {
        const url = textEditor.getPath();
        if (!this.project.contains(url)) {
          continue;
        }
        var matches = [];
        textEditor.scan(start, (elem) => {
          return matches.push(elem);
        });
        if (matches.length > 0) {
          cb({
            filePath : url,
            matches : matches
          });
        }
      }
    }
    let h = false;
    const promise = new Promise((cb, qrcodeError) => {
      const getHistory = function() {
        if (h) {
          cb("cancelled");
        } else {
          cb(null);
        }
      };
      const scan = function(e) {
        for (let e of a) {
          e.cancel();
        }
        qrcodeError(e);
      };
      string.then(getHistory, scan);
    });
    promise.cancel = () => {
      h = true;
      a.map((gracePeriodService) => {
        return gracePeriodService.cancel();
      });
    };
    return promise;
  }
  replace(a, e, value, cb) {
    return new Promise((parse, canCreateDiscussions) => {
      let i;
      const conflictingChanges = this.project.getBuffers().map((linestring) => {
        return linestring.getPath();
      });
      const next = _.difference(value, conflictingChanges);
      let inPropName = !conflictingChanges.length;
      let r = !next.length;
      const _getArray = () => {
        if (r && inPropName) {
          parse();
        }
      };
      if (!r.length) {
        let options = "g";
        if (a.multiline) {
          options = options + "m";
        }
        if (a.ignoreCase) {
          options = options + "i";
        }
        const qstream = Task.once(require.resolve("./replace-handler"), next, a.source, options, e, () => {
          r = true;
          _getArray();
        });
        qstream.on("replace:path-replaced", cb);
        qstream.on("replace:file-error", (formattedSections) => {
          cb(null, formattedSections);
        });
      }
      for (i of this.project.getBuffers()) {
        if (!value.includes(i.getPath())) {
          continue;
        }
        const replacements = i.replace(a, e, cb);
        if (replacements) {
          cb({
            filePath : i.getPath(),
            replacements : replacements
          });
        }
      }
      inPropName = true;
      _getArray();
    });
  }
  checkoutHeadRevision(action) {
    if (action.getPath()) {
      const repositoryForEditorPath = async() => {
        const ParameterParserService = await this.project.repositoryForDirectory(new Directory(action.getDirectoryPath()));
        if (ParameterParserService) {
          ParameterParserService.checkoutHeadForEditor(action);
        }
      };
      if (this.config.get("editor.confirmCheckoutHeadRevision")) {
        this.applicationDelegate.confirm({
          message : "Confirm Checkout HEAD Revision",
          detail : `Are you sure you want to discard all changes to "${action.getFileName()}" since the last Git commit?`,
          buttons : ["OK", "Cancel"]
        }, (canCreateDiscussions) => {
          if (canCreateDiscussions === 0) {
            repositoryForEditorPath();
          }
        });
      } else {
        repositoryForEditorPath();
      }
    }
  }
};

