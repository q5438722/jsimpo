const CommandRegistry = require("../src/command-registry");

const _ = require("underscore-plus");

describe("CommandRegistry", () => {
  var n;
  var t;
  var d;
  var o;
  beforeEach(() => {
    t = document.createElement("div");d = document.createElement("div");o = document.createElement("div");t.classList.add("parent");d.classList.add("child");o.classList.add("grandchild");d.appendChild(o);t.appendChild(d);document.querySelector("#jasmine-content").appendChild(t);n = new CommandRegistry();n.attach(t);
  });afterEach(() => n.destroy());describe("when a command event is dispatched on an element", () => {
    it("invokes callbacks with selectors matching the target", () => {
      var a = false;
      n.add(".grandchild", "command", function (e) {
        expect(this).toBe(o);expect(e.type).toBe("command");expect(e.eventPhase).toBe(Event.BUBBLING_PHASE);expect(e.target).toBe(o);expect(e.currentTarget).toBe(o);a = true;
      });o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(a).toBe(true);
    });it("invokes callbacks with selectors matching ancestors of the target", () => {
      const a = [];
      n.add(".child", "command", function (e) {
        expect(this).toBe(d);expect(e.target).toBe(o);expect(e.currentTarget).toBe(d);a.push("child");
      });n.add(".parent", "command", function (e) {
        expect(this).toBe(t);expect(e.target).toBe(o);expect(e.currentTarget).toBe(t);a.push("parent");
      });o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(a).toEqual(["child", "parent"]);
    });it("invokes inline listeners prior to listeners applied via selectors", () => {
      const e = ["grandchild", "child-inline", "child", "parent"];
      o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(e).toEqual(["grandchild", "child-inline", "child", "parent"]);
    });it("orders multiple matching listeners for an element by selector specificity", () => {
      d.classList.add("foo", "bar");const e = [".foo.bar", ".foo", ".bar"];
      o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(e).toEqual([".foo.bar", ".bar", ".foo"]);
    });it("orders inline listeners by reverse registration order", () => {
      const e = ["child1", "child2"];
      d.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(e).toEqual(["child2", "child1"]);
    });it("stops bubbling through ancestors when .stopPropagation() is called on the event", () => {
      const a = ["parent", "child-2"];
      n.add(".child", "command", e => {
        a.push("child-1");e.stopPropagation();
      });const e = new CustomEvent("command", { bubbles: true });
      spyOn(e, "stopPropagation");o.dispatchEvent(e);expect(a).toEqual(["child-1", "child-2"]);expect(e.stopPropagation).toHaveBeenCalled();
    });it("stops invoking callbacks when .stopImmediatePropagation() is called on the event", () => {
      const a = ["parent", "child-2"];
      n.add(".child", "command", e => {
        a.push("child-1");e.stopImmediatePropagation();
      });const e = new CustomEvent("command", { bubbles: true });
      spyOn(e, "stopImmediatePropagation");o.dispatchEvent(e);expect(a).toEqual(["child-1"]);expect(e.stopImmediatePropagation).toHaveBeenCalled();
    });it("forwards .preventDefault() calls from the synthetic event to the original", () => {
      n.add(".child", "command", e => e.preventDefault());const e = new CustomEvent("command", { bubbles: true });
      spyOn(e, "preventDefault");o.dispatchEvent(e);expect(e.preventDefault).toHaveBeenCalled();
    });it("forwards .abortKeyBinding() calls from the synthetic event to the original", () => {
      n.add(".child", "command", e => e.abortKeyBinding());const e = new CustomEvent("command", { bubbles: true });
      e.abortKeyBinding = jasmine.createSpy("abortKeyBinding");o.dispatchEvent(e);expect(e.abortKeyBinding).toHaveBeenCalled();
    });it("copies non-standard properties from the original event to the synthetic event", () => {
      var a = null;
      n.add(".child", "command", e => a = e);const e = new CustomEvent("command", { bubbles: true });
      e.nonStandardProperty = "testing";o.dispatchEvent(e);expect(a.nonStandardProperty).toBe("testing");
    });it("allows listeners to be removed via a disposable returned by ::add", () => {
      var e = ["parent", "child"];
      a.dispose();o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(e).toEqual(["child"]);e = [];t.dispose();o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(e).toEqual([]);
    });it("allows multiple commands to be registered under one selector when called with an object", () => {
      var e = [];
      const a = n.add(".child", { "command-1"() {
          e.push("command-1");
        }, "command-2"() {
          e.push("command-2");
        } });
      o.dispatchEvent(new CustomEvent("command-1", { bubbles: true }));o.dispatchEvent(new CustomEvent("command-2", { bubbles: true }));expect(e).toEqual(["command-1", "command-2"]);e = [];a.dispose();o.dispatchEvent(new CustomEvent("command-1", { bubbles: true }));o.dispatchEvent(new CustomEvent("command-2", { bubbles: true }));expect(e).toEqual([]);
    });it("invokes callbacks registered with ::onWillDispatch and ::onDidDispatch", () => {
      const a = [["onDidDispatch", e], ["listener", e], ["onWillDispatch", e]];
      o.dispatchEvent(new CustomEvent("command", { bubbles: true }));expect(a[0][0]).toBe("onWillDispatch");expect(a[1][0]).toBe("listener");expect(a[2][0]).toBe("onDidDispatch");expect(a[0][1] === a[1][1] && a[1][1] === a[2][1]).toBe(true);expect(a[0][1].constructor).toBe(CustomEvent);expect(a[0][1].target).toBe(o);
    });
  });describe("::add(selector, commandName, callback)", () => {
    it("throws an error when called with an invalid selector", () => {
      const e = "<>";
      var a = null;
      try {
        n.add(e, "foo:bar", () => {});
      } catch (e) {
        a = e;
      }expect(a.message).toContain(e);
    });it("throws an error when called with a null callback and selector target", () => {
      const e = null;
      expect(() => {
        n.add(".selector", "foo:bar", e);
      }).toThrow(new Error("Cannot register a command with a null listener."));
    });it("throws an error when called with a null callback and object target", () => {
      const e = null;
      expect(() => {
        n.add(document.body, "foo:bar", e);
      }).toThrow(new Error("Cannot register a command with a null listener."));
    });it("throws an error when called with an object listener without a didDispatch method", () => {
      const e = { title: "a listener without a didDispatch callback", description: "this should throw an error" };
      expect(() => {
        n.add(document.body, "foo:bar", e);
      }).toThrow(new Error("Listener must be a callback function or an object with a didDispatch method."));
    });
  });describe("::findCommands({target})", () => {
    it("returns command descriptors that can be invoked on the target or its ancestors", () => {
      n.add(".parent", "namespace:command-1", () => {});n.add(".child", "namespace:command-2", () => {});n.add(".grandchild", "namespace:command-3", () => {});n.add(".grandchild.no-match", "namespace:command-4", () => {});n.add(o, "namespace:inline-command-1", () => {});n.add(d, "namespace:inline-command-2", () => {});const e = n.findCommands({ target: o });

      const a = _.reject(e, e => e.jQuery);

      expect(a).toEqual([{ name: "namespace:inline-command-1", displayName: "Namespace: Inline Command 1" }, { name: "namespace:command-3", displayName: "Namespace: Command 3" }, { name: "namespace:inline-command-2", displayName: "Namespace: Inline Command 2" }, { name: "namespace:command-2", displayName: "Namespace: Command 2" }, { name: "namespace:command-1", displayName: "Namespace: Command 1" }]);
    });it("returns command descriptors with arbitrary metadata if set in a listener object", () => {
      n.add(".grandchild", "namespace:command-1", () => {});n.add(".grandchild", "namespace:command-2", { displayName: "Custom Command 2", metadata: { some: "other", object: "data" }, didDispatch() {} });n.add(".grandchild", "namespace:command-3", { name: "some:other:incorrect:commandname", displayName: "Custom Command 3", metadata: { some: "other", object: "data" }, didDispatch() {} });const e = n.findCommands({ target: o });
      expect(e).toEqual([{ displayName: "Namespace: Command 1", name: "namespace:command-1" }, { displayName: "Custom Command 2", metadata: { some: "other", object: "data" }, name: "namespace:command-2" }, { displayName: "Custom Command 3", metadata: { some: "other", object: "data" }, name: "namespace:command-3" }]);
    });it("returns command descriptors with arbitrary metadata if set on a listener function", () => {
      function e() {}e.displayName = "Custom Command 2";e.metadata = { some: "other", object: "data" };n.add(".grandchild", "namespace:command-2", e);const a = n.findCommands({ target: o });
      expect(a).toEqual([{ displayName: "Custom Command 2", metadata: { some: "other", object: "data" }, name: "namespace:command-2" }]);
    });
  });describe("::dispatch(target, commandName)", () => {
    it("simulates invocation of the given command ", () => {
      var a = false;
      n.add(".grandchild", "command", function (e) {
        expect(this).toBe(o);expect(e.type).toBe("command");expect(e.eventPhase).toBe(Event.BUBBLING_PHASE);expect(e.target).toBe(o);expect(e.currentTarget).toBe(o);a = true;
      });n.dispatch(o, "command");expect(a).toBe(true);
    });it("returns a promise if any listeners matched the command", () => {
      n.add(".grandchild", "command", () => {});expect(n.dispatch(o, "command").constructor.name).toBe("Promise");expect(n.dispatch(o, "bogus")).toBe(null);expect(n.dispatch(t, "command")).toBe(null);
    });it("returns a promise that resolves when the listeners resolve", async () => {
      jasmine.useRealClock();n.add(".grandchild", "command", () => 1);n.add(".grandchild", "command", () => Promise.resolve(2));n.add(".grandchild", "command", () => new Promise(e => {
        setTimeout(() => {
          e(3);
        }, 1);
      }));const e = await n.dispatch(o, "command");
      expect(e).toEqual([3, 2, 1]);
    });it("returns a promise that rejects when a listener is rejected", async () => {
      jasmine.useRealClock();n.add(".grandchild", "command", () => 1);n.add(".grandchild", "command", () => Promise.resolve(2));n.add(".grandchild", "command", () => new Promise((e, a) => {
        setTimeout(() => {
          a(3);
        }, 1);
      }));var a;
      try {
        a = await n.dispatch(o, "command");
      } catch (e) {
        a = e;
      }expect(a).toBe(3);
    });
  });describe("::getSnapshot and ::restoreSnapshot", () => it("removes all command handlers except for those in the snapshot", () => {
    n.add(".parent", "namespace:command-1", () => {});n.add(".child", "namespace:command-2", () => {});const e = n.getSnapshot();
    n.add(".grandchild", "namespace:command-3", () => {});expect(n.findCommands({ target: o }).slice(0, 3)).toEqual([{ name: "namespace:command-3", displayName: "Namespace: Command 3" }, { name: "namespace:command-2", displayName: "Namespace: Command 2" }, { name: "namespace:command-1", displayName: "Namespace: Command 1" }]);n.restoreSnapshot(e);expect(n.findCommands({ target: o }).slice(0, 2)).toEqual([{ name: "namespace:command-2", displayName: "Namespace: Command 2" }, { name: "namespace:command-1", displayName: "Namespace: Command 1" }]);n.add(".grandchild", "namespace:command-3", () => {});n.restoreSnapshot(e);expect(n.findCommands({ target: o }).slice(0, 2)).toEqual([{ name: "namespace:command-2", displayName: "Namespace: Command 2" }, { name: "namespace:command-1", displayName: "Namespace: Command 1" }]);
  }));describe("::attach(rootNode)", () => it("adds event listeners for any previously-added commands", () => {
    const e = new CommandRegistry();
    const a = jasmine.createSpy("command-callback");
    e.add(".grandchild", "command-1", a);o.dispatchEvent(new CustomEvent("command-1", { bubbles: true }));expect(a).not.toHaveBeenCalled();e.attach(t);o.dispatchEvent(new CustomEvent("command-1", { bubbles: true }));expect(a).toHaveBeenCalled();
  }));
});
