
    function reloadImage() {
        var placeholder = document.querySelector('#first-banner-item');
        var firstImage = document.querySelector('#first-banner-item .banner-image');
        var imgLarge = new Image();
        imgLarge.src = placeholder.dataset.src; 
        imgLarge.onload = function () {
            firstImage.src = imgLarge.src;
        };
    }
    
