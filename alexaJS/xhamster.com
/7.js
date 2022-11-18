
            webVitals.getCLS(function(e){window.frontSpeedCLS=e.value;try{var n=[],t=[];if(e.entries&&e.entries instanceof Array){for(;e.entries.length;){var s=e.entries.shift(),a=s.sources[0].node;n.push(a.nodeName.toLowerCase()+(a.className?"."+a.className:"")),t.push(s.value.toFixed(5))}window.frontSpeedCLSElement=n.join(" ");window.frontSpeedCLSValue=t.join(" ")}}catch(e){}});
            webVitals.getFCP(function(result) {window.frontSpeedFCP = result.value});
            webVitals.getFID(function(result) {window.frontSpeedFID = result.value});
            webVitals.getLCP(function(result) {window.frontSpeedLCP = result.value;try{if(result.entries&&result.entries instanceof Array){var entry=result.entries.pop();entry.element instanceof HTMLElement&&(window.frontSpeedLCPElement=entry.element.tagName.toLowerCase()+" "+entry.element.className,window.frontSpeedLCPElementSize=screen.width+'x'+screen.height)}}catch(e){}});
        