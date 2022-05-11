// Background animation
$(document).ready(function(){
    CountArticleBackgroundSizes()
});

$(window).resize(function(){
    CountArticleBackgroundSizes()
});

function CountArticleBackgroundSizes(){
    $(".articleBackgrounds").css("top", 0);
    $(".articleBackgrounds").css("height", window.innerHeight);
}
