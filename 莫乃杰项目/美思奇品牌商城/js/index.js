
	$(function(){
		$("#myCarousel").swipe({
		
		swipeLeft:function(){$(this).carousel("next")},
		swipeRight:function(){$(this).carousel("prev")},
	})
})
$(function(){
		$("#myarouse").swipe({
		
		swipeLeft:function(){$(this).carousel("next")},
		swipeRight:function(){$(this).carousel("prev")},
	})
})


$('.voide img').click(function(){
				$('.voide img').css("display","none");	
				var video = $("#open");
				video[0].play();
			})