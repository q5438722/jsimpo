'use strict';
import Offcanvas from "../../src/offcanvas";
import EventHandler from "../../src/dom/event-handler";
import{
  clearBodyAndDocument as clearBodyAndDocument,
  clearFixture as clearFixture,
  createEvent as createEvent,
  getFixture as getFixture,
  jQueryMock as jQueryMock
}from "../helpers/fixture";
import{
  isVisible as isVisible
}from "../../src/util";
import ScrollBarHelper from "../../src/util/scrollbar";
describe("Offcanvas", () => {
  let div;
  beforeAll(() => {
    div = getFixture();
  });
  afterEach(() => {
    clearFixture();
    document.body.classList.remove("offcanvas-open");
    clearBodyAndDocument();
  });
  beforeEach(() => {
    clearBodyAndDocument();
  });
  describe("VERSION", () => {
    it("should return plugin version", () => {
      expect(Offcanvas.VERSION).toEqual(jasmine.any(String));
    });
  });
  describe("Default", () => {
    it("should return plugin default config", () => {
      expect(Offcanvas.Default).toEqual(jasmine.any(Object));
    });
  });
  describe("DATA_KEY", () => {
    it("should return plugin data key", () => {
      expect(Offcanvas.DATA_KEY).toEqual("bs.offcanvas");
    });
  });
  describe("constructor", () => {
    it('should call hide when a element with data-bs-dismiss="offcanvas" is clicked', () => {
      div.innerHTML = ['<div class="offcanvas">', '  <a href="#" data-bs-dismiss="offcanvas">Close</a>', "</div>"].join("");
      const e = div.querySelector(".offcanvas");
      const imgchk = div.querySelector("a");
      const component = new Offcanvas(e);
      spyOn(component, "hide");
      imgchk.click();
      expect(component._config.keyboard).toBe(true);
      expect(component.hide).toHaveBeenCalled();
    });
    it("should hide if esc is pressed", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const e = div.querySelector(".offcanvas");
      const lineComponent1 = new Offcanvas(e);
      const a = createEvent("keydown");
      a.key = "Escape";
      spyOn(lineComponent1, "hide");
      e.dispatchEvent(a);
      expect(lineComponent1.hide).toHaveBeenCalled();
    });
    it("should not hide if esc is not pressed", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const e = div.querySelector(".offcanvas");
      const lineComponent1 = new Offcanvas(e);
      const a = createEvent("keydown");
      a.key = "Tab";
      spyOn(lineComponent1, "hide");
      document.dispatchEvent(a);
      expect(lineComponent1.hide).not.toHaveBeenCalled();
    });
    it("should not hide if esc is pressed but with keyboard = false", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const e = div.querySelector(".offcanvas");
      const component = new Offcanvas(e, {
        keyboard : false
      });
      const a = createEvent("keydown");
      a.key = "Escape";
      spyOn(component, "hide");
      document.dispatchEvent(a);
      expect(component._config.keyboard).toBe(false);
      expect(component.hide).not.toHaveBeenCalled();
    });
  });
  describe("config", () => {
    it("should have default values", () => {
      div.innerHTML = ['<div class="offcanvas">', "</div>"].join("");
      const e = div.querySelector(".offcanvas");
      const self = new Offcanvas(e);
      expect(self._config.backdrop).toEqual(true);
      expect(self._backdrop._config.isVisible).toEqual(true);
      expect(self._config.keyboard).toEqual(true);
      expect(self._config.scroll).toEqual(false);
    });
    it("should read data attributes and override default config", () => {
      div.innerHTML = ['<div class="offcanvas" data-bs-scroll="true" data-bs-backdrop="false"  data-bs-keyboard="false">', "</div>"].join("");
      const e = div.querySelector(".offcanvas");
      const self = new Offcanvas(e);
      expect(self._config.backdrop).toEqual(false);
      expect(self._backdrop._config.isVisible).toEqual(false);
      expect(self._config.keyboard).toEqual(false);
      expect(self._config.scroll).toEqual(true);
    });
    it("given a config object must override data attributes", () => {
      div.innerHTML = ['<div class="offcanvas" data-bs-scroll="true" data-bs-backdrop="false"  data-bs-keyboard="false">', "</div>"].join("");
      const e = div.querySelector(".offcanvas");
      const self = new Offcanvas(e, {
        backdrop : true,
        keyboard : true,
        scroll : false
      });
      expect(self._config.backdrop).toEqual(true);
      expect(self._config.keyboard).toEqual(true);
      expect(self._config.scroll).toEqual(false);
    });
  });
  describe("options", () => {
    it("if scroll is enabled, should allow body to scroll while offcanvas is open", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      spyOn(ScrollBarHelper.prototype, "hide").and.callThrough();
      spyOn(ScrollBarHelper.prototype, "reset").and.callThrough();
      const _portletRow = div.querySelector(".offcanvas");
      const $innerblock = new Offcanvas(_portletRow, {
        scroll : true
      });
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        expect(ScrollBarHelper.prototype.hide).not.toHaveBeenCalled();
        $innerblock.hide();
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        expect(ScrollBarHelper.prototype.reset).not.toHaveBeenCalled();
        saveNotifs();
      });
      $innerblock.show();
    });
    it("if scroll is disabled, should call ScrollBarHelper to handle scrollBar on body", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      spyOn(ScrollBarHelper.prototype, "hide").and.callThrough();
      spyOn(ScrollBarHelper.prototype, "reset").and.callThrough();
      const _portletRow = div.querySelector(".offcanvas");
      const $innerblock = new Offcanvas(_portletRow, {
        scroll : false
      });
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        expect(ScrollBarHelper.prototype.hide).toHaveBeenCalled();
        $innerblock.hide();
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        expect(ScrollBarHelper.prototype.reset).toHaveBeenCalled();
        saveNotifs();
      });
      $innerblock.show();
    });
    it("should hide a shown element if user click on backdrop", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const _portletRow = div.querySelector("div");
      const _this = new Offcanvas(_portletRow, {
        backdrop : true
      });
      const event = document.createEvent("MouseEvents");
      event.initEvent("mousedown", true, true);
      spyOn(_this._backdrop._config, "clickCallback").and.callThrough();
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        expect(typeof _this._backdrop._config.clickCallback).toBe("function");
        _this._backdrop._getElement().dispatchEvent(event);
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        expect(_this._backdrop._config.clickCallback).toHaveBeenCalled();
        saveNotifs();
      });
      _this.show();
    });
    it("should not trap focus if scroll is allowed", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const _portletRow = div.querySelector(".offcanvas");
      const myDatepicker = new Offcanvas(_portletRow, {
        scroll : true
      });
      spyOn(myDatepicker._focustrap, "activate").and.callThrough();
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        expect(myDatepicker._focustrap.activate).not.toHaveBeenCalled();
        saveNotifs();
      });
      myDatepicker.show();
    });
  });
  describe("toggle", () => {
    it("should call show method if show class is not present", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const e = div.querySelector(".offcanvas");
      const barLine = new Offcanvas(e);
      spyOn(barLine, "show");
      barLine.toggle();
      expect(barLine.show).toHaveBeenCalled();
    });
    it("should call hide method if show class is present", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const speedDial = div.querySelector(".offcanvas");
      const barLine = new Offcanvas(speedDial);
      barLine.show();
      expect(speedDial.classList.contains("show")).toBe(true);
      spyOn(barLine, "hide");
      barLine.toggle();
      expect(barLine.hide).toHaveBeenCalled();
    });
  });
  describe("show", () => {
    it("should do nothing if already shown", () => {
      div.innerHTML = '<div class="offcanvas show"></div>';
      const speedDial = div.querySelector("div");
      const _this = new Offcanvas(speedDial);
      _this.show();
      expect(speedDial.classList.contains("show")).toBe(true);
      spyOn(_this._backdrop, "show").and.callThrough();
      spyOn(EventHandler, "trigger").and.callThrough();
      _this.show();
      expect(EventHandler.trigger).not.toHaveBeenCalled();
      expect(_this._backdrop.show).not.toHaveBeenCalled();
    });
    it("should show a hidden element", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const dataLimitInput = div.querySelector("div");
      const _this = new Offcanvas(dataLimitInput);
      spyOn(_this._backdrop, "show").and.callThrough();
      dataLimitInput.addEventListener("shown.bs.offcanvas", () => {
        expect(dataLimitInput.classList.contains("show")).toEqual(true);
        expect(_this._backdrop.show).toHaveBeenCalled();
        saveNotifs();
      });
      _this.show();
    });
    it("should not fire shown when show is prevented", (hasClass) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const _portletRow = div.querySelector("div");
      const _this = new Offcanvas(_portletRow);
      spyOn(_this._backdrop, "show").and.callThrough();
      const setActive = () => {
        setTimeout(() => {
          expect(_this._backdrop.show).not.toHaveBeenCalled();
          hasClass();
        }, 10);
      };
      _portletRow.addEventListener("show.bs.offcanvas", (event) => {
        event.preventDefault();
        setActive();
      });
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        throw new Error("should not fire shown event");
      });
      _this.show();
    });
    it('on window load, should make visible an offcanvas element, if its markup contains class "show"', (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas show"></div>';
      const password = div.querySelector("div");
      spyOn(Offcanvas.prototype, "show").and.callThrough();
      password.addEventListener("shown.bs.offcanvas", () => {
        saveNotifs();
      });
      window.dispatchEvent(createEvent("load"));
      const item0Height = Offcanvas.getInstance(password);
      expect(item0Height).not.toBeNull();
      expect(Offcanvas.prototype.show).toHaveBeenCalled();
    });
    it("should trap focus", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const _portletRow = div.querySelector(".offcanvas");
      const myDatepicker = new Offcanvas(_portletRow);
      spyOn(myDatepicker._focustrap, "activate").and.callThrough();
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        expect(myDatepicker._focustrap.activate).toHaveBeenCalled();
        saveNotifs();
      });
      myDatepicker.show();
    });
  });
  describe("hide", () => {
    it("should do nothing if already shown", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      spyOn(EventHandler, "trigger").and.callThrough();
      const e = div.querySelector("div");
      const _this = new Offcanvas(e);
      spyOn(_this._backdrop, "hide").and.callThrough();
      _this.hide();
      expect(_this._backdrop.hide).not.toHaveBeenCalled();
      expect(EventHandler.trigger).not.toHaveBeenCalled();
    });
    it("should hide a shown element", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const dataLimitInput = div.querySelector("div");
      const _this = new Offcanvas(dataLimitInput);
      spyOn(_this._backdrop, "hide").and.callThrough();
      _this.show();
      dataLimitInput.addEventListener("hidden.bs.offcanvas", () => {
        expect(dataLimitInput.classList.contains("show")).toEqual(false);
        expect(_this._backdrop.hide).toHaveBeenCalled();
        saveNotifs();
      });
      _this.hide();
    });
    it("should not fire hidden when hide is prevented", (hasClass) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const _portletRow = div.querySelector("div");
      const _this = new Offcanvas(_portletRow);
      spyOn(_this._backdrop, "hide").and.callThrough();
      _this.show();
      const setActive = () => {
        setTimeout(() => {
          expect(_this._backdrop.hide).not.toHaveBeenCalled();
          hasClass();
        }, 10);
      };
      _portletRow.addEventListener("hide.bs.offcanvas", (event) => {
        event.preventDefault();
        setActive();
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        throw new Error("should not fire hidden event");
      });
      _this.hide();
    });
    it("should release focus trap", (saveNotifs) => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const _portletRow = div.querySelector("div");
      const View = new Offcanvas(_portletRow);
      spyOn(View._focustrap, "deactivate").and.callThrough();
      View.show();
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        expect(View._focustrap.deactivate).toHaveBeenCalled();
        saveNotifs();
      });
      View.hide();
    });
  });
  describe("dispose", () => {
    it("should dispose an offcanvas", () => {
      div.innerHTML = '<div class="offcanvas"></div>';
      const numOfLns = div.querySelector("div");
      const _this = new Offcanvas(numOfLns);
      const singleCollectionB = _this._backdrop;
      spyOn(singleCollectionB, "dispose").and.callThrough();
      const computed = _this._focustrap;
      spyOn(computed, "deactivate").and.callThrough();
      expect(Offcanvas.getInstance(numOfLns)).toEqual(_this);
      spyOn(EventHandler, "off");
      _this.dispose();
      expect(singleCollectionB.dispose).toHaveBeenCalled();
      expect(_this._backdrop).toBeNull();
      expect(computed.deactivate).toHaveBeenCalled();
      expect(_this._focustrap).toBeNull();
      expect(Offcanvas.getInstance(numOfLns)).toEqual(null);
    });
  });
  describe("data-api", () => {
    it("should not prevent event for input", (saveNotifs) => {
      div.innerHTML = ['<input type="checkbox" data-bs-toggle="offcanvas" data-bs-target="#offcanvasdiv1" />', '<div id="offcanvasdiv1" class="offcanvas"></div>'].join("");
      const n = div.querySelector("input");
      const dataLimitInput = div.querySelector("#offcanvasdiv1");
      dataLimitInput.addEventListener("shown.bs.offcanvas", () => {
        expect(dataLimitInput.classList.contains("show")).toEqual(true);
        expect(n.checked).toEqual(true);
        saveNotifs();
      });
      n.click();
    });
    it("should not call toggle on disabled elements", () => {
      div.innerHTML = ['<a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasdiv1" class="disabled"></a>', '<div id="offcanvasdiv1" class="offcanvas"></div>'].join("");
      const imgchk = div.querySelector("a");
      spyOn(Offcanvas.prototype, "toggle");
      imgchk.click();
      expect(Offcanvas.prototype.toggle).not.toHaveBeenCalled();
    });
    it("should call hide first, if another offcanvas is open", (saveNotifs) => {
      div.innerHTML = ['<button id="btn2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas2" ></button>', '<div id="offcanvas1" class="offcanvas"></div>', '<div id="offcanvas2" class="offcanvas"></div>'].join("");
      const imgchk = div.querySelector("#btn2");
      const _portletRow = document.querySelector("#offcanvas1");
      const numOfLns = document.querySelector("#offcanvas2");
      const $innerblock = new Offcanvas(_portletRow);
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        imgchk.click();
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        expect(Offcanvas.getInstance(numOfLns)).not.toBeNull();
        saveNotifs();
      });
      $innerblock.show();
    });
    it("should focus on trigger element after closing offcanvas", (saveNotifs) => {
      div.innerHTML = ['<button id="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" ></button>', '<div id="offcanvas" class="offcanvas"></div>'].join("");
      const n = div.querySelector("#btn");
      const _portletRow = div.querySelector("#offcanvas");
      const $trashTreeContextMenu = new Offcanvas(_portletRow);
      spyOn(n, "focus");
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        $trashTreeContextMenu.hide();
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        setTimeout(() => {
          expect(n.focus).toHaveBeenCalled();
          saveNotifs();
        }, 5);
      });
      n.click();
    });
    it("should not focus on trigger element after closing offcanvas, if it is not visible", (saveNotifs) => {
      div.innerHTML = ['<button id="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" ></button>', '<div id="offcanvas" class="offcanvas"></div>'].join("");
      const button = div.querySelector("#btn");
      const _portletRow = div.querySelector("#offcanvas");
      const $trashTreeContextMenu = new Offcanvas(_portletRow);
      spyOn(button, "focus");
      _portletRow.addEventListener("shown.bs.offcanvas", () => {
        button.style.display = "none";
        $trashTreeContextMenu.hide();
      });
      _portletRow.addEventListener("hidden.bs.offcanvas", () => {
        setTimeout(() => {
          expect(isVisible(button)).toBe(false);
          expect(button.focus).not.toHaveBeenCalled();
          saveNotifs();
        }, 5);
      });
      button.click();
    });
  });
  describe("jQueryInterface", () => {
    it("should create an offcanvas", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [numOfLns];
      jQueryMock.fn.offcanvas.call(jQueryMock);
      expect(Offcanvas.getInstance(numOfLns)).not.toBeNull();
    });
    it("should not re create an offcanvas", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      const mockOtherDomainObject = new Offcanvas(numOfLns);
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [numOfLns];
      jQueryMock.fn.offcanvas.call(jQueryMock);
      expect(Offcanvas.getInstance(numOfLns)).toEqual(mockOtherDomainObject);
    });
    it("should throw error on undefined method", () => {
      div.innerHTML = "<div></div>";
      const main = div.querySelector("div");
      const bubbled_sets__3355 = "undefinedMethod";
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [main];
      expect(() => {
        jQueryMock.fn.offcanvas.call(jQueryMock, bubbled_sets__3355);
      }).toThrowError(TypeError, `No method named "${bubbled_sets__3355}"`);
    });
    it("should throw error on protected method", () => {
      div.innerHTML = "<div></div>";
      const main = div.querySelector("div");
      const bubbled_sets__3355 = "_getConfig";
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [main];
      expect(() => {
        jQueryMock.fn.offcanvas.call(jQueryMock, bubbled_sets__3355);
      }).toThrowError(TypeError, `No method named "${bubbled_sets__3355}"`);
    });
    it('should throw error if method "constructor" is being called', () => {
      div.innerHTML = "<div></div>";
      const main = div.querySelector("div");
      const bubbled_sets__3355 = "constructor";
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [main];
      expect(() => {
        jQueryMock.fn.offcanvas.call(jQueryMock, bubbled_sets__3355);
      }).toThrowError(TypeError, `No method named "${bubbled_sets__3355}"`);
    });
    it("should call offcanvas method", () => {
      div.innerHTML = "<div></div>";
      const main = div.querySelector("div");
      spyOn(Offcanvas.prototype, "show");
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [main];
      jQueryMock.fn.offcanvas.call(jQueryMock, "show");
      expect(Offcanvas.prototype.show).toHaveBeenCalled();
    });
    it("should create a offcanvas with given config", () => {
      div.innerHTML = "<div></div>";
      const mainInst = div.querySelector("div");
      jQueryMock.fn.offcanvas = Offcanvas.jQueryInterface;
      jQueryMock.elements = [mainInst];
      jQueryMock.fn.offcanvas.call(jQueryMock, {
        scroll : true
      });
      const model = Offcanvas.getInstance(mainInst);
      expect(model).not.toBeNull();
      expect(model._config.scroll).toBe(true);
    });
  });
  describe("getInstance", () => {
    it("should return offcanvas instance", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      const mockOtherDomainObject = new Offcanvas(numOfLns);
      expect(Offcanvas.getInstance(numOfLns)).toEqual(mockOtherDomainObject);
      expect(Offcanvas.getInstance(numOfLns)).toBeInstanceOf(Offcanvas);
    });
    it("should return null when there is no offcanvas instance", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      expect(Offcanvas.getInstance(numOfLns)).toBeNull();
    });
  });
  describe("getOrCreateInstance", () => {
    it("should return offcanvas instance", () => {
      div.innerHTML = "<div></div>";
      const url = div.querySelector("div");
      const mockOtherDomainObject = new Offcanvas(url);
      expect(Offcanvas.getOrCreateInstance(url)).toEqual(mockOtherDomainObject);
      expect(Offcanvas.getInstance(url)).toEqual(Offcanvas.getOrCreateInstance(url, {}));
      expect(Offcanvas.getOrCreateInstance(url)).toBeInstanceOf(Offcanvas);
    });
    it("should return new instance when there is no Offcanvas instance", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      expect(Offcanvas.getInstance(numOfLns)).toEqual(null);
      expect(Offcanvas.getOrCreateInstance(numOfLns)).toBeInstanceOf(Offcanvas);
    });
    it("should return new instance when there is no offcanvas instance with given configuration", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      expect(Offcanvas.getInstance(numOfLns)).toEqual(null);
      const instance = Offcanvas.getOrCreateInstance(numOfLns, {
        scroll : true
      });
      expect(instance).toBeInstanceOf(Offcanvas);
      expect(instance._config.scroll).toEqual(true);
    });
    it("should return the instance when exists without given configuration", () => {
      div.innerHTML = "<div></div>";
      const numOfLns = div.querySelector("div");
      const fn = new Offcanvas(numOfLns, {
        scroll : true
      });
      expect(Offcanvas.getInstance(numOfLns)).toEqual(fn);
      const instance = Offcanvas.getOrCreateInstance(numOfLns, {
        scroll : false
      });
      expect(fn).toBeInstanceOf(Offcanvas);
      expect(instance).toEqual(fn);
      expect(instance._config.scroll).toEqual(true);
    });
  });
});

