
(function(params) {
    var closeEl, closeBubbleEl, closeItemsEl, closeWrapEl, closeOverEl, showAdsownerEl;
    var pixels = {
        ni: "https://rs.mail.ru/sb36635784.gif?",
        ab: "https://rs.mail.ru/sb36635789.gif?",
        sp: "https://rs.mail.ru/sb36635790.gif?",
        cv: "https://rs.mail.ru/sb36635791.gif?"
    };
    function stopE(e) {
        if (e) { e.preventDefault(); e.stopImmediatePropagation(); }
    }
    function addElemEvent(E, eventName, callback) {
        E.addEventListener ? E.addEventListener(eventName, callback, !1) : E.attachEvent && E.attachEvent("on" + eventName, callback);
    }
    function removeElemEvent(E, eventName, callback) {
        E.removeEventListener ? E.removeEventListener(eventName, callback, !1) : E.detachEvent && E.detachEvent("on" + eventName, callback);
    }
    function dispatchEvent(el, type) {
    	var evt;
    	if (typeof window.CustomEvent === 'function') {
    		evt = new CustomEvent(type, {
    			bubbles: true
    		});
    	} else {
    		evt = document.createEvent('CustomEvent');
			  evt.initCustomEvent(type, true, false, null);
    	}
    	el.dispatchEvent(evt);
    }
    function sendPix(pix, params) {
        var img = document.createElement('img');
        img.src = pix || '';
        img.style.display = 'none';
        params.closeWrapEl.appendChild(img);
    }
    function getParentBannerItem(el) {
        var retval = null;
        var parentAttr = 'data-closewrap-container';
        var parentEl = el;
        while (parentEl) {
            if (parentEl === document.getElementsByTagName('body')[0]) {
                retval = null;
                break;
            } else if (parentEl.getAttribute(parentAttr)) {
                retval = parentEl;
                break;
            }
            parentEl = parentEl.parentElement;
        }
        return retval;
    }
    function getParentBannerSlot(el) {
        var slotClassName = 'mrg-tag';
        var slotEl = el;
        if (typeof el.closest === 'function') {
        	return el.closest('.' + slotClassName);
        }
        while (slotEl !== null) {
            if (slotEl.className.indexOf(slotClassName) !== -1) {
                return slotEl;
            }
            slotEl = slotEl.parentElement;
        }
        return null;
    }
    function closeAll(params) {
        params.closeWrapEl.className = params.closeWrapEl.className.replace(' _active', ' _hidden');
        removeElemEvent(params.closeEl, 'click', onCloseClick);
        removeElemEvent(params.closeOverEl, 'click', hideClose);
        for (var i = 0; i < params.closeItemsEl.length; i++) {
            removeElemEvent(params.closeItemsEl[i], 'click', onCloseReasonClick);
        }
    }
    function onCloseReasonClick(params, e) {
        stopE(e);
        var pix = pixels[e.currentTarget.getAttribute('data-reason')];
        if (pix) { sendPix(pix, params); }
        sendPix(params.closeEl.getAttribute('data-closepix'), params);
        closeAll(params);
        /* dispatch close event to RbExt */
        var parentBannerSlotItem = getParentBannerSlot(params.closeWrapEl);
        if (parentBannerSlotItem) {
        	dispatchEvent(parentBannerSlotItem, 'mrg-close');
        }
    }
    function onShowAdsownerClick(params, e) {
        stopE(e);
        var href = e.target.getAttribute('data-href');
        if (href) {
        	window.open(href, '_blank', 'noopener');
        }
        // params.closeWrapEl.className = params.closeWrapEl.className.replace(' _active', ' _adsowner');
    }
    function onCopyLinkClick(params, e) {
      stopE(e);
      var item = e.target;
      var href = item.getAttribute('data-href');
      if (href) {
        navigator.clipboard.writeText(href);
        item.innerText = 'ID скопировано';
      }
    }
    function onCloseClick(params, e) {
        stopE(e);
        if (params.closeWrapEl.className.indexOf(' _active') === -1 && params.closeWrapEl.className.indexOf(' _adsowner') === -1) { showClose(params); } else { hideClose(params); }
    }
    function hideClose(params, e) {
        stopE(e);
        params.closeWrapEl.className = params.closeWrapEl.className.replace(' _adsowner', '');
        params.closeWrapEl.className = params.closeWrapEl.className.replace(' _active', '');
        var parentBannerWrapItem = getParentBannerItem(params.closeWrapEl);
        parentBannerWrapItem.className = parentBannerWrapItem.className.replace(' _close-overlay', '');
    }
    function showClose(params) {
        params.closeWrapEl.className += ' _active';
        var parentBannerWrapItem = getParentBannerItem(params.closeWrapEl);
        parentBannerWrapItem.className += ' _close-overlay';
    }
    function init() {
        if (!params || !params.rootId || !document.querySelectorAll) return;
        var rootElem = document.querySelector(params.rootId);
        if (!rootElem) return;
        closeWrapEl = rootElem.querySelectorAll('.js-close-cross-wrap');
        if (!closeWrapEl || !closeWrapEl[0]) return;
        closeEl = rootElem.querySelectorAll('.js-close-cross');
        closeBubbleEl = rootElem.querySelectorAll('.js-close-cross-bubble');
        closeOverEl = rootElem.querySelectorAll('.js-close-overlay');
        for (var k = 0; k < closeEl.length; k++) {
            closeItemsEl = closeWrapEl[k].querySelectorAll('.js-close-reason');
            showAdsownerEl = closeWrapEl[k].querySelectorAll('.js-show-adsowner');
            copyLinkEl = closeWrapEl[k].querySelector('.js-copy-link');
            if (!closeEl || !closeBubbleEl || !closeOverEl || !closeWrapEl[k] || !closeEl[k] || !closeBubbleEl[k] || !closeOverEl[k]) return;
            addElemEvent(closeBubbleEl[k], 'click', function(e) {
                e.stopImmediatePropagation();
                e.preventDefault();
            });
            addElemEvent(closeEl[k], 'click', onCloseClick.bind(null, {
                closeWrapEl:closeWrapEl[k],
                closeEl:closeEl[k],
                closeBubbleEl:closeBubbleEl[k],
                closeOverEl:closeOverEl[k],
                closeItemsEl:closeItemsEl
            }));
            addElemEvent(closeOverEl[k], 'click', hideClose.bind(null, {
                closeWrapEl:closeWrapEl[k],
                closeEl:closeEl[k],
                closeBubbleEl:closeBubbleEl[k],
                closeOverEl:closeOverEl[k],
                closeItemsEl:closeItemsEl
            }));
            for (var i = 0; i < closeItemsEl.length; i++) {
                addElemEvent(closeItemsEl[i], 'click', onCloseReasonClick.bind(null, {
                    closeWrapEl:closeWrapEl[k],
                    closeEl:closeEl[k],
                    closeBubbleEl:closeBubbleEl[k],
                    closeOverEl:closeOverEl[k],
                    closeItemsEl:closeItemsEl
                }));
            }
            if (showAdsownerEl.length) {
              for (var j = 0; j < showAdsownerEl.length; j++) {
                  addElemEvent(showAdsownerEl[j], 'click', onShowAdsownerClick.bind(null, {
                    closeWrapEl:closeWrapEl[k],
                    closeEl:closeEl[k],
                    closeBubbleEl:closeBubbleEl[k],
                    closeOverEl:closeOverEl[k],
                    closeItemsEl:closeItemsEl
                  }));
                }
            }
            if (copyLinkEl) {
              addElemEvent(copyLinkEl, 'click', onCopyLinkClick.bind(null, {
                    closeWrapEl:closeWrapEl[k],
                    closeEl:closeEl[k],
                    closeBubbleEl:closeBubbleEl[k],
                    closeOverEl:closeOverEl[k],
                    closeItemsEl:closeItemsEl
                }));
            }
        }
    }
    init();
})({rootId: '#b-119783550-211006679'});
