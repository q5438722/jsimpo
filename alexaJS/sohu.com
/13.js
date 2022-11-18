
        if (window && window.performance && typeof window.performance.now === 'function') {
            !window.MptcfePerf ? window.MptcfePerf = { headst: +new Date() } : window.MptcfePerf.headst = +new Date()
        }
    