
        if (window && window.performance && typeof window.performance.now === 'function') {
            !window.MptcfePerf ? window.MptcfePerf = { csrfpst: +new Date() } : window.MptcfePerf.csrfpst = +new Date()
        }
    