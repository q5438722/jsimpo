var Thumb = {
    onload: function(img) {
        window.thumbOnReady && window.thumbOnReady(img);
    },
    onerror: function (img) {
        var statusElement = img.parentNode.querySelector('.thumb-image-container__status');

        if (!statusElement) {
            var statusElement = document.createElement('div');
            statusElement.className = 'thumb-image-container__status';
            statusElement.innerHTML = '<i class="thumb-image-container__status-icon xh-icon photo-error2"></i><span class="thumb-image-container__status-text">Error loading thumb</span>';
            img.parentNode.insertBefore(statusElement, img.parentNode.firstChild);
        } else {
            statusElement.classList.remove('xh-helper-hidden');
        }

        img.classList.add('xh-helper-hidden');
        window.thumbOnReady && window.thumbOnReady(img, true);
    }
}

window.Thumb = Thumb;
