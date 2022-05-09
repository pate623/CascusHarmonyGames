// Centres the footer text vertically
$(document).ready(function(){
    CountPaddingTopForFooterElements()
});

$(window).resize(function(){
    CountPaddingTopForFooterElements()
});

function CountPaddingTopForFooterElements(){
    $('.FooterInfoText').each(function(){
        var newHeight = parseFloat($('.Footer').height() - $(this).height()) * 0.45;
         $(this).css("margin-top", newHeight)
     });
}
