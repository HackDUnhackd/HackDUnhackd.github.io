$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();

});

/*
$(document).on('click', 'a[href^="#"]', function(e){
    var id = $(this).attr(href);
    var $id = $(id);
    if($id.lenght==0){
        return;
    }

    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate(scrollTop: pos);
});*/

