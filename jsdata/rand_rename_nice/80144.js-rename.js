'use strict';
import{
  findVmByVueId as findVmByVueId
}from "../../../mp-weixin/runtime/wrapper/util";
const mocks = ["__route__", "__webviewId__", "__nodeid__", "__nodeId__"];
export{
  mocks as mocks
};
function isPage() {
  return this.__nodeid__ === 0 || this.__nodeId__ === 0;
}
export{
  isPage as isPage
};
function OnScreen(me) {
  const o = me.$scope;
  const e = parseInt(tt.getSystemInfoSync().SDKVersion.split(".")[1]);
  if (e > 16) {
    Object.defineProperty(me, "$refs", {
      get() {
        const errors = {};
        const pipelets = o.selectAllComponents(".vue-ref");
        pipelets.forEach((model) => {
          const name = model.dataset.ref;
          errors[name] = model.$vm || model;
        });
        const trytes = o.selectAllComponents(".vue-ref-in-for");
        trytes.forEach((self) => {
          const questionId = self.dataset.ref;
          if (!errors[questionId]) {
            errors[questionId] = [];
          }
          errors[questionId].push(self.$vm || self);
        });
        return errors;
      }
    });
  } else {
    o.selectAllComponents(".vue-ref", (wrappersTemplates) => {
      wrappersTemplates.forEach((model) => {
        const name = model.dataset.ref;
        me.$refs[name] = model.$vm || model;
      });
    });
    o.selectAllComponents(".vue-ref-in-for", (wrappersTemplates) => {
      wrappersTemplates.forEach((self) => {
        const name = self.dataset.ref;
        if (!me.$refs[name]) {
          me.$refs[name] = [];
        }
        me.$refs[name].push(self.$vm || self);
      });
    });
  }
}
export{
  OnScreen as initRefs
};
const rom = Object.create(null);
export{
  rom as instances
};
function Directive({
  vuePid : appManagement,
  mpInstance : auth
}) {
  const i = (auth.__nodeId__ || auth.__nodeid__) + "";
  const id = auth.__webviewId__ + "";
  rom[id + "_" + i] = auth.$vm;
  this.triggerEvent("__l", {
    vuePid : appManagement,
    nodeId : i,
    webviewId : id
  });
}
export{
  Directive as initRelation
};
function _init({
  detail : {
    vuePid : type,
    nodeId : id,
    webviewId : file
  }
}) {
  const self = rom[file + "_" + id];
  if (!self) {
    return;
  }
  let parent;
  if (type) {
    parent = findVmByVueId(this.$vm, type);
  }
  if (!parent) {
    parent = this.$vm;
  }
  self.$parent = parent;
  self.$root = parent.$root;
  parent.$children.push(self);
  self.__call_hook("created");
  self.__call_hook("beforeMount");
  self._isMounted = true;
  self.__call_hook("mounted");
  self.__call_hook("onReady");
}
export{
  _init as handleLink
};

