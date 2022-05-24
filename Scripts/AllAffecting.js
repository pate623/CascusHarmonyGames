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

$(document).ready(function(){
    CountBattleMagiciansVideoHeight()
    InitializeBannerShiftSettings()
    CountNewBannerAndBackgroundLocation()
    CountArticleBackgroundSizes()
});

$(window).resize(function(){
    CountBattleMagiciansVideoHeight()
    InitializeBannerShiftSettings()
    CountNewBannerAndBackgroundLocation()
    CountArticleBackgroundSizes()
});

$(window).scroll(function(event){
    CountNewBannerAndBackgroundLocation()
});

function InitializeBannerShiftSettings(){
    let cssRoot = document.querySelector(':root');

    TopBannerHeight = parseFloat($(".topBanner").css("height"));

    // Some issues with mobile
    let auxiliaryHeaderHeight = parseFloat($(".header").css("height"))
    HeaderHeight = auxiliaryHeaderHeight == 0 ? HeaderHeight : auxiliaryHeaderHeight
    if(IsMobile){
        HeaderHeight *= 1.5
    }

    MaxEffectAt = HeaderHeight + TopBannerHeight;
    MaxPixelShift = TopBannerHeight * BackgroundShiftEffectMultiplier;

    MiddleBannerHeight = parseFloat($(".middleBannerImage").css("height"))
    MiddleBannerTop = TopBannerHeight * 0.01 *  parseFloat(getComputedStyle(cssRoot).getPropertyValue('--BannerTopPercentage'))
    MiddleBannerMaxAddition = TopBannerHeight - MiddleBannerHeight * MiddleBannerShiftMultiplier;
}

function CountNewBannerAndBackgroundLocation(){
    currentScroll = parseFloat($(window).scrollTop())

    // Between 0 and 1
    let currentEffect = (Math.max(0, (Math.min(currentScroll, MaxEffectAt)))) / MaxEffectAt;

    $(".topBanner").css("background-position-y", MaxPixelShift * currentEffect - (HeaderHeight * BackgroundShiftEffectMultiplier));
    $(".middleBannerImage").css("top", MiddleBannerTop + currentEffect * MiddleBannerMaxAddition);
}

function CountArticleBackgroundSizes(){
    let auxillaryBottom =  $(".footer").position().top;

    $(".articleBackgrounds").css("top", TopBannerHeight + HeaderHeight);
    if(IsMobile){
        $(".articleBackgrounds").css("height", (auxillaryBottom - (TopBannerHeight + (HeaderHeight / 3))));
    }else{
        $(".articleBackgrounds").css("height", (auxillaryBottom - (TopBannerHeight + HeaderHeight)));
    }
}

function CountBattleMagiciansVideoHeight(){
    let videoWidth = parseFloat($(".battleMagiciansVideo").css("width"));
    $(".battleMagiciansVideo").css("height", videoWidth * 0.5625);
}
