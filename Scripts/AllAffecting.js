// Shifting banner background based on window location
var BackgroundShiftEffectMultiplier = 0.62; // Higher number goes faster down, max 1
var MiddleBannerShiftMultiplier = 1.0; // Lower number goes faster down

var TopBannerHeight = 0.0;
var HeaderHeight = 0.0;

var MaxEffectAt = 0.0;
var MinEffectAt = 0.0;
var MaxPixelShift = 0.0;

var MiddleBannerHeight = 0.0;
var MiddleBannerTop = 0.0;
var MiddleBannerMaxAddition = 0.0;

// Change banner shifting settings on document load an on window resize
$(document).ready(function(){
    InitializeBannerShiftSettings()
});

$(window).resize(function(){
    InitializeBannerShiftSettings()
});

function InitializeBannerShiftSettings(){
    var cssRoot = document.querySelector(':root');

    TopBannerHeight = parseFloat($(".TopBanner").css("height"));
    HeaderHeight = parseFloat($(".Header").css("height"));
    if(IsMobile){
        HeaderHeight *= 1.5 // Some issues with mobile
    }

    MaxEffectAt = HeaderHeight + TopBannerHeight;
    MinEffectAt = HeaderHeight;
    MaxPixelShift = TopBannerHeight * BackgroundShiftEffectMultiplier;

    MiddleBannerHeight = parseFloat($(".MiddleBannerImage").css("height"))
    MiddleBannerTop = TopBannerHeight * 0.01 *  parseFloat(getComputedStyle(cssRoot).getPropertyValue('--BannerTopPercentage'))
    MiddleBannerMaxAddition = TopBannerHeight - MiddleBannerHeight * MiddleBannerShiftMultiplier;
}

// moving the banner and logo middle of the banner
$(window).scroll(function(event){
    currentScroll = parseFloat($(window).scrollTop())

    // Between 0 and 1
    var currentEffect = (Math.max(0, (Math.min(currentScroll, MaxEffectAt) - MinEffectAt))) / MaxEffectAt;

    $(".TopBanner").css("background-position-y", MaxPixelShift * currentEffect);
    $(".MiddleBannerImage").css("top", MiddleBannerTop + currentEffect * MiddleBannerMaxAddition);
});
