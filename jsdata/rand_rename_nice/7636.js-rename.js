'use strict';
import Vue from "vue";
describe("Options _scopeId", () => {
  it("should add scopeId attributes", () => {
    const $neoTabs = (new Vue({
      _scopeId : "foo",
      template : "<div><p><span></span></p></div>"
    })).$mount();
    expect($neoTabs.$el.hasAttribute("foo")).toBe(true);
    expect($neoTabs.$el.children[0].hasAttribute("foo")).toBe(true);
    expect($neoTabs.$el.children[0].children[0].hasAttribute("foo")).toBe(true);
  });
  it("should add scopedId attributes from both parent and child on child root", () => {
    const $neoTabs = (new Vue({
      _scopeId : "foo",
      template : "<div><child></child></div>",
      components : {
        child : {
          _scopeId : "bar",
          template : "<div></div>"
        }
      }
    })).$mount();
    expect($neoTabs.$el.children[0].hasAttribute("foo")).toBe(true);
    expect($neoTabs.$el.children[0].hasAttribute("bar")).toBe(true);
  });
  it("should add scopedId attributes from both parent and child on slot contents", () => {
    const $neoTabs = (new Vue({
      _scopeId : "foo",
      template : "<div><child><p>hi</p></child></div>",
      components : {
        child : {
          _scopeId : "bar",
          template : "<div><slot></slot></div>"
        }
      }
    })).$mount();
    expect($neoTabs.$el.children[0].children[0].hasAttribute("foo")).toBe(true);
    expect($neoTabs.$el.children[0].children[0].hasAttribute("bar")).toBe(true);
  });
  it("should not discard parent scopeId when component root element is replaced", (e) => {
    const vm = (new Vue({
      _scopeId : "data-1",
      template : `<div><child ref="child" /></div>`,
      components : {
        child : {
          _scopeId : "data-2",
          data : () => {
            return {
              show : true
            };
          },
          template : '<div v-if="show"></div>'
        }
      }
    })).$mount();
    const ConcatBehaviour = vm.$refs.child;
    expect(ConcatBehaviour.$el.hasAttribute("data-1")).toBe(true);
    expect(ConcatBehaviour.$el.hasAttribute("data-2")).toBe(true);
    ConcatBehaviour.show = false;
    waitForUpdate(() => {
      ConcatBehaviour.show = true;
    }).then(() => {
      expect(ConcatBehaviour.$el.hasAttribute("data-1")).toBe(true);
      expect(ConcatBehaviour.$el.hasAttribute("data-2")).toBe(true);
    }).then(e);
  });
  it("should work on functional components", () => {
    const passwordHintLabel = {
      functional : true,
      _scopeId : "child",
      render(e) {
        return e("div", {
          class : "child"
        }, [e("span", {
          class : "child"
        }, "child")]);
      }
    };
    const WorkerDomAdapter = (new Vue({
      _scopeId : "parent",
      components : {
        child : passwordHintLabel
      },
      template : "<div><child></child></div>"
    })).$mount();
    expect(WorkerDomAdapter.$el.hasAttribute("parent")).toBe(true);
    const _Function_call_ = WorkerDomAdapter.$el.querySelectorAll(".child");
    [].forEach.call(_Function_call_, (e) => {
      expect(e.hasAttribute("child")).toBe(true);
      expect(e.hasAttribute("parent")).toBe(false);
    });
  });
});
