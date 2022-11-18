
    (function() {
        var themeLight = 'light';
        var themeDark = 'dark';
        var themeDevice = 'device';
        var deviceTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? themeDark : themeLight;
        var isDeviceThemeSupported = window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all';
        var getCookieTheme = function () {
            var cookie = { name: 'x_vdnkey', ttl: 356, isEssential: true };
            var name = cookie?.name || cookie;

            var matches = document.cookie.match(new RegExp(
                `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        };
        var initialTheme = getInitialTheme(getCookieTheme());
        if (!initialTheme && isDeviceThemeSupported) {
            document.documentElement.classList.add(deviceTheme);
        } else if (!isDeviceThemeSupported && initialTheme === themeDevice) {
            document.documentElement.classList.add(themeLight);
        } else {
            document.documentElement.classList.add(initialTheme);
        }

        function getInitialTheme(theme) {
            switch (theme) {
                case '0':
                    return themeLight;
                case '1':
                    return themeDark;
                default:
                    return null;
            }
        }
    })();
