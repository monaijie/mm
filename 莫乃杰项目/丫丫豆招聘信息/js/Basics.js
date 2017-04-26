$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        direction: 'vertical',
        onSlideChangeStart: function(swiper){
        	if(swiper.activeIndex > 9){
        		$(".arrow").hide();
        	}else{
        		$(".arrow").show();
        	}
			$(".swiper_content").css({"display":"none"});
        },
        onTransitionEnd: function(swiper) {
			$(".swiper_content").eq(swiper.activeIndex).css({"display":"block"});
        }
   })
	
	
	
	//页面背景设置
    var length = $(".swiper-slide").length;
    for(var i = 0; i<length;i++){
    	var num = i;
    	$(".swiper-slide").eq(i).css({
		    "width": "100%",
			"height": "100%",
			"background-image": "url(img/background_"+num+".jpg)",
			"background-size": "cover",
			"background-position": "50% 50%",
			"background-origin": "content-box"
		})
    }
    
    //音乐开始/结束
    $("#audioBtn").click(function(){
    	var Audio = $("#Play")[0];
    	if($(this).hasClass('rotate')){
    		Audio.pause();
    		$(this).removeClass('rotate');
    	}else{
    		Audio.play();
    		$(this).addClass('rotate');
    	}
    })
    
    $(".content").click(function(){
    	location.href = "http://www.yayadou.com";
    })
})