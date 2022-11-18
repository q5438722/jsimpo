
  try{
    (function (w, d, prefix) {
    w.RB = w.RB && w.RB.v && w.RB.v === 1 ? w.RB : (function () {
      var // main flag,
        enabled = !1,
        servingType = serveType(),
        useObserver = !!window.IntersectionObserver,
        useGeom = !useObserver && servingType !== "XD_FRAME",
        // old opera focus flag
        focused = !0,
        // counted flag
        counted = "mailru-visibility-counted",
        // banners to inspect
        banners = {},
        // shortcuts
        e = d.documentElement,
        VE = d.mozVisibilityState ? "mozvisibilitychange" : d.webkitVisibilityState ? "webkitvisibilitychange" : d.visibilityState ? "visibilitychange" : "",
        HP = "hidden" in d ? "hidden" : "webkitHidden" in d ? "webkitHidden" : "mozHidden" in d ? "mozHidden" : "",
        // lastTimeStamp = 0,

        // timing
        tm,
        // interstion observer instance
        observer;

      // handlers
      function onFocusIn() {
        focused = !0;
        C(!0);
      }

      function onFocusOut() {
        focused = !1;
      }

      function onUnload() {
        Clear();
        off();
      }

      // using visibility could have profits when tab is not

      function onVisibilityChange() {
        if (!d[HP]) onFocusIn();
        else onFocusOut();
      }

      function onWindowScroll() {
        C();
      }

      function onWindowResize() {
        C();
      }

      // I &ndash; inspect

      function I(bannerObject, id) {
        if (Object.prototype.toString.call(bannerObject) === "[object Array]") {
          Clear(bannerObject);
          var k = bannerObject.length - 1;
          for (; k >= 0; k--) {
            if (!s(bannerObject[k].el, counted)) {
              I(bannerObject[k]);
            }
          }
          return;
        }

        if (!useObserver && !useGeom) {
          tr(bannerObject.pixels_undetermined);
          bannerObject.el[counted] = true;
          return;
        }
        // bannerObject contains bannerObject.el and bannerObject.pixels
        if (!bannerObject.el.id) {
          id =
            prefix +
            new Date().getTime() +
            Math.round(Math.random() * 1e6);
          bannerObject.el.id = id;
        }

        id = bannerObject.el.id;

        // lastTimeStamp = new Date().getTime();
        // adding the banner container to storage
        if (!banners[id]) {
          banners[id] = {
            c: bannerObject.el,
            px: bannerObject.pixels,
            px_un: bannerObject.pixels_undetermined,
            px_nv: bannerObject.pixels_nonviewable,
            cb: bannerObject.callback,
            io: useObserver
          };
        }

        // enabling anyway
        on();
        if (useObserver) {
          o(bannerObject.el);
        }
        C(!0);
      }

      // C &ndash; check viewability of banner with t, timeout after loading

      function C(t) {
        for (var id in banners) {
          if (banners[id] && !G(id)) {
            CL(id);
          } else if (
            banners[id] &&
            getVA(banners[id].c) >= 50 &&
            hasFocus() &&
            !banners[id].t
          ) {
            (function (_id) {
              banners[_id].t = setTimeout(function () {
                try {
                  P(_id);
                } catch (e) {}
              }, 1E3);
            })(id);
          } else if (
            banners[id] &&
            getVA(banners[id].c) < 50
          ) {
            if (banners[id].t) {
              clearTimeout(banners[id].t);
              delete banners[id].t;
            }
          } else if (banners[id] && !hasFocus()) {
            if (banners[id].t) {
              clearTimeout(banners[id].t);
              delete banners[id].t;
              clearTimeout(tm);
              t = false;
            }
          } else if (!banners[id]) {
            CL(id);
          }
        }

        if (t) {
          clearTimeout(tm);
          tm = setTimeout(
            function () {
              C(!0);
            },
            useGeom ? 3e2 : 10e3
          );
        }
      }

      // CL &ndash; Clear timers and stop listeners

      function CL(id, onlyTM, noCount) {
        if (id && banners[id]) {
          clearTimeout(banners[id].t);
          banners[id].t = null;
          if (!onlyTM) {
            if (banners[id].io && observer) {
              observer.unobserve(banners[id].c);
            }

            if (!noCount && !s(banners[id].c, counted)) {
              tr(banners[id].px_nv);
              banners[id].c[counted] = true;
            }
            banners[id].c = null;
            delete banners[id];
          }
          return;
        }
        clearTimeout(tm);
        tm = null;
        for (var id in banners) {
          if (banners[id].t) {
            CL(id, !0);
          }
        }
      }

      function Clear(bannersArray) {
        if (bannersArray && bannersArray.length >= 0) {
          //clear banners from array
          var k = bannersArray.length - 1;
          var id;
          for (; k >= 0; k--) {
            id = bannersArray[k].el.id;
            if (id && banners[id]) {
              // clear but don't count nonviewable
              CL(id, !1, !0);
            }
          }
        } else {
          for (var id in banners) {
            //clear all
            CL(id);
          }
        }
      }

      // P &ndash; pixel to send
      function P(id, obj, cnt) {
        if (!G(id)) {
          CL(id);
          // banner removed
          return;
        }

        if (banners[id]) {
          obj = banners[id].c;
        } else {
          return;
        }

        if (!hasFocus()) {
          CL(id, !0);
          return;
        } else if (getVA(obj) < 50) {
          CL(id, !0);
          return;
        }

        for (cnt = banners[id].px.length - 1; cnt >= 0; cnt--) {
          new Image().src = banners[id].px[cnt];
        }
        // set counted flag - skip in next collect loops
        obj[counted] = true;
        //try fire callback
        var cb = banners[id].cb;
        if (cb && typeof cb === "function") {
          try {
            cb();
          } catch (e) {}
        }
        // remove banner from storage of inspectable items
        CL(id);
        // turn listeners off if banners are not present
        if (!l(banners)) off();
      }

      function hasFocus() {
        if (HP) focused = !d[HP];
        else if (!VE && typeof d.hasFocus === "function")
          focused = d.hasFocus();
        return focused;
      }

      function getVA(obj, source) {
        if (obj.id && banners[obj.id] && banners[obj.id].io) {
          return banners[obj.id].v || 0;
        }

        var percent = getGeometryViewableArea(obj).percent;

        return percent;
      }

      /** LISTENERS SWITCHERS **/
      function on() {
        if (enabled) return;
        if (useGeom) {
          ev(w, "resize", onWindowResize);
          ev(w, "scroll", onWindowScroll);
        }
        if (useObserver) {
          observer = new IntersectionObserver(h, {
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          });
        }
        if (VE) ev(d, VE, onVisibilityChange);
        else {
          ev(w, "blur", onFocusOut);
          ev(w, "focus", onFocusIn);
        }
        ev(w, "unload", onUnload);
        enabled = true;
      }

      function off() {
        rm(w, "unload", onUnload);
        rm(w, "resize", onWindowResize);
        rm(w, "scroll", onWindowScroll);
        if (VE) rm(d, VE, onVisibilityChange);
        rm(w, "focus", onFocusIn);
        rm(w, "blur", onFocusOut);
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        clearTimeout(tm);
        enabled = false;
      }

      /** INTERSECTION OBSERVER UTILS **/
      function o(e) {
        observer && observer.observe(e);
      }

      function h(changes) {
        changes.forEach(function (changeRecord) {
          var element = changeRecord.target;
          var id = element.id;

          if (id && banners[id]) {
            banners[id].v = Math.round(
              changeRecord.intersectionRatio * 100
            );
          }
        });
        C();
      }

      /** UTILS **/
      // G - get element by ID;
      function G(E) {
        return d.getElementById(E);
      }
      // ev - EVent to handle
      function ev(elem, eventName, callback) {
        elem.addEventListener
          ? elem.addEventListener(eventName, callback, !1)
          : elem.attachEvent &&
            elem.attachEvent("on" + eventName, callback);
      }

      function rm(elem, eventName, callback) {
        elem.removeEventListener
          ? elem.removeEventListener(eventName, callback, !1)
          : elem.detachEvent &&
            elem.detachEvent("on" + eventName, callback);
      }
      // obj length
      function l(obj) {
        var s = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) s++;
        }
        return s;
      }
      //elem state
      function s(elem, state) {
        return !(typeof elem[state] == undefined || elem[state] !== true);
      }
      //track
      function tr(pixels) {
        if (pixels && pixels.length) {
          for (cnt = pixels.length - 1; cnt >= 0; cnt--) {
            new Image().src = pixels[cnt];
          }
        }
      }
      function serveType() {
        try {
          if (window === window.top) {
            return "ON_PAGE";
          }

          var currentWindow = window;

          while (currentWindow !== currentWindow.parent) {
            if (
              currentWindow.document.domain !==
              currentWindow.parent.document.domain
            ) {
              return "XD_FRAME";
            }
            currentWindow = currentWindow.parent;
          }

          return "S_FRAME";
        } catch (e) {}

        return "XD_FRAME";
      }

      // geometry viewability
      function getGeometryViewableArea(element, contextWindow) {
        try {
          var rect = element.getBoundingClientRect();
          var area = getArea(rect);
          var currentWindow = window;

          contextWindow = contextWindow || window.top;

          while (currentWindow !== contextWindow) {
            // 1) get current frame coordinates inside its parent
            // 2) get element coordinates relative to parent
            // 3) get visible element coordinates relative to parent
            var currentRect = currentWindow.frameElement.getBoundingClientRect();

            rect = getRR(rect, currentRect);
            rect.left = Math.max(currentRect.left, rect.left);
            rect.right = Math.min(currentRect.right, rect.right);
            rect.top = Math.max(currentRect.top, rect.top);
            rect.bottom = Math.min(currentRect.bottom, rect.bottom);

            if (rect.right < rect.left) {
              rect.right = rect.left;
            }
            if (rect.bottom < rect.top) {
              rect.bottom = rect.top;
            }

            currentWindow = currentWindow.parent;
          }
          rect = getRVA(rect, contextWindow);

          var viewableArea = getArea(rect);

          rect.percent = (viewableArea / area) * 100;

          return rect;
        } catch (e) {
          return { left: 0, right: 0, top: 0, bottom: 0, percent: 0 };
        }
      }

      function getArea(rect) {
        return (rect.right - rect.left) * (rect.bottom - rect.top);
      }
      // relative rect
      function getRR(rect, contextRect) {
        return {
          left: rect.left + contextRect.left,
          right: rect.right + contextRect.left,
          top: rect.top + contextRect.top,
          bottom: rect.bottom + contextRect.top,
        };
      }
      // relative viewable area
      function getRVA(rect, contextWindow) {
        var result = {};
        var contextSize = getVS(contextWindow);

        result.left = Math.max(0, rect.left);
        result.right = Math.min(contextSize.width, rect.right);
        result.top = Math.max(0, rect.top);
        result.bottom = Math.min(contextSize.height, rect.bottom);

        return result;
      }
      // viewport size
      function getVS(w) {
        var viewPortSize = {
          width: Infinity,
          height: Infinity,
        };
        var d = w.document;

        if (!isNaN(d.body.clientWidth) && d.body.clientWidth > 0) {
          viewPortSize.width = d.body.clientWidth;
        }
        if (!isNaN(d.body.clientHeight) && d.body.clientHeight > 0) {
          viewPortSize.height = d.body.clientHeight;
        }
        if (
          !!d.documentElement &&
          !!d.documentElement.clientWidth &&
          !isNaN(d.documentElement.clientWidth)
        ) {
          viewPortSize.width = d.documentElement.clientWidth;
        }
        if (
          !!d.documentElement &&
          !!d.documentElement.clientHeight &&
          !isNaN(d.documentElement.clientHeight)
        ) {
          viewPortSize.height = d.documentElement.clientHeight;
        }
        if (!!w.innerWidth && !isNaN(w.innerWidth)) {
          viewPortSize.width = Math.min(viewPortSize.width, w.innerWidth);
        }
        if (!!w.innerHeight && !isNaN(w.innerHeight)) {
          viewPortSize.height = Math.min(
            viewPortSize.height,
            w.innerHeight
          );
        }

        return viewPortSize;
      }

      /** PUBLIC INTERFACE **/

      return {
        I: I,
        // debug
        // , banners: banners
        v: 1,
      };
    })();
  })(window, document, 'mailru')
  }catch (e) {}
