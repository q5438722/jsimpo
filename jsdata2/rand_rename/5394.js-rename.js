"use strict";function d(n,e){var t="<"+n+">";"string"===typeof e.children&&(t+=e.children);return Buffer.from(t+("</"+n+">"),"utf8")}var e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function f(n){var e=n.destination,t=n.completedChunks;n.completedChunks=[];e.cork();try{for(n=0;n<t.length;n++)e.write(t[n])}finally{e.uncork()}e.end()}function g(o){o.flowing=!0;setImmediate(function(){var n=o.children;o.children=null;if(!n||n.$$typeof===e){var t=n.type;n=n.props;"string"===typeof t&&(o.completedChunks.push(d(t,n)),o.flowing&&f(o),t=o.destination,"function"===typeof t.flush&&t.flush())}})}function h(n,e){return function(){e.flowing=!1;f(e)}}var k={pipeToNodeWritable:function(n,e){n={destination:e,children:n,completedChunks:[],flowing:!1};e.on("drain",h(e,n));g(n)}},l={default:k},m=l&&k||l;module.exports=m.default||m;