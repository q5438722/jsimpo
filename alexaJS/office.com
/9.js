
    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    function scrollShyHeader() {
        const personalizationSignIn = document.getElementById("hero-banner-sign-back-in-to-office-365-link");
        const defaultSignUp = document.getElementById("hero-banner-sign-in-to-office-365-link");
        const shyHeader = document.getElementsByClassName("shy-header-edu")[0];
        if ((!personalizationSignIn || !elementInViewport(personalizationSignIn)) && (!defaultSignUp || !elementInViewport(defaultSignUp))) {
            if (shyHeader.className.indexOf("visible") === -1) {
                shyHeader.className += " visible";
            }
        }
        else {
            shyHeader.className = shyHeader.className.replace(" visible", "");
        }
    }
    window.addEventListener("scroll", scrollShyHeader);
