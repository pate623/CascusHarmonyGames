var MobileMenuIsOpen = false;

$(document).ready(function(){
    MobileHeaderHeight()
    InitializeButtons()
    DetectUpScroll()
});

// Mobile header height
function MobileHeaderHeight(){
	if(IsMobile){
        $(".header").css({"height" : "12vw"});
        $(".scrolledHeader").css({"height" : "12vw"});
    }
}

function InitializeButtons(){
    // Toggle mobile links menu visibility
    $(".headerBurger_Mobile").click(function() {
        $(".headerLinks_Mobile").css("visibility", "visible");
        $(".headerCross_Mobile").css("visibility", "visible");
        $(".headerBurger_Mobile").css("visibility", "collapse");
        $(".headerBurger_Mobile").css("display", "none");
        $(".headerBurger_MobileScroll").css("visibility", "visible");

        $(".scrolledHeader").css("visibility", "visible");
        MobileMenuIsOpen = true;
    })

    $(".headerCross_Mobile").click(function() {
        $(".headerLinks_Mobile").css("visibility", "collapse");
        $(".headerCross_Mobile").css("visibility", "collapse");
        $(".headerBurger_Mobile").css("visibility", "visible");
        $(".headerBurger_Mobile").css("display", "block");
        $(".headerBurger_MobileScroll").css("visibility", "collapse");

        $(".scrolledHeader").css("visibility", "collapse");
        MobileMenuIsOpen = false;

        if($(window).scrollTop() > 10){
            $(".scrolledHeader").css("visibility", "visible");
            $(".headerBurger_Mobile").css("visibility", "visible");
            $(".headerBurger_Mobile").css("display", "block");
        }
    })
}

/*
/ Detect when user is scrolling up.
/ When they are scrolling up showcase the mobile header.
*/
function DetectUpScroll(){
    if(IsMobile){
        let scrollingDownLastPosition;
        let scrollingUpLastPosition;
        let lastTickScrollPosition = 0;
        let navIsHidden = true;

        $(window).scroll(function(event){
            let currentTickScroll = $(this).scrollTop();

            if (currentTickScroll > lastTickScrollPosition){
                if(scrollingUpLastPosition+50 < $(window).scrollTop() && !navIsHidden){
                    hideNav();
                }
                scrollingDownLastPosition = $(window).scrollTop()
            }else{
                if(scrollingDownLastPosition-70 > $(window).scrollTop() && navIsHidden){
                    showNav();
                }
                scrollingUpLastPosition = $(window).scrollTop()
            }
            lastTickScrollPosition = currentTickScroll;        
        });
        
        function hideNav() { // Return back to normal CSS settings
            if(MobileMenuIsOpen == false){
                navIsHidden = true
                $(".scrolledHeader").css("visibility", "collapse");
                $(".headerBurger_MobileScroll").css("visibility", "collapse");
            }
        }

        function showNav() {
            navIsHidden = false
            if($(window).scrollTop() > 200){
                $(".scrolledHeader").css("visibility", "visible");
                $(".headerBurger_MobileScroll").css("visibility", "visible");
            }else{
                $(".scrolledHeader").css("visibility", "collapse");
                $(".headerBurger_MobileScroll").css("visibility", "collapse");
            }
        }
    }
}
