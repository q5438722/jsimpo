(function() { if (typeof _bt === 'undefined' && typeof window._bt === 'undefined'){
var SITEID='cnn';
(function(b, t, r, a, i, n) {
    b['bt']=b['bt'] || function() {
        (b['_bt']=b['_bt']||[]).push(arguments);
    },
    i = t.createElement(r),
    n = t.getElementsByTagName(r)[0];
    i.async = 1;
    i.src = a;
    n.parentNode.insertBefore(i, n);
})(
    window,
    document,
    'script',
 	'https://cdn.boomtrain.com/p13n/'+SITEID+'/p13n.min.js'
);
bt('initialize', SITEID, {externalIds: {zync: '91d66869-1140-465c-8894-03bb91638b82:1668775845.8309944'}});
} })();