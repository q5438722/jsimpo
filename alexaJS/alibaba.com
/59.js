
    if(performance && performance.timing && performance.timing.navigationStart) {
        var navigationStart = performance.timing.navigationStart;
        window.__BB.extendParams.time1 = homeTimePage1 - navigationStart;
        window.__BB.extendParams.time2 = homeTimePage2 - navigationStart;
        window.__BB.extendParams.time3 = homeTimePage3 - navigationStart;
        window.__BB.extendParams.time4 = homeTimePage4 - navigationStart;
        window.__BB.extendParams.fetch = performance.timing.fetchStart - navigationStart;
        window.__BB.extendParams.dns = performance.timing.domainLookupStart - navigationStart;
        window.__BB.extendParams.tcp = performance.timing.connectStart - navigationStart;
        window.__BB.extendParams.request = performance.timing.requestStart - navigationStart;
        window.__BB.extendParams.response = performance.timing.responseEnd - navigationStart;
        window.__BB.extendParams.redirect = performance.timing.redirectEnd - navigationStart;
    }
