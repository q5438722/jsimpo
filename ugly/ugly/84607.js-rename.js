import Offcanvas from"../../src/offcanvas";import EventHandler from"../../src/dom/event-handler";import{clearBodyAndDocument,clearFixture,createEvent,getFixture,jQueryMock}from"../helpers/fixture";import{isVisible}from"../../src/util";import ScrollBarHelper from"../../src/util/scrollbar";describe("Offcanvas",()=>{let s;beforeAll(()=>{s=getFixture()});afterEach(()=>{clearFixture();document.body.classList.remove("offcanvas-open");clearBodyAndDocument()});beforeEach(()=>{clearBodyAndDocument()});describe("VERSION",()=>{it("should return plugin version",()=>{expect(Offcanvas.VERSION).toEqual(jasmine.any(String))})});describe("Default",()=>{it("should return plugin default config",()=>{expect(Offcanvas.Default).toEqual(jasmine.any(Object))})});describe("DATA_KEY",()=>{it("should return plugin data key",()=>{expect(Offcanvas.DATA_KEY).toEqual("bs.offcanvas")})});describe("constructor",()=>{it('should call hide when a element with data-bs-dismiss="offcanvas" is clicked',()=>{s.innerHTML=['<div class="offcanvas">','  <a href="#" data-bs-dismiss="offcanvas">Close</a>',"</div>"].join("");const e=s.querySelector(".offcanvas");const n=s.querySelector("a");const a=new Offcanvas(e);spyOn(a,"hide");n.click();expect(a._config.keyboard).toBe(true);expect(a.hide).toHaveBeenCalled()});it("should hide if esc is pressed",()=>{s.innerHTML='<div class="offcanvas"></div>';const e=s.querySelector(".offcanvas");const n=new Offcanvas(e);const a=createEvent("keydown");a.key="Escape";spyOn(n,"hide");e.dispatchEvent(a);expect(n.hide).toHaveBeenCalled()});it("should not hide if esc is not pressed",()=>{s.innerHTML='<div class="offcanvas"></div>';const e=s.querySelector(".offcanvas");const n=new Offcanvas(e);const a=createEvent("keydown");a.key="Tab";spyOn(n,"hide");document.dispatchEvent(a);expect(n.hide).not.toHaveBeenCalled()});it("should not hide if esc is pressed but with keyboard = false",()=>{s.innerHTML='<div class="offcanvas"></div>';const e=s.querySelector(".offcanvas");const n=new Offcanvas(e,{keyboard:false});const a=createEvent("keydown");a.key="Escape";spyOn(n,"hide");document.dispatchEvent(a);expect(n._config.keyboard).toBe(false);expect(n.hide).not.toHaveBeenCalled()})});describe("config",()=>{it("should have default values",()=>{s.innerHTML=['<div class="offcanvas">',"</div>"].join("");const e=s.querySelector(".offcanvas");const n=new Offcanvas(e);expect(n._config.backdrop).toEqual(true);expect(n._backdrop._config.isVisible).toEqual(true);expect(n._config.keyboard).toEqual(true);expect(n._config.scroll).toEqual(false)});it("should read data attributes and override default config",()=>{s.innerHTML=['<div class="offcanvas" data-bs-scroll="true" data-bs-backdrop="false"  data-bs-keyboard="false">',"</div>"].join("");const e=s.querySelector(".offcanvas");const n=new Offcanvas(e);expect(n._config.backdrop).toEqual(false);expect(n._backdrop._config.isVisible).toEqual(false);expect(n._config.keyboard).toEqual(false);expect(n._config.scroll).toEqual(true)});it("given a config object must override data attributes",()=>{s.innerHTML=['<div class="offcanvas" data-bs-scroll="true" data-bs-backdrop="false"  data-bs-keyboard="false">',"</div>"].join("");const e=s.querySelector(".offcanvas");const n=new Offcanvas(e,{backdrop:true,keyboard:true,scroll:false});expect(n._config.backdrop).toEqual(true);expect(n._config.keyboard).toEqual(true);expect(n._config.scroll).toEqual(false)})});describe("options",()=>{it("if scroll is enabled, should allow body to scroll while offcanvas is open",e=>{s.innerHTML='<div class="offcanvas"></div>';spyOn(ScrollBarHelper.prototype,"hide").and.callThrough();spyOn(ScrollBarHelper.prototype,"reset").and.callThrough();const n=s.querySelector(".offcanvas");const a=new Offcanvas(n,{scroll:true});n.addEventListener("shown.bs.offcanvas",()=>{expect(ScrollBarHelper.prototype.hide).not.toHaveBeenCalled();a.hide()});n.addEventListener("hidden.bs.offcanvas",()=>{expect(ScrollBarHelper.prototype.reset).not.toHaveBeenCalled();e()});a.show()});it("if scroll is disabled, should call ScrollBarHelper to handle scrollBar on body",e=>{s.innerHTML='<div class="offcanvas"></div>';spyOn(ScrollBarHelper.prototype,"hide").and.callThrough();spyOn(ScrollBarHelper.prototype,"reset").and.callThrough();const n=s.querySelector(".offcanvas");const a=new Offcanvas(n,{scroll:false});n.addEventListener("shown.bs.offcanvas",()=>{expect(ScrollBarHelper.prototype.hide).toHaveBeenCalled();a.hide()});n.addEventListener("hidden.bs.offcanvas",()=>{expect(ScrollBarHelper.prototype.reset).toHaveBeenCalled();e()});a.show()});it("should hide a shown element if user click on backdrop",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector("div");const a=new Offcanvas(n,{backdrop:true});const t=document.createEvent("MouseEvents");t.initEvent("mousedown",true,true);spyOn(a._backdrop._config,"clickCallback").and.callThrough();n.addEventListener("shown.bs.offcanvas",()=>{expect(typeof a._backdrop._config.clickCallback).toBe("function");a._backdrop._getElement().dispatchEvent(t)});n.addEventListener("hidden.bs.offcanvas",()=>{expect(a._backdrop._config.clickCallback).toHaveBeenCalled();e()});a.show()});it("should not trap focus if scroll is allowed",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector(".offcanvas");const a=new Offcanvas(n,{scroll:true});spyOn(a._focustrap,"activate").and.callThrough();n.addEventListener("shown.bs.offcanvas",()=>{expect(a._focustrap.activate).not.toHaveBeenCalled();e()});a.show()})});describe("toggle",()=>{it("should call show method if show class is not present",()=>{s.innerHTML='<div class="offcanvas"></div>';const e=s.querySelector(".offcanvas");const n=new Offcanvas(e);spyOn(n,"show");n.toggle();expect(n.show).toHaveBeenCalled()});it("should call hide method if show class is present",()=>{s.innerHTML='<div class="offcanvas"></div>';const e=s.querySelector(".offcanvas");const n=new Offcanvas(e);n.show();expect(e.classList.contains("show")).toBe(true);spyOn(n,"hide");n.toggle();expect(n.hide).toHaveBeenCalled()})});describe("show",()=>{it("should do nothing if already shown",()=>{s.innerHTML='<div class="offcanvas show"></div>';const e=s.querySelector("div");const n=new Offcanvas(e);n.show();expect(e.classList.contains("show")).toBe(true);spyOn(n._backdrop,"show").and.callThrough();spyOn(EventHandler,"trigger").and.callThrough();n.show();expect(EventHandler.trigger).not.toHaveBeenCalled();expect(n._backdrop.show).not.toHaveBeenCalled()});it("should show a hidden element",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector("div");const a=new Offcanvas(n);spyOn(a._backdrop,"show").and.callThrough();n.addEventListener("shown.bs.offcanvas",()=>{expect(n.classList.contains("show")).toEqual(true);expect(a._backdrop.show).toHaveBeenCalled();e()});a.show()});it("should not fire shown when show is prevented",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector("div");const a=new Offcanvas(n);spyOn(a._backdrop,"show").and.callThrough();const t=()=>{setTimeout(()=>{expect(a._backdrop.show).not.toHaveBeenCalled();e()},10)};n.addEventListener("show.bs.offcanvas",e=>{e.preventDefault();t()});n.addEventListener("shown.bs.offcanvas",()=>{throw new Error("should not fire shown event")});a.show()});it('on window load, should make visible an offcanvas element, if its markup contains class "show"',e=>{s.innerHTML='<div class="offcanvas show"></div>';const n=s.querySelector("div");spyOn(Offcanvas.prototype,"show").and.callThrough();n.addEventListener("shown.bs.offcanvas",()=>{e()});window.dispatchEvent(createEvent("load"));const a=Offcanvas.getInstance(n);expect(a).not.toBeNull();expect(Offcanvas.prototype.show).toHaveBeenCalled()});it("should trap focus",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector(".offcanvas");const a=new Offcanvas(n);spyOn(a._focustrap,"activate").and.callThrough();n.addEventListener("shown.bs.offcanvas",()=>{expect(a._focustrap.activate).toHaveBeenCalled();e()});a.show()})});describe("hide",()=>{it("should do nothing if already shown",()=>{s.innerHTML='<div class="offcanvas"></div>';spyOn(EventHandler,"trigger").and.callThrough();const e=s.querySelector("div");const n=new Offcanvas(e);spyOn(n._backdrop,"hide").and.callThrough();n.hide();expect(n._backdrop.hide).not.toHaveBeenCalled();expect(EventHandler.trigger).not.toHaveBeenCalled()});it("should hide a shown element",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector("div");const a=new Offcanvas(n);spyOn(a._backdrop,"hide").and.callThrough();a.show();n.addEventListener("hidden.bs.offcanvas",()=>{expect(n.classList.contains("show")).toEqual(false);expect(a._backdrop.hide).toHaveBeenCalled();e()});a.hide()});it("should not fire hidden when hide is prevented",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector("div");const a=new Offcanvas(n);spyOn(a._backdrop,"hide").and.callThrough();a.show();const t=()=>{setTimeout(()=>{expect(a._backdrop.hide).not.toHaveBeenCalled();e()},10)};n.addEventListener("hide.bs.offcanvas",e=>{e.preventDefault();t()});n.addEventListener("hidden.bs.offcanvas",()=>{throw new Error("should not fire hidden event")});a.hide()});it("should release focus trap",e=>{s.innerHTML='<div class="offcanvas"></div>';const n=s.querySelector("div");const a=new Offcanvas(n);spyOn(a._focustrap,"deactivate").and.callThrough();a.show();n.addEventListener("hidden.bs.offcanvas",()=>{expect(a._focustrap.deactivate).toHaveBeenCalled();e()});a.hide()})});describe("dispose",()=>{it("should dispose an offcanvas",()=>{s.innerHTML='<div class="offcanvas"></div>';const e=s.querySelector("div");const n=new Offcanvas(e);const a=n._backdrop;spyOn(a,"dispose").and.callThrough();const t=n._focustrap;spyOn(t,"deactivate").and.callThrough();expect(Offcanvas.getInstance(e)).toEqual(n);spyOn(EventHandler,"off");n.dispose();expect(a.dispose).toHaveBeenCalled();expect(n._backdrop).toBeNull();expect(t.deactivate).toHaveBeenCalled();expect(n._focustrap).toBeNull();expect(Offcanvas.getInstance(e)).toEqual(null)})});describe("data-api",()=>{it("should not prevent event for input",e=>{s.innerHTML=['<input type="checkbox" data-bs-toggle="offcanvas" data-bs-target="#offcanvasdiv1" />','<div id="offcanvasdiv1" class="offcanvas"></div>'].join("");const n=s.querySelector("input");const a=s.querySelector("#offcanvasdiv1");a.addEventListener("shown.bs.offcanvas",()=>{expect(a.classList.contains("show")).toEqual(true);expect(n.checked).toEqual(true);e()});n.click()});it("should not call toggle on disabled elements",()=>{s.innerHTML=['<a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasdiv1" class="disabled"></a>','<div id="offcanvasdiv1" class="offcanvas"></div>'].join("");const e=s.querySelector("a");spyOn(Offcanvas.prototype,"toggle");e.click();expect(Offcanvas.prototype.toggle).not.toHaveBeenCalled()});it("should call hide first, if another offcanvas is open",e=>{s.innerHTML=['<button id="btn2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas2" ></button>','<div id="offcanvas1" class="offcanvas"></div>','<div id="offcanvas2" class="offcanvas"></div>'].join("");const n=s.querySelector("#btn2");const a=document.querySelector("#offcanvas1");const t=document.querySelector("#offcanvas2");const o=new Offcanvas(a);a.addEventListener("shown.bs.offcanvas",()=>{n.click()});a.addEventListener("hidden.bs.offcanvas",()=>{expect(Offcanvas.getInstance(t)).not.toBeNull();e()});o.show()});it("should focus on trigger element after closing offcanvas",e=>{s.innerHTML=['<button id="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" ></button>','<div id="offcanvas" class="offcanvas"></div>'].join("");const n=s.querySelector("#btn");const a=s.querySelector("#offcanvas");const t=new Offcanvas(a);spyOn(n,"focus");a.addEventListener("shown.bs.offcanvas",()=>{t.hide()});a.addEventListener("hidden.bs.offcanvas",()=>{setTimeout(()=>{expect(n.focus).toHaveBeenCalled();e()},5)});n.click()});it("should not focus on trigger element after closing offcanvas, if it is not visible",e=>{s.innerHTML=['<button id="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" ></button>','<div id="offcanvas" class="offcanvas"></div>'].join("");const n=s.querySelector("#btn");const a=s.querySelector("#offcanvas");const t=new Offcanvas(a);spyOn(n,"focus");a.addEventListener("shown.bs.offcanvas",()=>{n.style.display="none";t.hide()});a.addEventListener("hidden.bs.offcanvas",()=>{setTimeout(()=>{expect(isVisible(n)).toBe(false);expect(n.focus).not.toHaveBeenCalled();e()},5)});n.click()})});describe("jQueryInterface",()=>{it("should create an offcanvas",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];jQueryMock.fn.offcanvas.call(jQueryMock);expect(Offcanvas.getInstance(e)).not.toBeNull()});it("should not re create an offcanvas",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n=new Offcanvas(e);jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];jQueryMock.fn.offcanvas.call(jQueryMock);expect(Offcanvas.getInstance(e)).toEqual(n)});it("should throw error on undefined method",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n="undefinedMethod";jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];expect(()=>{jQueryMock.fn.offcanvas.call(jQueryMock,n)}).toThrowError(TypeError,`No method named "${n}"`)});it("should throw error on protected method",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n="_getConfig";jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];expect(()=>{jQueryMock.fn.offcanvas.call(jQueryMock,n)}).toThrowError(TypeError,`No method named "${n}"`)});it('should throw error if method "constructor" is being called',()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n="constructor";jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];expect(()=>{jQueryMock.fn.offcanvas.call(jQueryMock,n)}).toThrowError(TypeError,`No method named "${n}"`)});it("should call offcanvas method",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");spyOn(Offcanvas.prototype,"show");jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];jQueryMock.fn.offcanvas.call(jQueryMock,"show");expect(Offcanvas.prototype.show).toHaveBeenCalled()});it("should create a offcanvas with given config",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");jQueryMock.fn.offcanvas=Offcanvas.jQueryInterface;jQueryMock.elements=[e];jQueryMock.fn.offcanvas.call(jQueryMock,{scroll:true});const n=Offcanvas.getInstance(e);expect(n).not.toBeNull();expect(n._config.scroll).toBe(true)})});describe("getInstance",()=>{it("should return offcanvas instance",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n=new Offcanvas(e);expect(Offcanvas.getInstance(e)).toEqual(n);expect(Offcanvas.getInstance(e)).toBeInstanceOf(Offcanvas)});it("should return null when there is no offcanvas instance",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");expect(Offcanvas.getInstance(e)).toBeNull()})});describe("getOrCreateInstance",()=>{it("should return offcanvas instance",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n=new Offcanvas(e);expect(Offcanvas.getOrCreateInstance(e)).toEqual(n);expect(Offcanvas.getInstance(e)).toEqual(Offcanvas.getOrCreateInstance(e,{}));expect(Offcanvas.getOrCreateInstance(e)).toBeInstanceOf(Offcanvas)});it("should return new instance when there is no Offcanvas instance",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");expect(Offcanvas.getInstance(e)).toEqual(null);expect(Offcanvas.getOrCreateInstance(e)).toBeInstanceOf(Offcanvas)});it("should return new instance when there is no offcanvas instance with given configuration",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");expect(Offcanvas.getInstance(e)).toEqual(null);const n=Offcanvas.getOrCreateInstance(e,{scroll:true});expect(n).toBeInstanceOf(Offcanvas);expect(n._config.scroll).toEqual(true)});it("should return the instance when exists without given configuration",()=>{s.innerHTML="<div></div>";const e=s.querySelector("div");const n=new Offcanvas(e,{scroll:true});expect(Offcanvas.getInstance(e)).toEqual(n);const a=Offcanvas.getOrCreateInstance(e,{scroll:false});expect(n).toBeInstanceOf(Offcanvas);expect(a).toEqual(n);expect(a._config.scroll).toEqual(true)})})});