
        if (window && window.performance && typeof window.performance.now === 'function') {
            var currentTime = Math.round(window.performance.now())
            !window.MptcfePerf ? window.MptcfePerf = { fmp: currentTime } : window.MptcfePerf.fmp = currentTime
            !window.MptcfePerf ? window.MptcfePerf = { pltst: +new Date() - currentTime } : window.MptcfePerf.pltst = +new Date() - currentTime
            !window.MptcfePerf ? window.MptcfePerf = { fmpst: +new Date() } : window.MptcfePerf.fmpst = +new Date()
        }
    