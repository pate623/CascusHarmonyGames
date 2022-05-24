$(document).ready(function(){
    CountPaddingTopForFooterElements()
});

$(window).resize(function(){
    CountPaddingTopForFooterElements()
});

// Centres the footer text vertically
function CountPaddingTopForFooterElements(){
    $('.footerInfoText').each(function(){
        let newHeight = parseFloat($('.footer').height() - $(this).height()) * 0.45;
         $(this).css("margin-top", newHeight)
     });
}
