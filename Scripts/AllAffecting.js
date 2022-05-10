// Shifting banner background an logo based on window location
var BackgroundShiftEffectMultiplier = 0.62; // Higher number goes faster down, max 1
var MiddleBannerShiftMultiplier = 1.0; // Lower number goes faster down

var TopBannerHeight = 0.0;
var HeaderHeight = 0.0;

var MaxEffectAt = 0.0;
var MaxPixelShift = 0.0;

var MiddleBannerHeight = 0.0;
var MiddleBannerTop = 0.0;
var MiddleBannerMaxAddition = 0.0;

// Change banner shifting settings on document load an on window resize
$(document).ready(function(){
    InitializeBannerShiftSettings()
    CountNewBannerAndBackgroundLocation()
    CountArticleBackgroundSizes()
});

$(window).resize(function(){
    InitializeBannerShiftSettings()
    CountNewBannerAndBackgroundLocation()
    CountArticleBackgroundSizes()
});

$(window).scroll(function(event){
    CountNewBannerAndBackgroundLocation()
});

function InitializeBannerShiftSettings(){
    var cssRoot = document.querySelector(':root');

    TopBannerHeight = parseFloat($(".TopBanner").css("height"));
    HeaderHeight = parseFloat($(".Header").css("height"));
    if(IsMobile){
        HeaderHeight *= 1.5 // Some issues with mobile
    }

    MaxEffectAt = HeaderHeight + TopBannerHeight;
    MaxPixelShift = TopBannerHeight * BackgroundShiftEffectMultiplier;

    MiddleBannerHeight = parseFloat($(".MiddleBannerImage").css("height"))
    MiddleBannerTop = TopBannerHeight * 0.01 *  parseFloat(getComputedStyle(cssRoot).getPropertyValue('--BannerTopPercentage'))
    MiddleBannerMaxAddition = TopBannerHeight - MiddleBannerHeight * MiddleBannerShiftMultiplier;
}

function CountNewBannerAndBackgroundLocation(){
    currentScroll = parseFloat($(window).scrollTop())

    // Between 0 and 1
    var currentEffect = (Math.max(0, (Math.min(currentScroll, MaxEffectAt)))) / MaxEffectAt;

    $(".TopBanner").css("background-position-y", MaxPixelShift * currentEffect - (HeaderHeight * BackgroundShiftEffectMultiplier));
    $(".MiddleBannerImage").css("top", MiddleBannerTop + currentEffect * MiddleBannerMaxAddition);
}

function CountArticleBackgroundSizes(){
    let auxillaryBottom =  $(".Footer").position().top;

    $(".ArticleBackgrounds").css("top", TopBannerHeight + HeaderHeight);
    $(".ArticleBackgrounds").css("height", (auxillaryBottom - (TopBannerHeight + HeaderHeight)));
}