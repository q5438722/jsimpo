
$(window).on("load", function() {
    var e = $('#virus-2020');
    e.click(function() {
        $.setCookie('virus-2020-clicked', '1');
        e.removeClass('dot');
    });
    var hasClicked = $.getCookie && $.getCookie('virus-2020-clicked');
    if (!hasClicked) {
        e.addClass('dot');
    }
});
