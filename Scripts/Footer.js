// Centres the footer text vertically
$(document).ready(function(){
    CountPaddingTopForFooterElements()
});

$(window).resize(function(){
    CountPaddingTopForFooterElements()
});

function CountPaddingTopForFooterElements(){
    $('.footerInfoText').each(function(){
        let newHeight = parseFloat($('.footer').height() - $(this).height()) * 0.45;
         $(this).css("margin-top", newHeight)
     });
}
