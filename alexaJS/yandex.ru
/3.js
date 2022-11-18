
    ;(function () {
        if(typeof window === 'undefined'){
            return;
        }
        var data = {"rid":"3145833572.95.1668774160534.38020","rum":{"params":{"reqid":"3145833572.95.1668774160534.38020","experiments":["679064","648979","679444","666276","507643","679923","682366","681291"],"clck":"https://clck.dzen.ru/click","scrollMetric":true,"scrollLatencyMetric":true,"sendClientUa":true,"sendUrlInResTiming":true,"sendAutoResTiming":true,"sendAutoElementTiming":false,"sendFirstRaf":false,"disableOnLoadTasks":false,"periodicStatsIntervalMs":15000,"maxTrafficCounters":1,"maxLongTaskCounters":10,"longTaskMetric":false},"vars":{"143":"28.1604.228.836","287":"137","-project":"zen","-page":"dzen-desktop","-version":"1.59.9","-env":"production","-platform":"desktop","-uid":"5648141711668774154"}},"env":"production","cookieOfTheDay":"bltsr","columnCount":3};
        var namespaceKey = "YandexZen";
        var namespace = window[namespaceKey] || (window[namespaceKey] = {});

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                namespace[key] = data[key];
            }
        }
        
    })();
