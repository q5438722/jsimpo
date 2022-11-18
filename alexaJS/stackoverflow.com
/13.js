
(function () {
    var logos = document.querySelector('.js-carousel-logos');
    var logosShown = 4;
    var logosTotalPages = Math.ceil(logos.children.length / logosShown) - 1;
    var logosCurrentPage = 0;
    var logosCarouselTime = 4000;
    var logosCarouselPlayer;

    logos.classList.remove('o100');
    
    for (var i = 0; i < logos.children.length; ++i) {
        logos.appendChild(logos.children[Math.random() * i | 0]);
        logos.children[i].classList.add('d-none');
    }

    var logosCarouselNav = document.createElement('div');
    logosCarouselNav.className = 'ta-center py12';
    logos.parentNode.insertBefore(logosCarouselNav, logos.nextSibling);

    for (var i = 0; i <= logosTotalPages; ++i) {
        var navEl = document.createElement('span');
        navEl.className = 'js-carousel-logos-nav c-pointer w24 h6 bg-black-200 h:bg-black-400 d-inline-block bar-pill my6 mx4';

        navEl.setAttribute('data-page', i);
        navEl.addEventListener('click', showLogos);

        logosCarouselNav.appendChild(navEl);
    }

    function updateNav() {
        var navItems = document.querySelectorAll('.js-carousel-logos-nav');

        for (var i = 0; i < navItems.length; ++i) {
            if (i === logosCurrentPage) {
                navItems[i].classList.remove('bg-black-200');
                navItems[i].classList.add('bg-black-800');
            } else {
                navItems[i].classList.add('bg-black-200');
                navItems[i].classList.remove('bg-black-800');
            }
        }
    }

    function showLogos(evt) {
        logos.classList.add('o0');

        if (evt) {
            clearInterval(logosCarouselPlayer);
            logosCurrentPage = parseInt(evt.currentTarget.getAttribute('data-page') || 0);
        }
    
        setTimeout(function() {
            for (var i = 0; i < logos.children.length; ++i) {
                if (
                    (i >= logosShown * logosCurrentPage) &&
                    (i < (logosShown * logosCurrentPage) + logosShown)
                ) {
                    logos.children[i].classList.remove('d-none');
                } else {
                    logos.children[i].classList.add('d-none');
                }
            }

            logos.classList.remove('o0');

            updateNav();

            if (logosCurrentPage >= logosTotalPages) {
                logosCurrentPage = 0;
            } else {
                logosCurrentPage++;
            }
        }, 300);        
    }

    showLogos();

    logosCarouselPlayer = setInterval(function() { showLogos(); }, logosCarouselTime);
})(); 
