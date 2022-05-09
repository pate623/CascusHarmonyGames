BackgroundShiftEffectMultiplier = 0.4;
MiddleBannerShiftMultiplier = 0.16;

// Swipe detection for carousel
$(document).ready(function(){
	var carousel = document.querySelector("#KuiperBeltCarousel");
	
	carousel.addEventListener("touchstart", startTouch, false);
	carousel.addEventListener("touchmove", moveTouch, false);
	
	// Swipe Up / Down / Left / Right
	var initialX = null;
	var initialY = null;
	
	function startTouch(e) {
	    initialX = e.touches[0].clientX;
	    initialY = e.touches[0].clientY;
	};
	
	function moveTouch(e) {
	    if (initialX === null || initialY === null) { return; }

	    var currentX = e.touches[0].clientX;
	    var currentY = e.touches[0].clientY;
	
	    var diffX = initialX - currentX;
	    var diffY = initialY - currentY;
	
	    if (Math.abs(diffX) > Math.abs(diffY)) { // Sliding horizontally
	        if (diffX > 0) { // swiped left
                $('.carousel').carousel('next')
	        }else{ // swiped right
                $('.carousel').carousel('prev')
	        }
	    }

	    initialX = null;
	    initialY = null;
	    e.preventDefault();
	};
})
