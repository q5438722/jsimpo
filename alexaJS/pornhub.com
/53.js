
        var myRawLazy = new LazyLoadImage();
        if (!myRawLazy.supportsObserver && typeof jQuery !== 'undefined' && typeof jQuery(document).ready === 'function') {
            jQuery(document).ready(function () {
                myRawLazy.init(page_params.lazyLoad);
            });
        } else {
            window.addEventListener('load', function() {
                myRawLazy.init(page_params.lazyLoad);
            }, false);
        }
    