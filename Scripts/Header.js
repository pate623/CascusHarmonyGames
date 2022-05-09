var bMobileMenuIsOpen = false;

// Mobile header height
$(document).ready(function(){
	if(IsMobile){
        $(".Header").css({"height" : "12vw"});
        $(".ScrolledHeader").css({"height" : "12vw"});
    }
});

// Toggle mobile links menu visibility
$(document).ready(function(){
    $(".HeaderBurger_Mobile").click(function() {
        $(".HeaderLinks_Mobile").css("visibility", "visible");
        $(".HeaderCross_Mobile").css("visibility", "visible");
        $(".HeaderBurger_Mobile").css("visibility", "collapse");
        $(".HeaderBurger_Mobile").css("display", "none");
        $(".HeaderBurger_MobileScroll").css("visibility", "visible");

        $(".ScrolledHeader").css("visibility", "visible");
        bMobileMenuIsOpen = true;
    })
});

$(document).ready(function(){
    $(".HeaderCross_Mobile").click(function() {
        $(".HeaderLinks_Mobile").css("visibility", "collapse");
        $(".HeaderCross_Mobile").css("visibility", "collapse");
        $(".HeaderBurger_Mobile").css("visibility", "visible");
        $(".HeaderBurger_Mobile").css("display", "block");
        $(".HeaderBurger_MobileScroll").css("visibility", "collapse");

        $(".ScrolledHeader").css("visibility", "collapse");
        bMobileMenuIsOpen = false;

        if($(window).scrollTop() > 10){
            $(".ScrolledHeader").css("visibility", "visible");
            $(".HeaderBurger_Mobile").css("visibility", "visible");
            $(".HeaderBurger_Mobile").css("display", "block");
        }
    })
});

/*
/ Detect when user is scrolling up.
/ When they are scrolling up showcase the mobile header.
*/
$(document).ready(function(){
    if(IsMobile){
        let scrollingDownLastPosition;
        let scrollingUpLastPosition;
        let lastTickScrollPosition = 0;
        let bNavIsHidden = true;

        $(window).scroll(function(event){
            let currentTickScroll = $(this).scrollTop();

            if (currentTickScroll > lastTickScrollPosition){
                if(scrollingUpLastPosition+50 < $(window).scrollTop() && !bNavIsHidden){
                    hideNav();
                }
                scrollingDownLastPosition = $(window).scrollTop()
            }else{
                if(scrollingDownLastPosition-70 > $(window).scrollTop() && bNavIsHidden){
                    showNav();
                }
                scrollingUpLastPosition = $(window).scrollTop()
            }
            lastTickScrollPosition = currentTickScroll;        
        });
        
        function hideNav() { // Return back to normal CSS settings
            if(bMobileMenuIsOpen == false){
                bNavIsHidden = true
                $(".ScrolledHeader").css("visibility", "collapse");
                $(".HeaderBurger_MobileScroll").css("visibility", "collapse");
            }
        }

        function showNav() {
            bNavIsHidden = false
            if($(window).scrollTop() > 200){
                $(".ScrolledHeader").css("visibility", "visible");
                $(".HeaderBurger_MobileScroll").css("visibility", "visible");
            }else{
                $(".ScrolledHeader").css("visibility", "collapse");
                $(".HeaderBurger_MobileScroll").css("visibility", "collapse");
            }
        }
    }
});
