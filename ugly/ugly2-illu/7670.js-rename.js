import Vue from "vue";describe("Global API: mixin", () => {
  var e;
  beforeEach(() => {
    e = Vue.options;
  });afterEach(() => {
    Vue.options = e;
  });it("should work", () => {
    const e = jasmine.createSpy("global mixin");
    Vue.mixin({ created() {
        e(this.$options.myOption);
      } });new Vue({ myOption: "hello" });expect(e).toHaveBeenCalledWith("hello");
  });it("should work for constructors created before mixin is applied", () => {
    const e = [];
    const t = Vue.extend({ name: "test", beforeCreate() {
        e.push(this.$options.myOption + " local");
      } });
    Vue.mixin({ beforeCreate() {
        e.push(this.$options.myOption + " global");
      } });expect(t.options.name).toBe("test");new t({ myOption: "hello" });expect(e).toEqual(["hello global", "hello local"]);
  });it("should work for global props", () => {
    const e = Vue.extend({ template: `<div>{{ prop }}</div>` });
    Vue.mixin({ props: ["prop"] });const t = new Vue({ template: "<test prop=\"hi\"></test>", components: { Test: e } }).$mount();
    expect(t.$el.textContent).toBe("hi");
  });it("should not drop late-set render functions", () => {
    const t = Vue.extend({});
    t.options.render = e => e("div", "hello");Vue.mixin({});const e = new Vue({ render: e => e(t) }).$mount();
    expect(e.$el.textContent).toBe("hello");
  });it("should not drop scopedId", () => {
    const e = Vue.extend({});
    e.options._scopeId = "foo";Vue.mixin({});const t = new e({ template: "<div><p>hi</p></div>" }).$mount();
    expect(t.$el.children[0].hasAttribute("foo")).toBe(true);
  });it("should not drop late-attached custom options on existing constructors", () => {
    const e = jasmine.createSpy("base");
    const t = Vue.extend({ beforeCreate: e });
    const o = t.extend({});
    o.options.computed = { $style: () => 123 };const n = jasmine.createSpy("late attached");
    o.options.beforeCreate = o.options.beforeCreate.concat(n);const i = jasmine.createSpy("mixin");
    Vue.mixin({ beforeCreate: i });const s = new o({ template: "<div>{{ $style }}</div>" }).$mount();
    expect(n.calls.count()).toBe(1);expect(e.calls.count()).toBe(1);expect(i.calls.count()).toBe(1);expect(s.$el.textContent).toBe("123");expect(s.$style).toBe(123);expect(o.options.computed.$style()).toBe(123);expect(o.options.beforeCreate).toEqual([jasmine.createSpy("mixin"), jasmine.createSpy("base"), jasmine.createSpy("late attached")]);
  });it("should work for a constructor mixin", () => {
    const e = jasmine.createSpy("global mixin");
    const t = Vue.extend({ created() {
        e(this.$options.myOption);
      } });
    Vue.mixin(t);new Vue({ myOption: "hello" });expect(e).toHaveBeenCalledWith("hello");
  });it("should not drop original lifecycle hooks", () => {
    const e = jasmine.createSpy("base");
    const t = Vue.extend({ beforeCreate: e });
    const o = jasmine.createSpy("injected");
    t.options.beforeCreate = t.options.beforeCreate.concat(o);Vue.mixin({});new t({});expect(e).toHaveBeenCalled();expect(o).toHaveBeenCalled();
  });it("chain call", () => {
    expect(Vue.mixin({})).toBe(Vue);
  });it("should not mix global mixin lifecycle hook twice", () => {
    const e = jasmine.createSpy("global mixed in lifecycle hook");
    Vue.mixin({ created: e });const t = Vue.extend({ methods: { a() {} } });
    const o = Vue.extend({ mixins: [Vue.extend({ methods: { a() {} } })] });
    const n = Vue.extend({ mixins: [Vue.extend({ mixins: [Vue.extend({ methods: { a() {} } })] })] });
    const i = new n();
    expect(typeof i.$options.methods.a).toBe("function");expect(e.calls.count()).toBe(1);
  });
});
