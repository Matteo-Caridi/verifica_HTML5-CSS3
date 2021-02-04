// Button up

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.gotopbtn').fadeIn();
    } else {
        $('.gotopbtn').fadeOut();
    }
});
