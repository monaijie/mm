$(document).ready(function(){
		$(".navs li").hover(function(){
			$(this).find("dl").stop(true).slideToggle(500);
		})
})