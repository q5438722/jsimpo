
(function(rootElementId) {
    /* getElemByClassName func for ie 8*/
if (!document.getElementsByClassName) {
  var indexOf = [].indexOf || function (prop) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] === prop) return i;
      }
      return -1;
    };
  getElementsByClassName = function (className, context) {
    className = (className + '').replace(/ +/, '');
    var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function () {
      var all = context.getElementsByTagName("*"),
        elements = [],
        i = 0;
      for (; i < all.length; i++) {
        if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements, all[i]) === -1) elements.push(all[i]);
      }
      return elements;
    })();
    return elems;
  };
  document.getElementsByClassName = function (className) {
    return getElementsByClassName(className, document);
  };

  if (Element) {
    Element.prototype.getElementsByClassName = function (className) {
      return getElementsByClassName(className, this);
    };
  }
}
/* end getElemByClassName func for ie 8*/
    function getFirstArrEl(el) {
        if (el && el.length) {
            el = el[0];
        }
        return el;
    }
    function getDisclaimerTextElem(rootEl) {
        return getFirstArrEl(rootEl.getElementsByClassName('js-trg-item-disclamer-text'));
    }
    function getDisclaimerStarElem(rootEl) {
        return getFirstArrEl(rootEl.getElementsByClassName('js-trg-item-disclamer-star'));
    }
    function getElementCurrentWidth(elem) {
        var size = elem.getClientRects();
        size = getFirstArrEl(size);
        return (!!size.width) ? size.width : size.right - size.left;
    }
    function getElemCurrentLeftStyle(elem) {
        return parseInt(elem.style.left) || 0;
    }
    function addClass(elem, className) {
        if (elem.className.indexOf(className) === -1) {
            elem.className += ' ' + className;
        }
    }
    function deleteClass(elem, className) {
        if (elem.className.indexOf(className) !== -1) {
            elem.className = elem.className.replace(' ' + className, '');
        }
    }
    function addCropLeftClass(elem) {
        addClass(elem, '_cleft');
    }
    function deleteCropLeftClass(elem) {
        deleteClass(elem, '_cleft');
    }
    function addCropRightClass(elem) {
        addClass(elem, '_cright');
    }
    function deleteCropRightClass(elem) {
        deleteClass(elem, '_cright');
    }
    function addDisclaimerScrollTimer(elem, rootElId) {
        TIMER = setInterval(function() {
            if (!checkRoot(rootElId)) {
                removeDisclaimerScrollTimer(elem);
                return;
            }
            var starEl = getDisclaimerStarElem(elem);
            if (starEl.length) {
                addClass(starEl, '_chide');
            }
            var textEl = getDisclaimerTextElem(elem);
            var leftOffset = getElemCurrentLeftStyle(textEl);
            var discWidth = getElementCurrentWidth(elem);
            var textElemWidth = getElementCurrentWidth(textEl);
            if (textElemWidth + leftOffset + STAR_SIZE_OFFSET < discWidth) {
                resetOffset = true;
                removeDisclaimerScrollTimer(elem);
                deleteCropRightClass(elem);
                addClass(elem, '_cnodots');
            } else {
                addCropLeftClass(elem);
                deleteClass(elem, '_cnodots');
                textEl.style.cssText = 'left: ' + (getElemCurrentLeftStyle(textEl) - 1) + 'px!important;';
            }
        }, 10);
    }
    function removeDisclaimerScrollTimer(elem) {
        clearInterval(TIMER);
    }
    function setMouseOutActions(elem) {
        if (!!resetOffset) {
            getDisclaimerTextElem(elem).style.left = 0;
            getDisclaimerTextElem(elem).style.cssText = '';
            var starEl = getDisclaimerStarElem(elem);
            if (starEl.length) {
                deleteClass(starEl, '_chide');
            }
            deleteClass(elem, '_cnodots');
            deleteCropLeftClass(elem);
            addCropRightClass(elem);
        }
        removeDisclaimerScrollTimer(elem);
        resetOffset = false;
    }
    function checkRoot(rootElId) {
        return !!document.getElementById(rootElId);
    }
    function initDisclamerScroll(scrollElem, rootElId) {
        addClass(scrollElem, '_cropped');
        var elemPosStyle = null;
        if (window.getComputedStyle && typeof window.getComputedStyle === 'function') {
            elemPosStyle = window.getComputedStyle(scrollElem, null).position;
        } else {
            elemPosStyle = scrollElem.currentStyle['position'];
        }
        if (elemPosStyle !== 'absolute') {
            addClass(scrollElem, '_crel');
        }
        addCropRightClass(scrollElem);
        if (scrollElem.className.indexOf('js-mobile') !== -1) {
            addClass(scrollElem, '_mask-cropped');
            scrollElem.onclick = function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                if (TAP) {
                    addDisclaimerScrollTimer(scrollElem, rootElId);
                    TAP = false;
                } else {
                    setMouseOutActions(scrollElem);
                    TAP = true;
                }
            };
        } else {
            scrollElem.onmouseover = function (e) {
                addDisclaimerScrollTimer(scrollElem, rootElId);
            };
            scrollElem.onmouseout = function (e) {
                setMouseOutActions(scrollElem);
            };
        }
    }
    function globInit() {
        var rootElem = document.getElementById(rootElementId);
        if (!rootElem) {
          return;
        }
        var elems = rootElem.getElementsByClassName('js-trg-item-disclamer');
        for (var i = 0; i < elems.length; i++) {
            var discElem = elems[i];
            var discWidth = getElementCurrentWidth(discElem);
            var discScrollWidth = discElem.scrollWidth;
            if (discScrollWidth > discWidth) {
                initDisclamerScroll(discElem, rootElementId);
                INIT = true;
                clearInterval(INIT_TIMER);
            }
            if (!isNaN(discWidth)) {
              clearInterval(INIT_TIMER);
            }
        }
    }
    var STAR_SIZE_OFFSET = 20;
    var TIMER = null;
    var INIT_TIMER = null;
    var INIT = false;
    var TAP = true;
    var resetOffset = false;
    
    globInit();
    
    INIT_TIMER = setInterval(function() {
        if (!INIT) {
          globInit();
        }
    }, 500);
})('b-119796155-232379478');
