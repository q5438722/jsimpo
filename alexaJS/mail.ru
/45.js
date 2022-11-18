
(function(rootElemId, padType) {
    function addElemEvent(E, eventName, callback) {
        E.addEventListener ? E.addEventListener(eventName, callback, !1) : E.attachEvent && E.attachEvent("on" + eventName, callback);
    }
    function init() {
        var rootElem = document.getElementById(rootElemId);
        var disclaimer = rootElem.querySelectorAll('.js-trg-item-disclamer')[0];
        var info = rootElem.querySelectorAll('.js-trg-info')[0];
        if (!disclaimer || !info) {return;}
        if (padType === 'mobile') {
            addElemEvent(info, 'click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (rootElem.className.indexOf('_visible') !== -1) {rootElem.className = rootElem.className.replace(' _visible', '');} else {rootElem.className += ' _visible';}
            });
        } else {
            addElemEvent(info, 'mouseenter', function(e) {
                if (rootElem.className.indexOf('_visible') !== -1) {return;}
                rootElem.className += ' _visible';
            });
            addElemEvent(info, 'mouseleave', function(e) {
                if (rootElem.className.indexOf('_visible') === -1) {return;}
                rootElem.className = rootElem.className.replace(' _visible', '');
            });
        }
    }
    init();
})('b-119783550-211006679','');
