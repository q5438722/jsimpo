
    var isPwaVersion = Boolean(
        window.matchMedia('(display-mode: standalone)').matches
        || window.navigator.standalone
        || (-1 !== document.referrer.indexOf("android-app://"))
    );
