
                        var homeTimePage4 = homeTimePage4 || +new Date();
                        
                        (function() {
                            var firstImage = document.querySelector('#first-banner-item .banner-image');
                            var firstSrc = firstImage.src;
                            firstImage && firstImage.addEventListener && firstImage.addEventListener('load', function() {
                                if(performance && performance.getEntriesByName) {
                                    var time = performance.getEntriesByName(firstSrc);
                                    if(time && time[0]) {
                                        if(window.__BB && window.__BB.extendParams) {
                                            window.__BB.extendParams.imageStart = time[0].startTime;
                                            window.__BB.extendParams.imageEnd = time[0].responseEnd;
                                        }
                                    }
                                }
                            });
                        }());
                    