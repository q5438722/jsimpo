
    (function dynamicLoadFooterCss(url) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.type='text/css';
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    })("//s.alicdn.com/@g/sc/footer/0.0.4/sc-footer/dist/footer.css")
