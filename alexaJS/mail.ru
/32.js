
  (function(root) {
    var domain = root.querySelector('.dtd-b-banner__domain');
    var image = root.querySelector('.dtd-b-banner__image');
    var text = domain.innerText.split('.');
  
    domain.innerText = text.slice(text.length - 2).join('.');

    var image2 = new Image();
    image2.src = 'https://r.mradx.net/img/47/DB7835.jpg';
    image2.crossOrigin = 'Anonymous';

    image2.onload = () => {
        if (image2.height === 607) {
            image.classList.add('dtd-b-banner__image-height');
        }
    }

    var handleAnimation = function (next, prev) {
        if (image.getAnimations()[0]) {
          var currentTime = Math.floor(image.getAnimations()[0].currentTime)
          var percent = next > prev ? next / prev : prev / next;
          image.style.animationDuration = `${next}s`;
          image.getAnimations()[0].currentTime = next > prev ? currentTime * percent : currentTime / percent;
        }
    }

    root.addEventListener('mouseenter', () => handleAnimation(3, 7));
    root.addEventListener('mouseleave', () => handleAnimation(7, 3));

  })(document.getElementById("b-119793764-210931468"));
