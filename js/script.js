$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
    $("#gotop").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
    $("#btn-next").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
    $("#test").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});

menu_icon.onclick = function myFunction() {
    var tmp = document.getElementById("menu");

    if (tmp.className === "menu")
        tmp.className += " responsive";
    else
        tmp.className = "menu";
}

$(function() {
	var item = $('.menu__item');
    var tmp = document.getElementById("menu");

	$(item).on('click', function() {
        if (tmp.className === "menu responsive")
            tmp.className = "menu";
	});
});


$(document).ready(function() {
    $('.all').click(function() {
        $('.pwd').css('display', 'block');
        $('.pgd').css('display', 'block');
        $('.pfd').css('display', 'block');
        $('.all .portfolio__menu-link').css('background', '#16a086');
        $('.wd .portfolio__menu-link').css('background', '#1bbc9b');
        $('.gd .portfolio__menu-link').css('background', '#1bbc9b');
        $('.fd .portfolio__menu-link').css('background', '#1bbc9b');
    });
});

$(document).ready(function() {
    $('.wd').click(function() {
        $('.pwd').css('display', 'block');
        $('.pgd').css('display', 'none');
        $('.pfd').css('display', 'none');
        $('.all .portfolio__menu-link').css('background', '#1bbc9b');
        $('.wd .portfolio__menu-link').css('background', '#16a086');
        $('.gd .portfolio__menu-link').css('background', '#1bbc9b');
        $('.fd .portfolio__menu-link').css('background', '#1bbc9b');
    });
});

$(document).ready(function() {
    $('.gd').click(function() {
        $('.pgd').css('display', 'block');
        $('.pwd').css('display', 'none');
        $('.pfd').css('display', 'none');
        $('.all .portfolio__menu-link').css('background', '#1bbc9b');
        $('.wd .portfolio__menu-link').css('background', '#1bbc9b');
        $('.gd .portfolio__menu-link').css('background', '#16a086');
        $('.fd .portfolio__menu-link').css('background', '#1bbc9b');
    });
});

$(document).ready(function() {
    $('.fd').click(function() {
        $('.pfd').css('display', 'block');
        $('.pwd').css('display', 'none');
        $('.pgd').css('display', 'none');
        $('.all .portfolio__menu-link').css('background', '#1bbc9b');
        $('.wd .portfolio__menu-link').css('background', '#1bbc9b');
        $('.gd .portfolio__menu-link').css('background', '#1bbc9b');
        $('.fd .portfolio__menu-link').css('background', '#16a086');
    });
});
