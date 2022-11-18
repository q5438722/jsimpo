
    if (window.FontFace) {
        var html = document.getElementsByTagName('html')[0];
        html.classList.add('no-icons');


        var icons = new window.FontFace(
            "xh-icons",
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/vaaa537ee82.xh-icons.woff2) format('woff2')," +
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/vabef049de6.xh-icons.woff) format('woff')," +
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/v39198373ae.xh-icons.ttf) format('truetype')," +
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/vf78c940885.xh-icons.eot) format('embedded-opentype')"
            , {
                style: "normal",
                weight: "400"
            }
        );

        document.fonts.add(icons);
        icons.loaded.then(
            function () {
                html.classList.remove('no-icons');
            }
        );
        icons.load();
    } else {
        var link = document.createElement('link');

        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = "https://static-lvlt.xhcdn.com/xh-desktop/css/v3d79617d4d.font.css";

        document.head.appendChild(link);
    }
